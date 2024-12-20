// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  ClustersCreateOrUpdateOptionalParams,
  ClustersDeleteOptionalParams,
  ClustersGetOptionalParams,
  ClustersListOptionalParams,
  ClustersListZonesOptionalParams,
  ClustersUpdateOptionalParams,
} from "../index.js";
import {
  _ClusterList,
  _clusterListDeserializer,
  Cluster,
  clusterSerializer,
  clusterDeserializer,
  ClusterUpdate,
  clusterUpdateSerializer,
  ClusterZoneList,
  clusterZoneListDeserializer,
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

export function _clustersListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ClustersListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _clustersListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ClusterList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _clusterListDeserializer(result.body);
}

/** List Cluster resources by PrivateCloud */
export function clustersList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ClustersListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cluster> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _clustersListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _clustersListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _clustersGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _clustersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Cluster> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return clusterDeserializer(result.body);
}

/** Get a Cluster */
export async function clustersGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersGetOptionalParams = { requestOptions: {} },
): Promise<Cluster> {
  const result = await _clustersGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    options,
  );
  return _clustersGetDeserialize(result);
}

export function _clustersCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  cluster: Cluster,
  options: ClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: clusterSerializer(cluster),
    });
}

export async function _clustersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Cluster> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return clusterDeserializer(result.body);
}

/** Create a Cluster */
export function clustersCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  cluster: Cluster,
  options: ClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cluster>, Cluster> {
  return getLongRunningPoller(
    context,
    _clustersCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _clustersCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          cluster,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Cluster>, Cluster>;
}

export function _clustersUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  clusterUpdate: ClusterUpdate,
  options: ClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: clusterUpdateSerializer(clusterUpdate),
    });
}

export async function _clustersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Update a Cluster */
export function clustersUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  clusterUpdate: ClusterUpdate,
  options: ClustersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _clustersUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _clustersUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          clusterUpdate,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _clustersDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _clustersDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Cluster */
export function clustersDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _clustersDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _clustersDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _clustersListZonesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersListZonesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _clustersListZonesDeserialize(
  result: PathUncheckedResponse,
): Promise<ClusterZoneList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return clusterZoneListDeserializer(result.body);
}

/** List hosts by zone in a cluster */
export async function clustersListZones(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersListZonesOptionalParams = { requestOptions: {} },
): Promise<ClusterZoneList> {
  const result = await _clustersListZonesSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    options,
  );
  return _clustersListZonesDeserialize(result);
}
