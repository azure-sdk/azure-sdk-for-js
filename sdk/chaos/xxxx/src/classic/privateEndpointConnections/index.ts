// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams,
  PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams,
  PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams,
} from "../../api/options.js";
import {
  privateEndpointConnectionsListPrivateEndpointConnections,
  privateEndpointConnectionsDeleteAPrivateEndpointConnection,
  privateEndpointConnectionsGetAPrivateEndpointConnection,
} from "../../api/privateEndpointConnections/index.js";
import { PrivateEndpointConnection } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateEndpointConnections operations. */
export interface PrivateEndpointConnectionsOperations {
  /** List information about private endpoint connections under a private access resource */
  listPrivateEndpointConnections: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /** Deletes a private endpoint connection under a private access resource. */
  deleteAPrivateEndpointConnection: (
    resourceGroupName: string,
    privateAccessName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets information about a private endpoint connection under a private access resource. */
  getAPrivateEndpointConnection: (
    resourceGroupName: string,
    privateAccessName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams,
  ) => Promise<PrivateEndpointConnection>;
}

function _getPrivateEndpointConnections(context: ChaosManagementContext) {
  return {
    listPrivateEndpointConnections: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams,
    ) =>
      privateEndpointConnectionsListPrivateEndpointConnections(
        context,
        resourceGroupName,
        privateAccessName,
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
        resourceGroupName,
        privateAccessName,
        privateEndpointConnectionName,
        options,
      ),
    getAPrivateEndpointConnection: (
      resourceGroupName: string,
      privateAccessName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams,
    ) =>
      privateEndpointConnectionsGetAPrivateEndpointConnection(
        context,
        resourceGroupName,
        privateAccessName,
        privateEndpointConnectionName,
        options,
      ),
  };
}

export function _getPrivateEndpointConnectionsOperations(
  context: ChaosManagementContext,
): PrivateEndpointConnectionsOperations {
  return {
    ..._getPrivateEndpointConnections(context),
  };
}
