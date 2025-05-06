// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesContext as Client } from "../index.js";
import {
  FileShare,
  fileShareSerializer,
  fileShareDeserializer,
  errorResponseDeserializer,
  FileShareUpdate,
  fileShareUpdateSerializer,
  _FileShareListResult,
  _fileShareListResultDeserializer,
  CheckNameAvailabilityRequest,
  checkNameAvailabilityRequestSerializer,
  CheckNameAvailabilityResponse,
  checkNameAvailabilityResponseDeserializer,
  FileShareSnapshot,
  fileShareSnapshotSerializer,
  fileShareSnapshotDeserializer,
  FileShareSnapshotUpdate,
  fileShareSnapshotUpdateSerializer,
  _FileShareSnapshotListResult,
  _fileShareSnapshotListResultDeserializer,
} from "../../models/models.js";
import {
  FileSharesListByFileShareOptionalParams,
  FileSharesDeleteFileShareSnapshotOptionalParams,
  FileSharesUpdateFileShareSnapshotOptionalParams,
  FileSharesCreateOrUpdateFileShareSnapshotOptionalParams,
  FileSharesGetFileShareSnapshotOptionalParams,
  FileSharesCheckNameAvailabilityOptionalParams,
  FileSharesListByParentOptionalParams,
  FileSharesListBySubscriptionOptionalParams,
  FileSharesDeleteOptionalParams,
  FileSharesUpdateOptionalParams,
  FileSharesCreateOrUpdateOptionalParams,
  FileSharesGetOptionalParams,
} from "./options.js";
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

export function _listByFileShareSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: FileSharesListByFileShareOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

export async function _listByFileShareDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileShareSnapshotListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fileShareSnapshotListResultDeserializer(result.body);
}

/** List FileShareSnapshot by FileShare. */
export function listByFileShare(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: FileSharesListByFileShareOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FileShareSnapshot> {
  return buildPagedAsyncIterator(
    context,
    () => _listByFileShareSend(context, resourceGroupName, resourceName, options),
    _listByFileShareDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteFileShareSnapshotSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  options: FileSharesDeleteFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
      name: name,
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

export async function _deleteFileShareSnapshotDeserialize(
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

/** Delete a FileShareSnapshot. */
export function deleteFileShareSnapshot(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  options: FileSharesDeleteFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteFileShareSnapshotDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteFileShareSnapshotSend(context, resourceGroupName, resourceName, name, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateFileShareSnapshotSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  properties: FileShareSnapshotUpdate,
  options: FileSharesUpdateFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
      name: name,
      "api%2Dversion": context.apiVersion,
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
    body: fileShareSnapshotUpdateSerializer(properties),
  });
}

export async function _updateFileShareSnapshotDeserialize(
  result: PathUncheckedResponse,
): Promise<FileShareSnapshot> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileShareSnapshotDeserializer(result.body);
}

/** Update a FileShareSnapshot. */
export function updateFileShareSnapshot(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  properties: FileShareSnapshotUpdate,
  options: FileSharesUpdateFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<FileShareSnapshot>, FileShareSnapshot> {
  return getLongRunningPoller(context, _updateFileShareSnapshotDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateFileShareSnapshotSend(
        context,
        resourceGroupName,
        resourceName,
        name,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<FileShareSnapshot>, FileShareSnapshot>;
}

export function _createOrUpdateFileShareSnapshotSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  resource: FileShareSnapshot,
  options: FileSharesCreateOrUpdateFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
      name: name,
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
    body: fileShareSnapshotSerializer(resource),
  });
}

export async function _createOrUpdateFileShareSnapshotDeserialize(
  result: PathUncheckedResponse,
): Promise<FileShareSnapshot> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileShareSnapshotDeserializer(result.body);
}

/** Create a FileShareSnapshot. */
export async function createOrUpdateFileShareSnapshot(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  resource: FileShareSnapshot,
  options: FileSharesCreateOrUpdateFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): Promise<FileShareSnapshot> {
  const result = await _createOrUpdateFileShareSnapshotSend(
    context,
    resourceGroupName,
    resourceName,
    name,
    resource,
    options,
  );
  return _createOrUpdateFileShareSnapshotDeserialize(result);
}

export function _getFileShareSnapshotSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  options: FileSharesGetFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
      name: name,
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

export async function _getFileShareSnapshotDeserialize(
  result: PathUncheckedResponse,
): Promise<FileShareSnapshot> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileShareSnapshotDeserializer(result.body);
}

/** Get a FileShareSnapshot */
export async function getFileShareSnapshot(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  options: FileSharesGetFileShareSnapshotOptionalParams = {
    requestOptions: {},
  },
): Promise<FileShareSnapshot> {
  const result = await _getFileShareSnapshotSend(
    context,
    resourceGroupName,
    resourceName,
    name,
    options,
  );
  return _getFileShareSnapshotDeserialize(result);
}

export function _checkNameAvailabilitySend(
  context: Client,
  location: string,
  body: CheckNameAvailabilityRequest,
  options: FileSharesCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.FileShares/locations/{location}/checkNameAvailability{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: checkNameAvailabilityRequestSerializer(body),
  });
}

export async function _checkNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResponseDeserializer(result.body);
}

/** Implements local CheckNameAvailability operations */
export async function checkNameAvailability(
  context: Client,
  location: string,
  body: CheckNameAvailabilityRequest,
  options: FileSharesCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _checkNameAvailabilitySend(context, location, body, options);
  return _checkNameAvailabilityDeserialize(result);
}

export function _listByParentSend(
  context: Client,
  resourceGroupName: string,
  options: FileSharesListByParentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listByParentDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileShareListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fileShareListResultDeserializer(result.body);
}

/** List FileShare resources by resource group */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  options: FileSharesListByParentOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FileShare> {
  return buildPagedAsyncIterator(
    context,
    () => _listByParentSend(context, resourceGroupName, options),
    _listByParentDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  options: FileSharesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.FileShares/fileShares{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileShareListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fileShareListResultDeserializer(result.body);
}

/** List FileShare resources by subscription ID */
export function listBySubscription(
  context: Client,
  options: FileSharesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FileShare> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: FileSharesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

/** Delete a FileShare */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: FileSharesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceGroupName, resourceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  properties: FileShareUpdate,
  options: FileSharesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
      "api%2Dversion": context.apiVersion,
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
    body: fileShareUpdateSerializer(properties),
  });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<FileShare> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileShareDeserializer(result.body);
}

/** Update a FileShare */
export function update(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  properties: FileShareUpdate,
  options: FileSharesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FileShare>, FileShare> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, resourceName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<FileShare>, FileShare>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  resource: FileShare,
  options: FileSharesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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
    body: fileShareSerializer(resource),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FileShare> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileShareDeserializer(result.body);
}

/** Create or update a file share. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  resource: FileShare,
  options: FileSharesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FileShare>, FileShare> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, resourceName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<FileShare>, FileShare>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: FileSharesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<FileShare> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileShareDeserializer(result.body);
}

/** Get a FileShare */
export async function get(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: FileSharesGetOptionalParams = { requestOptions: {} },
): Promise<FileShare> {
  const result = await _getSend(context, resourceGroupName, resourceName, options);
  return _getDeserialize(result);
}
