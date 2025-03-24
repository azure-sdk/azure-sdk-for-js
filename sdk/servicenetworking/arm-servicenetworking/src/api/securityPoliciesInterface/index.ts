// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ServiceNetworkingManagementContext as Client,
  SecurityPoliciesInterfaceCreateOrUpdateOptionalParams,
  SecurityPoliciesInterfaceDeleteOptionalParams,
  SecurityPoliciesInterfaceGetOptionalParams,
  SecurityPoliciesInterfaceListByTrafficControllerOptionalParams,
  SecurityPoliciesInterfaceUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _securityPoliciesInterfaceListByTrafficControllerSend(
  context: Client,
  resourceGroupName: string,
  trafficControllerName: string,
  options: SecurityPoliciesInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      trafficControllerName: trafficControllerName,
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

export async function _securityPoliciesInterfaceListByTrafficControllerDeserialize(
  result: PathUncheckedResponse,
): Promise<_SecurityPolicyListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _securityPolicyListResultDeserializer(result.body);
}

/** List SecurityPolicy resources by TrafficController */
export function securityPoliciesInterfaceListByTrafficController(
  context: Client,
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
        resourceGroupName,
        trafficControllerName,
        options,
      ),
    _securityPoliciesInterfaceListByTrafficControllerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _securityPoliciesInterfaceDeleteSend(
  context: Client,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  options: SecurityPoliciesInterfaceDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      trafficControllerName: trafficControllerName,
      securityPolicyName: securityPolicyName,
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

export async function _securityPoliciesInterfaceDeleteDeserialize(
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

/** Delete a SecurityPolicy */
export function securityPoliciesInterfaceDelete(
  context: Client,
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
          resourceGroupName,
          trafficControllerName,
          securityPolicyName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _securityPoliciesInterfaceUpdateSend(
  context: Client,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  properties: SecurityPolicyUpdate,
  options: SecurityPoliciesInterfaceUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      trafficControllerName: trafficControllerName,
      securityPolicyName: securityPolicyName,
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
    body: securityPolicyUpdateSerializer(properties),
  });
}

export async function _securityPoliciesInterfaceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SecurityPolicy> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return securityPolicyDeserializer(result.body);
}

/** Update a SecurityPolicy */
export async function securityPoliciesInterfaceUpdate(
  context: Client,
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
    resourceGroupName,
    trafficControllerName,
    securityPolicyName,
    properties,
    options,
  );
  return _securityPoliciesInterfaceUpdateDeserialize(result);
}

export function _securityPoliciesInterfaceCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  resource: SecurityPolicy,
  options: SecurityPoliciesInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      trafficControllerName: trafficControllerName,
      securityPolicyName: securityPolicyName,
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
    body: securityPolicySerializer(resource),
  });
}

export async function _securityPoliciesInterfaceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SecurityPolicy> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return securityPolicyDeserializer(result.body);
}

/** Create a SecurityPolicy */
export function securityPoliciesInterfaceCreateOrUpdate(
  context: Client,
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

export function _securityPoliciesInterfaceGetSend(
  context: Client,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  options: SecurityPoliciesInterfaceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      trafficControllerName: trafficControllerName,
      securityPolicyName: securityPolicyName,
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

export async function _securityPoliciesInterfaceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SecurityPolicy> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return securityPolicyDeserializer(result.body);
}

/** Get a SecurityPolicy */
export async function securityPoliciesInterfaceGet(
  context: Client,
  resourceGroupName: string,
  trafficControllerName: string,
  securityPolicyName: string,
  options: SecurityPoliciesInterfaceGetOptionalParams = { requestOptions: {} },
): Promise<SecurityPolicy> {
  const result = await _securityPoliciesInterfaceGetSend(
    context,
    resourceGroupName,
    trafficControllerName,
    securityPolicyName,
    options,
  );
  return _securityPoliciesInterfaceGetDeserialize(result);
}
