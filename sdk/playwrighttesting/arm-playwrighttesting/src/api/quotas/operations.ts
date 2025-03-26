// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzurePlaywrightServiceContext as Client } from "../index.js";
import {
  QuotaNames,
  errorResponseDeserializer,
  Quota,
  quotaDeserializer,
  _QuotaListResult,
  _quotaListResultDeserializer,
} from "../../models/models.js";
import { QuotasListBySubscriptionOptionalParams, QuotasGetOptionalParams } from "./options.js";
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

export function _quotasListBySubscriptionSend(
  context: Client,
  location: string,
  options: QuotasListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/locations/{location}/quotas{?api-version}",
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/locations/{location}/quotas/{quotaName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      quotaName: quotaName,
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
