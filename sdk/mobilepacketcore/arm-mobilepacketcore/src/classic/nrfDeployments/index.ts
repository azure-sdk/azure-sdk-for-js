// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  NrfDeploymentResource,
  NrfDeploymentResourceTagsUpdate,
} from "../../models/models.js";
import {
  nrfDeploymentsGet,
  nrfDeploymentsCreateOrUpdate,
  nrfDeploymentsUpdateTags,
  nrfDeploymentsDelete,
  nrfDeploymentsListByResourceGroup,
  nrfDeploymentsListBySubscription,
} from "../../api/nrfDeployments/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  NrfDeploymentsGetOptionalParams,
  NrfDeploymentsCreateOrUpdateOptionalParams,
  NrfDeploymentsUpdateTagsOptionalParams,
  NrfDeploymentsDeleteOptionalParams,
  NrfDeploymentsListByResourceGroupOptionalParams,
  NrfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a NrfDeployments operations. */
export interface NrfDeploymentsOperations {
  /** Get a NrfDeploymentResource */
  get: (
    resourceGroupName: string,
    nrfDeploymentName: string,
    options?: NrfDeploymentsGetOptionalParams,
  ) => Promise<NrfDeploymentResource>;
  /** Create a NrfDeploymentResource */
  createOrUpdate: (
    resourceGroupName: string,
    nrfDeploymentName: string,
    resource: NrfDeploymentResource,
    options?: NrfDeploymentsCreateOrUpdateOptionalParams,
  ) => Promise<NrfDeploymentResource>;
  /** Update a NrfDeploymentResource */
  updateTags: (
    resourceGroupName: string,
    nrfDeploymentName: string,
    properties: NrfDeploymentResourceTagsUpdate,
    options?: NrfDeploymentsUpdateTagsOptionalParams,
  ) => Promise<NrfDeploymentResource>;
  /** Delete a NrfDeploymentResource */
  delete: (
    resourceGroupName: string,
    nrfDeploymentName: string,
    options?: NrfDeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List all Network Repository Function Deployments by Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: NrfDeploymentsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<NrfDeploymentResource>;
  /** List all Network Repository Function Deployments by Subscription ID. */
  listBySubscription: (
    options?: NrfDeploymentsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<NrfDeploymentResource>;
}

export function getNrfDeployments(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      nrfDeploymentName: string,
      options?: NrfDeploymentsGetOptionalParams,
    ) =>
      nrfDeploymentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        nrfDeploymentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      nrfDeploymentName: string,
      resource: NrfDeploymentResource,
      options?: NrfDeploymentsCreateOrUpdateOptionalParams,
    ) =>
      nrfDeploymentsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        nrfDeploymentName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      nrfDeploymentName: string,
      properties: NrfDeploymentResourceTagsUpdate,
      options?: NrfDeploymentsUpdateTagsOptionalParams,
    ) =>
      nrfDeploymentsUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        nrfDeploymentName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      nrfDeploymentName: string,
      options?: NrfDeploymentsDeleteOptionalParams,
    ) =>
      nrfDeploymentsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        nrfDeploymentName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: NrfDeploymentsListByResourceGroupOptionalParams,
    ) =>
      nrfDeploymentsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: NrfDeploymentsListBySubscriptionOptionalParams,
    ) => nrfDeploymentsListBySubscription(context, subscriptionId, options),
  };
}

export function getNrfDeploymentsOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): NrfDeploymentsOperations {
  return {
    ...getNrfDeployments(context, subscriptionId),
  };
}
