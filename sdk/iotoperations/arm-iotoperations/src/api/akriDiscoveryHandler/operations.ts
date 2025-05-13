// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AkriDiscoveryHandlerResource,
  akriDiscoveryHandlerResourceSerializer,
  akriDiscoveryHandlerResourceDeserializer,
  _AkriDiscoveryHandlerResourceListResult,
  _akriDiscoveryHandlerResourceListResultDeserializer,
} from "../../models/models.js";
import {
  AkriDiscoveryHandlerListByInstanceResourceOptionalParams,
  AkriDiscoveryHandlerDeleteOptionalParams,
  AkriDiscoveryHandlerCreateOrUpdateOptionalParams,
  AkriDiscoveryHandlerGetOptionalParams,
} from "./options.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listByInstanceResourceSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: AkriDiscoveryHandlerListByInstanceResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriDiscoveryHandlers{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
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

export async function _listByInstanceResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_AkriDiscoveryHandlerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _akriDiscoveryHandlerResourceListResultDeserializer(result.body);
}

/** List AkriDiscoveryHandlerResource resources by InstanceResource */
export function listByInstanceResource(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: AkriDiscoveryHandlerListByInstanceResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AkriDiscoveryHandlerResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByInstanceResourceSend(context, resourceGroupName, instanceName, options),
    _listByInstanceResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriDiscoveryHandlerName: string,
  options: AkriDiscoveryHandlerDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriDiscoveryHandlers/{akriDiscoveryHandlerName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      akriDiscoveryHandlerName: akriDiscoveryHandlerName,
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
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a AkriDiscoveryHandlerResource */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriDiscoveryHandlerName: string,
  options: AkriDiscoveryHandlerDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, instanceName, akriDiscoveryHandlerName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriDiscoveryHandlerName: string,
  resource: AkriDiscoveryHandlerResource,
  options: AkriDiscoveryHandlerCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriDiscoveryHandlers/{akriDiscoveryHandlerName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      akriDiscoveryHandlerName: akriDiscoveryHandlerName,
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
    body: akriDiscoveryHandlerResourceSerializer(resource),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AkriDiscoveryHandlerResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return akriDiscoveryHandlerResourceDeserializer(result.body);
}

/** Create a AkriDiscoveryHandlerResource */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriDiscoveryHandlerName: string,
  resource: AkriDiscoveryHandlerResource,
  options: AkriDiscoveryHandlerCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AkriDiscoveryHandlerResource>, AkriDiscoveryHandlerResource> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        instanceName,
        akriDiscoveryHandlerName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<AkriDiscoveryHandlerResource>, AkriDiscoveryHandlerResource>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriDiscoveryHandlerName: string,
  options: AkriDiscoveryHandlerGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriDiscoveryHandlers/{akriDiscoveryHandlerName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      akriDiscoveryHandlerName: akriDiscoveryHandlerName,
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
): Promise<AkriDiscoveryHandlerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return akriDiscoveryHandlerResourceDeserializer(result.body);
}

/** Get a AkriDiscoveryHandlerResource */
export async function get(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriDiscoveryHandlerName: string,
  options: AkriDiscoveryHandlerGetOptionalParams = { requestOptions: {} },
): Promise<AkriDiscoveryHandlerResource> {
  const result = await _getSend(
    context,
    resourceGroupName,
    instanceName,
    akriDiscoveryHandlerName,
    options,
  );
  return _getDeserialize(result);
}
