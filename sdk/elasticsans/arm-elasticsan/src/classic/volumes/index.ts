// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanContext } from "../../api/elasticSanContext.js";
import { Volume, VolumeUpdate } from "../../models/models.js";
import {
  VolumesRestoreVolumeOptionalParams,
  VolumesListByVolumeGroupOptionalParams,
  VolumesDeleteOptionalParams,
  VolumesUpdateOptionalParams,
  VolumesCreateOptionalParams,
  VolumesGetOptionalParams,
} from "../../api/volumes/options.js";
import {
  restoreVolume,
  listByVolumeGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/volumes/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Volumes operations. */
export interface VolumesOperations {
  /** Restore Soft Deleted Volumes. The volume name is obtained by using the API to list soft deleted volumes by volume group */
  restoreVolume: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    options?: VolumesRestoreVolumeOptionalParams,
  ) => PollerLike<OperationState<Volume>, Volume>;
  /** List Volumes in a VolumeGroup. */
  listByVolumeGroup: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumesListByVolumeGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Volume>;
  /** Delete an Volume. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    options?: VolumesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an Volume. */
  update: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    parameters: VolumeUpdate,
    options?: VolumesUpdateOptionalParams,
  ) => PollerLike<OperationState<Volume>, Volume>;
  /** Create a Volume. */
  create: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    parameters: Volume,
    options?: VolumesCreateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get an Volume. */
  get: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    options?: VolumesGetOptionalParams,
  ) => Promise<Volume>;
}

function _getVolumes(context: ElasticSanContext) {
  return {
    restoreVolume: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      volumeName: string,
      options?: VolumesRestoreVolumeOptionalParams,
    ) =>
      restoreVolume(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        options,
      ),
    listByVolumeGroup: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      options?: VolumesListByVolumeGroupOptionalParams,
    ) => listByVolumeGroup(context, resourceGroupName, elasticSanName, volumeGroupName, options),
    delete: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      volumeName: string,
      options?: VolumesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, elasticSanName, volumeGroupName, volumeName, options),
    update: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      volumeName: string,
      parameters: VolumeUpdate,
      options?: VolumesUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        parameters,
        options,
      ),
    create: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      volumeName: string,
      parameters: Volume,
      options?: VolumesCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      volumeName: string,
      options?: VolumesGetOptionalParams,
    ) => get(context, resourceGroupName, elasticSanName, volumeGroupName, volumeName, options),
  };
}

export function _getVolumesOperations(context: ElasticSanContext): VolumesOperations {
  return {
    ..._getVolumes(context),
  };
}
