// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabasesChangeDisasterRecoveryConfiguration,
  autonomousDatabasesShrink,
  autonomousDatabasesRestore,
  autonomousDatabasesGenerateWallet,
  autonomousDatabasesFailover,
  autonomousDatabasesSwitchover,
  autonomousDatabasesListByResourceGroup,
  autonomousDatabasesCreateOrUpdate,
  autonomousDatabasesDelete,
  autonomousDatabasesUpdate,
  autonomousDatabasesGet,
  autonomousDatabasesListBySubscription,
} from "../../api/autonomousDatabases/index.js";
import {
  AutonomousDatabase,
  DisasterRecoveryConfigurationDetails,
  AutonomousDatabaseUpdate,
  PeerDbDetails,
  GenerateAutonomousDatabaseWalletDetails,
  AutonomousDatabaseWalletFile,
  RestoreAutonomousDatabaseDetails,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams,
  AutonomousDatabasesShrinkOptionalParams,
  AutonomousDatabasesRestoreOptionalParams,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesUpdateOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a AutonomousDatabases operations. */
export interface AutonomousDatabasesOperations {
  /** Perform ChangeDisasterRecoveryConfiguration action on Autonomous Database */
  changeDisasterRecoveryConfiguration: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: DisasterRecoveryConfigurationDetails,
    options?: AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** This operation shrinks the current allocated storage down to the current actual used data storage. */
  shrink: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesShrinkOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Restores an Autonomous Database based on the provided request parameters. */
  restore: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: RestoreAutonomousDatabaseDetails,
    options?: AutonomousDatabasesRestoreOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Generate wallet action on Autonomous Database */
  generateWallet: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: GenerateAutonomousDatabaseWalletDetails,
    options?: AutonomousDatabasesGenerateWalletOptionalParams,
  ) => Promise<AutonomousDatabaseWalletFile>;
  /** Perform failover action on Autonomous Database */
  failover: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesFailoverOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Perform switchover action on Autonomous Database */
  switchover: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesSwitchoverOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** List AutonomousDatabase resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AutonomousDatabasesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabase>;
  /** Create a AutonomousDatabase */
  createOrUpdate: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    resource: AutonomousDatabase,
    options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Delete a AutonomousDatabase */
  delete: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a AutonomousDatabase */
  update: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    properties: AutonomousDatabaseUpdate,
    options?: AutonomousDatabasesUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Get a AutonomousDatabase */
  get: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesGetOptionalParams,
  ) => Promise<AutonomousDatabase>;
  /** List AutonomousDatabase resources by subscription ID */
  listBySubscription: (
    options?: AutonomousDatabasesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabase>;
}

function _getAutonomousDatabases(context: DatabaseContext) {
  return {
    changeDisasterRecoveryConfiguration: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: DisasterRecoveryConfigurationDetails,
      options?: AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams,
    ) =>
      autonomousDatabasesChangeDisasterRecoveryConfiguration(
        context,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    shrink: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesShrinkOptionalParams,
    ) => autonomousDatabasesShrink(context, resourceGroupName, autonomousdatabasename, options),
    restore: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: RestoreAutonomousDatabaseDetails,
      options?: AutonomousDatabasesRestoreOptionalParams,
    ) =>
      autonomousDatabasesRestore(context, resourceGroupName, autonomousdatabasename, body, options),
    generateWallet: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: GenerateAutonomousDatabaseWalletDetails,
      options?: AutonomousDatabasesGenerateWalletOptionalParams,
    ) =>
      autonomousDatabasesGenerateWallet(
        context,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    failover: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: PeerDbDetails,
      options?: AutonomousDatabasesFailoverOptionalParams,
    ) =>
      autonomousDatabasesFailover(
        context,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    switchover: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: PeerDbDetails,
      options?: AutonomousDatabasesSwitchoverOptionalParams,
    ) =>
      autonomousDatabasesSwitchover(
        context,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AutonomousDatabasesListByResourceGroupOptionalParams,
    ) => autonomousDatabasesListByResourceGroup(context, resourceGroupName, options),
    createOrUpdate: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      resource: AutonomousDatabase,
      options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
    ) =>
      autonomousDatabasesCreateOrUpdate(
        context,
        resourceGroupName,
        autonomousdatabasename,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesDeleteOptionalParams,
    ) => autonomousDatabasesDelete(context, resourceGroupName, autonomousdatabasename, options),
    update: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      properties: AutonomousDatabaseUpdate,
      options?: AutonomousDatabasesUpdateOptionalParams,
    ) =>
      autonomousDatabasesUpdate(
        context,
        resourceGroupName,
        autonomousdatabasename,
        properties,
        options,
      ),
    get: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesGetOptionalParams,
    ) => autonomousDatabasesGet(context, resourceGroupName, autonomousdatabasename, options),
    listBySubscription: (options?: AutonomousDatabasesListBySubscriptionOptionalParams) =>
      autonomousDatabasesListBySubscription(context, options),
  };
}

export function _getAutonomousDatabasesOperations(
  context: DatabaseContext,
): AutonomousDatabasesOperations {
  return {
    ..._getAutonomousDatabases(context),
  };
}
