// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorContext } from "../../api/monitorContext.js";
import { AzureMonitorWorkspace, AzureMonitorWorkspaceUpdate } from "../../models/models.js";
import {
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesUpdateOptionalParams,
  AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  AzureMonitorWorkspacesGetOptionalParams,
} from "../../api/azureMonitorWorkspaces/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/azureMonitorWorkspaces/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      options?: AzureMonitorWorkspacesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, azureMonitorWorkspaceName, options),
    update: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      properties: AzureMonitorWorkspaceUpdate,
      options?: AzureMonitorWorkspacesUpdateOptionalParams,
    ) => update(context, resourceGroupName, azureMonitorWorkspaceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      resource: AzureMonitorWorkspace,
      options?: AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, azureMonitorWorkspaceName, resource, options),
    get: (
      resourceGroupName: string,
      azureMonitorWorkspaceName: string,
      options?: AzureMonitorWorkspacesGetOptionalParams,
    ) => get(context, resourceGroupName, azureMonitorWorkspaceName, options),
  };
}

export function _getAzureMonitorWorkspacesOperations(
  context: MonitorContext,
): AzureMonitorWorkspacesOperations {
  return {
    ..._getAzureMonitorWorkspaces(context),
  };
}
