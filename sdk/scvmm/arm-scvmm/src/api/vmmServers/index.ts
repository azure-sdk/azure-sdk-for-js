// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ScVmmContext as Client,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersDeleteOptionalParams,
  VmmServersGetOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
  VmmServersUpdateOptionalParams,
} from "../index.js";
import {
  VmmServer,
  vmmServerSerializer,
  vmmServerDeserializer,
  VmmServerTagsUpdate,
  vmmServerTagsUpdateSerializer,
  _VmmServerListResult,
  _vmmServerListResultDeserializer,
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

export function _vmmServersGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _vmmServersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VmmServer> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vmmServerDeserializer(result.body);
}

/** Implements VmmServer GET method. */
export async function vmmServersGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersGetOptionalParams = { requestOptions: {} },
): Promise<VmmServer> {
  const result = await _vmmServersGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    options,
  );
  return _vmmServersGetDeserialize(result);
}

export function _vmmServersCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  resource: VmmServer,
  options: VmmServersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: vmmServerSerializer(resource),
    });
}

export async function _vmmServersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VmmServer> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vmmServerDeserializer(result.body);
}

/** Onboards the SCVmm fabric as an Azure VmmServer resource. */
export function vmmServersCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  resource: VmmServer,
  options: VmmServersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VmmServer>, VmmServer> {
  return getLongRunningPoller(
    context,
    _vmmServersCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _vmmServersCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          vmmServerName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<VmmServer>, VmmServer>;
}

export function _vmmServersUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  properties: VmmServerTagsUpdate,
  options: VmmServersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: vmmServerTagsUpdateSerializer(properties),
    });
}

export async function _vmmServersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VmmServer> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vmmServerDeserializer(result.body);
}

/** Updates the VmmServers resource. */
export function vmmServersUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  properties: VmmServerTagsUpdate,
  options: VmmServersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VmmServer>, VmmServer> {
  return getLongRunningPoller(
    context,
    _vmmServersUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _vmmServersUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          vmmServerName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<VmmServer>, VmmServer>;
}

export function _vmmServersDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _vmmServersDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Removes the SCVmm fabric from Azure. */
export function vmmServersDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _vmmServersDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _vmmServersDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          vmmServerName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _vmmServersListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VmmServersListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _vmmServersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VmmServerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _vmmServerListResultDeserializer(result.body);
}

/** List of VmmServers in a resource group. */
export function vmmServersListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VmmServersListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VmmServer> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _vmmServersListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _vmmServersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _vmmServersListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VmmServersListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _vmmServersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_VmmServerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _vmmServerListResultDeserializer(result.body);
}

/** List of VmmServers in a subscription. */
export function vmmServersListBySubscription(
  context: Client,
  subscriptionId: string,
  options: VmmServersListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VmmServer> {
  return buildPagedAsyncIterator(
    context,
    () => _vmmServersListBySubscriptionSend(context, subscriptionId, options),
    _vmmServersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
