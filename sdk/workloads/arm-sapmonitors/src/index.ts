// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { WorkloadsClient } from "./workloadsClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  AlertTemplate,
  AlertTemplateProperties,
  ErrorDetail,
  ErrorAdditionalInfo,
  KnownWorkloadMonitorProvisioningState,
  WorkloadMonitorProvisioningState,
  KnownConditionalOperator,
  ConditionalOperator,
  KnownDefaultThresholdInputOption,
  DefaultThresholdInputOption,
  AlertTemplateMetricMeasurement,
  KnownAlertTemplateMetricTriggerType,
  AlertTemplateMetricTriggerType,
  AlertTemplateQueryInputParameter,
  KnownAlertTemplateParameterType,
  AlertTemplateParameterType,
  KnownAlertTemplateSelectionMode,
  AlertTemplateSelectionMode,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  Alert,
  AlertProperties,
  AlertRuleProperties,
  KnownAlertRuleStatus,
  AlertRuleStatus,
  KnownAlertAutoMitigate,
  AlertAutoMitigate,
  AlertQueryParameter,
  SapLandscapeMonitorResource,
  SapLandscapeMonitorProperties,
  KnownSapLandscapeMonitorProvisioningState,
  SapLandscapeMonitorProvisioningState,
  SapLandscapeMonitorPropertiesGrouping,
  SapLandscapeMonitorSidMapping,
  SapLandscapeMonitorMetricThresholds,
  ProviderInstance,
  ProviderInstanceProperties,
  Health,
  KnownWorkloadProviderInstanceHealthState,
  WorkloadProviderInstanceHealthState,
  ProviderSpecificProperties,
  ProviderSpecificPropertiesUnion,
  HanaDbProviderInstanceProperties,
  KnownSslPreference,
  SslPreference,
  SapNetWeaverProviderInstanceProperties,
  PrometheusOsProviderInstanceProperties,
  Db2ProviderInstanceProperties,
  PrometheusHaClusterProviderInstanceProperties,
  MsSqlServerProviderInstanceProperties,
  OracleProviderInstanceProperties,
  Monitor,
  MonitorProperties,
  KnownRoutingPreference,
  RoutingPreference,
  ManagedResourceGroupConfiguration,
  AppServicePlanConfiguration,
  KnownAppServicePlanTier,
  AppServicePlanTier,
  ManagedServiceIdentity,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  UpdateMonitorRequest,
  KnownVersions,
} from "./models/index.js";
export { WorkloadsClientOptionalParams } from "./api/index.js";
export {
  AlertsListOptionalParams,
  AlertsDeleteOptionalParams,
  AlertsCreateOptionalParams,
  AlertsGetOptionalParams,
} from "./api/alerts/index.js";
export {
  AlertTemplatesListOptionalParams,
  AlertTemplatesGetOptionalParams,
} from "./api/alertTemplates/index.js";
export {
  MonitorsListOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsDeleteOptionalParams,
  MonitorsUpdateOptionalParams,
  MonitorsCreateOptionalParams,
  MonitorsGetOptionalParams,
} from "./api/monitors/index.js";
export {
  ProviderInstancesListByMonitorOptionalParams,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesGetOptionalParams,
} from "./api/providerInstances/index.js";
export {
  SapLandscapeMonitorListByMonitorOptionalParams,
  SapLandscapeMonitorDeleteOptionalParams,
  SapLandscapeMonitorUpdateOptionalParams,
  SapLandscapeMonitorCreateOptionalParams,
  SapLandscapeMonitorGetOptionalParams,
} from "./api/sapLandscapeMonitor/index.js";
export {
  AlertsOperations,
  AlertTemplatesOperations,
  MonitorsOperations,
  ProviderInstancesOperations,
  SapLandscapeMonitorOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
