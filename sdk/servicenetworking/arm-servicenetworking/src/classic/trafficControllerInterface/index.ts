// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TrafficControllerInterfaceGetOptionalParams,
  TrafficControllerInterfaceCreateOrUpdateOptionalParams,
  TrafficControllerInterfaceUpdateOptionalParams,
  TrafficControllerInterfaceDeleteOptionalParams,
  TrafficControllerInterfaceListByResourceGroupOptionalParams,
  TrafficControllerInterfaceListBySubscriptionOptionalParams,
} from "../../api/options.js";
import { ServiceNetworkingManagementContext } from "../../api/serviceNetworkingManagementContext.js";
import {
  trafficControllerInterfaceGet,
  trafficControllerInterfaceCreateOrUpdate,
  trafficControllerInterfaceUpdate,
  trafficControllerInterfaceDelete,
  trafficControllerInterfaceListByResourceGroup,
  trafficControllerInterfaceListBySubscription,
} from "../../api/trafficControllerInterface/index.js";
import {
  TrafficController,
  TrafficControllerUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a TrafficControllerInterface operations. */
export interface TrafficControllerInterfaceOperations {
  /** Get a TrafficController */
  get: (
    resourceGroupName: string,
    trafficControllerName: string,
    options?: TrafficControllerInterfaceGetOptionalParams,
  ) => Promise<TrafficController>;
  /** Create a TrafficController */
  createOrUpdate: (
    resourceGroupName: string,
    trafficControllerName: string,
    resource: TrafficController,
    options?: TrafficControllerInterfaceCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<TrafficController>, TrafficController>;
  /** Update a TrafficController */
  update: (
    resourceGroupName: string,
    trafficControllerName: string,
    properties: TrafficControllerUpdate,
    options?: TrafficControllerInterfaceUpdateOptionalParams,
  ) => Promise<TrafficController>;
  /** Delete a TrafficController */
  delete: (
    resourceGroupName: string,
    trafficControllerName: string,
    options?: TrafficControllerInterfaceDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List TrafficController resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: TrafficControllerInterfaceListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<TrafficController>;
  /** List TrafficController resources by subscription ID */
  listBySubscription: (
    options?: TrafficControllerInterfaceListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<TrafficController>;
}

export function getTrafficControllerInterface(
  context: ServiceNetworkingManagementContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      trafficControllerName: string,
      options?: TrafficControllerInterfaceGetOptionalParams,
    ) =>
      trafficControllerInterfaceGet(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      trafficControllerName: string,
      resource: TrafficController,
      options?: TrafficControllerInterfaceCreateOrUpdateOptionalParams,
    ) =>
      trafficControllerInterfaceCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      trafficControllerName: string,
      properties: TrafficControllerUpdate,
      options?: TrafficControllerInterfaceUpdateOptionalParams,
    ) =>
      trafficControllerInterfaceUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      trafficControllerName: string,
      options?: TrafficControllerInterfaceDeleteOptionalParams,
    ) =>
      trafficControllerInterfaceDelete(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: TrafficControllerInterfaceListByResourceGroupOptionalParams,
    ) =>
      trafficControllerInterfaceListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: TrafficControllerInterfaceListBySubscriptionOptionalParams,
    ) =>
      trafficControllerInterfaceListBySubscription(
        context,
        subscriptionId,
        options,
      ),
  };
}

export function getTrafficControllerInterfaceOperations(
  context: ServiceNetworkingManagementContext,
  subscriptionId: string,
): TrafficControllerInterfaceOperations {
  return {
    ...getTrafficControllerInterface(context, subscriptionId),
  };
}
