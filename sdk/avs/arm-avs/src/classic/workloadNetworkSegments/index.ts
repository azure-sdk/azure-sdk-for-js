// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkSegment } from "../../models/models.js";
import {
  workloadNetworkSegmentsList,
  workloadNetworkSegmentsGet,
  workloadNetworkSegmentsCreate,
  workloadNetworkSegmentsUpdate,
  workloadNetworkSegmentsDeleteSegment,
} from "../../api/workloadNetworkSegments/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkSegmentsListOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkSegments operations. */
export interface WorkloadNetworkSegmentsOperations {
  /** List WorkloadNetworkSegment resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkSegmentsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
  /** Get a WorkloadNetworkSegment */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsGetOptionalParams,
  ) => Promise<WorkloadNetworkSegment>;
  /** Create a WorkloadNetworkSegment */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworkSegmentsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  /** Update a WorkloadNetworkSegment */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworkSegmentsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  /** Delete a WorkloadNetworkSegment */
  deleteSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkSegments(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkSegmentsListOptionalParams,
    ) =>
      workloadNetworkSegmentsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      options?: WorkloadNetworkSegmentsGetOptionalParams,
    ) =>
      workloadNetworkSegmentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      workloadNetworkSegment: WorkloadNetworkSegment,
      options?: WorkloadNetworkSegmentsCreateOptionalParams,
    ) =>
      workloadNetworkSegmentsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      workloadNetworkSegment: WorkloadNetworkSegment,
      options?: WorkloadNetworkSegmentsUpdateOptionalParams,
    ) =>
      workloadNetworkSegmentsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    deleteSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
    ) =>
      workloadNetworkSegmentsDeleteSegment(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        options,
      ),
  };
}

export function getWorkloadNetworkSegmentsOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkSegmentsOperations {
  return {
    ...getWorkloadNetworkSegments(context, subscriptionId),
  };
}
