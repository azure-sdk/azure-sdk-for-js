// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { HybridConnectivityClient } from "./hybridConnectivityClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  SolutionTypeResource,
  SolutionTypeProperties,
  SolutionTypeSettingsProperties,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  InventoryResource,
  InventoryProperties,
  KnownCloudNativeType,
  CloudNativeType,
  KnownSolutionConfigurationStatus,
  SolutionConfigurationStatus,
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  SolutionConfiguration,
  SolutionConfigurationProperties,
  SolutionSettings,
  ExtensionResource,
  OperationStatusResult,
  PublicCloudConnector,
  PublicCloudConnectorProperties,
  AwsCloudProfile,
  KnownHostType,
  HostType,
  TrackedResource,
  GenerateAwsTemplateRequest,
  SolutionTypeSettings,
  KnownVersions,
} from "./models/index.js";
export {
  HybridConnectivityClientOptionalParams,
  SolutionTypesListBySubscriptionOptionalParams,
  SolutionTypesListByResourceGroupOptionalParams,
  SolutionTypesGetOptionalParams,
  InventoryListBySolutionConfigurationOptionalParams,
  InventoryGetOptionalParams,
  SolutionConfigurationsSyncNowOptionalParams,
  SolutionConfigurationsListOptionalParams,
  SolutionConfigurationsDeleteOptionalParams,
  SolutionConfigurationsUpdateOptionalParams,
  SolutionConfigurationsCreateOrUpdateOptionalParams,
  SolutionConfigurationsGetOptionalParams,
  PublicCloudConnectorsTestPermissionsOptionalParams,
  PublicCloudConnectorsListBySubscriptionOptionalParams,
  PublicCloudConnectorsListByResourceGroupOptionalParams,
  PublicCloudConnectorsDeleteOptionalParams,
  PublicCloudConnectorsUpdateOptionalParams,
  PublicCloudConnectorsCreateOrUpdateOptionalParams,
  PublicCloudConnectorsGetOptionalParams,
  GenerateAwsTemplatePostOptionalParams,
} from "./api/index.js";
export {
  GenerateAwsTemplateOperations,
  InventoryOperations,
  PublicCloudConnectorsOperations,
  SolutionConfigurationsOperations,
  SolutionTypesOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
