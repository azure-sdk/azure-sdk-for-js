// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Playwright workspace resource. */
export interface PlaywrightWorkspace extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PlaywrightWorkspaceProperties;
}

export function playwrightWorkspaceSerializer(item: PlaywrightWorkspace): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : playwrightWorkspacePropertiesSerializer(item["properties"]),
  };
}

export function playwrightWorkspaceDeserializer(item: any): PlaywrightWorkspace {
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
      : playwrightWorkspacePropertiesDeserializer(item["properties"]),
  };
}

/** Playwright workspace resource properties. */
export interface PlaywrightWorkspaceProperties {
  /** The status of the last resource operation. */
  readonly provisioningState?: ProvisioningState;
  /** The workspace data plane URI. */
  readonly dataplaneUri?: string;
  /** This property sets the connection region for client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created. */
  regionalAffinity?: EnablementStatus;
  /** When enabled, this feature allows the workspace to use local auth (through service access token) for executing operations. */
  localAuth?: EnablementStatus;
}

export function playwrightWorkspacePropertiesSerializer(item: PlaywrightWorkspaceProperties): any {
  return {
    regionalAffinity: item["regionalAffinity"],
    localAuth: item["localAuth"],
  };
}

export function playwrightWorkspacePropertiesDeserializer(
  item: any,
): PlaywrightWorkspaceProperties {
  return {
    provisioningState: item["provisioningState"],
    dataplaneUri: item["dataplaneUri"],
    regionalAffinity: item["regionalAffinity"],
    localAuth: item["localAuth"],
  };
}

/** The status of the last resource operation. */
export enum KnownProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** Creation in progress.. */
  Creating = "Creating",
  /** Deletion in progress.. */
  Deleting = "Deleting",
  /** Request accepted for processing.. */
  Accepted = "Accepted",
}

/**
 * The status of the last resource operation. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Creating**: Creation in progress.. \
 * **Deleting**: Deletion in progress.. \
 * **Accepted**: Request accepted for processing..
 */
export type ProvisioningState = string;

/** The enablement status of a feature. */
export enum KnownEnablementStatus {
  /** The feature is Enabled. */
  Enabled = "Enabled",
  /** The feature is Disabled. */
  Disabled = "Disabled",
}

/**
 * The enablement status of a feature. \
 * {@link KnownEnablementStatus} can be used interchangeably with EnablementStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: The feature is Enabled. \
 * **Disabled**: The feature is Disabled.
 */
export type EnablementStatus = string;

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

/** The type used for update operations of the PlaywrightWorkspace. */
export interface PlaywrightWorkspaceUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: PlaywrightWorkspaceUpdateProperties;
}

export function playwrightWorkspaceUpdateSerializer(item: PlaywrightWorkspaceUpdate): any {
  return {
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : playwrightWorkspaceUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the PlaywrightWorkspace. */
export interface PlaywrightWorkspaceUpdateProperties {
  /** This property sets the connection region for client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created. */
  regionalAffinity?: EnablementStatus;
  /** When enabled, this feature allows the workspace to use local auth (through service access token) for executing operations. */
  localAuth?: EnablementStatus;
}

export function playwrightWorkspaceUpdatePropertiesSerializer(
  item: PlaywrightWorkspaceUpdateProperties,
): any {
  return {
    regionalAffinity: item["regionalAffinity"],
    localAuth: item["localAuth"],
  };
}

/** The response of a PlaywrightWorkspace list operation. */
export interface _PlaywrightWorkspaceListResult {
  /** The PlaywrightWorkspace items on this page */
  value: PlaywrightWorkspace[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _playwrightWorkspaceListResultDeserializer(
  item: any,
): _PlaywrightWorkspaceListResult {
  return {
    value: playwrightWorkspaceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function playwrightWorkspaceArraySerializer(result: Array<PlaywrightWorkspace>): any[] {
  return result.map((item) => {
    return playwrightWorkspaceSerializer(item);
  });
}

export function playwrightWorkspaceArrayDeserializer(result: Array<PlaywrightWorkspace>): any[] {
  return result.map((item) => {
    return playwrightWorkspaceDeserializer(item);
  });
}

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

export function checkNameAvailabilityRequestSerializer(item: CheckNameAvailabilityRequest): any {
  return { name: item["name"], type: item["type"] };
}

/** The check availability result. */
export interface CheckNameAvailabilityResponse {
  /** Indicates if the resource name is available. */
  nameAvailable?: boolean;
  /** The reason why the given name is not available. */
  reason?: CheckNameAvailabilityReason;
  /** Detailed reason why the given name is not available. */
  message?: string;
}

export function checkNameAvailabilityResponseDeserializer(
  item: any,
): CheckNameAvailabilityResponse {
  return {
    nameAvailable: item["nameAvailable"],
    reason: item["reason"],
    message: item["message"],
  };
}

/** Possible reasons for a name not being available. */
export enum KnownCheckNameAvailabilityReason {
  /** Name is invalid. */
  Invalid = "Invalid",
  /** Name already exists. */
  AlreadyExists = "AlreadyExists",
}

/**
 * Possible reasons for a name not being available. \
 * {@link KnownCheckNameAvailabilityReason} can be used interchangeably with CheckNameAvailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid**: Name is invalid. \
 * **AlreadyExists**: Name already exists.
 */
export type CheckNameAvailabilityReason = string;

/** Playwright service Management API Versions. */
export enum KnownVersions {
  /** 2025-07-01-preview version */
  V20250701Preview = "2025-07-01-preview",
}
