// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DbSystemShapesGetOptionalParams,
  DbSystemShapesListByLocationOptionalParams,
} from "../index.js";
import {
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

export function _dbSystemShapesGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  dbsystemshapename: string,
  options: DbSystemShapesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes/{dbsystemshapename}",
      subscriptionId,
      location,
      dbsystemshapename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbSystemShapesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DbSystemShape> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dbSystemShapeDeserializer(result.body);
}

/** Get a DbSystemShape */
export async function dbSystemShapesGet(
  context: Client,
  subscriptionId: string,
  location: string,
  dbsystemshapename: string,
  options: DbSystemShapesGetOptionalParams = { requestOptions: {} },
): Promise<DbSystemShape> {
  const result = await _dbSystemShapesGetSend(
    context,
    subscriptionId,
    location,
    dbsystemshapename,
    options,
  );
  return _dbSystemShapesGetDeserialize(result);
}

export function _dbSystemShapesListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DbSystemShapesListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbSystemShapesListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbSystemShapeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dbSystemShapeListResultDeserializer(result.body);
}

/** List DbSystemShape resources by Location */
export function dbSystemShapesListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DbSystemShapesListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DbSystemShape> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dbSystemShapesListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _dbSystemShapesListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
