// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { DatabaseWatcherClient } from "./databaseWatcherClient.js";
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
  Watcher,
  WatcherProperties,
  Datastore,
  KnownKustoOfferingType,
  KustoOfferingType,
  KnownWatcherStatus,
  WatcherStatus,
  KnownDatabaseWatcherProvisioningState,
  DatabaseWatcherProvisioningState,
  ManagedServiceIdentityV4,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  WatcherUpdate,
  WatcherUpdateProperties,
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  AlertRuleResource,
  AlertRuleResourceProperties,
  KnownAlertRuleCreationProperties,
  AlertRuleCreationProperties,
  ProxyResource,
  HealthValidation,
  HealthValidationProperties,
  KnownValidationStatus,
  ValidationStatus,
  ValidationIssue,
  Target,
  TargetProperties,
  TargetPropertiesUnion,
  KnownTargetAuthenticationType,
  TargetAuthenticationType,
  VaultSecret,
  SqlDbSingleDatabaseTargetProperties,
  SqlDbElasticPoolTargetProperties,
  SqlMiTargetProperties,
  SharedPrivateLinkResource,
  SharedPrivateLinkResourceProperties,
  KnownSharedPrivateLinkResourceStatus,
  SharedPrivateLinkResourceStatus,
  KnownVersions,
} from "./models/index.js";
export { DatabaseWatcherClientOptionalParams } from "./api/index.js";
export {
  AlertRuleResourcesListByParentOptionalParams,
  AlertRuleResourcesDeleteOptionalParams,
  AlertRuleResourcesCreateOrUpdateOptionalParams,
  AlertRuleResourcesGetOptionalParams,
} from "./api/alertRuleResources/index.js";
export {
  HealthValidationsStartValidationOptionalParams,
  HealthValidationsListByParentOptionalParams,
  HealthValidationsGetOptionalParams,
} from "./api/healthValidations/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  SharedPrivateLinkResourcesListByWatcherOptionalParams,
  SharedPrivateLinkResourcesDeleteOptionalParams,
  SharedPrivateLinkResourcesCreateOptionalParams,
  SharedPrivateLinkResourcesGetOptionalParams,
} from "./api/sharedPrivateLinkResources/index.js";
export {
  TargetsListByWatcherOptionalParams,
  TargetsDeleteOptionalParams,
  TargetsCreateOrUpdateOptionalParams,
  TargetsGetOptionalParams,
} from "./api/targets/index.js";
export {
  WatchersStopOptionalParams,
  WatchersStartOptionalParams,
  WatchersListBySubscriptionOptionalParams,
  WatchersListByResourceGroupOptionalParams,
  WatchersDeleteOptionalParams,
  WatchersUpdateOptionalParams,
  WatchersCreateOrUpdateOptionalParams,
  WatchersGetOptionalParams,
} from "./api/watchers/index.js";
export {
  AlertRuleResourcesOperations,
  HealthValidationsOperations,
  OperationsOperations,
  SharedPrivateLinkResourcesOperations,
  TargetsOperations,
  WatchersOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
