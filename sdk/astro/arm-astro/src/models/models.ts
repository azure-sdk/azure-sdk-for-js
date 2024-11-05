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

/** Organization Resource by Astronomer */
export interface OrganizationResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: OrganizationProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
}

export function organizationResourceSerializer(
  item: OrganizationResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : organizationPropertiesSerializer(item.properties),
    identity: !item.identity
      ? item.identity
      : managedServiceIdentityV4Serializer(item.identity),
  };
}

/** Properties specific to Data Organization resource */
export interface OrganizationProperties {
  /** Marketplace details of the resource. */
  marketplace: MarketplaceDetails;
  /** Details of the user. */
  user: UserDetails;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
  /** Organization properties */
  partnerOrganizationProperties?: PartnerOrganizationProperties;
}

export function organizationPropertiesSerializer(
  item: OrganizationProperties,
): Record<string, unknown> {
  return {
    marketplace: marketplaceDetailsSerializer(item.marketplace),
    user: userDetailsSerializer(item.user),
    partnerOrganizationProperties: !item.partnerOrganizationProperties
      ? item.partnerOrganizationProperties
      : partnerOrganizationPropertiesSerializer(
          item.partnerOrganizationProperties,
        ),
  };
}

/** Marketplace details for an organization */
export interface MarketplaceDetails {
  /** Azure subscription id for the the marketplace offer is purchased from */
  subscriptionId?: string;
  /** Marketplace subscription status */
  subscriptionStatus?: MarketplaceSubscriptionStatus;
  /** Offer details for the marketplace that is selected by the user */
  offerDetails: OfferDetails;
}

export function marketplaceDetailsSerializer(
  item: MarketplaceDetails,
): Record<string, unknown> {
  return {
    subscriptionId: item["subscriptionId"],
    subscriptionStatus: item["subscriptionStatus"],
    offerDetails: offerDetailsSerializer(item.offerDetails),
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
 * Marketplace subscription status of a resource. \
 * {@link KnownMarketplaceSubscriptionStatus} can be used interchangeably with MarketplaceSubscriptionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PendingFulfillmentStart** \
 * **Subscribed** \
 * **Suspended** \
 * **Unsubscribed**
 */
export type MarketplaceSubscriptionStatus = string;

/** Offer details for the marketplace that is selected by the user */
export interface OfferDetails {
  /** Publisher Id for the marketplace offer */
  publisherId: string;
  /** Offer Id for the marketplace offer */
  offerId: string;
  /** Plan Id for the marketplace offer */
  planId: string;
  /** Plan Name for the marketplace offer */
  planName?: string;
  /** Plan Display Name for the marketplace offer */
  termUnit?: string;
  /** Plan Display Name for the marketplace offer */
  termId?: string;
  /** Subscription renewal mode */
  renewalMode?: RenewalMode;
  /** Current subscription end date and time */
  readonly endDate?: Date;
}

export function offerDetailsSerializer(
  item: OfferDetails,
): Record<string, unknown> {
  return {
    publisherId: item["publisherId"],
    offerId: item["offerId"],
    planId: item["planId"],
    planName: item["planName"],
    termUnit: item["termUnit"],
    termId: item["termId"],
    renewalMode: item["renewalMode"],
  };
}

/** Known values of {@link RenewalMode} that the service accepts. */
export enum KnownRenewalMode {
  /** Auto */
  Auto = "Auto",
  /** Manual */
  Manual = "Manual",
}

/**
 * Subscription renewal mode \
 * {@link KnownRenewalMode} can be used interchangeably with RenewalMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Auto** \
 * **Manual**
 */
export type RenewalMode = string;

/** User details for an organization */
export interface UserDetails {
  /** First name of the user */
  firstName: string;
  /** Last name of the user */
  lastName: string;
  /** Email address of the user */
  emailAddress: string;
  /** User's principal name */
  upn?: string;
  /** User's phone number */
  phoneNumber?: string;
}

export function userDetailsSerializer(
  item: UserDetails,
): Record<string, unknown> {
  return {
    firstName: item["firstName"],
    lastName: item["lastName"],
    emailAddress: item["emailAddress"],
    upn: item["upn"],
    phoneNumber: item["phoneNumber"],
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

/** Properties specific to Partner's organization */
export interface PartnerOrganizationProperties {
  /** Organization Id in partner's system */
  organizationId?: string;
  /** Workspace Id in partner's system */
  workspaceId?: string;
  /** Organization name in partner's system */
  organizationName: string;
  /** Workspace name in partner's system */
  workspaceName?: string;
  /** Single Sign On properties for the organization */
  singleSignOnProperties?: SingleSignOnProperties;
}

export function partnerOrganizationPropertiesSerializer(
  item: PartnerOrganizationProperties,
): Record<string, unknown> {
  return {
    organizationId: item["organizationId"],
    workspaceId: item["workspaceId"],
    organizationName: item["organizationName"],
    workspaceName: item["workspaceName"],
    singleSignOnProperties: !item.singleSignOnProperties
      ? item.singleSignOnProperties
      : singleSignOnPropertiesSerializer(item.singleSignOnProperties),
  };
}

/** Properties specific to Single Sign On Resource */
export interface SingleSignOnProperties {
  /** State of the Single Sign On for the organization */
  singleSignOnState?: SingleSignOnStates;
  /** AAD enterprise application Id used to setup SSO */
  enterpriseAppId?: string;
  /** URL for SSO to be used by the partner to redirect the user to their system */
  singleSignOnUrl?: string;
  /** List of AAD domains fetched from Microsoft Graph for user. */
  aadDomains?: string[];
  /** Provisioning State of the resource */
  readonly provisioningState?: ResourceProvisioningState;
}

export function singleSignOnPropertiesSerializer(
  item: SingleSignOnProperties,
): Record<string, unknown> {
  return {
    singleSignOnState: item["singleSignOnState"],
    enterpriseAppId: item["enterpriseAppId"],
    singleSignOnUrl: item["singleSignOnUrl"],
    aadDomains: item["aadDomains"],
  };
}

/** Known values of {@link SingleSignOnStates} that the service accepts. */
export enum KnownSingleSignOnStates {
  /** Initial */
  Initial = "Initial",
  /** Enable */
  Enable = "Enable",
  /** Disable */
  Disable = "Disable",
}

/**
 * Various states of the SSO resource \
 * {@link KnownSingleSignOnStates} can be used interchangeably with SingleSignOnStates,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Initial** \
 * **Enable** \
 * **Disable**
 */
export type SingleSignOnStates = string;

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentityV4 {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export function managedServiceIdentityV4Serializer(
  item: ManagedServiceIdentityV4,
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
  SystemAndUserAssigned = "SystemAssigned, UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned, UserAssigned**
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

/** The type used for update operations of the OrganizationResource. */
export interface OrganizationResourceUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: OrganizationResourceUpdateProperties;
}

export function organizationResourceUpdateSerializer(
  item: OrganizationResourceUpdate,
): Record<string, unknown> {
  return {
    identity: !item.identity
      ? item.identity
      : managedServiceIdentityV4Serializer(item.identity),
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : organizationResourceUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the OrganizationResource. */
export interface OrganizationResourceUpdateProperties {
  /** Marketplace details of the resource. */
  marketplace?: MarketplaceDetails;
  /** Details of the user. */
  user?: UserDetails;
  /** Organization properties */
  partnerOrganizationProperties?: PartnerOrganizationProperties;
}

export function organizationResourceUpdatePropertiesSerializer(
  item: OrganizationResourceUpdateProperties,
): Record<string, unknown> {
  return {
    marketplace: !item.marketplace
      ? item.marketplace
      : marketplaceDetailsSerializer(item.marketplace),
    user: !item.user ? item.user : userDetailsSerializer(item.user),
    partnerOrganizationProperties: !item.partnerOrganizationProperties
      ? item.partnerOrganizationProperties
      : partnerOrganizationPropertiesSerializer(
          item.partnerOrganizationProperties,
        ),
  };
}

/** The response of a OrganizationResource list operation. */
export interface _OrganizationResourceListResult {
  /** The OrganizationResource items on this page */
  value: OrganizationResource[];
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
/** Supported API versions for the Astronomer.Astro resource provider. */
export type Versions =
  | "2023-08-01-preview"
  | "2023-08-01"
  | "2024-08-27-preview"
  | "2024-08-27";
