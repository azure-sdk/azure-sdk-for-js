// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorContext } from "../../api/monitorContext.js";
import { PipelineGroup, PipelineGroupUpdate } from "../../models/models.js";
import {
  PipelineGroupsListBySubscriptionOptionalParams,
  PipelineGroupsListByResourceGroupOptionalParams,
  PipelineGroupsUpdateOptionalParams,
  PipelineGroupsDeleteOptionalParams,
  PipelineGroupsCreateOrUpdateOptionalParams,
  PipelineGroupsGetOptionalParams,
} from "../../api/pipelineGroups/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  update,
  $delete,
  createOrUpdate,
  get,
} from "../../api/pipelineGroups/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PipelineGroups operations. */
export interface PipelineGroupsOperations {
  /** Lists all workspaces in the specified subscription */
  listBySubscription: (
    options?: PipelineGroupsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PipelineGroup>;
  /** Lists all workspaces in the specified resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PipelineGroupsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PipelineGroup>;
  /** Updates a pipeline group instance */
  update: (
    resourceGroupName: string,
    pipelineGroupName: string,
    properties: PipelineGroupUpdate,
    options?: PipelineGroupsUpdateOptionalParams,
  ) => PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
  /** Delete a pipeline group instance. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    pipelineGroupName: string,
    options?: PipelineGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a pipeline group instance. */
  createOrUpdate: (
    resourceGroupName: string,
    pipelineGroupName: string,
    resource: PipelineGroup,
    options?: PipelineGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
  /** Returns the specific pipeline group instance. */
  get: (
    resourceGroupName: string,
    pipelineGroupName: string,
    options?: PipelineGroupsGetOptionalParams,
  ) => Promise<PipelineGroup>;
}

function _getPipelineGroups(context: MonitorContext) {
  return {
    listBySubscription: (options?: PipelineGroupsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PipelineGroupsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    update: (
      resourceGroupName: string,
      pipelineGroupName: string,
      properties: PipelineGroupUpdate,
      options?: PipelineGroupsUpdateOptionalParams,
    ) => update(context, resourceGroupName, pipelineGroupName, properties, options),
    delete: (
      resourceGroupName: string,
      pipelineGroupName: string,
      options?: PipelineGroupsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, pipelineGroupName, options),
    createOrUpdate: (
      resourceGroupName: string,
      pipelineGroupName: string,
      resource: PipelineGroup,
      options?: PipelineGroupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, pipelineGroupName, resource, options),
    get: (
      resourceGroupName: string,
      pipelineGroupName: string,
      options?: PipelineGroupsGetOptionalParams,
    ) => get(context, resourceGroupName, pipelineGroupName, options),
  };
}

export function _getPipelineGroupsOperations(context: MonitorContext): PipelineGroupsOperations {
  return {
    ..._getPipelineGroups(context),
  };
}
