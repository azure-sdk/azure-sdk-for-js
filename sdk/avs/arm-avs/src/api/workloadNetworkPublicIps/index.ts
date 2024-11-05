// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  workloadNetworkPublicIPPropertiesSerializer,
  WorkloadNetworkPublicIP,
  _WorkloadNetworkPublicIPsList,
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
  WorkloadNetworkPublicIpsListOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsDeleteOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkPublicIpsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkPublicIpsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPublicIPsList> {
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
              displayName: p.properties?.["displayName"],
              numberOfPublicIPs: p.properties?.["numberOfPublicIPs"],
              publicIPBlock: p.properties?.["publicIPBlock"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
export function workloadNetworkPublicIpsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkPublicIP> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkPublicIpsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkPublicIpsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkPublicIpsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  options: WorkloadNetworkPublicIpsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      publicIPId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkPublicIpsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
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
          displayName: result.body.properties?.["displayName"],
          numberOfPublicIPs: result.body.properties?.["numberOfPublicIPs"],
          publicIPBlock: result.body.properties?.["publicIPBlock"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a WorkloadNetworkPublicIP */
export async function workloadNetworkPublicIpsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  options: WorkloadNetworkPublicIpsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkPublicIP> {
  const result = await _workloadNetworkPublicIpsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    publicIPId,
    options,
  );
  return _workloadNetworkPublicIpsGetDeserialize(result);
}

export function _workloadNetworkPublicIpsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworkPublicIpsCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      publicIPId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkPublicIP.properties
          ? workloadNetworkPublicIP.properties
          : workloadNetworkPublicIPPropertiesSerializer(
              workloadNetworkPublicIP.properties,
            ),
      },
    });
}

export async function _workloadNetworkPublicIpsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
  const expectedStatuses = ["200", "201"];
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
          displayName: result.body.properties?.["displayName"],
          numberOfPublicIPs: result.body.properties?.["numberOfPublicIPs"],
          publicIPBlock: result.body.properties?.["publicIPBlock"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a WorkloadNetworkPublicIP */
export function workloadNetworkPublicIpsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworkPublicIpsCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPublicIP>,
  WorkloadNetworkPublicIP
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPublicIpsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPublicIpsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          publicIPId,
          workloadNetworkPublicIP,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
}

export function _workloadNetworkPublicIpsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      publicIPId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkPublicIpsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkPublicIP */
export function workloadNetworkPublicIpsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPublicIpsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPublicIpsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          publicIPId,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
