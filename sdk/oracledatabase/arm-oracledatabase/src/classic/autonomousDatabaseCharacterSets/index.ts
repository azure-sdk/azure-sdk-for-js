// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabaseCharacterSetsListByLocation,
  autonomousDatabaseCharacterSetsGet,
} from "../../api/autonomousDatabaseCharacterSets/index.js";
import { AutonomousDatabaseCharacterSet } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
  AutonomousDatabaseCharacterSetsGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a AutonomousDatabaseCharacterSets operations. */
export interface AutonomousDatabaseCharacterSetsOperations {
  /** List AutonomousDatabaseCharacterSet resources by Location */
  listByLocation: (
    location: string,
    options?: AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseCharacterSet>;
  /** Get a AutonomousDatabaseCharacterSet */
  get: (
    location: string,
    adbscharsetname: string,
    options?: AutonomousDatabaseCharacterSetsGetOptionalParams,
  ) => Promise<AutonomousDatabaseCharacterSet>;
}

function _getAutonomousDatabaseCharacterSets(context: DatabaseContext) {
  return {
    listByLocation: (
      location: string,
      options?: AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
    ) => autonomousDatabaseCharacterSetsListByLocation(context, location, options),
    get: (
      location: string,
      adbscharsetname: string,
      options?: AutonomousDatabaseCharacterSetsGetOptionalParams,
    ) => autonomousDatabaseCharacterSetsGet(context, location, adbscharsetname, options),
  };
}

export function _getAutonomousDatabaseCharacterSetsOperations(
  context: DatabaseContext,
): AutonomousDatabaseCharacterSetsOperations {
  return {
    ..._getAutonomousDatabaseCharacterSets(context),
  };
}
