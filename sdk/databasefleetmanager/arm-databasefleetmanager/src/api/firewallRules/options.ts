// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface FirewallRulesListByFleetspaceOptionalParams extends OperationOptions {
  /** The number of elements in the collection to skip. */
  skip?: number;
  /** The number of elements to return from the collection. */
  top?: number;
  /** An opaque token that identifies a starting point in the collection. */
  skiptoken?: string;
}

/** Optional parameters. */
export interface FirewallRulesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface FirewallRulesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface FirewallRulesGetOptionalParams extends OperationOptions {}
