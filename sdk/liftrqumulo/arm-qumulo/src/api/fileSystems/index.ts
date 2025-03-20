// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StorageContext as Client,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsGetOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsListBySubscriptionOptionalParams,
  FileSystemsUpdateOptionalParams,
} from "../index.js";
import {
  FileSystemResource,
  fileSystemResourceSerializer,
  fileSystemResourceDeserializer,
  errorResponseDeserializer,
  FileSystemResourceUpdate,
  fileSystemResourceUpdateSerializer,
  _FileSystemResourceListResult,
  _fileSystemResourceListResultDeserializer,
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

export function _fileSystemsListBySubscriptionSend(
  context: Client,
  options: FileSystemsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Qumulo.Storage/fileSystems{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _fileSystemsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileSystemResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fileSystemResourceListResultDeserializer(result.body);
}

/** List FileSystemResource resources by subscription ID */
export function fileSystemsListBySubscription(
  context: Client,
  options: FileSystemsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FileSystemResource> {
  return buildPagedAsyncIterator(
    context,
    () => _fileSystemsListBySubscriptionSend(context, options),
    _fileSystemsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fileSystemsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: FileSystemsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _fileSystemsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileSystemResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fileSystemResourceListResultDeserializer(result.body);
}

/** List FileSystemResource resources by resource group */
export function fileSystemsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: FileSystemsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FileSystemResource> {
  return buildPagedAsyncIterator(
    context,
    () => _fileSystemsListByResourceGroupSend(context, resourceGroupName, options),
    _fileSystemsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fileSystemsDeleteSend(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fileSystemName: fileSystemName,
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

export async function _fileSystemsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a FileSystemResource */
export function fileSystemsDelete(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fileSystemsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fileSystemsDeleteSend(context, resourceGroupName, fileSystemName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fileSystemsUpdateSend(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  properties: FileSystemResourceUpdate,
  options: FileSystemsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fileSystemName: fileSystemName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: fileSystemResourceUpdateSerializer(properties),
  });
}

export async function _fileSystemsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileSystemResourceDeserializer(result.body);
}

/** Update a FileSystemResource */
export async function fileSystemsUpdate(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  properties: FileSystemResourceUpdate,
  options: FileSystemsUpdateOptionalParams = { requestOptions: {} },
): Promise<FileSystemResource> {
  const result = await _fileSystemsUpdateSend(
    context,
    resourceGroupName,
    fileSystemName,
    properties,
    options,
  );
  return _fileSystemsUpdateDeserialize(result);
}

export function _fileSystemsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  resource: FileSystemResource,
  options: FileSystemsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fileSystemName: fileSystemName,
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
    body: fileSystemResourceSerializer(resource),
  });
}

export async function _fileSystemsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileSystemResourceDeserializer(result.body);
}

/** Create a FileSystemResource */
export function fileSystemsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  resource: FileSystemResource,
  options: FileSystemsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FileSystemResource>, FileSystemResource> {
  return getLongRunningPoller(context, _fileSystemsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fileSystemsCreateOrUpdateSend(context, resourceGroupName, fileSystemName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<FileSystemResource>, FileSystemResource>;
}

export function _fileSystemsGetSend(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fileSystemName: fileSystemName,
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

export async function _fileSystemsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileSystemResourceDeserializer(result.body);
}

/** Get a FileSystemResource */
export async function fileSystemsGet(
  context: Client,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsGetOptionalParams = { requestOptions: {} },
): Promise<FileSystemResource> {
  const result = await _fileSystemsGetSend(context, resourceGroupName, fileSystemName, options);
  return _fileSystemsGetDeserialize(result);
}
