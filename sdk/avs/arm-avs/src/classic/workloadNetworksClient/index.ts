// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Context } from "../../api/context.js";
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
  WorkloadNetworksClientDeleteVMGroupOptionalParams,
  WorkloadNetworksClientUpdateVMGroupOptionalParams,
  WorkloadNetworksClientCreateVMGroupOptionalParams,
  WorkloadNetworksClientGetVMGroupOptionalParams,
  WorkloadNetworksClientListVMGropusOptionalParams,
  WorkloadNetworksClientGetVirtualMachineOptionalParams,
  WorkloadNetworksClientListVirtualMachinesOptionalParams,
  WorkloadNetworksClientDeleteSegmentOptionalParams,
  WorkloadNetworksClientUpdateSegmentOptionalParams,
  WorkloadNetworksClientCreateSegmentOptionalParams,
  WorkloadNetworksClientGetSegmentOptionalParams,
  WorkloadNetworksClientListSegmentsOptionalParams,
  WorkloadNetworksClientDeletePublicIPOptionalParams,
  WorkloadNetworksClientCreatePublicIPOptionalParams,
  WorkloadNetworksClientGetPublicIPOptionalParams,
  WorkloadNetworksClientListPublicIPsOptionalParams,
  WorkloadNetworksClientDeletePortMirroringOptionalParams,
  WorkloadNetworksClientUpdatePortMirroringOptionalParams,
  WorkloadNetworksClientCreatePortMirroringOptionalParams,
  WorkloadNetworksClientGetPortMirroringOptionalParams,
  WorkloadNetworksClientListPortMirroringOptionalParams,
  WorkloadNetworksClientGetGatewayOptionalParams,
  WorkloadNetworksClientListGatewaysOptionalParams,
  WorkloadNetworksClientDeleteDnsZoneOptionalParams,
  WorkloadNetworksClientUpdateDnsZoneOptionalParams,
  WorkloadNetworksClientCreateDnsZoneOptionalParams,
  WorkloadNetworksClientGetDnsZoneOptionalParams,
  WorkloadNetworksClientListDnsZonesOptionalParams,
  WorkloadNetworksClientDeleteDnsServiceOptionalParams,
  WorkloadNetworksClientUpdateDnsServiceOptionalParams,
  WorkloadNetworksClientCreateDnsServiceOptionalParams,
  WorkloadNetworksClientGetDnsServiceOptionalParams,
  WorkloadNetworksClientListDnsServiceOptionalParams,
  WorkloadNetworksClientDeleteDhcpOptionalParams,
  WorkloadNetworksClientUpdateDhcpOptionalParams,
  WorkloadNetworksClientCreateDhcpOptionalParams,
  WorkloadNetworksClientGetDhcpOptionalParams,
  WorkloadNetworksClientListDhcpOptionalParams,
  WorkloadNetworksClientGetOptionalParams,
  WorkloadNetworksClientListOptionalParams,
} from "../../api/workloadNetworksClient/options.js";
import {
  deleteVMGroup,
  updateVMGroup,
  createVMGroup,
  getVMGroup,
  listVMGropus,
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
} from "../../api/workloadNetworksClient/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworksClient operations. */
export interface WorkloadNetworksClientOperations {
  /** Delete a WorkloadNetworkVMGroup */
  deleteVMGroup: (
    resourceGroupName: string,
    vmGroupId: string,
    privateCloudName: string,
    options?: WorkloadNetworksClientDeleteVMGroupOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkVMGroup */
  updateVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworksClientUpdateVMGroupOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
  /** Create a WorkloadNetworkVMGroup */
  createVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworksClientCreateVMGroupOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
  /** Get a WorkloadNetworkVMGroup */
  getVMGroup: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    vmGroupId: string,
    options?: WorkloadNetworksClientGetVMGroupOptionalParams,
  ) => Promise<WorkloadNetworkVMGroup>;
  /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
  listVMGropus: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListVMGropusOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
  /** Get a WorkloadNetworkVirtualMachine */
  getVirtualMachine: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    virtualMachineId: string,
    options?: WorkloadNetworksClientGetVirtualMachineOptionalParams,
  ) => Promise<WorkloadNetworkVirtualMachine>;
  /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
  listVirtualMachines: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListVirtualMachinesOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
  /** Delete a WorkloadNetworkSegment */
  deleteSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    options?: WorkloadNetworksClientDeleteSegmentOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkSegment */
  updateSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworksClientUpdateSegmentOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
  /** Create a WorkloadNetworkSegment */
  createSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworksClientCreateSegmentOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
  /** Get a WorkloadNetworkSegment */
  getSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    segmentId: string,
    options?: WorkloadNetworksClientGetSegmentOptionalParams,
  ) => Promise<WorkloadNetworkSegment>;
  /** List WorkloadNetworkSegment resources by WorkloadNetwork */
  listSegments: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListSegmentsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
  /** Delete a WorkloadNetworkPublicIP */
  deletePublicIP: (
    resourceGroupName: string,
    publicIPId: string,
    privateCloudName: string,
    options?: WorkloadNetworksClientDeletePublicIPOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a WorkloadNetworkPublicIP */
  createPublicIP: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    publicIPId: string,
    workloadNetworkPublicIP: WorkloadNetworkPublicIP,
    options?: WorkloadNetworksClientCreatePublicIPOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
  /** Get a WorkloadNetworkPublicIP */
  getPublicIP: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    publicIPId: string,
    options?: WorkloadNetworksClientGetPublicIPOptionalParams,
  ) => Promise<WorkloadNetworkPublicIP>;
  /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
  listPublicIPs: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListPublicIPsOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
  /** Delete a WorkloadNetworkPortMirroring */
  deletePortMirroring: (
    resourceGroupName: string,
    portMirroringId: string,
    privateCloudName: string,
    options?: WorkloadNetworksClientDeletePortMirroringOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkPortMirroring */
  updatePortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworksClientUpdatePortMirroringOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
  /** Create a WorkloadNetworkPortMirroring */
  createPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworksClientCreatePortMirroringOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
  /** Get a WorkloadNetworkPortMirroring */
  getPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    portMirroringId: string,
    options?: WorkloadNetworksClientGetPortMirroringOptionalParams,
  ) => Promise<WorkloadNetworkPortMirroring>;
  /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
  listPortMirroring: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListPortMirroringOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
  /** Get a WorkloadNetworkGateway */
  getGateway: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    gatewayId: string,
    options?: WorkloadNetworksClientGetGatewayOptionalParams,
  ) => Promise<WorkloadNetworkGateway>;
  /** List WorkloadNetworkGateway resources by WorkloadNetwork */
  listGateways: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListGatewaysOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
  /** Delete a WorkloadNetworkDnsZone */
  deleteDnsZone: (
    resourceGroupName: string,
    dnsZoneId: string,
    privateCloudName: string,
    options?: WorkloadNetworksClientDeleteDnsZoneOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDnsZone */
  updateDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworksClientUpdateDnsZoneOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
  /** Create a WorkloadNetworkDnsZone */
  createDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworksClientCreateDnsZoneOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
  /** Get a WorkloadNetworkDnsZone */
  getDnsZone: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsZoneId: string,
    options?: WorkloadNetworksClientGetDnsZoneOptionalParams,
  ) => Promise<WorkloadNetworkDnsZone>;
  /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
  listDnsZones: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListDnsZonesOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
  /** Delete a WorkloadNetworkDnsService */
  deleteDnsService: (
    resourceGroupName: string,
    dnsServiceId: string,
    privateCloudName: string,
    options?: WorkloadNetworksClientDeleteDnsServiceOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDnsService */
  updateDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworksClientUpdateDnsServiceOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
  /** Create a WorkloadNetworkDnsService */
  createDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworksClientCreateDnsServiceOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
  /** Get a WorkloadNetworkDnsService */
  getDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dnsServiceId: string,
    options?: WorkloadNetworksClientGetDnsServiceOptionalParams,
  ) => Promise<WorkloadNetworkDnsService>;
  /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
  listDnsService: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListDnsServiceOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
  /** Delete a WorkloadNetworkDhcp */
  deleteDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    options?: WorkloadNetworksClientDeleteDhcpOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDhcp */
  updateDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworksClientUpdateDhcpOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Create a WorkloadNetworkDhcp */
  createDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworksClientCreateDhcpOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Get a WorkloadNetworkDhcp */
  getDhcp: (
    resourceGroupName: string,
    dhcpId: string,
    privateCloudName: string,
    options?: WorkloadNetworksClientGetDhcpOptionalParams,
  ) => Promise<WorkloadNetworkDhcp>;
  /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
  listDhcp: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientListDhcpOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
  /** Get a WorkloadNetwork */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    workloadNetworkName: string,
    options?: WorkloadNetworksClientGetOptionalParams,
  ) => Promise<WorkloadNetwork>;
  /** List WorkloadNetwork resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksClientListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetwork>;
}

function _getWorkloadNetworksClient(context: Context) {
  return {
    deleteVMGroup: (
      resourceGroupName: string,
      vmGroupId: string,
      privateCloudName: string,
      options?: WorkloadNetworksClientDeleteVMGroupOptionalParams,
    ) => deleteVMGroup(context, resourceGroupName, vmGroupId, privateCloudName, options),
    updateVMGroup: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworksClientUpdateVMGroupOptionalParams,
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
      options?: WorkloadNetworksClientCreateVMGroupOptionalParams,
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
      options?: WorkloadNetworksClientGetVMGroupOptionalParams,
    ) =>
      getVMGroup(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        options,
      ),
    listVMGropus: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksClientListVMGropusOptionalParams,
    ) => listVMGropus(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    getVirtualMachine: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      virtualMachineId: string,
      options?: WorkloadNetworksClientGetVirtualMachineOptionalParams,
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
      options?: WorkloadNetworksClientListVirtualMachinesOptionalParams,
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
      options?: WorkloadNetworksClientDeleteSegmentOptionalParams,
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
      options?: WorkloadNetworksClientUpdateSegmentOptionalParams,
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
      options?: WorkloadNetworksClientCreateSegmentOptionalParams,
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
      options?: WorkloadNetworksClientGetSegmentOptionalParams,
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
      options?: WorkloadNetworksClientListSegmentsOptionalParams,
    ) => listSegments(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deletePublicIP: (
      resourceGroupName: string,
      publicIPId: string,
      privateCloudName: string,
      options?: WorkloadNetworksClientDeletePublicIPOptionalParams,
    ) => deletePublicIP(context, resourceGroupName, publicIPId, privateCloudName, options),
    createPublicIP: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      publicIPId: string,
      workloadNetworkPublicIP: WorkloadNetworkPublicIP,
      options?: WorkloadNetworksClientCreatePublicIPOptionalParams,
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
      options?: WorkloadNetworksClientGetPublicIPOptionalParams,
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
      options?: WorkloadNetworksClientListPublicIPsOptionalParams,
    ) => listPublicIPs(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deletePortMirroring: (
      resourceGroupName: string,
      portMirroringId: string,
      privateCloudName: string,
      options?: WorkloadNetworksClientDeletePortMirroringOptionalParams,
    ) =>
      deletePortMirroring(context, resourceGroupName, portMirroringId, privateCloudName, options),
    updatePortMirroring: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworksClientUpdatePortMirroringOptionalParams,
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
      options?: WorkloadNetworksClientCreatePortMirroringOptionalParams,
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
      options?: WorkloadNetworksClientGetPortMirroringOptionalParams,
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
      options?: WorkloadNetworksClientListPortMirroringOptionalParams,
    ) =>
      listPortMirroring(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    getGateway: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      gatewayId: string,
      options?: WorkloadNetworksClientGetGatewayOptionalParams,
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
      options?: WorkloadNetworksClientListGatewaysOptionalParams,
    ) => listGateways(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deleteDnsZone: (
      resourceGroupName: string,
      dnsZoneId: string,
      privateCloudName: string,
      options?: WorkloadNetworksClientDeleteDnsZoneOptionalParams,
    ) => deleteDnsZone(context, resourceGroupName, dnsZoneId, privateCloudName, options),
    updateDnsZone: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworksClientUpdateDnsZoneOptionalParams,
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
      options?: WorkloadNetworksClientCreateDnsZoneOptionalParams,
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
      options?: WorkloadNetworksClientGetDnsZoneOptionalParams,
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
      options?: WorkloadNetworksClientListDnsZonesOptionalParams,
    ) => listDnsZones(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deleteDnsService: (
      resourceGroupName: string,
      dnsServiceId: string,
      privateCloudName: string,
      options?: WorkloadNetworksClientDeleteDnsServiceOptionalParams,
    ) => deleteDnsService(context, resourceGroupName, dnsServiceId, privateCloudName, options),
    updateDnsService: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworksClientUpdateDnsServiceOptionalParams,
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
      options?: WorkloadNetworksClientCreateDnsServiceOptionalParams,
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
      options?: WorkloadNetworksClientGetDnsServiceOptionalParams,
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
      options?: WorkloadNetworksClientListDnsServiceOptionalParams,
    ) => listDnsService(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    deleteDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      dhcpId: string,
      options?: WorkloadNetworksClientDeleteDhcpOptionalParams,
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
      options?: WorkloadNetworksClientUpdateDhcpOptionalParams,
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
      options?: WorkloadNetworksClientCreateDhcpOptionalParams,
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
      options?: WorkloadNetworksClientGetDhcpOptionalParams,
    ) => getDhcp(context, resourceGroupName, dhcpId, privateCloudName, options),
    listDhcp: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksClientListDhcpOptionalParams,
    ) => listDhcp(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      workloadNetworkName: string,
      options?: WorkloadNetworksClientGetOptionalParams,
    ) => get(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksClientListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworksClientOperations(
  context: Context,
): WorkloadNetworksClientOperations {
  return {
    ..._getWorkloadNetworksClient(context),
  };
}
