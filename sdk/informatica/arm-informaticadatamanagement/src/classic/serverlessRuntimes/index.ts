// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementContext } from "../../api/dataManagementContext.js";
import {
  ServerlessRuntimesGetOptionalParams,
  ServerlessRuntimesCreateOrUpdateOptionalParams,
  ServerlessRuntimesDeleteOptionalParams,
  ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
  ServerlessRuntimesUpdateOptionalParams,
  ServerlessRuntimesCheckDependenciesOptionalParams,
  ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
  ServerlessRuntimesServerlessResourceByIdOptionalParams,
} from "../../api/options.js";
import {
  serverlessRuntimesGet,
  serverlessRuntimesCreateOrUpdate,
  serverlessRuntimesDelete,
  serverlessRuntimesListByInformaticaOrganizationResource,
  serverlessRuntimesUpdate,
  serverlessRuntimesCheckDependencies,
  serverlessRuntimesStartFailedServerlessRuntime,
  serverlessRuntimesServerlessResourceById,
} from "../../api/serverlessRuntimes/index.js";
import {
  InformaticaServerlessRuntimeResource,
  InformaticaServerlessRuntimeResourceUpdate,
  CheckDependenciesResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ServerlessRuntimes operations. */
export interface ServerlessRuntimesOperations {
  /** Get a InformaticaServerlessRuntimeResource */
  get: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesGetOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResource>;
  /** Create a InformaticaServerlessRuntimeResource */
  createOrUpdate: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    resource: InformaticaServerlessRuntimeResource,
    options?: ServerlessRuntimesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<InformaticaServerlessRuntimeResource>,
    InformaticaServerlessRuntimeResource
  >;
  /** Delete a InformaticaServerlessRuntimeResource */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List InformaticaServerlessRuntimeResource resources by InformaticaOrganizationResource */
  listByInformaticaOrganizationResource: (
    resourceGroupName: string,
    organizationName: string,
    options?: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
  ) => PagedAsyncIterableIterator<InformaticaServerlessRuntimeResource>;
  /** Update a InformaticaServerlessRuntimeResource */
  update: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    properties: InformaticaServerlessRuntimeResourceUpdate,
    options?: ServerlessRuntimesUpdateOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResource>;
  /** Checks all dependencies for a serverless runtime resource */
  checkDependencies: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesCheckDependenciesOptionalParams,
  ) => Promise<CheckDependenciesResponse>;
  /** Starts a failed runtime resource */
  startFailedServerlessRuntime: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
  ) => Promise<void>;
  /** Returns a serverless runtime resource by ID */
  serverlessResourceById: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesServerlessResourceByIdOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResource>;
}

export function getServerlessRuntimes(
  context: DataManagementContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesGetOptionalParams,
    ) =>
      serverlessRuntimesGet(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      resource: InformaticaServerlessRuntimeResource,
      options?: ServerlessRuntimesCreateOrUpdateOptionalParams,
    ) =>
      serverlessRuntimesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesDeleteOptionalParams,
    ) =>
      serverlessRuntimesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        options,
      ),
    listByInformaticaOrganizationResource: (
      resourceGroupName: string,
      organizationName: string,
      options?: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
    ) =>
      serverlessRuntimesListByInformaticaOrganizationResource(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        options,
      ),
    update: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      properties: InformaticaServerlessRuntimeResourceUpdate,
      options?: ServerlessRuntimesUpdateOptionalParams,
    ) =>
      serverlessRuntimesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        properties,
        options,
      ),
    checkDependencies: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesCheckDependenciesOptionalParams,
    ) =>
      serverlessRuntimesCheckDependencies(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        options,
      ),
    startFailedServerlessRuntime: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
    ) =>
      serverlessRuntimesStartFailedServerlessRuntime(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        options,
      ),
    serverlessResourceById: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesServerlessResourceByIdOptionalParams,
    ) =>
      serverlessRuntimesServerlessResourceById(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        options,
      ),
  };
}

export function getServerlessRuntimesOperations(
  context: DataManagementContext,
  subscriptionId: string,
): ServerlessRuntimesOperations {
  return {
    ...getServerlessRuntimes(context, subscriptionId),
  };
}
