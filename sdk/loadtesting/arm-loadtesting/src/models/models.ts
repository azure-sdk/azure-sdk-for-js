// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

/** The response of a LoadTestResource list operation. */
export interface _LoadTestResourceListResult {
  /** The LoadTestResource items on this page */
  value: LoadTestResource[];
  /** The link to the next page of items */
  nextLink?: string;
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

/** LoadTest details. */
export interface LoadTestResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: LoadTestProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function loadTestResourceSerializer(
  item: LoadTestResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : loadTestPropertiesSerializer(item.properties),
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
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

export function loadTestPropertiesSerializer(
  item: LoadTestProperties,
): Record<string, unknown> {
  return {
    description: item["description"],
    encryption: !item.encryption
      ? item.encryption
      : encryptionPropertiesSerializer(item.encryption),
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

/** Key and identity details for Customer Managed Key encryption of load test resource. */
export interface EncryptionProperties {
  /** All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. */
  identity?: EncryptionPropertiesIdentity;
  /** key encryption key Url, versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. */
  keyUrl?: string;
}

export function encryptionPropertiesSerializer(
  item: EncryptionProperties,
): Record<string, unknown> {
  return {
    identity: !item.identity
      ? item.identity
      : encryptionPropertiesIdentitySerializer(item.identity),
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

export function encryptionPropertiesIdentitySerializer(
  item: EncryptionPropertiesIdentity,
): Record<string, unknown> {
  return {
    type: item["type"],
    resourceId: item["resourceId"],
  };
}

/** Known values of {@link Type} that the service accepts. */
export enum KnownType {
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
}

/**
 * Managed identity type to use for accessing encryption key Url. \
 * {@link KnownType} can be used interchangeably with Type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **UserAssigned**
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

export function managedServiceIdentitySerializer(
  item: ManagedServiceIdentity,
): Record<string, unknown> {
  return {
    type: item["type"],
    userAssignedIdentities: !item.userAssignedIdentities
      ? item.userAssignedIdentities
      : (serializeRecord(
          item.userAssignedIdentities as any,
          userAssignedIdentitySerializer,
        ) as any),
  };
}

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAndUserAssigned */
  SystemAndUserAssigned = "SystemAssigned,UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export type ManagedServiceIdentityType = string;

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(item: UserAssignedIdentity) {
  return item as any;
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

/** The type used for update operations of the LoadTestResource. */
export interface LoadTestResourceUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: LoadTestResourceUpdateProperties;
}

export function loadTestResourceUpdateSerializer(
  item: LoadTestResourceUpdate,
): Record<string, unknown> {
  return {
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : loadTestResourceUpdatePropertiesSerializer(item.properties),
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
): Record<string, unknown> {
  return {
    description: item["description"],
    encryption: !item.encryption
      ? item.encryption
      : encryptionPropertiesSerializer(item.encryption),
  };
}

/** Values returned by the List operation. */
export interface _PagedOutboundEnvironmentEndpoint {
  /** The OutboundEnvironmentEndpoint items on this page */
  value: OutboundEnvironmentEndpoint[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A collection of related endpoints from the same service for which the Batch service requires outbound access. */
export interface OutboundEnvironmentEndpoint {
  /** The type of service that Azure Load Testing connects to. */
  readonly category?: string;
  /** The endpoints for this service to which the Batch service makes outbound calls. */
  readonly endpoints?: EndpointDependency[];
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

/** Details about the connection between the Batch service and the endpoint. */
export interface EndpointDetail {
  /** The port an endpoint is connected to. */
  readonly port?: number;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Quota bucket details object. */
export interface QuotaResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: QuotaResourceProperties;
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

/** The response of a QuotaResource list operation. */
export interface _QuotaResourceListResult {
  /** The QuotaResource items on this page */
  value: QuotaResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Request object of new quota for a quota bucket. */
export interface QuotaBucketRequest {
  /** Request object of new quota for a quota bucket. */
  properties?: QuotaBucketRequestProperties;
}

export function quotaBucketRequestSerializer(
  item: QuotaBucketRequest,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : quotaBucketRequestPropertiesSerializer(item.properties),
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

export function quotaBucketRequestPropertiesSerializer(
  item: QuotaBucketRequestProperties,
): Record<string, unknown> {
  return {
    currentUsage: item["currentUsage"],
    currentQuota: item["currentQuota"],
    newQuota: item["newQuota"],
    dimensions: !item.dimensions
      ? item.dimensions
      : quotaBucketRequestPropertiesDimensionsSerializer(item.dimensions),
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
): Record<string, unknown> {
  return {
    subscriptionId: item["subscriptionId"],
    location: item["location"],
  };
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

/** Check quota availability response properties. */
export interface CheckQuotaAvailabilityResponseProperties {
  /** True/False indicating whether the quota request be granted based on availability. */
  isAvailable?: boolean;
  /** Message indicating additional details to add to quota support request. */
  availabilityStatus?: string;
}

/** The Loadtest service resource manager version. */
export type APIVersions = "2022-12-01" | "2023-12-01-preview";
/** Alias for ResourceState */
export type ResourceState = string | "Deleted" | ResourceProvisioningState;
