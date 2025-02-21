// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A SQL Database Fleet tier. */
export interface FleetTier extends ProxyResource {
  /** A Fleet tier properties. */
  properties?: FleetTierProperties;
}

export function fleetTierSerializer(item: FleetTier): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : fleetTierPropertiesSerializer(item["properties"]),
  };
}

export function fleetTierDeserializer(item: any): FleetTier {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : fleetTierPropertiesDeserializer(item["properties"]),
  };
}

/** A Fleet tier properties. */
export interface FleetTierProperties {
  /** If true, tier is disabled. */
  readonly disabled?: boolean;
  /** If true, serverless resources are provisioned in the tier. */
  serverless?: boolean;
  /** If true, databases are pooled. */
  pooled?: boolean;
  /** Service tier of provisioned resources. Supported values: GeneralPurpose, Hyperscale. */
  serviceTier?: string;
  /** Family of provisioned resources, for example Gen5. */
  family?: string;
  /** Capacity of provisioned resources in the tier, in units matching the specified service tier, for example vCore for GeneralPurpose. */
  capacity?: number;
  /** Maximum number of databases per pool. */
  poolNumOfDatabasesMax?: number;
  /** Number of high availability replicas for databases in this tier. */
  highAvailabilityReplicaCount?: number;
  /** Enable zone redundancy for all databases in this tier. */
  zoneRedundancy?: ZoneRedundancy;
  /** Minimum allocated capacity per database, in units matching the specified service tier. */
  databaseCapacityMin?: number;
  /** Maximum allocated capacity per database, in units matching the specified service tier. */
  databaseCapacityMax?: number;
  /** Maximum database size in Gb. */
  databaseSizeGbMax?: number;
  /** Provisioning state. */
  readonly provisioningState?: AzureProvisioningState;
}

export function fleetTierPropertiesSerializer(item: FleetTierProperties): any {
  return {
    serverless: item["serverless"],
    pooled: item["pooled"],
    serviceTier: item["serviceTier"],
    family: item["family"],
    capacity: item["capacity"],
    poolNumOfDatabasesMax: item["poolNumOfDatabasesMax"],
    highAvailabilityReplicaCount: item["highAvailabilityReplicaCount"],
    zoneRedundancy: item["zoneRedundancy"],
    databaseCapacityMin: item["databaseCapacityMin"],
    databaseCapacityMax: item["databaseCapacityMax"],
    databaseSizeGbMax: item["databaseSizeGbMax"],
  };
}

export function fleetTierPropertiesDeserializer(item: any): FleetTierProperties {
  return {
    disabled: item["disabled"],
    serverless: item["serverless"],
    pooled: item["pooled"],
    serviceTier: item["serviceTier"],
    family: item["family"],
    capacity: item["capacity"],
    poolNumOfDatabasesMax: item["poolNumOfDatabasesMax"],
    highAvailabilityReplicaCount: item["highAvailabilityReplicaCount"],
    zoneRedundancy: item["zoneRedundancy"],
    databaseCapacityMin: item["databaseCapacityMin"],
    databaseCapacityMax: item["databaseCapacityMax"],
    databaseSizeGbMax: item["databaseSizeGbMax"],
    provisioningState: item["provisioningState"],
  };
}

/** Status of zone redundancy in a tier. */
export enum KnownZoneRedundancy {
  /** Zone redundancy enabled. */
  Enabled = "Enabled",
  /** Zone redundancy disabled. */
  Disabled = "Disabled",
}

/**
 * Status of zone redundancy in a tier. \
 * {@link KnownZoneRedundancy} can be used interchangeably with ZoneRedundancy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: Zone redundancy enabled. \
 * **Disabled**: Zone redundancy disabled.
 */
export type ZoneRedundancy = string;

/** The provisioning state of the resource. */
export enum KnownAzureProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** Resource is provisioning. */
  Provisioning = "Provisioning",
  /** Request on the resource has been accepted. */
  Accepted = "Accepted",
}

/**
 * The provisioning state of the resource. \
 * {@link KnownAzureProvisioningState} can be used interchangeably with AzureProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Provisioning**: Resource is provisioning. \
 * **Accepted**: Request on the resource has been accepted.
 */
export type AzureProvisioningState = string;

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

/** The response of a FleetTier list operation. */
export interface _FleetTierListResult {
  /** The FleetTier items on this page */
  value: FleetTier[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _fleetTierListResultDeserializer(item: any): _FleetTierListResult {
  return {
    value: fleetTierArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function fleetTierArraySerializer(result: Array<FleetTier>): any[] {
  return result.map((item) => {
    return fleetTierSerializer(item);
  });
}

export function fleetTierArrayDeserializer(result: Array<FleetTier>): any[] {
  return result.map((item) => {
    return fleetTierDeserializer(item);
  });
}

/** A firewall rule. */
export interface FirewallRule extends ProxyResource {
  /** A Firewall rule properties. */
  properties?: FirewallRuleProperties;
}

export function firewallRuleSerializer(item: FirewallRule): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : firewallRulePropertiesSerializer(item["properties"]),
  };
}

export function firewallRuleDeserializer(item: any): FirewallRule {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : firewallRulePropertiesDeserializer(item["properties"]),
  };
}

/** A Firewall rule properties. */
export interface FirewallRuleProperties {
  /** Start IP address. */
  startIpAddress?: string;
  /** End IP address. */
  endIpAddress?: string;
  /** Provisioning state. */
  readonly provisioningState?: AzureProvisioningState;
}

export function firewallRulePropertiesSerializer(item: FirewallRuleProperties): any {
  return {
    startIpAddress: item["startIpAddress"],
    endIpAddress: item["endIpAddress"],
  };
}

export function firewallRulePropertiesDeserializer(item: any): FirewallRuleProperties {
  return {
    startIpAddress: item["startIpAddress"],
    endIpAddress: item["endIpAddress"],
    provisioningState: item["provisioningState"],
  };
}

/** The response of a FirewallRule list operation. */
export interface _FirewallRuleListResult {
  /** The FirewallRule items on this page */
  value: FirewallRule[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _firewallRuleListResultDeserializer(item: any): _FirewallRuleListResult {
  return {
    value: firewallRuleArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function firewallRuleArraySerializer(result: Array<FirewallRule>): any[] {
  return result.map((item) => {
    return firewallRuleSerializer(item);
  });
}

export function firewallRuleArrayDeserializer(result: Array<FirewallRule>): any[] {
  return result.map((item) => {
    return firewallRuleDeserializer(item);
  });
}

/** A Database Fleet. */
export interface Fleet extends TrackedResource {
  /** The fleet properties. */
  properties?: FleetProperties;
}

export function fleetSerializer(item: Fleet): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : fleetPropertiesSerializer(item["properties"]),
  };
}

export function fleetDeserializer(item: any): Fleet {
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
      : fleetPropertiesDeserializer(item["properties"]),
  };
}

/** The Database Fleet properties. */
export interface FleetProperties {
  /** Fleet description. */
  description?: string;
  /** Provisioning state. */
  readonly provisioningState?: AzureProvisioningState;
}

export function fleetPropertiesSerializer(item: FleetProperties): any {
  return { description: item["description"] };
}

export function fleetPropertiesDeserializer(item: any): FleetProperties {
  return {
    description: item["description"],
    provisioningState: item["provisioningState"],
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

/** An update to a Database Fleet. */
export interface FleetUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The Database Fleet properties. */
  properties?: FleetProperties;
}

export function fleetUpdateSerializer(item: FleetUpdate): any {
  return {
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : fleetPropertiesSerializer(item["properties"]),
  };
}

/** The response of a Fleet list operation. */
export interface _FleetListResult {
  /** The Fleet items on this page */
  value: Fleet[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _fleetListResultDeserializer(item: any): _FleetListResult {
  return {
    value: fleetArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function fleetArraySerializer(result: Array<Fleet>): any[] {
  return result.map((item) => {
    return fleetSerializer(item);
  });
}

export function fleetArrayDeserializer(result: Array<Fleet>): any[] {
  return result.map((item) => {
    return fleetDeserializer(item);
  });
}

/** A fleetspace. */
export interface Fleetspace extends ProxyResource {
  /** A Fleetspace properties. */
  properties?: FleetspaceProperties;
}

export function fleetspaceSerializer(item: Fleetspace): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : fleetspacePropertiesSerializer(item["properties"]),
  };
}

export function fleetspaceDeserializer(item: any): Fleetspace {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : fleetspacePropertiesDeserializer(item["properties"]),
  };
}

/** A Fleetspace properties. */
export interface FleetspaceProperties {
  /** Fleetspace state. */
  readonly provisioningState?: AzureProvisioningState;
  /** Maximum number of vCores database fleet manager is allowed to provision in the fleetspace. */
  capacityMax?: number;
  /** Main Microsoft Entra ID principal that has admin access to all databases in the fleetspace. */
  mainPrincipal?: MainPrincipal;
}

export function fleetspacePropertiesSerializer(item: FleetspaceProperties): any {
  return {
    capacityMax: item["capacityMax"],
    mainPrincipal: !item["mainPrincipal"]
      ? item["mainPrincipal"]
      : mainPrincipalSerializer(item["mainPrincipal"]),
  };
}

export function fleetspacePropertiesDeserializer(item: any): FleetspaceProperties {
  return {
    provisioningState: item["provisioningState"],
    capacityMax: item["capacityMax"],
    mainPrincipal: !item["mainPrincipal"]
      ? item["mainPrincipal"]
      : mainPrincipalDeserializer(item["mainPrincipal"]),
  };
}

/** A main principal. */
export interface MainPrincipal {
  /** Login name of the main principal. */
  login?: string;
  /** Application Id of the main principal. */
  applicationId?: string;
  /** Object Id of the main principal. */
  objectId?: string;
  /** Tenant Id of the main principal. */
  tenantId?: string;
  /** Principal type of the main principal. */
  principalType?: PrincipalType;
}

export function mainPrincipalSerializer(item: MainPrincipal): any {
  return {
    login: item["login"],
    applicationId: item["applicationId"],
    objectId: item["objectId"],
    tenantId: item["tenantId"],
    principalType: item["principalType"],
  };
}

export function mainPrincipalDeserializer(item: any): MainPrincipal {
  return {
    login: item["login"],
    applicationId: item["applicationId"],
    objectId: item["objectId"],
    tenantId: item["tenantId"],
    principalType: item["principalType"],
  };
}

/** Principal type of the authorized principal. */
export enum KnownPrincipalType {
  /** Application principal type. */
  Application = "Application",
  /** User principal type. */
  User = "User",
}

/**
 * Principal type of the authorized principal. \
 * {@link KnownPrincipalType} can be used interchangeably with PrincipalType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Application**: Application principal type. \
 * **User**: User principal type.
 */
export type PrincipalType = string;

/** The response of a Fleetspace list operation. */
export interface _FleetspaceListResult {
  /** The Fleetspace items on this page */
  value: Fleetspace[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _fleetspaceListResultDeserializer(item: any): _FleetspaceListResult {
  return {
    value: fleetspaceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function fleetspaceArraySerializer(result: Array<Fleetspace>): any[] {
  return result.map((item) => {
    return fleetspaceSerializer(item);
  });
}

export function fleetspaceArrayDeserializer(result: Array<Fleetspace>): any[] {
  return result.map((item) => {
    return fleetspaceDeserializer(item);
  });
}

/** Server registration definition. */
export interface RegisterServerProperties {
  /** Destination tier name. */
  tierName?: string;
  /** Source subscription id. */
  sourceSubscriptionId?: string;
  /** Source resource group name. */
  sourceResourceGroupName?: string;
  /** Source SQL Server name. */
  sourceServerName?: string;
  /** Destination tier overrides. */
  destinationTierOverrides?: DestinationTierOverride[];
}

export function registerServerPropertiesSerializer(item: RegisterServerProperties): any {
  return {
    tierName: item["tierName"],
    sourceSubscriptionId: item["sourceSubscriptionId"],
    sourceResourceGroupName: item["sourceResourceGroupName"],
    sourceServerName: item["sourceServerName"],
    destinationTierOverrides: !item["destinationTierOverrides"]
      ? item["destinationTierOverrides"]
      : destinationTierOverrideArraySerializer(item["destinationTierOverrides"]),
  };
}

export function destinationTierOverrideArraySerializer(
  result: Array<DestinationTierOverride>,
): any[] {
  return result.map((item) => {
    return destinationTierOverrideSerializer(item);
  });
}

/** A destination tier override. */
export interface DestinationTierOverride {
  /** Resource type. */
  resourceType: ResourceType;
  /** Destination tier name. */
  tierName: string;
  /** Resource name. */
  resourceName: string;
}

export function destinationTierOverrideSerializer(item: DestinationTierOverride): any {
  return {
    resourceType: item["resourceType"],
    tierName: item["tierName"],
    resourceName: item["resourceName"],
  };
}

/** Resource type of the destination tier override. */
export enum KnownResourceType {
  /** Database resource type. */
  Database = "Database",
  /** Elastic pool resource type. */
  Pool = "Pool",
}

/**
 * Resource type of the destination tier override. \
 * {@link KnownResourceType} can be used interchangeably with ResourceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Database**: Database resource type. \
 * **Pool**: Elastic pool resource type.
 */
export type ResourceType = string;

/** A fleet database. */
export interface FleetDatabase extends ProxyResource {
  /** Fleet database properties. */
  properties?: FleetDatabaseProperties;
}

export function fleetDatabaseSerializer(item: FleetDatabase): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : fleetDatabasePropertiesSerializer(item["properties"]),
  };
}

export function fleetDatabaseDeserializer(item: any): FleetDatabase {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : fleetDatabasePropertiesDeserializer(item["properties"]),
  };
}

/** Fleet database properties. */
export interface FleetDatabaseProperties {
  /** Resource identifier for the underlying database resource. */
  readonly originalDatabaseId?: string;
  /** Database state. */
  readonly provisioningState?: AzureProvisioningState;
  /** Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified) */
  createMode?: DatabaseCreateMode;
  /** Name of the tier this database belongs to. */
  tierName?: string;
  /** Connection string to connect to the database with. */
  readonly connectionString?: string;
  /** If true, database is recoverable. */
  readonly recoverable?: boolean;
  /** Restore from time when CreateMode is PointInTimeRestore. */
  restoreFromTime?: Date;
  /** Earliest restore time. */
  readonly earliestRestoreTime?: Date;
  /** Latest restore time. */
  readonly latestRestoreTime?: Date;
  /** Backup retention in days. */
  readonly backupRetentionDays?: number;
  /** Maximum database size in Gb. */
  readonly databaseSizeGbMax?: number;
  /** Source database name used when CreateMode is Copy or PointInTimeRestore. */
  sourceDatabaseName?: string;
  /** Additional database properties to be applied as the underlying database resource tags. */
  resourceTags?: Record<string, string>;
  /** Identity property. */
  identity?: Identity;
  /** Transparent Data Encryption properties */
  transparentDataEncryption?: TransparentDataEncryption;
  /** Database collation. */
  collation?: string;
}

export function fleetDatabasePropertiesSerializer(item: FleetDatabaseProperties): any {
  return {
    createMode: item["createMode"],
    tierName: item["tierName"],
    restoreFromTime: !item["restoreFromTime"]
      ? item["restoreFromTime"]
      : item["restoreFromTime"].toISOString(),
    sourceDatabaseName: item["sourceDatabaseName"],
    resourceTags: item["resourceTags"],
    identity: !item["identity"] ? item["identity"] : identitySerializer(item["identity"]),
    transparentDataEncryption: !item["transparentDataEncryption"]
      ? item["transparentDataEncryption"]
      : transparentDataEncryptionSerializer(item["transparentDataEncryption"]),
    collation: item["collation"],
  };
}

export function fleetDatabasePropertiesDeserializer(item: any): FleetDatabaseProperties {
  return {
    originalDatabaseId: item["originalDatabaseId"],
    provisioningState: item["provisioningState"],
    createMode: item["createMode"],
    tierName: item["tierName"],
    connectionString: item["connectionString"],
    recoverable: item["recoverable"],
    restoreFromTime: !item["restoreFromTime"]
      ? item["restoreFromTime"]
      : new Date(item["restoreFromTime"]),
    earliestRestoreTime: !item["earliestRestoreTime"]
      ? item["earliestRestoreTime"]
      : new Date(item["earliestRestoreTime"]),
    latestRestoreTime: !item["latestRestoreTime"]
      ? item["latestRestoreTime"]
      : new Date(item["latestRestoreTime"]),
    backupRetentionDays: item["backupRetentionDays"],
    databaseSizeGbMax: item["databaseSizeGbMax"],
    sourceDatabaseName: item["sourceDatabaseName"],
    resourceTags: item["resourceTags"],
    identity: !item["identity"] ? item["identity"] : identityDeserializer(item["identity"]),
    transparentDataEncryption: !item["transparentDataEncryption"]
      ? item["transparentDataEncryption"]
      : transparentDataEncryptionDeserializer(item["transparentDataEncryption"]),
    collation: item["collation"],
  };
}

/** Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified) */
export enum KnownDatabaseCreateMode {
  /** Create a database. */
  Default = "Default",
  /** Copy the source database (source database name must be specified). */
  Copy = "Copy",
  /** Create a database by restoring source database from a point in time (source database name and restore from time must be specified). */
  PointInTimeRestore = "PointInTimeRestore",
}

/**
 * Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified) \
 * {@link KnownDatabaseCreateMode} can be used interchangeably with DatabaseCreateMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default**: Create a database. \
 * **Copy**: Copy the source database (source database name must be specified). \
 * **PointInTimeRestore**: Create a database by restoring source database from a point in time (source database name and restore from time must be specified).
 */
export type DatabaseCreateMode = string;

/** Database Identity. */
export interface Identity {
  /** Identity type of the main principal. */
  identityType?: IdentityType;
  /** User identity ids */
  userAssignedIdentities?: DatabaseIdentity[];
  /** The federated client id for the SQL Database. It is used for cross tenant CMK scenario. */
  federatedClientId?: string;
}

export function identitySerializer(item: Identity): any {
  return {
    identityType: item["identityType"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : databaseIdentityArraySerializer(item["userAssignedIdentities"]),
    federatedClientId: item["federatedClientId"],
  };
}

export function identityDeserializer(item: any): Identity {
  return {
    identityType: item["identityType"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : databaseIdentityArrayDeserializer(item["userAssignedIdentities"]),
    federatedClientId: item["federatedClientId"],
  };
}

/** Identity type of the main principal. */
export enum KnownIdentityType {
  /** No identity. */
  None = "None",
  /** User assigned identity. */
  UserAssigned = "UserAssigned",
}

/**
 * Identity type of the main principal. \
 * {@link KnownIdentityType} can be used interchangeably with IdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No identity. \
 * **UserAssigned**: User assigned identity.
 */
export type IdentityType = string;

export function databaseIdentityArraySerializer(result: Array<DatabaseIdentity>): any[] {
  return result.map((item) => {
    return databaseIdentitySerializer(item);
  });
}

export function databaseIdentityArrayDeserializer(result: Array<DatabaseIdentity>): any[] {
  return result.map((item) => {
    return databaseIdentityDeserializer(item);
  });
}

/** Database Identity properties. */
export interface DatabaseIdentity {
  /** Resource Id of the database identity. */
  resourceId?: string;
  /** Principal Id of the database identity. */
  principalId?: string;
  /** Client Id of the database identity. */
  clientId?: string;
}

export function databaseIdentitySerializer(item: DatabaseIdentity): any {
  return {
    resourceId: item["resourceId"],
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

export function databaseIdentityDeserializer(item: any): DatabaseIdentity {
  return {
    resourceId: item["resourceId"],
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

/** Transparent Data Encryption properties. */
export interface TransparentDataEncryption {
  /** Customer Managed Key (CMK) Uri. */
  keyUri?: string;
  /** Additional Keys */
  keys?: string[];
  /** Enable key auto rotation */
  enableAutoRotation?: boolean;
}

export function transparentDataEncryptionSerializer(item: TransparentDataEncryption): any {
  return {
    keyUri: item["keyUri"],
    keys: !item["keys"]
      ? item["keys"]
      : item["keys"].map((p: any) => {
          return p;
        }),
    enableAutoRotation: item["enableAutoRotation"],
  };
}

export function transparentDataEncryptionDeserializer(item: any): TransparentDataEncryption {
  return {
    keyUri: item["keyUri"],
    keys: !item["keys"]
      ? item["keys"]
      : item["keys"].map((p: any) => {
          return p;
        }),
    enableAutoRotation: item["enableAutoRotation"],
  };
}

/** The response of a FleetDatabase list operation. */
export interface _FleetDatabaseListResult {
  /** The FleetDatabase items on this page */
  value: FleetDatabase[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _fleetDatabaseListResultDeserializer(item: any): _FleetDatabaseListResult {
  return {
    value: fleetDatabaseArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function fleetDatabaseArraySerializer(result: Array<FleetDatabase>): any[] {
  return result.map((item) => {
    return fleetDatabaseSerializer(item);
  });
}

export function fleetDatabaseArrayDeserializer(result: Array<FleetDatabase>): any[] {
  return result.map((item) => {
    return fleetDatabaseDeserializer(item);
  });
}

/** A database change tier definition. */
export interface DatabaseChangeTierProperties {
  /** A target tier name. */
  targetTierName?: string;
}

export function databaseChangeTierPropertiesSerializer(item: DatabaseChangeTierProperties): any {
  return { targetTierName: item["targetTierName"] };
}

/** A database rename definition. */
export interface DatabaseRenameProperties {
  /** New database name. */
  newName?: string;
}

export function databaseRenamePropertiesSerializer(item: DatabaseRenameProperties): any {
  return { newName: item["newName"] };
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(item: any): _OperationListResult {
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
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  readonly actionType?: ActionType;
}

export function operationDeserializer(item: any): Operation {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"] ? item["display"] : operationDisplayDeserializer(item["display"]),
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

/** The available API versions. */
export enum KnownVersions {
  /** The 2025-02-01-preview API version. */
  v2025_02_01_preview = "2025-02-01-preview",
}
