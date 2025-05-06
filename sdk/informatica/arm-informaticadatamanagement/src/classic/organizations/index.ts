// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementContext } from "../../api/dataManagementContext.js";
import {
  InformaticaOrganizationResource,
  InformaticaOrganizationResourceUpdate,
  ServerlessMetadataResponse,
  InformaticaServerlessRuntimeResourceList,
} from "../../models/models.js";
import {
  OrganizationsGetAllServerlessRuntimesOptionalParams,
  OrganizationsGetServerlessMetadataOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsGetOptionalParams,
} from "../../api/organizations/options.js";
import {
  getAllServerlessRuntimes,
  getServerlessMetadata,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/organizations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Organizations operations. */
export interface OrganizationsOperations {
  /** Gets all serverless runtime resources in a given informatica organization resource. */
  getAllServerlessRuntimes: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetAllServerlessRuntimesOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResourceList>;
  /** Gets Metadata of the serverless runtime environment. */
  getServerlessMetadata: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetServerlessMetadataOptionalParams,
  ) => Promise<ServerlessMetadataResponse>;
  /** List InformaticaOrganizationResource resources by subscription ID */
  listBySubscription: (
    options?: OrganizationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<InformaticaOrganizationResource>;
  /** List InformaticaOrganizationResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: OrganizationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<InformaticaOrganizationResource>;
  /** Delete a InformaticaOrganizationResource */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a InformaticaOrganizationResource */
  update: (
    resourceGroupName: string,
    organizationName: string,
    properties: InformaticaOrganizationResourceUpdate,
    options?: OrganizationsUpdateOptionalParams,
  ) => Promise<InformaticaOrganizationResource>;
  /** Create a InformaticaOrganizationResource */
  createOrUpdate: (
    resourceGroupName: string,
    organizationName: string,
    resource: InformaticaOrganizationResource,
    options?: OrganizationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<InformaticaOrganizationResource>, InformaticaOrganizationResource>;
  /** Get a InformaticaOrganizationResource */
  get: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetOptionalParams,
  ) => Promise<InformaticaOrganizationResource>;
}

function _getOrganizations(context: DataManagementContext) {
  return {
    getAllServerlessRuntimes: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetAllServerlessRuntimesOptionalParams,
    ) => getAllServerlessRuntimes(context, resourceGroupName, organizationName, options),
    getServerlessMetadata: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetServerlessMetadataOptionalParams,
    ) => getServerlessMetadata(context, resourceGroupName, organizationName, options),
    listBySubscription: (options?: OrganizationsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: OrganizationsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, organizationName, options),
    update: (
      resourceGroupName: string,
      organizationName: string,
      properties: InformaticaOrganizationResourceUpdate,
      options?: OrganizationsUpdateOptionalParams,
    ) => update(context, resourceGroupName, organizationName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      resource: InformaticaOrganizationResource,
      options?: OrganizationsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, organizationName, resource, options),
    get: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetOptionalParams,
    ) => get(context, resourceGroupName, organizationName, options),
  };
}

export function _getOrganizationsOperations(
  context: DataManagementContext,
): OrganizationsOperations {
  return {
    ..._getOrganizations(context),
  };
}
