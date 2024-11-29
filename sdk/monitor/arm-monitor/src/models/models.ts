// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A pipeline group definition. */
export interface PipelineGroup extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PipelineGroupProperties;
  /** The extended location for given pipeline group. */
  extendedLocation?: ExtendedLocation;
}

export function pipelineGroupSerializer(item: PipelineGroup): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : pipelineGroupPropertiesSerializer(item["properties"]),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function pipelineGroupDeserializer(item: any): PipelineGroup {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : pipelineGroupPropertiesDeserializer(item["properties"]),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Properties that need to be specified to create a new pipeline group instance. */
export interface PipelineGroupProperties {
  /** Defines the amount of replicas of the pipeline group instance. */
  replicas?: number;
  /** The receivers specified for a pipeline group instance. */
  receivers: Receiver[];
  /** The processors specified for a pipeline group instance. */
  processors: Processor[];
  /** The exporters specified for a pipeline group instance. */
  exporters: Exporter[];
  /** The service section for a given pipeline group instance. */
  service: Service;
  /** Networking configurations for the pipeline group instance. */
  networkingConfigurations?: NetworkingConfiguration[];
  /** The provisioning state of a pipeline group instance. Set to Succeeded if everything is healthy. */
  readonly provisioningState?: ProvisioningState;
}

export function pipelineGroupPropertiesSerializer(
  item: PipelineGroupProperties,
): any {
  return {
    replicas: item["replicas"],
    receivers: receiverArraySerializer(item["receivers"]),
    processors: processorArraySerializer(item["processors"]),
    exporters: exporterArraySerializer(item["exporters"]),
    service: serviceSerializer(item["service"]),
    networkingConfigurations: !item["networkingConfigurations"]
      ? item["networkingConfigurations"]
      : networkingConfigurationArraySerializer(
          item["networkingConfigurations"],
        ),
  };
}

export function pipelineGroupPropertiesDeserializer(
  item: any,
): PipelineGroupProperties {
  return {
    replicas: item["replicas"],
    receivers: receiverArrayDeserializer(item["receivers"]),
    processors: processorArrayDeserializer(item["processors"]),
    exporters: exporterArrayDeserializer(item["exporters"]),
    service: serviceDeserializer(item["service"]),
    networkingConfigurations: !item["networkingConfigurations"]
      ? item["networkingConfigurations"]
      : networkingConfigurationArrayDeserializer(
          item["networkingConfigurations"],
        ),
    provisioningState: item["provisioningState"],
  };
}

export function receiverArraySerializer(result: Array<Receiver>): any[] {
  return result.map((item) => {
    return receiverSerializer(item);
  });
}

export function receiverArrayDeserializer(result: Array<Receiver>): any[] {
  return result.map((item) => {
    return receiverDeserializer(item);
  });
}

/** Receiver Info. */
export interface Receiver {
  /** The type of receiver. */
  type: ReceiverType;
  /** The name of receiver. */
  name: string;
  /** Syslog configurations. This field is mandatory for syslog type receivers. */
  syslog?: SyslogReceiver;
  /** OTLP receiver configurations. This field is mandatory for OTLP and pipelineGroup receivers. */
  otlp?: OtlpReceiver;
  /** UDP receiver configurations. This field is mandatory for UDP receivers. */
  udp?: UdpReceiver;
}

export function receiverSerializer(item: Receiver): any {
  return {
    type: item["type"],
    name: item["name"],
    syslog: !item["syslog"]
      ? item["syslog"]
      : syslogReceiverSerializer(item["syslog"]),
    otlp: !item["otlp"] ? item["otlp"] : otlpReceiverSerializer(item["otlp"]),
    udp: !item["udp"] ? item["udp"] : udpReceiverSerializer(item["udp"]),
  };
}

export function receiverDeserializer(item: any): Receiver {
  return {
    type: item["type"],
    name: item["name"],
    syslog: !item["syslog"]
      ? item["syslog"]
      : syslogReceiverDeserializer(item["syslog"]),
    otlp: !item["otlp"] ? item["otlp"] : otlpReceiverDeserializer(item["otlp"]),
    udp: !item["udp"] ? item["udp"] : udpReceiverDeserializer(item["udp"]),
  };
}

/** The receiver type. */
export enum KnownReceiverType {
  /** Linux syslog. */
  Syslog = "Syslog",
  /** Receives data from azure monitor agent receiver. */
  Ama = "Ama",
  /** Receives data from another pipeline group. */
  PipelineGroup = "PipelineGroup",
  /** Receives data from a OTLP collector. */
  OTLP = "OTLP",
  /** Receives data from an UDP collector. */
  UDP = "UDP",
}

/**
 * The receiver type. \
 * {@link KnownReceiverType} can be used interchangeably with ReceiverType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Syslog**: Linux syslog. \
 * **Ama**: Receives data from azure monitor agent receiver. \
 * **PipelineGroup**: Receives data from another pipeline group. \
 * **OTLP**: Receives data from a OTLP collector. \
 * **UDP**: Receives data from an UDP collector.
 */
export type ReceiverType = string;

/** Base receiver using TCP as transport protocol. */
export interface SyslogReceiver {
  /** Syslog receiver endpoint definition. Example: 0.0.0.0:<port>. */
  endpoint: string;
  /** Protocol to parse syslog messages. Default rfc3164 */
  protocol?: SyslogProtocol;
}

export function syslogReceiverSerializer(item: SyslogReceiver): any {
  return { endpoint: item["endpoint"], protocol: item["protocol"] };
}

export function syslogReceiverDeserializer(item: any): SyslogReceiver {
  return {
    endpoint: item["endpoint"],
    protocol: item["protocol"],
  };
}

/** The syslog protocol to parse messages. */
export enum KnownSyslogProtocol {
  /** rfc3164 protocol. */
  rfc3164 = "rfc3164",
  /** rfc5424 protocol. */
  rfc5424 = "rfc5424",
}

/**
 * The syslog protocol to parse messages. \
 * {@link KnownSyslogProtocol} can be used interchangeably with SyslogProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **rfc3164**: rfc3164 protocol. \
 * **rfc5424**: rfc5424 protocol.
 */
export type SyslogProtocol = string;

/** OTLP Receiver. */
export interface OtlpReceiver {
  /** OTLP GRPC endpoint definition. Example: 0.0.0.0:<port>. */
  endpoint: string;
}

export function otlpReceiverSerializer(item: OtlpReceiver): any {
  return { endpoint: item["endpoint"] };
}

export function otlpReceiverDeserializer(item: any): OtlpReceiver {
  return {
    endpoint: item["endpoint"],
  };
}

/** Receiver using UDP as transport protocol. */
export interface UdpReceiver {
  /** TCP endpoint definition. Example: 0.0.0.0:<port>. */
  endpoint: string;
  /** The encoding of the stream being received. */
  encoding?: StreamEncodingType;
  /** Max read queue length. */
  readQueueLength?: number;
}

export function udpReceiverSerializer(item: UdpReceiver): any {
  return {
    endpoint: item["endpoint"],
    encoding: item["encoding"],
    readQueueLength: item["readQueueLength"],
  };
}

export function udpReceiverDeserializer(item: any): UdpReceiver {
  return {
    endpoint: item["endpoint"],
    encoding: item["encoding"],
    readQueueLength: item["readQueueLength"],
  };
}

/** Encoding types for streams. */
export enum KnownStreamEncodingType {
  /** No encoding validation. Treats the file as a stream of raw bytes. */
  nop = "nop",
  /** UTF-8 encoding. */
  utf_8 = "utf-8",
  /** UTF-16 encoding with little-endian byte order. */
  utf_16le = "utf-16le",
  /** UTF-16 encoding with little-endian byte order. */
  utf_16be = "utf-16be",
  /** ASCII encoding. */
  ascii = "ascii",
  /** The Big5 Chinese character encoding. */
  big5 = "big5",
}

/**
 * Encoding types for streams. \
 * {@link KnownStreamEncodingType} can be used interchangeably with StreamEncodingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **nop**: No encoding validation. Treats the file as a stream of raw bytes. \
 * **utf-8**: UTF-8 encoding. \
 * **utf-16le**: UTF-16 encoding with little-endian byte order. \
 * **utf-16be**: UTF-16 encoding with little-endian byte order. \
 * **ascii**: ASCII encoding. \
 * **big5**: The Big5 Chinese character encoding.
 */
export type StreamEncodingType = string;

export function processorArraySerializer(result: Array<Processor>): any[] {
  return result.map((item) => {
    return processorSerializer(item);
  });
}

export function processorArrayDeserializer(result: Array<Processor>): any[] {
  return result.map((item) => {
    return processorDeserializer(item);
  });
}

/** Processor Info. */
export interface Processor {
  /** The type of processor. */
  type: ProcessorType;
  /** The name of processor. */
  name: string;
  /** Batch processor configurations. */
  batch?: BatchProcessor;
}

export function processorSerializer(item: Processor): any {
  return {
    type: item["type"],
    name: item["name"],
    batch: !item["batch"]
      ? item["batch"]
      : batchProcessorSerializer(item["batch"]),
  };
}

export function processorDeserializer(item: any): Processor {
  return {
    type: item["type"],
    name: item["name"],
    batch: !item["batch"]
      ? item["batch"]
      : batchProcessorDeserializer(item["batch"]),
  };
}

/** The processor type. */
export enum KnownProcessorType {
  /** Batch processor. */
  Batch = "Batch",
}

/**
 * The processor type. \
 * {@link KnownProcessorType} can be used interchangeably with ProcessorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Batch**: Batch processor.
 */
export type ProcessorType = string;

/** Batch processor. */
export interface BatchProcessor {
  /** Size of the batch. */
  batchSize?: number;
  /** Timeout in milliseconds. */
  timeout?: number;
}

export function batchProcessorSerializer(item: BatchProcessor): any {
  return { batchSize: item["batchSize"], timeout: item["timeout"] };
}

export function batchProcessorDeserializer(item: any): BatchProcessor {
  return {
    batchSize: item["batchSize"],
    timeout: item["timeout"],
  };
}

export function exporterArraySerializer(result: Array<Exporter>): any[] {
  return result.map((item) => {
    return exporterSerializer(item);
  });
}

export function exporterArrayDeserializer(result: Array<Exporter>): any[] {
  return result.map((item) => {
    return exporterDeserializer(item);
  });
}

/** Exporter Info. */
export interface Exporter {
  /** The type of exporter. */
  type: ExporterType;
  /** The name of exporter. */
  name: string;
  /** Azure Monitor Workspace Logs specific configurations. */
  azureMonitorWorkspaceLogs?: AzureMonitorWorkspaceLogsExporter;
  /** TCP based exporter. Used for pipelineGroup exporter. */
  tcp?: TcpExporter;
}

export function exporterSerializer(item: Exporter): any {
  return {
    type: item["type"],
    name: item["name"],
    azureMonitorWorkspaceLogs: !item["azureMonitorWorkspaceLogs"]
      ? item["azureMonitorWorkspaceLogs"]
      : azureMonitorWorkspaceLogsExporterSerializer(
          item["azureMonitorWorkspaceLogs"],
        ),
    tcp: !item["tcp"] ? item["tcp"] : tcpExporterSerializer(item["tcp"]),
  };
}

export function exporterDeserializer(item: any): Exporter {
  return {
    type: item["type"],
    name: item["name"],
    azureMonitorWorkspaceLogs: !item["azureMonitorWorkspaceLogs"]
      ? item["azureMonitorWorkspaceLogs"]
      : azureMonitorWorkspaceLogsExporterDeserializer(
          item["azureMonitorWorkspaceLogs"],
        ),
    tcp: !item["tcp"] ? item["tcp"] : tcpExporterDeserializer(item["tcp"]),
  };
}

/** The exporter type. */
export enum KnownExporterType {
  /** Export logs to Azure Monitor Workspace. */
  AzureMonitorWorkspaceLogs = "AzureMonitorWorkspaceLogs",
  /** Export data to another pipeline group instance. */
  PipelineGroup = "PipelineGroup",
}

/**
 * The exporter type. \
 * {@link KnownExporterType} can be used interchangeably with ExporterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureMonitorWorkspaceLogs**: Export logs to Azure Monitor Workspace. \
 * **PipelineGroup**: Export data to another pipeline group instance.
 */
export type ExporterType = string;

/** Azure Monitor Workspace Logs specific configurations. */
export interface AzureMonitorWorkspaceLogsExporter {
  /** API configurations for Azure Monitor workspace exporter. */
  api: AzureMonitorWorkspaceLogsApiConfig;
  /** Concurrency configuration for the exporter. */
  concurrency?: ConcurrencyConfiguration;
  /** Cache configurations. */
  cache?: CacheConfiguration;
}

export function azureMonitorWorkspaceLogsExporterSerializer(
  item: AzureMonitorWorkspaceLogsExporter,
): any {
  return {
    api: azureMonitorWorkspaceLogsApiConfigSerializer(item["api"]),
    concurrency: !item["concurrency"]
      ? item["concurrency"]
      : concurrencyConfigurationSerializer(item["concurrency"]),
    cache: !item["cache"]
      ? item["cache"]
      : cacheConfigurationSerializer(item["cache"]),
  };
}

export function azureMonitorWorkspaceLogsExporterDeserializer(
  item: any,
): AzureMonitorWorkspaceLogsExporter {
  return {
    api: azureMonitorWorkspaceLogsApiConfigDeserializer(item["api"]),
    concurrency: !item["concurrency"]
      ? item["concurrency"]
      : concurrencyConfigurationDeserializer(item["concurrency"]),
    cache: !item["cache"]
      ? item["cache"]
      : cacheConfigurationDeserializer(item["cache"]),
  };
}

/** Azure Monitor Workspace Logs Api configurations. */
export interface AzureMonitorWorkspaceLogsApiConfig {
  /** Data collection endpoint ingestion url. */
  dataCollectionEndpointUrl: string;
  /** Stream name in destination. Azure Monitor stream is related to the destination table. */
  stream: string;
  /** Data Collection Rule (DCR) immutable id. */
  dataCollectionRule: string;
  /** The schema mapping for incoming data. */
  schema: SchemaMap;
}

export function azureMonitorWorkspaceLogsApiConfigSerializer(
  item: AzureMonitorWorkspaceLogsApiConfig,
): any {
  return {
    dataCollectionEndpointUrl: item["dataCollectionEndpointUrl"],
    stream: item["stream"],
    dataCollectionRule: item["dataCollectionRule"],
    schema: schemaMapSerializer(item["schema"]),
  };
}

export function azureMonitorWorkspaceLogsApiConfigDeserializer(
  item: any,
): AzureMonitorWorkspaceLogsApiConfig {
  return {
    dataCollectionEndpointUrl: item["dataCollectionEndpointUrl"],
    stream: item["stream"],
    dataCollectionRule: item["dataCollectionRule"],
    schema: schemaMapDeserializer(item["schema"]),
  };
}

/** Schema map for azure monitor for logs. */
export interface SchemaMap {
  /** Record Map. */
  recordMap: RecordMap[];
  /** Resource Map captures information about the entity for which telemetry is recorded. For example, metrics exposed by a Kubernetes container can be linked to a resource that specifies the cluster, namespace, pod, and container name.Resource may capture an entire hierarchy of entity identification. It may describe the host in the cloud and specific container or an application running in the process. */
  resourceMap?: ResourceMap[];
  /** A scope map is a logical unit of the application code with which the emitted telemetry can be associated. */
  scopeMap?: ScopeMap[];
}

export function schemaMapSerializer(item: SchemaMap): any {
  return {
    recordMap: recordMapArraySerializer(item["recordMap"]),
    resourceMap: !item["resourceMap"]
      ? item["resourceMap"]
      : resourceMapArraySerializer(item["resourceMap"]),
    scopeMap: !item["scopeMap"]
      ? item["scopeMap"]
      : scopeMapArraySerializer(item["scopeMap"]),
  };
}

export function schemaMapDeserializer(item: any): SchemaMap {
  return {
    recordMap: recordMapArrayDeserializer(item["recordMap"]),
    resourceMap: !item["resourceMap"]
      ? item["resourceMap"]
      : resourceMapArrayDeserializer(item["resourceMap"]),
    scopeMap: !item["scopeMap"]
      ? item["scopeMap"]
      : scopeMapArrayDeserializer(item["scopeMap"]),
  };
}

export function recordMapArraySerializer(result: Array<RecordMap>): any[] {
  return result.map((item) => {
    return recordMapSerializer(item);
  });
}

export function recordMapArrayDeserializer(result: Array<RecordMap>): any[] {
  return result.map((item) => {
    return recordMapDeserializer(item);
  });
}

/** Record map for schema in azure monitor. */
export interface RecordMap {
  /** Record Map Key. */
  from: string;
  /** Record Map Value. */
  to: string;
}

export function recordMapSerializer(item: RecordMap): any {
  return { from: item["from"], to: item["to"] };
}

export function recordMapDeserializer(item: any): RecordMap {
  return {
    from: item["from"],
    to: item["to"],
  };
}

export function resourceMapArraySerializer(result: Array<ResourceMap>): any[] {
  return result.map((item) => {
    return resourceMapSerializer(item);
  });
}

export function resourceMapArrayDeserializer(
  result: Array<ResourceMap>,
): any[] {
  return result.map((item) => {
    return resourceMapDeserializer(item);
  });
}

/** Resource map for schema in azure monitor. */
export interface ResourceMap {
  /** Resource Map Key. */
  from: string;
  /** Resource Map Value. */
  to: string;
}

export function resourceMapSerializer(item: ResourceMap): any {
  return { from: item["from"], to: item["to"] };
}

export function resourceMapDeserializer(item: any): ResourceMap {
  return {
    from: item["from"],
    to: item["to"],
  };
}

export function scopeMapArraySerializer(result: Array<ScopeMap>): any[] {
  return result.map((item) => {
    return scopeMapSerializer(item);
  });
}

export function scopeMapArrayDeserializer(result: Array<ScopeMap>): any[] {
  return result.map((item) => {
    return scopeMapDeserializer(item);
  });
}

/** Scope map for schema in azure monitor. */
export interface ScopeMap {
  /** Scope Map Key. */
  from: string;
  /** Scope Map Value. */
  to: string;
}

export function scopeMapSerializer(item: ScopeMap): any {
  return { from: item["from"], to: item["to"] };
}

export function scopeMapDeserializer(item: any): ScopeMap {
  return {
    from: item["from"],
    to: item["to"],
  };
}

/** Concurrent publishing configuration. */
export interface ConcurrencyConfiguration {
  /** Number of parallel workers processing the log queues. */
  workerCount?: number;
  /** Size of the queue for log batches. */
  batchQueueSize?: number;
}

export function concurrencyConfigurationSerializer(
  item: ConcurrencyConfiguration,
): any {
  return {
    workerCount: item["workerCount"],
    batchQueueSize: item["batchQueueSize"],
  };
}

export function concurrencyConfigurationDeserializer(
  item: any,
): ConcurrencyConfiguration {
  return {
    workerCount: item["workerCount"],
    batchQueueSize: item["batchQueueSize"],
  };
}

/** Cache configurations. */
export interface CacheConfiguration {
  /** Max storage usage in megabytes. */
  maxStorageUsage?: number;
  /** Retention period in minutes. */
  retentionPeriod?: number;
}

export function cacheConfigurationSerializer(item: CacheConfiguration): any {
  return {
    maxStorageUsage: item["maxStorageUsage"],
    retentionPeriod: item["retentionPeriod"],
  };
}

export function cacheConfigurationDeserializer(item: any): CacheConfiguration {
  return {
    maxStorageUsage: item["maxStorageUsage"],
    retentionPeriod: item["retentionPeriod"],
  };
}

/** Base exporter using TCP as transport protocol. */
export interface TcpExporter {
  /** TCP url to export. */
  url: string;
}

export function tcpExporterSerializer(item: TcpExporter): any {
  return { url: item["url"] };
}

export function tcpExporterDeserializer(item: any): TcpExporter {
  return {
    url: item["url"],
  };
}

/** Service Info. */
export interface Service {
  /** Pipelines belonging to a given pipeline group. */
  pipelines: Pipeline[];
  /** Persistence options to all pipelines in the instance. */
  persistence?: PersistenceConfigurations;
}

export function serviceSerializer(item: Service): any {
  return {
    pipelines: pipelineArraySerializer(item["pipelines"]),
    persistence: !item["persistence"]
      ? item["persistence"]
      : persistenceConfigurationsSerializer(item["persistence"]),
  };
}

export function serviceDeserializer(item: any): Service {
  return {
    pipelines: pipelineArrayDeserializer(item["pipelines"]),
    persistence: !item["persistence"]
      ? item["persistence"]
      : persistenceConfigurationsDeserializer(item["persistence"]),
  };
}

export function pipelineArraySerializer(result: Array<Pipeline>): any[] {
  return result.map((item) => {
    return pipelineSerializer(item);
  });
}

export function pipelineArrayDeserializer(result: Array<Pipeline>): any[] {
  return result.map((item) => {
    return pipelineDeserializer(item);
  });
}

/** Pipeline Info. */
export interface Pipeline {
  /** Name of the pipeline. */
  name: string;
  /** The type of pipeline */
  type: PipelineType;
  /** Reference to receivers configured for the pipeline. */
  receivers: string[];
  /** Reference to processors configured for the pipeline. */
  processors?: string[];
  /** Reference to exporters configured for the pipeline. */
  exporters: string[];
}

export function pipelineSerializer(item: Pipeline): any {
  return {
    name: item["name"],
    type: item["type"],
    receivers: item["receivers"].map((p: any) => {
      return p;
    }),
    processors: !item["processors"]
      ? item["processors"]
      : item["processors"].map((p: any) => {
          return p;
        }),
    exporters: item["exporters"].map((p: any) => {
      return p;
    }),
  };
}

export function pipelineDeserializer(item: any): Pipeline {
  return {
    name: item["name"],
    type: item["type"],
    receivers: item["receivers"].map((p: any) => {
      return p;
    }),
    processors: !item["processors"]
      ? item["processors"]
      : item["processors"].map((p: any) => {
          return p;
        }),
    exporters: item["exporters"].map((p: any) => {
      return p;
    }),
  };
}

/** The pipeline type. */
export enum KnownPipelineType {
  /** Pipeline for logs telemetry. */
  Logs = "logs",
}

/**
 * The pipeline type. \
 * {@link KnownPipelineType} can be used interchangeably with PipelineType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **logs**: Pipeline for logs telemetry.
 */
export type PipelineType = string;

/** Persistence options to all pipelines in the instance. */
export interface PersistenceConfigurations {
  /** The name of the mounted persistent volume. */
  persistentVolumeName: string;
}

export function persistenceConfigurationsSerializer(
  item: PersistenceConfigurations,
): any {
  return { persistentVolumeName: item["persistentVolumeName"] };
}

export function persistenceConfigurationsDeserializer(
  item: any,
): PersistenceConfigurations {
  return {
    persistentVolumeName: item["persistentVolumeName"],
  };
}

export function networkingConfigurationArraySerializer(
  result: Array<NetworkingConfiguration>,
): any[] {
  return result.map((item) => {
    return networkingConfigurationSerializer(item);
  });
}

export function networkingConfigurationArrayDeserializer(
  result: Array<NetworkingConfiguration>,
): any[] {
  return result.map((item) => {
    return networkingConfigurationDeserializer(item);
  });
}

/** Networking configuration for the pipeline group instance. */
export interface NetworkingConfiguration {
  /** External networking mode. */
  externalNetworkingMode: ExternalNetworkingMode;
  /** The address exposed on the cluster. Example: azuremonitorpipeline.contoso.com. */
  host?: string;
  /** Networking routes configuration. */
  routes: NetworkingRoute[];
}

export function networkingConfigurationSerializer(
  item: NetworkingConfiguration,
): any {
  return {
    externalNetworkingMode: item["externalNetworkingMode"],
    host: item["host"],
    routes: networkingRouteArraySerializer(item["routes"]),
  };
}

export function networkingConfigurationDeserializer(
  item: any,
): NetworkingConfiguration {
  return {
    externalNetworkingMode: item["externalNetworkingMode"],
    host: item["host"],
    routes: networkingRouteArrayDeserializer(item["routes"]),
  };
}

/** The mode of the external networking. */
export enum KnownExternalNetworkingMode {
  /** Load balancer only. */
  LoadBalancerOnly = "LoadBalancerOnly",
}

/**
 * The mode of the external networking. \
 * {@link KnownExternalNetworkingMode} can be used interchangeably with ExternalNetworkingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LoadBalancerOnly**: Load balancer only.
 */
export type ExternalNetworkingMode = string;

export function networkingRouteArraySerializer(
  result: Array<NetworkingRoute>,
): any[] {
  return result.map((item) => {
    return networkingRouteSerializer(item);
  });
}

export function networkingRouteArrayDeserializer(
  result: Array<NetworkingRoute>,
): any[] {
  return result.map((item) => {
    return networkingRouteDeserializer(item);
  });
}

/** Networking route configuration. */
export interface NetworkingRoute {
  /** The name of the previously defined receiver. */
  receiver: string;
  /** The port that will be configured externally. If not specified, it will use the port from the receiver definition. */
  port?: number;
  /** Route path. */
  path?: string;
  /** Route subdomain. */
  subdomain?: string;
}

export function networkingRouteSerializer(item: NetworkingRoute): any {
  return {
    receiver: item["receiver"],
    port: item["port"],
    path: item["path"],
    subdomain: item["subdomain"],
  };
}

export function networkingRouteDeserializer(item: any): NetworkingRoute {
  return {
    receiver: item["receiver"],
    port: item["port"],
    path: item["path"],
    subdomain: item["subdomain"],
  };
}

/** The provisioning state of a resource. */
export enum KnownProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** The resource is being created. */
  Creating = "Creating",
  /** The resource is being deleted. */
  Deleting = "Deleting",
}

/**
 * The provisioning state of a resource. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Creating**: The resource is being created. \
 * **Deleting**: The resource is being deleted.
 */
export type ProvisioningState = string;

/** The complex type of the extended location. */
export interface ExtendedLocation {
  /** The name of the extended location. */
  name: string;
  /** The type of the extended location. */
  type: ExtendedLocationType;
}

export function extendedLocationSerializer(item: ExtendedLocation): any {
  return { name: item["name"], type: item["type"] };
}

export function extendedLocationDeserializer(item: any): ExtendedLocation {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** The supported ExtendedLocation types. */
export enum KnownExtendedLocationType {
  /** Azure Edge Zones location type */
  EdgeZone = "EdgeZone",
  /** Azure Custom Locations type */
  CustomLocation = "CustomLocation",
}

/**
 * The supported ExtendedLocation types. \
 * {@link KnownExtendedLocationType} can be used interchangeably with ExtendedLocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EdgeZone**: Azure Edge Zones location type \
 * **CustomLocation**: Azure Custom Locations type
 */
export type ExtendedLocationType = string;

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(item: TrackedResource): any {
  return { tags: item["tags"], location: item["location"] };
}

export function trackedResourceDeserializer(item: any): TrackedResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: item["tags"],
    location: item["location"],
  };
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

export function resourceSerializer(item: Resource): any {
  return item;
}

export function resourceDeserializer(item: any): Resource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    createdAt: !item["createdAt"]
      ? item["createdAt"]
      : new Date(item["createdAt"]),
    lastModifiedBy: item["lastModifiedBy"],
    lastModifiedByType: item["lastModifiedByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

/** The kind of entity that created the resource. */
export enum KnownCreatedByType {
  /** The entity was created by a user. */
  User = "User",
  /** The entity was created by an application. */
  Application = "Application",
  /** The entity was created by a managed identity. */
  ManagedIdentity = "ManagedIdentity",
  /** The entity was created by a key. */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnowncreatedByType} can be used interchangeably with createdByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
  };
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(
  result: Array<ErrorAdditionalInfo>,
): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

export function errorAdditionalInfoDeserializer(
  item: any,
): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: !item["info"]
      ? item["info"]
      : _errorAdditionalInfoInfoDeserializer(item["info"]),
  };
}

/** model interface _ErrorAdditionalInfoInfo */
export interface _ErrorAdditionalInfoInfo {}

export function _errorAdditionalInfoInfoDeserializer(
  item: any,
): _ErrorAdditionalInfoInfo {
  return item;
}

/** The type used for update operations of the PipelineGroup. */
export interface PipelineGroupUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: PipelineGroupUpdateProperties;
}

export function pipelineGroupUpdateSerializer(item: PipelineGroupUpdate): any {
  return {
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : pipelineGroupUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the PipelineGroup. */
export interface PipelineGroupUpdateProperties {
  /** Defines the amount of replicas of the pipeline group instance. */
  replicas?: number;
  /** The receivers specified for a pipeline group instance. */
  receivers?: Receiver[];
  /** The processors specified for a pipeline group instance. */
  processors?: Processor[];
  /** The exporters specified for a pipeline group instance. */
  exporters?: Exporter[];
  /** The service section for a given pipeline group instance. */
  service?: Service;
  /** Networking configurations for the pipeline group instance. */
  networkingConfigurations?: NetworkingConfiguration[];
}

export function pipelineGroupUpdatePropertiesSerializer(
  item: PipelineGroupUpdateProperties,
): any {
  return {
    replicas: item["replicas"],
    receivers: !item["receivers"]
      ? item["receivers"]
      : receiverArraySerializer(item["receivers"]),
    processors: !item["processors"]
      ? item["processors"]
      : processorArraySerializer(item["processors"]),
    exporters: !item["exporters"]
      ? item["exporters"]
      : exporterArraySerializer(item["exporters"]),
    service: !item["service"]
      ? item["service"]
      : serviceSerializer(item["service"]),
    networkingConfigurations: !item["networkingConfigurations"]
      ? item["networkingConfigurations"]
      : networkingConfigurationArraySerializer(
          item["networkingConfigurations"],
        ),
  };
}

/** The response of a PipelineGroup list operation. */
export interface _PipelineGroupListResult {
  /** The PipelineGroup items on this page */
  value: PipelineGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pipelineGroupListResultDeserializer(
  item: any,
): _PipelineGroupListResult {
  return {
    value: pipelineGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function pipelineGroupArraySerializer(
  result: Array<PipelineGroup>,
): any[] {
  return result.map((item) => {
    return pipelineGroupSerializer(item);
  });
}

export function pipelineGroupArrayDeserializer(
  result: Array<PipelineGroup>,
): any[] {
  return result.map((item) => {
    return pipelineGroupDeserializer(item);
  });
}

/** An Azure Monitor Workspace definition. */
export interface AzureMonitorWorkspace extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AzureMonitorWorkspaceProperties;
  /** Resource entity tag (ETag) */
  readonly etag?: string;
}

export function azureMonitorWorkspaceSerializer(
  item: AzureMonitorWorkspace,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : azureMonitorWorkspacePropertiesSerializer(item["properties"]),
  };
}

export function azureMonitorWorkspaceDeserializer(
  item: any,
): AzureMonitorWorkspace {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : azureMonitorWorkspacePropertiesDeserializer(item["properties"]),
    etag: item["etag"],
  };
}

/** Properties that need to be specified to create a new workspace. */
export interface AzureMonitorWorkspaceProperties {
  /** The immutable ID of the Azure Monitor workspace. This property is read-only. */
  readonly accountId?: string;
  /** Information about metrics for the Azure Monitor workspace */
  metrics?: Metrics;
  /** The provisioning state of the Azure Monitor workspace. Set to Succeeded if everything is healthy. */
  readonly provisioningState?: ProvisioningState;
  /** The Data Collection Rule and Endpoint used for ingestion by default. */
  readonly defaultIngestionSettings?: IngestionSettings;
  /** List of private endpoint connections. */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /** Gets or sets allow or disallow public network access to workspace */
  readonly publicNetworkAccess?: PublicNetworkAccess;
}

export function azureMonitorWorkspacePropertiesSerializer(
  item: AzureMonitorWorkspaceProperties,
): any {
  return {
    metrics: !item["metrics"]
      ? item["metrics"]
      : metricsSerializer(item["metrics"]),
  };
}

export function azureMonitorWorkspacePropertiesDeserializer(
  item: any,
): AzureMonitorWorkspaceProperties {
  return {
    accountId: item["accountId"],
    metrics: !item["metrics"]
      ? item["metrics"]
      : metricsDeserializer(item["metrics"]),
    provisioningState: item["provisioningState"],
    defaultIngestionSettings: !item["defaultIngestionSettings"]
      ? item["defaultIngestionSettings"]
      : ingestionSettingsDeserializer(item["defaultIngestionSettings"]),
    privateEndpointConnections: !item["privateEndpointConnections"]
      ? item["privateEndpointConnections"]
      : privateEndpointConnectionArrayDeserializer(
          item["privateEndpointConnections"],
        ),
    publicNetworkAccess: item["publicNetworkAccess"],
  };
}

/** Information about metrics for the workspace */
export interface Metrics {
  /** The Prometheus query endpoint for the workspace */
  readonly prometheusQueryEndpoint?: string;
  /** An internal identifier for the metrics container. Only to be used by the system */
  readonly internalId?: string;
}

export function metricsSerializer(item: Metrics): any {
  return item;
}

export function metricsDeserializer(item: any): Metrics {
  return {
    prometheusQueryEndpoint: item["prometheusQueryEndpoint"],
    internalId: item["internalId"],
  };
}

/** Settings for data ingestion */
export interface IngestionSettings {
  /** The Azure resource Id of the default data collection rule for this workspace. */
  readonly dataCollectionRuleResourceId?: string;
  /** The Azure resource Id of the default data collection endpoint for this workspace. */
  readonly dataCollectionEndpointResourceId?: string;
}

export function ingestionSettingsDeserializer(item: any): IngestionSettings {
  return {
    dataCollectionRuleResourceId: item["dataCollectionRuleResourceId"],
    dataCollectionEndpointResourceId: item["dataCollectionEndpointResourceId"],
  };
}

export function privateEndpointConnectionArrayDeserializer(
  result: Array<PrivateEndpointConnection>,
): any[] {
  return result.map((item) => {
    return privateEndpointConnectionDeserializer(item);
  });
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends Resource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

export function privateEndpointConnectionDeserializer(
  item: any,
): PrivateEndpointConnection {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : privateEndpointConnectionPropertiesDeserializer(item["properties"]),
  };
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The group ids for the private endpoint resource. */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /** The provisioning state of the private endpoint connection resource. */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

export function privateEndpointConnectionPropertiesDeserializer(
  item: any,
): PrivateEndpointConnectionProperties {
  return {
    groupIds: !item["groupIds"]
      ? item["groupIds"]
      : item["groupIds"].map((p: any) => {
          return p;
        }),
    privateEndpoint: !item["privateEndpoint"]
      ? item["privateEndpoint"]
      : privateEndpointDeserializer(item["privateEndpoint"]),
    privateLinkServiceConnectionState:
      privateLinkServiceConnectionStateDeserializer(
        item["privateLinkServiceConnectionState"],
      ),
    provisioningState: item["provisioningState"],
  };
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /** The resource identifier for private endpoint */
  readonly id?: string;
}

export function privateEndpointDeserializer(item: any): PrivateEndpoint {
  return {
    id: item["id"],
  };
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export function privateLinkServiceConnectionStateDeserializer(
  item: any,
): PrivateLinkServiceConnectionState {
  return {
    status: item["status"],
    description: item["description"],
    actionsRequired: item["actionsRequired"],
  };
}

/** The private endpoint connection status. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  /** Connectionaiting for approval or rejection */
  Pending = "Pending",
  /** Connection approved */
  Approved = "Approved",
  /** Connection Rejected */
  Rejected = "Rejected",
}

/**
 * The private endpoint connection status. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending**: Connectionaiting for approval or rejection \
 * **Approved**: Connection approved \
 * **Rejected**: Connection Rejected
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** The current provisioning state. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  /** Connection has been provisioned */
  Succeeded = "Succeeded",
  /** Connection is being created */
  Creating = "Creating",
  /** Connection is being deleted */
  Deleting = "Deleting",
  /** Connection provisioning has failed */
  Failed = "Failed",
}

/**
 * The current provisioning state. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Connection has been provisioned \
 * **Creating**: Connection is being created \
 * **Deleting**: Connection is being deleted \
 * **Failed**: Connection provisioning has failed
 */
export type PrivateEndpointConnectionProvisioningState = string;

/** State of the public network access. */
export enum KnownPublicNetworkAccess {
  /** The public network access is enabled */
  Enabled = "Enabled",
  /** The public network access is disabled */
  Disabled = "Disabled",
}

/**
 * State of the public network access. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: The public network access is enabled \
 * **Disabled**: The public network access is disabled
 */
export type PublicNetworkAccess = string;

/** The type used for update operations of the AzureMonitorWorkspace. */
export interface AzureMonitorWorkspaceUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: AzureMonitorWorkspaceUpdateProperties;
}

export function azureMonitorWorkspaceUpdateSerializer(
  item: AzureMonitorWorkspaceUpdate,
): any {
  return {
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : azureMonitorWorkspaceUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the AzureMonitorWorkspace. */
export interface AzureMonitorWorkspaceUpdateProperties {
  /** Information about metrics for the Azure Monitor workspace */
  metrics?: Metrics;
}

export function azureMonitorWorkspaceUpdatePropertiesSerializer(
  item: AzureMonitorWorkspaceUpdateProperties,
): any {
  return {
    metrics: !item["metrics"]
      ? item["metrics"]
      : metricsSerializer(item["metrics"]),
  };
}

/** The response of a AzureMonitorWorkspace list operation. */
export interface _AzureMonitorWorkspaceListResult {
  /** The AzureMonitorWorkspace items on this page */
  value: AzureMonitorWorkspace[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _azureMonitorWorkspaceListResultDeserializer(
  item: any,
): _AzureMonitorWorkspaceListResult {
  return {
    value: azureMonitorWorkspaceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function azureMonitorWorkspaceArraySerializer(
  result: Array<AzureMonitorWorkspace>,
): any[] {
  return result.map((item) => {
    return azureMonitorWorkspaceSerializer(item);
  });
}

export function azureMonitorWorkspaceArrayDeserializer(
  result: Array<AzureMonitorWorkspace>,
): any[] {
  return result.map((item) => {
    return azureMonitorWorkspaceDeserializer(item);
  });
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(
  item: any,
): _OperationListResult {
  return {
    value: operationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function operationArrayDeserializer(result: Array<Operation>): any[] {
  return result.map((item) => {
    return operationDeserializer(item);
  });
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  readonly display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
}

export function operationDeserializer(item: any): Operation {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"]
      ? item["display"]
      : operationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    actionType: item["actionType"],
  };
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  readonly provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  readonly resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  readonly operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  readonly description?: string;
}

export function operationDisplayDeserializer(item: any): OperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export enum KnownOrigin {
  /** Indicates the operation is initiated by a user. */
  user = "user",
  /** Indicates the operation is initiated by a system. */
  system = "system",
  /** Indicates the operation is initiated by a user or system. */
  "user,system" = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user**: Indicates the operation is initiated by a user. \
 * **system**: Indicates the operation is initiated by a system. \
 * **user,system**: Indicates the operation is initiated by a user or system.
 */
export type Origin = string;

/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export enum KnownActionType {
  /** Actions are for internal-only APIs. */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**: Actions are for internal-only APIs.
 */
export type ActionType = string;

/** Microsoft.Monitor Versions */
export enum KnownVersions {
  /** API Version 2023-10-01-preview */
  "2023-10-01-preview" = "2023-10-01-preview",
}
