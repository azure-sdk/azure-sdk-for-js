// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StandbyPoolManagementContext as Client,
  StandbyVirtualMachinesGetOptionalParams,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  StandbyVirtualMachineResource,
  standbyVirtualMachineResourceDeserializer,
  _StandbyVirtualMachineResourceListResult,
  _standbyVirtualMachineResourceListResultDeserializer,
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

export function _standbyVirtualMachinesListByStandbyVirtualMachinePoolResourceSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines{?api-version}",
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

export async function _standbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachineResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _standbyVirtualMachineResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachineResource resources by StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinesListByStandbyVirtualMachinePoolResource(
  context: Client,
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
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    _standbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyVirtualMachinesGetSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  standbyVirtualMachineName: string,
  options: StandbyVirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines/{standbyVirtualMachineName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      standbyVirtualMachinePoolName: standbyVirtualMachinePoolName,
      standbyVirtualMachineName: standbyVirtualMachineName,
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

export async function _standbyVirtualMachinesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachineResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyVirtualMachineResourceDeserializer(result.body);
}

/** Get a StandbyVirtualMachineResource */
export async function standbyVirtualMachinesGet(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  standbyVirtualMachineName: string,
  options: StandbyVirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<StandbyVirtualMachineResource> {
  const result = await _standbyVirtualMachinesGetSend(
    context,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    standbyVirtualMachineName,
    options,
  );
  return _standbyVirtualMachinesGetDeserialize(result);
}
