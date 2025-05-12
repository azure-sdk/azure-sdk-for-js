// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { MaintenanceClient } from "./maintenanceClient.js";
export {
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  MaintenanceError,
  ErrorDetails,
  MaintenanceConfiguration,
  MaintenanceConfigurationProperties,
  KnownMaintenanceScope,
  MaintenanceScope,
  MaintenanceWindow,
  KnownVisibility,
  Visibility,
  InputPatchConfiguration,
  KnownRebootOptions,
  RebootOptions,
  InputWindowsParameters,
  InputLinuxParameters,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ApplyUpdate,
  ApplyUpdateProperties,
  KnownUpdateStatus,
  UpdateStatus,
  ProxyResource,
  ConfigurationAssignment,
  ConfigurationAssignmentProperties,
  ConfigurationAssignmentFilterProperties,
  TagSettingsProperties,
  TagOperators,
  ScheduledEventApproveResponse,
  Update,
  KnownImpactType,
  ImpactType,
  UpdateProperties,
  KnownVersions,
} from "./models/index.js";
export { MaintenanceClientOptionalParams } from "./api/index.js";
export { ApplyUpdateForResourceGroupOperationGroupListOptionalParams } from "./api/applyUpdateForResourceGroupOperationGroup/index.js";
export {
  ApplyUpdateOperationGroupListOptionalParams,
  ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams,
  ApplyUpdateOperationGroupGetOptionalParams,
} from "./api/applyUpdateOperationGroup/index.js";
export { ApplyUpdatesGetParentOptionalParams } from "./api/applyUpdates/index.js";
export {
  ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams,
  ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams,
} from "./api/applyUpdatesOperationGroup/index.js";
export { ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams } from "./api/configurationAssignmentForResourceGroupOperationGroup/index.js";
export {
  ConfigurationAssignmentOperationGroupDeleteOptionalParams,
  ConfigurationAssignmentOperationGroupCreateOrUpdateOptionalParams,
  ConfigurationAssignmentOperationGroupGetOptionalParams,
} from "./api/configurationAssignmentOperationGroup/index.js";
export {
  ConfigurationAssignmentsListParentOptionalParams,
  ConfigurationAssignmentsDeleteParentOptionalParams,
  ConfigurationAssignmentsCreateOrUpdateParentOptionalParams,
  ConfigurationAssignmentsGetParentOptionalParams,
} from "./api/configurationAssignments/index.js";
export {
  ConfigurationAssignmentsForResourceGroupDeleteOptionalParams,
  ConfigurationAssignmentsForResourceGroupUpdateOptionalParams,
  ConfigurationAssignmentsForResourceGroupCreateOrUpdateOptionalParams,
  ConfigurationAssignmentsForResourceGroupGetOptionalParams,
} from "./api/configurationAssignmentsForResourceGroup/index.js";
export {
  ConfigurationAssignmentsForSubscriptionsListOptionalParams,
  ConfigurationAssignmentsForSubscriptionsDeleteOptionalParams,
  ConfigurationAssignmentsForSubscriptionsUpdateOptionalParams,
  ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOptionalParams,
  ConfigurationAssignmentsForSubscriptionsGetOptionalParams,
} from "./api/configurationAssignmentsForSubscriptions/index.js";
export {
  MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams,
  MaintenanceConfigurationOperationGroupListOptionalParams,
  MaintenanceConfigurationOperationGroupDeleteOptionalParams,
  MaintenanceConfigurationOperationGroupUpdateOptionalParams,
  MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams,
  MaintenanceConfigurationOperationGroupGetOptionalParams,
} from "./api/maintenanceConfigurationOperationGroup/index.js";
export {
  MaintenanceConfigurationsListOptionalParams,
  MaintenanceConfigurationsGetOptionalParams,
} from "./api/maintenanceConfigurations/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { ScheduledEventOperationGroupAcknowledgeOptionalParams } from "./api/scheduledEventOperationGroup/index.js";
export {
  UpdatesOperationGroupListOptionalParams,
  UpdatesOperationGroupListParentOptionalParams,
} from "./api/updatesOperationGroup/index.js";
export {
  ApplyUpdateForResourceGroupOperationGroupOperations,
  ApplyUpdateOperationGroupOperations,
  ApplyUpdatesOperations,
  ApplyUpdatesOperationGroupOperations,
  ConfigurationAssignmentForResourceGroupOperationGroupOperations,
  ConfigurationAssignmentOperationGroupOperations,
  ConfigurationAssignmentsOperations,
  ConfigurationAssignmentsForResourceGroupOperations,
  ConfigurationAssignmentsForSubscriptionsOperations,
  MaintenanceConfigurationOperationGroupOperations,
  MaintenanceConfigurationsOperations,
  OperationsOperations,
  ScheduledEventOperationGroupOperations,
  UpdatesOperationGroupOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
