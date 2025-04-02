// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { DeviceRegistryManagementClient } from "./deviceRegistryManagementClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  BillingContainer,
  BillingContainerProperties,
  KnownProvisioningState,
  ProvisioningState,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  AssetEndpointProfile,
  AssetEndpointProfileProperties,
  Authentication,
  KnownAuthenticationMethod,
  AuthenticationMethod,
  UsernamePasswordCredentials,
  X509Credentials,
  AssetEndpointProfileStatus,
  AssetEndpointProfileStatusError,
  ExtendedLocation,
  TrackedResource,
  AssetEndpointProfileUpdate,
  AssetEndpointProfileUpdateProperties,
  Asset,
  AssetProperties,
  Topic,
  KnownTopicRetainType,
  TopicRetainType,
  Dataset,
  DataPoint,
  KnownDataPointObservabilityMode,
  DataPointObservabilityMode,
  Event,
  KnownEventObservabilityMode,
  EventObservabilityMode,
  AssetStatus,
  AssetStatusError,
  AssetStatusDataset,
  MessageSchemaReference,
  AssetStatusEvent,
  DataPointBase,
  EventBase,
  AssetUpdate,
  AssetUpdateProperties,
  OperationStatusResult,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export { DeviceRegistryManagementClientOptionalParams } from "./api/index.js";
export {
  AssetEndpointProfilesListBySubscriptionOptionalParams,
  AssetEndpointProfilesListByResourceGroupOptionalParams,
  AssetEndpointProfilesDeleteOptionalParams,
  AssetEndpointProfilesUpdateOptionalParams,
  AssetEndpointProfilesCreateOrReplaceOptionalParams,
  AssetEndpointProfilesGetOptionalParams,
} from "./api/assetEndpointProfiles/index.js";
export {
  AssetsListBySubscriptionOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsGetOptionalParams,
} from "./api/assets/index.js";
export {
  BillingContainersListBySubscriptionOptionalParams,
  BillingContainersGetOptionalParams,
} from "./api/billingContainers/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { OperationStatusGetOptionalParams } from "./api/operationStatus/index.js";
export {
  AssetEndpointProfilesOperations,
  AssetsOperations,
  BillingContainersOperations,
  OperationsOperations,
  OperationStatusOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
