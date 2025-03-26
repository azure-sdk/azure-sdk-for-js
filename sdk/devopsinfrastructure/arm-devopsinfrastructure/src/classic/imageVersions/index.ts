// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DevOpsInfrastructureContext } from "../../api/devOpsInfrastructureContext.js";
import { ImageVersion } from "../../models/models.js";
import { ImageVersionsListByImageOptionalParams } from "../../api/imageVersions/options.js";
import { imageVersionsListByImage } from "../../api/imageVersions/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ImageVersions operations. */
export interface ImageVersionsOperations {
  /** List ImageVersion resources by Image */
  listByImage: (
    resourceGroupName: string,
    imageName: string,
    options?: ImageVersionsListByImageOptionalParams,
  ) => PagedAsyncIterableIterator<ImageVersion>;
}

function _getImageVersions(context: DevOpsInfrastructureContext) {
  return {
    listByImage: (
      resourceGroupName: string,
      imageName: string,
      options?: ImageVersionsListByImageOptionalParams,
    ) => imageVersionsListByImage(context, resourceGroupName, imageName, options),
  };
}

export function _getImageVersionsOperations(
  context: DevOpsInfrastructureContext,
): ImageVersionsOperations {
  return {
    ..._getImageVersions(context),
  };
}
