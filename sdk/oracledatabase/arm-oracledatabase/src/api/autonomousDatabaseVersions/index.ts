// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseVersionsGetOptionalParams,
  AutonomousDatabaseVersionsListByLocationOptionalParams,
  DatabaseContext as Client,
} from "../index.js";
import {
  AutonomousDbVersion,
  autonomousDbVersionDeserializer,
  _AutonomousDbVersionListResult,
  _autonomousDbVersionListResultDeserializer,
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

export function _autonomousDatabaseVersionsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions/{autonomousdbversionsname}",
      subscriptionId,
      location,
      autonomousdbversionsname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDbVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDbVersionDeserializer(result.body);
}

/** Get a AutonomousDbVersion */
export async function autonomousDatabaseVersionsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDbVersion> {
  const result = await _autonomousDatabaseVersionsGetSend(
    context,
    subscriptionId,
    location,
    autonomousdbversionsname,
    options,
  );
  return _autonomousDatabaseVersionsGetDeserialize(result);
}

export function _autonomousDatabaseVersionsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDbVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _autonomousDbVersionListResultDeserializer(result.body);
}

/** List AutonomousDbVersion resources by Location */
export function autonomousDatabaseVersionsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDbVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabaseVersionsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _autonomousDatabaseVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
