// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorContext } from "../../api/monitorContext.js";
import {
  azureMonitorWorkspacesListBySubscription,
  azureMonitorWorkspacesListByResourceGroup,
  azureMonitorWorkspacesDelete,
  azureMonitorWorkspacesUpdate,
  azureMonitorWorkspacesCreateOrUpdate,
  azureMonitorWorkspacesGet,
} from "../../api/azureMonitorWorkspaces/index.js";
import { AzureMonitorWorkspace, AzureMonitorWorkspaceUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesUpdateOptionalParams,
  AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  AzureMonitorWorkspacesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a AzureMonitorWorkspaces operations. */
export interface AzureMonitorWorkspacesOperations {
  /** Lists all workspaces in the specified subscription */
  listBySubscription: (
    options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AzureMonitorWorkspace>;
  /** Lists all workspaces in the specified resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AzureMonitorWorkspace>;
  /** Delete a workspace */
  delete: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates part of a workspace */
  update: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    properties: AzureMonitorWorkspaceUpdate,
    options?: AzureMonitorWorkspacesUpdateOptionalParams,
  ) => Promise<AzureMonitorWorkspace>;
  /** Create or update a workspace */
  createOrUpdate: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    resource: AzureMonitorWorkspace,
    options?: AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace>;
  /** Returns the specific Azure Monitor workspace */
  get: (
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesGetOptionalParams,
  ) => Promise<AzureMonitorWorkspace>;
}

function _getAzureMonitorWorkspaces(context: MonitorContext) {
  return {
    listBySubscription: (options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams) =>
      azureMonitorWorkspacesListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
    ) => azureMonitorWorkspacesListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      options?: AzureMonitorWorkspacesDeleteOptionalParams,
    ) =>
      azureMonitorWorkspacesDelete(context, resourceGroupName, azureMonitorWorkspaceName, options),
    update: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      properties: AzureMonitorWorkspaceUpdate,
      options?: AzureMonitorWorkspacesUpdateOptionalParams,
    ) =>
      azureMonitorWorkspacesUpdate(
        context,
        resourceGroupName,
        azureMonitorWorkspaceName,
        properties,
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
        resourceGroupName,
        azureMonitorWorkspaceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      options?: AzureMonitorWorkspacesGetOptionalParams,
    ) => azureMonitorWorkspacesGet(context, resourceGroupName, azureMonitorWorkspaceName, options),
  };
}

export function _getAzureMonitorWorkspacesOperations(
  context: MonitorContext,
): AzureMonitorWorkspacesOperations {
  return {
    ..._getAzureMonitorWorkspaces(context),
  };
}
