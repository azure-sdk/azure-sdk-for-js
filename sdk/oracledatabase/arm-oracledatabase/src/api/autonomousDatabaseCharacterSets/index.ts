// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseCharacterSetsGetOptionalParams,
  AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
  DatabaseContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  AutonomousDatabaseCharacterSet,
  autonomousDatabaseCharacterSetDeserializer,
  _AutonomousDatabaseCharacterSetListResult,
  _autonomousDatabaseCharacterSetListResultDeserializer,
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

export function _autonomousDatabaseCharacterSetsListByLocationSend(
  context: Client,
  location: string,
  options: AutonomousDatabaseCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets",
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

export async function _autonomousDatabaseCharacterSetsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseCharacterSetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _autonomousDatabaseCharacterSetListResultDeserializer(result.body);
}

/** List AutonomousDatabaseCharacterSet resources by Location */
export function autonomousDatabaseCharacterSetsListByLocation(
  context: Client,
  location: string,
  options: AutonomousDatabaseCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseCharacterSet> {
  return buildPagedAsyncIterator(
    context,
    () => _autonomousDatabaseCharacterSetsListByLocationSend(context, location, options),
    _autonomousDatabaseCharacterSetsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabaseCharacterSetsGetSend(
  context: Client,
  location: string,
  adbscharsetname: string,
  options: AutonomousDatabaseCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets/{adbscharsetname}",
      context.subscriptionId,
      location,
      adbscharsetname,
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

export async function _autonomousDatabaseCharacterSetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseCharacterSet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseCharacterSetDeserializer(result.body);
}

/** Get a AutonomousDatabaseCharacterSet */
export async function autonomousDatabaseCharacterSetsGet(
  context: Client,
  location: string,
  adbscharsetname: string,
  options: AutonomousDatabaseCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseCharacterSet> {
  const result = await _autonomousDatabaseCharacterSetsGetSend(
    context,
    location,
    adbscharsetname,
    options,
  );
  return _autonomousDatabaseCharacterSetsGetDeserialize(result);
}
