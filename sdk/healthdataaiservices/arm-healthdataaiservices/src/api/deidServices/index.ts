// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HealthDataAIServicesContext as Client,
  DeidServicesCreateOptionalParams,
  DeidServicesDeleteOptionalParams,
  DeidServicesGetOptionalParams,
  DeidServicesListByResourceGroupOptionalParams,
  DeidServicesListBySubscriptionOptionalParams,
  DeidServicesUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DeidService,
  deidServiceSerializer,
  deidServiceDeserializer,
  _DeidServiceListResult,
  _deidServiceListResultDeserializer,
  DeidUpdate,
  deidUpdateSerializer,
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

export function _deidServicesDeleteSend(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  options: DeidServicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthDataAIServices/deidServices/{deidServiceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      deidServiceName: deidServiceName,
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

export async function _deidServicesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a DeidService */
export function deidServicesDelete(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  options: DeidServicesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deidServicesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deidServicesDeleteSend(context, resourceGroupName, deidServiceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _deidServicesUpdateSend(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  properties: DeidUpdate,
  options: DeidServicesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthDataAIServices/deidServices/{deidServiceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      deidServiceName: deidServiceName,
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
    body: deidUpdateSerializer(properties),
  });
}

export async function _deidServicesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DeidService> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deidServiceDeserializer(result.body);
}

/** Update a DeidService */
export function deidServicesUpdate(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  properties: DeidUpdate,
  options: DeidServicesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeidService>, DeidService> {
  return getLongRunningPoller(context, _deidServicesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deidServicesUpdateSend(context, resourceGroupName, deidServiceName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DeidService>, DeidService>;
}

export function _deidServicesCreateSend(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  resource: DeidService,
  options: DeidServicesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthDataAIServices/deidServices/{deidServiceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      deidServiceName: deidServiceName,
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
    body: deidServiceSerializer(resource),
  });
}

export async function _deidServicesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<DeidService> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deidServiceDeserializer(result.body);
}

/** Create a DeidService */
export function deidServicesCreate(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  resource: DeidService,
  options: DeidServicesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeidService>, DeidService> {
  return getLongRunningPoller(context, _deidServicesCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deidServicesCreateSend(context, resourceGroupName, deidServiceName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DeidService>, DeidService>;
}

export function _deidServicesListBySubscriptionSend(
  context: Client,
  options: DeidServicesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.HealthDataAIServices/deidServices{?api-version}",
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

export async function _deidServicesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeidServiceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deidServiceListResultDeserializer(result.body);
}

/** List DeidService resources by subscription ID */
export function deidServicesListBySubscription(
  context: Client,
  options: DeidServicesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DeidService> {
  return buildPagedAsyncIterator(
    context,
    () => _deidServicesListBySubscriptionSend(context, options),
    _deidServicesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deidServicesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: DeidServicesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthDataAIServices/deidServices{?api-version}",
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

export async function _deidServicesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeidServiceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deidServiceListResultDeserializer(result.body);
}

/** List DeidService resources by resource group */
export function deidServicesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: DeidServicesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DeidService> {
  return buildPagedAsyncIterator(
    context,
    () => _deidServicesListByResourceGroupSend(context, resourceGroupName, options),
    _deidServicesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deidServicesGetSend(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  options: DeidServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthDataAIServices/deidServices/{deidServiceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      deidServiceName: deidServiceName,
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

export async function _deidServicesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DeidService> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deidServiceDeserializer(result.body);
}

/** Get a DeidService */
export async function deidServicesGet(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  options: DeidServicesGetOptionalParams = { requestOptions: {} },
): Promise<DeidService> {
  const result = await _deidServicesGetSend(context, resourceGroupName, deidServiceName, options);
  return _deidServicesGetDeserialize(result);
}
