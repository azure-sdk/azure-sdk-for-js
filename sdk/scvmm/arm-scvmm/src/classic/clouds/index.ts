// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  cloudsGet,
  cloudsCreateOrUpdate,
  cloudsUpdate,
  cloudsDelete,
  cloudsListByResourceGroup,
  cloudsListBySubscription,
} from "../../api/clouds/index.js";
import { Cloud, CloudTagsUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudsGetOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a Clouds operations. */
export interface CloudsOperations {
  /** Implements Cloud GET method. */
  get: (
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsGetOptionalParams,
  ) => Promise<Cloud>;
  /** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
  createOrUpdate: (
    resourceGroupName: string,
    cloudResourceName: string,
    resource: Cloud,
    options?: CloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  /** Updates the Clouds resource. */
  update: (
    resourceGroupName: string,
    cloudResourceName: string,
    properties: CloudTagsUpdate,
    options?: CloudsUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  /** Deregisters the ScVmm fabric cloud from Azure. */
  delete: (
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List of Clouds in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
  /** List of Clouds in a subscription. */
  listBySubscription: (
    options?: CloudsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
}

export function getClouds(context: ScVmmContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsGetOptionalParams,
    ) =>
      cloudsGet(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      cloudResourceName: string,
      resource: Cloud,
      options?: CloudsCreateOrUpdateOptionalParams,
    ) =>
      cloudsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      cloudResourceName: string,
      properties: CloudTagsUpdate,
      options?: CloudsUpdateOptionalParams,
    ) =>
      cloudsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsDeleteOptionalParams,
    ) =>
      cloudsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudsListByResourceGroupOptionalParams,
    ) =>
      cloudsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (options?: CloudsListBySubscriptionOptionalParams) =>
      cloudsListBySubscription(context, subscriptionId, options),
  };
}

export function getCloudsOperations(
  context: ScVmmContext,
  subscriptionId: string,
): CloudsOperations {
  return {
    ...getClouds(context, subscriptionId),
  };
}
