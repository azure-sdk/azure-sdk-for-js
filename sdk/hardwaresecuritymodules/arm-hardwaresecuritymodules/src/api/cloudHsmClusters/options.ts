// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CloudHsmClustersCloudHsmClusterRestoreStatusGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CloudHsmClustersCloudHsmClusterBackupStatusGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CloudHsmClustersListByCloudHsmClusterOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CloudHsmClustersRestoreOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudHsmClustersValidateRestorePropertiesOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudHsmClustersBackupOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudHsmClustersValidateBackupPropertiesOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudHsmClustersListBySubscriptionOptionalParams extends OperationOptions {
  /** The page-continuation token to use with a paged version of this API */
  skiptoken?: string;
}

/** Optional parameters. */
export interface CloudHsmClustersListByResourceGroupOptionalParams extends OperationOptions {
  /** The page-continuation token to use with a paged version of this API */
  skiptoken?: string;
}

/** Optional parameters. */
export interface CloudHsmClustersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudHsmClustersUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudHsmClustersCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudHsmClustersGetOptionalParams extends OperationOptions {}
