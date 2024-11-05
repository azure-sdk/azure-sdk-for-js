// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DbNode, DbNodeAction } from "../../models/models.js";
import {
  dbNodesGet,
  dbNodesListByCloudVmCluster,
  dbNodesAction,
} from "../../api/dbNodes/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DbNodesGetOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
  DbNodesActionOptionalParams,
} from "../../models/options.js";

/** Interface representing a DbNodes operations. */
export interface DbNodesOperations {
  /** Get a DbNode */
  get: (
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
    options?: DbNodesGetOptionalParams,
  ) => Promise<DbNode>;
  /** List DbNode resources by CloudVmCluster */
  listByCloudVmCluster: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: DbNodesListByCloudVmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<DbNode>;
  /** VM actions on DbNode of VM Cluster by the provided filter */
  action: (
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
    body: DbNodeAction,
    options?: DbNodesActionOptionalParams,
  ) => PollerLike<OperationState<DbNode>, DbNode>;
}

export function getDbNodes(context: DatabaseContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      cloudvmclustername: string,
      dbnodeocid: string,
      options?: DbNodesGetOptionalParams,
    ) =>
      dbNodesGet(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        dbnodeocid,
        options,
      ),
    listByCloudVmCluster: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: DbNodesListByCloudVmClusterOptionalParams,
    ) =>
      dbNodesListByCloudVmCluster(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    action: (
      resourceGroupName: string,
      cloudvmclustername: string,
      dbnodeocid: string,
      body: DbNodeAction,
      options?: DbNodesActionOptionalParams,
    ) =>
      dbNodesAction(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        dbnodeocid,
        body,
        options,
      ),
  };
}

export function getDbNodesOperations(
  context: DatabaseContext,
  subscriptionId: string,
): DbNodesOperations {
  return {
    ...getDbNodes(context, subscriptionId),
  };
}
