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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones/{extendedZoneName}/unregister{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      extendedZoneName: extendedZoneName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones/{extendedZoneName}/register{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      extendedZoneName: extendedZoneName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeZones/extendedZones/{extendedZoneName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      extendedZoneName: extendedZoneName,
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
