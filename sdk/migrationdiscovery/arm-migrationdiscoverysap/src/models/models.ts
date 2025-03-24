// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Define the Server Instance resource. */
export interface ServerInstance extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ServerInstanceProperties;
}

export function serverInstanceSerializer(item: ServerInstance): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : serverInstancePropertiesSerializer(item["properties"]),
  };
}

export function serverInstanceDeserializer(item: any): ServerInstance {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : serverInstancePropertiesDeserializer(item["properties"]),
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

export function serverInstancePropertiesSerializer(item: ServerInstanceProperties): any {
  return item;
}

export function serverInstancePropertiesDeserializer(item: any): ServerInstanceProperties {
  return {
    serverName: item["serverName"],
    sapInstanceType: item["sapInstanceType"],
    instanceSid: item["instanceSid"],
    sapProduct: item["sapProduct"],
    sapProductVersion: item["sapProductVersion"],
    operatingSystem: item["operatingSystem"],
    configurationData: !item["configurationData"]
      ? item["configurationData"]
      : configurationDataDeserializer(item["configurationData"]),
    performanceData: !item["performanceData"]
      ? item["performanceData"]
      : performanceDataUnionDeserializer(item["performanceData"]),
    provisioningState: item["provisioningState"],
    errors: !item["errors"] ? item["errors"] : sapMigrateErrorDeserializer(item["errors"]),
  };
}

/** The SAP instance type running on this machine, e.g., App, ASCS, DB, etc. Select from the list of available dropdown values. Only single server and distributed architectures are supported. */
export enum KnownSapInstanceType {
  /** The type of Sap Instance- ASCS. */
  Ascs = "ASCS",
  /** The type of Sap Instance- DB. */
  DB = "DB",
  /** The type of Sap Instance- APP. */
  APP = "APP",
  /** The type of Sap Instance- SCS. */
  SCS = "SCS",
  /** The type of Sap Instance- WEBDISP. */
  Webdisp = "WEBDISP",
}

/**
 * The SAP instance type running on this machine, e.g., App, ASCS, DB, etc. Select from the list of available dropdown values. Only single server and distributed architectures are supported. \
 * {@link KnownSapInstanceType} can be used interchangeably with SapInstanceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ASCS**: The type of Sap Instance- ASCS. \
 * **DB**: The type of Sap Instance- DB. \
 * **APP**: The type of Sap Instance- APP. \
 * **SCS**: The type of Sap Instance- SCS. \
 * **WEBDISP**: The type of Sap Instance- WEBDISP.
 */
export type SapInstanceType = string;

/** This is Operating System on which the host server is running. */
export enum KnownOperatingSystem {
  /** The type of Operating system- IBMAIX. */
  Ibmaix = "IBMAIX",
  /** The type of Operating system- RedHat. */
  RedHat = "RedHat",
  /** The type of Operating system- SUSE. */
  Suse = "SUSE",
  /** The type of Operating system- Solaris. */
  Solaris = "Solaris",
  /** The type of Operating system- Unix. */
  Unix = "Unix",
  /** The type of Operating system- WindowsServer. */
  WindowsServer = "WindowsServer",
}

/**
 * This is Operating System on which the host server is running. \
 * {@link KnownOperatingSystem} can be used interchangeably with OperatingSystem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IBMAIX**: The type of Operating system- IBMAIX. \
 * **RedHat**: The type of Operating system- RedHat. \
 * **SUSE**: The type of Operating system- SUSE. \
 * **Solaris**: The type of Operating system- Solaris. \
 * **Unix**: The type of Operating system- Unix. \
 * **WindowsServer**: The type of Operating system- WindowsServer.
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

export function configurationDataDeserializer(item: any): ConfigurationData {
  return {
    saps: item["saps"],
    cpu: item["cpu"],
    cpuType: item["cpuType"],
    cpuInMhz: item["cpuInMhz"],
    ram: item["ram"],
    hardwareManufacturer: item["hardwareManufacturer"],
    model: item["model"],
    totalDiskSizeGB: item["totalDiskSizeGB"],
    totalDiskIops: item["totalDiskIops"],
    databaseType: item["databaseType"],
    targetHanaRamSizeGB: item["targetHanaRamSizeGB"],
  };
}

/** Select the database if this is a database server. Leave blank or add Not Applicable for all other instances except the Database Instance. */
export enum KnownDatabaseType {
  /** The type of Database- Adabas. */
  Adabas = "Adabas",
  /** The type of Database- Oracle. */
  Oracle = "Oracle",
  /** The type of Database- SAPMaxDB. */
  SAPMaxDB = "SAPMaxDB",
  /** The type of Database- Db2. */
  Db2 = "Db2",
  /** The type of Database- SAPASE. */
  Sapase = "SAPASE",
  /** The type of Database- SQLServer. */
  SQLServer = "SQLServer",
  /** The type of Database- Informix. */
  Informix = "Informix",
  /** The type of Database- SAPDB. */
  Sapdb = "SAPDB",
  /** The type of Database- HANA. */
  Hana = "HANA",
}

/**
 * Select the database if this is a database server. Leave blank or add Not Applicable for all other instances except the Database Instance. \
 * {@link KnownDatabaseType} can be used interchangeably with DatabaseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Adabas**: The type of Database- Adabas. \
 * **Oracle**: The type of Database- Oracle. \
 * **SAPMaxDB**: The type of Database- SAPMaxDB. \
 * **Db2**: The type of Database- Db2. \
 * **SAPASE**: The type of Database- SAPASE. \
 * **SQLServer**: The type of Database- SQLServer. \
 * **Informix**: The type of Database- Informix. \
 * **SAPDB**: The type of Database- SAPDB. \
 * **HANA**: The type of Database- HANA.
 */
export type DatabaseType = string;

/** The SAP instance specific performance data. */
export interface PerformanceData {
  /** The data source of the performance data. */
  /** The discriminator possible values: Excel, Native */
  dataSource: DataSource;
}

export function performanceDataDeserializer(item: any): PerformanceData {
  return {
    dataSource: item["dataSource"],
  };
}

/** Alias for PerformanceDataUnion */
export type PerformanceDataUnion = ExcelPerformanceData | NativePerformanceData | PerformanceData;

export function performanceDataUnionDeserializer(item: any): PerformanceDataUnion {
  switch (item.dataSource) {
    case "Excel":
      return excelPerformanceDataDeserializer(item as ExcelPerformanceData);

    case "Native":
      return nativePerformanceDataDeserializer(item as NativePerformanceData);

    default:
      return performanceDataDeserializer(item);
  }
}

/** The data source for this resource. */
export enum KnownDataSource {
  /** The type of DataSource- Excel. */
  Excel = "Excel",
  /** The type of DataSource- Native. */
  Native = "Native",
}

/**
 * The data source for this resource. \
 * {@link KnownDataSource} can be used interchangeably with DataSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Excel**: The type of DataSource- Excel. \
 * **Native**: The type of DataSource- Native.
 */
export type DataSource = string;

/** The SAP instance specific performance data for Excel import. */
export interface ExcelPerformanceData extends PerformanceData {
  /** Provide the max CPU percentage load on the server. Omit the percentage symbol while filling this value. */
  readonly maxCpuLoad?: number;
  /** Provide the source Database size in GB. Applicable only if SAP instance type for this server instance is 'DB'. */
  readonly totalSourceDbSizeGB?: number;
  /** The data source for this resource. */
  dataSource: "Excel";
}

export function excelPerformanceDataDeserializer(item: any): ExcelPerformanceData {
  return {
    dataSource: item["dataSource"],
    maxCpuLoad: item["maxCpuLoad"],
    totalSourceDbSizeGB: item["totalSourceDbSizeGB"],
  };
}

/** The SAP instance specific performance data for native discovery. */
export interface NativePerformanceData extends PerformanceData {
  /** The data source for this resource. */
  dataSource: "Native";
}

export function nativePerformanceDataDeserializer(item: any): NativePerformanceData {
  return {
    dataSource: item["dataSource"],
  };
}

/** Defines the provisioning states. */
export enum KnownProvisioningState {
  /** The provisioning state Succeeded. */
  Succeeded = "Succeeded",
  /** The provisioning state Updating. */
  Updating = "Updating",
  /** The provisioning state Failed. */
  Failed = "Failed",
  /** The provisioning state Creating. */
  Creating = "Creating",
  /** The provisioning state Cancelled. */
  Canceled = "Canceled",
  /** The provisioning state Accepted. */
  Accepted = "Accepted",
  /** The provisioning state Deleting. */
  Deleting = "Deleting",
  /** The provisioning state Unknown. */
  Unknown = "Unknown",
}

/**
 * Defines the provisioning states. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: The provisioning state Succeeded. \
 * **Updating**: The provisioning state Updating. \
 * **Failed**: The provisioning state Failed. \
 * **Creating**: The provisioning state Creating. \
 * **Canceled**: The provisioning state Cancelled. \
 * **Accepted**: The provisioning state Accepted. \
 * **Deleting**: The provisioning state Deleting. \
 * **Unknown**: The provisioning state Unknown.
 */
export type ProvisioningState = string;

/** An error response from the SAP migrate resources. */
export interface SAPMigrateError {
  /** The SAP Discovery site resource error body. */
  properties?: ErrorDefinition;
}

export function sapMigrateErrorDeserializer(item: any): SAPMigrateError {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : errorDefinitionDeserializer(item["properties"]),
  };
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

export function errorDefinitionDeserializer(item: any): ErrorDefinition {
  return {
    code: item["code"],
    message: item["message"],
    recommendation: item["recommendation"],
    details: !item["details"] ? item["details"] : errorDefinitionArrayDeserializer(item["details"]),
  };
}

export function errorDefinitionArrayDeserializer(result: Array<ErrorDefinition>): any[] {
  return result.map((item) => {
    return errorDefinitionDeserializer(item);
  });
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource): any {
  return item;
}

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

/** Defines the request body for updating Server Instances resource. */
export interface UpdateServerInstanceRequest {
  /** Server instances properties. */
  properties?: ServerInstanceProperties;
}

export function updateServerInstanceRequestSerializer(item: UpdateServerInstanceRequest): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : serverInstancePropertiesSerializer(item["properties"]),
  };
}

/** The response of a ServerInstance list operation. */
export interface _ServerInstanceListResult {
  /** The ServerInstance items on this page */
  value: ServerInstance[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _serverInstanceListResultDeserializer(item: any): _ServerInstanceListResult {
  return {
    value: serverInstanceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function serverInstanceArraySerializer(result: Array<ServerInstance>): any[] {
  return result.map((item) => {
    return serverInstanceSerializer(item);
  });
}

export function serverInstanceArrayDeserializer(result: Array<ServerInstance>): any[] {
  return result.map((item) => {
    return serverInstanceDeserializer(item);
  });
}

/** Define the SAP Instance resource. */
export interface SAPInstance extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SAPInstanceProperties;
}

export function sapInstanceSerializer(item: SAPInstance): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : sapInstancePropertiesSerializer(item["properties"]),
  };
}

export function sapInstanceDeserializer(item: any): SAPInstance {
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
      : sapInstancePropertiesDeserializer(item["properties"]),
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

export function sapInstancePropertiesSerializer(item: SAPInstanceProperties): any {
  return item;
}

export function sapInstancePropertiesDeserializer(item: any): SAPInstanceProperties {
  return {
    systemSid: item["systemSid"],
    environment: item["environment"],
    landscapeSid: item["landscapeSid"],
    application: item["application"],
    provisioningState: item["provisioningState"],
    errors: !item["errors"] ? item["errors"] : sapMigrateErrorDeserializer(item["errors"]),
  };
}

/** The Environment; PRD, QA, DEV, etc to which SAP system belongs to. Select from the list of available dropdown values. */
export enum KnownSapInstanceEnvironment {
  /** The type of Sap Instance Environment- Production. */
  Production = "Production",
  /** The type of Sap Instance Environment- PreProduction. */
  PreProduction = "PreProduction",
  /** The type of Sap Instance Environment- Test. */
  Test = "Test",
  /** The type of Sap Instance Environment- QualityAssurance. */
  QualityAssurance = "QualityAssurance",
  /** The type of Sap Instance Environment- Development. */
  Development = "Development",
  /** The type of Sap Instance Environment- Sandbox. */
  Sandbox = "Sandbox",
  /** The type of Sap Instance Environment- DisasterRecovery. */
  DisasterRecovery = "DisasterRecovery",
  /** The type of Sap Instance Environment- Training. */
  Training = "Training",
}

/**
 * The Environment; PRD, QA, DEV, etc to which SAP system belongs to. Select from the list of available dropdown values. \
 * {@link KnownSapInstanceEnvironment} can be used interchangeably with SapInstanceEnvironment,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Production**: The type of Sap Instance Environment- Production. \
 * **PreProduction**: The type of Sap Instance Environment- PreProduction. \
 * **Test**: The type of Sap Instance Environment- Test. \
 * **QualityAssurance**: The type of Sap Instance Environment- QualityAssurance. \
 * **Development**: The type of Sap Instance Environment- Development. \
 * **Sandbox**: The type of Sap Instance Environment- Sandbox. \
 * **DisasterRecovery**: The type of Sap Instance Environment- DisasterRecovery. \
 * **Training**: The type of Sap Instance Environment- Training.
 */
export type SapInstanceEnvironment = string;

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

/** The type used for updating tags in SAPInstance resources. */
export interface SAPInstanceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function sapInstanceTagsUpdateSerializer(item: SAPInstanceTagsUpdate): any {
  return { tags: item["tags"] };
}

/** The response of a SAPInstance list operation. */
export interface _SAPInstanceListResult {
  /** The SAPInstance items on this page */
  value: SAPInstance[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _sapInstanceListResultDeserializer(item: any): _SAPInstanceListResult {
  return {
    value: sapInstanceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function sapInstanceArraySerializer(result: Array<SAPInstance>): any[] {
  return result.map((item) => {
    return sapInstanceSerializer(item);
  });
}

export function sapInstanceArrayDeserializer(result: Array<SAPInstance>): any[] {
  return result.map((item) => {
    return sapInstanceDeserializer(item);
  });
}

/** Define the SAP Migration discovery site resource. */
export interface SAPDiscoverySite extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SAPDiscoverySiteProperties;
  /** The extended location definition. */
  extendedLocation?: ExtendedLocation;
}

export function sapDiscoverySiteSerializer(item: SAPDiscoverySite): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : sapDiscoverySitePropertiesSerializer(item["properties"]),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function sapDiscoverySiteDeserializer(item: any): SAPDiscoverySite {
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
      : sapDiscoverySitePropertiesDeserializer(item["properties"]),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : extendedLocationDeserializer(item["extendedLocation"]),
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

export function sapDiscoverySitePropertiesSerializer(item: SAPDiscoverySiteProperties): any {
  return {
    masterSiteId: item["masterSiteId"],
    migrateProjectId: item["migrateProjectId"],
  };
}

export function sapDiscoverySitePropertiesDeserializer(item: any): SAPDiscoverySiteProperties {
  return {
    masterSiteId: item["masterSiteId"],
    migrateProjectId: item["migrateProjectId"],
    provisioningState: item["provisioningState"],
    errors: !item["errors"] ? item["errors"] : sapMigrateErrorDeserializer(item["errors"]),
  };
}

/** The extended location definition. */
export interface ExtendedLocation {
  /** The extended location type. */
  type: string;
  /** The extended location name. */
  name: string;
}

export function extendedLocationSerializer(item: ExtendedLocation): any {
  return { type: item["type"], name: item["name"] };
}

export function extendedLocationDeserializer(item: any): ExtendedLocation {
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

export function sapDiscoverySiteTagsUpdateSerializer(item: SAPDiscoverySiteTagsUpdate): any {
  return { tags: item["tags"] };
}

/** The response of a SAPDiscoverySite list operation. */
export interface _SAPDiscoverySiteListResult {
  /** The SAPDiscoverySite items on this page */
  value: SAPDiscoverySite[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _sapDiscoverySiteListResultDeserializer(item: any): _SAPDiscoverySiteListResult {
  return {
    value: sapDiscoverySiteArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function sapDiscoverySiteArraySerializer(result: Array<SAPDiscoverySite>): any[] {
  return result.map((item) => {
    return sapDiscoverySiteSerializer(item);
  });
}

export function sapDiscoverySiteArrayDeserializer(result: Array<SAPDiscoverySite>): any[] {
  return result.map((item) => {
    return sapDiscoverySiteDeserializer(item);
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
  };
}

export function operationStatusResultArrayDeserializer(
  result: Array<OperationStatusResult>,
): any[] {
  return result.map((item) => {
    return operationStatusResultDeserializer(item);
  });
}

/** The available API versions. */
export enum KnownVersions {
  /** The 2023-10-01-preview API version. */
  V20231001Preview = "2023-10-01-preview",
}
