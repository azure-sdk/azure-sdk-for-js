// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ConnectedCachePatchResource,
  connectedCachePatchResourceSerializer,
  EnterpriseMccCustomerResource,
  enterpriseMccCustomerResourceSerializer,
  enterpriseMccCustomerResourceDeserializer,
  _EnterpriseMccCustomerResourceListResult,
  _enterpriseMccCustomerResourceListResultDeserializer,
} from "../../models/models.js";
import {
  EnterpriseMccCustomersListBySubscriptionOptionalParams,
  EnterpriseMccCustomersListByResourceGroupOptionalParams,
  EnterpriseMccCustomersDeleteOptionalParams,
  EnterpriseMccCustomersUpdateOptionalParams,
  EnterpriseMccCustomersCreateOrUpdateOptionalParams,
  EnterpriseMccCustomersGetOptionalParams,
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

export function _enterpriseMccCustomersListBySubscriptionSend(
  context: Client,
  options: EnterpriseMccCustomersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCustomersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_EnterpriseMccCustomerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _enterpriseMccCustomerResourceListResultDeserializer(result.body);
}

/** This api gets information about all enterpriseMccCustomer resources under the given subscription */
export function enterpriseMccCustomersListBySubscription(
  context: Client,
  options: EnterpriseMccCustomersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<EnterpriseMccCustomerResource> {
  return buildPagedAsyncIterator(
    context,
    () => _enterpriseMccCustomersListBySubscriptionSend(context, options),
    _enterpriseMccCustomersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _enterpriseMccCustomersListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: EnterpriseMccCustomersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCustomersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_EnterpriseMccCustomerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _enterpriseMccCustomerResourceListResultDeserializer(result.body);
}

/** This api gets the information about all enterprise mcc customer resources under the given subscription and resource group */
export function enterpriseMccCustomersListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: EnterpriseMccCustomersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<EnterpriseMccCustomerResource> {
  return buildPagedAsyncIterator(
    context,
    () => _enterpriseMccCustomersListByResourceGroupSend(context, resourceGroupName, options),
    _enterpriseMccCustomersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _enterpriseMccCustomersDeleteSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: EnterpriseMccCustomersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCustomersDeleteDeserialize(
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

/** This api deletes an existing enterprise mcc customer resource */
export function enterpriseMccCustomersDelete(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: EnterpriseMccCustomersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _enterpriseMccCustomersDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _enterpriseMccCustomersDeleteSend(
          context,
          resourceGroupName,
          customerResourceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _enterpriseMccCustomersUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  properties: ConnectedCachePatchResource,
  options: EnterpriseMccCustomersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      "api%2Dversion": context.apiVersion,
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
    body: connectedCachePatchResourceSerializer(properties),
  });
}

export async function _enterpriseMccCustomersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EnterpriseMccCustomerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return enterpriseMccCustomerResourceDeserializer(result.body);
}

/** This api updates an existing enterprise mcc customer resource */
export async function enterpriseMccCustomersUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  properties: ConnectedCachePatchResource,
  options: EnterpriseMccCustomersUpdateOptionalParams = { requestOptions: {} },
): Promise<EnterpriseMccCustomerResource> {
  const result = await _enterpriseMccCustomersUpdateSend(
    context,
    resourceGroupName,
    customerResourceName,
    properties,
    options,
  );
  return _enterpriseMccCustomersUpdateDeserialize(result);
}

export function _enterpriseMccCustomersCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  resource: EnterpriseMccCustomerResource,
  options: EnterpriseMccCustomersCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      "api%2Dversion": context.apiVersion,
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
    body: enterpriseMccCustomerResourceSerializer(resource),
  });
}

export async function _enterpriseMccCustomersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EnterpriseMccCustomerResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return enterpriseMccCustomerResourceDeserializer(result.body);
}

/** This api creates an enterprise mcc customer with the specified create parameters */
export function enterpriseMccCustomersCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  resource: EnterpriseMccCustomerResource,
  options: EnterpriseMccCustomersCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<EnterpriseMccCustomerResource>, EnterpriseMccCustomerResource> {
  return getLongRunningPoller(
    context,
    _enterpriseMccCustomersCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _enterpriseMccCustomersCreateOrUpdateSend(
          context,
          resourceGroupName,
          customerResourceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<EnterpriseMccCustomerResource>, EnterpriseMccCustomerResource>;
}

export function _enterpriseMccCustomersGetSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: EnterpriseMccCustomersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCustomersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<EnterpriseMccCustomerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return enterpriseMccCustomerResourceDeserializer(result.body);
}

/** Gets the enterprise mcc customer resource information using this get call */
export async function enterpriseMccCustomersGet(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: EnterpriseMccCustomersGetOptionalParams = { requestOptions: {} },
): Promise<EnterpriseMccCustomerResource> {
  const result = await _enterpriseMccCustomersGetSend(
    context,
    resourceGroupName,
    customerResourceName,
    options,
  );
  return _enterpriseMccCustomersGetDeserialize(result);
}
