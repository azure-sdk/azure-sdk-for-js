// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { AvailabilitySet, AvailabilitySetTagsUpdate } from "../../models/models.js";
import {
  AvailabilitySetsListBySubscriptionOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsGetOptionalParams,
} from "../../api/availabilitySets/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/availabilitySets/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a AvailabilitySets operations. */
export interface AvailabilitySetsOperations {
  /** List of AvailabilitySets in a subscription. */
  listBySubscription: (
    options?: AvailabilitySetsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AvailabilitySet>;
  /** List of AvailabilitySets in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AvailabilitySetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AvailabilitySet>;
  /** Deregisters the ScVmm availability set from Azure. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    options?: AvailabilitySetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the AvailabilitySets resource. */
  update: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    properties: AvailabilitySetTagsUpdate,
    options?: AvailabilitySetsUpdateOptionalParams,
  ) => PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
  /** Onboards the ScVmm availability set as an Azure resource. */
  createOrUpdate: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    resource: AvailabilitySet,
    options?: AvailabilitySetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
  /** Implements AvailabilitySet GET method. */
  get: (
    resourceGroupName: string,
    availabilitySetResourceName: string,
    options?: AvailabilitySetsGetOptionalParams,
  ) => Promise<AvailabilitySet>;
}

function _getAvailabilitySets(context: ScVmmContext) {
  return {
    listBySubscription: (options?: AvailabilitySetsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AvailabilitySetsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      options?: AvailabilitySetsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, availabilitySetResourceName, options),
    update: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      properties: AvailabilitySetTagsUpdate,
      options?: AvailabilitySetsUpdateOptionalParams,
    ) => update(context, resourceGroupName, availabilitySetResourceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      resource: AvailabilitySet,
      options?: AvailabilitySetsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, availabilitySetResourceName, resource, options),
    get: (
      resourceGroupName: string,
      availabilitySetResourceName: string,
      options?: AvailabilitySetsGetOptionalParams,
    ) => get(context, resourceGroupName, availabilitySetResourceName, options),
  };
}

export function _getAvailabilitySetsOperations(context: ScVmmContext): AvailabilitySetsOperations {
  return {
    ..._getAvailabilitySets(context),
  };
}
