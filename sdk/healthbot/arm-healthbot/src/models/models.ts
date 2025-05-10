// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../static-helpers/serialization/serialize-record.js";

/** Available operations of the service. */
export interface _AvailableOperations {
  /** Collection of available operation details. */
  value: OperationDetail[];
  /**
   * URL client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

export function _availableOperationsDeserializer(item: any): _AvailableOperations {
  return {
    value: operationDetailArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function operationDetailArrayDeserializer(result: Array<OperationDetail>): any[] {
  return result.map((item) => {
    return operationDetailDeserializer(item);
  });
}

/** Operation detail payload */
export interface OperationDetail {
  /** Name of the operation */
  name?: string;
  /** Indicates whether the operation is a data action */
  isDataAction?: boolean;
  /** Display of the operation */
  display?: OperationDisplay;
  /** Origin of the operation */
  origin?: string;
  /** Additional properties. */
  properties?: Record<string, any>;
}

export function operationDetailDeserializer(item: any): OperationDetail {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"] ? item["display"] : operationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    properties: !item["properties"]
      ? item["properties"]
      : _operationDetailPropertiesDeserializer(item["properties"]),
  };
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  description?: string;
}

export function operationDisplayDeserializer(item: any): OperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** model interface _OperationDetailProperties */
export interface _OperationDetailProperties {}

export function _operationDetailPropertiesDeserializer(item: any): _OperationDetailProperties {
  return item;
}

/** The resource management error response. */
export interface ErrorModel {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorDeserializer(item: any): ErrorModel {
  return {
    error: !item["error"] ? item["error"] : errorDetailDeserializer(item["error"]),
  };
}

/** The error object detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorModel[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"] ? item["details"] : errorArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorArrayDeserializer(result: Array<ErrorModel>): any[] {
  return result.map((item) => {
    return errorDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(result: Array<ErrorAdditionalInfo>): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** Additional information about an error. */
export interface ErrorAdditionalInfo {
  /** The type of the additional error information. */
  readonly type?: string;
  /** The additional error information. */
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

/** Azure Health Bot resource definition */
export interface HealthBot extends TrackedResource {
  /** SKU of the Azure Health Bot. */
  sku: Sku;
  /** The identity of the Azure Health Bot. */
  identity?: Identity;
  /** The set of properties specific to Azure Health Bot resource. */
  properties?: HealthBotProperties;
}

export function healthBotSerializer(item: HealthBot): any {
  return {
    tags: item["tags"],
    location: item["location"],
    sku: skuSerializer(item["sku"]),
    identity: !item["identity"] ? item["identity"] : identitySerializer(item["identity"]),
    properties: !item["properties"]
      ? item["properties"]
      : healthBotPropertiesSerializer(item["properties"]),
  };
}

export function healthBotDeserializer(item: any): HealthBot {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    sku: skuDeserializer(item["sku"]),
    identity: !item["identity"] ? item["identity"] : identityDeserializer(item["identity"]),
    properties: !item["properties"]
      ? item["properties"]
      : healthBotPropertiesDeserializer(item["properties"]),
  };
}

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the Azure Health Bot SKU */
  name: SkuName;
}

export function skuSerializer(item: Sku): any {
  return { name: item["name"] };
}

export function skuDeserializer(item: any): Sku {
  return {
    name: item["name"],
  };
}

/** The name of the Azure Health Bot SKU */
export type SkuName = "F0" | "S1" | "C0" | "PES" | "C1";

/** Identity for the resource. */
export interface Identity {
  /** The principal ID of resource identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of resource. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot */
  type?: ResourceIdentityType;
  /**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
  userAssignedIdentities?: UserAssignedIdentityMap;
}

export function identitySerializer(item: Identity): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityMapSerializer(item["userAssignedIdentities"]),
  };
}

export function identityDeserializer(item: any): Identity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityMapDeserializer(item["userAssignedIdentities"]),
  };
}

/** The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot */
export type ResourceIdentityType =
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
  | "None";

/** model interface UserAssignedIdentityMap */
export interface UserAssignedIdentityMap {
  /** Additional properties */
  additionalProperties?: Record<string, UserAssignedIdentity>;
}

export function userAssignedIdentityMapSerializer(item: UserAssignedIdentityMap): any {
  return {
    ...serializeRecord(item.additionalProperties, undefined, userAssignedIdentitySerializer),
  };
}

export function userAssignedIdentityMapDeserializer(item: any): UserAssignedIdentityMap {
  return {
    additionalProperties: serializeRecord(item, [], userAssignedIdentityDeserializer),
  };
}

/** Represents a user-assigned identity. */
export interface UserAssignedIdentity {
  /** The principal ID of the user-assigned identity. */
  readonly principalId?: string;
  /** The client ID of the user-assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(item: UserAssignedIdentity): any {
  return item;
}

export function userAssignedIdentityDeserializer(item: any): UserAssignedIdentity {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

/** The properties of a Azure Health Bot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs. */
export interface HealthBotProperties {
  /** The provisioning state of the Azure Health Bot resource. */
  readonly provisioningState?: string;
  /** The link. */
  readonly botManagementPortalLink?: string;
  /** KeyVault properties for the resource encryption. */
  keyVaultProperties?: KeyVaultProperties;
}

export function healthBotPropertiesSerializer(item: HealthBotProperties): any {
  return {
    keyVaultProperties: !item["keyVaultProperties"]
      ? item["keyVaultProperties"]
      : keyVaultPropertiesSerializer(item["keyVaultProperties"]),
  };
}

export function healthBotPropertiesDeserializer(item: any): HealthBotProperties {
  return {
    provisioningState: item["provisioningState"],
    botManagementPortalLink: item["botManagementPortalLink"],
    keyVaultProperties: !item["keyVaultProperties"]
      ? item["keyVaultProperties"]
      : keyVaultPropertiesDeserializer(item["keyVaultProperties"]),
  };
}

/** Properties of the key vault. */
export interface KeyVaultProperties {
  /** The name of the key vault key. */
  keyName: string;
  /** The version of the key vault key. */
  keyVersion?: string;
  /** The Uri of the key vault. */
  keyVaultUri: string;
  /** The user assigned identity (ARM resource id) that has access to the key. */
  userIdentity?: string;
}

export function keyVaultPropertiesSerializer(item: KeyVaultProperties): any {
  return {
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
    keyVaultUri: item["keyVaultUri"],
    userIdentity: item["userIdentity"],
  };
}

export function keyVaultPropertiesDeserializer(item: any): KeyVaultProperties {
  return {
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
    keyVaultUri: item["keyVaultUri"],
    userIdentity: item["userIdentity"],
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

/** Parameters for updating a Azure Health Bot. */
export interface HealthBotUpdateParameters {
  /** Properties of Azure Health Bot. */
  properties?: HealthBotProperties;
  /** Tags for a Azure Health Bot. */
  tags?: Record<string, string>;
  /** SKU of the Azure Health Bot. */
  sku?: Sku;
  /** The identity of the Azure Health Bot. */
  identity?: Identity;
  location?: string;
}

export function healthBotUpdateParametersSerializer(item: HealthBotUpdateParameters): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : healthBotPropertiesSerializer(item["properties"]),
    tags: item["tags"],
    sku: !item["sku"] ? item["sku"] : skuSerializer(item["sku"]),
    identity: !item["identity"] ? item["identity"] : identitySerializer(item["identity"]),
    location: item["location"],
  };
}

/** The list of Azure Health Bot operation response. */
export interface _BotResponseList {
  /** The HealthBot items on this page */
  readonly value: HealthBot[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _botResponseListDeserializer(item: any): _BotResponseList {
  return {
    value: healthBotArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function healthBotArraySerializer(result: Array<HealthBot>): any[] {
  return result.map((item) => {
    return healthBotSerializer(item);
  });
}

export function healthBotArrayDeserializer(result: Array<HealthBot>): any[] {
  return result.map((item) => {
    return healthBotDeserializer(item);
  });
}

/** Health Bot Keys Response. */
export interface HealthBotKeysResponse {
  /** Array of Azure Health Bot Secrets. */
  secrets?: HealthBotKey[];
}

export function healthBotKeysResponseDeserializer(item: any): HealthBotKeysResponse {
  return {
    secrets: !item["secrets"] ? item["secrets"] : healthBotKeyArrayDeserializer(item["secrets"]),
  };
}

export function healthBotKeyArrayDeserializer(result: Array<HealthBotKey>): any[] {
  return result.map((item) => {
    return healthBotKeyDeserializer(item);
  });
}

/** An entry of HealthBotKeysResponse */
export interface HealthBotKey {
  /** The name of the key. */
  keyName?: string;
  /** The value of the key. */
  value?: string;
}

export function healthBotKeyDeserializer(item: any): HealthBotKey {
  return {
    keyName: item["keyName"],
    value: item["value"],
  };
}

/** The available API versions. */
export enum KnownVersions {
  /** The 2024-02-01 API version. */
  V20240201 = "2024-02-01",
}
