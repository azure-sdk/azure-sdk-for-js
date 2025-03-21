// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DevOpsInfrastructureContext as Client,
  SubscriptionUsagesUsagesOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _PagedQuota,
  _pagedQuotaDeserializer,
  Quota,
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

export function _subscriptionUsagesUsagesSend(
  context: Client,
  location: string,
  options: SubscriptionUsagesUsagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/locations/{location}/usages{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
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

export async function _subscriptionUsagesUsagesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedQuota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _pagedQuotaDeserializer(result.body);
}

/** List Quota resources by subscription ID */
export function subscriptionUsagesUsages(
  context: Client,
  location: string,
  options: SubscriptionUsagesUsagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Quota> {
  return buildPagedAsyncIterator(
    context,
    () => _subscriptionUsagesUsagesSend(context, location, options),
    _subscriptionUsagesUsagesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
