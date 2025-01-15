// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createHybridConnectivityManagementAPI,
  HybridConnectivityManagementAPIContext,
  HybridConnectivityManagementAPIClientOptionalParams,
} from "./hybridConnectivityManagementAPIContext.js";
export {
  OperationsListOptionalParams,
  EndpointsGetOptionalParams,
  EndpointsCreateOrUpdateOptionalParams,
  EndpointsUpdateOptionalParams,
  EndpointsDeleteOptionalParams,
  EndpointsListOptionalParams,
  EndpointsListCredentialsOptionalParams,
  EndpointsListIngressGatewayCredentialsOptionalParams,
  EndpointsListManagedProxyDetailsOptionalParams,
  ServiceConfigurationsGetOptionalParams,
  ServiceConfigurationsCreateOrupdateOptionalParams,
  ServiceConfigurationsUpdateOptionalParams,
  ServiceConfigurationsDeleteOptionalParams,
  ServiceConfigurationsListByEndpointResourceOptionalParams,
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
export {
  endpointsGet,
  endpointsCreateOrUpdate,
  endpointsUpdate,
  endpointsDelete,
  endpointsList,
  endpointsListCredentials,
  endpointsListIngressGatewayCredentials,
  endpointsListManagedProxyDetails,
} from "./endpoints/index.js";
export { generateAwsTemplatePost } from "./generateAwsTemplate/index.js";
export { inventoryGet, inventoryListBySolutionConfiguration } from "./inventory/index.js";
export { operationsList } from "./operations/index.js";
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
  serviceConfigurationsGet,
  serviceConfigurationsCreateOrupdate,
  serviceConfigurationsUpdate,
  serviceConfigurationsDelete,
  serviceConfigurationsListByEndpointResource,
} from "./serviceConfigurations/index.js";
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
