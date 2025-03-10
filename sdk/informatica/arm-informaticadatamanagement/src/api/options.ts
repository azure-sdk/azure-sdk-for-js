// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ServerlessRuntimesServerlessResourceByIdOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServerlessRuntimesCheckDependenciesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServerlessRuntimesUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServerlessRuntimesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ServerlessRuntimesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ServerlessRuntimesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OrganizationsGetAllServerlessRuntimesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface OrganizationsGetServerlessMetadataOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface OrganizationsListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface OrganizationsListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface OrganizationsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface OrganizationsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OrganizationsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface OrganizationsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}
