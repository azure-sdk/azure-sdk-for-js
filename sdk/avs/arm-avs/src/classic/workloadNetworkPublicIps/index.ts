// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkPublicIP } from "../../models/models.js";
import {
  workloadNetworkPublicIpsList,
  workloadNetworkPublicIpsGet,
  workloadNetworkPublicIpsCreate,
  workloadNetworkPublicIpsDelete,
} from "../../api/workloadNetworkPublicIps/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkPublicIpsListOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkPublicIps operations. */
export interface WorkloadNetworkPublicIpsOperations {
  /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPublicIpsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
  /** Get a WorkloadNetworkPublicIP */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    publicIPId: string,
    options?: WorkloadNetworkPublicIpsGetOptionalParams,
  ) => Promise<WorkloadNetworkPublicIP>;
  /** Create a WorkloadNetworkPublicIP */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    publicIPId: string,
    workloadNetworkPublicIP: WorkloadNetworkPublicIP,
    options?: WorkloadNetworkPublicIpsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
  /** Delete a WorkloadNetworkPublicIP */
  delete: (
    resourceGroupName: string,
    publicIPId: string,
    privateCloudName: string,
    options?: WorkloadNetworkPublicIpsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkPublicIps(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkPublicIpsListOptionalParams,
    ) =>
      workloadNetworkPublicIpsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      publicIPId: string,
      options?: WorkloadNetworkPublicIpsGetOptionalParams,
    ) =>
      workloadNetworkPublicIpsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      publicIPId: string,
      workloadNetworkPublicIP: WorkloadNetworkPublicIP,
      options?: WorkloadNetworkPublicIpsCreateOptionalParams,
    ) =>
      workloadNetworkPublicIpsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
    delete: (
      resourceGroupName: string,
      publicIPId: string,
      privateCloudName: string,
      options?: WorkloadNetworkPublicIpsDeleteOptionalParams,
    ) =>
      workloadNetworkPublicIpsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        publicIPId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkPublicIpsOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkPublicIpsOperations {
  return {
    ...getWorkloadNetworkPublicIps(context, subscriptionId),
  };
}
