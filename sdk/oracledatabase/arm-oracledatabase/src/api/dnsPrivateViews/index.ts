// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DnsPrivateViewsGetOptionalParams,
  DnsPrivateViewsListByLocationOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DnsPrivateView,
  dnsPrivateViewDeserializer,
  _DnsPrivateViewListResult,
  _dnsPrivateViewListResultDeserializer,
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

export function _dnsPrivateViewsListByLocationSend(
  context: Client,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews",
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

export async function _dnsPrivateViewsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_DnsPrivateViewListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dnsPrivateViewListResultDeserializer(result.body);
}

/** List DnsPrivateView resources by Location */
export function dnsPrivateViewsListByLocation(
  context: Client,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DnsPrivateView> {
  return buildPagedAsyncIterator(
    context,
    () => _dnsPrivateViewsListByLocationSend(context, location, options),
    _dnsPrivateViewsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dnsPrivateViewsGetSend(
  context: Client,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews/{dnsprivateviewocid}",
      context.subscriptionId,
      location,
      dnsprivateviewocid,
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

export async function _dnsPrivateViewsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DnsPrivateView> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dnsPrivateViewDeserializer(result.body);
}

/** Get a DnsPrivateView */
export async function dnsPrivateViewsGet(
  context: Client,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): Promise<DnsPrivateView> {
  const result = await _dnsPrivateViewsGetSend(context, location, dnsprivateviewocid, options);
  return _dnsPrivateViewsGetDeserialize(result);
}
