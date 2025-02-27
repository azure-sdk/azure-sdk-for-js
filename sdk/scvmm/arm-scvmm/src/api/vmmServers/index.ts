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
  errorResponseDeserializer,
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

export function _vmmServersListBySubscriptionSend(
  context: Client,
  options: VmmServersListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers",
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

export async function _vmmServersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_VmmServerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _vmmServerListResultDeserializer(result.body);
}

/** List of VmmServers in a subscription. */
export function vmmServersListBySubscription(
  context: Client,
  options: VmmServersListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VmmServer> {
  return buildPagedAsyncIterator(
    context,
    () => _vmmServersListBySubscriptionSend(context, options),
    _vmmServersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _vmmServersListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: VmmServersListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers",
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

export async function _vmmServersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VmmServerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _vmmServerListResultDeserializer(result.body);
}

/** List of VmmServers in a resource group. */
export function vmmServersListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: VmmServersListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VmmServer> {
  return buildPagedAsyncIterator(
    context,
    () => _vmmServersListByResourceGroupSend(context, resourceGroupName, options),
    _vmmServersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _vmmServersDeleteSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      context.subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        force: options?.force,
      },
    });
}

export async function _vmmServersDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Removes the SCVmm fabric from Azure. */
export function vmmServersDelete(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _vmmServersDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _vmmServersDeleteSend(context, resourceGroupName, vmmServerName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _vmmServersUpdateSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  properties: VmmServerTagsUpdate,
  options: VmmServersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      context.subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: vmmServerTagsUpdateSerializer(properties),
    });
}

export async function _vmmServersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VmmServer> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return vmmServerDeserializer(result.body);
}

/** Updates the VmmServers resource. */
export function vmmServersUpdate(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  properties: VmmServerTagsUpdate,
  options: VmmServersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VmmServer>, VmmServer> {
  return getLongRunningPoller(context, _vmmServersUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _vmmServersUpdateSend(context, resourceGroupName, vmmServerName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<VmmServer>, VmmServer>;
}

export function _vmmServersCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  resource: VmmServer,
  options: VmmServersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      context.subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: vmmServerSerializer(resource),
    });
}

export async function _vmmServersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VmmServer> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return vmmServerDeserializer(result.body);
}

/** Onboards the SCVmm fabric as an Azure VmmServer resource. */
export function vmmServersCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  resource: VmmServer,
  options: VmmServersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VmmServer>, VmmServer> {
  return getLongRunningPoller(context, _vmmServersCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _vmmServersCreateOrUpdateSend(context, resourceGroupName, vmmServerName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<VmmServer>, VmmServer>;
}

export function _vmmServersGetSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      context.subscriptionId,
      resourceGroupName,
      vmmServerName,
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

export async function _vmmServersGetDeserialize(result: PathUncheckedResponse): Promise<VmmServer> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return vmmServerDeserializer(result.body);
}

/** Implements VmmServer GET method. */
export async function vmmServersGet(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersGetOptionalParams = { requestOptions: {} },
): Promise<VmmServer> {
  const result = await _vmmServersGetSend(context, resourceGroupName, vmmServerName, options);
  return _vmmServersGetDeserialize(result);
}
