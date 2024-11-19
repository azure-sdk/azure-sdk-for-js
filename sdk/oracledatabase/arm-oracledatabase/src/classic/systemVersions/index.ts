// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  SystemVersionsGetOptionalParams,
  SystemVersionsListByLocationOptionalParams,
} from "../../api/options.js";
import {
  systemVersionsGet,
  systemVersionsListByLocation,
} from "../../api/systemVersions/index.js";
import { SystemVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SystemVersions operations. */
export interface SystemVersionsOperations {
  /** Get a SystemVersion */
  get: (
    location: string,
    systemversionname: string,
    options?: SystemVersionsGetOptionalParams,
  ) => Promise<SystemVersion>;
  /** List SystemVersion resources by Location */
  listByLocation: (
    location: string,
    options?: SystemVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<SystemVersion>;
}

export function getSystemVersions(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      systemversionname: string,
      options?: SystemVersionsGetOptionalParams,
    ) =>
      systemVersionsGet(
        context,
        subscriptionId,
        location,
        systemversionname,
        options,
      ),
    listByLocation: (
      location: string,
      options?: SystemVersionsListByLocationOptionalParams,
    ) =>
      systemVersionsListByLocation(context, subscriptionId, location, options),
  };
}

export function getSystemVersionsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): SystemVersionsOperations {
  return {
    ...getSystemVersions(context, subscriptionId),
  };
}
