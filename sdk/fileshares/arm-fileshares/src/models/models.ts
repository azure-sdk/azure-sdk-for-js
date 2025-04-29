// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** File share resource */
export interface FileShare extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: FileShareProperties;
}

export function fileShareSerializer(item: FileShare): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : fileSharePropertiesSerializer(item["properties"]),
  };
}

export function fileShareDeserializer(item: any): FileShare {
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
      : fileSharePropertiesDeserializer(item["properties"]),
  };
}

/** File share properties */
export interface FileShareProperties {
  /** The name of the file share as seen by the end user when mounting the share, such as in a URI or UNC format in their operating system. */
  mountName?: string;
  /** The host name of the file share. */
  readonly hostName?: string;
  /** The storage media tier of the file share. */
  mediaTier?: MediaTier;
  /** The chosen redundancy level of the file share. */
  redundancy?: Redundancy;
  /** The file sharing protocol for this file share. */
  protocol?: Protocol;
  /** The provisioned storage size of the share in GiB (1 GiB is 1024^3 bytes or 1073741824 bytes). A component of the file share's bill is the provisioned storage, regardless of the amount of used storage. */
  provisionedStorageGiB?: number;
  /** A date/time value that specifies when the provisioned storage for the file share is permitted to be reduced. */
  readonly provisionedStorageNextAllowedDowngrade?: Date;
  /** The provisioned IO / sec of the share. */
  provisionedIOPerSec?: number;
  /** A date/time value that specifies when the provisioned IOPS for the file share is permitted to be reduced. */
  readonly provisionedIOPerSecNextAllowedDowngrade?: Date;
  /** The provisioned throughput / sec of the share. */
  provisionedThroughputMiBPerSec?: number;
  /** A date/time value that specifies when the provisioned throughput for the file share is permitted to be reduced. */
  readonly provisionedThroughputNextAllowedDowngrade?: Date;
  /** Burst IOPS are extra buffer IOPS enabling you to consume more than your provisioned IOPS for a short period of time, depending on the burst credits available for your share. */
  readonly includedBurstIOPerSec?: number;
  /** Max burst IOPS credits shows the maximum number of burst credits the share can have at the current IOPS provisioning level. */
  readonly maxBurstIOPerSecCredits?: number;
  /** Protocol settings specific NFS. */
  nfsProtocolProperties?: NfsProtocolProperties;
  /** The set of properties for control public access. */
  publicAccessProperties?: PublicAccessProperties;
  /** The status of the last operation. */
  readonly provisioningState?: FileShareProvisioningState;
  /** Gets or sets allow or disallow public network access to azure managed file share */
  publicNetworkAccess?: PublicNetworkAccess;
  /** The list of associated private endpoint connections. */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
}

export function fileSharePropertiesSerializer(item: FileShareProperties): any {
  return {
    mountName: item["mountName"],
    mediaTier: item["mediaTier"],
    redundancy: item["redundancy"],
    protocol: item["protocol"],
    provisionedStorageGiB: item["provisionedStorageGiB"],
    provisionedIOPerSec: item["provisionedIOPerSec"],
    provisionedThroughputMiBPerSec: item["provisionedThroughputMiBPerSec"],
    nfsProtocolProperties: !item["nfsProtocolProperties"]
      ? item["nfsProtocolProperties"]
      : nfsProtocolPropertiesSerializer(item["nfsProtocolProperties"]),
    publicAccessProperties: !item["publicAccessProperties"]
      ? item["publicAccessProperties"]
      : publicAccessPropertiesSerializer(item["publicAccessProperties"]),
    publicNetworkAccess: item["publicNetworkAccess"],
  };
}

export function fileSharePropertiesDeserializer(item: any): FileShareProperties {
  return {
    mountName: item["mountName"],
    hostName: item["hostName"],
    mediaTier: item["mediaTier"],
    redundancy: item["redundancy"],
    protocol: item["protocol"],
    provisionedStorageGiB: item["provisionedStorageGiB"],
    provisionedStorageNextAllowedDowngrade: !item["provisionedStorageNextAllowedDowngrade"]
      ? item["provisionedStorageNextAllowedDowngrade"]
      : new Date(item["provisionedStorageNextAllowedDowngrade"]),
    provisionedIOPerSec: item["provisionedIOPerSec"],
    provisionedIOPerSecNextAllowedDowngrade: !item["provisionedIOPerSecNextAllowedDowngrade"]
      ? item["provisionedIOPerSecNextAllowedDowngrade"]
      : new Date(item["provisionedIOPerSecNextAllowedDowngrade"]),
    provisionedThroughputMiBPerSec: item["provisionedThroughputMiBPerSec"],
    provisionedThroughputNextAllowedDowngrade: !item["provisionedThroughputNextAllowedDowngrade"]
      ? item["provisionedThroughputNextAllowedDowngrade"]
      : new Date(item["provisionedThroughputNextAllowedDowngrade"]),
    includedBurstIOPerSec: item["includedBurstIOPerSec"],
    maxBurstIOPerSecCredits: item["maxBurstIOPerSecCredits"],
    nfsProtocolProperties: !item["nfsProtocolProperties"]
      ? item["nfsProtocolProperties"]
      : nfsProtocolPropertiesDeserializer(item["nfsProtocolProperties"]),
    publicAccessProperties: !item["publicAccessProperties"]
      ? item["publicAccessProperties"]
      : publicAccessPropertiesDeserializer(item["publicAccessProperties"]),
    provisioningState: item["provisioningState"],
    publicNetworkAccess: item["publicNetworkAccess"],
    privateEndpointConnections: !item["privateEndpointConnections"]
      ? item["privateEndpointConnections"]
      : privateEndpointConnectionArrayDeserializer(item["privateEndpointConnections"]),
  };
}

/** Type of MediaTier */
export type MediaTier = "SSD";
/** Type of Redundancy */
export type Redundancy = "Local" | "Zone";
/** Type of Protocol */
export type Protocol = "NFS";

/** Properties specific to the NFS protocol. */
export interface NfsProtocolProperties {
  /** Root squash defines how root users on clients are mapped to the NFS share. */
  rootSquash: ShareRootSquash;
}

export function nfsProtocolPropertiesSerializer(item: NfsProtocolProperties): any {
  return { rootSquash: item["rootSquash"] };
}

export function nfsProtocolPropertiesDeserializer(item: any): NfsProtocolProperties {
  return {
    rootSquash: item["rootSquash"],
  };
}

/** Type of ShareRootSquash */
export type ShareRootSquash = "NoRootSquash" | "RootSquash" | "AllSquash";

/** The set of properties for control public access. */
export interface PublicAccessProperties {
  /** The allowed set of subnets when access is restricted. */
  allowedSubnets: string[];
}

export function publicAccessPropertiesSerializer(item: PublicAccessProperties): any {
  return {
    allowedSubnets: item["allowedSubnets"].map((p: any) => {
      return p;
    }),
  };
}

export function publicAccessPropertiesDeserializer(item: any): PublicAccessProperties {
  return {
    allowedSubnets: item["allowedSubnets"].map((p: any) => {
      return p;
    }),
  };
}

/** The status of the last operation. */
export enum KnownFileShareProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** The operation is provisioning. */
  Provisioning = "Provisioning",
  /** The operation is updating. */
  Updating = "Updating",
  /** The operation is deleting. */
  Deleting = "Deleting",
  /** The operation is accepted. */
  Accepted = "Accepted",
}

/**
 * The status of the last operation. \
 * {@link KnownFileShareProvisioningState} can be used interchangeably with FileShareProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Provisioning**: The operation is provisioning. \
 * **Updating**: The operation is updating. \
 * **Deleting**: The operation is deleting. \
 * **Accepted**: The operation is accepted.
 */
export type FileShareProvisioningState = string;

/** State of the public network access. */
export enum KnownPublicNetworkAccess {
  /** The public network access is enabled */
  Enabled = "Enabled",
  /** The public network access is disabled */
  Disabled = "Disabled",
}

/**
 * State of the public network access. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: The public network access is enabled \
 * **Disabled**: The public network access is disabled
 */
export type PublicNetworkAccess = string;

export function privateEndpointConnectionArrayDeserializer(
  result: Array<PrivateEndpointConnection>,
): any[] {
  return result.map((item) => {
    return privateEndpointConnectionDeserializer(item);
  });
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends Resource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

export function privateEndpointConnectionDeserializer(item: any): PrivateEndpointConnection {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : privateEndpointConnectionPropertiesDeserializer(item["properties"]),
  };
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The group ids for the private endpoint resource. */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /** The provisioning state of the private endpoint connection resource. */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

export function privateEndpointConnectionPropertiesDeserializer(
  item: any,
): PrivateEndpointConnectionProperties {
  return {
    groupIds: !item["groupIds"]
      ? item["groupIds"]
      : item["groupIds"].map((p: any) => {
          return p;
        }),
    privateEndpoint: !item["privateEndpoint"]
      ? item["privateEndpoint"]
      : privateEndpointDeserializer(item["privateEndpoint"]),
    privateLinkServiceConnectionState: privateLinkServiceConnectionStateDeserializer(
      item["privateLinkServiceConnectionState"],
    ),
    provisioningState: item["provisioningState"],
  };
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /** The resource identifier for private endpoint */
  readonly id?: string;
}

export function privateEndpointDeserializer(item: any): PrivateEndpoint {
  return {
    id: item["id"],
  };
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export function privateLinkServiceConnectionStateDeserializer(
  item: any,
): PrivateLinkServiceConnectionState {
  return {
    status: item["status"],
    description: item["description"],
    actionsRequired: item["actionsRequired"],
  };
}

/** The private endpoint connection status. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  /** Connectionaiting for approval or rejection */
  Pending = "Pending",
  /** Connection approved */
  Approved = "Approved",
  /** Connection Rejected */
  Rejected = "Rejected",
}

/**
 * The private endpoint connection status. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending**: Connectionaiting for approval or rejection \
 * **Approved**: Connection approved \
 * **Rejected**: Connection Rejected
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** The current provisioning state. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  /** Connection has been provisioned */
  Succeeded = "Succeeded",
  /** Connection is being created */
  Creating = "Creating",
  /** Connection is being deleted */
  Deleting = "Deleting",
  /** Connection provisioning has failed */
  Failed = "Failed",
}

/**
 * The current provisioning state. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Connection has been provisioned \
 * **Creating**: Connection is being created \
 * **Deleting**: Connection is being deleted \
 * **Failed**: Connection provisioning has failed
 */
export type PrivateEndpointConnectionProvisioningState = string;

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

/** The type used for update operations of the FileShare. */
export interface FileShareUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: FileShareUpdateProperties;
}

export function fileShareUpdateSerializer(item: FileShareUpdate): any {
  return {
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : fileShareUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the FileShare. */
export interface FileShareUpdateProperties {
  /** The provisioned storage size of the share in GiB (1 GiB is 1024^3 bytes or 1073741824 bytes). A component of the file share's bill is the provisioned storage, regardless of the amount of used storage. */
  provisionedStorageGiB?: number;
  /** The provisioned IO / sec of the share. */
  provisionedIOPerSec?: number;
  /** The provisioned throughput / sec of the share. */
  provisionedThroughputMiBPerSec?: number;
  /** Protocol settings specific NFS. */
  nfsProtocolProperties?: NfsProtocolProperties;
  /** The set of properties for control public access. */
  publicAccessProperties?: PublicAccessProperties;
  /** Gets or sets allow or disallow public network access to azure managed file share */
  publicNetworkAccess?: PublicNetworkAccess;
}

export function fileShareUpdatePropertiesSerializer(item: FileShareUpdateProperties): any {
  return {
    provisionedStorageGiB: item["provisionedStorageGiB"],
    provisionedIOPerSec: item["provisionedIOPerSec"],
    provisionedThroughputMiBPerSec: item["provisionedThroughputMiBPerSec"],
    nfsProtocolProperties: !item["nfsProtocolProperties"]
      ? item["nfsProtocolProperties"]
      : nfsProtocolPropertiesSerializer(item["nfsProtocolProperties"]),
    publicAccessProperties: !item["publicAccessProperties"]
      ? item["publicAccessProperties"]
      : publicAccessPropertiesSerializer(item["publicAccessProperties"]),
    publicNetworkAccess: item["publicNetworkAccess"],
  };
}

/** The response of a FileShare list operation. */
export interface _FileShareListResult {
  /** The FileShare items on this page */
  value: FileShare[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _fileShareListResultDeserializer(item: any): _FileShareListResult {
  return {
    value: fileShareArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function fileShareArraySerializer(result: Array<FileShare>): any[] {
  return result.map((item) => {
    return fileShareSerializer(item);
  });
}

export function fileShareArrayDeserializer(result: Array<FileShare>): any[] {
  return result.map((item) => {
    return fileShareDeserializer(item);
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

/** FileShareSnapshot resource */
export interface FileShareSnapshot extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: FileShareSnapshotProperties;
}

export function fileShareSnapshotSerializer(item: FileShareSnapshot): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : fileShareSnapshotPropertiesSerializer(item["properties"]),
  };
}

export function fileShareSnapshotDeserializer(item: any): FileShareSnapshot {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : fileShareSnapshotPropertiesDeserializer(item["properties"]),
  };
}

/** FileShareSnapshot properties */
export interface FileShareSnapshotProperties {
  /** The FileShareSnapshot time in UTC in string representation */
  readonly snapshotTime?: string;
  /** The initiator of the FileShareSnapshot */
  readonly initiatorId?: string;
  /** The metadata */
  metadata?: MetadataItem[];
  /** The status of the last operation. */
  readonly provisioningState?: FileShareProvisioningState;
}

export function fileShareSnapshotPropertiesSerializer(item: FileShareSnapshotProperties): any {
  return {
    metadata: !item["metadata"] ? item["metadata"] : metadataItemArraySerializer(item["metadata"]),
  };
}

export function fileShareSnapshotPropertiesDeserializer(item: any): FileShareSnapshotProperties {
  return {
    snapshotTime: item["SnapshotTime"],
    initiatorId: item["initiatorId"],
    metadata: !item["metadata"]
      ? item["metadata"]
      : metadataItemArrayDeserializer(item["metadata"]),
    provisioningState: item["provisioningState"],
  };
}

export function metadataItemArraySerializer(result: Array<MetadataItem>): any[] {
  return result.map((item) => {
    return metadataItemSerializer(item);
  });
}

export function metadataItemArrayDeserializer(result: Array<MetadataItem>): any[] {
  return result.map((item) => {
    return metadataItemDeserializer(item);
  });
}

/** FileShareSnapshot Metadata item */
export interface MetadataItem {
  /** The name of the metadata item. */
  name: string;
  /** The value of the metadata item. */
  value: string;
}

export function metadataItemSerializer(item: MetadataItem): any {
  return { name: item["name"], value: item["value"] };
}

export function metadataItemDeserializer(item: any): MetadataItem {
  return {
    name: item["name"],
    value: item["value"],
  };
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

/** The type used for update operations of the FileShareSnapshot. */
export interface FileShareSnapshotUpdate {
  /** The resource-specific properties for this resource. */
  properties?: FileShareSnapshotUpdateProperties;
}

export function fileShareSnapshotUpdateSerializer(item: FileShareSnapshotUpdate): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : fileShareSnapshotUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the FileShareSnapshot. */
export interface FileShareSnapshotUpdateProperties {
  /** The metadata */
  metadata?: MetadataItem[];
}

export function fileShareSnapshotUpdatePropertiesSerializer(
  item: FileShareSnapshotUpdateProperties,
): any {
  return {
    metadata: !item["metadata"] ? item["metadata"] : metadataItemArraySerializer(item["metadata"]),
  };
}

/** The response of a FileShareSnapshot list operation. */
export interface _FileShareSnapshotListResult {
  /** The FileShareSnapshot items on this page */
  value: FileShareSnapshot[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _fileShareSnapshotListResultDeserializer(item: any): _FileShareSnapshotListResult {
  return {
    value: fileShareSnapshotArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function fileShareSnapshotArraySerializer(result: Array<FileShareSnapshot>): any[] {
  return result.map((item) => {
    return fileShareSnapshotSerializer(item);
  });
}

export function fileShareSnapshotArrayDeserializer(result: Array<FileShareSnapshot>): any[] {
  return result.map((item) => {
    return fileShareSnapshotDeserializer(item);
  });
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
  User = "user",
  /** Indicates the operation is initiated by a system. */
  System = "system",
  /** Indicates the operation is initiated by a user or system. */
  UserSystem = "user,system",
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

/** Service versions */
export enum KnownVersions {
  /** Version 2023-01-01-preview */
  V20230101Preview = "2023-01-01-preview",
  /** Version 2024-01-01-preview */
  V20240101Preview = "2024-01-01-preview",
}
