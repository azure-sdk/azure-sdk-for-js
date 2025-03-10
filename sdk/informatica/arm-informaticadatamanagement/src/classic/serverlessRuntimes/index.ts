// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementContext } from "../../api/dataManagementContext.js";
import {
  ServerlessRuntimesServerlessResourceByIdOptionalParams,
  ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
  ServerlessRuntimesCheckDependenciesOptionalParams,
  ServerlessRuntimesUpdateOptionalParams,
  ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
  ServerlessRuntimesDeleteOptionalParams,
  ServerlessRuntimesCreateOrUpdateOptionalParams,
  ServerlessRuntimesGetOptionalParams,
} from "../../api/options.js";
import {
  serverlessRuntimesServerlessResourceById,
  serverlessRuntimesStartFailedServerlessRuntime,
  serverlessRuntimesCheckDependencies,
  serverlessRuntimesUpdate,
  serverlessRuntimesListByInformaticaOrganizationResource,
  serverlessRuntimesDelete,
  serverlessRuntimesCreateOrUpdate,
  serverlessRuntimesGet,
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
  /** Returns a serverless runtime resource by ID */
  serverlessResourceById: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesServerlessResourceByIdOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResource>;
  /** Starts a failed runtime resource */
  startFailedServerlessRuntime: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
  ) => Promise<void>;
  /** Checks all dependencies for a serverless runtime resource */
  checkDependencies: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesCheckDependenciesOptionalParams,
  ) => Promise<CheckDependenciesResponse>;
  /** Update a InformaticaServerlessRuntimeResource */
  update: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    properties: InformaticaServerlessRuntimeResourceUpdate,
    options?: ServerlessRuntimesUpdateOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResource>;
  /** List InformaticaServerlessRuntimeResource resources by InformaticaOrganizationResource */
  listByInformaticaOrganizationResource: (
    resourceGroupName: string,
    organizationName: string,
    options?: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
  ) => PagedAsyncIterableIterator<InformaticaServerlessRuntimeResource>;
  /** Delete a InformaticaServerlessRuntimeResource */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
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
  /** Get a InformaticaServerlessRuntimeResource */
  get: (
    resourceGroupName: string,
    organizationName: string,
    serverlessRuntimeName: string,
    options?: ServerlessRuntimesGetOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResource>;
}

function _getServerlessRuntimes(context: DataManagementContext) {
  return {
    serverlessResourceById: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesServerlessResourceByIdOptionalParams,
    ) =>
      serverlessRuntimesServerlessResourceById(
        context,
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
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
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
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
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
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        properties,
        options,
      ),
    listByInformaticaOrganizationResource: (
      resourceGroupName: string,
      organizationName: string,
      options?: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
    ) =>
      serverlessRuntimesListByInformaticaOrganizationResource(
        context,
        resourceGroupName,
        organizationName,
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
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesGetOptionalParams,
    ) =>
      serverlessRuntimesGet(
        context,
        resourceGroupName,
        organizationName,
        serverlessRuntimeName,
        options,
      ),
  };
}

export function _getServerlessRuntimesOperations(
  context: DataManagementContext,
): ServerlessRuntimesOperations {
  return {
    ..._getServerlessRuntimes(context),
  };
}
