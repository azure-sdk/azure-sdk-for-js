// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseFleetManagerContext as Client,
  FleetsCreateOrUpdateOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsGetOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsListOptionalParams,
  FleetsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  Fleet,
  fleetSerializer,
  fleetDeserializer,
  FleetUpdate,
  fleetUpdateSerializer,
  _FleetListResult,
  _fleetListResultDeserializer,
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

export function _fleetsListSend(
  context: Client,
  options: FleetsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DatabaseFleetManager/fleets",
      context.subscriptionId,
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

export async function _fleetsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_FleetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fleetListResultDeserializer(result.body);
}

/** Gets all fleets in a subscription. */
export function fleetsList(
  context: Client,
  options: FleetsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleet> {
  return buildPagedAsyncIterator(
    context,
    () => _fleetsListSend(context, options),
    _fleetsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fleetsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: FleetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets",
      context.subscriptionId,
      resourceGroupName,
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

export async function _fleetsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_FleetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fleetListResultDeserializer(result.body);
}

/** Gets all fleets in a resource group. */
export function fleetsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: FleetsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleet> {
  return buildPagedAsyncIterator(
    context,
    () => _fleetsListByResourceGroupSend(context, resourceGroupName, options),
    _fleetsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fleetsDeleteSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
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

export async function _fleetsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a fleet. */
export function fleetsDelete(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _fleetsDeleteSend(context, resourceGroupName, fleetName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetsUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  properties: FleetUpdate,
  options: FleetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: fleetUpdateSerializer(properties),
    });
}

export async function _fleetsUpdateDeserialize(result: PathUncheckedResponse): Promise<Fleet> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDeserializer(result.body);
}

/** Modifies a fleet resource. */
export function fleetsUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  properties: FleetUpdate,
  options: FleetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleet>, Fleet> {
  return getLongRunningPoller(context, _fleetsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetsUpdateSend(context, resourceGroupName, fleetName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Fleet>, Fleet>;
}

export function _fleetsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  resource: Fleet,
  options: FleetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: fleetSerializer(resource),
    });
}

export async function _fleetsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Fleet> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDeserializer(result.body);
}

/** Creates or updates a fleet resource. */
export function fleetsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  resource: Fleet,
  options: FleetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleet>, Fleet> {
  return getLongRunningPoller(context, _fleetsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetsCreateOrUpdateSend(context, resourceGroupName, fleetName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Fleet>, Fleet>;
}

export function _fleetsGetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}",
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
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _fleetsGetDeserialize(result: PathUncheckedResponse): Promise<Fleet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDeserializer(result.body);
}

/** Gets a fleet resource. */
export async function fleetsGet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsGetOptionalParams = { requestOptions: {} },
): Promise<Fleet> {
  const result = await _fleetsGetSend(context, resourceGroupName, fleetName, options);
  return _fleetsGetDeserialize(result);
}
