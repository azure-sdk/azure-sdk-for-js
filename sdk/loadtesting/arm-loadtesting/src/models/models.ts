// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The response of a LoadTestResource list operation. */
export interface _LoadTestResourceListResult {
  /** The LoadTestResource items on this page */
  value: LoadTestResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _loadTestResourceListResultDeserializer(item: any): _LoadTestResourceListResult {
  return {
    value: loadTestResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function loadTestResourceArraySerializer(result: Array<LoadTestResource>): any[] {
  return result.map((item) => {
    return loadTestResourceSerializer(item);
  });
}

export function loadTestResourceArrayDeserializer(result: Array<LoadTestResource>): any[] {
  return result.map((item) => {
    return loadTestResourceDeserializer(item);
  });
}

/** LoadTest details. */
export interface LoadTestResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: LoadTestProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function loadTestResourceSerializer(item: LoadTestResource): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : loadTestPropertiesSerializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
  };
}

export function loadTestResourceDeserializer(item: any): LoadTestResource {
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
      : loadTestPropertiesDeserializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityDeserializer(item["identity"]),
  };
}

/** LoadTest resource properties. */
export interface LoadTestProperties {
  /** Description of the resource. */
  description?: string;
  /** Resource provisioning state. */
  readonly provisioningState?: ResourceState;
  /** Resource data plane URI. */
  readonly dataPlaneURI?: string;
  /** CMK Encryption property. */
  encryption?: EncryptionProperties;
}

export function loadTestPropertiesSerializer(item: LoadTestProperties): any {
  return {
    description: item["description"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : encryptionPropertiesSerializer(item["encryption"]),
  };
}

export function loadTestPropertiesDeserializer(item: any): LoadTestProperties {
  return {
    description: item["description"],
    provisioningState: item["provisioningState"],
    dataPlaneURI: item["dataPlaneURI"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : encryptionPropertiesDeserializer(item["encryption"]),
  };
}

/** Resources provisioning states. */
export enum KnownResourceState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** Deleted state. */
  Deleted = "Deleted",
}

/**
 * Resources provisioning states. \
 * {@link KnownResourceState} can be used interchangeably with ResourceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Deleted**: Deleted state.
 */
export type ResourceState = string;

/** Key and identity details for Customer Managed Key encryption of load test resource. */
export interface EncryptionProperties {
  /** All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. */
  identity?: EncryptionPropertiesIdentity;
  /** key encryption key Url, versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. */
  keyUrl?: string;
}

export function encryptionPropertiesSerializer(item: EncryptionProperties): any {
  return {
    identity: !item["identity"]
      ? item["identity"]
      : encryptionPropertiesIdentitySerializer(item["identity"]),
    keyUrl: item["keyUrl"],
  };
}

export function encryptionPropertiesDeserializer(item: any): EncryptionProperties {
  return {
    identity: !item["identity"]
      ? item["identity"]
      : encryptionPropertiesIdentityDeserializer(item["identity"]),
    keyUrl: item["keyUrl"],
  };
}

/** All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. */
export interface EncryptionPropertiesIdentity {
  /** Managed identity type to use for accessing encryption key Url. */
  type?: Type;
  /** User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. */
  resourceId?: string | null;
}

export function encryptionPropertiesIdentitySerializer(item: EncryptionPropertiesIdentity): any {
  return { type: item["type"], resourceId: item["resourceId"] };
}

export function encryptionPropertiesIdentityDeserializer(item: any): EncryptionPropertiesIdentity {
  return {
    type: item["type"],
    resourceId: item["resourceId"],
  };
}

/** Managed identity type to use for accessing encryption key Url. */
export enum KnownType {
  /** System assigned identity. */
  SystemAssigned = "SystemAssigned",
  /** User assigned identity. */
  UserAssigned = "UserAssigned",
}

/**
 * Managed identity type to use for accessing encryption key Url. \
 * {@link Knowntype} can be used interchangeably with type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned**: System assigned identity. \
 * **UserAssigned**: User assigned identity.
 */
export type Type = string;

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity | null>;
}

export function managedServiceIdentitySerializer(item: ManagedServiceIdentity): any {
  return {
    type: item["type"],
    userAssignedIdentities: item["userAssignedIdentities"],
  };
}

export function managedServiceIdentityDeserializer(item: any): ManagedServiceIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: item["userAssignedIdentities"],
  };
}

/** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
export enum KnownManagedServiceIdentityType {
  /** No managed identity. */
  None = "None",
  /** System assigned managed identity. */
  SystemAssigned = "SystemAssigned",
  /** User assigned managed identity. */
  UserAssigned = "UserAssigned",
  /** System and user assigned managed identity. */
  SystemAssignedUserAssigned = "SystemAssigned,UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No managed identity. \
 * **SystemAssigned**: System assigned managed identity. \
 * **UserAssigned**: User assigned managed identity. \
 * **SystemAssigned,UserAssigned**: System and user assigned managed identity.
 */
export type ManagedServiceIdentityType = string;

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
}

export function userAssignedIdentitySerializer(item: UserAssignedIdentity): any {
  return item;
}

export function userAssignedIdentityDeserializer(item: any): UserAssignedIdentity {
  return {
    clientId: item["clientId"],
    principalId: item["principalId"],
  };
}

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
    createdAt: !item["createdAt"] ? item["createdAt"] : new Date(item["createdAt"]),
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
    error: !item["error"] ? item["error"] : errorDetailDeserializer(item["error"]),
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
    details: !item["details"] ? item["details"] : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(result: Array<ErrorDetail>): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(result: Array<ErrorAdditionalInfo>): any[] {
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

export function errorAdditionalInfoDeserializer(item: any): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: !item["info"] ? item["info"] : _errorAdditionalInfoInfoDeserializer(item["info"]),
  };
}

/** model interface _ErrorAdditionalInfoInfo */
export interface _ErrorAdditionalInfoInfo {}

export function _errorAdditionalInfoInfoDeserializer(item: any): _ErrorAdditionalInfoInfo {
  return item;
}

/** The type used for update operations of the LoadTestResource. */
export interface LoadTestResourceUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: LoadTestResourceUpdateProperties;
}

export function loadTestResourceUpdateSerializer(item: LoadTestResourceUpdate): any {
  return {
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : loadTestResourceUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the LoadTestResource. */
export interface LoadTestResourceUpdateProperties {
  /** Description of the resource. */
  description?: string;
  /** CMK Encryption property. */
  encryption?: EncryptionProperties;
}

export function loadTestResourceUpdatePropertiesSerializer(
  item: LoadTestResourceUpdateProperties,
): any {
  return {
    description: item["description"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : encryptionPropertiesSerializer(item["encryption"]),
  };
}

/** Values returned by the List operation. */
export interface _PagedOutboundEnvironmentEndpoint {
  /** The OutboundEnvironmentEndpoint items on this page */
  value: OutboundEnvironmentEndpoint[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedOutboundEnvironmentEndpointDeserializer(
  item: any,
): _PagedOutboundEnvironmentEndpoint {
  return {
    value: outboundEnvironmentEndpointArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function outboundEnvironmentEndpointArrayDeserializer(
  result: Array<OutboundEnvironmentEndpoint>,
): any[] {
  return result.map((item) => {
    return outboundEnvironmentEndpointDeserializer(item);
  });
}

/** A collection of related endpoints from the same service for which the Batch service requires outbound access. */
export interface OutboundEnvironmentEndpoint {
  /** The type of service that Azure Load Testing connects to. */
  readonly category?: string;
  /** The endpoints for this service to which the Batch service makes outbound calls. */
  readonly endpoints?: EndpointDependency[];
}

export function outboundEnvironmentEndpointDeserializer(item: any): OutboundEnvironmentEndpoint {
  return {
    category: item["category"],
    endpoints: !item["endpoints"]
      ? item["endpoints"]
      : endpointDependencyArrayDeserializer(item["endpoints"]),
  };
}

export function endpointDependencyArrayDeserializer(result: Array<EndpointDependency>): any[] {
  return result.map((item) => {
    return endpointDependencyDeserializer(item);
  });
}

/** A domain name and connection details used to access a dependency. */
export interface EndpointDependency {
  /** The domain name of the dependency. Domain names may be fully qualified or may contain a * wildcard. */
  readonly domainName: string;
  /** Human-readable supplemental information about the dependency and when it is applicable. */
  readonly description?: string;
  /** The list of connection details for this endpoint. */
  readonly endpointDetails?: EndpointDetail[];
}

export function endpointDependencyDeserializer(item: any): EndpointDependency {
  return {
    domainName: item["domainName"],
    description: item["description"],
    endpointDetails: !item["endpointDetails"]
      ? item["endpointDetails"]
      : endpointDetailArrayDeserializer(item["endpointDetails"]),
  };
}

export function endpointDetailArrayDeserializer(result: Array<EndpointDetail>): any[] {
  return result.map((item) => {
    return endpointDetailDeserializer(item);
  });
}

/** Details about the connection between the Batch service and the endpoint. */
export interface EndpointDetail {
  /** The port an endpoint is connected to. */
  readonly port?: number;
}

export function endpointDetailDeserializer(item: any): EndpointDetail {
  return {
    port: item["port"],
  };
}

/** Quota bucket details object. */
export interface QuotaResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: QuotaResourceProperties;
}

export function quotaResourceDeserializer(item: any): QuotaResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : quotaResourcePropertiesDeserializer(item["properties"]),
  };
}

/** Quota bucket resource properties. */
export interface QuotaResourceProperties {
  /** Current quota limit of the quota bucket. */
  limit?: number;
  /** Current quota usage of the quota bucket. */
  usage?: number;
  /** Resource provisioning state. */
  readonly provisioningState?: ResourceState;
}

export function quotaResourcePropertiesDeserializer(item: any): QuotaResourceProperties {
  return {
    limit: item["limit"],
    usage: item["usage"],
    provisioningState: item["provisioningState"],
  };
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceDeserializer(item: any): ProxyResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** The response of a QuotaResource list operation. */
export interface _QuotaResourceListResult {
  /** The QuotaResource items on this page */
  value: QuotaResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _quotaResourceListResultDeserializer(item: any): _QuotaResourceListResult {
  return {
    value: quotaResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function quotaResourceArrayDeserializer(result: Array<QuotaResource>): any[] {
  return result.map((item) => {
    return quotaResourceDeserializer(item);
  });
}

/** Request object of new quota for a quota bucket. */
export interface QuotaBucketRequest {
  /** Request object of new quota for a quota bucket. */
  properties?: QuotaBucketRequestProperties;
}

export function quotaBucketRequestSerializer(item: QuotaBucketRequest): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : quotaBucketRequestPropertiesSerializer(item["properties"]),
  };
}

/** New quota request request properties. */
export interface QuotaBucketRequestProperties {
  /** Current quota usage of the quota bucket. */
  currentUsage?: number;
  /** Current quota limit of the quota bucket. */
  currentQuota?: number;
  /** New quota limit of the quota bucket. */
  newQuota?: number;
  /** Dimensions for new quota request. */
  dimensions?: QuotaBucketRequestPropertiesDimensions;
}

export function quotaBucketRequestPropertiesSerializer(item: QuotaBucketRequestProperties): any {
  return {
    currentUsage: item["currentUsage"],
    currentQuota: item["currentQuota"],
    newQuota: item["newQuota"],
    dimensions: !item["dimensions"]
      ? item["dimensions"]
      : quotaBucketRequestPropertiesDimensionsSerializer(item["dimensions"]),
  };
}

/** Dimensions for new quota request. */
export interface QuotaBucketRequestPropertiesDimensions {
  /** Subscription Id dimension for new quota request of the quota bucket. */
  subscriptionId?: string;
  /** Location dimension for new quota request of the quota bucket. */
  location?: string;
}

export function quotaBucketRequestPropertiesDimensionsSerializer(
  item: QuotaBucketRequestPropertiesDimensions,
): any {
  return { subscriptionId: item["subscriptionId"], location: item["location"] };
}

/** Check quota availability response object. */
export interface CheckQuotaAvailabilityResponse {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
  /** The name of the resource. */
  readonly name?: string;
  /** Check quota availability response properties. */
  properties?: CheckQuotaAvailabilityResponseProperties;
}

export function checkQuotaAvailabilityResponseDeserializer(
  item: any,
): CheckQuotaAvailabilityResponse {
  return {
    id: item["id"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    name: item["name"],
    properties: !item["properties"]
      ? item["properties"]
      : checkQuotaAvailabilityResponsePropertiesDeserializer(item["properties"]),
  };
}

/** Check quota availability response properties. */
export interface CheckQuotaAvailabilityResponseProperties {
  /** True/False indicating whether the quota request be granted based on availability. */
  isAvailable?: boolean;
  /** Message indicating additional details to add to quota support request. */
  availabilityStatus?: string;
}

export function checkQuotaAvailabilityResponsePropertiesDeserializer(
  item: any,
): CheckQuotaAvailabilityResponseProperties {
  return {
    isAvailable: item["isAvailable"],
    availabilityStatus: item["availabilityStatus"],
  };
}

/** The Loadtest service resource manager version. */
export enum KnownAPIVersions {
  /** The 2022-12-01 version of the Azure Load Testing Resource manager API. */
  V20221201 = "2022-12-01",
  /** The 2023-12-01-preview version of the Azure Load Testing Resource manager API. */
  V20231201Preview = "2023-12-01-preview",
  /** The 2024-12-01-preview version of the Azure Load Testing Resource manager API. */
  V20241201Preview = "2024-12-01-preview",
}
