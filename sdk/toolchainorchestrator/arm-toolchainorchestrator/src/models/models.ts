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

/** A Diagnostic resource. */
export interface Diagnostic extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: DiagnosticProperties;
  /** Edge location of the resource. */
  extendedLocation: ExtendedLocation;
}

export function diagnosticSerializer(
  item: Diagnostic,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : diagnosticPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of a Diagnostic resource. */
export interface DiagnosticProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function diagnosticPropertiesSerializer(item: DiagnosticProperties) {
  return item as any;
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
 * The provisioning state of a resource type. \
 * {@link KnownResourceProvisioningState} can be used interchangeably with ResourceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ResourceProvisioningState = string;

/** Extended location is an extension of Azure locations. They provide a way to use their Azure ARC enabled Kubernetes clusters as target locations for deploying Azure services instances. */
export interface ExtendedLocation {
  /** The name of the extended location. */
  name: string;
  /** The type of the extended location. */
  type: string;
}

export function extendedLocationSerializer(
  item: ExtendedLocation,
): Record<string, unknown> {
  return {
    name: item["name"],
    type: item["type"],
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

/** The type used for updating tags in Diagnostic resources. */
export interface DiagnosticTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function diagnosticTagsUpdateSerializer(
  item: DiagnosticTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Diagnostic list operation. */
export interface _DiagnosticListResult {
  /** The Diagnostic items on this page */
  value: Diagnostic[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The campaignVersion entity. A nested resource of Campaign entity */
export interface CampaignVersion extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CampaignVersionProperties;
  /** Edge location of the resource. */
  extendedLocation?: ExtendedLocation;
}

export function campaignVersionSerializer(
  item: CampaignVersion,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : campaignVersionPropertiesSerializer(item.properties),
    extendedLocation: !item.extendedLocation
      ? item.extendedLocation
      : extendedLocationSerializer(item.extendedLocation),
  };
}

/** Defining the CampaignVersion. */
export interface CampaignVersionProperties {
  /** Provisioning state of the campaignVersion. */
  readonly provisioningState?: ProvisioningState;
  /** The initial stage of the CampaignVersion. */
  firstStage?: string;
  /** Whether campaign is self driving or not. That is whether a stage should trigger the next stage when it finishes. */
  selfDriving?: boolean;
  /** The stages of the CampaignVersion. */
  stages?: Record<string, StageProperties>;
}

export function campaignVersionPropertiesSerializer(
  item: CampaignVersionProperties,
): Record<string, unknown> {
  return {
    firstStage: item["firstStage"],
    selfDriving: item["selfDriving"],
    stages: !item.stages
      ? item.stages
      : (serializeRecord(item.stages as any, stagePropertiesSerializer) as any),
  };
}

/** Defines a Stage */
export interface StageProperties {
  /** The contexts of the Stage */
  contexts?: string;
  /** The config of the Stage */
  config?: Record<string, any>;
  /** The inputs of the Stage */
  inputs?: Record<string, any>;
  /** The name of the Stage */
  name?: string;
  /** The provider of the Stage */
  provider?: string;
  /** The stageSelector of the Stage */
  stageSelector?: string;
  /** The schedule of the Stage */
  schedule?: Date;
}

export function stagePropertiesSerializer(
  item: StageProperties,
): Record<string, unknown> {
  return {
    contexts: item["contexts"],
    config: !item.config
      ? item.config
      : (serializeRecord(item.config as any) as any),
    inputs: !item.inputs
      ? item.inputs
      : (serializeRecord(item.inputs as any) as any),
    name: item["name"],
    provider: item["provider"],
    stageSelector: item["stageSelector"],
    schedule: item["schedule"]?.toISOString(),
  };
}

/** The type used for updating tags in CampaignVersion resources. */
export interface CampaignVersionTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function campaignVersionTagsUpdateSerializer(
  item: CampaignVersionTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a CampaignVersion list operation. */
export interface _CampaignVersionListResult {
  /** The CampaignVersion items on this page */
  value: CampaignVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The CatalogVersion entity. */
export interface CatalogVersion extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CatalogVersionProperties;
  /** Edge location of the CatalogVersion. */
  extendedLocation?: ExtendedLocation;
}

export function catalogVersionSerializer(
  item: CatalogVersion,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : catalogVersionPropertiesSerializer(item.properties),
    extendedLocation: !item.extendedLocation
      ? item.extendedLocation
      : extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of the CatalogVersion. */
export interface CatalogVersionProperties {
  /** The provisioning state of the CatalogVersion. */
  readonly provisioningState?: ProvisioningState;
  /** The properties of the CatalogVersion. */
  properties?: Record<string, any>;
  /** The metadata of the CatalogVersion. */
  metadata?: Record<string, string>;
  /** The name of parent CatalogVersion */
  parentName?: string;
  /** The catalogType of the CatalogVersion. */
  catalogType?: string;
  /** The status of the CatalogVersion. */
  readonly status?: CatalogStatusProperties;
}

export function catalogVersionPropertiesSerializer(
  item: CatalogVersionProperties,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : (serializeRecord(item.properties as any) as any),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
    parentName: item["parentName"],
    catalogType: item["catalogType"],
  };
}

/** Defines a CatalogStatus */
export interface CatalogStatusProperties {
  /** The properties of the CatalogStatus */
  properties: Record<string, string>;
}

/** The type used for updating tags in CatalogVersion resources. */
export interface CatalogVersionTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function catalogVersionTagsUpdateSerializer(
  item: CatalogVersionTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a CatalogVersion list operation. */
export interface _CatalogVersionListResult {
  /** The CatalogVersion items on this page */
  value: CatalogVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The expression evaluation result response. */
export interface EvalExpressionResponse {
  /** Operation Id */
  readonly id?: string;
  /** Operation Name */
  readonly name?: string;
  /** Provisioning state of the expression evaluation resource */
  readonly status?: ResourceProvisioningState;
  /** Error listing the expression evaluation response. */
  error?: EvalExpressionResponseError;
  /** Properties of the expression evaluation response. */
  properties?: Record<string, any>;
}

/** The error evaluating the expression response */
export interface EvalExpressionResponseError {
  /** The error code. */
  code?: string;
  /** The error message. */
  message?: string;
}

/** A SolutionVersion resource belonging to a Solution resource. */
export interface SolutionVersion extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SolutionVersionProperties;
  /** Edge location of the resource. */
  extendedLocation?: ExtendedLocation;
}

export function solutionVersionSerializer(
  item: SolutionVersion,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : solutionVersionPropertiesSerializer(item.properties),
    extendedLocation: !item.extendedLocation
      ? item.extendedLocation
      : extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of a SolutionVersion resource. */
export interface SolutionVersionProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** A list of components. */
  components?: ComponentProperties[];
  /** The display name of the SolutionVersion resource. */
  displayName?: string;
  /** The metadata information of the SolutionVersion resource. */
  metadata?: Record<string, string>;
}

export function solutionVersionPropertiesSerializer(
  item: SolutionVersionProperties,
): Record<string, unknown> {
  return {
    components:
      item["components"] === undefined
        ? item["components"]
        : item["components"].map(componentPropertiesSerializer),
    displayName: item["displayName"],
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** Defines a desired runtime component. */
export interface ComponentProperties {
  /** Name of the component. */
  name: string;
  /** Metadata information of the component. */
  metadata?: Record<string, string>;
  /** Properties of the component. */
  properties?: Record<string, any>;
  /** Constraints of the component. */
  constraints?: string;
  /** Dependencies of the component. */
  dependencies?: string[];
  /** Component type. */
  type: string;
}

export function componentPropertiesSerializer(
  item: ComponentProperties,
): Record<string, unknown> {
  return {
    name: item["name"],
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
    properties: !item.properties
      ? item.properties
      : (serializeRecord(item.properties as any) as any),
    constraints: item["constraints"],
    dependencies: item["dependencies"],
    type: item["type"],
  };
}

/** The type used for updating tags in SolutionVersion resources. */
export interface SolutionVersionTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function solutionVersionTagsUpdateSerializer(
  item: SolutionVersionTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a SolutionVersion list operation. */
export interface _SolutionVersionListResult {
  /** The SolutionVersion items on this page */
  value: SolutionVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The Catalog entity. */
export interface Catalog extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CatalogProperties;
  /** Edge location of the Catalog. */
  extendedLocation: ExtendedLocation;
}

export function catalogSerializer(item: Catalog): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : catalogPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of the Catalog. */
export interface CatalogProperties {
  /** Provisioning state of the Catalog. */
  readonly provisioningState?: ProvisioningState;
}

export function catalogPropertiesSerializer(item: CatalogProperties) {
  return item as any;
}

/** The type used for updating tags in Catalog resources. */
export interface CatalogTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function catalogTagsUpdateSerializer(
  item: CatalogTagsUpdate,
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

/** The activation entity. */
export interface Activation extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ActivationProperties;
  /** Edge location of the resource. */
  extendedLocation: ExtendedLocation;
}

export function activationSerializer(
  item: Activation,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : activationPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** Defining the Activation. */
export interface ActivationProperties {
  /** Provisioning state of the activation. */
  readonly provisioningState?: ProvisioningState;
  /** The inputs of the Activation. Inputs holds a key-value map of user-defined parameters for the initial stage */
  inputs?: Record<string, any>;
  /** The stage of the campaign from where the Activation should trigger. */
  stage?: string;
  /** The campaign name that the Activation should trigger. */
  campaign: string;
  /** The status of the Activation. */
  readonly status?: ActivationStatusProperties;
}

export function activationPropertiesSerializer(
  item: ActivationProperties,
): Record<string, unknown> {
  return {
    inputs: !item.inputs
      ? item.inputs
      : (serializeRecord(item.inputs as any) as any),
    stage: item["stage"],
    campaign: item["campaign"],
  };
}

/** Defines a ActivationStatus */
export interface ActivationStatusProperties {
  /** The execution history Activation */
  stageHistory?: StageHistoryProperties[];
  /** The activationGeneration of the ActivationStatus */
  activationGeneration?: string;
  /** The updateTime of the ActivationStatus */
  updateTime?: string;
  /** The status code of the ActivationStatus */
  status?: number;
  /** The status message of the ActivationStatus */
  statusMessage?: string;
}

/** Defines a StageHistory */
export interface StageHistoryProperties {
  /** The inputs of the StageHistory, Inputs holds a key-value map of user-defined parameters for the initial stage */
  inputs?: Record<string, any>;
  /** The outputs of the StageHistory, it is different as the different input stages. */
  outputs?: Record<string, any>;
  /** The stage of the StageHistory */
  stage: string;
  /** The state of the StageHistory */
  isActive?: boolean;
  /** The nextStage of the StageHistory */
  nextStage?: string;
  /** The errorMessage of the StageHistory */
  errorMessage?: string;
  /** The status code of the StageHistory */
  status?: number;
  /** The status message of the StageHistory */
  statusMessage?: string;
}

/** The type used for updating tags in Activation resources. */
export interface ActivationTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function activationTagsUpdateSerializer(
  item: ActivationTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Activation list operation. */
export interface _ActivationListResult {
  /** The Activation items on this page */
  value: Activation[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The campaign entity. */
export interface Campaign extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CampaignProperties;
  /** Edge location of the resource. */
  extendedLocation: ExtendedLocation;
}

export function campaignSerializer(item: Campaign): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : campaignPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of the campaign. */
export interface CampaignProperties {
  /** Provisioning state of the campaign. */
  readonly provisioningState?: ProvisioningState;
}

export function campaignPropertiesSerializer(item: CampaignProperties) {
  return item as any;
}

/** The type used for updating tags in Campaign resources. */
export interface CampaignTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function campaignTagsUpdateSerializer(
  item: CampaignTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Campaign list operation. */
export interface _CampaignListResult {
  /** The Campaign items on this page */
  value: Campaign[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An Instance resource. */
export interface Instance extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: InstanceProperties;
  /** Edge location of the resource. */
  extendedLocation: ExtendedLocation;
}

export function instanceSerializer(item: Instance): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : instancePropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of an Instance resource. */
export interface InstanceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** The metadata information of the InstanceVersion resource. */
  metadata?: Record<string, string>;
  /** The display name of the InstanceVersion resource. */
  displayName?: string;
  /** The scope of the InstanceVersion resource. */
  scope?: string;
  /** The SolutionVersion resource of the InstanceVersion resource. */
  solution: string;
  /** Defines the Target the InstanceVersion resource will deploy to. */
  target?: TargetSelectorProperties;
  /** The reconciliationPolicy of the InstanceVersion resource. */
  reconciliationPolicy?: ReconciliationPolicyProperties;
  /** The running state for the InstanceVersion resource. */
  isDryRun?: boolean;
  /** The status of the InstanceVersion. */
  readonly status?: InstanceTargetStatusProperties;
}

export function instancePropertiesSerializer(
  item: InstanceProperties,
): Record<string, unknown> {
  return {
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
    displayName: item["displayName"],
    scope: item["scope"],
    solution: item["solution"],
    target: !item.target
      ? item.target
      : targetSelectorPropertiesSerializer(item.target),
    reconciliationPolicy: !item.reconciliationPolicy
      ? item.reconciliationPolicy
      : reconciliationPolicyPropertiesSerializer(item.reconciliationPolicy),
    isDryRun: item["isDryRun"],
  };
}

/** Properties of the reference target. */
export interface TargetSelectorProperties {
  /** Name of the TargetVersion resource. */
  name?: string;
  /** The selector of the TargetVersion resource. */
  selector?: Record<string, string>;
}

export function targetSelectorPropertiesSerializer(
  item: TargetSelectorProperties,
): Record<string, unknown> {
  return {
    name: item["name"],
    selector: !item.selector
      ? item.selector
      : (serializeRecord(item.selector as any) as any),
  };
}

/** Defines a ReconciliationPolicy */
export interface ReconciliationPolicyProperties {
  /** The state of the ReconciliationPolicy */
  state: ReconciliationState;
  /** Policy interval. */
  interval: string;
}

export function reconciliationPolicyPropertiesSerializer(
  item: ReconciliationPolicyProperties,
): Record<string, unknown> {
  return {
    state: item["state"],
    interval: item["interval"],
  };
}

/** Known values of {@link ReconciliationState} that the service accepts. */
export enum KnownReconciliationState {
  /** inactive */
  inactive = "inactive",
  /** active */
  active = "active",
}

/**
 * Defines a state of the reconciliation policy. \
 * {@link KnownReconciliationState} can be used interchangeably with ReconciliationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **inactive** \
 * **active**
 */
export type ReconciliationState = string;

/** Defines a status for Target and Instance deployment */
export interface InstanceTargetStatusProperties {
  /** The lastModified of the Status */
  lastModified: Date;
  /** The state properties of the Status */
  properties?: Record<string, string>;
}

/** The type used for updating tags in Instance resources. */
export interface InstanceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function instanceTagsUpdateSerializer(
  item: InstanceTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Instance list operation. */
export interface _InstanceListResult {
  /** The Instance items on this page */
  value: Instance[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A Target resource. */
export interface Target extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: TargetProperties;
  /** Edge location of the resource. */
  extendedLocation: ExtendedLocation;
}

export function targetSerializer(item: Target): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : targetPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of a Target resource. */
export interface TargetProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** The metadata information of the TargetVersion. */
  metadata?: Record<string, string>;
  /** The properties of the TargetVersion. */
  properties?: Record<string, string>;
  /** The display name of the TargetVersion. */
  displayName?: string;
  /** The constraints of the TargetVersion. */
  constraints?: string;
  /** The scope of the TargetVersion. */
  scope?: string;
  /** Defines the device topology for a target or instance. */
  topologies?: TopologyProperties[];
  /** A list of components. */
  components?: ComponentProperties[];
  /** The reconciliationPolicy of the TargetVersion. */
  reconciliationPolicy?: ReconciliationPolicyProperties;
  /** The running state for the TargetVersion resource. */
  isDryRun?: boolean;
  /** The status of the TargetVersion. */
  readonly status?: InstanceTargetStatusProperties;
}

export function targetPropertiesSerializer(
  item: TargetProperties,
): Record<string, unknown> {
  return {
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
    properties: !item.properties
      ? item.properties
      : (serializeRecord(item.properties as any) as any),
    displayName: item["displayName"],
    constraints: item["constraints"],
    scope: item["scope"],
    topologies:
      item["topologies"] === undefined
        ? item["topologies"]
        : item["topologies"].map(topologyPropertiesSerializer),
    components:
      item["components"] === undefined
        ? item["components"]
        : item["components"].map(componentPropertiesSerializer),
    reconciliationPolicy: !item.reconciliationPolicy
      ? item.reconciliationPolicy
      : reconciliationPolicyPropertiesSerializer(item.reconciliationPolicy),
    isDryRun: item["isDryRun"],
  };
}

/** Defines a desired runtime topology */
export interface TopologyProperties {
  /** The bindings of the Topology */
  bindings?: BindingProperties[];
}

export function topologyPropertiesSerializer(
  item: TopologyProperties,
): Record<string, unknown> {
  return {
    bindings:
      item["bindings"] === undefined
        ? item["bindings"]
        : item["bindings"].map(bindingPropertiesSerializer),
  };
}

/** Defines a binding for a provider. */
export interface BindingProperties {
  /** Name of the provider. */
  provider: string;
  /** Configuration values for the binding. */
  config?: Record<string, string>;
  /** Role that the provider binds to with the component. */
  role: string;
}

export function bindingPropertiesSerializer(
  item: BindingProperties,
): Record<string, unknown> {
  return {
    provider: item["provider"],
    config: !item.config
      ? item.config
      : (serializeRecord(item.config as any) as any),
    role: item["role"],
  };
}

/** The type used for updating tags in Target resources. */
export interface TargetTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function targetTagsUpdateSerializer(
  item: TargetTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Target list operation. */
export interface _TargetListResult {
  /** The Target items on this page */
  value: Target[];
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

/** A Solution resource. */
export interface Solution extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SolutionProperties;
  /** Edge location of the resource. */
  extendedLocation: ExtendedLocation;
}

export function solutionSerializer(item: Solution): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : solutionPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** The properties of a Solution resource. */
export interface SolutionProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function solutionPropertiesSerializer(item: SolutionProperties) {
  return item as any;
}

/** The type used for updating tags in Solution resources. */
export interface SolutionTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function solutionTagsUpdateSerializer(
  item: SolutionTagsUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Solution list operation. */
export interface _SolutionListResult {
  /** The Solution items on this page */
  value: Solution[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Versions info. */
export type Versions = "2024-04-01-preview" | "2024-08-01-preview";
/** Alias for ProvisioningState */
export type ProvisioningState = string | ResourceProvisioningState;
