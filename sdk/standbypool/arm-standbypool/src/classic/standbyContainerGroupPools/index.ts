// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementContext } from "../../api/standbyPoolManagementContext.js";
import {
  StandbyContainerGroupPoolResource,
  StandbyContainerGroupPoolResourceUpdate,
} from "../../models/models.js";
import {
  StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
  StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  StandbyContainerGroupPoolsUpdateOptionalParams,
  StandbyContainerGroupPoolsDeleteOptionalParams,
  StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  StandbyContainerGroupPoolsGetOptionalParams,
} from "../../api/standbyContainerGroupPools/options.js";
import {
  standbyContainerGroupPoolsListBySubscription,
  standbyContainerGroupPoolsListByResourceGroup,
  standbyContainerGroupPoolsUpdate,
  standbyContainerGroupPoolsDelete,
  standbyContainerGroupPoolsCreateOrUpdate,
  standbyContainerGroupPoolsGet,
} from "../../api/standbyContainerGroupPools/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a StandbyContainerGroupPools operations. */
export interface StandbyContainerGroupPoolsOperations {
  /** List StandbyContainerGroupPoolResource resources by subscription ID */
  listBySubscription: (
    options?: StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyContainerGroupPoolResource>;
  /** List StandbyContainerGroupPoolResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyContainerGroupPoolResource>;
  /** Update a StandbyContainerGroupPoolResource */
  update: (
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    properties: StandbyContainerGroupPoolResourceUpdate,
    options?: StandbyContainerGroupPoolsUpdateOptionalParams,
  ) => Promise<StandbyContainerGroupPoolResource>;
  /** Delete a StandbyContainerGroupPoolResource */
  delete: (
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    options?: StandbyContainerGroupPoolsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a StandbyContainerGroupPoolResource */
  createOrUpdate: (
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    resource: StandbyContainerGroupPoolResource,
    options?: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<StandbyContainerGroupPoolResource>,
    StandbyContainerGroupPoolResource
  >;
  /** Get a StandbyContainerGroupPoolResource */
  get: (
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    options?: StandbyContainerGroupPoolsGetOptionalParams,
  ) => Promise<StandbyContainerGroupPoolResource>;
}

function _getStandbyContainerGroupPools(context: StandbyPoolManagementContext) {
  return {
    listBySubscription: (options?: StandbyContainerGroupPoolsListBySubscriptionOptionalParams) =>
      standbyContainerGroupPoolsListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
    ) => standbyContainerGroupPoolsListByResourceGroup(context, resourceGroupName, options),
    update: (
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      properties: StandbyContainerGroupPoolResourceUpdate,
      options?: StandbyContainerGroupPoolsUpdateOptionalParams,
    ) =>
      standbyContainerGroupPoolsUpdate(
        context,
        resourceGroupName,
        standbyContainerGroupPoolName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      options?: StandbyContainerGroupPoolsDeleteOptionalParams,
    ) =>
      standbyContainerGroupPoolsDelete(
        context,
        resourceGroupName,
        standbyContainerGroupPoolName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      resource: StandbyContainerGroupPoolResource,
      options?: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
    ) =>
      standbyContainerGroupPoolsCreateOrUpdate(
        context,
        resourceGroupName,
        standbyContainerGroupPoolName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      options?: StandbyContainerGroupPoolsGetOptionalParams,
    ) =>
      standbyContainerGroupPoolsGet(
        context,
        resourceGroupName,
        standbyContainerGroupPoolName,
        options,
      ),
  };
}

export function _getStandbyContainerGroupPoolsOperations(
  context: StandbyPoolManagementContext,
): StandbyContainerGroupPoolsOperations {
  return {
    ..._getStandbyContainerGroupPools(context),
  };
}
