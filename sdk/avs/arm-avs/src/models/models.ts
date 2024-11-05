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

/** Workload Network */
export interface WorkloadNetwork extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkProperties;
}

/** The properties of a workload network */
export interface WorkloadNetworkProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
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

/** The response of a WorkloadNetwork list operation. */
export interface _WorkloadNetworkList {
  /** The WorkloadNetwork items on this page */
  value: WorkloadNetwork[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a WorkloadNetworkVMGroup list operation. */
export interface _WorkloadNetworkVMGroupsList {
  /** The WorkloadNetworkVMGroup items on this page */
  value: WorkloadNetworkVMGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX VM Group */
export interface WorkloadNetworkVMGroup extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVMGroupProperties;
}

export function workloadNetworkVMGroupSerializer(
  item: WorkloadNetworkVMGroup,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : workloadNetworkVMGroupPropertiesSerializer(item.properties),
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
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    members: item["members"],
    revision: item["revision"],
  };
}

/** Known values of {@link VMGroupStatusEnum} that the service accepts. */
export enum KnownVMGroupStatusEnum {
  /** SUCCESS */
  SUCCESS = "SUCCESS",
  /** FAILURE */
  FAILURE = "FAILURE",
}

/**
 * VM group status \
 * {@link KnownVMGroupStatusEnum} can be used interchangeably with VMGroupStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS** \
 * **FAILURE**
 */
export type VMGroupStatusEnum = string;

/** The response of a WorkloadNetworkVirtualMachine list operation. */
export interface _WorkloadNetworkVirtualMachinesList {
  /** The WorkloadNetworkVirtualMachine items on this page */
  value: WorkloadNetworkVirtualMachine[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Virtual Machine */
export interface WorkloadNetworkVirtualMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVirtualMachineProperties;
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

/** Known values of {@link VMTypeEnum} that the service accepts. */
export enum KnownVMTypeEnum {
  /** REGULAR */
  REGULAR = "REGULAR",
  /** EDGE */
  EDGE = "EDGE",
  /** SERVICE */
  SERVICE = "SERVICE",
}

/**
 * VM type \
 * {@link KnownVMTypeEnum} can be used interchangeably with VMTypeEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **REGULAR** \
 * **EDGE** \
 * **SERVICE**
 */
export type VMTypeEnum = string;

/** The response of a WorkloadNetworkSegment list operation. */
export interface _WorkloadNetworkSegmentsList {
  /** The WorkloadNetworkSegment items on this page */
  value: WorkloadNetworkSegment[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Segment */
export interface WorkloadNetworkSegment extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkSegmentProperties;
}

export function workloadNetworkSegmentSerializer(
  item: WorkloadNetworkSegment,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : workloadNetworkSegmentPropertiesSerializer(item.properties),
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
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    connectedGateway: item["connectedGateway"],
    subnet: !item.subnet
      ? item.subnet
      : workloadNetworkSegmentSubnetSerializer(item.subnet),
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

export function workloadNetworkSegmentSubnetSerializer(
  item: WorkloadNetworkSegmentSubnet,
): Record<string, unknown> {
  return {
    dhcpRanges: item["dhcpRanges"],
    gatewayAddress: item["gatewayAddress"],
  };
}

/** Ports and any VIF attached to segment. */
export interface WorkloadNetworkSegmentPortVif {
  /** Name of port or VIF attached to segment. */
  portName?: string;
}

/** Known values of {@link SegmentStatusEnum} that the service accepts. */
export enum KnownSegmentStatusEnum {
  /** SUCCESS */
  SUCCESS = "SUCCESS",
  /** FAILURE */
  FAILURE = "FAILURE",
}

/**
 * Segment status \
 * {@link KnownSegmentStatusEnum} can be used interchangeably with SegmentStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS** \
 * **FAILURE**
 */
export type SegmentStatusEnum = string;

/** The response of a WorkloadNetworkPublicIP list operation. */
export interface _WorkloadNetworkPublicIPsList {
  /** The WorkloadNetworkPublicIP items on this page */
  value: WorkloadNetworkPublicIP[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Public IP Block */
export interface WorkloadNetworkPublicIP extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPublicIPProperties;
}

export function workloadNetworkPublicIPSerializer(
  item: WorkloadNetworkPublicIP,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : workloadNetworkPublicIPPropertiesSerializer(item.properties),
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
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    numberOfPublicIPs: item["numberOfPublicIPs"],
  };
}

/** The response of a WorkloadNetworkPortMirroring list operation. */
export interface _WorkloadNetworkPortMirroringList {
  /** The WorkloadNetworkPortMirroring items on this page */
  value: WorkloadNetworkPortMirroring[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Port Mirroring */
export interface WorkloadNetworkPortMirroring extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPortMirroringProperties;
}

export function workloadNetworkPortMirroringSerializer(
  item: WorkloadNetworkPortMirroring,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : workloadNetworkPortMirroringPropertiesSerializer(item.properties),
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
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    direction: item["direction"],
    source: item["source"],
    destination: item["destination"],
    revision: item["revision"],
  };
}

/** Known values of {@link PortMirroringDirectionEnum} that the service accepts. */
export enum KnownPortMirroringDirectionEnum {
  /** INGRESS */
  INGRESS = "INGRESS",
  /** EGRESS */
  EGRESS = "EGRESS",
  /** BIDIRECTIONAL */
  BIDIRECTIONAL = "BIDIRECTIONAL",
}

/**
 * Port Mirroring Direction \
 * {@link KnownPortMirroringDirectionEnum} can be used interchangeably with PortMirroringDirectionEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **INGRESS** \
 * **EGRESS** \
 * **BIDIRECTIONAL**
 */
export type PortMirroringDirectionEnum = string;

/** Known values of {@link PortMirroringStatusEnum} that the service accepts. */
export enum KnownPortMirroringStatusEnum {
  /** SUCCESS */
  SUCCESS = "SUCCESS",
  /** FAILURE */
  FAILURE = "FAILURE",
}

/**
 * Port Mirroring status \
 * {@link KnownPortMirroringStatusEnum} can be used interchangeably with PortMirroringStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS** \
 * **FAILURE**
 */
export type PortMirroringStatusEnum = string;

/** The response of a WorkloadNetworkGateway list operation. */
export interface _WorkloadNetworkGatewayList {
  /** The WorkloadNetworkGateway items on this page */
  value: WorkloadNetworkGateway[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Gateway. */
export interface WorkloadNetworkGateway extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkGatewayProperties;
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

/** The response of a WorkloadNetworkDnsZone list operation. */
export interface _WorkloadNetworkDnsZonesList {
  /** The WorkloadNetworkDnsZone items on this page */
  value: WorkloadNetworkDnsZone[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX DNS Zone */
export interface WorkloadNetworkDnsZone extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsZoneProperties;
}

export function workloadNetworkDnsZoneSerializer(
  item: WorkloadNetworkDnsZone,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : workloadNetworkDnsZonePropertiesSerializer(item.properties),
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
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    domain: item["domain"],
    dnsServerIps: item["dnsServerIps"],
    sourceIp: item["sourceIp"],
    dnsServices: item["dnsServices"],
    revision: item["revision"],
  };
}

/** The response of a WorkloadNetworkDnsService list operation. */
export interface _WorkloadNetworkDnsServicesList {
  /** The WorkloadNetworkDnsService items on this page */
  value: WorkloadNetworkDnsService[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX DNS Service */
export interface WorkloadNetworkDnsService extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsServiceProperties;
}

export function workloadNetworkDnsServiceSerializer(
  item: WorkloadNetworkDnsService,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : workloadNetworkDnsServicePropertiesSerializer(item.properties),
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
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    dnsServiceIp: item["dnsServiceIp"],
    defaultDnsZone: item["defaultDnsZone"],
    fqdnZones: item["fqdnZones"],
    logLevel: item["logLevel"],
    revision: item["revision"],
  };
}

/** Known values of {@link DnsServiceLogLevelEnum} that the service accepts. */
export enum KnownDnsServiceLogLevelEnum {
  /** DEBUG */
  DEBUG = "DEBUG",
  /** INFO */
  INFO = "INFO",
  /** WARNING */
  WARNING = "WARNING",
  /** ERROR */
  ERROR = "ERROR",
  /** FATAL */
  FATAL = "FATAL",
}

/**
 * DNS service log level \
 * {@link KnownDnsServiceLogLevelEnum} can be used interchangeably with DnsServiceLogLevelEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DEBUG** \
 * **INFO** \
 * **WARNING** \
 * **ERROR** \
 * **FATAL**
 */
export type DnsServiceLogLevelEnum = string;

/** Known values of {@link DnsServiceStatusEnum} that the service accepts. */
export enum KnownDnsServiceStatusEnum {
  /** SUCCESS */
  SUCCESS = "SUCCESS",
  /** FAILURE */
  FAILURE = "FAILURE",
}

/**
 * DNS service status \
 * {@link KnownDnsServiceStatusEnum} can be used interchangeably with DnsServiceStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SUCCESS** \
 * **FAILURE**
 */
export type DnsServiceStatusEnum = string;

/** The response of a WorkloadNetworkDhcp list operation. */
export interface _WorkloadNetworkDhcpList {
  /** The WorkloadNetworkDhcp items on this page */
  value: WorkloadNetworkDhcp[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX DHCP */
export interface WorkloadNetworkDhcp extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDhcpEntityUnion;
}

export function workloadNetworkDhcpSerializer(
  item: WorkloadNetworkDhcp,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : workloadNetworkDhcpEntityUnionSerializer(item.properties),
  };
}

/**
 * Base class for WorkloadNetworkDhcpServer and WorkloadNetworkDhcpRelay to
 * inherit from
 */
export interface WorkloadNetworkDhcpEntity {
  /** the discriminator possible values: SERVER, RELAY */
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

export function workloadNetworkDhcpEntityUnionSerializer(
  item: WorkloadNetworkDhcpEntityUnion,
) {
  switch (item.dhcpType) {
    case "SERVER":
      return workloadNetworkDhcpServerSerializer(
        item as WorkloadNetworkDhcpServer,
      );

    case "RELAY":
      return workloadNetworkDhcpRelaySerializer(
        item as WorkloadNetworkDhcpRelay,
      );

    default:
      return workloadNetworkDhcpEntitySerializer(item);
  }
}

export function workloadNetworkDhcpEntitySerializer(
  item: WorkloadNetworkDhcpEntityUnion,
): Record<string, unknown> {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    revision: item["revision"],
  };
}

/** NSX DHCP Server */
export interface WorkloadNetworkDhcpServer extends WorkloadNetworkDhcpEntity {
  /** DHCP Server Address. */
  serverAddress?: string;
  /** DHCP Server Lease Time. */
  leaseTime?: number;
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "SERVER";
}

export function workloadNetworkDhcpServerSerializer(
  item: WorkloadNetworkDhcpServer,
): Record<string, unknown> {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
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

export function workloadNetworkDhcpRelaySerializer(
  item: WorkloadNetworkDhcpRelay,
): Record<string, unknown> {
  return {
    dhcpType: item["dhcpType"],
    displayName: item["displayName"],
    revision: item["revision"],
    serverAddresses: item["serverAddresses"],
  };
}

/** Known values of {@link DhcpTypeEnum} that the service accepts. */
export enum KnownDhcpTypeEnum {
  /** SERVER */
  SERVER = "SERVER",
  /** RELAY */
  RELAY = "RELAY",
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

/** The response of a VirtualMachine list operation. */
export interface _VirtualMachinesList {
  /** The VirtualMachine items on this page */
  value: VirtualMachine[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Virtual Machine */
export interface VirtualMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineProperties;
}

/** Virtual Machine Properties */
export interface VirtualMachineProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: VirtualMachineProvisioningState;
  /** Display name of the VM. */
  readonly displayName?: string;
  /** Virtual machine managed object reference id */
  readonly moRefId?: string;
  /** Path to virtual machine's folder starting from datacenter virtual machine folder */
  readonly folderPath?: string;
  /** Whether VM DRS-driven movement is restricted (enabled) or not (disabled) */
  readonly restrictMovement?: VirtualMachineRestrictMovementState;
}

/** Known values of {@link VirtualMachineRestrictMovementState} that the service accepts. */
export enum KnownVirtualMachineRestrictMovementState {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Virtual Machine Restrict Movement state \
 * {@link KnownVirtualMachineRestrictMovementState} can be used interchangeably with VirtualMachineRestrictMovementState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type VirtualMachineRestrictMovementState = string;

/** Set VM DRS-driven movement to restricted (enabled) or not (disabled) */
export interface VirtualMachineRestrictMovement {
  /** Whether VM DRS-driven movement is restricted (enabled) or not (disabled) */
  restrictMovement?: VirtualMachineRestrictMovementState;
}

export function virtualMachineRestrictMovementSerializer(
  item: VirtualMachineRestrictMovement,
): Record<string, unknown> {
  return {
    restrictMovement: item["restrictMovement"],
  };
}

/** The response of a ScriptPackage list operation. */
export interface _ScriptPackagesList {
  /** The ScriptPackage items on this page */
  value: ScriptPackage[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Script Package resources available for execution */
export interface ScriptPackage extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptPackageProperties;
}

/** Properties of a Script Package subresource */
export interface ScriptPackageProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: ScriptPackageProvisioningState;
  /** User friendly description of the package */
  readonly description?: string;
  /** Module version */
  readonly version?: string;
  /** Company that created and supports the package */
  readonly company?: string;
  /** Link to support by the package vendor */
  readonly uri?: string;
}

/** The response of a ScriptExecution list operation. */
export interface _ScriptExecutionsList {
  /** The ScriptExecution items on this page */
  value: ScriptExecution[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An instance of a script executed by a user - custom or AVS */
export interface ScriptExecution extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptExecutionProperties;
}

export function scriptExecutionSerializer(
  item: ScriptExecution,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : scriptExecutionPropertiesSerializer(item.properties),
  };
}

/** Properties of a user-invoked script */
export interface ScriptExecutionProperties {
  /** A reference to the script cmdlet resource if user is running a AVS script */
  scriptCmdletId?: string;
  /** Parameters the script will accept */
  parameters?: ScriptExecutionParameterUnion[];
  /**
   * Parameters that will be hidden/not visible to ARM, such as passwords and
   * credentials
   */
  hiddenParameters?: ScriptExecutionParameterUnion[];
  /**
   * Error message if the script was able to run, but if the script itself had
   * errors or powershell threw an exception
   */
  failureReason?: string;
  /** Time limit for execution */
  timeout: string;
  /** Time to live for the resource. If not provided, will be available for 60 days */
  retention?: string;
  /** Time the script execution was submitted */
  readonly submittedAt?: Date;
  /** Time the script execution was started */
  readonly startedAt?: Date;
  /** Time the script execution was finished */
  readonly finishedAt?: Date;
  /** The state of the script execution resource */
  readonly provisioningState?: ScriptExecutionProvisioningState;
  /** Standard output stream from the powershell execution */
  output?: string[];
  /** User-defined dictionary. */
  namedOutputs?: Record<string, Record<string, any>>;
  /** Standard information out stream from the powershell execution */
  readonly information?: string[];
  /** Standard warning out stream from the powershell execution */
  readonly warnings?: string[];
  /** Standard error output stream from the powershell execution */
  readonly errors?: string[];
}

export function scriptExecutionPropertiesSerializer(
  item: ScriptExecutionProperties,
): Record<string, unknown> {
  return {
    scriptCmdletId: item["scriptCmdletId"],
    parameters: item["parameters"],
    hiddenParameters: item["hiddenParameters"],
    failureReason: item["failureReason"],
    timeout: item["timeout"],
    retention: item["retention"],
    output: item["output"],
    namedOutputs: !item.namedOutputs
      ? item.namedOutputs
      : (serializeRecord(item.namedOutputs as any) as any),
  };
}

/** The arguments passed in to the execution */
export interface ScriptExecutionParameter {
  /** the discriminator possible values: SecureValue, Value, Credential */
  type: ScriptExecutionParameterType;
  /** The parameter name */
  name: string;
}

export function scriptExecutionParameterUnionSerializer(
  item: ScriptExecutionParameterUnion,
) {
  switch (item.type) {
    case "SecureValue":
      return scriptSecureStringExecutionParameterSerializer(
        item as ScriptSecureStringExecutionParameter,
      );

    case "Value":
      return scriptStringExecutionParameterSerializer(
        item as ScriptStringExecutionParameter,
      );

    case "Credential":
      return pSCredentialExecutionParameterSerializer(
        item as PSCredentialExecutionParameter,
      );

    default:
      return scriptExecutionParameterSerializer(item);
  }
}

export function scriptExecutionParameterSerializer(
  item: ScriptExecutionParameterUnion,
): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
  };
}

/** a plain text value execution parameter */
export interface ScriptSecureStringExecutionParameter
  extends ScriptExecutionParameter {
  /** A secure value for the passed parameter, not to be stored in logs */
  secureValue?: string;
  /** The type of execution parameter */
  type: "SecureValue";
}

export function scriptSecureStringExecutionParameterSerializer(
  item: ScriptSecureStringExecutionParameter,
): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
    secureValue: item["secureValue"],
  };
}

/** a plain text value execution parameter */
export interface ScriptStringExecutionParameter
  extends ScriptExecutionParameter {
  /** The value for the passed parameter */
  value?: string;
  /** The type of execution parameter */
  type: "Value";
}

export function scriptStringExecutionParameterSerializer(
  item: ScriptStringExecutionParameter,
): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
    value: item["value"],
  };
}

/** a powershell credential object */
export interface PSCredentialExecutionParameter
  extends ScriptExecutionParameter {
  /** username for login */
  username?: string;
  /** password for login */
  password?: string;
  /** The type of execution parameter */
  type: "Credential";
}

export function pSCredentialExecutionParameterSerializer(
  item: PSCredentialExecutionParameter,
): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
    username: item["username"],
    password: item["password"],
  };
}

/** Known values of {@link ScriptExecutionParameterType} that the service accepts. */
export enum KnownScriptExecutionParameterType {
  /** Value */
  Value = "Value",
  /** SecureValue */
  SecureValue = "SecureValue",
  /** Credential */
  Credential = "Credential",
}

/**
 * script execution parameter type \
 * {@link KnownScriptExecutionParameterType} can be used interchangeably with ScriptExecutionParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Value** \
 * **SecureValue** \
 * **Credential**
 */
export type ScriptExecutionParameterType = string;

/** Known values of {@link ScriptOutputStreamType} that the service accepts. */
export enum KnownScriptOutputStreamType {
  /** Information */
  Information = "Information",
  /** Warning */
  Warning = "Warning",
  /** Output */
  Output = "Output",
  /** Error */
  Error = "Error",
}

/**
 * Script Output Stream type \
 * {@link KnownScriptOutputStreamType} can be used interchangeably with ScriptOutputStreamType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Information** \
 * **Warning** \
 * **Output** \
 * **Error**
 */
export type ScriptOutputStreamType = string;

/** The response of a ScriptCmdlet list operation. */
export interface _ScriptCmdletsList {
  /** The ScriptCmdlet items on this page */
  value: ScriptCmdlet[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A cmdlet available for script execution */
export interface ScriptCmdlet extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptCmdletProperties;
}

/** Properties of a pre-canned script */
export interface ScriptCmdletProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: ScriptCmdletProvisioningState;
  /** Description of the scripts functionality */
  readonly description?: string;
  /** Recommended time limit for execution */
  readonly timeout?: string;
  /** Specifies whether a script cmdlet is intended to be invoked only through automation or visible to customers */
  readonly audience?: ScriptCmdletAudience;
  /** Parameters the script will accept */
  readonly parameters?: ScriptParameter[];
}

/** Known values of {@link ScriptCmdletAudience} that the service accepts. */
export enum KnownScriptCmdletAudience {
  /** Automation */
  Automation = "Automation",
  /** Any */
  Any = "Any",
}

/**
 * Specifies whether a script cmdlet is intended to be invoked only through automation or visible to customers \
 * {@link KnownScriptCmdletAudience} can be used interchangeably with ScriptCmdletAudience,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Automation** \
 * **Any**
 */
export type ScriptCmdletAudience = string;

/** An parameter that the script will accept */
export interface ScriptParameter {
  /**
   * The type of parameter the script is expecting. psCredential is a
   * PSCredentialObject
   */
  readonly type?: ScriptParameterTypes;
  /** The parameter name that the script will expect a parameter value for */
  name?: string;
  /** User friendly description of the parameter */
  readonly description?: string;
  /**
   * Should this parameter be visible to arm and passed in the parameters argument
   * when executing
   */
  readonly visibility?: VisibilityParameterEnum;
  /** Is this parameter required or optional */
  readonly optional?: OptionalParamEnum;
}

/** Known values of {@link ScriptParameterTypes} that the service accepts. */
export enum KnownScriptParameterTypes {
  /** String */
  String = "String",
  /** SecureString */
  SecureString = "SecureString",
  /** Credential */
  Credential = "Credential",
  /** Int */
  Int = "Int",
  /** Bool */
  Bool = "Bool",
  /** Float */
  Float = "Float",
}

/**
 * Script Parameter types \
 * {@link KnownScriptParameterTypes} can be used interchangeably with ScriptParameterTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **String** \
 * **SecureString** \
 * **Credential** \
 * **Int** \
 * **Bool** \
 * **Float**
 */
export type ScriptParameterTypes = string;

/** Known values of {@link VisibilityParameterEnum} that the service accepts. */
export enum KnownVisibilityParameterEnum {
  /** Visible */
  Visible = "Visible",
  /** Hidden */
  Hidden = "Hidden",
}

/**
 * Visibility Parameter \
 * {@link KnownVisibilityParameterEnum} can be used interchangeably with VisibilityParameterEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Visible** \
 * **Hidden**
 */
export type VisibilityParameterEnum = string;

/** Known values of {@link OptionalParamEnum} that the service accepts. */
export enum KnownOptionalParamEnum {
  /** Optional */
  Optional = "Optional",
  /** Required */
  Required = "Required",
}

/**
 * Optional Param \
 * {@link KnownOptionalParamEnum} can be used interchangeably with OptionalParamEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Optional** \
 * **Required**
 */
export type OptionalParamEnum = string;

/** The response of a PrivateCloud list operation. */
export interface _PrivateCloudList {
  /** The PrivateCloud items on this page */
  value: PrivateCloud[];
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

/** A private cloud resource */
export interface PrivateCloud extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PrivateCloudProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentity;
}

export function privateCloudSerializer(
  item: PrivateCloud,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : privateCloudPropertiesSerializer(item.properties),
    sku: skuSerializer(item.sku),
    identity: !item.identity
      ? item.identity
      : systemAssignedServiceIdentitySerializer(item.identity),
  };
}

/** The properties of a private cloud resource */
export interface PrivateCloudProperties {
  /** The default cluster used for management */
  managementCluster: ManagementCluster;
  /** Connectivity to internet is enabled or disabled */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: IdentitySource[];
  /** Properties describing how the cloud is distributed across availability zones */
  availability?: AvailabilityProperties;
  /** Customer managed key encryption, can be enabled or disabled */
  encryption?: Encryption;
  /**
   * Array of additional networks noncontiguous with networkBlock. Networks must be
   * unique and non-overlapping across VNet in your subscription, on-premise, and
   * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
   * (A.B.C.D/X).
   */
  extendedNetworkBlocks?: string[];
  /** The provisioning state */
  readonly provisioningState?: PrivateCloudProvisioningState;
  /** An ExpressRoute Circuit */
  circuit?: Circuit;
  /** The endpoints */
  readonly endpoints?: Endpoints;
  /**
   * The block of addresses should be unique across VNet in your subscription as
   * well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where
   * A,B,C,D are between 0 and 255, and X is between 0 and 22
   */
  networkBlock: string;
  /** Network used to access vCenter Server and NSX-T Manager */
  readonly managementNetwork?: string;
  /** Used for virtual machine cold migration, cloning, and snapshot migration */
  readonly provisioningNetwork?: string;
  /** Used for live migration of virtual machines */
  readonly vmotionNetwork?: string;
  /** Optionally, set the vCenter admin password when the private cloud is created */
  vcenterPassword?: string;
  /** Optionally, set the NSX-T Manager password when the private cloud is created */
  nsxtPassword?: string;
  /** Thumbprint of the vCenter Server SSL certificate */
  readonly vcenterCertificateThumbprint?: string;
  /** Thumbprint of the NSX-T Manager SSL certificate */
  readonly nsxtCertificateThumbprint?: string;
  /** Array of cloud link IDs from other clouds that connect to this one */
  readonly externalCloudLinks?: string[];
  /**
   * A secondary expressRoute circuit from a separate AZ. Only present in a
   * stretched private cloud
   */
  secondaryCircuit?: Circuit;
  /**
   * Flag to indicate whether the private cloud has the quota for provisioned NSX
   * Public IP count raised from 64 to 1024
   */
  readonly nsxPublicIpQuotaRaised?: NsxPublicIpQuotaRaisedEnum;
  /** Azure resource ID of the virtual network */
  virtualNetworkId?: string;
  /** The type of DNS zone to use. */
  dnsZoneType?: DnsZoneType;
}

export function privateCloudPropertiesSerializer(
  item: PrivateCloudProperties,
): Record<string, unknown> {
  return {
    managementCluster: managementClusterSerializer(item.managementCluster),
    internet: item["internet"],
    identitySources:
      item["identitySources"] === undefined
        ? item["identitySources"]
        : item["identitySources"].map(identitySourceSerializer),
    availability: !item.availability
      ? item.availability
      : availabilityPropertiesSerializer(item.availability),
    encryption: !item.encryption
      ? item.encryption
      : encryptionSerializer(item.encryption),
    extendedNetworkBlocks: item["extendedNetworkBlocks"],
    circuit: !item.circuit ? item.circuit : circuitSerializer(item.circuit),
    networkBlock: item["networkBlock"],
    vcenterPassword: item["vcenterPassword"],
    nsxtPassword: item["nsxtPassword"],
    secondaryCircuit: !item.secondaryCircuit
      ? item.secondaryCircuit
      : circuitSerializer(item.secondaryCircuit),
    virtualNetworkId: item["virtualNetworkId"],
    dnsZoneType: item["dnsZoneType"],
  };
}

/** The properties of a management cluster */
export interface ManagementCluster {
  /** The cluster size */
  clusterSize?: number;
  /** The state of the cluster provisioning */
  readonly provisioningState?: ClusterProvisioningState;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

export function managementClusterSerializer(
  item: ManagementCluster,
): Record<string, unknown> {
  return {
    clusterSize: item["clusterSize"],
    hosts: item["hosts"],
    vsanDatastoreName: item["vsanDatastoreName"],
  };
}

/** Known values of {@link InternetEnum} that the service accepts. */
export enum KnownInternetEnum {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Whether internet is enabled or disabled \
 * {@link KnownInternetEnum} can be used interchangeably with InternetEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type InternetEnum = string;

/** vCenter Single Sign On Identity Source */
export interface IdentitySource {
  /** The name of the identity source */
  name?: string;
  /** The domain's NetBIOS name */
  alias?: string;
  /** The domain's dns name */
  domain?: string;
  /** The base distinguished name for users */
  baseUserDN?: string;
  /** The base distinguished name for groups */
  baseGroupDN?: string;
  /** Primary server URL */
  primaryServer?: string;
  /** Secondary server URL */
  secondaryServer?: string;
  /** Protect LDAP communication using SSL certificate (LDAPS) */
  ssl?: SslEnum;
  /**
   * The ID of an Active Directory user with a minimum of read-only access to Base
   * DN for users and group
   */
  username?: string;
  /**
   * The password of the Active Directory user with a minimum of read-only access to
   * Base DN for users and groups.
   */
  password?: string;
}

export function identitySourceSerializer(
  item: IdentitySource,
): Record<string, unknown> {
  return {
    name: item["name"],
    alias: item["alias"],
    domain: item["domain"],
    baseUserDN: item["baseUserDN"],
    baseGroupDN: item["baseGroupDN"],
    primaryServer: item["primaryServer"],
    secondaryServer: item["secondaryServer"],
    ssl: item["ssl"],
    username: item["username"],
    password: item["password"],
  };
}

/** Known values of {@link SslEnum} that the service accepts. */
export enum KnownSslEnum {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Whether SSL is enabled or disabled \
 * {@link KnownSslEnum} can be used interchangeably with SslEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type SslEnum = string;

/** The properties describing private cloud availability zone distribution */
export interface AvailabilityProperties {
  /** The availability strategy for the private cloud */
  strategy?: AvailabilityStrategy;
  /** The primary availability zone for the private cloud */
  zone?: number;
  /** The secondary availability zone for the private cloud */
  secondaryZone?: number;
}

export function availabilityPropertiesSerializer(
  item: AvailabilityProperties,
): Record<string, unknown> {
  return {
    strategy: item["strategy"],
    zone: item["zone"],
    secondaryZone: item["secondaryZone"],
  };
}

/** Known values of {@link AvailabilityStrategy} that the service accepts. */
export enum KnownAvailabilityStrategy {
  /** SingleZone */
  SingleZone = "SingleZone",
  /** DualZone */
  DualZone = "DualZone",
}

/**
 * Whether the private clouds is available in a single zone or two zones \
 * {@link KnownAvailabilityStrategy} can be used interchangeably with AvailabilityStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SingleZone** \
 * **DualZone**
 */
export type AvailabilityStrategy = string;

/** The properties of customer managed encryption key */
export interface Encryption {
  /** Status of customer managed encryption key */
  status?: EncryptionState;
  /** The key vault where the encryption key is stored */
  keyVaultProperties?: EncryptionKeyVaultProperties;
}

export function encryptionSerializer(
  item: Encryption,
): Record<string, unknown> {
  return {
    status: item["status"],
    keyVaultProperties: !item.keyVaultProperties
      ? item.keyVaultProperties
      : encryptionKeyVaultPropertiesSerializer(item.keyVaultProperties),
  };
}

/** Known values of {@link EncryptionState} that the service accepts. */
export enum KnownEncryptionState {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Whether encryption is enabled or disabled \
 * {@link KnownEncryptionState} can be used interchangeably with EncryptionState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type EncryptionState = string;

/** An Encryption Key */
export interface EncryptionKeyVaultProperties {
  /** The name of the key. */
  keyName?: string;
  /** The version of the key. */
  keyVersion?: string;
  /** The auto-detected version of the key if versionType is auto-detected. */
  readonly autoDetectedKeyVersion?: string;
  /** The URL of the vault. */
  keyVaultUrl?: string;
  /** The state of key provided */
  readonly keyState?: EncryptionKeyStatus;
  /** Property of the key if user provided or auto detected */
  readonly versionType?: EncryptionVersionType;
}

export function encryptionKeyVaultPropertiesSerializer(
  item: EncryptionKeyVaultProperties,
): Record<string, unknown> {
  return {
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
    keyVaultUrl: item["keyVaultUrl"],
  };
}

/** Known values of {@link EncryptionKeyStatus} that the service accepts. */
export enum KnownEncryptionKeyStatus {
  /** Connected */
  Connected = "Connected",
  /** AccessDenied */
  AccessDenied = "AccessDenied",
}

/**
 * Whether the the encryption key is connected or access denied \
 * {@link KnownEncryptionKeyStatus} can be used interchangeably with EncryptionKeyStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Connected** \
 * **AccessDenied**
 */
export type EncryptionKeyStatus = string;

/** Known values of {@link EncryptionVersionType} that the service accepts. */
export enum KnownEncryptionVersionType {
  /** Fixed */
  Fixed = "Fixed",
  /** AutoDetected */
  AutoDetected = "AutoDetected",
}

/**
 * Whether the encryption version is fixed or auto-detected \
 * {@link KnownEncryptionVersionType} can be used interchangeably with EncryptionVersionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Fixed** \
 * **AutoDetected**
 */
export type EncryptionVersionType = string;

/** An ExpressRoute Circuit */
export interface Circuit {
  /** CIDR of primary subnet */
  readonly primarySubnet?: string;
  /** CIDR of secondary subnet */
  readonly secondarySubnet?: string;
  /** Identifier of the ExpressRoute Circuit (Microsoft Colo only) */
  readonly expressRouteID?: string;
  /** ExpressRoute Circuit private peering identifier */
  readonly expressRoutePrivatePeeringID?: string;
}

export function circuitSerializer(item: Circuit) {
  return item as any;
}

/** Endpoint addresses */
export interface Endpoints {
  /** Endpoint FQDN for the NSX-T Data Center manager */
  readonly nsxtManager?: string;
  /** Endpoint FQDN for Virtual Center Server Appliance */
  readonly vcsa?: string;
  /** Endpoint FQDN for the HCX Cloud Manager */
  readonly hcxCloudManager?: string;
  /** Endpoint IP for the NSX-T Data Center manager */
  readonly nsxtManagerIp?: string;
  /** Endpoint IP for Virtual Center Server Appliance */
  readonly vcenterIp?: string;
  /** Endpoint IP for the HCX Cloud Manager */
  readonly hcxCloudManagerIp?: string;
}

/** Known values of {@link NsxPublicIpQuotaRaisedEnum} that the service accepts. */
export enum KnownNsxPublicIpQuotaRaisedEnum {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * NSX public IP quota raised \
 * {@link KnownNsxPublicIpQuotaRaisedEnum} can be used interchangeably with NsxPublicIpQuotaRaisedEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type NsxPublicIpQuotaRaisedEnum = string;

/** Known values of {@link DnsZoneType} that the service accepts. */
export enum KnownDnsZoneType {
  /** Public */
  Public = "Public",
  /** Private */
  Private = "Private",
}

/**
 * The type of DNS zone. \
 * {@link KnownDnsZoneType} can be used interchangeably with DnsZoneType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Public** \
 * **Private**
 */
export type DnsZoneType = string;

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

export function skuSerializer(item: Sku): Record<string, unknown> {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: item["capacity"],
  };
}

/** Known values of {@link SkuTier} that the service accepts. */
export enum KnownSkuTier {
  /** Free */
  Free = "Free",
  /** Basic */
  Basic = "Basic",
  /** Standard */
  Standard = "Standard",
  /** Premium */
  Premium = "Premium",
}

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. \
 * {@link KnownSkuTier} can be used interchangeably with SkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Free** \
 * **Basic** \
 * **Standard** \
 * **Premium**
 */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

/** Managed service identity (either system assigned, or none) */
export interface SystemAssignedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: SystemAssignedServiceIdentityType;
}

export function systemAssignedServiceIdentitySerializer(
  item: SystemAssignedServiceIdentity,
): Record<string, unknown> {
  return {
    type: item["type"],
  };
}

/** Known values of {@link SystemAssignedServiceIdentityType} that the service accepts. */
export enum KnownSystemAssignedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
}

/**
 * Type of managed service identity (either system assigned, or none). \
 * {@link KnownSystemAssignedServiceIdentityType} can be used interchangeably with SystemAssignedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned**
 */
export type SystemAssignedServiceIdentityType = string;

/** An update to a private cloud resource */
export interface PrivateCloudUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentity;
  /** The updatable properties of a private cloud resource */
  properties?: PrivateCloudUpdateProperties;
}

export function privateCloudUpdateSerializer(
  item: PrivateCloudUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    sku: !item.sku ? item.sku : skuSerializer(item.sku),
    identity: !item.identity
      ? item.identity
      : systemAssignedServiceIdentitySerializer(item.identity),
    properties: !item.properties
      ? item.properties
      : privateCloudUpdatePropertiesSerializer(item.properties),
  };
}

/** The properties of a private cloud resource that may be updated */
export interface PrivateCloudUpdateProperties {
  /** The default cluster used for management */
  managementCluster?: ManagementCluster;
  /** Connectivity to internet is enabled or disabled */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: IdentitySource[];
  /** Properties describing how the cloud is distributed across availability zones */
  availability?: AvailabilityProperties;
  /** Customer managed key encryption, can be enabled or disabled */
  encryption?: Encryption;
  /**
   * Array of additional networks noncontiguous with networkBlock. Networks must be
   * unique and non-overlapping across VNet in your subscription, on-premise, and
   * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
   * (A.B.C.D/X).
   */
  extendedNetworkBlocks?: string[];
  /** The type of DNS zone to use. */
  dnsZoneType?: DnsZoneType;
}

export function privateCloudUpdatePropertiesSerializer(
  item: PrivateCloudUpdateProperties,
): Record<string, unknown> {
  return {
    managementCluster: !item.managementCluster
      ? item.managementCluster
      : managementClusterSerializer(item.managementCluster),
    internet: item["internet"],
    identitySources:
      item["identitySources"] === undefined
        ? item["identitySources"]
        : item["identitySources"].map(identitySourceSerializer),
    availability: !item.availability
      ? item.availability
      : availabilityPropertiesSerializer(item.availability),
    encryption: !item.encryption
      ? item.encryption
      : encryptionSerializer(item.encryption),
    extendedNetworkBlocks: item["extendedNetworkBlocks"],
    dnsZoneType: item["dnsZoneType"],
  };
}

/** Administrative credentials for accessing vCenter and NSX-T */
export interface AdminCredentials {
  /** NSX-T Manager username */
  readonly nsxtUsername?: string;
  /** NSX-T Manager password */
  readonly nsxtPassword?: string;
  /** vCenter admin username */
  readonly vcenterUsername?: string;
  /** vCenter admin password */
  readonly vcenterPassword?: string;
}

/** The response of a PlacementPolicy list operation. */
export interface _PlacementPoliciesList {
  /** The PlacementPolicy items on this page */
  value: PlacementPolicy[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A vSphere Distributed Resource Scheduler (DRS) placement policy */
export interface PlacementPolicy extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: PlacementPolicyPropertiesUnion;
}

export function placementPolicySerializer(
  item: PlacementPolicy,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : placementPolicyPropertiesUnionSerializer(item.properties),
  };
}

/** Abstract placement policy properties */
export interface PlacementPolicyProperties {
  /** the discriminator possible values: VmVm, VmHost */
  type: PlacementPolicyType;
  /** Whether the placement policy is enabled or disabled */
  state?: PlacementPolicyState;
  /** Display name of the placement policy */
  displayName?: string;
  /** The provisioning state */
  readonly provisioningState?: PlacementPolicyProvisioningState;
}

export function placementPolicyPropertiesUnionSerializer(
  item: PlacementPolicyPropertiesUnion,
) {
  switch (item.type) {
    case "VmVm":
      return vmVmPlacementPolicyPropertiesSerializer(
        item as VmVmPlacementPolicyProperties,
      );

    case "VmHost":
      return vmHostPlacementPolicyPropertiesSerializer(
        item as VmHostPlacementPolicyProperties,
      );

    default:
      return placementPolicyPropertiesSerializer(item);
  }
}

export function placementPolicyPropertiesSerializer(
  item: PlacementPolicyPropertiesUnion,
): Record<string, unknown> {
  return {
    type: item["type"],
    state: item["state"],
    displayName: item["displayName"],
  };
}

/** VM-VM placement policy properties */
export interface VmVmPlacementPolicyProperties
  extends PlacementPolicyProperties {
  /** Virtual machine members list */
  vmMembers: string[];
  /** placement policy affinity type */
  affinityType: AffinityType;
  /** placement policy type */
  type: "VmVm";
}

export function vmVmPlacementPolicyPropertiesSerializer(
  item: VmVmPlacementPolicyProperties,
): Record<string, unknown> {
  return {
    type: item["type"],
    state: item["state"],
    displayName: item["displayName"],
    vmMembers: item["vmMembers"],
    affinityType: item["affinityType"],
  };
}

/** Known values of {@link AffinityType} that the service accepts. */
export enum KnownAffinityType {
  /** Affinity */
  Affinity = "Affinity",
  /** AntiAffinity */
  AntiAffinity = "AntiAffinity",
}

/**
 * Affinity type \
 * {@link KnownAffinityType} can be used interchangeably with AffinityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Affinity** \
 * **AntiAffinity**
 */
export type AffinityType = string;

/** VM-Host placement policy properties */
export interface VmHostPlacementPolicyProperties
  extends PlacementPolicyProperties {
  /** Virtual machine members list */
  vmMembers: string[];
  /** Host members list */
  hostMembers: string[];
  /** placement policy affinity type */
  affinityType: AffinityType;
  /** vm-host placement policy affinity strength (should/must) */
  affinityStrength?: AffinityStrength;
  /** placement policy azure hybrid benefit opt-in type */
  azureHybridBenefitType?: AzureHybridBenefitType;
  /** placement policy type */
  type: "VmHost";
}

export function vmHostPlacementPolicyPropertiesSerializer(
  item: VmHostPlacementPolicyProperties,
): Record<string, unknown> {
  return {
    type: item["type"],
    state: item["state"],
    displayName: item["displayName"],
    vmMembers: item["vmMembers"],
    hostMembers: item["hostMembers"],
    affinityType: item["affinityType"],
    affinityStrength: item["affinityStrength"],
    azureHybridBenefitType: item["azureHybridBenefitType"],
  };
}

/** Known values of {@link AffinityStrength} that the service accepts. */
export enum KnownAffinityStrength {
  /** Should */
  Should = "Should",
  /** Must */
  Must = "Must",
}

/**
 * Affinity Strength \
 * {@link KnownAffinityStrength} can be used interchangeably with AffinityStrength,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Should** \
 * **Must**
 */
export type AffinityStrength = string;

/** Known values of {@link AzureHybridBenefitType} that the service accepts. */
export enum KnownAzureHybridBenefitType {
  /** SqlHost */
  SqlHost = "SqlHost",
  /** None */
  None = "None",
}

/**
 * Azure Hybrid Benefit type \
 * {@link KnownAzureHybridBenefitType} can be used interchangeably with AzureHybridBenefitType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SqlHost** \
 * **None**
 */
export type AzureHybridBenefitType = string;

/** Known values of {@link PlacementPolicyType} that the service accepts. */
export enum KnownPlacementPolicyType {
  /** VmVm */
  VmVm = "VmVm",
  /** VmHost */
  VmHost = "VmHost",
}

/**
 * Placement Policy type \
 * {@link KnownPlacementPolicyType} can be used interchangeably with PlacementPolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **VmVm** \
 * **VmHost**
 */
export type PlacementPolicyType = string;

/** Known values of {@link PlacementPolicyState} that the service accepts. */
export enum KnownPlacementPolicyState {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Placement Policy state \
 * {@link KnownPlacementPolicyState} can be used interchangeably with PlacementPolicyState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PlacementPolicyState = string;

/** An update of a DRS placement policy resource */
export interface PlacementPolicyUpdate {
  /** The properties of a placement policy resource that may be updated */
  properties?: PlacementPolicyUpdateProperties;
}

export function placementPolicyUpdateSerializer(
  item: PlacementPolicyUpdate,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : placementPolicyUpdatePropertiesSerializer(item.properties),
  };
}

/** The properties of a placement policy resource that may be updated */
export interface PlacementPolicyUpdateProperties {
  /** Whether the placement policy is enabled or disabled */
  state?: PlacementPolicyState;
  /** Virtual machine members list */
  vmMembers?: string[];
  /** Host members list */
  hostMembers?: string[];
  /** vm-host placement policy affinity strength (should/must) */
  affinityStrength?: AffinityStrength;
  /** placement policy azure hybrid benefit opt-in type */
  azureHybridBenefitType?: AzureHybridBenefitType;
}

export function placementPolicyUpdatePropertiesSerializer(
  item: PlacementPolicyUpdateProperties,
): Record<string, unknown> {
  return {
    state: item["state"],
    vmMembers: item["vmMembers"],
    hostMembers: item["hostMembers"],
    affinityStrength: item["affinityStrength"],
    azureHybridBenefitType: item["azureHybridBenefitType"],
  };
}

/** Subscription trial availability */
export interface Trial {
  /** Trial status */
  readonly status?: TrialStatus;
  /** Number of trial hosts available */
  readonly availableHosts?: number;
}

/** Known values of {@link TrialStatus} that the service accepts. */
export enum KnownTrialStatus {
  /** TrialAvailable */
  TrialAvailable = "TrialAvailable",
  /** TrialUsed */
  TrialUsed = "TrialUsed",
  /** TrialDisabled */
  TrialDisabled = "TrialDisabled",
}

/**
 * trial status \
 * {@link KnownTrialStatus} can be used interchangeably with TrialStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TrialAvailable** \
 * **TrialUsed** \
 * **TrialDisabled**
 */
export type TrialStatus = string;

/** Subscription quotas */
export interface Quota {
  /** Remaining hosts quota by sku type */
  readonly hostsRemaining?: Record<string, number>;
  /** Host quota is active for current subscription */
  readonly quotaEnabled?: QuotaEnabled;
}

/** Known values of {@link QuotaEnabled} that the service accepts. */
export enum KnownQuotaEnabled {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * quota enabled \
 * {@link KnownQuotaEnabled} can be used interchangeably with QuotaEnabled,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type QuotaEnabled = string;

/** The response of a IscsiPath list operation. */
export interface _IscsiPathListResult {
  /** The IscsiPath items on this page */
  value: IscsiPath[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An iSCSI path resource */
export interface IscsiPath extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: IscsiPathProperties;
}

export function iscsiPathSerializer(item: IscsiPath): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : iscsiPathPropertiesSerializer(item.properties),
  };
}

/** The properties of an iSCSI path resource */
export interface IscsiPathProperties {
  /** The state of the iSCSI path provisioning */
  readonly provisioningState?: IscsiPathProvisioningState;
  /** CIDR Block for iSCSI path. */
  networkBlock: string;
}

export function iscsiPathPropertiesSerializer(
  item: IscsiPathProperties,
): Record<string, unknown> {
  return {
    networkBlock: item["networkBlock"],
  };
}

/** The response of a HcxEnterpriseSite list operation. */
export interface _HcxEnterpriseSiteList {
  /** The HcxEnterpriseSite items on this page */
  value: HcxEnterpriseSite[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An HCX Enterprise Site resource */
export interface HcxEnterpriseSite extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: HcxEnterpriseSiteProperties;
}

export function hcxEnterpriseSiteSerializer(
  item: HcxEnterpriseSite,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : hcxEnterpriseSitePropertiesSerializer(item.properties),
  };
}

/** The properties of an HCX Enterprise Site */
export interface HcxEnterpriseSiteProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: HcxEnterpriseSiteProvisioningState;
  /** The activation key */
  readonly activationKey?: string;
  /** The status of the HCX Enterprise Site */
  readonly status?: HcxEnterpriseSiteStatus;
}

export function hcxEnterpriseSitePropertiesSerializer(
  item: HcxEnterpriseSiteProperties,
) {
  return item as any;
}

/** Known values of {@link HcxEnterpriseSiteStatus} that the service accepts. */
export enum KnownHcxEnterpriseSiteStatus {
  /** Available */
  Available = "Available",
  /** Consumed */
  Consumed = "Consumed",
  /** Deactivated */
  Deactivated = "Deactivated",
  /** Deleted */
  Deleted = "Deleted",
}

/**
 * HCX Enterprise Site status \
 * {@link KnownHcxEnterpriseSiteStatus} can be used interchangeably with HcxEnterpriseSiteStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Available** \
 * **Consumed** \
 * **Deactivated** \
 * **Deleted**
 */
export type HcxEnterpriseSiteStatus = string;

/** The response of a GlobalReachConnection list operation. */
export interface _GlobalReachConnectionList {
  /** The GlobalReachConnection items on this page */
  value: GlobalReachConnection[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A global reach connection resource */
export interface GlobalReachConnection extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GlobalReachConnectionProperties;
}

export function globalReachConnectionSerializer(
  item: GlobalReachConnection,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : globalReachConnectionPropertiesSerializer(item.properties),
  };
}

/** The properties of a global reach connection */
export interface GlobalReachConnectionProperties {
  /** The state of the  ExpressRoute Circuit Authorization provisioning */
  readonly provisioningState?: GlobalReachConnectionProvisioningState;
  /**
   * The network used for global reach carved out from the original network block
   * provided for the private cloud
   */
  readonly addressPrefix?: string;
  /**
   * Authorization key from the peer express route used for the global reach
   * connection
   */
  authorizationKey?: string;
  /** The connection status of the global reach connection */
  readonly circuitConnectionStatus?: GlobalReachConnectionStatus;
  /**
   * Identifier of the ExpressRoute Circuit to peer with in the global reach
   * connection
   */
  peerExpressRouteCircuit?: string;
  /**
   * The ID of the Private Cloud's ExpressRoute Circuit that is participating in the
   * global reach connection
   */
  expressRouteId?: string;
}

export function globalReachConnectionPropertiesSerializer(
  item: GlobalReachConnectionProperties,
): Record<string, unknown> {
  return {
    authorizationKey: item["authorizationKey"],
    peerExpressRouteCircuit: item["peerExpressRouteCircuit"],
    expressRouteId: item["expressRouteId"],
  };
}

/** Known values of {@link GlobalReachConnectionStatus} that the service accepts. */
export enum KnownGlobalReachConnectionStatus {
  /** Connected */
  Connected = "Connected",
  /** Connecting */
  Connecting = "Connecting",
  /** Disconnected */
  Disconnected = "Disconnected",
}

/**
 * Global Reach Connection status \
 * {@link KnownGlobalReachConnectionStatus} can be used interchangeably with GlobalReachConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Connected** \
 * **Connecting** \
 * **Disconnected**
 */
export type GlobalReachConnectionStatus = string;

/** The response of a Datastore list operation. */
export interface _DatastoreList {
  /** The Datastore items on this page */
  value: Datastore[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A datastore resource */
export interface Datastore extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DatastoreProperties;
}

export function datastoreSerializer(item: Datastore): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : datastorePropertiesSerializer(item.properties),
  };
}

/** The properties of a datastore */
export interface DatastoreProperties {
  /** The state of the datastore provisioning */
  readonly provisioningState?: DatastoreProvisioningState;
  /** An Azure NetApp Files volume */
  netAppVolume?: NetAppVolume;
  /** An iSCSI volume */
  diskPoolVolume?: DiskPoolVolume;
  /** An Elastic SAN volume */
  elasticSanVolume?: ElasticSanVolume;
  /** The operational status of the datastore */
  readonly status?: DatastoreStatus;
}

export function datastorePropertiesSerializer(
  item: DatastoreProperties,
): Record<string, unknown> {
  return {
    netAppVolume: !item.netAppVolume
      ? item.netAppVolume
      : netAppVolumeSerializer(item.netAppVolume),
    diskPoolVolume: !item.diskPoolVolume
      ? item.diskPoolVolume
      : diskPoolVolumeSerializer(item.diskPoolVolume),
    elasticSanVolume: !item.elasticSanVolume
      ? item.elasticSanVolume
      : elasticSanVolumeSerializer(item.elasticSanVolume),
  };
}

/** An Azure NetApp Files volume from Microsoft.NetApp provider */
export interface NetAppVolume {
  /** Azure resource ID of the NetApp volume */
  id: string;
}

export function netAppVolumeSerializer(
  item: NetAppVolume,
): Record<string, unknown> {
  return {
    id: item["id"],
  };
}

/** An iSCSI volume from Microsoft.StoragePool provider */
export interface DiskPoolVolume {
  /** Azure resource ID of the iSCSI target */
  targetId: string;
  /** Name of the LUN to be used for datastore */
  lunName: string;
  /**
   * Mode that describes whether the LUN has to be mounted as a datastore or
   * attached as a LUN
   */
  mountOption?: MountOptionEnum;
  /** Device path */
  readonly path?: string;
}

export function diskPoolVolumeSerializer(
  item: DiskPoolVolume,
): Record<string, unknown> {
  return {
    targetId: item["targetId"],
    lunName: item["lunName"],
    mountOption: item["mountOption"],
  };
}

/** Known values of {@link MountOptionEnum} that the service accepts. */
export enum KnownMountOptionEnum {
  /** MOUNT */
  MOUNT = "MOUNT",
  /** ATTACH */
  ATTACH = "ATTACH",
}

/**
 * mount option \
 * {@link KnownMountOptionEnum} can be used interchangeably with MountOptionEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MOUNT** \
 * **ATTACH**
 */
export type MountOptionEnum = string;

/** An Elastic SAN volume from Microsoft.ElasticSan provider */
export interface ElasticSanVolume {
  /** Azure resource ID of the Elastic SAN Volume */
  targetId: string;
}

export function elasticSanVolumeSerializer(
  item: ElasticSanVolume,
): Record<string, unknown> {
  return {
    targetId: item["targetId"],
  };
}

/** Known values of {@link DatastoreStatus} that the service accepts. */
export enum KnownDatastoreStatus {
  /** Unknown */
  Unknown = "Unknown",
  /** Accessible */
  Accessible = "Accessible",
  /** Inaccessible */
  Inaccessible = "Inaccessible",
  /** Attached */
  Attached = "Attached",
  /** Detached */
  Detached = "Detached",
  /** LostCommunication */
  LostCommunication = "LostCommunication",
  /** DeadOrError */
  DeadOrError = "DeadOrError",
}

/**
 * datastore status \
 * {@link KnownDatastoreStatus} can be used interchangeably with DatastoreStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Accessible** \
 * **Inaccessible** \
 * **Attached** \
 * **Detached** \
 * **LostCommunication** \
 * **DeadOrError**
 */
export type DatastoreStatus = string;

/** The response of a Cluster list operation. */
export interface _ClusterList {
  /** The Cluster items on this page */
  value: Cluster[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A cluster resource */
export interface Cluster extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ClusterProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
}

export function clusterSerializer(item: Cluster): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : clusterPropertiesSerializer(item.properties),
    sku: skuSerializer(item.sku),
  };
}

/** The properties of a cluster */
export interface ClusterProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The state of the cluster provisioning */
  readonly provisioningState?: ClusterProvisioningState;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

export function clusterPropertiesSerializer(
  item: ClusterProperties,
): Record<string, unknown> {
  return {
    clusterSize: item["clusterSize"],
    hosts: item["hosts"],
    vsanDatastoreName: item["vsanDatastoreName"],
  };
}

/** An update of a cluster resource */
export interface ClusterUpdate {
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** The properties of a cluster resource that may be updated */
  properties?: ClusterUpdateProperties;
}

export function clusterUpdateSerializer(
  item: ClusterUpdate,
): Record<string, unknown> {
  return {
    sku: !item.sku ? item.sku : skuSerializer(item.sku),
    properties: !item.properties
      ? item.properties
      : clusterUpdatePropertiesSerializer(item.properties),
  };
}

/** The properties of a cluster that may be updated */
export interface ClusterUpdateProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The hosts */
  hosts?: string[];
}

export function clusterUpdatePropertiesSerializer(
  item: ClusterUpdateProperties,
): Record<string, unknown> {
  return {
    clusterSize: item["clusterSize"],
    hosts: item["hosts"],
  };
}

/** List of all zones and associated hosts for a cluster */
export interface ClusterZoneList {
  /** Zone and associated hosts info */
  zones?: ClusterZone[];
}

/** Zone and associated hosts info */
export interface ClusterZone {
  /** List of hosts belonging to the availability zone in a cluster */
  readonly hosts?: string[];
  /** Availability zone identifier */
  readonly zone?: string;
}

/** The response of a CloudLink list operation. */
export interface _CloudLinkList {
  /** The CloudLink items on this page */
  value: CloudLink[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A cloud link resource */
export interface CloudLink extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudLinkProperties;
}

export function cloudLinkSerializer(item: CloudLink): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : cloudLinkPropertiesSerializer(item.properties),
  };
}

/** The properties of a cloud link. */
export interface CloudLinkProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: CloudLinkProvisioningState;
  /** The state of the cloud link. */
  readonly status?: CloudLinkStatus;
  /** Identifier of the other private cloud participating in the link. */
  linkedCloud?: string;
}

export function cloudLinkPropertiesSerializer(
  item: CloudLinkProperties,
): Record<string, unknown> {
  return {
    linkedCloud: item["linkedCloud"],
  };
}

/** Known values of {@link CloudLinkStatus} that the service accepts. */
export enum KnownCloudLinkStatus {
  /** Active */
  Active = "Active",
  /** Building */
  Building = "Building",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed",
  /** Disconnected */
  Disconnected = "Disconnected",
}

/**
 * Cloud Link status \
 * {@link KnownCloudLinkStatus} can be used interchangeably with CloudLinkStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Building** \
 * **Deleting** \
 * **Failed** \
 * **Disconnected**
 */
export type CloudLinkStatus = string;

/** The response of a ExpressRouteAuthorization list operation. */
export interface _ExpressRouteAuthorizationList {
  /** The ExpressRouteAuthorization items on this page */
  value: ExpressRouteAuthorization[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** ExpressRoute Circuit Authorization */
export interface ExpressRouteAuthorization extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ExpressRouteAuthorizationProperties;
}

export function expressRouteAuthorizationSerializer(
  item: ExpressRouteAuthorization,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : expressRouteAuthorizationPropertiesSerializer(item.properties),
  };
}

/** The properties of an ExpressRoute Circuit Authorization resource */
export interface ExpressRouteAuthorizationProperties {
  /** The state of the ExpressRoute Circuit Authorization provisioning */
  readonly provisioningState?: ExpressRouteAuthorizationProvisioningState;
  /** The ID of the ExpressRoute Circuit Authorization */
  readonly expressRouteAuthorizationId?: string;
  /** The key of the ExpressRoute Circuit Authorization */
  readonly expressRouteAuthorizationKey?: string;
  /** The ID of the ExpressRoute Circuit */
  expressRouteId?: string;
}

export function expressRouteAuthorizationPropertiesSerializer(
  item: ExpressRouteAuthorizationProperties,
): Record<string, unknown> {
  return {
    expressRouteId: item["expressRouteId"],
  };
}

/** The response of a Addon list operation. */
export interface _AddonList {
  /** The Addon items on this page */
  value: Addon[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An addon resource */
export interface Addon extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AddonPropertiesUnion;
}

export function addonSerializer(item: Addon): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : addonPropertiesUnionSerializer(item.properties),
  };
}

/** The properties of an addon */
export interface AddonProperties {
  /** the discriminator possible values: SRM, VR, HCX, Arc */
  addonType: AddonType;
  /** The state of the addon provisioning */
  readonly provisioningState?: AddonProvisioningState;
}

export function addonPropertiesUnionSerializer(item: AddonPropertiesUnion) {
  switch (item.addonType) {
    case "SRM":
      return addonSrmPropertiesSerializer(item as AddonSrmProperties);

    case "VR":
      return addonVrPropertiesSerializer(item as AddonVrProperties);

    case "HCX":
      return addonHcxPropertiesSerializer(item as AddonHcxProperties);

    case "Arc":
      return addonArcPropertiesSerializer(item as AddonArcProperties);

    default:
      return addonPropertiesSerializer(item);
  }
}

export function addonPropertiesSerializer(
  item: AddonPropertiesUnion,
): Record<string, unknown> {
  return {
    addonType: item["addonType"],
  };
}

/** The properties of a Site Recovery Manager (SRM) addon */
export interface AddonSrmProperties extends AddonProperties {
  /** The Site Recovery Manager (SRM) license */
  licenseKey?: string;
  /** The type of private cloud addon */
  addonType: "SRM";
}

export function addonSrmPropertiesSerializer(
  item: AddonSrmProperties,
): Record<string, unknown> {
  return {
    addonType: item["addonType"],
    licenseKey: item["licenseKey"],
  };
}

/** The properties of a vSphere Replication (VR) addon */
export interface AddonVrProperties extends AddonProperties {
  /** The vSphere Replication Server (VRS) count */
  vrsCount: number;
  /** The type of private cloud addon */
  addonType: "VR";
}

export function addonVrPropertiesSerializer(
  item: AddonVrProperties,
): Record<string, unknown> {
  return {
    addonType: item["addonType"],
    vrsCount: item["vrsCount"],
  };
}

/** The properties of an HCX addon */
export interface AddonHcxProperties extends AddonProperties {
  /** The HCX offer, example VMware MaaS Cloud Provider (Enterprise) */
  offer: string;
  /** The type of private cloud addon */
  addonType: "HCX";
}

export function addonHcxPropertiesSerializer(
  item: AddonHcxProperties,
): Record<string, unknown> {
  return {
    addonType: item["addonType"],
    offer: item["offer"],
  };
}

/** The properties of an Arc addon */
export interface AddonArcProperties extends AddonProperties {
  /** The VMware vCenter resource ID */
  vCenter?: string;
  /** The type of private cloud addon */
  addonType: "Arc";
}

export function addonArcPropertiesSerializer(
  item: AddonArcProperties,
): Record<string, unknown> {
  return {
    addonType: item["addonType"],
    vCenter: item["vCenter"],
  };
}

/** Known values of {@link AddonType} that the service accepts. */
export enum KnownAddonType {
  /** SRM */
  SRM = "SRM",
  /** VR */
  VR = "VR",
  /** HCX */
  HCX = "HCX",
  /** Arc */
  Arc = "Arc",
}

/**
 * Addon type \
 * {@link KnownAddonType} can be used interchangeably with AddonType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SRM** \
 * **VR** \
 * **HCX** \
 * **Arc**
 */
export type AddonType = string;

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
/** Azure VMware Solution API versions. */
export type Versions = "2023-09-01";
/** Alias for WorkloadNetworkProvisioningState */
export type WorkloadNetworkProvisioningState =
  | string
  | ResourceProvisioningState
  | "Building"
  | "Deleting"
  | "Updating";
/** Alias for WorkloadNetworkVMGroupProvisioningState */
export type WorkloadNetworkVMGroupProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkSegmentProvisioningState */
export type WorkloadNetworkSegmentProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkPublicIPProvisioningState */
export type WorkloadNetworkPublicIPProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkPortMirroringProvisioningState */
export type WorkloadNetworkPortMirroringProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkDnsZoneProvisioningState */
export type WorkloadNetworkDnsZoneProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkDnsServiceProvisioningState */
export type WorkloadNetworkDnsServiceProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkDhcpEntityUnion */
export type WorkloadNetworkDhcpEntityUnion =
  | WorkloadNetworkDhcpServer
  | WorkloadNetworkDhcpRelay
  | WorkloadNetworkDhcpEntity;
/** Alias for WorkloadNetworkDhcpProvisioningState */
export type WorkloadNetworkDhcpProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for VirtualMachineProvisioningState */
export type VirtualMachineProvisioningState =
  | string
  | ResourceProvisioningState;
/** Alias for ScriptPackageProvisioningState */
export type ScriptPackageProvisioningState = string | ResourceProvisioningState;
/** Alias for ScriptExecutionParameterUnion */
export type ScriptExecutionParameterUnion =
  | ScriptSecureStringExecutionParameter
  | ScriptStringExecutionParameter
  | PSCredentialExecutionParameter
  | ScriptExecutionParameter;
/** Alias for ScriptExecutionProvisioningState */
export type ScriptExecutionProvisioningState =
  | string
  | ResourceProvisioningState
  | "Pending"
  | "Running"
  | "Cancelling"
  | "Cancelled"
  | "Deleting";
/** Alias for ScriptCmdletProvisioningState */
export type ScriptCmdletProvisioningState = string | ResourceProvisioningState;
/** Alias for ClusterProvisioningState */
export type ClusterProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Deleting"
  | "Updating";
/** Alias for PrivateCloudProvisioningState */
export type PrivateCloudProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Pending"
  | "Building"
  | "Deleting"
  | "Updating";
/** Alias for PlacementPolicyPropertiesUnion */
export type PlacementPolicyPropertiesUnion =
  | VmVmPlacementPolicyProperties
  | VmHostPlacementPolicyProperties
  | PlacementPolicyProperties;
/** Alias for PlacementPolicyProvisioningState */
export type PlacementPolicyProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for IscsiPathProvisioningState */
export type IscsiPathProvisioningState =
  | string
  | ResourceProvisioningState
  | "Pending"
  | "Building"
  | "Deleting"
  | "Updating";
/** Alias for HcxEnterpriseSiteProvisioningState */
export type HcxEnterpriseSiteProvisioningState =
  | string
  | ResourceProvisioningState;
/** Alias for GlobalReachConnectionProvisioningState */
export type GlobalReachConnectionProvisioningState =
  | string
  | ResourceProvisioningState
  | "Updating";
/** Alias for DatastoreProvisioningState */
export type DatastoreProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Pending"
  | "Creating"
  | "Updating"
  | "Deleting";
/** Alias for CloudLinkProvisioningState */
export type CloudLinkProvisioningState = string | ResourceProvisioningState;
/** Alias for ExpressRouteAuthorizationProvisioningState */
export type ExpressRouteAuthorizationProvisioningState =
  | string
  | ResourceProvisioningState
  | "Updating";
/** Alias for AddonPropertiesUnion */
export type AddonPropertiesUnion =
  | AddonSrmProperties
  | AddonVrProperties
  | AddonHcxProperties
  | AddonArcProperties
  | AddonProperties;
/** Alias for AddonProvisioningState */
export type AddonProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Building"
  | "Deleting"
  | "Updating";
