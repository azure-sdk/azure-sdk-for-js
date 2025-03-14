// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IoTOperationsContext as Client,
  DataflowProfileCreateOrUpdateOptionalParams,
  DataflowProfileDeleteOptionalParams,
  DataflowProfileGetOptionalParams,
  DataflowProfileListByResourceGroupOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DataflowProfileResource,
  dataflowProfileResourceSerializer,
  dataflowProfileResourceDeserializer,
  _DataflowProfileResourceListResult,
  _dataflowProfileResourceListResultDeserializer,
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

export function _dataflowProfileListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowProfileListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles{?api-version}",
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

export async function _dataflowProfileListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataflowProfileResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dataflowProfileResourceListResultDeserializer(result.body);
}

/** List DataflowProfileResource resources by InstanceResource */
export function dataflowProfileListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowProfileListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataflowProfileResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataflowProfileListByResourceGroupSend(context, resourceGroupName, instanceName, options),
    _dataflowProfileListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dataflowProfileDeleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      dataflowProfileName: dataflowProfileName,
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

export async function _dataflowProfileDeleteDeserialize(
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

/** Delete a DataflowProfileResource */
export function dataflowProfileDelete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _dataflowProfileDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _dataflowProfileDeleteSend(
        context,
        resourceGroupName,
        instanceName,
        dataflowProfileName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _dataflowProfileCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  resource: DataflowProfileResource,
  options: DataflowProfileCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      dataflowProfileName: dataflowProfileName,
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
    body: dataflowProfileResourceSerializer(resource),
  });
}

export async function _dataflowProfileCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowProfileResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dataflowProfileResourceDeserializer(result.body);
}

/** Create a DataflowProfileResource */
export function dataflowProfileCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  resource: DataflowProfileResource,
  options: DataflowProfileCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataflowProfileResource>, DataflowProfileResource> {
  return getLongRunningPoller(context, _dataflowProfileCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _dataflowProfileCreateOrUpdateSend(
        context,
        resourceGroupName,
        instanceName,
        dataflowProfileName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DataflowProfileResource>, DataflowProfileResource>;
}

export function _dataflowProfileGetSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      dataflowProfileName: dataflowProfileName,
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

export async function _dataflowProfileGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowProfileResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dataflowProfileResourceDeserializer(result.body);
}

/** Get a DataflowProfileResource */
export async function dataflowProfileGet(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileGetOptionalParams = { requestOptions: {} },
): Promise<DataflowProfileResource> {
  const result = await _dataflowProfileGetSend(
    context,
    resourceGroupName,
    instanceName,
    dataflowProfileName,
    options,
  );
  return _dataflowProfileGetDeserialize(result);
}
