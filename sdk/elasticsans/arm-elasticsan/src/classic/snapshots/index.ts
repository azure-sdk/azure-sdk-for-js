// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanContext } from "../../api/elasticSanContext.js";
import { Snapshot } from "../../models/models.js";
import {
  SnapshotsListByVolumeGroupOptionalParams,
  SnapshotsDeleteOptionalParams,
  SnapshotsCreateOptionalParams,
  SnapshotsGetOptionalParams,
} from "../../api/snapshots/options.js";
import { listByVolumeGroup, $delete, create, get } from "../../api/snapshots/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Snapshots operations. */
export interface SnapshotsOperations {
  /** List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter */
  listByVolumeGroup: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: SnapshotsListByVolumeGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Snapshot>;
  /** Delete a Volume Snapshot. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a Volume Snapshot. */
  create: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    parameters: Snapshot,
    options?: SnapshotsCreateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get a Volume Snapshot. */
  get: (
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    options?: SnapshotsGetOptionalParams,
  ) => Promise<Snapshot>;
}

function _getSnapshots(context: ElasticSanContext) {
  return {
    listByVolumeGroup: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      options?: SnapshotsListByVolumeGroupOptionalParams,
    ) => listByVolumeGroup(context, resourceGroupName, elasticSanName, volumeGroupName, options),
    delete: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      snapshotName: string,
      options?: SnapshotsDeleteOptionalParams,
    ) =>
      $delete(context, resourceGroupName, elasticSanName, volumeGroupName, snapshotName, options),
    create: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      snapshotName: string,
      parameters: Snapshot,
      options?: SnapshotsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        snapshotName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      elasticSanName: string,
      volumeGroupName: string,
      snapshotName: string,
      options?: SnapshotsGetOptionalParams,
    ) => get(context, resourceGroupName, elasticSanName, volumeGroupName, snapshotName, options),
  };
}

export function _getSnapshotsOperations(context: ElasticSanContext): SnapshotsOperations {
  return {
    ..._getSnapshots(context),
  };
}
