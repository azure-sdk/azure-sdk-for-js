// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext as Client } from "../index.js";
import {
  resourceProviderDefaultErrorResponseDeserializer,
  _ElasticVersionsListResponse,
  _elasticVersionsListResponseDeserializer,
  ElasticVersionListFormat,
} from "../../models/models.js";
import { ElasticVersionsOperationGroupListOptionalParams } from "./options.js";
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

export function _listSend(
  context: Client,
  region: string,
  options: ElasticVersionsOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/elasticVersions{?api%2Dversion,region}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
      region: region,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ElasticVersionsListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _elasticVersionsListResponseDeserializer(result.body);
}

/** Get a list of available versions for a region. */
export function list(
  context: Client,
  region: string,
  options: ElasticVersionsOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ElasticVersionListFormat> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, region, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
