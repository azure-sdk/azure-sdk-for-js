// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkDhcp } from "../../models/models.js";
import {
  workloadNetworkDhcpConfigurationsList,
  workloadNetworkDhcpConfigurationsGet,
  workloadNetworkDhcpConfigurationsCreate,
  workloadNetworkDhcpConfigurationsUpdate,
  workloadNetworkDhcpConfigurationsDelete,
} from "../../api/workloadNetworkDhcpConfigurations/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDhcpConfigurationsListOptionalParams,
  WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkDhcpConfigurations operations. */
export interface WorkloadNetworkDhcpConfigurationsOperations {
  /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
  /** Get a WorkloadNetworkDhcp */
  get: (
    resourceGroupName: string,
    dhcpId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  ) => Promise<WorkloadNetworkDhcp>;
  /** Create a WorkloadNetworkDhcp */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Update a WorkloadNetworkDhcp */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Delete a WorkloadNetworkDhcp */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkDhcpConfigurations(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDhcpConfigurationsListOptionalParams,
    ) =>
      workloadNetworkDhcpConfigurationsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      dhcpId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams,
    ) =>
      workloadNetworkDhcpConfigurationsGet(
        context,
        subscriptionId,
        resourceGroupName,
        dhcpId,
        privateCloudName,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
    ) =>
      workloadNetworkDhcpConfigurationsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
    ) =>
      workloadNetworkDhcpConfigurationsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
    ) =>
      workloadNetworkDhcpConfigurationsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        options,
      ),
  };
}

export function getWorkloadNetworkDhcpConfigurationsOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkDhcpConfigurationsOperations {
  return {
    ...getWorkloadNetworkDhcpConfigurations(context, subscriptionId),
  };
}
