// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  ClusterServiceResource,
  ClusterServiceResourceTagsUpdate,
} from "../../models/models.js";
import {
  clusterServicesGet,
  clusterServicesCreateOrUpdate,
  clusterServicesUpdateTags,
  clusterServicesDelete,
  clusterServicesListByResourceGroup,
  clusterServicesListBySubscription,
} from "../../api/clusterServices/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ClusterServicesGetOptionalParams,
  ClusterServicesCreateOrUpdateOptionalParams,
  ClusterServicesUpdateTagsOptionalParams,
  ClusterServicesDeleteOptionalParams,
  ClusterServicesListByResourceGroupOptionalParams,
  ClusterServicesListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a ClusterServices operations. */
export interface ClusterServicesOperations {
  /** Get a ClusterServiceResource */
  get: (
    resourceGroupName: string,
    clusterServiceName: string,
    options?: ClusterServicesGetOptionalParams,
  ) => Promise<ClusterServiceResource>;
  /** Create a ClusterServiceResource */
  createOrUpdate: (
    resourceGroupName: string,
    clusterServiceName: string,
    resource: ClusterServiceResource,
    options?: ClusterServicesCreateOrUpdateOptionalParams,
  ) => Promise<ClusterServiceResource>;
  /** Update a ClusterServiceResource */
  updateTags: (
    resourceGroupName: string,
    clusterServiceName: string,
    properties: ClusterServiceResourceTagsUpdate,
    options?: ClusterServicesUpdateTagsOptionalParams,
  ) => Promise<ClusterServiceResource>;
  /** Delete a ClusterServiceResource */
  delete: (
    resourceGroupName: string,
    clusterServiceName: string,
    options?: ClusterServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List all Cluster Services by Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ClusterServicesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ClusterServiceResource>;
  /** List all Cluster Services by Subscription ID. */
  listBySubscription: (
    options?: ClusterServicesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<ClusterServiceResource>;
}

export function getClusterServices(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      clusterServiceName: string,
      options?: ClusterServicesGetOptionalParams,
    ) =>
      clusterServicesGet(
        context,
        subscriptionId,
        resourceGroupName,
        clusterServiceName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      clusterServiceName: string,
      resource: ClusterServiceResource,
      options?: ClusterServicesCreateOrUpdateOptionalParams,
    ) =>
      clusterServicesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        clusterServiceName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      clusterServiceName: string,
      properties: ClusterServiceResourceTagsUpdate,
      options?: ClusterServicesUpdateTagsOptionalParams,
    ) =>
      clusterServicesUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        clusterServiceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      clusterServiceName: string,
      options?: ClusterServicesDeleteOptionalParams,
    ) =>
      clusterServicesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        clusterServiceName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ClusterServicesListByResourceGroupOptionalParams,
    ) =>
      clusterServicesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: ClusterServicesListBySubscriptionOptionalParams,
    ) => clusterServicesListBySubscription(context, subscriptionId, options),
  };
}

export function getClusterServicesOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): ClusterServicesOperations {
  return {
    ...getClusterServices(context, subscriptionId),
  };
}
