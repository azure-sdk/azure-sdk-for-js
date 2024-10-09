// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  skuSerializer,
  clusterPropertiesSerializer,
  clusterUpdatePropertiesSerializer,
  Cluster,
  ClusterUpdate,
  ClusterZoneList,
  _ClusterList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ClustersListOptionalParams,
  ClustersGetOptionalParams,
  ClustersCreateOrUpdateOptionalParams,
  ClustersUpdateOptionalParams,
  ClustersDeleteOptionalParams,
  ClustersListZonesOptionalParams,
} from "../../models/options.js";

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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              clusterSize: p.properties?.["clusterSize"],
              provisioningState: p.properties?.["provisioningState"],
              clusterId: p.properties?.["clusterId"],
              hosts: p.properties?.["hosts"],
              vsanDatastoreName: p.properties?.["vsanDatastoreName"],
            },
        sku: {
          name: p.sku["name"],
          tier: p.sku["tier"],
          size: p.sku["size"],
          family: p.sku["family"],
          capacity: p.sku["capacity"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          clusterSize: result.body.properties?.["clusterSize"],
          provisioningState: result.body.properties?.["provisioningState"],
          clusterId: result.body.properties?.["clusterId"],
          hosts: result.body.properties?.["hosts"],
          vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
  };
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
      body: {
        properties: !cluster.properties
          ? cluster.properties
          : clusterPropertiesSerializer(cluster.properties),
        sku: skuSerializer(cluster.sku),
      },
    });
}

export async function _clustersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Cluster> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          clusterSize: result.body.properties?.["clusterSize"],
          provisioningState: result.body.properties?.["provisioningState"],
          clusterId: result.body.properties?.["clusterId"],
          hosts: result.body.properties?.["hosts"],
          vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
  };
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
      body: {
        sku: !clusterUpdate.sku
          ? clusterUpdate.sku
          : skuSerializer(clusterUpdate.sku),
        properties: !clusterUpdate.properties
          ? clusterUpdate.properties
          : clusterUpdatePropertiesSerializer(clusterUpdate.properties),
      },
    });
}

export async function _clustersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Cluster> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          clusterSize: result.body.properties?.["clusterSize"],
          provisioningState: result.body.properties?.["provisioningState"],
          clusterId: result.body.properties?.["clusterId"],
          hosts: result.body.properties?.["hosts"],
          vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
  };
}

/** Update a Cluster */
export async function clustersUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  clusterUpdate: ClusterUpdate,
  options: ClustersUpdateOptionalParams = { requestOptions: {} },
): Promise<Cluster> {
  const result = await _clustersUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    clusterUpdate,
    options,
  );
  return _clustersUpdateDeserialize(result);
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

  return {
    zones:
      result.body["zones"] === undefined
        ? result.body["zones"]
        : result.body["zones"].map((p: any) => {
            return { hosts: p["hosts"], zone: p["zone"] };
          }),
  };
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
