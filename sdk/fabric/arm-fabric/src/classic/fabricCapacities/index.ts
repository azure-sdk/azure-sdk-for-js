// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FabricContext } from "../../api/fabricContext.js";
import {
  FabricCapacity,
  FabricCapacityUpdate,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  RpSkuDetailsForExistingResource,
  RpSkuDetailsForNewResource,
  Quota,
} from "../../models/models.js";
import {
  FabricCapacitiesListUsagesOptionalParams,
  FabricCapacitiesListSkusOptionalParams,
  FabricCapacitiesListSkusForCapacityOptionalParams,
  FabricCapacitiesCheckNameAvailabilityOptionalParams,
  FabricCapacitiesSuspendOptionalParams,
  FabricCapacitiesResumeOptionalParams,
  FabricCapacitiesListBySubscriptionOptionalParams,
  FabricCapacitiesListByResourceGroupOptionalParams,
  FabricCapacitiesDeleteOptionalParams,
  FabricCapacitiesUpdateOptionalParams,
  FabricCapacitiesCreateOrUpdateOptionalParams,
  FabricCapacitiesGetOptionalParams,
} from "../../api/fabricCapacities/options.js";
import {
  fabricCapacitiesListUsages,
  fabricCapacitiesListSkus,
  fabricCapacitiesListSkusForCapacity,
  fabricCapacitiesCheckNameAvailability,
  fabricCapacitiesSuspend,
  fabricCapacitiesResume,
  fabricCapacitiesListBySubscription,
  fabricCapacitiesListByResourceGroup,
  fabricCapacitiesDelete,
  fabricCapacitiesUpdate,
  fabricCapacitiesCreateOrUpdate,
  fabricCapacitiesGet,
} from "../../api/fabricCapacities/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a FabricCapacities operations. */
export interface FabricCapacitiesOperations {
  /** List the current consumption and limit in this location for the provided subscription */
  listUsages: (
    location: string,
    options?: FabricCapacitiesListUsagesOptionalParams,
  ) => PagedAsyncIterableIterator<Quota>;
  /** List eligible SKUs for Microsoft Fabric resource provider */
  listSkus: (
    options?: FabricCapacitiesListSkusOptionalParams,
  ) => PagedAsyncIterableIterator<RpSkuDetailsForNewResource>;
  /** List eligible SKUs for a Microsoft Fabric resource */
  listSkusForCapacity: (
    resourceGroupName: string,
    capacityName: string,
    options?: FabricCapacitiesListSkusForCapacityOptionalParams,
  ) => PagedAsyncIterableIterator<RpSkuDetailsForExistingResource>;
  /** Implements local CheckNameAvailability operations */
  checkNameAvailability: (
    location: string,
    body: CheckNameAvailabilityRequest,
    options?: FabricCapacitiesCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  /** Suspend operation of the specified Fabric capacity instance. */
  suspend: (
    resourceGroupName: string,
    capacityName: string,
    options?: FabricCapacitiesSuspendOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Resume operation of the specified Fabric capacity instance. */
  resume: (
    resourceGroupName: string,
    capacityName: string,
    options?: FabricCapacitiesResumeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List FabricCapacity resources by subscription ID */
  listBySubscription: (
    options?: FabricCapacitiesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<FabricCapacity>;
  /** List FabricCapacity resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: FabricCapacitiesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<FabricCapacity>;
  /** Delete a FabricCapacity */
  delete: (
    resourceGroupName: string,
    capacityName: string,
    options?: FabricCapacitiesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a FabricCapacity */
  update: (
    resourceGroupName: string,
    capacityName: string,
    properties: FabricCapacityUpdate,
    options?: FabricCapacitiesUpdateOptionalParams,
  ) => PollerLike<OperationState<FabricCapacity>, FabricCapacity>;
  /** Create a FabricCapacity */
  createOrUpdate: (
    resourceGroupName: string,
    capacityName: string,
    resource: FabricCapacity,
    options?: FabricCapacitiesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FabricCapacity>, FabricCapacity>;
  /** Get a FabricCapacity */
  get: (
    resourceGroupName: string,
    capacityName: string,
    options?: FabricCapacitiesGetOptionalParams,
  ) => Promise<FabricCapacity>;
}

function _getFabricCapacities(context: FabricContext) {
  return {
    listUsages: (location: string, options?: FabricCapacitiesListUsagesOptionalParams) =>
      fabricCapacitiesListUsages(context, location, options),
    listSkus: (options?: FabricCapacitiesListSkusOptionalParams) =>
      fabricCapacitiesListSkus(context, options),
    listSkusForCapacity: (
      resourceGroupName: string,
      capacityName: string,
      options?: FabricCapacitiesListSkusForCapacityOptionalParams,
    ) => fabricCapacitiesListSkusForCapacity(context, resourceGroupName, capacityName, options),
    checkNameAvailability: (
      location: string,
      body: CheckNameAvailabilityRequest,
      options?: FabricCapacitiesCheckNameAvailabilityOptionalParams,
    ) => fabricCapacitiesCheckNameAvailability(context, location, body, options),
    suspend: (
      resourceGroupName: string,
      capacityName: string,
      options?: FabricCapacitiesSuspendOptionalParams,
    ) => fabricCapacitiesSuspend(context, resourceGroupName, capacityName, options),
    resume: (
      resourceGroupName: string,
      capacityName: string,
      options?: FabricCapacitiesResumeOptionalParams,
    ) => fabricCapacitiesResume(context, resourceGroupName, capacityName, options),
    listBySubscription: (options?: FabricCapacitiesListBySubscriptionOptionalParams) =>
      fabricCapacitiesListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: FabricCapacitiesListByResourceGroupOptionalParams,
    ) => fabricCapacitiesListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      capacityName: string,
      options?: FabricCapacitiesDeleteOptionalParams,
    ) => fabricCapacitiesDelete(context, resourceGroupName, capacityName, options),
    update: (
      resourceGroupName: string,
      capacityName: string,
      properties: FabricCapacityUpdate,
      options?: FabricCapacitiesUpdateOptionalParams,
    ) => fabricCapacitiesUpdate(context, resourceGroupName, capacityName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      capacityName: string,
      resource: FabricCapacity,
      options?: FabricCapacitiesCreateOrUpdateOptionalParams,
    ) =>
      fabricCapacitiesCreateOrUpdate(context, resourceGroupName, capacityName, resource, options),
    get: (
      resourceGroupName: string,
      capacityName: string,
      options?: FabricCapacitiesGetOptionalParams,
    ) => fabricCapacitiesGet(context, resourceGroupName, capacityName, options),
  };
}

export function _getFabricCapacitiesOperations(context: FabricContext): FabricCapacitiesOperations {
  return {
    ..._getFabricCapacities(context),
  };
}
