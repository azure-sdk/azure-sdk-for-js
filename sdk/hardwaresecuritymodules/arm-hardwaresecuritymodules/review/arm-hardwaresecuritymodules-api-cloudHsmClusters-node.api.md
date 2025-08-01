## API Report File for "@azure/arm-hardwaresecuritymodules"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Client } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PollerLike } from '@azure/core-lro';

// @public
export function $delete(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, options?: CloudHsmClustersDeleteOptionalParams): PollerLike<OperationState<void>, void>;

// @public
export function backup(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, options?: CloudHsmClustersBackupOptionalParams): PollerLike<OperationState<BackupResult>, BackupResult>;

// @public
export interface CloudHsmClustersBackupOptionalParams extends OperationOptions {
    backupRequestProperties?: BackupRequestProperties;
    updateIntervalInMs?: number;
}

// @public
export interface CloudHsmClustersCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface CloudHsmClustersDeleteOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface CloudHsmClustersGetOptionalParams extends OperationOptions {
}

// @public
export interface CloudHsmClustersListByResourceGroupOptionalParams extends OperationOptions {
    skiptoken?: string;
}

// @public
export interface CloudHsmClustersListBySubscriptionOptionalParams extends OperationOptions {
    skiptoken?: string;
}

// @public
export interface CloudHsmClustersRestoreOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface CloudHsmClustersUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface CloudHsmClustersValidateBackupPropertiesOptionalParams extends OperationOptions {
    backupRequestProperties?: BackupRequestProperties;
    updateIntervalInMs?: number;
}

// @public
export interface CloudHsmClustersValidateRestorePropertiesOptionalParams extends OperationOptions {
    restoreRequestProperties?: RestoreRequestProperties;
    updateIntervalInMs?: number;
}

// @public
export function createOrUpdate(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, body: CloudHsmCluster, options?: CloudHsmClustersCreateOrUpdateOptionalParams): PollerLike<OperationState<CloudHsmCluster>, CloudHsmCluster>;

// @public
export function get(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, options?: CloudHsmClustersGetOptionalParams): Promise<CloudHsmCluster>;

// @public
export function listByResourceGroup(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, options?: CloudHsmClustersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<CloudHsmCluster>;

// @public
export function listBySubscription(context: AzureDedicatedHSMResourceProviderContext, options?: CloudHsmClustersListBySubscriptionOptionalParams): PagedAsyncIterableIterator<CloudHsmCluster>;

// @public
export function restore(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, restoreRequestProperties: RestoreRequestProperties, options?: CloudHsmClustersRestoreOptionalParams): PollerLike<OperationState<RestoreResult>, RestoreResult>;

// @public
export function update(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, body: CloudHsmClusterPatchParameters, options?: CloudHsmClustersUpdateOptionalParams): PollerLike<OperationState<CloudHsmCluster>, CloudHsmCluster>;

// @public
export function validateBackupProperties(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, options?: CloudHsmClustersValidateBackupPropertiesOptionalParams): PollerLike<OperationState<BackupResult>, BackupResult>;

// @public
export function validateRestoreProperties(context: AzureDedicatedHSMResourceProviderContext, resourceGroupName: string, cloudHsmClusterName: string, options?: CloudHsmClustersValidateRestorePropertiesOptionalParams): PollerLike<OperationState<RestoreResult>, RestoreResult>;

// (No @packageDocumentation comment for this package)

```
