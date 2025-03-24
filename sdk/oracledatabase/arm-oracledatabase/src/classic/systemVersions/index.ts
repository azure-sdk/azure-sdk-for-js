// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  SystemVersionsListByLocationOptionalParams,
  SystemVersionsGetOptionalParams,
} from "../../api/options.js";
import { systemVersionsListByLocation, systemVersionsGet } from "../../api/systemVersions/index.js";
import { SystemVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SystemVersions operations. */
export interface SystemVersionsOperations {
  /** List SystemVersion resources by Location */
  listByLocation: (
    location: string,
    options?: SystemVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<SystemVersion>;
  /** Get a SystemVersion */
  get: (
    location: string,
    systemversionname: string,
    options?: SystemVersionsGetOptionalParams,
  ) => Promise<SystemVersion>;
}

function _getSystemVersions(context: DatabaseContext) {
  return {
    listByLocation: (location: string, options?: SystemVersionsListByLocationOptionalParams) =>
      systemVersionsListByLocation(context, location, options),
    get: (location: string, systemversionname: string, options?: SystemVersionsGetOptionalParams) =>
      systemVersionsGet(context, location, systemversionname, options),
  };
}

export function _getSystemVersionsOperations(context: DatabaseContext): SystemVersionsOperations {
  return {
    ..._getSystemVersions(context),
  };
}
