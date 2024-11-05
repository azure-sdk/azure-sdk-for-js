// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  AmfDeploymentResource,
  AmfDeploymentResourceTagsUpdate,
} from "../../models/models.js";
import {
  amfDeploymentsGet,
  amfDeploymentsCreateOrUpdate,
  amfDeploymentsUpdateTags,
  amfDeploymentsDelete,
  amfDeploymentsListByResourceGroup,
  amfDeploymentsListBySubscription,
} from "../../api/amfDeployments/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AmfDeploymentsGetOptionalParams,
  AmfDeploymentsCreateOrUpdateOptionalParams,
  AmfDeploymentsUpdateTagsOptionalParams,
  AmfDeploymentsDeleteOptionalParams,
  AmfDeploymentsListByResourceGroupOptionalParams,
  AmfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a AmfDeployments operations. */
export interface AmfDeploymentsOperations {
  /** Get a AmfDeploymentResource */
  get: (
    resourceGroupName: string,
    amfDeploymentName: string,
    options?: AmfDeploymentsGetOptionalParams,
  ) => Promise<AmfDeploymentResource>;
  /** Create a AmfDeploymentResource */
  createOrUpdate: (
    resourceGroupName: string,
    amfDeploymentName: string,
    resource: AmfDeploymentResource,
    options?: AmfDeploymentsCreateOrUpdateOptionalParams,
  ) => Promise<AmfDeploymentResource>;
  /** Update a AmfDeploymentResource */
  updateTags: (
    resourceGroupName: string,
    amfDeploymentName: string,
    properties: AmfDeploymentResourceTagsUpdate,
    options?: AmfDeploymentsUpdateTagsOptionalParams,
  ) => Promise<AmfDeploymentResource>;
  /** Delete a AmfDeploymentResource */
  delete: (
    resourceGroupName: string,
    amfDeploymentName: string,
    options?: AmfDeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List all Access and Mobility Function Deployments by Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AmfDeploymentsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AmfDeploymentResource>;
  /** List all Access and Mobility Function Deployments by Subscription ID. */
  listBySubscription: (
    options?: AmfDeploymentsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AmfDeploymentResource>;
}

export function getAmfDeployments(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      amfDeploymentName: string,
      options?: AmfDeploymentsGetOptionalParams,
    ) =>
      amfDeploymentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        amfDeploymentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      amfDeploymentName: string,
      resource: AmfDeploymentResource,
      options?: AmfDeploymentsCreateOrUpdateOptionalParams,
    ) =>
      amfDeploymentsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        amfDeploymentName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      amfDeploymentName: string,
      properties: AmfDeploymentResourceTagsUpdate,
      options?: AmfDeploymentsUpdateTagsOptionalParams,
    ) =>
      amfDeploymentsUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        amfDeploymentName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      amfDeploymentName: string,
      options?: AmfDeploymentsDeleteOptionalParams,
    ) =>
      amfDeploymentsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        amfDeploymentName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AmfDeploymentsListByResourceGroupOptionalParams,
    ) =>
      amfDeploymentsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: AmfDeploymentsListBySubscriptionOptionalParams,
    ) => amfDeploymentsListBySubscription(context, subscriptionId, options),
  };
}

export function getAmfDeploymentsOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): AmfDeploymentsOperations {
  return {
    ...getAmfDeployments(context, subscriptionId),
  };
}
