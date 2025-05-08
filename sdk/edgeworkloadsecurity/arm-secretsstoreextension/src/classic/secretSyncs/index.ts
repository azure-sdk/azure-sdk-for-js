// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SecretsStoreExtensionManagementContext } from "../../api/secretsStoreExtensionManagementContext.js";
import { SecretSync, SecretSyncUpdate } from "../../models/models.js";
import {
  SecretSyncsListBySubscriptionOptionalParams,
  SecretSyncsListByResourceGroupOptionalParams,
  SecretSyncsDeleteOptionalParams,
  SecretSyncsUpdateOptionalParams,
  SecretSyncsCreateOrUpdateOptionalParams,
  SecretSyncsGetOptionalParams,
} from "../../api/secretSyncs/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/secretSyncs/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SecretSyncs operations. */
export interface SecretSyncsOperations {
  /** Lists the SecretSync instances within an Azure subscription. */
  listBySubscription: (
    options?: SecretSyncsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SecretSync>;
  /** Lists the SecretSync instances within a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SecretSyncsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SecretSync>;
  /** Deletes a SecretSync instance. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    secretSyncName: string,
    options?: SecretSyncsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a SecretSync instance. */
  update: (
    resourceGroupName: string,
    secretSyncName: string,
    properties: SecretSyncUpdate,
    options?: SecretSyncsUpdateOptionalParams,
  ) => PollerLike<OperationState<SecretSync>, SecretSync>;
  /** Creates new or updates a SecretSync instance. */
  createOrUpdate: (
    resourceGroupName: string,
    secretSyncName: string,
    resource: SecretSync,
    options?: SecretSyncsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<SecretSync>, SecretSync>;
  /** Gets the properties of a SecretSync instance. */
  get: (
    resourceGroupName: string,
    secretSyncName: string,
    options?: SecretSyncsGetOptionalParams,
  ) => Promise<SecretSync>;
}

function _getSecretSyncs(context: SecretsStoreExtensionManagementContext) {
  return {
    listBySubscription: (options?: SecretSyncsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SecretSyncsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      secretSyncName: string,
      options?: SecretSyncsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, secretSyncName, options),
    update: (
      resourceGroupName: string,
      secretSyncName: string,
      properties: SecretSyncUpdate,
      options?: SecretSyncsUpdateOptionalParams,
    ) => update(context, resourceGroupName, secretSyncName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      secretSyncName: string,
      resource: SecretSync,
      options?: SecretSyncsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, secretSyncName, resource, options),
    get: (
      resourceGroupName: string,
      secretSyncName: string,
      options?: SecretSyncsGetOptionalParams,
    ) => get(context, resourceGroupName, secretSyncName, options),
  };
}

export function _getSecretSyncsOperations(
  context: SecretsStoreExtensionManagementContext,
): SecretSyncsOperations {
  return {
    ..._getSecretSyncs(context),
  };
}
