// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkVMGroup } from "../../models/models.js";
import {
  workloadNetworkVmGroupsList,
  workloadNetworkVmGroupsGet,
  workloadNetworkVmGroupsCreate,
  workloadNetworkVmGroupsUpdate,
  workloadNetworkVmGroupsDelete,
} from "../../api/workloadNetworkVmGroups/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkVmGroupsListOptionalParams,
  WorkloadNetworkVmGroupsGetOptionalParams,
  WorkloadNetworkVmGroupsCreateOptionalParams,
  WorkloadNetworkVmGroupsUpdateOptionalParams,
  WorkloadNetworkVmGroupsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkVmGroups operations. */
export interface WorkloadNetworkVmGroupsOperations {
  /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
  /** Get a WorkloadNetworkVMGroup */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    options?: WorkloadNetworkVmGroupsGetOptionalParams,
  ) => Promise<WorkloadNetworkVMGroup>;
  /** Create a WorkloadNetworkVMGroup */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworkVmGroupsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  /** Update a WorkloadNetworkVMGroup */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworkVmGroupsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  /** Delete a WorkloadNetworkVMGroup */
  delete: (
    resourceGroupName: string,
    vmGroupId: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkVmGroups(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkVmGroupsListOptionalParams,
    ) =>
      workloadNetworkVmGroupsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      options?: WorkloadNetworkVmGroupsGetOptionalParams,
    ) =>
      workloadNetworkVmGroupsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworkVmGroupsCreateOptionalParams,
    ) =>
      workloadNetworkVmGroupsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworkVmGroupsUpdateOptionalParams,
    ) =>
      workloadNetworkVmGroupsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    delete: (
      resourceGroupName: string,
      vmGroupId: string,
      privateCloudName: string,
      options?: WorkloadNetworkVmGroupsDeleteOptionalParams,
    ) =>
      workloadNetworkVmGroupsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        vmGroupId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkVmGroupsOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkVmGroupsOperations {
  return {
    ...getWorkloadNetworkVmGroups(context, subscriptionId),
  };
}
