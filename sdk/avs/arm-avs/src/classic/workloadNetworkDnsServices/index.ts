// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkDnsService } from "../../models/models.js";
import {
  workloadNetworkDnsServicesList,
  workloadNetworkDnsServicesGet,
  workloadNetworkDnsServicesCreate,
  workloadNetworkDnsServicesUpdate,
  workloadNetworkDnsServicesDelete,
} from "../../api/workloadNetworkDnsServices/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDnsServicesListOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkDnsServices operations. */
export interface WorkloadNetworkDnsServicesOperations {
  /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
  /** Get a WorkloadNetworkDnsService */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    options?: WorkloadNetworkDnsServicesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsService>;
  /** Create a WorkloadNetworkDnsService */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworkDnsServicesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  /** Update a WorkloadNetworkDnsService */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworkDnsServicesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  /** Delete a WorkloadNetworkDnsService */
  delete: (
    resourceGroupName: string,
    dnsServiceId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkDnsServices(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsServicesListOptionalParams,
    ) =>
      workloadNetworkDnsServicesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      options?: WorkloadNetworkDnsServicesGetOptionalParams,
    ) =>
      workloadNetworkDnsServicesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworkDnsServicesCreateOptionalParams,
    ) =>
      workloadNetworkDnsServicesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworkDnsServicesUpdateOptionalParams,
    ) =>
      workloadNetworkDnsServicesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    delete: (
      resourceGroupName: string,
      dnsServiceId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsServicesDeleteOptionalParams,
    ) =>
      workloadNetworkDnsServicesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        dnsServiceId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkDnsServicesOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkDnsServicesOperations {
  return {
    ...getWorkloadNetworkDnsServices(context, subscriptionId),
  };
}
