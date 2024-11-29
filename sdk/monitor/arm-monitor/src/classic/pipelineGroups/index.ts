// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorContext } from "../../api/monitorContext.js";
import {
  PipelineGroupsGetOptionalParams,
  PipelineGroupsCreateOrUpdateOptionalParams,
  PipelineGroupsDeleteOptionalParams,
  PipelineGroupsUpdateOptionalParams,
  PipelineGroupsListByResourceGroupOptionalParams,
  PipelineGroupsListBySubscriptionOptionalParams,
} from "../../api/options.js";
import {
  pipelineGroupsGet,
  pipelineGroupsCreateOrUpdate,
  pipelineGroupsDelete,
  pipelineGroupsUpdate,
  pipelineGroupsListByResourceGroup,
  pipelineGroupsListBySubscription,
} from "../../api/pipelineGroups/index.js";
import { PipelineGroup, PipelineGroupUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PipelineGroups operations. */
export interface PipelineGroupsOperations {
  /** Returns the specific pipeline group instance. */
  get: (
    resourceGroupName: string,
    pipelineGroupName: string,
    options?: PipelineGroupsGetOptionalParams,
  ) => Promise<PipelineGroup>;
  /** Create or update a pipeline group instance. */
  createOrUpdate: (
    resourceGroupName: string,
    pipelineGroupName: string,
    resource: PipelineGroup,
    options?: PipelineGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
  /** Delete a pipeline group instance. */
  delete: (
    resourceGroupName: string,
    pipelineGroupName: string,
    options?: PipelineGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a pipeline group instance */
  update: (
    resourceGroupName: string,
    pipelineGroupName: string,
    properties: PipelineGroupUpdate,
    options?: PipelineGroupsUpdateOptionalParams,
  ) => PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
  /** Lists all workspaces in the specified resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PipelineGroupsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PipelineGroup>;
  /** Lists all workspaces in the specified subscription */
  listBySubscription: (
    options?: PipelineGroupsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PipelineGroup>;
}

export function getPipelineGroups(
  context: MonitorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      pipelineGroupName: string,
      options?: PipelineGroupsGetOptionalParams,
    ) =>
      pipelineGroupsGet(
        context,
        subscriptionId,
        resourceGroupName,
        pipelineGroupName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      pipelineGroupName: string,
      resource: PipelineGroup,
      options?: PipelineGroupsCreateOrUpdateOptionalParams,
    ) =>
      pipelineGroupsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        pipelineGroupName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      pipelineGroupName: string,
      options?: PipelineGroupsDeleteOptionalParams,
    ) =>
      pipelineGroupsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        pipelineGroupName,
        options,
      ),
    update: (
      resourceGroupName: string,
      pipelineGroupName: string,
      properties: PipelineGroupUpdate,
      options?: PipelineGroupsUpdateOptionalParams,
    ) =>
      pipelineGroupsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        pipelineGroupName,
        properties,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PipelineGroupsListByResourceGroupOptionalParams,
    ) =>
      pipelineGroupsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: PipelineGroupsListBySubscriptionOptionalParams,
    ) => pipelineGroupsListBySubscription(context, subscriptionId, options),
  };
}

export function getPipelineGroupsOperations(
  context: MonitorContext,
  subscriptionId: string,
): PipelineGroupsOperations {
  return {
    ...getPipelineGroups(context, subscriptionId),
  };
}
