// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  WorkloadNetworksCreateDhcpOptionalParams,
  WorkloadNetworksCreateDnsServiceOptionalParams,
  WorkloadNetworksCreateDnsZoneOptionalParams,
  WorkloadNetworksCreatePortMirroringOptionalParams,
  WorkloadNetworksCreatePublicIPOptionalParams,
  WorkloadNetworksCreateSegmentOptionalParams,
  WorkloadNetworksCreateVMGroupOptionalParams,
  WorkloadNetworksDeleteDhcpOptionalParams,
  WorkloadNetworksDeleteDnsServiceOptionalParams,
  WorkloadNetworksDeleteDnsZoneOptionalParams,
  WorkloadNetworksDeletePortMirroringOptionalParams,
  WorkloadNetworksDeletePublicIPOptionalParams,
  WorkloadNetworksDeleteSegmentOptionalParams,
  WorkloadNetworksDeleteVMGroupOptionalParams,
  WorkloadNetworksGetDhcpOptionalParams,
  WorkloadNetworksGetDnsServiceOptionalParams,
  WorkloadNetworksGetDnsZoneOptionalParams,
  WorkloadNetworksGetGatewayOptionalParams,
  WorkloadNetworksGetOptionalParams,
  WorkloadNetworksGetPortMirroringOptionalParams,
  WorkloadNetworksGetPublicIPOptionalParams,
  WorkloadNetworksGetSegmentOptionalParams,
  WorkloadNetworksGetVirtualMachineOptionalParams,
  WorkloadNetworksGetVMGroupOptionalParams,
  WorkloadNetworksListDhcpOptionalParams,
  WorkloadNetworksListDnsServicesOptionalParams,
  WorkloadNetworksListDnsZonesOptionalParams,
  WorkloadNetworksListGatewaysOptionalParams,
  WorkloadNetworksListOptionalParams,
  WorkloadNetworksListPortMirroringOptionalParams,
  WorkloadNetworksListPublicIPsOptionalParams,
  WorkloadNetworksListSegmentsOptionalParams,
  WorkloadNetworksListVirtualMachinesOptionalParams,
  WorkloadNetworksListVMGroupsOptionalParams,
  WorkloadNetworksUpdateDhcpOptionalParams,
  WorkloadNetworksUpdateDnsServiceOptionalParams,
  WorkloadNetworksUpdateDnsZoneOptionalParams,
  WorkloadNetworksUpdatePortMirroringOptionalParams,
  WorkloadNetworksUpdateSegmentOptionalParams,
  WorkloadNetworksUpdateVMGroupOptionalParams,
} from "../index.js";
import {
  _WorkloadNetworkList,
  _workloadNetworkListDeserializer,
  WorkloadNetwork,
  workloadNetworkDeserializer,
  _WorkloadNetworkSegmentsList,
  _workloadNetworkSegmentsListDeserializer,
  WorkloadNetworkSegment,
  workloadNetworkSegmentSerializer,
  workloadNetworkSegmentDeserializer,
  _WorkloadNetworkDhcpList,
  _workloadNetworkDhcpListDeserializer,
  WorkloadNetworkDhcp,
  workloadNetworkDhcpSerializer,
  workloadNetworkDhcpDeserializer,
  _WorkloadNetworkGatewayList,
  _workloadNetworkGatewayListDeserializer,
  WorkloadNetworkGateway,
  workloadNetworkGatewayDeserializer,
  _WorkloadNetworkPortMirroringList,
  _workloadNetworkPortMirroringListDeserializer,
  WorkloadNetworkPortMirroring,
  workloadNetworkPortMirroringSerializer,
  workloadNetworkPortMirroringDeserializer,
  _WorkloadNetworkVMGroupsList,
  _workloadNetworkVMGroupsListDeserializer,
  WorkloadNetworkVMGroup,
  workloadNetworkVMGroupSerializer,
  workloadNetworkVMGroupDeserializer,
  _WorkloadNetworkVirtualMachinesList,
  _workloadNetworkVirtualMachinesListDeserializer,
  WorkloadNetworkVirtualMachine,
  workloadNetworkVirtualMachineDeserializer,
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
  _WorkloadNetworkPublicIPsList,
  _workloadNetworkPublicIPsListDeserializer,
  WorkloadNetworkPublicIP,
  workloadNetworkPublicIPSerializer,
  workloadNetworkPublicIPDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _workloadNetworksListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkListDeserializer(result.body);
}

/** List WorkloadNetwork resources by PrivateCloud */
export function workloadNetworksList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworksListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDeserializer(result.body);
}

/** Get a WorkloadNetwork */
export async function workloadNetworksGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetwork> {
  const result = await _workloadNetworksGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    options,
  );
  return _workloadNetworksGetDeserialize(result);
}

export function _workloadNetworksListSegmentsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListSegmentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListSegmentsDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkSegmentsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkSegmentsListDeserializer(result.body);
}

/** List WorkloadNetworkSegment resources by WorkloadNetwork */
export function workloadNetworksListSegments(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListSegmentsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkSegment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListSegmentsSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListSegmentsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetSegmentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksGetSegmentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      segmentId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Get a WorkloadNetworkSegment */
export async function workloadNetworksGetSegment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksGetSegmentOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkSegment> {
  const result = await _workloadNetworksGetSegmentSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    segmentId,
    options,
  );
  return _workloadNetworksGetSegmentDeserialize(result);
}

export function _workloadNetworksCreateSegmentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksCreateSegmentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      segmentId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkSegmentSerializer(workloadNetworkSegment),
    });
}

export async function _workloadNetworksCreateSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Create a WorkloadNetworkSegment */
export function workloadNetworksCreateSegment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksCreateSegmentOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(
    context,
    _workloadNetworksCreateSegmentDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksCreateSegmentSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          segmentId,
          workloadNetworkSegment,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _workloadNetworksUpdateSegmentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksUpdateSegmentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      segmentId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkSegmentSerializer(workloadNetworkSegment),
    });
}

export async function _workloadNetworksUpdateSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Update a WorkloadNetworkSegment */
export function workloadNetworksUpdateSegment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworksUpdateSegmentOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(
    context,
    _workloadNetworksUpdateSegmentDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksUpdateSegmentSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          segmentId,
          workloadNetworkSegment,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _workloadNetworksDeleteSegmentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksDeleteSegmentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      segmentId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksDeleteSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkSegment */
export function workloadNetworksDeleteSegment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  segmentId: string,
  options: WorkloadNetworksDeleteSegmentOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworksDeleteSegmentDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksDeleteSegmentSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          segmentId,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworksListDhcpSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListDhcpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDhcpList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkDhcpListDeserializer(result.body);
}

/** List WorkloadNetworkDhcp resources by WorkloadNetwork */
export function workloadNetworksListDhcp(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListDhcpOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkDhcp> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListDhcpSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListDhcpDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetDhcpSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworksGetDhcpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      dhcpId,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Get a WorkloadNetworkDhcp */
export async function workloadNetworksGetDhcp(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworksGetDhcpOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDhcp> {
  const result = await _workloadNetworksGetDhcpSend(
    context,
    subscriptionId,
    resourceGroupName,
    dhcpId,
    privateCloudName,
    options,
  );
  return _workloadNetworksGetDhcpDeserialize(result);
}

export function _workloadNetworksCreateDhcpSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksCreateDhcpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dhcpId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkDhcpSerializer(workloadNetworkDhcp),
    });
}

export async function _workloadNetworksCreateDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Create a WorkloadNetworkDhcp */
export function workloadNetworksCreateDhcp(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksCreateDhcpOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(
    context,
    _workloadNetworksCreateDhcpDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksCreateDhcpSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          dhcpId,
          workloadNetworkDhcp,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _workloadNetworksUpdateDhcpSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksUpdateDhcpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dhcpId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkDhcpSerializer(workloadNetworkDhcp),
    });
}

export async function _workloadNetworksUpdateDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Update a WorkloadNetworkDhcp */
export function workloadNetworksUpdateDhcp(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworksUpdateDhcpOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(
    context,
    _workloadNetworksUpdateDhcpDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksUpdateDhcpSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          dhcpId,
          workloadNetworkDhcp,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _workloadNetworksDeleteDhcpSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  options: WorkloadNetworksDeleteDhcpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dhcpId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksDeleteDhcpDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkDhcp */
export function workloadNetworksDeleteDhcp(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dhcpId: string,
  options: WorkloadNetworksDeleteDhcpOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworksDeleteDhcpDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksDeleteDhcpSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          dhcpId,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworksListGatewaysSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListGatewaysOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/gateways",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListGatewaysDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkGatewayList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkGatewayListDeserializer(result.body);
}

/** List WorkloadNetworkGateway resources by WorkloadNetwork */
export function workloadNetworksListGateways(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListGatewaysOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkGateway> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListGatewaysSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListGatewaysDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetGatewaySend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  gatewayId: string,
  options: WorkloadNetworksGetGatewayOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/gateways/{gatewayId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      gatewayId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetGatewayDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkGateway> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkGatewayDeserializer(result.body);
}

/** Get a WorkloadNetworkGateway */
export async function workloadNetworksGetGateway(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  gatewayId: string,
  options: WorkloadNetworksGetGatewayOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkGateway> {
  const result = await _workloadNetworksGetGatewaySend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    gatewayId,
    options,
  );
  return _workloadNetworksGetGatewayDeserialize(result);
}

export function _workloadNetworksListPortMirroringSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListPortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListPortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPortMirroringList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkPortMirroringListDeserializer(result.body);
}

/** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
export function workloadNetworksListPortMirroring(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListPortMirroringOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkPortMirroring> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListPortMirroringSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListPortMirroringDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetPortMirroringSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  options: WorkloadNetworksGetPortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      portMirroringId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetPortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Get a WorkloadNetworkPortMirroring */
export async function workloadNetworksGetPortMirroring(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  options: WorkloadNetworksGetPortMirroringOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkPortMirroring> {
  const result = await _workloadNetworksGetPortMirroringSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    portMirroringId,
    options,
  );
  return _workloadNetworksGetPortMirroringDeserialize(result);
}

export function _workloadNetworksCreatePortMirroringSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksCreatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      portMirroringId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkPortMirroringSerializer(
        workloadNetworkPortMirroring,
      ),
    });
}

export async function _workloadNetworksCreatePortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Create a WorkloadNetworkPortMirroring */
export function workloadNetworksCreatePortMirroring(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksCreatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPortMirroring>,
  WorkloadNetworkPortMirroring
> {
  return getLongRunningPoller(
    context,
    _workloadNetworksCreatePortMirroringDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksCreatePortMirroringSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          portMirroringId,
          workloadNetworkPortMirroring,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
}

export function _workloadNetworksUpdatePortMirroringSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksUpdatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      portMirroringId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkPortMirroringSerializer(
        workloadNetworkPortMirroring,
      ),
    });
}

export async function _workloadNetworksUpdatePortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Update a WorkloadNetworkPortMirroring */
export function workloadNetworksUpdatePortMirroring(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworksUpdatePortMirroringOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPortMirroring>,
  WorkloadNetworkPortMirroring
> {
  return getLongRunningPoller(
    context,
    _workloadNetworksUpdatePortMirroringDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksUpdatePortMirroringSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          portMirroringId,
          workloadNetworkPortMirroring,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
}

export function _workloadNetworksDeletePortMirroringSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeletePortMirroringOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      portMirroringId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksDeletePortMirroringDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkPortMirroring */
export function workloadNetworksDeletePortMirroring(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeletePortMirroringOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworksDeletePortMirroringDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksDeletePortMirroringSend(
          context,
          subscriptionId,
          resourceGroupName,
          portMirroringId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworksListVMGroupsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListVMGroupsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListVMGroupsDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkVMGroupsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkVMGroupsListDeserializer(result.body);
}

/** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
export function workloadNetworksListVMGroups(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListVMGroupsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkVMGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListVMGroupsSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListVMGroupsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetVMGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  options: WorkloadNetworksGetVMGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      vmGroupId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetVMGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Get a WorkloadNetworkVMGroup */
export async function workloadNetworksGetVMGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  options: WorkloadNetworksGetVMGroupOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkVMGroup> {
  const result = await _workloadNetworksGetVMGroupSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    vmGroupId,
    options,
  );
  return _workloadNetworksGetVMGroupDeserialize(result);
}

export function _workloadNetworksCreateVMGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksCreateVMGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      vmGroupId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkVMGroupSerializer(workloadNetworkVMGroup),
    });
}

export async function _workloadNetworksCreateVMGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Create a WorkloadNetworkVMGroup */
export function workloadNetworksCreateVMGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksCreateVMGroupOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(
    context,
    _workloadNetworksCreateVMGroupDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksCreateVMGroupSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          vmGroupId,
          workloadNetworkVMGroup,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _workloadNetworksUpdateVMGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksUpdateVMGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      vmGroupId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkVMGroupSerializer(workloadNetworkVMGroup),
    });
}

export async function _workloadNetworksUpdateVMGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Update a WorkloadNetworkVMGroup */
export function workloadNetworksUpdateVMGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworksUpdateVMGroupOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(
    context,
    _workloadNetworksUpdateVMGroupDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksUpdateVMGroupSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          vmGroupId,
          workloadNetworkVMGroup,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _workloadNetworksDeleteVMGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeleteVMGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      vmGroupId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksDeleteVMGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkVMGroup */
export function workloadNetworksDeleteVMGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeleteVMGroupOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworksDeleteVMGroupDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksDeleteVMGroupSend(
          context,
          subscriptionId,
          resourceGroupName,
          vmGroupId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworksListVirtualMachinesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListVirtualMachinesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/virtualMachines",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListVirtualMachinesDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkVirtualMachinesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkVirtualMachinesListDeserializer(result.body);
}

/** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
export function workloadNetworksListVirtualMachines(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListVirtualMachinesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListVirtualMachinesSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListVirtualMachinesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetVirtualMachineSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  virtualMachineId: string,
  options: WorkloadNetworksGetVirtualMachineOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/virtualMachines/{virtualMachineId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      virtualMachineId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetVirtualMachineDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVirtualMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkVirtualMachineDeserializer(result.body);
}

/** Get a WorkloadNetworkVirtualMachine */
export async function workloadNetworksGetVirtualMachine(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  virtualMachineId: string,
  options: WorkloadNetworksGetVirtualMachineOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkVirtualMachine> {
  const result = await _workloadNetworksGetVirtualMachineSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    virtualMachineId,
    options,
  );
  return _workloadNetworksGetVirtualMachineDeserialize(result);
}

export function _workloadNetworksListDnsServicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListDnsServicesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListDnsServicesDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDnsServicesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkDnsServicesListDeserializer(result.body);
}

/** List WorkloadNetworkDnsService resources by WorkloadNetwork */
export function workloadNetworksListDnsServices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListDnsServicesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDnsService> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListDnsServicesSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListDnsServicesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetDnsServiceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  options: WorkloadNetworksGetDnsServiceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dnsServiceId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Get a WorkloadNetworkDnsService */
export async function workloadNetworksGetDnsService(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  options: WorkloadNetworksGetDnsServiceOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsService> {
  const result = await _workloadNetworksGetDnsServiceSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    dnsServiceId,
    options,
  );
  return _workloadNetworksGetDnsServiceDeserialize(result);
}

export function _workloadNetworksCreateDnsServiceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksCreateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dnsServiceId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
    });
}

export async function _workloadNetworksCreateDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Create a WorkloadNetworkDnsService */
export function workloadNetworksCreateDnsService(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksCreateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
> {
  return getLongRunningPoller(
    context,
    _workloadNetworksCreateDnsServiceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksCreateDnsServiceSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          dnsServiceId,
          workloadNetworkDnsService,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _workloadNetworksUpdateDnsServiceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksUpdateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dnsServiceId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
    });
}

export async function _workloadNetworksUpdateDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Update a WorkloadNetworkDnsService */
export function workloadNetworksUpdateDnsService(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworksUpdateDnsServiceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
> {
  return getLongRunningPoller(
    context,
    _workloadNetworksUpdateDnsServiceDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksUpdateDnsServiceSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          dnsServiceId,
          workloadNetworkDnsService,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _workloadNetworksDeleteDnsServiceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeleteDnsServiceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      dnsServiceId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksDeleteDnsServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkDnsService */
export function workloadNetworksDeleteDnsService(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeleteDnsServiceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworksDeleteDnsServiceDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksDeleteDnsServiceSend(
          context,
          subscriptionId,
          resourceGroupName,
          dnsServiceId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworksListDnsZonesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListDnsZonesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListDnsZonesDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDnsZonesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkDnsZonesListDeserializer(result.body);
}

/** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
export function workloadNetworksListDnsZones(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListDnsZonesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkDnsZone> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListDnsZonesSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListDnsZonesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetDnsZoneSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  options: WorkloadNetworksGetDnsZoneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dnsZoneId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetDnsZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Get a WorkloadNetworkDnsZone */
export async function workloadNetworksGetDnsZone(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  options: WorkloadNetworksGetDnsZoneOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsZone> {
  const result = await _workloadNetworksGetDnsZoneSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    dnsZoneId,
    options,
  );
  return _workloadNetworksGetDnsZoneDeserialize(result);
}

export function _workloadNetworksCreateDnsZoneSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksCreateDnsZoneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dnsZoneId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkDnsZoneSerializer(workloadNetworkDnsZone),
    });
}

export async function _workloadNetworksCreateDnsZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Create a WorkloadNetworkDnsZone */
export function workloadNetworksCreateDnsZone(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksCreateDnsZoneOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(
    context,
    _workloadNetworksCreateDnsZoneDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksCreateDnsZoneSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          dnsZoneId,
          workloadNetworkDnsZone,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
}

export function _workloadNetworksUpdateDnsZoneSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksUpdateDnsZoneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      dnsZoneId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkDnsZoneSerializer(workloadNetworkDnsZone),
    });
}

export async function _workloadNetworksUpdateDnsZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Update a WorkloadNetworkDnsZone */
export function workloadNetworksUpdateDnsZone(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworksUpdateDnsZoneOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(
    context,
    _workloadNetworksUpdateDnsZoneDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksUpdateDnsZoneSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          dnsZoneId,
          workloadNetworkDnsZone,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
}

export function _workloadNetworksDeleteDnsZoneSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeleteDnsZoneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      dnsZoneId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksDeleteDnsZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkDnsZone */
export function workloadNetworksDeleteDnsZone(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeleteDnsZoneOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworksDeleteDnsZoneDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksDeleteDnsZoneSend(
          context,
          subscriptionId,
          resourceGroupName,
          dnsZoneId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworksListPublicIPsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListPublicIPsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/publicIPs",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksListPublicIPsDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPublicIPsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _workloadNetworkPublicIPsListDeserializer(result.body);
}

/** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
export function workloadNetworksListPublicIPs(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  options: WorkloadNetworksListPublicIPsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkPublicIP> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListPublicIPsSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        workloadNetworkName,
        options,
      ),
    _workloadNetworksListPublicIPsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetPublicIPSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  options: WorkloadNetworksGetPublicIPOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      publicIPId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksGetPublicIPDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkPublicIPDeserializer(result.body);
}

/** Get a WorkloadNetworkPublicIP */
export async function workloadNetworksGetPublicIP(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  options: WorkloadNetworksGetPublicIPOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkPublicIP> {
  const result = await _workloadNetworksGetPublicIPSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    workloadNetworkName,
    publicIPId,
    options,
  );
  return _workloadNetworksGetPublicIPDeserialize(result);
}

export function _workloadNetworksCreatePublicIPSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworksCreatePublicIPOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      workloadNetworkName,
      publicIPId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: workloadNetworkPublicIPSerializer(workloadNetworkPublicIP),
    });
}

export async function _workloadNetworksCreatePublicIPDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return workloadNetworkPublicIPDeserializer(result.body);
}

/** Create a WorkloadNetworkPublicIP */
export function workloadNetworksCreatePublicIP(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  workloadNetworkName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworksCreatePublicIPOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPublicIP>,
  WorkloadNetworkPublicIP
> {
  return getLongRunningPoller(
    context,
    _workloadNetworksCreatePublicIPDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksCreatePublicIPSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          workloadNetworkName,
          publicIPId,
          workloadNetworkPublicIP,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
}

export function _workloadNetworksDeletePublicIPSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeletePublicIPOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      publicIPId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworksDeletePublicIPDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkPublicIP */
export function workloadNetworksDeletePublicIP(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworksDeletePublicIPOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworksDeletePublicIPDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworksDeletePublicIPSend(
          context,
          subscriptionId,
          resourceGroupName,
          publicIPId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
