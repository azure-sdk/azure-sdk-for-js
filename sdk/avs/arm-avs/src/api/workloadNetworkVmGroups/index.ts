// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  workloadNetworkVMGroupPropertiesSerializer,
  WorkloadNetworkVMGroup,
  _WorkloadNetworkVMGroupsList,
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
  WorkloadNetworkVmGroupsListOptionalParams,
  WorkloadNetworkVmGroupsGetOptionalParams,
  WorkloadNetworkVmGroupsCreateOptionalParams,
  WorkloadNetworkVmGroupsUpdateOptionalParams,
  WorkloadNetworkVmGroupsDeleteOptionalParams,
} from "../../models/options.js";

export function _workloadNetworkVmGroupsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkVmGroupsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkVMGroupsList> {
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
              members: p.properties?.["members"],
              status: p.properties?.["status"],
              provisioningState: p.properties?.["provisioningState"],
              revision: p.properties?.["revision"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
export function workloadNetworkVmGroupsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkVMGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkVmGroupsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkVmGroupsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworkVmGroupsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  options: WorkloadNetworkVmGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      vmGroupId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkVmGroupsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
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
          members: result.body.properties?.["members"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkVMGroup */
export async function workloadNetworkVmGroupsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  options: WorkloadNetworkVmGroupsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkVMGroup> {
  const result = await _workloadNetworkVmGroupsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    vmGroupId,
    options,
  );
  return _workloadNetworkVmGroupsGetDeserialize(result);
}

export function _workloadNetworkVmGroupsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      vmGroupId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkVMGroup.properties
          ? workloadNetworkVMGroup.properties
          : workloadNetworkVMGroupPropertiesSerializer(
              workloadNetworkVMGroup.properties,
            ),
      },
    });
}

export async function _workloadNetworkVmGroupsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
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
          members: result.body.properties?.["members"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkVMGroup */
export function workloadNetworkVmGroupsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(
    context,
    _workloadNetworkVmGroupsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkVmGroupsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          vmGroupId,
          workloadNetworkVMGroup,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _workloadNetworkVmGroupsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      vmGroupId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkVMGroup.properties
          ? workloadNetworkVMGroup.properties
          : workloadNetworkVMGroupPropertiesSerializer(
              workloadNetworkVMGroup.properties,
            ),
      },
    });
}

export async function _workloadNetworkVmGroupsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
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
          members: result.body.properties?.["members"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkVMGroup */
export function workloadNetworkVmGroupsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(
    context,
    _workloadNetworkVmGroupsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkVmGroupsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          vmGroupId,
          workloadNetworkVMGroup,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _workloadNetworkVmGroupsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      vmGroupId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _workloadNetworkVmGroupsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a WorkloadNetworkVMGroup */
export function workloadNetworkVmGroupsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkVmGroupsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkVmGroupsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          vmGroupId,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
