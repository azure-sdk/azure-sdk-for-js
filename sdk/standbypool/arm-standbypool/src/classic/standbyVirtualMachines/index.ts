// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StandbyVirtualMachinesGetOptionalParams,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
} from "../../api/options.js";
import { StandbyPoolManagementContext } from "../../api/standbyPoolManagementContext.js";
import {
  standbyVirtualMachinesGet,
  standbyVirtualMachinesListByStandbyVirtualMachinePoolResource,
} from "../../api/standbyVirtualMachines/index.js";
import { StandbyVirtualMachineResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a StandbyVirtualMachines operations. */
export interface StandbyVirtualMachinesOperations {
  /** Get a StandbyVirtualMachineResource */
  get: (
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    standbyVirtualMachineName: string,
    options?: StandbyVirtualMachinesGetOptionalParams,
  ) => Promise<StandbyVirtualMachineResource>;
  /** List StandbyVirtualMachineResource resources by StandbyVirtualMachinePoolResource */
  listByStandbyVirtualMachinePoolResource: (
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    options?: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyVirtualMachineResource>;
}

export function getStandbyVirtualMachines(
  context: StandbyPoolManagementContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      standbyVirtualMachineName: string,
      options?: StandbyVirtualMachinesGetOptionalParams,
    ) =>
      standbyVirtualMachinesGet(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        standbyVirtualMachineName,
        options,
      ),
    listByStandbyVirtualMachinePoolResource: (
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      options?: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
    ) =>
      standbyVirtualMachinesListByStandbyVirtualMachinePoolResource(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
  };
}

export function getStandbyVirtualMachinesOperations(
  context: StandbyPoolManagementContext,
  subscriptionId: string,
): StandbyVirtualMachinesOperations {
  return {
    ...getStandbyVirtualMachines(context, subscriptionId),
  };
}
