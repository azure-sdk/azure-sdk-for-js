// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { VirtualNetworkAddress } from "../../models/models.js";
import {
  virtualNetworkAddressesGet,
  virtualNetworkAddressesDelete,
  virtualNetworkAddressesCreateOrUpdate,
  virtualNetworkAddressesListByCloudVmCluster,
} from "../../api/virtualNetworkAddresses/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualNetworkAddressesGetOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
} from "../../models/options.js";

/** Interface representing a VirtualNetworkAddresses operations. */
export interface VirtualNetworkAddressesOperations {
  /** Get a VirtualNetworkAddress */
  get: (
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesGetOptionalParams,
  ) => Promise<VirtualNetworkAddress>;
  /** Delete a VirtualNetworkAddress */
  delete: (
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a VirtualNetworkAddress */
  createOrUpdate: (
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    resource: VirtualNetworkAddress,
    options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress>;
  /** List VirtualNetworkAddress resources by CloudVmCluster */
  listByCloudVmCluster: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetworkAddress>;
}

export function getVirtualNetworkAddresses(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      options?: VirtualNetworkAddressesGetOptionalParams,
    ) =>
      virtualNetworkAddressesGet(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      ),
    delete: (
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      options?: VirtualNetworkAddressesDeleteOptionalParams,
    ) =>
      virtualNetworkAddressesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      resource: VirtualNetworkAddress,
      options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
    ) =>
      virtualNetworkAddressesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        resource,
        options,
      ),
    listByCloudVmCluster: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
    ) =>
      virtualNetworkAddressesListByCloudVmCluster(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
  };
}

export function getVirtualNetworkAddressesOperations(
  context: DatabaseContext,
  subscriptionId: string,
): VirtualNetworkAddressesOperations {
  return {
    ...getVirtualNetworkAddresses(context, subscriptionId),
  };
}
