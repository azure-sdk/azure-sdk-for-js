// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  GiVersionsGetOptionalParams,
  GiVersionsListByLocationOptionalParams,
} from "../index.js";
import {
  GiVersion,
  giVersionDeserializer,
  _GiVersionListResult,
  _giVersionListResultDeserializer,
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

export function _giVersionsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  giversionname: string,
  options: GiVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions/{giversionname}",
      subscriptionId,
      location,
      giversionname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _giVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<GiVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return giVersionDeserializer(result.body);
}

/** Get a GiVersion */
export async function giVersionsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  giversionname: string,
  options: GiVersionsGetOptionalParams = { requestOptions: {} },
): Promise<GiVersion> {
  const result = await _giVersionsGetSend(
    context,
    subscriptionId,
    location,
    giversionname,
    options,
  );
  return _giVersionsGetDeserialize(result);
}

export function _giVersionsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: GiVersionsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _giVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_GiVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _giVersionListResultDeserializer(result.body);
}

/** List GiVersion resources by Location */
export function giVersionsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: GiVersionsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<GiVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _giVersionsListByLocationSend(context, subscriptionId, location, options),
    _giVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
