// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanContext } from "../../api/elasticSanContext.js";
import {
  VolumeGroup,
  VolumeGroupUpdate,
  VolumeNameList,
  PreValidationResponse,
  DiskSnapshotList,
} from "../../models/models.js";
import {
  VolumeGroupsPreRestoreOptionalParams,
  VolumeGroupsPreBackupOptionalParams,
  VolumeGroupsListByElasticSanOptionalParams,
  VolumeGroupsDeleteOptionalParams,
  VolumeGroupsUpdateOptionalParams,
  VolumeGroupsCreateOptionalParams,
  VolumeGroupsGetOptionalParams,
} from "../../api/volumeGroups/options.js";
import {
  preRestore,
  preBackup,
  listByElasticSan,
  $delete,
  update,
  create,
  get,
} from "../../api/volumeGroups/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VolumeGroups operations. */
export interface VolumeGroupsOperations {
  /** Validate whether a list of backed up disk snapshots can be restored into ElasticSan volumes. */
  preRestore: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: DiskSnapshotList,
    options?: VolumeGroupsPreRestoreOptionalParams,
  ) => PollerLike<OperationState<PreValidationResponse>, PreValidationResponse>;
  /** Validate whether a disk snapshot backup can be taken for list of volumes. */
  preBackup: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeNameList,
    options?: VolumeGroupsPreBackupOptionalParams,
  ) => PollerLike<OperationState<PreValidationResponse>, PreValidationResponse>;
  /** List VolumeGroups. */
  listByElasticSan: (
    resourceGroupName: string,
    elasticSanName: string,
    options?: VolumeGroupsListByElasticSanOptionalParams,
  ) => PagedAsyncIterableIterator<VolumeGroup>;
  /** Delete an VolumeGroup. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an VolumeGroup. */
  update: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroupUpdate,
    options?: VolumeGroupsUpdateOptionalParams,
  ) => PollerLike<OperationState<VolumeGroup>, VolumeGroup>;
  /** Create a Volume Group. */
  create: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroup,
    options?: VolumeGroupsCreateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get an VolumeGroups. */
  get: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsGetOptionalParams,
  ) => Promise<VolumeGroup>;
}

function _getVolumeGroups(context: ElasticSanContext) {
  return {
    preRestore: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      parameters: DiskSnapshotList,
      options?: VolumeGroupsPreRestoreOptionalParams,
    ) =>
      preRestore(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        parameters,
        options,
      ),
    preBackup: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      parameters: VolumeNameList,
      options?: VolumeGroupsPreBackupOptionalParams,
    ) =>
      preBackup(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        parameters,
        options,
      ),
    listByElasticSan: (
      resourceGroupName: string,
      elasticSanName: string,
      options?: VolumeGroupsListByElasticSanOptionalParams,
    ) => listByElasticSan(context, resourceGroupName, elasticSanName, options),
    delete: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      options?: VolumeGroupsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        options,
      ),
    update: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      parameters: VolumeGroupUpdate,
      options?: VolumeGroupsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        parameters,
        options,
      ),
    create: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      parameters: VolumeGroup,
      options?: VolumeGroupsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      options?: VolumeGroupsGetOptionalParams,
    ) =>
      get(context, resourceGroupName, elasticSanName, volumeGroupName, options),
  };
}

export function _getVolumeGroupsOperations(
  context: ElasticSanContext,
): VolumeGroupsOperations {
  return {
    ..._getVolumeGroups(context),
  };
}
