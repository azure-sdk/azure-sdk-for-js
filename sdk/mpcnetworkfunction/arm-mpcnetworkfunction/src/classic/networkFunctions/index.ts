// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  NetworkFunctionResource,
  NetworkFunctionResourceTagsUpdate,
} from "../../models/models.js";
import {
  networkFunctionsGet,
  networkFunctionsCreateOrUpdate,
  networkFunctionsUpdateTags,
  networkFunctionsDelete,
  networkFunctionsListByResourceGroup,
  networkFunctionsListBySubscription,
} from "../../api/networkFunctions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  NetworkFunctionsGetOptionalParams,
  NetworkFunctionsCreateOrUpdateOptionalParams,
  NetworkFunctionsUpdateTagsOptionalParams,
  NetworkFunctionsDeleteOptionalParams,
  NetworkFunctionsListByResourceGroupOptionalParams,
  NetworkFunctionsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a NetworkFunctions operations. */
export interface NetworkFunctionsOperations {
  /** Get a NetworkFunctionResource */
  get: (
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsGetOptionalParams,
  ) => Promise<NetworkFunctionResource>;
  /** Create a NetworkFunctionResource */
  createOrUpdate: (
    resourceGroupName: string,
    networkFunctionName: string,
    resource: NetworkFunctionResource,
    options?: NetworkFunctionsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<NetworkFunctionResource>,
    NetworkFunctionResource
  >;
  /** Update a NetworkFunctionResource */
  updateTags: (
    resourceGroupName: string,
    networkFunctionName: string,
    properties: NetworkFunctionResourceTagsUpdate,
    options?: NetworkFunctionsUpdateTagsOptionalParams,
  ) => Promise<NetworkFunctionResource>;
  /** Delete a NetworkFunctionResource */
  delete: (
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsDeleteOptionalParams,
  ) => Promise<void>;
  /** List NetworkFunctionResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: NetworkFunctionsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkFunctionResource>;
  /** List NetworkFunctionResource resources by subscription ID */
  listBySubscription: (
    options?: NetworkFunctionsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkFunctionResource>;
}

export function getNetworkFunctions(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      networkFunctionName: string,
      options?: NetworkFunctionsGetOptionalParams,
    ) =>
      networkFunctionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        networkFunctionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      networkFunctionName: string,
      resource: NetworkFunctionResource,
      options?: NetworkFunctionsCreateOrUpdateOptionalParams,
    ) =>
      networkFunctionsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        networkFunctionName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      networkFunctionName: string,
      properties: NetworkFunctionResourceTagsUpdate,
      options?: NetworkFunctionsUpdateTagsOptionalParams,
    ) =>
      networkFunctionsUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        networkFunctionName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      networkFunctionName: string,
      options?: NetworkFunctionsDeleteOptionalParams,
    ) =>
      networkFunctionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        networkFunctionName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: NetworkFunctionsListByResourceGroupOptionalParams,
    ) =>
      networkFunctionsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: NetworkFunctionsListBySubscriptionOptionalParams,
    ) => networkFunctionsListBySubscription(context, subscriptionId, options),
  };
}

export function getNetworkFunctionsOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): NetworkFunctionsOperations {
  return {
    ...getNetworkFunctions(context, subscriptionId),
  };
}
