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
  ServerInstance,
  ServerInstanceProperties,
  KnownSapInstanceType,
  SapInstanceType,
  KnownOperatingSystem,
  OperatingSystem,
  ConfigurationData,
  KnownDatabaseType,
  DatabaseType,
  PerformanceData,
  PerformanceDataUnion,
  KnownDataSource,
  DataSource,
  ExcelPerformanceData,
  NativePerformanceData,
  KnownProvisioningState,
  ProvisioningState,
  SAPMigrateError,
  ErrorDefinition,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  UpdateServerInstanceRequest,
  SAPInstance,
  SAPInstanceProperties,
  KnownSapInstanceEnvironment,
  SapInstanceEnvironment,
  TrackedResource,
  SAPInstanceTagsUpdate,
  SAPDiscoverySite,
  SAPDiscoverySiteProperties,
  ExtendedLocation,
  SAPDiscoverySiteTagsUpdate,
  OperationStatusResult,
  KnownVersions,
} from "./models/index.js";
export { WorkloadsClientOptionalParams } from "./api/index.js";
export {
  SAPDiscoverySitesImportEntitiesOptionalParams,
  SAPDiscoverySitesListBySubscriptionOptionalParams,
  SAPDiscoverySitesListByResourceGroupOptionalParams,
  SAPDiscoverySitesDeleteOptionalParams,
  SAPDiscoverySitesUpdateOptionalParams,
  SAPDiscoverySitesCreateOptionalParams,
  SAPDiscoverySitesGetOptionalParams,
} from "./api/sapDiscoverySites/index.js";
export {
  SAPInstancesListBySapDiscoverySiteOptionalParams,
  SAPInstancesDeleteOptionalParams,
  SAPInstancesUpdateOptionalParams,
  SAPInstancesCreateOptionalParams,
  SAPInstancesGetOptionalParams,
} from "./api/sapInstances/index.js";
export {
  ServerInstancesListBySapInstanceOptionalParams,
  ServerInstancesDeleteOptionalParams,
  ServerInstancesUpdateOptionalParams,
  ServerInstancesCreateOptionalParams,
  ServerInstancesGetOptionalParams,
} from "./api/serverInstances/index.js";
export {
  SAPDiscoverySitesOperations,
  SAPInstancesOperations,
  ServerInstancesOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
