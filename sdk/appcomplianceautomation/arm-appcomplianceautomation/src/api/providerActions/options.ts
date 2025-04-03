// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ProviderActionsListInUseStorageAccountsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderActionsTriggerEvaluationOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ProviderActionsOnboardOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ProviderActionsGetOverviewStatusOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderActionsGetCollectionCountOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderActionsCheckNameAvailabilityOptionalParams extends OperationOptions {}
