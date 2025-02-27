// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesGetOptionalParams,
} from "../../api/options.js";
import {
  virtualNetworkAddressesListByCloudVmCluster,
  virtualNetworkAddressesCreateOrUpdate,
  virtualNetworkAddressesDelete,
  virtualNetworkAddressesGet,
} from "../../api/virtualNetworkAddresses/index.js";
import { VirtualNetworkAddress } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualNetworkAddresses operations. */
export interface VirtualNetworkAddressesOperations {
  /** List VirtualNetworkAddress resources by CloudVmCluster */
  listByCloudVmCluster: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetworkAddress>;
  /** Create a VirtualNetworkAddress */
  createOrUpdate: (
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    resource: VirtualNetworkAddress,
    options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress>;
  /** Delete a VirtualNetworkAddress */
  delete: (
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get a VirtualNetworkAddress */
  get: (
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesGetOptionalParams,
  ) => Promise<VirtualNetworkAddress>;
}

function _getVirtualNetworkAddresses(context: DatabaseContext) {
  return {
    listByCloudVmCluster: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
    ) =>
      virtualNetworkAddressesListByCloudVmCluster(
        context,
        resourceGroupName,
        cloudvmclustername,
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
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        resource,
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
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      ),
    get: (
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      options?: VirtualNetworkAddressesGetOptionalParams,
    ) =>
      virtualNetworkAddressesGet(
        context,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      ),
  };
}

export function _getVirtualNetworkAddressesOperations(
  context: DatabaseContext,
): VirtualNetworkAddressesOperations {
  return {
    ..._getVirtualNetworkAddresses(context),
  };
}
