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
import { listByCatalog, $delete, createOrUpdate, get } from "../../api/images/operations.js";
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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
    ) => listByCatalog(context, resourceGroupName, catalogName, options),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, catalogName, imageName, options),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      resource: Image,
      options?: ImagesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, catalogName, imageName, resource, options),
    get: (
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesGetOptionalParams,
    ) => get(context, resourceGroupName, catalogName, imageName, options),
  };
}

export function _getImagesOperations(context: AzureSphereContext): ImagesOperations {
  return {
    ..._getImages(context),
  };
}
