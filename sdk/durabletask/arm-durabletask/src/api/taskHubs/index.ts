// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  taskHubPropertiesSerializer,
  TaskHub,
  _TaskHubListResult,
} from "../../models/models.js";
import { DurableTaskContext as Client } from "../index.js";
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
  TaskHubsGetOptionalParams,
  TaskHubsCreateOrUpdateOptionalParams,
  TaskHubsDeleteOptionalParams,
  TaskHubsListBySchedulerOptionalParams,
} from "../../models/options.js";

export function _taskHubsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  taskHubName: string,
  options: TaskHubsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs/{taskHubName}",
      subscriptionId,
      resourceGroupName,
      schedulerName,
      taskHubName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _taskHubsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<TaskHub> {
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
          dashboardUrl: result.body.properties?.["dashboardUrl"],
        },
  };
}

/** Get a Task Hub */
export async function taskHubsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  taskHubName: string,
  options: TaskHubsGetOptionalParams = { requestOptions: {} },
): Promise<TaskHub> {
  const result = await _taskHubsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    schedulerName,
    taskHubName,
    options,
  );
  return _taskHubsGetDeserialize(result);
}

export function _taskHubsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  taskHubName: string,
  resource: TaskHub,
  options: TaskHubsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs/{taskHubName}",
      subscriptionId,
      resourceGroupName,
      schedulerName,
      taskHubName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : taskHubPropertiesSerializer(resource.properties),
      },
    });
}

export async function _taskHubsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<TaskHub> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          dashboardUrl: result.body.properties?.["dashboardUrl"],
        },
  };
}

/** Create or Update a Task Hub */
export function taskHubsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  taskHubName: string,
  resource: TaskHub,
  options: TaskHubsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<TaskHub>, TaskHub> {
  return getLongRunningPoller(
    context,
    _taskHubsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _taskHubsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          schedulerName,
          taskHubName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<TaskHub>, TaskHub>;
}

export function _taskHubsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  taskHubName: string,
  options: TaskHubsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs/{taskHubName}",
      subscriptionId,
      resourceGroupName,
      schedulerName,
      taskHubName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _taskHubsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Task Hub */
export function taskHubsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  taskHubName: string,
  options: TaskHubsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _taskHubsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _taskHubsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          schedulerName,
          taskHubName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _taskHubsListBySchedulerSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  options: TaskHubsListBySchedulerOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs",
      subscriptionId,
      resourceGroupName,
      schedulerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _taskHubsListBySchedulerDeserialize(
  result: PathUncheckedResponse,
): Promise<_TaskHubListResult> {
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
              dashboardUrl: p.properties?.["dashboardUrl"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Task Hubs */
export function taskHubsListByScheduler(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  options: TaskHubsListBySchedulerOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TaskHub> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _taskHubsListBySchedulerSend(
        context,
        subscriptionId,
        resourceGroupName,
        schedulerName,
        options,
      ),
    _taskHubsListBySchedulerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
