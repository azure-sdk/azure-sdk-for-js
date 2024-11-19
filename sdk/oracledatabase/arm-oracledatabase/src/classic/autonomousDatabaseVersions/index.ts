// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabaseVersionsGet,
  autonomousDatabaseVersionsListByLocation,
} from "../../api/autonomousDatabaseVersions/index.js";
import { AutonomousDbVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  AutonomousDatabaseVersionsGetOptionalParams,
  AutonomousDatabaseVersionsListByLocationOptionalParams,
} from "../../api/options.js";

/** Interface representing a AutonomousDatabaseVersions operations. */
export interface AutonomousDatabaseVersionsOperations {
  /** Get a AutonomousDbVersion */
  get: (
    location: string,
    autonomousdbversionsname: string,
    options?: AutonomousDatabaseVersionsGetOptionalParams,
  ) => Promise<AutonomousDbVersion>;
  /** List AutonomousDbVersion resources by Location */
  listByLocation: (
    location: string,
    options?: AutonomousDatabaseVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDbVersion>;
}

export function getAutonomousDatabaseVersions(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      autonomousdbversionsname: string,
      options?: AutonomousDatabaseVersionsGetOptionalParams,
    ) =>
      autonomousDatabaseVersionsGet(
        context,
        subscriptionId,
        location,
        autonomousdbversionsname,
        options,
      ),
    listByLocation: (
      location: string,
      options?: AutonomousDatabaseVersionsListByLocationOptionalParams,
    ) =>
      autonomousDatabaseVersionsListByLocation(
        context,
        subscriptionId,
        location,
        options,
      ),
  };
}

export function getAutonomousDatabaseVersionsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): AutonomousDatabaseVersionsOperations {
  return {
    ...getAutonomousDatabaseVersions(context, subscriptionId),
  };
}
