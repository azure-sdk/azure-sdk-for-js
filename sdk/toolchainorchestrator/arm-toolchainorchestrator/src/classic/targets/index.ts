// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import { Target, TargetTagsUpdate } from "../../models/models.js";
import {
  targetsGet,
  targetsCreateOrUpdate,
  targetsUpdate,
  targetsDelete,
  targetsListByResourceGroup,
  targetsListBySubscription,
} from "../../api/targets/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  TargetsGetOptionalParams,
  TargetsCreateOrUpdateOptionalParams,
  TargetsUpdateOptionalParams,
  TargetsDeleteOptionalParams,
  TargetsListByResourceGroupOptionalParams,
  TargetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Targets operations. */
export interface TargetsOperations {
  /** Returns details of specified Target resource. */
  get: (
    resourceGroupName: string,
    targetName: string,
    options?: TargetsGetOptionalParams,
  ) => Promise<Target>;
  /** Creates new or updates existing Target resource. */
  createOrUpdate: (
    resourceGroupName: string,
    targetName: string,
    resource: Target,
    options?: TargetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Target>, Target>;
  /** Updates existing Target resource. */
  update: (
    resourceGroupName: string,
    targetName: string,
    properties: TargetTagsUpdate,
    options?: TargetsUpdateOptionalParams,
  ) => PollerLike<OperationState<Target>, Target>;
  /** Deletes specified Target resource. */
  delete: (
    resourceGroupName: string,
    targetName: string,
    options?: TargetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of Target resources within the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: TargetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Target>;
  /** Lists Targets resources within an Azure subscription. */
  listBySubscription: (
    options?: TargetsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Target>;
}

export function getTargets(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      targetName: string,
      options?: TargetsGetOptionalParams,
    ) =>
      targetsGet(
        context,
        subscriptionId,
        resourceGroupName,
        targetName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      targetName: string,
      resource: Target,
      options?: TargetsCreateOrUpdateOptionalParams,
    ) =>
      targetsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        targetName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      targetName: string,
      properties: TargetTagsUpdate,
      options?: TargetsUpdateOptionalParams,
    ) =>
      targetsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        targetName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      targetName: string,
      options?: TargetsDeleteOptionalParams,
    ) =>
      targetsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        targetName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: TargetsListByResourceGroupOptionalParams,
    ) =>
      targetsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (options?: TargetsListBySubscriptionOptionalParams) =>
      targetsListBySubscription(context, subscriptionId, options),
  };
}

export function getTargetsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): TargetsOperations {
  return {
    ...getTargets(context, subscriptionId),
  };
}
