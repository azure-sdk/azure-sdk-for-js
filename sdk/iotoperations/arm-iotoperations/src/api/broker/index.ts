// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BrokerCreateOrUpdateOptionalParams,
  BrokerDeleteOptionalParams,
  BrokerGetOptionalParams,
  BrokerListByResourceGroupOptionalParams,
  IoTOperationsContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  BrokerResource,
  brokerResourceSerializer,
  brokerResourceDeserializer,
  _BrokerResourceListResult,
  _brokerResourceListResultDeserializer,
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

export function _brokerListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: BrokerListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
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

export async function _brokerListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BrokerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _brokerResourceListResultDeserializer(result.body);
}

/** List BrokerResource resources by InstanceResource */
export function brokerListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: BrokerListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BrokerResource> {
  return buildPagedAsyncIterator(
    context,
    () => _brokerListByResourceGroupSend(context, resourceGroupName, instanceName, options),
    _brokerListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _brokerDeleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}{?api-version}",
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
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _brokerDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a BrokerResource */
export function brokerDelete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _brokerDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _brokerDeleteSend(context, resourceGroupName, instanceName, brokerName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _brokerCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  resource: BrokerResource,
  options: BrokerCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}{?api-version}",
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
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: brokerResourceSerializer(resource),
  });
}

export async function _brokerCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return brokerResourceDeserializer(result.body);
}

/** Create a BrokerResource */
export function brokerCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  resource: BrokerResource,
  options: BrokerCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<BrokerResource>, BrokerResource> {
  return getLongRunningPoller(context, _brokerCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _brokerCreateOrUpdateSend(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<BrokerResource>, BrokerResource>;
}

export function _brokerGetSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}{?api-version}",
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

export async function _brokerGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return brokerResourceDeserializer(result.body);
}

/** Get a BrokerResource */
export async function brokerGet(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerGetOptionalParams = { requestOptions: {} },
): Promise<BrokerResource> {
  const result = await _brokerGetSend(
    context,
    resourceGroupName,
    instanceName,
    brokerName,
    options,
  );
  return _brokerGetDeserialize(result);
}
