// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ServiceNetworkingManagementContext as Client,
  FrontendsInterfaceCreateOrUpdateOptionalParams,
  FrontendsInterfaceDeleteOptionalParams,
  FrontendsInterfaceGetOptionalParams,
  FrontendsInterfaceListByTrafficControllerOptionalParams,
  FrontendsInterfaceUpdateOptionalParams,
} from "../index.js";
import {
  Frontend,
  frontendSerializer,
  frontendDeserializer,
  FrontendUpdate,
  frontendUpdateSerializer,
  _FrontendListResult,
  _frontendListResultDeserializer,
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

export function _frontendsInterfaceGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _frontendsInterfaceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Frontend> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return frontendDeserializer(result.body);
}

/** Get a Frontend */
export async function frontendsInterfaceGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceGetOptionalParams = { requestOptions: {} },
): Promise<Frontend> {
  const result = await _frontendsInterfaceGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    frontendName,
    options,
  );
  return _frontendsInterfaceGetDeserialize(result);
}

export function _frontendsInterfaceCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  resource: Frontend,
  options: FrontendsInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: frontendSerializer(resource),
    });
}

export async function _frontendsInterfaceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Frontend> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return frontendDeserializer(result.body);
}

/** Create a Frontend */
export function frontendsInterfaceCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  resource: Frontend,
  options: FrontendsInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<Frontend>, Frontend> {
  return getLongRunningPoller(
    context,
    _frontendsInterfaceCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _frontendsInterfaceCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          frontendName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Frontend>, Frontend>;
}

export function _frontendsInterfaceUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  properties: FrontendUpdate,
  options: FrontendsInterfaceUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: frontendUpdateSerializer(properties),
    });
}

export async function _frontendsInterfaceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Frontend> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return frontendDeserializer(result.body);
}

/** Update a Frontend */
export async function frontendsInterfaceUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  properties: FrontendUpdate,
  options: FrontendsInterfaceUpdateOptionalParams = { requestOptions: {} },
): Promise<Frontend> {
  const result = await _frontendsInterfaceUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    frontendName,
    properties,
    options,
  );
  return _frontendsInterfaceUpdateDeserialize(result);
}

export function _frontendsInterfaceDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _frontendsInterfaceDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Frontend */
export function frontendsInterfaceDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _frontendsInterfaceDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _frontendsInterfaceDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          frontendName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _frontendsInterfaceListByTrafficControllerSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: FrontendsInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _frontendsInterfaceListByTrafficControllerDeserialize(
  result: PathUncheckedResponse,
): Promise<_FrontendListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _frontendListResultDeserializer(result.body);
}

/** List Frontend resources by TrafficController */
export function frontendsInterfaceListByTrafficController(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: FrontendsInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Frontend> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _frontendsInterfaceListByTrafficControllerSend(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
    _frontendsInterfaceListByTrafficControllerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
