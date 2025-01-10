// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StandbyPoolManagementContext as Client,
  StandbyContainerGroupPoolRuntimeViewsGetOptionalParams,
  StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams,
} from "../index.js";
import {
  StandbyContainerGroupPoolRuntimeViewResource,
  standbyContainerGroupPoolRuntimeViewResourceDeserializer,
  _StandbyContainerGroupPoolRuntimeViewResourceListResult,
  _standbyContainerGroupPoolRuntimeViewResourceListResultDeserializer,
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

export function _standbyContainerGroupPoolRuntimeViewsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  runtimeView: string,
  options: StandbyContainerGroupPoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}/runtimeViews/{runtimeView}",
      subscriptionId,
      resourceGroupName,
      standbyContainerGroupPoolName,
      runtimeView,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyContainerGroupPoolRuntimeViewsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyContainerGroupPoolRuntimeViewResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return standbyContainerGroupPoolRuntimeViewResourceDeserializer(result.body);
}

/** Get a StandbyContainerGroupPoolRuntimeViewResource */
export async function standbyContainerGroupPoolRuntimeViewsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  runtimeView: string,
  options: StandbyContainerGroupPoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyContainerGroupPoolRuntimeViewResource> {
  const result = await _standbyContainerGroupPoolRuntimeViewsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyContainerGroupPoolName,
    runtimeView,
    options,
  );
  return _standbyContainerGroupPoolRuntimeViewsGetDeserialize(result);
}

export function _standbyContainerGroupPoolRuntimeViewsListByStandbyPoolSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}/runtimeViews",
      subscriptionId,
      resourceGroupName,
      standbyContainerGroupPoolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyContainerGroupPoolRuntimeViewsListByStandbyPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyContainerGroupPoolRuntimeViewResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _standbyContainerGroupPoolRuntimeViewResourceListResultDeserializer(result.body);
}

/** List StandbyContainerGroupPoolRuntimeViewResource resources by StandbyContainerGroupPoolResource */
export function standbyContainerGroupPoolRuntimeViewsListByStandbyPool(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyContainerGroupPoolRuntimeViewResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _standbyContainerGroupPoolRuntimeViewsListByStandbyPoolSend(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        options,
      ),
    _standbyContainerGroupPoolRuntimeViewsListByStandbyPoolDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
