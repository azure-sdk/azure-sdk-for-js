// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesContext } from "../../api/hardwareSecurityModulesContext.js";
import {
  CloudHsmCluster,
  CloudHsmClusterPatchParameters,
  BackupRequestProperties,
  BackupResult,
  RestoreRequestProperties,
  RestoreResult,
  PrivateLinkResource,
} from "../../models/models.js";
import {
  CloudHsmClustersCloudHsmClusterRestoreStatusGetOptionalParams,
  CloudHsmClustersCloudHsmClusterBackupStatusGetOptionalParams,
  CloudHsmClustersListByCloudHsmClusterOptionalParams,
  CloudHsmClustersRestoreOptionalParams,
  CloudHsmClustersValidateRestorePropertiesOptionalParams,
  CloudHsmClustersBackupOptionalParams,
  CloudHsmClustersValidateBackupPropertiesOptionalParams,
  CloudHsmClustersListBySubscriptionOptionalParams,
  CloudHsmClustersListByResourceGroupOptionalParams,
  CloudHsmClustersDeleteOptionalParams,
  CloudHsmClustersUpdateOptionalParams,
  CloudHsmClustersCreateOrUpdateOptionalParams,
  CloudHsmClustersGetOptionalParams,
} from "../../api/cloudHsmClusters/options.js";
import {
  cloudHsmClusterRestoreStatusGet,
  cloudHsmClusterBackupStatusGet,
  listByCloudHsmCluster,
  restore,
  validateRestoreProperties,
  backup,
  validateBackupProperties,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/cloudHsmClusters/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a CloudHsmClusters operations. */
export interface CloudHsmClustersOperations {
  /** Gets the restore operation status of the specified Cloud HSM Cluster */
  cloudHsmClusterRestoreStatusGet: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    jobId: string,
    options?: CloudHsmClustersCloudHsmClusterRestoreStatusGetOptionalParams,
  ) => Promise<RestoreResult | null>;
  /** Gets the backup operation status of the specified Cloud HSM Cluster */
  cloudHsmClusterBackupStatusGet: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    jobId: string,
    options?: CloudHsmClustersCloudHsmClusterBackupStatusGetOptionalParams,
  ) => Promise<BackupResult | null>;
  /** Gets the private link resources supported for the Cloud Hsm Cluster. */
  listByCloudHsmCluster: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersListByCloudHsmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
  /** Restores all key materials of a specified Cloud HSM Cluster */
  restore: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    restoreRequestProperties: RestoreRequestProperties,
    options?: CloudHsmClustersRestoreOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Queued validating pre restore operation */
  validateRestoreProperties: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    body: {
      restoreRequestProperties?: RestoreRequestProperties;
    },
    options?: CloudHsmClustersValidateRestorePropertiesOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a backup of the Cloud HSM Cluster in the specified subscription */
  backup: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    body: {
      backupRequestProperties?: BackupRequestProperties;
    },
    options?: CloudHsmClustersBackupOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Pre Backup operation to validate whether the customer can perform a backup on the Cloud HSM Cluster resource in the specified subscription. */
  validateBackupProperties: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    body: {
      backupRequestProperties?: BackupRequestProperties;
    },
    options?: CloudHsmClustersValidateBackupPropertiesOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The List operation gets information about the Cloud HSM Clusters associated with the subscription. */
  listBySubscription: (
    options?: CloudHsmClustersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CloudHsmCluster>;
  /** The List operation gets information about the Cloud HSM Clusters associated with the subscription and within the specified resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudHsmClustersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CloudHsmCluster>;
  /** Deletes the specified Cloud HSM Cluster */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a Cloud HSM Cluster in the specified subscription. */
  update: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    body: CloudHsmClusterPatchParameters,
    options?: CloudHsmClustersUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudHsmCluster>, CloudHsmCluster>;
  /** Create or Update a Cloud HSM Cluster in the specified subscription. */
  createOrUpdate: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    body: CloudHsmCluster,
    options?: CloudHsmClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudHsmCluster>, CloudHsmCluster>;
  /** Gets the specified Cloud HSM Cluster */
  get: (
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersGetOptionalParams,
  ) => Promise<CloudHsmCluster>;
}

function _getCloudHsmClusters(context: HardwareSecurityModulesContext) {
  return {
    cloudHsmClusterRestoreStatusGet: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      jobId: string,
      options?: CloudHsmClustersCloudHsmClusterRestoreStatusGetOptionalParams,
    ) =>
      cloudHsmClusterRestoreStatusGet(
        context,
        resourceGroupName,
        cloudHsmClusterName,
        jobId,
        options,
      ),
    cloudHsmClusterBackupStatusGet: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      jobId: string,
      options?: CloudHsmClustersCloudHsmClusterBackupStatusGetOptionalParams,
    ) =>
      cloudHsmClusterBackupStatusGet(
        context,
        resourceGroupName,
        cloudHsmClusterName,
        jobId,
        options,
      ),
    listByCloudHsmCluster: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      options?: CloudHsmClustersListByCloudHsmClusterOptionalParams,
    ) => listByCloudHsmCluster(context, resourceGroupName, cloudHsmClusterName, options),
    restore: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      restoreRequestProperties: RestoreRequestProperties,
      options?: CloudHsmClustersRestoreOptionalParams,
    ) =>
      restore(context, resourceGroupName, cloudHsmClusterName, restoreRequestProperties, options),
    validateRestoreProperties: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      body: {
        restoreRequestProperties?: RestoreRequestProperties;
      },
      options?: CloudHsmClustersValidateRestorePropertiesOptionalParams,
    ) => validateRestoreProperties(context, resourceGroupName, cloudHsmClusterName, body, options),
    backup: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      body: {
        backupRequestProperties?: BackupRequestProperties;
      },
      options?: CloudHsmClustersBackupOptionalParams,
    ) => backup(context, resourceGroupName, cloudHsmClusterName, body, options),
    validateBackupProperties: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      body: {
        backupRequestProperties?: BackupRequestProperties;
      },
      options?: CloudHsmClustersValidateBackupPropertiesOptionalParams,
    ) => validateBackupProperties(context, resourceGroupName, cloudHsmClusterName, body, options),
    listBySubscription: (options?: CloudHsmClustersListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudHsmClustersListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      options?: CloudHsmClustersDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, cloudHsmClusterName, options),
    update: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      body: CloudHsmClusterPatchParameters,
      options?: CloudHsmClustersUpdateOptionalParams,
    ) => update(context, resourceGroupName, cloudHsmClusterName, body, options),
    createOrUpdate: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      body: CloudHsmCluster,
      options?: CloudHsmClustersCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, cloudHsmClusterName, body, options),
    get: (
      resourceGroupName: string,
      cloudHsmClusterName: string,
      options?: CloudHsmClustersGetOptionalParams,
    ) => get(context, resourceGroupName, cloudHsmClusterName, options),
  };
}

export function _getCloudHsmClustersOperations(
  context: HardwareSecurityModulesContext,
): CloudHsmClustersOperations {
  return {
    ..._getCloudHsmClusters(context),
  };
}
