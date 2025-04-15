// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { ServerInstance, UpdateServerInstanceRequest } from "../../models/models.js";
import {
  ServerInstancesListBySapInstanceOptionalParams,
  ServerInstancesDeleteOptionalParams,
  ServerInstancesUpdateOptionalParams,
  ServerInstancesCreateOptionalParams,
  ServerInstancesGetOptionalParams,
} from "../../api/serverInstances/options.js";
import {
  listBySapInstance,
  $delete,
  update,
  create,
  get,
} from "../../api/serverInstances/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ServerInstances operations. */
export interface ServerInstancesOperations {
  /** Lists the Server Instance resources for the given SAP Instance resource. */
  listBySapInstance: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    options?: ServerInstancesListBySapInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<ServerInstance>;
  /** Deletes the Server Instance resource. <br><br>;This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    options?: ServerInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the Server Instance resource. This operation on a resource by end user will return a Bad Request error. */
  update: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    properties: UpdateServerInstanceRequest,
    options?: ServerInstancesUpdateOptionalParams,
  ) => Promise<ServerInstance>;
  /** Creates the Server Instance resource. <br><br>;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
  create: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    resource: ServerInstance,
    options?: ServerInstancesCreateOptionalParams,
  ) => PollerLike<OperationState<ServerInstance>, ServerInstance>;
  /** Gets the Server Instance resource. */
  get: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    options?: ServerInstancesGetOptionalParams,
  ) => Promise<ServerInstance>;
}

function _getServerInstances(context: WorkloadsContext) {
  return {
    listBySapInstance: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      options?: ServerInstancesListBySapInstanceOptionalParams,
    ) =>
      listBySapInstance(context, resourceGroupName, sapDiscoverySiteName, sapInstanceName, options),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      serverInstanceName: string,
      options?: ServerInstancesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        options,
      ),
    update: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      serverInstanceName: string,
      properties: UpdateServerInstanceRequest,
      options?: ServerInstancesUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        properties,
        options,
      ),
    create: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      serverInstanceName: string,
      resource: ServerInstance,
      options?: ServerInstancesCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      serverInstanceName: string,
      options?: ServerInstancesGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        options,
      ),
  };
}

export function _getServerInstancesOperations(
  context: WorkloadsContext,
): ServerInstancesOperations {
  return {
    ..._getServerInstances(context),
  };
}
