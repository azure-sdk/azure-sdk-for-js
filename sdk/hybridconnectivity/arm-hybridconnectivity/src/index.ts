// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { HybridConnectivityManagementAPIClient } from "./hybridConnectivityManagementAPIClient.js";
export {
  ServiceConfigurationResource,
  ServiceConfigurationProperties,
  KnownServiceName,
  ServiceName,
  KnownProvisioningState,
  ProvisioningState,
  ExtensionResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  ServiceConfigurationResourcePatch,
  ServiceConfigurationPropertiesPatch,
  EndpointResource,
  EndpointProperties,
  KnownType,
  Type,
  ListCredentialsRequest,
  EndpointAccessResource,
  RelayNamespaceAccessProperties,
  ListIngressGatewayCredentialsRequest,
  IngressGatewayResource,
  IngressProfileProperties,
  AADProfileProperties,
  ManagedProxyRequest,
  ManagedProxyResource,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export {
  HybridConnectivityManagementAPIClientOptionalParams,
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
} from "./api/index.js";
export {
  EndpointsOperations,
  OperationsOperations,
  ServiceConfigurationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
