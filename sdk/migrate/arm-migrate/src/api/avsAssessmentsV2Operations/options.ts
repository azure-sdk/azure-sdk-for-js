// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AvsAssessmentsV2OperationsDownloadUrlOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AvsAssessmentsV2OperationsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AvsAssessmentsV2OperationsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AvsAssessmentsV2OperationsListByParentOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AvsAssessmentsV2OperationsGetOptionalParams extends OperationOptions {}
