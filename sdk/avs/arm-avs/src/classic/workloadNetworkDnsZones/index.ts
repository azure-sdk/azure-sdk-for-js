// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkDnsZone } from "../../models/models.js";
import {
  workloadNetworkDnsZonesList,
  workloadNetworkDnsZonesGet,
  workloadNetworkDnsZonesCreate,
  workloadNetworkDnsZonesUpdate,
  workloadNetworkDnsZonesDelete,
} from "../../api/workloadNetworkDnsZones/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDnsZonesListOptionalParams,
  WorkloadNetworkDnsZonesGetOptionalParams,
  WorkloadNetworkDnsZonesCreateOptionalParams,
  WorkloadNetworkDnsZonesUpdateOptionalParams,
  WorkloadNetworkDnsZonesDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkDnsZones operations. */
export interface WorkloadNetworkDnsZonesOperations {
  /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsZonesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
  /** Get a WorkloadNetworkDnsZone */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    options?: WorkloadNetworkDnsZonesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsZone>;
  /** Create a WorkloadNetworkDnsZone */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworkDnsZonesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  /** Update a WorkloadNetworkDnsZone */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworkDnsZonesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  /** Delete a WorkloadNetworkDnsZone */
  delete: (
    resourceGroupName: string,
    dnsZoneId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsZonesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkDnsZones(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsZonesListOptionalParams,
    ) =>
      workloadNetworkDnsZonesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      options?: WorkloadNetworkDnsZonesGetOptionalParams,
    ) =>
      workloadNetworkDnsZonesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworkDnsZonesCreateOptionalParams,
    ) =>
      workloadNetworkDnsZonesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworkDnsZonesUpdateOptionalParams,
    ) =>
      workloadNetworkDnsZonesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    delete: (
      resourceGroupName: string,
      dnsZoneId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsZonesDeleteOptionalParams,
    ) =>
      workloadNetworkDnsZonesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        dnsZoneId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkDnsZonesOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkDnsZonesOperations {
  return {
    ...getWorkloadNetworkDnsZones(context, subscriptionId),
  };
}
