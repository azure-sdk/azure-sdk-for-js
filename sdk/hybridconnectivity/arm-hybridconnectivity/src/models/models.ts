// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface SolutionTypeResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: SolutionTypeProperties;
}

export function solutionTypeResourceDeserializer(item: any): SolutionTypeResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : solutionTypePropertiesDeserializer(item["properties"]),
  };
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

export function solutionTypePropertiesDeserializer(item: any): SolutionTypeProperties {
  return {
    solutionType: item["solutionType"],
    description: item["description"],
    supportedAzureRegions: !item["supportedAzureRegions"]
      ? item["supportedAzureRegions"]
      : item["supportedAzureRegions"].map((p: any) => {
          return p;
        }),
    solutionSettings: !item["solutionSettings"]
      ? item["solutionSettings"]
      : solutionTypeSettingsPropertiesArrayDeserializer(item["solutionSettings"]),
  };
}

export function solutionTypeSettingsPropertiesArrayDeserializer(
  result: Array<SolutionTypeSettingsProperties>,
): any[] {
  return result.map((item) => {
    return solutionTypeSettingsPropertiesDeserializer(item);
  });
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

export function solutionTypeSettingsPropertiesDeserializer(
  item: any,
): SolutionTypeSettingsProperties {
  return {
    name: item["name"],
    displayName: item["displayName"],
    type: item["type"],
    description: item["description"],
    allowedValues: item["allowedValues"].map((p: any) => {
      return p;
    }),
    defaultValue: item["defaultValue"],
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

/** The response of a SolutionTypeResource list operation. */
export interface _SolutionTypeResourceListResult {
  /** The SolutionTypeResource items on this page */
  value: SolutionTypeResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _solutionTypeResourceListResultDeserializer(
  item: any,
): _SolutionTypeResourceListResult {
  return {
    value: solutionTypeResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function solutionTypeResourceArrayDeserializer(result: Array<SolutionTypeResource>): any[] {
  return result.map((item) => {
    return solutionTypeResourceDeserializer(item);
  });
}

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface InventoryResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: InventoryProperties;
}

export function inventoryResourceDeserializer(item: any): InventoryResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : inventoryPropertiesDeserializer(item["properties"]),
  };
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

export function inventoryPropertiesDeserializer(item: any): InventoryProperties {
  return {
    cloudNativeType: item["cloudNativeType"],
    cloudNativeResourceId: item["cloudNativeResourceId"],
    azureResourceId: item["azureResourceId"],
    status: item["status"],
    statusDetails: item["statusDetails"],
    provisioningState: item["provisioningState"],
  };
}

/** Cloud Native Type enum. */
export enum KnownCloudNativeType {
  /** ec2 enum. */
  ec2 = "ec2",
}

/**
 * Cloud Native Type enum. \
 * {@link KnownCloudNativeType} can be used interchangeably with CloudNativeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ec2**: ec2 enum.
 */
export type CloudNativeType = string;

/** Solution Configuration Status. */
export enum KnownSolutionConfigurationStatus {
  /** New status */
  New = "New",
  /** InProgress status */
  InProgress = "InProgress",
  /** Canceled status */
  Completed = "Completed",
  /** Failed status */
  Failed = "Failed",
}

/**
 * Solution Configuration Status. \
 * {@link KnownSolutionConfigurationStatus} can be used interchangeably with SolutionConfigurationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **New**: New status \
 * **InProgress**: InProgress status \
 * **Completed**: Canceled status \
 * **Failed**: Failed status
 */
export type SolutionConfigurationStatus = string;

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

/** The response of a InventoryResource list operation. */
export interface _InventoryResourceListResult {
  /** The InventoryResource items on this page */
  value: InventoryResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _inventoryResourceListResultDeserializer(item: any): _InventoryResourceListResult {
  return {
    value: inventoryResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function inventoryResourceArrayDeserializer(result: Array<InventoryResource>): any[] {
  return result.map((item) => {
    return inventoryResourceDeserializer(item);
  });
}

/** Solution Configuration */
export interface SolutionConfiguration extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: SolutionConfigurationProperties;
}

export function solutionConfigurationSerializer(item: SolutionConfiguration): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : solutionConfigurationPropertiesSerializer(item["properties"]),
  };
}

export function solutionConfigurationDeserializer(item: any): SolutionConfiguration {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : solutionConfigurationPropertiesDeserializer(item["properties"]),
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
): any {
  return {
    solutionType: item["solutionType"],
    solutionSettings: !item["solutionSettings"]
      ? item["solutionSettings"]
      : solutionSettingsSerializer(item["solutionSettings"]),
  };
}

export function solutionConfigurationPropertiesDeserializer(
  item: any,
): SolutionConfigurationProperties {
  return {
    provisioningState: item["provisioningState"],
    solutionType: item["solutionType"],
    solutionSettings: !item["solutionSettings"]
      ? item["solutionSettings"]
      : solutionSettingsDeserializer(item["solutionSettings"]),
    status: item["status"],
    statusDetails: item["statusDetails"],
    lastSyncTime: !item["lastSyncTime"] ? item["lastSyncTime"] : new Date(item["lastSyncTime"]),
  };
}

/** Solution settings */
export interface SolutionSettings extends Record<string, string> {}

export function solutionSettingsSerializer(item: SolutionSettings): any {
  return { ...item };
}

export function solutionSettingsDeserializer(item: any): SolutionSettings {
  return {
    ...item,
  };
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

export function extensionResourceSerializer(item: ExtensionResource): any {
  return item;
}

export function extensionResourceDeserializer(item: any): ExtensionResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** The response of a SolutionConfiguration list operation. */
export interface _SolutionConfigurationListResult {
  /** The SolutionConfiguration items on this page */
  value: SolutionConfiguration[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _solutionConfigurationListResultDeserializer(
  item: any,
): _SolutionConfigurationListResult {
  return {
    value: solutionConfigurationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function solutionConfigurationArraySerializer(result: Array<SolutionConfiguration>): any[] {
  return result.map((item) => {
    return solutionConfigurationSerializer(item);
  });
}

export function solutionConfigurationArrayDeserializer(
  result: Array<SolutionConfiguration>,
): any[] {
  return result.map((item) => {
    return solutionConfigurationDeserializer(item);
  });
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
  /** Fully qualified ID of the resource against which the original async operation was started. */
  readonly resourceId?: string;
}

export function operationStatusResultDeserializer(item: any): OperationStatusResult {
  return {
    id: item["id"],
    name: item["name"],
    status: item["status"],
    percentComplete: item["percentComplete"],
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    operations: !item["operations"]
      ? item["operations"]
      : operationStatusResultArrayDeserializer(item["operations"]),
    error: !item["error"] ? item["error"] : errorDetailDeserializer(item["error"]),
    resourceId: item["resourceId"],
  };
}

export function operationStatusResultArrayDeserializer(
  result: Array<OperationStatusResult>,
): any[] {
  return result.map((item) => {
    return operationStatusResultDeserializer(item);
  });
}

/** Public Cloud Connector */
export interface PublicCloudConnector extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PublicCloudConnectorProperties;
}

export function publicCloudConnectorSerializer(item: PublicCloudConnector): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : publicCloudConnectorPropertiesSerializer(item["properties"]),
  };
}

export function publicCloudConnectorDeserializer(item: any): PublicCloudConnector {
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
      : publicCloudConnectorPropertiesDeserializer(item["properties"]),
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
): any {
  return {
    awsCloudProfile: awsCloudProfileSerializer(item["awsCloudProfile"]),
    hostType: item["hostType"],
  };
}

export function publicCloudConnectorPropertiesDeserializer(
  item: any,
): PublicCloudConnectorProperties {
  return {
    awsCloudProfile: awsCloudProfileDeserializer(item["awsCloudProfile"]),
    hostType: item["hostType"],
    provisioningState: item["provisioningState"],
    connectorPrimaryIdentifier: item["connectorPrimaryIdentifier"],
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

export function awsCloudProfileSerializer(item: AwsCloudProfile): any {
  return {
    accountId: item["accountId"],
    excludedAccounts: !item["excludedAccounts"]
      ? item["excludedAccounts"]
      : item["excludedAccounts"].map((p: any) => {
          return p;
        }),
    isOrganizationalAccount: item["isOrganizationalAccount"],
  };
}

export function awsCloudProfileDeserializer(item: any): AwsCloudProfile {
  return {
    accountId: item["accountId"],
    excludedAccounts: !item["excludedAccounts"]
      ? item["excludedAccounts"]
      : item["excludedAccounts"].map((p: any) => {
          return p;
        }),
    isOrganizationalAccount: item["isOrganizationalAccount"],
  };
}

/** Enum of host cloud the public cloud connector is referencing. */
export enum KnownHostType {
  /** AWS state */
  AWS = "AWS",
}

/**
 * Enum of host cloud the public cloud connector is referencing. \
 * {@link KnownHostType} can be used interchangeably with HostType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AWS**: AWS state
 */
export type HostType = string;

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

/** The response of a PublicCloudConnector list operation. */
export interface _PublicCloudConnectorListResult {
  /** The PublicCloudConnector items on this page */
  value: PublicCloudConnector[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _publicCloudConnectorListResultDeserializer(
  item: any,
): _PublicCloudConnectorListResult {
  return {
    value: publicCloudConnectorArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function publicCloudConnectorArraySerializer(result: Array<PublicCloudConnector>): any[] {
  return result.map((item) => {
    return publicCloudConnectorSerializer(item);
  });
}

export function publicCloudConnectorArrayDeserializer(result: Array<PublicCloudConnector>): any[] {
  return result.map((item) => {
    return publicCloudConnectorDeserializer(item);
  });
}

/** ConnectorId and SolutionTypes and their properties to Generate AWS CFT Template. */
export interface GenerateAwsTemplateRequest {
  /** The name of public cloud connector */
  connectorId: string;
  /** The list of solution types and their settings */
  solutionTypes?: SolutionTypeSettings[];
}

export function generateAwsTemplateRequestSerializer(item: GenerateAwsTemplateRequest): any {
  return {
    connectorId: item["connectorId"],
    solutionTypes: !item["solutionTypes"]
      ? item["solutionTypes"]
      : solutionTypeSettingsArraySerializer(item["solutionTypes"]),
  };
}

export function solutionTypeSettingsArraySerializer(result: Array<SolutionTypeSettings>): any[] {
  return result.map((item) => {
    return solutionTypeSettingsSerializer(item);
  });
}

/** The properties of Solution Type */
export interface SolutionTypeSettings {
  /** The type of the solution */
  solutionType: string;
  /** Solution settings */
  solutionSettings?: SolutionSettings;
}

export function solutionTypeSettingsSerializer(item: SolutionTypeSettings): any {
  return {
    solutionType: item["solutionType"],
    solutionSettings: !item["solutionSettings"]
      ? item["solutionSettings"]
      : solutionSettingsSerializer(item["solutionSettings"]),
  };
}

/** model interface _PostResponse */
export interface _PostResponse {}

export function _postResponseDeserializer(item: any): _PostResponse {
  return item;
}

/** Hybrid Connectivity Management service version. */
export enum KnownVersions {
  /** Version 2024-12-01 */
  v2024_12_01 = "2024-12-01",
}
