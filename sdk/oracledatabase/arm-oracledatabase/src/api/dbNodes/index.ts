// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DbNodesActionOptionalParams,
  DbNodesGetOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
} from "../index.js";
import {
  DbNode,
  dbNodeDeserializer,
  _DbNodeListResult,
  _dbNodeListResultDeserializer,
  DbNodeAction,
  dbNodeActionSerializer,
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

export function _dbNodesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      dbnodeocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbNodesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DbNode> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dbNodeDeserializer(result.body);
}

/** Get a DbNode */
export async function dbNodesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): Promise<DbNode> {
  const result = await _dbNodesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    dbnodeocid,
    options,
  );
  return _dbNodesGetDeserialize(result);
}

export function _dbNodesListByCloudVmClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbNodesListByCloudVmClusterDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbNodeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dbNodeListResultDeserializer(result.body);
}

/** List DbNode resources by CloudVmCluster */
export function dbNodesListByCloudVmCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DbNode> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dbNodesListByCloudVmClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    _dbNodesListByCloudVmClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dbNodesActionSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      dbnodeocid,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: dbNodeActionSerializer(body),
    });
}

export async function _dbNodesActionDeserialize(
  result: PathUncheckedResponse,
): Promise<DbNode> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dbNodeDeserializer(result.body);
}

/** VM actions on DbNode of VM Cluster by the provided filter */
export function dbNodesAction(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DbNode>, DbNode> {
  return getLongRunningPoller(
    context,
    _dbNodesActionDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dbNodesActionSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          dbnodeocid,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<DbNode>, DbNode>;
}
