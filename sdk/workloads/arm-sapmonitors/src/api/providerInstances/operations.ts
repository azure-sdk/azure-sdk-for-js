// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ProviderInstance,
  providerInstanceSerializer,
  providerInstanceDeserializer,
  _ProviderInstanceListResult,
  _providerInstanceListResultDeserializer,
} from "../../models/models.js";
import {
  ProviderInstancesListByMonitorOptionalParams,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesGetOptionalParams,
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

export function _listByMonitorSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ProviderInstancesListByMonitorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances{?api%2Dversion}",
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

export async function _listByMonitorDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProviderInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _providerInstanceListResultDeserializer(result.body);
}

/** Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances. */
export function listByMonitor(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ProviderInstancesListByMonitorOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ProviderInstance> {
  return buildPagedAsyncIterator(
    context,
    () => _listByMonitorSend(context, resourceGroupName, monitorName, options),
    _listByMonitorDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      providerInstanceName: providerInstanceName,
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
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, monitorName, providerInstanceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  resource: ProviderInstance,
  options: ProviderInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      providerInstanceName: providerInstanceName,
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
    body: providerInstanceSerializer(resource),
  });
}

export async function _createDeserialize(result: PathUncheckedResponse): Promise<ProviderInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return providerInstanceDeserializer(result.body);
}

/** Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export function create(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  resource: ProviderInstance,
  options: ProviderInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ProviderInstance>, ProviderInstance> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(context, resourceGroupName, monitorName, providerInstanceName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ProviderInstance>, ProviderInstance>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      providerInstanceName: providerInstanceName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ProviderInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return providerInstanceDeserializer(result.body);
}

/** Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesGetOptionalParams = { requestOptions: {} },
): Promise<ProviderInstance> {
  const result = await _getSend(
    context,
    resourceGroupName,
    monitorName,
    providerInstanceName,
    options,
  );
  return _getDeserialize(result);
}
