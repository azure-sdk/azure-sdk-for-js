// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresDeleteOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresListOptionalParams,
} from "../index.js";
import {
  _DatastoreList,
  _datastoreListDeserializer,
  Datastore,
  datastoreSerializer,
  datastoreDeserializer,
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

export function _datastoresListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: DatastoresListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datastoresListDeserialize(
  result: PathUncheckedResponse,
): Promise<_DatastoreList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _datastoreListDeserializer(result.body);
}

/** List Datastore resources by Cluster */
export function datastoresList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: DatastoresListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Datastore> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _datastoresListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _datastoresListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _datastoresGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datastoresGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Datastore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return datastoreDeserializer(result.body);
}

/** Get a Datastore */
export async function datastoresGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresGetOptionalParams = { requestOptions: {} },
): Promise<Datastore> {
  const result = await _datastoresGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    datastoreName,
    options,
  );
  return _datastoresGetDeserialize(result);
}

export function _datastoresCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  datastore: Datastore,
  options: DatastoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: datastoreSerializer(datastore),
    });
}

export async function _datastoresCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Datastore> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return datastoreDeserializer(result.body);
}

/** Create a Datastore */
export function datastoresCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  datastore: Datastore,
  options: DatastoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Datastore>, Datastore> {
  return getLongRunningPoller(
    context,
    _datastoresCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _datastoresCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          datastoreName,
          datastore,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Datastore>, Datastore>;
}

export function _datastoresDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _datastoresDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Datastore */
export function datastoresDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _datastoresDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _datastoresDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          datastoreName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
