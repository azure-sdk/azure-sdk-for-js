// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The base export parameter */
export interface BaseExportModel {
  /** the discriminator possible values: ExportQuery, ExportResource, ExportResourceGroup */
  type: Type;
  /** The target Azure Terraform Provider */
  targetProvider?: TargetProvider;
  /** Whether to output all non-computed properties in the generated Terraform configuration? This probably needs manual modifications to make it valid */
  fullProperties?: boolean;
  /** Mask sensitive attributes in the Terraform configuration */
  maskSensitive?: boolean;
}

export function baseExportModelUnionSerializer(item: BaseExportModelUnion) {
  switch (item.type) {
    case "ExportQuery":
      return exportQuerySerializer(item as ExportQuery);

    case "ExportResource":
      return exportResourceSerializer(item as ExportResource);

    case "ExportResourceGroup":
      return exportResourceGroupSerializer(item as ExportResourceGroup);

    default:
      return baseExportModelSerializer(item);
  }
}

export function baseExportModelSerializer(
  item: BaseExportModelUnion,
): Record<string, unknown> {
  return {
    type: item["type"],
    targetProvider: item["targetProvider"],
    fullProperties: item["fullProperties"],
    maskSensitive: item["maskSensitive"],
  };
}

/** Export parameter for resources queried by ARG (Azure Resource Graph) */
export interface ExportQuery extends BaseExportModel {
  /** The ARG where predicate. Note that you can combine multiple conditions in one `where` predicate, e.g. `resourceGroup =~ "my-rg" and type =~ "microsoft.network/virtualnetworks"` */
  query: string;
  /** The name pattern of the Terraform resources */
  namePattern?: string;
  /** Whether to recursively list child resources of the query result */
  recursive?: boolean;
  /** The parameter type */
  type: "ExportQuery";
}

export function exportQuerySerializer(
  item: ExportQuery,
): Record<string, unknown> {
  return {
    type: item["type"],
    targetProvider: item["targetProvider"],
    fullProperties: item["fullProperties"],
    maskSensitive: item["maskSensitive"],
    query: item["query"],
    namePattern: item["namePattern"],
    recursive: item["recursive"],
  };
}

/** Export parameter for individual resources. */
export interface ExportResource extends BaseExportModel {
  /** The id of the resource to be exported */
  resourceIds: string[];
  /** The Terraform resource name. Only works when `resourceIds` contains only one item. */
  resourceName?: string;
  /** The Terraform resource type. Only works when `resourceIds` contains only one item. */
  resourceType?: string;
  /** The name pattern of the Terraform resources */
  namePattern?: string;
  /** The parameter type */
  type: "ExportResource";
}

export function exportResourceSerializer(
  item: ExportResource,
): Record<string, unknown> {
  return {
    type: item["type"],
    targetProvider: item["targetProvider"],
    fullProperties: item["fullProperties"],
    maskSensitive: item["maskSensitive"],
    resourceIds: item["resourceIds"],
    resourceName: item["resourceName"],
    resourceType: item["resourceType"],
    namePattern: item["namePattern"],
  };
}

/** Export parameter for a resource group */
export interface ExportResourceGroup extends BaseExportModel {
  /** The name of the resource group to be exported */
  resourceGroupName: string;
  /** The name pattern of the Terraform resources */
  namePattern?: string;
  /** The parameter type */
  type: "ExportResourceGroup";
}

export function exportResourceGroupSerializer(
  item: ExportResourceGroup,
): Record<string, unknown> {
  return {
    type: item["type"],
    targetProvider: item["targetProvider"],
    fullProperties: item["fullProperties"],
    maskSensitive: item["maskSensitive"],
    resourceGroupName: item["resourceGroupName"],
    namePattern: item["namePattern"],
  };
}

/** Known values of {@link Type} that the service accepts. */
export enum KnownType {
  /** ExportResource */
  ExportResource = "ExportResource",
  /** ExportResourceGroup */
  ExportResourceGroup = "ExportResourceGroup",
  /** ExportQuery */
  ExportQuery = "ExportQuery",
}

/**
 * Type of Type \
 * {@link KnownType} can be used interchangeably with Type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ExportResource** \
 * **ExportResourceGroup** \
 * **ExportQuery**
 */
export type Type = string;

/** Known values of {@link TargetProvider} that the service accepts. */
export enum KnownTargetProvider {
  /** azurerm */
  azurerm = "azurerm",
  /** azapi */
  azapi = "azapi",
}

/**
 * Type of TargetProvider \
 * {@link KnownTargetProvider} can be used interchangeably with TargetProvider,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **azurerm** \
 * **azapi**
 */
export type TargetProvider = string;

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

/** The status of the LRO operation. */
export interface TerraformOperationStatus {
  /** RP-specific properties for the operationStatus resource, only appears when operation ended with Succeeded status */
  readonly properties?: ExportResult;
  /** The operation status */
  status: ResourceProvisioningState;
  /** The name of the  operationStatus resource */
  readonly name?: string;
  /** Operation start time */
  readonly startTime?: Date;
  /** Operation complete time */
  readonly endTime?: Date;
  /** The progress made toward completing the operation */
  readonly percentComplete?: number;
  /** Errors that occurred if the operation ended with Canceled or Failed status */
  readonly error?: ErrorDetail;
}

/** The Terraform export result */
export interface ExportResult {
  /** The Terraform configuration content */
  configuration?: string;
  /** A list of Azure resources which are not exported to Terraform due to there is no corresponding resources in Terraform */
  skippedResources?: string[];
  /** A list of errors derived during exporting each resource */
  errors?: ErrorDetail[];
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
 * Type of ResourceProvisioningState \
 * {@link KnownResourceProvisioningState} can be used interchangeably with ResourceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ResourceProvisioningState = string;

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
 * Type of Origin \
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
 * Type of ActionType \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;
/** The available API versions. */
export type Versions = "2023-07-01-preview";
/** Alias for BaseExportModelUnion */
export type BaseExportModelUnion =
  | ExportQuery
  | ExportResource
  | ExportResourceGroup
  | BaseExportModel;
