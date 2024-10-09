// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  workloadNetworkDnsZonePropertiesSerializer,
  WorkloadNetworkDnsZone,
  _WorkloadNetworkDnsZonesList,
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
  WorkloadNetworkDnsZonesListOptionalParams,
  WorkloadNetworkDnsZonesGetOptionalParams,
  WorkloadNetworkDnsZonesCreateOptionalParams,
  WorkloadNetworkDnsZonesUpdateOptionalParams,
  WorkloadNetworkDnsZonesDeleteOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkDnsZonesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkDnsZonesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDnsZonesList> {
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
              domain: p.properties?.["domain"],
              dnsServerIps: p.properties?.["dnsServerIps"],
              sourceIp: p.properties?.["sourceIp"],
              dnsServices: p.properties?.["dnsServices"],
              provisioningState: p.properties?.["provisioningState"],
              revision: p.properties?.["revision"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
export function workloadNetworkDnsZonesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkDnsZone> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkDnsZonesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkDnsZonesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkDnsZonesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  options: WorkloadNetworkDnsZonesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsZoneId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkDnsZonesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
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
          domain: result.body.properties?.["domain"],
          dnsServerIps: result.body.properties?.["dnsServerIps"],
          sourceIp: result.body.properties?.["sourceIp"],
          dnsServices: result.body.properties?.["dnsServices"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkDnsZone */
export async function workloadNetworkDnsZonesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  options: WorkloadNetworkDnsZonesGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsZone> {
  const result = await _workloadNetworkDnsZonesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    dnsZoneId,
    options,
  );
  return _workloadNetworkDnsZonesGetDeserialize(result);
}

export function _workloadNetworkDnsZonesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsZoneId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDnsZone.properties
          ? workloadNetworkDnsZone.properties
          : workloadNetworkDnsZonePropertiesSerializer(
              workloadNetworkDnsZone.properties,
            ),
      },
    });
}

export async function _workloadNetworkDnsZonesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
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
          domain: result.body.properties?.["domain"],
          dnsServerIps: result.body.properties?.["dnsServerIps"],
          sourceIp: result.body.properties?.["sourceIp"],
          dnsServices: result.body.properties?.["dnsServices"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkDnsZone */
export function workloadNetworkDnsZonesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsZonesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsZonesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          dnsZoneId,
          workloadNetworkDnsZone,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
}

export function _workloadNetworkDnsZonesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsZoneId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDnsZone.properties
          ? workloadNetworkDnsZone.properties
          : workloadNetworkDnsZonePropertiesSerializer(
              workloadNetworkDnsZone.properties,
            ),
      },
    });
}

export async function _workloadNetworkDnsZonesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
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
          domain: result.body.properties?.["domain"],
          dnsServerIps: result.body.properties?.["dnsServerIps"],
          sourceIp: result.body.properties?.["sourceIp"],
          dnsServices: result.body.properties?.["dnsServices"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkDnsZone */
export function workloadNetworkDnsZonesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsZonesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsZonesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          dnsZoneId,
          workloadNetworkDnsZone,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
}

export function _workloadNetworkDnsZonesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      subscriptionId,
      resourceGroupName,
      dnsZoneId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkDnsZonesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkDnsZone */
export function workloadNetworkDnsZonesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsZonesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsZonesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          dnsZoneId,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
