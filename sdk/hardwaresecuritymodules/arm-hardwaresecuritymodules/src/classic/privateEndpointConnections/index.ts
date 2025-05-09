// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesContext } from "../../api/hardwareSecurityModulesContext.js";
import { PrivateEndpointConnection } from "../../models/models.js";
import {
  PrivateEndpointConnectionsListByCloudHsmClusterOptionalParams,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
} from "../../api/privateEndpointConnections/options.js";
import {
  listByCloudHsmCluster,
  $delete,
  create,
  get,
} from "../../api/privateEndpointConnections/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateEndpointConnections operations. */
export interface PrivateEndpointConnectionsOperations {
  /** The List operation gets information about the private endpoint connections associated with the Cloud HSM Cluster */
  listByCloudHsmCluster: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: PrivateEndpointConnectionsListByCloudHsmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /** Deletes the private endpoint connection for the Cloud Hsm Cluster. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    peConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Creates or updates the private endpoint connection for the Cloud Hsm Cluster. */
  create: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    peConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOptionalParams,
  ) => Promise<PrivateEndpointConnection>;
  /** Gets the private endpoint connection for the Cloud Hsm Cluster. */
  get: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    peConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams,
  ) => Promise<PrivateEndpointConnection>;
}

function _getPrivateEndpointConnections(context: HardwareSecurityModulesContext) {
  return {
    listByCloudHsmCluster: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      options?: PrivateEndpointConnectionsListByCloudHsmClusterOptionalParams,
    ) => listByCloudHsmCluster(context, resourceGroupName, cloudHsmClusterName, options),
    delete: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      peConnectionName: string,
      options?: PrivateEndpointConnectionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, cloudHsmClusterName, peConnectionName, options),
    create: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      peConnectionName: string,
      properties: PrivateEndpointConnection,
      options?: PrivateEndpointConnectionsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        cloudHsmClusterName,
        peConnectionName,
        properties,
        options,
      ),
    get: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      peConnectionName: string,
      options?: PrivateEndpointConnectionsGetOptionalParams,
    ) => get(context, resourceGroupName, cloudHsmClusterName, peConnectionName, options),
  };
}

export function _getPrivateEndpointConnectionsOperations(
  context: HardwareSecurityModulesContext,
): PrivateEndpointConnectionsOperations {
  return {
    ..._getPrivateEndpointConnections(context),
  };
}
