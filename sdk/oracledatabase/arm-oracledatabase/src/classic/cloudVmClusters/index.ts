// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  CloudVmCluster,
  CloudVmClusterUpdate,
  AddRemoveDbNode,
  PrivateIpAddressesFilter,
  PrivateIpAddressProperties,
} from "../../models/models.js";
import {
  cloudVmClustersListBySubscription,
  cloudVmClustersGet,
  cloudVmClustersUpdate,
  cloudVmClustersDelete,
  cloudVmClustersCreateOrUpdate,
  cloudVmClustersListByResourceGroup,
  cloudVmClustersAddVms,
  cloudVmClustersRemoveVms,
  cloudVmClustersListPrivateIpAddresses,
} from "../../api/cloudVmClusters/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudVmClustersListBySubscriptionOptionalParams,
  CloudVmClustersGetOptionalParams,
  CloudVmClustersUpdateOptionalParams,
  CloudVmClustersDeleteOptionalParams,
  CloudVmClustersCreateOrUpdateOptionalParams,
  CloudVmClustersListByResourceGroupOptionalParams,
  CloudVmClustersAddVmsOptionalParams,
  CloudVmClustersRemoveVmsOptionalParams,
  CloudVmClustersListPrivateIpAddressesOptionalParams,
} from "../../models/options.js";

/** Interface representing a CloudVmClusters operations. */
export interface CloudVmClustersOperations {
  /** List CloudVmCluster resources by subscription ID */
  listBySubscription: (
    options?: CloudVmClustersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CloudVmCluster>;
  /** Get a CloudVmCluster */
  get: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: CloudVmClustersGetOptionalParams,
  ) => Promise<CloudVmCluster>;
  /** Update a CloudVmCluster */
  update: (
    resourceGroupName: string,
    cloudvmclustername: string,
    properties: CloudVmClusterUpdate,
    options?: CloudVmClustersUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** Delete a CloudVmCluster */
  delete: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: CloudVmClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a CloudVmCluster */
  createOrUpdate: (
    resourceGroupName: string,
    cloudvmclustername: string,
    resource: CloudVmCluster,
    options?: CloudVmClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** List CloudVmCluster resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudVmClustersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CloudVmCluster>;
  /** Add VMs to the VM Cluster */
  addVms: (
    resourceGroupName: string,
    cloudvmclustername: string,
    body: AddRemoveDbNode,
    options?: CloudVmClustersAddVmsOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** Remove VMs from the VM Cluster */
  removeVms: (
    resourceGroupName: string,
    cloudvmclustername: string,
    body: AddRemoveDbNode,
    options?: CloudVmClustersRemoveVmsOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  /** List Private IP Addresses by the provided filter */
  listPrivateIpAddresses: (
    resourceGroupName: string,
    cloudvmclustername: string,
    body: PrivateIpAddressesFilter,
    options?: CloudVmClustersListPrivateIpAddressesOptionalParams,
  ) => Promise<PrivateIpAddressProperties[]>;
}

export function getCloudVmClusters(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    listBySubscription: (
      options?: CloudVmClustersListBySubscriptionOptionalParams,
    ) => cloudVmClustersListBySubscription(context, subscriptionId, options),
    get: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: CloudVmClustersGetOptionalParams,
    ) =>
      cloudVmClustersGet(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    update: (
      resourceGroupName: string,
      cloudvmclustername: string,
      properties: CloudVmClusterUpdate,
      options?: CloudVmClustersUpdateOptionalParams,
    ) =>
      cloudVmClustersUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: CloudVmClustersDeleteOptionalParams,
    ) =>
      cloudVmClustersDelete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      cloudvmclustername: string,
      resource: CloudVmCluster,
      options?: CloudVmClustersCreateOrUpdateOptionalParams,
    ) =>
      cloudVmClustersCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        resource,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudVmClustersListByResourceGroupOptionalParams,
    ) =>
      cloudVmClustersListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    addVms: (
      resourceGroupName: string,
      cloudvmclustername: string,
      body: AddRemoveDbNode,
      options?: CloudVmClustersAddVmsOptionalParams,
    ) =>
      cloudVmClustersAddVms(
        context,
        subscriptionId,
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
    ) =>
      cloudVmClustersRemoveVms(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
    listPrivateIpAddresses: (
      resourceGroupName: string,
      cloudvmclustername: string,
      body: PrivateIpAddressesFilter,
      options?: CloudVmClustersListPrivateIpAddressesOptionalParams,
    ) =>
      cloudVmClustersListPrivateIpAddresses(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
  };
}

export function getCloudVmClustersOperations(
  context: DatabaseContext,
  subscriptionId: string,
): CloudVmClustersOperations {
  return {
    ...getCloudVmClusters(context, subscriptionId),
  };
}
