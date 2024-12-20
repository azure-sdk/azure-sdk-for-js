// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesListOptionalParams,
  VirtualMachinesRestrictMovementOptionalParams,
} from "../index.js";
import {
  _VirtualMachinesList,
  _virtualMachinesListDeserializer,
  VirtualMachine,
  virtualMachineDeserializer,
  VirtualMachineRestrictMovement,
  virtualMachineRestrictMovementSerializer,
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

export function _virtualMachinesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachinesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachinesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _virtualMachinesListDeserializer(result.body);
}

/** List VirtualMachine resources by Cluster */
export function virtualMachinesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachinesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _virtualMachinesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachinesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      virtualMachineId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachinesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualMachineDeserializer(result.body);
}

/** Get a VirtualMachine */
export async function virtualMachinesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachine> {
  const result = await _virtualMachinesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    virtualMachineId,
    options,
  );
  return _virtualMachinesGetDeserialize(result);
}

export function _virtualMachinesRestrictMovementSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovementParameter: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      virtualMachineId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: virtualMachineRestrictMovementSerializer(restrictMovementParameter),
    });
}

export async function _virtualMachinesRestrictMovementDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Enable or disable DRS-driven VM movement restriction */
export function virtualMachinesRestrictMovement(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovementParameter: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachinesRestrictMovementDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachinesRestrictMovementSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          virtualMachineId,
          restrictMovementParameter,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
