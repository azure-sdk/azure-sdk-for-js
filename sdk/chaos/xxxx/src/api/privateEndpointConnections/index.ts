// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosManagementContext as Client,
  PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams,
  PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams,
  PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  PrivateEndpointConnection,
  privateEndpointConnectionDeserializer,
  _PrivateEndpointConnectionListResult,
  _privateEndpointConnectionListResultDeserializer,
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

export function _privateEndpointConnectionsListPrivateEndpointConnectionsSend(
  context: Client,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}/privateEndpointConnections",
      context.subscriptionId,
      resourceGroupName,
      privateAccessName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _privateEndpointConnectionsListPrivateEndpointConnectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateEndpointConnectionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _privateEndpointConnectionListResultDeserializer(result.body);
}

/** List information about private endpoint connections under a private access resource */
export function privateEndpointConnectionsListPrivateEndpointConnections(
  context: Client,
  resourceGroupName: string,
  privateAccessName: string,
  options: PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateEndpointConnection> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateEndpointConnectionsListPrivateEndpointConnectionsSend(
        context,
        resourceGroupName,
        privateAccessName,
        options,
      ),
    _privateEndpointConnectionsListPrivateEndpointConnectionsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateEndpointConnectionsDeleteAPrivateEndpointConnectionSend(
  context: Client,
  resourceGroupName: string,
  privateAccessName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
      context.subscriptionId,
      resourceGroupName,
      privateAccessName,
      privateEndpointConnectionName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _privateEndpointConnectionsDeleteAPrivateEndpointConnectionDeserialize(
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

/** Deletes a private endpoint connection under a private access resource. */
export function privateEndpointConnectionsDeleteAPrivateEndpointConnection(
  context: Client,
  resourceGroupName: string,
  privateAccessName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateEndpointConnectionsDeleteAPrivateEndpointConnectionDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateEndpointConnectionsDeleteAPrivateEndpointConnectionSend(
          context,
          resourceGroupName,
          privateAccessName,
          privateEndpointConnectionName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateEndpointConnectionsGetAPrivateEndpointConnectionSend(
  context: Client,
  resourceGroupName: string,
  privateAccessName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/privateAccesses/{privateAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
      context.subscriptionId,
      resourceGroupName,
      privateAccessName,
      privateEndpointConnectionName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _privateEndpointConnectionsGetAPrivateEndpointConnectionDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateEndpointConnection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return privateEndpointConnectionDeserializer(result.body);
}

/** Gets information about a private endpoint connection under a private access resource. */
export async function privateEndpointConnectionsGetAPrivateEndpointConnection(
  context: Client,
  resourceGroupName: string,
  privateAccessName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams = {
    requestOptions: {},
  },
): Promise<PrivateEndpointConnection> {
  const result =
    await _privateEndpointConnectionsGetAPrivateEndpointConnectionSend(
      context,
      resourceGroupName,
      privateAccessName,
      privateEndpointConnectionName,
      options,
    );
  return _privateEndpointConnectionsGetAPrivateEndpointConnectionDeserialize(
    result,
  );
}
