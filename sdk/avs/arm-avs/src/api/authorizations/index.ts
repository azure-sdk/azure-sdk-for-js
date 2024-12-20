// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsDeleteOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsListOptionalParams,
  AvsContext as Client,
} from "../index.js";
import {
  _ExpressRouteAuthorizationList,
  _expressRouteAuthorizationListDeserializer,
  ExpressRouteAuthorization,
  expressRouteAuthorizationSerializer,
  expressRouteAuthorizationDeserializer,
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

export function _authorizationsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _authorizationsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExpressRouteAuthorizationList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _expressRouteAuthorizationListDeserializer(result.body);
}

/** List ExpressRouteAuthorization resources by PrivateCloud */
export function authorizationsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ExpressRouteAuthorization> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _authorizationsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _authorizationsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _authorizationsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _authorizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ExpressRouteAuthorization> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return expressRouteAuthorizationDeserializer(result.body);
}

/** Get a ExpressRouteAuthorization */
export async function authorizationsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): Promise<ExpressRouteAuthorization> {
  const result = await _authorizationsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    authorizationName,
    options,
  );
  return _authorizationsGetDeserialize(result);
}

export function _authorizationsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: expressRouteAuthorizationSerializer(authorization),
    });
}

export async function _authorizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ExpressRouteAuthorization> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return expressRouteAuthorizationDeserializer(result.body);
}

/** Create a ExpressRouteAuthorization */
export function authorizationsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ExpressRouteAuthorization>,
  ExpressRouteAuthorization
> {
  return getLongRunningPoller(
    context,
    _authorizationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _authorizationsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          authorizationName,
          authorization,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<ExpressRouteAuthorization>,
    ExpressRouteAuthorization
  >;
}

export function _authorizationsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _authorizationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a ExpressRouteAuthorization */
export function authorizationsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _authorizationsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _authorizationsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          authorizationName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
