// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  DeviceGroup,
  CountDevicesResponse,
  Product,
  ProductUpdate,
} from "../../models/models.js";
import {
  productsGet,
  productsCreateOrUpdate,
  productsUpdate,
  productsDelete,
  productsListByCatalog,
  productsCountDevices,
  productsGenerateDefaultDeviceGroups,
} from "../../api/products/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ProductsGetOptionalParams,
  ProductsCreateOrUpdateOptionalParams,
  ProductsUpdateOptionalParams,
  ProductsDeleteOptionalParams,
  ProductsListByCatalogOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
} from "../../models/options.js";

/** Interface representing a Products operations. */
export interface ProductsOperations {
  /** Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsGetOptionalParams,
  ) => Promise<Product>;
  /** Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    resource: Product,
    options?: ProductsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Product>, Product>;
  /** Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
  update: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    properties: ProductUpdate,
    options?: ProductsUpdateOptionalParams,
  ) => PollerLike<OperationState<Product>, Product>;
  /** Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name' */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Product resources by Catalog */
  listByCatalog: (
    resourceGroupName: string,
    catalogName: string,
    options?: ProductsListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<Product>;
  /** Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
  countDevices: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsCountDevicesOptionalParams,
  ) => Promise<CountDevicesResponse>;
  /** Generates default device groups for the product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
  generateDefaultDeviceGroups: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsGenerateDefaultDeviceGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceGroup>;
}

export function getProducts(
  context: AzureSphereContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsGetOptionalParams,
    ) =>
      productsGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      resource: Product,
      options?: ProductsCreateOrUpdateOptionalParams,
    ) =>
      productsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      properties: ProductUpdate,
      options?: ProductsUpdateOptionalParams,
    ) =>
      productsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsDeleteOptionalParams,
    ) =>
      productsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    listByCatalog: (
      resourceGroupName: string,
      catalogName: string,
      options?: ProductsListByCatalogOptionalParams,
    ) =>
      productsListByCatalog(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    countDevices: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsCountDevicesOptionalParams,
    ) =>
      productsCountDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    generateDefaultDeviceGroups: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsGenerateDefaultDeviceGroupsOptionalParams,
    ) =>
      productsGenerateDefaultDeviceGroups(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
  };
}

export function getProductsOperations(
  context: AzureSphereContext,
  subscriptionId: string,
): ProductsOperations {
  return {
    ...getProducts(context, subscriptionId),
  };
}
