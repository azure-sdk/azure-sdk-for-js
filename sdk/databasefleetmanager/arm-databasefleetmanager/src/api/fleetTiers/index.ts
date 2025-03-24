// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseFleetManagerContext as Client,
  FleetTiersCreateOrUpdateOptionalParams,
  FleetTiersDeleteOptionalParams,
  FleetTiersDisableOptionalParams,
  FleetTiersGetOptionalParams,
  FleetTiersListByFleetOptionalParams,
  FleetTiersUpdateOptionalParams,
} from "../index.js";
import {
  FleetTier,
  fleetTierSerializer,
  fleetTierDeserializer,
  errorResponseDeserializer,
  _FleetTierListResult,
  _fleetTierListResultDeserializer,
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

export function _fleetTiersDisableSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  options: FleetTiersDisableOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/tiers/{tierName}/disable{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      tierName: tierName,
      "api-version": context.apiVersion,
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

export async function _fleetTiersDisableDeserialize(
  result: PathUncheckedResponse,
): Promise<FleetTier> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetTierDeserializer(result.body);
}

/** Disables a tier. */
export async function fleetTiersDisable(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  options: FleetTiersDisableOptionalParams = { requestOptions: {} },
): Promise<FleetTier> {
  const result = await _fleetTiersDisableSend(
    context,
    resourceGroupName,
    fleetName,
    tierName,
    options,
  );
  return _fleetTiersDisableDeserialize(result);
}

export function _fleetTiersListByFleetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetTiersListByFleetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/tiers{?api-version,$skip,$top,$skiptoken}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      "api-version": context.apiVersion,
      $skip: options?.skip,
      $top: options?.top,
      $skiptoken: options?.skiptoken,
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

export async function _fleetTiersListByFleetDeserialize(
  result: PathUncheckedResponse,
): Promise<_FleetTierListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fleetTierListResultDeserializer(result.body);
}

/** List tiers in a fleet. */
export function fleetTiersListByFleet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetTiersListByFleetOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FleetTier> {
  return buildPagedAsyncIterator(
    context,
    () => _fleetTiersListByFleetSend(context, resourceGroupName, fleetName, options),
    _fleetTiersListByFleetDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fleetTiersDeleteSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  options: FleetTiersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/tiers/{tierName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      tierName: tierName,
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

export async function _fleetTiersDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a tier. */
export function fleetTiersDelete(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  options: FleetTiersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetTiersDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetTiersDeleteSend(context, resourceGroupName, fleetName, tierName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetTiersUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  properties: FleetTier,
  options: FleetTiersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/tiers/{tierName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      tierName: tierName,
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
    body: fleetTierSerializer(properties),
  });
}

export async function _fleetTiersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FleetTier> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetTierDeserializer(result.body);
}

/** Updates a tier. */
export function fleetTiersUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  properties: FleetTier,
  options: FleetTiersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetTier>, FleetTier> {
  return getLongRunningPoller(context, _fleetTiersUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetTiersUpdateSend(context, resourceGroupName, fleetName, tierName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<FleetTier>, FleetTier>;
}

export function _fleetTiersCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  resource: FleetTier,
  options: FleetTiersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/tiers/{tierName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      tierName: tierName,
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
    body: fleetTierSerializer(resource),
  });
}

export async function _fleetTiersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FleetTier> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetTierDeserializer(result.body);
}

/** Creates or updates a tier. */
export function fleetTiersCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  resource: FleetTier,
  options: FleetTiersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetTier>, FleetTier> {
  return getLongRunningPoller(context, _fleetTiersCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetTiersCreateOrUpdateSend(
        context,
        resourceGroupName,
        fleetName,
        tierName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<FleetTier>, FleetTier>;
}

export function _fleetTiersGetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  options: FleetTiersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/tiers/{tierName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      tierName: tierName,
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

export async function _fleetTiersGetDeserialize(result: PathUncheckedResponse): Promise<FleetTier> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetTierDeserializer(result.body);
}

/** Gets a tier resource. */
export async function fleetTiersGet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  tierName: string,
  options: FleetTiersGetOptionalParams = { requestOptions: {} },
): Promise<FleetTier> {
  const result = await _fleetTiersGetSend(context, resourceGroupName, fleetName, tierName, options);
  return _fleetTiersGetDeserialize(result);
}
