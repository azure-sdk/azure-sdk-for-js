// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WeightsAndBiasesContext as Client,
  InstancesCreateOrUpdateOptionalParams,
  InstancesDeleteOptionalParams,
  InstancesGetOptionalParams,
  InstancesListByResourceGroupOptionalParams,
  InstancesListBySubscriptionOptionalParams,
  InstancesUpdateOptionalParams,
} from "../index.js";
import {
  InstanceResource,
  instanceResourceSerializer,
  instanceResourceDeserializer,
  errorResponseDeserializer,
  InstanceResourceUpdate,
  instanceResourceUpdateSerializer,
  _InstanceResourceListResult,
  _instanceResourceListResultDeserializer,
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

export function _instancesListBySubscriptionSend(
  context: Client,
  options: InstancesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.WeightsAndBiases/instances{?api-version}",
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

export async function _instancesListBySubscriptionDeserialize(
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
export function instancesListBySubscription(
  context: Client,
  options: InstancesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InstanceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _instancesListBySubscriptionSend(context, options),
    _instancesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _instancesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: InstancesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances{?api-version}",
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

export async function _instancesListByResourceGroupDeserialize(
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
export function instancesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: InstancesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InstanceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _instancesListByResourceGroupSend(context, resourceGroupName, options),
    _instancesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _instancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  options: InstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instancename: instancename,
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

export async function _instancesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a InstanceResource */
export function instancesDelete(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  options: InstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _instancesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _instancesDeleteSend(context, resourceGroupName, instancename, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _instancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  properties: InstanceResourceUpdate,
  options: InstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instancename: instancename,
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
    body: instanceResourceUpdateSerializer(properties),
  });
}

export async function _instancesUpdateDeserialize(
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
export async function instancesUpdate(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  properties: InstanceResourceUpdate,
  options: InstancesUpdateOptionalParams = { requestOptions: {} },
): Promise<InstanceResource> {
  const result = await _instancesUpdateSend(
    context,
    resourceGroupName,
    instancename,
    properties,
    options,
  );
  return _instancesUpdateDeserialize(result);
}

export function _instancesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  resource: InstanceResource,
  options: InstancesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instancename: instancename,
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
    body: instanceResourceSerializer(resource),
  });
}

export async function _instancesCreateOrUpdateDeserialize(
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
export function instancesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  resource: InstanceResource,
  options: InstancesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<InstanceResource>, InstanceResource> {
  return getLongRunningPoller(context, _instancesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _instancesCreateOrUpdateSend(context, resourceGroupName, instancename, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<InstanceResource>, InstanceResource>;
}

export function _instancesGetSend(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  options: InstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instancename: instancename,
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

export async function _instancesGetDeserialize(
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
export async function instancesGet(
  context: Client,
  resourceGroupName: string,
  instancename: string,
  options: InstancesGetOptionalParams = { requestOptions: {} },
): Promise<InstanceResource> {
  const result = await _instancesGetSend(context, resourceGroupName, instancename, options);
  return _instancesGetDeserialize(result);
}
