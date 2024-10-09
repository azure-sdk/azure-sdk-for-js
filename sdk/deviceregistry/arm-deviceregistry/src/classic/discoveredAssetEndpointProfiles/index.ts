// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import {
  DiscoveredAssetEndpointProfile,
  DiscoveredAssetEndpointProfileUpdate,
} from "../../models/models.js";
import {
  discoveredAssetEndpointProfilesGet,
  discoveredAssetEndpointProfilesCreateOrReplace,
  discoveredAssetEndpointProfilesUpdate,
  discoveredAssetEndpointProfilesDelete,
  discoveredAssetEndpointProfilesListByResourceGroup,
  discoveredAssetEndpointProfilesListBySubscription,
} from "../../api/discoveredAssetEndpointProfiles/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DiscoveredAssetEndpointProfilesGetOptionalParams,
  DiscoveredAssetEndpointProfilesCreateOrReplaceOptionalParams,
  DiscoveredAssetEndpointProfilesUpdateOptionalParams,
  DiscoveredAssetEndpointProfilesDeleteOptionalParams,
  DiscoveredAssetEndpointProfilesListByResourceGroupOptionalParams,
  DiscoveredAssetEndpointProfilesListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a DiscoveredAssetEndpointProfiles operations. */
export interface DiscoveredAssetEndpointProfilesOperations {
  /** Get a DiscoveredAssetEndpointProfile */
  get: (
    resourceGroupName: string,
    discoveredAssetEndpointProfileName: string,
    options?: DiscoveredAssetEndpointProfilesGetOptionalParams,
  ) => Promise<DiscoveredAssetEndpointProfile>;
  /** Create a DiscoveredAssetEndpointProfile */
  createOrReplace: (
    resourceGroupName: string,
    discoveredAssetEndpointProfileName: string,
    resource: DiscoveredAssetEndpointProfile,
    options?: DiscoveredAssetEndpointProfilesCreateOrReplaceOptionalParams,
  ) => PollerLike<
    OperationState<DiscoveredAssetEndpointProfile>,
    DiscoveredAssetEndpointProfile
  >;
  /** Update a DiscoveredAssetEndpointProfile */
  update: (
    resourceGroupName: string,
    discoveredAssetEndpointProfileName: string,
    properties: DiscoveredAssetEndpointProfileUpdate,
    options?: DiscoveredAssetEndpointProfilesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<DiscoveredAssetEndpointProfile>,
    DiscoveredAssetEndpointProfile
  >;
  /** Delete a DiscoveredAssetEndpointProfile */
  delete: (
    resourceGroupName: string,
    discoveredAssetEndpointProfileName: string,
    options?: DiscoveredAssetEndpointProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List DiscoveredAssetEndpointProfile resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DiscoveredAssetEndpointProfilesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DiscoveredAssetEndpointProfile>;
  /** List DiscoveredAssetEndpointProfile resources by subscription ID */
  listBySubscription: (
    options?: DiscoveredAssetEndpointProfilesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DiscoveredAssetEndpointProfile>;
}

export function getDiscoveredAssetEndpointProfiles(
  context: DeviceRegistryContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      discoveredAssetEndpointProfileName: string,
      options?: DiscoveredAssetEndpointProfilesGetOptionalParams,
    ) =>
      discoveredAssetEndpointProfilesGet(
        context,
        subscriptionId,
        resourceGroupName,
        discoveredAssetEndpointProfileName,
        options,
      ),
    createOrReplace: (
      resourceGroupName: string,
      discoveredAssetEndpointProfileName: string,
      resource: DiscoveredAssetEndpointProfile,
      options?: DiscoveredAssetEndpointProfilesCreateOrReplaceOptionalParams,
    ) =>
      discoveredAssetEndpointProfilesCreateOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        discoveredAssetEndpointProfileName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      discoveredAssetEndpointProfileName: string,
      properties: DiscoveredAssetEndpointProfileUpdate,
      options?: DiscoveredAssetEndpointProfilesUpdateOptionalParams,
    ) =>
      discoveredAssetEndpointProfilesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        discoveredAssetEndpointProfileName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      discoveredAssetEndpointProfileName: string,
      options?: DiscoveredAssetEndpointProfilesDeleteOptionalParams,
    ) =>
      discoveredAssetEndpointProfilesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        discoveredAssetEndpointProfileName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DiscoveredAssetEndpointProfilesListByResourceGroupOptionalParams,
    ) =>
      discoveredAssetEndpointProfilesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: DiscoveredAssetEndpointProfilesListBySubscriptionOptionalParams,
    ) =>
      discoveredAssetEndpointProfilesListBySubscription(
        context,
        subscriptionId,
        options,
      ),
  };
}

export function getDiscoveredAssetEndpointProfilesOperations(
  context: DeviceRegistryContext,
  subscriptionId: string,
): DiscoveredAssetEndpointProfilesOperations {
  return {
    ...getDiscoveredAssetEndpointProfiles(context, subscriptionId),
  };
}
