// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { PlacementPolicy, PlacementPolicyUpdate } from "../../models/models.js";
import {
  placementPoliciesList,
  placementPoliciesGet,
  placementPoliciesCreateOrUpdate,
  placementPoliciesUpdate,
  placementPoliciesDelete,
} from "../../api/placementPolicies/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PlacementPoliciesListOptionalParams,
  PlacementPoliciesGetOptionalParams,
  PlacementPoliciesCreateOrUpdateOptionalParams,
  PlacementPoliciesUpdateOptionalParams,
  PlacementPoliciesDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a PlacementPolicies operations. */
export interface PlacementPoliciesOperations {
  /** List PlacementPolicy resources by Cluster */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: PlacementPoliciesListOptionalParams,
  ) => PagedAsyncIterableIterator<PlacementPolicy>;
  /** Get a PlacementPolicy */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesGetOptionalParams,
  ) => Promise<PlacementPolicy>;
  /** Create a PlacementPolicy */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicy: PlacementPolicy,
    options?: PlacementPoliciesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
  /** Update a PlacementPolicy */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicyUpdate: PlacementPolicyUpdate,
    options?: PlacementPoliciesUpdateOptionalParams,
  ) => Promise<PlacementPolicy>;
  /** Delete a PlacementPolicy */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getPlacementPolicies(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: PlacementPoliciesListOptionalParams,
    ) =>
      placementPoliciesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      options?: PlacementPoliciesGetOptionalParams,
    ) =>
      placementPoliciesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      placementPolicy: PlacementPolicy,
      options?: PlacementPoliciesCreateOrUpdateOptionalParams,
    ) =>
      placementPoliciesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        placementPolicy,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      placementPolicyUpdate: PlacementPolicyUpdate,
      options?: PlacementPoliciesUpdateOptionalParams,
    ) =>
      placementPoliciesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        placementPolicyUpdate,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      options?: PlacementPoliciesDeleteOptionalParams,
    ) =>
      placementPoliciesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        options,
      ),
  };
}

export function getPlacementPoliciesOperations(
  context: AVSContext,
  subscriptionId: string,
): PlacementPoliciesOperations {
  return {
    ...getPlacementPolicies(context, subscriptionId),
  };
}
