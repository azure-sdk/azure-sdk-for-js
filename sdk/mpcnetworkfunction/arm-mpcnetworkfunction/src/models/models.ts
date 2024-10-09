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

/** AO5GC Network Function Resource */
export interface NetworkFunctionResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: NetworkFunctionResourceProperties;
}

export function networkFunctionResourceSerializer(
  item: NetworkFunctionResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : networkFunctionResourcePropertiesSerializer(item.properties),
  };
}

/** Network Function Properties. */
export interface NetworkFunctionResourceProperties {
  /** Provisioned SKU Value. */
  sku: SkuDefinitions;
  /** Type of network function */
  networkFunctionType: NetworkFunctionType;
  /** Administrative state of the network function */
  networkFunctionAdministrativeState: NetworkFunctionAdministrativeState;
  /** Operational state of the network function */
  readonly networkFunctionOperationalStatus?: NetworkFunctionOperationalStatus;
  /** Count of infrastructure elements used by this network function (vCPUs, in units of 8) */
  readonly infrastructureElementCount?: number;
  /** Capacity of the network function in units of 10000.  This represents the session count or the Simultaneously Attached Users (SAU) count as applicable */
  capacity?: number;
  /** User provided description */
  userDescription?: string;
  /** User provided deployment notes.  This is used to optionally provide details about the NF deployment */
  deploymentNotes?: string;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function networkFunctionResourcePropertiesSerializer(
  item: NetworkFunctionResourceProperties,
): Record<string, unknown> {
  return {
    sku: item["sku"],
    networkFunctionType: item["networkFunctionType"],
    networkFunctionAdministrativeState:
      item["networkFunctionAdministrativeState"],
    capacity: item["capacity"],
    userDescription: item["userDescription"],
    deploymentNotes: item["deploymentNotes"],
  };
}

/** Known values of {@link SkuDefinitions} that the service accepts. */
export enum KnownSkuDefinitions {
  /** AzureLab */
  AzureLab = "AzureLab",
  /** AzureProduction */
  AzureProduction = "AzureProduction",
  /** NexusLab */
  NexusLab = "NexusLab",
  /** NexusProduction */
  NexusProduction = "NexusProduction",
}

/**
 * SKU Definitions \
 * {@link KnownSkuDefinitions} can be used interchangeably with SkuDefinitions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureLab** \
 * **AzureProduction** \
 * **NexusLab** \
 * **NexusProduction**
 */
export type SkuDefinitions = string;

/** Known values of {@link NetworkFunctionType} that the service accepts. */
export enum KnownNetworkFunctionType {
  /** AMF */
  AMF = "AMF",
  /** SMF */
  SMF = "SMF",
  /** UPF */
  UPF = "UPF",
  /** NRF */
  NRF = "NRF",
  /** NSSF */
  NSSF = "NSSF",
  /** MME */
  MME = "MME",
  /** SaegwControlPlane */
  SaegwControlPlane = "SaegwControlPlane",
  /** SaegwUserPlane */
  SaegwUserPlane = "SaegwUserPlane",
  /** Saegw */
  Saegw = "Saegw",
  /** ePDG */
  ePDG = "ePDG",
  /** N3IWF */
  N3IWF = "N3IWF",
  /** RemotePaaS */
  RemotePaaS = "RemotePaaS",
  /** EMS */
  EMS = "EMS",
  /** OperationsPolicyManager */
  OperationsPolicyManager = "OperationsPolicyManager",
}

/**
 * Type of Network Function \
 * {@link KnownNetworkFunctionType} can be used interchangeably with NetworkFunctionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AMF** \
 * **SMF** \
 * **UPF** \
 * **NRF** \
 * **NSSF** \
 * **MME** \
 * **SaegwControlPlane** \
 * **SaegwUserPlane** \
 * **Saegw** \
 * **ePDG** \
 * **N3IWF** \
 * **RemotePaaS** \
 * **EMS** \
 * **OperationsPolicyManager**
 */
export type NetworkFunctionType = string;

/** Known values of {@link NetworkFunctionAdministrativeState} that the service accepts. */
export enum KnownNetworkFunctionAdministrativeState {
  /** Commissioned */
  Commissioned = "Commissioned",
  /** Decommissioned */
  Decommissioned = "Decommissioned",
}

/**
 * Network Function Administrative State enumerations \
 * {@link KnownNetworkFunctionAdministrativeState} can be used interchangeably with NetworkFunctionAdministrativeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Commissioned** \
 * **Decommissioned**
 */
export type NetworkFunctionAdministrativeState = string;

/** Known values of {@link NetworkFunctionOperationalStatus} that the service accepts. */
export enum KnownNetworkFunctionOperationalStatus {
  /** Inactive */
  Inactive = "Inactive",
  /** InstantiatedNotProvisioned */
  InstantiatedNotProvisioned = "InstantiatedNotProvisioned",
  /** InstantiatedProvisioned */
  InstantiatedProvisioned = "InstantiatedProvisioned",
  /** Active */
  Active = "Active",
}

/**
 * Network Function Operational Status enumerations \
 * {@link KnownNetworkFunctionOperationalStatus} can be used interchangeably with NetworkFunctionOperationalStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inactive** \
 * **InstantiatedNotProvisioned** \
 * **InstantiatedProvisioned** \
 * **Active**
 */
export type NetworkFunctionOperationalStatus = string;

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

/** The type used for updating tags in NetworkFunctionResource resources. */
export interface NetworkFunctionResourceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function networkFunctionResourceTagsUpdateSerializer(
  item: NetworkFunctionResourceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a NetworkFunctionResource list operation. */
export interface _NetworkFunctionResourceListResult {
  /** The NetworkFunctionResource items on this page */
  value: NetworkFunctionResource[];
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
export type Versions = "2023-05-15-preview";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | string
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted";
