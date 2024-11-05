// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MobilePacketCoreContext } from "../../api/mobilePacketCoreContext.js";
import {
  ObservabilityServiceResource,
  ObservabilityServiceResourceTagsUpdate,
} from "../../models/models.js";
import {
  observabilityServicesGet,
  observabilityServicesCreateOrUpdate,
  observabilityServicesUpdateTags,
  observabilityServicesDelete,
  observabilityServicesListByResourceGroup,
  observabilityServicesListBySubscription,
} from "../../api/observabilityServices/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ObservabilityServicesGetOptionalParams,
  ObservabilityServicesCreateOrUpdateOptionalParams,
  ObservabilityServicesUpdateTagsOptionalParams,
  ObservabilityServicesDeleteOptionalParams,
  ObservabilityServicesListByResourceGroupOptionalParams,
  ObservabilityServicesListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a ObservabilityServices operations. */
export interface ObservabilityServicesOperations {
  /** Get a ObservabilityServiceResource */
  get: (
    resourceGroupName: string,
    observabilityServiceName: string,
    options?: ObservabilityServicesGetOptionalParams,
  ) => Promise<ObservabilityServiceResource>;
  /** Create a ObservabilityServiceResource */
  createOrUpdate: (
    resourceGroupName: string,
    observabilityServiceName: string,
    resource: ObservabilityServiceResource,
    options?: ObservabilityServicesCreateOrUpdateOptionalParams,
  ) => Promise<ObservabilityServiceResource>;
  /** Update a ObservabilityServiceResource */
  updateTags: (
    resourceGroupName: string,
    observabilityServiceName: string,
    properties: ObservabilityServiceResourceTagsUpdate,
    options?: ObservabilityServicesUpdateTagsOptionalParams,
  ) => Promise<ObservabilityServiceResource>;
  /** Delete a ObservabilityServiceResource */
  delete: (
    resourceGroupName: string,
    observabilityServiceName: string,
    options?: ObservabilityServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List all Observability Services by Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ObservabilityServicesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ObservabilityServiceResource>;
  /** List all Observability Services by Subscription ID. */
  listBySubscription: (
    options?: ObservabilityServicesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<ObservabilityServiceResource>;
}

export function getObservabilityServices(
  context: MobilePacketCoreContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      observabilityServiceName: string,
      options?: ObservabilityServicesGetOptionalParams,
    ) =>
      observabilityServicesGet(
        context,
        subscriptionId,
        resourceGroupName,
        observabilityServiceName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      observabilityServiceName: string,
      resource: ObservabilityServiceResource,
      options?: ObservabilityServicesCreateOrUpdateOptionalParams,
    ) =>
      observabilityServicesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        observabilityServiceName,
        resource,
        options,
      ),
    updateTags: (
      resourceGroupName: string,
      observabilityServiceName: string,
      properties: ObservabilityServiceResourceTagsUpdate,
      options?: ObservabilityServicesUpdateTagsOptionalParams,
    ) =>
      observabilityServicesUpdateTags(
        context,
        subscriptionId,
        resourceGroupName,
        observabilityServiceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      observabilityServiceName: string,
      options?: ObservabilityServicesDeleteOptionalParams,
    ) =>
      observabilityServicesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        observabilityServiceName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ObservabilityServicesListByResourceGroupOptionalParams,
    ) =>
      observabilityServicesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: ObservabilityServicesListBySubscriptionOptionalParams,
    ) =>
      observabilityServicesListBySubscription(context, subscriptionId, options),
  };
}

export function getObservabilityServicesOperations(
  context: MobilePacketCoreContext,
  subscriptionId: string,
): ObservabilityServicesOperations {
  return {
    ...getObservabilityServices(context, subscriptionId),
  };
}
