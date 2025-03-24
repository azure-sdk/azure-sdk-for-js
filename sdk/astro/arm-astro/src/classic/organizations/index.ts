// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AstroContext } from "../../api/astroContext.js";
import {
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsGetOptionalParams,
} from "../../api/options.js";
import {
  organizationsListBySubscription,
  organizationsListByResourceGroup,
  organizationsDelete,
  organizationsUpdate,
  organizationsCreateOrUpdate,
  organizationsGet,
} from "../../api/organizations/index.js";
import { OrganizationResource, OrganizationResourceUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Organizations operations. */
export interface OrganizationsOperations {
  /** List OrganizationResource resources by subscription ID */
  listBySubscription: (
    options?: OrganizationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<OrganizationResource>;
  /** List OrganizationResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: OrganizationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<OrganizationResource>;
  /** Delete a OrganizationResource */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a OrganizationResource */
  update: (
    resourceGroupName: string,
    organizationName: string,
    properties: OrganizationResourceUpdate,
    options?: OrganizationsUpdateOptionalParams,
  ) => PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
  /** Create a OrganizationResource */
  createOrUpdate: (
    resourceGroupName: string,
    organizationName: string,
    resource: OrganizationResource,
    options?: OrganizationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
  /** Get a OrganizationResource */
  get: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetOptionalParams,
  ) => Promise<OrganizationResource>;
}

function _getOrganizations(context: AstroContext) {
  return {
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
      properties: OrganizationResourceUpdate,
      options?: OrganizationsUpdateOptionalParams,
    ) => organizationsUpdate(context, resourceGroupName, organizationName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      resource: OrganizationResource,
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

export function _getOrganizationsOperations(context: AstroContext): OrganizationsOperations {
  return {
    ..._getOrganizations(context),
  };
}
