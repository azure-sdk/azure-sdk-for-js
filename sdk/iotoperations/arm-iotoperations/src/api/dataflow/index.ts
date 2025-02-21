// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IoTOperationsContext as Client,
  DataflowCreateOrUpdateOptionalParams,
  DataflowDeleteOptionalParams,
  DataflowGetOptionalParams,
  DataflowListByResourceGroupOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DataflowResource,
  dataflowResourceSerializer,
  dataflowResourceDeserializer,
  _DataflowResourceListResult,
  _dataflowResourceListResultDeserializer,
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

export function _dataflowListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _dataflowListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataflowResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dataflowResourceListResultDeserializer(result.body);
}

/** List DataflowResource resources by DataflowProfileResource */
export function dataflowListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DataflowResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataflowListByResourceGroupSend(
        context,
        resourceGroupName,
        instanceName,
        dataflowProfileName,
        options,
      ),
    _dataflowListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dataflowDeleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
      dataflowName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _dataflowDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a DataflowResource */
export function dataflowDelete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _dataflowDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _dataflowDeleteSend(
        context,
        resourceGroupName,
        instanceName,
        dataflowProfileName,
        dataflowName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _dataflowCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  resource: DataflowResource,
  options: DataflowCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
      dataflowName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: dataflowResourceSerializer(resource),
    });
}

export async function _dataflowCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dataflowResourceDeserializer(result.body);
}

/** Create a DataflowResource */
export function dataflowCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  resource: DataflowResource,
  options: DataflowCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataflowResource>, DataflowResource> {
  return getLongRunningPoller(context, _dataflowCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _dataflowCreateOrUpdateSend(
        context,
        resourceGroupName,
        instanceName,
        dataflowProfileName,
        dataflowName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DataflowResource>, DataflowResource>;
}

export function _dataflowGetSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      context.subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
      dataflowName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _dataflowGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dataflowResourceDeserializer(result.body);
}

/** Get a DataflowResource */
export async function dataflowGet(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowGetOptionalParams = { requestOptions: {} },
): Promise<DataflowResource> {
  const result = await _dataflowGetSend(
    context,
    resourceGroupName,
    instanceName,
    dataflowProfileName,
    dataflowName,
    options,
  );
  return _dataflowGetDeserialize(result);
}
