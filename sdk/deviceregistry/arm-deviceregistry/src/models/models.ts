// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

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

export function resourceSerializer(item: Resource) {
  return item as any;
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

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** billingContainer Model as Azure resource whose sole purpose is to keep track of billables resources under a subscription. */
export interface BillingContainer extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: BillingContainerProperties;
  /** Resource ETag */
  readonly etag?: string;
}

/** Defines the billingContainer properties. */
export interface BillingContainerProperties {
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

/** Known values of {@link ResourceProvisioningState} that the service accepts. */
export enum KnownResourceProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
}

/**
 * The provisioning state of a resource type. \
 * {@link KnownResourceProvisioningState} can be used interchangeably with ResourceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ResourceProvisioningState = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
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

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

/** The response of a BillingContainer list operation. */
export interface _BillingContainerListResult {
  /** The BillingContainer items on this page */
  value: BillingContainer[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(
  item: TrackedResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
  };
}

/** Asset Endpoint Profile definition. */
export interface AssetEndpointProfile extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AssetEndpointProfileProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function assetEndpointProfileSerializer(
  item: AssetEndpointProfile,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : assetEndpointProfilePropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** Defines the Asset Endpoint Profile properties. */
export interface AssetEndpointProfileProperties {
  /** Globally unique, immutable, non-reusable id. */
  readonly uuid?: string;
  /** The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration. */
  targetAddress: string;
  /** Defines the configuration for the connector type that is being used with the endpoint profile. */
  endpointProfileType: string;
  /** Defines the client authentication mechanism to the server. */
  authentication?: Authentication;
  /** Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF). */
  additionalConfiguration?: string;
  /** Reference to a discovered asset endpoint profile. Populated only if the asset endpoint profile has been created from discovery flow. Discovered asset endpoint profile name must be provided. */
  discoveredAssetEndpointProfileRef?: string;
  /** Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources. */
  readonly status?: AssetEndpointProfileStatus;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function assetEndpointProfilePropertiesSerializer(
  item: AssetEndpointProfileProperties,
): Record<string, unknown> {
  return {
    targetAddress: item["targetAddress"],
    endpointProfileType: item["endpointProfileType"],
    authentication: !item.authentication
      ? item.authentication
      : authenticationSerializer(item.authentication),
    additionalConfiguration: item["additionalConfiguration"],
    discoveredAssetEndpointProfileRef:
      item["discoveredAssetEndpointProfileRef"],
  };
}

/** Definition of the client authentication mechanism to the server. */
export interface Authentication {
  /** Defines the method to authenticate the user of the client at the server. */
  method: AuthenticationMethod;
  /** Defines the username and password references when UsernamePassword user authentication mode is selected. */
  usernamePasswordCredentials?: UsernamePasswordCredentials;
  /** Defines the certificate reference when Certificate user authentication mode is selected. */
  x509Credentials?: X509Credentials;
}

export function authenticationSerializer(
  item: Authentication,
): Record<string, unknown> {
  return {
    method: item["method"],
    usernamePasswordCredentials: !item.usernamePasswordCredentials
      ? item.usernamePasswordCredentials
      : usernamePasswordCredentialsSerializer(item.usernamePasswordCredentials),
    x509Credentials: !item.x509Credentials
      ? item.x509Credentials
      : x509CredentialsSerializer(item.x509Credentials),
  };
}

/** Known values of {@link AuthenticationMethod} that the service accepts. */
export enum KnownAuthenticationMethod {
  /** Anonymous */
  Anonymous = "Anonymous",
  /** Certificate */
  Certificate = "Certificate",
  /** UsernamePassword */
  UsernamePassword = "UsernamePassword",
}

/**
 * The method to authenticate the user of the client at the server. \
 * {@link KnownAuthenticationMethod} can be used interchangeably with AuthenticationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **Certificate** \
 * **UsernamePassword**
 */
export type AuthenticationMethod = string;

/** The credentials for authentication mode UsernamePassword. */
export interface UsernamePasswordCredentials {
  /** The name of the secret containing the username. */
  usernameSecretName: string;
  /** The name of the secret containing the password. */
  passwordSecretName: string;
}

export function usernamePasswordCredentialsSerializer(
  item: UsernamePasswordCredentials,
): Record<string, unknown> {
  return {
    usernameSecretName: item["usernameSecretName"],
    passwordSecretName: item["passwordSecretName"],
  };
}

/** The x509 certificate for authentication mode Certificate. */
export interface X509Credentials {
  /** The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx). */
  certificateSecretName: string;
}

export function x509CredentialsSerializer(
  item: X509Credentials,
): Record<string, unknown> {
  return {
    certificateSecretName: item["certificateSecretName"],
  };
}

/** Defines the asset endpoint profile status properties. */
export interface AssetEndpointProfileStatus {
  /** Array object to transfer and persist errors that originate from the Edge. */
  readonly errors?: AssetEndpointProfileStatusError[];
}

/** Defines the asset endpoint profile status error properties. */
export interface AssetEndpointProfileStatusError {
  /** Error code for classification of errors (ex: 400, 404, 500, etc.). */
  readonly code?: number;
  /** Human readable helpful error message to provide additional context for error (ex: “targetAddress 'foo' is not a valid url”). */
  readonly message?: string;
}

/** The extended location. */
export interface ExtendedLocation {
  /** The extended location type. */
  type: string;
  /** The extended location name. */
  name: string;
}

export function extendedLocationSerializer(
  item: ExtendedLocation,
): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
  };
}

/** The type used for update operations of the AssetEndpointProfile. */
export interface AssetEndpointProfileUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: AssetEndpointProfileUpdateProperties;
}

export function assetEndpointProfileUpdateSerializer(
  item: AssetEndpointProfileUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : assetEndpointProfileUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the AssetEndpointProfile. */
export interface AssetEndpointProfileUpdateProperties {
  /** The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration. */
  targetAddress?: string;
  /** Defines the configuration for the connector type that is being used with the endpoint profile. */
  endpointProfileType?: string;
  /** Defines the client authentication mechanism to the server. */
  authentication?: Authentication;
  /** Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF). */
  additionalConfiguration?: string;
}

export function assetEndpointProfileUpdatePropertiesSerializer(
  item: AssetEndpointProfileUpdateProperties,
): Record<string, unknown> {
  return {
    targetAddress: item["targetAddress"],
    endpointProfileType: item["endpointProfileType"],
    authentication: !item.authentication
      ? item.authentication
      : authenticationSerializer(item.authentication),
    additionalConfiguration: item["additionalConfiguration"],
  };
}

/** The response of a AssetEndpointProfile list operation. */
export interface _AssetEndpointProfileListResult {
  /** The AssetEndpointProfile items on this page */
  value: AssetEndpointProfile[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Asset definition. */
export interface Asset extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AssetProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function assetSerializer(item: Asset): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : assetPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** Defines the asset properties. */
export interface AssetProperties {
  /** Globally unique, immutable, non-reusable id. */
  readonly uuid?: string;
  /** Enabled/Disabled status of the asset. */
  enabled?: boolean;
  /** Asset id provided by the customer. */
  externalAssetId?: string;
  /** Human-readable display name. */
  displayName?: string;
  /** Human-readable description of the asset. */
  description?: string;
  /** A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must provide asset endpoint profile name. */
  assetEndpointProfileRef: string;
  /** An integer that is incremented each time the resource is modified. */
  readonly version?: number;
  /** Asset manufacturer name. */
  manufacturer?: string;
  /** Asset manufacturer URI. */
  manufacturerUri?: string;
  /** Asset model name. */
  model?: string;
  /** Asset product code. */
  productCode?: string;
  /** Revision number of the hardware. */
  hardwareRevision?: string;
  /** Revision number of the software. */
  softwareRevision?: string;
  /** Reference to the documentation. */
  documentationUri?: string;
  /** Asset serial number. */
  serialNumber?: string;
  /** A set of key-value pairs that contain custom attributes set by the customer. */
  attributes?: Record<string, any>;
  /** Reference to a list of discovered assets. Populated only if the asset has been created from discovery flow. Discovered asset names must be provided. */
  discoveredAssetRefs?: string[];
  /** Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here. */
  defaultDatasetsConfiguration?: string;
  /** Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. */
  defaultEventsConfiguration?: string;
  /** Object that describes the default topic information for the asset. */
  defaultTopic?: Topic;
  /** Array of datasets that are part of the asset. Each dataset describes the data points that make up the set. */
  datasets?: Dataset[];
  /** Array of events that are part of the asset. Each event can have per-event configuration. */
  events?: Event[];
  /** Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources. */
  readonly status?: AssetStatus;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function assetPropertiesSerializer(
  item: AssetProperties,
): Record<string, unknown> {
  return {
    enabled: item["enabled"],
    externalAssetId: item["externalAssetId"],
    displayName: item["displayName"],
    description: item["description"],
    assetEndpointProfileRef: item["assetEndpointProfileRef"],
    manufacturer: item["manufacturer"],
    manufacturerUri: item["manufacturerUri"],
    model: item["model"],
    productCode: item["productCode"],
    hardwareRevision: item["hardwareRevision"],
    softwareRevision: item["softwareRevision"],
    documentationUri: item["documentationUri"],
    serialNumber: item["serialNumber"],
    attributes: !item.attributes
      ? item.attributes
      : (serializeRecord(item.attributes as any) as any),
    discoveredAssetRefs: item["discoveredAssetRefs"],
    defaultDatasetsConfiguration: item["defaultDatasetsConfiguration"],
    defaultEventsConfiguration: item["defaultEventsConfiguration"],
    defaultTopic: !item.defaultTopic
      ? item.defaultTopic
      : topicSerializer(item.defaultTopic),
    datasets:
      item["datasets"] === undefined
        ? item["datasets"]
        : item["datasets"].map(datasetSerializer),
    events:
      item["events"] === undefined
        ? item["events"]
        : item["events"].map(eventSerializer),
  };
}

/** Object that describes the topic information. */
export interface Topic {
  /** The topic path for messages published to an MQTT broker. */
  path: string;
  /** When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'. */
  retain?: TopicRetainType;
}

export function topicSerializer(item: Topic): Record<string, unknown> {
  return {
    path: item["path"],
    retain: item["retain"],
  };
}

/** Known values of {@link TopicRetainType} that the service accepts. */
export enum KnownTopicRetainType {
  /** Keep */
  Keep = "Keep",
  /** Never */
  Never = "Never",
}

/**
 * Topic retain types. \
 * {@link KnownTopicRetainType} can be used interchangeably with TopicRetainType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Keep** \
 * **Never**
 */
export type TopicRetainType = string;

/** Defines the dataset properties. */
export interface Dataset {
  /** Name of the dataset. */
  name: string;
  /** Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset. */
  datasetConfiguration?: string;
  /** Object that describes the topic information for the specific dataset. */
  topic?: Topic;
  /** Array of data points that are part of the dataset. Each data point can have per-data point configuration. */
  dataPoints?: DataPoint[];
}

export function datasetSerializer(item: Dataset): Record<string, unknown> {
  return {
    name: item["name"],
    datasetConfiguration: item["datasetConfiguration"],
    topic: !item.topic ? item.topic : topicSerializer(item.topic),
    dataPoints:
      item["dataPoints"] === undefined
        ? item["dataPoints"]
        : item["dataPoints"].map(dataPointSerializer),
  };
}

/** Defines the data point properties. */
export interface DataPointBase {
  /** The name of the data point. */
  name: string;
  /** The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset. */
  dataSource: string;
  /** Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize. */
  dataPointConfiguration?: string;
}

export function dataPointBaseSerializer(
  item: DataPointBase,
): Record<string, unknown> {
  return {
    name: item["name"],
    dataSource: item["dataSource"],
    dataPointConfiguration: item["dataPointConfiguration"],
  };
}

/** Defines the data point properties. */
export interface DataPoint extends DataPointBase {
  /** An indication of how the data point should be mapped to OpenTelemetry. */
  observabilityMode?: DataPointObservabilityMode;
}

export function dataPointSerializer(item: DataPoint): Record<string, unknown> {
  return {
    name: item["name"],
    dataSource: item["dataSource"],
    dataPointConfiguration: item["dataPointConfiguration"],
    observabilityMode: item["observabilityMode"],
  };
}

/** Known values of {@link DataPointObservabilityMode} that the service accepts. */
export enum KnownDataPointObservabilityMode {
  /** None */
  None = "None",
  /** Counter */
  Counter = "Counter",
  /** Gauge */
  Gauge = "Gauge",
  /** Histogram */
  Histogram = "Histogram",
  /** Log */
  Log = "Log",
}

/**
 * Defines the data point observability mode. \
 * {@link KnownDataPointObservabilityMode} can be used interchangeably with DataPointObservabilityMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Counter** \
 * **Gauge** \
 * **Histogram** \
 * **Log**
 */
export type DataPointObservabilityMode = string;

/** Defines the event properties. */
export interface EventBase {
  /** The name of the event. */
  name: string;
  /** The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset. */
  eventNotifier: string;
  /** Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize. */
  eventConfiguration?: string;
  /** Object that describes the topic information for the specific event. */
  topic?: Topic;
}

export function eventBaseSerializer(item: EventBase): Record<string, unknown> {
  return {
    name: item["name"],
    eventNotifier: item["eventNotifier"],
    eventConfiguration: item["eventConfiguration"],
    topic: !item.topic ? item.topic : topicSerializer(item.topic),
  };
}

/** Defines the event properties. */
export interface Event extends EventBase {
  /** An indication of how the event should be mapped to OpenTelemetry. */
  observabilityMode?: EventObservabilityMode;
}

export function eventSerializer(item: Event): Record<string, unknown> {
  return {
    name: item["name"],
    eventNotifier: item["eventNotifier"],
    eventConfiguration: item["eventConfiguration"],
    topic: !item.topic ? item.topic : topicSerializer(item.topic),
    observabilityMode: item["observabilityMode"],
  };
}

/** Known values of {@link EventObservabilityMode} that the service accepts. */
export enum KnownEventObservabilityMode {
  /** None */
  None = "None",
  /** Log */
  Log = "Log",
}

/**
 * Defines the event observability mode. \
 * {@link KnownEventObservabilityMode} can be used interchangeably with EventObservabilityMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Log**
 */
export type EventObservabilityMode = string;

/** Defines the asset status properties. */
export interface AssetStatus {
  /** Array object to transfer and persist errors that originate from the Edge. */
  readonly errors?: AssetStatusError[];
  /** A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version. */
  readonly version?: number;
  /** Array of dataset statuses that describe the status of each dataset. */
  readonly datasets?: AssetStatusDataset[];
  /** Array of event statuses that describe the status of each event. */
  readonly events?: AssetStatusEvent[];
}

/** Defines the asset status error properties. */
export interface AssetStatusError {
  /** Error code for classification of errors (ex: 400, 404, 500, etc.). */
  readonly code?: number;
  /** Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”). */
  readonly message?: string;
}

/** Defines the asset status dataset properties. */
export interface AssetStatusDataset {
  /** The name of the dataset. Must be unique within the status.datasets array. This name is used to correlate between the spec and status dataset information. */
  readonly name: string;
  /** The message schema reference object. */
  readonly messageSchemaReference?: MessageSchemaReference;
}

/** Defines the message schema reference properties. */
export interface MessageSchemaReference {
  /** The message schema registry namespace. */
  readonly schemaRegistryNamespace: string;
  /** The message schema name. */
  readonly schemaName: string;
  /** The message schema version. */
  readonly schemaVersion: string;
}

/** Defines the asset status event properties. */
export interface AssetStatusEvent {
  /** The name of the event. Must be unique within the status.events array. This name is used to correlate between the spec and status event information. */
  readonly name: string;
  /** The message schema reference object. */
  readonly messageSchemaReference?: MessageSchemaReference;
}

/** The type used for update operations of the Asset. */
export interface AssetUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: AssetUpdateProperties;
}

export function assetUpdateSerializer(
  item: AssetUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : assetUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the Asset. */
export interface AssetUpdateProperties {
  /** Enabled/Disabled status of the asset. */
  enabled?: boolean;
  /** Human-readable display name. */
  displayName?: string;
  /** Human-readable description of the asset. */
  description?: string;
  /** Asset manufacturer name. */
  manufacturer?: string;
  /** Asset manufacturer URI. */
  manufacturerUri?: string;
  /** Asset model name. */
  model?: string;
  /** Asset product code. */
  productCode?: string;
  /** Revision number of the hardware. */
  hardwareRevision?: string;
  /** Revision number of the software. */
  softwareRevision?: string;
  /** Reference to the documentation. */
  documentationUri?: string;
  /** Asset serial number. */
  serialNumber?: string;
  /** A set of key-value pairs that contain custom attributes set by the customer. */
  attributes?: Record<string, any>;
  /** Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here. */
  defaultDatasetsConfiguration?: string;
  /** Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. */
  defaultEventsConfiguration?: string;
  /** Object that describes the default topic information for the asset. */
  defaultTopic?: Topic;
  /** Array of datasets that are part of the asset. Each dataset describes the data points that make up the set. */
  datasets?: Dataset[];
  /** Array of events that are part of the asset. Each event can have per-event configuration. */
  events?: Event[];
}

export function assetUpdatePropertiesSerializer(
  item: AssetUpdateProperties,
): Record<string, unknown> {
  return {
    enabled: item["enabled"],
    displayName: item["displayName"],
    description: item["description"],
    manufacturer: item["manufacturer"],
    manufacturerUri: item["manufacturerUri"],
    model: item["model"],
    productCode: item["productCode"],
    hardwareRevision: item["hardwareRevision"],
    softwareRevision: item["softwareRevision"],
    documentationUri: item["documentationUri"],
    serialNumber: item["serialNumber"],
    attributes: !item.attributes
      ? item.attributes
      : (serializeRecord(item.attributes as any) as any),
    defaultDatasetsConfiguration: item["defaultDatasetsConfiguration"],
    defaultEventsConfiguration: item["defaultEventsConfiguration"],
    defaultTopic: !item.defaultTopic
      ? item.defaultTopic
      : topicSerializer(item.defaultTopic),
    datasets:
      item["datasets"] === undefined
        ? item["datasets"]
        : item["datasets"].map(datasetSerializer),
    events:
      item["events"] === undefined
        ? item["events"]
        : item["events"].map(eventSerializer),
  };
}

/** The response of a Asset list operation. */
export interface _AssetListResult {
  /** The Asset items on this page */
  value: Asset[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The current status of an async operation. */
export interface OperationStatusResult {
  /** Fully qualified ID for the async operation. */
  id?: string;
  /** Name of the async operation. */
  name?: string;
  /** Operation status. */
  status: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** The start time of the operation. */
  startTime?: Date;
  /** The end time of the operation. */
  endTime?: Date;
  /** The operations list. */
  operations?: OperationStatusResult[];
  /** If present, details of the operation error. */
  error?: ErrorDetail;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
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

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** user */
  user = "user",
  /** system */
  system = "system",
  /** user,system */
  "user,system" = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;
/** Microsoft.DeviceRegistry Resource Provider supported API versions. */
export type Versions =
  | "2023-11-01-preview"
  | "2024-09-01-preview"
  | "2024-11-01";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | ResourceProvisioningState
  | "Accepted"
  | "Deleting"
  | string;
