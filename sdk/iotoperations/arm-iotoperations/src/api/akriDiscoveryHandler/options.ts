// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AkriDiscoveryHandlerListByInstanceResourceOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AkriDiscoveryHandlerDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AkriDiscoveryHandlerCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AkriDiscoveryHandlerGetOptionalParams extends OperationOptions {}
