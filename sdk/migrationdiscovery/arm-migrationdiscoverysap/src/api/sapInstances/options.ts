// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SAPInstancesListBySapDiscoverySiteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SAPInstancesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SAPInstancesUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SAPInstancesCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SAPInstancesGetOptionalParams extends OperationOptions {}
