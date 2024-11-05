// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadNetworkVirtualMachine,
  _WorkloadNetworkVirtualMachinesList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  WorkloadNetworkVirtualMachinesListOptionalParams,
  WorkloadNetworkVirtualMachinesGetOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkVirtualMachinesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVirtualMachinesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkVirtualMachinesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkVirtualMachinesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"],
              displayName: p.properties?.["displayName"],
              vmType: p.properties?.["vmType"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
export function workloadNetworkVirtualMachinesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVirtualMachinesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkVirtualMachinesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkVirtualMachinesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkVirtualMachinesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  virtualMachineId: string,
  options: WorkloadNetworkVirtualMachinesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      virtualMachineId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkVirtualMachinesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVirtualMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          displayName: result.body.properties?.["displayName"],
          vmType: result.body.properties?.["vmType"],
        },
  };
}

/** Get a WorkloadNetworkVirtualMachine */
export async function workloadNetworkVirtualMachinesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  virtualMachineId: string,
  options: WorkloadNetworkVirtualMachinesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkVirtualMachine> {
  const result = await _workloadNetworkVirtualMachinesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    virtualMachineId,
    options,
  );
  return _workloadNetworkVirtualMachinesGetDeserialize(result);
}
