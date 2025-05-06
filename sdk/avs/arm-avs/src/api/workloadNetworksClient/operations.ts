// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Context as Client } from "../index.js";
import {
  _WorkloadNetworkList,
  _workloadNetworkListDeserializer,
  WorkloadNetwork,
  workloadNetworkDeserializer,
  errorResponseDeserializer,
  _WorkloadNetworkDhcpList,
  _workloadNetworkDhcpListDeserializer,
  WorkloadNetworkDhcp,
  workloadNetworkDhcpSerializer,
  workloadNetworkDhcpDeserializer,
  _WorkloadNetworkDnsServicesList,
  _workloadNetworkDnsServicesListDeserializer,
  WorkloadNetworkDnsService,
  workloadNetworkDnsServiceSerializer,
  workloadNetworkDnsServiceDeserializer,
  _WorkloadNetworkDnsZonesList,
  _workloadNetworkDnsZonesListDeserializer,
  WorkloadNetworkDnsZone,
  workloadNetworkDnsZoneSerializer,
  workloadNetworkDnsZoneDeserializer,
  _WorkloadNetworkGatewayList,
  _workloadNetworkGatewayListDeserializer,
  WorkloadNetworkGateway,
  workloadNetworkGatewayDeserializer,
  _WorkloadNetworkPortMirroringList,
  _workloadNetworkPortMirroringListDeserializer,
  WorkloadNetworkPortMirroring,
  workloadNetworkPortMirroringSerializer,
  workloadNetworkPortMirroringDeserializer,
  _WorkloadNetworkPublicIPsList,
  _workloadNetworkPublicIPsListDeserializer,
  WorkloadNetworkPublicIP,
  workloadNetworkPublicIPSerializer,
  workloadNetworkPublicIPDeserializer,
  _WorkloadNetworkSegmentsList,
  _workloadNetworkSegmentsListDeserializer,
  WorkloadNetworkSegment,
  workloadNetworkSegmentSerializer,
  workloadNetworkSegmentDeserializer,
  _WorkloadNetworkVirtualMachinesList,
  _workloadNetworkVirtualMachinesListDeserializer,
  WorkloadNetworkVirtualMachine,
  workloadNetworkVirtualMachineDeserializer,
  _WorkloadNetworkVMGroupsList,
  _workloadNetworkVMGroupsListDeserializer,
  WorkloadNetworkVMGroup,
  workloadNetworkVMGroupSerializer,
  workloadNetworkVMGroupDeserializer,
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
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _deleteVMGroupSend(
  context: Client,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeleteVMGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmGroupId: vmGroupId,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deleteVMGroupDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkVMGroup */
export function deleteVMGroup(
  context: Client,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeleteVMGroupOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteVMGroupDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteVMGroupSend(context, resourceGroupName, vmGroupId, privateCloudName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateVMGroupSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksClientUpdateVMGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      vmGroupId: vmGroupId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkVMGroupSerializer(workloadNetworkVMGroup),
  });
}

export async function _updateVMGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Update a WorkloadNetworkVMGroup */
export function updateVMGroup(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksClientUpdateVMGroupOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(context, _updateVMGroupDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateVMGroupSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
}

export function _createVMGroupSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksClientCreateVMGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      vmGroupId: vmGroupId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkVMGroupSerializer(workloadNetworkVMGroup),
  });
}

export async function _createVMGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Create a WorkloadNetworkVMGroup */
export function createVMGroup(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksClientCreateVMGroupOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(context, _createVMGroupDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createVMGroupSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
}

export function _getVMGroupSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  options: WorkloadNetworksClientGetVMGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      vmGroupId: vmGroupId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getVMGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Get a WorkloadNetworkVMGroup */
export async function getVMGroup(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  options: WorkloadNetworksClientGetVMGroupOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkVMGroup> {
  const result = await _getVMGroupSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    vmGroupId,
    options,
  );
  return _getVMGroupDeserialize(result);
}

export function _listVMGropusSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListVMGropusOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listVMGropusDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkVMGroupsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkVMGroupsListDeserializer(result.body);
}

/** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
export function listVMGropus(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListVMGropusOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkVMGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listVMGropusSend(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    _listVMGropusDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getVirtualMachineSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  virtualMachineId: string,
  options: WorkloadNetworksClientGetVirtualMachineOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/virtualMachines/{virtualMachineId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      virtualMachineId: virtualMachineId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getVirtualMachineDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVirtualMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVirtualMachineDeserializer(result.body);
}

/** Get a WorkloadNetworkVirtualMachine */
export async function getVirtualMachine(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  virtualMachineId: string,
  options: WorkloadNetworksClientGetVirtualMachineOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkVirtualMachine> {
  const result = await _getVirtualMachineSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    virtualMachineId,
    options,
  );
  return _getVirtualMachineDeserialize(result);
}

export function _listVirtualMachinesSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListVirtualMachinesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/virtualMachines{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listVirtualMachinesDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkVirtualMachinesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkVirtualMachinesListDeserializer(result.body);
}

/** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
export function listVirtualMachines(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListVirtualMachinesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listVirtualMachinesSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _listVirtualMachinesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteSegmentSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksClientDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      segmentId: segmentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deleteSegmentDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkSegment */
export function deleteSegment(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksClientDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteSegmentDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteSegmentSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSegmentSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksClientUpdateSegmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      segmentId: segmentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkSegmentSerializer(workloadNetworkSegment),
  });
}

export async function _updateSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Update a WorkloadNetworkSegment */
export function updateSegment(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksClientUpdateSegmentOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(context, _updateSegmentDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSegmentSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
}

export function _createSegmentSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksClientCreateSegmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      segmentId: segmentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkSegmentSerializer(workloadNetworkSegment),
  });
}

export async function _createSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Create a WorkloadNetworkSegment */
export function createSegment(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksClientCreateSegmentOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(context, _createSegmentDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSegmentSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
}

export function _getSegmentSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksClientGetSegmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      segmentId: segmentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Get a WorkloadNetworkSegment */
export async function getSegment(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksClientGetSegmentOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkSegment> {
  const result = await _getSegmentSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    segmentId,
    options,
  );
  return _getSegmentDeserialize(result);
}

export function _listSegmentsSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListSegmentsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listSegmentsDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkSegmentsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkSegmentsListDeserializer(result.body);
}

/** List WorkloadNetworkSegment resources by WorkloadNetwork */
export function listSegments(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListSegmentsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkSegment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listSegmentsSend(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    _listSegmentsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deletePublicIPSend(
  context: Client,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeletePublicIPOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publicIPId: publicIPId,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deletePublicIPDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkPublicIP */
export function deletePublicIP(
  context: Client,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeletePublicIPOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deletePublicIPDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deletePublicIPSend(context, resourceGroupName, publicIPId, privateCloudName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createPublicIPSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworksClientCreatePublicIPOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/publicIPs/{publicIPId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      publicIPId: publicIPId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkPublicIPSerializer(workloadNetworkPublicIP),
  });
}

export async function _createPublicIPDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPublicIPDeserializer(result.body);
}

/** Create a WorkloadNetworkPublicIP */
export function createPublicIP(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworksClientCreatePublicIPOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP> {
  return getLongRunningPoller(context, _createPublicIPDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createPublicIPSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
}

export function _getPublicIPSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  options: WorkloadNetworksClientGetPublicIPOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/publicIPs/{publicIPId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      publicIPId: publicIPId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getPublicIPDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPublicIPDeserializer(result.body);
}

/** Get a WorkloadNetworkPublicIP */
export async function getPublicIP(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  options: WorkloadNetworksClientGetPublicIPOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkPublicIP> {
  const result = await _getPublicIPSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    publicIPId,
    options,
  );
  return _getPublicIPDeserialize(result);
}

export function _listPublicIPsSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListPublicIPsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/publicIPs{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listPublicIPsDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPublicIPsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkPublicIPsListDeserializer(result.body);
}

/** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
export function listPublicIPs(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListPublicIPsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkPublicIP> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listPublicIPsSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _listPublicIPsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deletePortMirroringSend(
  context: Client,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeletePortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      portMirroringId: portMirroringId,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deletePortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkPortMirroring */
export function deletePortMirroring(
  context: Client,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeletePortMirroringOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deletePortMirroringDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deletePortMirroringSend(
        context,
        resourceGroupName,
        portMirroringId,
        privateCloudName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updatePortMirroringSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksClientUpdatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      portMirroringId: portMirroringId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkPortMirroringSerializer(workloadNetworkPortMirroring),
  });
}

export async function _updatePortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Update a WorkloadNetworkPortMirroring */
export function updatePortMirroring(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksClientUpdatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring> {
  return getLongRunningPoller(context, _updatePortMirroringDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updatePortMirroringSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
}

export function _createPortMirroringSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksClientCreatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      portMirroringId: portMirroringId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkPortMirroringSerializer(workloadNetworkPortMirroring),
  });
}

export async function _createPortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Create a WorkloadNetworkPortMirroring */
export function createPortMirroring(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksClientCreatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring> {
  return getLongRunningPoller(context, _createPortMirroringDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createPortMirroringSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
}

export function _getPortMirroringSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  options: WorkloadNetworksClientGetPortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      portMirroringId: portMirroringId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getPortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Get a WorkloadNetworkPortMirroring */
export async function getPortMirroring(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  options: WorkloadNetworksClientGetPortMirroringOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkPortMirroring> {
  const result = await _getPortMirroringSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    portMirroringId,
    options,
  );
  return _getPortMirroringDeserialize(result);
}

export function _listPortMirroringSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListPortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listPortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPortMirroringList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkPortMirroringListDeserializer(result.body);
}

/** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
export function listPortMirroring(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListPortMirroringOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkPortMirroring> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listPortMirroringSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _listPortMirroringDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getGatewaySend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  gatewayId: string,
  options: WorkloadNetworksClientGetGatewayOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/gateways/{gatewayId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      gatewayId: gatewayId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getGatewayDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkGateway> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkGatewayDeserializer(result.body);
}

/** Get a WorkloadNetworkGateway */
export async function getGateway(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  gatewayId: string,
  options: WorkloadNetworksClientGetGatewayOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkGateway> {
  const result = await _getGatewaySend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    gatewayId,
    options,
  );
  return _getGatewayDeserialize(result);
}

export function _listGatewaysSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListGatewaysOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/gateways{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listGatewaysDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkGatewayList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkGatewayListDeserializer(result.body);
}

/** List WorkloadNetworkGateway resources by WorkloadNetwork */
export function listGateways(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListGatewaysOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkGateway> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listGatewaysSend(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    _listGatewaysDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteDnsZoneSend(
  context: Client,
  resourceGroupName: string,
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeleteDnsZoneOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      dnsZoneId: dnsZoneId,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deleteDnsZoneDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkDnsZone */
export function deleteDnsZone(
  context: Client,
  resourceGroupName: string,
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeleteDnsZoneOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteDnsZoneDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteDnsZoneSend(context, resourceGroupName, dnsZoneId, privateCloudName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateDnsZoneSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksClientUpdateDnsZoneOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dnsZoneId: dnsZoneId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkDnsZoneSerializer(workloadNetworkDnsZone),
  });
}

export async function _updateDnsZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Update a WorkloadNetworkDnsZone */
export function updateDnsZone(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksClientUpdateDnsZoneOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(context, _updateDnsZoneDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateDnsZoneSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
}

export function _createDnsZoneSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksClientCreateDnsZoneOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dnsZoneId: dnsZoneId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkDnsZoneSerializer(workloadNetworkDnsZone),
  });
}

export async function _createDnsZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Create a WorkloadNetworkDnsZone */
export function createDnsZone(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksClientCreateDnsZoneOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(context, _createDnsZoneDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createDnsZoneSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
}

export function _getDnsZoneSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  options: WorkloadNetworksClientGetDnsZoneOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dnsZoneId: dnsZoneId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDnsZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Get a WorkloadNetworkDnsZone */
export async function getDnsZone(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  options: WorkloadNetworksClientGetDnsZoneOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkDnsZone> {
  const result = await _getDnsZoneSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    dnsZoneId,
    options,
  );
  return _getDnsZoneDeserialize(result);
}

export function _listDnsZonesSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListDnsZonesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDnsZonesDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDnsZonesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkDnsZonesListDeserializer(result.body);
}

/** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
export function listDnsZones(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListDnsZonesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDnsZone> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listDnsZonesSend(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    _listDnsZonesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteDnsServiceSend(
  context: Client,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeleteDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      dnsServiceId: dnsServiceId,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deleteDnsServiceDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkDnsService */
export function deleteDnsService(
  context: Client,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientDeleteDnsServiceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteDnsServiceDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteDnsServiceSend(context, resourceGroupName, dnsServiceId, privateCloudName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateDnsServiceSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksClientUpdateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dnsServiceId: dnsServiceId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
  });
}

export async function _updateDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Update a WorkloadNetworkDnsService */
export function updateDnsService(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksClientUpdateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService> {
  return getLongRunningPoller(context, _updateDnsServiceDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateDnsServiceSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
}

export function _createDnsServiceSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksClientCreateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dnsServiceId: dnsServiceId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
  });
}

export async function _createDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Create a WorkloadNetworkDnsService */
export function createDnsService(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksClientCreateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService> {
  return getLongRunningPoller(context, _createDnsServiceDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createDnsServiceSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
}

export function _getDnsServiceSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  options: WorkloadNetworksClientGetDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dnsServiceId: dnsServiceId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Get a WorkloadNetworkDnsService */
export async function getDnsService(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  options: WorkloadNetworksClientGetDnsServiceOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkDnsService> {
  const result = await _getDnsServiceSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    dnsServiceId,
    options,
  );
  return _getDnsServiceDeserialize(result);
}

export function _listDnsServiceSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDnsServicesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkDnsServicesListDeserializer(result.body);
}

/** List WorkloadNetworkDnsService resources by WorkloadNetwork */
export function listDnsService(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListDnsServiceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDnsService> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listDnsServiceSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _listDnsServiceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteDhcpSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  options: WorkloadNetworksClientDeleteDhcpOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dhcpId: dhcpId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deleteDhcpDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkDhcp */
export function deleteDhcp(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  options: WorkloadNetworksClientDeleteDhcpOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteDhcpDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteDhcpSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateDhcpSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksClientUpdateDhcpOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dhcpId: dhcpId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkDhcpSerializer(workloadNetworkDhcp),
  });
}

export async function _updateDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Update a WorkloadNetworkDhcp */
export function updateDhcp(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksClientUpdateDhcpOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(context, _updateDhcpDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateDhcpSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _createDhcpSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksClientCreateDhcpOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      dhcpId: dhcpId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: workloadNetworkDhcpSerializer(workloadNetworkDhcp),
  });
}

export async function _createDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Create a WorkloadNetworkDhcp */
export function createDhcp(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksClientCreateDhcpOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(context, _createDhcpDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createDhcpSend(
        context,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _getDhcpSend(
  context: Client,
  resourceGroupName: string,
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientGetDhcpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      dhcpId: dhcpId,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Get a WorkloadNetworkDhcp */
export async function getDhcp(
  context: Client,
  resourceGroupName: string,
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworksClientGetDhcpOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDhcp> {
  const result = await _getDhcpSend(context, resourceGroupName, dhcpId, privateCloudName, options);
  return _getDhcpDeserialize(result);
}

export function _listDhcpSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListDhcpOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDhcpList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkDhcpListDeserializer(result.body);
}

/** List WorkloadNetworkDhcp resources by WorkloadNetwork */
export function listDhcp(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientListDhcpOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDhcp> {
  return buildPagedAsyncIterator(
    context,
    () => _listDhcpSend(context, resourceGroupName, privateCloudName, workloadNetworkName, options),
    _listDhcpDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      workloadNetworkName: workloadNetworkName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<WorkloadNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDeserializer(result.body);
}

/** Get a WorkloadNetwork */
export async function get(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksClientGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetwork> {
  const result = await _getSend(
    context,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    options,
  );
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksClientListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkListDeserializer(result.body);
}

/** List WorkloadNetwork resources by PrivateCloud */
export function list(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksClientListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetwork> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, privateCloudName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
