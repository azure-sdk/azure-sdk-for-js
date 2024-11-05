// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface MonitorsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface MonitorsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface MonitorsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface MonitorsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface MonitorsListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MonitorsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderInstancesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderInstancesCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ProviderInstancesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ProviderInstancesListByMonitorOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SapLandscapeMonitorGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SapLandscapeMonitorCreateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SapLandscapeMonitorUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SapLandscapeMonitorDeleteOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SapLandscapeMonitorListByMonitorOptionalParams
  extends OperationOptions {}
