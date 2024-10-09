// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VirtualMachine,
  VirtualMachineRestrictMovement,
  _VirtualMachinesList,
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
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachinesListOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesRestrictMovementOptionalParams,
} from "../../models/options.js";

export function _virtualMachinesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachinesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachinesList> {
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
              moRefId: p.properties?.["moRefId"],
              folderPath: p.properties?.["folderPath"],
              restrictMovement: p.properties?.["restrictMovement"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List VirtualMachine resources by Cluster */
export function virtualMachinesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachinesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _virtualMachinesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachinesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      virtualMachineId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachinesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachine> {
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
          moRefId: result.body.properties?.["moRefId"],
          folderPath: result.body.properties?.["folderPath"],
          restrictMovement: result.body.properties?.["restrictMovement"],
        },
  };
}

/** Get a VirtualMachine */
export async function virtualMachinesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachine> {
  const result = await _virtualMachinesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    virtualMachineId,
    options,
  );
  return _virtualMachinesGetDeserialize(result);
}

export function _virtualMachinesRestrictMovementSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovementParameter: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      virtualMachineId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { restrictMovement: restrictMovementParameter["restrictMovement"] },
    });
}

export async function _virtualMachinesRestrictMovementDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Enable or disable DRS-driven VM movement restriction */
export function virtualMachinesRestrictMovement(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovementParameter: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachinesRestrictMovementDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachinesRestrictMovementSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          virtualMachineId,
          restrictMovementParameter,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
