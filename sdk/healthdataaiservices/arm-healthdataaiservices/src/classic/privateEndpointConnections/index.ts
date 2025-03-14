// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthDataAIServicesContext } from "../../api/healthDataAIServicesContext.js";
import {
  PrivateEndpointConnectionsListByDeidServiceOptionalParams,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
} from "../../api/options.js";
import {
  privateEndpointConnectionsListByDeidService,
  privateEndpointConnectionsDelete,
  privateEndpointConnectionsCreate,
  privateEndpointConnectionsGet,
} from "../../api/privateEndpointConnections/index.js";
import { PrivateEndpointConnectionResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateEndpointConnections operations. */
export interface PrivateEndpointConnectionsOperations {
  /** List private endpoint connections on the given resource */
  listByDeidService: (
    resourceGroupName: string,
    deidServiceName: string,
    options?: PrivateEndpointConnectionsListByDeidServiceOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateEndpointConnectionResource>;
  /** Delete the private endpoint connection */
  delete: (
    resourceGroupName: string,
    deidServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a Private endpoint connection */
  create: (
    resourceGroupName: string,
    deidServiceName: string,
    privateEndpointConnectionName: string,
    resource: PrivateEndpointConnectionResource,
    options?: PrivateEndpointConnectionsCreateOptionalParams,
  ) => PollerLike<
    OperationState<PrivateEndpointConnectionResource>,
    PrivateEndpointConnectionResource
  >;
  /** Get a specific private connection */
  get: (
    resourceGroupName: string,
    deidServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams,
  ) => Promise<PrivateEndpointConnectionResource>;
}

function _getPrivateEndpointConnections(context: HealthDataAIServicesContext) {
  return {
    listByDeidService: (
      resourceGroupName: string,
      deidServiceName: string,
      options?: PrivateEndpointConnectionsListByDeidServiceOptionalParams,
    ) =>
      privateEndpointConnectionsListByDeidService(
        context,
        resourceGroupName,
        deidServiceName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      deidServiceName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsDeleteOptionalParams,
    ) =>
      privateEndpointConnectionsDelete(
        context,
        resourceGroupName,
        deidServiceName,
        privateEndpointConnectionName,
        options,
      ),
    create: (
      resourceGroupName: string,
      deidServiceName: string,
      privateEndpointConnectionName: string,
      resource: PrivateEndpointConnectionResource,
      options?: PrivateEndpointConnectionsCreateOptionalParams,
    ) =>
      privateEndpointConnectionsCreate(
        context,
        resourceGroupName,
        deidServiceName,
        privateEndpointConnectionName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      deidServiceName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsGetOptionalParams,
    ) =>
      privateEndpointConnectionsGet(
        context,
        resourceGroupName,
        deidServiceName,
        privateEndpointConnectionName,
        options,
      ),
  };
}

export function _getPrivateEndpointConnectionsOperations(
  context: HealthDataAIServicesContext,
): PrivateEndpointConnectionsOperations {
  return {
    ..._getPrivateEndpointConnections(context),
  };
}
