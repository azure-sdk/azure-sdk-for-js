// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabaseBackupsListByAutonomousDatabase,
  autonomousDatabaseBackupsUpdate,
  autonomousDatabaseBackupsCreateOrUpdate,
  autonomousDatabaseBackupsDelete,
  autonomousDatabaseBackupsGet,
} from "../../api/autonomousDatabaseBackups/index.js";
import { AutonomousDatabaseBackup, AutonomousDatabaseBackupUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsGetOptionalParams,
} from "../../api/options.js";

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
    ) =>
      autonomousDatabaseBackupsListByAutonomousDatabase(
        context,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    update: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      properties: AutonomousDatabaseBackupUpdate,
      options?: AutonomousDatabaseBackupsUpdateOptionalParams,
    ) =>
      autonomousDatabaseBackupsUpdate(
        context,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      resource: AutonomousDatabaseBackup,
      options?: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
    ) =>
      autonomousDatabaseBackupsCreateOrUpdate(
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
    ) =>
      autonomousDatabaseBackupsDelete(
        context,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        options,
      ),
    get: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      options?: AutonomousDatabaseBackupsGetOptionalParams,
    ) =>
      autonomousDatabaseBackupsGet(
        context,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        options,
      ),
  };
}

export function _getAutonomousDatabaseBackupsOperations(
  context: DatabaseContext,
): AutonomousDatabaseBackupsOperations {
  return {
    ..._getAutonomousDatabaseBackups(context),
  };
}
