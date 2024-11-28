// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  availabilitySetsGet,
  availabilitySetsCreateOrUpdate,
  availabilitySetsUpdate,
  availabilitySetsDelete,
  availabilitySetsListByResourceGroup,
  availabilitySetsListBySubscription,
} from "../../api/availabilitySets/index.js";
import {
  AvailabilitySet,
  AvailabilitySetTagsUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a AvailabilitySets operations. */
export interface AvailabilitySetsOperations {
  /** Implements AvailabilitySet GET method. */
  get: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    options?: AvailabilitySetsGetOptionalParams,
  ) => Promise<AvailabilitySet>;
  /** Onboards the ScVmm availability set as an Azure resource. */
  createOrUpdate: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    resource: AvailabilitySet,
    options?: AvailabilitySetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
  /** Updates the AvailabilitySets resource. */
  update: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    properties: AvailabilitySetTagsUpdate,
    options?: AvailabilitySetsUpdateOptionalParams,
  ) => PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
  /** Deregisters the ScVmm availability set from Azure. */
  delete: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    options?: AvailabilitySetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List of AvailabilitySets in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AvailabilitySetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AvailabilitySet>;
  /** List of AvailabilitySets in a subscription. */
  listBySubscription: (
    options?: AvailabilitySetsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AvailabilitySet>;
}

export function getAvailabilitySets(
  context: ScVmmContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      options?: AvailabilitySetsGetOptionalParams,
    ) =>
      availabilitySetsGet(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      resource: AvailabilitySet,
      options?: AvailabilitySetsCreateOrUpdateOptionalParams,
    ) =>
      availabilitySetsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      properties: AvailabilitySetTagsUpdate,
      options?: AvailabilitySetsUpdateOptionalParams,
    ) =>
      availabilitySetsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      options?: AvailabilitySetsDeleteOptionalParams,
    ) =>
      availabilitySetsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AvailabilitySetsListByResourceGroupOptionalParams,
    ) =>
      availabilitySetsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: AvailabilitySetsListBySubscriptionOptionalParams,
    ) => availabilitySetsListBySubscription(context, subscriptionId, options),
  };
}

export function getAvailabilitySetsOperations(
  context: ScVmmContext,
  subscriptionId: string,
): AvailabilitySetsOperations {
  return {
    ...getAvailabilitySets(context, subscriptionId),
  };
}
