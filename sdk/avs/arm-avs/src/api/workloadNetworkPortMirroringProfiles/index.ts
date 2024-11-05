// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  workloadNetworkPortMirroringPropertiesSerializer,
  WorkloadNetworkPortMirroring,
  _WorkloadNetworkPortMirroringList,
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
  WorkloadNetworkPortMirroringProfilesListOptionalParams,
  WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkPortMirroringProfilesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkPortMirroringProfilesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPortMirroringList> {
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
              direction: p.properties?.["direction"],
              source: p.properties?.["source"],
              destination: p.properties?.["destination"],
              status: p.properties?.["status"],
              provisioningState: p.properties?.["provisioningState"],
              revision: p.properties?.["revision"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
export function workloadNetworkPortMirroringProfilesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkPortMirroring> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkPortMirroringProfilesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkPortMirroringProfilesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkPortMirroringProfilesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  options: WorkloadNetworkPortMirroringProfilesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      portMirroringId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkPortMirroringProfilesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
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
          direction: result.body.properties?.["direction"],
          source: result.body.properties?.["source"],
          destination: result.body.properties?.["destination"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkPortMirroring */
export async function workloadNetworkPortMirroringProfilesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  options: WorkloadNetworkPortMirroringProfilesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkPortMirroring> {
  const result = await _workloadNetworkPortMirroringProfilesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    portMirroringId,
    options,
  );
  return _workloadNetworkPortMirroringProfilesGetDeserialize(result);
}

export function _workloadNetworkPortMirroringProfilesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      portMirroringId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkPortMirroring.properties
          ? workloadNetworkPortMirroring.properties
          : workloadNetworkPortMirroringPropertiesSerializer(
              workloadNetworkPortMirroring.properties,
            ),
      },
    });
}

export async function _workloadNetworkPortMirroringProfilesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
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
          direction: result.body.properties?.["direction"],
          source: result.body.properties?.["source"],
          destination: result.body.properties?.["destination"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkPortMirroring */
export function workloadNetworkPortMirroringProfilesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPortMirroring>,
  WorkloadNetworkPortMirroring
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPortMirroringProfilesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPortMirroringProfilesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          portMirroringId,
          workloadNetworkPortMirroring,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
}

export function _workloadNetworkPortMirroringProfilesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      portMirroringId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkPortMirroring.properties
          ? workloadNetworkPortMirroring.properties
          : workloadNetworkPortMirroringPropertiesSerializer(
              workloadNetworkPortMirroring.properties,
            ),
      },
    });
}

export async function _workloadNetworkPortMirroringProfilesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
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
          direction: result.body.properties?.["direction"],
          source: result.body.properties?.["source"],
          destination: result.body.properties?.["destination"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkPortMirroring */
export function workloadNetworkPortMirroringProfilesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPortMirroring>,
  WorkloadNetworkPortMirroring
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPortMirroringProfilesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPortMirroringProfilesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          portMirroringId,
          workloadNetworkPortMirroring,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
}

export function _workloadNetworkPortMirroringProfilesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      subscriptionId,
      resourceGroupName,
      portMirroringId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkPortMirroringProfilesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkPortMirroring */
export function workloadNetworkPortMirroringProfilesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPortMirroringProfilesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPortMirroringProfilesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          portMirroringId,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
