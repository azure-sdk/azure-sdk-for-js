// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeOrderContext } from "../../api/edgeOrderContext.js";
import { OrderResource } from "../../models/models.js";
import {
  OrdersOperationGroupListByResourceGroupOptionalParams,
  OrdersOperationGroupListBySubscriptionOptionalParams,
} from "../../api/ordersOperationGroup/options.js";
import {
  listByResourceGroup,
  listBySubscription,
} from "../../api/ordersOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a OrdersOperationGroup operations. */
export interface OrdersOperationGroupOperations {
  /** List orders at resource group level. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: OrdersOperationGroupListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<OrderResource>;
  /** List orders at subscription level. */
  listBySubscription: (
    options?: OrdersOperationGroupListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<OrderResource>;
}

function _getOrdersOperationGroup(context: EdgeOrderContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      options?: OrdersOperationGroupListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    listBySubscription: (options?: OrdersOperationGroupListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
  };
}

export function _getOrdersOperationGroupOperations(
  context: EdgeOrderContext,
): OrdersOperationGroupOperations {
  return {
    ..._getOrdersOperationGroup(context),
  };
}
