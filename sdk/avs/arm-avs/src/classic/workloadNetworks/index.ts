// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetwork,
  WorkloadNetworkDhcp,
  WorkloadNetworkDnsService,
  WorkloadNetworkDnsZone,
  WorkloadNetworkGateway,
  WorkloadNetworkPortMirroring,
  WorkloadNetworkPublicIP,
  WorkloadNetworkSegment,
  WorkloadNetworkVirtualMachine,
  WorkloadNetworkVMGroup,
} from "../../models/models.js";
import {
  WorkloadNetworksDeleteVMGroupOptionalParams,
  WorkloadNetworksUpdateVMGroupOptionalParams,
  WorkloadNetworksCreateVMGroupOptionalParams,
  WorkloadNetworksGetVMGroupOptionalParams,
  WorkloadNetworksListVMGroupsOptionalParams,
  WorkloadNetworksGetVirtualMachineOptionalParams,
  WorkloadNetworksListVirtualMachinesOptionalParams,
  WorkloadNetworksDeleteSegmentOptionalParams,
  WorkloadNetworksUpdateSegmentOptionalParams,
  WorkloadNetworksCreateSegmentOptionalParams,
  WorkloadNetworksGetSegmentOptionalParams,
  WorkloadNetworksListSegmentsOptionalParams,
  WorkloadNetworksDeletePublicIPOptionalParams,
  WorkloadNetworksCreatePublicIPOptionalParams,
  WorkloadNetworksGetPublicIPOptionalParams,
  WorkloadNetworksListPublicIPsOptionalParams,
  WorkloadNetworksDeletePortMirroringOptionalParams,
  WorkloadNetworksUpdatePortMirroringOptionalParams,
  WorkloadNetworksCreatePortMirroringOptionalParams,
  WorkloadNetworksGetPortMirroringOptionalParams,
  WorkloadNetworksListPortMirroringOptionalParams,
  WorkloadNetworksGetGatewayOptionalParams,
  WorkloadNetworksListGatewaysOptionalParams,
  WorkloadNetworksDeleteDnsZoneOptionalParams,
  WorkloadNetworksUpdateDnsZoneOptionalParams,
  WorkloadNetworksCreateDnsZoneOptionalParams,
  WorkloadNetworksGetDnsZoneOptionalParams,
  WorkloadNetworksListDnsZonesOptionalParams,
  WorkloadNetworksDeleteDnsServiceOptionalParams,
  WorkloadNetworksUpdateDnsServiceOptionalParams,
  WorkloadNetworksCreateDnsServiceOptionalParams,
  WorkloadNetworksGetDnsServiceOptionalParams,
  WorkloadNetworksListDnsServiceOptionalParams,
  WorkloadNetworksDeleteDhcpOptionalParams,
  WorkloadNetworksUpdateDhcpOptionalParams,
  WorkloadNetworksCreateDhcpOptionalParams,
  WorkloadNetworksGetDhcpOptionalParams,
  WorkloadNetworksListDhcpOptionalParams,
  WorkloadNetworksGetOptionalParams,
  WorkloadNetworksListOptionalParams,
} from "../../api/workloadNetworks/options.js";
import {
  deleteVMGroup,
  updateVMGroup,
  createVMGroup,
  getVMGroup,
  listVMGroups,
  getVirtualMachine,
  listVirtualMachines,
  deleteSegment,
  updateSegment,
  createSegment,
  getSegment,
  listSegments,
  deletePublicIP,
  createPublicIP,
  getPublicIP,
  listPublicIPs,
  deletePortMirroring,
  updatePortMirroring,
  createPortMirroring,
  getPortMirroring,
  listPortMirroring,
  getGateway,
  listGateways,
  deleteDnsZone,
  updateDnsZone,
  createDnsZone,
  getDnsZone,
  listDnsZones,
  deleteDnsService,
  updateDnsService,
  createDnsService,
  getDnsService,
  listDnsService,
  deleteDhcp,
  updateDhcp,
  createDhcp,
  getDhcp,
  listDhcp,
  get,
  list,
} from "../../api/workloadNetworks/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworks operations. */
export interface WorkloadNetworksOperations {
  /** Delete a WorkloadNetworkVMGroup */
  deleteVMGroup: (
    resourceGroupName: string,
    vmGroupId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeleteVMGroupOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkVMGroup */
  updateVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworksUpdateVMGroupOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
  /** Create a WorkloadNetworkVMGroup */
  createVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworksCreateVMGroupOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
  /** Get a WorkloadNetworkVMGroup */
  getVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    options?: WorkloadNetworksGetVMGroupOptionalParams,
  ) => Promise<WorkloadNetworkVMGroup>;
  /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
  listVMGroups: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListVMGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
  /** Get a WorkloadNetworkVirtualMachine */
  getVirtualMachine: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    virtualMachineId: string,
    options?: WorkloadNetworksGetVirtualMachineOptionalParams,
  ) => Promise<WorkloadNetworkVirtualMachine>;
  /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
  listVirtualMachines: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListVirtualMachinesOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
  /** Delete a WorkloadNetworkSegment */
  deleteSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    options?: WorkloadNetworksDeleteSegmentOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkSegment */
  updateSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworksUpdateSegmentOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
  /** Create a WorkloadNetworkSegment */
  createSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworksCreateSegmentOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
  /** Get a WorkloadNetworkSegment */
  getSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    options?: WorkloadNetworksGetSegmentOptionalParams,
  ) => Promise<WorkloadNetworkSegment>;
  /** List WorkloadNetworkSegment resources by WorkloadNetwork */
  listSegments: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListSegmentsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
  /** Delete a WorkloadNetworkPublicIP */
  deletePublicIP: (
    resourceGroupName: string,
    publicIPId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeletePublicIPOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a WorkloadNetworkPublicIP */
  createPublicIP: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    publicIPId: string,
    workloadNetworkPublicIP: WorkloadNetworkPublicIP,
    options?: WorkloadNetworksCreatePublicIPOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
  /** Get a WorkloadNetworkPublicIP */
  getPublicIP: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    publicIPId: string,
    options?: WorkloadNetworksGetPublicIPOptionalParams,
  ) => Promise<WorkloadNetworkPublicIP>;
  /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
  listPublicIPs: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListPublicIPsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
  /** Delete a WorkloadNetworkPortMirroring */
  deletePortMirroring: (
    resourceGroupName: string,
    portMirroringId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeletePortMirroringOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkPortMirroring */
  updatePortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworksUpdatePortMirroringOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
  /** Create a WorkloadNetworkPortMirroring */
  createPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworksCreatePortMirroringOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
  /** Get a WorkloadNetworkPortMirroring */
  getPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    options?: WorkloadNetworksGetPortMirroringOptionalParams,
  ) => Promise<WorkloadNetworkPortMirroring>;
  /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
  listPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListPortMirroringOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
  /** Get a WorkloadNetworkGateway */
  getGateway: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    gatewayId: string,
    options?: WorkloadNetworksGetGatewayOptionalParams,
  ) => Promise<WorkloadNetworkGateway>;
  /** List WorkloadNetworkGateway resources by WorkloadNetwork */
  listGateways: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListGatewaysOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
  /** Delete a WorkloadNetworkDnsZone */
  deleteDnsZone: (
    resourceGroupName: string,
    dnsZoneId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeleteDnsZoneOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDnsZone */
  updateDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworksUpdateDnsZoneOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
  /** Create a WorkloadNetworkDnsZone */
  createDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworksCreateDnsZoneOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
  /** Get a WorkloadNetworkDnsZone */
  getDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    options?: WorkloadNetworksGetDnsZoneOptionalParams,
  ) => Promise<WorkloadNetworkDnsZone>;
  /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
  listDnsZones: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListDnsZonesOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
  /** Delete a WorkloadNetworkDnsService */
  deleteDnsService: (
    resourceGroupName: string,
    dnsServiceId: string,
    privateCloudName: string,
    options?: WorkloadNetworksDeleteDnsServiceOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDnsService */
  updateDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworksUpdateDnsServiceOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
  /** Create a WorkloadNetworkDnsService */
  createDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworksCreateDnsServiceOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
  /** Get a WorkloadNetworkDnsService */
  getDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    options?: WorkloadNetworksGetDnsServiceOptionalParams,
  ) => Promise<WorkloadNetworkDnsService>;
  /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
  listDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListDnsServiceOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
  /** Delete a WorkloadNetworkDhcp */
  deleteDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    options?: WorkloadNetworksDeleteDhcpOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDhcp */
  updateDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworksUpdateDhcpOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Create a WorkloadNetworkDhcp */
  createDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworksCreateDhcpOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Get a WorkloadNetworkDhcp */
  getDhcp: (
    resourceGroupName: string,
    dhcpId: string,
    privateCloudName: string,
    options?: WorkloadNetworksGetDhcpOptionalParams,
  ) => Promise<WorkloadNetworkDhcp>;
  /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
  listDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksListDhcpOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
  /** Get a WorkloadNetwork */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksGetOptionalParams,
  ) => Promise<WorkloadNetwork>;
  /** List WorkloadNetwork resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetwork>;
}

function _getWorkloadNetworks(context: AzureVMwareSolutionAPIContext) {
  return {
    deleteVMGroup: (
      resourceGroupName: string,
      vmGroupId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeleteVMGroupOptionalParams,
    ) => deleteVMGroup(context, resourceGroupName, vmGroupId, privateCloudName, options),
    updateVMGroup: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworksUpdateVMGroupOptionalParams,
    ) =>
      updateVMGroup(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        workloadNetworkVMGroup,
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
      createVMGroup(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    getVMGroup: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      vmGroupId: string,
      options?: WorkloadNetworksGetVMGroupOptionalParams,
    ) =>
      getVMGroup(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        options,
      ),
    listVMGroups: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListVMGroupsOptionalParams,
    ) => listVMGroups(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    getVirtualMachine: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      virtualMachineId: string,
      options?: WorkloadNetworksGetVirtualMachineOptionalParams,
    ) =>
      getVirtualMachine(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        virtualMachineId,
        options,
      ),
    listVirtualMachines: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListVirtualMachinesOptionalParams,
    ) =>
      listVirtualMachines(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    deleteSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      segmentId: string,
      options?: WorkloadNetworksDeleteSegmentOptionalParams,
    ) =>
      deleteSegment(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
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
      updateSegment(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        workloadNetworkSegment,
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
      createSegment(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    getSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      segmentId: string,
      options?: WorkloadNetworksGetSegmentOptionalParams,
    ) =>
      getSegment(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        options,
      ),
    listSegments: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListSegmentsOptionalParams,
    ) => listSegments(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deletePublicIP: (
      resourceGroupName: string,
      publicIPId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeletePublicIPOptionalParams,
    ) => deletePublicIP(context, resourceGroupName, publicIPId, privateCloudName, options),
    createPublicIP: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      publicIPId: string,
      workloadNetworkPublicIP: WorkloadNetworkPublicIP,
      options?: WorkloadNetworksCreatePublicIPOptionalParams,
    ) =>
      createPublicIP(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
    getPublicIP: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      publicIPId: string,
      options?: WorkloadNetworksGetPublicIPOptionalParams,
    ) =>
      getPublicIP(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        publicIPId,
        options,
      ),
    listPublicIPs: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListPublicIPsOptionalParams,
    ) => listPublicIPs(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deletePortMirroring: (
      resourceGroupName: string,
      portMirroringId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeletePortMirroringOptionalParams,
    ) =>
      deletePortMirroring(context, resourceGroupName, portMirroringId, privateCloudName, options),
    updatePortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworksUpdatePortMirroringOptionalParams,
    ) =>
      updatePortMirroring(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        workloadNetworkPortMirroring,
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
      createPortMirroring(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    getPortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      portMirroringId: string,
      options?: WorkloadNetworksGetPortMirroringOptionalParams,
    ) =>
      getPortMirroring(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        options,
      ),
    listPortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListPortMirroringOptionalParams,
    ) =>
      listPortMirroring(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    getGateway: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      gatewayId: string,
      options?: WorkloadNetworksGetGatewayOptionalParams,
    ) =>
      getGateway(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        gatewayId,
        options,
      ),
    listGateways: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListGatewaysOptionalParams,
    ) => listGateways(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deleteDnsZone: (
      resourceGroupName: string,
      dnsZoneId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeleteDnsZoneOptionalParams,
    ) => deleteDnsZone(context, resourceGroupName, dnsZoneId, privateCloudName, options),
    updateDnsZone: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworksUpdateDnsZoneOptionalParams,
    ) =>
      updateDnsZone(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        workloadNetworkDnsZone,
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
      createDnsZone(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    getDnsZone: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsZoneId: string,
      options?: WorkloadNetworksGetDnsZoneOptionalParams,
    ) =>
      getDnsZone(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        options,
      ),
    listDnsZones: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListDnsZonesOptionalParams,
    ) => listDnsZones(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deleteDnsService: (
      resourceGroupName: string,
      dnsServiceId: string,
      privateCloudName: string,
      options?: WorkloadNetworksDeleteDnsServiceOptionalParams,
    ) => deleteDnsService(context, resourceGroupName, dnsServiceId, privateCloudName, options),
    updateDnsService: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworksUpdateDnsServiceOptionalParams,
    ) =>
      updateDnsService(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        workloadNetworkDnsService,
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
      createDnsService(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    getDnsService: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsServiceId: string,
      options?: WorkloadNetworksGetDnsServiceOptionalParams,
    ) =>
      getDnsService(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        options,
      ),
    listDnsService: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListDnsServiceOptionalParams,
    ) => listDnsService(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deleteDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dhcpId: string,
      options?: WorkloadNetworksDeleteDhcpOptionalParams,
    ) =>
      deleteDhcp(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
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
      updateDhcp(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        workloadNetworkDhcp,
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
      createDhcp(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    getDhcp: (
      resourceGroupName: string,
      dhcpId: string,
      privateCloudName: string,
      options?: WorkloadNetworksGetDhcpOptionalParams,
    ) => getDhcp(context, resourceGroupName, dhcpId, privateCloudName, options),
    listDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksListDhcpOptionalParams,
    ) => listDhcp(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksGetOptionalParams,
    ) => get(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworksOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworksOperations {
  return {
    ..._getWorkloadNetworks(context),
  };
}
