// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardContext } from "../../api/dashboardContext.js";
import {
  ManagedGrafana,
  ManagedGrafanaUpdateParameters,
  EnterpriseDetails,
  GrafanaAvailablePluginListResponse,
} from "../../models/models.js";
import {
  ManagedGrafanasRefreshOptionalParams,
  ManagedGrafanasFetchAvailablePluginsOptionalParams,
  ManagedGrafanasCheckEnterpriseDetailsOptionalParams,
  ManagedGrafanasListOptionalParams,
  ManagedGrafanasListByResourceGroupOptionalParams,
  ManagedGrafanasDeleteOptionalParams,
  ManagedGrafanasUpdateOptionalParams,
  ManagedGrafanasCreateOptionalParams,
  ManagedGrafanasGetOptionalParams,
} from "../../api/managedGrafanas/options.js";
import {
  refresh,
  fetchAvailablePlugins,
  checkEnterpriseDetails,
  list,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/managedGrafanas/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ManagedGrafanas operations. */
export interface ManagedGrafanasOperations {
  /** Refresh and sync managed private endpoints of a grafana resource to latest state. */
  refresh: (
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedGrafanasRefreshOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** A synchronous resource action. */
  fetchAvailablePlugins: (
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedGrafanasFetchAvailablePluginsOptionalParams,
  ) => Promise<GrafanaAvailablePluginListResponse>;
  /** Retrieve enterprise add-on details information */
  checkEnterpriseDetails: (
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedGrafanasCheckEnterpriseDetailsOptionalParams,
  ) => Promise<EnterpriseDetails>;
  /** List all resources of workspaces for Grafana under the specified subscription. */
  list: (options?: ManagedGrafanasListOptionalParams) => PagedAsyncIterableIterator<ManagedGrafana>;
  /** List all resources of workspaces for Grafana under the specified resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ManagedGrafanasListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ManagedGrafana>;
  /** Delete a workspace for Grafana resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedGrafanasDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a workspace for Grafana resource. */
  update: (
    resourceGroupName: string,
    workspaceName: string,
    requestBodyParameters: ManagedGrafanaUpdateParameters,
    options?: ManagedGrafanasUpdateOptionalParams,
  ) => Promise<ManagedGrafana>;
  /** Create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana. */
  create: (
    resourceGroupName: string,
    workspaceName: string,
    requestBodyParameters: ManagedGrafana,
    options?: ManagedGrafanasCreateOptionalParams,
  ) => PollerLike<OperationState<ManagedGrafana>, ManagedGrafana>;
  /** Get the properties of a specific workspace for Grafana resource. */
  get: (
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedGrafanasGetOptionalParams,
  ) => Promise<ManagedGrafana>;
}

function _getManagedGrafanas(context: DashboardContext) {
  return {
    refresh: (
      resourceGroupName: string,
      workspaceName: string,
      options?: ManagedGrafanasRefreshOptionalParams,
    ) => refresh(context, resourceGroupName, workspaceName, options),
    fetchAvailablePlugins: (
      resourceGroupName: string,
      workspaceName: string,
      options?: ManagedGrafanasFetchAvailablePluginsOptionalParams,
    ) => fetchAvailablePlugins(context, resourceGroupName, workspaceName, options),
    checkEnterpriseDetails: (
      resourceGroupName: string,
      workspaceName: string,
      options?: ManagedGrafanasCheckEnterpriseDetailsOptionalParams,
    ) => checkEnterpriseDetails(context, resourceGroupName, workspaceName, options),
    list: (options?: ManagedGrafanasListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ManagedGrafanasListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      workspaceName: string,
      options?: ManagedGrafanasDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, workspaceName, options),
    update: (
      resourceGroupName: string,
      workspaceName: string,
      requestBodyParameters: ManagedGrafanaUpdateParameters,
      options?: ManagedGrafanasUpdateOptionalParams,
    ) => update(context, resourceGroupName, workspaceName, requestBodyParameters, options),
    create: (
      resourceGroupName: string,
      workspaceName: string,
      requestBodyParameters: ManagedGrafana,
      options?: ManagedGrafanasCreateOptionalParams,
    ) => create(context, resourceGroupName, workspaceName, requestBodyParameters, options),
    get: (
      resourceGroupName: string,
      workspaceName: string,
      options?: ManagedGrafanasGetOptionalParams,
    ) => get(context, resourceGroupName, workspaceName, options),
  };
}

export function _getManagedGrafanasOperations(
  context: DashboardContext,
): ManagedGrafanasOperations {
  return {
    ..._getManagedGrafanas(context),
  };
}
