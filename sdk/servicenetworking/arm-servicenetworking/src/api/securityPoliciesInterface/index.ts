// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ServiceNetworkingContext as Client,
  SecurityPoliciesInterfaceCreateOrUpdateOptionalParams,
  SecurityPoliciesInterfaceDeleteOptionalParams,
  SecurityPoliciesInterfaceGetOptionalParams,
  SecurityPoliciesInterfaceListByTrafficControllerOptionalParams,
  SecurityPoliciesInterfaceUpdateOptionalParams,
} from "../index.js";
import {
  SecurityPolicy,
  securityPolicySerializer,
  securityPolicyDeserializer,
  SecurityPolicyUpdate,
  securityPolicyUpdateSerializer,
  _SecurityPolicyListResult,
  _securityPolicyListResultDeserializer,
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

export function _securityPoliciesInterfaceGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  options: SecurityPoliciesInterfaceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      securityPolicyName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _securityPoliciesInterfaceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SecurityPolicy> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return securityPolicyDeserializer(result.body);
}

/** Get a SecurityPolicy */
export async function securityPoliciesInterfaceGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  options: SecurityPoliciesInterfaceGetOptionalParams = { requestOptions: {} },
): Promise<SecurityPolicy> {
  const result = await _securityPoliciesInterfaceGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    securityPolicyName,
    options,
  );
  return _securityPoliciesInterfaceGetDeserialize(result);
}

export function _securityPoliciesInterfaceCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  resource: SecurityPolicy,
  options: SecurityPoliciesInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      securityPolicyName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: securityPolicySerializer(resource),
    });
}

export async function _securityPoliciesInterfaceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SecurityPolicy> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return securityPolicyDeserializer(result.body);
}

/** Create a SecurityPolicy */
export function securityPoliciesInterfaceCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  resource: SecurityPolicy,
  options: SecurityPoliciesInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<SecurityPolicy>, SecurityPolicy> {
  return getLongRunningPoller(
    context,
    _securityPoliciesInterfaceCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _securityPoliciesInterfaceCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          securityPolicyName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<SecurityPolicy>, SecurityPolicy>;
}

export function _securityPoliciesInterfaceUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  properties: SecurityPolicyUpdate,
  options: SecurityPoliciesInterfaceUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      securityPolicyName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: securityPolicyUpdateSerializer(properties),
    });
}

export async function _securityPoliciesInterfaceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SecurityPolicy> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return securityPolicyDeserializer(result.body);
}

/** Update a SecurityPolicy */
export async function securityPoliciesInterfaceUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  properties: SecurityPolicyUpdate,
  options: SecurityPoliciesInterfaceUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<SecurityPolicy> {
  const result = await _securityPoliciesInterfaceUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    securityPolicyName,
    properties,
    options,
  );
  return _securityPoliciesInterfaceUpdateDeserialize(result);
}

export function _securityPoliciesInterfaceDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  options: SecurityPoliciesInterfaceDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      securityPolicyName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _securityPoliciesInterfaceDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a SecurityPolicy */
export function securityPoliciesInterfaceDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  options: SecurityPoliciesInterfaceDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _securityPoliciesInterfaceDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _securityPoliciesInterfaceDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          securityPolicyName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _securityPoliciesInterfaceListByTrafficControllerSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: SecurityPoliciesInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _securityPoliciesInterfaceListByTrafficControllerDeserialize(
  result: PathUncheckedResponse,
): Promise<_SecurityPolicyListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _securityPolicyListResultDeserializer(result.body);
}

/** List SecurityPolicy resources by TrafficController */
export function securityPoliciesInterfaceListByTrafficController(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: SecurityPoliciesInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SecurityPolicy> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _securityPoliciesInterfaceListByTrafficControllerSend(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
    _securityPoliciesInterfaceListByTrafficControllerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
