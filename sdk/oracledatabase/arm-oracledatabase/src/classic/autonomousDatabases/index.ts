// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  autonomousDatabasesListBySubscription,
  autonomousDatabasesGet,
  autonomousDatabasesUpdate,
  autonomousDatabasesDelete,
  autonomousDatabasesCreateOrUpdate,
  autonomousDatabasesListByResourceGroup,
  autonomousDatabasesSwitchover,
  autonomousDatabasesFailover,
  autonomousDatabasesGenerateWallet,
  autonomousDatabasesRestore,
  autonomousDatabasesShrink,
} from "../../api/autonomousDatabases/index.js";
import {
  AutonomousDatabase,
  AutonomousDatabaseUpdate,
  PeerDbDetails,
  GenerateAutonomousDatabaseWalletDetails,
  AutonomousDatabaseWalletFile,
  RestoreAutonomousDatabaseDetails,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabasesListBySubscriptionOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesUpdateOptionalParams,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesRestoreOptionalParams,
  AutonomousDatabasesShrinkOptionalParams,
} from "../../api/options.js";

/** Interface representing a AutonomousDatabases operations. */
export interface AutonomousDatabasesOperations {
  /** List AutonomousDatabase resources by subscription ID */
  listBySubscription: (
    options?: AutonomousDatabasesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabase>;
  /** Get a AutonomousDatabase */
  get: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesGetOptionalParams,
  ) => Promise<AutonomousDatabase>;
  /** Update a AutonomousDatabase */
  update: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    properties: AutonomousDatabaseUpdate,
    options?: AutonomousDatabasesUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Delete a AutonomousDatabase */
  delete: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a AutonomousDatabase */
  createOrUpdate: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    resource: AutonomousDatabase,
    options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** List AutonomousDatabase resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AutonomousDatabasesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabase>;
  /** Perform switchover action on Autonomous Database */
  switchover: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesSwitchoverOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Perform failover action on Autonomous Database */
  failover: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesFailoverOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** Generate wallet action on Autonomous Database */
  generateWallet: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: GenerateAutonomousDatabaseWalletDetails,
    options?: AutonomousDatabasesGenerateWalletOptionalParams,
  ) => Promise<AutonomousDatabaseWalletFile>;
  /** Restores an Autonomous Database based on the provided request parameters. */
  restore: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: RestoreAutonomousDatabaseDetails,
    options?: AutonomousDatabasesRestoreOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  /** This operation shrinks the current allocated storage down to the current actual used data storage. */
  shrink: (
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesShrinkOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function getAutonomousDatabases(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    listBySubscription: (
      options?: AutonomousDatabasesListBySubscriptionOptionalParams,
    ) =>
      autonomousDatabasesListBySubscription(context, subscriptionId, options),
    get: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesGetOptionalParams,
    ) =>
      autonomousDatabasesGet(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    update: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      properties: AutonomousDatabaseUpdate,
      options?: AutonomousDatabasesUpdateOptionalParams,
    ) =>
      autonomousDatabasesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesDeleteOptionalParams,
    ) =>
      autonomousDatabasesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      resource: AutonomousDatabase,
      options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
    ) =>
      autonomousDatabasesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        resource,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AutonomousDatabasesListByResourceGroupOptionalParams,
    ) =>
      autonomousDatabasesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
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
        subscriptionId,
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
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    generateWallet: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: GenerateAutonomousDatabaseWalletDetails,
      options?: AutonomousDatabasesGenerateWalletOptionalParams,
    ) =>
      autonomousDatabasesGenerateWallet(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    restore: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: RestoreAutonomousDatabaseDetails,
      options?: AutonomousDatabasesRestoreOptionalParams,
    ) =>
      autonomousDatabasesRestore(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    shrink: (
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesShrinkOptionalParams,
    ) =>
      autonomousDatabasesShrink(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
  };
}

export function getAutonomousDatabasesOperations(
  context: DatabaseContext,
  subscriptionId: string,
): AutonomousDatabasesOperations {
  return {
    ...getAutonomousDatabases(context, subscriptionId),
  };
}
