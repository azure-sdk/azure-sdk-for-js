// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseFleetManagerContext as Client,
  FleetspacesCreateOrUpdateOptionalParams,
  FleetspacesDeleteOptionalParams,
  FleetspacesGetOptionalParams,
  FleetspacesListByFleetOptionalParams,
  FleetspacesRegisterServerOptionalParams,
  FleetspacesUnregisterOptionalParams,
  FleetspacesUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  Fleetspace,
  fleetspaceSerializer,
  fleetspaceDeserializer,
  _FleetspaceListResult,
  _fleetspaceListResultDeserializer,
  RegisterServerProperties,
  registerServerPropertiesSerializer,
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

export function _fleetspacesUnregisterSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesUnregisterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/unregister",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _fleetspacesUnregisterDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Unregisters all databases from a fleetspace */
export function fleetspacesUnregister(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesUnregisterOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetspacesUnregisterDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetspacesUnregisterSend(context, resourceGroupName, fleetName, fleetspaceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetspacesRegisterServerSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  body: RegisterServerProperties,
  options: FleetspacesRegisterServerOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/registerServer",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: registerServerPropertiesSerializer(body),
    });
}

export async function _fleetspacesRegisterServerDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Migrates an existing logical server into fleet. */
export function fleetspacesRegisterServer(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  body: RegisterServerProperties,
  options: FleetspacesRegisterServerOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetspacesRegisterServerDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetspacesRegisterServerSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        body,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetspacesListByFleetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetspacesListByFleetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        $skip: options?.$skip,
        $top: options?.$top,
        $skiptoken: options?.$skiptoken,
      },
    });
}

export async function _fleetspacesListByFleetDeserialize(
  result: PathUncheckedResponse,
): Promise<_FleetspaceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fleetspaceListResultDeserializer(result.body);
}

/** Lists fleetspaces in a fleet. */
export function fleetspacesListByFleet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetspacesListByFleetOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleetspace> {
  return buildPagedAsyncIterator(
    context,
    () => _fleetspacesListByFleetSend(context, resourceGroupName, fleetName, options),
    _fleetspacesListByFleetDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fleetspacesDeleteSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
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

export async function _fleetspacesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a fleetspace. */
export function fleetspacesDelete(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetspacesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetspacesDeleteSend(context, resourceGroupName, fleetName, fleetspaceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetspacesUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  properties: Fleetspace,
  options: FleetspacesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: fleetspaceSerializer(properties),
    });
}

export async function _fleetspacesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Fleetspace> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetspaceDeserializer(result.body);
}

/** Modifies a fleetspace resource. */
export function fleetspacesUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  properties: Fleetspace,
  options: FleetspacesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleetspace>, Fleetspace> {
  return getLongRunningPoller(context, _fleetspacesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetspacesUpdateSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Fleetspace>, Fleetspace>;
}

export function _fleetspacesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  resource: Fleetspace,
  options: FleetspacesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: fleetspaceSerializer(resource),
    });
}

export async function _fleetspacesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Fleetspace> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetspaceDeserializer(result.body);
}

/** Creates or updates a fleetspace resource. */
export function fleetspacesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  resource: Fleetspace,
  options: FleetspacesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleetspace>, Fleetspace> {
  return getLongRunningPoller(context, _fleetspacesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetspacesCreateOrUpdateSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Fleetspace>, Fleetspace>;
}

export function _fleetspacesGetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
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

export async function _fleetspacesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Fleetspace> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetspaceDeserializer(result.body);
}

/** Gets fleetspace resource. */
export async function fleetspacesGet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesGetOptionalParams = { requestOptions: {} },
): Promise<Fleetspace> {
  const result = await _fleetspacesGetSend(
    context,
    resourceGroupName,
    fleetName,
    fleetspaceName,
    options,
  );
  return _fleetspacesGetDeserialize(result);
}
