// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityContext } from "../../api/hybridConnectivityContext.js";
import {
  SolutionTypesGetOptionalParams,
  SolutionTypesListByResourceGroupOptionalParams,
  SolutionTypesListBySubscriptionOptionalParams,
} from "../../api/options.js";
import {
  solutionTypesGet,
  solutionTypesListByResourceGroup,
  solutionTypesListBySubscription,
} from "../../api/solutionTypes/index.js";
import { SolutionTypeResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SolutionTypes operations. */
export interface SolutionTypesOperations {
  /** Get a SolutionTypeResource */
  get: (
    resourceGroupName: string,
    solutionType: string,
    options?: SolutionTypesGetOptionalParams,
  ) => Promise<SolutionTypeResource>;
  /** List SolutionTypeResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SolutionTypesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SolutionTypeResource>;
  /** List SolutionTypeResource resources by subscription ID */
  listBySubscription: (
    options?: SolutionTypesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SolutionTypeResource>;
}

export function getSolutionTypes(
  context: HybridConnectivityContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      solutionType: string,
      options?: SolutionTypesGetOptionalParams,
    ) =>
      solutionTypesGet(
        context,
        subscriptionId,
        resourceGroupName,
        solutionType,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SolutionTypesListByResourceGroupOptionalParams,
    ) =>
      solutionTypesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: SolutionTypesListBySubscriptionOptionalParams,
    ) => solutionTypesListBySubscription(context, subscriptionId, options),
  };
}

export function getSolutionTypesOperations(
  context: HybridConnectivityContext,
  subscriptionId: string,
): SolutionTypesOperations {
  return {
    ...getSolutionTypes(context, subscriptionId),
  };
}
