// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AuthoritiesCreateOrUpdateOptionalParams,
  AuthoritiesDeleteOptionalParams,
  AuthoritiesGetOptionalParams,
  AuthoritiesListByResourceGroupOptionalParams,
  AuthoritiesListBySubscriptionOptionalParams,
  AuthoritiesUpdateOptionalParams,
  VerifiedIdContext as Client,
} from "../index.js";
import {
  Authority,
  authoritySerializer,
  authorityDeserializer,
  errorResponseDeserializer,
  AuthorityUpdate,
  authorityUpdateSerializer,
  _AuthorityListResult,
  _authorityListResultDeserializer,
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

export function _authoritiesListBySubscriptionSend(
  context: Client,
  options: AuthoritiesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.VerifiedId/authorities{?api-version}",
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

export async function _authoritiesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AuthorityListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _authorityListResultDeserializer(result.body);
}

/** List Authority resources by subscription ID */
export function authoritiesListBySubscription(
  context: Client,
  options: AuthoritiesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Authority> {
  return buildPagedAsyncIterator(
    context,
    () => _authoritiesListBySubscriptionSend(context, options),
    _authoritiesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _authoritiesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: AuthoritiesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities{?api-version}",
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

export async function _authoritiesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AuthorityListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _authorityListResultDeserializer(result.body);
}

/** List Authority resources by resource group */
export function authoritiesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: AuthoritiesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Authority> {
  return buildPagedAsyncIterator(
    context,
    () => _authoritiesListByResourceGroupSend(context, resourceGroupName, options),
    _authoritiesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _authoritiesDeleteSend(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      authorityName: authorityName,
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

export async function _authoritiesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Authority */
export async function authoritiesDelete(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _authoritiesDeleteSend(context, resourceGroupName, authorityName, options);
  return _authoritiesDeleteDeserialize(result);
}

export function _authoritiesUpdateSend(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  properties: AuthorityUpdate,
  options: AuthoritiesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      authorityName: authorityName,
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
    body: authorityUpdateSerializer(properties),
  });
}

export async function _authoritiesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Authority> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return authorityDeserializer(result.body);
}

/** Update a Authority */
export async function authoritiesUpdate(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  properties: AuthorityUpdate,
  options: AuthoritiesUpdateOptionalParams = { requestOptions: {} },
): Promise<Authority> {
  const result = await _authoritiesUpdateSend(
    context,
    resourceGroupName,
    authorityName,
    properties,
    options,
  );
  return _authoritiesUpdateDeserialize(result);
}

export function _authoritiesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  resource: Authority,
  options: AuthoritiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      authorityName: authorityName,
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
    body: authoritySerializer(resource),
  });
}

export async function _authoritiesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Authority> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return authorityDeserializer(result.body);
}

/** Create a Authority */
export function authoritiesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  resource: Authority,
  options: AuthoritiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Authority>, Authority> {
  return getLongRunningPoller(context, _authoritiesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _authoritiesCreateOrUpdateSend(context, resourceGroupName, authorityName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Authority>, Authority>;
}

export function _authoritiesGetSend(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      authorityName: authorityName,
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

export async function _authoritiesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Authority> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return authorityDeserializer(result.body);
}

/** Get a Authority */
export async function authoritiesGet(
  context: Client,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesGetOptionalParams = { requestOptions: {} },
): Promise<Authority> {
  const result = await _authoritiesGetSend(context, resourceGroupName, authorityName, options);
  return _authoritiesGetDeserialize(result);
}
