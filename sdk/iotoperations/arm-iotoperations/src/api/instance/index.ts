// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IoTOperationsContext as Client,
  InstanceCreateOrUpdateOptionalParams,
  InstanceDeleteOptionalParams,
  InstanceGetOptionalParams,
  InstanceListByResourceGroupOptionalParams,
  InstanceListBySubscriptionOptionalParams,
  InstanceUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  InstanceResource,
  instanceResourceSerializer,
  instanceResourceDeserializer,
  InstancePatchModel,
  instancePatchModelSerializer,
  _InstanceResourceListResult,
  _instanceResourceListResultDeserializer,
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

export function _instanceListBySubscriptionSend(
  context: Client,
  options: InstanceListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.IoTOperations/instances",
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

export async function _instanceListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_InstanceResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _instanceResourceListResultDeserializer(result.body);
}

/** List InstanceResource resources by subscription ID */
export function instanceListBySubscription(
  context: Client,
  options: InstanceListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InstanceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _instanceListBySubscriptionSend(context, options),
    _instanceListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _instanceListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: InstanceListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances",
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

export async function _instanceListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_InstanceResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _instanceResourceListResultDeserializer(result.body);
}

/** List InstanceResource resources by resource group */
export function instanceListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: InstanceListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InstanceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _instanceListByResourceGroupSend(context, resourceGroupName, options),
    _instanceListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _instanceDeleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
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

export async function _instanceDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a InstanceResource */
export function instanceDelete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _instanceDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _instanceDeleteSend(context, resourceGroupName, instanceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _instanceUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  properties: InstancePatchModel,
  options: InstanceUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: instancePatchModelSerializer(properties),
    });
}

export async function _instanceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InstanceResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return instanceResourceDeserializer(result.body);
}

/** Update a InstanceResource */
export async function instanceUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  properties: InstancePatchModel,
  options: InstanceUpdateOptionalParams = { requestOptions: {} },
): Promise<InstanceResource> {
  const result = await _instanceUpdateSend(
    context,
    resourceGroupName,
    instanceName,
    properties,
    options,
  );
  return _instanceUpdateDeserialize(result);
}

export function _instanceCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  resource: InstanceResource,
  options: InstanceCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: instanceResourceSerializer(resource),
    });
}

export async function _instanceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InstanceResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return instanceResourceDeserializer(result.body);
}

/** Create a InstanceResource */
export function instanceCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  resource: InstanceResource,
  options: InstanceCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<InstanceResource>, InstanceResource> {
  return getLongRunningPoller(context, _instanceCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _instanceCreateOrUpdateSend(context, resourceGroupName, instanceName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<InstanceResource>, InstanceResource>;
}

export function _instanceGetSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
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

export async function _instanceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InstanceResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return instanceResourceDeserializer(result.body);
}

/** Get a InstanceResource */
export async function instanceGet(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceGetOptionalParams = { requestOptions: {} },
): Promise<InstanceResource> {
  const result = await _instanceGetSend(context, resourceGroupName, instanceName, options);
  return _instanceGetDeserialize(result);
}
