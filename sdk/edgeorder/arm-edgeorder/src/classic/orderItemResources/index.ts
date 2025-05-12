// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeOrderContext } from "../../api/edgeOrderContext.js";
import {
  OrderItemResource,
  OrderItemUpdateParameter,
  CancellationReason,
  ReturnOrderItemDetails,
  OkResponse,
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
} from "../../api/orderItemResources/options.js";
import {
  returnOrderItem,
  cancel,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/orderItemResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a OrderItemResources operations. */
export interface OrderItemResourcesOperations {
  /** Return order item. */
  returnOrderItem: (
    resourceGroupName: string,
    orderItemName: string,
    returnOrderItemDetails: ReturnOrderItemDetails,
    options?: OrderItemResourcesReturnOrderItemOptionalParams,
  ) => PollerLike<OperationState<OkResponse>, OkResponse>;
  /** Cancel order item. */
  cancel: (
    resourceGroupName: string,
    orderItemName: string,
    cancellationReason: CancellationReason,
    options?: OrderItemResourcesCancelOptionalParams,
  ) => Promise<void>;
  /** List order items at subscription level. */
  listBySubscription: (
    options?: OrderItemResourcesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<OrderItemResource>;
  /** List order items at resource group level. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: OrderItemResourcesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<OrderItemResource>;
  /** Delete an order item. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    orderItemName: string,
    options?: OrderItemResourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update the properties of an existing order item. */
  update: (
    resourceGroupName: string,
    orderItemName: string,
    orderItemUpdateParameter: OrderItemUpdateParameter,
    options?: OrderItemResourcesUpdateOptionalParams,
  ) => PollerLike<OperationState<OrderItemResource>, OrderItemResource>;
  /**
   * Create an order item. Existing order item cannot be updated with this api and should instead be updated with the Update order item
   * API.
   */
  create: (
    resourceGroupName: string,
    orderItemName: string,
    orderItemResource: OrderItemResource,
    options?: OrderItemResourcesCreateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get an order item. */
  get: (
    resourceGroupName: string,
    orderItemName: string,
    options?: OrderItemResourcesGetOptionalParams,
  ) => Promise<OrderItemResource>;
}

function _getOrderItemResources(context: EdgeOrderContext) {
  return {
    returnOrderItem: (
      resourceGroupName: string,
      orderItemName: string,
      returnOrderItemDetails: ReturnOrderItemDetails,
      options?: OrderItemResourcesReturnOrderItemOptionalParams,
    ) =>
      returnOrderItem(context, resourceGroupName, orderItemName, returnOrderItemDetails, options),
    cancel: (
      resourceGroupName: string,
      orderItemName: string,
      cancellationReason: CancellationReason,
      options?: OrderItemResourcesCancelOptionalParams,
    ) => cancel(context, resourceGroupName, orderItemName, cancellationReason, options),
    listBySubscription: (options?: OrderItemResourcesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: OrderItemResourcesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      orderItemName: string,
      options?: OrderItemResourcesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, orderItemName, options),
    update: (
      resourceGroupName: string,
      orderItemName: string,
      orderItemUpdateParameter: OrderItemUpdateParameter,
      options?: OrderItemResourcesUpdateOptionalParams,
    ) => update(context, resourceGroupName, orderItemName, orderItemUpdateParameter, options),
    create: (
      resourceGroupName: string,
      orderItemName: string,
      orderItemResource: OrderItemResource,
      options?: OrderItemResourcesCreateOptionalParams,
    ) => create(context, resourceGroupName, orderItemName, orderItemResource, options),
    get: (
      resourceGroupName: string,
      orderItemName: string,
      options?: OrderItemResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, orderItemName, options),
  };
}

export function _getOrderItemResourcesOperations(
  context: EdgeOrderContext,
): OrderItemResourcesOperations {
  return {
    ..._getOrderItemResources(context),
  };
}
