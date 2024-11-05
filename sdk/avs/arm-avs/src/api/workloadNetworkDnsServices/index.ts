// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  workloadNetworkDnsServicePropertiesSerializer,
  WorkloadNetworkDnsService,
  _WorkloadNetworkDnsServicesList,
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
  WorkloadNetworkDnsServicesListOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesDeleteOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkDnsServicesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkDnsServicesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDnsServicesList> {
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
              dnsServiceIp: p.properties?.["dnsServiceIp"],
              defaultDnsZone: p.properties?.["defaultDnsZone"],
              fqdnZones: p.properties?.["fqdnZones"],
              logLevel: p.properties?.["logLevel"],
              status: p.properties?.["status"],
              provisioningState: p.properties?.["provisioningState"],
              revision: p.properties?.["revision"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkDnsService resources by WorkloadNetwork */
export function workloadNetworkDnsServicesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDnsService> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkDnsServicesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkDnsServicesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkDnsServicesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsServiceId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkDnsServicesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
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
          dnsServiceIp: result.body.properties?.["dnsServiceIp"],
          defaultDnsZone: result.body.properties?.["defaultDnsZone"],
          fqdnZones: result.body.properties?.["fqdnZones"],
          logLevel: result.body.properties?.["logLevel"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkDnsService */
export async function workloadNetworkDnsServicesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsService> {
  const result = await _workloadNetworkDnsServicesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    options,
  );
  return _workloadNetworkDnsServicesGetDeserialize(result);
}

export function _workloadNetworkDnsServicesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsServiceId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDnsService.properties
          ? workloadNetworkDnsService.properties
          : workloadNetworkDnsServicePropertiesSerializer(
              workloadNetworkDnsService.properties,
            ),
      },
    });
}

export async function _workloadNetworkDnsServicesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
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
          dnsServiceIp: result.body.properties?.["dnsServiceIp"],
          defaultDnsZone: result.body.properties?.["defaultDnsZone"],
          fqdnZones: result.body.properties?.["fqdnZones"],
          logLevel: result.body.properties?.["logLevel"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkDnsService */
export function workloadNetworkDnsServicesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsServicesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsServicesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          dnsServiceId,
          workloadNetworkDnsService,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _workloadNetworkDnsServicesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsServiceId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDnsService.properties
          ? workloadNetworkDnsService.properties
          : workloadNetworkDnsServicePropertiesSerializer(
              workloadNetworkDnsService.properties,
            ),
      },
    });
}

export async function _workloadNetworkDnsServicesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
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
          dnsServiceIp: result.body.properties?.["dnsServiceIp"],
          defaultDnsZone: result.body.properties?.["defaultDnsZone"],
          fqdnZones: result.body.properties?.["fqdnZones"],
          logLevel: result.body.properties?.["logLevel"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkDnsService */
export function workloadNetworkDnsServicesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsServicesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsServicesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          dnsServiceId,
          workloadNetworkDnsService,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _workloadNetworkDnsServicesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      dnsServiceId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkDnsServicesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkDnsService */
export function workloadNetworkDnsServicesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsServicesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsServicesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          dnsServiceId,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
