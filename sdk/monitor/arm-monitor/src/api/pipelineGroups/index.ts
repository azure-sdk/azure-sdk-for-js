// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MonitorContext as Client,
  PipelineGroupsCreateOrUpdateOptionalParams,
  PipelineGroupsDeleteOptionalParams,
  PipelineGroupsGetOptionalParams,
  PipelineGroupsListByResourceGroupOptionalParams,
  PipelineGroupsListBySubscriptionOptionalParams,
  PipelineGroupsUpdateOptionalParams,
} from "../index.js";
import {
  PipelineGroup,
  pipelineGroupSerializer,
  pipelineGroupDeserializer,
  errorResponseDeserializer,
  PipelineGroupUpdate,
  pipelineGroupUpdateSerializer,
  _PipelineGroupListResult,
  _pipelineGroupListResultDeserializer,
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

export function _pipelineGroupsListBySubscriptionSend(
  context: Client,
  options: PipelineGroupsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/pipelineGroups",
      context.subscriptionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _pipelineGroupsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PipelineGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _pipelineGroupListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified subscription */
export function pipelineGroupsListBySubscription(
  context: Client,
  options: PipelineGroupsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PipelineGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _pipelineGroupsListBySubscriptionSend(context, options),
    _pipelineGroupsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _pipelineGroupsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: PipelineGroupsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups",
      context.subscriptionId,
      resourceGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _pipelineGroupsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_PipelineGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _pipelineGroupListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified resource group */
export function pipelineGroupsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: PipelineGroupsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PipelineGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _pipelineGroupsListByResourceGroupSend(context, resourceGroupName, options),
    _pipelineGroupsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _pipelineGroupsUpdateSend(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  properties: PipelineGroupUpdate,
  options: PipelineGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      context.subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: pipelineGroupUpdateSerializer(properties),
    });
}

export async function _pipelineGroupsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return pipelineGroupDeserializer(result.body);
}

/** Updates a pipeline group instance */
export function pipelineGroupsUpdate(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  properties: PipelineGroupUpdate,
  options: PipelineGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PipelineGroup>, PipelineGroup> {
  return getLongRunningPoller(context, _pipelineGroupsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _pipelineGroupsUpdateSend(context, resourceGroupName, pipelineGroupName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
}

export function _pipelineGroupsDeleteSend(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      context.subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _pipelineGroupsDeleteDeserialize(
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

/** Delete a pipeline group instance. */
export function pipelineGroupsDelete(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _pipelineGroupsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _pipelineGroupsDeleteSend(context, resourceGroupName, pipelineGroupName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _pipelineGroupsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  resource: PipelineGroup,
  options: PipelineGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      context.subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: pipelineGroupSerializer(resource),
    });
}

export async function _pipelineGroupsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return pipelineGroupDeserializer(result.body);
}

/** Create or update a pipeline group instance. */
export function pipelineGroupsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  resource: PipelineGroup,
  options: PipelineGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PipelineGroup>, PipelineGroup> {
  return getLongRunningPoller(context, _pipelineGroupsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _pipelineGroupsCreateOrUpdateSend(
        context,
        resourceGroupName,
        pipelineGroupName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
}

export function _pipelineGroupsGetSend(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      context.subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _pipelineGroupsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return pipelineGroupDeserializer(result.body);
}

/** Returns the specific pipeline group instance. */
export async function pipelineGroupsGet(
  context: Client,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsGetOptionalParams = { requestOptions: {} },
): Promise<PipelineGroup> {
  const result = await _pipelineGroupsGetSend(
    context,
    resourceGroupName,
    pipelineGroupName,
    options,
  );
  return _pipelineGroupsGetDeserialize(result);
}
