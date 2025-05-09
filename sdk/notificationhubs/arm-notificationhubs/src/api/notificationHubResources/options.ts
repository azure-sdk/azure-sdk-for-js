// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NotificationHubResourcesGetPnsCredentialsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NotificationHubResourcesDebugSendOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NotificationHubResourcesListOptionalParams extends OperationOptions {
  /** Continuation token. */
  skipToken?: string;
  /** Page size. */
  top?: number;
}

/** Optional parameters. */
export interface NotificationHubResourcesDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NotificationHubResourcesUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NotificationHubResourcesCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NotificationHubResourcesGetOptionalParams extends OperationOptions {}
