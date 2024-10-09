// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadNetworkGateway,
  _WorkloadNetworkGatewayList,
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
  WorkloadNetworkGatewaysListOptionalParams,
  WorkloadNetworkGatewaysGetOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkGatewaysListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkGatewaysListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkGatewaysListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkGatewayList> {
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
              path: p.properties?.["path"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkGateway resources by WorkloadNetwork */
export function workloadNetworkGatewaysList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkGatewaysListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkGateway> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkGatewaysListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkGatewaysListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkGatewaysGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  gatewayId: string,
  options: WorkloadNetworkGatewaysGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways/{gatewayId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      gatewayId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkGatewaysGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkGateway> {
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
          path: result.body.properties?.["path"],
        },
  };
}

/** Get a WorkloadNetworkGateway */
export async function workloadNetworkGatewaysGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  gatewayId: string,
  options: WorkloadNetworkGatewaysGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkGateway> {
  const result = await _workloadNetworkGatewaysGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    gatewayId,
    options,
  );
  return _workloadNetworkGatewaysGetDeserialize(result);
}
