// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Image } from "../../models/models.js";
import {
  ImagesListByCatalogOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesGetOptionalParams,
} from "../../api/images/options.js";
import {
  imagesListByCatalog,
  imagesDelete,
  imagesCreateOrUpdate,
  imagesGet,
} from "../../api/images/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Images operations. */
export interface ImagesOperations {
  /** List Image resources by Catalog */
  listByCatalog: (
    resourceGroupName: string,
    catalogName: string,
    options?: ImagesListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<Image>;
  /** Delete a Image */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a Image */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    resource: Image,
    options?: ImagesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Image>, Image>;
  /** Get a Image */
  get: (
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesGetOptionalParams,
  ) => Promise<Image>;
}

function _getImages(context: AzureSphereContext) {
  return {
    listByCatalog: (
      resourceGroupName: string,
      catalogName: string,
      options?: ImagesListByCatalogOptionalParams,
    ) => imagesListByCatalog(context, resourceGroupName, catalogName, options),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesDeleteOptionalParams,
    ) => imagesDelete(context, resourceGroupName, catalogName, imageName, options),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      resource: Image,
      options?: ImagesCreateOrUpdateOptionalParams,
    ) =>
      imagesCreateOrUpdate(context, resourceGroupName, catalogName, imageName, resource, options),
    get: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesGetOptionalParams,
    ) => imagesGet(context, resourceGroupName, catalogName, imageName, options),
  };
}

export function _getImagesOperations(context: AzureSphereContext): ImagesOperations {
  return {
    ..._getImages(context),
  };
}
