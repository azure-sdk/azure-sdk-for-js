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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews{?api-version}",
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews/{dnsprivateviewocid}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      dnsprivateviewocid: dnsprivateviewocid,
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
