// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext } from "../../api/notificationHubsContext.js";
import { PrivateEndpointConnectionResource } from "../../models/models.js";
import {
  PrivateEndpointConnectionResourcesListOptionalParams,
  PrivateEndpointConnectionResourcesDeleteOptionalParams,
  PrivateEndpointConnectionResourcesUpdateOptionalParams,
  PrivateEndpointConnectionResourcesGetOptionalParams,
} from "../../api/privateEndpointConnectionResources/options.js";
import {
  list,
  $delete,
  update,
  get,
} from "../../api/privateEndpointConnectionResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateEndpointConnectionResources operations. */
export interface PrivateEndpointConnectionResourcesOperations {
  /**
   * Returns all Private Endpoint Connections that belong to the given Notification Hubs namespace.
   * This is a public API that can be called directly by Notification Hubs users.
   */
  list: (
    resourceGroupName: string,
    namespaceName: string,
    options?: PrivateEndpointConnectionResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateEndpointConnectionResource>;
  /**
   * Deletes the Private Endpoint Connection.
   * This is a public API that can be called directly by Notification Hubs users.
   */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionResourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /**
   * Approves or rejects Private Endpoint Connection.
   * This is a public API that can be called directly by Notification Hubs users.
   */
  update: (
    resourceGroupName: string,
    namespaceName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnectionResource,
    options?: PrivateEndpointConnectionResourcesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<PrivateEndpointConnectionResource>,
    PrivateEndpointConnectionResource
  >;
  /**
   * Returns a Private Endpoint Connection with a given name.
   * This is a public API that can be called directly by Notification Hubs users.
   */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionResourcesGetOptionalParams,
  ) => Promise<PrivateEndpointConnectionResource>;
}

function _getPrivateEndpointConnectionResources(context: NotificationHubsContext) {
  return {
    list: (
      resourceGroupName: string,
      namespaceName: string,
      options?: PrivateEndpointConnectionResourcesListOptionalParams,
    ) => list(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionResourcesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, privateEndpointConnectionName, options),
    update: (
      resourceGroupName: string,
      namespaceName: string,
      privateEndpointConnectionName: string,
      parameters: PrivateEndpointConnectionResource,
      options?: PrivateEndpointConnectionResourcesUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        namespaceName,
        privateEndpointConnectionName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, privateEndpointConnectionName, options),
  };
}

export function _getPrivateEndpointConnectionResourcesOperations(
  context: NotificationHubsContext,
): PrivateEndpointConnectionResourcesOperations {
  return {
    ..._getPrivateEndpointConnectionResources(context),
  };
}
