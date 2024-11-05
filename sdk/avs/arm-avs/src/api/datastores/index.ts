// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  datastorePropertiesSerializer,
  Datastore,
  _DatastoreList,
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
  DatastoresListOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresDeleteOptionalParams,
} from "../../models/options.js";

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
              provisioningState: p.properties?.["provisioningState"],
              netAppVolume: !p.properties?.netAppVolume
                ? undefined
                : { id: p.properties?.netAppVolume?.["id"] },
              diskPoolVolume: !p.properties?.diskPoolVolume
                ? undefined
                : {
                    targetId: p.properties?.diskPoolVolume?.["targetId"],
                    lunName: p.properties?.diskPoolVolume?.["lunName"],
                    mountOption: p.properties?.diskPoolVolume?.["mountOption"],
                    path: p.properties?.diskPoolVolume?.["path"],
                  },
              elasticSanVolume: !p.properties?.elasticSanVolume
                ? undefined
                : { targetId: p.properties?.elasticSanVolume?.["targetId"] },
              status: p.properties?.["status"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
          provisioningState: result.body.properties?.["provisioningState"],
          netAppVolume: !result.body.properties?.netAppVolume
            ? undefined
            : { id: result.body.properties?.netAppVolume?.["id"] },
          diskPoolVolume: !result.body.properties?.diskPoolVolume
            ? undefined
            : {
                targetId: result.body.properties?.diskPoolVolume?.["targetId"],
                lunName: result.body.properties?.diskPoolVolume?.["lunName"],
                mountOption:
                  result.body.properties?.diskPoolVolume?.["mountOption"],
                path: result.body.properties?.diskPoolVolume?.["path"],
              },
          elasticSanVolume: !result.body.properties?.elasticSanVolume
            ? undefined
            : {
                targetId:
                  result.body.properties?.elasticSanVolume?.["targetId"],
              },
          status: result.body.properties?.["status"],
        },
  };
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
      body: {
        properties: !datastore.properties
          ? datastore.properties
          : datastorePropertiesSerializer(datastore.properties),
      },
    });
}

export async function _datastoresCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Datastore> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          netAppVolume: !result.body.properties?.netAppVolume
            ? undefined
            : { id: result.body.properties?.netAppVolume?.["id"] },
          diskPoolVolume: !result.body.properties?.diskPoolVolume
            ? undefined
            : {
                targetId: result.body.properties?.diskPoolVolume?.["targetId"],
                lunName: result.body.properties?.diskPoolVolume?.["lunName"],
                mountOption:
                  result.body.properties?.diskPoolVolume?.["mountOption"],
                path: result.body.properties?.diskPoolVolume?.["path"],
              },
          elasticSanVolume: !result.body.properties?.elasticSanVolume
            ? undefined
            : {
                targetId:
                  result.body.properties?.elasticSanVolume?.["targetId"],
              },
          status: result.body.properties?.["status"],
        },
  };
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
    },
  ) as PollerLike<OperationState<void>, void>;
}
