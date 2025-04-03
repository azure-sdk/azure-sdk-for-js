// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CheckAvailabilityQuotaOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListQuotaOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetQuotaOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OutboundNetworkDependenciesEndpointsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteLoadtestOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface UpdateLoadtestOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CreateOrUpdateLoadtestOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GetLoadtestOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListBySubscriptionOptionalParams extends OperationOptions {}
