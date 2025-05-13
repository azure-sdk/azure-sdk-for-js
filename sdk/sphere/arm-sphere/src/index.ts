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
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  Catalog,
  CatalogProperties,
  KnownProvisioningState,
  ProvisioningState,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  CatalogUpdate,
  CountDevicesResponse,
  CountElementsResponse,
  Deployment,
  DeploymentProperties,
  Image,
  ImageProperties,
  KnownRegionalDataBoundary,
  RegionalDataBoundary,
  KnownImageType,
  ImageType,
  ProxyResource,
  ListDeviceGroupsRequest,
  DeviceGroup,
  DeviceGroupProperties,
  KnownOSFeedType,
  OSFeedType,
  KnownUpdatePolicy,
  UpdatePolicy,
  KnownAllowCrashDumpCollection,
  AllowCrashDumpCollection,
  DeviceInsight,
  Device,
  DeviceProperties,
  Certificate,
  CertificateProperties,
  KnownCertificateStatus,
  CertificateStatus,
  CertificateChainResponse,
  ProofOfPossessionNonceRequest,
  ProofOfPossessionNonceResponse,
  Product,
  ProductProperties,
  ProductUpdate,
  ProductUpdateProperties,
  DeviceGroupUpdate,
  DeviceGroupUpdateProperties,
  ClaimDevicesRequest,
  DeviceUpdate,
  DeviceUpdateProperties,
  GenerateCapabilityImageRequest,
  KnownCapabilityType,
  CapabilityType,
  SignedCapabilityImageResponse,
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
