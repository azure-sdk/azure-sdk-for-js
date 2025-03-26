// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { StandbyPoolManagementClient } from "./standbyPoolManagementClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  StandbyContainerGroupPoolRuntimeViewResource,
  StandbyContainerGroupPoolRuntimeViewResourceProperties,
  ContainerGroupInstanceCountSummary,
  PoolContainerGroupStateCount,
  KnownPoolContainerGroupState,
  PoolContainerGroupState,
  PoolStatus,
  KnownHealthStateCode,
  HealthStateCode,
  KnownProvisioningState,
  ProvisioningState,
  StandbyContainerGroupPoolPrediction,
  StandbyContainerGroupPoolForecastValues,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  StandbyContainerGroupPoolResource,
  StandbyContainerGroupPoolResourceProperties,
  StandbyContainerGroupPoolElasticityProfile,
  KnownRefillPolicy,
  RefillPolicy,
  ContainerGroupProperties,
  ContainerGroupProfile,
  Subnet,
  TrackedResource,
  StandbyContainerGroupPoolResourceUpdate,
  StandbyContainerGroupPoolResourceUpdateProperties,
  StandbyVirtualMachinePoolRuntimeViewResource,
  StandbyVirtualMachinePoolRuntimeViewResourceProperties,
  VirtualMachineInstanceCountSummary,
  PoolVirtualMachineStateCount,
  KnownPoolVirtualMachineState,
  PoolVirtualMachineState,
  StandbyVirtualMachinePoolPrediction,
  StandbyVirtualMachinePoolForecastValues,
  StandbyVirtualMachineResource,
  StandbyVirtualMachineResourceProperties,
  StandbyVirtualMachinePoolResource,
  StandbyVirtualMachinePoolResourceProperties,
  StandbyVirtualMachinePoolElasticityProfile,
  KnownVirtualMachineState,
  VirtualMachineState,
  StandbyVirtualMachinePoolResourceUpdate,
  StandbyVirtualMachinePoolResourceUpdateProperties,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export { StandbyPoolManagementClientOptionalParams } from "./api/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams,
  StandbyContainerGroupPoolRuntimeViewsGetOptionalParams,
} from "./api/standbyContainerGroupPoolRuntimeViews/index.js";
export {
  StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
  StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  StandbyContainerGroupPoolsUpdateOptionalParams,
  StandbyContainerGroupPoolsDeleteOptionalParams,
  StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  StandbyContainerGroupPoolsGetOptionalParams,
} from "./api/standbyContainerGroupPools/index.js";
export {
  StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOptionalParams,
  StandbyVirtualMachinePoolRuntimeViewsGetOptionalParams,
} from "./api/standbyVirtualMachinePoolRuntimeViews/index.js";
export {
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsGetOptionalParams,
} from "./api/standbyVirtualMachinePools/index.js";
export {
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
  StandbyVirtualMachinesGetOptionalParams,
} from "./api/standbyVirtualMachines/index.js";
export {
  OperationsOperations,
  StandbyContainerGroupPoolRuntimeViewsOperations,
  StandbyContainerGroupPoolsOperations,
  StandbyVirtualMachinePoolRuntimeViewsOperations,
  StandbyVirtualMachinePoolsOperations,
  StandbyVirtualMachinesOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
