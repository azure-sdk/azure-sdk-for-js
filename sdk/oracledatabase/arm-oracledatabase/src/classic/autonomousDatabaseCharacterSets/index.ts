// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabaseCharacterSetsGet,
  autonomousDatabaseCharacterSetsListByLocation,
} from "../../api/autonomousDatabaseCharacterSets/index.js";
import { AutonomousDatabaseCharacterSet } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  AutonomousDatabaseCharacterSetsGetOptionalParams,
  AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
} from "../../api/options.js";

/** Interface representing a AutonomousDatabaseCharacterSets operations. */
export interface AutonomousDatabaseCharacterSetsOperations {
  /** Get a AutonomousDatabaseCharacterSet */
  get: (
    location: string,
    adbscharsetname: string,
    options?: AutonomousDatabaseCharacterSetsGetOptionalParams,
  ) => Promise<AutonomousDatabaseCharacterSet>;
  /** List AutonomousDatabaseCharacterSet resources by Location */
  listByLocation: (
    location: string,
    options?: AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseCharacterSet>;
}

export function getAutonomousDatabaseCharacterSets(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      adbscharsetname: string,
      options?: AutonomousDatabaseCharacterSetsGetOptionalParams,
    ) =>
      autonomousDatabaseCharacterSetsGet(
        context,
        subscriptionId,
        location,
        adbscharsetname,
        options,
      ),
    listByLocation: (
      location: string,
      options?: AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
    ) =>
      autonomousDatabaseCharacterSetsListByLocation(
        context,
        subscriptionId,
        location,
        options,
      ),
  };
}

export function getAutonomousDatabaseCharacterSetsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): AutonomousDatabaseCharacterSetsOperations {
  return {
    ...getAutonomousDatabaseCharacterSets(context, subscriptionId),
  };
}
