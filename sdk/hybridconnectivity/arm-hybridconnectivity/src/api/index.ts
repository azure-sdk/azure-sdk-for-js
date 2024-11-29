// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createHybridConnectivity,
  HybridConnectivityContext,
  HybridConnectivityClientOptionalParams,
} from "./hybridConnectivityContext.js";
export {
  GenerateAwsTemplatePostOptionalParams,
  PublicCloudConnectorsGetOptionalParams,
  PublicCloudConnectorsCreateOrUpdateOptionalParams,
  PublicCloudConnectorsUpdateOptionalParams,
  PublicCloudConnectorsDeleteOptionalParams,
  PublicCloudConnectorsListByResourceGroupOptionalParams,
  PublicCloudConnectorsListBySubscriptionOptionalParams,
  PublicCloudConnectorsTestPermissionsOptionalParams,
  SolutionConfigurationsGetOptionalParams,
  SolutionConfigurationsCreateOrUpdateOptionalParams,
  SolutionConfigurationsUpdateOptionalParams,
  SolutionConfigurationsDeleteOptionalParams,
  SolutionConfigurationsListOptionalParams,
  SolutionConfigurationsSyncNowOptionalParams,
  InventoryGetOptionalParams,
  InventoryListBySolutionConfigurationOptionalParams,
  SolutionTypesGetOptionalParams,
  SolutionTypesListByResourceGroupOptionalParams,
  SolutionTypesListBySubscriptionOptionalParams,
} from "./options.js";
export { generateAwsTemplatePost } from "./generateAwsTemplate/index.js";
export {
  inventoryGet,
  inventoryListBySolutionConfiguration,
} from "./inventory/index.js";
export {
  publicCloudConnectorsGet,
  publicCloudConnectorsCreateOrUpdate,
  publicCloudConnectorsUpdate,
  publicCloudConnectorsDelete,
  publicCloudConnectorsListByResourceGroup,
  publicCloudConnectorsListBySubscription,
  publicCloudConnectorsTestPermissions,
} from "./publicCloudConnectors/index.js";
export {
  solutionConfigurationsGet,
  solutionConfigurationsCreateOrUpdate,
  solutionConfigurationsUpdate,
  solutionConfigurationsDelete,
  solutionConfigurationsList,
  solutionConfigurationsSyncNow,
} from "./solutionConfigurations/index.js";
export {
  solutionTypesGet,
  solutionTypesListByResourceGroup,
  solutionTypesListBySubscription,
} from "./solutionTypes/index.js";
