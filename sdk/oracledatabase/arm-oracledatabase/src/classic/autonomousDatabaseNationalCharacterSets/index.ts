// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { AutonomousDatabaseNationalCharacterSet } from "../../models/models.js";
import {
  AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
  AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
} from "../../api/autonomousDatabaseNationalCharacterSets/options.js";
import {
  listByLocation,
  get,
} from "../../api/autonomousDatabaseNationalCharacterSets/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AutonomousDatabaseNationalCharacterSets operations. */
export interface AutonomousDatabaseNationalCharacterSetsOperations {
  /** List AutonomousDatabaseNationalCharacterSet resources by Location */
  listByLocation: (
    location: string,
    options?: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseNationalCharacterSet>;
  /** Get a AutonomousDatabaseNationalCharacterSet */
  get: (
    location: string,
    adbsncharsetname: string,
    options?: AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  ) => Promise<AutonomousDatabaseNationalCharacterSet>;
}

function _getAutonomousDatabaseNationalCharacterSets(context: DatabaseContext) {
  return {
    listByLocation: (
      location: string,
      options?: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
    ) => listByLocation(context, location, options),
    get: (
      location: string,
      adbsncharsetname: string,
      options?: AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
    ) => get(context, location, adbsncharsetname, options),
  };
}

export function _getAutonomousDatabaseNationalCharacterSetsOperations(
  context: DatabaseContext,
): AutonomousDatabaseNationalCharacterSetsOperations {
  return {
    ..._getAutonomousDatabaseNationalCharacterSets(context),
  };
}
