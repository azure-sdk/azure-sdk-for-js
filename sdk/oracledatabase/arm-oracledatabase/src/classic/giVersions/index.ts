// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { giVersionsListByLocation, giVersionsGet } from "../../api/giVersions/index.js";
import {
  GiVersionsListByLocationOptionalParams,
  GiVersionsGetOptionalParams,
} from "../../api/options.js";
import { GiVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a GiVersions operations. */
export interface GiVersionsOperations {
  /** List GiVersion resources by Location */
  listByLocation: (
    location: string,
    options?: GiVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<GiVersion>;
  /** Get a GiVersion */
  get: (
    location: string,
    giversionname: string,
    options?: GiVersionsGetOptionalParams,
  ) => Promise<GiVersion>;
}

function _getGiVersions(context: DatabaseContext) {
  return {
    listByLocation: (location: string, options?: GiVersionsListByLocationOptionalParams) =>
      giVersionsListByLocation(context, location, options),
    get: (location: string, giversionname: string, options?: GiVersionsGetOptionalParams) =>
      giVersionsGet(context, location, giversionname, options),
  };
}

export function _getGiVersionsOperations(context: DatabaseContext): GiVersionsOperations {
  return {
    ..._getGiVersions(context),
  };
}
