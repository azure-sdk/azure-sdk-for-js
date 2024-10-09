// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  Device,
  Deployment,
  Image,
  DeviceGroup,
  CountDevicesResponse,
  Catalog,
  CatalogUpdate,
  ListDeviceGroupsRequest,
  DeviceInsight,
} from "../../models/models.js";
import {
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
} from "../../api/catalogs/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CatalogsGetOptionalParams,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsUpdateOptionalParams,
  CatalogsDeleteOptionalParams,
  CatalogsListByResourceGroupOptionalParams,
  CatalogsListBySubscriptionOptionalParams,
  CatalogsCountDevicesOptionalParams,
  CatalogsListDeploymentsOptionalParams,
  CatalogsListDeviceGroupsOptionalParams,
  CatalogsListDeviceInsightsOptionalParams,
  CatalogsListDevicesOptionalParams,
  CatalogsUploadImageOptionalParams,
} from "../../models/options.js";

/** Interface representing a Catalogs operations. */
export interface CatalogsOperations {
  /** Get a Catalog */
  get: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsGetOptionalParams,
  ) => Promise<Catalog>;
  /** Create a Catalog */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    resource: Catalog,
    options?: CatalogsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Catalog>, Catalog>;
  /** Update a Catalog */
  update: (
    resourceGroupName: string,
    catalogName: string,
    properties: CatalogUpdate,
    options?: CatalogsUpdateOptionalParams,
  ) => Promise<Catalog>;
  /** Delete a Catalog */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Catalog resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Catalog>;
  /** List Catalog resources by subscription ID */
  listBySubscription: (
    options?: CatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Catalog>;
  /** Counts devices in catalog. */
  countDevices: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsCountDevicesOptionalParams,
  ) => Promise<CountDevicesResponse>;
  /** Lists deployments for catalog. */
  listDeployments: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsListDeploymentsOptionalParams,
  ) => PagedAsyncIterableIterator<Deployment>;
  /** List the device groups for the catalog. */
  listDeviceGroups: (
    resourceGroupName: string,
    catalogName: string,
    listDeviceGroupsRequest: ListDeviceGroupsRequest,
    options?: CatalogsListDeviceGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceGroup>;
  /** Lists device insights for catalog. */
  listDeviceInsights: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsListDeviceInsightsOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceInsight>;
  /** Lists devices for catalog. */
  listDevices: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsListDevicesOptionalParams,
  ) => PagedAsyncIterableIterator<Device>;
  /** Creates an image. Use this action when the image ID is unknown. */
  uploadImage: (
    resourceGroupName: string,
    catalogName: string,
    uploadImageRequest: Image,
    options?: CatalogsUploadImageOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getCatalogs(
  context: AzureSphereContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsGetOptionalParams,
    ) =>
      catalogsGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      resource: Catalog,
      options?: CatalogsCreateOrUpdateOptionalParams,
    ) =>
      catalogsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      catalogName: string,
      properties: CatalogUpdate,
      options?: CatalogsUpdateOptionalParams,
    ) =>
      catalogsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsDeleteOptionalParams,
    ) =>
      catalogsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CatalogsListByResourceGroupOptionalParams,
    ) =>
      catalogsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (options?: CatalogsListBySubscriptionOptionalParams) =>
      catalogsListBySubscription(context, subscriptionId, options),
    countDevices: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsCountDevicesOptionalParams,
    ) =>
      catalogsCountDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listDeployments: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsListDeploymentsOptionalParams,
    ) =>
      catalogsListDeployments(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listDeviceGroups: (
      resourceGroupName: string,
      catalogName: string,
      listDeviceGroupsRequest: ListDeviceGroupsRequest,
      options?: CatalogsListDeviceGroupsOptionalParams,
    ) =>
      catalogsListDeviceGroups(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        listDeviceGroupsRequest,
        options,
      ),
    listDeviceInsights: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsListDeviceInsightsOptionalParams,
    ) =>
      catalogsListDeviceInsights(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listDevices: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsListDevicesOptionalParams,
    ) =>
      catalogsListDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    uploadImage: (
      resourceGroupName: string,
      catalogName: string,
      uploadImageRequest: Image,
      options?: CatalogsUploadImageOptionalParams,
    ) =>
      catalogsUploadImage(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        uploadImageRequest,
        options,
      ),
  };
}

export function getCatalogsOperations(
  context: AzureSphereContext,
  subscriptionId: string,
): CatalogsOperations {
  return {
    ...getCatalogs(context, subscriptionId),
  };
}
