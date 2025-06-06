// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  BatchObservableResult,
  Meter,
  ObservableGauge,
  ObservableResult,
} from "@opentelemetry/api";
import { diag } from "@opentelemetry/api";
import type { PeriodicExportingMetricReaderOptions } from "@opentelemetry/sdk-metrics";
import { MeterProvider, PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import type { AzureMonitorExporterOptions } from "../../index.js";
import * as ai from "../../utils/constants/applicationinsights.js";
import { StatsbeatMetrics } from "./statsbeatMetrics.js";
import type {
  CommonStatsbeatProperties,
  NetworkStatsbeatProperties,
  StatsbeatOptions,
} from "./types.js";
import { StatsbeatCounter, STATSBEAT_LANGUAGE, NetworkStatsbeat } from "./types.js";
import { AzureMonitorStatsbeatExporter } from "./statsbeatExporter.js";
import { ENV_DISABLE_STATSBEAT } from "../../Declarations/Constants.js";
import { getAttachType } from "../../utils/metricUtils.js";

export class NetworkStatsbeatMetrics extends StatsbeatMetrics {
  private static instance: NetworkStatsbeatMetrics | null = null;
  private disableNonEssentialStatsbeat: boolean = !!process.env[ENV_DISABLE_STATSBEAT];
  private commonProperties: CommonStatsbeatProperties;
  private networkProperties: NetworkStatsbeatProperties;
  private isInitialized: boolean = false;
  private statsCollectionShortInterval: number = 900000; // 15 minutes

  private networkStatsbeatCollection: Array<NetworkStatsbeat> = [];
  private networkStatsbeatMeter: Meter;
  private networkStatsbeatMeterProvider: MeterProvider;
  private networkAzureExporter: AzureMonitorStatsbeatExporter;

  // Custom dimensions
  private cikey: string;
  private runtimeVersion: string;
  private language: string;
  private version: string;
  private attach: string = getAttachType();

  // Observable Gauges
  private successCountGauge: ObservableGauge;
  private failureCountGauge: ObservableGauge;
  private retryCountGauge: ObservableGauge;
  private throttleCountGauge: ObservableGauge;
  private exceptionCountGauge: ObservableGauge;
  private averageDurationGauge: ObservableGauge;
  // Non-essential Statsbeat Gauges
  private readFailureGauge: ObservableGauge | undefined;
  private writeFailureGauge: ObservableGauge | undefined;

  // Network attributes
  private connectionString: string;
  private endpointUrl: string;
  private host: string;

  constructor(options: StatsbeatOptions) {
    super();
    this.connectionString = super.getConnectionString(options.endpointUrl);
    const exporterConfig: AzureMonitorExporterOptions = {
      connectionString: this.connectionString,
    };

    this.networkAzureExporter = new AzureMonitorStatsbeatExporter(exporterConfig);
    // Exports Network Statsbeat every 15 minutes
    const networkMetricReaderOptions: PeriodicExportingMetricReaderOptions = {
      exporter: this.networkAzureExporter,
      exportIntervalMillis: options.networkCollectionInterval || this.statsCollectionShortInterval, // 15 minutes
    };
    this.networkStatsbeatMeterProvider = new MeterProvider({
      readers: [new PeriodicExportingMetricReader(networkMetricReaderOptions)],
    });

    this.networkStatsbeatMeter = this.networkStatsbeatMeterProvider.getMeter(
      "Azure Monitor Network Statsbeat",
    );

    this.endpointUrl = options.endpointUrl;
    this.runtimeVersion = process.version;
    this.language = STATSBEAT_LANGUAGE;
    this.version = ai.packageVersion;
    this.host = this.getShortHost(options.endpointUrl);
    this.cikey = options.instrumentationKey;

    this.successCountGauge = this.networkStatsbeatMeter.createObservableGauge(
      StatsbeatCounter.SUCCESS_COUNT,
    );
    this.failureCountGauge = this.networkStatsbeatMeter.createObservableGauge(
      StatsbeatCounter.FAILURE_COUNT,
    );
    this.retryCountGauge = this.networkStatsbeatMeter.createObservableGauge(
      StatsbeatCounter.RETRY_COUNT,
    );
    this.throttleCountGauge = this.networkStatsbeatMeter.createObservableGauge(
      StatsbeatCounter.THROTTLE_COUNT,
    );
    this.exceptionCountGauge = this.networkStatsbeatMeter.createObservableGauge(
      StatsbeatCounter.EXCEPTION_COUNT,
    );
    this.averageDurationGauge = this.networkStatsbeatMeter.createObservableGauge(
      StatsbeatCounter.AVERAGE_DURATION,
    );
    if (!this.disableNonEssentialStatsbeat) {
      this.readFailureGauge = this.networkStatsbeatMeter.createObservableGauge(
        StatsbeatCounter.READ_FAILURE_COUNT,
      );
      this.writeFailureGauge = this.networkStatsbeatMeter.createObservableGauge(
        StatsbeatCounter.WRITE_FAILURE_COUNT,
      );
    }

    this.isInitialized = true;
    this.initialize();

    this.commonProperties = {
      os: this.os,
      rp: this.resourceProvider,
      cikey: this.cikey,
      runtimeVersion: this.runtimeVersion,
      language: this.language,
      version: this.version,
      attach: this.attach,
    };

    this.networkProperties = {
      endpoint: this.endpointUrl,
      host: this.host,
    };
  }

  public shutdown(): Promise<void> {
    return this.networkStatsbeatMeterProvider.shutdown();
  }

  private async initialize(): Promise<void> {
    try {
      await super.getResourceProvider();

      // Add network observable callbacks
      this.successCountGauge.addCallback(this.successCallback.bind(this));
      this.networkStatsbeatMeter.addBatchObservableCallback(this.failureCallback.bind(this), [
        this.failureCountGauge,
      ]);
      this.networkStatsbeatMeter.addBatchObservableCallback(this.retryCallback.bind(this), [
        this.retryCountGauge,
      ]);
      this.networkStatsbeatMeter.addBatchObservableCallback(this.throttleCallback.bind(this), [
        this.throttleCountGauge,
      ]);
      this.networkStatsbeatMeter.addBatchObservableCallback(this.exceptionCallback.bind(this), [
        this.exceptionCountGauge,
      ]);
      if (!this.disableNonEssentialStatsbeat) {
        this.readFailureGauge?.addCallback(this.readFailureCallback.bind(this));
        this.writeFailureGauge?.addCallback(this.writeFailureCallback.bind(this));
      }
      this.averageDurationGauge.addCallback(this.durationCallback.bind(this));
    } catch (error) {
      diag.debug("Call to get the resource provider failed.");
    }
  }

  // Observable gauge callbacks
  private successCallback(observableResult: ObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    // Only send metrics if count is greater than zero
    if (counter.totalSuccessfulRequestCount > 0) {
      const attributes = { ...this.commonProperties, ...this.networkProperties };
      observableResult.observe(counter.totalSuccessfulRequestCount, attributes);
      counter.totalSuccessfulRequestCount = 0;
    }
  }

  private failureCallback(observableResult: BatchObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    /*
      Takes the failureCountGauge, value (of the counter), and attributes
      create a unqiue counter based on statusCode as well
      append statusCode to attributes so the newly created attributes are unique.
    */
    const attributes = { ...this.networkProperties, ...this.commonProperties, statusCode: 0 };

    // For each { statusCode -> count } mapping, call observe, passing the count and attributes that include the statusCode
    for (let i = 0; i < counter.totalFailedRequestCount.length; i++) {
      // Only send metrics if count is greater than zero
      if (counter.totalFailedRequestCount[i].count > 0) {
        attributes.statusCode = counter.totalFailedRequestCount[i].statusCode;
        observableResult.observe(this.failureCountGauge, counter.totalFailedRequestCount[i].count, {
          ...attributes,
        });
        counter.totalFailedRequestCount[i].count = 0;
      }
    }
  }

  private retryCallback(observableResult: BatchObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const attributes = { ...this.networkProperties, ...this.commonProperties, statusCode: 0 };

    for (let i = 0; i < counter.retryCount.length; i++) {
      // Only send metrics if count is greater than zero
      if (counter.retryCount[i].count > 0) {
        attributes.statusCode = counter.retryCount[i].statusCode;
        observableResult.observe(this.retryCountGauge, counter.retryCount[i].count, {
          ...attributes,
        });
        counter.retryCount[i].count = 0;
      }
    }
  }

  private throttleCallback(observableResult: BatchObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const attributes = { ...this.networkProperties, ...this.commonProperties, statusCode: 0 };

    for (let i = 0; i < counter.throttleCount.length; i++) {
      // Only send metrics if count is greater than zero
      if (counter.throttleCount[i].count > 0) {
        attributes.statusCode = counter.throttleCount[i].statusCode;
        observableResult.observe(this.throttleCountGauge, counter.throttleCount[i].count, {
          ...attributes,
        });
        counter.throttleCount[i].count = 0;
      }
    }
  }

  private exceptionCallback(observableResult: BatchObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const attributes = { ...this.networkProperties, ...this.commonProperties, exceptionType: "" };

    for (let i = 0; i < counter.exceptionCount.length; i++) {
      // Only send metrics if count is greater than zero
      if (counter.exceptionCount[i].count > 0) {
        attributes.exceptionType = counter.exceptionCount[i].exceptionType;
        observableResult.observe(this.exceptionCountGauge, counter.exceptionCount[i].count, {
          ...attributes,
        });
        counter.exceptionCount[i].count = 0;
      }
    }
  }

  private durationCallback(observableResult: ObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const attributes = { ...this.networkProperties, ...this.commonProperties };
    for (let i = 0; i < this.networkStatsbeatCollection.length; i++) {
      const currentCounter = this.networkStatsbeatCollection[i];
      currentCounter.time = Number(new Date());
      const intervalRequests =
        currentCounter.totalRequestCount - currentCounter.lastRequestCount || 0;

      // Only calculate average if there were actual requests
      if (intervalRequests > 0) {
        currentCounter.averageRequestExecutionTime =
          (currentCounter.intervalRequestExecutionTime -
            currentCounter.lastIntervalRequestExecutionTime) /
            intervalRequests || 0;
      } else {
        currentCounter.averageRequestExecutionTime = 0;
      }

      currentCounter.lastIntervalRequestExecutionTime = currentCounter.intervalRequestExecutionTime; // reset
      currentCounter.lastRequestCount = currentCounter.totalRequestCount;
      currentCounter.lastTime = currentCounter.time;
    }

    // Only report if there's a non-zero average duration
    if (counter.averageRequestExecutionTime > 0) {
      observableResult.observe(counter.averageRequestExecutionTime, attributes);
      counter.averageRequestExecutionTime = 0;
    }
  }

  private readFailureCallback(observableResult: ObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    // Only send metrics if count is greater than zero
    if (counter.totalReadFailureCount > 0) {
      const attributes = { ...this.commonProperties, ...this.networkProperties };
      observableResult.observe(counter.totalReadFailureCount, attributes);
      counter.totalReadFailureCount = 0;
    }
  }

  private writeFailureCallback(observableResult: ObservableResult): void {
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    // Only send metrics if count is greater than zero
    if (counter.totalWriteFailureCount > 0) {
      const attributes = { ...this.commonProperties, ...this.networkProperties };
      observableResult.observe(counter.totalWriteFailureCount, attributes);
      counter.totalWriteFailureCount = 0;
    }
  }

  // Public methods to increase counters
  public countSuccess(duration: number): void {
    if (!this.isInitialized) {
      return;
    }
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    counter.totalRequestCount++;
    counter.totalSuccessfulRequestCount++;
    counter.intervalRequestExecutionTime += duration;
  }

  public countFailure(duration: number, statusCode: number): void {
    if (!this.isInitialized) {
      return;
    }
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const currentStatusCounter = counter.totalFailedRequestCount.find(
      (statusCounter) => statusCode === statusCounter.statusCode,
    );

    if (currentStatusCounter) {
      currentStatusCounter.count++;
    } else {
      counter.totalFailedRequestCount.push({ statusCode: statusCode, count: 1 });
    }

    counter.totalRequestCount++;
    counter.intervalRequestExecutionTime += duration;
  }

  public countRetry(statusCode: number): void {
    if (!this.isInitialized) {
      return;
    }
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const currentStatusCounter = counter.retryCount.find(
      (statusCounter) => statusCode === statusCounter.statusCode,
    );

    if (currentStatusCounter) {
      currentStatusCounter.count++;
    } else {
      counter.retryCount.push({ statusCode: statusCode, count: 1 });
    }
  }

  public countThrottle(statusCode: number): void {
    if (!this.isInitialized) {
      return;
    }
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const currentStatusCounter = counter.throttleCount.find(
      (statusCounter) => statusCode === statusCounter.statusCode,
    );

    if (currentStatusCounter) {
      currentStatusCounter.count++;
    } else {
      counter.throttleCount.push({ statusCode: statusCode, count: 1 });
    }
  }

  public countReadFailure(): void {
    if (!this.isInitialized || this.disableNonEssentialStatsbeat) {
      return;
    }
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    counter.totalReadFailureCount++;
  }

  public countWriteFailure(): void {
    if (!this.isInitialized || this.disableNonEssentialStatsbeat) {
      return;
    }
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    counter.totalWriteFailureCount++;
  }

  public countException(exceptionType: Error): void {
    if (!this.isInitialized) {
      return;
    }
    const counter: NetworkStatsbeat = this.getNetworkStatsbeatCounter(this.endpointUrl, this.host);
    const currentErrorCounter = counter.exceptionCount.find(
      (exceptionCounter) => exceptionType.name === exceptionCounter.exceptionType,
    );
    if (currentErrorCounter) {
      currentErrorCounter.count++;
    } else {
      counter.exceptionCount.push({ exceptionType: exceptionType.name, count: 1 });
    }
  }

  // Gets a networkStatsbeat counter if one exists for the given endpoint
  private getNetworkStatsbeatCounter(endpoint: string, host: string): NetworkStatsbeat {
    // Check if the counter is available
    for (let i = 0; i < this.networkStatsbeatCollection.length; i++) {
      // Same object
      if (
        endpoint === this.networkStatsbeatCollection[i].endpoint &&
        host === this.networkStatsbeatCollection[i].host
      ) {
        return this.networkStatsbeatCollection[i];
      }
    }
    // Create a new counter if not found
    const newCounter = new NetworkStatsbeat(endpoint, host);
    this.networkStatsbeatCollection.push(newCounter);
    return newCounter;
  }

  private getShortHost(originalHost: string): string {
    let shortHost = originalHost;
    try {
      const hostRegex = new RegExp(/^https?:\/\/(?:www\.)?([^/.-]+)/);
      const res = hostRegex.exec(originalHost);
      if (res !== null && res.length > 1) {
        shortHost = res[1];
      }
      shortHost = shortHost.replace(".in.applicationinsights.azure.com", "");
    } catch (error) {
      diag.debug("Failed to get the short host name.");
    }
    return shortHost;
  }

  /**
   * Singleton Network Statsbeat Metrics instance.
   * @internal
   */
  public static getInstance(options: StatsbeatOptions): NetworkStatsbeatMetrics {
    if (!NetworkStatsbeatMetrics.instance) {
      NetworkStatsbeatMetrics.instance = new NetworkStatsbeatMetrics(options);
    }
    return NetworkStatsbeatMetrics.instance;
  }
}
