// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzurePlaywrightServiceContext as Client,
  QuotasGetOptionalParams,
  QuotasListBySubscriptionOptionalParams,
} from "../index.js";
import {
  QuotaNames,
  errorResponseDeserializer,
  Quota,
  quotaDeserializer,
  _QuotaListResult,
  _quotaListResultDeserializer,
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

export function _quotasListBySubscriptionSend(
  context: Client,
  location: string,
  options: QuotasListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/locations/{location}/quotas",
      context.subscriptionId,
      location,
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

export async function _quotasListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_QuotaListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _quotaListResultDeserializer(result.body);
}

/** List quotas for a given subscription Id. */
export function quotasListBySubscription(
  context: Client,
  location: string,
  options: QuotasListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Quota> {
  return buildPagedAsyncIterator(
    context,
    () => _quotasListBySubscriptionSend(context, location, options),
    _quotasListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _quotasGetSend(
  context: Client,
  location: string,
  quotaName: QuotaNames,
  options: QuotasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/locations/{location}/quotas/{quotaName}",
      context.subscriptionId,
      location,
      quotaName,
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

export async function _quotasGetDeserialize(result: PathUncheckedResponse): Promise<Quota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return quotaDeserializer(result.body);
}

/** Get subscription quota by name. */
export async function quotasGet(
  context: Client,
  location: string,
  quotaName: QuotaNames,
  options: QuotasGetOptionalParams = { requestOptions: {} },
): Promise<Quota> {
  const result = await _quotasGetSend(context, location, quotaName, options);
  return _quotasGetDeserialize(result);
}
