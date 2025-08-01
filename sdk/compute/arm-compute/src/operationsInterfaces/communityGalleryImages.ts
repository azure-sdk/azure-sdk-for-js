/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CommunityGalleryImage,
  CommunityGalleryImagesListOptionalParams,
  CommunityGalleryImagesGetOptionalParams,
  CommunityGalleryImagesGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CommunityGalleryImages. */
export interface CommunityGalleryImages {
  /**
   * List community gallery images inside a gallery.
   * @param location The name of Azure region.
   * @param publicGalleryName The public name of the community gallery.
   * @param options The options parameters.
   */
  list(
    location: string,
    publicGalleryName: string,
    options?: CommunityGalleryImagesListOptionalParams,
  ): PagedAsyncIterableIterator<CommunityGalleryImage>;
  /**
   * Get a community gallery image.
   * @param location The name of Azure region.
   * @param publicGalleryName The public name of the community gallery.
   * @param galleryImageName The name of the community gallery image definition.
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    options?: CommunityGalleryImagesGetOptionalParams,
  ): Promise<CommunityGalleryImagesGetResponse>;
}
