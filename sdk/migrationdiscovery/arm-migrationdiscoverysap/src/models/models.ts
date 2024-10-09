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

/** Define the Server Instance resource. */
export interface ServerInstance extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ServerInstanceProperties;
}

export function serverInstanceSerializer(
  item: ServerInstance,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : serverInstancePropertiesSerializer(item.properties),
  };
}

/** Defines the SAP Instance properties. */
export interface ServerInstanceProperties {
  /** This is the Virtual Machine Name of the SAP system. Add all the virtual machines attached to an SAP system which you wish to migrate to Azure. Keeping this not equal to ID as for single tier all InstanceTypes would be on same server, leading to multiple resources with same servername. */
  readonly serverName?: string;
  /** Defines the type SAP instance on this server instance. */
  readonly sapInstanceType?: SapInstanceType;
  /** This is the Instance SID for ASCS/AP/DB instance.  An SAP system with HANA database for example could have a different SID for database Instance than that of ASCS instance. */
  readonly instanceSid?: string;
  /** This is the SAP Application Component; e.g. SAP S/4HANA 2022, SAP ERP ENHANCE PACKAGE. */
  readonly sapProduct?: string;
  /** Provide the product version of the SAP product. */
  readonly sapProductVersion?: string;
  /** This is Operating System on which the host server is running. */
  readonly operatingSystem?: OperatingSystem;
  /** Configuration data for this server instance. */
  readonly configurationData?: ConfigurationData;
  /** Configuration data for this server instance. */
  readonly performanceData?: PerformanceDataUnion;
  /** Defines the provisioning states. */
  readonly provisioningState?: ProvisioningState;
  /** Defines the errors related to SAP Instance resource. */
  readonly errors?: SAPMigrateError;
}

export function serverInstancePropertiesSerializer(
  item: ServerInstanceProperties,
) {
  return item as any;
}

/** Known values of {@link SapInstanceType} that the service accepts. */
export enum KnownSapInstanceType {
  /** ASCS */
  ASCS = "ASCS",
  /** DB */
  DB = "DB",
  /** APP */
  APP = "APP",
  /** SCS */
  SCS = "SCS",
  /** WEBDISP */
  WEBDISP = "WEBDISP",
}

/**
 * The SAP instance type running on this machine, e.g., App, ASCS, DB, etc. Select from the list of available dropdown values. Only single server and distributed architectures are supported. \
 * {@link KnownSapInstanceType} can be used interchangeably with SapInstanceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ASCS** \
 * **DB** \
 * **APP** \
 * **SCS** \
 * **WEBDISP**
 */
export type SapInstanceType = string;

/** Known values of {@link OperatingSystem} that the service accepts. */
export enum KnownOperatingSystem {
  /** IBMAIX */
  IBMAIX = "IBMAIX",
  /** RedHat */
  RedHat = "RedHat",
  /** SUSE */
  SUSE = "SUSE",
  /** Solaris */
  Solaris = "Solaris",
  /** Unix */
  Unix = "Unix",
  /** WindowsServer */
  WindowsServer = "WindowsServer",
}

/**
 * This is Operating System on which the host server is running. \
 * {@link KnownOperatingSystem} can be used interchangeably with OperatingSystem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IBMAIX** \
 * **RedHat** \
 * **SUSE** \
 * **Solaris** \
 * **Unix** \
 * **WindowsServer**
 */
export type OperatingSystem = string;

/** The SAP instance specific configuration data. */
export interface ConfigurationData {
  /** Provide the SAPS for each server of the SAP system. This should be a non-zero value. For example, 1000. */
  readonly saps?: number;
  /** Provide the CPU value of the server. For example, 16, 32 etc. */
  readonly cpu?: number;
  /** Provide the CPU architecture type of the server. For example, Xeon Platinum 8171M, Xeon E5-2673 v3. */
  readonly cpuType?: string;
  /** Provide the CPU clock speed of the server in MHz. This should be a non-zero value. For example, 2100. */
  readonly cpuInMhz?: number;
  /** Provide the RAM of the server. This should be a non-zero value. For example, 256. */
  readonly ram?: number;
  /** Provide the HW manufacturer company of the server.  For example, Microsoft Corporation. */
  readonly hardwareManufacturer?: string;
  /** Specify if the Hardware is a physical server or virtual machine. */
  readonly model?: string;
  /** Provide the total disk volume capacity in GB. Add the disk volume for each individual disks and provide the total sum in this field. */
  readonly totalDiskSizeGB?: number;
  /** Provide the total disk IOPS capacity. Add the disk volume for each individual disk and provide the sum total in this field. */
  readonly totalDiskIops?: number;
  /** The database of this is a server instance. Applicable only if SAP instance type for this server instance is 'DB'. */
  readonly databaseType?: DatabaseType;
  /** Provide the target HANA database size you need. Applicable only if SAP instance type for this server instance is 'DB' and you are migrating an AnyDb database to SAP S/4HANA. */
  readonly targetHanaRamSizeGB?: number;
}

/** Known values of {@link DatabaseType} that the service accepts. */
export enum KnownDatabaseType {
  /** Adabas */
  Adabas = "Adabas",
  /** Oracle */
  Oracle = "Oracle",
  /** SAPMaxDB */
  SAPMaxDB = "SAPMaxDB",
  /** Db2 */
  Db2 = "Db2",
  /** SAPASE */
  SAPASE = "SAPASE",
  /** SQLServer */
  SQLServer = "SQLServer",
  /** Informix */
  Informix = "Informix",
  /** SAPDB */
  SAPDB = "SAPDB",
  /** HANA */
  HANA = "HANA",
}

/**
 * Select the database if this is a database server. Leave blank or add Not Applicable for all other instances except the Database Instance. \
 * {@link KnownDatabaseType} can be used interchangeably with DatabaseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Adabas** \
 * **Oracle** \
 * **SAPMaxDB** \
 * **Db2** \
 * **SAPASE** \
 * **SQLServer** \
 * **Informix** \
 * **SAPDB** \
 * **HANA**
 */
export type DatabaseType = string;

/** The SAP instance specific performance data. */
export interface PerformanceData {
  /** the discriminator possible values: Excel, Native */
  dataSource: DataSource;
}

/** The SAP instance specific performance data for Excel import. */
export interface ExcelPerformanceData extends PerformanceData {
  /** Provide the max CPU percentage load on the server. Omit the percentage symbol while filling this value. */
  readonly maxCpuLoad?: number;
  /** Provide the source Database size in GB. Applicable only if SAP instance type for this server instance is 'DB'. */
  readonly totalSourceDbSizeGB?: number;
  /** The data source for this resource. */
  dataSource: "Excel";
}

/** The SAP instance specific performance data for native discovery. */
export interface NativePerformanceData extends PerformanceData {
  /** The data source for this resource. */
  dataSource: "Native";
}

/** Known values of {@link DataSource} that the service accepts. */
export enum KnownDataSource {
  /** Excel */
  Excel = "Excel",
  /** Native */
  Native = "Native",
}

/**
 * The data source for this resource. \
 * {@link KnownDataSource} can be used interchangeably with DataSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Excel** \
 * **Native**
 */
export type DataSource = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Updating */
  Updating = "Updating",
  /** Failed */
  Failed = "Failed",
  /** Creating */
  Creating = "Creating",
  /** Canceled */
  Canceled = "Canceled",
  /** Accepted */
  Accepted = "Accepted",
  /** Deleting */
  Deleting = "Deleting",
  /** Unknown */
  Unknown = "Unknown",
}

/**
 * Defines the provisioning states. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Updating** \
 * **Failed** \
 * **Creating** \
 * **Canceled** \
 * **Accepted** \
 * **Deleting** \
 * **Unknown**
 */
export type ProvisioningState = string;

/** An error response from the SAP migrate resources. */
export interface SAPMigrateError {
  /** The SAP Discovery site resource error body. */
  properties?: ErrorDefinition;
}

/** Error definition. */
export interface ErrorDefinition {
  /** Service specific error code which serves as the substatus for the HTTP error code. */
  readonly code?: string;
  /** Description of the error. */
  readonly message?: string;
  /** Description of the recommendation. */
  readonly recommendation?: string;
  /** Internal error details. */
  readonly details?: ErrorDefinition[];
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

/** Defines the request body for updating Server Instances resource. */
export interface UpdateServerInstanceRequest {
  /** Server instances properties. */
  properties?: ServerInstanceProperties;
}

export function updateServerInstanceRequestSerializer(
  item: UpdateServerInstanceRequest,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : serverInstancePropertiesSerializer(item.properties),
  };
}

/** The response of a ServerInstance list operation. */
export interface _ServerInstanceListResult {
  /** The ServerInstance items on this page */
  value: ServerInstance[];
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

/** Define the SAP Instance resource. */
export interface SAPInstance extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SAPInstanceProperties;
}

export function sAPInstanceSerializer(
  item: SAPInstance,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : sAPInstancePropertiesSerializer(item.properties),
  };
}

/** Defines the SAP Instance properties. */
export interface SAPInstanceProperties {
  /** This is the SID of SAP System. Keeping this not equal to ID as different landscapes can have repeated System SID IDs. */
  readonly systemSid?: string;
  /** The Environment; PRD, QA, DEV, etc to which SAP system belongs to. Select from the list of available dropdown values. */
  readonly environment?: SapInstanceEnvironment;
  /** This is the SID of the production system in a landscape.  An SAP system could itself be a production SID or a part of a landscape with a different Production SID. This field can be used to relate non-prod SIDs, other components, SID (WEBDISP) to the prod SID. Enter the value of Production SID. */
  readonly landscapeSid?: string;
  /** Enter a business function/department identifier to group multiple SIDs. */
  readonly application?: string;
  /** Defines the provisioning states. */
  readonly provisioningState?: ProvisioningState;
  /** Defines the errors related to SAP Instance resource. */
  readonly errors?: SAPMigrateError;
}

export function sAPInstancePropertiesSerializer(item: SAPInstanceProperties) {
  return item as any;
}

/** Known values of {@link SapInstanceEnvironment} that the service accepts. */
export enum KnownSapInstanceEnvironment {
  /** Production */
  Production = "Production",
  /** PreProduction */
  PreProduction = "PreProduction",
  /** Test */
  Test = "Test",
  /** QualityAssurance */
  QualityAssurance = "QualityAssurance",
  /** Development */
  Development = "Development",
  /** Sandbox */
  Sandbox = "Sandbox",
  /** DisasterRecovery */
  DisasterRecovery = "DisasterRecovery",
  /** Training */
  Training = "Training",
}

/**
 * The Environment; PRD, QA, DEV, etc to which SAP system belongs to. Select from the list of available dropdown values. \
 * {@link KnownSapInstanceEnvironment} can be used interchangeably with SapInstanceEnvironment,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Production** \
 * **PreProduction** \
 * **Test** \
 * **QualityAssurance** \
 * **Development** \
 * **Sandbox** \
 * **DisasterRecovery** \
 * **Training**
 */
export type SapInstanceEnvironment = string;

/** The type used for updating tags in SAPInstance resources. */
export interface SAPInstanceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function sAPInstanceTagsUpdateSerializer(
  item: SAPInstanceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a SAPInstance list operation. */
export interface _SAPInstanceListResult {
  /** The SAPInstance items on this page */
  value: SAPInstance[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Define the SAP Migration discovery site resource. */
export interface SAPDiscoverySite extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SAPDiscoverySiteProperties;
  /** The extended location definition. */
  extendedLocation?: ExtendedLocation;
}

export function sAPDiscoverySiteSerializer(
  item: SAPDiscoverySite,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : sAPDiscoverySitePropertiesSerializer(item.properties),
    extendedLocation: !item.extendedLocation
      ? item.extendedLocation
      : extendedLocationSerializer(item.extendedLocation),
  };
}

/** Defines the SAP Migration discovery site resource properties. */
export interface SAPDiscoverySiteProperties {
  /** The master site ID from Azure Migrate. */
  masterSiteId?: string;
  /** The migrate project ID from Azure Migrate. */
  migrateProjectId?: string;
  /** Defines the provisioning states. */
  readonly provisioningState?: ProvisioningState;
  /** Indicates any errors on the SAP Migration discovery site resource. */
  readonly errors?: SAPMigrateError;
}

export function sAPDiscoverySitePropertiesSerializer(
  item: SAPDiscoverySiteProperties,
): Record<string, unknown> {
  return {
    masterSiteId: item["masterSiteId"],
    migrateProjectId: item["migrateProjectId"],
  };
}

/** The extended location definition. */
export interface ExtendedLocation {
  /** The extended location type. */
  type: string;
  /** The extended location name. */
  name: string;
}

export function extendedLocationSerializer(
  item: ExtendedLocation,
): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
  };
}

/** The type used for updating tags in SAPDiscoverySite resources. */
export interface SAPDiscoverySiteTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function sAPDiscoverySiteTagsUpdateSerializer(
  item: SAPDiscoverySiteTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a SAPDiscoverySite list operation. */
export interface _SAPDiscoverySiteListResult {
  /** The SAPDiscoverySite items on this page */
  value: SAPDiscoverySite[];
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

/** The available API versions. */
export type Versions = "2023-10-01-preview";
/** Alias for PerformanceDataUnion */
export type PerformanceDataUnion =
  | ExcelPerformanceData
  | NativePerformanceData
  | PerformanceData;
