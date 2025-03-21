// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  MonitorsCreateOptionalParams,
  MonitorsDeleteOptionalParams,
  MonitorsGetOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsListOptionalParams,
  MonitorsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  Monitor,
  monitorSerializer,
  monitorDeserializer,
  UpdateMonitorRequest,
  updateMonitorRequestSerializer,
  _MonitorListResult,
  _monitorListResultDeserializer,
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

export function _monitorsListSend(
  context: Client,
  options: MonitorsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/monitors{?api-version}",
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

export async function _monitorsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitorListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _monitorListResultDeserializer(result.body);
}

/** Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor. */
export function monitorsList(
  context: Client,
  options: MonitorsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Monitor> {
  return buildPagedAsyncIterator(
    context,
    () => _monitorsListSend(context, options),
    _monitorsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _monitorsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: MonitorsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors{?api-version}",
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

export async function _monitorsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitorListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _monitorListResultDeserializer(result.body);
}

/** Gets a list of SAP monitors in the specified resource group. */
export function monitorsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: MonitorsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Monitor> {
  return buildPagedAsyncIterator(
    context,
    () => _monitorsListByResourceGroupSend(context, resourceGroupName, options),
    _monitorsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _monitorsDeleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
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

export async function _monitorsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name. */
export function monitorsDelete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _monitorsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _monitorsDeleteSend(context, resourceGroupName, monitorName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _monitorsUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  properties: UpdateMonitorRequest,
  options: MonitorsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
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
    body: updateMonitorRequestSerializer(properties),
  });
}

export async function _monitorsUpdateDeserialize(result: PathUncheckedResponse): Promise<Monitor> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return monitorDeserializer(result.body);
}

/** Patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name. */
export function monitorsUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  properties: UpdateMonitorRequest,
  options: MonitorsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Monitor>, Monitor> {
  return getLongRunningPoller(context, _monitorsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _monitorsUpdateSend(context, resourceGroupName, monitorName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Monitor>, Monitor>;
}

export function _monitorsCreateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  resource: Monitor,
  options: MonitorsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
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
    body: monitorSerializer(resource),
  });
}

export async function _monitorsCreateDeserialize(result: PathUncheckedResponse): Promise<Monitor> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return monitorDeserializer(result.body);
}

/** Creates a SAP monitor for the specified subscription, resource group, and resource name. */
export function monitorsCreate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  resource: Monitor,
  options: MonitorsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Monitor>, Monitor> {
  return getLongRunningPoller(context, _monitorsCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _monitorsCreateSend(context, resourceGroupName, monitorName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Monitor>, Monitor>;
}

export function _monitorsGetSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
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

export async function _monitorsGetDeserialize(result: PathUncheckedResponse): Promise<Monitor> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return monitorDeserializer(result.body);
}

/** Gets properties of a SAP monitor for the specified subscription, resource group, and resource name. */
export async function monitorsGet(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsGetOptionalParams = { requestOptions: {} },
): Promise<Monitor> {
  const result = await _monitorsGetSend(context, resourceGroupName, monitorName, options);
  return _monitorsGetDeserialize(result);
}
