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
  errorResponseDeserializer,
  _StandbyContainerGroupPoolRuntimeViewResourceListResult,
  _standbyContainerGroupPoolRuntimeViewResourceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _standbyContainerGroupPoolRuntimeViewsListByStandbyPoolSend(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}/runtimeViews{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      standbyContainerGroupPoolName: standbyContainerGroupPoolName,
      "api-version": context.apiVersion,
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

export async function _standbyContainerGroupPoolRuntimeViewsListByStandbyPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyContainerGroupPoolRuntimeViewResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _standbyContainerGroupPoolRuntimeViewResourceListResultDeserializer(result.body);
}

/** List StandbyContainerGroupPoolRuntimeViewResource resources by StandbyContainerGroupPoolResource */
export function standbyContainerGroupPoolRuntimeViewsListByStandbyPool(
  context: Client,
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
        resourceGroupName,
        standbyContainerGroupPoolName,
        options,
      ),
    _standbyContainerGroupPoolRuntimeViewsListByStandbyPoolDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyContainerGroupPoolRuntimeViewsGetSend(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  runtimeView: string,
  options: StandbyContainerGroupPoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}/runtimeViews/{runtimeView}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      standbyContainerGroupPoolName: standbyContainerGroupPoolName,
      runtimeView: runtimeView,
      "api-version": context.apiVersion,
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

export async function _standbyContainerGroupPoolRuntimeViewsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyContainerGroupPoolRuntimeViewResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyContainerGroupPoolRuntimeViewResourceDeserializer(result.body);
}

/** Get a StandbyContainerGroupPoolRuntimeViewResource */
export async function standbyContainerGroupPoolRuntimeViewsGet(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  runtimeView: string,
  options: StandbyContainerGroupPoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyContainerGroupPoolRuntimeViewResource> {
  const result = await _standbyContainerGroupPoolRuntimeViewsGetSend(
    context,
    resourceGroupName,
    standbyContainerGroupPoolName,
    runtimeView,
    options,
  );
  return _standbyContainerGroupPoolRuntimeViewsGetDeserialize(result);
}
