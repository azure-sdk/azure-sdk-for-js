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

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface SolutionTypeResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: SolutionTypeProperties;
}

/** Definition of Solution type resource. */
export interface SolutionTypeProperties {
  /** The name of the solution type. */
  solutionType?: string;
  /** Short description of solution type. */
  description?: string;
  /** The locations this solution is supported in. */
  supportedAzureRegions?: string[];
  /** Array of solution settings and its description. */
  solutionSettings?: SolutionTypeSettingsProperties[];
}

/** Represent Solution settings properties description array. */
export interface SolutionTypeSettingsProperties {
  /** The name of the solution setting property. */
  name: string;
  /** The UI friendly name of the solution setting property. */
  displayName: string;
  /** Type of the solution setting property, represented as a string. */
  type: string;
  /** Description of solution setting property. */
  description: string;
  /** Array of allowed values for this solution settings property. */
  allowedValues: string[];
  /** Default value for this solution settings property. */
  defaultValue: string;
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

/** The response of a SolutionTypeResource list operation. */
export interface _SolutionTypeResourceListResult {
  /** The SolutionTypeResource items on this page */
  value: SolutionTypeResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface InventoryResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: InventoryProperties;
}

/** Definition of inventory. */
export interface InventoryProperties {
  /** Gets or sets the cloud native resource type. */
  cloudNativeType?: CloudNativeType;
  /** Gets or sets the cloud native resource name. */
  cloudNativeResourceId?: string;
  /** Gets or sets the mapped azure resource id. */
  azureResourceId?: string;
  /** Gets or sets the status of the inventory. */
  status?: SolutionConfigurationStatus;
  /** Gets or sets the status details. */
  statusDetails?: string;
  /** The resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Known values of {@link CloudNativeType} that the service accepts. */
export enum KnownCloudNativeType {
  /** ec2 */
  ec2 = "ec2",
}

/**
 * Cloud Native Type enum. \
 * {@link KnownCloudNativeType} can be used interchangeably with CloudNativeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ec2**
 */
export type CloudNativeType = string;

/** Known values of {@link SolutionConfigurationStatus} that the service accepts. */
export enum KnownSolutionConfigurationStatus {
  /** New */
  New = "New",
  /** InProgress */
  InProgress = "InProgress",
  /** Completed */
  Completed = "Completed",
  /** Failed */
  Failed = "Failed",
}

/**
 * Solution Configuration Status. \
 * {@link KnownSolutionConfigurationStatus} can be used interchangeably with SolutionConfigurationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **New** \
 * **InProgress** \
 * **Completed** \
 * **Failed**
 */
export type SolutionConfigurationStatus = string;

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

/** The response of a InventoryResource list operation. */
export interface _InventoryResourceListResult {
  /** The InventoryResource items on this page */
  value: InventoryResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

export function extensionResourceSerializer(item: ExtensionResource) {
  return item as any;
}

/** Solution Configuration */
export interface SolutionConfiguration extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: SolutionConfigurationProperties;
}

export function solutionConfigurationSerializer(
  item: SolutionConfiguration,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : solutionConfigurationPropertiesSerializer(item.properties),
  };
}

/** Solution configuration resource. */
export interface SolutionConfigurationProperties {
  /** The resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningState;
  /** The type of the solution */
  solutionType: string;
  /** Solution settings */
  solutionSettings?: SolutionSettings;
  /** The status of solution configurations */
  readonly status?: SolutionConfigurationStatus;
  /** The detailed message of status details */
  readonly statusDetails?: string;
  /** The last time resources were inventoried */
  readonly lastSyncTime?: Date;
}

export function solutionConfigurationPropertiesSerializer(
  item: SolutionConfigurationProperties,
): Record<string, unknown> {
  return {
    solutionType: item["solutionType"],
    solutionSettings: !item.solutionSettings
      ? item.solutionSettings
      : (serializeRecord(item.solutionSettings as any) as any),
  };
}

/** Solution settings */
export interface SolutionSettings extends Record<string, string> {}

export function solutionSettingsSerializer(
  item: SolutionSettings,
): Record<string, unknown> {
  return {
    ...item,
  };
}

/** The response of a SolutionConfiguration list operation. */
export interface _SolutionConfigurationListResult {
  /** The SolutionConfiguration items on this page */
  value: SolutionConfiguration[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The current status of an async operation. */
export interface OperationStatusResult {
  /** Fully qualified ID for the async operation. */
  id?: string;
  /** Name of the async operation. */
  name?: string;
  /** Operation status. */
  status: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** The start time of the operation. */
  startTime?: Date;
  /** The end time of the operation. */
  endTime?: Date;
  /** The operations list. */
  operations?: OperationStatusResult[];
  /** If present, details of the operation error. */
  error?: ErrorDetail;
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

/** Public Cloud Connector */
export interface PublicCloudConnector extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PublicCloudConnectorProperties;
}

export function publicCloudConnectorSerializer(
  item: PublicCloudConnector,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : publicCloudConnectorPropertiesSerializer(item.properties),
  };
}

/** Properties of public cloud connectors. */
export interface PublicCloudConnectorProperties {
  /** Cloud profile for AWS. */
  awsCloudProfile: AwsCloudProfile;
  /** Host cloud the public cloud connector. */
  hostType: HostType;
  /** The resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningState;
  /** Connector primary identifier. */
  readonly connectorPrimaryIdentifier?: string;
}

export function publicCloudConnectorPropertiesSerializer(
  item: PublicCloudConnectorProperties,
): Record<string, unknown> {
  return {
    awsCloudProfile: awsCloudProfileSerializer(item.awsCloudProfile),
    hostType: item["hostType"],
  };
}

/** cloud profile for AWS. */
export interface AwsCloudProfile {
  /** Account id for the AWS account. */
  accountId: string;
  /** List of AWS accounts which need to be excluded. */
  excludedAccounts?: string[];
  /** Boolean value that indicates whether the account is organizational or not. True represents organization account, whereas false represents a single account. */
  isOrganizationalAccount?: boolean;
}

export function awsCloudProfileSerializer(
  item: AwsCloudProfile,
): Record<string, unknown> {
  return {
    accountId: item["accountId"],
    excludedAccounts: item["excludedAccounts"],
    isOrganizationalAccount: item["isOrganizationalAccount"],
  };
}

/** Known values of {@link HostType} that the service accepts. */
export enum KnownHostType {
  /** AWS */
  AWS = "AWS",
}

/**
 * Enum of host cloud the public cloud connector is referencing. \
 * {@link KnownHostType} can be used interchangeably with HostType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AWS**
 */
export type HostType = string;

/** The response of a PublicCloudConnector list operation. */
export interface _PublicCloudConnectorListResult {
  /** The PublicCloudConnector items on this page */
  value: PublicCloudConnector[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** ConnectorId and SolutionTypes and their properties to Generate AWS CFT Template. */
export interface GenerateAwsTemplateRequest {
  /** The name of public cloud connector */
  connectorId: string;
  /** The list of solution types and their settings */
  solutionTypes?: SolutionTypeSettings[];
}

export function generateAwsTemplateRequestSerializer(
  item: GenerateAwsTemplateRequest,
): Record<string, unknown> {
  return {
    connectorId: item["connectorId"],
    solutionTypes:
      item["solutionTypes"] === undefined
        ? item["solutionTypes"]
        : item["solutionTypes"].map(solutionTypeSettingsSerializer),
  };
}

/** The properties of Solution Type */
export interface SolutionTypeSettings {
  /** The type of the solution */
  solutionType: string;
  /** Solution settings */
  solutionSettings?: SolutionSettings;
}

export function solutionTypeSettingsSerializer(
  item: SolutionTypeSettings,
): Record<string, unknown> {
  return {
    solutionType: item["solutionType"],
    solutionSettings: !item.solutionSettings
      ? item.solutionSettings
      : (serializeRecord(item.solutionSettings as any) as any),
  };
}

/** Hybrid Connectivity Management service version. */
export type Versions = "2024-12-01";
