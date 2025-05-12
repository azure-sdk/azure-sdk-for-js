// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface OrdersOperationGroupListByResourceGroupOptionalParams extends OperationOptions {
  /** $skipToken is supported on Get list of orders, which provides the next page in the list of orders. */
  skipToken?: string;
  /** $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller. */
  top?: number;
}

/** Optional parameters. */
export interface OrdersOperationGroupListBySubscriptionOptionalParams extends OperationOptions {
  /** $skipToken is supported on Get list of orders, which provides the next page in the list of orders. */
  skipToken?: string;
  /** $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller. */
  top?: number;
}
