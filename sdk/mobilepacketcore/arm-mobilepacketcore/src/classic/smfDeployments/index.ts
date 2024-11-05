// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  SmfDeploymentResource,
  SmfDeploymentResourceTagsUpdate,
} from "../../models/models.js";
import {
  smfDeploymentsGet,
  smfDeploymentsCreateOrUpdate,
  smfDeploymentsUpdateTags,
  smfDeploymentsDelete,
  smfDeploymentsListByResourceGroup,
  smfDeploymentsListBySubscription,
} from "../../api/smfDeployments/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SmfDeploymentsGetOptionalParams,
  SmfDeploymentsCreateOrUpdateOptionalParams,
  SmfDeploymentsUpdateTagsOptionalParams,
  SmfDeploymentsDeleteOptionalParams,
  SmfDeploymentsListByResourceGroupOptionalParams,
  SmfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a SmfDeployments operations. */
export interface SmfDeploymentsOperations {
  /** Get a SmfDeploymentResource */
  get: (
    resourceGroupName: string,
    smfDeploymentName: string,
    options?: SmfDeploymentsGetOptionalParams,
  ) => Promise<SmfDeploymentResource>;
  /** Create a SmfDeploymentResource */
  createOrUpdate: (
    resourceGroupName: string,
    smfDeploymentName: string,
    resource: SmfDeploymentResource,
    options?: SmfDeploymentsCreateOrUpdateOptionalParams,
  ) => Promise<SmfDeploymentResource>;
  /** Update a SmfDeploymentResource */
  updateTags: (
    resourceGroupName: string,
    smfDeploymentName: string,
    properties: SmfDeploymentResourceTagsUpdate,
    options?: SmfDeploymentsUpdateTagsOptionalParams,
  ) => Promise<SmfDeploymentResource>;
  /** Delete a SmfDeploymentResource */
  delete: (
    resourceGroupName: string,
    smfDeploymentName: string,
    options?: SmfDeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List all Session Management Function Deployments by Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SmfDeploymentsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SmfDeploymentResource>;
  /** List all Session Management Function Deployments by Subscription ID. */
  listBySubscription: (
    options?: SmfDeploymentsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SmfDeploymentResource>;
}

export function getSmfDeployments(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      smfDeploymentName: string,
      options?: SmfDeploymentsGetOptionalParams,
    ) =>
      smfDeploymentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        smfDeploymentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      smfDeploymentName: string,
      resource: SmfDeploymentResource,
      options?: SmfDeploymentsCreateOrUpdateOptionalParams,
    ) =>
      smfDeploymentsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        smfDeploymentName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      smfDeploymentName: string,
      properties: SmfDeploymentResourceTagsUpdate,
      options?: SmfDeploymentsUpdateTagsOptionalParams,
    ) =>
      smfDeploymentsUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        smfDeploymentName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      smfDeploymentName: string,
      options?: SmfDeploymentsDeleteOptionalParams,
    ) =>
      smfDeploymentsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        smfDeploymentName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SmfDeploymentsListByResourceGroupOptionalParams,
    ) =>
      smfDeploymentsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: SmfDeploymentsListBySubscriptionOptionalParams,
    ) => smfDeploymentsListBySubscription(context, subscriptionId, options),
  };
}

export function getSmfDeploymentsOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): SmfDeploymentsOperations {
  return {
    ...getSmfDeployments(context, subscriptionId),
  };
}
