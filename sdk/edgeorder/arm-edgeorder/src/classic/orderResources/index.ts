// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeOrderContext } from "../../api/edgeOrderContext.js";
import { OrderResource } from "../../models/models.js";
import { OrderResourcesGetOptionalParams } from "../../api/orderResources/options.js";
import { get } from "../../api/orderResources/operations.js";

/** Interface representing a OrderResources operations. */
export interface OrderResourcesOperations {
  /** Get an order. */
  get: (
    resourceGroupName: string,
    location: string,
    orderName: string,
    options?: OrderResourcesGetOptionalParams,
  ) => Promise<OrderResource>;
}

function _getOrderResources(context: EdgeOrderContext) {
  return {
    get: (
      resourceGroupName: string,
      location: string,
      orderName: string,
      options?: OrderResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, location, orderName, options),
  };
}

export function _getOrderResourcesOperations(context: EdgeOrderContext): OrderResourcesOperations {
  return {
    ..._getOrderResources(context),
  };
}
