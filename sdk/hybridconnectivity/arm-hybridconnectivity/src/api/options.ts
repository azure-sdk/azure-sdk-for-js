// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SolutionTypesListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SolutionTypesListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SolutionTypesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface InventoryListBySolutionConfigurationOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface InventoryGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SolutionConfigurationsSyncNowOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SolutionConfigurationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SolutionConfigurationsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SolutionConfigurationsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SolutionConfigurationsCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SolutionConfigurationsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublicCloudConnectorsTestPermissionsOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PublicCloudConnectorsListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublicCloudConnectorsListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublicCloudConnectorsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublicCloudConnectorsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublicCloudConnectorsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PublicCloudConnectorsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GenerateAwsTemplatePostOptionalParams extends OperationOptions {}
