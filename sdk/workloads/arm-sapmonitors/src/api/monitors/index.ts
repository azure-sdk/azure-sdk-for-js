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
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _monitorsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Monitor> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return monitorDeserializer(result.body);
}

/** Gets properties of a SAP monitor for the specified subscription, resource group, and resource name. */
export async function monitorsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsGetOptionalParams = { requestOptions: {} },
): Promise<Monitor> {
  const result = await _monitorsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    options,
  );
  return _monitorsGetDeserialize(result);
}

export function _monitorsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: Monitor,
  options: MonitorsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: monitorSerializer(resource),
    });
}

export async function _monitorsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<Monitor> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return monitorDeserializer(result.body);
}

/** Creates a SAP monitor for the specified subscription, resource group, and resource name. */
export function monitorsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: Monitor,
  options: MonitorsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Monitor>, Monitor> {
  return getLongRunningPoller(
    context,
    _monitorsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _monitorsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Monitor>, Monitor>;
}

export function _monitorsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: UpdateMonitorRequest,
  options: MonitorsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: updateMonitorRequestSerializer(properties),
    });
}

export async function _monitorsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Monitor> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return monitorDeserializer(result.body);
}

/** Patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name. */
export function monitorsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: UpdateMonitorRequest,
  options: MonitorsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Monitor>, Monitor> {
  return getLongRunningPoller(
    context,
    _monitorsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _monitorsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<Monitor>, Monitor>;
}

export function _monitorsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name. */
export function monitorsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _monitorsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _monitorsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _monitorsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: MonitorsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitorListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _monitorListResultDeserializer(result.body);
}

/** Gets a list of SAP monitors in the specified resource group. */
export function monitorsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: MonitorsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Monitor> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _monitorsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _monitorsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _monitorsListSend(
  context: Client,
  subscriptionId: string,
  options: MonitorsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/monitors",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitorListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _monitorListResultDeserializer(result.body);
}

/** Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor. */
export function monitorsList(
  context: Client,
  subscriptionId: string,
  options: MonitorsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Monitor> {
  return buildPagedAsyncIterator(
    context,
    () => _monitorsListSend(context, subscriptionId, options),
    _monitorsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
