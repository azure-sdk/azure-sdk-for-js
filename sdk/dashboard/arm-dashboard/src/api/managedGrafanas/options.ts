// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ManagedGrafanasRefreshOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ManagedGrafanasFetchAvailablePluginsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedGrafanasCheckEnterpriseDetailsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedGrafanasListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedGrafanasListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedGrafanasDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ManagedGrafanasUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedGrafanasCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ManagedGrafanasGetOptionalParams extends OperationOptions {}
