// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceNetworkingContext } from "../../api/serviceNetworkingContext.js";
import { Association, AssociationUpdate } from "../../models/models.js";
import {
  associationsInterfaceGet,
  associationsInterfaceCreateOrUpdate,
  associationsInterfaceUpdate,
  associationsInterfaceDelete,
  associationsInterfaceListByTrafficController,
} from "../../api/associationsInterface/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AssociationsInterfaceGetOptionalParams,
  AssociationsInterfaceCreateOrUpdateOptionalParams,
  AssociationsInterfaceUpdateOptionalParams,
  AssociationsInterfaceDeleteOptionalParams,
  AssociationsInterfaceListByTrafficControllerOptionalParams,
} from "../../models/options.js";

/** Interface representing a AssociationsInterface operations. */
export interface AssociationsInterfaceOperations {
  /** Get a Association */
  get: (
    resourceGroupName: string,
    trafficControllerName: string,
    associationName: string,
    options?: AssociationsInterfaceGetOptionalParams,
  ) => Promise<Association>;
  /** Create a Association */
  createOrUpdate: (
    resourceGroupName: string,
    trafficControllerName: string,
    associationName: string,
    resource: Association,
    options?: AssociationsInterfaceCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Association>, Association>;
  /** Update a Association */
  update: (
    resourceGroupName: string,
    trafficControllerName: string,
    associationName: string,
    properties: AssociationUpdate,
    options?: AssociationsInterfaceUpdateOptionalParams,
  ) => Promise<Association>;
  /** Delete a Association */
  delete: (
    resourceGroupName: string,
    trafficControllerName: string,
    associationName: string,
    options?: AssociationsInterfaceDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Association resources by TrafficController */
  listByTrafficController: (
    resourceGroupName: string,
    trafficControllerName: string,
    options?: AssociationsInterfaceListByTrafficControllerOptionalParams,
  ) => PagedAsyncIterableIterator<Association>;
}

export function getAssociationsInterface(
  context: ServiceNetworkingContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      trafficControllerName: string,
      associationName: string,
      options?: AssociationsInterfaceGetOptionalParams,
    ) =>
      associationsInterfaceGet(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        associationName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      trafficControllerName: string,
      associationName: string,
      resource: Association,
      options?: AssociationsInterfaceCreateOrUpdateOptionalParams,
    ) =>
      associationsInterfaceCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        associationName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      trafficControllerName: string,
      associationName: string,
      properties: AssociationUpdate,
      options?: AssociationsInterfaceUpdateOptionalParams,
    ) =>
      associationsInterfaceUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        associationName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      trafficControllerName: string,
      associationName: string,
      options?: AssociationsInterfaceDeleteOptionalParams,
    ) =>
      associationsInterfaceDelete(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        associationName,
        options,
      ),
    listByTrafficController: (
      resourceGroupName: string,
      trafficControllerName: string,
      options?: AssociationsInterfaceListByTrafficControllerOptionalParams,
    ) =>
      associationsInterfaceListByTrafficController(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
  };
}

export function getAssociationsInterfaceOperations(
  context: ServiceNetworkingContext,
  subscriptionId: string,
): AssociationsInterfaceOperations {
  return {
    ...getAssociationsInterface(context, subscriptionId),
  };
}
