// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  SapLandscapeMonitorResource,
  sapLandscapeMonitorResourceSerializer,
  sapLandscapeMonitorResourceDeserializer,
  _SapLandscapeMonitorResourceListResult,
  _sapLandscapeMonitorResourceListResultDeserializer,
} from "../../models/models.js";
import {
  SapLandscapeMonitorListByMonitorOptionalParams,
  SapLandscapeMonitorDeleteOptionalParams,
  SapLandscapeMonitorUpdateOptionalParams,
  SapLandscapeMonitorCreateOptionalParams,
  SapLandscapeMonitorGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listByMonitorSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor{?api%2Dversion}",
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
): Promise<_SapLandscapeMonitorResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapLandscapeMonitorResourceListResultDeserializer(result.body);
}

/** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
export function listByMonitor(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SapLandscapeMonitorResource> {
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
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api%2Dversion}",
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
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, resourceGroupName, monitorName, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api%2Dversion}",
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
    body: sapLandscapeMonitorResourceSerializer(properties),
  });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapLandscapeMonitorResourceDeserializer(result.body);
}

/** Patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name. */
export async function update(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _updateSend(context, resourceGroupName, monitorName, properties, options);
  return _updateDeserialize(result);
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api%2Dversion}",
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
    body: sapLandscapeMonitorResourceSerializer(resource),
  });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapLandscapeMonitorResourceDeserializer(result.body);
}

/** Creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name. */
export async function create(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _createSend(context, resourceGroupName, monitorName, resource, options);
  return _createDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api%2Dversion}",
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
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapLandscapeMonitorResourceDeserializer(result.body);
}

/** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _getSend(context, resourceGroupName, monitorName, options);
  return _getDeserialize(result);
}
