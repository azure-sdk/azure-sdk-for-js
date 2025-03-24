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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}/resources{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      poolName: poolName,
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
