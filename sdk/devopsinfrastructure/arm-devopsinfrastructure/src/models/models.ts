// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

/** The response of a ImageVersion list operation. */
export interface _ImageVersionListResult {
  /** The ImageVersion items on this page */
  value: ImageVersion[];
  /** The link to the next page of items */
  nextLink?: string;
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

/** An image version object */
export interface ImageVersion extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ImageVersionProperties;
}

/** Details of the ImageVersionProperties. */
export interface ImageVersionProperties {
  /** Version of the image. */
  version: string;
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

/** Describes Resource Quota */
export interface Quota {
  /** The name of the quota. */
  readonly name?: QuotaName;
  /** Fully qualified ARM resource id */
  id: string;
  /** The unit of usage measurement. */
  unit: string;
  /** The current usage of the resource. */
  currentValue: number;
  /** The maximum permitted usage of the resource. */
  limit: number;
}

/** The Quota Names */
export interface QuotaName {
  /** The name of the resource. */
  value?: string;
  /** The localized name of the resource. */
  localizedValue?: string;
}

/** The response of a ResourceSku list operation. */
export interface _ResourceSkuListResult {
  /** The ResourceSku items on this page */
  value: ResourceSku[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A ResourceSku */
export interface ResourceSku extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ResourceSkuProperties;
}

/** Properties of a ResourceSku */
export interface ResourceSkuProperties {
  /** The type of resource the SKU applies to. */
  resourceType: string;
  /** The tier of virtual machines in a scale set */
  tier: string;
  /** The size of the SKU. */
  size: string;
  /** The family of the SKU. */
  family: string;
  /** The set of locations that the SKU is available. */
  locations: string[];
  /** A list of locations and availability zones in those locations where the SKU is available */
  locationInfo: ResourceSkuLocationInfo[];
  /** Name value pairs to describe the capability. */
  capabilities: ResourceSkuCapabilities[];
  /** The restrictions of the SKU. */
  restrictions: ResourceSkuRestrictions[];
}

/** Describes an available Compute SKU Location Information. */
export interface ResourceSkuLocationInfo {
  /** Location of the SKU */
  location: string;
  /** List of availability zones where the SKU is supported. */
  zones: string[];
  /** Gets details of capabilities available to a SKU in specific zones. */
  zoneDetails: ResourceSkuZoneDetails[];
}

/** Describes The zonal capabilities of a SKU. */
export interface ResourceSkuZoneDetails {
  /** Gets the set of zones that the SKU is available in with the specified capabilities. */
  name: string[];
  /** A list of capabilities that are available for the SKU in the specified list of zones. */
  capabilities: ResourceSkuCapabilities[];
}

/** Describes The SKU capabilities object. */
export interface ResourceSkuCapabilities {
  /** The name of the SKU capability. */
  name: string;
  /** The value of the SKU capability. */
  value: string;
}

/** The restrictions of the SKU. */
export interface ResourceSkuRestrictions {
  /** the type of restrictions. */
  type?: ResourceSkuRestrictionsType;
  /** The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. */
  values: string[];
  /** The information about the restriction where the SKU cannot be used. */
  restrictionInfo: ResourceSkuRestrictionInfo;
  /** the reason for restriction. */
  reasonCode?: ResourceSkuRestrictionsReasonCode;
}

/** Known values of {@link ResourceSkuRestrictionsType} that the service accepts. */
export enum KnownResourceSkuRestrictionsType {
  /** Location */
  Location = "Location",
  /** Zone */
  Zone = "Zone",
}

/**
 * Describes the kind of SKU restrictions that can exist \
 * {@link KnownResourceSkuRestrictionsType} can be used interchangeably with ResourceSkuRestrictionsType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Location** \
 * **Zone**
 */
export type ResourceSkuRestrictionsType = string;

/** Describes an available Compute SKU Restriction Information. */
export interface ResourceSkuRestrictionInfo {
  /** Locations where the SKU is restricted */
  locations?: string[];
  /** List of availability zones where the SKU is restricted. */
  zones?: string[];
}

/** Known values of {@link ResourceSkuRestrictionsReasonCode} that the service accepts. */
export enum KnownResourceSkuRestrictionsReasonCode {
  /** QuotaId */
  QuotaId = "QuotaId",
  /** NotAvailableForSubscription */
  NotAvailableForSubscription = "NotAvailableForSubscription",
}

/**
 * Describes the reason for SKU restriction. \
 * {@link KnownResourceSkuRestrictionsReasonCode} can be used interchangeably with ResourceSkuRestrictionsReasonCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **QuotaId** \
 * **NotAvailableForSubscription**
 */
export type ResourceSkuRestrictionsReasonCode = string;

/** The response of a ResourceDetailsObject list operation. */
export interface _ResourceDetailsObjectListResult {
  /** The ResourceDetailsObject items on this page */
  value: ResourceDetailsObject[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A ResourceDetailsObject */
export interface ResourceDetailsObject extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ResourceDetailsObjectProperties;
}

/** Details of the ResourceDetailsObject. */
export interface ResourceDetailsObjectProperties {
  /** The status of the resource. */
  status: ResourceStatus;
  /** The image name of the resource. */
  image: string;
  /** The version of the image running on the resource. */
  imageVersion: string;
}

/** Known values of {@link ResourceStatus} that the service accepts. */
export enum KnownResourceStatus {
  /** Ready */
  Ready = "Ready",
  /** NotReady */
  NotReady = "NotReady",
  /** Allocated */
  Allocated = "Allocated",
  /** PendingReturn */
  PendingReturn = "PendingReturn",
  /** Returned */
  Returned = "Returned",
  /** Leased */
  Leased = "Leased",
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Updating */
  Updating = "Updating",
  /** Starting */
  Starting = "Starting",
  /** PendingReimage */
  PendingReimage = "PendingReimage",
  /** Reimaging */
  Reimaging = "Reimaging",
}

/**
 * The status of the machine resource. \
 * {@link KnownResourceStatus} can be used interchangeably with ResourceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Ready** \
 * **NotReady** \
 * **Allocated** \
 * **PendingReturn** \
 * **Returned** \
 * **Leased** \
 * **Provisioning** \
 * **Updating** \
 * **Starting** \
 * **PendingReimage** \
 * **Reimaging**
 */
export type ResourceStatus = string;

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

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface Pool extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PoolProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function poolSerializer(item: Pool): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : poolPropertiesSerializer(item.properties),
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
  };
}

/** Pool properties */
export interface PoolProperties {
  /** The status of the current operation. */
  provisioningState?: ProvisioningState;
  /** Defines how many resources can there be created at any given time. */
  maximumConcurrency: number;
  /** Defines the organization in which the pool will be used. */
  organizationProfile: OrganizationProfileUnion;
  /** Defines how the machine will be handled once it executed a job. */
  agentProfile: AgentProfileUnion;
  /** Defines the type of fabric the agent will run on. */
  fabricProfile: FabricProfileUnion;
  /** The resource id of the DevCenter Project the pool belongs to. */
  devCenterProjectResourceId: string;
}

export function poolPropertiesSerializer(
  item: PoolProperties,
): Record<string, unknown> {
  return {
    provisioningState: item["provisioningState"],
    maximumConcurrency: item["maximumConcurrency"],
    organizationProfile: organizationProfileUnionSerializer(
      item.organizationProfile,
    ),
    agentProfile: agentProfileUnionSerializer(item.agentProfile),
    fabricProfile: fabricProfileUnionSerializer(item.fabricProfile),
    devCenterProjectResourceId: item["devCenterProjectResourceId"],
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
 * The status of the current operation. \
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

/** Defines the organization in which the pool will be used. */
export interface OrganizationProfile {
  /** the discriminator possible values: GitHub, AzureDevOps */
  kind: string;
}

export function organizationProfileUnionSerializer(
  item: OrganizationProfileUnion,
) {
  switch (item.kind) {
    case "GitHub":
      return gitHubOrganizationProfileSerializer(
        item as GitHubOrganizationProfile,
      );

    case "AzureDevOps":
      return azureDevOpsOrganizationProfileSerializer(
        item as AzureDevOpsOrganizationProfile,
      );

    default:
      return organizationProfileSerializer(item);
  }
}

export function organizationProfileSerializer(
  item: OrganizationProfileUnion,
): Record<string, unknown> {
  return {
    kind: item["kind"],
  };
}

/** GitHub organization profile */
export interface GitHubOrganizationProfile extends OrganizationProfile {
  /** GitHub organization profile */
  kind: "GitHub";
  /** The list of GitHub organizations/repositories the pool should be present in. */
  organizations: GitHubOrganization[];
}

export function gitHubOrganizationProfileSerializer(
  item: GitHubOrganizationProfile,
): Record<string, unknown> {
  return {
    kind: item["kind"],
    organizations: item["organizations"].map(gitHubOrganizationSerializer),
  };
}

/** Defines a GitHub organization */
export interface GitHubOrganization {
  /** The GitHub organization URL in which the pool should be created. */
  url: string;
  /** Optional list of repositories in which the pool should be created. */
  repositories?: string[];
}

export function gitHubOrganizationSerializer(
  item: GitHubOrganization,
): Record<string, unknown> {
  return {
    url: item["url"],
    repositories: item["repositories"],
  };
}

/** Azure DevOps organization profile */
export interface AzureDevOpsOrganizationProfile extends OrganizationProfile {
  /** Azure DevOps organization profile */
  kind: "AzureDevOps";
  /** The list of Azure DevOps organizations the pool should be present in. */
  organizations: Organization[];
  /** The type of permission which determines which accounts are admins on the Azure DevOps pool. */
  permissionProfile?: AzureDevOpsPermissionProfile;
}

export function azureDevOpsOrganizationProfileSerializer(
  item: AzureDevOpsOrganizationProfile,
): Record<string, unknown> {
  return {
    kind: item["kind"],
    organizations: item["organizations"].map(organizationSerializer),
    permissionProfile: !item.permissionProfile
      ? item.permissionProfile
      : azureDevOpsPermissionProfileSerializer(item.permissionProfile),
  };
}

/** Defines an Azure DevOps organization. */
export interface Organization {
  /** The Azure DevOps organization URL in which the pool should be created. */
  url: string;
  /** Optional list of projects in which the pool should be created. */
  projects?: string[];
  /** How many machines can be created at maximum in this organization out of the maximumConcurrency of the pool. */
  parallelism?: number;
}

export function organizationSerializer(
  item: Organization,
): Record<string, unknown> {
  return {
    url: item["url"],
    projects: item["projects"],
    parallelism: item["parallelism"],
  };
}

/** Defines the type of Azure DevOps pool permission. */
export interface AzureDevOpsPermissionProfile {
  /** Determines who has admin permissions to the Azure DevOps pool. */
  kind: AzureDevOpsPermissionType;
  /** User email addresses */
  users?: string[];
  /** Group email addresses */
  groups?: string[];
}

export function azureDevOpsPermissionProfileSerializer(
  item: AzureDevOpsPermissionProfile,
): Record<string, unknown> {
  return {
    kind: item["kind"],
    users: item["users"],
    groups: item["groups"],
  };
}

/** Known values of {@link AzureDevOpsPermissionType} that the service accepts. */
export enum KnownAzureDevOpsPermissionType {
  /** Inherit */
  Inherit = "Inherit",
  /** CreatorOnly */
  CreatorOnly = "CreatorOnly",
  /** SpecificAccounts */
  SpecificAccounts = "SpecificAccounts",
}

/**
 * Determines who has admin permissions to the Azure DevOps pool. \
 * {@link KnownAzureDevOpsPermissionType} can be used interchangeably with AzureDevOpsPermissionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inherit** \
 * **CreatorOnly** \
 * **SpecificAccounts**
 */
export type AzureDevOpsPermissionType = string;

/** The agent profile of the machines in the pool. */
export interface AgentProfile {
  /** Defines pool buffer/stand-by agents. */
  resourcePredictions?: ResourcePredictions;
  /** Defines how the pool buffer/stand-by agents is provided. */
  resourcePredictionsProfile?: ResourcePredictionsProfileUnion;
  /** the discriminator possible values: Stateless, Stateful */
  kind: string;
}

export function agentProfileUnionSerializer(item: AgentProfileUnion) {
  switch (item.kind) {
    case "Stateless":
      return statelessAgentProfileSerializer(item as StatelessAgentProfile);

    case "Stateful":
      return statefulSerializer(item as Stateful);

    default:
      return agentProfileSerializer(item);
  }
}

export function agentProfileSerializer(
  item: AgentProfileUnion,
): Record<string, unknown> {
  return {
    resourcePredictions: !item.resourcePredictions
      ? item.resourcePredictions
      : resourcePredictionsSerializer(item.resourcePredictions),
    resourcePredictionsProfile: !item.resourcePredictionsProfile
      ? item.resourcePredictionsProfile
      : resourcePredictionsProfileUnionSerializer(
          item.resourcePredictionsProfile,
        ),
    kind: item["kind"],
  };
}

/** Stateless profile meaning that the machines will be cleaned up after running a job. */
export interface StatelessAgentProfile extends AgentProfile {
  /** Stateless profile meaning that the machines will be cleaned up after running a job. */
  kind: "Stateless";
}

export function statelessAgentProfileSerializer(
  item: StatelessAgentProfile,
): Record<string, unknown> {
  return {
    resourcePredictions: !item.resourcePredictions
      ? item.resourcePredictions
      : resourcePredictionsSerializer(item.resourcePredictions),
    resourcePredictionsProfile: !item.resourcePredictionsProfile
      ? item.resourcePredictionsProfile
      : resourcePredictionsProfileUnionSerializer(
          item.resourcePredictionsProfile,
        ),
    kind: item["kind"],
  };
}

/** Stateful profile meaning that the machines will be returned to the pool after running a job. */
export interface Stateful extends AgentProfile {
  /** Stateful profile meaning that the machines will be returned to the pool after running a job. */
  kind: "Stateful";
  /** How long should stateful machines be kept around. The maximum is one week. */
  maxAgentLifetime?: string;
  /** How long should the machine be kept around after it ran a workload when there are no stand-by agents. The maximum is one week. */
  gracePeriodTimeSpan?: string;
}

export function statefulSerializer(item: Stateful): Record<string, unknown> {
  return {
    resourcePredictions: !item.resourcePredictions
      ? item.resourcePredictions
      : resourcePredictionsSerializer(item.resourcePredictions),
    resourcePredictionsProfile: !item.resourcePredictionsProfile
      ? item.resourcePredictionsProfile
      : resourcePredictionsProfileUnionSerializer(
          item.resourcePredictionsProfile,
        ),
    kind: item["kind"],
    maxAgentLifetime: item["maxAgentLifetime"],
    gracePeriodTimeSpan: item["gracePeriodTimeSpan"],
  };
}

/** Defines pool buffer. */
export interface ResourcePredictions {}

export function resourcePredictionsSerializer(item: ResourcePredictions) {
  return item as any;
}

/** Determines how the stand-by scheme should be provided. */
export interface ResourcePredictionsProfile {
  /** the discriminator possible values: Manual, Automatic */
  kind: ResourcePredictionsProfileType;
}

export function resourcePredictionsProfileUnionSerializer(
  item: ResourcePredictionsProfileUnion,
) {
  switch (item.kind) {
    case "Manual":
      return manualResourcePredictionsProfileSerializer(
        item as ManualResourcePredictionsProfile,
      );

    case "Automatic":
      return automaticResourcePredictionsProfileSerializer(
        item as AutomaticResourcePredictionsProfile,
      );

    default:
      return resourcePredictionsProfileSerializer(item);
  }
}

export function resourcePredictionsProfileSerializer(
  item: ResourcePredictionsProfileUnion,
): Record<string, unknown> {
  return {
    kind: item["kind"],
  };
}

/** Customer provides the stand-by agent scheme. */
export interface ManualResourcePredictionsProfile
  extends ResourcePredictionsProfile {
  /** Customer provides the stand-by agent scheme. */
  kind: "Manual";
}

export function manualResourcePredictionsProfileSerializer(
  item: ManualResourcePredictionsProfile,
): Record<string, unknown> {
  return {
    kind: item["kind"],
  };
}

/** The stand-by agent scheme is determined based on historical demand. */
export interface AutomaticResourcePredictionsProfile
  extends ResourcePredictionsProfile {
  /** The stand-by agent scheme is determined based on historical demand. */
  kind: "Automatic";
  /** Determines the balance between cost and performance. */
  predictionPreference?: PredictionPreference;
}

export function automaticResourcePredictionsProfileSerializer(
  item: AutomaticResourcePredictionsProfile,
): Record<string, unknown> {
  return {
    kind: item["kind"],
    predictionPreference: item["predictionPreference"],
  };
}

/** Known values of {@link PredictionPreference} that the service accepts. */
export enum KnownPredictionPreference {
  /** Balanced */
  Balanced = "Balanced",
  /** MostCostEffective */
  MostCostEffective = "MostCostEffective",
  /** MoreCostEffective */
  MoreCostEffective = "MoreCostEffective",
  /** MorePerformance */
  MorePerformance = "MorePerformance",
  /** BestPerformance */
  BestPerformance = "BestPerformance",
}

/**
 * Determines the balance between cost and performance. \
 * {@link KnownPredictionPreference} can be used interchangeably with PredictionPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Balanced** \
 * **MostCostEffective** \
 * **MoreCostEffective** \
 * **MorePerformance** \
 * **BestPerformance**
 */
export type PredictionPreference = string;

/** Known values of {@link ResourcePredictionsProfileType} that the service accepts. */
export enum KnownResourcePredictionsProfileType {
  /** Manual */
  Manual = "Manual",
  /** Automatic */
  Automatic = "Automatic",
}

/**
 * Determines how the stand-by scheme should be provided. \
 * {@link KnownResourcePredictionsProfileType} can be used interchangeably with ResourcePredictionsProfileType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Manual** \
 * **Automatic**
 */
export type ResourcePredictionsProfileType = string;

/** Defines the type of fabric the agent will run on. */
export interface FabricProfile {
  /** the discriminator possible values: Vmss */
  kind: string;
}

export function fabricProfileUnionSerializer(item: FabricProfileUnion) {
  switch (item.kind) {
    case "Vmss":
      return vmssFabricProfileSerializer(item as VmssFabricProfile);

    default:
      return fabricProfileSerializer(item);
  }
}

export function fabricProfileSerializer(
  item: FabricProfileUnion,
): Record<string, unknown> {
  return {
    kind: item["kind"],
  };
}

/** The agents will run on Virtual Machine Scale Sets. */
export interface VmssFabricProfile extends FabricProfile {
  /** Virtual Machine Scale Sets */
  kind: "Vmss";
  /** The Azure SKU of the machines in the pool. */
  sku: DevOpsAzureSku;
  /** The VM images of the machines in the pool. */
  images: PoolImage[];
  /** The OS profile of the machines in the pool. */
  osProfile?: OsProfile;
  /** The storage profile of the machines in the pool. */
  storageProfile?: StorageProfile;
  /** The network profile of the machines in the pool. */
  networkProfile?: NetworkProfile;
}

export function vmssFabricProfileSerializer(
  item: VmssFabricProfile,
): Record<string, unknown> {
  return {
    kind: item["kind"],
    sku: devOpsAzureSkuSerializer(item.sku),
    images: item["images"].map(poolImageSerializer),
    osProfile: !item.osProfile
      ? item.osProfile
      : osProfileSerializer(item.osProfile),
    storageProfile: !item.storageProfile
      ? item.storageProfile
      : storageProfileSerializer(item.storageProfile),
    networkProfile: !item.networkProfile
      ? item.networkProfile
      : networkProfileSerializer(item.networkProfile),
  };
}

/** The Azure SKU of the machines in the pool. */
export interface DevOpsAzureSku {
  /** The Azure SKU name of the machines in the pool. */
  name: string;
}

export function devOpsAzureSkuSerializer(
  item: DevOpsAzureSku,
): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

/** The VM image of the machines in the pool. */
export interface PoolImage {
  /** The resource id of the image. */
  resourceId?: string;
  /** The image to use from a well-known set of images made available to customers. */
  wellKnownImageName?: string;
  /** List of aliases to reference the image by. */
  aliases?: string[];
  /** The percentage of the buffer to be allocated to this image. */
  buffer?: string;
}

export function poolImageSerializer(item: PoolImage): Record<string, unknown> {
  return {
    resourceId: item["resourceId"],
    wellKnownImageName: item["wellKnownImageName"],
    aliases: item["aliases"],
    buffer: item["buffer"],
  };
}

/** The OS profile of the machines in the pool. */
export interface OsProfile {
  /** The secret management settings of the machines in the pool. */
  secretsManagementSettings?: SecretsManagementSettings;
  /** Determines how the service should be run. By default, this will be set to Service. */
  logonType?: LogonType;
}

export function osProfileSerializer(item: OsProfile): Record<string, unknown> {
  return {
    secretsManagementSettings: !item.secretsManagementSettings
      ? item.secretsManagementSettings
      : secretsManagementSettingsSerializer(item.secretsManagementSettings),
    logonType: item["logonType"],
  };
}

/** The secret management settings of the machines in the pool. */
export interface SecretsManagementSettings {
  /** Where to store certificates on the machine. */
  certificateStoreLocation?: string;
  /** The list of certificates to install on all machines in the pool. */
  observedCertificates: string[];
  /** Defines if the key of the certificates should be exportable. */
  keyExportable: boolean;
}

export function secretsManagementSettingsSerializer(
  item: SecretsManagementSettings,
): Record<string, unknown> {
  return {
    certificateStoreLocation: item["certificateStoreLocation"],
    observedCertificates: item["observedCertificates"],
    keyExportable: item["keyExportable"],
  };
}

/** Known values of {@link LogonType} that the service accepts. */
export enum KnownLogonType {
  /** Service */
  Service = "Service",
  /** Interactive */
  Interactive = "Interactive",
}

/**
 * Determines how the service should be run. \
 * {@link KnownLogonType} can be used interchangeably with LogonType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Service** \
 * **Interactive**
 */
export type LogonType = string;

/** The storage profile of the VMSS. */
export interface StorageProfile {
  /** The Azure SKU name of the machines in the pool. */
  osDiskStorageAccountType?: OsDiskStorageAccountType;
  /** A list of empty data disks to attach. */
  dataDisks?: DataDisk[];
}

export function storageProfileSerializer(
  item: StorageProfile,
): Record<string, unknown> {
  return {
    osDiskStorageAccountType: item["osDiskStorageAccountType"],
    dataDisks:
      item["dataDisks"] === undefined
        ? item["dataDisks"]
        : item["dataDisks"].map(dataDiskSerializer),
  };
}

/** Known values of {@link OsDiskStorageAccountType} that the service accepts. */
export enum KnownOsDiskStorageAccountType {
  /** Standard */
  Standard = "Standard",
  /** Premium */
  Premium = "Premium",
  /** StandardSSD */
  StandardSSD = "StandardSSD",
}

/**
 * The storage account type of the OS disk. \
 * {@link KnownOsDiskStorageAccountType} can be used interchangeably with OsDiskStorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Premium** \
 * **StandardSSD**
 */
export type OsDiskStorageAccountType = string;

/** The data disk of the VMSS. */
export interface DataDisk {
  /** The type of caching to be enabled for the data disks. The default value for caching is readwrite. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
  caching?: CachingType;
  /** The initial disk size in gigabytes. */
  diskSizeGiB?: number;
  /** The storage Account type to be used for the data disk. If omitted, the default is "standard_lrs". */
  storageAccountType?: StorageAccountType;
  /** The drive letter for the empty data disk. If not specified, it will be the first available letter. */
  driveLetter?: string;
}

export function dataDiskSerializer(item: DataDisk): Record<string, unknown> {
  return {
    caching: item["caching"],
    diskSizeGiB: item["diskSizeGiB"],
    storageAccountType: item["storageAccountType"],
    driveLetter: item["driveLetter"],
  };
}

/** Known values of {@link CachingType} that the service accepts. */
export enum KnownCachingType {
  /** None */
  None = "None",
  /** ReadOnly */
  ReadOnly = "ReadOnly",
  /** ReadWrite */
  ReadWrite = "ReadWrite",
}

/**
 * The type of caching in a data disk. \
 * {@link KnownCachingType} can be used interchangeably with CachingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **ReadOnly** \
 * **ReadWrite**
 */
export type CachingType = string;

/** Known values of {@link StorageAccountType} that the service accepts. */
export enum KnownStorageAccountType {
  /** StandardLRS */
  StandardLRS = "Standard_LRS",
  /** PremiumLRS */
  PremiumLRS = "Premium_LRS",
  /** StandardSSDLRS */
  StandardSSDLRS = "StandardSSD_LRS",
  /** PremiumZRS */
  PremiumZRS = "Premium_ZRS",
  /** StandardSSDZRS */
  StandardSSDZRS = "StandardSSD_ZRS",
}

/**
 * StorageAccountType enums \
 * {@link KnownStorageAccountType} can be used interchangeably with StorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS** \
 * **Premium_LRS** \
 * **StandardSSD_LRS** \
 * **Premium_ZRS** \
 * **StandardSSD_ZRS**
 */
export type StorageAccountType = string;

/** The network profile of the machines in the pool. */
export interface NetworkProfile {
  /** The subnet id on which to put all machines created in the pool. */
  subnetId: string;
}

export function networkProfileSerializer(
  item: NetworkProfile,
): Record<string, unknown> {
  return {
    subnetId: item["subnetId"],
  };
}

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

/** The type used for update operations of the Pool. */
export interface PoolUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: PoolUpdateProperties;
}

export function poolUpdateSerializer(
  item: PoolUpdate,
): Record<string, unknown> {
  return {
    identity: !item.identity
      ? item.identity
      : managedServiceIdentitySerializer(item.identity),
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : poolUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the Pool. */
export interface PoolUpdateProperties {
  /** The status of the current operation. */
  provisioningState?: ProvisioningState;
  /** Defines how many resources can there be created at any given time. */
  maximumConcurrency?: number;
  /** Defines the organization in which the pool will be used. */
  organizationProfile?: OrganizationProfileUnion;
  /** Defines how the machine will be handled once it executed a job. */
  agentProfile?: AgentProfileUnion;
  /** Defines the type of fabric the agent will run on. */
  fabricProfile?: FabricProfileUnion;
  /** The resource id of the DevCenter Project the pool belongs to. */
  devCenterProjectResourceId?: string;
}

export function poolUpdatePropertiesSerializer(
  item: PoolUpdateProperties,
): Record<string, unknown> {
  return {
    provisioningState: item["provisioningState"],
    maximumConcurrency: item["maximumConcurrency"],
    organizationProfile: !item.organizationProfile
      ? item.organizationProfile
      : organizationProfileUnionSerializer(item.organizationProfile),
    agentProfile: !item.agentProfile
      ? item.agentProfile
      : agentProfileUnionSerializer(item.agentProfile),
    fabricProfile: !item.fabricProfile
      ? item.fabricProfile
      : fabricProfileUnionSerializer(item.fabricProfile),
    devCenterProjectResourceId: item["devCenterProjectResourceId"],
  };
}

/** The response of a Pool list operation. */
export interface _PoolListResult {
  /** The Pool items on this page */
  value: Pool[];
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
/** Api versions */
export type Versions = "2024-10-19";

/** Paged collection of Quota items */
export interface _PagedQuota {
  /** The Quota items on this page */
  value: Quota[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Alias for OrganizationProfileUnion */
export type OrganizationProfileUnion =
  | GitHubOrganizationProfile
  | AzureDevOpsOrganizationProfile
  | OrganizationProfile;
/** Alias for AgentProfileUnion */
export type AgentProfileUnion = StatelessAgentProfile | Stateful | AgentProfile;
/** Alias for ResourcePredictionsProfileUnion */
export type ResourcePredictionsProfileUnion =
  | ManualResourcePredictionsProfile
  | AutomaticResourcePredictionsProfile
  | ResourcePredictionsProfile;
/** Alias for FabricProfileUnion */
export type FabricProfileUnion = VmssFabricProfile | FabricProfile;
