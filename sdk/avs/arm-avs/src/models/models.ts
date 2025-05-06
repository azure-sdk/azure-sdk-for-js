// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The response of a WorkloadNetwork list operation. */
export interface _WorkloadNetworkList {
  /** The WorkloadNetwork items on this page */
  value: WorkloadNetwork[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkListDeserializer(item: any): _WorkloadNetworkList {
  return {
    value: workloadNetworkArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkArrayDeserializer(result: Array<WorkloadNetwork>): any[] {
  return result.map((item) => {
    return workloadNetworkDeserializer(item);
  });
}

/** Workload Network */
export interface WorkloadNetwork extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkProperties;
}

export function workloadNetworkDeserializer(item: any): WorkloadNetwork {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkPropertiesDeserializer(item["properties"]),
  };
}

/** The properties of a workload network */
export interface WorkloadNetworkProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
}

export function workloadNetworkPropertiesDeserializer(item: any): WorkloadNetworkProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** base Workload Network provisioning state */
export enum KnownWorkloadNetworkProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * base Workload Network provisioning state \
 * {@link KnownWorkloadNetworkProvisioningState} can be used interchangeably with WorkloadNetworkProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkProvisioningState = string;

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

/** The response of a WorkloadNetworkDhcp list operation. */
export interface _WorkloadNetworkDhcpList {
  /** The WorkloadNetworkDhcp items on this page */
  value: WorkloadNetworkDhcp[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkDhcpListDeserializer(item: any): _WorkloadNetworkDhcpList {
  return {
    value: workloadNetworkDhcpArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkDhcpArraySerializer(result: Array<WorkloadNetworkDhcp>): any[] {
  return result.map((item) => {
    return workloadNetworkDhcpSerializer(item);
  });
}

export function workloadNetworkDhcpArrayDeserializer(result: Array<WorkloadNetworkDhcp>): any[] {
  return result.map((item) => {
    return workloadNetworkDhcpDeserializer(item);
  });
}

/** NSX DHCP */
export interface WorkloadNetworkDhcp extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDhcpEntityUnion;
}

export function workloadNetworkDhcpSerializer(item: WorkloadNetworkDhcp): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDhcpEntityUnionSerializer(item["properties"]),
  };
}

export function workloadNetworkDhcpDeserializer(item: any): WorkloadNetworkDhcp {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDhcpEntityUnionDeserializer(item["properties"]),
  };
}

/**
 * Base class for WorkloadNetworkDhcpServer and WorkloadNetworkDhcpRelay to
 * inherit from
 */
export interface WorkloadNetworkDhcpEntity {
  /** Type of DHCP: SERVER or RELAY. */
  /** The discriminator possible values: SERVER, RELAY */
  dhcpType: DhcpTypeEnum;
  /** Display name of the DHCP entity. */
  displayName?: string;
  /** NSX Segments consuming DHCP. */
  readonly segments?: string[];
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkDhcpProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

export function workloadNetworkDhcpEntitySerializer(item: WorkloadNetworkDhcpEntity): any {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    revision: item["revision"],
  };
}

export function workloadNetworkDhcpEntityDeserializer(item: any): WorkloadNetworkDhcpEntity {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    segments: !item["segments"]
      ? item["segments"]
      : item["segments"].map((p: any) => {
          return p;
        }),
    provisioningState: item["provisioningState"],
    revision: item["revision"],
  };
}

/** Alias for WorkloadNetworkDhcpEntityUnion */
export type WorkloadNetworkDhcpEntityUnion =
  | WorkloadNetworkDhcpServer
  | WorkloadNetworkDhcpRelay
  | WorkloadNetworkDhcpEntity;

export function workloadNetworkDhcpEntityUnionSerializer(
  item: WorkloadNetworkDhcpEntityUnion,
): any {
  switch (item.dhcpType) {
    case "SERVER":
      return workloadNetworkDhcpServerSerializer(item as WorkloadNetworkDhcpServer);

    case "RELAY":
      return workloadNetworkDhcpRelaySerializer(item as WorkloadNetworkDhcpRelay);

    default:
      return workloadNetworkDhcpEntitySerializer(item);
  }
}

export function workloadNetworkDhcpEntityUnionDeserializer(
  item: any,
): WorkloadNetworkDhcpEntityUnion {
  switch (item.dhcpType) {
    case "SERVER":
      return workloadNetworkDhcpServerDeserializer(item as WorkloadNetworkDhcpServer);

    case "RELAY":
      return workloadNetworkDhcpRelayDeserializer(item as WorkloadNetworkDhcpRelay);

    default:
      return workloadNetworkDhcpEntityDeserializer(item);
  }
}

/** Type of DHCP: SERVER or RELAY. */
export enum KnownDhcpTypeEnum {
  Server = "SERVER",
  Relay = "RELAY",
}

/**
 * Type of DHCP: SERVER or RELAY. \
 * {@link KnownDhcpTypeEnum} can be used interchangeably with DhcpTypeEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SERVER** \
 * **RELAY**
 */
export type DhcpTypeEnum = string;

/** Workload Network DHCP provisioning state */
export enum KnownWorkloadNetworkDhcpProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network DHCP provisioning state \
 * {@link KnownWorkloadNetworkDhcpProvisioningState} can be used interchangeably with WorkloadNetworkDhcpProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkDhcpProvisioningState = string;

/** NSX DHCP Server */
export interface WorkloadNetworkDhcpServer extends WorkloadNetworkDhcpEntity {
  /** DHCP Server Address. */
  serverAddress?: string;
  /** DHCP Server Lease Time. */
  leaseTime?: number;
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "SERVER";
}

export function workloadNetworkDhcpServerSerializer(item: WorkloadNetworkDhcpServer): any {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    revision: item["revision"],
    serverAddress: item["serverAddress"],
    leaseTime: item["leaseTime"],
  };
}

export function workloadNetworkDhcpServerDeserializer(item: any): WorkloadNetworkDhcpServer {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    segments: !item["segments"]
      ? item["segments"]
      : item["segments"].map((p: any) => {
          return p;
        }),
    provisioningState: item["provisioningState"],
    revision: item["revision"],
    serverAddress: item["serverAddress"],
    leaseTime: item["leaseTime"],
  };
}

/** NSX DHCP Relay */
export interface WorkloadNetworkDhcpRelay extends WorkloadNetworkDhcpEntity {
  /** DHCP Relay Addresses. Max 3. */
  serverAddresses?: string[];
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "RELAY";
}

export function workloadNetworkDhcpRelaySerializer(item: WorkloadNetworkDhcpRelay): any {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    revision: item["revision"],
    serverAddresses: !item["serverAddresses"]
      ? item["serverAddresses"]
      : item["serverAddresses"].map((p: any) => {
          return p;
        }),
  };
}

export function workloadNetworkDhcpRelayDeserializer(item: any): WorkloadNetworkDhcpRelay {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    segments: !item["segments"]
      ? item["segments"]
      : item["segments"].map((p: any) => {
          return p;
        }),
    provisioningState: item["provisioningState"],
    revision: item["revision"],
    serverAddresses: !item["serverAddresses"]
      ? item["serverAddresses"]
      : item["serverAddresses"].map((p: any) => {
          return p;
        }),
  };
}

/** The response of a WorkloadNetworkDnsService list operation. */
export interface _WorkloadNetworkDnsServicesList {
  /** The WorkloadNetworkDnsService items on this page */
  value: WorkloadNetworkDnsService[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkDnsServicesListDeserializer(
  item: any,
): _WorkloadNetworkDnsServicesList {
  return {
    value: workloadNetworkDnsServiceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkDnsServiceArraySerializer(
  result: Array<WorkloadNetworkDnsService>,
): any[] {
  return result.map((item) => {
    return workloadNetworkDnsServiceSerializer(item);
  });
}

export function workloadNetworkDnsServiceArrayDeserializer(
  result: Array<WorkloadNetworkDnsService>,
): any[] {
  return result.map((item) => {
    return workloadNetworkDnsServiceDeserializer(item);
  });
}

/** NSX DNS Service */
export interface WorkloadNetworkDnsService extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsServiceProperties;
}

export function workloadNetworkDnsServiceSerializer(item: WorkloadNetworkDnsService): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDnsServicePropertiesSerializer(item["properties"]),
  };
}

export function workloadNetworkDnsServiceDeserializer(item: any): WorkloadNetworkDnsService {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDnsServicePropertiesDeserializer(item["properties"]),
  };
}

/** NSX DNS Service Properties */
export interface WorkloadNetworkDnsServiceProperties {
  /** Display name of the DNS Service. */
  displayName?: string;
  /** DNS service IP of the DNS Service. */
  dnsServiceIp?: string;
  /** Default DNS zone of the DNS Service. */
  defaultDnsZone?: string;
  /** FQDN zones of the DNS Service. */
  fqdnZones?: string[];
  /** DNS Service log level. */
  logLevel?: DnsServiceLogLevelEnum;
  /** DNS Service status. */
  readonly status?: DnsServiceStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkDnsServiceProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

export function workloadNetworkDnsServicePropertiesSerializer(
  item: WorkloadNetworkDnsServiceProperties,
): any {
  return {
    displayName: item["displayName"],
    dnsServiceIp: item["dnsServiceIp"],
    defaultDnsZone: item["defaultDnsZone"],
    fqdnZones: !item["fqdnZones"]
      ? item["fqdnZones"]
      : item["fqdnZones"].map((p: any) => {
          return p;
        }),
    logLevel: item["logLevel"],
    revision: item["revision"],
  };
}

export function workloadNetworkDnsServicePropertiesDeserializer(
  item: any,
): WorkloadNetworkDnsServiceProperties {
  return {
    displayName: item["displayName"],
    dnsServiceIp: item["dnsServiceIp"],
    defaultDnsZone: item["defaultDnsZone"],
    fqdnZones: !item["fqdnZones"]
      ? item["fqdnZones"]
      : item["fqdnZones"].map((p: any) => {
          return p;
        }),
    logLevel: item["logLevel"],
    status: item["status"],
    provisioningState: item["provisioningState"],
    revision: item["revision"],
  };
}

/** DNS service log level */
export enum KnownDnsServiceLogLevelEnum {
  /** is debug */
  Debug = "DEBUG",
  /** is info */
  Info = "INFO",
  /** is warning */
  Warning = "WARNING",
  /** is error */
  Error = "ERROR",
  /** is fatal */
  Fatal = "FATAL",
}

/**
 * DNS service log level \
 * {@link KnownDnsServiceLogLevelEnum} can be used interchangeably with DnsServiceLogLevelEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DEBUG**: is debug \
 * **INFO**: is info \
 * **WARNING**: is warning \
 * **ERROR**: is error \
 * **FATAL**: is fatal
 */
export type DnsServiceLogLevelEnum = string;

/** DNS service status */
export enum KnownDnsServiceStatusEnum {
  /** is success */
  Success = "SUCCESS",
  /** is failure */
  Failure = "FAILURE",
}

/**
 * DNS service status \
 * {@link KnownDnsServiceStatusEnum} can be used interchangeably with DnsServiceStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS**: is success \
 * **FAILURE**: is failure
 */
export type DnsServiceStatusEnum = string;

/** Workload Network DNS Service provisioning state */
export enum KnownWorkloadNetworkDnsServiceProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network DNS Service provisioning state \
 * {@link KnownWorkloadNetworkDnsServiceProvisioningState} can be used interchangeably with WorkloadNetworkDnsServiceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkDnsServiceProvisioningState = string;

/** The response of a WorkloadNetworkDnsZone list operation. */
export interface _WorkloadNetworkDnsZonesList {
  /** The WorkloadNetworkDnsZone items on this page */
  value: WorkloadNetworkDnsZone[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkDnsZonesListDeserializer(item: any): _WorkloadNetworkDnsZonesList {
  return {
    value: workloadNetworkDnsZoneArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkDnsZoneArraySerializer(
  result: Array<WorkloadNetworkDnsZone>,
): any[] {
  return result.map((item) => {
    return workloadNetworkDnsZoneSerializer(item);
  });
}

export function workloadNetworkDnsZoneArrayDeserializer(
  result: Array<WorkloadNetworkDnsZone>,
): any[] {
  return result.map((item) => {
    return workloadNetworkDnsZoneDeserializer(item);
  });
}

/** NSX DNS Zone */
export interface WorkloadNetworkDnsZone extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsZoneProperties;
}

export function workloadNetworkDnsZoneSerializer(item: WorkloadNetworkDnsZone): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDnsZonePropertiesSerializer(item["properties"]),
  };
}

export function workloadNetworkDnsZoneDeserializer(item: any): WorkloadNetworkDnsZone {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDnsZonePropertiesDeserializer(item["properties"]),
  };
}

/** NSX DNS Zone Properties */
export interface WorkloadNetworkDnsZoneProperties {
  /** Display name of the DNS Zone. */
  displayName?: string;
  /** Domain names of the DNS Zone. */
  domain?: string[];
  /** DNS Server IP array of the DNS Zone. */
  dnsServerIps?: string[];
  /** Source IP of the DNS Zone. */
  sourceIp?: string;
  /** Number of DNS Services using the DNS zone. */
  dnsServices?: number;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkDnsZoneProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

export function workloadNetworkDnsZonePropertiesSerializer(
  item: WorkloadNetworkDnsZoneProperties,
): any {
  return {
    displayName: item["displayName"],
    domain: !item["domain"]
      ? item["domain"]
      : item["domain"].map((p: any) => {
          return p;
        }),
    dnsServerIps: !item["dnsServerIps"]
      ? item["dnsServerIps"]
      : item["dnsServerIps"].map((p: any) => {
          return p;
        }),
    sourceIp: item["sourceIp"],
    dnsServices: item["dnsServices"],
    revision: item["revision"],
  };
}

export function workloadNetworkDnsZonePropertiesDeserializer(
  item: any,
): WorkloadNetworkDnsZoneProperties {
  return {
    displayName: item["displayName"],
    domain: !item["domain"]
      ? item["domain"]
      : item["domain"].map((p: any) => {
          return p;
        }),
    dnsServerIps: !item["dnsServerIps"]
      ? item["dnsServerIps"]
      : item["dnsServerIps"].map((p: any) => {
          return p;
        }),
    sourceIp: item["sourceIp"],
    dnsServices: item["dnsServices"],
    provisioningState: item["provisioningState"],
    revision: item["revision"],
  };
}

/** Workload Network DNS Zone provisioning state */
export enum KnownWorkloadNetworkDnsZoneProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network DNS Zone provisioning state \
 * {@link KnownWorkloadNetworkDnsZoneProvisioningState} can be used interchangeably with WorkloadNetworkDnsZoneProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkDnsZoneProvisioningState = string;

/** The response of a WorkloadNetworkGateway list operation. */
export interface _WorkloadNetworkGatewayList {
  /** The WorkloadNetworkGateway items on this page */
  value: WorkloadNetworkGateway[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkGatewayListDeserializer(item: any): _WorkloadNetworkGatewayList {
  return {
    value: workloadNetworkGatewayArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkGatewayArrayDeserializer(
  result: Array<WorkloadNetworkGateway>,
): any[] {
  return result.map((item) => {
    return workloadNetworkGatewayDeserializer(item);
  });
}

/** NSX Gateway. */
export interface WorkloadNetworkGateway extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkGatewayProperties;
}

export function workloadNetworkGatewayDeserializer(item: any): WorkloadNetworkGateway {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkGatewayPropertiesDeserializer(item["properties"]),
  };
}

/** Properties of a NSX Gateway. */
export interface WorkloadNetworkGatewayProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
  /** Display name of the DHCP entity. */
  displayName?: string;
  /** NSX Gateway Path. */
  readonly path?: string;
}

export function workloadNetworkGatewayPropertiesDeserializer(
  item: any,
): WorkloadNetworkGatewayProperties {
  return {
    provisioningState: item["provisioningState"],
    displayName: item["displayName"],
    path: item["path"],
  };
}

/** The response of a WorkloadNetworkPortMirroring list operation. */
export interface _WorkloadNetworkPortMirroringList {
  /** The WorkloadNetworkPortMirroring items on this page */
  value: WorkloadNetworkPortMirroring[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkPortMirroringListDeserializer(
  item: any,
): _WorkloadNetworkPortMirroringList {
  return {
    value: workloadNetworkPortMirroringArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkPortMirroringArraySerializer(
  result: Array<WorkloadNetworkPortMirroring>,
): any[] {
  return result.map((item) => {
    return workloadNetworkPortMirroringSerializer(item);
  });
}

export function workloadNetworkPortMirroringArrayDeserializer(
  result: Array<WorkloadNetworkPortMirroring>,
): any[] {
  return result.map((item) => {
    return workloadNetworkPortMirroringDeserializer(item);
  });
}

/** NSX Port Mirroring */
export interface WorkloadNetworkPortMirroring extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPortMirroringProperties;
}

export function workloadNetworkPortMirroringSerializer(item: WorkloadNetworkPortMirroring): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkPortMirroringPropertiesSerializer(item["properties"]),
  };
}

export function workloadNetworkPortMirroringDeserializer(item: any): WorkloadNetworkPortMirroring {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkPortMirroringPropertiesDeserializer(item["properties"]),
  };
}

/** NSX Port Mirroring Properties */
export interface WorkloadNetworkPortMirroringProperties {
  /** Display name of the port mirroring profile. */
  displayName?: string;
  /** Direction of port mirroring profile. */
  direction?: PortMirroringDirectionEnum;
  /** Source VM Group. */
  source?: string;
  /** Destination VM Group. */
  destination?: string;
  /** Port Mirroring Status. */
  readonly status?: PortMirroringStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkPortMirroringProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

export function workloadNetworkPortMirroringPropertiesSerializer(
  item: WorkloadNetworkPortMirroringProperties,
): any {
  return {
    displayName: item["displayName"],
    direction: item["direction"],
    source: item["source"],
    destination: item["destination"],
    revision: item["revision"],
  };
}

export function workloadNetworkPortMirroringPropertiesDeserializer(
  item: any,
): WorkloadNetworkPortMirroringProperties {
  return {
    displayName: item["displayName"],
    direction: item["direction"],
    source: item["source"],
    destination: item["destination"],
    status: item["status"],
    provisioningState: item["provisioningState"],
    revision: item["revision"],
  };
}

/** Port Mirroring Direction */
export enum KnownPortMirroringDirectionEnum {
  /** is ingress */
  Ingress = "INGRESS",
  /** is egress */
  Egress = "EGRESS",
  /** is bidirectional */
  Bidirectional = "BIDIRECTIONAL",
}

/**
 * Port Mirroring Direction \
 * {@link KnownPortMirroringDirectionEnum} can be used interchangeably with PortMirroringDirectionEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **INGRESS**: is ingress \
 * **EGRESS**: is egress \
 * **BIDIRECTIONAL**: is bidirectional
 */
export type PortMirroringDirectionEnum = string;

/** Port Mirroring status */
export enum KnownPortMirroringStatusEnum {
  /** is success */
  Success = "SUCCESS",
  /** is failure */
  Failure = "FAILURE",
}

/**
 * Port Mirroring status \
 * {@link KnownPortMirroringStatusEnum} can be used interchangeably with PortMirroringStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS**: is success \
 * **FAILURE**: is failure
 */
export type PortMirroringStatusEnum = string;

/** Workload Network Port Mirroring provisioning state */
export enum KnownWorkloadNetworkPortMirroringProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network Port Mirroring provisioning state \
 * {@link KnownWorkloadNetworkPortMirroringProvisioningState} can be used interchangeably with WorkloadNetworkPortMirroringProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkPortMirroringProvisioningState = string;

/** The response of a WorkloadNetworkPublicIP list operation. */
export interface _WorkloadNetworkPublicIPsList {
  /** The WorkloadNetworkPublicIP items on this page */
  value: WorkloadNetworkPublicIP[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkPublicIPsListDeserializer(
  item: any,
): _WorkloadNetworkPublicIPsList {
  return {
    value: workloadNetworkPublicIPArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkPublicIPArraySerializer(
  result: Array<WorkloadNetworkPublicIP>,
): any[] {
  return result.map((item) => {
    return workloadNetworkPublicIPSerializer(item);
  });
}

export function workloadNetworkPublicIPArrayDeserializer(
  result: Array<WorkloadNetworkPublicIP>,
): any[] {
  return result.map((item) => {
    return workloadNetworkPublicIPDeserializer(item);
  });
}

/** NSX Public IP Block */
export interface WorkloadNetworkPublicIP extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPublicIPProperties;
}

export function workloadNetworkPublicIPSerializer(item: WorkloadNetworkPublicIP): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkPublicIPPropertiesSerializer(item["properties"]),
  };
}

export function workloadNetworkPublicIPDeserializer(item: any): WorkloadNetworkPublicIP {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkPublicIPPropertiesDeserializer(item["properties"]),
  };
}

/** NSX Public IP Block Properties */
export interface WorkloadNetworkPublicIPProperties {
  /** Display name of the Public IP Block. */
  displayName?: string;
  /** Number of Public IPs requested. */
  numberOfPublicIPs?: number;
  /** CIDR Block of the Public IP Block. */
  readonly publicIPBlock?: string;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkPublicIPProvisioningState;
}

export function workloadNetworkPublicIPPropertiesSerializer(
  item: WorkloadNetworkPublicIPProperties,
): any {
  return {
    displayName: item["displayName"],
    numberOfPublicIPs: item["numberOfPublicIPs"],
  };
}

export function workloadNetworkPublicIPPropertiesDeserializer(
  item: any,
): WorkloadNetworkPublicIPProperties {
  return {
    displayName: item["displayName"],
    numberOfPublicIPs: item["numberOfPublicIPs"],
    publicIPBlock: item["publicIPBlock"],
    provisioningState: item["provisioningState"],
  };
}

/** Workload Network Public IP provisioning state */
export enum KnownWorkloadNetworkPublicIPProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network Public IP provisioning state \
 * {@link KnownWorkloadNetworkPublicIPProvisioningState} can be used interchangeably with WorkloadNetworkPublicIPProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkPublicIPProvisioningState = string;

/** The response of a WorkloadNetworkSegment list operation. */
export interface _WorkloadNetworkSegmentsList {
  /** The WorkloadNetworkSegment items on this page */
  value: WorkloadNetworkSegment[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkSegmentsListDeserializer(item: any): _WorkloadNetworkSegmentsList {
  return {
    value: workloadNetworkSegmentArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkSegmentArraySerializer(
  result: Array<WorkloadNetworkSegment>,
): any[] {
  return result.map((item) => {
    return workloadNetworkSegmentSerializer(item);
  });
}

export function workloadNetworkSegmentArrayDeserializer(
  result: Array<WorkloadNetworkSegment>,
): any[] {
  return result.map((item) => {
    return workloadNetworkSegmentDeserializer(item);
  });
}

/** NSX Segment */
export interface WorkloadNetworkSegment extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkSegmentProperties;
}

export function workloadNetworkSegmentSerializer(item: WorkloadNetworkSegment): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkSegmentPropertiesSerializer(item["properties"]),
  };
}

export function workloadNetworkSegmentDeserializer(item: any): WorkloadNetworkSegment {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkSegmentPropertiesDeserializer(item["properties"]),
  };
}

/** NSX Segment Properties */
export interface WorkloadNetworkSegmentProperties {
  /** Display name of the segment. */
  displayName?: string;
  /** Gateway which to connect segment to. */
  connectedGateway?: string;
  /** Subnet which to connect segment to. */
  subnet?: WorkloadNetworkSegmentSubnet;
  /** Port Vif which segment is associated with. */
  readonly portVif?: WorkloadNetworkSegmentPortVif[];
  /** Segment status. */
  readonly status?: SegmentStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkSegmentProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

export function workloadNetworkSegmentPropertiesSerializer(
  item: WorkloadNetworkSegmentProperties,
): any {
  return {
    displayName: item["displayName"],
    connectedGateway: item["connectedGateway"],
    subnet: !item["subnet"]
      ? item["subnet"]
      : workloadNetworkSegmentSubnetSerializer(item["subnet"]),
    revision: item["revision"],
  };
}

export function workloadNetworkSegmentPropertiesDeserializer(
  item: any,
): WorkloadNetworkSegmentProperties {
  return {
    displayName: item["displayName"],
    connectedGateway: item["connectedGateway"],
    subnet: !item["subnet"]
      ? item["subnet"]
      : workloadNetworkSegmentSubnetDeserializer(item["subnet"]),
    portVif: !item["portVif"]
      ? item["portVif"]
      : workloadNetworkSegmentPortVifArrayDeserializer(item["portVif"]),
    status: item["status"],
    provisioningState: item["provisioningState"],
    revision: item["revision"],
  };
}

/** Subnet configuration for segment */
export interface WorkloadNetworkSegmentSubnet {
  /** DHCP Range assigned for subnet. */
  dhcpRanges?: string[];
  /** Gateway address. */
  gatewayAddress?: string;
}

export function workloadNetworkSegmentSubnetSerializer(item: WorkloadNetworkSegmentSubnet): any {
  return {
    dhcpRanges: !item["dhcpRanges"]
      ? item["dhcpRanges"]
      : item["dhcpRanges"].map((p: any) => {
          return p;
        }),
    gatewayAddress: item["gatewayAddress"],
  };
}

export function workloadNetworkSegmentSubnetDeserializer(item: any): WorkloadNetworkSegmentSubnet {
  return {
    dhcpRanges: !item["dhcpRanges"]
      ? item["dhcpRanges"]
      : item["dhcpRanges"].map((p: any) => {
          return p;
        }),
    gatewayAddress: item["gatewayAddress"],
  };
}

export function workloadNetworkSegmentPortVifArrayDeserializer(
  result: Array<WorkloadNetworkSegmentPortVif>,
): any[] {
  return result.map((item) => {
    return workloadNetworkSegmentPortVifDeserializer(item);
  });
}

/** Ports and any VIF attached to segment. */
export interface WorkloadNetworkSegmentPortVif {
  /** Name of port or VIF attached to segment. */
  portName?: string;
}

export function workloadNetworkSegmentPortVifDeserializer(
  item: any,
): WorkloadNetworkSegmentPortVif {
  return {
    portName: item["portName"],
  };
}

/** Segment status */
export enum KnownSegmentStatusEnum {
  /** is success */
  Success = "SUCCESS",
  /** is failure */
  Failure = "FAILURE",
}

/**
 * Segment status \
 * {@link KnownSegmentStatusEnum} can be used interchangeably with SegmentStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS**: is success \
 * **FAILURE**: is failure
 */
export type SegmentStatusEnum = string;

/** Workload Network Segment provisioning state */
export enum KnownWorkloadNetworkSegmentProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network Segment provisioning state \
 * {@link KnownWorkloadNetworkSegmentProvisioningState} can be used interchangeably with WorkloadNetworkSegmentProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkSegmentProvisioningState = string;

/** The response of a WorkloadNetworkVirtualMachine list operation. */
export interface _WorkloadNetworkVirtualMachinesList {
  /** The WorkloadNetworkVirtualMachine items on this page */
  value: WorkloadNetworkVirtualMachine[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkVirtualMachinesListDeserializer(
  item: any,
): _WorkloadNetworkVirtualMachinesList {
  return {
    value: workloadNetworkVirtualMachineArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkVirtualMachineArrayDeserializer(
  result: Array<WorkloadNetworkVirtualMachine>,
): any[] {
  return result.map((item) => {
    return workloadNetworkVirtualMachineDeserializer(item);
  });
}

/** NSX Virtual Machine */
export interface WorkloadNetworkVirtualMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVirtualMachineProperties;
}

export function workloadNetworkVirtualMachineDeserializer(
  item: any,
): WorkloadNetworkVirtualMachine {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkVirtualMachinePropertiesDeserializer(item["properties"]),
  };
}

/** NSX Virtual Machine Properties */
export interface WorkloadNetworkVirtualMachineProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
  /** Display name of the VM. */
  displayName?: string;
  /** Virtual machine type. */
  readonly vmType?: VMTypeEnum;
}

export function workloadNetworkVirtualMachinePropertiesDeserializer(
  item: any,
): WorkloadNetworkVirtualMachineProperties {
  return {
    provisioningState: item["provisioningState"],
    displayName: item["displayName"],
    vmType: item["vmType"],
  };
}

/** VM type */
export enum KnownVMTypeEnum {
  /** is regular */
  Regular = "REGULAR",
  /** is edge */
  Edge = "EDGE",
  /** is service */
  Service = "SERVICE",
}

/**
 * VM type \
 * {@link KnownVMTypeEnum} can be used interchangeably with VMTypeEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **REGULAR**: is regular \
 * **EDGE**: is edge \
 * **SERVICE**: is service
 */
export type VMTypeEnum = string;

/** The response of a WorkloadNetworkVMGroup list operation. */
export interface _WorkloadNetworkVMGroupsList {
  /** The WorkloadNetworkVMGroup items on this page */
  value: WorkloadNetworkVMGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkVMGroupsListDeserializer(item: any): _WorkloadNetworkVMGroupsList {
  return {
    value: workloadNetworkVMGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkVMGroupArraySerializer(
  result: Array<WorkloadNetworkVMGroup>,
): any[] {
  return result.map((item) => {
    return workloadNetworkVMGroupSerializer(item);
  });
}

export function workloadNetworkVMGroupArrayDeserializer(
  result: Array<WorkloadNetworkVMGroup>,
): any[] {
  return result.map((item) => {
    return workloadNetworkVMGroupDeserializer(item);
  });
}

/** NSX VM Group */
export interface WorkloadNetworkVMGroup extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVMGroupProperties;
}

export function workloadNetworkVMGroupSerializer(item: WorkloadNetworkVMGroup): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkVMGroupPropertiesSerializer(item["properties"]),
  };
}

export function workloadNetworkVMGroupDeserializer(item: any): WorkloadNetworkVMGroup {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkVMGroupPropertiesDeserializer(item["properties"]),
  };
}

/** NSX VM Group Properties */
export interface WorkloadNetworkVMGroupProperties {
  /** Display name of the VM group. */
  displayName?: string;
  /** Virtual machine members of this group. */
  members?: string[];
  /** VM Group status. */
  readonly status?: VMGroupStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkVMGroupProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

export function workloadNetworkVMGroupPropertiesSerializer(
  item: WorkloadNetworkVMGroupProperties,
): any {
  return {
    displayName: item["displayName"],
    members: !item["members"]
      ? item["members"]
      : item["members"].map((p: any) => {
          return p;
        }),
    revision: item["revision"],
  };
}

export function workloadNetworkVMGroupPropertiesDeserializer(
  item: any,
): WorkloadNetworkVMGroupProperties {
  return {
    displayName: item["displayName"],
    members: !item["members"]
      ? item["members"]
      : item["members"].map((p: any) => {
          return p;
        }),
    status: item["status"],
    provisioningState: item["provisioningState"],
    revision: item["revision"],
  };
}

/** VM group status */
export enum KnownVMGroupStatusEnum {
  /** is success */
  Success = "SUCCESS",
  /** is failure */
  Failure = "FAILURE",
}

/**
 * VM group status \
 * {@link KnownVMGroupStatusEnum} can be used interchangeably with VMGroupStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS**: is success \
 * **FAILURE**: is failure
 */
export type VMGroupStatusEnum = string;

/** Workload Network VM Group provisioning state */
export enum KnownWorkloadNetworkVMGroupProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network VM Group provisioning state \
 * {@link KnownWorkloadNetworkVMGroupProvisioningState} can be used interchangeably with WorkloadNetworkVMGroupProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkVMGroupProvisioningState = string;

/** Azure VMware Solution API versions. */
export enum KnownVersions {
  /** Azure VMware Solution API version 2023-09-01. */
  V20230901 = "2023-09-01",
  /** Azure VMware Solution API version 2024-09-01. */
  V20240901 = "2024-09-01",
}
