// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AssociationsInterfaceCreateOrUpdateOptionalParams,
  AssociationsInterfaceDeleteOptionalParams,
  AssociationsInterfaceGetOptionalParams,
  AssociationsInterfaceListByTrafficControllerOptionalParams,
  AssociationsInterfaceUpdateOptionalParams,
  ServiceNetworkingManagementContext as Client,
} from "../index.js";
import {
  Association,
  associationSerializer,
  associationDeserializer,
  AssociationUpdate,
  associationUpdateSerializer,
  _AssociationListResult,
  _associationListResultDeserializer,
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

export function _associationsInterfaceGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  options: AssociationsInterfaceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      associationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _associationsInterfaceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Association> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return associationDeserializer(result.body);
}

/** Get a Association */
export async function associationsInterfaceGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  options: AssociationsInterfaceGetOptionalParams = { requestOptions: {} },
): Promise<Association> {
  const result = await _associationsInterfaceGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    associationName,
    options,
  );
  return _associationsInterfaceGetDeserialize(result);
}

export function _associationsInterfaceCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  resource: Association,
  options: AssociationsInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      associationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: associationSerializer(resource),
    });
}

export async function _associationsInterfaceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Association> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return associationDeserializer(result.body);
}

/** Create a Association */
export function associationsInterfaceCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  resource: Association,
  options: AssociationsInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<Association>, Association> {
  return getLongRunningPoller(
    context,
    _associationsInterfaceCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _associationsInterfaceCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          associationName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Association>, Association>;
}

export function _associationsInterfaceUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  properties: AssociationUpdate,
  options: AssociationsInterfaceUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      associationName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: associationUpdateSerializer(properties),
    });
}

export async function _associationsInterfaceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Association> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return associationDeserializer(result.body);
}

/** Update a Association */
export async function associationsInterfaceUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  properties: AssociationUpdate,
  options: AssociationsInterfaceUpdateOptionalParams = { requestOptions: {} },
): Promise<Association> {
  const result = await _associationsInterfaceUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    associationName,
    properties,
    options,
  );
  return _associationsInterfaceUpdateDeserialize(result);
}

export function _associationsInterfaceDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  options: AssociationsInterfaceDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      associationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _associationsInterfaceDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Association */
export function associationsInterfaceDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  associationName: string,
  options: AssociationsInterfaceDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _associationsInterfaceDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _associationsInterfaceDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          associationName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _associationsInterfaceListByTrafficControllerSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: AssociationsInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _associationsInterfaceListByTrafficControllerDeserialize(
  result: PathUncheckedResponse,
): Promise<_AssociationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _associationListResultDeserializer(result.body);
}

/** List Association resources by TrafficController */
export function associationsInterfaceListByTrafficController(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: AssociationsInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Association> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _associationsInterfaceListByTrafficControllerSend(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
    _associationsInterfaceListByTrafficControllerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
