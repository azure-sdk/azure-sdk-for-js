// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  EdgeZonesContext as Client,
  ExtendedZonesGetOptionalParams,
  ExtendedZonesListBySubscriptionOptionalParams,
  ExtendedZonesRegisterOptionalParams,
  ExtendedZonesUnregisterOptionalParams,
} from "../index.js";
import {
  ExtendedZone,
  extendedZoneDeserializer,
  errorResponseDeserializer,
  _ExtendedZoneListResult,
  _extendedZoneListResultDeserializer,
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

export function _extendedZonesUnregisterSend(
  context: Client,
  extendedZoneName: string,
  options: ExtendedZonesUnregisterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones/{extendedZoneName}/unregister",
      context.subscriptionId,
      extendedZoneName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _extendedZonesUnregisterDeserialize(
  result: PathUncheckedResponse,
): Promise<ExtendedZone> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return extendedZoneDeserializer(result.body);
}

/** Unregisters a subscription for an Extended Zone */
export async function extendedZonesUnregister(
  context: Client,
  extendedZoneName: string,
  options: ExtendedZonesUnregisterOptionalParams = { requestOptions: {} },
): Promise<ExtendedZone> {
  const result = await _extendedZonesUnregisterSend(context, extendedZoneName, options);
  return _extendedZonesUnregisterDeserialize(result);
}

export function _extendedZonesRegisterSend(
  context: Client,
  extendedZoneName: string,
  options: ExtendedZonesRegisterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones/{extendedZoneName}/register",
      context.subscriptionId,
      extendedZoneName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _extendedZonesRegisterDeserialize(
  result: PathUncheckedResponse,
): Promise<ExtendedZone> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return extendedZoneDeserializer(result.body);
}

/** Registers a subscription for an Extended Zone */
export async function extendedZonesRegister(
  context: Client,
  extendedZoneName: string,
  options: ExtendedZonesRegisterOptionalParams = { requestOptions: {} },
): Promise<ExtendedZone> {
  const result = await _extendedZonesRegisterSend(context, extendedZoneName, options);
  return _extendedZonesRegisterDeserialize(result);
}

export function _extendedZonesListBySubscriptionSend(
  context: Client,
  options: ExtendedZonesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones",
      context.subscriptionId,
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

export async function _extendedZonesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExtendedZoneListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _extendedZoneListResultDeserializer(result.body);
}

/** Lists the Azure Extended Zones available to a subscription */
export function extendedZonesListBySubscription(
  context: Client,
  options: ExtendedZonesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ExtendedZone> {
  return buildPagedAsyncIterator(
    context,
    () => _extendedZonesListBySubscriptionSend(context, options),
    _extendedZonesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _extendedZonesGetSend(
  context: Client,
  extendedZoneName: string,
  options: ExtendedZonesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones/{extendedZoneName}",
      context.subscriptionId,
      extendedZoneName,
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

export async function _extendedZonesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ExtendedZone> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return extendedZoneDeserializer(result.body);
}

/** Gets an Azure Extended Zone for a subscription */
export async function extendedZonesGet(
  context: Client,
  extendedZoneName: string,
  options: ExtendedZonesGetOptionalParams = { requestOptions: {} },
): Promise<ExtendedZone> {
  const result = await _extendedZonesGetSend(context, extendedZoneName, options);
  return _extendedZonesGetDeserialize(result);
}
