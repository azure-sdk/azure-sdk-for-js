// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KubernetesContext } from "../../api/kubernetesContext.js";
import {
  ConnectedCluster,
  ConnectedClusterPatch,
  ListClusterUserCredentialProperties,
  CredentialResults,
} from "../../models/models.js";
import {
  ConnectedClustersListClusterUserCredentialOptionalParams,
  ConnectedClustersListBySubscriptionOptionalParams,
  ConnectedClustersListByResourceGroupOptionalParams,
  ConnectedClustersDeleteOptionalParams,
  ConnectedClustersUpdateOptionalParams,
  ConnectedClustersCreateOrReplaceOptionalParams,
  ConnectedClustersGetOptionalParams,
} from "../../api/connectedClusters/options.js";
import {
  listClusterUserCredential,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrReplace,
  get,
} from "../../api/connectedClusters/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ConnectedClusters operations. */
export interface ConnectedClustersOperations {
  /** Gets cluster user credentials of the connected cluster with a specified resource group and name. */
  listClusterUserCredential: (
    resourceGroupName: string,
    clusterName: string,
    properties: ListClusterUserCredentialProperties,
    options?: ConnectedClustersListClusterUserCredentialOptionalParams,
  ) => Promise<CredentialResults>;
  /** API to enumerate registered connected K8s clusters under a Subscription */
  listBySubscription: (
    options?: ConnectedClustersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<ConnectedCluster>;
  /** API to enumerate registered connected K8s clusters under a Resource Group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ConnectedClustersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ConnectedCluster>;
  /** Delete a connected cluster, removing the tracked resource in Azure Resource Manager (ARM). */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    clusterName: string,
    options?: ConnectedClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** API to update certain properties of the connected cluster resource */
  update: (
    resourceGroupName: string,
    clusterName: string,
    connectedClusterPatch: ConnectedClusterPatch,
    options?: ConnectedClustersUpdateOptionalParams,
  ) => Promise<ConnectedCluster>;
  /** API to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM). */
  createOrReplace: (
    resourceGroupName: string,
    clusterName: string,
    connectedCluster: ConnectedCluster,
    options?: ConnectedClustersCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<ConnectedCluster>, ConnectedCluster>;
  /** Returns the properties of the specified connected cluster, including name, identity, properties, and additional cluster details. */
  get: (
    resourceGroupName: string,
    clusterName: string,
    options?: ConnectedClustersGetOptionalParams,
  ) => Promise<ConnectedCluster>;
}

function _getConnectedClusters(context: KubernetesContext) {
  return {
    listClusterUserCredential: (
      resourceGroupName: string,
      clusterName: string,
      properties: ListClusterUserCredentialProperties,
      options?: ConnectedClustersListClusterUserCredentialOptionalParams,
    ) => listClusterUserCredential(context, resourceGroupName, clusterName, properties, options),
    listBySubscription: (options?: ConnectedClustersListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ConnectedClustersListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      clusterName: string,
      options?: ConnectedClustersDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, clusterName, options),
    update: (
      resourceGroupName: string,
      clusterName: string,
      connectedClusterPatch: ConnectedClusterPatch,
      options?: ConnectedClustersUpdateOptionalParams,
    ) => update(context, resourceGroupName, clusterName, connectedClusterPatch, options),
    createOrReplace: (
      resourceGroupName: string,
      clusterName: string,
      connectedCluster: ConnectedCluster,
      options?: ConnectedClustersCreateOrReplaceOptionalParams,
    ) => createOrReplace(context, resourceGroupName, clusterName, connectedCluster, options),
    get: (
      resourceGroupName: string,
      clusterName: string,
      options?: ConnectedClustersGetOptionalParams,
    ) => get(context, resourceGroupName, clusterName, options),
  };
}

export function _getConnectedClustersOperations(
  context: KubernetesContext,
): ConnectedClustersOperations {
  return {
    ..._getConnectedClusters(context),
  };
}
