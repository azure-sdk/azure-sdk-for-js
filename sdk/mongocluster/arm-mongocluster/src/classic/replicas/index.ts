// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MongoClusterManagementContext } from "../../api/mongoClusterManagementContext.js";
import { ReplicasListByParentOptionalParams } from "../../api/options.js";
import { replicasListByParent } from "../../api/replicas/index.js";
import { Replica } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Replicas operations. */
export interface ReplicasOperations {
  /** List all the replicas for the mongo cluster. */
  listByParent: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: ReplicasListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<Replica>;
}

function _getReplicas(context: MongoClusterManagementContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: ReplicasListByParentOptionalParams,
    ) => replicasListByParent(context, resourceGroupName, mongoClusterName, options),
  };
}

export function _getReplicasOperations(context: MongoClusterManagementContext): ReplicasOperations {
  return {
    ..._getReplicas(context),
  };
}
