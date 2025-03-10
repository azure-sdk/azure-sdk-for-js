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
  errorResponseDeserializer,
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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _organizationsGetAllServerlessRuntimesSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetAllServerlessRuntimesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/getAllServerlessRuntimes{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _organizationsGetAllServerlessRuntimesDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return informaticaServerlessRuntimeResourceListDeserializer(result.body);
}

/** Gets all serverless runtime resources in a given informatica organization resource. */
export async function organizationsGetAllServerlessRuntimes(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetAllServerlessRuntimesOptionalParams = {
    requestOptions: {},
  },
): Promise<InformaticaServerlessRuntimeResourceList> {
  const result = await _organizationsGetAllServerlessRuntimesSend(
    context,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetAllServerlessRuntimesDeserialize(result);
}

export function _organizationsGetServerlessMetadataSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetServerlessMetadataOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/getServerlessMetadata{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _organizationsGetServerlessMetadataDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerlessMetadataResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return serverlessMetadataResponseDeserializer(result.body);
}

/** Gets Metadata of the serverless runtime environment. */
export async function organizationsGetServerlessMetadata(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetServerlessMetadataOptionalParams = {
    requestOptions: {},
  },
): Promise<ServerlessMetadataResponse> {
  const result = await _organizationsGetServerlessMetadataSend(
    context,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetServerlessMetadataDeserialize(result);
}

export function _organizationsListBySubscriptionSend(
  context: Client,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Informatica.DataManagement/organizations{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _organizationsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaOrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _informaticaOrganizationResourceListResultDeserializer(result.body);
}

/** List InformaticaOrganizationResource resources by subscription ID */
export function organizationsListBySubscription(
  context: Client,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InformaticaOrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () => _organizationsListBySubscriptionSend(context, options),
    _organizationsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _organizationsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _organizationsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaOrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _informaticaOrganizationResourceListResultDeserializer(result.body);
}

/** List InformaticaOrganizationResource resources by resource group */
export function organizationsListByResourceGroup(
  context: Client,
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
        resourceGroupName,
        options,
      ),
    _organizationsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _organizationsDeleteSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _organizationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a InformaticaOrganizationResource */
export function organizationsDelete(
  context: Client,
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
          resourceGroupName,
          organizationName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _organizationsUpdateSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  properties: InformaticaOrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: informaticaOrganizationResourceUpdateSerializer(properties),
    });
}

export async function _organizationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return informaticaOrganizationResourceDeserializer(result.body);
}

/** Update a InformaticaOrganizationResource */
export async function organizationsUpdate(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  properties: InformaticaOrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): Promise<InformaticaOrganizationResource> {
  const result = await _organizationsUpdateSend(
    context,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsUpdateDeserialize(result);
}

export function _organizationsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  resource: InformaticaOrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: informaticaOrganizationResourceSerializer(resource),
    });
}

export async function _organizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return informaticaOrganizationResourceDeserializer(result.body);
}

/** Create a InformaticaOrganizationResource */
export function organizationsCreateOrUpdate(
  context: Client,
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

export function _organizationsGetSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _organizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return informaticaOrganizationResourceDeserializer(result.body);
}

/** Get a InformaticaOrganizationResource */
export async function organizationsGet(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): Promise<InformaticaOrganizationResource> {
  const result = await _organizationsGetSend(
    context,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetDeserialize(result);
}
