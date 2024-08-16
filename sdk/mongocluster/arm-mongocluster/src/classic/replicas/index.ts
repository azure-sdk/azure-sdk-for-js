// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DocumentDBContext } from "../../api/mongoClusterMgmtContext.js";
import { Replica } from "../../models/models.js";
import { listByParent } from "../../api/replicas/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { ReplicasListByParentOptionalParams } from "../../models/options.js";

/** Interface representing a Replicas operations. */
export interface ReplicasOperations {
  /** List all the replicas for the mongo cluster. */
  listByParent: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: ReplicasListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<Replica>;
}

export function getReplicas(
  context: DocumentDBContext,
  subscriptionId: string,
) {
  return {
    listByParent: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: ReplicasListByParentOptionalParams,
    ) =>
      listByParent(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
  };
}

export function getReplicasOperations(
  context: DocumentDBContext,
  subscriptionId: string,
): ReplicasOperations {
  return {
    ...getReplicas(context, subscriptionId),
  };
}
