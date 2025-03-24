// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabaseVersionsListByLocation,
  autonomousDatabaseVersionsGet,
} from "../../api/autonomousDatabaseVersions/index.js";
import { AutonomousDbVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  AutonomousDatabaseVersionsListByLocationOptionalParams,
  AutonomousDatabaseVersionsGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a AutonomousDatabaseVersions operations. */
export interface AutonomousDatabaseVersionsOperations {
  /** List AutonomousDbVersion resources by Location */
  listByLocation: (
    location: string,
    options?: AutonomousDatabaseVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDbVersion>;
  /** Get a AutonomousDbVersion */
  get: (
    location: string,
    autonomousdbversionsname: string,
    options?: AutonomousDatabaseVersionsGetOptionalParams,
  ) => Promise<AutonomousDbVersion>;
}

function _getAutonomousDatabaseVersions(context: DatabaseContext) {
  return {
    listByLocation: (
      location: string,
      options?: AutonomousDatabaseVersionsListByLocationOptionalParams,
    ) => autonomousDatabaseVersionsListByLocation(context, location, options),
    get: (
      location: string,
      autonomousdbversionsname: string,
      options?: AutonomousDatabaseVersionsGetOptionalParams,
    ) => autonomousDatabaseVersionsGet(context, location, autonomousdbversionsname, options),
  };
}

export function _getAutonomousDatabaseVersionsOperations(
  context: DatabaseContext,
): AutonomousDatabaseVersionsOperations {
  return {
    ..._getAutonomousDatabaseVersions(context),
  };
}
