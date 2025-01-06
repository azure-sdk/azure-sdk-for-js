// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsDeleteOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsListOptionalParams,
} from "../index.js";
import {
  _GlobalReachConnectionList,
  _globalReachConnectionListDeserializer,
  GlobalReachConnection,
  globalReachConnectionSerializer,
  globalReachConnectionDeserializer,
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

export function _globalReachConnectionsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _globalReachConnectionsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_GlobalReachConnectionList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _globalReachConnectionListDeserializer(result.body);
}

/** List GlobalReachConnection resources by PrivateCloud */
export function globalReachConnectionsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<GlobalReachConnection> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _globalReachConnectionsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _globalReachConnectionsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _globalReachConnectionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _globalReachConnectionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<GlobalReachConnection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return globalReachConnectionDeserializer(result.body);
}

/** Get a GlobalReachConnection */
export async function globalReachConnectionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): Promise<GlobalReachConnection> {
  const result = await _globalReachConnectionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    globalReachConnectionName,
    options,
  );
  return _globalReachConnectionsGetDeserialize(result);
}

export function _globalReachConnectionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: globalReachConnectionSerializer(globalReachConnection),
    });
}

export async function _globalReachConnectionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<GlobalReachConnection> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return globalReachConnectionDeserializer(result.body);
}

/** Create a GlobalReachConnection */
export function globalReachConnectionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection> {
  return getLongRunningPoller(
    context,
    _globalReachConnectionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _globalReachConnectionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          globalReachConnectionName,
          globalReachConnection,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
}

export function _globalReachConnectionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _globalReachConnectionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a GlobalReachConnection */
export function globalReachConnectionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _globalReachConnectionsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _globalReachConnectionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          globalReachConnectionName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
