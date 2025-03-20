// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StandbyPoolManagementContext as Client,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsGetOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  StandbyVirtualMachinePoolResource,
  standbyVirtualMachinePoolResourceSerializer,
  standbyVirtualMachinePoolResourceDeserializer,
  StandbyVirtualMachinePoolResourceUpdate,
  standbyVirtualMachinePoolResourceUpdateSerializer,
  _StandbyVirtualMachinePoolResourceListResult,
  _standbyVirtualMachinePoolResourceListResultDeserializer,
} from "../../models/models.js";
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

export function _standbyVirtualMachinePoolsListBySubscriptionSend(
  context: Client,
  options: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _standbyVirtualMachinePoolsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachinePoolResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _standbyVirtualMachinePoolResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachinePoolResource resources by subscription ID */
export function standbyVirtualMachinePoolsListBySubscription(
  context: Client,
  options: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource> {
  return buildPagedAsyncIterator(
    context,
    () => _standbyVirtualMachinePoolsListBySubscriptionSend(context, options),
    _standbyVirtualMachinePoolsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyVirtualMachinePoolsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _standbyVirtualMachinePoolsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachinePoolResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _standbyVirtualMachinePoolResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachinePoolResource resources by resource group */
export function standbyVirtualMachinePoolsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource> {
  return buildPagedAsyncIterator(
    context,
    () => _standbyVirtualMachinePoolsListByResourceGroupSend(context, resourceGroupName, options),
    _standbyVirtualMachinePoolsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyVirtualMachinePoolsUpdateSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  properties: StandbyVirtualMachinePoolResourceUpdate,
  options: StandbyVirtualMachinePoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}{?api-version}",
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
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: standbyVirtualMachinePoolResourceUpdateSerializer(properties),
  });
}

export async function _standbyVirtualMachinePoolsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyVirtualMachinePoolResourceDeserializer(result.body);
}

/** Update a StandbyVirtualMachinePoolResource */
export async function standbyVirtualMachinePoolsUpdate(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  properties: StandbyVirtualMachinePoolResourceUpdate,
  options: StandbyVirtualMachinePoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyVirtualMachinePoolResource> {
  const result = await _standbyVirtualMachinePoolsUpdateSend(
    context,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    properties,
    options,
  );
  return _standbyVirtualMachinePoolsUpdateDeserialize(result);
}

export function _standbyVirtualMachinePoolsDeleteSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}{?api-version}",
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
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _standbyVirtualMachinePoolsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinePoolsDelete(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _standbyVirtualMachinePoolsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _standbyVirtualMachinePoolsDeleteSend(
          context,
          resourceGroupName,
          standbyVirtualMachinePoolName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _standbyVirtualMachinePoolsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  resource: StandbyVirtualMachinePoolResource,
  options: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}{?api-version}",
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
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: standbyVirtualMachinePoolResourceSerializer(resource),
  });
}

export async function _standbyVirtualMachinePoolsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyVirtualMachinePoolResourceDeserializer(result.body);
}

/** Create a StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinePoolsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  resource: StandbyVirtualMachinePoolResource,
  options: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<StandbyVirtualMachinePoolResource>,
  StandbyVirtualMachinePoolResource
> {
  return getLongRunningPoller(
    context,
    _standbyVirtualMachinePoolsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _standbyVirtualMachinePoolsCreateOrUpdateSend(
          context,
          resourceGroupName,
          standbyVirtualMachinePoolName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<StandbyVirtualMachinePoolResource>,
    StandbyVirtualMachinePoolResource
  >;
}

export function _standbyVirtualMachinePoolsGetSend(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}{?api-version}",
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

export async function _standbyVirtualMachinePoolsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyVirtualMachinePoolResourceDeserializer(result.body);
}

/** Get a StandbyVirtualMachinePoolResource */
export async function standbyVirtualMachinePoolsGet(
  context: Client,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsGetOptionalParams = { requestOptions: {} },
): Promise<StandbyVirtualMachinePoolResource> {
  const result = await _standbyVirtualMachinePoolsGetSend(
    context,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    options,
  );
  return _standbyVirtualMachinePoolsGetDeserialize(result);
}
