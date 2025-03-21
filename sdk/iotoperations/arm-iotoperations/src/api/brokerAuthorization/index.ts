// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BrokerAuthorizationCreateOrUpdateOptionalParams,
  BrokerAuthorizationDeleteOptionalParams,
  BrokerAuthorizationGetOptionalParams,
  BrokerAuthorizationListByResourceGroupOptionalParams,
  IoTOperationsContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  BrokerAuthorizationResource,
  brokerAuthorizationResourceSerializer,
  brokerAuthorizationResourceDeserializer,
  _BrokerAuthorizationResourceListResult,
  _brokerAuthorizationResourceListResultDeserializer,
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

export function _brokerAuthorizationListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthorizationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations{?api-version}",
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

export async function _brokerAuthorizationListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BrokerAuthorizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _brokerAuthorizationResourceListResultDeserializer(result.body);
}

/** List BrokerAuthorizationResource resources by BrokerResource */
export function brokerAuthorizationListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthorizationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BrokerAuthorizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerAuthorizationListByResourceGroupSend(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
    _brokerAuthorizationListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _brokerAuthorizationDeleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      brokerName: brokerName,
      authorizationName: authorizationName,
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

export async function _brokerAuthorizationDeleteDeserialize(
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

/** Delete a BrokerAuthorizationResource */
export function brokerAuthorizationDelete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _brokerAuthorizationDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthorizationDeleteSend(
          context,
          resourceGroupName,
          instanceName,
          brokerName,
          authorizationName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _brokerAuthorizationCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  resource: BrokerAuthorizationResource,
  options: BrokerAuthorizationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      brokerName: brokerName,
      authorizationName: authorizationName,
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
    body: brokerAuthorizationResourceSerializer(resource),
  });
}

export async function _brokerAuthorizationCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerAuthorizationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return brokerAuthorizationResourceDeserializer(result.body);
}

/** Create a BrokerAuthorizationResource */
export function brokerAuthorizationCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  resource: BrokerAuthorizationResource,
  options: BrokerAuthorizationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<BrokerAuthorizationResource>, BrokerAuthorizationResource> {
  return getLongRunningPoller(
    context,
    _brokerAuthorizationCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthorizationCreateOrUpdateSend(
          context,
          resourceGroupName,
          instanceName,
          brokerName,
          authorizationName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<BrokerAuthorizationResource>, BrokerAuthorizationResource>;
}

export function _brokerAuthorizationGetSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      brokerName: brokerName,
      authorizationName: authorizationName,
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

export async function _brokerAuthorizationGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerAuthorizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return brokerAuthorizationResourceDeserializer(result.body);
}

/** Get a BrokerAuthorizationResource */
export async function brokerAuthorizationGet(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationGetOptionalParams = { requestOptions: {} },
): Promise<BrokerAuthorizationResource> {
  const result = await _brokerAuthorizationGetSend(
    context,
    resourceGroupName,
    instanceName,
    brokerName,
    authorizationName,
    options,
  );
  return _brokerAuthorizationGetDeserialize(result);
}
