// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DevOpsInfrastructureContext as Client,
  SkuListByLocationOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _ResourceSkuListResult,
  _resourceSkuListResultDeserializer,
  ResourceSku,
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

export function _skuListByLocationSend(
  context: Client,
  locationName: string,
  options: SkuListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/locations/{locationName}/skus{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      locationName: locationName,
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

export async function _skuListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_ResourceSkuListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _resourceSkuListResultDeserializer(result.body);
}

/** List ResourceSku resources by subscription ID */
export function skuListByLocation(
  context: Client,
  locationName: string,
  options: SkuListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ResourceSku> {
  return buildPagedAsyncIterator(
    context,
    () => _skuListByLocationSend(context, locationName, options),
    _skuListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
