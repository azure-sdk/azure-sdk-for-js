// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DbSystemShape } from "../../models/models.js";
import {
  dbSystemShapesGet,
  dbSystemShapesListByLocation,
} from "../../api/dbSystemShapes/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  DbSystemShapesGetOptionalParams,
  DbSystemShapesListByLocationOptionalParams,
} from "../../models/options.js";

/** Interface representing a DbSystemShapes operations. */
export interface DbSystemShapesOperations {
  /** Get a DbSystemShape */
  get: (
    location: string,
    dbsystemshapename: string,
    options?: DbSystemShapesGetOptionalParams,
  ) => Promise<DbSystemShape>;
  /** List DbSystemShape resources by Location */
  listByLocation: (
    location: string,
    options?: DbSystemShapesListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DbSystemShape>;
}

export function getDbSystemShapes(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      dbsystemshapename: string,
      options?: DbSystemShapesGetOptionalParams,
    ) =>
      dbSystemShapesGet(
        context,
        subscriptionId,
        location,
        dbsystemshapename,
        options,
      ),
    listByLocation: (
      location: string,
      options?: DbSystemShapesListByLocationOptionalParams,
    ) =>
      dbSystemShapesListByLocation(context, subscriptionId, location, options),
  };
}

export function getDbSystemShapesOperations(
  context: DatabaseContext,
  subscriptionId: string,
): DbSystemShapesOperations {
  return {
    ...getDbSystemShapes(context, subscriptionId),
  };
}
