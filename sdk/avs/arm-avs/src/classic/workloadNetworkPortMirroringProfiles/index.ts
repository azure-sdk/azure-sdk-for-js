// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkPortMirroring } from "../../models/models.js";
import {
  workloadNetworkPortMirroringProfilesList,
  workloadNetworkPortMirroringProfilesGet,
  workloadNetworkPortMirroringProfilesCreate,
  workloadNetworkPortMirroringProfilesUpdate,
  workloadNetworkPortMirroringProfilesDelete,
} from "../../api/workloadNetworkPortMirroringProfiles/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkPortMirroringProfilesListOptionalParams,
  WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkPortMirroringProfiles operations. */
export interface WorkloadNetworkPortMirroringProfilesOperations {
  /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
  /** Get a WorkloadNetworkPortMirroring */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  ) => Promise<WorkloadNetworkPortMirroring>;
  /** Create a WorkloadNetworkPortMirroring */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  /** Update a WorkloadNetworkPortMirroring */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  /** Delete a WorkloadNetworkPortMirroring */
  delete: (
    resourceGroupName: string,
    portMirroringId: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkPortMirroringProfiles(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkPortMirroringProfilesListOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    delete: (
      resourceGroupName: string,
      portMirroringId: string,
      privateCloudName: string,
      options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        portMirroringId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkPortMirroringProfilesOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkPortMirroringProfilesOperations {
  return {
    ...getWorkloadNetworkPortMirroringProfiles(context, subscriptionId),
  };
}
