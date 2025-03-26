// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import { InstanceResource, InstancePatchModel } from "../../models/models.js";
import {
  InstanceListBySubscriptionOptionalParams,
  InstanceListByResourceGroupOptionalParams,
  InstanceDeleteOptionalParams,
  InstanceUpdateOptionalParams,
  InstanceCreateOrUpdateOptionalParams,
  InstanceGetOptionalParams,
} from "../../api/instance/options.js";
import {
  instanceListBySubscription,
  instanceListByResourceGroup,
  instanceDelete,
  instanceUpdate,
  instanceCreateOrUpdate,
  instanceGet,
} from "../../api/instance/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Instance operations. */
export interface InstanceOperations {
  /** List InstanceResource resources by subscription ID */
  listBySubscription: (
    options?: InstanceListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<InstanceResource>;
  /** List InstanceResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: InstanceListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<InstanceResource>;
  /** Delete a InstanceResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    options?: InstanceDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a InstanceResource */
  update: (
    resourceGroupName: string,
    instanceName: string,
    properties: InstancePatchModel,
    options?: InstanceUpdateOptionalParams,
  ) => Promise<InstanceResource>;
  /** Create a InstanceResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    resource: InstanceResource,
    options?: InstanceCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<InstanceResource>, InstanceResource>;
  /** Get a InstanceResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    options?: InstanceGetOptionalParams,
  ) => Promise<InstanceResource>;
}

function _getInstance(context: IoTOperationsContext) {
  return {
    listBySubscription: (options?: InstanceListBySubscriptionOptionalParams) =>
      instanceListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: InstanceListByResourceGroupOptionalParams,
    ) => instanceListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      options?: InstanceDeleteOptionalParams,
    ) => instanceDelete(context, resourceGroupName, instanceName, options),
    update: (
      resourceGroupName: string,
      instanceName: string,
      properties: InstancePatchModel,
      options?: InstanceUpdateOptionalParams,
    ) => instanceUpdate(context, resourceGroupName, instanceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      resource: InstanceResource,
      options?: InstanceCreateOrUpdateOptionalParams,
    ) => instanceCreateOrUpdate(context, resourceGroupName, instanceName, resource, options),
    get: (resourceGroupName: string, instanceName: string, options?: InstanceGetOptionalParams) =>
      instanceGet(context, resourceGroupName, instanceName, options),
  };
}

export function _getInstanceOperations(context: IoTOperationsContext): InstanceOperations {
  return {
    ..._getInstance(context),
  };
}
