// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerContext as Client } from "../index.js";
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
  FleetspacesUnregisterOptionalParams,
  FleetspacesRegisterServerOptionalParams,
  FleetspacesListByFleetOptionalParams,
  FleetspacesDeleteOptionalParams,
  FleetspacesUpdateOptionalParams,
  FleetspacesCreateOrUpdateOptionalParams,
  FleetspacesGetOptionalParams,
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

export function _unregisterSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesUnregisterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/unregister{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _unregisterDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Unregisters all databases from a fleetspace */
export function unregister(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesUnregisterOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _unregisterDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _unregisterSend(context, resourceGroupName, fleetName, fleetspaceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _registerServerSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  body: RegisterServerProperties,
  options: FleetspacesRegisterServerOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/registerServer{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: registerServerPropertiesSerializer(body),
  });
}

export async function _registerServerDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Migrates an existing logical server into fleet. */
export function registerServer(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  body: RegisterServerProperties,
  options: FleetspacesRegisterServerOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _registerServerDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _registerServerSend(context, resourceGroupName, fleetName, fleetspaceName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByFleetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetspacesListByFleetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces{?api%2Dversion,%24skip,%24top,%24skiptoken}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      "api%2Dversion": context.apiVersion,
      "%24skip": options?.skip,
      "%24top": options?.top,
      "%24skiptoken": options?.skiptoken,
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

export async function _listByFleetDeserialize(
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
export function listByFleet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetspacesListByFleetOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleetspace> {
  return buildPagedAsyncIterator(
    context,
    () => _listByFleetSend(context, resourceGroupName, fleetName, options),
    _listByFleetDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api%2Dversion": context.apiVersion,
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

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a fleetspace. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, fleetName, fleetspaceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  properties: Fleetspace,
  options: FleetspacesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api%2Dversion": context.apiVersion,
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
    body: fleetspaceSerializer(properties),
  });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<Fleetspace> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetspaceDeserializer(result.body);
}

/** Modifies a fleetspace resource. */
export function update(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  properties: Fleetspace,
  options: FleetspacesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleetspace>, Fleetspace> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, fleetName, fleetspaceName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Fleetspace>, Fleetspace>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  resource: Fleetspace,
  options: FleetspacesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api%2Dversion": context.apiVersion,
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
    body: fleetspaceSerializer(resource),
  });
}

export async function _createOrUpdateDeserialize(
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
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  resource: Fleetspace,
  options: FleetspacesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleetspace>, Fleetspace> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, fleetName, fleetspaceName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Fleetspace>, Fleetspace>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api%2Dversion": context.apiVersion,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<Fleetspace> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetspaceDeserializer(result.body);
}

/** Gets fleetspace resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetspacesGetOptionalParams = { requestOptions: {} },
): Promise<Fleetspace> {
  const result = await _getSend(context, resourceGroupName, fleetName, fleetspaceName, options);
  return _getDeserialize(result);
}
