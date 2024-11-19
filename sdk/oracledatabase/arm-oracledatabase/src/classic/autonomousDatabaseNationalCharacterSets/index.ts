// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabaseNationalCharacterSetsGet,
  autonomousDatabaseNationalCharacterSetsListByLocation,
} from "../../api/autonomousDatabaseNationalCharacterSets/index.js";
import { AutonomousDatabaseNationalCharacterSet } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
} from "../../api/options.js";

/** Interface representing a AutonomousDatabaseNationalCharacterSets operations. */
export interface AutonomousDatabaseNationalCharacterSetsOperations {
  /** Get a AutonomousDatabaseNationalCharacterSet */
  get: (
    location: string,
    adbsncharsetname: string,
    options?: AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  ) => Promise<AutonomousDatabaseNationalCharacterSet>;
  /** List AutonomousDatabaseNationalCharacterSet resources by Location */
  listByLocation: (
    location: string,
    options?: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseNationalCharacterSet>;
}

export function getAutonomousDatabaseNationalCharacterSets(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      adbsncharsetname: string,
      options?: AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
    ) =>
      autonomousDatabaseNationalCharacterSetsGet(
        context,
        subscriptionId,
        location,
        adbsncharsetname,
        options,
      ),
    listByLocation: (
      location: string,
      options?: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
    ) =>
      autonomousDatabaseNationalCharacterSetsListByLocation(
        context,
        subscriptionId,
        location,
        options,
      ),
  };
}

export function getAutonomousDatabaseNationalCharacterSetsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): AutonomousDatabaseNationalCharacterSetsOperations {
  return {
    ...getAutonomousDatabaseNationalCharacterSets(context, subscriptionId),
  };
}
