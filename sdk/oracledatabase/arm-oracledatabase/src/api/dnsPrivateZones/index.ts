// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DnsPrivateZonesGetOptionalParams,
  DnsPrivateZonesListByLocationOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DnsPrivateZone,
  dnsPrivateZoneDeserializer,
  _DnsPrivateZoneListResult,
  _dnsPrivateZoneListResultDeserializer,
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

export function _dnsPrivateZonesListByLocationSend(
  context: Client,
  location: string,
  options: DnsPrivateZonesListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones",
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

export async function _dnsPrivateZonesListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_DnsPrivateZoneListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dnsPrivateZoneListResultDeserializer(result.body);
}

/** List DnsPrivateZone resources by Location */
export function dnsPrivateZonesListByLocation(
  context: Client,
  location: string,
  options: DnsPrivateZonesListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DnsPrivateZone> {
  return buildPagedAsyncIterator(
    context,
    () => _dnsPrivateZonesListByLocationSend(context, location, options),
    _dnsPrivateZonesListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dnsPrivateZonesGetSend(
  context: Client,
  location: string,
  dnsprivatezonename: string,
  options: DnsPrivateZonesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones/{dnsprivatezonename}",
      context.subscriptionId,
      location,
      dnsprivatezonename,
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

export async function _dnsPrivateZonesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DnsPrivateZone> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dnsPrivateZoneDeserializer(result.body);
}

/** Get a DnsPrivateZone */
export async function dnsPrivateZonesGet(
  context: Client,
  location: string,
  dnsprivatezonename: string,
  options: DnsPrivateZonesGetOptionalParams = { requestOptions: {} },
): Promise<DnsPrivateZone> {
  const result = await _dnsPrivateZonesGetSend(context, location, dnsprivatezonename, options);
  return _dnsPrivateZonesGetDeserialize(result);
}
