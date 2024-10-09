// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkGateway } from "../../models/models.js";
import {
  workloadNetworkGatewaysList,
  workloadNetworkGatewaysGet,
} from "../../api/workloadNetworkGateways/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  WorkloadNetworkGatewaysListOptionalParams,
  WorkloadNetworkGatewaysGetOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkGateways operations. */
export interface WorkloadNetworkGatewaysOperations {
  /** List WorkloadNetworkGateway resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkGatewaysListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
  /** Get a WorkloadNetworkGateway */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    gatewayId: string,
    options?: WorkloadNetworkGatewaysGetOptionalParams,
  ) => Promise<WorkloadNetworkGateway>;
}

export function getWorkloadNetworkGateways(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkGatewaysListOptionalParams,
    ) =>
      workloadNetworkGatewaysList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      gatewayId: string,
      options?: WorkloadNetworkGatewaysGetOptionalParams,
    ) =>
      workloadNetworkGatewaysGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        gatewayId,
        options,
      ),
  };
}

export function getWorkloadNetworkGatewaysOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkGatewaysOperations {
  return {
    ...getWorkloadNetworkGateways(context, subscriptionId),
  };
}
