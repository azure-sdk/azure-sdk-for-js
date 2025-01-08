// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosManagementContext as Client,
  PrivateAccessesCreateOrUpdateOptionalParams,
  PrivateAccessesDeleteOptionalParams,
  PrivateAccessesGetOptionalParams,
  PrivateAccessesListAllOptionalParams,
  PrivateAccessesListOptionalParams,
  PrivateAccessesPrivateLinkResourcesOptionalParams,
  PrivateAccessesUpdateOptionalParams,
} from "../index.js";
import {
  PrivateAccess,
  privateAccessSerializer,
  privateAccessDeserializer,
  PrivateAccessPatch,
  privateAccessPatchSerializer,
  _PrivateAccessListResult,
  _privateAccessListResultDeserializer,
  _PrivateLinkResourceListResult,
  _privateLinkResourceListResultDeserializer,
  PrivateLinkResource,
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

export function _privateAccessesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateAccessesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}",
      subscriptionId,
      resourceGroupName,
      privateAccessName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateAccessesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateAccess> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return privateAccessDeserializer(result.body);
}

/** Get a private access resource */
export async function privateAccessesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateAccessesGetOptionalParams = { requestOptions: {} },
): Promise<PrivateAccess> {
  const result = await _privateAccessesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateAccessName,
    options,
  );
  return _privateAccessesGetDeserialize(result);
}

export function _privateAccessesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  resource: PrivateAccess,
  options: PrivateAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}",
      subscriptionId,
      resourceGroupName,
      privateAccessName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: privateAccessSerializer(resource),
    });
}

export async function _privateAccessesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateAccess> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return privateAccessDeserializer(result.body);
}

/** Create or update a private access */
export function privateAccessesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  resource: PrivateAccess,
  options: PrivateAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PrivateAccess>, PrivateAccess> {
  return getLongRunningPoller(context, _privateAccessesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _privateAccessesCreateOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<PrivateAccess>, PrivateAccess>;
}

export function _privateAccessesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  properties: PrivateAccessPatch,
  options: PrivateAccessesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}",
      subscriptionId,
      resourceGroupName,
      privateAccessName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: privateAccessPatchSerializer(properties),
    });
}

export async function _privateAccessesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateAccess> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return privateAccessDeserializer(result.body);
}

/** Patch a private access tags */
export function privateAccessesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  properties: PrivateAccessPatch,
  options: PrivateAccessesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PrivateAccess>, PrivateAccess> {
  return getLongRunningPoller(context, _privateAccessesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _privateAccessesUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<PrivateAccess>, PrivateAccess>;
}

export function _privateAccessesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateAccessesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}",
      subscriptionId,
      resourceGroupName,
      privateAccessName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateAccessesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a private access */
export function privateAccessesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateAccessesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _privateAccessesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _privateAccessesDeleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _privateAccessesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateAccessesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses",
      subscriptionId,
      resourceGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continuationToken: options?.continuationToken },
    });
}

export async function _privateAccessesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateAccessListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _privateAccessListResultDeserializer(result.body);
}

/** Get a list of private access resources in a resource group. */
export function privateAccessesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateAccessesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PrivateAccess> {
  return buildPagedAsyncIterator(
    context,
    () => _privateAccessesListSend(context, subscriptionId, resourceGroupName, options),
    _privateAccessesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateAccessesListAllSend(
  context: Client,
  subscriptionId: string,
  options: PrivateAccessesListAllOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/privateAccesses",
      subscriptionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continuationToken: options?.continuationToken },
    });
}

export async function _privateAccessesListAllDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateAccessListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _privateAccessListResultDeserializer(result.body);
}

/** Get a list of private access resources in a subscription. */
export function privateAccessesListAll(
  context: Client,
  subscriptionId: string,
  options: PrivateAccessesListAllOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PrivateAccess> {
  return buildPagedAsyncIterator(
    context,
    () => _privateAccessesListAllSend(context, subscriptionId, options),
    _privateAccessesListAllDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateAccessesPrivateLinkResourcesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateAccessesPrivateLinkResourcesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}/privateLinkResources",
      subscriptionId,
      resourceGroupName,
      privateAccessName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateAccessesPrivateLinkResourcesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateLinkResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _privateLinkResourceListResultDeserializer(result.body);
}

/** Gets the private link resources possible under private access resource */
export function privateAccessesPrivateLinkResources(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateAccessesPrivateLinkResourcesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateLinkResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateAccessesPrivateLinkResourcesSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        options,
      ),
    _privateAccessesPrivateLinkResourcesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
