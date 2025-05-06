// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementContext } from "../../api/dataManagementContext.js";
import {
  InformaticaServerlessRuntimeResource,
  InformaticaServerlessRuntimeResourceUpdate,
  CheckDependenciesResponse,
} from "../../models/models.js";
import {
  ServerlessRuntimesServerlessResourceByIdOptionalParams,
  ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
  ServerlessRuntimesCheckDependenciesOptionalParams,
  ServerlessRuntimesUpdateOptionalParams,
  ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
  ServerlessRuntimesDeleteOptionalParams,
  ServerlessRuntimesCreateOrUpdateOptionalParams,
  ServerlessRuntimesGetOptionalParams,
} from "../../api/serverlessRuntimes/options.js";
import {
  serverlessResourceById,
  startFailedServerlessRuntime,
  checkDependencies,
  update,
  listByInformaticaOrganizationResource,
  $delete,
  createOrUpdate,
  get,
} from "../../api/serverlessRuntimes/operations.js";
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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
      serverlessResourceById(
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
      startFailedServerlessRuntime(
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
      checkDependencies(
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
      update(
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
      listByInformaticaOrganizationResource(context, resourceGroupName, organizationName, options),
    delete: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      options?: ServerlessRuntimesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, organizationName, serverlessRuntimeName, options),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      serverlessRuntimeName: string,
      resource: InformaticaServerlessRuntimeResource,
      options?: ServerlessRuntimesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
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
    ) => get(context, resourceGroupName, organizationName, serverlessRuntimeName, options),
  };
}

export function _getServerlessRuntimesOperations(
  context: DataManagementContext,
): ServerlessRuntimesOperations {
  return {
    ..._getServerlessRuntimes(context),
  };
}
