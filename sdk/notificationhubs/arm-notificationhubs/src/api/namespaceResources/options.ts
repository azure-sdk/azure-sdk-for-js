// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NamespaceResourcesGetPnsCredentialsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NamespaceResourcesCheckNotificationHubAvailabilityOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface NamespaceResourcesListAllOptionalParams extends OperationOptions {
  /** Skip token for subsequent requests. */
  skipToken?: string;
  /** Maximum number of results to return. */
  top?: number;
}

/** Optional parameters. */
export interface NamespaceResourcesListOptionalParams extends OperationOptions {
  /** Skip token for subsequent requests. */
  skipToken?: string;
  /** Maximum number of results to return. */
  top?: number;
}

/** Optional parameters. */
export interface NamespaceResourcesDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NamespaceResourcesUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NamespaceResourcesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NamespaceResourcesGetOptionalParams extends OperationOptions {}
