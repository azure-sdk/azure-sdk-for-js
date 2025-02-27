// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  SystemVersionsGetOptionalParams,
  SystemVersionsListByLocationOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  SystemVersion,
  systemVersionDeserializer,
  _SystemVersionListResult,
  _systemVersionListResultDeserializer,
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

export function _systemVersionsListByLocationSend(
  context: Client,
  location: string,
  options: SystemVersionsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions",
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

export async function _systemVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_SystemVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _systemVersionListResultDeserializer(result.body);
}

/** List SystemVersion resources by Location */
export function systemVersionsListByLocation(
  context: Client,
  location: string,
  options: SystemVersionsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SystemVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _systemVersionsListByLocationSend(context, location, options),
    _systemVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _systemVersionsGetSend(
  context: Client,
  location: string,
  systemversionname: string,
  options: SystemVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions/{systemversionname}",
      context.subscriptionId,
      location,
      systemversionname,
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

export async function _systemVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SystemVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return systemVersionDeserializer(result.body);
}

/** Get a SystemVersion */
export async function systemVersionsGet(
  context: Client,
  location: string,
  systemversionname: string,
  options: SystemVersionsGetOptionalParams = { requestOptions: {} },
): Promise<SystemVersion> {
  const result = await _systemVersionsGetSend(context, location, systemversionname, options);
  return _systemVersionsGetDeserialize(result);
}
