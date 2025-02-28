// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DevOpsInfrastructureContext as Client,
  ResourceDetailsListByPoolOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _ResourceDetailsObjectListResult,
  _resourceDetailsObjectListResultDeserializer,
  ResourceDetailsObject,
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

export function _resourceDetailsListByPoolSend(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  options: ResourceDetailsListByPoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}/resources",
      context.subscriptionId,
      resourceGroupName,
      poolName,
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

export async function _resourceDetailsListByPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<_ResourceDetailsObjectListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _resourceDetailsObjectListResultDeserializer(result.body);
}

/** List ResourceDetailsObject resources by Pool */
export function resourceDetailsListByPool(
  context: Client,
  resourceGroupName: string,
  poolName: string,
  options: ResourceDetailsListByPoolOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ResourceDetailsObject> {
  return buildPagedAsyncIterator(
    context,
    () => _resourceDetailsListByPoolSend(context, resourceGroupName, poolName, options),
    _resourceDetailsListByPoolDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
