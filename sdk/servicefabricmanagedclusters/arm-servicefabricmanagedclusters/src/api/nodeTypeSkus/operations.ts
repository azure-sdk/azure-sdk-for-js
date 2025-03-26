// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _NodeTypeListSkuResult,
  _nodeTypeListSkuResultDeserializer,
  NodeTypeAvailableSku,
} from "../../models/models.js";
import { NodeTypeSkusListOptionalParams } from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _nodeTypeSkusListSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypeSkusListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/skus{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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

export async function _nodeTypeSkusListDeserialize(
  result: PathUncheckedResponse,
): Promise<_NodeTypeListSkuResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _nodeTypeListSkuResultDeserializer(result.body);
}

/** Get a Service Fabric node type supported SKUs. */
export function nodeTypeSkusList(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypeSkusListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeTypeAvailableSku> {
  return buildPagedAsyncIterator(
    context,
    () => _nodeTypeSkusListSend(context, resourceGroupName, clusterName, nodeTypeName, options),
    _nodeTypeSkusListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
