// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The response of a Site list operation. */
export interface _SiteListResult {
  /** The Site items on this page */
  value: Site[];
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

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource) {
  return item as any;
}

/** Site as ARM Resource */
export interface Site extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: SiteProperties;
}

export function siteSerializer(item: Site): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : sitePropertiesSerializer(item.properties),
  };
}

/** Site properties */
export interface SiteProperties {
  /** displayName of Site resource */
  displayName?: string;
  /** Description of Site resource */
  description?: string;
  /** AddressResource ArmId of Site resource */
  addressResourceId?: string;
  /** Provisioning state of last operation */
  readonly provisioningState?: ResourceProvisioningState;
}

export function sitePropertiesSerializer(
  item: SiteProperties,
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    description: item["description"],
    addressResourceId: item["addressResourceId"],
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

/** The type used for update operations of the Site. */
export interface SiteUpdate {
  /** The updatable properties of the Site. */
  properties?: SiteUpdateProperties;
}

export function siteUpdateSerializer(
  item: SiteUpdate,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : siteUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the Site. */
export interface SiteUpdateProperties {
  /** displayName of Site resource */
  displayName?: string;
  /** Description of Site resource */
  description?: string;
  /** AddressResource ArmId of Site resource */
  addressResourceId?: string;
}

export function siteUpdatePropertiesSerializer(
  item: SiteUpdateProperties,
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    description: item["description"],
    addressResourceId: item["addressResourceId"],
  };
}

/** Supported API Versions */
export type Versions = "2024-02-01-preview";
