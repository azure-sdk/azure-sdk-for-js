// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementContext } from "../../api/standbyPoolManagementContext.js";
import {
  StandbyVirtualMachinePoolResource,
  StandbyVirtualMachinePoolResourceUpdate,
} from "../../models/models.js";
import {
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsGetOptionalParams,
} from "../../api/standbyVirtualMachinePools/options.js";
import {
  standbyVirtualMachinePoolsListBySubscription,
  standbyVirtualMachinePoolsListByResourceGroup,
  standbyVirtualMachinePoolsUpdate,
  standbyVirtualMachinePoolsDelete,
  standbyVirtualMachinePoolsCreateOrUpdate,
  standbyVirtualMachinePoolsGet,
} from "../../api/standbyVirtualMachinePools/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a StandbyVirtualMachinePools operations. */
export interface StandbyVirtualMachinePoolsOperations {
  /** List StandbyVirtualMachinePoolResource resources by subscription ID */
  listBySubscription: (
    options?: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource>;
  /** List StandbyVirtualMachinePoolResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource>;
  /** Update a StandbyVirtualMachinePoolResource */
  update: (
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    properties: StandbyVirtualMachinePoolResourceUpdate,
    options?: StandbyVirtualMachinePoolsUpdateOptionalParams,
  ) => Promise<StandbyVirtualMachinePoolResource>;
  /** Delete a StandbyVirtualMachinePoolResource */
  delete: (
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    options?: StandbyVirtualMachinePoolsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a StandbyVirtualMachinePoolResource */
  createOrUpdate: (
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    resource: StandbyVirtualMachinePoolResource,
    options?: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<StandbyVirtualMachinePoolResource>,
    StandbyVirtualMachinePoolResource
  >;
  /** Get a StandbyVirtualMachinePoolResource */
  get: (
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    options?: StandbyVirtualMachinePoolsGetOptionalParams,
  ) => Promise<StandbyVirtualMachinePoolResource>;
}

function _getStandbyVirtualMachinePools(context: StandbyPoolManagementContext) {
  return {
    listBySubscription: (options?: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams) =>
      standbyVirtualMachinePoolsListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
    ) => standbyVirtualMachinePoolsListByResourceGroup(context, resourceGroupName, options),
    update: (
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      properties: StandbyVirtualMachinePoolResourceUpdate,
      options?: StandbyVirtualMachinePoolsUpdateOptionalParams,
    ) =>
      standbyVirtualMachinePoolsUpdate(
        context,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      options?: StandbyVirtualMachinePoolsDeleteOptionalParams,
    ) =>
      standbyVirtualMachinePoolsDelete(
        context,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      resource: StandbyVirtualMachinePoolResource,
      options?: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
    ) =>
      standbyVirtualMachinePoolsCreateOrUpdate(
        context,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      options?: StandbyVirtualMachinePoolsGetOptionalParams,
    ) =>
      standbyVirtualMachinePoolsGet(
        context,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
  };
}

export function _getStandbyVirtualMachinePoolsOperations(
  context: StandbyPoolManagementContext,
): StandbyVirtualMachinePoolsOperations {
  return {
    ..._getStandbyVirtualMachinePools(context),
  };
}
