// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SAPDiscoverySitesImportEntitiesOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SAPDiscoverySitesListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SAPDiscoverySitesListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SAPDiscoverySitesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SAPDiscoverySitesUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SAPDiscoverySitesCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SAPDiscoverySitesGetOptionalParams extends OperationOptions {}
