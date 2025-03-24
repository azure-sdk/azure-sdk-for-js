// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createAzureSphere,
  AzureSphereContext,
  AzureSphereClientOptionalParams,
} from "./azureSphereContext.js";
export {
  DevicesGenerateCapabilityImageOptionalParams,
  DevicesListByDeviceGroupOptionalParams,
  DevicesDeleteOptionalParams,
  DevicesUpdateOptionalParams,
  DevicesCreateOrUpdateOptionalParams,
  DevicesGetOptionalParams,
  DeploymentsListByDeviceGroupOptionalParams,
  DeploymentsDeleteOptionalParams,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsGetOptionalParams,
  DeviceGroupsCountDevicesOptionalParams,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsDeleteOptionalParams,
  DeviceGroupsUpdateOptionalParams,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsGetOptionalParams,
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsListByCatalogOptionalParams,
  ProductsDeleteOptionalParams,
  ProductsUpdateOptionalParams,
  ProductsCreateOrUpdateOptionalParams,
  ProductsGetOptionalParams,
  ImagesListByCatalogOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesGetOptionalParams,
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesGetOptionalParams,
  CatalogsUploadImageOptionalParams,
  CatalogsListDevicesOptionalParams,
  CatalogsListDeviceInsightsOptionalParams,
  CatalogsListDeviceGroupsOptionalParams,
  CatalogsListDeploymentsOptionalParams,
  CatalogsCountDevicesOptionalParams,
  CatalogsListBySubscriptionOptionalParams,
  CatalogsListByResourceGroupOptionalParams,
  CatalogsDeleteOptionalParams,
  CatalogsUpdateOptionalParams,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsGetOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export {
  catalogsUploadImage,
  catalogsListDevices,
  catalogsListDeviceInsights,
  catalogsListDeviceGroups,
  catalogsListDeployments,
  catalogsCountDevices,
  catalogsListBySubscription,
  catalogsListByResourceGroup,
  catalogsDelete,
  catalogsUpdate,
  catalogsCreateOrUpdate,
  catalogsGet,
} from "./catalogs/index.js";
export {
  certificatesRetrieveProofOfPossessionNonce,
  certificatesRetrieveCertChain,
  certificatesListByCatalog,
  certificatesGet,
} from "./certificates/index.js";
export {
  deploymentsListByDeviceGroup,
  deploymentsDelete,
  deploymentsCreateOrUpdate,
  deploymentsGet,
} from "./deployments/index.js";
export {
  deviceGroupsCountDevices,
  deviceGroupsClaimDevices,
  deviceGroupsListByProduct,
  deviceGroupsDelete,
  deviceGroupsUpdate,
  deviceGroupsCreateOrUpdate,
  deviceGroupsGet,
} from "./deviceGroups/index.js";
export {
  devicesGenerateCapabilityImage,
  devicesListByDeviceGroup,
  devicesDelete,
  devicesUpdate,
  devicesCreateOrUpdate,
  devicesGet,
} from "./devices/index.js";
export {
  imagesListByCatalog,
  imagesDelete,
  imagesCreateOrUpdate,
  imagesGet,
} from "./images/index.js";
export { operationsList } from "./operations/index.js";
export {
  productsGenerateDefaultDeviceGroups,
  productsCountDevices,
  productsListByCatalog,
  productsDelete,
  productsUpdate,
  productsCreateOrUpdate,
  productsGet,
} from "./products/index.js";
