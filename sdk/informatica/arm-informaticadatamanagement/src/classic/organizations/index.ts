// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementContext } from "../../api/dataManagementContext.js";
import {
  OrganizationsGetOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsGetServerlessMetadataOptionalParams,
  OrganizationsGetAllServerlessRuntimesOptionalParams,
} from "../../api/options.js";
import {
  organizationsGet,
  organizationsCreateOrUpdate,
  organizationsUpdate,
  organizationsDelete,
  organizationsListByResourceGroup,
  organizationsListBySubscription,
  organizationsGetServerlessMetadata,
  organizationsGetAllServerlessRuntimes,
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
  /** Get a InformaticaOrganizationResource */
  get: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetOptionalParams,
  ) => Promise<InformaticaOrganizationResource>;
  /** Create a InformaticaOrganizationResource */
  createOrUpdate: (
    resourceGroupName: string,
    organizationName: string,
    resource: InformaticaOrganizationResource,
    options?: OrganizationsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<InformaticaOrganizationResource>,
    InformaticaOrganizationResource
  >;
  /** Update a InformaticaOrganizationResource */
  update: (
    resourceGroupName: string,
    organizationName: string,
    properties: InformaticaOrganizationResourceUpdate,
    options?: OrganizationsUpdateOptionalParams,
  ) => Promise<InformaticaOrganizationResource>;
  /** Delete a InformaticaOrganizationResource */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List InformaticaOrganizationResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: OrganizationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<InformaticaOrganizationResource>;
  /** List InformaticaOrganizationResource resources by subscription ID */
  listBySubscription: (
    options?: OrganizationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<InformaticaOrganizationResource>;
  /** Gets Metadata of the serverless runtime environment. */
  getServerlessMetadata: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetServerlessMetadataOptionalParams,
  ) => Promise<ServerlessMetadataResponse>;
  /** Gets all serverless runtime resources in a given informatica organization resource. */
  getAllServerlessRuntimes: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetAllServerlessRuntimesOptionalParams,
  ) => Promise<InformaticaServerlessRuntimeResourceList>;
}

export function getOrganizations(
  context: DataManagementContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetOptionalParams,
    ) =>
      organizationsGet(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      resource: InformaticaOrganizationResource,
      options?: OrganizationsCreateOrUpdateOptionalParams,
    ) =>
      organizationsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      organizationName: string,
      properties: InformaticaOrganizationResourceUpdate,
      options?: OrganizationsUpdateOptionalParams,
    ) =>
      organizationsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsDeleteOptionalParams,
    ) =>
      organizationsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: OrganizationsListByResourceGroupOptionalParams,
    ) =>
      organizationsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: OrganizationsListBySubscriptionOptionalParams,
    ) => organizationsListBySubscription(context, subscriptionId, options),
    getServerlessMetadata: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetServerlessMetadataOptionalParams,
    ) =>
      organizationsGetServerlessMetadata(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        options,
      ),
    getAllServerlessRuntimes: (
      resourceGroupName: string,
      organizationName: string,
      options?: OrganizationsGetAllServerlessRuntimesOptionalParams,
    ) =>
      organizationsGetAllServerlessRuntimes(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        options,
      ),
  };
}

export function getOrganizationsOperations(
  context: DataManagementContext,
  subscriptionId: string,
): OrganizationsOperations {
  return {
    ...getOrganizations(context, subscriptionId),
  };
}
