// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DependencyMapContext as Client,
  MapsCreateOrUpdateOptionalParams,
  MapsDeleteOptionalParams,
  MapsExportDependenciesOptionalParams,
  MapsGetConnectionsForProcessOnFocusedMachineOptionalParams,
  MapsGetConnectionsWithConnectedMachineForFocusedMachineOptionalParams,
  MapsGetDependencyViewForFocusedMachineOptionalParams,
  MapsGetOptionalParams,
  MapsListByResourceGroupOptionalParams,
  MapsListBySubscriptionOptionalParams,
  MapsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  MapsResource,
  mapsResourceSerializer,
  mapsResourceDeserializer,
  MapsResourceTagsUpdate,
  mapsResourceTagsUpdateSerializer,
  _MapsResourceListResult,
  _mapsResourceListResultDeserializer,
  GetDependencyViewForFocusedMachineRequest,
  getDependencyViewForFocusedMachineRequestSerializer,
  GetConnectionsWithConnectedMachineForFocusedMachineRequest,
  getConnectionsWithConnectedMachineForFocusedMachineRequestSerializer,
  GetConnectionsForProcessOnFocusedMachineRequest,
  getConnectionsForProcessOnFocusedMachineRequestSerializer,
  ExportDependenciesRequest,
  exportDependenciesRequestSerializer,
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

export function _mapsExportDependenciesSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: ExportDependenciesRequest,
  options: MapsExportDependenciesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/exportDependencies{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      "api-version": context.apiVersion,
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
    body: exportDependenciesRequestSerializer(body),
  });
}

export async function _mapsExportDependenciesDeserialize(
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

/** Export dependencies */
export function mapsExportDependencies(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: ExportDependenciesRequest,
  options: MapsExportDependenciesOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _mapsExportDependenciesDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _mapsExportDependenciesSend(context, resourceGroupName, mapName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _mapsGetConnectionsForProcessOnFocusedMachineSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: GetConnectionsForProcessOnFocusedMachineRequest,
  options: MapsGetConnectionsForProcessOnFocusedMachineOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/getConnectionsForProcessOnFocusedMachine{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      "api-version": context.apiVersion,
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
    body: getConnectionsForProcessOnFocusedMachineRequestSerializer(body),
  });
}

export async function _mapsGetConnectionsForProcessOnFocusedMachineDeserialize(
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

/** Get network connections of a process */
export function mapsGetConnectionsForProcessOnFocusedMachine(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: GetConnectionsForProcessOnFocusedMachineRequest,
  options: MapsGetConnectionsForProcessOnFocusedMachineOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _mapsGetConnectionsForProcessOnFocusedMachineDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _mapsGetConnectionsForProcessOnFocusedMachineSend(
          context,
          resourceGroupName,
          mapName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _mapsGetConnectionsWithConnectedMachineForFocusedMachineSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: GetConnectionsWithConnectedMachineForFocusedMachineRequest,
  options: MapsGetConnectionsWithConnectedMachineForFocusedMachineOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/getConnectionsWithConnectedMachineForFocusedMachine{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      "api-version": context.apiVersion,
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
    body: getConnectionsWithConnectedMachineForFocusedMachineRequestSerializer(body),
  });
}

export async function _mapsGetConnectionsWithConnectedMachineForFocusedMachineDeserialize(
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

/** Get network connections between machines */
export function mapsGetConnectionsWithConnectedMachineForFocusedMachine(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: GetConnectionsWithConnectedMachineForFocusedMachineRequest,
  options: MapsGetConnectionsWithConnectedMachineForFocusedMachineOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _mapsGetConnectionsWithConnectedMachineForFocusedMachineDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _mapsGetConnectionsWithConnectedMachineForFocusedMachineSend(
          context,
          resourceGroupName,
          mapName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _mapsGetDependencyViewForFocusedMachineSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: GetDependencyViewForFocusedMachineRequest,
  options: MapsGetDependencyViewForFocusedMachineOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/getDependencyViewForFocusedMachine{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      "api-version": context.apiVersion,
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
    body: getDependencyViewForFocusedMachineRequestSerializer(body),
  });
}

export async function _mapsGetDependencyViewForFocusedMachineDeserialize(
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

/** Get dependency map of single machine */
export function mapsGetDependencyViewForFocusedMachine(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  body: GetDependencyViewForFocusedMachineRequest,
  options: MapsGetDependencyViewForFocusedMachineOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _mapsGetDependencyViewForFocusedMachineDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _mapsGetDependencyViewForFocusedMachineSend(
          context,
          resourceGroupName,
          mapName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _mapsListBySubscriptionSend(
  context: Client,
  options: MapsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DependencyMap/maps{?api-version}",
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

export async function _mapsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_MapsResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _mapsResourceListResultDeserializer(result.body);
}

/** List MapsResource resources by subscription ID */
export function mapsListBySubscription(
  context: Client,
  options: MapsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<MapsResource> {
  return buildPagedAsyncIterator(
    context,
    () => _mapsListBySubscriptionSend(context, options),
    _mapsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _mapsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: MapsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps{?api-version}",
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

export async function _mapsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_MapsResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _mapsResourceListResultDeserializer(result.body);
}

/** List MapsResource resources by resource group */
export function mapsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: MapsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<MapsResource> {
  return buildPagedAsyncIterator(
    context,
    () => _mapsListByResourceGroupSend(context, resourceGroupName, options),
    _mapsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _mapsDeleteSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  options: MapsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
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

export async function _mapsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a MapsResource */
export function mapsDelete(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  options: MapsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _mapsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _mapsDeleteSend(context, resourceGroupName, mapName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _mapsUpdateSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  properties: MapsResourceTagsUpdate,
  options: MapsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
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
    body: mapsResourceTagsUpdateSerializer(properties),
  });
}

export async function _mapsUpdateDeserialize(result: PathUncheckedResponse): Promise<MapsResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mapsResourceDeserializer(result.body);
}

/** Update a MapsResource */
export function mapsUpdate(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  properties: MapsResourceTagsUpdate,
  options: MapsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<MapsResource>, MapsResource> {
  return getLongRunningPoller(context, _mapsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _mapsUpdateSend(context, resourceGroupName, mapName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<MapsResource>, MapsResource>;
}

export function _mapsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  resource: MapsResource,
  options: MapsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
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
    body: mapsResourceSerializer(resource),
  });
}

export async function _mapsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<MapsResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mapsResourceDeserializer(result.body);
}

/** Create a MapsResource */
export function mapsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  resource: MapsResource,
  options: MapsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<MapsResource>, MapsResource> {
  return getLongRunningPoller(context, _mapsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _mapsCreateOrUpdateSend(context, resourceGroupName, mapName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<MapsResource>, MapsResource>;
}

export function _mapsGetSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  options: MapsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
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

export async function _mapsGetDeserialize(result: PathUncheckedResponse): Promise<MapsResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mapsResourceDeserializer(result.body);
}

/** Get a MapsResource */
export async function mapsGet(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  options: MapsGetOptionalParams = { requestOptions: {} },
): Promise<MapsResource> {
  const result = await _mapsGetSend(context, resourceGroupName, mapName, options);
  return _mapsGetDeserialize(result);
}
