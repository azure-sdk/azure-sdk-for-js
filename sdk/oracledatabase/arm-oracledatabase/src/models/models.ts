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

/** AutonomousDbVersion resource definition */
export interface AutonomousDbVersion extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDbVersionProperties;
}

/** AutonomousDbVersion resource model */
export interface AutonomousDbVersionProperties {
  /** Supported Autonomous Db versions. */
  version: string;
  /** The Autonomous Database workload type */
  dbWorkload?: WorkloadType;
  /** True if this version of the Oracle Database software's default is free. */
  isDefaultForFree?: boolean;
  /** True if this version of the Oracle Database software's default is paid. */
  isDefaultForPaid?: boolean;
  /** True if this version of the Oracle Database software can be used for Always-Free Autonomous Databases. */
  isFreeTierEnabled?: boolean;
  /** True if this version of the Oracle Database software has payments enabled. */
  isPaidEnabled?: boolean;
}

/** Known values of {@link WorkloadType} that the service accepts. */
export enum KnownWorkloadType {
  /** OLTP */
  OLTP = "OLTP",
  /** DW */
  DW = "DW",
  /** AJD */
  AJD = "AJD",
  /** APEX */
  APEX = "APEX",
}

/**
 * WorkloadType enum \
 * {@link KnownWorkloadType} can be used interchangeably with WorkloadType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **OLTP** \
 * **DW** \
 * **AJD** \
 * **APEX**
 */
export type WorkloadType = string;

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

/** The response of a AutonomousDbVersion list operation. */
export interface _AutonomousDbVersionListResult {
  /** The AutonomousDbVersion items on this page */
  value: AutonomousDbVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** AutonomousDatabaseNationalCharacterSets resource definition */
export interface AutonomousDatabaseNationalCharacterSet extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseNationalCharacterSetProperties;
}

/** AutonomousDatabaseNationalCharacterSet resource model */
export interface AutonomousDatabaseNationalCharacterSetProperties {
  /** The Oracle Autonomous Database supported national character sets. */
  characterSet: string;
}

/** The response of a AutonomousDatabaseNationalCharacterSet list operation. */
export interface _AutonomousDatabaseNationalCharacterSetListResult {
  /** The AutonomousDatabaseNationalCharacterSet items on this page */
  value: AutonomousDatabaseNationalCharacterSet[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** AutonomousDatabaseCharacterSets resource definition */
export interface AutonomousDatabaseCharacterSet extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseCharacterSetProperties;
}

/** AutonomousDatabaseCharacterSet resource model */
export interface AutonomousDatabaseCharacterSetProperties {
  /** The Oracle Autonomous Database supported character sets. */
  characterSet: string;
}

/** The response of a AutonomousDatabaseCharacterSet list operation. */
export interface _AutonomousDatabaseCharacterSetListResult {
  /** The AutonomousDatabaseCharacterSet items on this page */
  value: AutonomousDatabaseCharacterSet[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** AutonomousDatabaseBackup resource definition */
export interface AutonomousDatabaseBackup extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseBackupProperties;
}

export function autonomousDatabaseBackupSerializer(
  item: AutonomousDatabaseBackup,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : autonomousDatabaseBackupPropertiesSerializer(item.properties),
  };
}

/** AutonomousDatabaseBackup resource model */
export interface AutonomousDatabaseBackupProperties {
  /** The OCID of the Autonomous Database. */
  readonly autonomousDatabaseOcid?: string;
  /** The size of the database in terabytes at the time the backup was taken. */
  readonly databaseSizeInTbs?: number;
  /** A valid Oracle Database version for Autonomous Database. */
  readonly dbVersion?: string;
  /** The user-friendly name for the backup. The name does not have to be unique. */
  displayName?: string;
  /** The OCID of the Autonomous Database backup. */
  readonly ocid?: string;
  /** Indicates whether the backup is user-initiated or automatic. */
  readonly isAutomatic?: boolean;
  /** Indicates whether the backup can be used to restore the associated Autonomous Database. */
  readonly isRestorable?: boolean;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
  /** The current state of the backup. */
  readonly lifecycleState?: AutonomousDatabaseBackupLifecycleState;
  /** Retention period, in days */
  retentionPeriodInDays?: number;
  /** The backup size in terabytes (TB). */
  readonly sizeInTbs?: number;
  /** Timestamp until when the backup will be available. */
  readonly timeAvailableTil?: Date;
  /** The date and time the backup started. */
  readonly timeStarted?: string;
  /** The date and time the backup completed. */
  readonly timeEnded?: string;
  /** The type of backup. */
  readonly backupType?: AutonomousDatabaseBackupType;
  /** Azure resource provisioning state. */
  readonly provisioningState?: AzureResourceProvisioningState;
}

export function autonomousDatabaseBackupPropertiesSerializer(
  item: AutonomousDatabaseBackupProperties,
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    retentionPeriodInDays: item["retentionPeriodInDays"],
  };
}

/** Known values of {@link AutonomousDatabaseBackupLifecycleState} that the service accepts. */
export enum KnownAutonomousDatabaseBackupLifecycleState {
  /** Creating */
  Creating = "Creating",
  /** Active */
  Active = "Active",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed",
  /** Updating */
  Updating = "Updating",
}

/**
 * Autonomous database backup lifecycle state enum \
 * {@link KnownAutonomousDatabaseBackupLifecycleState} can be used interchangeably with AutonomousDatabaseBackupLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Active** \
 * **Deleting** \
 * **Failed** \
 * **Updating**
 */
export type AutonomousDatabaseBackupLifecycleState = string;

/** Known values of {@link AutonomousDatabaseBackupType} that the service accepts. */
export enum KnownAutonomousDatabaseBackupType {
  /** Incremental */
  Incremental = "Incremental",
  /** Full */
  Full = "Full",
  /** LongTerm */
  LongTerm = "LongTerm",
}

/**
 * Autonomous database backup type enum \
 * {@link KnownAutonomousDatabaseBackupType} can be used interchangeably with AutonomousDatabaseBackupType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Incremental** \
 * **Full** \
 * **LongTerm**
 */
export type AutonomousDatabaseBackupType = string;

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

/** The type used for update operations of the AutonomousDatabaseBackup. */
export interface AutonomousDatabaseBackupUpdate {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseBackupUpdateProperties;
}

export function autonomousDatabaseBackupUpdateSerializer(
  item: AutonomousDatabaseBackupUpdate,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : autonomousDatabaseBackupUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the AutonomousDatabaseBackup. */
export interface AutonomousDatabaseBackupUpdateProperties {
  /** Retention period, in days */
  retentionPeriodInDays?: number;
}

export function autonomousDatabaseBackupUpdatePropertiesSerializer(
  item: AutonomousDatabaseBackupUpdateProperties,
): Record<string, unknown> {
  return {
    retentionPeriodInDays: item["retentionPeriodInDays"],
  };
}

/** The response of a AutonomousDatabaseBackup list operation. */
export interface _AutonomousDatabaseBackupListResult {
  /** The AutonomousDatabaseBackup items on this page */
  value: AutonomousDatabaseBackup[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a AutonomousDatabase list operation. */
export interface _AutonomousDatabaseListResult {
  /** The AutonomousDatabase items on this page */
  value: AutonomousDatabase[];
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

/** Autonomous Database  resource model. */
export interface AutonomousDatabase extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseBasePropertiesUnion;
}

export function autonomousDatabaseSerializer(
  item: AutonomousDatabase,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : autonomousDatabaseBasePropertiesUnionSerializer(item.properties),
  };
}

/** Autonomous Database base resource model. */
export interface AutonomousDatabaseBaseProperties {
  /** Admin password. */
  adminPassword?: string;
  /** the discriminator possible values: Regular, Clone, CrossRegionDisasterRecovery, CloneFromBackupTimestamp */
  dataBaseType: DataBaseType;
  /** The maintenance schedule type of the Autonomous Database Serverless. */
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  /** The character set for the autonomous database. */
  characterSet?: string;
  /** The compute amount (CPUs) available to the database. */
  computeCount?: number;
  /** The compute model of the Autonomous Database. */
  computeModel?: ComputeModel;
  /** The number of CPU cores to be made available to the database. */
  cpuCoreCount?: number;
  /** Customer Contacts. */
  customerContacts?: CustomerContact[];
  /** The quantity of data in the database, in terabytes. */
  dataStorageSizeInTbs?: number;
  /** The size, in gigabytes, of the data volume that will be created and attached to the database. */
  dataStorageSizeInGbs?: number;
  /** A valid Oracle Database version for Autonomous Database. */
  dbVersion?: string;
  /** The Autonomous Database workload type */
  dbWorkload?: WorkloadType;
  /** The user-friendly name for the Autonomous Database. */
  displayName?: string;
  /** Indicates if auto scaling is enabled for the Autonomous Database CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Indicates if auto scaling is enabled for the Autonomous Database storage. */
  isAutoScalingForStorageEnabled?: boolean;
  /** The list of Azure resource IDs of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. Note that for Autonomous Database Serverless instances, standby databases located in the same region as the source primary database do not have Azure IDs. */
  readonly peerDbIds?: string[];
  /** The Azure resource ID of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbId?: string;
  /** Indicates whether the Autonomous Database has local or called in-region Data Guard enabled. */
  isLocalDataGuardEnabled?: boolean;
  /** Indicates whether the Autonomous Database has Cross Region Data Guard enabled. */
  readonly isRemoteDataGuardEnabled?: boolean;
  /** Indicates the local disaster recovery (DR) type of the Autonomous Database Serverless instance.Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover.Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover. */
  readonly localDisasterRecoveryType?: DisasterRecoveryType;
  /** The date and time the Disaster Recovery role was switched for the standby Autonomous Database. */
  readonly timeDisasterRecoveryRoleChanged?: Date;
  /** Indicates remote disaster recovery configuration */
  readonly remoteDisasterRecoveryConfiguration?: DisasterRecoveryConfigurationDetails;
  /** Local Autonomous Disaster Recovery standby database details. */
  readonly localStandbyDb?: AutonomousDatabaseStandbySummary;
  /** Indicates the number of seconds of data loss for a Data Guard failover. */
  readonly failedDataRecoveryInSeconds?: number;
  /** Specifies if the Autonomous Database requires mTLS connections. */
  isMtlsConnectionRequired?: boolean;
  /** Specifies if the Autonomous Database preview version is being provisioned. */
  isPreviewVersionWithServiceTermsAccepted?: boolean;
  /** The Oracle license model that applies to the Oracle Autonomous Database. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** The character set for the Autonomous Database. */
  ncharacterSet?: string;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: AzureResourceProvisioningState;
  /** Views lifecycleState */
  readonly lifecycleState?: AutonomousDatabaseLifecycleState;
  /** The list of scheduled operations. */
  scheduledOperations?: ScheduledOperationsType;
  /** The private endpoint Ip address for the resource. */
  privateEndpointIp?: string;
  /** The resource's private endpoint label. */
  privateEndpointLabel?: string;
  /** HTTPS link to OCI resources exposed to Azure Customer via Azure Interface. */
  readonly ociUrl?: string;
  /** Client subnet */
  subnetId?: string;
  /** VNET for network connectivity */
  vnetId?: string;
  /** The date and time that the database was created. */
  readonly timeCreated?: Date;
  /** The date and time when maintenance will begin. */
  readonly timeMaintenanceBegin?: Date;
  /** The date and time when maintenance will end. */
  readonly timeMaintenanceEnd?: Date;
  /** The current amount of storage in use for user and system data, in terabytes (TB). */
  readonly actualUsedDataStorageSizeInTbs?: number;
  /** The amount of storage currently allocated for the database tables and billed for, rounded up. */
  readonly allocatedStorageSizeInTbs?: number;
  /** Information about Oracle APEX Application Development. */
  readonly apexDetails?: ApexDetailsType;
  /** List of Oracle Database versions available for a database upgrade. If there are no version upgrades available, this list is empty. */
  readonly availableUpgradeVersions?: string[];
  /** The connection string used to connect to the Autonomous Database. */
  readonly connectionStrings?: ConnectionStringType;
  /** The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. */
  readonly connectionUrls?: ConnectionUrlType;
  /** Status of the Data Safe registration for this Autonomous Database. */
  readonly dataSafeStatus?: DataSafeStatusType;
  /** The Oracle Database Edition that applies to the Autonomous databases. */
  databaseEdition?: DatabaseEditionType;
  /** Autonomous Database ID */
  autonomousDatabaseId?: string;
  /** The area assigned to In-Memory tables in Autonomous Database. */
  readonly inMemoryAreaInGbs?: number;
  /** The date and time when the next long-term backup would be created. */
  readonly nextLongTermBackupTimeStamp?: Date;
  /** Details for the long-term backup schedule. */
  longTermBackupSchedule?: LongTermBackUpScheduleDetails;
  /** Indicates if the Autonomous Database version is a preview version. */
  readonly isPreview?: boolean;
  /** Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard */
  localAdgAutoFailoverMaxDataLossLimit?: number;
  /** The amount of memory (in GBs) enabled per ECPU or OCPU. */
  readonly memoryPerOracleComputeUnitInGbs?: number;
  /** Indicates the Autonomous Database mode. */
  openMode?: OpenModeType;
  /** Status of Operations Insights for this Autonomous Database. */
  readonly operationsInsightsStatus?: OperationsInsightsStatusType;
  /** The Autonomous Database permission level. */
  permissionLevel?: PermissionLevelType;
  /** The private endpoint for the resource. */
  readonly privateEndpoint?: string;
  /** An array of CPU values that an Autonomous Database can be scaled to. */
  readonly provisionableCpus?: number[];
  /** The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled. */
  role?: RoleType;
  /** The URL of the Service Console for the Autonomous Database. */
  readonly serviceConsoleUrl?: string;
  /** The SQL Web Developer URL for the Oracle Autonomous Database. */
  readonly sqlWebDeveloperUrl?: string;
  /** The list of regions that support the creation of an Autonomous Database clone or an Autonomous Data Guard standby database. */
  readonly supportedRegionsToCloneTo?: string[];
  /** The date and time the Autonomous Data Guard role was switched for the Autonomous Database. */
  readonly timeDataGuardRoleChanged?: string;
  /** The date and time the Always Free database will be automatically deleted because of inactivity. */
  readonly timeDeletionOfFreeAutonomousDatabase?: string;
  /** The date and time that Autonomous Data Guard was enabled for an Autonomous Database where the standby was provisioned in the same region as the primary database. */
  readonly timeLocalDataGuardEnabled?: string;
  /** The timestamp of the last failover operation. */
  readonly timeOfLastFailover?: string;
  /** The date and time when last refresh happened. */
  readonly timeOfLastRefresh?: string;
  /** The refresh point timestamp (UTC). */
  readonly timeOfLastRefreshPoint?: string;
  /** The timestamp of the last switchover operation for the Autonomous Database. */
  readonly timeOfLastSwitchover?: string;
  /** The date and time the Always Free database will be stopped because of inactivity. */
  readonly timeReclamationOfFreeAutonomousDatabase?: string;
  /** The storage space consumed by Autonomous Database in GBs. */
  readonly usedDataStorageSizeInGbs?: number;
  /** The amount of storage that has been used, in terabytes. */
  readonly usedDataStorageSizeInTbs?: number;
  /** Database ocid */
  readonly ocid?: string;
  /** Retention period, in days, for long-term backups */
  backupRetentionPeriodInDays?: number;
  /** The client IP access control list (ACL). This is an array of CIDR notations and/or IP addresses. Values should be separate strings, separated by commas. Example: ['1.1.1.1','1.1.1.0/24','1.1.2.25'] */
  whitelistedIps?: string[];
}

export function autonomousDatabaseBasePropertiesUnionSerializer(
  item: AutonomousDatabaseBasePropertiesUnion,
) {
  switch (item.dataBaseType) {
    case "Regular":
      return autonomousDatabasePropertiesSerializer(
        item as AutonomousDatabaseProperties,
      );

    case "Clone":
      return autonomousDatabaseClonePropertiesSerializer(
        item as AutonomousDatabaseCloneProperties,
      );

    case "CrossRegionDisasterRecovery":
      return autonomousDatabaseCrossRegionDisasterRecoveryPropertiesSerializer(
        item as AutonomousDatabaseCrossRegionDisasterRecoveryProperties,
      );

    case "CloneFromBackupTimestamp":
      return autonomousDatabaseFromBackupTimestampPropertiesSerializer(
        item as AutonomousDatabaseFromBackupTimestampProperties,
      );

    default:
      return autonomousDatabaseBasePropertiesSerializer(item);
  }
}

export function autonomousDatabaseBasePropertiesSerializer(
  item: AutonomousDatabaseBasePropertiesUnion,
): Record<string, unknown> {
  return {
    ...autonomousDatabaseBasePropertiesUnionSerializer(item),
  };
}

/** Autonomous Database resource model. */
export interface AutonomousDatabaseProperties
  extends AutonomousDatabaseBaseProperties {
  /** Database type to be created. */
  dataBaseType: "Regular";
}

export function autonomousDatabasePropertiesSerializer(
  item: AutonomousDatabaseProperties,
): Record<string, unknown> {
  return {
    adminPassword: item["adminPassword"],
    dataBaseType: item["dataBaseType"],
    autonomousMaintenanceScheduleType:
      item["autonomousMaintenanceScheduleType"],
    characterSet: item["characterSet"],
    computeCount: item["computeCount"],
    computeModel: item["computeModel"],
    cpuCoreCount: item["cpuCoreCount"],
    customerContacts:
      item["customerContacts"] === undefined
        ? item["customerContacts"]
        : item["customerContacts"].map(customerContactSerializer),
    dataStorageSizeInTbs: item["dataStorageSizeInTbs"],
    dataStorageSizeInGbs: item["dataStorageSizeInGbs"],
    dbVersion: item["dbVersion"],
    dbWorkload: item["dbWorkload"],
    displayName: item["displayName"],
    isAutoScalingEnabled: item["isAutoScalingEnabled"],
    isAutoScalingForStorageEnabled: item["isAutoScalingForStorageEnabled"],
    peerDbId: item["peerDbId"],
    isLocalDataGuardEnabled: item["isLocalDataGuardEnabled"],
    isMtlsConnectionRequired: item["isMtlsConnectionRequired"],
    isPreviewVersionWithServiceTermsAccepted:
      item["isPreviewVersionWithServiceTermsAccepted"],
    licenseModel: item["licenseModel"],
    ncharacterSet: item["ncharacterSet"],
    scheduledOperations: !item.scheduledOperations
      ? item.scheduledOperations
      : scheduledOperationsTypeSerializer(item.scheduledOperations),
    privateEndpointIp: item["privateEndpointIp"],
    privateEndpointLabel: item["privateEndpointLabel"],
    subnetId: item["subnetId"],
    vnetId: item["vnetId"],
    databaseEdition: item["databaseEdition"],
    autonomousDatabaseId: item["autonomousDatabaseId"],
    longTermBackupSchedule: !item.longTermBackupSchedule
      ? item.longTermBackupSchedule
      : longTermBackUpScheduleDetailsSerializer(item.longTermBackupSchedule),
    localAdgAutoFailoverMaxDataLossLimit:
      item["localAdgAutoFailoverMaxDataLossLimit"],
    openMode: item["openMode"],
    permissionLevel: item["permissionLevel"],
    role: item["role"],
    backupRetentionPeriodInDays: item["backupRetentionPeriodInDays"],
    whitelistedIps: item["whitelistedIps"],
  };
}

/** Autonomous Database clone resource model. */
export interface AutonomousDatabaseCloneProperties
  extends AutonomousDatabaseBaseProperties {
  /** Database type to be created. */
  dataBaseType: "Clone";
  /** The source of the database. */
  source?: SourceType;
  /** The Azure resource ID of the Autonomous Database that was cloned to create the current Autonomous Database. */
  sourceId: string;
  /** The Autonomous Database clone type. */
  cloneType: CloneType;
  /** Indicates if the refreshable clone can be reconnected to its source database. */
  readonly isReconnectCloneEnabled?: boolean;
  /** Indicates if the Autonomous Database is a refreshable clone. */
  readonly isRefreshableClone?: boolean;
  /** The refresh mode of the clone. */
  refreshableModel?: RefreshableModelType;
  /** The refresh status of the clone. */
  readonly refreshableStatus?: RefreshableStatusType;
  /** The time and date as an RFC3339 formatted string, e.g., 2022-01-01T12:00:00.000Z, to set the limit for a refreshable clone to be reconnected to its source database. */
  timeUntilReconnectCloneEnabled?: string;
}

export function autonomousDatabaseClonePropertiesSerializer(
  item: AutonomousDatabaseCloneProperties,
): Record<string, unknown> {
  return {
    adminPassword: item["adminPassword"],
    dataBaseType: item["dataBaseType"],
    autonomousMaintenanceScheduleType:
      item["autonomousMaintenanceScheduleType"],
    characterSet: item["characterSet"],
    computeCount: item["computeCount"],
    computeModel: item["computeModel"],
    cpuCoreCount: item["cpuCoreCount"],
    customerContacts:
      item["customerContacts"] === undefined
        ? item["customerContacts"]
        : item["customerContacts"].map(customerContactSerializer),
    dataStorageSizeInTbs: item["dataStorageSizeInTbs"],
    dataStorageSizeInGbs: item["dataStorageSizeInGbs"],
    dbVersion: item["dbVersion"],
    dbWorkload: item["dbWorkload"],
    displayName: item["displayName"],
    isAutoScalingEnabled: item["isAutoScalingEnabled"],
    isAutoScalingForStorageEnabled: item["isAutoScalingForStorageEnabled"],
    peerDbId: item["peerDbId"],
    isLocalDataGuardEnabled: item["isLocalDataGuardEnabled"],
    isMtlsConnectionRequired: item["isMtlsConnectionRequired"],
    isPreviewVersionWithServiceTermsAccepted:
      item["isPreviewVersionWithServiceTermsAccepted"],
    licenseModel: item["licenseModel"],
    ncharacterSet: item["ncharacterSet"],
    scheduledOperations: !item.scheduledOperations
      ? item.scheduledOperations
      : scheduledOperationsTypeSerializer(item.scheduledOperations),
    privateEndpointIp: item["privateEndpointIp"],
    privateEndpointLabel: item["privateEndpointLabel"],
    subnetId: item["subnetId"],
    vnetId: item["vnetId"],
    databaseEdition: item["databaseEdition"],
    autonomousDatabaseId: item["autonomousDatabaseId"],
    longTermBackupSchedule: !item.longTermBackupSchedule
      ? item.longTermBackupSchedule
      : longTermBackUpScheduleDetailsSerializer(item.longTermBackupSchedule),
    localAdgAutoFailoverMaxDataLossLimit:
      item["localAdgAutoFailoverMaxDataLossLimit"],
    openMode: item["openMode"],
    permissionLevel: item["permissionLevel"],
    role: item["role"],
    backupRetentionPeriodInDays: item["backupRetentionPeriodInDays"],
    whitelistedIps: item["whitelistedIps"],
    source: item["source"],
    sourceId: item["sourceId"],
    cloneType: item["cloneType"],
    refreshableModel: item["refreshableModel"],
    timeUntilReconnectCloneEnabled: item["timeUntilReconnectCloneEnabled"],
  };
}

/** Known values of {@link SourceType} that the service accepts. */
export enum KnownSourceType {
  /** None */
  None = "None",
  /** Database */
  Database = "Database",
  /** BackupFromId */
  BackupFromId = "BackupFromId",
  /** BackupFromTimestamp */
  BackupFromTimestamp = "BackupFromTimestamp",
  /** CloneToRefreshable */
  CloneToRefreshable = "CloneToRefreshable",
  /** CrossRegionDataguard */
  CrossRegionDataguard = "CrossRegionDataguard",
  /** CrossRegionDisasterRecovery */
  CrossRegionDisasterRecovery = "CrossRegionDisasterRecovery",
}

/**
 * Source type enum. \
 * {@link KnownSourceType} can be used interchangeably with SourceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Database** \
 * **BackupFromId** \
 * **BackupFromTimestamp** \
 * **CloneToRefreshable** \
 * **CrossRegionDataguard** \
 * **CrossRegionDisasterRecovery**
 */
export type SourceType = string;

/** Known values of {@link CloneType} that the service accepts. */
export enum KnownCloneType {
  /** Full */
  Full = "Full",
  /** Metadata */
  Metadata = "Metadata",
}

/**
 * Clone type enum \
 * {@link KnownCloneType} can be used interchangeably with CloneType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Full** \
 * **Metadata**
 */
export type CloneType = string;

/** Known values of {@link RefreshableModelType} that the service accepts. */
export enum KnownRefreshableModelType {
  /** Automatic */
  Automatic = "Automatic",
  /** Manual */
  Manual = "Manual",
}

/**
 * Refreshable model type enum \
 * {@link KnownRefreshableModelType} can be used interchangeably with RefreshableModelType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Automatic** \
 * **Manual**
 */
export type RefreshableModelType = string;

/** Known values of {@link RefreshableStatusType} that the service accepts. */
export enum KnownRefreshableStatusType {
  /** Refreshing */
  Refreshing = "Refreshing",
  /** NotRefreshing */
  NotRefreshing = "NotRefreshing",
}

/**
 * Refreshable status type enum. \
 * {@link KnownRefreshableStatusType} can be used interchangeably with RefreshableStatusType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Refreshing** \
 * **NotRefreshing**
 */
export type RefreshableStatusType = string;

/** Autonomous Database Cross Region Disaster Recovery resource model. */
export interface AutonomousDatabaseCrossRegionDisasterRecoveryProperties
  extends AutonomousDatabaseBaseProperties {
  /** Database type to be created. */
  dataBaseType: "CrossRegionDisasterRecovery";
  /** The source of the database. */
  source: "CrossRegionDisasterRecovery";
  /** The Azure resource ID of the source Autonomous Database that will be used to create a new peer database for the DR association. */
  sourceId: string;
  /** The name of the region where source Autonomous Database exists. */
  sourceLocation?: string;
  /** The source database ocid */
  sourceOcid?: string;
  /** Indicates the cross-region disaster recovery (DR) type of the standby Autonomous Database Serverless instance. Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover. Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover. */
  remoteDisasterRecoveryType: DisasterRecoveryType;
  /** If true, 7 days worth of backups are replicated across regions for Cross-Region ADB or Backup-Based DR between Primary and Standby. If false, the backups taken on the Primary are not replicated to the Standby database. */
  isReplicateAutomaticBackups?: boolean;
}

export function autonomousDatabaseCrossRegionDisasterRecoveryPropertiesSerializer(
  item: AutonomousDatabaseCrossRegionDisasterRecoveryProperties,
): Record<string, unknown> {
  return {
    adminPassword: item["adminPassword"],
    dataBaseType: item["dataBaseType"],
    autonomousMaintenanceScheduleType:
      item["autonomousMaintenanceScheduleType"],
    characterSet: item["characterSet"],
    computeCount: item["computeCount"],
    computeModel: item["computeModel"],
    cpuCoreCount: item["cpuCoreCount"],
    customerContacts:
      item["customerContacts"] === undefined
        ? item["customerContacts"]
        : item["customerContacts"].map(customerContactSerializer),
    dataStorageSizeInTbs: item["dataStorageSizeInTbs"],
    dataStorageSizeInGbs: item["dataStorageSizeInGbs"],
    dbVersion: item["dbVersion"],
    dbWorkload: item["dbWorkload"],
    displayName: item["displayName"],
    isAutoScalingEnabled: item["isAutoScalingEnabled"],
    isAutoScalingForStorageEnabled: item["isAutoScalingForStorageEnabled"],
    peerDbId: item["peerDbId"],
    isLocalDataGuardEnabled: item["isLocalDataGuardEnabled"],
    isMtlsConnectionRequired: item["isMtlsConnectionRequired"],
    isPreviewVersionWithServiceTermsAccepted:
      item["isPreviewVersionWithServiceTermsAccepted"],
    licenseModel: item["licenseModel"],
    ncharacterSet: item["ncharacterSet"],
    scheduledOperations: !item.scheduledOperations
      ? item.scheduledOperations
      : scheduledOperationsTypeSerializer(item.scheduledOperations),
    privateEndpointIp: item["privateEndpointIp"],
    privateEndpointLabel: item["privateEndpointLabel"],
    subnetId: item["subnetId"],
    vnetId: item["vnetId"],
    databaseEdition: item["databaseEdition"],
    autonomousDatabaseId: item["autonomousDatabaseId"],
    longTermBackupSchedule: !item.longTermBackupSchedule
      ? item.longTermBackupSchedule
      : longTermBackUpScheduleDetailsSerializer(item.longTermBackupSchedule),
    localAdgAutoFailoverMaxDataLossLimit:
      item["localAdgAutoFailoverMaxDataLossLimit"],
    openMode: item["openMode"],
    permissionLevel: item["permissionLevel"],
    role: item["role"],
    backupRetentionPeriodInDays: item["backupRetentionPeriodInDays"],
    whitelistedIps: item["whitelistedIps"],
    source: item["source"],
    sourceId: item["sourceId"],
    sourceLocation: item["sourceLocation"],
    sourceOcid: item["sourceOcid"],
    remoteDisasterRecoveryType: item["remoteDisasterRecoveryType"],
    isReplicateAutomaticBackups: item["isReplicateAutomaticBackups"],
  };
}

/** Known values of {@link DisasterRecoveryType} that the service accepts. */
export enum KnownDisasterRecoveryType {
  /** Adg */
  Adg = "Adg",
  /** BackupBased */
  BackupBased = "BackupBased",
}

/**
 * Disaster recovery type enum. \
 * {@link KnownDisasterRecoveryType} can be used interchangeably with DisasterRecoveryType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Adg** \
 * **BackupBased**
 */
export type DisasterRecoveryType = string;

/** Autonomous Database From Backup Timestamp resource model. */
export interface AutonomousDatabaseFromBackupTimestampProperties
  extends AutonomousDatabaseBaseProperties {
  /** Database type to be created. */
  dataBaseType: "CloneFromBackupTimestamp";
  /** The source of the database. */
  source: "BackupFromTimestamp";
  /** The ID of the source Autonomous Database that you will clone to create a new Autonomous Database. */
  sourceId: string;
  /** The Autonomous Database clone type. */
  cloneType: CloneType;
  /** The timestamp specified for the point-in-time clone of the source Autonomous Database. The timestamp must be in the past. */
  timestamp?: Date;
  /** Clone from latest available backup timestamp. */
  useLatestAvailableBackupTimeStamp?: boolean;
}

export function autonomousDatabaseFromBackupTimestampPropertiesSerializer(
  item: AutonomousDatabaseFromBackupTimestampProperties,
): Record<string, unknown> {
  return {
    adminPassword: item["adminPassword"],
    dataBaseType: item["dataBaseType"],
    autonomousMaintenanceScheduleType:
      item["autonomousMaintenanceScheduleType"],
    characterSet: item["characterSet"],
    computeCount: item["computeCount"],
    computeModel: item["computeModel"],
    cpuCoreCount: item["cpuCoreCount"],
    customerContacts:
      item["customerContacts"] === undefined
        ? item["customerContacts"]
        : item["customerContacts"].map(customerContactSerializer),
    dataStorageSizeInTbs: item["dataStorageSizeInTbs"],
    dataStorageSizeInGbs: item["dataStorageSizeInGbs"],
    dbVersion: item["dbVersion"],
    dbWorkload: item["dbWorkload"],
    displayName: item["displayName"],
    isAutoScalingEnabled: item["isAutoScalingEnabled"],
    isAutoScalingForStorageEnabled: item["isAutoScalingForStorageEnabled"],
    peerDbId: item["peerDbId"],
    isLocalDataGuardEnabled: item["isLocalDataGuardEnabled"],
    isMtlsConnectionRequired: item["isMtlsConnectionRequired"],
    isPreviewVersionWithServiceTermsAccepted:
      item["isPreviewVersionWithServiceTermsAccepted"],
    licenseModel: item["licenseModel"],
    ncharacterSet: item["ncharacterSet"],
    scheduledOperations: !item.scheduledOperations
      ? item.scheduledOperations
      : scheduledOperationsTypeSerializer(item.scheduledOperations),
    privateEndpointIp: item["privateEndpointIp"],
    privateEndpointLabel: item["privateEndpointLabel"],
    subnetId: item["subnetId"],
    vnetId: item["vnetId"],
    databaseEdition: item["databaseEdition"],
    autonomousDatabaseId: item["autonomousDatabaseId"],
    longTermBackupSchedule: !item.longTermBackupSchedule
      ? item.longTermBackupSchedule
      : longTermBackUpScheduleDetailsSerializer(item.longTermBackupSchedule),
    localAdgAutoFailoverMaxDataLossLimit:
      item["localAdgAutoFailoverMaxDataLossLimit"],
    openMode: item["openMode"],
    permissionLevel: item["permissionLevel"],
    role: item["role"],
    backupRetentionPeriodInDays: item["backupRetentionPeriodInDays"],
    whitelistedIps: item["whitelistedIps"],
    source: item["source"],
    sourceId: item["sourceId"],
    cloneType: item["cloneType"],
    timestamp: item["timestamp"]?.toISOString(),
    useLatestAvailableBackupTimeStamp:
      item["useLatestAvailableBackupTimeStamp"],
  };
}

/** Known values of {@link DataBaseType} that the service accepts. */
export enum KnownDataBaseType {
  /** Regular */
  Regular = "Regular",
  /** Clone */
  Clone = "Clone",
  /** CloneFromBackupTimestamp */
  CloneFromBackupTimestamp = "CloneFromBackupTimestamp",
  /** CrossRegionDisasterRecovery */
  CrossRegionDisasterRecovery = "CrossRegionDisasterRecovery",
}

/**
 * Database type enum \
 * {@link KnownDataBaseType} can be used interchangeably with DataBaseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Regular** \
 * **Clone** \
 * **CloneFromBackupTimestamp** \
 * **CrossRegionDisasterRecovery**
 */
export type DataBaseType = string;

/** Known values of {@link AutonomousMaintenanceScheduleType} that the service accepts. */
export enum KnownAutonomousMaintenanceScheduleType {
  /** Early */
  Early = "Early",
  /** Regular */
  Regular = "Regular",
}

/**
 * Autonomous database maintenance schedule type enum. \
 * {@link KnownAutonomousMaintenanceScheduleType} can be used interchangeably with AutonomousMaintenanceScheduleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Early** \
 * **Regular**
 */
export type AutonomousMaintenanceScheduleType = string;

/** Known values of {@link ComputeModel} that the service accepts. */
export enum KnownComputeModel {
  /** ECPU */
  ECPU = "ECPU",
  /** OCPU */
  OCPU = "OCPU",
}

/**
 * Compute model enum \
 * {@link KnownComputeModel} can be used interchangeably with ComputeModel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ECPU** \
 * **OCPU**
 */
export type ComputeModel = string;

/** CustomerContact resource properties */
export interface CustomerContact {
  /** The email address used by Oracle to send notifications regarding databases and infrastructure. */
  email: string;
}

export function customerContactSerializer(
  item: CustomerContact,
): Record<string, unknown> {
  return {
    email: item["email"],
  };
}

/** Configurations of a Disaster Recovery Details */
export interface DisasterRecoveryConfigurationDetails {
  /** Indicates the disaster recovery (DR) type of the Autonomous Database Serverless instance. Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover. Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover. */
  disasterRecoveryType?: DisasterRecoveryType;
  /** Time and date stored as an RFC 3339 formatted timestamp string. For example, 2022-01-01T12:00:00.000Z would set a limit for the snapshot standby to be converted back to a cross-region standby database. */
  timeSnapshotStandbyEnabledTill?: Date;
  /** Indicates if user wants to convert to a snapshot standby. For example, true would set a standby database to snapshot standby database. False would set a snapshot standby database back to regular standby database. */
  isSnapshotStandby?: boolean;
  /** If true, 7 days worth of backups are replicated across regions for Cross-Region ADB or Backup-Based DR between Primary and Standby. If false, the backups taken on the Primary are not replicated to the Standby database. */
  isReplicateAutomaticBackups?: boolean;
}

export function disasterRecoveryConfigurationDetailsSerializer(
  item: DisasterRecoveryConfigurationDetails,
): Record<string, unknown> {
  return {
    disasterRecoveryType: item["disasterRecoveryType"],
    timeSnapshotStandbyEnabledTill:
      item["timeSnapshotStandbyEnabledTill"]?.toISOString(),
    isSnapshotStandby: item["isSnapshotStandby"],
    isReplicateAutomaticBackups: item["isReplicateAutomaticBackups"],
  };
}

/** Autonomous Disaster Recovery standby database details. */
export interface AutonomousDatabaseStandbySummary {
  /** The amount of time, in seconds, that the data of the standby database lags the data of the primary database. Can be used to determine the potential data loss in the event of a failover. */
  lagTimeInSeconds?: number;
  /** The current state of the Autonomous Database. */
  lifecycleState?: AutonomousDatabaseLifecycleState;
  /** Additional information about the current lifecycle state. */
  lifecycleDetails?: string;
  /** The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database. */
  timeDataGuardRoleChanged?: string;
  /** The date and time the Disaster Recovery role was switched for the standby Autonomous Database. */
  timeDisasterRecoveryRoleChanged?: string;
}

/** Known values of {@link AutonomousDatabaseLifecycleState} that the service accepts. */
export enum KnownAutonomousDatabaseLifecycleState {
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Available */
  Available = "Available",
  /** Stopping */
  Stopping = "Stopping",
  /** Stopped */
  Stopped = "Stopped",
  /** Starting */
  Starting = "Starting",
  /** Terminating */
  Terminating = "Terminating",
  /** Terminated */
  Terminated = "Terminated",
  /** Unavailable */
  Unavailable = "Unavailable",
  /** RestoreInProgress */
  RestoreInProgress = "RestoreInProgress",
  /** RestoreFailed */
  RestoreFailed = "RestoreFailed",
  /** BackupInProgress */
  BackupInProgress = "BackupInProgress",
  /** ScaleInProgress */
  ScaleInProgress = "ScaleInProgress",
  /** AvailableNeedsAttention */
  AvailableNeedsAttention = "AvailableNeedsAttention",
  /** Updating */
  Updating = "Updating",
  /** MaintenanceInProgress */
  MaintenanceInProgress = "MaintenanceInProgress",
  /** Restarting */
  Restarting = "Restarting",
  /** Recreating */
  Recreating = "Recreating",
  /** RoleChangeInProgress */
  RoleChangeInProgress = "RoleChangeInProgress",
  /** Upgrading */
  Upgrading = "Upgrading",
  /** Inaccessible */
  Inaccessible = "Inaccessible",
  /** Standby */
  Standby = "Standby",
}

/**
 * Autonomous database lifecycle state enum \
 * {@link KnownAutonomousDatabaseLifecycleState} can be used interchangeably with AutonomousDatabaseLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Available** \
 * **Stopping** \
 * **Stopped** \
 * **Starting** \
 * **Terminating** \
 * **Terminated** \
 * **Unavailable** \
 * **RestoreInProgress** \
 * **RestoreFailed** \
 * **BackupInProgress** \
 * **ScaleInProgress** \
 * **AvailableNeedsAttention** \
 * **Updating** \
 * **MaintenanceInProgress** \
 * **Restarting** \
 * **Recreating** \
 * **RoleChangeInProgress** \
 * **Upgrading** \
 * **Inaccessible** \
 * **Standby**
 */
export type AutonomousDatabaseLifecycleState = string;

/** Known values of {@link LicenseModel} that the service accepts. */
export enum KnownLicenseModel {
  /** LicenseIncluded */
  LicenseIncluded = "LicenseIncluded",
  /** BringYourOwnLicense */
  BringYourOwnLicense = "BringYourOwnLicense",
}

/**
 * LicenseModel enum \
 * {@link KnownLicenseModel} can be used interchangeably with LicenseModel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LicenseIncluded** \
 * **BringYourOwnLicense**
 */
export type LicenseModel = string;

/** The list of scheduled operations. */
export interface ScheduledOperationsType {
  /** Day of week */
  dayOfWeek: DayOfWeek;
  /** auto start time. value must be of ISO-8601 format HH:mm */
  scheduledStartTime?: string;
  /** auto stop time. value must be of ISO-8601 format HH:mm */
  scheduledStopTime?: string;
}

export function scheduledOperationsTypeSerializer(
  item: ScheduledOperationsType,
): Record<string, unknown> {
  return {
    dayOfWeek: dayOfWeekSerializer(item.dayOfWeek),
    scheduledStartTime: item["scheduledStartTime"],
    scheduledStopTime: item["scheduledStopTime"],
  };
}

/** DayOfWeek resource properties */
export interface DayOfWeek {
  /** Name of the day of the week. */
  name: DayOfWeekName;
}

export function dayOfWeekSerializer(item: DayOfWeek): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

/** Known values of {@link DayOfWeekName} that the service accepts. */
export enum KnownDayOfWeekName {
  /** Monday */
  Monday = "Monday",
  /** Tuesday */
  Tuesday = "Tuesday",
  /** Wednesday */
  Wednesday = "Wednesday",
  /** Thursday */
  Thursday = "Thursday",
  /** Friday */
  Friday = "Friday",
  /** Saturday */
  Saturday = "Saturday",
  /** Sunday */
  Sunday = "Sunday",
}

/**
 * DayOfWeekName enum \
 * {@link KnownDayOfWeekName} can be used interchangeably with DayOfWeekName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Monday** \
 * **Tuesday** \
 * **Wednesday** \
 * **Thursday** \
 * **Friday** \
 * **Saturday** \
 * **Sunday**
 */
export type DayOfWeekName = string;

/** Information about Oracle APEX Application Development. */
export interface ApexDetailsType {
  /** The Oracle APEX Application Development version. */
  apexVersion?: string;
  /** The Oracle REST Data Services (ORDS) version. */
  ordsVersion?: string;
}

/** Connection strings to connect to an Oracle Autonomous Database. */
export interface ConnectionStringType {
  /** Returns all connection strings that can be used to connect to the Autonomous Database. */
  allConnectionStrings?: AllConnectionStringType;
  /** The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  dedicated?: string;
  /** The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements. */
  high?: string;
  /** The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  low?: string;
  /** The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements. */
  medium?: string;
  /** A list of connection string profiles to allow clients to group, filter and select connection string values based on structured metadata. */
  profiles?: ProfileType[];
}

/** The connection string profile to allow clients to group, filter and select connection string values based on structured metadata. */
export interface AllConnectionStringType {
  /** The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements. */
  high?: string;
  /** The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  low?: string;
  /** The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements. */
  medium?: string;
}

/** The connection string profile to allow clients to group, filter and select connection string values based on structured metadata. */
export interface ProfileType {
  /** Consumer group used by the connection. */
  consumerGroup?: ConsumerGroup;
  /** A user-friendly name for the connection. */
  displayName: string;
  /** Host format used in connection string. */
  hostFormat: HostFormatType;
  /** True for a regional connection string, applicable to cross-region DG only. */
  isRegional?: boolean;
  /** Protocol used by the connection. */
  protocol: ProtocolType;
  /** Specifies whether the listener performs a direct hand-off of the session, or redirects the session. */
  sessionMode: SessionModeType;
  /** Specifies whether the connection string is using the long (LONG), Easy Connect (EZCONNECT), or Easy Connect Plus (EZCONNECTPLUS) format. */
  syntaxFormat: SyntaxFormatType;
  /** Specifies whether the TLS handshake is using one-way (SERVER) or mutual (MUTUAL) authentication. */
  tlsAuthentication?: TlsAuthenticationType;
  /** Connection string value. */
  value: string;
}

/** Known values of {@link ConsumerGroup} that the service accepts. */
export enum KnownConsumerGroup {
  /** High */
  High = "High",
  /** Medium */
  Medium = "Medium",
  /** Low */
  Low = "Low",
  /** Tp */
  Tp = "Tp",
  /** Tpurgent */
  Tpurgent = "Tpurgent",
}

/**
 * Consumer group enum. \
 * {@link KnownConsumerGroup} can be used interchangeably with ConsumerGroup,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **High** \
 * **Medium** \
 * **Low** \
 * **Tp** \
 * **Tpurgent**
 */
export type ConsumerGroup = string;

/** Known values of {@link HostFormatType} that the service accepts. */
export enum KnownHostFormatType {
  /** Fqdn */
  Fqdn = "Fqdn",
  /** Ip */
  Ip = "Ip",
}

/**
 * Host format type enum. \
 * {@link KnownHostFormatType} can be used interchangeably with HostFormatType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Fqdn** \
 * **Ip**
 */
export type HostFormatType = string;

/** Known values of {@link ProtocolType} that the service accepts. */
export enum KnownProtocolType {
  /** TCP */
  TCP = "TCP",
  /** TCPS */
  TCPS = "TCPS",
}

/**
 * Protocol type enum. \
 * {@link KnownProtocolType} can be used interchangeably with ProtocolType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TCP** \
 * **TCPS**
 */
export type ProtocolType = string;

/** Known values of {@link SessionModeType} that the service accepts. */
export enum KnownSessionModeType {
  /** Direct */
  Direct = "Direct",
  /** Redirect */
  Redirect = "Redirect",
}

/**
 * Session mode type enum. \
 * {@link KnownSessionModeType} can be used interchangeably with SessionModeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Direct** \
 * **Redirect**
 */
export type SessionModeType = string;

/** Known values of {@link SyntaxFormatType} that the service accepts. */
export enum KnownSyntaxFormatType {
  /** Long */
  Long = "Long",
  /** Ezconnect */
  Ezconnect = "Ezconnect",
  /** Ezconnectplus */
  Ezconnectplus = "Ezconnectplus",
}

/**
 * Syntax format type enum. \
 * {@link KnownSyntaxFormatType} can be used interchangeably with SyntaxFormatType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Long** \
 * **Ezconnect** \
 * **Ezconnectplus**
 */
export type SyntaxFormatType = string;

/** Known values of {@link TlsAuthenticationType} that the service accepts. */
export enum KnownTlsAuthenticationType {
  /** Server */
  Server = "Server",
  /** Mutual */
  Mutual = "Mutual",
}

/**
 * TLS authentication type enum. \
 * {@link KnownTlsAuthenticationType} can be used interchangeably with TlsAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Server** \
 * **Mutual**
 */
export type TlsAuthenticationType = string;

/** The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. */
export interface ConnectionUrlType {
  /** Oracle Application Express (APEX) URL. */
  apexUrl?: string;
  /** The URL of the Database Transforms for the Autonomous Database. */
  databaseTransformsUrl?: string;
  /** The URL of the Graph Studio for the Autonomous Database. */
  graphStudioUrl?: string;
  /** The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database. */
  machineLearningNotebookUrl?: string;
  /** The URL of the MongoDB API for the Autonomous Database. */
  mongoDbUrl?: string;
  /** The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database. */
  ordsUrl?: string;
  /** Oracle SQL Developer Web URL. */
  sqlDevWebUrl?: string;
}

/** Known values of {@link DataSafeStatusType} that the service accepts. */
export enum KnownDataSafeStatusType {
  /** Registering */
  Registering = "Registering",
  /** Registered */
  Registered = "Registered",
  /** Deregistering */
  Deregistering = "Deregistering",
  /** NotRegistered */
  NotRegistered = "NotRegistered",
  /** Failed */
  Failed = "Failed",
}

/**
 * DataSafe status type enum. \
 * {@link KnownDataSafeStatusType} can be used interchangeably with DataSafeStatusType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Registering** \
 * **Registered** \
 * **Deregistering** \
 * **NotRegistered** \
 * **Failed**
 */
export type DataSafeStatusType = string;

/** Known values of {@link DatabaseEditionType} that the service accepts. */
export enum KnownDatabaseEditionType {
  /** StandardEdition */
  StandardEdition = "StandardEdition",
  /** EnterpriseEdition */
  EnterpriseEdition = "EnterpriseEdition",
}

/**
 * Database edition type enum. \
 * {@link KnownDatabaseEditionType} can be used interchangeably with DatabaseEditionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **StandardEdition** \
 * **EnterpriseEdition**
 */
export type DatabaseEditionType = string;

/** Details for the long-term backup schedule. */
export interface LongTermBackUpScheduleDetails {
  /** The frequency of the long-term backup schedule */
  repeatCadence?: RepeatCadenceType;
  /** The timestamp for the long-term backup schedule. For a MONTHLY cadence, months having fewer days than the provided date will have the backup taken on the last day of that month. */
  timeOfBackup?: Date;
  /** Retention period, in days, for backups. */
  retentionPeriodInDays?: number;
  /** Indicates if the long-term backup schedule should be deleted. The default value is `FALSE`. */
  isDisabled?: boolean;
}

export function longTermBackUpScheduleDetailsSerializer(
  item: LongTermBackUpScheduleDetails,
): Record<string, unknown> {
  return {
    repeatCadence: item["repeatCadence"],
    timeOfBackup: item["timeOfBackup"]?.toISOString(),
    retentionPeriodInDays: item["retentionPeriodInDays"],
    isDisabled: item["isDisabled"],
  };
}

/** Known values of {@link RepeatCadenceType} that the service accepts. */
export enum KnownRepeatCadenceType {
  /** OneTime */
  OneTime = "OneTime",
  /** Weekly */
  Weekly = "Weekly",
  /** Monthly */
  Monthly = "Monthly",
  /** Yearly */
  Yearly = "Yearly",
}

/**
 * Repeat cadence type enum \
 * {@link KnownRepeatCadenceType} can be used interchangeably with RepeatCadenceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **OneTime** \
 * **Weekly** \
 * **Monthly** \
 * **Yearly**
 */
export type RepeatCadenceType = string;

/** Known values of {@link OpenModeType} that the service accepts. */
export enum KnownOpenModeType {
  /** ReadOnly */
  ReadOnly = "ReadOnly",
  /** ReadWrite */
  ReadWrite = "ReadWrite",
}

/**
 * Open mode type enum. \
 * {@link KnownOpenModeType} can be used interchangeably with OpenModeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ReadOnly** \
 * **ReadWrite**
 */
export type OpenModeType = string;

/** Known values of {@link OperationsInsightsStatusType} that the service accepts. */
export enum KnownOperationsInsightsStatusType {
  /** Enabling */
  Enabling = "Enabling",
  /** Enabled */
  Enabled = "Enabled",
  /** Disabling */
  Disabling = "Disabling",
  /** NotEnabled */
  NotEnabled = "NotEnabled",
  /** FailedEnabling */
  FailedEnabling = "FailedEnabling",
  /** FailedDisabling */
  FailedDisabling = "FailedDisabling",
}

/**
 * Operations Insights status type enum. \
 * {@link KnownOperationsInsightsStatusType} can be used interchangeably with OperationsInsightsStatusType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabling** \
 * **Enabled** \
 * **Disabling** \
 * **NotEnabled** \
 * **FailedEnabling** \
 * **FailedDisabling**
 */
export type OperationsInsightsStatusType = string;

/** Known values of {@link PermissionLevelType} that the service accepts. */
export enum KnownPermissionLevelType {
  /** Restricted */
  Restricted = "Restricted",
  /** Unrestricted */
  Unrestricted = "Unrestricted",
}

/**
 * Permission level type enum. \
 * {@link KnownPermissionLevelType} can be used interchangeably with PermissionLevelType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Restricted** \
 * **Unrestricted**
 */
export type PermissionLevelType = string;

/** Known values of {@link RoleType} that the service accepts. */
export enum KnownRoleType {
  /** Primary */
  Primary = "Primary",
  /** Standby */
  Standby = "Standby",
  /** DisabledStandby */
  DisabledStandby = "DisabledStandby",
  /** BackupCopy */
  BackupCopy = "BackupCopy",
  /** SnapshotStandby */
  SnapshotStandby = "SnapshotStandby",
}

/**
 * Role type enum. \
 * {@link KnownRoleType} can be used interchangeably with RoleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **Standby** \
 * **DisabledStandby** \
 * **BackupCopy** \
 * **SnapshotStandby**
 */
export type RoleType = string;

/** The type used for update operations of the AutonomousDatabase. */
export interface AutonomousDatabaseUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseUpdateProperties;
}

export function autonomousDatabaseUpdateSerializer(
  item: AutonomousDatabaseUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : autonomousDatabaseUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the AutonomousDatabase. */
export interface AutonomousDatabaseUpdateProperties {
  /** Admin password. */
  adminPassword?: string;
  /** The maintenance schedule type of the Autonomous Database Serverless. */
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  /** The compute amount (CPUs) available to the database. */
  computeCount?: number;
  /** The number of CPU cores to be made available to the database. */
  cpuCoreCount?: number;
  /** Customer Contacts. */
  customerContacts?: CustomerContact[];
  /** The quantity of data in the database, in terabytes. */
  dataStorageSizeInTbs?: number;
  /** The size, in gigabytes, of the data volume that will be created and attached to the database. */
  dataStorageSizeInGbs?: number;
  /** The user-friendly name for the Autonomous Database. */
  displayName?: string;
  /** Indicates if auto scaling is enabled for the Autonomous Database CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Indicates if auto scaling is enabled for the Autonomous Database storage. */
  isAutoScalingForStorageEnabled?: boolean;
  /** The Azure resource ID of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbId?: string;
  /** Indicates whether the Autonomous Database has local or called in-region Data Guard enabled. */
  isLocalDataGuardEnabled?: boolean;
  /** Specifies if the Autonomous Database requires mTLS connections. */
  isMtlsConnectionRequired?: boolean;
  /** The Oracle license model that applies to the Oracle Autonomous Database. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** The list of scheduled operations. */
  scheduledOperations?: ScheduledOperationsType;
  /** The Oracle Database Edition that applies to the Autonomous databases. */
  databaseEdition?: DatabaseEditionType;
  /** Details for the long-term backup schedule. */
  longTermBackupSchedule?: LongTermBackUpScheduleDetails;
  /** Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard */
  localAdgAutoFailoverMaxDataLossLimit?: number;
  /** Indicates the Autonomous Database mode. */
  openMode?: OpenModeType;
  /** The Autonomous Database permission level. */
  permissionLevel?: PermissionLevelType;
  /** The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled. */
  role?: RoleType;
  /** Retention period, in days, for long-term backups */
  backupRetentionPeriodInDays?: number;
  /** The client IP access control list (ACL). This is an array of CIDR notations and/or IP addresses. Values should be separate strings, separated by commas. Example: ['1.1.1.1','1.1.1.0/24','1.1.2.25'] */
  whitelistedIps?: string[];
}

export function autonomousDatabaseUpdatePropertiesSerializer(
  item: AutonomousDatabaseUpdateProperties,
): Record<string, unknown> {
  return {
    adminPassword: item["adminPassword"],
    autonomousMaintenanceScheduleType:
      item["autonomousMaintenanceScheduleType"],
    computeCount: item["computeCount"],
    cpuCoreCount: item["cpuCoreCount"],
    customerContacts:
      item["customerContacts"] === undefined
        ? item["customerContacts"]
        : item["customerContacts"].map(customerContactSerializer),
    dataStorageSizeInTbs: item["dataStorageSizeInTbs"],
    dataStorageSizeInGbs: item["dataStorageSizeInGbs"],
    displayName: item["displayName"],
    isAutoScalingEnabled: item["isAutoScalingEnabled"],
    isAutoScalingForStorageEnabled: item["isAutoScalingForStorageEnabled"],
    peerDbId: item["peerDbId"],
    isLocalDataGuardEnabled: item["isLocalDataGuardEnabled"],
    isMtlsConnectionRequired: item["isMtlsConnectionRequired"],
    licenseModel: item["licenseModel"],
    scheduledOperations: !item.scheduledOperations
      ? item.scheduledOperations
      : scheduledOperationsTypeSerializer(item.scheduledOperations),
    databaseEdition: item["databaseEdition"],
    longTermBackupSchedule: !item.longTermBackupSchedule
      ? item.longTermBackupSchedule
      : longTermBackUpScheduleDetailsSerializer(item.longTermBackupSchedule),
    localAdgAutoFailoverMaxDataLossLimit:
      item["localAdgAutoFailoverMaxDataLossLimit"],
    openMode: item["openMode"],
    permissionLevel: item["permissionLevel"],
    role: item["role"],
    backupRetentionPeriodInDays: item["backupRetentionPeriodInDays"],
    whitelistedIps: item["whitelistedIps"],
  };
}

/** PeerDb Details */
export interface PeerDbDetails {
  /** The Azure resource ID of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbId?: string;
  /** Ocid of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbOcid?: string;
  /** The location of the Disaster Recovery peer database. */
  peerDbLocation?: string;
}

export function peerDbDetailsSerializer(
  item: PeerDbDetails,
): Record<string, unknown> {
  return {
    peerDbId: item["peerDbId"],
    peerDbOcid: item["peerDbOcid"],
    peerDbLocation: item["peerDbLocation"],
  };
}

/** Autonomous Database Generate Wallet resource model. */
export interface GenerateAutonomousDatabaseWalletDetails {
  /** The type of wallet to generate. */
  generateType?: GenerateType;
  /** True when requesting regional connection strings in PDB connect info, applicable to cross-region DG only. */
  isRegional?: boolean;
  /** The password to encrypt the keys inside the wallet */
  password: string;
}

export function generateAutonomousDatabaseWalletDetailsSerializer(
  item: GenerateAutonomousDatabaseWalletDetails,
): Record<string, unknown> {
  return {
    generateType: item["generateType"],
    isRegional: item["isRegional"],
    password: item["password"],
  };
}

/** Known values of {@link GenerateType} that the service accepts. */
export enum KnownGenerateType {
  /** Single */
  Single = "Single",
  /** All */
  All = "All",
}

/**
 * Generate type enum \
 * {@link KnownGenerateType} can be used interchangeably with GenerateType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Single** \
 * **All**
 */
export type GenerateType = string;

/** Autonomous Database Wallet File resource model. */
export interface AutonomousDatabaseWalletFile {
  /** The base64 encoded wallet files */
  walletFiles: string;
}

/** Details to restore an Oracle Autonomous Database. */
export interface RestoreAutonomousDatabaseDetails {
  /** The time to restore the database to. */
  timestamp: Date;
}

export function restoreAutonomousDatabaseDetailsSerializer(
  item: RestoreAutonomousDatabaseDetails,
): Record<string, unknown> {
  return {
    timestamp: item["timestamp"].toISOString(),
  };
}

/** DnsPrivateZone resource definition */
export interface DnsPrivateZone extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DnsPrivateZoneProperties;
}

/** Zones resource model */
export interface DnsPrivateZoneProperties {
  /** The OCID of the Zone */
  ocid: string;
  /** A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed. */
  isProtected: boolean;
  /** Zones lifecycleState */
  lifecycleState: DnsPrivateZonesLifecycleState;
  /** The canonical absolute URL of the resource. */
  self: string;
  /** The current serial of the zone. As seen in the zone's SOA record. */
  serial: number;
  /** Version is the never-repeating, totally-orderable, version of the zone, from which the serial field of the zone's SOA record is derived. */
  version: string;
  /** The OCID of the private view containing the zone. This value will be null for zones in the global DNS, which are publicly resolvable and not part of a private view. */
  viewId?: string;
  /** The type of the zone. Must be either PRIMARY or SECONDARY. SECONDARY is only supported for GLOBAL zones. */
  zoneType: ZoneType;
  /** Zones timeCreated */
  timeCreated: Date;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Known values of {@link DnsPrivateZonesLifecycleState} that the service accepts. */
export enum KnownDnsPrivateZonesLifecycleState {
  /** Active */
  Active = "Active",
  /** Creating */
  Creating = "Creating",
  /** Deleted */
  Deleted = "Deleted",
  /** Deleting */
  Deleting = "Deleting",
  /** Updating */
  Updating = "Updating",
}

/**
 * DNS Private Zones lifecycle state enum \
 * {@link KnownDnsPrivateZonesLifecycleState} can be used interchangeably with DnsPrivateZonesLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Creating** \
 * **Deleted** \
 * **Deleting** \
 * **Updating**
 */
export type DnsPrivateZonesLifecycleState = string;

/** Known values of {@link ZoneType} that the service accepts. */
export enum KnownZoneType {
  /** Primary */
  Primary = "Primary",
  /** Secondary */
  Secondary = "Secondary",
}

/**
 * Zone type enum \
 * {@link KnownZoneType} can be used interchangeably with ZoneType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **Secondary**
 */
export type ZoneType = string;

/** The response of a DnsPrivateZone list operation. */
export interface _DnsPrivateZoneListResult {
  /** The DnsPrivateZone items on this page */
  value: DnsPrivateZone[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** DnsPrivateView resource definition */
export interface DnsPrivateView extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DnsPrivateViewProperties;
}

/** Views resource model */
export interface DnsPrivateViewProperties {
  /** The OCID of the view */
  ocid: string;
  /** The display name of the view resource */
  displayName: string;
  /** A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed. */
  isProtected: boolean;
  /** Views lifecycleState */
  lifecycleState: DnsPrivateViewsLifecycleState;
  /** The canonical absolute URL of the resource. */
  self: string;
  /** views timeCreated */
  timeCreated: Date;
  /** views timeUpdated */
  timeUpdated: Date;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Known values of {@link DnsPrivateViewsLifecycleState} that the service accepts. */
export enum KnownDnsPrivateViewsLifecycleState {
  /** Active */
  Active = "Active",
  /** Deleted */
  Deleted = "Deleted",
  /** Deleting */
  Deleting = "Deleting",
  /** Updating */
  Updating = "Updating",
}

/**
 * DNS Private Views lifecycle state enum \
 * {@link KnownDnsPrivateViewsLifecycleState} can be used interchangeably with DnsPrivateViewsLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Deleted** \
 * **Deleting** \
 * **Updating**
 */
export type DnsPrivateViewsLifecycleState = string;

/** The response of a DnsPrivateView list operation. */
export interface _DnsPrivateViewListResult {
  /** The DnsPrivateView items on this page */
  value: DnsPrivateView[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** DbSystemShape resource definition */
export interface DbSystemShape extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DbSystemShapeProperties;
}

/** DbSystemShape resource model */
export interface DbSystemShapeProperties {
  /** The family of the shape used for the DB system. */
  shapeFamily?: string;
  /** The maximum number of CPU cores that can be enabled on the DB system for this shape. */
  availableCoreCount: number;
  /** The minimum number of CPU cores that can be enabled on the DB system for this shape. */
  minimumCoreCount?: number;
  /** The runtime minimum number of CPU cores that can be enabled on the DB system for this shape. */
  runtimeMinimumCoreCount?: number;
  /** The discrete number by which the CPU core count for this shape can be increased or decreased. */
  coreCountIncrement?: number;
  /** The minimum number of Exadata storage servers available for the Exadata infrastructure. */
  minStorageCount?: number;
  /** The maximum number of Exadata storage servers available for the Exadata infrastructure. */
  maxStorageCount?: number;
  /** The maximum data storage available per storage server for this shape. Only applicable to ExaCC Elastic shapes. */
  availableDataStoragePerServerInTbs?: number;
  /** The maximum memory available per database node for this shape. Only applicable to ExaCC Elastic shapes. */
  availableMemoryPerNodeInGbs?: number;
  /** The maximum Db Node storage available per database node for this shape. Only applicable to ExaCC Elastic shapes. */
  availableDbNodePerNodeInGbs?: number;
  /** The minimum number of CPU cores that can be enabled per node for this shape. */
  minCoreCountPerNode?: number;
  /** The maximum memory that can be enabled for this shape. */
  availableMemoryInGbs?: number;
  /** The minimum memory that need be allocated per node for this shape. */
  minMemoryPerNodeInGbs?: number;
  /** The maximum Db Node storage that can be enabled for this shape. */
  availableDbNodeStorageInGbs?: number;
  /** The minimum Db Node storage that need be allocated per node for this shape. */
  minDbNodeStoragePerNodeInGbs?: number;
  /** The maximum DATA storage that can be enabled for this shape. */
  availableDataStorageInTbs?: number;
  /** The minimum data storage that need be allocated for this shape. */
  minDataStorageInTbs?: number;
  /** The minimum number of database nodes available for this shape. */
  minimumNodeCount?: number;
  /** The maximum number of database nodes available for this shape. */
  maximumNodeCount?: number;
  /** The maximum number of CPU cores per database node that can be enabled for this shape. Only applicable to the flex Exadata shape and ExaCC Elastic shapes. */
  availableCoreCountPerNode?: number;
}

/** The response of a DbSystemShape list operation. */
export interface _DbSystemShapeListResult {
  /** The DbSystemShape items on this page */
  value: DbSystemShape[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** GiVersion resource definition */
export interface GiVersion extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GiVersionProperties;
}

/** GiVersion resource model */
export interface GiVersionProperties {
  /** A valid Oracle Grid Infrastructure (GI) software version. */
  version: string;
}

/** The response of a GiVersion list operation. */
export interface _GiVersionListResult {
  /** The GiVersion items on this page */
  value: GiVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The DbNode resource belonging to vmCluster */
export interface DbNode extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DbNodeProperties;
}

/** The properties of DbNodeResource */
export interface DbNodeProperties {
  /** DbNode OCID */
  ocid: string;
  /** Additional information about the planned maintenance. */
  additionalDetails?: string;
  /** The OCID of the backup IP address associated with the database node. */
  backupIpId?: string;
  /** The OCID of the second backup VNIC. */
  backupVnic2Id?: string;
  /** The OCID of the backup VNIC. */
  backupVnicId?: string;
  /** The number of CPU cores enabled on the Db node. */
  cpuCoreCount?: number;
  /** The allocated local node storage in GBs on the Db node. */
  dbNodeStorageSizeInGbs?: number;
  /** The OCID of the Exacc Db server associated with the database node. */
  dbServerId?: string;
  /** The OCID of the DB system. */
  dbSystemId: string;
  /** The name of the Fault Domain the instance is contained in. */
  faultDomain?: string;
  /** The OCID of the host IP address associated with the database node. */
  hostIpId?: string;
  /** The host name for the database node. */
  hostname?: string;
  /** The current state of the database node. */
  lifecycleState: DbNodeProvisioningState;
  /** Lifecycle details of Db Node. */
  lifecycleDetails?: string;
  /** The type of database node maintenance. */
  maintenanceType?: DbNodeMaintenanceType;
  /** The allocated memory in GBs on the Db node. */
  memorySizeInGbs?: number;
  /** The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems. */
  softwareStorageSizeInGb?: number;
  /** The date and time that the database node was created. */
  timeCreated: Date;
  /** End date and time of maintenance window. */
  timeMaintenanceWindowEnd?: Date;
  /** Start date and time of maintenance window. */
  timeMaintenanceWindowStart?: Date;
  /** The OCID of the second VNIC. */
  vnic2Id?: string;
  /** The OCID of the VNIC. */
  vnicId: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Known values of {@link DbNodeProvisioningState} that the service accepts. */
export enum KnownDbNodeProvisioningState {
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Available */
  Available = "Available",
  /** Updating */
  Updating = "Updating",
  /** Stopping */
  Stopping = "Stopping",
  /** Stopped */
  Stopped = "Stopped",
  /** Starting */
  Starting = "Starting",
  /** Terminating */
  Terminating = "Terminating",
  /** Terminated */
  Terminated = "Terminated",
  /** Failed */
  Failed = "Failed",
}

/**
 * DnNode provisioning state enum \
 * {@link KnownDbNodeProvisioningState} can be used interchangeably with DbNodeProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Available** \
 * **Updating** \
 * **Stopping** \
 * **Stopped** \
 * **Starting** \
 * **Terminating** \
 * **Terminated** \
 * **Failed**
 */
export type DbNodeProvisioningState = string;

/** Known values of {@link DbNodeMaintenanceType} that the service accepts. */
export enum KnownDbNodeMaintenanceType {
  /** VmdbRebootMigration */
  VmdbRebootMigration = "VmdbRebootMigration",
}

/**
 * The type of database node maintenance. \
 * {@link KnownDbNodeMaintenanceType} can be used interchangeably with DbNodeMaintenanceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **VmdbRebootMigration**
 */
export type DbNodeMaintenanceType = string;

/** The response of a DbNode list operation. */
export interface _DbNodeListResult {
  /** The DbNode items on this page */
  value: DbNode[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** DbNode action object */
export interface DbNodeAction {
  /** Db action */
  action: DbNodeActionEnum;
}

export function dbNodeActionSerializer(
  item: DbNodeAction,
): Record<string, unknown> {
  return {
    action: item["action"],
  };
}

/** Known values of {@link DbNodeActionEnum} that the service accepts. */
export enum KnownDbNodeActionEnum {
  /** Start */
  Start = "Start",
  /** Stop */
  Stop = "Stop",
  /** SoftReset */
  SoftReset = "SoftReset",
  /** Reset */
  Reset = "Reset",
}

/**
 * DbNode action enum \
 * {@link KnownDbNodeActionEnum} can be used interchangeably with DbNodeActionEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Start** \
 * **Stop** \
 * **SoftReset** \
 * **Reset**
 */
export type DbNodeActionEnum = string;

/** The response of a OracleSubscription list operation. */
export interface _OracleSubscriptionListResult {
  /** The OracleSubscription items on this page */
  value: OracleSubscription[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** OracleSubscription resource definition */
export interface OracleSubscription extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: OracleSubscriptionProperties;
  /** Details of the resource plan. */
  plan?: Plan;
}

export function oracleSubscriptionSerializer(
  item: OracleSubscription,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : oracleSubscriptionPropertiesSerializer(item.properties),
    plan: !item.plan ? item.plan : planSerializer(item.plan),
  };
}

/** Oracle Subscription resource model */
export interface OracleSubscriptionProperties {
  /** OracleSubscriptionProvisioningState provisioning state */
  readonly provisioningState?: OracleSubscriptionProvisioningState;
  /** SAAS subscription ID generated by Marketplace */
  readonly saasSubscriptionId?: string;
  /** Cloud Account Id */
  readonly cloudAccountId?: string;
  /** Cloud Account provisioning state. */
  readonly cloudAccountState?: CloudAccountProvisioningState;
  /** Term Unit. P1Y, P3Y, etc, see Durations https://en.wikipedia.org/wiki/ISO_8601 */
  termUnit?: string;
  /** Product code for the term unit */
  productCode?: string;
  /** Intent for the update operation */
  intent?: Intent;
  /** Azure subscriptions associated with this OracleSubscription */
  readonly azureSubscriptionIds?: string[];
  /** State of the add Azure subscription operation on Oracle subscription */
  readonly addSubscriptionOperationState?: AddSubscriptionOperationState;
  /** Status details of the last operation on Oracle subscription */
  readonly lastOperationStatusDetail?: string;
}

export function oracleSubscriptionPropertiesSerializer(
  item: OracleSubscriptionProperties,
): Record<string, unknown> {
  return {
    termUnit: item["termUnit"],
    productCode: item["productCode"],
    intent: item["intent"],
  };
}

/** Known values of {@link CloudAccountProvisioningState} that the service accepts. */
export enum KnownCloudAccountProvisioningState {
  /** Pending */
  Pending = "Pending",
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Available */
  Available = "Available",
}

/**
 * CloudAccountProvisioningState enum \
 * {@link KnownCloudAccountProvisioningState} can be used interchangeably with CloudAccountProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Provisioning** \
 * **Available**
 */
export type CloudAccountProvisioningState = string;

/** Known values of {@link Intent} that the service accepts. */
export enum KnownIntent {
  /** Retain */
  Retain = "Retain",
  /** Reset */
  Reset = "Reset",
}

/**
 * Intent enum \
 * {@link KnownIntent} can be used interchangeably with Intent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Retain** \
 * **Reset**
 */
export type Intent = string;

/** Known values of {@link AddSubscriptionOperationState} that the service accepts. */
export enum KnownAddSubscriptionOperationState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Updating */
  Updating = "Updating",
  /** Failed */
  Failed = "Failed",
}

/**
 * Add Subscription Operation state enum \
 * {@link KnownAddSubscriptionOperationState} can be used interchangeably with AddSubscriptionOperationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Updating** \
 * **Failed**
 */
export type AddSubscriptionOperationState = string;

/** Plan for the resource. */
export interface Plan {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

export function planSerializer(item: Plan): Record<string, unknown> {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
    version: item["version"],
  };
}

/** The type used for update operations of the OracleSubscription. */
export interface OracleSubscriptionUpdate {
  /** Details of the resource plan. */
  plan?: PlanUpdate;
  /** The resource-specific properties for this resource. */
  properties?: OracleSubscriptionUpdateProperties;
}

export function oracleSubscriptionUpdateSerializer(
  item: OracleSubscriptionUpdate,
): Record<string, unknown> {
  return {
    plan: !item.plan ? item.plan : planUpdateSerializer(item.plan),
    properties: !item.properties
      ? item.properties
      : oracleSubscriptionUpdatePropertiesSerializer(item.properties),
  };
}

/** ResourcePlanTypeUpdate model definition */
export interface PlanUpdate {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name?: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher?: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product?: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

export function planUpdateSerializer(
  item: PlanUpdate,
): Record<string, unknown> {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
    version: item["version"],
  };
}

/** The updatable properties of the OracleSubscription. */
export interface OracleSubscriptionUpdateProperties {
  /** Product code for the term unit */
  productCode?: string;
  /** Intent for the update operation */
  intent?: Intent;
}

export function oracleSubscriptionUpdatePropertiesSerializer(
  item: OracleSubscriptionUpdateProperties,
): Record<string, unknown> {
  return {
    productCode: item["productCode"],
    intent: item["intent"],
  };
}

/** Cloud Account Details model */
export interface CloudAccountDetails {
  /** Cloud Account name */
  readonly cloudAccountName?: string;
  /** Cloud Account Home region */
  readonly cloudAccountHomeRegion?: string;
}

/** SaaS Subscription Details model */
export interface SaasSubscriptionDetails {
  /** Purchased SaaS subscription ID */
  readonly id?: string;
  /** SaaS subscription name */
  readonly subscriptionName?: string;
  /** Creation Date and Time */
  readonly timeCreated?: Date;
  /** Purchased offer ID */
  readonly offerId?: string;
  /** Purchased offer's plan ID */
  readonly planId?: string;
  /** Indicates the status of the Subscription. */
  readonly saasSubscriptionStatus?: string;
  /** Publisher ID */
  readonly publisherId?: string;
  /** Purchaser Email ID */
  readonly purchaserEmailId?: string;
  /** Purchaser Tenant ID */
  readonly purchaserTenantId?: string;
  /** Purchase Term Unit */
  readonly termUnit?: string;
  /** AutoRenew flag */
  readonly isAutoRenew?: boolean;
  /** FreeTrial flag */
  readonly isFreeTrial?: boolean;
}

/** Activation Links model */
export interface ActivationLinks {
  /** New Cloud Account Activation Link */
  readonly newCloudAccountActivationLink?: string;
  /** Existing Cloud Account Activation Link */
  readonly existingCloudAccountActivationLink?: string;
}

/** Azure Subscriptions model */
export interface AzureSubscriptions {
  /** Azure Subscription Ids to be updated */
  azureSubscriptionIds: string[];
}

export function azureSubscriptionsSerializer(
  item: AzureSubscriptions,
): Record<string, unknown> {
  return {
    azureSubscriptionIds: item["azureSubscriptionIds"],
  };
}

/** SystemVersion resource Definition */
export interface SystemVersion extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: SystemVersionProperties;
}

/** System Version Resource model */
export interface SystemVersionProperties {
  /** A valid Oracle System Version */
  systemVersion: string;
}

/** The response of a SystemVersion list operation. */
export interface _SystemVersionListResult {
  /** The SystemVersion items on this page */
  value: SystemVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Virtual IP resource belonging to a vm cluster resource. */
export interface VirtualNetworkAddress extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualNetworkAddressProperties;
}

export function virtualNetworkAddressSerializer(
  item: VirtualNetworkAddress,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : virtualNetworkAddressPropertiesSerializer(item.properties),
  };
}

/** virtualNetworkAddress resource properties */
export interface VirtualNetworkAddressProperties {
  /** Virtual network Address address. */
  ipAddress?: string;
  /** Virtual Machine OCID. */
  vmOcid?: string;
  /** Application VIP OCID. */
  readonly ocid?: string;
  /** Virtual network address fully qualified domain name. */
  readonly domain?: string;
  /** Additional information about the current lifecycle state of the application virtual IP (VIP) address. */
  readonly lifecycleDetails?: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: AzureResourceProvisioningState;
  /** virtual network address lifecycle state. */
  readonly lifecycleState?: VirtualNetworkAddressLifecycleState;
  /** The date and time when the create operation for the application virtual IP (VIP) address completed. */
  readonly timeAssigned?: Date;
}

export function virtualNetworkAddressPropertiesSerializer(
  item: VirtualNetworkAddressProperties,
): Record<string, unknown> {
  return {
    ipAddress: item["ipAddress"],
    vmOcid: item["vmOcid"],
  };
}

/** Known values of {@link VirtualNetworkAddressLifecycleState} that the service accepts. */
export enum KnownVirtualNetworkAddressLifecycleState {
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Available */
  Available = "Available",
  /** Terminating */
  Terminating = "Terminating",
  /** Terminated */
  Terminated = "Terminated",
  /** Failed */
  Failed = "Failed",
}

/**
 * VirtualNetworkAddressLifecycleState enum \
 * {@link KnownVirtualNetworkAddressLifecycleState} can be used interchangeably with VirtualNetworkAddressLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Available** \
 * **Terminating** \
 * **Terminated** \
 * **Failed**
 */
export type VirtualNetworkAddressLifecycleState = string;

/** The response of a VirtualNetworkAddress list operation. */
export interface _VirtualNetworkAddressListResult {
  /** The VirtualNetworkAddress items on this page */
  value: VirtualNetworkAddress[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a CloudVmCluster list operation. */
export interface _CloudVmClusterListResult {
  /** The CloudVmCluster items on this page */
  value: CloudVmCluster[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** CloudVmCluster resource definition */
export interface CloudVmCluster extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudVmClusterProperties;
}

export function cloudVmClusterSerializer(
  item: CloudVmCluster,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : cloudVmClusterPropertiesSerializer(item.properties),
  };
}

/** CloudVmCluster resource model */
export interface CloudVmClusterProperties {
  /** Cloud VM Cluster ocid */
  readonly ocid?: string;
  /** The port number configured for the listener on the cloud VM cluster. */
  readonly listenerPort?: number;
  /** The number of nodes in the cloud VM cluster. */
  readonly nodeCount?: number;
  /** The data disk group size to be allocated in GBs per VM. */
  storageSizeInGbs?: number;
  /** The data disk group size to be allocated in TBs. */
  dataStorageSizeInTbs?: number;
  /** The local node storage to be allocated in GBs. */
  dbNodeStorageSizeInGbs?: number;
  /** The memory to be allocated in GBs. */
  memorySizeInGbs?: number;
  /** The date and time that the cloud VM cluster was created. */
  readonly timeCreated?: Date;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
  /** The time zone of the cloud VM cluster. For details, see [Exadata Infrastructure Time Zones](/Content/Database/References/timezones.htm). */
  timeZone?: string;
  /** The OCID of the zone the cloud VM cluster is associated with. */
  zoneId?: string;
  /** The hostname for the cloud VM cluster. */
  hostname: string;
  /** The domain name for the cloud VM cluster. */
  domain?: string;
  /** The number of CPU cores enabled on the cloud VM cluster. */
  cpuCoreCount: number;
  /** The number of OCPU cores to enable on the cloud VM cluster. Only 1 decimal place is allowed for the fractional part. */
  ocpuCount?: number;
  /** The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. */
  clusterName?: string;
  /** The percentage assigned to DATA storage (user data and database files). The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 35, 40, 60 and 80. The default is 80 percent assigned to DATA storage. See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. */
  dataStoragePercentage?: number;
  /** If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster. */
  isLocalBackupEnabled?: boolean;
  /** Cloud Exadata Infrastructure ID */
  cloudExadataInfrastructureId: string;
  /** If true, sparse disk group is configured for the cloud VM cluster. If false, sparse disk group is not created. */
  isSparseDiskgroupEnabled?: boolean;
  /** Operating system version of the image. */
  systemVersion?: string;
  /** The public key portion of one or more key pairs used for SSH access to the cloud VM cluster. */
  sshPublicKeys: string[];
  /** The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** The type of redundancy configured for the cloud Vm cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy. */
  readonly diskRedundancy?: DiskRedundancy;
  /** The Single Client Access Name (SCAN) IP addresses associated with the cloud VM cluster. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster. **Note:** For a single-node DB system, this list is empty. */
  readonly scanIpIds?: string[];
  /** The virtual IP (VIP) addresses associated with the cloud VM cluster. The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster. **Note:** For a single-node DB system, this list is empty. */
  readonly vipIds?: string[];
  /** The FQDN of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. */
  readonly scanDnsName?: string;
  /** The TCP Single Client Access Name (SCAN) port. The default port is 1521. */
  scanListenerPortTcp?: number;
  /** The TCPS Single Client Access Name (SCAN) port. The default port is 2484. */
  scanListenerPortTcpSsl?: number;
  /** The OCID of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. */
  readonly scanDnsRecordId?: string;
  /** The model name of the Exadata hardware running the cloud VM cluster. */
  readonly shape?: string;
  /** CloudVmCluster provisioning state */
  readonly provisioningState?: AzureResourceProvisioningState;
  /** CloudVmCluster lifecycle state */
  readonly lifecycleState?: CloudVmClusterLifecycleState;
  /** VNET for network connectivity */
  vnetId: string;
  /** Oracle Grid Infrastructure (GI) software version */
  giVersion: string;
  /** HTTPS link to OCI resources exposed to Azure Customer via Azure Interface. */
  readonly ociUrl?: string;
  /** HTTPS link to OCI Network Security Group exposed to Azure Customer via the Azure Interface. */
  readonly nsgUrl?: string;
  /** Client subnet */
  subnetId: string;
  /** Client OCI backup subnet CIDR, default is 192.168.252.0/22 */
  backupSubnetCidr?: string;
  /** CIDR blocks for additional NSG ingress rules. The VNET CIDRs used to provision the VM Cluster will be added by default. */
  nsgCidrs?: NsgCidr[];
  /** Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  dataCollectionOptions?: DataCollectionOptions;
  /** Display Name */
  displayName: string;
  /** The list of compute servers to be added to the cloud VM cluster. */
  computeNodes?: string[];
  /** iormConfigCache details for cloud VM cluster. */
  readonly iormConfigCache?: ExadataIormConfig;
  /** The OCID of the last maintenance update history entry. */
  readonly lastUpdateHistoryEntryId?: string;
  /** The list of DB servers. */
  dbServers?: string[];
  /** Cluster compartmentId */
  readonly compartmentId?: string;
  /** Cluster subnet ocid */
  readonly subnetOcid?: string;
}

export function cloudVmClusterPropertiesSerializer(
  item: CloudVmClusterProperties,
): Record<string, unknown> {
  return {
    storageSizeInGbs: item["storageSizeInGbs"],
    dataStorageSizeInTbs: item["dataStorageSizeInTbs"],
    dbNodeStorageSizeInGbs: item["dbNodeStorageSizeInGbs"],
    memorySizeInGbs: item["memorySizeInGbs"],
    timeZone: item["timeZone"],
    zoneId: item["zoneId"],
    hostname: item["hostname"],
    domain: item["domain"],
    cpuCoreCount: item["cpuCoreCount"],
    ocpuCount: item["ocpuCount"],
    clusterName: item["clusterName"],
    dataStoragePercentage: item["dataStoragePercentage"],
    isLocalBackupEnabled: item["isLocalBackupEnabled"],
    cloudExadataInfrastructureId: item["cloudExadataInfrastructureId"],
    isSparseDiskgroupEnabled: item["isSparseDiskgroupEnabled"],
    systemVersion: item["systemVersion"],
    sshPublicKeys: item["sshPublicKeys"],
    licenseModel: item["licenseModel"],
    scanListenerPortTcp: item["scanListenerPortTcp"],
    scanListenerPortTcpSsl: item["scanListenerPortTcpSsl"],
    vnetId: item["vnetId"],
    giVersion: item["giVersion"],
    subnetId: item["subnetId"],
    backupSubnetCidr: item["backupSubnetCidr"],
    nsgCidrs:
      item["nsgCidrs"] === undefined
        ? item["nsgCidrs"]
        : item["nsgCidrs"].map(nsgCidrSerializer),
    dataCollectionOptions: !item.dataCollectionOptions
      ? item.dataCollectionOptions
      : dataCollectionOptionsSerializer(item.dataCollectionOptions),
    displayName: item["displayName"],
    computeNodes: item["computeNodes"],
    dbServers: item["dbServers"],
  };
}

/** Known values of {@link DiskRedundancy} that the service accepts. */
export enum KnownDiskRedundancy {
  /** High */
  High = "High",
  /** Normal */
  Normal = "Normal",
}

/**
 * Disk redundancy enum \
 * {@link KnownDiskRedundancy} can be used interchangeably with DiskRedundancy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **High** \
 * **Normal**
 */
export type DiskRedundancy = string;

/** Known values of {@link CloudVmClusterLifecycleState} that the service accepts. */
export enum KnownCloudVmClusterLifecycleState {
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Available */
  Available = "Available",
  /** Updating */
  Updating = "Updating",
  /** Terminating */
  Terminating = "Terminating",
  /** Terminated */
  Terminated = "Terminated",
  /** MaintenanceInProgress */
  MaintenanceInProgress = "MaintenanceInProgress",
  /** Failed */
  Failed = "Failed",
}

/**
 * Cloud VM Cluster lifecycle state enum \
 * {@link KnownCloudVmClusterLifecycleState} can be used interchangeably with CloudVmClusterLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Available** \
 * **Updating** \
 * **Terminating** \
 * **Terminated** \
 * **MaintenanceInProgress** \
 * **Failed**
 */
export type CloudVmClusterLifecycleState = string;

/** A rule for allowing inbound (INGRESS) IP packets */
export interface NsgCidr {
  /** Conceptually, this is the range of IP addresses that a packet coming into the instance can come from. */
  source: string;
  /** Destination port range to specify particular destination ports for TCP rules. */
  destinationPortRange?: PortRange;
}

export function nsgCidrSerializer(item: NsgCidr): Record<string, unknown> {
  return {
    source: item["source"],
    destinationPortRange: !item.destinationPortRange
      ? item.destinationPortRange
      : portRangeSerializer(item.destinationPortRange),
  };
}

/** Port Range to specify particular destination ports for TCP rules. */
export interface PortRange {
  /** The minimum port number, which must not be greater than the maximum port number. */
  min: number;
  /** The maximum port number, which must not be less than the minimum port number. To specify a single port number, set both the min and max to the same value. */
  max: number;
}

export function portRangeSerializer(item: PortRange): Record<string, unknown> {
  return {
    min: item["min"],
    max: item["max"],
  };
}

/** DataCollectionOptions resource properties */
export interface DataCollectionOptions {
  /** Indicates whether diagnostic collection is enabled for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  isDiagnosticsEventsEnabled?: boolean;
  /** Indicates whether health monitoring is enabled for the VM cluster / Cloud VM cluster / VMBM DBCS. */
  isHealthMonitoringEnabled?: boolean;
  /** Indicates whether incident logs and trace collection are enabled for the VM cluster / Cloud VM cluster / VMBM DBCS. */
  isIncidentLogsEnabled?: boolean;
}

export function dataCollectionOptionsSerializer(
  item: DataCollectionOptions,
): Record<string, unknown> {
  return {
    isDiagnosticsEventsEnabled: item["isDiagnosticsEventsEnabled"],
    isHealthMonitoringEnabled: item["isHealthMonitoringEnabled"],
    isIncidentLogsEnabled: item["isIncidentLogsEnabled"],
  };
}

/** ExadataIormConfig for cloud vm cluster */
export interface ExadataIormConfig {
  /** An array of IORM settings for all the database in the Exadata DB system. */
  dbPlans?: DbIormConfig[];
  /** Additional information about the current lifecycleState. */
  lifecycleDetails?: string;
  /** The current state of IORM configuration for the Exadata DB system. */
  lifecycleState?: IormLifecycleState;
  /** The current value for the IORM objective. The default is AUTO. */
  objective?: Objective;
}

/** DbIormConfig for cloud vm cluster */
export interface DbIormConfig {
  /** The database name. For the default DbPlan, the dbName is default. */
  dbName?: string;
  /** The flash cache limit for this database. This value is internally configured based on the share value assigned to the database. */
  flashCacheLimit?: string;
  /** The relative priority of this database. */
  share?: number;
}

/** Known values of {@link IormLifecycleState} that the service accepts. */
export enum KnownIormLifecycleState {
  /** BootStrapping */
  BootStrapping = "BootStrapping",
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
  /** Updating */
  Updating = "Updating",
  /** Failed */
  Failed = "Failed",
}

/**
 * ORM lifecycle state enum \
 * {@link KnownIormLifecycleState} can be used interchangeably with IormLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **BootStrapping** \
 * **Enabled** \
 * **Disabled** \
 * **Updating** \
 * **Failed**
 */
export type IormLifecycleState = string;

/** Known values of {@link Objective} that the service accepts. */
export enum KnownObjective {
  /** LowLatency */
  LowLatency = "LowLatency",
  /** HighThroughput */
  HighThroughput = "HighThroughput",
  /** Balanced */
  Balanced = "Balanced",
  /** Auto */
  Auto = "Auto",
  /** Basic */
  Basic = "Basic",
}

/**
 * Objective enum \
 * {@link KnownObjective} can be used interchangeably with Objective,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LowLatency** \
 * **HighThroughput** \
 * **Balanced** \
 * **Auto** \
 * **Basic**
 */
export type Objective = string;

/** The type used for update operations of the CloudVmCluster. */
export interface CloudVmClusterUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: CloudVmClusterUpdateProperties;
}

export function cloudVmClusterUpdateSerializer(
  item: CloudVmClusterUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : cloudVmClusterUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the CloudVmCluster. */
export interface CloudVmClusterUpdateProperties {
  /** The data disk group size to be allocated in GBs per VM. */
  storageSizeInGbs?: number;
  /** The data disk group size to be allocated in TBs. */
  dataStorageSizeInTbs?: number;
  /** The local node storage to be allocated in GBs. */
  dbNodeStorageSizeInGbs?: number;
  /** The memory to be allocated in GBs. */
  memorySizeInGbs?: number;
  /** The number of CPU cores enabled on the cloud VM cluster. */
  cpuCoreCount?: number;
  /** The number of OCPU cores to enable on the cloud VM cluster. Only 1 decimal place is allowed for the fractional part. */
  ocpuCount?: number;
  /** The public key portion of one or more key pairs used for SSH access to the cloud VM cluster. */
  sshPublicKeys?: string[];
  /** The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  dataCollectionOptions?: DataCollectionOptions;
  /** Display Name */
  displayName?: string;
  /** The list of compute servers to be added to the cloud VM cluster. */
  computeNodes?: string[];
}

export function cloudVmClusterUpdatePropertiesSerializer(
  item: CloudVmClusterUpdateProperties,
): Record<string, unknown> {
  return {
    storageSizeInGbs: item["storageSizeInGbs"],
    dataStorageSizeInTbs: item["dataStorageSizeInTbs"],
    dbNodeStorageSizeInGbs: item["dbNodeStorageSizeInGbs"],
    memorySizeInGbs: item["memorySizeInGbs"],
    cpuCoreCount: item["cpuCoreCount"],
    ocpuCount: item["ocpuCount"],
    sshPublicKeys: item["sshPublicKeys"],
    licenseModel: item["licenseModel"],
    dataCollectionOptions: !item.dataCollectionOptions
      ? item.dataCollectionOptions
      : dataCollectionOptionsSerializer(item.dataCollectionOptions),
    displayName: item["displayName"],
    computeNodes: item["computeNodes"],
  };
}

/** Add/Remove (Virtual Machine) DbNode model */
export interface AddRemoveDbNode {
  /** Db servers ocids */
  dbServers: string[];
}

export function addRemoveDbNodeSerializer(
  item: AddRemoveDbNode,
): Record<string, unknown> {
  return {
    dbServers: item["dbServers"],
  };
}

/** Private Ip Addresses filter */
export interface PrivateIpAddressesFilter {
  /** Subnet OCID */
  subnetId: string;
  /** VCN OCID */
  vnicId: string;
}

export function privateIpAddressesFilterSerializer(
  item: PrivateIpAddressesFilter,
): Record<string, unknown> {
  return {
    subnetId: item["subnetId"],
    vnicId: item["vnicId"],
  };
}

/** PrivateIpAddress resource properties */
export interface PrivateIpAddressProperties {
  /** PrivateIpAddresses displayName */
  displayName: string;
  /** PrivateIpAddresses hostnameLabel */
  hostnameLabel: string;
  /** PrivateIpAddresses Id */
  ocid: string;
  /** PrivateIpAddresses ipAddress */
  ipAddress: string;
  /** PrivateIpAddresses subnetId */
  subnetId: string;
}

/** DbServer resource model */
export interface DbServer extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DbServerProperties;
}

/** DbServer resource properties */
export interface DbServerProperties {
  /** Db server name. */
  readonly ocid?: string;
  /** The name for the Db Server. */
  readonly displayName?: string;
  /** The OCID of the compartment. */
  readonly compartmentId?: string;
  /** The OCID of the Exadata infrastructure. */
  readonly exadataInfrastructureId?: string;
  /** The number of CPU cores enabled on the Db server. */
  readonly cpuCoreCount?: number;
  /** dbServerPatching details of the Db server. */
  readonly dbServerPatchingDetails?: DbServerPatchingDetails;
  /** The total memory available in GBs. */
  readonly maxMemoryInGbs?: number;
  /** The allocated local node storage in GBs on the Db server. */
  readonly dbNodeStorageSizeInGbs?: number;
  /** The OCID of the VM Clusters associated with the Db server. */
  readonly vmClusterIds?: string[];
  /** The OCID of the Db nodes associated with the Db server. */
  readonly dbNodeIds?: string[];
  /** Lifecycle details of dbServer. */
  readonly lifecycleDetails?: string;
  /** DbServer provisioning state. */
  readonly lifecycleState?: DbServerProvisioningState;
  /** The total number of CPU cores available. */
  readonly maxCpuCount?: number;
  /** The list of OCIDs of the Autonomous VM Clusters associated with the Db server. */
  readonly autonomousVmClusterIds?: string[];
  /** The list of OCIDs of the Autonomous Virtual Machines associated with the Db server. */
  readonly autonomousVirtualMachineIds?: string[];
  /** The total max dbNode storage in GBs. */
  readonly maxDbNodeStorageInGbs?: number;
  /** The total memory size in GBs. */
  readonly memorySizeInGbs?: number;
  /** The shape of the Db server. The shape determines the amount of CPU, storage, and memory resources available. */
  readonly shape?: string;
  /** The date and time that the Db Server was created. */
  readonly timeCreated?: Date;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** DbServer Patching Properties */
export interface DbServerPatchingDetails {
  /** Estimated Patch Duration */
  readonly estimatedPatchDuration?: number;
  /** Patching Status */
  readonly patchingStatus?: DbServerPatchingStatus;
  /** Time Patching Ended */
  readonly timePatchingEnded?: Date;
  /** Time Patching Started */
  readonly timePatchingStarted?: Date;
}

/** Known values of {@link DbServerPatchingStatus} that the service accepts. */
export enum KnownDbServerPatchingStatus {
  /** Scheduled */
  Scheduled = "Scheduled",
  /** MaintenanceInProgress */
  MaintenanceInProgress = "MaintenanceInProgress",
  /** Failed */
  Failed = "Failed",
  /** Complete */
  Complete = "Complete",
}

/**
 * DB Server patching status enum \
 * {@link KnownDbServerPatchingStatus} can be used interchangeably with DbServerPatchingStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Scheduled** \
 * **MaintenanceInProgress** \
 * **Failed** \
 * **Complete**
 */
export type DbServerPatchingStatus = string;

/** Known values of {@link DbServerProvisioningState} that the service accepts. */
export enum KnownDbServerProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** Available */
  Available = "Available",
  /** Unavailable */
  Unavailable = "Unavailable",
  /** Deleting */
  Deleting = "Deleting",
  /** Deleted */
  Deleted = "Deleted",
  /** MaintenanceInProgress */
  MaintenanceInProgress = "MaintenanceInProgress",
}

/**
 * DbServerProvisioningState enum \
 * {@link KnownDbServerProvisioningState} can be used interchangeably with DbServerProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Available** \
 * **Unavailable** \
 * **Deleting** \
 * **Deleted** \
 * **MaintenanceInProgress**
 */
export type DbServerProvisioningState = string;

/** The response of a DbServer list operation. */
export interface _DbServerListResult {
  /** The DbServer items on this page */
  value: DbServer[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a CloudExadataInfrastructure list operation. */
export interface _CloudExadataInfrastructureListResult {
  /** The CloudExadataInfrastructure items on this page */
  value: CloudExadataInfrastructure[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** CloudExadataInfrastructure resource definition */
export interface CloudExadataInfrastructure extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudExadataInfrastructureProperties;
  /** CloudExadataInfrastructure zones */
  zones: string[];
}

export function cloudExadataInfrastructureSerializer(
  item: CloudExadataInfrastructure,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : cloudExadataInfrastructurePropertiesSerializer(item.properties),
    zones: item["zones"],
  };
}

/** CloudExadataInfrastructure resource model */
export interface CloudExadataInfrastructureProperties {
  /** Exadata infra ocid */
  readonly ocid?: string;
  /** The number of compute servers for the cloud Exadata infrastructure. */
  computeCount?: number;
  /** The number of storage servers for the cloud Exadata infrastructure. */
  storageCount?: number;
  /** The total storage allocated to the cloud Exadata infrastructure resource, in gigabytes (GB). */
  readonly totalStorageSizeInGbs?: number;
  /** The available storage can be allocated to the cloud Exadata infrastructure resource, in gigabytes (GB). */
  readonly availableStorageSizeInGbs?: number;
  /** The date and time the cloud Exadata infrastructure resource was created. */
  readonly timeCreated?: string;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
  /** maintenanceWindow property */
  maintenanceWindow?: MaintenanceWindow;
  /** The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching). */
  readonly estimatedPatchingTime?: EstimatedPatchingTime;
  /** The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance. */
  customerContacts?: CustomerContact[];
  /** CloudExadataInfrastructure provisioning state */
  readonly provisioningState?: AzureResourceProvisioningState;
  /** CloudExadataInfrastructure lifecycle state */
  readonly lifecycleState?: CloudExadataInfrastructureLifecycleState;
  /** The model name of the cloud Exadata infrastructure resource. */
  shape: string;
  /** HTTPS link to OCI resources exposed to Azure Customer via Azure Interface. */
  readonly ociUrl?: string;
  /** The total number of CPU cores allocated. */
  readonly cpuCount?: number;
  /** The total number of CPU cores available. */
  readonly maxCpuCount?: number;
  /** The memory allocated in GBs. */
  readonly memorySizeInGbs?: number;
  /** The total memory available in GBs. */
  readonly maxMemoryInGbs?: number;
  /** The local node storage to be allocated in GBs. */
  readonly dbNodeStorageSizeInGbs?: number;
  /** The total local node storage available in GBs. */
  readonly maxDbNodeStorageSizeInGbs?: number;
  /** The quantity of data in the database, in terabytes. */
  readonly dataStorageSizeInTbs?: number;
  /** The total available DATA disk group size. */
  readonly maxDataStorageInTbs?: number;
  /** The software version of the database servers (dom0) in the Exadata infrastructure. */
  readonly dbServerVersion?: string;
  /** The software version of the storage servers (cells) in the Exadata infrastructure. */
  readonly storageServerVersion?: string;
  /** The requested number of additional storage servers activated for the Exadata infrastructure. */
  readonly activatedStorageCount?: number;
  /** The requested number of additional storage servers for the Exadata infrastructure. */
  readonly additionalStorageCount?: number;
  /** The name for the Exadata infrastructure. */
  displayName: string;
  /** The OCID of the last maintenance run. */
  readonly lastMaintenanceRunId?: string;
  /** The OCID of the next maintenance run. */
  readonly nextMaintenanceRunId?: string;
  /** Monthly Db Server version */
  readonly monthlyDbServerVersion?: string;
  /** Monthly Storage Server version */
  readonly monthlyStorageServerVersion?: string;
}

export function cloudExadataInfrastructurePropertiesSerializer(
  item: CloudExadataInfrastructureProperties,
): Record<string, unknown> {
  return {
    computeCount: item["computeCount"],
    storageCount: item["storageCount"],
    maintenanceWindow: !item.maintenanceWindow
      ? item.maintenanceWindow
      : maintenanceWindowSerializer(item.maintenanceWindow),
    customerContacts:
      item["customerContacts"] === undefined
        ? item["customerContacts"]
        : item["customerContacts"].map(customerContactSerializer),
    shape: item["shape"],
    displayName: item["displayName"],
  };
}

/** MaintenanceWindow resource properties */
export interface MaintenanceWindow {
  /** The maintenance window scheduling preference. */
  preference?: Preference;
  /** Months during the year when maintenance should be performed. */
  months?: Month[];
  /** Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week. For example, to allow maintenance during the 2nd week of the month (from the 8th day to the 14th day of the month), use the value 2. Maintenance cannot be scheduled for the fifth week of months that contain more than 28 days. Note that this parameter works in conjunction with the  daysOfWeek and hoursOfDay parameters to allow you to specify specific days of the week and hours that maintenance will be performed. */
  weeksOfMonth?: number[];
  /** Days during the week when maintenance should be performed. */
  daysOfWeek?: DayOfWeek[];
  /** The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are - 0 - represents time slot 0:00 - 3:59 UTC - 4 - represents time slot 4:00 - 7:59 UTC - 8 - represents time slot 8:00 - 11:59 UTC - 12 - represents time slot 12:00 - 15:59 UTC - 16 - represents time slot 16:00 - 19:59 UTC - 20 - represents time slot 20:00 - 23:59 UTC */
  hoursOfDay?: number[];
  /** Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4. */
  leadTimeInWeeks?: number;
  /** Cloud Exadata infrastructure node patching method. */
  patchingMode?: PatchingMode;
  /** Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive). */
  customActionTimeoutInMins?: number;
  /** If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. */
  isCustomActionTimeoutEnabled?: boolean;
  /** is Monthly Patching Enabled */
  isMonthlyPatchingEnabled?: boolean;
}

export function maintenanceWindowSerializer(
  item: MaintenanceWindow,
): Record<string, unknown> {
  return {
    preference: item["preference"],
    months:
      item["months"] === undefined
        ? item["months"]
        : item["months"].map(monthSerializer),
    weeksOfMonth: item["weeksOfMonth"],
    daysOfWeek:
      item["daysOfWeek"] === undefined
        ? item["daysOfWeek"]
        : item["daysOfWeek"].map(dayOfWeekSerializer),
    hoursOfDay: item["hoursOfDay"],
    leadTimeInWeeks: item["leadTimeInWeeks"],
    patchingMode: item["patchingMode"],
    customActionTimeoutInMins: item["customActionTimeoutInMins"],
    isCustomActionTimeoutEnabled: item["isCustomActionTimeoutEnabled"],
    isMonthlyPatchingEnabled: item["isMonthlyPatchingEnabled"],
  };
}

/** Known values of {@link Preference} that the service accepts. */
export enum KnownPreference {
  /** NoPreference */
  NoPreference = "NoPreference",
  /** CustomPreference */
  CustomPreference = "CustomPreference",
}

/**
 * Preference enum \
 * {@link KnownPreference} can be used interchangeably with Preference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NoPreference** \
 * **CustomPreference**
 */
export type Preference = string;

/** Month resource properties */
export interface Month {
  /** Name of the month of the year. */
  name: MonthName;
}

export function monthSerializer(item: Month): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

/** Known values of {@link MonthName} that the service accepts. */
export enum KnownMonthName {
  /** January */
  January = "January",
  /** February */
  February = "February",
  /** March */
  March = "March",
  /** April */
  April = "April",
  /** May */
  May = "May",
  /** June */
  June = "June",
  /** July */
  July = "July",
  /** August */
  August = "August",
  /** September */
  September = "September",
  /** October */
  October = "October",
  /** November */
  November = "November",
  /** December */
  December = "December",
}

/**
 * MonthName enum \
 * {@link KnownMonthName} can be used interchangeably with MonthName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **January** \
 * **February** \
 * **March** \
 * **April** \
 * **May** \
 * **June** \
 * **July** \
 * **August** \
 * **September** \
 * **October** \
 * **November** \
 * **December**
 */
export type MonthName = string;

/** Known values of {@link PatchingMode} that the service accepts. */
export enum KnownPatchingMode {
  /** Rolling */
  Rolling = "Rolling",
  /** NonRolling */
  NonRolling = "NonRolling",
}

/**
 * Patching mode enum \
 * {@link KnownPatchingMode} can be used interchangeably with PatchingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Rolling** \
 * **NonRolling**
 */
export type PatchingMode = string;

/** The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching). */
export interface EstimatedPatchingTime {
  /** The estimated time required in minutes for database server patching. */
  readonly estimatedDbServerPatchingTime?: number;
  /** The estimated time required in minutes for network switch patching. */
  readonly estimatedNetworkSwitchesPatchingTime?: number;
  /** The estimated time required in minutes for storage server patching. */
  readonly estimatedStorageServerPatchingTime?: number;
  /** The estimated total time required in minutes for all patching operations. */
  readonly totalEstimatedPatchingTime?: number;
}

/** Known values of {@link CloudExadataInfrastructureLifecycleState} that the service accepts. */
export enum KnownCloudExadataInfrastructureLifecycleState {
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Available */
  Available = "Available",
  /** Updating */
  Updating = "Updating",
  /** Terminating */
  Terminating = "Terminating",
  /** Terminated */
  Terminated = "Terminated",
  /** MaintenanceInProgress */
  MaintenanceInProgress = "MaintenanceInProgress",
  /** Failed */
  Failed = "Failed",
}

/**
 * CloudExadataInfrastructureLifecycleState enum \
 * {@link KnownCloudExadataInfrastructureLifecycleState} can be used interchangeably with CloudExadataInfrastructureLifecycleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Available** \
 * **Updating** \
 * **Terminating** \
 * **Terminated** \
 * **MaintenanceInProgress** \
 * **Failed**
 */
export type CloudExadataInfrastructureLifecycleState = string;

/** The type used for update operations of the CloudExadataInfrastructure. */
export interface CloudExadataInfrastructureUpdate {
  /** CloudExadataInfrastructure zones */
  zones?: string[];
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: CloudExadataInfrastructureUpdateProperties;
}

export function cloudExadataInfrastructureUpdateSerializer(
  item: CloudExadataInfrastructureUpdate,
): Record<string, unknown> {
  return {
    zones: item["zones"],
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : cloudExadataInfrastructureUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the CloudExadataInfrastructure. */
export interface CloudExadataInfrastructureUpdateProperties {
  /** The number of compute servers for the cloud Exadata infrastructure. */
  computeCount?: number;
  /** The number of storage servers for the cloud Exadata infrastructure. */
  storageCount?: number;
  /** maintenanceWindow property */
  maintenanceWindow?: MaintenanceWindow;
  /** The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance. */
  customerContacts?: CustomerContact[];
  /** The name for the Exadata infrastructure. */
  displayName?: string;
}

export function cloudExadataInfrastructureUpdatePropertiesSerializer(
  item: CloudExadataInfrastructureUpdateProperties,
): Record<string, unknown> {
  return {
    computeCount: item["computeCount"],
    storageCount: item["storageCount"],
    maintenanceWindow: !item.maintenanceWindow
      ? item.maintenanceWindow
      : maintenanceWindowSerializer(item.maintenanceWindow),
    customerContacts:
      item["customerContacts"] === undefined
        ? item["customerContacts"]
        : item["customerContacts"].map(customerContactSerializer),
    displayName: item["displayName"],
  };
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
/** Versions for API */
export type Versions =
  | "2023-09-01-preview"
  | "2023-09-01"
  | "2024-06-01-preview"
  | "2024-06-01"
  | "2024-08-01-preview"
  | "2024-10-01-preview";
/** Alias for AzureResourceProvisioningState */
export type AzureResourceProvisioningState =
  | ResourceProvisioningState
  | "Provisioning"
  | string;
/** Alias for AutonomousDatabaseBasePropertiesUnion */
export type AutonomousDatabaseBasePropertiesUnion =
  | AutonomousDatabaseProperties
  | AutonomousDatabaseCloneProperties
  | AutonomousDatabaseCrossRegionDisasterRecoveryProperties
  | AutonomousDatabaseFromBackupTimestampProperties
  | AutonomousDatabaseBaseProperties;
/** Alias for OracleSubscriptionProvisioningState */
export type OracleSubscriptionProvisioningState =
  | ResourceProvisioningState
  | string;
