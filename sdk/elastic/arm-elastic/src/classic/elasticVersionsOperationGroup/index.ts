// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext } from "../../api/elasticContext.js";
import { ElasticVersionListFormat } from "../../models/models.js";
import { ElasticVersionsOperationGroupListOptionalParams } from "../../api/elasticVersionsOperationGroup/options.js";
import { list } from "../../api/elasticVersionsOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ElasticVersionsOperationGroup operations. */
export interface ElasticVersionsOperationGroupOperations {
  /** Get a list of available versions for a region. */
  list: (
    region: string,
    options?: ElasticVersionsOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<ElasticVersionListFormat>;
}

function _getElasticVersionsOperationGroup(context: ElasticContext) {
  return {
    list: (region: string, options?: ElasticVersionsOperationGroupListOptionalParams) =>
      list(context, region, options),
  };
}

export function _getElasticVersionsOperationGroupOperations(
  context: ElasticContext,
): ElasticVersionsOperationGroupOperations {
  return {
    ..._getElasticVersionsOperationGroup(context),
  };
}
