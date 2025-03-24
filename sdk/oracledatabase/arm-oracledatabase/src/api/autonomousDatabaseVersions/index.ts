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
  errorResponseDeserializer,
  _AutonomousDbVersionListResult,
  _autonomousDbVersionListResultDeserializer,
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

export function _autonomousDatabaseVersionsListByLocationSend(
  context: Client,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions{?api-version}",
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

export async function _autonomousDatabaseVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDbVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _autonomousDbVersionListResultDeserializer(result.body);
}

/** List AutonomousDbVersion resources by Location */
export function autonomousDatabaseVersionsListByLocation(
  context: Client,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDbVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _autonomousDatabaseVersionsListByLocationSend(context, location, options),
    _autonomousDatabaseVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabaseVersionsGetSend(
  context: Client,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions/{autonomousdbversionsname}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      autonomousdbversionsname: autonomousdbversionsname,
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

export async function _autonomousDatabaseVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDbVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDbVersionDeserializer(result.body);
}

/** Get a AutonomousDbVersion */
export async function autonomousDatabaseVersionsGet(
  context: Client,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDbVersion> {
  const result = await _autonomousDatabaseVersionsGetSend(
    context,
    location,
    autonomousdbversionsname,
    options,
  );
  return _autonomousDatabaseVersionsGetDeserialize(result);
}
