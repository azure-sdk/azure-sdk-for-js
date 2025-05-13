// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ElasticMonitorResourcesResubscribeOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesTrafficFiltersDeleteOptionalParams
  extends OperationOptions {
  /** Ruleset Id of the filter */
  rulesetId?: string;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesDetachTrafficFilterUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Ruleset Id of the filter */
  rulesetId?: string;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesDetachAndDeleteTrafficFilterDeleteOptionalParams
  extends OperationOptions {
  /** Ruleset Id of the filter */
  rulesetId?: string;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesAssociateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Ruleset Id of the filter */
  rulesetId?: string;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesCreateAndAssociatePLFilterCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Name of the traffic filter */
  name?: string;
  /** Guid of the private endpoint */
  privateEndpointGuid?: string;
  /** Name of the private endpoint */
  privateEndpointName?: string;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesCreateAndAssociateIPFilterCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** List of ips */
  ips?: string;
  /** Name of the traffic filter */
  name?: string;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesListAssociatedTrafficFiltersListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesAllTrafficFiltersListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesUpgradeOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesUpgradableVersionsDetailsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesVMCollectionUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesDetailsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesVMHostListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesConnectedPartnerResourcesListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesBillingInfoGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesDeploymentInfoListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesMonitoredResourcesListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ElasticMonitorResourcesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ElasticMonitorResourcesGetOptionalParams extends OperationOptions {}
