// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ScVmmContext as Client,
  CloudsCreateOrUpdateOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsGetOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListBySubscriptionOptionalParams,
  CloudsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  Cloud,
  cloudSerializer,
  cloudDeserializer,
  CloudTagsUpdate,
  cloudTagsUpdateSerializer,
  _CloudListResult,
  _cloudListResultDeserializer,
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

export function _cloudsListBySubscriptionSend(
  context: Client,
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
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

export async function _cloudsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cloudListResultDeserializer(result.body);
}

/** List of Clouds in a subscription. */
export function cloudsListBySubscription(
  context: Client,
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudsListBySubscriptionSend(context, options),
    _cloudsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds",
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

export async function _cloudsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cloudListResultDeserializer(result.body);
}

/** List of Clouds in a resource group. */
export function cloudsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudsListByResourceGroupSend(context, resourceGroupName, options),
    _cloudsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudsDeleteSend(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      context.subscriptionId,
      resourceGroupName,
      cloudResourceName,
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

export async function _cloudsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deregisters the ScVmm fabric cloud from Azure. */
export function cloudsDelete(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _cloudsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudsDeleteSend(context, resourceGroupName, cloudResourceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _cloudsUpdateSend(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      context.subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: cloudTagsUpdateSerializer(properties),
    });
}

export async function _cloudsUpdateDeserialize(result: PathUncheckedResponse): Promise<Cloud> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudDeserializer(result.body);
}

/** Updates the Clouds resource. */
export function cloudsUpdate(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(context, _cloudsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudsUpdateSend(context, resourceGroupName, cloudResourceName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _cloudsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      context.subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: cloudSerializer(resource),
    });
}

export async function _cloudsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Cloud> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudDeserializer(result.body);
}

/** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
export function cloudsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(context, _cloudsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudsCreateOrUpdateSend(context, resourceGroupName, cloudResourceName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _cloudsGetSend(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      context.subscriptionId,
      resourceGroupName,
      cloudResourceName,
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

export async function _cloudsGetDeserialize(result: PathUncheckedResponse): Promise<Cloud> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudDeserializer(result.body);
}

/** Implements Cloud GET method. */
export async function cloudsGet(
  context: Client,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): Promise<Cloud> {
  const result = await _cloudsGetSend(context, resourceGroupName, cloudResourceName, options);
  return _cloudsGetDeserialize(result);
}
