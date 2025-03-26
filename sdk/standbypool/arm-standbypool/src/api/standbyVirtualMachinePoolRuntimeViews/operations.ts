// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  StandbyVirtualMachinePoolRuntimeViewResource,
  standbyVirtualMachinePoolRuntimeViewResourceDeserializer,
  _StandbyVirtualMachinePoolRuntimeViewResourceListResult,
  _standbyVirtualMachinePoolRuntimeViewResourceListResultDeserializer,
} from "../../models/models.js";
import {
  StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams,
  StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams,
} from "./options.js";
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

export function _standbyVirtualMachinePoolRuntimeViewsListByStandbyPoolSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/runtimeViews{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      standbyVirtualMachinePoolName: standbyVirtualMachinePoolName,
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

export async function _standbyVirtualMachinePoolRuntimeViewsListByStandbyPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachinePoolRuntimeViewResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _standbyVirtualMachinePoolRuntimeViewResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachinePoolRuntimeViewResource resources by StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinePoolRuntimeViewsListByStandbyPool(
  context: Client,
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
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    _standbyVirtualMachinePoolRuntimeViewsListByStandbyPoolDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyVirtualMachinePoolRuntimeViewsGetSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  runtimeView: string,
  options: StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/runtimeViews/{runtimeView}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      standbyVirtualMachinePoolName: standbyVirtualMachinePoolName,
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

export async function _standbyVirtualMachinePoolRuntimeViewsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolRuntimeViewResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyVirtualMachinePoolRuntimeViewResourceDeserializer(result.body);
}

/** Get a StandbyVirtualMachinePoolRuntimeViewResource */
export async function standbyVirtualMachinePoolRuntimeViewsGet(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  runtimeView: string,
  options: StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyVirtualMachinePoolRuntimeViewResource> {
  const result = await _standbyVirtualMachinePoolRuntimeViewsGetSend(
    context,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    runtimeView,
    options,
  );
  return _standbyVirtualMachinePoolRuntimeViewsGetDeserialize(result);
}
