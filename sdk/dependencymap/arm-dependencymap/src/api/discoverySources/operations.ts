// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DependencyMapContext as Client } from "../index.js";
import {
  DiscoverySourceResource,
  discoverySourceResourceSerializer,
  discoverySourceResourceDeserializer,
  errorResponseDeserializer,
  DiscoverySourceResourceTagsUpdate,
  discoverySourceResourceTagsUpdateSerializer,
  _DiscoverySourceResourceListResult,
  _discoverySourceResourceListResultDeserializer,
} from "../../models/models.js";
import {
  DiscoverySourcesListByMapsResourceOptionalParams,
  DiscoverySourcesDeleteOptionalParams,
  DiscoverySourcesUpdateOptionalParams,
  DiscoverySourcesCreateOrUpdateOptionalParams,
  DiscoverySourcesGetOptionalParams,
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

export function _discoverySourcesListByMapsResourceSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  options: DiscoverySourcesListByMapsResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/discoverySources{?api-version}",
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

export async function _discoverySourcesListByMapsResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_DiscoverySourceResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _discoverySourceResourceListResultDeserializer(result.body);
}

/** List DiscoverySourceResource resources by MapsResource */
export function discoverySourcesListByMapsResource(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  options: DiscoverySourcesListByMapsResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DiscoverySourceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _discoverySourcesListByMapsResourceSend(context, resourceGroupName, mapName, options),
    _discoverySourcesListByMapsResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _discoverySourcesDeleteSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  options: DiscoverySourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/discoverySources/{sourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      sourceName: sourceName,
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

export async function _discoverySourcesDeleteDeserialize(
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

/** Delete a DiscoverySourceResource */
export function discoverySourcesDelete(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  options: DiscoverySourcesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _discoverySourcesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _discoverySourcesDeleteSend(context, resourceGroupName, mapName, sourceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _discoverySourcesUpdateSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  properties: DiscoverySourceResourceTagsUpdate,
  options: DiscoverySourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/discoverySources/{sourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      sourceName: sourceName,
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
    body: discoverySourceResourceTagsUpdateSerializer(properties),
  });
}

export async function _discoverySourcesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoverySourceResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return discoverySourceResourceDeserializer(result.body);
}

/** Update a DiscoverySourceResource */
export function discoverySourcesUpdate(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  properties: DiscoverySourceResourceTagsUpdate,
  options: DiscoverySourcesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DiscoverySourceResource>, DiscoverySourceResource> {
  return getLongRunningPoller(context, _discoverySourcesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _discoverySourcesUpdateSend(
        context,
        resourceGroupName,
        mapName,
        sourceName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DiscoverySourceResource>, DiscoverySourceResource>;
}

export function _discoverySourcesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  resource: DiscoverySourceResource,
  options: DiscoverySourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/discoverySources/{sourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      sourceName: sourceName,
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
    body: discoverySourceResourceSerializer(resource),
  });
}

export async function _discoverySourcesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoverySourceResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return discoverySourceResourceDeserializer(result.body);
}

/** Create a DiscoverySourceResource */
export function discoverySourcesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  resource: DiscoverySourceResource,
  options: DiscoverySourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<DiscoverySourceResource>, DiscoverySourceResource> {
  return getLongRunningPoller(context, _discoverySourcesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _discoverySourcesCreateOrUpdateSend(
        context,
        resourceGroupName,
        mapName,
        sourceName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DiscoverySourceResource>, DiscoverySourceResource>;
}

export function _discoverySourcesGetSend(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  options: DiscoverySourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DependencyMap/maps/{mapName}/discoverySources/{sourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mapName: mapName,
      sourceName: sourceName,
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

export async function _discoverySourcesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoverySourceResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return discoverySourceResourceDeserializer(result.body);
}

/** Get a DiscoverySourceResource */
export async function discoverySourcesGet(
  context: Client,
  resourceGroupName: string,
  mapName: string,
  sourceName: string,
  options: DiscoverySourcesGetOptionalParams = { requestOptions: {} },
): Promise<DiscoverySourceResource> {
  const result = await _discoverySourcesGetSend(
    context,
    resourceGroupName,
    mapName,
    sourceName,
    options,
  );
  return _discoverySourcesGetDeserialize(result);
}
