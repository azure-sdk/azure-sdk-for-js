// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  GiVersionsGetOptionalParams,
  GiVersionsListByLocationOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  GiVersion,
  giVersionDeserializer,
  _GiVersionListResult,
  _giVersionListResultDeserializer,
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

export function _giVersionsListByLocationSend(
  context: Client,
  location: string,
  options: GiVersionsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions{?api-version}",
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

export async function _giVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_GiVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _giVersionListResultDeserializer(result.body);
}

/** List GiVersion resources by Location */
export function giVersionsListByLocation(
  context: Client,
  location: string,
  options: GiVersionsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<GiVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _giVersionsListByLocationSend(context, location, options),
    _giVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _giVersionsGetSend(
  context: Client,
  location: string,
  giversionname: string,
  options: GiVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions/{giversionname}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      giversionname: giversionname,
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

export async function _giVersionsGetDeserialize(result: PathUncheckedResponse): Promise<GiVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return giVersionDeserializer(result.body);
}

/** Get a GiVersion */
export async function giVersionsGet(
  context: Client,
  location: string,
  giversionname: string,
  options: GiVersionsGetOptionalParams = { requestOptions: {} },
): Promise<GiVersion> {
  const result = await _giVersionsGetSend(context, location, giversionname, options);
  return _giVersionsGetDeserialize(result);
}
