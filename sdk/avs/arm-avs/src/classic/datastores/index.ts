// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { Datastore } from "../../models/models.js";
import {
  datastoresList,
  datastoresGet,
  datastoresCreateOrUpdate,
  datastoresDelete,
} from "../../api/datastores/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DatastoresListOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a Datastores operations. */
export interface DatastoresOperations {
  /** List Datastore resources by Cluster */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: DatastoresListOptionalParams,
  ) => PagedAsyncIterableIterator<Datastore>;
  /** Get a Datastore */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresGetOptionalParams,
  ) => Promise<Datastore>;
  /** Create a Datastore */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    datastore: Datastore,
    options?: DatastoresCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Datastore>, Datastore>;
  /** Delete a Datastore */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getDatastores(context: AVSContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: DatastoresListOptionalParams,
    ) =>
      datastoresList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      datastoreName: string,
      options?: DatastoresGetOptionalParams,
    ) =>
      datastoresGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      datastoreName: string,
      datastore: Datastore,
      options?: DatastoresCreateOrUpdateOptionalParams,
    ) =>
      datastoresCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        datastore,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      datastoreName: string,
      options?: DatastoresDeleteOptionalParams,
    ) =>
      datastoresDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        options,
      ),
  };
}

export function getDatastoresOperations(
  context: AVSContext,
  subscriptionId: string,
): DatastoresOperations {
  return {
    ...getDatastores(context, subscriptionId),
  };
}
