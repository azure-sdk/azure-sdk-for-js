// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Image } from "../../models/models.js";
import {
  imagesGet,
  imagesCreateOrUpdate,
  imagesDelete,
  imagesListByCatalog,
} from "../../api/images/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ImagesGetOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesListByCatalogOptionalParams,
} from "../../models/options.js";

/** Interface representing a Images operations. */
export interface ImagesOperations {
  /** Get a Image */
  get: (
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesGetOptionalParams,
  ) => Promise<Image>;
  /** Create a Image */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    resource: Image,
    options?: ImagesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Image>, Image>;
  /** Delete a Image */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Image resources by Catalog */
  listByCatalog: (
    resourceGroupName: string,
    catalogName: string,
    options?: ImagesListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<Image>;
}

export function getImages(context: AzureSphereContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesGetOptionalParams,
    ) =>
      imagesGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      resource: Image,
      options?: ImagesCreateOrUpdateOptionalParams,
    ) =>
      imagesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesDeleteOptionalParams,
    ) =>
      imagesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        options,
      ),
    listByCatalog: (
      resourceGroupName: string,
      catalogName: string,
      options?: ImagesListByCatalogOptionalParams,
    ) =>
      imagesListByCatalog(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
  };
}

export function getImagesOperations(
  context: AzureSphereContext,
  subscriptionId: string,
): ImagesOperations {
  return {
    ...getImages(context, subscriptionId),
  };
}
