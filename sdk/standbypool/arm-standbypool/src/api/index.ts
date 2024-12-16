// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  OperationsListOptionalParams,
  StandbyVirtualMachinePoolsGetOptionalParams,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  StandbyVirtualMachinesGetOptionalParams,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
  StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams,
  StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams,
  StandbyContainerGroupPoolsGetOptionalParams,
  StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  StandbyContainerGroupPoolsDeleteOptionalParams,
  StandbyContainerGroupPoolsUpdateOptionalParams,
  StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
  StandbyContainerGroupPoolRuntimeViewsGetOptionalParams,
  StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams,
} from "./options.js";
export {
  createStandbyPoolManagement,
  StandbyPoolManagementContext,
  StandbyPoolManagementClientOptionalParams,
} from "./standbyPoolManagementContext.js";
export { operationsList } from "./operations/index.js";
export {
  standbyContainerGroupPoolRuntimeViewsGet,
  standbyContainerGroupPoolRuntimeViewsListByStandbyPool,
} from "./standbyContainerGroupPoolRuntimeViews/index.js";
export {
  standbyContainerGroupPoolsGet,
  standbyContainerGroupPoolsCreateOrUpdate,
  standbyContainerGroupPoolsDelete,
  standbyContainerGroupPoolsUpdate,
  standbyContainerGroupPoolsListByResourceGroup,
  standbyContainerGroupPoolsListBySubscription,
} from "./standbyContainerGroupPools/index.js";
export {
  standbyVirtualMachinePoolRuntimeViewsGet,
  standbyVirtualMachinePoolRuntimeViewsListByStandbyPool,
} from "./standbyVirtualMachinePoolRuntimeViews/index.js";
export {
  standbyVirtualMachinePoolsGet,
  standbyVirtualMachinePoolsCreateOrUpdate,
  standbyVirtualMachinePoolsDelete,
  standbyVirtualMachinePoolsUpdate,
  standbyVirtualMachinePoolsListByResourceGroup,
  standbyVirtualMachinePoolsListBySubscription,
} from "./standbyVirtualMachinePools/index.js";
export {
  standbyVirtualMachinesGet,
  standbyVirtualMachinesListByStandbyVirtualMachinePoolResource,
} from "./standbyVirtualMachines/index.js";
