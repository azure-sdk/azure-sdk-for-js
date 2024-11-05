// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

/** Known values of {@link QuotaNames} that the service accepts. */
export enum KnownQuotaNames {
  /** ScalableExecution */
  ScalableExecution = "ScalableExecution",
  /** Reporting */
  Reporting = "Reporting",
}

/**
 * The enum for quota name. \
 * {@link KnownQuotaNames} can be used interchangeably with QuotaNames,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ScalableExecution** \
 * **Reporting**
 */
export type QuotaNames = string;

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

/** A quota resource for a Playwright service account. */
export interface AccountQuota extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AccountQuotaProperties;
}

/** The Playwright service account quota resource properties. */
export interface AccountQuotaProperties {
  /** The Playwright service account quota resource free-trial properties. */
  freeTrial?: AccountFreeTrialProperties;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

/** The Playwright service account quota resource free-trial properties. */
export interface AccountFreeTrialProperties {
  /** The free-trial createdAt utcDateTime. */
  readonly createdAt: Date;
  /** The free-trial expiryAt utcDateTime. */
  readonly expiryAt: Date;
  /** The free-trial allocated limit value eg. allocated free minutes. */
  readonly allocatedValue: number;
  /** The free-trial used value eg. used free minutes. */
  readonly usedValue: number;
  /** The free-trial percentage used. */
  readonly percentageUsed: number;
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

/** The response of a AccountQuota list operation. */
export interface _AccountQuotaListResult {
  /** The AccountQuota items on this page */
  value: AccountQuota[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A subscription quota resource. */
export interface Quota extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: QuotaProperties;
}

/** The subscription quota resource properties. */
export interface QuotaProperties {
  /** The subscription quota resource free-trial properties. */
  freeTrial?: FreeTrialProperties;
  /** Indicates the offering type for the subscription. */
  readonly offeringType?: OfferingType;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

/** The subscription quota resource free-trial properties. */
export interface FreeTrialProperties {
  /** The Playwright service account id. */
  readonly accountId: string;
  /** The free-trial state. */
  readonly state: FreeTrialState;
}

/** Known values of {@link FreeTrialState} that the service accepts. */
export enum KnownFreeTrialState {
  /** Active */
  Active = "Active",
  /** Expired */
  Expired = "Expired",
  /** NotEligible */
  NotEligible = "NotEligible",
  /** NotRegistered */
  NotRegistered = "NotRegistered",
}

/**
 * The free-trial state. \
 * {@link KnownFreeTrialState} can be used interchangeably with FreeTrialState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Expired** \
 * **NotEligible** \
 * **NotRegistered**
 */
export type FreeTrialState = string;

/** Known values of {@link OfferingType} that the service accepts. */
export enum KnownOfferingType {
  /** NotApplicable */
  NotApplicable = "NotApplicable",
  /** PrivatePreview */
  PrivatePreview = "PrivatePreview",
  /** PublicPreview */
  PublicPreview = "PublicPreview",
  /** GeneralAvailability */
  GeneralAvailability = "GeneralAvailability",
}

/**
 * Offering type state. \
 * {@link KnownOfferingType} can be used interchangeably with OfferingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotApplicable** \
 * **PrivatePreview** \
 * **PublicPreview** \
 * **GeneralAvailability**
 */
export type OfferingType = string;

/** The response of a Quota list operation. */
export interface _QuotaListResult {
  /** The Quota items on this page */
  value: Quota[];
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

/** A Playwright service account resource. */
export interface Account extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AccountProperties;
}

export function accountSerializer(item: Account): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : accountPropertiesSerializer(item.properties),
  };
}

/** Account resource properties. */
export interface AccountProperties {
  /** The Playwright testing dashboard URI for the account resource. */
  readonly dashboardUri?: string;
  /** This property sets the connection region for Playwright client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created. */
  regionalAffinity?: EnablementStatus;
  /** When enabled, Playwright client workers can connect to cloud-hosted browsers. This can increase the number of parallel workers for a test run, significantly minimizing test completion durations. */
  scalableExecution?: EnablementStatus;
  /** When enabled, this feature allows the workspace to upload and display test results, including artifacts like traces and screenshots, in the Playwright portal. This enables faster and more efficient troubleshooting. */
  reporting?: EnablementStatus;
  /** When enabled, this feature allows the workspace to use local auth(through access key) for authentication of test runs. */
  localAuth?: EnablementStatus;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function accountPropertiesSerializer(
  item: AccountProperties,
): Record<string, unknown> {
  return {
    regionalAffinity: item["regionalAffinity"],
    scalableExecution: item["scalableExecution"],
    reporting: item["reporting"],
    localAuth: item["localAuth"],
  };
}

/** Known values of {@link EnablementStatus} that the service accepts. */
export enum KnownEnablementStatus {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * The enablement status of a feature. \
 * {@link KnownEnablementStatus} can be used interchangeably with EnablementStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type EnablementStatus = string;

/** The type used for update operations of the Account. */
export interface AccountUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: AccountUpdateProperties;
}

export function accountUpdateSerializer(
  item: AccountUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : accountUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the Account. */
export interface AccountUpdateProperties {
  /** This property sets the connection region for Playwright client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created. */
  regionalAffinity?: EnablementStatus;
  /** When enabled, Playwright client workers can connect to cloud-hosted browsers. This can increase the number of parallel workers for a test run, significantly minimizing test completion durations. */
  scalableExecution?: EnablementStatus;
  /** When enabled, this feature allows the workspace to upload and display test results, including artifacts like traces and screenshots, in the Playwright portal. This enables faster and more efficient troubleshooting. */
  reporting?: EnablementStatus;
  /** When enabled, this feature allows the workspace to use local auth(through access key) for authentication of test runs. */
  localAuth?: EnablementStatus;
}

export function accountUpdatePropertiesSerializer(
  item: AccountUpdateProperties,
): Record<string, unknown> {
  return {
    regionalAffinity: item["regionalAffinity"],
    scalableExecution: item["scalableExecution"],
    reporting: item["reporting"],
    localAuth: item["localAuth"],
  };
}

/** The response of a Account list operation. */
export interface _AccountListResult {
  /** The Account items on this page */
  value: Account[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

export function checkNameAvailabilityRequestSerializer(
  item: CheckNameAvailabilityRequest,
): Record<string, unknown> {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** The check availability result. */
export interface CheckNameAvailabilityResponse {
  /** Indicates if the resource name is available. */
  nameAvailable?: boolean;
  /** The reason why the given name is not available. */
  reason?: CheckNameAvailabilityReason;
  /** Detailed reason why the given name is not available. */
  message?: string;
}

/** Known values of {@link CheckNameAvailabilityReason} that the service accepts. */
export enum KnownCheckNameAvailabilityReason {
  /** Invalid */
  Invalid = "Invalid",
  /** AlreadyExists */
  AlreadyExists = "AlreadyExists",
}

/**
 * Possible reasons for a name not being available. \
 * {@link KnownCheckNameAvailabilityReason} can be used interchangeably with CheckNameAvailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type CheckNameAvailabilityReason = string;

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
/** Microsoft.AzurePlaywrightService Management API Versions. */
export type Versions = "2024-08-01-preview";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | string
  | ResourceProvisioningState
  | "Creating"
  | "Deleting"
  | "Accepted";
