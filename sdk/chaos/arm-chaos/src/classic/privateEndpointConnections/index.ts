// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams,
  PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams,
  PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams,
} from "../../api/options.js";
import {
  privateEndpointConnectionsGetAPrivateEndpointConnection,
  privateEndpointConnectionsDeleteAPrivateEndpointConnection,
  privateEndpointConnectionsListPrivateEndpointConnections,
} from "../../api/privateEndpointConnections/index.js";
import { PrivateEndpointConnection } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateEndpointConnections operations. */
export interface PrivateEndpointConnectionsOperations {
  /** Gets information about a private endpoint connection under a private access resource. */
  getAPrivateEndpointConnection: (
    resourceGroupName: string,
    privateAccessName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams,
  ) => Promise<PrivateEndpointConnection>;
  /** Deletes a private endpoint connection under a private access resource. */
  deleteAPrivateEndpointConnection: (
    resourceGroupName: string,
    privateAccessName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List information about private endpoint connections under a private access resource */
  listPrivateEndpointConnections: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateEndpointConnection>;
}

export function getPrivateEndpointConnections(
  context: ChaosManagementContext,
  subscriptionId: string,
) {
  return {
    getAPrivateEndpointConnection: (
      resourceGroupName: string,
      privateAccessName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams,
    ) =>
      privateEndpointConnectionsGetAPrivateEndpointConnection(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        privateEndpointConnectionName,
        options,
      ),
    deleteAPrivateEndpointConnection: (
      resourceGroupName: string,
      privateAccessName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams,
    ) =>
      privateEndpointConnectionsDeleteAPrivateEndpointConnection(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        privateEndpointConnectionName,
        options,
      ),
    listPrivateEndpointConnections: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams,
    ) =>
      privateEndpointConnectionsListPrivateEndpointConnections(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        options,
      ),
  };
}

export function getPrivateEndpointConnectionsOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): PrivateEndpointConnectionsOperations {
  return {
    ...getPrivateEndpointConnections(context, subscriptionId),
  };
}
