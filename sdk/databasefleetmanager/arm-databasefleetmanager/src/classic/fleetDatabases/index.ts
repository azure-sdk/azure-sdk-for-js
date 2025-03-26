// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerContext } from "../../api/databaseFleetManagerContext.js";
import {
  FleetDatabase,
  DatabaseChangeTierProperties,
  DatabaseRenameProperties,
} from "../../models/models.js";
import {
  FleetDatabasesRevertOptionalParams,
  FleetDatabasesRenameOptionalParams,
  FleetDatabasesChangeTierOptionalParams,
  FleetDatabasesListByFleetspaceOptionalParams,
  FleetDatabasesDeleteOptionalParams,
  FleetDatabasesUpdateOptionalParams,
  FleetDatabasesCreateOrUpdateOptionalParams,
  FleetDatabasesGetOptionalParams,
} from "../../api/fleetDatabases/options.js";
import {
  fleetDatabasesRevert,
  fleetDatabasesRename,
  fleetDatabasesChangeTier,
  fleetDatabasesListByFleetspace,
  fleetDatabasesDelete,
  fleetDatabasesUpdate,
  fleetDatabasesCreateOrUpdate,
  fleetDatabasesGet,
} from "../../api/fleetDatabases/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a FleetDatabases operations. */
export interface FleetDatabasesOperations {
  /** Revert a database transparent data encryption (TDE). */
  revert: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    databaseName: string,
    options?: FleetDatabasesRevertOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Renames a database. */
  rename: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    databaseName: string,
    body: DatabaseRenameProperties,
    options?: FleetDatabasesRenameOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Moves database to a different tier. */
  changeTier: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    databaseName: string,
    body: DatabaseChangeTierProperties,
    options?: FleetDatabasesChangeTierOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets all fleet databases in a fleetspace. */
  listByFleetspace: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    options?: FleetDatabasesListByFleetspaceOptionalParams,
  ) => PagedAsyncIterableIterator<FleetDatabase>;
  /** Deletes a fleet database. */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    databaseName: string,
    options?: FleetDatabasesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a fleet database. */
  update: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    databaseName: string,
    properties: FleetDatabase,
    options?: FleetDatabasesUpdateOptionalParams,
  ) => PollerLike<OperationState<FleetDatabase>, FleetDatabase>;
  /** Creates or updates a fleet database. */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    databaseName: string,
    resource: FleetDatabase,
    options?: FleetDatabasesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FleetDatabase>, FleetDatabase>;
  /** Gets a fleet database. */
  get: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    databaseName: string,
    options?: FleetDatabasesGetOptionalParams,
  ) => Promise<FleetDatabase>;
}

function _getFleetDatabases(context: DatabaseFleetManagerContext) {
  return {
    revert: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      options?: FleetDatabasesRevertOptionalParams,
    ) =>
      fleetDatabasesRevert(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        options,
      ),
    rename: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      body: DatabaseRenameProperties,
      options?: FleetDatabasesRenameOptionalParams,
    ) =>
      fleetDatabasesRename(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        body,
        options,
      ),
    changeTier: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      body: DatabaseChangeTierProperties,
      options?: FleetDatabasesChangeTierOptionalParams,
    ) =>
      fleetDatabasesChangeTier(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        body,
        options,
      ),
    listByFleetspace: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      options?: FleetDatabasesListByFleetspaceOptionalParams,
    ) =>
      fleetDatabasesListByFleetspace(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      options?: FleetDatabasesDeleteOptionalParams,
    ) =>
      fleetDatabasesDelete(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        options,
      ),
    update: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      properties: FleetDatabase,
      options?: FleetDatabasesUpdateOptionalParams,
    ) =>
      fleetDatabasesUpdate(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      resource: FleetDatabase,
      options?: FleetDatabasesCreateOrUpdateOptionalParams,
    ) =>
      fleetDatabasesCreateOrUpdate(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      options?: FleetDatabasesGetOptionalParams,
    ) =>
      fleetDatabasesGet(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        options,
      ),
  };
}

export function _getFleetDatabasesOperations(
  context: DatabaseFleetManagerContext,
): FleetDatabasesOperations {
  return {
    ..._getFleetDatabases(context),
  };
}
