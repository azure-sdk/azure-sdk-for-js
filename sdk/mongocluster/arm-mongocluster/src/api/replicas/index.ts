// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MongoClusterManagementContext as Client,
  ReplicasListByParentOptionalParams,
} from "../index.js";
import {
  _ReplicaListResult,
  _replicaListResultDeserializer,
  Replica,
  errorResponseDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _replicasListByParentSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: ReplicasListByParentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/replicas",
      context.subscriptionId,
      resourceGroupName,
      mongoClusterName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _replicasListByParentDeserialize(
  result: PathUncheckedResponse,
): Promise<_ReplicaListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _replicaListResultDeserializer(result.body);
}

/** List all the replicas for the mongo cluster. */
export function replicasListByParent(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: ReplicasListByParentOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Replica> {
  return buildPagedAsyncIterator(
    context,
    () => _replicasListByParentSend(context, resourceGroupName, mongoClusterName, options),
    _replicasListByParentDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
