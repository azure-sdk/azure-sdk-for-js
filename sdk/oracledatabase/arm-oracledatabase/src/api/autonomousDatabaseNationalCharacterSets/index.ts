// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
  DatabaseContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  AutonomousDatabaseNationalCharacterSet,
  autonomousDatabaseNationalCharacterSetDeserializer,
  _AutonomousDatabaseNationalCharacterSetListResult,
  _autonomousDatabaseNationalCharacterSetListResultDeserializer,
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

export function _autonomousDatabaseNationalCharacterSetsListByLocationSend(
  context: Client,
  location: string,
  options: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets",
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

export async function _autonomousDatabaseNationalCharacterSetsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseNationalCharacterSetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _autonomousDatabaseNationalCharacterSetListResultDeserializer(result.body);
}

/** List AutonomousDatabaseNationalCharacterSet resources by Location */
export function autonomousDatabaseNationalCharacterSetsListByLocation(
  context: Client,
  location: string,
  options: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseNationalCharacterSet> {
  return buildPagedAsyncIterator(
    context,
    () => _autonomousDatabaseNationalCharacterSetsListByLocationSend(context, location, options),
    _autonomousDatabaseNationalCharacterSetsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabaseNationalCharacterSetsGetSend(
  context: Client,
  location: string,
  adbsncharsetname: string,
  options: AutonomousDatabaseNationalCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets/{adbsncharsetname}",
      context.subscriptionId,
      location,
      adbsncharsetname,
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

export async function _autonomousDatabaseNationalCharacterSetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseNationalCharacterSet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseNationalCharacterSetDeserializer(result.body);
}

/** Get a AutonomousDatabaseNationalCharacterSet */
export async function autonomousDatabaseNationalCharacterSetsGet(
  context: Client,
  location: string,
  adbsncharsetname: string,
  options: AutonomousDatabaseNationalCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseNationalCharacterSet> {
  const result = await _autonomousDatabaseNationalCharacterSetsGetSend(
    context,
    location,
    adbsncharsetname,
    options,
  );
  return _autonomousDatabaseNationalCharacterSetsGetDeserialize(result);
}
