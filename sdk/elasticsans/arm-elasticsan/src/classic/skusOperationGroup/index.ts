// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanContext } from "../../api/elasticSanContext.js";
import { SkuInformation } from "../../models/models.js";
import { SkusOperationGroupListOptionalParams } from "../../api/skusOperationGroup/options.js";
import { list } from "../../api/skusOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SkusOperationGroup operations. */
export interface SkusOperationGroupOperations {
  /** List all the available Skus in the region and information related to them */
  list: (
    options?: SkusOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<SkuInformation>;
}

function _getSkusOperationGroup(context: ElasticSanContext) {
  return {
    list: (options?: SkusOperationGroupListOptionalParams) => list(context, options),
  };
}

export function _getSkusOperationGroupOperations(
  context: ElasticSanContext,
): SkusOperationGroupOperations {
  return {
    ..._getSkusOperationGroup(context),
  };
}
