// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  AutonomousDatabaseBackup,
  AutonomousDatabaseBackupUpdate,
} from "../../models/models.js";
import {
  autonomousDatabaseBackupsGet,
  autonomousDatabaseBackupsDelete,
  autonomousDatabaseBackupsCreateOrUpdate,
  autonomousDatabaseBackupsUpdate,
  autonomousDatabaseBackupsListByAutonomousDatabase,
} from "../../api/autonomousDatabaseBackups/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabaseBackupsGetOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
} from "../../models/options.js";

/** Interface representing a AutonomousDatabaseBackups operations. */
export interface AutonomousDatabaseBackupsOperations {
  /** Get a AutonomousDatabaseBackup */
  get: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    options?: AutonomousDatabaseBackupsGetOptionalParams,
  ) => Promise<AutonomousDatabaseBackup>;
  /** Delete a AutonomousDatabaseBackup */
  delete: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    options?: AutonomousDatabaseBackupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a AutonomousDatabaseBackup */
  createOrUpdate: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    resource: AutonomousDatabaseBackup,
    options?: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
  /** Update a AutonomousDatabaseBackup */
  update: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    properties: AutonomousDatabaseBackupUpdate,
    options?: AutonomousDatabaseBackupsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
  /** List AutonomousDatabaseBackup resources by AutonomousDatabase */
  listByAutonomousDatabase: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseBackup>;
}

export function getAutonomousDatabaseBackups(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      options?: AutonomousDatabaseBackupsGetOptionalParams,
    ) =>
      autonomousDatabaseBackupsGet(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
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
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
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
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        resource,
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
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        properties,
        options,
      ),
    listByAutonomousDatabase: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
    ) =>
      autonomousDatabaseBackupsListByAutonomousDatabase(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
  };
}

export function getAutonomousDatabaseBackupsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): AutonomousDatabaseBackupsOperations {
  return {
    ...getAutonomousDatabaseBackups(context, subscriptionId),
  };
}
