// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface FleetsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FleetsListByResourceGroupOptionalParams extends OperationOptions {
  /** The number of elements in the collection to skip. */
  skip?: number;
  /** The number of elements to return from the collection. */
  top?: number;
  /** An opaque token that identifies a starting point in the collection. */
  skiptoken?: string;
}

/** Optional parameters. */
export interface FleetsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface FleetsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface FleetsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface FleetsGetOptionalParams extends OperationOptions {}
