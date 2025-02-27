// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DbSystemShapesGetOptionalParams,
  DbSystemShapesListByLocationOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DbSystemShape,
  dbSystemShapeDeserializer,
  _DbSystemShapeListResult,
  _dbSystemShapeListResultDeserializer,
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

export function _dbSystemShapesListByLocationSend(
  context: Client,
  location: string,
  options: DbSystemShapesListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes",
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

export async function _dbSystemShapesListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbSystemShapeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dbSystemShapeListResultDeserializer(result.body);
}

/** List DbSystemShape resources by Location */
export function dbSystemShapesListByLocation(
  context: Client,
  location: string,
  options: DbSystemShapesListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DbSystemShape> {
  return buildPagedAsyncIterator(
    context,
    () => _dbSystemShapesListByLocationSend(context, location, options),
    _dbSystemShapesListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dbSystemShapesGetSend(
  context: Client,
  location: string,
  dbsystemshapename: string,
  options: DbSystemShapesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes/{dbsystemshapename}",
      context.subscriptionId,
      location,
      dbsystemshapename,
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

export async function _dbSystemShapesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DbSystemShape> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dbSystemShapeDeserializer(result.body);
}

/** Get a DbSystemShape */
export async function dbSystemShapesGet(
  context: Client,
  location: string,
  dbsystemshapename: string,
  options: DbSystemShapesGetOptionalParams = { requestOptions: {} },
): Promise<DbSystemShape> {
  const result = await _dbSystemShapesGetSend(context, location, dbsystemshapename, options);
  return _dbSystemShapesGetDeserialize(result);
}
