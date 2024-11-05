// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { GlobalReachConnection } from "../../models/models.js";
import {
  globalReachConnectionsList,
  globalReachConnectionsGet,
  globalReachConnectionsCreateOrUpdate,
  globalReachConnectionsDelete,
} from "../../api/globalReachConnections/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  GlobalReachConnectionsListOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a GlobalReachConnections operations. */
export interface GlobalReachConnectionsOperations {
  /** List GlobalReachConnection resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: GlobalReachConnectionsListOptionalParams,
  ) => PagedAsyncIterableIterator<GlobalReachConnection>;
  /** Get a GlobalReachConnection */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    options?: GlobalReachConnectionsGetOptionalParams,
  ) => Promise<GlobalReachConnection>;
  /** Create a GlobalReachConnection */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    globalReachConnection: GlobalReachConnection,
    options?: GlobalReachConnectionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
  /** Delete a GlobalReachConnection */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    options?: GlobalReachConnectionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getGlobalReachConnections(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: GlobalReachConnectionsListOptionalParams,
    ) =>
      globalReachConnectionsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      options?: GlobalReachConnectionsGetOptionalParams,
    ) =>
      globalReachConnectionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      globalReachConnection: GlobalReachConnection,
      options?: GlobalReachConnectionsCreateOrUpdateOptionalParams,
    ) =>
      globalReachConnectionsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        globalReachConnection,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      options?: GlobalReachConnectionsDeleteOptionalParams,
    ) =>
      globalReachConnectionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        options,
      ),
  };
}

export function getGlobalReachConnectionsOperations(
  context: AVSContext,
  subscriptionId: string,
): GlobalReachConnectionsOperations {
  return {
    ...getGlobalReachConnections(context, subscriptionId),
  };
}
