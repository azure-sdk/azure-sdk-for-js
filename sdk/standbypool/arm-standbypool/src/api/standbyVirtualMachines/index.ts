// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StandbyPoolManagementContext as Client,
  StandbyVirtualMachinesGetOptionalParams,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
} from "../index.js";
import {
  StandbyVirtualMachineResource,
  standbyVirtualMachineResourceDeserializer,
  _StandbyVirtualMachineResourceListResult,
  _standbyVirtualMachineResourceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _standbyVirtualMachinesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  standbyVirtualMachineName: string,
  options: StandbyVirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines/{standbyVirtualMachineName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
      standbyVirtualMachineName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachineResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return standbyVirtualMachineResourceDeserializer(result.body);
}

/** Get a StandbyVirtualMachineResource */
export async function standbyVirtualMachinesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  standbyVirtualMachineName: string,
  options: StandbyVirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<StandbyVirtualMachineResource> {
  const result = await _standbyVirtualMachinesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    standbyVirtualMachineName,
    options,
  );
  return _standbyVirtualMachinesGetDeserialize(result);
}

export function _standbyVirtualMachinesListByStandbyVirtualMachinePoolResourceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachineResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _standbyVirtualMachineResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachineResource resources by StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinesListByStandbyVirtualMachinePoolResource(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachineResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _standbyVirtualMachinesListByStandbyVirtualMachinePoolResourceSend(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    _standbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
