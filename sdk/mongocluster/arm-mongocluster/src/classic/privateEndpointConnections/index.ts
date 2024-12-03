// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MongoClusterManagementContext } from "../../api/mongoClusterManagementContext.js";
import {
  PrivateEndpointConnectionsListByMongoClusterOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsDeleteOptionalParams,
} from "../../api/options.js";
import {
  privateEndpointConnectionsListByMongoCluster,
  privateEndpointConnectionsGet,
  privateEndpointConnectionsCreate,
  privateEndpointConnectionsDelete,
} from "../../api/privateEndpointConnections/index.js";
import { PrivateEndpointConnectionResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateEndpointConnections operations. */
export interface PrivateEndpointConnectionsOperations {
  /** List existing private connections */
  listByMongoCluster: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: PrivateEndpointConnectionsListByMongoClusterOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateEndpointConnectionResource>;
  /** Get a specific private connection */
  get: (
    resourceGroupName: string,
    mongoClusterName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams,
  ) => Promise<PrivateEndpointConnectionResource>;
  /** Create a Private endpoint connection */
  create: (
    resourceGroupName: string,
    mongoClusterName: string,
    privateEndpointConnectionName: string,
    resource: PrivateEndpointConnectionResource,
    options?: PrivateEndpointConnectionsCreateOptionalParams,
  ) => PollerLike<
    OperationState<PrivateEndpointConnectionResource>,
    PrivateEndpointConnectionResource
  >;
  /** Delete the private endpoint connection */
  delete: (
    resourceGroupName: string,
    mongoClusterName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getPrivateEndpointConnections(
  context: MongoClusterManagementContext,
  subscriptionId: string,
) {
  return {
    listByMongoCluster: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: PrivateEndpointConnectionsListByMongoClusterOptionalParams,
    ) =>
      privateEndpointConnectionsListByMongoCluster(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
    get: (
      resourceGroupName: string,
      mongoClusterName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsGetOptionalParams,
    ) =>
      privateEndpointConnectionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        privateEndpointConnectionName,
        options,
      ),
    create: (
      resourceGroupName: string,
      mongoClusterName: string,
      privateEndpointConnectionName: string,
      resource: PrivateEndpointConnectionResource,
      options?: PrivateEndpointConnectionsCreateOptionalParams,
    ) =>
      privateEndpointConnectionsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        privateEndpointConnectionName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      mongoClusterName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsDeleteOptionalParams,
    ) =>
      privateEndpointConnectionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        privateEndpointConnectionName,
        options,
      ),
  };
}

export function getPrivateEndpointConnectionsOperations(
  context: MongoClusterManagementContext,
  subscriptionId: string,
): PrivateEndpointConnectionsOperations {
  return {
    ...getPrivateEndpointConnections(context, subscriptionId),
  };
}
