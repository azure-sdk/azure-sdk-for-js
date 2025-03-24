// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MongoClusterManagementContext as Client,
  PrivateLinksListByMongoClusterOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _PrivateLinkResourceListResult,
  _privateLinkResourceListResultDeserializer,
  PrivateLinkResource,
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

export function _privateLinksListByMongoClusterSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: PrivateLinksListByMongoClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateLinkResources{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
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

export async function _privateLinksListByMongoClusterDeserialize(
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

/** list private links on the given resource */
export function privateLinksListByMongoCluster(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: PrivateLinksListByMongoClusterOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateLinkResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateLinksListByMongoClusterSend(context, resourceGroupName, mongoClusterName, options),
    _privateLinksListByMongoClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
