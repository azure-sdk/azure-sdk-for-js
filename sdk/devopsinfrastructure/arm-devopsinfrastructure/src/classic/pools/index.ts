// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DevOpsInfrastructureContext } from "../../api/devOpsInfrastructureContext.js";
import {
  Pool,
  PoolUpdate,
  CheckNameAvailability,
  CheckNameAvailabilityResult,
} from "../../models/models.js";
import {
  PoolsCheckNameAvailabilityOptionalParams,
  PoolsListBySubscriptionOptionalParams,
  PoolsListByResourceGroupOptionalParams,
  PoolsDeleteOptionalParams,
  PoolsUpdateOptionalParams,
  PoolsCreateOrUpdateOptionalParams,
  PoolsGetOptionalParams,
} from "../../api/pools/options.js";
import {
  poolsCheckNameAvailability,
  poolsListBySubscription,
  poolsListByResourceGroup,
  poolsDelete,
  poolsUpdate,
  poolsCreateOrUpdate,
  poolsGet,
} from "../../api/pools/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Pools operations. */
export interface PoolsOperations {
  /** Checks that the pool name is valid and is not already in use. */
  checkNameAvailability: (
    body: CheckNameAvailability,
    options?: PoolsCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResult>;
  /** List Pool resources by subscription ID */
  listBySubscription: (
    options?: PoolsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Pool>;
  /** List Pool resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PoolsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Pool>;
  /** Delete a Pool */
  delete: (
    resourceGroupName: string,
    poolName: string,
    options?: PoolsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a Pool */
  update: (
    resourceGroupName: string,
    poolName: string,
    properties: PoolUpdate,
    options?: PoolsUpdateOptionalParams,
  ) => PollerLike<OperationState<Pool>, Pool>;
  /** Create a Pool */
  createOrUpdate: (
    resourceGroupName: string,
    poolName: string,
    resource: Pool,
    options?: PoolsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Pool>, Pool>;
  /** Get a Pool */
  get: (
    resourceGroupName: string,
    poolName: string,
    options?: PoolsGetOptionalParams,
  ) => Promise<Pool>;
}

function _getPools(context: DevOpsInfrastructureContext) {
  return {
    checkNameAvailability: (
      body: CheckNameAvailability,
      options?: PoolsCheckNameAvailabilityOptionalParams,
    ) => poolsCheckNameAvailability(context, body, options),
    listBySubscription: (options?: PoolsListBySubscriptionOptionalParams) =>
      poolsListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PoolsListByResourceGroupOptionalParams,
    ) => poolsListByResourceGroup(context, resourceGroupName, options),
    delete: (resourceGroupName: string, poolName: string, options?: PoolsDeleteOptionalParams) =>
      poolsDelete(context, resourceGroupName, poolName, options),
    update: (
      resourceGroupName: string,
      poolName: string,
      properties: PoolUpdate,
      options?: PoolsUpdateOptionalParams,
    ) => poolsUpdate(context, resourceGroupName, poolName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      poolName: string,
      resource: Pool,
      options?: PoolsCreateOrUpdateOptionalParams,
    ) => poolsCreateOrUpdate(context, resourceGroupName, poolName, resource, options),
    get: (resourceGroupName: string, poolName: string, options?: PoolsGetOptionalParams) =>
      poolsGet(context, resourceGroupName, poolName, options),
  };
}

export function _getPoolsOperations(context: DevOpsInfrastructureContext): PoolsOperations {
  return {
    ..._getPools(context),
  };
}
