// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkVirtualMachine } from "../../models/models.js";
import {
  workloadNetworkVirtualMachinesList,
  workloadNetworkVirtualMachinesGet,
} from "../../api/workloadNetworkVirtualMachines/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  WorkloadNetworkVirtualMachinesListOptionalParams,
  WorkloadNetworkVirtualMachinesGetOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkVirtualMachines operations. */
export interface WorkloadNetworkVirtualMachinesOperations {
  /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVirtualMachinesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
  /** Get a WorkloadNetworkVirtualMachine */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    virtualMachineId: string,
    options?: WorkloadNetworkVirtualMachinesGetOptionalParams,
  ) => Promise<WorkloadNetworkVirtualMachine>;
}

export function getWorkloadNetworkVirtualMachines(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkVirtualMachinesListOptionalParams,
    ) =>
      workloadNetworkVirtualMachinesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      virtualMachineId: string,
      options?: WorkloadNetworkVirtualMachinesGetOptionalParams,
    ) =>
      workloadNetworkVirtualMachinesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        virtualMachineId,
        options,
      ),
  };
}

export function getWorkloadNetworkVirtualMachinesOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkVirtualMachinesOperations {
  return {
    ...getWorkloadNetworkVirtualMachines(context, subscriptionId),
  };
}
