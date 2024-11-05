// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  NssfDeploymentResource,
  NssfDeploymentResourceTagsUpdate,
} from "../../models/models.js";
import {
  nssfDeploymentsGet,
  nssfDeploymentsCreateOrUpdate,
  nssfDeploymentsUpdateTags,
  nssfDeploymentsDelete,
  nssfDeploymentsListByResourceGroup,
  nssfDeploymentsListBySubscription,
} from "../../api/nssfDeployments/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  NssfDeploymentsGetOptionalParams,
  NssfDeploymentsCreateOrUpdateOptionalParams,
  NssfDeploymentsUpdateTagsOptionalParams,
  NssfDeploymentsDeleteOptionalParams,
  NssfDeploymentsListByResourceGroupOptionalParams,
  NssfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a NssfDeployments operations. */
export interface NssfDeploymentsOperations {
  /** Get a NssfDeploymentResource */
  get: (
    resourceGroupName: string,
    nssfDeploymentName: string,
    options?: NssfDeploymentsGetOptionalParams,
  ) => Promise<NssfDeploymentResource>;
  /** Create a NssfDeploymentResource */
  createOrUpdate: (
    resourceGroupName: string,
    nssfDeploymentName: string,
    resource: NssfDeploymentResource,
    options?: NssfDeploymentsCreateOrUpdateOptionalParams,
  ) => Promise<NssfDeploymentResource>;
  /** Update a NssfDeploymentResource */
  updateTags: (
    resourceGroupName: string,
    nssfDeploymentName: string,
    properties: NssfDeploymentResourceTagsUpdate,
    options?: NssfDeploymentsUpdateTagsOptionalParams,
  ) => Promise<NssfDeploymentResource>;
  /** Delete a NssfDeploymentResource */
  delete: (
    resourceGroupName: string,
    nssfDeploymentName: string,
    options?: NssfDeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List all Network Slice Selection Function Deployments by Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: NssfDeploymentsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<NssfDeploymentResource>;
  /** List all Network Slice Selection Function Deployments by Subscription ID. */
  listBySubscription: (
    options?: NssfDeploymentsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<NssfDeploymentResource>;
}

export function getNssfDeployments(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      nssfDeploymentName: string,
      options?: NssfDeploymentsGetOptionalParams,
    ) =>
      nssfDeploymentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        nssfDeploymentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      nssfDeploymentName: string,
      resource: NssfDeploymentResource,
      options?: NssfDeploymentsCreateOrUpdateOptionalParams,
    ) =>
      nssfDeploymentsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        nssfDeploymentName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      nssfDeploymentName: string,
      properties: NssfDeploymentResourceTagsUpdate,
      options?: NssfDeploymentsUpdateTagsOptionalParams,
    ) =>
      nssfDeploymentsUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        nssfDeploymentName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      nssfDeploymentName: string,
      options?: NssfDeploymentsDeleteOptionalParams,
    ) =>
      nssfDeploymentsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        nssfDeploymentName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: NssfDeploymentsListByResourceGroupOptionalParams,
    ) =>
      nssfDeploymentsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: NssfDeploymentsListBySubscriptionOptionalParams,
    ) => nssfDeploymentsListBySubscription(context, subscriptionId, options),
  };
}

export function getNssfDeploymentsOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): NssfDeploymentsOperations {
  return {
    ...getNssfDeployments(context, subscriptionId),
  };
}
