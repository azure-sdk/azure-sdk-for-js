// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IoTOperationsContext as Client,
  DataflowEndpointCreateOrUpdateOptionalParams,
  DataflowEndpointDeleteOptionalParams,
  DataflowEndpointGetOptionalParams,
  DataflowEndpointListByResourceGroupOptionalParams,
} from "../index.js";
import {
  DataflowEndpointResource,
  dataflowEndpointResourceSerializer,
  dataflowEndpointResourceDeserializer,
  errorResponseDeserializer,
  _DataflowEndpointResourceListResult,
  _dataflowEndpointResourceListResultDeserializer,
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

export function _dataflowEndpointListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowEndpointListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints{?api-version}",
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

export async function _dataflowEndpointListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataflowEndpointResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dataflowEndpointResourceListResultDeserializer(result.body);
}

/** List DataflowEndpointResource resources by InstanceResource */
export function dataflowEndpointListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowEndpointListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataflowEndpointResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataflowEndpointListByResourceGroupSend(context, resourceGroupName, instanceName, options),
    _dataflowEndpointListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dataflowEndpointDeleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      dataflowEndpointName: dataflowEndpointName,
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

export async function _dataflowEndpointDeleteDeserialize(
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

/** Delete a DataflowEndpointResource */
export function dataflowEndpointDelete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _dataflowEndpointDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _dataflowEndpointDeleteSend(
        context,
        resourceGroupName,
        instanceName,
        dataflowEndpointName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _dataflowEndpointCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  resource: DataflowEndpointResource,
  options: DataflowEndpointCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      dataflowEndpointName: dataflowEndpointName,
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
    body: dataflowEndpointResourceSerializer(resource),
  });
}

export async function _dataflowEndpointCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowEndpointResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dataflowEndpointResourceDeserializer(result.body);
}

/** Create a DataflowEndpointResource */
export function dataflowEndpointCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  resource: DataflowEndpointResource,
  options: DataflowEndpointCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<DataflowEndpointResource>, DataflowEndpointResource> {
  return getLongRunningPoller(context, _dataflowEndpointCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _dataflowEndpointCreateOrUpdateSend(
        context,
        resourceGroupName,
        instanceName,
        dataflowEndpointName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DataflowEndpointResource>, DataflowEndpointResource>;
}

export function _dataflowEndpointGetSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      dataflowEndpointName: dataflowEndpointName,
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

export async function _dataflowEndpointGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowEndpointResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dataflowEndpointResourceDeserializer(result.body);
}

/** Get a DataflowEndpointResource */
export async function dataflowEndpointGet(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointGetOptionalParams = { requestOptions: {} },
): Promise<DataflowEndpointResource> {
  const result = await _dataflowEndpointGetSend(
    context,
    resourceGroupName,
    instanceName,
    dataflowEndpointName,
    options,
  );
  return _dataflowEndpointGetDeserialize(result);
}
