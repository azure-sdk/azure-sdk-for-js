// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { dbNodesAction, dbNodesListByCloudVmCluster, dbNodesGet } from "../../api/dbNodes/index.js";
import {
  DbNodesActionOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
  DbNodesGetOptionalParams,
} from "../../api/options.js";
import { DbNode, DbNodeAction } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DbNodes operations. */
export interface DbNodesOperations {
  /** VM actions on DbNode of VM Cluster by the provided filter */
  action: (
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
    body: DbNodeAction,
    options?: DbNodesActionOptionalParams,
  ) => PollerLike<OperationState<DbNode>, DbNode>;
  /** List DbNode resources by CloudVmCluster */
  listByCloudVmCluster: (
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: DbNodesListByCloudVmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<DbNode>;
  /** Get a DbNode */
  get: (
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
    options?: DbNodesGetOptionalParams,
  ) => Promise<DbNode>;
}

function _getDbNodes(context: DatabaseContext) {
  return {
    action: (
      resourceGroupName: string,
      cloudvmclustername: string,
      dbnodeocid: string,
      body: DbNodeAction,
      options?: DbNodesActionOptionalParams,
    ) => dbNodesAction(context, resourceGroupName, cloudvmclustername, dbnodeocid, body, options),
    listByCloudVmCluster: (
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: DbNodesListByCloudVmClusterOptionalParams,
    ) => dbNodesListByCloudVmCluster(context, resourceGroupName, cloudvmclustername, options),
    get: (
      resourceGroupName: string,
      cloudvmclustername: string,
      dbnodeocid: string,
      options?: DbNodesGetOptionalParams,
    ) => dbNodesGet(context, resourceGroupName, cloudvmclustername, dbnodeocid, options),
  };
}

export function _getDbNodesOperations(context: DatabaseContext): DbNodesOperations {
  return {
    ..._getDbNodes(context),
  };
}
