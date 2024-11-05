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

/** Azure for Operators 5G Core Observability Service Resource */
export interface ObservabilityServiceResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ObservabilityServiceResourceProperties;
}

export function observabilityServiceResourceSerializer(
  item: ObservabilityServiceResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : observabilityServiceResourcePropertiesSerializer(item.properties),
  };
}

/** Observability Service Properties. */
export interface ObservabilityServiceResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Azure for Operators 5G Core Observability component parameters.  One set per component type */
  componentParameters: QualifiedComponentDeploymentParameters[];
  /** Reference to cluster where the observability components are deployed */
  clusterService: string;
  /** Release version. This is inherited from the cluster */
  readonly releaseVersion?: string;
  /** Operational status */
  readonly operationalStatus?: OperationalStatus;
}

export function observabilityServiceResourcePropertiesSerializer(
  item: ObservabilityServiceResourceProperties,
): Record<string, unknown> {
  return {
    componentParameters: item["componentParameters"].map(
      qualifiedComponentDeploymentParametersSerializer,
    ),
    clusterService: item["clusterService"],
  };
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

/** Containerized Network Function (CNF) Qualified Deployment Parameters */
export interface QualifiedComponentDeploymentParameters {
  /** Federation Type */
  type: string;
  /** Deployment Parameters */
  parameters?: string;
  /** Deployment secrets */
  secrets?: string;
}

export function qualifiedComponentDeploymentParametersSerializer(
  item: QualifiedComponentDeploymentParameters,
): Record<string, unknown> {
  return {
    type: item["type"],
    parameters: item["parameters"],
    secrets: item["secrets"],
  };
}

/** Operational Status of the resource */
export interface OperationalStatus {
  /** Status of the deployed workload */
  readonly workload?: string;
  /** Health check results */
  readonly healthCheck?: string;
}

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

/** The type used for updating tags in ObservabilityServiceResource resources. */
export interface ObservabilityServiceResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function observabilityServiceResourceTagsUpdateSerializer(
  item: ObservabilityServiceResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a ObservabilityServiceResource list operation. */
export interface _ObservabilityServiceResourceListResult {
  /** The ObservabilityServiceResource items on this page */
  value: ObservabilityServiceResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Azure for Operators 5G Core Cluster Service Resource */
export interface ClusterServiceResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ClusterServiceResourceProperties;
}

export function clusterServiceResourceSerializer(
  item: ClusterServiceResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : clusterServiceResourcePropertiesSerializer(item.properties),
  };
}

/** Cluster Service Properties. */
export interface ClusterServiceResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Cluster type (Lab or Production) */
  deploymentType: SkuDeploymentType;
  /** Azure for Operators 5G Core Release Version.  This is applied to all platform as a service (PaaS) components and running workloads in this cluster */
  releaseVersion: string;
  /** Cluster type specific data.  Contents depend on the cluster type */
  clusterTypeSpecificData: ClusterServiceClusterTypeSpecificDataUnion;
  /** Azure for Operators 5G Core Local PaaS component parameters.  One set per component type */
  componentParameters: QualifiedComponentDeploymentParameters[];
  /** Operational status */
  readonly operationalStatus?: OperationalStatus;
}

export function clusterServiceResourcePropertiesSerializer(
  item: ClusterServiceResourceProperties,
): Record<string, unknown> {
  return {
    deploymentType: item["deploymentType"],
    releaseVersion: item["releaseVersion"],
    clusterTypeSpecificData:
      clusterServiceClusterTypeSpecificDataUnionSerializer(
        item.clusterTypeSpecificData,
      ),
    componentParameters: item["componentParameters"].map(
      qualifiedComponentDeploymentParametersSerializer,
    ),
  };
}

/** Known values of {@link SkuDeploymentType} that the service accepts. */
export enum KnownSkuDeploymentType {
  /** Production */
  Production = "Production",
  /** Lab */
  Lab = "Lab",
}

/**
 * Deployment Type Definitions \
 * {@link KnownSkuDeploymentType} can be used interchangeably with SkuDeploymentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Production** \
 * **Lab**
 */
export type SkuDeploymentType = string;

/** Cluster Service cluster type specific data. */
export interface ClusterServiceClusterTypeSpecificData {
  /** the discriminator possible values: Aks, NexusAks */
  type: ClusterType;
  /** Custom Location resource ID */
  customLocationId: string;
}

export function clusterServiceClusterTypeSpecificDataUnionSerializer(
  item: ClusterServiceClusterTypeSpecificDataUnion,
) {
  switch (item.type) {
    case "Aks":
      return clusterServiceAksClusterDataSerializer(
        item as ClusterServiceAksClusterData,
      );

    case "NexusAks":
      return clusterServiceNexusAksClusterDataSerializer(
        item as ClusterServiceNexusAksClusterData,
      );

    default:
      return clusterServiceClusterTypeSpecificDataSerializer(item);
  }
}

export function clusterServiceClusterTypeSpecificDataSerializer(
  item: ClusterServiceClusterTypeSpecificDataUnion,
): Record<string, unknown> {
  return {
    type: item["type"],
    customLocationId: item["customLocationId"],
  };
}

/** AKS Cluster specific data. */
export interface ClusterServiceAksClusterData
  extends ClusterServiceClusterTypeSpecificData {
  /** Azure Kubernetes Service Properties. */
  type: "Aks";
}

export function clusterServiceAksClusterDataSerializer(
  item: ClusterServiceAksClusterData,
): Record<string, unknown> {
  return {
    type: item["type"],
    customLocationId: item["customLocationId"],
  };
}

/** Nexus AKS Cluster specific data. */
export interface ClusterServiceNexusAksClusterData
  extends ClusterServiceClusterTypeSpecificData {
  /** Nexus Operator Kubenetes Service Properties. */
  type: "NexusAks";
}

export function clusterServiceNexusAksClusterDataSerializer(
  item: ClusterServiceNexusAksClusterData,
): Record<string, unknown> {
  return {
    type: item["type"],
    customLocationId: item["customLocationId"],
  };
}

/** Known values of {@link ClusterType} that the service accepts. */
export enum KnownClusterType {
  /** Aks */
  Aks = "Aks",
  /** NexusAks */
  NexusAks = "NexusAks",
}

/**
 * Cluster Type Definitions \
 * {@link KnownClusterType} can be used interchangeably with ClusterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Aks** \
 * **NexusAks**
 */
export type ClusterType = string;

/** The type used for updating tags in ClusterServiceResource resources. */
export interface ClusterServiceResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function clusterServiceResourceTagsUpdateSerializer(
  item: ClusterServiceResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a ClusterServiceResource list operation. */
export interface _ClusterServiceResourceListResult {
  /** The ClusterServiceResource items on this page */
  value: ClusterServiceResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Azure for Operators 5G Core Network Slice Selection Function (NSSF) Deployment Resource */
export interface NssfDeploymentResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: NssfDeploymentResourceProperties;
}

export function nssfDeploymentResourceSerializer(
  item: NssfDeploymentResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : nssfDeploymentResourcePropertiesSerializer(item.properties),
  };
}

/** NSSF Deployment Properties. */
export interface NssfDeploymentResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Azure for Operators 5G Core NSSF component parameters */
  componentParameters?: string;
  /** Azure for Operators 5G Core NSSF secrets parameters */
  secretsParameters?: string;
  /** Reference to cluster where the Network Function is deployed */
  clusterService: string;
  /** Release version. This is inherited from the cluster */
  readonly releaseVersion?: string;
  /** Operational status */
  readonly operationalStatus?: OperationalStatus;
}

export function nssfDeploymentResourcePropertiesSerializer(
  item: NssfDeploymentResourceProperties,
): Record<string, unknown> {
  return {
    componentParameters: item["componentParameters"],
    secretsParameters: item["secretsParameters"],
    clusterService: item["clusterService"],
  };
}

/** The type used for updating tags in NssfDeploymentResource resources. */
export interface NssfDeploymentResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function nssfDeploymentResourceTagsUpdateSerializer(
  item: NssfDeploymentResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a NssfDeploymentResource list operation. */
export interface _NssfDeploymentResourceListResult {
  /** The NssfDeploymentResource items on this page */
  value: NssfDeploymentResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Azure for Operators 5G Core Network Repository Function (NRF) Deployment Resource */
export interface NrfDeploymentResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: NrfDeploymentResourceProperties;
}

export function nrfDeploymentResourceSerializer(
  item: NrfDeploymentResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : nrfDeploymentResourcePropertiesSerializer(item.properties),
  };
}

/** NRF Deployment Properties. */
export interface NrfDeploymentResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Azure for Operators 5G Core NRF component parameters */
  componentParameters?: string;
  /** Azure for Operators 5G Core NRF secrets parameters */
  secretsParameters?: string;
  /** Reference to cluster where the Network Function is deployed */
  clusterService: string;
  /** Release version. This is inherited from the cluster */
  readonly releaseVersion?: string;
  /** Operational status */
  readonly operationalStatus?: OperationalStatus;
}

export function nrfDeploymentResourcePropertiesSerializer(
  item: NrfDeploymentResourceProperties,
): Record<string, unknown> {
  return {
    componentParameters: item["componentParameters"],
    secretsParameters: item["secretsParameters"],
    clusterService: item["clusterService"],
  };
}

/** The type used for updating tags in NrfDeploymentResource resources. */
export interface NrfDeploymentResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function nrfDeploymentResourceTagsUpdateSerializer(
  item: NrfDeploymentResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a NrfDeploymentResource list operation. */
export interface _NrfDeploymentResourceListResult {
  /** The NrfDeploymentResource items on this page */
  value: NrfDeploymentResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Azure for Operators 5G Core User Plane Function (UPF) Deployment Resource */
export interface UpfDeploymentResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: UpfDeploymentResourceProperties;
}

export function upfDeploymentResourceSerializer(
  item: UpfDeploymentResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : upfDeploymentResourcePropertiesSerializer(item.properties),
  };
}

/** UPF Deployment Properties. */
export interface UpfDeploymentResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Azure for Operators 5G Core UPF component parameters */
  componentParameters: string;
  /** Azure for Operators 5G Core F secrets parameters */
  secretsParameters?: string;
  /** Reference to cluster where the Network Function is deployed */
  clusterService: string;
  /** Release version. This is inherited from the cluster */
  readonly releaseVersion?: string;
  /** Operational status */
  readonly operationalStatus?: OperationalStatus;
}

export function upfDeploymentResourcePropertiesSerializer(
  item: UpfDeploymentResourceProperties,
): Record<string, unknown> {
  return {
    componentParameters: item["componentParameters"],
    secretsParameters: item["secretsParameters"],
    clusterService: item["clusterService"],
  };
}

/** The type used for updating tags in UpfDeploymentResource resources. */
export interface UpfDeploymentResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function upfDeploymentResourceTagsUpdateSerializer(
  item: UpfDeploymentResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a UpfDeploymentResource list operation. */
export interface _UpfDeploymentResourceListResult {
  /** The UpfDeploymentResource items on this page */
  value: UpfDeploymentResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Azure for Operators 5G Core Session Management Function (SMF) Deployment Resource */
export interface SmfDeploymentResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SmfDeploymentResourceProperties;
}

export function smfDeploymentResourceSerializer(
  item: SmfDeploymentResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : smfDeploymentResourcePropertiesSerializer(item.properties),
  };
}

/** SMF Deployment Properties. */
export interface SmfDeploymentResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Azure for Operators 5G Core SMF component parameters */
  componentParameters?: string;
  /** Azure for Operators 5G Core SMF secrets parameters */
  secretsParameters?: string;
  /** Reference to cluster where the Network Function is deployed */
  clusterService: string;
  /** Release version. This is inherited from the cluster */
  readonly releaseVersion?: string;
  /** Operational status */
  readonly operationalStatus?: OperationalStatus;
}

export function smfDeploymentResourcePropertiesSerializer(
  item: SmfDeploymentResourceProperties,
): Record<string, unknown> {
  return {
    componentParameters: item["componentParameters"],
    secretsParameters: item["secretsParameters"],
    clusterService: item["clusterService"],
  };
}

/** The type used for updating tags in SmfDeploymentResource resources. */
export interface SmfDeploymentResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function smfDeploymentResourceTagsUpdateSerializer(
  item: SmfDeploymentResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a SmfDeploymentResource list operation. */
export interface _SmfDeploymentResourceListResult {
  /** The SmfDeploymentResource items on this page */
  value: SmfDeploymentResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Azure for Operators 5G Core Access and Mobility Function (AMF) Deployment Resource */
export interface AmfDeploymentResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AmfDeploymentResourceProperties;
}

export function amfDeploymentResourceSerializer(
  item: AmfDeploymentResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : amfDeploymentResourcePropertiesSerializer(item.properties),
  };
}

/** AMF Deployment Properties. */
export interface AmfDeploymentResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Azure for Operators 5G Core AMF component parameters */
  componentParameters?: string;
  /** Azure for Operators 5G Core AMF secrets parameters */
  secretsParameters?: string;
  /** Reference to cluster where the Network Function is deployed */
  clusterService: string;
  /** Release version. This is inherited from the cluster */
  readonly releaseVersion?: string;
  /** Operational status */
  readonly operationalStatus?: OperationalStatus;
}

export function amfDeploymentResourcePropertiesSerializer(
  item: AmfDeploymentResourceProperties,
): Record<string, unknown> {
  return {
    componentParameters: item["componentParameters"],
    secretsParameters: item["secretsParameters"],
    clusterService: item["clusterService"],
  };
}

/** The type used for updating tags in AmfDeploymentResource resources. */
export interface AmfDeploymentResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function amfDeploymentResourceTagsUpdateSerializer(
  item: AmfDeploymentResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a AmfDeploymentResource list operation. */
export interface _AmfDeploymentResourceListResult {
  /** The AmfDeploymentResource items on this page */
  value: AmfDeploymentResource[];
  /** The link to the next page of items */
  nextLink?: string;
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
/** API Versions */
export type Versions = "2023-10-15-preview";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | string
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted";
/** Alias for ClusterServiceClusterTypeSpecificDataUnion */
export type ClusterServiceClusterTypeSpecificDataUnion =
  | ClusterServiceAksClusterData
  | ClusterServiceNexusAksClusterData
  | ClusterServiceClusterTypeSpecificData;
