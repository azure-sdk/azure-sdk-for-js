// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface DedicatedHsmsListOutboundNetworkDependenciesEndpointsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DedicatedHsmsListBySubscriptionOptionalParams extends OperationOptions {
  /** Maximum number of results to return. */
  top?: number;
}

/** Optional parameters. */
export interface DedicatedHsmsListByResourceGroupOptionalParams extends OperationOptions {
  /** Maximum number of results to return. */
  top?: number;
}

/** Optional parameters. */
export interface DedicatedHsmsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DedicatedHsmsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DedicatedHsmsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DedicatedHsmsGetOptionalParams extends OperationOptions {}
