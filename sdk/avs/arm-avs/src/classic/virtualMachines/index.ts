// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  VirtualMachine,
  VirtualMachineRestrictMovement,
} from "../../models/models.js";
import {
  virtualMachinesList,
  virtualMachinesGet,
  virtualMachinesRestrictMovement,
} from "../../api/virtualMachines/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachinesListOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesRestrictMovementOptionalParams,
} from "../../models/options.js";

/** Interface representing a VirtualMachines operations. */
export interface VirtualMachinesOperations {
  /** List VirtualMachine resources by Cluster */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: VirtualMachinesListOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachine>;
  /** Get a VirtualMachine */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    options?: VirtualMachinesGetOptionalParams,
  ) => Promise<VirtualMachine>;
  /** Enable or disable DRS-driven VM movement restriction */
  restrictMovement: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    restrictMovementParameter: VirtualMachineRestrictMovement,
    options?: VirtualMachinesRestrictMovementOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getVirtualMachines(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: VirtualMachinesListOptionalParams,
    ) =>
      virtualMachinesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      virtualMachineId: string,
      options?: VirtualMachinesGetOptionalParams,
    ) =>
      virtualMachinesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        virtualMachineId,
        options,
      ),
    restrictMovement: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      virtualMachineId: string,
      restrictMovementParameter: VirtualMachineRestrictMovement,
      options?: VirtualMachinesRestrictMovementOptionalParams,
    ) =>
      virtualMachinesRestrictMovement(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        virtualMachineId,
        restrictMovementParameter,
        options,
      ),
  };
}

export function getVirtualMachinesOperations(
  context: AVSContext,
  subscriptionId: string,
): VirtualMachinesOperations {
  return {
    ...getVirtualMachines(context, subscriptionId),
  };
}
