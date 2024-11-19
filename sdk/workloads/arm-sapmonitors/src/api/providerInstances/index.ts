// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesGetOptionalParams,
  ProviderInstancesListByMonitorOptionalParams,
} from "../index.js";
import {
  ProviderInstance,
  providerInstanceSerializer,
  providerInstanceDeserializer,
  _ProviderInstanceListResult,
  _providerInstanceListResultDeserializer,
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

export function _providerInstancesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
      providerInstanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _providerInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ProviderInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return providerInstanceDeserializer(result.body);
}

/** Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export async function providerInstancesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesGetOptionalParams = { requestOptions: {} },
): Promise<ProviderInstance> {
  const result = await _providerInstancesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    providerInstanceName,
    options,
  );
  return _providerInstancesGetDeserialize(result);
}

export function _providerInstancesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  resource: ProviderInstance,
  options: ProviderInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
      providerInstanceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: providerInstanceSerializer(resource),
    });
}

export async function _providerInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<ProviderInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return providerInstanceDeserializer(result.body);
}

/** Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export function providerInstancesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  resource: ProviderInstance,
  options: ProviderInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ProviderInstance>, ProviderInstance> {
  return getLongRunningPoller(
    context,
    _providerInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _providerInstancesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          providerInstanceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<ProviderInstance>, ProviderInstance>;
}

export function _providerInstancesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
      providerInstanceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _providerInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export function providerInstancesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _providerInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _providerInstancesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          providerInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _providerInstancesListByMonitorSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: ProviderInstancesListByMonitorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _providerInstancesListByMonitorDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProviderInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _providerInstanceListResultDeserializer(result.body);
}

/** Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances. */
export function providerInstancesListByMonitor(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: ProviderInstancesListByMonitorOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ProviderInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _providerInstancesListByMonitorSend(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    _providerInstancesListByMonitorDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
