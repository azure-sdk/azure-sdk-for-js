// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  SapLandscapeMonitorCreateOptionalParams,
  SapLandscapeMonitorDeleteOptionalParams,
  SapLandscapeMonitorGetOptionalParams,
  SapLandscapeMonitorListByMonitorOptionalParams,
  SapLandscapeMonitorUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  SapLandscapeMonitorResource,
  sapLandscapeMonitorResourceSerializer,
  sapLandscapeMonitorResourceDeserializer,
  _SapLandscapeMonitorResourceListResult,
  _sapLandscapeMonitorResourceListResultDeserializer,
} from "../../models/models.js";
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

export function _sapLandscapeMonitorListByMonitorSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor{?api-version}",
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

export async function _sapLandscapeMonitorListByMonitorDeserialize(
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
export function sapLandscapeMonitorListByMonitor(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SapLandscapeMonitorResource> {
  return buildPagedAsyncIterator(
    context,
    () => _sapLandscapeMonitorListByMonitorSend(context, resourceGroupName, monitorName, options),
    _sapLandscapeMonitorListByMonitorDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapLandscapeMonitorDeleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api-version}",
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

export async function _sapLandscapeMonitorDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. */
export async function sapLandscapeMonitorDelete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sapLandscapeMonitorDeleteSend(
    context,
    resourceGroupName,
    monitorName,
    options,
  );
  return _sapLandscapeMonitorDeleteDeserialize(result);
}

export function _sapLandscapeMonitorUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api-version}",
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
    body: sapLandscapeMonitorResourceSerializer(properties),
  });
}

export async function _sapLandscapeMonitorUpdateDeserialize(
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
export async function sapLandscapeMonitorUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorUpdateSend(
    context,
    resourceGroupName,
    monitorName,
    properties,
    options,
  );
  return _sapLandscapeMonitorUpdateDeserialize(result);
}

export function _sapLandscapeMonitorCreateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api-version}",
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
    body: sapLandscapeMonitorResourceSerializer(resource),
  });
}

export async function _sapLandscapeMonitorCreateDeserialize(
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
export async function sapLandscapeMonitorCreate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorCreateSend(
    context,
    resourceGroupName,
    monitorName,
    resource,
    options,
  );
  return _sapLandscapeMonitorCreateDeserialize(result);
}

export function _sapLandscapeMonitorGetSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default{?api-version}",
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

export async function _sapLandscapeMonitorGetDeserialize(
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
export async function sapLandscapeMonitorGet(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorGetSend(
    context,
    resourceGroupName,
    monitorName,
    options,
  );
  return _sapLandscapeMonitorGetDeserialize(result);
}
