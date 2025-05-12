// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SnapshotsListByVolumeGroupOptionalParams extends OperationOptions {
  /** Specify $filter='volumeName eq <volume name>' to filter on volume. */
  filter?: string;
}

/** Optional parameters. */
export interface SnapshotsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SnapshotsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SnapshotsGetOptionalParams extends OperationOptions {}
