// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeOrderContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  OrderItemResource,
  orderItemResourceSerializer,
  orderItemResourceDeserializer,
  OrderItemUpdateParameter,
  orderItemUpdateParameterSerializer,
  _OrderItemResourceList,
  _orderItemResourceListDeserializer,
  CancellationReason,
  cancellationReasonSerializer,
  ReturnOrderItemDetails,
  returnOrderItemDetailsSerializer,
  OkResponse,
  okResponseDeserializer,
} from "../../models/models.js";
import {
  OrderItemResourcesReturnOrderItemOptionalParams,
  OrderItemResourcesCancelOptionalParams,
  OrderItemResourcesListBySubscriptionOptionalParams,
  OrderItemResourcesListByResourceGroupOptionalParams,
  OrderItemResourcesDeleteOptionalParams,
  OrderItemResourcesUpdateOptionalParams,
  OrderItemResourcesCreateOptionalParams,
  OrderItemResourcesGetOptionalParams,
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

export function _returnOrderItemSend(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  returnOrderItemDetails: ReturnOrderItemDetails,
  options: OrderItemResourcesReturnOrderItemOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}/return{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      orderItemName: orderItemName,
      "api%2Dversion": context.apiVersion,
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
    body: returnOrderItemDetailsSerializer(returnOrderItemDetails),
  });
}

export async function _returnOrderItemDeserialize(
  result: PathUncheckedResponse,
): Promise<OkResponse> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return okResponseDeserializer(result.body);
}

/** Return order item. */
export function returnOrderItem(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  returnOrderItemDetails: ReturnOrderItemDetails,
  options: OrderItemResourcesReturnOrderItemOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OkResponse>, OkResponse> {
  return getLongRunningPoller(context, _returnOrderItemDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _returnOrderItemSend(
        context,
        resourceGroupName,
        orderItemName,
        returnOrderItemDetails,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<OkResponse>, OkResponse>;
}

export function _cancelSend(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  cancellationReason: CancellationReason,
  options: OrderItemResourcesCancelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}/cancel{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      orderItemName: orderItemName,
      "api%2Dversion": context.apiVersion,
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
    body: cancellationReasonSerializer(cancellationReason),
  });
}

export async function _cancelDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Cancel order item. */
export async function cancel(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  cancellationReason: CancellationReason,
  options: OrderItemResourcesCancelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cancelSend(
    context,
    resourceGroupName,
    orderItemName,
    cancellationReason,
    options,
  );
  return _cancelDeserialize(result);
}

export function _listBySubscriptionSend(
  context: Client,
  options: OrderItemResourcesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeOrder/orderItems{?api%2Dversion,%24filter,%24expand,%24skipToken,%24top}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
      "%24filter": options?.filter,
      "%24expand": options?.expand,
      "%24skipToken": options?.skipToken,
      "%24top": options?.top,
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrderItemResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _orderItemResourceListDeserializer(result.body);
}

/** List order items at subscription level. */
export function listBySubscription(
  context: Client,
  options: OrderItemResourcesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrderItemResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: OrderItemResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems{?api%2Dversion,%24filter,%24expand,%24skipToken,%24top}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api%2Dversion": context.apiVersion,
      "%24filter": options?.filter,
      "%24expand": options?.expand,
      "%24skipToken": options?.skipToken,
      "%24top": options?.top,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrderItemResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _orderItemResourceListDeserializer(result.body);
}

/** List order items at resource group level. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: OrderItemResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrderItemResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  options: OrderItemResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      orderItemName: orderItemName,
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

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete an order item. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  options: OrderItemResourcesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceGroupName, orderItemName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  orderItemUpdateParameter: OrderItemUpdateParameter,
  options: OrderItemResourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      orderItemName: orderItemName,
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
      ...(options?.ifMatch !== undefined ? { "If-Match": options?.ifMatch } : {}),
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: orderItemUpdateParameterSerializer(orderItemUpdateParameter),
  });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<OrderItemResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return orderItemResourceDeserializer(result.body);
}

/** Update the properties of an existing order item. */
export function update(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  orderItemUpdateParameter: OrderItemUpdateParameter,
  options: OrderItemResourcesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OrderItemResource>, OrderItemResource> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, orderItemName, orderItemUpdateParameter, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<OrderItemResource>, OrderItemResource>;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  orderItemResource: OrderItemResource,
  options: OrderItemResourcesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      orderItemName: orderItemName,
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
    body: orderItemResourceSerializer(orderItemResource),
  });
}

export async function _createDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * Create an order item. Existing order item cannot be updated with this api and should instead be updated with the Update order item
 * API.
 */
export function create(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  orderItemResource: OrderItemResource,
  options: OrderItemResourcesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(context, resourceGroupName, orderItemName, orderItemResource, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  options: OrderItemResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      orderItemName: orderItemName,
      "api%2Dversion": context.apiVersion,
      "%24expand": options?.expand,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<OrderItemResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return orderItemResourceDeserializer(result.body);
}

/** Get an order item. */
export async function get(
  context: Client,
  resourceGroupName: string,
  orderItemName: string,
  options: OrderItemResourcesGetOptionalParams = { requestOptions: {} },
): Promise<OrderItemResource> {
  const result = await _getSend(context, resourceGroupName, orderItemName, options);
  return _getDeserialize(result);
}
