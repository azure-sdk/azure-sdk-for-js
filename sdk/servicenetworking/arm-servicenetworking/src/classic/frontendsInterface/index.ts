// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceNetworkingContext } from "../../api/serviceNetworkingContext.js";
import { Frontend, FrontendUpdate } from "../../models/models.js";
import {
  frontendsInterfaceGet,
  frontendsInterfaceCreateOrUpdate,
  frontendsInterfaceUpdate,
  frontendsInterfaceDelete,
  frontendsInterfaceListByTrafficController,
} from "../../api/frontendsInterface/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FrontendsInterfaceGetOptionalParams,
  FrontendsInterfaceCreateOrUpdateOptionalParams,
  FrontendsInterfaceUpdateOptionalParams,
  FrontendsInterfaceDeleteOptionalParams,
  FrontendsInterfaceListByTrafficControllerOptionalParams,
} from "../../models/options.js";

/** Interface representing a FrontendsInterface operations. */
export interface FrontendsInterfaceOperations {
  /** Get a Frontend */
  get: (
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    options?: FrontendsInterfaceGetOptionalParams,
  ) => Promise<Frontend>;
  /** Create a Frontend */
  createOrUpdate: (
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    resource: Frontend,
    options?: FrontendsInterfaceCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Frontend>, Frontend>;
  /** Update a Frontend */
  update: (
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    properties: FrontendUpdate,
    options?: FrontendsInterfaceUpdateOptionalParams,
  ) => Promise<Frontend>;
  /** Delete a Frontend */
  delete: (
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    options?: FrontendsInterfaceDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Frontend resources by TrafficController */
  listByTrafficController: (
    resourceGroupName: string,
    trafficControllerName: string,
    options?: FrontendsInterfaceListByTrafficControllerOptionalParams,
  ) => PagedAsyncIterableIterator<Frontend>;
}

export function getFrontendsInterface(
  context: ServiceNetworkingContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      trafficControllerName: string,
      frontendName: string,
      options?: FrontendsInterfaceGetOptionalParams,
    ) =>
      frontendsInterfaceGet(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        frontendName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      trafficControllerName: string,
      frontendName: string,
      resource: Frontend,
      options?: FrontendsInterfaceCreateOrUpdateOptionalParams,
    ) =>
      frontendsInterfaceCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        frontendName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      trafficControllerName: string,
      frontendName: string,
      properties: FrontendUpdate,
      options?: FrontendsInterfaceUpdateOptionalParams,
    ) =>
      frontendsInterfaceUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        frontendName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      trafficControllerName: string,
      frontendName: string,
      options?: FrontendsInterfaceDeleteOptionalParams,
    ) =>
      frontendsInterfaceDelete(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        frontendName,
        options,
      ),
    listByTrafficController: (
      resourceGroupName: string,
      trafficControllerName: string,
      options?: FrontendsInterfaceListByTrafficControllerOptionalParams,
    ) =>
      frontendsInterfaceListByTrafficController(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
  };
}

export function getFrontendsInterfaceOperations(
  context: ServiceNetworkingContext,
  subscriptionId: string,
): FrontendsInterfaceOperations {
  return {
    ...getFrontendsInterface(context, subscriptionId),
  };
}
