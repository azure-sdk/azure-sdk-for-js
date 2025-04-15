// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ServerInstancesListBySapInstanceOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ServerInstancesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ServerInstancesUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ServerInstancesCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ServerInstancesGetOptionalParams extends OperationOptions {}
