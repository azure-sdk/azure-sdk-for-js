// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface OperationStatusGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OperationResultsGetOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypeSkusListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NodeTypesListFaultSimulationOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NodeTypesGetFaultSimulationOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NodeTypesStopFaultSimulationOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesStartFaultSimulationOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesStartOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesRestartOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesReimageOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesRedeployOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesDeleteNodeOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesDeallocateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesListByManagedClustersOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NodeTypesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NodeTypesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedMaintenanceWindowStatusGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedApplyMaintenanceWindowPostOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedAzResiliencyStatusGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClustersStopFaultSimulationOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ManagedClustersStartFaultSimulationOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ManagedClustersListFaultSimulationOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClustersGetFaultSimulationOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClustersListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClustersListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClustersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ManagedClustersUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClustersCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ManagedClustersGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedUnsupportedVMSizesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedUnsupportedVMSizesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClusterVersionListByEnvironmentOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClusterVersionGetByEnvironmentOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClusterVersionListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ManagedClusterVersionGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ServicesListByApplicationsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ServicesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ServicesUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ServicesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ServicesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationTypeVersionsListByApplicationTypesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationTypeVersionsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationTypeVersionsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationTypeVersionsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationTypeVersionsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationTypesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationTypesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationTypesUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationTypesCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationTypesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationsStartRollbackOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationsResumeUpgradeOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationsReadUpgradeOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ApplicationsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ApplicationsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}
