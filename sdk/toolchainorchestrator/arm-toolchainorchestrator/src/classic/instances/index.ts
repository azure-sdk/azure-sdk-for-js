// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import { Instance, InstanceTagsUpdate } from "../../models/models.js";
import {
  instancesGet,
  instancesCreateOrUpdate,
  instancesUpdate,
  instancesDelete,
  instancesListByResourceGroup,
  instancesListBySubscription,
} from "../../api/instances/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  InstancesGetOptionalParams,
  InstancesCreateOrUpdateOptionalParams,
  InstancesUpdateOptionalParams,
  InstancesDeleteOptionalParams,
  InstancesListByResourceGroupOptionalParams,
  InstancesListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Instances operations. */
export interface InstancesOperations {
  /** Returns details of specified Instance resource. */
  get: (
    resourceGroupName: string,
    instanceName: string,
    options?: InstancesGetOptionalParams,
  ) => Promise<Instance>;
  /** Creates new or updates existing Instance resource. */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    resource: Instance,
    options?: InstancesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Instance>, Instance>;
  /** Updates existing Instance resource. */
  update: (
    resourceGroupName: string,
    instanceName: string,
    properties: InstanceTagsUpdate,
    options?: InstancesUpdateOptionalParams,
  ) => PollerLike<OperationState<Instance>, Instance>;
  /** Deletes specified Instance resource. */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    options?: InstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of Instances resources within the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: InstancesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Instance>;
  /** Lists Instances resources within an Azure subscription. */
  listBySubscription: (
    options?: InstancesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Instance>;
}

export function getInstances(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      instanceName: string,
      options?: InstancesGetOptionalParams,
    ) =>
      instancesGet(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      resource: Instance,
      options?: InstancesCreateOrUpdateOptionalParams,
    ) =>
      instancesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      instanceName: string,
      properties: InstanceTagsUpdate,
      options?: InstancesUpdateOptionalParams,
    ) =>
      instancesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      options?: InstancesDeleteOptionalParams,
    ) =>
      instancesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: InstancesListByResourceGroupOptionalParams,
    ) =>
      instancesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (options?: InstancesListBySubscriptionOptionalParams) =>
      instancesListBySubscription(context, subscriptionId, options),
  };
}

export function getInstancesOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): InstancesOperations {
  return {
    ...getInstances(context, subscriptionId),
  };
}
