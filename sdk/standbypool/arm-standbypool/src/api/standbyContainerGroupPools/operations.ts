// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  StandbyContainerGroupPoolResource,
  standbyContainerGroupPoolResourceSerializer,
  standbyContainerGroupPoolResourceDeserializer,
  StandbyContainerGroupPoolResourceUpdate,
  standbyContainerGroupPoolResourceUpdateSerializer,
  _StandbyContainerGroupPoolResourceListResult,
  _standbyContainerGroupPoolResourceListResultDeserializer,
} from "../../models/models.js";
import {
  StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
  StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  StandbyContainerGroupPoolsUpdateOptionalParams,
  StandbyContainerGroupPoolsDeleteOptionalParams,
  StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  StandbyContainerGroupPoolsGetOptionalParams,
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

export function _standbyContainerGroupPoolsListBySubscriptionSend(
  context: Client,
  options: StandbyContainerGroupPoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyContainerGroupPools{?api-version}",
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

export async function _standbyContainerGroupPoolsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyContainerGroupPoolResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _standbyContainerGroupPoolResourceListResultDeserializer(result.body);
}

/** List StandbyContainerGroupPoolResource resources by subscription ID */
export function standbyContainerGroupPoolsListBySubscription(
  context: Client,
  options: StandbyContainerGroupPoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyContainerGroupPoolResource> {
  return buildPagedAsyncIterator(
    context,
    () => _standbyContainerGroupPoolsListBySubscriptionSend(context, options),
    _standbyContainerGroupPoolsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyContainerGroupPoolsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: StandbyContainerGroupPoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools{?api-version}",
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

export async function _standbyContainerGroupPoolsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyContainerGroupPoolResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _standbyContainerGroupPoolResourceListResultDeserializer(result.body);
}

/** List StandbyContainerGroupPoolResource resources by resource group */
export function standbyContainerGroupPoolsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: StandbyContainerGroupPoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyContainerGroupPoolResource> {
  return buildPagedAsyncIterator(
    context,
    () => _standbyContainerGroupPoolsListByResourceGroupSend(context, resourceGroupName, options),
    _standbyContainerGroupPoolsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyContainerGroupPoolsUpdateSend(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  properties: StandbyContainerGroupPoolResourceUpdate,
  options: StandbyContainerGroupPoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}{?api-version}",
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
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: standbyContainerGroupPoolResourceUpdateSerializer(properties),
  });
}

export async function _standbyContainerGroupPoolsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyContainerGroupPoolResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyContainerGroupPoolResourceDeserializer(result.body);
}

/** Update a StandbyContainerGroupPoolResource */
export async function standbyContainerGroupPoolsUpdate(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  properties: StandbyContainerGroupPoolResourceUpdate,
  options: StandbyContainerGroupPoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyContainerGroupPoolResource> {
  const result = await _standbyContainerGroupPoolsUpdateSend(
    context,
    resourceGroupName,
    standbyContainerGroupPoolName,
    properties,
    options,
  );
  return _standbyContainerGroupPoolsUpdateDeserialize(result);
}

export function _standbyContainerGroupPoolsDeleteSend(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}{?api-version}",
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
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _standbyContainerGroupPoolsDeleteDeserialize(
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

/** Delete a StandbyContainerGroupPoolResource */
export function standbyContainerGroupPoolsDelete(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _standbyContainerGroupPoolsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _standbyContainerGroupPoolsDeleteSend(
          context,
          resourceGroupName,
          standbyContainerGroupPoolName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _standbyContainerGroupPoolsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  resource: StandbyContainerGroupPoolResource,
  options: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}{?api-version}",
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
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: standbyContainerGroupPoolResourceSerializer(resource),
  });
}

export async function _standbyContainerGroupPoolsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyContainerGroupPoolResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyContainerGroupPoolResourceDeserializer(result.body);
}

/** Create a StandbyContainerGroupPoolResource */
export function standbyContainerGroupPoolsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  resource: StandbyContainerGroupPoolResource,
  options: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<StandbyContainerGroupPoolResource>,
  StandbyContainerGroupPoolResource
> {
  return getLongRunningPoller(
    context,
    _standbyContainerGroupPoolsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _standbyContainerGroupPoolsCreateOrUpdateSend(
          context,
          resourceGroupName,
          standbyContainerGroupPoolName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<StandbyContainerGroupPoolResource>,
    StandbyContainerGroupPoolResource
  >;
}

export function _standbyContainerGroupPoolsGetSend(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}{?api-version}",
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

export async function _standbyContainerGroupPoolsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyContainerGroupPoolResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return standbyContainerGroupPoolResourceDeserializer(result.body);
}

/** Get a StandbyContainerGroupPoolResource */
export async function standbyContainerGroupPoolsGet(
  context: Client,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsGetOptionalParams = { requestOptions: {} },
): Promise<StandbyContainerGroupPoolResource> {
  const result = await _standbyContainerGroupPoolsGetSend(
    context,
    resourceGroupName,
    standbyContainerGroupPoolName,
    options,
  );
  return _standbyContainerGroupPoolsGetDeserialize(result);
}
