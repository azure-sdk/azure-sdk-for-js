// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  cloudVmClustersListPrivateIpAddresses,
  cloudVmClustersRemoveVms,
  cloudVmClustersAddVms,
  cloudVmClustersListByResourceGroup,
  cloudVmClustersCreateOrUpdate,
  cloudVmClustersDelete,
  cloudVmClustersUpdate,
  cloudVmClustersGet,
  cloudVmClustersListBySubscription,
} from "../../api/cloudVmClusters/index.js";
import {
  CloudVmCluster,
  CloudVmClusterUpdate,
  AddRemoveDbNode,
  PrivateIpAddressesFilter,
  PrivateIpAddressProperties,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudVmClustersListPrivateIpAddressesOptionalParams,
  CloudVmClustersRemoveVmsOptionalParams,
  CloudVmClustersAddVmsOptionalParams,
  CloudVmClustersListByResourceGroupOptionalParams,
  CloudVmClustersCreateOrUpdateOptionalParams,
  CloudVmClustersDeleteOptionalParams,
  CloudVmClustersUpdateOptionalParams,
  CloudVmClustersGetOptionalParams,
  CloudVmClustersListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a CloudVmClusters operations. */
export interface CloudVmClustersOperations {
  /** List Private IP Addresses by the provided filter */
  listPrivateIpAddresses: (
    resourceGroupName: string,
    cloudvmclustername: string,
    body: PrivateIpAddressesFilter,
    options?: CloudVmClustersListPrivateIpAddressesOptionalParams,
  ) => Promise<PrivateIpAddressProperties[]>;
  /** Remove VMs from the VM Cluster */
  removeVms: (
    resourceGroupName: string,
    cloudvmclustername: string,
    body: AddRemoveDbNode,
    options?: CloudVmClustersRemoveVmsOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** Add VMs to the VM Cluster */
  addVms: (
    resourceGroupName: string,
    cloudvmclustername: string,
    body: AddRemoveDbNode,
    options?: CloudVmClustersAddVmsOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** List CloudVmCluster resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudVmClustersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CloudVmCluster>;
  /** Create a CloudVmCluster */
  createOrUpdate: (
    resourceGroupName: string,
    cloudvmclustername: string,
    resource: CloudVmCluster,
    options?: CloudVmClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** Delete a CloudVmCluster */
  delete: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: CloudVmClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a CloudVmCluster */
  update: (
    resourceGroupName: string,
    cloudvmclustername: string,
    properties: CloudVmClusterUpdate,
    options?: CloudVmClustersUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** Get a CloudVmCluster */
  get: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: CloudVmClustersGetOptionalParams,
  ) => Promise<CloudVmCluster>;
  /** List CloudVmCluster resources by subscription ID */
  listBySubscription: (
    options?: CloudVmClustersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CloudVmCluster>;
}

function _getCloudVmClusters(context: DatabaseContext) {
  return {
    listPrivateIpAddresses: (
      resourceGroupName: string,
      cloudvmclustername: string,
      body: PrivateIpAddressesFilter,
      options?: CloudVmClustersListPrivateIpAddressesOptionalParams,
    ) =>
      cloudVmClustersListPrivateIpAddresses(
        context,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
    removeVms: (
      resourceGroupName: string,
      cloudvmclustername: string,
      body: AddRemoveDbNode,
      options?: CloudVmClustersRemoveVmsOptionalParams,
    ) => cloudVmClustersRemoveVms(context, resourceGroupName, cloudvmclustername, body, options),
    addVms: (
      resourceGroupName: string,
      cloudvmclustername: string,
      body: AddRemoveDbNode,
      options?: CloudVmClustersAddVmsOptionalParams,
    ) => cloudVmClustersAddVms(context, resourceGroupName, cloudvmclustername, body, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudVmClustersListByResourceGroupOptionalParams,
    ) => cloudVmClustersListByResourceGroup(context, resourceGroupName, options),
    createOrUpdate: (
      resourceGroupName: string,
      cloudvmclustername: string,
      resource: CloudVmCluster,
      options?: CloudVmClustersCreateOrUpdateOptionalParams,
    ) =>
      cloudVmClustersCreateOrUpdate(
        context,
        resourceGroupName,
        cloudvmclustername,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: CloudVmClustersDeleteOptionalParams,
    ) => cloudVmClustersDelete(context, resourceGroupName, cloudvmclustername, options),
    update: (
      resourceGroupName: string,
      cloudvmclustername: string,
      properties: CloudVmClusterUpdate,
      options?: CloudVmClustersUpdateOptionalParams,
    ) => cloudVmClustersUpdate(context, resourceGroupName, cloudvmclustername, properties, options),
    get: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: CloudVmClustersGetOptionalParams,
    ) => cloudVmClustersGet(context, resourceGroupName, cloudvmclustername, options),
    listBySubscription: (options?: CloudVmClustersListBySubscriptionOptionalParams) =>
      cloudVmClustersListBySubscription(context, options),
  };
}

export function _getCloudVmClustersOperations(context: DatabaseContext): CloudVmClustersOperations {
  return {
    ..._getCloudVmClusters(context),
  };
}
