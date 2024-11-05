// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createAzureSphere,
  AzureSphereContext,
  AzureSphereClientOptionalParams,
} from "./azureSphereContext.js";
export {
  catalogsGet,
  catalogsCreateOrUpdate,
  catalogsUpdate,
  catalogsDelete,
  catalogsListByResourceGroup,
  catalogsListBySubscription,
  catalogsCountDevices,
  catalogsListDeployments,
  catalogsListDeviceGroups,
  catalogsListDeviceInsights,
  catalogsListDevices,
  catalogsUploadImage,
} from "./catalogs/index.js";
export {
  certificatesGet,
  certificatesListByCatalog,
  certificatesRetrieveCertChain,
  certificatesRetrieveProofOfPossessionNonce,
} from "./certificates/index.js";
export {
  deploymentsGet,
  deploymentsCreateOrUpdate,
  deploymentsDelete,
  deploymentsListByDeviceGroup,
} from "./deployments/index.js";
export {
  deviceGroupsGet,
  deviceGroupsCreateOrUpdate,
  deviceGroupsUpdate,
  deviceGroupsDelete,
  deviceGroupsListByProduct,
  deviceGroupsClaimDevices,
  deviceGroupsCountDevices,
} from "./deviceGroups/index.js";
export {
  devicesGet,
  devicesCreateOrUpdate,
  devicesUpdate,
  devicesDelete,
  devicesListByDeviceGroup,
  devicesGenerateCapabilityImage,
} from "./devices/index.js";
export {
  imagesGet,
  imagesCreateOrUpdate,
  imagesDelete,
  imagesListByCatalog,
} from "./images/index.js";
export { operationsList } from "./operations/index.js";
export {
  productsGet,
  productsCreateOrUpdate,
  productsUpdate,
  productsDelete,
  productsListByCatalog,
  productsCountDevices,
  productsGenerateDefaultDeviceGroups,
} from "./products/index.js";
