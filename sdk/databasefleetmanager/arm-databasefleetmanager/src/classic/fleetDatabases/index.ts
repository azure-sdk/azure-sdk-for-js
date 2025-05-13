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
  revert,
  rename,
  changeTier,
  listByFleetspace,
  $delete,
  update,
  createOrUpdate,
  get,
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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
    ) => revert(context, resourceGroupName, fleetName, fleetspaceName, databaseName, options),
    rename: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      body: DatabaseRenameProperties,
      options?: FleetDatabasesRenameOptionalParams,
    ) => rename(context, resourceGroupName, fleetName, fleetspaceName, databaseName, body, options),
    changeTier: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      body: DatabaseChangeTierProperties,
      options?: FleetDatabasesChangeTierOptionalParams,
    ) =>
      changeTier(
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
    ) => listByFleetspace(context, resourceGroupName, fleetName, fleetspaceName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      options?: FleetDatabasesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, fleetName, fleetspaceName, databaseName, options),
    update: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      databaseName: string,
      properties: FleetDatabase,
      options?: FleetDatabasesUpdateOptionalParams,
    ) =>
      update(
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
      createOrUpdate(
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
    ) => get(context, resourceGroupName, fleetName, fleetspaceName, databaseName, options),
  };
}

export function _getFleetDatabasesOperations(
  context: DatabaseFleetManagerContext,
): FleetDatabasesOperations {
  return {
    ..._getFleetDatabases(context),
  };
}
