// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ConnectedClustersListClusterUserCredentialOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ConnectedClustersListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConnectedClustersListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConnectedClustersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectedClustersUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConnectedClustersCreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectedClustersGetOptionalParams extends OperationOptions {}
