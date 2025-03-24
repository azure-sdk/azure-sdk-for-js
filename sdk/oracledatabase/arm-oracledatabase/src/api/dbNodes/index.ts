// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DbNodesActionOptionalParams,
  DbNodesGetOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _dbNodesActionSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudvmclustername: cloudvmclustername,
      dbnodeocid: dbnodeocid,
      "api-version": context.apiVersion,
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
    body: dbNodeActionSerializer(body),
  });
}

export async function _dbNodesActionDeserialize(result: PathUncheckedResponse): Promise<DbNode> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dbNodeDeserializer(result.body);
}

/** VM actions on DbNode of VM Cluster by the provided filter */
export function dbNodesAction(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DbNode>, DbNode> {
  return getLongRunningPoller(context, _dbNodesActionDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _dbNodesActionSend(context, resourceGroupName, cloudvmclustername, dbnodeocid, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DbNode>, DbNode>;
}

export function _dbNodesListByCloudVmClusterSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudvmclustername: cloudvmclustername,
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

export async function _dbNodesListByCloudVmClusterDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbNodeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dbNodeListResultDeserializer(result.body);
}

/** List DbNode resources by CloudVmCluster */
export function dbNodesListByCloudVmCluster(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DbNode> {
  return buildPagedAsyncIterator(
    context,
    () => _dbNodesListByCloudVmClusterSend(context, resourceGroupName, cloudvmclustername, options),
    _dbNodesListByCloudVmClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dbNodesGetSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudvmclustername: cloudvmclustername,
      dbnodeocid: dbnodeocid,
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

export async function _dbNodesGetDeserialize(result: PathUncheckedResponse): Promise<DbNode> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dbNodeDeserializer(result.body);
}

/** Get a DbNode */
export async function dbNodesGet(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): Promise<DbNode> {
  const result = await _dbNodesGetSend(
    context,
    resourceGroupName,
    cloudvmclustername,
    dbnodeocid,
    options,
  );
  return _dbNodesGetDeserialize(result);
}
