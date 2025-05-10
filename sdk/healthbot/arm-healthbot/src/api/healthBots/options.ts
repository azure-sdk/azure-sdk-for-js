// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface HealthBotsRegenerateApiJwtSecretOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface HealthBotsListSecretsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface HealthBotsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface HealthBotsListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface HealthBotsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface HealthBotsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface HealthBotsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface HealthBotsGetOptionalParams extends OperationOptions {}
