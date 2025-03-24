// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { dbSystemShapesListByLocation, dbSystemShapesGet } from "../../api/dbSystemShapes/index.js";
import {
  DbSystemShapesListByLocationOptionalParams,
  DbSystemShapesGetOptionalParams,
} from "../../api/options.js";
import { DbSystemShape } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DbSystemShapes operations. */
export interface DbSystemShapesOperations {
  /** List DbSystemShape resources by Location */
  listByLocation: (
    location: string,
    options?: DbSystemShapesListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DbSystemShape>;
  /** Get a DbSystemShape */
  get: (
    location: string,
    dbsystemshapename: string,
    options?: DbSystemShapesGetOptionalParams,
  ) => Promise<DbSystemShape>;
}

function _getDbSystemShapes(context: DatabaseContext) {
  return {
    listByLocation: (location: string, options?: DbSystemShapesListByLocationOptionalParams) =>
      dbSystemShapesListByLocation(context, location, options),
    get: (location: string, dbsystemshapename: string, options?: DbSystemShapesGetOptionalParams) =>
      dbSystemShapesGet(context, location, dbsystemshapename, options),
  };
}

export function _getDbSystemShapesOperations(context: DatabaseContext): DbSystemShapesOperations {
  return {
    ..._getDbSystemShapes(context),
  };
}
