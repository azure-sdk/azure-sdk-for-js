// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface StorageTasksStorageTaskAssignmentListOptionalParams extends OperationOptions {
  /** Optional, specifies the maximum number of Storage Task Assignment Resource IDs to be included in the list response. */
  maxpagesize?: number;
}

/** Optional parameters. */
export interface StorageTasksListOptionalParams extends OperationOptions {
  /** Optional, specifies the maximum number of Storage Task Assignment Resource IDs to be included in the list response. */
  maxpagesize?: number;
  /** Optional. When specified, it can be used to query using reporting properties. */
  filter?: string;
}

/** Optional parameters. */
export interface StorageTasksListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface StorageTasksListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface StorageTasksDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface StorageTasksUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface StorageTasksCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface StorageTasksGetOptionalParams extends OperationOptions {}
