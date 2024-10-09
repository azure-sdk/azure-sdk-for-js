// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetwork } from "../../models/models.js";
import {
  workloadNetworksGet,
  workloadNetworksList,
} from "../../api/workloadNetworks/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  WorkloadNetworksGetOptionalParams,
  WorkloadNetworksListOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworks operations. */
export interface WorkloadNetworksOperations {
  /** Get a WorkloadNetwork */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksGetOptionalParams,
  ) => Promise<WorkloadNetwork>;
  /** List WorkloadNetwork resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetwork>;
}

export function getWorkloadNetworks(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksGetOptionalParams,
    ) =>
      workloadNetworksGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksListOptionalParams,
    ) =>
      workloadNetworksList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworksOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworksOperations {
  return {
    ...getWorkloadNetworks(context, subscriptionId),
  };
}
