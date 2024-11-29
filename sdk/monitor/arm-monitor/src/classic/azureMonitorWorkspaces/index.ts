// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorContext } from "../../api/monitorContext.js";
import {
  azureMonitorWorkspacesGet,
  azureMonitorWorkspacesCreateOrUpdate,
  azureMonitorWorkspacesUpdate,
  azureMonitorWorkspacesDelete,
  azureMonitorWorkspacesListByResourceGroup,
  azureMonitorWorkspacesListBySubscription,
} from "../../api/azureMonitorWorkspaces/index.js";
import {
  AzureMonitorWorkspace,
  AzureMonitorWorkspaceUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AzureMonitorWorkspacesGetOptionalParams,
  AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  AzureMonitorWorkspacesUpdateOptionalParams,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a AzureMonitorWorkspaces operations. */
export interface AzureMonitorWorkspacesOperations {
  /** Returns the specific Azure Monitor workspace */
  get: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesGetOptionalParams,
  ) => Promise<AzureMonitorWorkspace>;
  /** Create or update a workspace */
  createOrUpdate: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    resource: AzureMonitorWorkspace,
    options?: AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace>;
  /** Updates part of a workspace */
  update: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    properties: AzureMonitorWorkspaceUpdate,
    options?: AzureMonitorWorkspacesUpdateOptionalParams,
  ) => Promise<AzureMonitorWorkspace>;
  /** Delete a workspace */
  delete: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Lists all workspaces in the specified resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AzureMonitorWorkspace>;
  /** Lists all workspaces in the specified subscription */
  listBySubscription: (
    options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AzureMonitorWorkspace>;
}

export function getAzureMonitorWorkspaces(
  context: MonitorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      options?: AzureMonitorWorkspacesGetOptionalParams,
    ) =>
      azureMonitorWorkspacesGet(
        context,
        subscriptionId,
        resourceGroupName,
        azureMonitorWorkspaceName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      resource: AzureMonitorWorkspace,
      options?: AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
    ) =>
      azureMonitorWorkspacesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        azureMonitorWorkspaceName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      properties: AzureMonitorWorkspaceUpdate,
      options?: AzureMonitorWorkspacesUpdateOptionalParams,
    ) =>
      azureMonitorWorkspacesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        azureMonitorWorkspaceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      options?: AzureMonitorWorkspacesDeleteOptionalParams,
    ) =>
      azureMonitorWorkspacesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        azureMonitorWorkspaceName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
    ) =>
      azureMonitorWorkspacesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
    ) =>
      azureMonitorWorkspacesListBySubscription(
        context,
        subscriptionId,
        options,
      ),
  };
}

export function getAzureMonitorWorkspacesOperations(
  context: MonitorContext,
  subscriptionId: string,
): AzureMonitorWorkspacesOperations {
  return {
    ...getAzureMonitorWorkspaces(context, subscriptionId),
  };
}
