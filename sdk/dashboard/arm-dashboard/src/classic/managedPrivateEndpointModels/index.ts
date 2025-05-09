// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardContext } from "../../api/dashboardContext.js";
import {
  ManagedPrivateEndpointModel,
  ManagedPrivateEndpointUpdateParameters,
} from "../../models/models.js";
import {
  ManagedPrivateEndpointModelsListOptionalParams,
  ManagedPrivateEndpointModelsDeleteOptionalParams,
  ManagedPrivateEndpointModelsUpdateOptionalParams,
  ManagedPrivateEndpointModelsCreateOptionalParams,
  ManagedPrivateEndpointModelsGetOptionalParams,
} from "../../api/managedPrivateEndpointModels/options.js";
import {
  list,
  $delete,
  update,
  create,
  get,
} from "../../api/managedPrivateEndpointModels/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ManagedPrivateEndpointModels operations. */
export interface ManagedPrivateEndpointModelsOperations {
  /** List all managed private endpoints of a grafana resource. */
  list: (
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedPrivateEndpointModelsListOptionalParams,
  ) => PagedAsyncIterableIterator<ManagedPrivateEndpointModel>;
  /** Delete a managed private endpoint for a grafana resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointModelsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a managed private endpoint for an existing grafana resource. */
  update: (
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    requestBodyParameters: ManagedPrivateEndpointUpdateParameters,
    options?: ManagedPrivateEndpointModelsUpdateOptionalParams,
  ) => PollerLike<OperationState<ManagedPrivateEndpointModel>, ManagedPrivateEndpointModel>;
  /** Create or update a managed private endpoint for a grafana resource. */
  create: (
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    requestBodyParameters: ManagedPrivateEndpointModel,
    options?: ManagedPrivateEndpointModelsCreateOptionalParams,
  ) => PollerLike<OperationState<ManagedPrivateEndpointModel>, ManagedPrivateEndpointModel>;
  /** Get a specific managed private endpoint of a grafana resource. */
  get: (
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointModelsGetOptionalParams,
  ) => Promise<ManagedPrivateEndpointModel>;
}

function _getManagedPrivateEndpointModels(context: DashboardContext) {
  return {
    list: (
      resourceGroupName: string,
      workspaceName: string,
      options?: ManagedPrivateEndpointModelsListOptionalParams,
    ) => list(context, resourceGroupName, workspaceName, options),
    delete: (
      resourceGroupName: string,
      workspaceName: string,
      managedPrivateEndpointName: string,
      options?: ManagedPrivateEndpointModelsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, workspaceName, managedPrivateEndpointName, options),
    update: (
      resourceGroupName: string,
      workspaceName: string,
      managedPrivateEndpointName: string,
      requestBodyParameters: ManagedPrivateEndpointUpdateParameters,
      options?: ManagedPrivateEndpointModelsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        workspaceName,
        managedPrivateEndpointName,
        requestBodyParameters,
        options,
      ),
    create: (
      resourceGroupName: string,
      workspaceName: string,
      managedPrivateEndpointName: string,
      requestBodyParameters: ManagedPrivateEndpointModel,
      options?: ManagedPrivateEndpointModelsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        workspaceName,
        managedPrivateEndpointName,
        requestBodyParameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      workspaceName: string,
      managedPrivateEndpointName: string,
      options?: ManagedPrivateEndpointModelsGetOptionalParams,
    ) => get(context, resourceGroupName, workspaceName, managedPrivateEndpointName, options),
  };
}

export function _getManagedPrivateEndpointModelsOperations(
  context: DashboardContext,
): ManagedPrivateEndpointModelsOperations {
  return {
    ..._getManagedPrivateEndpointModels(context),
  };
}
