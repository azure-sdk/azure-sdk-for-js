// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  VirtualNetwork,
  VirtualNetworkTagsUpdate,
} from "../../models/models.js";
import {
  virtualNetworksGet,
  virtualNetworksCreateOrUpdate,
  virtualNetworksUpdate,
  virtualNetworksDelete,
  virtualNetworksListByResourceGroup,
  virtualNetworksListBySubscription,
} from "../../api/virtualNetworks/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualNetworksGetOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a VirtualNetworks operations. */
export interface VirtualNetworksOperations {
  /** Implements VirtualNetwork GET method. */
  get: (
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksGetOptionalParams,
  ) => Promise<VirtualNetwork>;
  /** Onboards the ScVmm virtual network as an Azure virtual network resource. */
  createOrUpdate: (
    resourceGroupName: string,
    virtualNetworkName: string,
    resource: VirtualNetwork,
    options?: VirtualNetworksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  /** Updates the VirtualNetworks resource. */
  update: (
    resourceGroupName: string,
    virtualNetworkName: string,
    properties: VirtualNetworkTagsUpdate,
    options?: VirtualNetworksUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  /** Deregisters the ScVmm virtual network from Azure. */
  delete: (
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List of VirtualNetworks in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VirtualNetworksListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
  /** List of VirtualNetworks in a subscription. */
  listBySubscription: (
    options?: VirtualNetworksListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
}

export function getVirtualNetworks(
  context: ScVmmContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      virtualNetworkName: string,
      options?: VirtualNetworksGetOptionalParams,
    ) =>
      virtualNetworksGet(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      virtualNetworkName: string,
      resource: VirtualNetwork,
      options?: VirtualNetworksCreateOrUpdateOptionalParams,
    ) =>
      virtualNetworksCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      virtualNetworkName: string,
      properties: VirtualNetworkTagsUpdate,
      options?: VirtualNetworksUpdateOptionalParams,
    ) =>
      virtualNetworksUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      virtualNetworkName: string,
      options?: VirtualNetworksDeleteOptionalParams,
    ) =>
      virtualNetworksDelete(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: VirtualNetworksListByResourceGroupOptionalParams,
    ) =>
      virtualNetworksListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: VirtualNetworksListBySubscriptionOptionalParams,
    ) => virtualNetworksListBySubscription(context, subscriptionId, options),
  };
}

export function getVirtualNetworksOperations(
  context: ScVmmContext,
  subscriptionId: string,
): VirtualNetworksOperations {
  return {
    ...getVirtualNetworks(context, subscriptionId),
  };
}
