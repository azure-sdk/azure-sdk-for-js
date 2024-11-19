// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BrokerAuthorizationCreateOrUpdateOptionalParams,
  BrokerAuthorizationDeleteOptionalParams,
  BrokerAuthorizationGetOptionalParams,
  BrokerAuthorizationListByResourceGroupOptionalParams,
  IoTOperationsContext as Client,
} from "../index.js";
import {
  AuthorizationResource,
  authorizationResourceSerializer,
  authorizationResourceDeserializer,
  _AuthorizationResourceListResult,
  _authorizationResourceListResultDeserializer,
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

export function _brokerAuthorizationGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authorizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthorizationGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AuthorizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return authorizationResourceDeserializer(result.body);
}

/** Get a AuthorizationResource */
export async function brokerAuthorizationGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationGetOptionalParams = { requestOptions: {} },
): Promise<AuthorizationResource> {
  const result = await _brokerAuthorizationGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    brokerName,
    authorizationName,
    options,
  );
  return _brokerAuthorizationGetDeserialize(result);
}

export function _brokerAuthorizationCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  resource: AuthorizationResource,
  options: BrokerAuthorizationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authorizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: authorizationResourceSerializer(resource),
    });
}

export async function _brokerAuthorizationCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AuthorizationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return authorizationResourceDeserializer(result.body);
}

/** Create a AuthorizationResource */
export function brokerAuthorizationCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  resource: AuthorizationResource,
  options: BrokerAuthorizationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AuthorizationResource>, AuthorizationResource> {
  return getLongRunningPoller(
    context,
    _brokerAuthorizationCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthorizationCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          authorizationName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<AuthorizationResource>, AuthorizationResource>;
}

export function _brokerAuthorizationDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authorizationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthorizationDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a AuthorizationResource */
export function brokerAuthorizationDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _brokerAuthorizationDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthorizationDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          authorizationName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _brokerAuthorizationListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthorizationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthorizationListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AuthorizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _authorizationResourceListResultDeserializer(result.body);
}

/** List AuthorizationResource resources by BrokerResource */
export function brokerAuthorizationListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthorizationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AuthorizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerAuthorizationListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
    _brokerAuthorizationListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
