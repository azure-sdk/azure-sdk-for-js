// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

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

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface TrafficController extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: TrafficControllerProperties;
}

export function trafficControllerSerializer(
  item: TrafficController,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : trafficControllerPropertiesSerializer(item.properties),
  };
}

/** Traffic Controller Properties. */
export interface TrafficControllerProperties {
  /** Configuration Endpoints. */
  readonly configurationEndpoints?: string[];
  /** Frontends References List */
  readonly frontends?: ResourceId[];
  /** Associations References List */
  readonly associations?: ResourceId[];
  /** Security Policies References List */
  readonly securityPolicies?: ResourceId[];
  /** Security Policy Configuration */
  securityPolicyConfigurations?: SecurityPolicyConfigurations;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function trafficControllerPropertiesSerializer(
  item: TrafficControllerProperties,
): Record<string, unknown> {
  return {
    securityPolicyConfigurations: !item.securityPolicyConfigurations
      ? item.securityPolicyConfigurations
      : securityPolicyConfigurationsSerializer(
          item.securityPolicyConfigurations,
        ),
  };
}

/** Resource ID definition used by parent to reference child resources. */
export interface ResourceId {
  /** Resource ID of child resource. */
  id: string;
}

/** SecurityPolicyConfigurations Subresource of Traffic Controller. */
export interface SecurityPolicyConfigurations {
  /** Contains reference to a WAF-type security policy that is applied at the Traffic Controller level. */
  wafSecurityPolicy?: WafSecurityPolicy;
}

export function securityPolicyConfigurationsSerializer(
  item: SecurityPolicyConfigurations,
): Record<string, unknown> {
  return {
    wafSecurityPolicy: !item.wafSecurityPolicy
      ? item.wafSecurityPolicy
      : wafSecurityPolicySerializer(item.wafSecurityPolicy),
  };
}

/** Web Application Firewall Security Policy */
export interface WafSecurityPolicy {
  /** Resource ID of the Waf Security Policy */
  id: string;
}

export function wafSecurityPolicySerializer(
  item: WafSecurityPolicy,
): Record<string, unknown> {
  return {
    id: item["id"],
  };
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Accepted */
  Accepted = "Accepted",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
}

/**
 * Resource Provisioning State Enum \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Updating** \
 * **Deleting** \
 * **Accepted** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ProvisioningState = string;

/** The type used for update operations of the TrafficController. */
export interface TrafficControllerUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: TrafficControllerUpdateProperties;
}

export function trafficControllerUpdateSerializer(
  item: TrafficControllerUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : trafficControllerUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the TrafficController. */
export interface TrafficControllerUpdateProperties {
  /** Security Policy Configuration */
  securityPolicyConfigurations?: SecurityPolicyConfigurations;
}

export function trafficControllerUpdatePropertiesSerializer(
  item: TrafficControllerUpdateProperties,
): Record<string, unknown> {
  return {
    securityPolicyConfigurations: !item.securityPolicyConfigurations
      ? item.securityPolicyConfigurations
      : securityPolicyConfigurationsSerializer(
          item.securityPolicyConfigurations,
        ),
  };
}

/** The response of a TrafficController list operation. */
export interface _TrafficControllerListResult {
  /** The TrafficController items on this page */
  value: TrafficController[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** SecurityPolicy Subresource of Traffic Controller. */
export interface SecurityPolicy extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SecurityPolicyProperties;
}

export function securityPolicySerializer(
  item: SecurityPolicy,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : securityPolicyPropertiesSerializer(item.properties),
  };
}

/** SecurityPolicy Properties. */
export interface SecurityPolicyProperties {
  /** Type of the Traffic Controller Security Policy */
  readonly policyType?: PolicyType;
  /** Web Application Firewall Policy of the Traffic Controller Security Policy */
  wafPolicy?: WafPolicy;
  /** Provisioning State of Traffic Controller SecurityPolicy Resource */
  readonly provisioningState?: ProvisioningState;
}

export function securityPolicyPropertiesSerializer(
  item: SecurityPolicyProperties,
): Record<string, unknown> {
  return {
    wafPolicy: !item.wafPolicy
      ? item.wafPolicy
      : wafPolicySerializer(item.wafPolicy),
  };
}

/** Known values of {@link PolicyType} that the service accepts. */
export enum KnownPolicyType {
  /** WAF */
  WAF = "waf",
}

/**
 * Policy Type of the Security Policy \
 * {@link KnownPolicyType} can be used interchangeably with PolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **waf**
 */
export type PolicyType = string;

/** Web Application Firewall Policy */
export interface WafPolicy {
  /** Resource ID of the WAF */
  id: string;
}

export function wafPolicySerializer(item: WafPolicy): Record<string, unknown> {
  return {
    id: item["id"],
  };
}

/** The type used for update operations of the SecurityPolicy. */
export interface SecurityPolicyUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: SecurityPolicyUpdateProperties;
}

export function securityPolicyUpdateSerializer(
  item: SecurityPolicyUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : securityPolicyUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the SecurityPolicy. */
export interface SecurityPolicyUpdateProperties {
  /** Web Application Firewall Policy of the Traffic Controller Security Policy */
  wafPolicy?: WafPolicy;
}

export function securityPolicyUpdatePropertiesSerializer(
  item: SecurityPolicyUpdateProperties,
): Record<string, unknown> {
  return {
    wafPolicy: !item.wafPolicy
      ? item.wafPolicy
      : wafPolicySerializer(item.wafPolicy),
  };
}

/** The response of a SecurityPolicy list operation. */
export interface _SecurityPolicyListResult {
  /** The SecurityPolicy items on this page */
  value: SecurityPolicy[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Frontend Sub Resource of Traffic Controller. */
export interface Frontend extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: FrontendProperties;
}

export function frontendSerializer(item: Frontend): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : frontendPropertiesSerializer(item.properties),
  };
}

/** Frontend Properties. */
export interface FrontendProperties {
  /** The Fully Qualified Domain Name of the DNS record associated to a Traffic Controller frontend. */
  readonly fqdn?: string;
  /** Provisioning State of Traffic Controller Frontend Resource */
  readonly provisioningState?: ProvisioningState;
}

export function frontendPropertiesSerializer(item: FrontendProperties) {
  return item as any;
}

/** The type used for update operations of the Frontend. */
export interface FrontendUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function frontendUpdateSerializer(
  item: FrontendUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
  };
}

/** The response of a Frontend list operation. */
export interface _FrontendListResult {
  /** The Frontend items on this page */
  value: Frontend[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Association Subresource of Traffic Controller */
export interface Association extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AssociationProperties;
}

export function associationSerializer(
  item: Association,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : associationPropertiesSerializer(item.properties),
  };
}

/** Association Properties. */
export interface AssociationProperties {
  /** Association Type */
  associationType: AssociationType;
  /** Association Subnet */
  subnet?: AssociationSubnet;
  /** Provisioning State of Traffic Controller Association Resource */
  readonly provisioningState?: ProvisioningState;
}

export function associationPropertiesSerializer(
  item: AssociationProperties,
): Record<string, unknown> {
  return {
    associationType: item["associationType"],
    subnet: !item.subnet
      ? item.subnet
      : associationSubnetSerializer(item.subnet),
  };
}

/** Known values of {@link AssociationType} that the service accepts. */
export enum KnownAssociationType {
  /** subnets */
  subnets = "subnets",
}

/**
 * Association Type Enum \
 * {@link KnownAssociationType} can be used interchangeably with AssociationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **subnets**
 */
export type AssociationType = string;

/** Association Subnet. */
export interface AssociationSubnet {
  /** Association ID. */
  id: string;
}

export function associationSubnetSerializer(
  item: AssociationSubnet,
): Record<string, unknown> {
  return {
    id: item["id"],
  };
}

/** The type used for update operations of the Association. */
export interface AssociationUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: AssociationUpdateProperties;
}

export function associationUpdateSerializer(
  item: AssociationUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : associationUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the Association. */
export interface AssociationUpdateProperties {
  /** Association Type */
  associationType?: AssociationType;
  /** Association Subnet */
  subnet?: AssociationSubnet;
}

export function associationUpdatePropertiesSerializer(
  item: AssociationUpdateProperties,
): Record<string, unknown> {
  return {
    associationType: item["associationType"],
    subnet: !item.subnet
      ? item.subnet
      : associationSubnetSerializer(item.subnet),
  };
}

/** The response of a Association list operation. */
export interface _AssociationListResult {
  /** The Association items on this page */
  value: Association[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Api versions */
export type Versions = "2023-11-01" | "2024-05-01-preview";
