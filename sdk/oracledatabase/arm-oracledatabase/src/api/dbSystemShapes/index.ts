// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DbSystemShape,
  _DbSystemShapeListResult,
} from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  DbSystemShapesGetOptionalParams,
  DbSystemShapesListByLocationOptionalParams,
} from "../../models/options.js";

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

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          shapeFamily: result.body.properties?.["shapeFamily"],
          availableCoreCount: result.body.properties?.["availableCoreCount"],
          minimumCoreCount: result.body.properties?.["minimumCoreCount"],
          runtimeMinimumCoreCount:
            result.body.properties?.["runtimeMinimumCoreCount"],
          coreCountIncrement: result.body.properties?.["coreCountIncrement"],
          minStorageCount: result.body.properties?.["minStorageCount"],
          maxStorageCount: result.body.properties?.["maxStorageCount"],
          availableDataStoragePerServerInTbs:
            result.body.properties?.["availableDataStoragePerServerInTbs"],
          availableMemoryPerNodeInGbs:
            result.body.properties?.["availableMemoryPerNodeInGbs"],
          availableDbNodePerNodeInGbs:
            result.body.properties?.["availableDbNodePerNodeInGbs"],
          minCoreCountPerNode: result.body.properties?.["minCoreCountPerNode"],
          availableMemoryInGbs:
            result.body.properties?.["availableMemoryInGbs"],
          minMemoryPerNodeInGbs:
            result.body.properties?.["minMemoryPerNodeInGbs"],
          availableDbNodeStorageInGbs:
            result.body.properties?.["availableDbNodeStorageInGbs"],
          minDbNodeStoragePerNodeInGbs:
            result.body.properties?.["minDbNodeStoragePerNodeInGbs"],
          availableDataStorageInTbs:
            result.body.properties?.["availableDataStorageInTbs"],
          minDataStorageInTbs: result.body.properties?.["minDataStorageInTbs"],
          minimumNodeCount: result.body.properties?.["minimumNodeCount"],
          maximumNodeCount: result.body.properties?.["maximumNodeCount"],
          availableCoreCountPerNode:
            result.body.properties?.["availableCoreCountPerNode"],
        },
  };
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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              shapeFamily: p.properties?.["shapeFamily"],
              availableCoreCount: p.properties?.["availableCoreCount"],
              minimumCoreCount: p.properties?.["minimumCoreCount"],
              runtimeMinimumCoreCount:
                p.properties?.["runtimeMinimumCoreCount"],
              coreCountIncrement: p.properties?.["coreCountIncrement"],
              minStorageCount: p.properties?.["minStorageCount"],
              maxStorageCount: p.properties?.["maxStorageCount"],
              availableDataStoragePerServerInTbs:
                p.properties?.["availableDataStoragePerServerInTbs"],
              availableMemoryPerNodeInGbs:
                p.properties?.["availableMemoryPerNodeInGbs"],
              availableDbNodePerNodeInGbs:
                p.properties?.["availableDbNodePerNodeInGbs"],
              minCoreCountPerNode: p.properties?.["minCoreCountPerNode"],
              availableMemoryInGbs: p.properties?.["availableMemoryInGbs"],
              minMemoryPerNodeInGbs: p.properties?.["minMemoryPerNodeInGbs"],
              availableDbNodeStorageInGbs:
                p.properties?.["availableDbNodeStorageInGbs"],
              minDbNodeStoragePerNodeInGbs:
                p.properties?.["minDbNodeStoragePerNodeInGbs"],
              availableDataStorageInTbs:
                p.properties?.["availableDataStorageInTbs"],
              minDataStorageInTbs: p.properties?.["minDataStorageInTbs"],
              minimumNodeCount: p.properties?.["minimumNodeCount"],
              maximumNodeCount: p.properties?.["maximumNodeCount"],
              availableCoreCountPerNode:
                p.properties?.["availableCoreCountPerNode"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
