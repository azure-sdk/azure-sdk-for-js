// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/// <reference lib="esnext.asynciterable" />

import type { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { bearerTokenAuthenticationPolicy } from "@azure/core-rest-pipeline";
import type { PageSettings, PagedAsyncIterableIterator } from "@azure/core-paging";
import type { TokenCredential } from "@azure/core-auth";
import { isTokenCredential } from "@azure/core-auth";
import type { OperationOptions } from "@azure/core-client";
import type { ExtendedCommonClientOptions } from "@azure/core-http-compat";
import { GeneratedClient } from "./generated/generatedClient.js";
import type { MetricsAdvisorKeyCredential } from "./metricsAdvisorKeyCredentialPolicy.js";
import { createMetricsAdvisorKeyCredentialPolicy } from "./metricsAdvisorKeyCredentialPolicy.js";
import type {
  AlertQueryTimeMode,
  AlertsPageResponse,
  AnomaliesPageResponse,
  AnomalyAlert,
  AnomalyIncident,
  DataPointAnomaly,
  DimensionKey,
  DimensionValuesPageResponse,
  EnrichmentStatus,
  GetIncidentRootCauseResponse,
  GetMetricEnrichedSeriesDataResponse,
  GetMetricSeriesDataResponse,
  IncidentsPageResponse,
  MetricEnrichmentStatusPageResponse,
  MetricFeedbackPageResponse,
  MetricFeedbackUnion,
  MetricSeriesDefinition,
  MetricSeriesPageResponse,
} from "./models.js";
import type {
  FeedbackQueryTimeMode,
  FeedbackType,
  SeverityFilterCondition,
} from "./generated/models/index.js";
import { fromServiceMetricFeedbackUnion, toServiceMetricFeedbackUnion } from "./transforms.js";
import {
  DEFAULT_COGNITIVE_SCOPE,
  MetricsAdvisorLoggingAllowedHeaderNames,
  MetricsAdvisorLoggingAllowedQueryParameters,
} from "./constants.js";
import { logger } from "./logger.js";
import { tracingClient } from "./tracing.js";

/**
 * Client options used to configure Metrics Advisor API requests.
 */
export interface MetricsAdvisorClientOptions extends ExtendedCommonClientOptions {}

/**
 * Options for listing incidents for detection configurations
 */
export interface ListIncidentsForDetectionConfigurationOptions extends OperationOptions {
  /** Dimension Filter */
  seriesGroupKeys?: DimensionKey[]; // lifted
}

/**
 * Options for retreiving metric enriched series data
 */
export interface GetMetricEnrichedSeriesDataOptions extends OperationOptions {}

/**
 * Options for listing anomalies for detection configurations
 */
export interface ListAnomaliesForDetectionConfigurationOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
  /** Dimension Filter */
  seriesGroupKeys?: DimensionKey[];
  /** Severity Filter */
  severityFilter?: SeverityFilterCondition;
}

/**
 * Options for listing anomalies for alert configurations
 */
export interface ListAnomaliesForAlertConfigurationOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
}

/**
 * Options for listing incidents for an alert
 */
export interface ListIncidentsForAlertOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
}

/**
 * Options for listing dimension values for detection configurations
 */
export interface ListAnomalyDimensionValuesOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
  /** Specify series group to filter results */
  seriesGroupKey?: DimensionKey;
}

/**
 * Options for listing feedbacks
 */
export interface ListFeedbackOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
  /**
   * filter when listing feedbacks
   */
  filter?: {
    dimensionKey?: DimensionKey;
    /**
     * filter feedbacks by type
     */
    feedbackType?: FeedbackType;
    /**
     * start time filter under chosen time mode
     */
    startTime?: Date | string;
    /**
     * end time filter under chosen time mode
     */
    endTime?: Date | string;
    /**
     * time mode to filter feedback
     */
    timeMode?: FeedbackQueryTimeMode;
  };
}

/**
 * Options for listing series definitions of a metric
 */
export interface ListMetricSeriesDefinitionsOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
  /**
   * filter specific dimension name and values
   */
  dimensionFilter?: Record<string, string[]>;
}

/**
 * Options for retreiving metric series data
 */
export interface GetMetricSeriesDataOptions extends OperationOptions {}

/**
 * Options for listing alerts
 */
export interface ListAlertsOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
}

/**
 * Options for listing dimension values of a metric
 */
export interface ListMetricDimensionValuesOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
  /**
   * dimension value to be filtered
   */
  dimensionValueFilter?: string;
}

/**
 * Options for listing metric enrichment status
 */
export interface ListMetricEnrichmentStatusOptions extends OperationOptions {
  /** Number of items to skip */
  skip?: number;
}

/**
 * Client class for interacting with Azure Metrics Advisor Service to query alerts/incidents/anomalies, diagnose incidents, provide metric feedback
 */
export class MetricsAdvisorClient {
  /**
   * Url to service endpoint
   */
  public readonly endpointUrl: string;

  /**
   * A reference to the auto-generated MetricsAdvisor HTTP client.
   */
  private readonly client: GeneratedClient;

  /**
   * Creates an instance of MetricsAdvisorClient.
   *
   * Example usage:
   * ```ts snippet:ReadmeSampleCreateClient_KeyCredential
   * import {
   *   MetricsAdvisorKeyCredential,
   *   MetricsAdvisorClient,
   *   MetricsAdvisorAdministrationClient,
   * } from "@azure/ai-metrics-advisor";
   *
   * const credential = new MetricsAdvisorKeyCredential("<subscription Key>", "<API key>");
   *
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   * const adminClient = new MetricsAdvisorAdministrationClient("<endpoint>", credential);
   * ```
   * @param endpointUrl - Url to an Azure Metrics Advisor service endpoint
   * @param credential - Used to authenticate requests to the service.
   * @param options - Used to configure the Metrics Advisor client.
   */
  constructor(
    endpointUrl: string,
    credential: TokenCredential | MetricsAdvisorKeyCredential,
    options: MetricsAdvisorClientOptions = {},
  ) {
    this.endpointUrl = endpointUrl;
    const internalPipelineOptions: InternalPipelineOptions = {
      ...options,
      loggingOptions: {
        logger: logger.info,
        additionalAllowedHeaderNames: MetricsAdvisorLoggingAllowedHeaderNames,
        additionalAllowedQueryParameters: MetricsAdvisorLoggingAllowedQueryParameters,
      },
    };
    this.client = new GeneratedClient(this.endpointUrl, internalPipelineOptions);
    const authPolicy = isTokenCredential(credential)
      ? bearerTokenAuthenticationPolicy({ credential, scopes: DEFAULT_COGNITIVE_SCOPE })
      : createMetricsAdvisorKeyCredentialPolicy(credential);
    this.client.pipeline.addPolicy(authPolicy);
  }

  /**
   * List alert segments for alerting configuration
   */
  private async *listSegmentOfAlerts(
    alertConfigId: string,
    startTime: Date,
    endTime: Date,
    timeMode: AlertQueryTimeMode,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListAlertsOptions = {},
  ): AsyncIterableIterator<AlertsPageResponse> {
    let segmentResponse;
    const optionsBody = {
      startTime: startTime,
      endTime: endTime,
      timeMode: timeMode,
    };
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getAlertsByAnomalyAlertingConfiguration(
        alertConfigId,
        optionsBody,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const alerts = segmentResponse.value?.map((a) => {
        return {
          id: a.alertId!,
          alertConfigId: alertConfigId,
          createdOn: a.createdTime,
          modifiedOn: a.modifiedTime,
          timestamp: a.timestamp?.getTime(),
        };
      });
      const resultArray = Object.defineProperty(alerts || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;
      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse = await this.client.getAlertsByAnomalyAlertingConfigurationNext(
        continuationToken,
        optionsBody,
        options,
      );
      const alerts = segmentResponse.value?.map((a) => {
        return {
          id: a.alertId!,
          alertConfigId: alertConfigId,
          createdOn: a.createdTime,
          modifiedOn: a.modifiedTime,
          timestamp: a.timestamp?.getTime(),
        };
      });
      const resultArray = Object.defineProperty(alerts || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;
      continuationToken = segmentResponse.nextLink;
    }
  }

  /**
   * List alert items for alerting configuration
   */
  private async *listItemsOfAlerts(
    alertConfigId: string,
    startTime: Date,
    endTime: Date,
    timeMode: AlertQueryTimeMode,
    options: ListAlertsOptions,
  ): AsyncIterableIterator<AnomalyAlert> {
    for await (const segment of this.listSegmentOfAlerts(
      alertConfigId,
      startTime,
      endTime,
      timeMode,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list alerts for an alert configuration.
   *
   * `.byPage()` returns an async iterable iterator to list the alerts in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListAlerts
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const alerts = client.listAlerts(
   *   "<alert config id>",
   *   new Date(Date.UTC(2020, 8, 1)),
   *   new Date(Date.UTC(2020, 8, 12)),
   *   "AnomalyTime",
   * );
   *
   * // Iterate via for-await-of
   * for await (const alert of alerts) {
   *   console.log(alert.id);
   * }
   *
   * // Iterate via generator
   * const iter = alerts[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.id);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of alerts.byPage()) {
   *   for (const alert of page) {
   *     console.log(alert.id);
   *   }
   * }
   * ```
   *
   * @param alertConfigId - Anomaly alerting configuration unique id
   * @param startTime - The start of time range to query alert items for alerting configuration
   * @param endTime - The end of time range to query alert items for alerting configuration
   * @param timeMode - Query time mode - "AnomalyTime" | "CreatedTime" | "ModifiedTime"
   * @param options - The options parameter.
   */
  public listAlerts(
    alertConfigId: string,
    startTime: Date | string,
    endTime: Date | string,
    timeMode: AlertQueryTimeMode,
    options: ListAlertsOptions = {},
  ): PagedAsyncIterableIterator<AnomalyAlert, AlertsPageResponse> {
    const iter = this.listItemsOfAlerts(
      alertConfigId,
      typeof startTime === "string" ? new Date(startTime) : startTime,
      typeof endTime === "string" ? new Date(endTime) : endTime,
      timeMode,
      options,
    );
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns an AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentOfAlerts(
          alertConfigId,
          typeof startTime === "string" ? new Date(startTime) : startTime,
          typeof endTime === "string" ? new Date(endTime) : endTime,
          timeMode,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  /**
   * List anomalies for alerting configuration - segments
   */
  private async *listSegmentsOfAnomaliesForAlert(
    alertConfigId: string,
    alertId: string,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListAnomaliesForAlertConfigurationOptions = {},
  ): AsyncIterableIterator<AnomaliesPageResponse> {
    let segmentResponse;
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getAnomaliesFromAlertByAnomalyAlertingConfiguration(
        alertConfigId,
        alertId,
        {
          skip: options.skip,
          maxpagesize: maxPageSize,
        },
      );
      const anomalies = segmentResponse.value?.map((a) => {
        return {
          detectionConfigurationId: a.anomalyDetectionConfigurationId!,
          metricId: a.metricId,
          createdOn: a.createdTime,
          modifiedOn: a.modifiedTime,
          seriesKey: a.dimension,
          severity: a.property.anomalySeverity,
          status: a.property.anomalyStatus,
          timestamp: a.timestamp.getTime(),
        };
      });
      const resultArray = Object.defineProperty(anomalies || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;
      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse = await this.client.getAnomaliesFromAlertByAnomalyAlertingConfigurationNext(
        alertConfigId,
        alertId,
        continuationToken,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const anomalies = segmentResponse.value?.map((a) => {
        return {
          detectionConfigurationId: a.anomalyDetectionConfigurationId!,
          metricId: a.metricId,
          createdOn: a.createdTime,
          modifiedOn: a.modifiedTime,
          seriesKey: a.dimension,
          severity: a.property.anomalySeverity,
          status: a.property.anomalyStatus,
          timestamp: a.timestamp.getTime(),
        };
      });
      const resultArray = Object.defineProperty(anomalies || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;
      continuationToken = segmentResponse.nextLink;
    }
  }

  /**
   * listing anomalies for alerting configuration - items
   */
  private async *listItemsOfAnomaliesForAlert(
    alertConfigId: string,
    alertId: string,
    options: ListAnomaliesForAlertConfigurationOptions & { maxPageSize?: number } = {},
  ): AsyncIterableIterator<DataPointAnomaly> {
    for await (const segment of this.listSegmentsOfAnomaliesForAlert(
      alertConfigId,
      alertId,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list anamolies associated with an alert
   *
   * `.byPage()` returns an async iterable iterator to list the anomalies in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListAnomaliesForAlert
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const alertConfigId = "<alert config id>";
   * const alertId = "<alert id>";
   * const anamolyList = client.listAnomaliesForAlert({ alertConfigId, id: alertId });
   *
   * // Iterate via for-await-of
   * for await (const anomaly of anamolyList) {
   *   console.log(anomaly.severity);
   * }
   *
   * // Iterate via generator
   * const iter = anamolyList[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.severity);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of anamolyList.byPage()) {
   *   for (const anomaly of page) {
   *     console.log(anomaly.severity);
   *   }
   * }
   * ```
   *
   * @param alert - Anomaly alert containing alertConfigId and id
   * @param options - The options parameter.
   */

  public listAnomaliesForAlert(
    alert: AnomalyAlert,
    // eslint-disable-next-line @azure/azure-sdk/ts-naming-options
    options: ListAnomaliesForAlertConfigurationOptions = {},
  ): PagedAsyncIterableIterator<DataPointAnomaly, AnomaliesPageResponse> {
    const iter = this.listItemsOfAnomaliesForAlert(alert.alertConfigId, alert.id, options);
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfAnomaliesForAlert(
          alert.alertConfigId,
          alert.id,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  /**
   * listing incidents for alert - segments
   */
  private async *listSegmentsOfIncidentsForAlert(
    alertConfigId: string,
    alertId: string,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListIncidentsForAlertOptions = {},
  ): AsyncIterableIterator<IncidentsPageResponse> {
    let segmentResponse;
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getIncidentsFromAlertByAnomalyAlertingConfiguration(
        alertConfigId,
        alertId,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const incidents = segmentResponse.value?.map((incident) => {
        return {
          id: incident.incidentId,
          metricId: incident.metricId,
          detectionConfigurationId: incident.anomalyDetectionConfigurationId!,
          rootDimensionKey: incident.rootNode.dimension,
          status: incident.property.incidentStatus!,
          severity: incident.property.maxSeverity,
          startTime: incident.startTime,
          lastOccurredTime: incident.lastTime,
        };
      });
      const resultArray = Object.defineProperty(incidents || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;
      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse = await this.client.getIncidentsFromAlertByAnomalyAlertingConfigurationNext(
        alertConfigId,
        alertId,
        continuationToken,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const incidents = segmentResponse.value?.map((incident) => {
        return {
          id: incident.incidentId,
          metricId: incident.metricId,
          detectionConfigurationId: incident.anomalyDetectionConfigurationId!,
          rootDimensionKey: incident.rootNode.dimension,
          status: incident.property.incidentStatus!,
          severity: incident.property.maxSeverity,
          startTime: incident.startTime,
          lastOccurredTime: incident.lastTime,
        };
      });
      const resultArray = Object.defineProperty(incidents || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }
  }

  /**
   * listing incidents for alert - items
   */
  private async *listItemsOfIncidentsForAlert(
    alertConfigId: string,
    alertId: string,
    options: ListIncidentsForAlertOptions = {},
  ): AsyncIterableIterator<AnomalyIncident> {
    for await (const segment of this.listSegmentsOfIncidentsForAlert(
      alertConfigId,
      alertId,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list incidents associated with an alert
   *
   * `.byPage()` returns an async iterable iterator to list the incidents in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListIncidentsForAlert
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const alertConfigId = "<alert config id>";
   * const alertId = "<alert id>";
   * const incidentList = client.listIncidentsForAlert({ alertConfigId, id: alertId });
   *
   * // Iterate via for-await-of
   * for await (const incident of incidentList) {
   *   console.log(incident.rootDimensionKey);
   * }
   *
   * // Iterate via generator
   * const iter = incidentList[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.rootDimensionKey);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of incidentList.byPage()) {
   *   for (const incident of page) {
   *     console.log(incident.rootDimensionKey);
   *   }
   * }
   * ```
   *
   * @param alert - Anomaly alert containing alertConfigId and id
   * @param options - The options parameter.
   */
  public listIncidentsForAlert(
    alert: AnomalyAlert,
    options: ListIncidentsForAlertOptions = {},
  ): PagedAsyncIterableIterator<AnomalyIncident, IncidentsPageResponse> {
    const iter = this.listItemsOfIncidentsForAlert(alert.alertConfigId, alert.id, options);
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfIncidentsForAlert(
          alert.alertConfigId,
          alert.id,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  /**
   * Retrieves enriched metric series data for a detection configuration
   *
   * @param detectionConfigId - Anomaly detection configuration id
   * @param startTime - The start of time range to query metric enriched series data
   * @param endTime - The end of time range to query metric enriched series data
   * @param seriesKey - Series to retrieve their data
   * @param options - The options parameter.
   */
  public async getMetricEnrichedSeriesData(
    detectionConfigId: string,
    seriesKey: DimensionKey[],
    startTime: Date | string,
    endTime: Date | string,
    options: GetMetricEnrichedSeriesDataOptions = {},
  ): Promise<GetMetricEnrichedSeriesDataResponse> {
    const optionsBody = {
      startTime: typeof startTime === "string" ? new Date(startTime) : startTime,
      endTime: typeof endTime === "string" ? new Date(endTime) : endTime,
      series: seriesKey.map((s) => {
        return { dimension: s };
      }),
    };
    const result = await this.client.getSeriesByAnomalyDetectionConfiguration(
      detectionConfigId,
      optionsBody,
      options,
    );
    const results = result.value.map((d) => {
      return {
        seriesKey: d.series.dimension,
        timestamps: d.timestampList,
        values: d.valueList,
        expectedValues: d.expectedValueList,
        lowerBounds: d.lowerBoundaryList,
        upperBounds: d.upperBoundaryList,
        isAnomaly: d.isAnomalyList,
        periods: d.periodList,
      };
    });

    return results;
  }

  /**
   * listing anomalies for detection config - segments
   */
  private async *listSegmentsOfAnomaliesForDetectionConfig(
    detectionConfigId: string,
    startTime: Date,
    endTime: Date,
    maxPageSize?: number,
    continuationToken?: string,
    options: ListAnomaliesForDetectionConfigurationOptions = {},
  ): AsyncIterableIterator<AnomaliesPageResponse> {
    let segmentResponse;
    const optionsBody = {
      startTime: startTime,
      endTime: endTime,
      filter:
        options.seriesGroupKeys || options.severityFilter
          ? {
              dimensionFilter: options.seriesGroupKeys?.map((d) => {
                return { dimension: d };
              }),
              severityFilter: options.severityFilter,
            }
          : undefined,
    };
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getAnomaliesByAnomalyDetectionConfiguration(
        detectionConfigId,
        optionsBody,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const anomalies = segmentResponse.value?.map((a) => {
        return {
          detectionConfigurationId: detectionConfigId,
          metricId: a.metricId,
          timestamp: a.timestamp.getTime(),
          createdOn: a.createdTime,
          modifiedOn: a.modifiedTime,
          seriesKey: a.dimension,
          severity: a.property.anomalySeverity,
          status: a.property.anomalyStatus,
        };
      });
      const resultArray = Object.defineProperty(anomalies || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;
      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse = await this.client.getAnomaliesByAnomalyDetectionConfigurationNext(
        continuationToken,
        optionsBody,
        options,
      );
      continuationToken = segmentResponse.nextLink;
      const anomalies = segmentResponse.value?.map((a) => {
        return {
          detectionConfigurationId: detectionConfigId,
          metricId: a.metricId,
          timestamp: a.timestamp.getTime(),
          createdOn: a.createdTime,
          modifiedOn: a.modifiedTime,
          seriesKey: a.dimension,
          severity: a.property.anomalySeverity,
          status: a.property.anomalyStatus,
        };
      });
      const resultArray = Object.defineProperty(anomalies || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;
    }
  }

  /**
   * listing anomalies for detection config - items
   */
  private async *listItemsOfAnomaliesForDetectionConfig(
    detectionConfigId: string,
    startTime: Date,
    endTime: Date,
    options: ListAnomaliesForDetectionConfigurationOptions,
  ): AsyncIterableIterator<DataPointAnomaly> {
    for await (const segment of this.listSegmentsOfAnomaliesForDetectionConfig(
      detectionConfigId,
      startTime,
      endTime,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list anomalies for a detection configuration.
   *
   * `.byPage()` returns an async iterable iterator to list the anomalies in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListAnomaliesForDetectionConfiguration
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const anomalies = client.listAnomaliesForDetectionConfiguration(
   *   "<detection config id>",
   *   new Date(Date.UTC(2020, 8, 1)),
   *   new Date(Date.UTC(2020, 8, 12)),
   * );
   *
   * // Iterate via for-await-of
   * for await (const anomaly of anomalies) {
   *   console.log(anomaly.severity);
   * }
   *
   * // Iterate via generator
   * const iter = anomalies[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.severity);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of anomalies.byPage()) {
   *   for (const anomaly of page) {
   *     console.log(anomaly.severity);
   *   }
   * }
   * ```
   *
   * @param detectionConfigId - Anomaly detection configuration id
   * @param startTime - The start of time range to query anomalies
   * @param endTime - The end of time range to query anomalies
   * @param options - The options parameter.
   */
  public listAnomaliesForDetectionConfiguration(
    detectionConfigId: string,
    startTime: Date | string,
    endTime: Date | string,
    options: ListAnomaliesForDetectionConfigurationOptions = {},
  ): PagedAsyncIterableIterator<DataPointAnomaly, AnomaliesPageResponse> {
    const start: Date = typeof startTime === "string" ? new Date(startTime) : startTime;
    const end: Date = typeof endTime === "string" ? new Date(endTime) : endTime;
    const iter = this.listItemsOfAnomaliesForDetectionConfig(
      detectionConfigId,
      start,
      end,
      options,
    );
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfAnomaliesForDetectionConfig(
          detectionConfigId,
          start,
          end,
          settings.maxPageSize,
          settings.continuationToken,
          options,
        );
      },
    };
  }

  // ## list segments of dimension values of anomalies detected by a detection configuration
  private async *listSegmentsOfAnomalyDimensionValues(
    detectionConfigId: string,
    startTime: Date,
    endTime: Date,
    dimensionName: string,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListAnomalyDimensionValuesOptions = {},
  ): AsyncIterableIterator<DimensionValuesPageResponse> {
    let segmentResponse;
    const optionsBody = {
      ...options,
      dimensionFilter: options.seriesGroupKey ? { dimension: options.seriesGroupKey } : undefined,
      startTime,
      endTime,
      dimensionName,
    };
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getDimensionOfAnomaliesByAnomalyDetectionConfiguration(
        detectionConfigId,
        optionsBody,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const resultArray = Object.defineProperty(segmentResponse.value, "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse =
        await this.client.getDimensionOfAnomaliesByAnomalyDetectionConfigurationNext(
          continuationToken,
          optionsBody,
          options,
        );
      const resultArray = Object.defineProperty(segmentResponse.value, "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }
  }

  // ## list items of dimension values of anomalies detected by a detection configuration
  private async *listItemsOfAnomalyDimensionValues(
    detectionConfigId: string,
    startTime: Date,
    endTime: Date,
    dimensionName: string,
    options: ListAnomalyDimensionValuesOptions,
  ): AsyncIterableIterator<string> {
    for await (const segment of this.listSegmentsOfAnomalyDimensionValues(
      detectionConfigId,
      startTime,
      endTime,
      dimensionName,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list dimension values of anomalies detected by a detection configuration.
   *
   * `.byPage()` returns an async iterable iterator to list the dimension values in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListAnomalyDimensionValues
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const dimensionValues = client.listAnomalyDimensionValues(
   *   "<detection config id>",
   *   new Date(Date.UTC(2020, 8, 1)),
   *   new Date(Date.UTC(2020, 8, 12)),
   *   "city",
   * );
   *
   * // Iterate via for-await-of
   * for await (const dimensionValue of dimensionValues) {
   *   console.log(dimensionValue);
   * }
   *
   * // Iterate via generator
   * const iter = dimensionValues[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of dimensionValues.byPage()) {
   *   for (const dimensionValue of page) {
   *     console.log(dimensionValue);
   *   }
   * }
   * ```
   *
   * @param detectionConfigId - Anomaly detection configuration id
   * @param dimensionName - Name of the dimension for anomaly detection config
   * @param startTime - The start of time range to query anomalies
   * @param endTime - The end of time range to query anomalies
   * @param options - The options parameter.
   */
  public listAnomalyDimensionValues(
    detectionConfigId: string,
    startTime: Date | string,
    endTime: Date | string,
    dimensionName: string,
    options: ListAnomalyDimensionValuesOptions = {},
  ): PagedAsyncIterableIterator<string, DimensionValuesPageResponse> {
    const iter = this.listItemsOfAnomalyDimensionValues(
      detectionConfigId,
      typeof startTime === "string" ? new Date(startTime) : startTime,
      typeof endTime === "string" ? new Date(endTime) : endTime,
      dimensionName,
      options,
    );
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfAnomalyDimensionValues(
          detectionConfigId,
          typeof startTime === "string" ? new Date(startTime) : startTime,
          typeof endTime === "string" ? new Date(endTime) : endTime,
          dimensionName,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  // ## listing incidents for detection config - segments
  private async *listSegmentsOfIncidentsForDetectionConfig(
    detectionConfigId: string,
    startTime: Date,
    endTime: Date,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListIncidentsForDetectionConfigurationOptions = {},
  ): AsyncIterableIterator<IncidentsPageResponse> {
    let segmentResponse;
    const optionsBody = {
      startTime: startTime,
      endTime: endTime,
      filter: {
        dimensionFilter: options.seriesGroupKeys?.map((d) => {
          return { dimension: d };
        }),
      },
    };
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getIncidentsByAnomalyDetectionConfiguration(
        detectionConfigId,
        optionsBody,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const incidents = segmentResponse.value?.map((incident) => {
        return {
          id: incident.incidentId,
          metricId: incident.metricId,
          detectionConfigurationId: detectionConfigId,
          rootDimensionKey: incident.rootNode.dimension,
          status: incident.property.incidentStatus!,
          severity: incident.property.maxSeverity,
          startTime: incident.startTime,
          lastOccurredTime: incident.lastTime,
        };
      });
      const resultArray = Object.defineProperty(incidents || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }

    while (continuationToken) {
      segmentResponse = await this.client.getIncidentsByAnomalyDetectionConfigurationNext(
        detectionConfigId,
        optionsBody,
        continuationToken,
        {
          ...options,
          maxpagesize: maxPageSize,
        },
      );
      const incidents = segmentResponse.value?.map((incident) => {
        return {
          id: incident.incidentId,
          metricId: incident.metricId,
          detectionConfigurationId: detectionConfigId,
          rootDimensionKey: incident.rootNode.dimension,
          status: incident.property.incidentStatus!,
          severity: incident.property.maxSeverity,
          startTime: incident.startTime,
          lastOccurredTime: incident.lastTime,
        };
      });
      const resultArray = Object.defineProperty(incidents || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }
  }

  // ## listing incidents for detection config - items
  private async *listItemsOfIncidentsForDetectionConfig(
    detectionConfigId: string,
    startTime: Date,
    endTime: Date,
    options: ListIncidentsForDetectionConfigurationOptions,
  ): AsyncIterableIterator<AnomalyIncident> {
    for await (const segment of this.listSegmentsOfIncidentsForDetectionConfig(
      detectionConfigId,
      startTime,
      endTime,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list incidents for an anomaly detection configuration.
   *
   * `.byPage()` returns an async iterable iterator to list the incidents in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListIncidentsForDetectionConfiguration
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const incidentList = client.listIncidentsForDetectionConfiguration(
   *   "<detection config id>",
   *   new Date(Date.UTC(2020, 8, 1)),
   *   new Date(Date.UTC(2020, 8, 12)),
   * );
   *
   * // Iterate via for-await-of
   * for await (const incident of incidentList) {
   *   console.log(incident.rootDimensionKey);
   * }
   *
   * // Iterate via generator
   * const iter = incidentList[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.rootDimensionKey);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of incidentList.byPage()) {
   *   for (const incident of page) {
   *     console.log(incident.rootDimensionKey);
   *   }
   * }
   * ```
   *
   * @param detectionConfigId - Anomaly detection configuration id
   * @param startTime - The start of time range to query for incidents
   * @param endTime - The end of time range to query for incidents
   * @param options - The options parameter.
   */
  public listIncidentsForDetectionConfiguration(
    detectionConfigId: string,
    startTime: Date | string,
    endTime: Date | string,
    options: ListIncidentsForDetectionConfigurationOptions = {},
  ): PagedAsyncIterableIterator<AnomalyIncident, IncidentsPageResponse> {
    const start: Date = typeof startTime === "string" ? new Date(startTime) : startTime;
    const end: Date = typeof endTime === "string" ? new Date(endTime) : endTime;
    const iter = this.listItemsOfIncidentsForDetectionConfig(
      detectionConfigId,
      start,
      end,
      options,
    );
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfIncidentsForDetectionConfig(
          detectionConfigId,
          start,
          end,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  /**
   * Gets the root causes of an incident.
   *
   * @param detectionConfigId - Anomaly detection configuration id
   * @param incidentId - Incident id
   * @param options - The options parameter
   */
  public async getIncidentRootCauses(
    detectionConfigId: string,
    incidentId: string,
    options: OperationOptions = {},
  ): Promise<GetIncidentRootCauseResponse> {
    return tracingClient.withSpan(
      "MetricsAdvisorClient-getIncidentRootCauses",
      options,
      async (finalOptions) => {
        const result = await this.client.getRootCauseOfIncidentByAnomalyDetectionConfiguration(
          detectionConfigId,
          incidentId,
          finalOptions,
        );
        const transformed = result.value?.map((r) => {
          return {
            seriesKey: r.rootCause.dimension,
            path: r.path,
            score: r.score,
            description: r.description,
          };
        });
        return {
          rootCauses: transformed,
        };
      },
    );
  }

  /**
   * Creates a metric feedback.
   *
   * @param feedback - Content of the feedback
   * @param options - The options parameter
   * @returns Response with Feedback object
   */
  public async addFeedback(
    feedback: MetricFeedbackUnion,
    options: OperationOptions = {},
  ): Promise<MetricFeedbackUnion> {
    return tracingClient.withSpan(
      "MetricsAdvisorClient-addFeedback",
      options,
      async (finalOptions) => {
        const serviceFeedback = toServiceMetricFeedbackUnion(feedback);
        const result = await this.client.createMetricFeedback(serviceFeedback, finalOptions);
        if (!result.location) {
          throw new Error("Expected a valid location to retrieve the created configuration");
        }
        const lastSlashIndex = result.location.lastIndexOf("/");
        const feedbackId = result.location.substring(lastSlashIndex + 1);
        return this.getFeedback(feedbackId);
      },
    );
  }

  /**
   * Retrieves a metric feedback for the given feedback id.
   * @param id - Id of the feedback to retrieve
   * @param options - The options parameter
   */
  public async getFeedback(
    id: string,
    options: OperationOptions = {},
  ): Promise<MetricFeedbackUnion> {
    return tracingClient.withSpan(
      "MetricsAdvisorClient-getFeedback",
      options,
      async (finalOptions) => {
        const result = await this.client.getMetricFeedback(id, finalOptions);
        return fromServiceMetricFeedbackUnion(result);
      },
    );
  }

  private async *listSegmentsOfFeedback(
    metricId: string,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListFeedbackOptions = {},
  ): AsyncIterableIterator<MetricFeedbackPageResponse> {
    let segmentResponse;
    const startTime =
      typeof options.filter?.startTime === "string"
        ? new Date(options.filter?.startTime)
        : options.filter?.startTime;
    const endTime =
      typeof options.filter?.endTime === "string"
        ? new Date(options.filter.endTime)
        : options.filter?.endTime;
    const optionsBody = {
      metricId,
      dimensionFilter: options.filter?.dimensionKey
        ? { dimension: options.filter?.dimensionKey }
        : undefined,
      feedbackType: options.filter?.feedbackType,
      startTime,
      endTime,
      timeMode: options.filter?.timeMode,
    };
    if (continuationToken === undefined) {
      segmentResponse = await this.client.listMetricFeedbacks(optionsBody, {
        ...options,
        maxpagesize: maxPageSize,
      });
      const feedbacks = segmentResponse.value?.map((feedback) => {
        return fromServiceMetricFeedbackUnion(feedback);
      });
      const resultArray = Object.defineProperty(feedbacks || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }

    while (continuationToken) {
      segmentResponse = await this.client.listMetricFeedbacksNext(
        continuationToken,
        optionsBody,
        options,
      );
      const feedbacks = segmentResponse.value?.map((feedback) => {
        return fromServiceMetricFeedbackUnion(feedback);
      });
      const resultArray = Object.defineProperty(feedbacks || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }
  }

  private async *listItemsOfFeedback(
    metricId: string,
    options: ListFeedbackOptions = {},
  ): AsyncIterableIterator<MetricFeedbackUnion> {
    for await (const segment of this.listSegmentsOfFeedback(
      metricId,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list feedbacks for a metric.
   *
   * `.byPage()` returns an async iterable iterator to list the feedbacks in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListFeedback
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const feedbacks = client.listFeedback("<metric id>");
   *
   * // Iterate via for-await-of
   * for await (const feedback of feedbacks) {
   *   console.log(feedback.feedbackType);
   * }
   *
   * // Iterate via generator
   * const iter = feedbacks[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.feedbackType);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of feedbacks.byPage()) {
   *   for (const feedback of page) {
   *     console.log(feedback.feedbackType);
   *   }
   * }
   * ```
   *
   * @param metricId - Metric id
   * @param options - The options parameter
   */
  public listFeedback(
    metricId: string,
    options: ListFeedbackOptions = {},
  ): PagedAsyncIterableIterator<MetricFeedbackUnion, MetricFeedbackPageResponse> {
    const iter = this.listItemsOfFeedback(metricId, options);
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns an AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfFeedback(
          metricId,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  // # Metric

  /**
   * Gets the time series data for a metric
   * @param metricId - Metric id
   * @param startTime - The start of the time range to retrieve series data
   * @param endTime - The end of the time range to retrieve series data
   * @param seriesKey - A list of time series to retrieve their data
   * @param options - The options parameter
   */
  public async getMetricSeriesData(
    metricId: string,
    seriesKey: DimensionKey[],
    startTime: Date | string,
    endTime: Date | string,
    options: GetMetricSeriesDataOptions = {},
  ): Promise<GetMetricSeriesDataResponse> {
    const optionsBody = {
      startTime: typeof startTime === "string" ? new Date(startTime) : startTime,
      endTime: typeof endTime === "string" ? new Date(endTime) : endTime,
      series: seriesKey,
    };
    const result = await this.client.getMetricData(metricId, optionsBody, options);
    const resultArray =
      result.value?.map((s) => {
        return {
          definition: { metricId: s.id!.metricId!, seriesKey: s.id!.dimension! },
          timestamps: s.timestampList,
          values: s.valueList,
        };
      }) || [];

    return resultArray as GetMetricSeriesDataResponse;
  }

  private async *listSegmentsOfMetricSeriesDefinitions(
    metricId: string,
    activeSince: Date,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListMetricSeriesDefinitionsOptions = {},
  ): AsyncIterableIterator<MetricSeriesPageResponse> {
    let segmentResponse;
    const optionsBody = {
      activeSince: activeSince,
      dimensionFilter: options.dimensionFilter,
    };
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getMetricSeries(metricId, optionsBody, {
        ...options,
        maxpagesize: maxPageSize,
      });
      const definitions = segmentResponse.value?.map((d) => {
        return {
          metricId: d.metricId!,
          seriesKey: d.dimension!,
        };
      });
      const resultArray = Object.defineProperty(definitions || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse = await this.client.getMetricSeriesNext(
        continuationToken,
        optionsBody,
        options,
      );
      const definitions = segmentResponse.value?.map((d) => {
        return {
          metricId: d.metricId!,
          seriesKey: d.dimension!,
        };
      });
      const resultArray = Object.defineProperty(definitions || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }
  }

  private async *listItemsOfMetricSeriesDefinitions(
    metricId: string,
    activeSince: Date,
    options: ListMetricSeriesDefinitionsOptions,
  ): AsyncIterableIterator<MetricSeriesDefinition> {
    for await (const segment of this.listSegmentsOfMetricSeriesDefinitions(
      metricId,
      activeSince,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list series definitions (dimension combinations) for a metric.
   *
   * `.byPage()` returns an async iterable iterator to list the series definitions in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListMetricSeriesDefinitions
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const definitions = client.listMetricSeriesDefinitions(
   *   "<metric id>",
   *   new Date(Date.UTC(2020, 8, 1)),
   * );
   *
   * // Iterate via for-await-of
   * for await (const definition of definitions) {
   *   console.log(definition.seriesKey);
   * }
   *
   * // Iterate via generator
   * const iter = definitions[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.seriesKey);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of definitions.byPage()) {
   *   for (const definition of page) {
   *     console.log(definition.seriesKey);
   *   }
   * }
   * ```
   *
   * @param metricId - Metric id
   * @param activeSince - Definitions of series ingested after this time are returned
   * @param options - The options parameter.
   */
  public listMetricSeriesDefinitions(
    metricId: string,
    activeSince: Date | string,
    options: ListMetricSeriesDefinitionsOptions = {},
  ): PagedAsyncIterableIterator<MetricSeriesDefinition, MetricSeriesPageResponse> {
    const iter = this.listItemsOfMetricSeriesDefinitions(
      metricId,
      typeof activeSince === "string" ? new Date(activeSince) : activeSince,
      options,
    );
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfMetricSeriesDefinitions(
          metricId,
          typeof activeSince === "string" ? new Date(activeSince) : activeSince,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  private async *listSegmentsOfMetricDimensionValues(
    metricId: string,
    dimensionName: string,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListMetricDimensionValuesOptions = {},
  ): AsyncIterableIterator<DimensionValuesPageResponse> {
    let segmentResponse;
    const optionsBody = {
      dimensionName: dimensionName,
    };

    if (continuationToken === undefined) {
      segmentResponse = await this.client.getMetricDimension(metricId, optionsBody, {
        ...options,
        maxpagesize: maxPageSize,
      });
      const resultArray = Object.defineProperty(segmentResponse.value || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse = await this.client.getMetricDimensionNext(
        continuationToken,
        optionsBody,
        options,
      );
      const resultArray = Object.defineProperty(segmentResponse.value || [], "continuationToken", {
        enumerable: true,
        value: segmentResponse.nextLink,
      });
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }
  }

  private async *listItemsOfMetricDimensionValues(
    metricId: string,
    dimensionName: string,
    options: ListMetricDimensionValuesOptions,
  ): AsyncIterableIterator<string> {
    for await (const segment of this.listSegmentsOfMetricDimensionValues(
      metricId,
      dimensionName,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list all the values for a metric dimension.
   *
   * `.byPage()` returns an async iterable iterator to list the values in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListMetricDimensionValues
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const dimensionValues = client.listMetricDimensionValues("<metric id>", "city");
   *
   * // Iterate via for-await-of
   * for await (const dimensionValue of dimensionValues) {
   *   console.log(dimensionValue);
   * }
   *
   * // Iterate via generator
   * const iter = dimensionValues[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of dimensionValues.byPage()) {
   *   for (const dimensionValue of page) {
   *     console.log(dimensionValue);
   *   }
   * }
   * ```
   *
   * @param metricId - Anomaly detection configuration id
   * @param dimensionName - Name of the dimension to list value
   * @param options - The options parameter.
   */ public listMetricDimensionValues(
    metricId: string,
    dimensionName: string,
    options: ListMetricDimensionValuesOptions = {},
  ): PagedAsyncIterableIterator<string, DimensionValuesPageResponse> {
    const iter = this.listItemsOfMetricDimensionValues(metricId, dimensionName, options);

    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfMetricDimensionValues(
          metricId,
          dimensionName,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }

  private async *listSegmentsOfMetricEnrichmentStatus(
    metricId: string,
    startTime: Date,
    endTime: Date,
    continuationToken?: string,
    maxPageSize?: number,
    options: ListMetricEnrichmentStatusOptions = {},
  ): AsyncIterableIterator<MetricEnrichmentStatusPageResponse> {
    let segmentResponse;
    const optionsBody = {
      startTime: startTime,
      endTime: endTime,
    };
    if (continuationToken === undefined) {
      segmentResponse = await this.client.getEnrichmentStatusByMetric(metricId, optionsBody, {
        ...options,
        maxpagesize: maxPageSize,
      });
      const resultArray = Object.defineProperty(
        segmentResponse.value?.map((s) => {
          return {
            timestamp: s.timestamp?.getTime(),
            status: s.status,
            message: s.message,
          };
        }) || [],
        "continuationToken",
        {
          enumerable: true,
          value: segmentResponse.nextLink,
        },
      );
      yield resultArray;
      continuationToken = segmentResponse.nextLink;
    }

    // we are using nextLink so don't send 'skip' in options
    delete options.skip;
    while (continuationToken) {
      segmentResponse = await this.client.getEnrichmentStatusByMetricNext(
        continuationToken,
        optionsBody,
        options,
      );
      const resultArray = Object.defineProperty(
        segmentResponse.value?.map((s) => {
          return {
            timestamp: s.timestamp?.getTime(),
            status: s.status,
            message: s.message,
          };
        }) || [],
        "continuationToken",
        {
          enumerable: true,
          value: segmentResponse.nextLink,
        },
      );
      yield resultArray;

      continuationToken = segmentResponse.nextLink;
    }
  }

  private async *listItemsOfMetricEnrichmentStatus(
    metricId: string,
    startTime: Date,
    endTime: Date,
    options: ListMetricEnrichmentStatusOptions,
  ): AsyncIterableIterator<EnrichmentStatus> {
    for await (const segment of this.listSegmentsOfMetricEnrichmentStatus(
      metricId,
      startTime,
      endTime,
      undefined,
      undefined,
      options,
    )) {
      if (segment) {
        yield* segment;
      }
    }
  }

  /**
   * Returns an async iterable iterator to list incidents for an anomaly detection configuration.
   *
   * `.byPage()` returns an async iterable iterator to list the incidents in pages.
   *
   * Example using `for await` syntax:
   *
   * ```ts snippet:MetricsAdvisorClientListMetricEnrichmentStatus
   * import { DefaultAzureCredential } from "@azure/identity";
   * import { MetricsAdvisorClient } from "@azure/ai-metrics-advisor";
   *
   * const credential = new DefaultAzureCredential();
   * const client = new MetricsAdvisorClient("<endpoint>", credential);
   *
   * const statusList = client.listMetricEnrichmentStatus(
   *   "<metric id>",
   *   new Date(Date.UTC(2020, 8, 1)),
   *   new Date(Date.UTC(2020, 8, 12)),
   * );
   *
   * // Iterate via for-await-of
   * for await (const status of statusList) {
   *   console.log(status.status);
   * }
   *
   * // Iterate via generator
   * const iter = statusList[Symbol.asyncIterator]();
   * let { done, value } = await iter.next();
   * while (!done) {
   *   console.log(value.status);
   *   ({ done, value } = await iter.next());
   * }
   *
   * // Iterate by page
   * for await (const page of statusList.byPage()) {
   *   for (const status of page) {
   *     console.log(status.status);
   *   }
   * }
   * ```
   *
   * @param metricId - Metric id
   * @param startTime - The start of time range to query for enrichment status
   * @param endTime - The end of time range to query for enrichment status
   * @param options - The options parameter.
   */
  public listMetricEnrichmentStatus(
    metricId: string,
    startTime: Date | string,
    endTime: Date | string,
    options: ListMetricEnrichmentStatusOptions = {},
  ): PagedAsyncIterableIterator<EnrichmentStatus, MetricEnrichmentStatusPageResponse> {
    const iter = this.listItemsOfMetricEnrichmentStatus(
      metricId,
      typeof startTime === "string" ? new Date(startTime) : startTime,
      typeof endTime === "string" ? new Date(endTime) : endTime,
      options,
    );
    return {
      /**
       * The next method, part of the iteration protocol
       */
      next() {
        return iter.next();
      },
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator]() {
        return this;
      },
      /**
       * @returns An AsyncIterableIterator that works a page at a time
       */
      byPage: (settings: PageSettings = {}) => {
        return this.listSegmentsOfMetricEnrichmentStatus(
          metricId,
          typeof startTime === "string" ? new Date(startTime) : startTime,
          typeof endTime === "string" ? new Date(endTime) : endTime,
          settings.continuationToken,
          settings.maxPageSize,
          options,
        );
      },
    };
  }
}
