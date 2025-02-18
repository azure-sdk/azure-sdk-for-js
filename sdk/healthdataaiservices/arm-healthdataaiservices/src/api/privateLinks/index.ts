// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HealthDataAIServicesContext as Client,
  PrivateLinksListByDeidServiceOptionalParams,
} from "../index.js";
import {
  _PrivateLinkResourceListResult,
  _privateLinkResourceListResultDeserializer,
  PrivateLinkResource,
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

export function _privateLinksListByDeidServiceSend(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  options: PrivateLinksListByDeidServiceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthDataAIServices/deidServices/{deidServiceName}/privateLinkResources",
      context.subscriptionId,
      resourceGroupName,
      deidServiceName,
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

export async function _privateLinksListByDeidServiceDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateLinkResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _privateLinkResourceListResultDeserializer(result.body);
}

/** List private links on the given resource */
export function privateLinksListByDeidService(
  context: Client,
  resourceGroupName: string,
  deidServiceName: string,
  options: PrivateLinksListByDeidServiceOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PrivateLinkResource> {
  return buildPagedAsyncIterator(
    context,
    () => _privateLinksListByDeidServiceSend(context, resourceGroupName, deidServiceName, options),
    _privateLinksListByDeidServiceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
