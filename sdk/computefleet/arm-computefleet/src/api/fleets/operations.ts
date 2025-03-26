// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureFleetContext as Client } from "../index.js";
import {
  Fleet,
  fleetSerializer,
  fleetDeserializer,
  errorResponseDeserializer,
  FleetUpdate,
  fleetUpdateSerializer,
  _FleetListResult,
  _fleetListResultDeserializer,
  _VirtualMachineScaleSetListResult,
  _virtualMachineScaleSetListResultDeserializer,
  VirtualMachineScaleSet,
} from "../../models/models.js";
import {
  FleetsListVirtualMachineScaleSetsOptionalParams,
  FleetsListBySubscriptionOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsUpdateOptionalParams,
  FleetsCreateOrUpdateOptionalParams,
  FleetsGetOptionalParams,
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

export function _fleetsListVirtualMachineScaleSetsSend(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: FleetsListVirtualMachineScaleSetsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{name}/virtualMachineScaleSets{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      name: name,
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

export async function _fleetsListVirtualMachineScaleSetsDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineScaleSetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualMachineScaleSetListResultDeserializer(result.body);
}

/** List VirtualMachineScaleSet resources by Fleet */
export function fleetsListVirtualMachineScaleSets(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: FleetsListVirtualMachineScaleSetsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineScaleSet> {
  return buildPagedAsyncIterator(
    context,
    () => _fleetsListVirtualMachineScaleSetsSend(context, resourceGroupName, name, options),
    _fleetsListVirtualMachineScaleSetsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fleetsListBySubscriptionSend(
  context: Client,
  options: FleetsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.AzureFleet/fleets{?api-version}",
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

export async function _fleetsListBySubscriptionDeserialize(
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

/** List Fleet resources by subscription ID */
export function fleetsListBySubscription(
  context: Client,
  options: FleetsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleet> {
  return buildPagedAsyncIterator(
    context,
    () => _fleetsListBySubscriptionSend(context, options),
    _fleetsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fleetsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: FleetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets{?api-version}",
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

/** List Fleet resources by resource group */
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
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

export async function _fleetsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Fleet */
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
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

/** Update a Fleet */
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
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

/** Create a Fleet */
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
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
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

export async function _fleetsGetDeserialize(result: PathUncheckedResponse): Promise<Fleet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDeserializer(result.body);
}

/** Get a Fleet */
export async function fleetsGet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsGetOptionalParams = { requestOptions: {} },
): Promise<Fleet> {
  const result = await _fleetsGetSend(context, resourceGroupName, fleetName, options);
  return _fleetsGetDeserialize(result);
}
