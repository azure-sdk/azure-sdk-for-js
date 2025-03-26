// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AstroContext as Client } from "../index.js";
import {
  OrganizationResource,
  organizationResourceSerializer,
  organizationResourceDeserializer,
  errorResponseDeserializer,
  OrganizationResourceUpdate,
  organizationResourceUpdateSerializer,
  _OrganizationResourceListResult,
  _organizationResourceListResultDeserializer,
} from "../../models/models.js";
import {
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsGetOptionalParams,
} from "./options.js";
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

export function _organizationsListBySubscriptionSend(
  context: Client,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Astronomer.Astro/organizations{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _organizationsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _organizationResourceListResultDeserializer(result.body);
}

/** List OrganizationResource resources by subscription ID */
export function organizationsListBySubscription(
  context: Client,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrganizationResource> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _organizationsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _organizationResourceListResultDeserializer(result.body);
}

/** List OrganizationResource resources by resource group */
export function organizationsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () => _organizationsListByResourceGroupSend(context, resourceGroupName, options),
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}{?api-version}",
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
  return context.path(path).delete({
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

/** Delete a OrganizationResource */
export function organizationsDelete(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _organizationsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _organizationsDeleteSend(context, resourceGroupName, organizationName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _organizationsUpdateSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  properties: OrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}{?api-version}",
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
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: organizationResourceUpdateSerializer(properties),
  });
}

export async function _organizationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return organizationResourceDeserializer(result.body);
}

/** Update a OrganizationResource */
export function organizationsUpdate(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  properties: OrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OrganizationResource>, OrganizationResource> {
  return getLongRunningPoller(context, _organizationsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _organizationsUpdateSend(context, resourceGroupName, organizationName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
}

export function _organizationsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  resource: OrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}{?api-version}",
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
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: organizationResourceSerializer(resource),
  });
}

export async function _organizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return organizationResourceDeserializer(result.body);
}

/** Create a OrganizationResource */
export function organizationsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  resource: OrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OrganizationResource>, OrganizationResource> {
  return getLongRunningPoller(context, _organizationsCreateOrUpdateDeserialize, ["200", "201"], {
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
  }) as PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
}

export function _organizationsGetSend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}{?api-version}",
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
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _organizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return organizationResourceDeserializer(result.body);
}

/** Get a OrganizationResource */
export async function organizationsGet(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): Promise<OrganizationResource> {
  const result = await _organizationsGetSend(context, resourceGroupName, organizationName, options);
  return _organizationsGetDeserialize(result);
}
