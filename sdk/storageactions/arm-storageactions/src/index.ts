// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { StorageActionsClient } from "./storageActionsClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  StorageTask,
  ManagedServiceIdentity,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  StorageTaskProperties,
  StorageTaskAction,
  IfCondition,
  StorageTaskOperation,
  KnownStorageTaskOperationName,
  StorageTaskOperationName,
  KnownOnSuccess,
  OnSuccess,
  KnownOnFailure,
  OnFailure,
  ElseCondition,
  KnownProvisioningState,
  ProvisioningState,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  StorageTaskUpdateParameters,
  StorageTaskUpdateProperties,
  StorageTaskReportInstance,
  StorageTaskReportProperties,
  KnownRunStatusEnum,
  RunStatusEnum,
  KnownRunResult,
  RunResult,
  ProxyResource,
  StorageTaskAssignment,
  StorageTaskPreviewAction,
  StorageTaskPreviewActionProperties,
  StorageTaskPreviewContainerProperties,
  StorageTaskPreviewKeyValueProperties,
  StorageTaskPreviewBlobProperties,
  KnownMatchedBlockName,
  MatchedBlockName,
  StorageTaskPreviewActionCondition,
  StorageTaskPreviewActionIfCondition,
  KnownVersions,
} from "./models/index.js";
export { StorageActionsClientOptionalParams } from "./api/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  StorageTasksStorageTaskAssignmentListOptionalParams,
  StorageTasksListOptionalParams,
  StorageTasksListBySubscriptionOptionalParams,
  StorageTasksListByResourceGroupOptionalParams,
  StorageTasksDeleteOptionalParams,
  StorageTasksUpdateOptionalParams,
  StorageTasksCreateOptionalParams,
  StorageTasksGetOptionalParams,
} from "./api/storageTasks/index.js";
export { StorageTasksOperationGroupPreviewActionsOptionalParams } from "./api/storageTasksOperationGroup/index.js";
export {
  OperationsOperations,
  StorageTasksOperations,
  StorageTasksOperationGroupOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
