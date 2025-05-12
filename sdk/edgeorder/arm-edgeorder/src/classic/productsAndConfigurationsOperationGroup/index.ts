// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeOrderContext } from "../../api/edgeOrderContext.js";
import {
  ConfigurationsRequest,
  Configuration,
  ProductFamiliesRequest,
  ProductFamily,
  ProductFamiliesMetadataDetails,
} from "../../models/models.js";
import {
  ProductsAndConfigurationsOperationGroupListProductFamiliesMetadataOptionalParams,
  ProductsAndConfigurationsOperationGroupListProductFamiliesOptionalParams,
  ProductsAndConfigurationsOperationGroupListConfigurationsOptionalParams,
} from "../../api/productsAndConfigurationsOperationGroup/options.js";
import {
  listProductFamiliesMetadata,
  listProductFamilies,
  listConfigurations,
} from "../../api/productsAndConfigurationsOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ProductsAndConfigurationsOperationGroup operations. */
export interface ProductsAndConfigurationsOperationGroupOperations {
  /** List product families metadata for the given subscription. */
  listProductFamiliesMetadata: (
    options?: ProductsAndConfigurationsOperationGroupListProductFamiliesMetadataOptionalParams,
  ) => PagedAsyncIterableIterator<ProductFamiliesMetadataDetails>;
  /** List product families for the given subscription. */
  listProductFamilies: (
    productFamiliesRequest: ProductFamiliesRequest,
    options?: ProductsAndConfigurationsOperationGroupListProductFamiliesOptionalParams,
  ) => PagedAsyncIterableIterator<ProductFamily>;
  /** List configurations for the given product family, product line and product for the given subscription. */
  listConfigurations: (
    configurationsRequest: ConfigurationsRequest,
    options?: ProductsAndConfigurationsOperationGroupListConfigurationsOptionalParams,
  ) => PagedAsyncIterableIterator<Configuration>;
}

function _getProductsAndConfigurationsOperationGroup(context: EdgeOrderContext) {
  return {
    listProductFamiliesMetadata: (
      options?: ProductsAndConfigurationsOperationGroupListProductFamiliesMetadataOptionalParams,
    ) => listProductFamiliesMetadata(context, options),
    listProductFamilies: (
      productFamiliesRequest: ProductFamiliesRequest,
      options?: ProductsAndConfigurationsOperationGroupListProductFamiliesOptionalParams,
    ) => listProductFamilies(context, productFamiliesRequest, options),
    listConfigurations: (
      configurationsRequest: ConfigurationsRequest,
      options?: ProductsAndConfigurationsOperationGroupListConfigurationsOptionalParams,
    ) => listConfigurations(context, configurationsRequest, options),
  };
}

export function _getProductsAndConfigurationsOperationGroupOperations(
  context: EdgeOrderContext,
): ProductsAndConfigurationsOperationGroupOperations {
  return {
    ..._getProductsAndConfigurationsOperationGroup(context),
  };
}
