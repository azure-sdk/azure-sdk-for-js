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
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _fileSystemsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileSystemResourceDeserializer(result.body);
}

/** Get a FileSystemResource */
export async function fileSystemsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsGetOptionalParams = { requestOptions: {} },
): Promise<FileSystemResource> {
  const result = await _fileSystemsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    fileSystemName,
    options,
  );
  return _fileSystemsGetDeserialize(result);
}

export function _fileSystemsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  resource: FileSystemResource,
  options: FileSystemsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: fileSystemResourceSerializer(resource),
    });
}

export async function _fileSystemsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileSystemResourceDeserializer(result.body);
}

/** Create a FileSystemResource */
export function fileSystemsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  resource: FileSystemResource,
  options: FileSystemsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FileSystemResource>, FileSystemResource> {
  return getLongRunningPoller(
    context,
    _fileSystemsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _fileSystemsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          fileSystemName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<FileSystemResource>, FileSystemResource>;
}

export function _fileSystemsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  properties: FileSystemResourceUpdate,
  options: FileSystemsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: fileSystemResourceUpdateSerializer(properties),
    });
}

export async function _fileSystemsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileSystemResourceDeserializer(result.body);
}

/** Update a FileSystemResource */
export async function fileSystemsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  properties: FileSystemResourceUpdate,
  options: FileSystemsUpdateOptionalParams = { requestOptions: {} },
): Promise<FileSystemResource> {
  const result = await _fileSystemsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    fileSystemName,
    properties,
    options,
  );
  return _fileSystemsUpdateDeserialize(result);
}

export function _fileSystemsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a FileSystemResource */
export function fileSystemsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _fileSystemsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _fileSystemsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          fileSystemName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _fileSystemsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: FileSystemsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileSystemResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _fileSystemResourceListResultDeserializer(result.body);
}

/** List FileSystemResource resources by resource group */
export function fileSystemsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: FileSystemsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FileSystemResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _fileSystemsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _fileSystemsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fileSystemsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: FileSystemsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Qumulo.Storage/fileSystems",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileSystemResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _fileSystemResourceListResultDeserializer(result.body);
}

/** List FileSystemResource resources by subscription ID */
export function fileSystemsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: FileSystemsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FileSystemResource> {
  return buildPagedAsyncIterator(
    context,
    () => _fileSystemsListBySubscriptionSend(context, subscriptionId, options),
    _fileSystemsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
