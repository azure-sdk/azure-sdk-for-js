// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams,
  StandbyContainerGroupPoolRuntimeViewsGetOptionalParams,
  StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
  StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  StandbyContainerGroupPoolsUpdateOptionalParams,
  StandbyContainerGroupPoolsDeleteOptionalParams,
  StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  StandbyContainerGroupPoolsGetOptionalParams,
  StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams,
  StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
  StandbyVirtualMachinesGetOptionalParams,
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsGetOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export {
  createStandbyPoolManagement,
  StandbyPoolManagementContext,
  StandbyPoolManagementClientOptionalParams,
} from "./standbyPoolManagementContext.js";
export { operationsList } from "./operations/index.js";
export {
  standbyContainerGroupPoolRuntimeViewsListByStandbyPool,
  standbyContainerGroupPoolRuntimeViewsGet,
} from "./standbyContainerGroupPoolRuntimeViews/index.js";
export {
  standbyContainerGroupPoolsListBySubscription,
  standbyContainerGroupPoolsListByResourceGroup,
  standbyContainerGroupPoolsUpdate,
  standbyContainerGroupPoolsDelete,
  standbyContainerGroupPoolsCreateOrUpdate,
  standbyContainerGroupPoolsGet,
} from "./standbyContainerGroupPools/index.js";
export {
  standbyVirtualMachinePoolRuntimeViewsListByStandbyPool,
  standbyVirtualMachinePoolRuntimeViewsGet,
} from "./standbyVirtualMachinePoolRuntimeViews/index.js";
export {
  standbyVirtualMachinePoolsListBySubscription,
  standbyVirtualMachinePoolsListByResourceGroup,
  standbyVirtualMachinePoolsUpdate,
  standbyVirtualMachinePoolsDelete,
  standbyVirtualMachinePoolsCreateOrUpdate,
  standbyVirtualMachinePoolsGet,
} from "./standbyVirtualMachinePools/index.js";
export {
  standbyVirtualMachinesListByStandbyVirtualMachinePoolResource,
  standbyVirtualMachinesGet,
} from "./standbyVirtualMachines/index.js";
