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
  errorResponseDeserializer,
  BrokerListenerResource,
  brokerListenerResourceSerializer,
  brokerListenerResourceDeserializer,
  _BrokerListenerResourceListResult,
  _brokerListenerResourceListResultDeserializer,
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

export function _brokerListenerListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerListenerListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      brokerName: brokerName,
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

export async function _brokerListenerListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BrokerListenerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _brokerListenerResourceListResultDeserializer(result.body);
}

/** List BrokerListenerResource resources by BrokerResource */
export function brokerListenerListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerListenerListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BrokerListenerResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerListenerListByResourceGroupSend(
        context,
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

export function _brokerListenerDeleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      brokerName: brokerName,
      listenerName: listenerName,
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

export async function _brokerListenerDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a BrokerListenerResource */
export function brokerListenerDelete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _brokerListenerDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _brokerListenerDeleteSend(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        listenerName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _brokerListenerCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  resource: BrokerListenerResource,
  options: BrokerListenerCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      brokerName: brokerName,
      listenerName: listenerName,
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
    body: brokerListenerResourceSerializer(resource),
  });
}

export async function _brokerListenerCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerListenerResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return brokerListenerResourceDeserializer(result.body);
}

/** Create a BrokerListenerResource */
export function brokerListenerCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  resource: BrokerListenerResource,
  options: BrokerListenerCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<BrokerListenerResource>, BrokerListenerResource> {
  return getLongRunningPoller(context, _brokerListenerCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _brokerListenerCreateOrUpdateSend(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        listenerName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<BrokerListenerResource>, BrokerListenerResource>;
}

export function _brokerListenerGetSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      brokerName: brokerName,
      listenerName: listenerName,
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

export async function _brokerListenerGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerListenerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return brokerListenerResourceDeserializer(result.body);
}

/** Get a BrokerListenerResource */
export async function brokerListenerGet(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerGetOptionalParams = { requestOptions: {} },
): Promise<BrokerListenerResource> {
  const result = await _brokerListenerGetSend(
    context,
    resourceGroupName,
    instanceName,
    brokerName,
    listenerName,
    options,
  );
  return _brokerListenerGetDeserialize(result);
}
