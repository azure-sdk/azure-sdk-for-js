// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { GiVersion } from "../../models/models.js";
import {
  GiVersionsListByLocationOptionalParams,
  GiVersionsGetOptionalParams,
} from "../../api/giVersions/options.js";
import { listByLocation, get } from "../../api/giVersions/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a GiVersions operations. */
export interface GiVersionsOperations {
  /** List GiVersion resources by SubscriptionLocationResource */
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
      listByLocation(context, location, options),
    get: (location: string, giversionname: string, options?: GiVersionsGetOptionalParams) =>
      get(context, location, giversionname, options),
  };
}

export function _getGiVersionsOperations(context: DatabaseContext): GiVersionsOperations {
  return {
    ..._getGiVersions(context),
  };
}
