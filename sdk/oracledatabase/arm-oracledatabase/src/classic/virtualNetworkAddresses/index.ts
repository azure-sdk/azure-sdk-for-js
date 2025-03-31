// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { VirtualNetworkAddress } from "../../models/models.js";
import {
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesGetOptionalParams,
} from "../../api/virtualNetworkAddresses/options.js";
import {
  listByCloudVmCluster,
  createOrUpdate,
  $delete,
  get,
} from "../../api/virtualNetworkAddresses/operations.js";
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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
    ) => listByCloudVmCluster(context, resourceGroupName, cloudvmclustername, options),
    createOrUpdate: (
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      resource: VirtualNetworkAddress,
      options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
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
      $delete(context, resourceGroupName, cloudvmclustername, virtualnetworkaddressname, options),
    get: (
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      options?: VirtualNetworkAddressesGetOptionalParams,
    ) => get(context, resourceGroupName, cloudvmclustername, virtualnetworkaddressname, options),
  };
}

export function _getVirtualNetworkAddressesOperations(
  context: DatabaseContext,
): VirtualNetworkAddressesOperations {
  return {
    ..._getVirtualNetworkAddresses(context),
  };
}
