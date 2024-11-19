// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
  DatabaseContext as Client,
} from "../index.js";
import {
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

export function _autonomousDatabaseNationalCharacterSetsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  adbsncharsetname: string,
  options: AutonomousDatabaseNationalCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets/{adbsncharsetname}",
      subscriptionId,
      location,
      adbsncharsetname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseNationalCharacterSetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseNationalCharacterSet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseNationalCharacterSetDeserializer(result.body);
}

/** Get a AutonomousDatabaseNationalCharacterSet */
export async function autonomousDatabaseNationalCharacterSetsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  adbsncharsetname: string,
  options: AutonomousDatabaseNationalCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseNationalCharacterSet> {
  const result = await _autonomousDatabaseNationalCharacterSetsGetSend(
    context,
    subscriptionId,
    location,
    adbsncharsetname,
    options,
  );
  return _autonomousDatabaseNationalCharacterSetsGetDeserialize(result);
}

export function _autonomousDatabaseNationalCharacterSetsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseNationalCharacterSetsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseNationalCharacterSetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _autonomousDatabaseNationalCharacterSetListResultDeserializer(
    result.body,
  );
}

/** List AutonomousDatabaseNationalCharacterSet resources by Location */
export function autonomousDatabaseNationalCharacterSetsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseNationalCharacterSet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabaseNationalCharacterSetsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _autonomousDatabaseNationalCharacterSetsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
