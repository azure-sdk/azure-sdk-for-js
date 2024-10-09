// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  ServerInstance,
  UpdateServerInstanceRequest,
} from "../../models/models.js";
import {
  serverInstancesGet,
  serverInstancesCreate,
  serverInstancesUpdate,
  serverInstancesDelete,
  serverInstancesListBySapInstance,
} from "../../api/serverInstances/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ServerInstancesGetOptionalParams,
  ServerInstancesCreateOptionalParams,
  ServerInstancesUpdateOptionalParams,
  ServerInstancesDeleteOptionalParams,
  ServerInstancesListBySapInstanceOptionalParams,
} from "../../models/options.js";

/** Interface representing a ServerInstances operations. */
export interface ServerInstancesOperations {
  /** Gets the Server Instance resource. */
  get: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    options?: ServerInstancesGetOptionalParams,
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
  /** Updates the Server Instance resource. This operation on a resource by end user will return a Bad Request error. */
  update: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    properties: UpdateServerInstanceRequest,
    options?: ServerInstancesUpdateOptionalParams,
  ) => Promise<ServerInstance>;
  /** Deletes the Server Instance resource. <br><br>;This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
  delete: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    options?: ServerInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Lists the Server Instance resources for the given SAP Instance resource. */
  listBySapInstance: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    options?: ServerInstancesListBySapInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<ServerInstance>;
}

export function getServerInstances(
  context: WorkloadsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      serverInstanceName: string,
      options?: ServerInstancesGetOptionalParams,
    ) =>
      serverInstancesGet(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
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
      serverInstancesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        resource,
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
      serverInstancesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      serverInstanceName: string,
      options?: ServerInstancesDeleteOptionalParams,
    ) =>
      serverInstancesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        options,
      ),
    listBySapInstance: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      options?: ServerInstancesListBySapInstanceOptionalParams,
    ) =>
      serverInstancesListBySapInstance(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        options,
      ),
  };
}

export function getServerInstancesOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): ServerInstancesOperations {
  return {
    ...getServerInstances(context, subscriptionId),
  };
}
