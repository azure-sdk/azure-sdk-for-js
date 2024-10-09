// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createDeviceRegistry,
  DeviceRegistryContext,
  DeviceRegistryClientOptionalParams,
} from "./deviceRegistryContext.js";
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
export {
  discoveredAssetEndpointProfilesGet,
  discoveredAssetEndpointProfilesCreateOrReplace,
  discoveredAssetEndpointProfilesUpdate,
  discoveredAssetEndpointProfilesDelete,
  discoveredAssetEndpointProfilesListByResourceGroup,
  discoveredAssetEndpointProfilesListBySubscription,
} from "./discoveredAssetEndpointProfiles/index.js";
export {
  discoveredAssetsGet,
  discoveredAssetsCreateOrReplace,
  discoveredAssetsUpdate,
  discoveredAssetsDelete,
  discoveredAssetsListByResourceGroup,
  discoveredAssetsListBySubscription,
} from "./discoveredAssets/index.js";
export { operationsList } from "./operations/index.js";
export { operationStatusGet } from "./operationStatus/index.js";
export {
  schemaRegistriesGet,
  schemaRegistriesCreateOrReplace,
  schemaRegistriesUpdate,
  schemaRegistriesDelete,
  schemaRegistriesListByResourceGroup,
  schemaRegistriesListBySubscription,
} from "./schemaRegistries/index.js";
export {
  schemasGet,
  schemasCreateOrReplace,
  schemasDelete,
  schemasListBySchemaRegistry,
} from "./schemas/index.js";
export {
  schemaVersionsGet,
  schemaVersionsCreateOrReplace,
  schemaVersionsDelete,
  schemaVersionsListBySchema,
} from "./schemaVersions/index.js";
