// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AstroContext as Client,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsGetOptionalParams,
  OrganizationsGetResourcesOptionalParams,
  OrganizationsGetRolesOptionalParams,
  OrganizationsGetUsersOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsManageRolesOptionalParams,
  OrganizationsRemoveUserOptionalParams,
  OrganizationsUpdateOptionalParams,
} from "../index.js";
import {
  OrganizationResource,
  organizationResourceSerializer,
  organizationResourceDeserializer,
  OrganizationResourceUpdate,
  organizationResourceUpdateSerializer,
  _OrganizationResourceListResult,
  _organizationResourceListResultDeserializer,
  GetUsersRequest,
  getUsersRequestSerializer,
  GetUsersSuccessResponse,
  getUsersSuccessResponseDeserializer,
  GetRolesRequest,
  getRolesRequestSerializer,
  GetRolesSuccessResponse,
  getRolesSuccessResponseDeserializer,
  GetResourcesRequest,
  getResourcesRequestSerializer,
  GetResourcesSuccessResponse,
  getResourcesSuccessResponseDeserializer,
  ManageRolesModel,
  manageRolesModelSerializer,
  manageRolesModelDeserializer,
  RemoveUserRequest,
  removeUserRequestSerializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _organizationsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return organizationResourceDeserializer(result.body);
}

/** Get a OrganizationResource */
export async function organizationsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): Promise<OrganizationResource> {
  const result = await _organizationsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetDeserialize(result);
}

export function _organizationsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  resource: OrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: organizationResourceSerializer(resource),
    });
}

export async function _organizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return organizationResourceDeserializer(result.body);
}

/** Create a OrganizationResource */
export function organizationsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  resource: OrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OrganizationResource>, OrganizationResource> {
  return getLongRunningPoller(
    context,
    _organizationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _organizationsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
}

export function _organizationsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: OrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: organizationResourceUpdateSerializer(properties),
    });
}

export async function _organizationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return organizationResourceDeserializer(result.body);
}

/** Update a OrganizationResource */
export function organizationsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: OrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OrganizationResource>, OrganizationResource> {
  return getLongRunningPoller(
    context,
    _organizationsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _organizationsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
}

export function _organizationsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a OrganizationResource */
export function organizationsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _organizationsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _organizationsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _organizationsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _organizationResourceListResultDeserializer(result.body);
}

/** List OrganizationResource resources by resource group */
export function organizationsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _organizationsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _organizationsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _organizationsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Astronomer.Astro/organizations",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _organizationResourceListResultDeserializer(result.body);
}

/** List OrganizationResource resources by subscription ID */
export function organizationsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _organizationsListBySubscriptionSend(context, subscriptionId, options),
    _organizationsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _organizationsGetUsersSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: GetUsersRequest,
  options: OrganizationsGetUsersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}/getUsers",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: getUsersRequestSerializer(properties),
    });
}

export async function _organizationsGetUsersDeserialize(
  result: PathUncheckedResponse,
): Promise<GetUsersSuccessResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return getUsersSuccessResponseDeserializer(result.body);
}

/** list of users with roles. */
export async function organizationsGetUsers(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: GetUsersRequest,
  options: OrganizationsGetUsersOptionalParams = { requestOptions: {} },
): Promise<GetUsersSuccessResponse> {
  const result = await _organizationsGetUsersSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsGetUsersDeserialize(result);
}

export function _organizationsGetRolesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: GetRolesRequest,
  options: OrganizationsGetRolesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}/getRoles",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: getRolesRequestSerializer(properties),
    });
}

export async function _organizationsGetRolesDeserialize(
  result: PathUncheckedResponse,
): Promise<GetRolesSuccessResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return getRolesSuccessResponseDeserializer(result.body);
}

/** list of available roles. */
export async function organizationsGetRoles(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: GetRolesRequest,
  options: OrganizationsGetRolesOptionalParams = { requestOptions: {} },
): Promise<GetRolesSuccessResponse> {
  const result = await _organizationsGetRolesSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsGetRolesDeserialize(result);
}

export function _organizationsGetResourcesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: GetResourcesRequest,
  options: OrganizationsGetResourcesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}/getResources",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: getResourcesRequestSerializer(properties),
    });
}

export async function _organizationsGetResourcesDeserialize(
  result: PathUncheckedResponse,
): Promise<GetResourcesSuccessResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return getResourcesSuccessResponseDeserializer(result.body);
}

/** list of available resources. */
export async function organizationsGetResources(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: GetResourcesRequest,
  options: OrganizationsGetResourcesOptionalParams = { requestOptions: {} },
): Promise<GetResourcesSuccessResponse> {
  const result = await _organizationsGetResourcesSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsGetResourcesDeserialize(result);
}

export function _organizationsManageRolesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: ManageRolesModel,
  options: OrganizationsManageRolesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}/manageRoles",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: manageRolesModelSerializer(properties),
    });
}

export async function _organizationsManageRolesDeserialize(
  result: PathUncheckedResponse,
): Promise<ManageRolesModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return manageRolesModelDeserializer(result.body);
}

/** manage roles of users */
export async function organizationsManageRoles(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: ManageRolesModel,
  options: OrganizationsManageRolesOptionalParams = { requestOptions: {} },
): Promise<ManageRolesModel> {
  const result = await _organizationsManageRolesSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsManageRolesDeserialize(result);
}

export function _organizationsRemoveUserSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: RemoveUserRequest,
  options: OrganizationsRemoveUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}/removeUser",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: removeUserRequestSerializer(properties),
    });
}

export async function _organizationsRemoveUserDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** remove user */
export async function organizationsRemoveUser(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: RemoveUserRequest,
  options: OrganizationsRemoveUserOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _organizationsRemoveUserSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsRemoveUserDeserialize(result);
}
