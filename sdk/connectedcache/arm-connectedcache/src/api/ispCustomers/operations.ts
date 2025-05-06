// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  IspCustomerResource,
  ispCustomerResourceSerializer,
  ispCustomerResourceDeserializer,
  ConnectedCachePatchResource,
  connectedCachePatchResourceSerializer,
  _IspCustomerResourceListResult,
  _ispCustomerResourceListResultDeserializer,
} from "../../models/models.js";
import {
  IspCustomersListBySubscriptionOptionalParams,
  IspCustomersListByResourceGroupOptionalParams,
  IspCustomersDeleteOptionalParams,
  IspCustomersUpdateOptionalParams,
  IspCustomersCreateOrUpdateOptionalParams,
  IspCustomersGetOptionalParams,
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

export function _ispCustomersListBySubscriptionSend(
  context: Client,
  options: IspCustomersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedCache/ispCustomers{?api%2Dversion}",
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

export async function _ispCustomersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_IspCustomerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _ispCustomerResourceListResultDeserializer(result.body);
}

/** This api gets information about all ispCustomer resources under the given subscription */
export function ispCustomersListBySubscription(
  context: Client,
  options: IspCustomersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<IspCustomerResource> {
  return buildPagedAsyncIterator(
    context,
    () => _ispCustomersListBySubscriptionSend(context, options),
    _ispCustomersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _ispCustomersListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: IspCustomersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers{?api%2Dversion}",
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

export async function _ispCustomersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_IspCustomerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _ispCustomerResourceListResultDeserializer(result.body);
}

/** This api gets the information about all ispCustomer resources under the given subscription and resource group */
export function ispCustomersListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: IspCustomersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<IspCustomerResource> {
  return buildPagedAsyncIterator(
    context,
    () => _ispCustomersListByResourceGroupSend(context, resourceGroupName, options),
    _ispCustomersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _ispCustomersDeleteSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: IspCustomersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}{?api%2Dversion}",
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

export async function _ispCustomersDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** This api deletes an existing ispCustomer resource */
export function ispCustomersDelete(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: IspCustomersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _ispCustomersDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _ispCustomersDeleteSend(context, resourceGroupName, customerResourceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _ispCustomersUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  properties: ConnectedCachePatchResource,
  options: IspCustomersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}{?api%2Dversion}",
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

export async function _ispCustomersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<IspCustomerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return ispCustomerResourceDeserializer(result.body);
}

/** This api updates an existing ispCustomer resource */
export async function ispCustomersUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  properties: ConnectedCachePatchResource,
  options: IspCustomersUpdateOptionalParams = { requestOptions: {} },
): Promise<IspCustomerResource> {
  const result = await _ispCustomersUpdateSend(
    context,
    resourceGroupName,
    customerResourceName,
    properties,
    options,
  );
  return _ispCustomersUpdateDeserialize(result);
}

export function _ispCustomersCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  resource: IspCustomerResource,
  options: IspCustomersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}{?api%2Dversion}",
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
    body: ispCustomerResourceSerializer(resource),
  });
}

export async function _ispCustomersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<IspCustomerResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return ispCustomerResourceDeserializer(result.body);
}

/** This api creates an ispCustomer with the specified create parameters */
export function ispCustomersCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  resource: IspCustomerResource,
  options: IspCustomersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<IspCustomerResource>, IspCustomerResource> {
  return getLongRunningPoller(context, _ispCustomersCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _ispCustomersCreateOrUpdateSend(
        context,
        resourceGroupName,
        customerResourceName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<IspCustomerResource>, IspCustomerResource>;
}

export function _ispCustomersGetSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: IspCustomersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}{?api%2Dversion}",
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

export async function _ispCustomersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<IspCustomerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return ispCustomerResourceDeserializer(result.body);
}

/** Gets the ispCustomer resource information using this get call */
export async function ispCustomersGet(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: IspCustomersGetOptionalParams = { requestOptions: {} },
): Promise<IspCustomerResource> {
  const result = await _ispCustomersGetSend(
    context,
    resourceGroupName,
    customerResourceName,
    options,
  );
  return _ispCustomersGetDeserialize(result);
}
