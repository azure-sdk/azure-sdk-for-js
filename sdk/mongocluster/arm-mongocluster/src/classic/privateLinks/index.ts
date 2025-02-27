// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MongoClusterManagementContext } from "../../api/mongoClusterManagementContext.js";
import { PrivateLinksListByMongoClusterOptionalParams } from "../../api/options.js";
import { privateLinksListByMongoCluster } from "../../api/privateLinks/index.js";
import { PrivateLinkResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a PrivateLinks operations. */
export interface PrivateLinksOperations {
  /** list private links on the given resource */
  listByMongoCluster: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: PrivateLinksListByMongoClusterOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
}

function _getPrivateLinks(context: MongoClusterManagementContext) {
  return {
    listByMongoCluster: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: PrivateLinksListByMongoClusterOptionalParams,
    ) => privateLinksListByMongoCluster(context, resourceGroupName, mongoClusterName, options),
  };
}

export function _getPrivateLinksOperations(
  context: MongoClusterManagementContext,
): PrivateLinksOperations {
  return {
    ..._getPrivateLinks(context),
  };
}
