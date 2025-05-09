// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _DatadogAgreementResourceListResponse,
  _datadogAgreementResourceListResponseDeserializer,
  DatadogAgreementResource,
  datadogAgreementResourceSerializer,
  datadogAgreementResourceDeserializer,
} from "../../models/models.js";
import {
  MarketplaceAgreementsOperationGroupCreateOrUpdateOptionalParams,
  MarketplaceAgreementsOperationGroupListOptionalParams,
} from "./options.js";
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

export function _createOrUpdateSend(
  context: Client,
  body: DatadogAgreementResource,
  options: MarketplaceAgreementsOperationGroupCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/agreements/default{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: datadogAgreementResourceSerializer(body),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DatadogAgreementResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datadogAgreementResourceDeserializer(result.body);
}

/** Create Datadog marketplace agreement in the subscription. */
export async function createOrUpdate(
  context: Client,
  body: DatadogAgreementResource,
  options: MarketplaceAgreementsOperationGroupCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<DatadogAgreementResource> {
  const result = await _createOrUpdateSend(context, body, options);
  return _createOrUpdateDeserialize(result);
}

export function _listSend(
  context: Client,
  options: MarketplaceAgreementsOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/agreements{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
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
): Promise<_DatadogAgreementResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _datadogAgreementResourceListResponseDeserializer(result.body);
}

/** List Datadog marketplace agreements in the subscription. */
export function list(
  context: Client,
  options: MarketplaceAgreementsOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DatadogAgreementResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
