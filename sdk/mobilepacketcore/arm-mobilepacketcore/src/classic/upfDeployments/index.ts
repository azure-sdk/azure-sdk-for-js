// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  UpfDeploymentResource,
  UpfDeploymentResourceTagsUpdate,
} from "../../models/models.js";
import {
  upfDeploymentsGet,
  upfDeploymentsCreateOrUpdate,
  upfDeploymentsUpdateTags,
  upfDeploymentsDelete,
  upfDeploymentsListByResourceGroup,
  upfDeploymentsListBySubscription,
} from "../../api/upfDeployments/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  UpfDeploymentsGetOptionalParams,
  UpfDeploymentsCreateOrUpdateOptionalParams,
  UpfDeploymentsUpdateTagsOptionalParams,
  UpfDeploymentsDeleteOptionalParams,
  UpfDeploymentsListByResourceGroupOptionalParams,
  UpfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a UpfDeployments operations. */
export interface UpfDeploymentsOperations {
  /** Get a UpfDeploymentResource */
  get: (
    resourceGroupName: string,
    upfDeploymentName: string,
    options?: UpfDeploymentsGetOptionalParams,
  ) => Promise<UpfDeploymentResource>;
  /** Create a UpfDeploymentResource */
  createOrUpdate: (
    resourceGroupName: string,
    upfDeploymentName: string,
    resource: UpfDeploymentResource,
    options?: UpfDeploymentsCreateOrUpdateOptionalParams,
  ) => Promise<UpfDeploymentResource>;
  /** Update a UpfDeploymentResource */
  updateTags: (
    resourceGroupName: string,
    upfDeploymentName: string,
    properties: UpfDeploymentResourceTagsUpdate,
    options?: UpfDeploymentsUpdateTagsOptionalParams,
  ) => Promise<UpfDeploymentResource>;
  /** Delete a UpfDeploymentResource */
  delete: (
    resourceGroupName: string,
    upfDeploymentName: string,
    options?: UpfDeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List all User Plane Function Deployments by Resource ID. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: UpfDeploymentsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<UpfDeploymentResource>;
  /** List all User Plane Function Deployments by Subscription ID. */
  listBySubscription: (
    options?: UpfDeploymentsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<UpfDeploymentResource>;
}

export function getUpfDeployments(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      upfDeploymentName: string,
      options?: UpfDeploymentsGetOptionalParams,
    ) =>
      upfDeploymentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        upfDeploymentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      upfDeploymentName: string,
      resource: UpfDeploymentResource,
      options?: UpfDeploymentsCreateOrUpdateOptionalParams,
    ) =>
      upfDeploymentsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        upfDeploymentName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      upfDeploymentName: string,
      properties: UpfDeploymentResourceTagsUpdate,
      options?: UpfDeploymentsUpdateTagsOptionalParams,
    ) =>
      upfDeploymentsUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        upfDeploymentName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      upfDeploymentName: string,
      options?: UpfDeploymentsDeleteOptionalParams,
    ) =>
      upfDeploymentsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        upfDeploymentName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: UpfDeploymentsListByResourceGroupOptionalParams,
    ) =>
      upfDeploymentsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: UpfDeploymentsListBySubscriptionOptionalParams,
    ) => upfDeploymentsListBySubscription(context, subscriptionId, options),
  };
}

export function getUpfDeploymentsOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): UpfDeploymentsOperations {
  return {
    ...getUpfDeployments(context, subscriptionId),
  };
}
