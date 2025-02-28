// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementContext } from "../../api/dataManagementContext.js";
import {
  OrganizationsGetAllServerlessRuntimesOptionalParams,
  OrganizationsGetServerlessMetadataOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsGetOptionalParams,
} from "../../api/options.js";
import {
  organizationsGetAllServerlessRuntimes,
  organizationsGetServerlessMetadata,
  organizationsListBySubscription,
  organizationsListByResourceGroup,
  organizationsDelete,
  organizationsUpdate,
  organizationsCreateOrUpdate,
  organizationsGet,
} from "../../api/organizations/index.js";
import {
  InformaticaOrganizationResource,
  InformaticaOrganizationResourceUpdate,
  ServerlessMetadataResponse,
  InformaticaServerlessRuntimeResourceList,
} from "../../models/models.js";
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
    ) =>
      organizationsGetAllServerlessRuntimes(context, resourceGroupName, organizationName, options),
    getServerlessMetadata: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetServerlessMetadataOptionalParams,
    ) => organizationsGetServerlessMetadata(context, resourceGroupName, organizationName, options),
    listBySubscription: (options?: OrganizationsListBySubscriptionOptionalParams) =>
      organizationsListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: OrganizationsListByResourceGroupOptionalParams,
    ) => organizationsListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsDeleteOptionalParams,
    ) => organizationsDelete(context, resourceGroupName, organizationName, options),
    update: (
      resourceGroupName: string,
      organizationName: string,
      properties: InformaticaOrganizationResourceUpdate,
      options?: OrganizationsUpdateOptionalParams,
    ) => organizationsUpdate(context, resourceGroupName, organizationName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      resource: InformaticaOrganizationResource,
      options?: OrganizationsCreateOrUpdateOptionalParams,
    ) =>
      organizationsCreateOrUpdate(context, resourceGroupName, organizationName, resource, options),
    get: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetOptionalParams,
    ) => organizationsGet(context, resourceGroupName, organizationName, options),
  };
}

export function _getOrganizationsOperations(
  context: DataManagementContext,
): OrganizationsOperations {
  return {
    ..._getOrganizations(context),
  };
}
