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

export function _pipelineGroupsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _pipelineGroupsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return pipelineGroupDeserializer(result.body);
}

/** Returns the specific pipeline group instance. */
export async function pipelineGroupsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsGetOptionalParams = { requestOptions: {} },
): Promise<PipelineGroup> {
  const result = await _pipelineGroupsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    pipelineGroupName,
    options,
  );
  return _pipelineGroupsGetDeserialize(result);
}

export function _pipelineGroupsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  resource: PipelineGroup,
  options: PipelineGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: pipelineGroupSerializer(resource),
    });
}

export async function _pipelineGroupsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return pipelineGroupDeserializer(result.body);
}

/** Create or update a pipeline group instance. */
export function pipelineGroupsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  resource: PipelineGroup,
  options: PipelineGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PipelineGroup>, PipelineGroup> {
  return getLongRunningPoller(
    context,
    _pipelineGroupsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _pipelineGroupsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          pipelineGroupName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
}

export function _pipelineGroupsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _pipelineGroupsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a pipeline group instance. */
export function pipelineGroupsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _pipelineGroupsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _pipelineGroupsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          pipelineGroupName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _pipelineGroupsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  properties: PipelineGroupUpdate,
  options: PipelineGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: pipelineGroupUpdateSerializer(properties),
    });
}

export async function _pipelineGroupsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return pipelineGroupDeserializer(result.body);
}

/** Updates a pipeline group instance */
export function pipelineGroupsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  properties: PipelineGroupUpdate,
  options: PipelineGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PipelineGroup>, PipelineGroup> {
  return getLongRunningPoller(
    context,
    _pipelineGroupsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _pipelineGroupsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          pipelineGroupName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
}

export function _pipelineGroupsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PipelineGroupsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _pipelineGroupsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_PipelineGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pipelineGroupListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified resource group */
export function pipelineGroupsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PipelineGroupsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PipelineGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _pipelineGroupsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _pipelineGroupsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _pipelineGroupsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: PipelineGroupsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/pipelineGroups",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _pipelineGroupsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PipelineGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pipelineGroupListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified subscription */
export function pipelineGroupsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: PipelineGroupsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PipelineGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _pipelineGroupsListBySubscriptionSend(context, subscriptionId, options),
    _pipelineGroupsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
