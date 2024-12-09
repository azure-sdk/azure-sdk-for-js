// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createDeviceRegistry,
  DeviceRegistryContext,
  DeviceRegistryClientOptionalParams,
} from "./deviceRegistryContext.js";
export {
  OperationsListOptionalParams,
  OperationStatusGetOptionalParams,
  AssetsGetOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsListBySubscriptionOptionalParams,
  AssetEndpointProfilesGetOptionalParams,
  AssetEndpointProfilesCreateOrReplaceOptionalParams,
  AssetEndpointProfilesUpdateOptionalParams,
  AssetEndpointProfilesDeleteOptionalParams,
  AssetEndpointProfilesListByResourceGroupOptionalParams,
  AssetEndpointProfilesListBySubscriptionOptionalParams,
  BillingContainersGetOptionalParams,
  BillingContainersListBySubscriptionOptionalParams,
} from "./options.js";
export {
  assetEndpointProfilesGet,
  assetEndpointProfilesCreateOrReplace,
  assetEndpointProfilesUpdate,
  assetEndpointProfilesDelete,
  assetEndpointProfilesListByResourceGroup,
  assetEndpointProfilesListBySubscription,
} from "./assetEndpointProfiles/index.js";
export {
  assetsGet,
  assetsCreateOrReplace,
  assetsUpdate,
  assetsDelete,
  assetsListByResourceGroup,
  assetsListBySubscription,
} from "./assets/index.js";
export {
  billingContainersGet,
  billingContainersListBySubscription,
} from "./billingContainers/index.js";
export { operationsList } from "./operations/index.js";
export { operationStatusGet } from "./operationStatus/index.js";
