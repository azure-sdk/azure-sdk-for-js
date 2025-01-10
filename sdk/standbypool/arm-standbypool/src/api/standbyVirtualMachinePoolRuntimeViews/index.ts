// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StandbyPoolManagementContext as Client,
  StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams,
  StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams,
} from "../index.js";
import {
  StandbyVirtualMachinePoolRuntimeViewResource,
  standbyVirtualMachinePoolRuntimeViewResourceDeserializer,
  _StandbyVirtualMachinePoolRuntimeViewResourceListResult,
  _standbyVirtualMachinePoolRuntimeViewResourceListResultDeserializer,
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

export function _standbyVirtualMachinePoolRuntimeViewsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  runtimeView: string,
  options: StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/runtimeViews/{runtimeView}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
      runtimeView,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinePoolRuntimeViewsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolRuntimeViewResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return standbyVirtualMachinePoolRuntimeViewResourceDeserializer(result.body);
}

/** Get a StandbyVirtualMachinePoolRuntimeViewResource */
export async function standbyVirtualMachinePoolRuntimeViewsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  runtimeView: string,
  options: StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyVirtualMachinePoolRuntimeViewResource> {
  const result = await _standbyVirtualMachinePoolRuntimeViewsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    runtimeView,
    options,
  );
  return _standbyVirtualMachinePoolRuntimeViewsGetDeserialize(result);
}

export function _standbyVirtualMachinePoolRuntimeViewsListByStandbyPoolSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/runtimeViews",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinePoolRuntimeViewsListByStandbyPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachinePoolRuntimeViewResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _standbyVirtualMachinePoolRuntimeViewResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachinePoolRuntimeViewResource resources by StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinePoolRuntimeViewsListByStandbyPool(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachinePoolRuntimeViewResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _standbyVirtualMachinePoolRuntimeViewsListByStandbyPoolSend(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    _standbyVirtualMachinePoolRuntimeViewsListByStandbyPoolDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
