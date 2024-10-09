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

export function proxyResourceSerializer(item: ProxyResource) {
  return item as any;
}

/** An device resource belonging to a device group resource. */
export interface Device extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DeviceProperties;
}

export function deviceSerializer(item: Device): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : devicePropertiesSerializer(item.properties),
  };
}

/** The properties of device */
export interface DeviceProperties {
  /** Device ID */
  deviceId?: string;
  /** SKU of the chip */
  readonly chipSku?: string;
  /** OS version available for installation when update requested */
  readonly lastAvailableOsVersion?: string;
  /** OS version running on device when update requested */
  readonly lastInstalledOsVersion?: string;
  /** Time when update requested and new OS version available */
  readonly lastOsUpdateUtc?: Date;
  /** Time when update was last requested */
  readonly lastUpdateRequestUtc?: Date;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function devicePropertiesSerializer(
  item: DeviceProperties,
): Record<string, unknown> {
  return {
    deviceId: item["deviceId"],
  };
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Accepted */
  Accepted = "Accepted",
}

/**
 * Provisioning state of resource. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Provisioning** \
 * **Updating** \
 * **Deleting** \
 * **Accepted**
 */
export type ProvisioningState = string;

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

/** The type used for update operations of the Device. */
export interface DeviceUpdate {
  /** The updatable properties of the Device. */
  properties?: DeviceUpdateProperties;
}

export function deviceUpdateSerializer(
  item: DeviceUpdate,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : deviceUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the Device. */
export interface DeviceUpdateProperties {
  /** Device group id */
  deviceGroupId?: string;
}

export function deviceUpdatePropertiesSerializer(
  item: DeviceUpdateProperties,
): Record<string, unknown> {
  return {
    deviceGroupId: item["deviceGroupId"],
  };
}

/** The response of a Device list operation. */
export interface _DeviceListResult {
  /** The Device items on this page */
  value: Device[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Request of the action to create a signed device capability image */
export interface GenerateCapabilityImageRequest {
  /** List of capabilities to create */
  capabilities: CapabilityType[];
}

export function generateCapabilityImageRequestSerializer(
  item: GenerateCapabilityImageRequest,
): Record<string, unknown> {
  return {
    capabilities: item["capabilities"],
  };
}

/** Known values of {@link CapabilityType} that the service accepts. */
export enum KnownCapabilityType {
  /** ApplicationDevelopment */
  ApplicationDevelopment = "ApplicationDevelopment",
  /** FieldServicing */
  FieldServicing = "FieldServicing",
}

/**
 * Capability image type \
 * {@link KnownCapabilityType} can be used interchangeably with CapabilityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ApplicationDevelopment** \
 * **FieldServicing**
 */
export type CapabilityType = string;

/** Signed device capability image response */
export interface SignedCapabilityImageResponse {
  /** The signed device capability image as a UTF-8 encoded base 64 string. */
  readonly image?: string;
}

/** An deployment resource belonging to a device group resource. */
export interface Deployment extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DeploymentProperties;
}

export function deploymentSerializer(
  item: Deployment,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : deploymentPropertiesSerializer(item.properties),
  };
}

/** The properties of deployment */
export interface DeploymentProperties {
  /** Deployment ID */
  deploymentId?: string;
  /** Images deployed */
  deployedImages?: Image[];
  /** Deployment date UTC */
  readonly deploymentDateUtc?: Date;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function deploymentPropertiesSerializer(
  item: DeploymentProperties,
): Record<string, unknown> {
  return {
    deploymentId: item["deploymentId"],
    deployedImages:
      item["deployedImages"] === undefined
        ? item["deployedImages"]
        : item["deployedImages"].map(imageSerializer),
  };
}

/** An image resource belonging to a catalog resource. */
export interface Image extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ImageProperties;
}

export function imageSerializer(item: Image): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : imagePropertiesSerializer(item.properties),
  };
}

/** The properties of image */
export interface ImageProperties {
  /** Image as a UTF-8 encoded base 64 string on image create. This field contains the image URI on image reads. */
  image?: string;
  /** Image ID */
  imageId?: string;
  /** Image name */
  readonly imageName?: string;
  /** Regional data boundary for an image */
  regionalDataBoundary?: RegionalDataBoundary;
  /** Location the image */
  readonly uri?: string;
  /** The image description. */
  readonly description?: string;
  /** The image component id. */
  readonly componentId?: string;
  /** The image type. */
  readonly imageType?: ImageType;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function imagePropertiesSerializer(
  item: ImageProperties,
): Record<string, unknown> {
  return {
    image: item["image"],
    imageId: item["imageId"],
    regionalDataBoundary: item["regionalDataBoundary"],
  };
}

/** Known values of {@link RegionalDataBoundary} that the service accepts. */
export enum KnownRegionalDataBoundary {
  /** None */
  None = "None",
  /** EU */
  EU = "EU",
}

/**
 * Regional data boundary values. \
 * {@link KnownRegionalDataBoundary} can be used interchangeably with RegionalDataBoundary,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **EU**
 */
export type RegionalDataBoundary = string;

/** Known values of {@link ImageType} that the service accepts. */
export enum KnownImageType {
  /** InvalidImageType */
  InvalidImageType = "InvalidImageType",
  /** OneBl */
  OneBl = "OneBl",
  /** PlutonRuntime */
  PlutonRuntime = "PlutonRuntime",
  /** WifiFirmware */
  WifiFirmware = "WifiFirmware",
  /** SecurityMonitor */
  SecurityMonitor = "SecurityMonitor",
  /** NormalWorldLoader */
  NormalWorldLoader = "NormalWorldLoader",
  /** NormalWorldDtb */
  NormalWorldDtb = "NormalWorldDtb",
  /** NormalWorldKernel */
  NormalWorldKernel = "NormalWorldKernel",
  /** RootFs */
  RootFs = "RootFs",
  /** Services */
  Services = "Services",
  /** Applications */
  Applications = "Applications",
  /** FwConfig */
  FwConfig = "FwConfig",
  /** BootManifest */
  BootManifest = "BootManifest",
  /** Nwfs */
  Nwfs = "Nwfs",
  /** TrustedKeystore */
  TrustedKeystore = "TrustedKeystore",
  /** Policy */
  Policy = "Policy",
  /** CustomerBoardConfig */
  CustomerBoardConfig = "CustomerBoardConfig",
  /** UpdateCertStore */
  UpdateCertStore = "UpdateCertStore",
  /** BaseSystemUpdateManifest */
  BaseSystemUpdateManifest = "BaseSystemUpdateManifest",
  /** FirmwareUpdateManifest */
  FirmwareUpdateManifest = "FirmwareUpdateManifest",
  /** CustomerUpdateManifest */
  CustomerUpdateManifest = "CustomerUpdateManifest",
  /** RecoveryManifest */
  RecoveryManifest = "RecoveryManifest",
  /** ManifestSet */
  ManifestSet = "ManifestSet",
  /** Other */
  Other = "Other",
}

/**
 * Image type values. \
 * {@link KnownImageType} can be used interchangeably with ImageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InvalidImageType** \
 * **OneBl** \
 * **PlutonRuntime** \
 * **WifiFirmware** \
 * **SecurityMonitor** \
 * **NormalWorldLoader** \
 * **NormalWorldDtb** \
 * **NormalWorldKernel** \
 * **RootFs** \
 * **Services** \
 * **Applications** \
 * **FwConfig** \
 * **BootManifest** \
 * **Nwfs** \
 * **TrustedKeystore** \
 * **Policy** \
 * **CustomerBoardConfig** \
 * **UpdateCertStore** \
 * **BaseSystemUpdateManifest** \
 * **FirmwareUpdateManifest** \
 * **CustomerUpdateManifest** \
 * **RecoveryManifest** \
 * **ManifestSet** \
 * **Other**
 */
export type ImageType = string;

/** The response of a Deployment list operation. */
export interface _DeploymentListResult {
  /** The Deployment items on this page */
  value: Deployment[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An device group resource belonging to a product resource. */
export interface DeviceGroup extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DeviceGroupProperties;
}

export function deviceGroupSerializer(
  item: DeviceGroup,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : deviceGroupPropertiesSerializer(item.properties),
  };
}

/** The properties of deviceGroup */
export interface DeviceGroupProperties {
  /** Description of the device group. */
  description?: string;
  /** Operating system feed type of the device group. */
  osFeedType?: OSFeedType;
  /** Update policy of the device group. */
  updatePolicy?: UpdatePolicy;
  /** Flag to define if the user allows for crash dump collection. */
  allowCrashDumpsCollection?: AllowCrashDumpCollection;
  /** Regional data boundary for the device group. */
  regionalDataBoundary?: RegionalDataBoundary;
  /** Deployment status for the device group. */
  readonly hasDeployment?: boolean;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function deviceGroupPropertiesSerializer(
  item: DeviceGroupProperties,
): Record<string, unknown> {
  return {
    description: item["description"],
    osFeedType: item["osFeedType"],
    updatePolicy: item["updatePolicy"],
    allowCrashDumpsCollection: item["allowCrashDumpsCollection"],
    regionalDataBoundary: item["regionalDataBoundary"],
  };
}

/** Known values of {@link OSFeedType} that the service accepts. */
export enum KnownOSFeedType {
  /** Retail */
  Retail = "Retail",
  /** RetailEval */
  RetailEval = "RetailEval",
}

/**
 * OS feed type values. \
 * {@link KnownOSFeedType} can be used interchangeably with OSFeedType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Retail** \
 * **RetailEval**
 */
export type OSFeedType = string;

/** Known values of {@link UpdatePolicy} that the service accepts. */
export enum KnownUpdatePolicy {
  /** UpdateAll */
  UpdateAll = "UpdateAll",
  /** No3rdPartyAppUpdates */
  No3rdPartyAppUpdates = "No3rdPartyAppUpdates",
}

/**
 * Update policy values. \
 * {@link KnownUpdatePolicy} can be used interchangeably with UpdatePolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **UpdateAll** \
 * **No3rdPartyAppUpdates**
 */
export type UpdatePolicy = string;

/** Known values of {@link AllowCrashDumpCollection} that the service accepts. */
export enum KnownAllowCrashDumpCollection {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Allow crash dumps values. \
 * {@link KnownAllowCrashDumpCollection} can be used interchangeably with AllowCrashDumpCollection,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type AllowCrashDumpCollection = string;

/** The type used for update operations of the DeviceGroup. */
export interface DeviceGroupUpdate {
  /** The updatable properties of the DeviceGroup. */
  properties?: DeviceGroupUpdateProperties;
}

export function deviceGroupUpdateSerializer(
  item: DeviceGroupUpdate,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : deviceGroupUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the DeviceGroup. */
export interface DeviceGroupUpdateProperties {
  /** Description of the device group. */
  description?: string;
  /** Operating system feed type of the device group. */
  osFeedType?: OSFeedType;
  /** Update policy of the device group. */
  updatePolicy?: UpdatePolicy;
  /** Flag to define if the user allows for crash dump collection. */
  allowCrashDumpsCollection?: AllowCrashDumpCollection;
  /** Regional data boundary for the device group. */
  regionalDataBoundary?: RegionalDataBoundary;
}

export function deviceGroupUpdatePropertiesSerializer(
  item: DeviceGroupUpdateProperties,
): Record<string, unknown> {
  return {
    description: item["description"],
    osFeedType: item["osFeedType"],
    updatePolicy: item["updatePolicy"],
    allowCrashDumpsCollection: item["allowCrashDumpsCollection"],
    regionalDataBoundary: item["regionalDataBoundary"],
  };
}

/** The response of a DeviceGroup list operation. */
export interface _DeviceGroupListResult {
  /** The DeviceGroup items on this page */
  value: DeviceGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Request to the action call to bulk claim devices. */
export interface ClaimDevicesRequest {
  /** Device identifiers of the devices to be claimed. */
  deviceIdentifiers: string[];
}

export function claimDevicesRequestSerializer(
  item: ClaimDevicesRequest,
): Record<string, unknown> {
  return {
    deviceIdentifiers: item["deviceIdentifiers"],
  };
}

/** Response of the count for elements. */
export interface CountElementsResponse {
  /** Number of children resources in parent resource. */
  value: number;
}

/** Response to the action call for count devices in a catalog. */
export interface CountDevicesResponse extends CountElementsResponse {}

/** An product resource belonging to a catalog resource. */
export interface Product extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ProductProperties;
}

export function productSerializer(item: Product): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : productPropertiesSerializer(item.properties),
  };
}

/** The properties of product */
export interface ProductProperties {
  /** Description of the product */
  description?: string;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function productPropertiesSerializer(
  item: ProductProperties,
): Record<string, unknown> {
  return {
    description: item["description"],
  };
}

/** The type used for update operations of the Product. */
export interface ProductUpdate {
  /** The updatable properties of the Product. */
  properties?: ProductUpdateProperties;
}

export function productUpdateSerializer(
  item: ProductUpdate,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : productUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the Product. */
export interface ProductUpdateProperties {
  /** Description of the product */
  description?: string;
}

export function productUpdatePropertiesSerializer(
  item: ProductUpdateProperties,
): Record<string, unknown> {
  return {
    description: item["description"],
  };
}

/** The response of a Product list operation. */
export interface _ProductListResult {
  /** The Product items on this page */
  value: Product[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a Image list operation. */
export interface _ImageListResult {
  /** The Image items on this page */
  value: Image[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An certificate resource belonging to a catalog resource. */
export interface Certificate extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: CertificateProperties;
}

/** The properties of certificate */
export interface CertificateProperties {
  /** The certificate as a UTF-8 encoded base 64 string. */
  readonly certificate?: string;
  /** The certificate status. */
  readonly status?: CertificateStatus;
  /** The certificate subject. */
  readonly subject?: string;
  /** The certificate thumbprint. */
  readonly thumbprint?: string;
  /** The certificate expiry date. */
  readonly expiryUtc?: Date;
  /** The certificate not before date. */
  readonly notBeforeUtc?: Date;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

/** Known values of {@link CertificateStatus} that the service accepts. */
export enum KnownCertificateStatus {
  /** Active */
  Active = "Active",
  /** Inactive */
  Inactive = "Inactive",
  /** Expired */
  Expired = "Expired",
  /** Revoked */
  Revoked = "Revoked",
}

/**
 * Certificate status values. \
 * {@link KnownCertificateStatus} can be used interchangeably with CertificateStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Inactive** \
 * **Expired** \
 * **Revoked**
 */
export type CertificateStatus = string;

/** The response of a Certificate list operation. */
export interface _CertificateListResult {
  /** The Certificate items on this page */
  value: Certificate[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The certificate chain response. */
export interface CertificateChainResponse {
  /** The certificate chain. */
  readonly certificateChain?: string;
}

/** Request for the proof of possession nonce */
export interface ProofOfPossessionNonceRequest {
  /** The proof of possession nonce */
  proofOfPossessionNonce: string;
}

export function proofOfPossessionNonceRequestSerializer(
  item: ProofOfPossessionNonceRequest,
): Record<string, unknown> {
  return {
    proofOfPossessionNonce: item["proofOfPossessionNonce"],
  };
}

/** Result of the action to generate a proof of possession nonce */
export interface ProofOfPossessionNonceResponse extends CertificateProperties {}

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

/** An Azure Sphere catalog */
export interface Catalog extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CatalogProperties;
}

export function catalogSerializer(item: Catalog): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : catalogPropertiesSerializer(item.properties),
  };
}

/** Catalog properties */
export interface CatalogProperties {
  /** The Azure Sphere tenant ID associated with the catalog. */
  readonly tenantId?: string;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function catalogPropertiesSerializer(item: CatalogProperties) {
  return item as any;
}

/** The type used for update operations of the Catalog. */
export interface CatalogUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function catalogUpdateSerializer(
  item: CatalogUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Catalog list operation. */
export interface _CatalogListResult {
  /** The Catalog items on this page */
  value: Catalog[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Request of the action to list device groups for a catalog. */
export interface ListDeviceGroupsRequest {
  /** Device Group name. */
  deviceGroupName?: string;
}

export function listDeviceGroupsRequestSerializer(
  item: ListDeviceGroupsRequest,
): Record<string, unknown> {
  return {
    deviceGroupName: item["deviceGroupName"],
  };
}

/** Paged collection of DeviceInsight items */
export interface _PagedDeviceInsight {
  /** The DeviceInsight items on this page */
  value: DeviceInsight[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Device insight report. */
export interface DeviceInsight {
  /** Device ID */
  deviceId: string;
  /** Event description */
  description: string;
  /** Event start timestamp */
  startTimestampUtc: Date;
  /** Event end timestamp */
  endTimestampUtc: Date;
  /** Event category */
  eventCategory: string;
  /** Event class */
  eventClass: string;
  /** Event type */
  eventType: string;
  /** Event count */
  eventCount: number;
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
export type Versions = "2024-04-01";
