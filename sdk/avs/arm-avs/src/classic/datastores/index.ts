// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  datastoresList,
  datastoresGet,
  datastoresCreateOrUpdate,
  datastoresDelete,
} from "../../api/datastores/index.js";
import {
  DatastoresListOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresDeleteOptionalParams,
} from "../../api/options.js";
import { Datastore } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

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

export function getDatastores(context: AvsContext, subscriptionId: string) {
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
  context: AvsContext,
  subscriptionId: string,
): DatastoresOperations {
  return {
    ...getDatastores(context, subscriptionId),
  };
}
