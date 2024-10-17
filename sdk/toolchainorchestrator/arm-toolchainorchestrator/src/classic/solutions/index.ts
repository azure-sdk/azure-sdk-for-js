// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import { Solution, SolutionTagsUpdate } from "../../models/models.js";
import {
  solutionsGet,
  solutionsCreateOrUpdate,
  solutionsUpdate,
  solutionsDelete,
  solutionsListByResourceGroup,
  solutionsListBySubscription,
} from "../../api/solutions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SolutionsGetOptionalParams,
  SolutionsCreateOrUpdateOptionalParams,
  SolutionsUpdateOptionalParams,
  SolutionsDeleteOptionalParams,
  SolutionsListByResourceGroupOptionalParams,
  SolutionsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Solutions operations. */
export interface SolutionsOperations {
  /** Returns details of specified Solution resource. */
  get: (
    resourceGroupName: string,
    solutionName: string,
    options?: SolutionsGetOptionalParams,
  ) => Promise<Solution>;
  /** Creates new or updates existing Solution resource. */
  createOrUpdate: (
    resourceGroupName: string,
    solutionName: string,
    resource: Solution,
    options?: SolutionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Solution>, Solution>;
  /** Updates existing Solution resource. */
  update: (
    resourceGroupName: string,
    solutionName: string,
    properties: SolutionTagsUpdate,
    options?: SolutionsUpdateOptionalParams,
  ) => PollerLike<OperationState<Solution>, Solution>;
  /** Deletes specified Solution resource. */
  delete: (
    resourceGroupName: string,
    solutionName: string,
    options?: SolutionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of Solution resources within the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SolutionsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Solution>;
  /** Lists Solutions resources within an Azure subscription. */
  listBySubscription: (
    options?: SolutionsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Solution>;
}

export function getSolutions(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      solutionName: string,
      options?: SolutionsGetOptionalParams,
    ) =>
      solutionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      solutionName: string,
      resource: Solution,
      options?: SolutionsCreateOrUpdateOptionalParams,
    ) =>
      solutionsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      solutionName: string,
      properties: SolutionTagsUpdate,
      options?: SolutionsUpdateOptionalParams,
    ) =>
      solutionsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      solutionName: string,
      options?: SolutionsDeleteOptionalParams,
    ) =>
      solutionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SolutionsListByResourceGroupOptionalParams,
    ) =>
      solutionsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (options?: SolutionsListBySubscriptionOptionalParams) =>
      solutionsListBySubscription(context, subscriptionId, options),
  };
}

export function getSolutionsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): SolutionsOperations {
  return {
    ...getSolutions(context, subscriptionId),
  };
}
