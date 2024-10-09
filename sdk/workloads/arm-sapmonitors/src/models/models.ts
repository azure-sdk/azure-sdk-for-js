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

/** configuration associated with SAP Landscape Monitor Dashboard. */
export interface SapLandscapeMonitorResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: SapLandscapeMonitorProperties;
}

export function sapLandscapeMonitorResourceSerializer(
  item: SapLandscapeMonitorResource,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : sapLandscapeMonitorPropertiesSerializer(item.properties),
  };
}

/** Gets or sets the properties for Sap Landscape Monitor Dashboard. */
export interface SapLandscapeMonitorProperties {
  /** State of provisioning of the SAP monitor. */
  readonly provisioningState?: SapLandscapeMonitorProvisioningState;
  /** Gets or sets the SID groupings by landscape and Environment. */
  grouping?: SapLandscapeMonitorPropertiesGrouping;
  /** Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard */
  topMetricsThresholds?: SapLandscapeMonitorMetricThresholds[];
}

export function sapLandscapeMonitorPropertiesSerializer(
  item: SapLandscapeMonitorProperties,
): Record<string, unknown> {
  return {
    grouping: !item.grouping
      ? item.grouping
      : sapLandscapeMonitorPropertiesGroupingSerializer(item.grouping),
    topMetricsThresholds:
      item["topMetricsThresholds"] === undefined
        ? item["topMetricsThresholds"]
        : item["topMetricsThresholds"].map(
            sapLandscapeMonitorMetricThresholdsSerializer,
          ),
  };
}

/** Known values of {@link SapLandscapeMonitorProvisioningState} that the service accepts. */
export enum KnownSapLandscapeMonitorProvisioningState {
  /** Accepted */
  Accepted = "Accepted",
  /** Created */
  Created = "Created",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Canceled */
  Canceled = "Canceled",
}

/**
 * State of provisioning of the SAP monitor. \
 * {@link KnownSapLandscapeMonitorProvisioningState} can be used interchangeably with SapLandscapeMonitorProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Created** \
 * **Failed** \
 * **Succeeded** \
 * **Canceled**
 */
export type SapLandscapeMonitorProvisioningState = string;

/** Gets or sets the SID groupings by landscape and Environment. */
export interface SapLandscapeMonitorPropertiesGrouping {
  /** Gets or sets the list of landscape to SID mappings. */
  landscape?: SapLandscapeMonitorSidMapping[];
  /** Gets or sets the list of Sap Applications to SID mappings. */
  sapApplication?: SapLandscapeMonitorSidMapping[];
}

export function sapLandscapeMonitorPropertiesGroupingSerializer(
  item: SapLandscapeMonitorPropertiesGrouping,
): Record<string, unknown> {
  return {
    landscape:
      item["landscape"] === undefined
        ? item["landscape"]
        : item["landscape"].map(sapLandscapeMonitorSidMappingSerializer),
    sapApplication:
      item["sapApplication"] === undefined
        ? item["sapApplication"]
        : item["sapApplication"].map(sapLandscapeMonitorSidMappingSerializer),
  };
}

/** Gets or sets the mapping for SID to Environment/Applications. */
export interface SapLandscapeMonitorSidMapping {
  /** Gets or sets the name of the grouping. */
  name?: string;
  /** Gets or sets the list of SID's. */
  topSid?: string[];
}

export function sapLandscapeMonitorSidMappingSerializer(
  item: SapLandscapeMonitorSidMapping,
): Record<string, unknown> {
  return {
    name: item["name"],
    topSid: item["topSid"],
  };
}

/** Gets or sets the Threshold Values for Top Metrics Health. */
export interface SapLandscapeMonitorMetricThresholds {
  /** Gets or sets the name of the threshold. */
  name?: string;
  /** Gets or sets the threshold value for Green. */
  green?: number;
  /** Gets or sets the threshold value for Yellow. */
  yellow?: number;
  /** Gets or sets the threshold value for Red. */
  red?: number;
}

export function sapLandscapeMonitorMetricThresholdsSerializer(
  item: SapLandscapeMonitorMetricThresholds,
): Record<string, unknown> {
  return {
    name: item["name"],
    green: item["green"],
    yellow: item["yellow"],
    red: item["red"],
  };
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

/** The response of a SapLandscapeMonitorResource list operation. */
export interface _SapLandscapeMonitorResourceListResult {
  /** The SapLandscapeMonitorResource items on this page */
  value: SapLandscapeMonitorResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A provider instance associated with SAP monitor. */
export interface ProviderInstance extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ProviderInstanceProperties;
}

export function providerInstanceSerializer(
  item: ProviderInstance,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : providerInstancePropertiesSerializer(item.properties),
  };
}

/** Describes the properties of a provider instance. */
export interface ProviderInstanceProperties {
  /** State of provisioning of the provider instance */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
  /** Resource health details */
  readonly health?: Health;
  /** Defines the provider instance errors. */
  readonly errors?: ErrorDetail;
  /** Defines the provider specific properties. */
  providerSettings?: ProviderSpecificPropertiesUnion;
}

export function providerInstancePropertiesSerializer(
  item: ProviderInstanceProperties,
): Record<string, unknown> {
  return {
    providerSettings: !item.providerSettings
      ? item.providerSettings
      : providerSpecificPropertiesUnionSerializer(item.providerSettings),
  };
}

/** Known values of {@link WorkloadMonitorProvisioningState} that the service accepts. */
export enum KnownWorkloadMonitorProvisioningState {
  /** Accepted */
  Accepted = "Accepted",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Deleting */
  Deleting = "Deleting",
  /** Migrating */
  Migrating = "Migrating",
  /** Canceled */
  Canceled = "Canceled",
}

/**
 * State of provisioning of the SAP monitor. \
 * {@link KnownWorkloadMonitorProvisioningState} can be used interchangeably with WorkloadMonitorProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating** \
 * **Canceled**
 */
export type WorkloadMonitorProvisioningState = string;

/** Resource health details */
export interface Health {
  /** Health state of the resource */
  readonly healthState?: WorkloadProviderInstanceHealthState;
  /** Reasons impacting health state */
  readonly impactingReasons?: string;
}

/** Known values of {@link WorkloadProviderInstanceHealthState} that the service accepts. */
export enum KnownWorkloadProviderInstanceHealthState {
  /** Healthy */
  Healthy = "Healthy",
  /** Degraded */
  Degraded = "Degraded",
  /** Unavailable */
  Unavailable = "Unavailable",
  /** Unknown */
  Unknown = "Unknown",
}

/**
 * State of health of the provider instance \
 * {@link KnownWorkloadProviderInstanceHealthState} can be used interchangeably with WorkloadProviderInstanceHealthState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy** \
 * **Degraded** \
 * **Unavailable** \
 * **Unknown**
 */
export type WorkloadProviderInstanceHealthState = string;

/** Gets or sets the provider specific properties. */
export interface ProviderSpecificProperties {
  /** the discriminator possible values: SapHana, SapNetWeaver, PrometheusOS, Db2, PrometheusHaCluster, MsSqlServer */
  providerType: string;
}

export function providerSpecificPropertiesUnionSerializer(
  item: ProviderSpecificPropertiesUnion,
) {
  switch (item.providerType) {
    case "SapHana":
      return hanaDbProviderInstancePropertiesSerializer(
        item as HanaDbProviderInstanceProperties,
      );

    case "SapNetWeaver":
      return sapNetWeaverProviderInstancePropertiesSerializer(
        item as SapNetWeaverProviderInstanceProperties,
      );

    case "PrometheusOS":
      return prometheusOsProviderInstancePropertiesSerializer(
        item as PrometheusOsProviderInstanceProperties,
      );

    case "Db2":
      return db2ProviderInstancePropertiesSerializer(
        item as Db2ProviderInstanceProperties,
      );

    case "PrometheusHaCluster":
      return prometheusHaClusterProviderInstancePropertiesSerializer(
        item as PrometheusHaClusterProviderInstanceProperties,
      );

    case "MsSqlServer":
      return msSqlServerProviderInstancePropertiesSerializer(
        item as MsSqlServerProviderInstanceProperties,
      );

    default:
      return providerSpecificPropertiesSerializer(item);
  }
}

export function providerSpecificPropertiesSerializer(
  item: ProviderSpecificPropertiesUnion,
): Record<string, unknown> {
  return {
    providerType: item["providerType"],
  };
}

/** Gets or sets the provider properties. */
export interface HanaDbProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the target virtual machine size. */
  hostname?: string;
  /** Gets or sets the hana database name. */
  dbName?: string;
  /** Gets or sets the database sql port. */
  sqlPort?: string;
  /** Gets or sets the database instance number. */
  instanceNumber?: string;
  /** Gets or sets the database user name. */
  dbUsername?: string;
  /** Gets or sets the database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the blob URI to SSL certificate for the DB. */
  sslCertificateUri?: string;
  /** Gets or sets the hostname(s) in the SSL certificate. */
  sslHostNameInCertificate?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the SAP System Identifier. */
  sapSid?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "SapHana";
}

export function hanaDbProviderInstancePropertiesSerializer(
  item: HanaDbProviderInstanceProperties,
): Record<string, unknown> {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbName: item["dbName"],
    sqlPort: item["sqlPort"],
    instanceNumber: item["instanceNumber"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sslCertificateUri: item["sslCertificateUri"],
    sslHostNameInCertificate: item["sslHostNameInCertificate"],
    sslPreference: item["sslPreference"],
    sapSid: item["sapSid"],
  };
}

/** Known values of {@link SslPreference} that the service accepts. */
export enum KnownSslPreference {
  /** Disabled */
  Disabled = "Disabled",
  /** RootCertificate */
  RootCertificate = "RootCertificate",
  /** ServerCertificate */
  ServerCertificate = "ServerCertificate",
}

/**
 * Gets or sets certificate preference if secure communication is enabled. \
 * {@link KnownSslPreference} can be used interchangeably with SslPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **RootCertificate** \
 * **ServerCertificate**
 */
export type SslPreference = string;

/** Gets or sets the provider properties. */
export interface SapNetWeaverProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets the target virtual machine IP Address/FQDN. */
  sapHostname?: string;
  /** Gets or sets the instance number of SAP NetWeaver. */
  sapInstanceNr?: string;
  /** Gets or sets the list of HostFile Entries */
  sapHostFileEntries?: string[];
  /** Gets or sets the SAP user name. */
  sapUsername?: string;
  /** Sets the SAP password. */
  sapPassword?: string;
  /** Gets or sets the key vault URI to secret with the SAP password. */
  sapPasswordUri?: string;
  /** Gets or sets the SAP Client ID. */
  sapClientId?: string;
  /** Gets or sets the SAP HTTP port number. */
  sapPortNumber?: string;
  /** Gets or sets the blob URI to SSL certificate for the SAP system. */
  sslCertificateUri?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "SapNetWeaver";
}

export function sapNetWeaverProviderInstancePropertiesSerializer(
  item: SapNetWeaverProviderInstanceProperties,
): Record<string, unknown> {
  return {
    providerType: item["providerType"],
    sapSid: item["sapSid"],
    sapHostname: item["sapHostname"],
    sapInstanceNr: item["sapInstanceNr"],
    sapHostFileEntries: item["sapHostFileEntries"],
    sapUsername: item["sapUsername"],
    sapPassword: item["sapPassword"],
    sapPasswordUri: item["sapPasswordUri"],
    sapClientId: item["sapClientId"],
    sapPortNumber: item["sapPortNumber"],
    sslCertificateUri: item["sslCertificateUri"],
    sslPreference: item["sslPreference"],
  };
}

/** Gets or sets the PrometheusOS provider properties. */
export interface PrometheusOsProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** URL of the Node Exporter endpoint */
  prometheusUrl?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the prometheus node exporter. */
  sslCertificateUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "PrometheusOS";
}

export function prometheusOsProviderInstancePropertiesSerializer(
  item: PrometheusOsProviderInstanceProperties,
): Record<string, unknown> {
  return {
    providerType: item["providerType"],
    prometheusUrl: item["prometheusUrl"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
    sapSid: item["sapSid"],
  };
}

/** Gets or sets the DB2 provider properties. */
export interface Db2ProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the target virtual machine name. */
  hostname?: string;
  /** Gets or sets the db2 database name. */
  dbName?: string;
  /** Gets or sets the db2 database sql port. */
  dbPort?: string;
  /** Gets or sets the db2 database user name. */
  dbUsername?: string;
  /** Gets or sets the db2 database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the DB2 Database. */
  sslCertificateUri?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "Db2";
}

export function db2ProviderInstancePropertiesSerializer(
  item: Db2ProviderInstanceProperties,
): Record<string, unknown> {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbName: item["dbName"],
    dbPort: item["dbPort"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

/** Gets or sets the PrometheusHaCluster provider properties. */
export interface PrometheusHaClusterProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** URL of the Node Exporter endpoint. */
  prometheusUrl?: string;
  /** Gets or sets the target machine name. */
  hostname?: string;
  /** Gets or sets the cluster sid. */
  sid?: string;
  /** Gets or sets the clusterName. */
  clusterName?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the HA cluster exporter. */
  sslCertificateUri?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "PrometheusHaCluster";
}

export function prometheusHaClusterProviderInstancePropertiesSerializer(
  item: PrometheusHaClusterProviderInstanceProperties,
): Record<string, unknown> {
  return {
    providerType: item["providerType"],
    prometheusUrl: item["prometheusUrl"],
    hostname: item["hostname"],
    sid: item["sid"],
    clusterName: item["clusterName"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

/** Gets or sets the SQL server provider properties. */
export interface MsSqlServerProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the SQL server host name. */
  hostname?: string;
  /** Gets or sets the database sql port. */
  dbPort?: string;
  /** Gets or sets the database user name. */
  dbUsername?: string;
  /** Gets or sets the database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the SQL Database. */
  sslCertificateUri?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "MsSqlServer";
}

export function msSqlServerProviderInstancePropertiesSerializer(
  item: MsSqlServerProviderInstanceProperties,
): Record<string, unknown> {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbPort: item["dbPort"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

/** The response of a ProviderInstance list operation. */
export interface _ProviderInstanceListResult {
  /** The ProviderInstance items on this page */
  value: ProviderInstance[];
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

/** SAP monitor info on Azure (ARM properties and SAP monitor properties) */
export interface Monitor extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: MonitorProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function monitorSerializer(item: Monitor): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : monitorPropertiesSerializer(item.properties),
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
  };
}

/** Describes the properties of a SAP monitor. */
export interface MonitorProperties {
  /** State of provisioning of the SAP monitor. */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
  /** Defines the SAP monitor errors. */
  readonly errors?: ErrorDetail;
  /** The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region. */
  appLocation?: string;
  /** Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET. */
  routingPreference?: RoutingPreference;
  /** Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy. */
  zoneRedundancyPreference?: string;
  /** Managed resource group configuration */
  managedResourceGroupConfiguration?: ManagedResourceGroupConfiguration;
  /** The ARM ID of the Log Analytics Workspace that is used for SAP monitoring. */
  logAnalyticsWorkspaceArmId?: string;
  /** The subnet which the SAP monitor will be deployed in */
  monitorSubnet?: string;
  /** App service plan configuration */
  appServicePlanConfiguration?: AppServicePlanConfiguration;
  /** The ARM ID of the MSI used for SAP monitoring. */
  readonly msiArmId?: string;
  /** The ARM ID of the Storage account used for SAP monitoring. */
  readonly storageAccountArmId?: string;
}

export function monitorPropertiesSerializer(
  item: MonitorProperties,
): Record<string, unknown> {
  return {
    appLocation: item["appLocation"],
    routingPreference: item["routingPreference"],
    zoneRedundancyPreference: item["zoneRedundancyPreference"],
    managedResourceGroupConfiguration: !item.managedResourceGroupConfiguration
      ? item.managedResourceGroupConfiguration
      : managedResourceGroupConfigurationSerializer(
          item.managedResourceGroupConfiguration,
        ),
    logAnalyticsWorkspaceArmId: item["logAnalyticsWorkspaceArmId"],
    monitorSubnet: item["monitorSubnet"],
    appServicePlanConfiguration: !item.appServicePlanConfiguration
      ? item.appServicePlanConfiguration
      : appServicePlanConfigurationSerializer(item.appServicePlanConfiguration),
  };
}

/** Known values of {@link RoutingPreference} that the service accepts. */
export enum KnownRoutingPreference {
  /** Default */
  Default = "Default",
  /** RouteAll */
  RouteAll = "RouteAll",
}

/**
 * Sets the routing preference of the SAP monitor. \
 * {@link KnownRoutingPreference} can be used interchangeably with RoutingPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **RouteAll**
 */
export type RoutingPreference = string;

/** Managed resource group configuration */
export interface ManagedResourceGroupConfiguration {
  /** Managed resource group name */
  name?: string;
}

export function managedResourceGroupConfigurationSerializer(
  item: ManagedResourceGroupConfiguration,
): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

/** Configuration details of app service plan */
export interface AppServicePlanConfiguration {
  /** The App Service plan tier. */
  tier?: AppServicePlanTier;
  /** The number of workers in app service plan. If this is not set or set to 0, auto scale will be configured for the app service plan, otherwise, instance count is set to this number. */
  capacity?: number;
}

export function appServicePlanConfigurationSerializer(
  item: AppServicePlanConfiguration,
): Record<string, unknown> {
  return {
    tier: item["tier"],
    capacity: item["capacity"],
  };
}

/** Known values of {@link AppServicePlanTier} that the service accepts. */
export enum KnownAppServicePlanTier {
  /** ElasticPremium */
  ElasticPremium = "ElasticPremium",
  /** PremiumV3 */
  PremiumV3 = "PremiumV3",
}

/**
 * The App Service plan tier. \
 * {@link KnownAppServicePlanTier} can be used interchangeably with AppServicePlanTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ElasticPremium** \
 * **PremiumV3**
 */
export type AppServicePlanTier = string;

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity | null>;
}

export function managedServiceIdentitySerializer(
  item: ManagedServiceIdentity,
): Record<string, unknown> {
  return {
    type: item["type"],
    userAssignedIdentities: !item.userAssignedIdentities
      ? item.userAssignedIdentities
      : (serializeRecord(
          item.userAssignedIdentities as any,
          userAssignedIdentitySerializer,
        ) as any),
  };
}

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAndUserAssigned */
  SystemAndUserAssigned = "SystemAssigned,UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export type ManagedServiceIdentityType = string;

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(item: UserAssignedIdentity) {
  return item as any;
}

/** Defines the request body for updating SAP monitor resource. */
export interface UpdateMonitorRequest {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function updateMonitorRequestSerializer(
  item: UpdateMonitorRequest,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
  };
}

/** The response of a Monitor list operation. */
export interface _MonitorListResult {
  /** The Monitor items on this page */
  value: Monitor[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The available API versions. */
export type Versions = "2023-12-01-preview";
/** Alias for ProviderSpecificPropertiesUnion */
export type ProviderSpecificPropertiesUnion =
  | HanaDbProviderInstanceProperties
  | SapNetWeaverProviderInstanceProperties
  | PrometheusOsProviderInstanceProperties
  | Db2ProviderInstanceProperties
  | PrometheusHaClusterProviderInstanceProperties
  | MsSqlServerProviderInstanceProperties
  | ProviderSpecificProperties;
