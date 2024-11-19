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
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _sapLandscapeMonitorGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sapLandscapeMonitorGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sapLandscapeMonitorResourceDeserializer(result.body);
}

/** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
export async function sapLandscapeMonitorGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    options,
  );
  return _sapLandscapeMonitorGetDeserialize(result);
}

export function _sapLandscapeMonitorCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: sapLandscapeMonitorResourceSerializer(resource),
    });
}

export async function _sapLandscapeMonitorCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sapLandscapeMonitorResourceDeserializer(result.body);
}

/** Creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name. */
export async function sapLandscapeMonitorCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorCreateSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    resource,
    options,
  );
  return _sapLandscapeMonitorCreateDeserialize(result);
}

export function _sapLandscapeMonitorUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: sapLandscapeMonitorResourceSerializer(properties),
    });
}

export async function _sapLandscapeMonitorUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sapLandscapeMonitorResourceDeserializer(result.body);
}

/** Patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name. */
export async function sapLandscapeMonitorUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    properties,
    options,
  );
  return _sapLandscapeMonitorUpdateDeserialize(result);
}

export function _sapLandscapeMonitorDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _sapLandscapeMonitorDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. */
export async function sapLandscapeMonitorDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sapLandscapeMonitorDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    options,
  );
  return _sapLandscapeMonitorDeleteDeserialize(result);
}

export function _sapLandscapeMonitorListByMonitorSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sapLandscapeMonitorListByMonitorDeserialize(
  result: PathUncheckedResponse,
): Promise<_SapLandscapeMonitorResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _sapLandscapeMonitorResourceListResultDeserializer(result.body);
}

/** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
export function sapLandscapeMonitorListByMonitor(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SapLandscapeMonitorResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sapLandscapeMonitorListByMonitorSend(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    _sapLandscapeMonitorListByMonitorDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
