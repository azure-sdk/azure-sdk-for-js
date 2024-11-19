// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  giVersionsGet,
  giVersionsListByLocation,
} from "../../api/giVersions/index.js";
import {
  GiVersionsGetOptionalParams,
  GiVersionsListByLocationOptionalParams,
} from "../../api/options.js";
import { GiVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a GiVersions operations. */
export interface GiVersionsOperations {
  /** Get a GiVersion */
  get: (
    location: string,
    giversionname: string,
    options?: GiVersionsGetOptionalParams,
  ) => Promise<GiVersion>;
  /** List GiVersion resources by Location */
  listByLocation: (
    location: string,
    options?: GiVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<GiVersion>;
}

export function getGiVersions(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      giversionname: string,
      options?: GiVersionsGetOptionalParams,
    ) =>
      giVersionsGet(context, subscriptionId, location, giversionname, options),
    listByLocation: (
      location: string,
      options?: GiVersionsListByLocationOptionalParams,
    ) => giVersionsListByLocation(context, subscriptionId, location, options),
  };
}

export function getGiVersionsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): GiVersionsOperations {
  return {
    ...getGiVersions(context, subscriptionId),
  };
}
