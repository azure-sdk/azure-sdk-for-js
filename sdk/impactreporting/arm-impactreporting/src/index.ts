// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { ImpactClient } from "./impactClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Connector,
  ConnectorProperties,
  KnownProvisioningState,
  ProvisioningState,
  KnownPlatform,
  Platform,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  ConnectorUpdate,
  ConnectorUpdateProperties,
  Insight,
  InsightProperties,
  Content,
  ImpactDetails,
  ImpactCategory,
  ImpactCategoryProperties,
  RequiredImpactProperties,
  WorkloadImpact,
  WorkloadImpactProperties,
  Performance,
  ExpectedValueRange,
  KnownMetricUnit,
  MetricUnit,
  Connectivity,
  KnownProtocol,
  Protocol,
  SourceOrTarget,
  ErrorDetailProperties,
  Workload,
  KnownToolset,
  Toolset,
  KnownConfidenceLevel,
  ConfidenceLevel,
  ClientIncidentDetails,
  KnownIncidentSource,
  IncidentSource,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export { ImpactClientOptionalParams } from "./api/index.js";
export {
  ConnectorsListBySubscriptionOptionalParams,
  ConnectorsDeleteOptionalParams,
  ConnectorsUpdateOptionalParams,
  ConnectorsCreateOrUpdateOptionalParams,
  ConnectorsGetOptionalParams,
} from "./api/connectors/index.js";
export {
  ImpactCategoriesListBySubscriptionOptionalParams,
  ImpactCategoriesGetOptionalParams,
} from "./api/impactCategories/index.js";
export {
  InsightsDeleteOptionalParams,
  InsightsCreateOptionalParams,
  InsightsListBySubscriptionOptionalParams,
  InsightsGetOptionalParams,
} from "./api/insights/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  WorkloadImpactsListBySubscriptionOptionalParams,
  WorkloadImpactsDeleteOptionalParams,
  WorkloadImpactsGetOptionalParams,
  WorkloadImpactsCreateOptionalParams,
} from "./api/workloadImpacts/index.js";
export {
  ConnectorsOperations,
  ImpactCategoriesOperations,
  InsightsOperations,
  OperationsOperations,
  WorkloadImpactsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
