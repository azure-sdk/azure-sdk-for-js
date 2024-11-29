// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DataManagementContext as Client,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsGetAllServerlessRuntimesOptionalParams,
  OrganizationsGetOptionalParams,
  OrganizationsGetServerlessMetadataOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsUpdateOptionalParams,
} from "../index.js";
import {
  InformaticaOrganizationResource,
  informaticaOrganizationResourceSerializer,
  informaticaOrganizationResourceDeserializer,
  InformaticaOrganizationResourceUpdate,
  informaticaOrganizationResourceUpdateSerializer,
  _InformaticaOrganizationResourceListResult,
  _informaticaOrganizationResourceListResultDeserializer,
  ServerlessMetadataResponse,
  serverlessMetadataResponseDeserializer,
  InformaticaServerlessRuntimeResourceList,
  informaticaServerlessRuntimeResourceListDeserializer,
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaOrganizationResourceDeserializer(result.body);
}

/** Get a InformaticaOrganizationResource */
export async function organizationsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): Promise<InformaticaOrganizationResource> {
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
  resource: InformaticaOrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: informaticaOrganizationResourceSerializer(resource),
    });
}

export async function _organizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaOrganizationResourceDeserializer(result.body);
}

/** Create a InformaticaOrganizationResource */
export function organizationsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  resource: InformaticaOrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<InformaticaOrganizationResource>,
  InformaticaOrganizationResource
> {
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
  ) as PollerLike<
    OperationState<InformaticaOrganizationResource>,
    InformaticaOrganizationResource
  >;
}

export function _organizationsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: InformaticaOrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: informaticaOrganizationResourceUpdateSerializer(properties),
    });
}

export async function _organizationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaOrganizationResourceDeserializer(result.body);
}

/** Update a InformaticaOrganizationResource */
export async function organizationsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: InformaticaOrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): Promise<InformaticaOrganizationResource> {
  const result = await _organizationsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsUpdateDeserialize(result);
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
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

/** Delete a InformaticaOrganizationResource */
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaOrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _informaticaOrganizationResourceListResultDeserializer(result.body);
}

/** List InformaticaOrganizationResource resources by resource group */
export function organizationsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InformaticaOrganizationResource> {
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
      "/subscriptions/{subscriptionId}/providers/Informatica.DataManagement/organizations",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaOrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _informaticaOrganizationResourceListResultDeserializer(result.body);
}

/** List InformaticaOrganizationResource resources by subscription ID */
export function organizationsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InformaticaOrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _organizationsListBySubscriptionSend(context, subscriptionId, options),
    _organizationsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _organizationsGetServerlessMetadataSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetServerlessMetadataOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/getServerlessMetadata",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetServerlessMetadataDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerlessMetadataResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return serverlessMetadataResponseDeserializer(result.body);
}

/** Gets Metadata of the serverless runtime environment. */
export async function organizationsGetServerlessMetadata(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetServerlessMetadataOptionalParams = {
    requestOptions: {},
  },
): Promise<ServerlessMetadataResponse> {
  const result = await _organizationsGetServerlessMetadataSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetServerlessMetadataDeserialize(result);
}

export function _organizationsGetAllServerlessRuntimesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetAllServerlessRuntimesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/getAllServerlessRuntimes",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetAllServerlessRuntimesDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaServerlessRuntimeResourceListDeserializer(result.body);
}

/** Gets all serverless runtime resources in a given informatica organization resource. */
export async function organizationsGetAllServerlessRuntimes(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetAllServerlessRuntimesOptionalParams = {
    requestOptions: {},
  },
): Promise<InformaticaServerlessRuntimeResourceList> {
  const result = await _organizationsGetAllServerlessRuntimesSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetAllServerlessRuntimesDeserialize(result);
}
