// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DnsPrivateViewsGetOptionalParams,
  DnsPrivateViewsListByLocationOptionalParams,
} from "../index.js";
import {
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

export function _dnsPrivateViewsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews/{dnsprivateviewocid}",
      subscriptionId,
      location,
      dnsprivateviewocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dnsPrivateViewsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DnsPrivateView> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dnsPrivateViewDeserializer(result.body);
}

/** Get a DnsPrivateView */
export async function dnsPrivateViewsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): Promise<DnsPrivateView> {
  const result = await _dnsPrivateViewsGetSend(
    context,
    subscriptionId,
    location,
    dnsprivateviewocid,
    options,
  );
  return _dnsPrivateViewsGetDeserialize(result);
}

export function _dnsPrivateViewsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dnsPrivateViewsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_DnsPrivateViewListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dnsPrivateViewListResultDeserializer(result.body);
}

/** List DnsPrivateView resources by Location */
export function dnsPrivateViewsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DnsPrivateView> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dnsPrivateViewsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _dnsPrivateViewsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
