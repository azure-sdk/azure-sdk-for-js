// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Organization Resource by Astronomer */
export interface OrganizationResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: OrganizationProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
}

export function organizationResourceSerializer(
  item: OrganizationResource,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : organizationPropertiesSerializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityV4Serializer(item["identity"]),
  };
}

export function organizationResourceDeserializer(
  item: any,
): OrganizationResource {
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
      : organizationPropertiesDeserializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityV4Deserializer(item["identity"]),
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
): any {
  return {
    marketplace: marketplaceDetailsSerializer(item["marketplace"]),
    user: userDetailsSerializer(item["user"]),
    partnerOrganizationProperties: !item["partnerOrganizationProperties"]
      ? item["partnerOrganizationProperties"]
      : partnerOrganizationPropertiesSerializer(
          item["partnerOrganizationProperties"],
        ),
  };
}

export function organizationPropertiesDeserializer(
  item: any,
): OrganizationProperties {
  return {
    marketplace: marketplaceDetailsDeserializer(item["marketplace"]),
    user: userDetailsDeserializer(item["user"]),
    provisioningState: item["provisioningState"],
    partnerOrganizationProperties: !item["partnerOrganizationProperties"]
      ? item["partnerOrganizationProperties"]
      : partnerOrganizationPropertiesDeserializer(
          item["partnerOrganizationProperties"],
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

export function marketplaceDetailsSerializer(item: MarketplaceDetails): any {
  return {
    subscriptionId: item["subscriptionId"],
    subscriptionStatus: item["subscriptionStatus"],
    offerDetails: offerDetailsSerializer(item["offerDetails"]),
  };
}

export function marketplaceDetailsDeserializer(item: any): MarketplaceDetails {
  return {
    subscriptionId: item["subscriptionId"],
    subscriptionStatus: item["subscriptionStatus"],
    offerDetails: offerDetailsDeserializer(item["offerDetails"]),
  };
}

/** Marketplace subscription status of a resource. */
export enum KnownMarketplaceSubscriptionStatus {
  /** Purchased but not yet activated */
  PendingFulfillmentStart = "PendingFulfillmentStart",
  /** Marketplace subscription is activated */
  Subscribed = "Subscribed",
  /** This state indicates that a customer's payment for the Marketplace service was not received */
  Suspended = "Suspended",
  /** Customer has cancelled the subscription */
  Unsubscribed = "Unsubscribed",
}

/**
 * Marketplace subscription status of a resource. \
 * {@link KnownMarketplaceSubscriptionStatus} can be used interchangeably with MarketplaceSubscriptionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PendingFulfillmentStart**: Purchased but not yet activated \
 * **Subscribed**: Marketplace subscription is activated \
 * **Suspended**: This state indicates that a customer's payment for the Marketplace service was not received \
 * **Unsubscribed**: Customer has cancelled the subscription
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

export function offerDetailsSerializer(item: OfferDetails): any {
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

export function offerDetailsDeserializer(item: any): OfferDetails {
  return {
    publisherId: item["publisherId"],
    offerId: item["offerId"],
    planId: item["planId"],
    planName: item["planName"],
    termUnit: item["termUnit"],
    termId: item["termId"],
    renewalMode: item["renewalMode"],
    endDate: !item["endDate"] ? item["endDate"] : new Date(item["endDate"]),
  };
}

/** Subscription renewal mode */
export enum KnownRenewalMode {
  /** Automatic renewal */
  Auto = "Auto",
  /** Manual renewal */
  Manual = "Manual",
}

/**
 * Subscription renewal mode \
 * {@link KnownRenewalMode} can be used interchangeably with RenewalMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Auto**: Automatic renewal \
 * **Manual**: Manual renewal
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

export function userDetailsSerializer(item: UserDetails): any {
  return {
    firstName: item["firstName"],
    lastName: item["lastName"],
    emailAddress: item["emailAddress"],
    upn: item["upn"],
    phoneNumber: item["phoneNumber"],
  };
}

export function userDetailsDeserializer(item: any): UserDetails {
  return {
    firstName: item["firstName"],
    lastName: item["lastName"],
    emailAddress: item["emailAddress"],
    upn: item["upn"],
    phoneNumber: item["phoneNumber"],
  };
}

/** The provisioning state of a resource type. */
export enum KnownResourceProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
}

/**
 * The provisioning state of a resource type. \
 * {@link KnownResourceProvisioningState} can be used interchangeably with ResourceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled.
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
): any {
  return {
    organizationId: item["organizationId"],
    workspaceId: item["workspaceId"],
    organizationName: item["organizationName"],
    workspaceName: item["workspaceName"],
    singleSignOnProperties: !item["singleSignOnProperties"]
      ? item["singleSignOnProperties"]
      : singleSignOnPropertiesSerializer(item["singleSignOnProperties"]),
  };
}

export function partnerOrganizationPropertiesDeserializer(
  item: any,
): PartnerOrganizationProperties {
  return {
    organizationId: item["organizationId"],
    workspaceId: item["workspaceId"],
    organizationName: item["organizationName"],
    workspaceName: item["workspaceName"],
    singleSignOnProperties: !item["singleSignOnProperties"]
      ? item["singleSignOnProperties"]
      : singleSignOnPropertiesDeserializer(item["singleSignOnProperties"]),
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
): any {
  return {
    singleSignOnState: item["singleSignOnState"],
    enterpriseAppId: item["enterpriseAppId"],
    singleSignOnUrl: item["singleSignOnUrl"],
    aadDomains: !item["aadDomains"]
      ? item["aadDomains"]
      : item["aadDomains"].map((p: any) => {
          return p;
        }),
  };
}

export function singleSignOnPropertiesDeserializer(
  item: any,
): SingleSignOnProperties {
  return {
    singleSignOnState: item["singleSignOnState"],
    enterpriseAppId: item["enterpriseAppId"],
    singleSignOnUrl: item["singleSignOnUrl"],
    aadDomains: !item["aadDomains"]
      ? item["aadDomains"]
      : item["aadDomains"].map((p: any) => {
          return p;
        }),
    provisioningState: item["provisioningState"],
  };
}

/** Various states of the SSO resource */
export enum KnownSingleSignOnStates {
  /** Initial state of the SSO resource */
  Initial = "Initial",
  /** State of the SSO resource when it is enabled */
  Enable = "Enable",
  /** State of the SSO resource when it is disabled */
  Disable = "Disable",
}

/**
 * Various states of the SSO resource \
 * {@link KnownSingleSignOnStates} can be used interchangeably with SingleSignOnStates,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Initial**: Initial state of the SSO resource \
 * **Enable**: State of the SSO resource when it is enabled \
 * **Disable**: State of the SSO resource when it is disabled
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
): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function managedServiceIdentityV4Deserializer(
  item: any,
): ManagedServiceIdentityV4 {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordDeserializer(item["userAssignedIdentities"]),
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
  SystemAndUserAssigned = "SystemAssigned, UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No managed identity. \
 * **SystemAssigned**: System assigned managed identity. \
 * **UserAssigned**: User assigned managed identity. \
 * **SystemAssigned, UserAssigned**: System and user assigned managed identity.
 */
export type ManagedServiceIdentityType = string;

export function userAssignedIdentityRecordSerializer(
  item: Record<string, UserAssignedIdentity>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : userAssignedIdentitySerializer(item[key]);
  });
  return result;
}

export function userAssignedIdentityRecordDeserializer(
  item: Record<string, any>,
): Record<string, UserAssignedIdentity> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : userAssignedIdentityDeserializer(item[key]);
  });
  return result;
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(
  item: UserAssignedIdentity,
): any {
  return item;
}

export function userAssignedIdentityDeserializer(
  item: any,
): UserAssignedIdentity {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
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
): any {
  return {
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityV4Serializer(item["identity"]),
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : organizationResourceUpdatePropertiesSerializer(item["properties"]),
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
): any {
  return {
    marketplace: !item["marketplace"]
      ? item["marketplace"]
      : marketplaceDetailsSerializer(item["marketplace"]),
    user: !item["user"] ? item["user"] : userDetailsSerializer(item["user"]),
    partnerOrganizationProperties: !item["partnerOrganizationProperties"]
      ? item["partnerOrganizationProperties"]
      : partnerOrganizationPropertiesSerializer(
          item["partnerOrganizationProperties"],
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

export function _organizationResourceListResultDeserializer(
  item: any,
): _OrganizationResourceListResult {
  return {
    value: organizationResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function organizationResourceArraySerializer(
  result: Array<OrganizationResource>,
): any[] {
  return result.map((item) => {
    return organizationResourceSerializer(item);
  });
}

export function organizationResourceArrayDeserializer(
  result: Array<OrganizationResource>,
): any[] {
  return result.map((item) => {
    return organizationResourceDeserializer(item);
  });
}

/** Request model for get users API */
export interface GetUsersRequest {
  /** parameters to filter results */
  searchParamsDictionary?: Record<string, string>;
  /** page details */
  pageInfo?: PageInfo;
}

export function getUsersRequestSerializer(item: GetUsersRequest): any {
  return {
    searchParamsDictionary: item["searchParamsDictionary"],
    pageInfo: !item["pageInfo"]
      ? item["pageInfo"]
      : pageInfoSerializer(item["pageInfo"]),
  };
}

/** PageInfo model */
export interface PageInfo {
  /** numbers of objects to skip */
  offset?: number;
  /** max numbers of objects in response */
  limit?: number;
  /** total numbers of objects */
  totalCount?: number;
}

export function pageInfoSerializer(item: PageInfo): any {
  return {
    offset: item["offset"],
    limit: item["limit"],
    totalCount: item["totalCount"],
  };
}

export function pageInfoDeserializer(item: any): PageInfo {
  return {
    offset: item["offset"],
    limit: item["limit"],
    totalCount: item["totalCount"],
  };
}

/** Response model for get users API */
export interface GetUsersSuccessResponse {
  /** User object array */
  users: User[];
  /** page details */
  pageInfo?: PageInfo;
}

export function getUsersSuccessResponseDeserializer(
  item: any,
): GetUsersSuccessResponse {
  return {
    users: userArrayDeserializer(item["users"]),
    pageInfo: !item["pageInfo"]
      ? item["pageInfo"]
      : pageInfoDeserializer(item["pageInfo"]),
  };
}

export function userArraySerializer(result: Array<User>): any[] {
  return result.map((item) => {
    return userSerializer(item);
  });
}

export function userArrayDeserializer(result: Array<User>): any[] {
  return result.map((item) => {
    return userDeserializer(item);
  });
}

/** User object */
export interface User {
  /** User id */
  id?: string;
  /** user type */
  type?: string;
  /** email */
  email: string;
  /** Full name */
  fullName?: string;
  /** Auth type */
  authType?: string;
  /** User status */
  status?: string;
  /** avatar url */
  avatarUrl?: string;
  /** roles assigned to user */
  roles: Role[];
  /** User metadata */
  metadataUser?: Record<string, string>;
}

export function userSerializer(item: User): any {
  return {
    id: item["id"],
    type: item["type"],
    email: item["email"],
    fullName: item["fullName"],
    authType: item["authType"],
    status: item["status"],
    avatarUrl: item["avatarUrl"],
    roles: roleArraySerializer(item["roles"]),
    metadataUser: item["metadataUser"],
  };
}

export function userDeserializer(item: any): User {
  return {
    id: item["id"],
    type: item["type"],
    email: item["email"],
    fullName: item["fullName"],
    authType: item["authType"],
    status: item["status"],
    avatarUrl: item["avatarUrl"],
    roles: roleArrayDeserializer(item["roles"]),
    metadataUser: item["metadataUser"],
  };
}

export function roleArraySerializer(result: Array<Role>): any[] {
  return result.map((item) => {
    return roleSerializer(item);
  });
}

export function roleArrayDeserializer(result: Array<Role>): any[] {
  return result.map((item) => {
    return roleDeserializer(item);
  });
}

/** Role object */
export interface Role {
  /** Role id */
  id?: string;
  /** Role name */
  name: string;
  /** Role type */
  type?: string;
  /** description of role */
  description?: string;
  /** scope */
  scope?: string;
}

export function roleSerializer(item: Role): any {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    description: item["description"],
    scope: item["scope"],
  };
}

export function roleDeserializer(item: any): Role {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    description: item["description"],
    scope: item["scope"],
  };
}

/** Request model for get roles API */
export interface GetRolesRequest {
  /** parameters to filter results */
  searchParamsDictionary?: Record<string, string>;
  /** page details */
  pageInfo?: PageInfo;
}

export function getRolesRequestSerializer(item: GetRolesRequest): any {
  return {
    searchParamsDictionary: item["searchParamsDictionary"],
    pageInfo: !item["pageInfo"]
      ? item["pageInfo"]
      : pageInfoSerializer(item["pageInfo"]),
  };
}

/** Response model for get roles API */
export interface GetRolesSuccessResponse {
  /** Role object array */
  roles: Role[];
  /** page details */
  pageInfo?: PageInfo;
}

export function getRolesSuccessResponseDeserializer(
  item: any,
): GetRolesSuccessResponse {
  return {
    roles: roleArrayDeserializer(item["roles"]),
    pageInfo: !item["pageInfo"]
      ? item["pageInfo"]
      : pageInfoDeserializer(item["pageInfo"]),
  };
}

/** Request model for get resources API */
export interface GetResourcesRequest {
  /** parameters to filter results */
  searchParamsDictionary?: Record<string, string>;
  /** page details */
  pageInfo?: PageInfo;
}

export function getResourcesRequestSerializer(item: GetResourcesRequest): any {
  return {
    searchParamsDictionary: item["searchParamsDictionary"],
    pageInfo: !item["pageInfo"]
      ? item["pageInfo"]
      : pageInfoSerializer(item["pageInfo"]),
  };
}

/** Response model for get resources API */
export interface GetResourcesSuccessResponse {
  /** Resource object array */
  resources: PartnerResource[];
  /** page details */
  pageInfo?: PageInfo;
}

export function getResourcesSuccessResponseDeserializer(
  item: any,
): GetResourcesSuccessResponse {
  return {
    resources: partnerResourceArrayDeserializer(item["resources"]),
    pageInfo: !item["pageInfo"]
      ? item["pageInfo"]
      : pageInfoDeserializer(item["pageInfo"]),
  };
}

export function partnerResourceArrayDeserializer(
  result: Array<PartnerResource>,
): any[] {
  return result.map((item) => {
    return partnerResourceDeserializer(item);
  });
}

/** Partner Resource object */
export interface PartnerResource {
  /** Resource id */
  id?: string;
  /** Resource name */
  name: string;
  /** Resource type */
  type?: string;
}

export function partnerResourceDeserializer(item: any): PartnerResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
  };
}

/** Request model for manage roles API */
export interface ManageRolesModel {
  /** Users object array */
  principals: User[];
  /** Role object array */
  roles: Role[];
  /** Additional data to assign roles */
  additionalData?: Record<string, string>;
}

export function manageRolesModelSerializer(item: ManageRolesModel): any {
  return {
    principals: userArraySerializer(item["principals"]),
    roles: roleArraySerializer(item["roles"]),
    additionalData: item["additionalData"],
  };
}

export function manageRolesModelDeserializer(item: any): ManageRolesModel {
  return {
    principals: userArrayDeserializer(item["principals"]),
    roles: roleArrayDeserializer(item["roles"]),
    additionalData: item["additionalData"],
  };
}

/** Request model for manage roles API */
export interface RemoveUserRequest {
  /** User object */
  principal: User;
  /** Additional data for deleting user */
  additionalData?: Record<string, string>;
}

export function removeUserRequestSerializer(item: RemoveUserRequest): any {
  return {
    principal: userSerializer(item["principal"]),
    additionalData: item["additionalData"],
  };
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

/** Supported API versions for the Astronomer.Astro resource provider. */
export enum KnownVersions {
  /** Dependent on Azure.ResourceManager.Versions.v1_0_Preview_1, LiftrBase.Versions.v1_preview, LiftrBase.Data.Versions.v1_preview */
  v1_preview = "2023-08-01-preview",
  /** Dependent on Azure.ResourceManager.Versions.v1_0_Preview_1, LiftrBase.Versions.v1_preview, LiftrBase.Data.Versions.v1_preview */
  v1 = "2023-08-01",
  /** Dependent on Azure.ResourceManager.Versions.v1_0_Preview_1, LiftrBase.Versions.v2024_08_27_preview, LiftrBase.Data.Versions.v2024_08_27_preview */
  v2024_08_27_preview = "2024-08-27-preview",
  /** Dependent on Azure.ResourceManager.Versions.v1_0_Preview_1, LiftrBase.Versions.v2024_08_27, LiftrBase.Data.Versions.v2024_08_27 */
  v2024_08_27 = "2024-08-27",
  /** Dependent on Azure.ResourceManager.Versions.v1_0_Preview_1, LiftrBase.Versions.v2024_11_01_preview, LiftrBase.Data.Versions.v2024_11_01_preview */
  v2024_11_01_preview = "2024-11-01-preview",
}
