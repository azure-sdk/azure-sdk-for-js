// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  DatadogMonitorResource,
  datadogMonitorResourceSerializer,
  datadogMonitorResourceDeserializer,
  DatadogMonitorResourceUpdateParameters,
  datadogMonitorResourceUpdateParametersSerializer,
  _DatadogMonitorResourceListResponse,
  _datadogMonitorResourceListResponseDeserializer,
  _DatadogApiKeyListResponse,
  _datadogApiKeyListResponseDeserializer,
  DatadogApiKey,
  datadogApiKeySerializer,
  datadogApiKeyDeserializer,
  _DatadogHostListResponse,
  _datadogHostListResponseDeserializer,
  DatadogHost,
  _LinkedResourceListResponse,
  _linkedResourceListResponseDeserializer,
  LinkedResource,
  _MonitoredResourceListResponse,
  _monitoredResourceListResponseDeserializer,
  MonitoredResource,
  DatadogSetPasswordLink,
  datadogSetPasswordLinkDeserializer,
  BillingInfoResponse,
  billingInfoResponseDeserializer,
} from "../../models/models.js";
import {
  DatadogMonitorResourcesBillingInfoGetOptionalParams,
  DatadogMonitorResourcesRefreshSetPasswordLinkOptionalParams,
  DatadogMonitorResourcesListMonitoredResourcesOptionalParams,
  DatadogMonitorResourcesListLinkedResourcesOptionalParams,
  DatadogMonitorResourcesListHostsOptionalParams,
  DatadogMonitorResourcesSetDefaultKeyOptionalParams,
  DatadogMonitorResourcesGetDefaultKeyOptionalParams,
  DatadogMonitorResourcesListApiKeysOptionalParams,
  DatadogMonitorResourcesListOptionalParams,
  DatadogMonitorResourcesListByResourceGroupOptionalParams,
  DatadogMonitorResourcesDeleteOptionalParams,
  DatadogMonitorResourcesUpdateOptionalParams,
  DatadogMonitorResourcesCreateOptionalParams,
  DatadogMonitorResourcesGetOptionalParams,
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

export function _billingInfoGetSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesBillingInfoGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/getBillingInfo{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _billingInfoGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BillingInfoResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return billingInfoResponseDeserializer(result.body);
}

/** Get marketplace and organization info mapped to the given monitor. */
export async function billingInfoGet(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesBillingInfoGetOptionalParams = {
    requestOptions: {},
  },
): Promise<BillingInfoResponse> {
  const result = await _billingInfoGetSend(context, resourceGroupName, monitorName, options);
  return _billingInfoGetDeserialize(result);
}

export function _refreshSetPasswordLinkSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesRefreshSetPasswordLinkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/refreshSetPasswordLink{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _refreshSetPasswordLinkDeserialize(
  result: PathUncheckedResponse,
): Promise<DatadogSetPasswordLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datadogSetPasswordLinkDeserializer(result.body);
}

/** Refresh the set password link and return a latest one. */
export async function refreshSetPasswordLink(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesRefreshSetPasswordLinkOptionalParams = {
    requestOptions: {},
  },
): Promise<DatadogSetPasswordLink> {
  const result = await _refreshSetPasswordLinkSend(
    context,
    resourceGroupName,
    monitorName,
    options,
  );
  return _refreshSetPasswordLinkDeserialize(result);
}

export function _listMonitoredResourcesSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListMonitoredResourcesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listMonitoredResources{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listMonitoredResourcesDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitoredResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _monitoredResourceListResponseDeserializer(result.body);
}

/** List the resources currently being monitored by the Datadog monitor resource. */
export function listMonitoredResources(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListMonitoredResourcesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<MonitoredResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listMonitoredResourcesSend(context, resourceGroupName, monitorName, options),
    _listMonitoredResourcesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listLinkedResourcesSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListLinkedResourcesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listLinkedResources{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listLinkedResourcesDeserialize(
  result: PathUncheckedResponse,
): Promise<_LinkedResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _linkedResourceListResponseDeserializer(result.body);
}

/** List all Azure resources associated to the same Datadog organization as the target resource. */
export function listLinkedResources(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListLinkedResourcesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<LinkedResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listLinkedResourcesSend(context, resourceGroupName, monitorName, options),
    _listLinkedResourcesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listHostsSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListHostsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listHosts{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listHostsDeserialize(
  result: PathUncheckedResponse,
): Promise<_DatadogHostListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _datadogHostListResponseDeserializer(result.body);
}

/** List the hosts for a given monitor resource. */
export function listHosts(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListHostsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DatadogHost> {
  return buildPagedAsyncIterator(
    context,
    () => _listHostsSend(context, resourceGroupName, monitorName, options),
    _listHostsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _setDefaultKeySend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: DatadogApiKey;
  },
  options: DatadogMonitorResourcesSetDefaultKeyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/setDefaultKey{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
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
    body: !options["body"] ? options["body"] : datadogApiKeySerializer(options["body"]),
  });
}

export async function _setDefaultKeyDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Set the default api key. */
export async function setDefaultKey(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: DatadogApiKey;
  },
  options: DatadogMonitorResourcesSetDefaultKeyOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _setDefaultKeySend(context, resourceGroupName, monitorName, body, options);
  return _setDefaultKeyDeserialize(result);
}

export function _getDefaultKeySend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesGetDefaultKeyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/getDefaultKey{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDefaultKeyDeserialize(
  result: PathUncheckedResponse,
): Promise<DatadogApiKey> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datadogApiKeyDeserializer(result.body);
}

/** Get the default api key. */
export async function getDefaultKey(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesGetDefaultKeyOptionalParams = {
    requestOptions: {},
  },
): Promise<DatadogApiKey> {
  const result = await _getDefaultKeySend(context, resourceGroupName, monitorName, options);
  return _getDefaultKeyDeserialize(result);
}

export function _listApiKeysSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListApiKeysOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listApiKeys{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listApiKeysDeserialize(
  result: PathUncheckedResponse,
): Promise<_DatadogApiKeyListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _datadogApiKeyListResponseDeserializer(result.body);
}

/** List the api keys for a given monitor resource. */
export function listApiKeys(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesListApiKeysOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DatadogApiKey> {
  return buildPagedAsyncIterator(
    context,
    () => _listApiKeysSend(context, resourceGroupName, monitorName, options),
    _listApiKeysDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listSend(
  context: Client,
  options: DatadogMonitorResourcesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/monitors{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_DatadogMonitorResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _datadogMonitorResourceListResponseDeserializer(result.body);
}

/** List all monitors under the specified subscription. */
export function list(
  context: Client,
  options: DatadogMonitorResourcesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DatadogMonitorResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: DatadogMonitorResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api%2Dversion": context.apiVersion,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DatadogMonitorResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _datadogMonitorResourceListResponseDeserializer(result.body);
}

/** List all monitors under the specified resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: DatadogMonitorResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DatadogMonitorResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
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

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a monitor resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceGroupName, monitorName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: DatadogMonitorResourceUpdateParameters,
  options: DatadogMonitorResourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
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
    body: datadogMonitorResourceUpdateParametersSerializer(body),
  });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Update a monitor resource. */
export function update(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: DatadogMonitorResourceUpdateParameters,
  options: DatadogMonitorResourcesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _updateSend(context, resourceGroupName, monitorName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: DatadogMonitorResource,
  options: DatadogMonitorResourcesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
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
    body: datadogMonitorResourceSerializer(body),
  });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<DatadogMonitorResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datadogMonitorResourceDeserializer(result.body);
}

/** Create a monitor resource. */
export function create(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: DatadogMonitorResource,
  options: DatadogMonitorResourcesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DatadogMonitorResource>, DatadogMonitorResource> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _createSend(context, resourceGroupName, monitorName, body, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DatadogMonitorResource>, DatadogMonitorResource>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<DatadogMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datadogMonitorResourceDeserializer(result.body);
}

/** Get the properties of a specific monitor resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogMonitorResourcesGetOptionalParams = { requestOptions: {} },
): Promise<DatadogMonitorResource> {
  const result = await _getSend(context, resourceGroupName, monitorName, options);
  return _getDeserialize(result);
}
