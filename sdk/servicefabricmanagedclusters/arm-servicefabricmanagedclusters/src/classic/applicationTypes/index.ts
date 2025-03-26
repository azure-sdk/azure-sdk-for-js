// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import { ApplicationTypeResource, ApplicationTypeUpdateParameters } from "../../models/models.js";
import {
  ApplicationTypesListOptionalParams,
  ApplicationTypesDeleteOptionalParams,
  ApplicationTypesUpdateOptionalParams,
  ApplicationTypesCreateOrUpdateOptionalParams,
  ApplicationTypesGetOptionalParams,
} from "../../api/applicationTypes/options.js";
import {
  applicationTypesList,
  applicationTypesDelete,
  applicationTypesUpdate,
  applicationTypesCreateOrUpdate,
  applicationTypesGet,
} from "../../api/applicationTypes/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ApplicationTypes operations. */
export interface ApplicationTypesOperations {
  /** Gets all application type name resources created or in the process of being created in the Service Fabric managed cluster resource. */
  list: (
    resourceGroupName: string,
    clusterName: string,
    options?: ApplicationTypesListOptionalParams,
  ) => PagedAsyncIterableIterator<ApplicationTypeResource>;
  /** Delete a Service Fabric managed application type name resource with the specified name. */
  delete: (
    resourceGroupName: string,
    clusterName: string,
    applicationTypeName: string,
    options?: ApplicationTypesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the tags of an application type resource of a given managed cluster. */
  update: (
    resourceGroupName: string,
    clusterName: string,
    applicationTypeName: string,
    parameters: ApplicationTypeUpdateParameters,
    options?: ApplicationTypesUpdateOptionalParams,
  ) => Promise<ApplicationTypeResource>;
  /** Create or update a Service Fabric managed application type name resource with the specified name. */
  createOrUpdate: (
    resourceGroupName: string,
    clusterName: string,
    applicationTypeName: string,
    parameters: ApplicationTypeResource,
    options?: ApplicationTypesCreateOrUpdateOptionalParams,
  ) => Promise<ApplicationTypeResource>;
  /** Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric managed cluster resource. */
  get: (
    resourceGroupName: string,
    clusterName: string,
    applicationTypeName: string,
    options?: ApplicationTypesGetOptionalParams,
  ) => Promise<ApplicationTypeResource>;
}

function _getApplicationTypes(context: ServiceFabricContext) {
  return {
    list: (
      resourceGroupName: string,
      clusterName: string,
      options?: ApplicationTypesListOptionalParams,
    ) => applicationTypesList(context, resourceGroupName, clusterName, options),
    delete: (
      resourceGroupName: string,
      clusterName: string,
      applicationTypeName: string,
      options?: ApplicationTypesDeleteOptionalParams,
    ) =>
      applicationTypesDelete(context, resourceGroupName, clusterName, applicationTypeName, options),
    update: (
      resourceGroupName: string,
      clusterName: string,
      applicationTypeName: string,
      parameters: ApplicationTypeUpdateParameters,
      options?: ApplicationTypesUpdateOptionalParams,
    ) =>
      applicationTypesUpdate(
        context,
        resourceGroupName,
        clusterName,
        applicationTypeName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      clusterName: string,
      applicationTypeName: string,
      parameters: ApplicationTypeResource,
      options?: ApplicationTypesCreateOrUpdateOptionalParams,
    ) =>
      applicationTypesCreateOrUpdate(
        context,
        resourceGroupName,
        clusterName,
        applicationTypeName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      clusterName: string,
      applicationTypeName: string,
      options?: ApplicationTypesGetOptionalParams,
    ) => applicationTypesGet(context, resourceGroupName, clusterName, applicationTypeName, options),
  };
}

export function _getApplicationTypesOperations(
  context: ServiceFabricContext,
): ApplicationTypesOperations {
  return {
    ..._getApplicationTypes(context),
  };
}
