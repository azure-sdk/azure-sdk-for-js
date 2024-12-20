// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  WorkloadNetworksListOptionalParams,
  WorkloadNetworksGetOptionalParams,
  WorkloadNetworksListSegmentsOptionalParams,
  WorkloadNetworksGetSegmentOptionalParams,
  WorkloadNetworksCreateSegmentOptionalParams,
  WorkloadNetworksUpdateSegmentOptionalParams,
  WorkloadNetworksDeleteSegmentOptionalParams,
  WorkloadNetworksListDhcpOptionalParams,
  WorkloadNetworksGetDhcpOptionalParams,
  WorkloadNetworksCreateDhcpOptionalParams,
  WorkloadNetworksUpdateDhcpOptionalParams,
  WorkloadNetworksDeleteDhcpOptionalParams,
  WorkloadNetworksListGatewaysOptionalParams,
  WorkloadNetworksGetGatewayOptionalParams,
  WorkloadNetworksListPortMirroringOptionalParams,
  WorkloadNetworksGetPortMirroringOptionalParams,
  WorkloadNetworksCreatePortMirroringOptionalParams,
  WorkloadNetworksUpdatePortMirroringOptionalParams,
  WorkloadNetworksDeletePortMirroringOptionalParams,
  WorkloadNetworksListVMGroupsOptionalParams,
  WorkloadNetworksGetVMGroupOptionalParams,
  WorkloadNetworksCreateVMGroupOptionalParams,
  WorkloadNetworksUpdateVMGroupOptionalParams,
  WorkloadNetworksDeleteVMGroupOptionalParams,
  WorkloadNetworksListVirtualMachinesOptionalParams,
  WorkloadNetworksGetVirtualMachineOptionalParams,
  WorkloadNetworksListDnsServicesOptionalParams,
  WorkloadNetworksGetDnsServiceOptionalParams,
  WorkloadNetworksCreateDnsServiceOptionalParams,
  WorkloadNetworksUpdateDnsServiceOptionalParams,
  WorkloadNetworksDeleteDnsServiceOptionalParams,
  WorkloadNetworksListDnsZonesOptionalParams,
  WorkloadNetworksGetDnsZoneOptionalParams,
  WorkloadNetworksCreateDnsZoneOptionalParams,
  WorkloadNetworksUpdateDnsZoneOptionalParams,
  WorkloadNetworksDeleteDnsZoneOptionalParams,
  WorkloadNetworksListPublicIPsOptionalParams,
  WorkloadNetworksGetPublicIPOptionalParams,
  WorkloadNetworksCreatePublicIPOptionalParams,
  WorkloadNetworksDeletePublicIPOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworksList,
  workloadNetworksGet,
  workloadNetworksListSegments,
  workloadNetworksGetSegment,
  workloadNetworksCreateSegment,
  workloadNetworksUpdateSegment,
  workloadNetworksDeleteSegment,
  workloadNetworksListDhcp,
  workloadNetworksGetDhcp,
  workloadNetworksCreateDhcp,
  workloadNetworksUpdateDhcp,
  workloadNetworksDeleteDhcp,
  workloadNetworksListGateways,
  workloadNetworksGetGateway,
  workloadNetworksListPortMirroring,
  workloadNetworksGetPortMirroring,
  workloadNetworksCreatePortMirroring,
  workloadNetworksUpdatePortMirroring,
  workloadNetworksDeletePortMirroring,
  workloadNetworksListVMGroups,
  workloadNetworksGetVMGroup,
  workloadNetworksCreateVMGroup,
  workloadNetworksUpdateVMGroup,
  workloadNetworksDeleteVMGroup,
  workloadNetworksListVirtualMachines,
  workloadNetworksGetVirtualMachine,
  workloadNetworksListDnsServices,
  workloadNetworksGetDnsService,
  workloadNetworksCreateDnsService,
  workloadNetworksUpdateDnsService,
  workloadNetworksDeleteDnsService,
  workloadNetworksListDnsZones,
  workloadNetworksGetDnsZone,
  workloadNetworksCreateDnsZone,
  workloadNetworksUpdateDnsZone,
  workloadNetworksDeleteDnsZone,
  workloadNetworksListPublicIPs,
  workloadNetworksGetPublicIP,
  workloadNetworksCreatePublicIP,
  workloadNetworksDeletePublicIP,
} from "../../api/workloadNetworks/index.js";
import {
  WorkloadNetwork,
  WorkloadNetworkSegment,
  WorkloadNetworkDhcp,
  WorkloadNetworkGateway,
  WorkloadNetworkPortMirroring,
  WorkloadNetworkVMGroup,
  WorkloadNetworkVirtualMachine,
  WorkloadNetworkDnsService,
  WorkloadNetworkDnsZone,
  WorkloadNetworkPublicIP,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworks operations. */
export interface WorkloadNetworksOperations {
  /** List WorkloadNetwork resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetwork>;
  /** Get a WorkloadNetwork */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksGetOptionalParams,
  ) => Promise<WorkloadNetwork>;
  /** List WorkloadNetworkSegment resources by WorkloadNetwork */
  listSegments: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListSegmentsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
  /** Get a WorkloadNetworkSegment */
  getSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    options?: WorkloadNetworksGetSegmentOptionalParams,
  ) => Promise<WorkloadNetworkSegment>;
  /** Create a WorkloadNetworkSegment */
  createSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworksCreateSegmentOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  /** Update a WorkloadNetworkSegment */
  updateSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworksUpdateSegmentOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  /** Delete a WorkloadNetworkSegment */
  deleteSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    options?: WorkloadNetworksDeleteSegmentOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
  listDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListDhcpOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
  /** Get a WorkloadNetworkDhcp */
  getDhcp: (
    resourceGroupName: string,
    dhcpId: string,
    privateCloudName: string,
    options?: WorkloadNetworksGetDhcpOptionalParams,
  ) => Promise<WorkloadNetworkDhcp>;
  /** Create a WorkloadNetworkDhcp */
  createDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworksCreateDhcpOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Update a WorkloadNetworkDhcp */
  updateDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworksUpdateDhcpOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Delete a WorkloadNetworkDhcp */
  deleteDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    options?: WorkloadNetworksDeleteDhcpOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List WorkloadNetworkGateway resources by WorkloadNetwork */
  listGateways: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListGatewaysOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
  /** Get a WorkloadNetworkGateway */
  getGateway: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    gatewayId: string,
    options?: WorkloadNetworksGetGatewayOptionalParams,
  ) => Promise<WorkloadNetworkGateway>;
  /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
  listPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListPortMirroringOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
  /** Get a WorkloadNetworkPortMirroring */
  getPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    options?: WorkloadNetworksGetPortMirroringOptionalParams,
  ) => Promise<WorkloadNetworkPortMirroring>;
  /** Create a WorkloadNetworkPortMirroring */
  createPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworksCreatePortMirroringOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  /** Update a WorkloadNetworkPortMirroring */
  updatePortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworksUpdatePortMirroringOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  /** Delete a WorkloadNetworkPortMirroring */
  deletePortMirroring: (
    resourceGroupName: string,
    portMirroringId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeletePortMirroringOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
  listVMGroups: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListVMGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
  /** Get a WorkloadNetworkVMGroup */
  getVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    options?: WorkloadNetworksGetVMGroupOptionalParams,
  ) => Promise<WorkloadNetworkVMGroup>;
  /** Create a WorkloadNetworkVMGroup */
  createVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworksCreateVMGroupOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  /** Update a WorkloadNetworkVMGroup */
  updateVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworksUpdateVMGroupOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  /** Delete a WorkloadNetworkVMGroup */
  deleteVMGroup: (
    resourceGroupName: string,
    vmGroupId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeleteVMGroupOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
  listVirtualMachines: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListVirtualMachinesOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
  /** Get a WorkloadNetworkVirtualMachine */
  getVirtualMachine: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    virtualMachineId: string,
    options?: WorkloadNetworksGetVirtualMachineOptionalParams,
  ) => Promise<WorkloadNetworkVirtualMachine>;
  /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
  listDnsServices: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListDnsServicesOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
  /** Get a WorkloadNetworkDnsService */
  getDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    options?: WorkloadNetworksGetDnsServiceOptionalParams,
  ) => Promise<WorkloadNetworkDnsService>;
  /** Create a WorkloadNetworkDnsService */
  createDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworksCreateDnsServiceOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  /** Update a WorkloadNetworkDnsService */
  updateDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworksUpdateDnsServiceOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  /** Delete a WorkloadNetworkDnsService */
  deleteDnsService: (
    resourceGroupName: string,
    dnsServiceId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeleteDnsServiceOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
  listDnsZones: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListDnsZonesOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
  /** Get a WorkloadNetworkDnsZone */
  getDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    options?: WorkloadNetworksGetDnsZoneOptionalParams,
  ) => Promise<WorkloadNetworkDnsZone>;
  /** Create a WorkloadNetworkDnsZone */
  createDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworksCreateDnsZoneOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  /** Update a WorkloadNetworkDnsZone */
  updateDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworksUpdateDnsZoneOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  /** Delete a WorkloadNetworkDnsZone */
  deleteDnsZone: (
    resourceGroupName: string,
    dnsZoneId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeleteDnsZoneOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
  listPublicIPs: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListPublicIPsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
  /** Get a WorkloadNetworkPublicIP */
  getPublicIP: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    publicIPId: string,
    options?: WorkloadNetworksGetPublicIPOptionalParams,
  ) => Promise<WorkloadNetworkPublicIP>;
  /** Create a WorkloadNetworkPublicIP */
  createPublicIP: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    publicIPId: string,
    workloadNetworkPublicIP: WorkloadNetworkPublicIP,
    options?: WorkloadNetworksCreatePublicIPOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
  /** Delete a WorkloadNetworkPublicIP */
  deletePublicIP: (
    resourceGroupName: string,
    publicIPId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeletePublicIPOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworks(
  context: AvsContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksListOptionalParams,
    ) =>
      workloadNetworksList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksGetOptionalParams,
    ) =>
      workloadNetworksGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    listSegments: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListSegmentsOptionalParams,
    ) =>
      workloadNetworksListSegments(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      segmentId: string,
      options?: WorkloadNetworksGetSegmentOptionalParams,
    ) =>
      workloadNetworksGetSegment(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        options,
      ),
    createSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      segmentId: string,
      workloadNetworkSegment: WorkloadNetworkSegment,
      options?: WorkloadNetworksCreateSegmentOptionalParams,
    ) =>
      workloadNetworksCreateSegment(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    updateSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      segmentId: string,
      workloadNetworkSegment: WorkloadNetworkSegment,
      options?: WorkloadNetworksUpdateSegmentOptionalParams,
    ) =>
      workloadNetworksUpdateSegment(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    deleteSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      segmentId: string,
      options?: WorkloadNetworksDeleteSegmentOptionalParams,
    ) =>
      workloadNetworksDeleteSegment(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        options,
      ),
    listDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListDhcpOptionalParams,
    ) =>
      workloadNetworksListDhcp(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getDhcp: (
      resourceGroupName: string,
      dhcpId: string,
      privateCloudName: string,
      options?: WorkloadNetworksGetDhcpOptionalParams,
    ) =>
      workloadNetworksGetDhcp(
        context,
        subscriptionId,
        resourceGroupName,
        dhcpId,
        privateCloudName,
        options,
      ),
    createDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworksCreateDhcpOptionalParams,
    ) =>
      workloadNetworksCreateDhcp(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    updateDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworksUpdateDhcpOptionalParams,
    ) =>
      workloadNetworksUpdateDhcp(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    deleteDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dhcpId: string,
      options?: WorkloadNetworksDeleteDhcpOptionalParams,
    ) =>
      workloadNetworksDeleteDhcp(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        options,
      ),
    listGateways: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListGatewaysOptionalParams,
    ) =>
      workloadNetworksListGateways(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getGateway: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      gatewayId: string,
      options?: WorkloadNetworksGetGatewayOptionalParams,
    ) =>
      workloadNetworksGetGateway(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        gatewayId,
        options,
      ),
    listPortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListPortMirroringOptionalParams,
    ) =>
      workloadNetworksListPortMirroring(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getPortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      portMirroringId: string,
      options?: WorkloadNetworksGetPortMirroringOptionalParams,
    ) =>
      workloadNetworksGetPortMirroring(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        options,
      ),
    createPortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworksCreatePortMirroringOptionalParams,
    ) =>
      workloadNetworksCreatePortMirroring(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    updatePortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworksUpdatePortMirroringOptionalParams,
    ) =>
      workloadNetworksUpdatePortMirroring(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    deletePortMirroring: (
      resourceGroupName: string,
      portMirroringId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeletePortMirroringOptionalParams,
    ) =>
      workloadNetworksDeletePortMirroring(
        context,
        subscriptionId,
        resourceGroupName,
        portMirroringId,
        privateCloudName,
        options,
      ),
    listVMGroups: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListVMGroupsOptionalParams,
    ) =>
      workloadNetworksListVMGroups(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getVMGroup: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      vmGroupId: string,
      options?: WorkloadNetworksGetVMGroupOptionalParams,
    ) =>
      workloadNetworksGetVMGroup(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        options,
      ),
    createVMGroup: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworksCreateVMGroupOptionalParams,
    ) =>
      workloadNetworksCreateVMGroup(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    updateVMGroup: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworksUpdateVMGroupOptionalParams,
    ) =>
      workloadNetworksUpdateVMGroup(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    deleteVMGroup: (
      resourceGroupName: string,
      vmGroupId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeleteVMGroupOptionalParams,
    ) =>
      workloadNetworksDeleteVMGroup(
        context,
        subscriptionId,
        resourceGroupName,
        vmGroupId,
        privateCloudName,
        options,
      ),
    listVirtualMachines: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListVirtualMachinesOptionalParams,
    ) =>
      workloadNetworksListVirtualMachines(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getVirtualMachine: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      virtualMachineId: string,
      options?: WorkloadNetworksGetVirtualMachineOptionalParams,
    ) =>
      workloadNetworksGetVirtualMachine(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        virtualMachineId,
        options,
      ),
    listDnsServices: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListDnsServicesOptionalParams,
    ) =>
      workloadNetworksListDnsServices(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getDnsService: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsServiceId: string,
      options?: WorkloadNetworksGetDnsServiceOptionalParams,
    ) =>
      workloadNetworksGetDnsService(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        options,
      ),
    createDnsService: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworksCreateDnsServiceOptionalParams,
    ) =>
      workloadNetworksCreateDnsService(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    updateDnsService: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworksUpdateDnsServiceOptionalParams,
    ) =>
      workloadNetworksUpdateDnsService(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    deleteDnsService: (
      resourceGroupName: string,
      dnsServiceId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeleteDnsServiceOptionalParams,
    ) =>
      workloadNetworksDeleteDnsService(
        context,
        subscriptionId,
        resourceGroupName,
        dnsServiceId,
        privateCloudName,
        options,
      ),
    listDnsZones: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListDnsZonesOptionalParams,
    ) =>
      workloadNetworksListDnsZones(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getDnsZone: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsZoneId: string,
      options?: WorkloadNetworksGetDnsZoneOptionalParams,
    ) =>
      workloadNetworksGetDnsZone(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        options,
      ),
    createDnsZone: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworksCreateDnsZoneOptionalParams,
    ) =>
      workloadNetworksCreateDnsZone(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    updateDnsZone: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworksUpdateDnsZoneOptionalParams,
    ) =>
      workloadNetworksUpdateDnsZone(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    deleteDnsZone: (
      resourceGroupName: string,
      dnsZoneId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeleteDnsZoneOptionalParams,
    ) =>
      workloadNetworksDeleteDnsZone(
        context,
        subscriptionId,
        resourceGroupName,
        dnsZoneId,
        privateCloudName,
        options,
      ),
    listPublicIPs: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListPublicIPsOptionalParams,
    ) =>
      workloadNetworksListPublicIPs(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    getPublicIP: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      publicIPId: string,
      options?: WorkloadNetworksGetPublicIPOptionalParams,
    ) =>
      workloadNetworksGetPublicIP(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        publicIPId,
        options,
      ),
    createPublicIP: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      publicIPId: string,
      workloadNetworkPublicIP: WorkloadNetworkPublicIP,
      options?: WorkloadNetworksCreatePublicIPOptionalParams,
    ) =>
      workloadNetworksCreatePublicIP(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
    deletePublicIP: (
      resourceGroupName: string,
      publicIPId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeletePublicIPOptionalParams,
    ) =>
      workloadNetworksDeletePublicIP(
        context,
        subscriptionId,
        resourceGroupName,
        publicIPId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworksOperations(
  context: AvsContext,
  subscriptionId: string,
): WorkloadNetworksOperations {
  return {
    ...getWorkloadNetworks(context, subscriptionId),
  };
}
