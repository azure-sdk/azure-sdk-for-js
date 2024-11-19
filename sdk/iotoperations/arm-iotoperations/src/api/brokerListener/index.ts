// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BrokerListenerCreateOrUpdateOptionalParams,
  BrokerListenerDeleteOptionalParams,
  BrokerListenerGetOptionalParams,
  BrokerListenerListByResourceGroupOptionalParams,
  IoTOperationsContext as Client,
} from "../index.js";
import {
  ListenerResource,
  listenerResourceSerializer,
  listenerResourceDeserializer,
  _ListenerResourceListResult,
  _listenerResourceListResultDeserializer,
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

export function _brokerListenerGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      listenerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerListenerGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ListenerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listenerResourceDeserializer(result.body);
}

/** Get a ListenerResource */
export async function brokerListenerGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerGetOptionalParams = { requestOptions: {} },
): Promise<ListenerResource> {
  const result = await _brokerListenerGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    brokerName,
    listenerName,
    options,
  );
  return _brokerListenerGetDeserialize(result);
}

export function _brokerListenerCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  resource: ListenerResource,
  options: BrokerListenerCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      listenerName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: listenerResourceSerializer(resource),
    });
}

export async function _brokerListenerCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ListenerResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listenerResourceDeserializer(result.body);
}

/** Create a ListenerResource */
export function brokerListenerCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  resource: ListenerResource,
  options: BrokerListenerCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ListenerResource>, ListenerResource> {
  return getLongRunningPoller(
    context,
    _brokerListenerCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerListenerCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          listenerName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<ListenerResource>, ListenerResource>;
}

export function _brokerListenerDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      listenerName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerListenerDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a ListenerResource */
export function brokerListenerDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _brokerListenerDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerListenerDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          listenerName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _brokerListenerListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerListenerListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerListenerListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListenerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _listenerResourceListResultDeserializer(result.body);
}

/** List ListenerResource resources by BrokerResource */
export function brokerListenerListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerListenerListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ListenerResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerListenerListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
    _brokerListenerListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
