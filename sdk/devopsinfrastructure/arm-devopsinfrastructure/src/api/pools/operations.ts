// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DevOpsInfrastructureContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  Pool,
  poolSerializer,
  poolDeserializer,
  PoolUpdate,
  poolUpdateSerializer,
  _PoolListResult,
  _poolListResultDeserializer,
  CheckNameAvailability,
  checkNameAvailabilitySerializer,
  CheckNameAvailabilityResult,
  checkNameAvailabilityResultDeserializer,
} from "../../models/models.js";
import {
  PoolsCheckNameAvailabilityOptionalParams,
  PoolsListBySubscriptionOptionalParams,
  PoolsListByResourceGroupOptionalParams,
  PoolsDeleteOptionalParams,
  PoolsUpdateOptionalParams,
  PoolsCreateOrUpdateOptionalParams,
  PoolsGetOptionalParams,
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

export function _poolsCheckNameAvailabilitySend(
  context: Client,
  body: CheckNameAvailability,
  options: PoolsCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/checkNameAvailability{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: checkNameAvailabilitySerializer(body),
  });
}

export async function _poolsCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResultDeserializer(result.body);
}

/** Checks that the pool name is valid and is not already in use. */
export async function poolsCheckNameAvailability(
  context: Client,
  body: CheckNameAvailability,
  options: PoolsCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<CheckNameAvailabilityResult> {
  const result = await _poolsCheckNameAvailabilitySend(context, body, options);
  return _poolsCheckNameAvailabilityDeserialize(result);
}

export function _poolsListBySubscriptionSend(
  context: Client,
  options: PoolsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/pools{?api-version}",
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

export async function _poolsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _poolListResultDeserializer(result.body);
}

/** List Pool resources by subscription ID */
export function poolsListBySubscription(
  context: Client,
  options: PoolsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Pool> {
  return buildPagedAsyncIterator(
    context,
    () => _poolsListBySubscriptionSend(context, options),
    _poolsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _poolsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: PoolsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools{?api-version}",
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

export async function _poolsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _poolListResultDeserializer(result.body);
}

/** List Pool resources by resource group */
export function poolsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: PoolsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Pool> {
  return buildPagedAsyncIterator(
    context,
    () => _poolsListByResourceGroupSend(context, resourceGroupName, options),
    _poolsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _poolsDeleteSend(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  options: PoolsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      poolName: poolName,
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

export async function _poolsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Pool */
export function poolsDelete(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  options: PoolsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _poolsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _poolsDeleteSend(context, resourceGroupName, poolName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _poolsUpdateSend(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  properties: PoolUpdate,
  options: PoolsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      poolName: poolName,
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
    body: poolUpdateSerializer(properties),
  });
}

export async function _poolsUpdateDeserialize(result: PathUncheckedResponse): Promise<Pool> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return poolDeserializer(result.body);
}

/** Update a Pool */
export function poolsUpdate(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  properties: PoolUpdate,
  options: PoolsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Pool>, Pool> {
  return getLongRunningPoller(context, _poolsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _poolsUpdateSend(context, resourceGroupName, poolName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Pool>, Pool>;
}

export function _poolsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  resource: Pool,
  options: PoolsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      poolName: poolName,
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
    body: poolSerializer(resource),
  });
}

export async function _poolsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Pool> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return poolDeserializer(result.body);
}

/** Create a Pool */
export function poolsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  resource: Pool,
  options: PoolsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Pool>, Pool> {
  return getLongRunningPoller(context, _poolsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _poolsCreateOrUpdateSend(context, resourceGroupName, poolName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Pool>, Pool>;
}

export function _poolsGetSend(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  options: PoolsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      poolName: poolName,
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

export async function _poolsGetDeserialize(result: PathUncheckedResponse): Promise<Pool> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return poolDeserializer(result.body);
}

/** Get a Pool */
export async function poolsGet(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  options: PoolsGetOptionalParams = { requestOptions: {} },
): Promise<Pool> {
  const result = await _poolsGetSend(context, resourceGroupName, poolName, options);
  return _poolsGetDeserialize(result);
}
