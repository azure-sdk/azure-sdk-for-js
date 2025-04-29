// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import {
  ManagedCluster,
  ManagedClusterUpdateParameters,
  FaultSimulationIdContent,
  FaultSimulation,
  FaultSimulationContentUnion,
} from "../../models/models.js";
import {
  ManagedClustersStopFaultSimulationOptionalParams,
  ManagedClustersStartFaultSimulationOptionalParams,
  ManagedClustersListFaultSimulationOptionalParams,
  ManagedClustersGetFaultSimulationOptionalParams,
  ManagedClustersListBySubscriptionOptionalParams,
  ManagedClustersListByResourceGroupOptionalParams,
  ManagedClustersDeleteOptionalParams,
  ManagedClustersUpdateOptionalParams,
  ManagedClustersCreateOrUpdateOptionalParams,
  ManagedClustersGetOptionalParams,
} from "../../api/managedClusters/options.js";
import {
  managedClustersStopFaultSimulation,
  managedClustersStartFaultSimulation,
  managedClustersListFaultSimulation,
  managedClustersGetFaultSimulation,
  managedClustersListBySubscription,
  managedClustersListByResourceGroup,
  managedClustersDelete,
  managedClustersUpdate,
  managedClustersCreateOrUpdate,
  managedClustersGet,
} from "../../api/managedClusters/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ManagedClusters operations. */
export interface ManagedClustersOperations {
  /** Stops a fault simulation on the cluster. */
  stopFaultSimulation: (
    resourceGroupName: string,
    clusterName: string,
    parameters: FaultSimulationIdContent,
    options?: ManagedClustersStopFaultSimulationOptionalParams,
  ) => PollerLike<OperationState<FaultSimulation>, FaultSimulation>;
  /** Starts a fault simulation on the cluster. */
  startFaultSimulation: (
    resourceGroupName: string,
    clusterName: string,
    parameters: FaultSimulationContentUnion,
    options?: ManagedClustersStartFaultSimulationOptionalParams,
  ) => PollerLike<OperationState<FaultSimulation>, FaultSimulation>;
  /** Gets the list of recent fault simulations for the cluster. */
  listFaultSimulation: (
    resourceGroupName: string,
    clusterName: string,
    options?: ManagedClustersListFaultSimulationOptionalParams,
  ) => PagedAsyncIterableIterator<FaultSimulation>;
  /** Gets a fault simulation by the simulationId. */
  getFaultSimulation: (
    resourceGroupName: string,
    clusterName: string,
    parameters: FaultSimulationIdContent,
    options?: ManagedClustersGetFaultSimulationOptionalParams,
  ) => Promise<FaultSimulation>;
  /** Gets all Service Fabric cluster resources created or in the process of being created in the subscription. */
  listBySubscription: (
    options?: ManagedClustersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<ManagedCluster>;
  /** Gets all Service Fabric cluster resources created or in the process of being created in the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ManagedClustersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ManagedCluster>;
  /** Delete a Service Fabric managed cluster resource with the specified name. */
  delete: (
    resourceGroupName: string,
    clusterName: string,
    options?: ManagedClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update the tags of of a Service Fabric managed cluster resource with the specified name. */
  update: (
    resourceGroupName: string,
    clusterName: string,
    parameters: ManagedClusterUpdateParameters,
    options?: ManagedClustersUpdateOptionalParams,
  ) => Promise<ManagedCluster>;
  /** Create or update a Service Fabric managed cluster resource with the specified name. */
  createOrUpdate: (
    resourceGroupName: string,
    clusterName: string,
    parameters: ManagedCluster,
    options?: ManagedClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ManagedCluster>, ManagedCluster>;
  /** Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group. */
  get: (
    resourceGroupName: string,
    clusterName: string,
    options?: ManagedClustersGetOptionalParams,
  ) => Promise<ManagedCluster>;
}

function _getManagedClusters(context: ServiceFabricContext) {
  return {
    stopFaultSimulation: (
      resourceGroupName: string,
      clusterName: string,
      parameters: FaultSimulationIdContent,
      options?: ManagedClustersStopFaultSimulationOptionalParams,
    ) =>
      managedClustersStopFaultSimulation(
        context,
        resourceGroupName,
        clusterName,
        parameters,
        options,
      ),
    startFaultSimulation: (
      resourceGroupName: string,
      clusterName: string,
      parameters: FaultSimulationContentUnion,
      options?: ManagedClustersStartFaultSimulationOptionalParams,
    ) =>
      managedClustersStartFaultSimulation(
        context,
        resourceGroupName,
        clusterName,
        parameters,
        options,
      ),
    listFaultSimulation: (
      resourceGroupName: string,
      clusterName: string,
      options?: ManagedClustersListFaultSimulationOptionalParams,
    ) => managedClustersListFaultSimulation(context, resourceGroupName, clusterName, options),
    getFaultSimulation: (
      resourceGroupName: string,
      clusterName: string,
      parameters: FaultSimulationIdContent,
      options?: ManagedClustersGetFaultSimulationOptionalParams,
    ) =>
      managedClustersGetFaultSimulation(
        context,
        resourceGroupName,
        clusterName,
        parameters,
        options,
      ),
    listBySubscription: (options?: ManagedClustersListBySubscriptionOptionalParams) =>
      managedClustersListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ManagedClustersListByResourceGroupOptionalParams,
    ) => managedClustersListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      clusterName: string,
      options?: ManagedClustersDeleteOptionalParams,
    ) => managedClustersDelete(context, resourceGroupName, clusterName, options),
    update: (
      resourceGroupName: string,
      clusterName: string,
      parameters: ManagedClusterUpdateParameters,
      options?: ManagedClustersUpdateOptionalParams,
    ) => managedClustersUpdate(context, resourceGroupName, clusterName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      clusterName: string,
      parameters: ManagedCluster,
      options?: ManagedClustersCreateOrUpdateOptionalParams,
    ) =>
      managedClustersCreateOrUpdate(context, resourceGroupName, clusterName, parameters, options),
    get: (
      resourceGroupName: string,
      clusterName: string,
      options?: ManagedClustersGetOptionalParams,
    ) => managedClustersGet(context, resourceGroupName, clusterName, options),
  };
}

export function _getManagedClustersOperations(
  context: ServiceFabricContext,
): ManagedClustersOperations {
  return {
    ..._getManagedClusters(context),
  };
}
