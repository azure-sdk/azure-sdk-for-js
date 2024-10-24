// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import { Activation, ActivationTagsUpdate } from "../../models/models.js";
import {
  activationsGet,
  activationsCreateOrUpdate,
  activationsUpdate,
  activationsDelete,
  activationsListByResourceGroup,
  activationsListBySubscription,
} from "../../api/activations/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ActivationsGetOptionalParams,
  ActivationsCreateOrUpdateOptionalParams,
  ActivationsUpdateOptionalParams,
  ActivationsDeleteOptionalParams,
  ActivationsListByResourceGroupOptionalParams,
  ActivationsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Activations operations. */
export interface ActivationsOperations {
  /** Returns the details of the activation. */
  get: (
    resourceGroupName: string,
    activationName: string,
    options?: ActivationsGetOptionalParams,
  ) => Promise<Activation>;
  /** Creates a new or updates an existing activation. */
  createOrUpdate: (
    resourceGroupName: string,
    activationName: string,
    resource: Activation,
    options?: ActivationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Activation>, Activation>;
  /** Updates an existing activation. */
  update: (
    resourceGroupName: string,
    activationName: string,
    properties: ActivationTagsUpdate,
    options?: ActivationsUpdateOptionalParams,
  ) => PollerLike<OperationState<Activation>, Activation>;
  /** Deletes a specified activation. */
  delete: (
    resourceGroupName: string,
    activationName: string,
    options?: ActivationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of activations within the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ActivationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Activation>;
  /** Lists activations within an Azure subscription. */
  listBySubscription: (
    options?: ActivationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Activation>;
}

export function getActivations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      activationName: string,
      options?: ActivationsGetOptionalParams,
    ) =>
      activationsGet(
        context,
        subscriptionId,
        resourceGroupName,
        activationName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      activationName: string,
      resource: Activation,
      options?: ActivationsCreateOrUpdateOptionalParams,
    ) =>
      activationsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        activationName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      activationName: string,
      properties: ActivationTagsUpdate,
      options?: ActivationsUpdateOptionalParams,
    ) =>
      activationsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        activationName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      activationName: string,
      options?: ActivationsDeleteOptionalParams,
    ) =>
      activationsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        activationName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ActivationsListByResourceGroupOptionalParams,
    ) =>
      activationsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: ActivationsListBySubscriptionOptionalParams,
    ) => activationsListBySubscription(context, subscriptionId, options),
  };
}

export function getActivationsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): ActivationsOperations {
  return {
    ...getActivations(context, subscriptionId),
  };
}
