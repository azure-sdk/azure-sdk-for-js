// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  clustersList,
  clustersGet,
  clustersCreateOrUpdate,
  clustersUpdate,
  clustersDelete,
  clustersListZones,
} from "../../api/clusters/index.js";
import {
  ClustersListOptionalParams,
  ClustersGetOptionalParams,
  ClustersCreateOrUpdateOptionalParams,
  ClustersUpdateOptionalParams,
  ClustersDeleteOptionalParams,
  ClustersListZonesOptionalParams,
} from "../../api/options.js";
import {
  Cluster,
  ClusterUpdate,
  ClusterZoneList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Clusters operations. */
export interface ClustersOperations {
  /** List Cluster resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ClustersListOptionalParams,
  ) => PagedAsyncIterableIterator<Cluster>;
  /** Get a Cluster */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams,
  ) => Promise<Cluster>;
  /** Create a Cluster */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Cluster>, Cluster>;
  /** Update a Cluster */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    clusterUpdate: ClusterUpdate,
    options?: ClustersUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Delete a Cluster */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List hosts by zone in a cluster */
  listZones: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersListZonesOptionalParams,
  ) => Promise<ClusterZoneList>;
}

export function getClusters(context: AvsContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ClustersListOptionalParams,
    ) =>
      clustersList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersGetOptionalParams,
    ) =>
      clustersGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      cluster: Cluster,
      options?: ClustersCreateOrUpdateOptionalParams,
    ) =>
      clustersCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        cluster,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      clusterUpdate: ClusterUpdate,
      options?: ClustersUpdateOptionalParams,
    ) =>
      clustersUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        clusterUpdate,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersDeleteOptionalParams,
    ) =>
      clustersDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    listZones: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersListZonesOptionalParams,
    ) =>
      clustersListZones(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
  };
}

export function getClustersOperations(
  context: AvsContext,
  subscriptionId: string,
): ClustersOperations {
  return {
    ...getClusters(context, subscriptionId),
  };
}
