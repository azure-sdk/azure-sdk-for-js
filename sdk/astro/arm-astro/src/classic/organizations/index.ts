// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AstroContext } from "../../api/astroContext.js";
import {
  OrganizationsGetOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsGetUsersOptionalParams,
  OrganizationsGetRolesOptionalParams,
  OrganizationsGetResourcesOptionalParams,
  OrganizationsManageRolesOptionalParams,
  OrganizationsRemoveUserOptionalParams,
} from "../../api/options.js";
import {
  organizationsGet,
  organizationsCreateOrUpdate,
  organizationsUpdate,
  organizationsDelete,
  organizationsListByResourceGroup,
  organizationsListBySubscription,
  organizationsGetUsers,
  organizationsGetRoles,
  organizationsGetResources,
  organizationsManageRoles,
  organizationsRemoveUser,
} from "../../api/organizations/index.js";
import {
  OrganizationResource,
  OrganizationResourceUpdate,
  GetUsersRequest,
  GetUsersSuccessResponse,
  GetRolesRequest,
  GetRolesSuccessResponse,
  GetResourcesRequest,
  GetResourcesSuccessResponse,
  ManageRolesModel,
  RemoveUserRequest,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Organizations operations. */
export interface OrganizationsOperations {
  /** Get a OrganizationResource */
  get: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsGetOptionalParams,
  ) => Promise<OrganizationResource>;
  /** Create a OrganizationResource */
  createOrUpdate: (
    resourceGroupName: string,
    organizationName: string,
    resource: OrganizationResource,
    options?: OrganizationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
  /** Update a OrganizationResource */
  update: (
    resourceGroupName: string,
    organizationName: string,
    properties: OrganizationResourceUpdate,
    options?: OrganizationsUpdateOptionalParams,
  ) => PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
  /** Delete a OrganizationResource */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List OrganizationResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: OrganizationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<OrganizationResource>;
  /** List OrganizationResource resources by subscription ID */
  listBySubscription: (
    options?: OrganizationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<OrganizationResource>;
  /** list of users with roles. */
  getUsers: (
    resourceGroupName: string,
    organizationName: string,
    properties: GetUsersRequest,
    options?: OrganizationsGetUsersOptionalParams,
  ) => Promise<GetUsersSuccessResponse>;
  /** list of available roles. */
  getRoles: (
    resourceGroupName: string,
    organizationName: string,
    properties: GetRolesRequest,
    options?: OrganizationsGetRolesOptionalParams,
  ) => Promise<GetRolesSuccessResponse>;
  /** list of available resources. */
  getResources: (
    resourceGroupName: string,
    organizationName: string,
    properties: GetResourcesRequest,
    options?: OrganizationsGetResourcesOptionalParams,
  ) => Promise<GetResourcesSuccessResponse>;
  /** manage roles of users */
  manageRoles: (
    resourceGroupName: string,
    organizationName: string,
    properties: ManageRolesModel,
    options?: OrganizationsManageRolesOptionalParams,
  ) => Promise<ManageRolesModel>;
  /** remove user */
  removeUser: (
    resourceGroupName: string,
    organizationName: string,
    properties: RemoveUserRequest,
    options?: OrganizationsRemoveUserOptionalParams,
  ) => Promise<void>;
}

export function getOrganizations(
  context: AstroContext,
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
      resource: OrganizationResource,
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
      properties: OrganizationResourceUpdate,
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
    getUsers: (
      resourceGroupName: string,
      organizationName: string,
      properties: GetUsersRequest,
      options?: OrganizationsGetUsersOptionalParams,
    ) =>
      organizationsGetUsers(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        properties,
        options,
      ),
    getRoles: (
      resourceGroupName: string,
      organizationName: string,
      properties: GetRolesRequest,
      options?: OrganizationsGetRolesOptionalParams,
    ) =>
      organizationsGetRoles(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        properties,
        options,
      ),
    getResources: (
      resourceGroupName: string,
      organizationName: string,
      properties: GetResourcesRequest,
      options?: OrganizationsGetResourcesOptionalParams,
    ) =>
      organizationsGetResources(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        properties,
        options,
      ),
    manageRoles: (
      resourceGroupName: string,
      organizationName: string,
      properties: ManageRolesModel,
      options?: OrganizationsManageRolesOptionalParams,
    ) =>
      organizationsManageRoles(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        properties,
        options,
      ),
    removeUser: (
      resourceGroupName: string,
      organizationName: string,
      properties: RemoveUserRequest,
      options?: OrganizationsRemoveUserOptionalParams,
    ) =>
      organizationsRemoveUser(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        properties,
        options,
      ),
  };
}

export function getOrganizationsOperations(
  context: AstroContext,
  subscriptionId: string,
): OrganizationsOperations {
  return {
    ...getOrganizations(context, subscriptionId),
  };
}
