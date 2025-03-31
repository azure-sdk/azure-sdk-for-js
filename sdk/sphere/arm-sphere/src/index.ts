// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { AzureSphereClient } from "./azureSphereClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Device,
  DeviceProperties,
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
  DeviceUpdate,
  DeviceUpdateProperties,
  GenerateCapabilityImageRequest,
  KnownCapabilityType,
  CapabilityType,
  SignedCapabilityImageResponse,
  Deployment,
  DeploymentProperties,
  Image,
  ImageProperties,
  KnownRegionalDataBoundary,
  RegionalDataBoundary,
  KnownImageType,
  ImageType,
  DeviceGroup,
  DeviceGroupProperties,
  KnownOSFeedType,
  OSFeedType,
  KnownUpdatePolicy,
  UpdatePolicy,
  KnownAllowCrashDumpCollection,
  AllowCrashDumpCollection,
  DeviceGroupUpdate,
  DeviceGroupUpdateProperties,
  ClaimDevicesRequest,
  CountDevicesResponse,
  CountElementsResponse,
  Product,
  ProductProperties,
  ProductUpdate,
  ProductUpdateProperties,
  Certificate,
  CertificateProperties,
  KnownCertificateStatus,
  CertificateStatus,
  CertificateChainResponse,
  ProofOfPossessionNonceRequest,
  ProofOfPossessionNonceResponse,
  Catalog,
  CatalogProperties,
  TrackedResource,
  CatalogUpdate,
  ListDeviceGroupsRequest,
  DeviceInsight,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export { AzureSphereClientOptionalParams } from "./api/index.js";
export {
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
} from "./api/catalogs/index.js";
export {
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesGetOptionalParams,
} from "./api/certificates/index.js";
export {
  DeploymentsListByDeviceGroupOptionalParams,
  DeploymentsDeleteOptionalParams,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsGetOptionalParams,
} from "./api/deployments/index.js";
export {
  DeviceGroupsCountDevicesOptionalParams,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsDeleteOptionalParams,
  DeviceGroupsUpdateOptionalParams,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsGetOptionalParams,
} from "./api/deviceGroups/index.js";
export {
  DevicesGenerateCapabilityImageOptionalParams,
  DevicesListByDeviceGroupOptionalParams,
  DevicesDeleteOptionalParams,
  DevicesUpdateOptionalParams,
  DevicesCreateOrUpdateOptionalParams,
  DevicesGetOptionalParams,
} from "./api/devices/index.js";
export {
  ImagesListByCatalogOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesGetOptionalParams,
} from "./api/images/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsListByCatalogOptionalParams,
  ProductsDeleteOptionalParams,
  ProductsUpdateOptionalParams,
  ProductsCreateOrUpdateOptionalParams,
  ProductsGetOptionalParams,
} from "./api/products/index.js";
export {
  CatalogsOperations,
  CertificatesOperations,
  DeploymentsOperations,
  DeviceGroupsOperations,
  DevicesOperations,
  ImagesOperations,
  OperationsOperations,
  ProductsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
