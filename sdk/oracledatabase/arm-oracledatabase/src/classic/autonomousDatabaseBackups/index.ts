// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { AutonomousDatabaseBackup, AutonomousDatabaseBackupUpdate } from "../../models/models.js";
import {
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsGetOptionalParams,
} from "../../api/autonomousDatabaseBackups/options.js";
import {
  listByAutonomousDatabase,
  update,
  createOrUpdate,
  $delete,
  get,
} from "../../api/autonomousDatabaseBackups/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a AutonomousDatabaseBackups operations. */
export interface AutonomousDatabaseBackupsOperations {
  /** List AutonomousDatabaseBackup resources by AutonomousDatabase */
  listByAutonomousDatabase: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseBackup>;
  /** Update a AutonomousDatabaseBackup */
  update: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    properties: AutonomousDatabaseBackupUpdate,
    options?: AutonomousDatabaseBackupsUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabaseBackup>, AutonomousDatabaseBackup>;
  /** Create a AutonomousDatabaseBackup */
  createOrUpdate: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    resource: AutonomousDatabaseBackup,
    options?: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabaseBackup>, AutonomousDatabaseBackup>;
  /** Delete a AutonomousDatabaseBackup */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    options?: AutonomousDatabaseBackupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get a AutonomousDatabaseBackup */
  get: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    options?: AutonomousDatabaseBackupsGetOptionalParams,
  ) => Promise<AutonomousDatabaseBackup>;
}

function _getAutonomousDatabaseBackups(context: DatabaseContext) {
  return {
    listByAutonomousDatabase: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
    ) => listByAutonomousDatabase(context, resourceGroupName, autonomousdatabasename, options),
    update: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      properties: AutonomousDatabaseBackupUpdate,
      options?: AutonomousDatabaseBackupsUpdateOptionalParams,
    ) =>
      update(context, resourceGroupName, autonomousdatabasename, adbbackupid, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      resource: AutonomousDatabaseBackup,
      options?: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      options?: AutonomousDatabaseBackupsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, autonomousdatabasename, adbbackupid, options),
    get: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      options?: AutonomousDatabaseBackupsGetOptionalParams,
    ) => get(context, resourceGroupName, autonomousdatabasename, adbbackupid, options),
  };
}

export function _getAutonomousDatabaseBackupsOperations(
  context: DatabaseContext,
): AutonomousDatabaseBackupsOperations {
  return {
    ..._getAutonomousDatabaseBackups(context),
  };
}
