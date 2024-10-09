// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  workloadNetworkSegmentPropertiesSerializer,
  WorkloadNetworkSegment,
  _WorkloadNetworkSegmentsList,
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
  WorkloadNetworkSegmentsListOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkSegmentsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkSegmentsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkSegmentsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkSegmentsList> {
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
              connectedGateway: p.properties?.["connectedGateway"],
              subnet: !p.properties?.subnet
                ? undefined
                : {
                    dhcpRanges: p.properties?.subnet?.["dhcpRanges"],
                    gatewayAddress: p.properties?.subnet?.["gatewayAddress"],
                  },
              portVif:
                p.properties?.["portVif"] === undefined
                  ? p.properties?.["portVif"]
                  : p.properties?.["portVif"].map((p: any) => {
                      return { portName: p["portName"] };
                    }),
              status: p.properties?.["status"],
              provisioningState: p.properties?.["provisioningState"],
              revision: p.properties?.["revision"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkSegment resources by WorkloadNetwork */
export function workloadNetworkSegmentsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkSegmentsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkSegment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkSegmentsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkSegmentsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkSegmentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkSegmentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
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
          connectedGateway: result.body.properties?.["connectedGateway"],
          subnet: !result.body.properties?.subnet
            ? undefined
            : {
                dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                gatewayAddress:
                  result.body.properties?.subnet?.["gatewayAddress"],
              },
          portVif:
            result.body.properties?.["portVif"] === undefined
              ? result.body.properties?.["portVif"]
              : result.body.properties?.["portVif"].map((p: any) => {
                  return { portName: p["portName"] };
                }),
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkSegment */
export async function workloadNetworkSegmentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkSegment> {
  const result = await _workloadNetworkSegmentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    segmentId,
    options,
  );
  return _workloadNetworkSegmentsGetDeserialize(result);
}

export function _workloadNetworkSegmentsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkSegment.properties
          ? workloadNetworkSegment.properties
          : workloadNetworkSegmentPropertiesSerializer(
              workloadNetworkSegment.properties,
            ),
      },
    });
}

export async function _workloadNetworkSegmentsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
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
          connectedGateway: result.body.properties?.["connectedGateway"],
          subnet: !result.body.properties?.subnet
            ? undefined
            : {
                dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                gatewayAddress:
                  result.body.properties?.subnet?.["gatewayAddress"],
              },
          portVif:
            result.body.properties?.["portVif"] === undefined
              ? result.body.properties?.["portVif"]
              : result.body.properties?.["portVif"].map((p: any) => {
                  return { portName: p["portName"] };
                }),
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkSegment */
export function workloadNetworkSegmentsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(
    context,
    _workloadNetworkSegmentsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkSegmentsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          segmentId,
          workloadNetworkSegment,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _workloadNetworkSegmentsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkSegment.properties
          ? workloadNetworkSegment.properties
          : workloadNetworkSegmentPropertiesSerializer(
              workloadNetworkSegment.properties,
            ),
      },
    });
}

export async function _workloadNetworkSegmentsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200", "202"];
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
          connectedGateway: result.body.properties?.["connectedGateway"],
          subnet: !result.body.properties?.subnet
            ? undefined
            : {
                dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                gatewayAddress:
                  result.body.properties?.subnet?.["gatewayAddress"],
              },
          portVif:
            result.body.properties?.["portVif"] === undefined
              ? result.body.properties?.["portVif"]
              : result.body.properties?.["portVif"].map((p: any) => {
                  return { portName: p["portName"] };
                }),
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkSegment */
export function workloadNetworkSegmentsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(
    context,
    _workloadNetworkSegmentsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkSegmentsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          segmentId,
          workloadNetworkSegment,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _workloadNetworkSegmentsDeleteSegmentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkSegmentsDeleteSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkSegment */
export function workloadNetworkSegmentsDeleteSegment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkSegmentsDeleteSegmentDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkSegmentsDeleteSegmentSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          segmentId,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
