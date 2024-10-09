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

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface FileSystemResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: FileSystemResourceProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function fileSystemResourceSerializer(
  item: FileSystemResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : fileSystemResourcePropertiesSerializer(item.properties),
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
  };
}

/** Properties specific to the Qumulo File System resource */
export interface FileSystemResourceProperties {
  /** Marketplace details */
  marketplaceDetails: MarketplaceDetails;
  /** Provisioning State of the resource */
  readonly provisioningState?: ProvisioningState;
  /** Storage Sku */
  storageSku: string;
  /** User Details */
  userDetails: UserDetails;
  /** Delegated subnet id for Vnet injection */
  delegatedSubnetId: string;
  /** File system Id of the resource */
  clusterLoginUrl?: string;
  /** Private IPs of the resource */
  privateIPs?: string[];
  /** Initial administrator password of the resource */
  adminPassword: string;
  /** Availability zone */
  availabilityZone?: string;
}

export function fileSystemResourcePropertiesSerializer(
  item: FileSystemResourceProperties,
): Record<string, unknown> {
  return {
    marketplaceDetails: marketplaceDetailsSerializer(item.marketplaceDetails),
    storageSku: item["storageSku"],
    userDetails: userDetailsSerializer(item.userDetails),
    delegatedSubnetId: item["delegatedSubnetId"],
    clusterLoginUrl: item["clusterLoginUrl"],
    privateIPs: item["privateIPs"],
    adminPassword: item["adminPassword"],
    availabilityZone: item["availabilityZone"],
  };
}

/** MarketplaceDetails of Qumulo FileSystem resource */
export interface MarketplaceDetails {
  /** Marketplace Subscription Id */
  marketplaceSubscriptionId?: string;
  /** Plan Id */
  planId: string;
  /** Offer Id */
  offerId: string;
  /** Publisher Id */
  publisherId?: string;
  /** Term Unit */
  termUnit?: string;
  /** Marketplace subscription status */
  readonly marketplaceSubscriptionStatus?: MarketplaceSubscriptionStatus;
}

export function marketplaceDetailsSerializer(
  item: MarketplaceDetails,
): Record<string, unknown> {
  return {
    marketplaceSubscriptionId: item["marketplaceSubscriptionId"],
    planId: item["planId"],
    offerId: item["offerId"],
    publisherId: item["publisherId"],
    termUnit: item["termUnit"],
  };
}

/** Known values of {@link MarketplaceSubscriptionStatus} that the service accepts. */
export enum KnownMarketplaceSubscriptionStatus {
  /** PendingFulfillmentStart */
  PendingFulfillmentStart = "PendingFulfillmentStart",
  /** Subscribed */
  Subscribed = "Subscribed",
  /** Suspended */
  Suspended = "Suspended",
  /** Unsubscribed */
  Unsubscribed = "Unsubscribed",
}

/**
 * Marketplace subscription status of the file system resource \
 * {@link KnownMarketplaceSubscriptionStatus} can be used interchangeably with MarketplaceSubscriptionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PendingFulfillmentStart** \
 * **Subscribed** \
 * **Suspended** \
 * **Unsubscribed**
 */
export type MarketplaceSubscriptionStatus = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Accepted */
  Accepted = "Accepted",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Deleted */
  Deleted = "Deleted",
}

/**
 * Provisioning State of the File system resource \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Deleted**
 */
export type ProvisioningState = string;

/** User Details of Qumulo FileSystem resource */
export interface UserDetails {
  /** User Email */
  email: string;
}

export function userDetailsSerializer(
  item: UserDetails,
): Record<string, unknown> {
  return {
    email: item["email"],
  };
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
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
  /** SystemAndUserAssignedV3 */
  SystemAndUserAssignedV3 = "SystemAssigned,UserAssigned",
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

/** The type used for update operations of the FileSystemResource. */
export interface FileSystemResourceUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The updatable properties of the FileSystemResource. */
  properties?: FileSystemResourceUpdateProperties;
}

export function fileSystemResourceUpdateSerializer(
  item: FileSystemResourceUpdate,
): Record<string, unknown> {
  return {
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : fileSystemResourceUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the FileSystemResource. */
export interface FileSystemResourceUpdateProperties {
  /** Marketplace details */
  marketplaceDetails?: MarketplaceDetails;
  /** User Details */
  userDetails?: UserDetails;
  /** Delegated subnet id for Vnet injection */
  delegatedSubnetId?: string;
}

export function fileSystemResourceUpdatePropertiesSerializer(
  item: FileSystemResourceUpdateProperties,
): Record<string, unknown> {
  return {
    marketplaceDetails: !item.marketplaceDetails
      ? item.marketplaceDetails
      : marketplaceDetailsSerializer(item.marketplaceDetails),
    userDetails: !item.userDetails
      ? item.userDetails
      : userDetailsSerializer(item.userDetails),
    delegatedSubnetId: item["delegatedSubnetId"],
  };
}

/** The response of a FileSystemResource list operation. */
export interface _FileSystemResourceListResult {
  /** The FileSystemResource items on this page */
  value: FileSystemResource[];
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
/** The available API versions. */
export type Versions = "2024-06-19";
