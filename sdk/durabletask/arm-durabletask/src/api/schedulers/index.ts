// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  schedulerPropertiesSerializer,
  Scheduler,
  _SchedulerListResult,
} from "../../models/models.js";
import { DurableTaskContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SchedulersGetOptionalParams,
  SchedulersCreateOrUpdateOptionalParams,
  SchedulersUpdateOptionalParams,
  SchedulersDeleteOptionalParams,
  SchedulersListByResourceGroupOptionalParams,
  SchedulersListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _schedulersGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  options: SchedulersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
      subscriptionId,
      resourceGroupName,
      schedulerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schedulersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Scheduler> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          endpoint: result.body.properties?.["endpoint"],
          ipAllowlist: result.body.properties?.["ipAllowlist"],
          sku: {
            name: result.body.properties?.sku["name"],
            capacity: result.body.properties?.sku["capacity"],
            redundancyState: result.body.properties?.sku["redundancyState"],
          },
        },
  };
}

/** Get a Scheduler */
export async function schedulersGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  options: SchedulersGetOptionalParams = { requestOptions: {} },
): Promise<Scheduler> {
  const result = await _schedulersGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    schedulerName,
    options,
  );
  return _schedulersGetDeserialize(result);
}

export function _schedulersCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  resource: Scheduler,
  options: SchedulersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
      subscriptionId,
      resourceGroupName,
      schedulerName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : schedulerPropertiesSerializer(resource.properties),
      },
    });
}

export async function _schedulersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Scheduler> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          endpoint: result.body.properties?.["endpoint"],
          ipAllowlist: result.body.properties?.["ipAllowlist"],
          sku: {
            name: result.body.properties?.sku["name"],
            capacity: result.body.properties?.sku["capacity"],
            redundancyState: result.body.properties?.sku["redundancyState"],
          },
        },
  };
}

/** Create or update a Scheduler */
export function schedulersCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  resource: Scheduler,
  options: SchedulersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Scheduler>, Scheduler> {
  return getLongRunningPoller(
    context,
    _schedulersCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _schedulersCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          schedulerName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Scheduler>, Scheduler>;
}

export function _schedulersUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  properties: Scheduler,
  options: SchedulersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
      subscriptionId,
      resourceGroupName,
      schedulerName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        location: properties["location"],
        properties: !properties.properties
          ? properties.properties
          : schedulerPropertiesSerializer(properties.properties),
      },
    });
}

export async function _schedulersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Scheduler> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          endpoint: result.body.properties?.["endpoint"],
          ipAllowlist: result.body.properties?.["ipAllowlist"],
          sku: {
            name: result.body.properties?.sku["name"],
            capacity: result.body.properties?.sku["capacity"],
            redundancyState: result.body.properties?.sku["redundancyState"],
          },
        },
  };
}

/** Update a Scheduler */
export function schedulersUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  properties: Scheduler,
  options: SchedulersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Scheduler>, Scheduler> {
  return getLongRunningPoller(
    context,
    _schedulersUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _schedulersUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          schedulerName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Scheduler>, Scheduler>;
}

export function _schedulersDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  options: SchedulersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
      subscriptionId,
      resourceGroupName,
      schedulerName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _schedulersDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Scheduler */
export function schedulersDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schedulerName: string,
  options: SchedulersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _schedulersDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _schedulersDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          schedulerName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _schedulersListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SchedulersListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schedulersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchedulerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              endpoint: p.properties?.["endpoint"],
              ipAllowlist: p.properties?.["ipAllowlist"],
              sku: {
                name: p.properties?.sku["name"],
                capacity: p.properties?.sku["capacity"],
                redundancyState: p.properties?.sku["redundancyState"],
              },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Schedulers by resource group */
export function schedulersListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SchedulersListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Scheduler> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _schedulersListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _schedulersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _schedulersListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: SchedulersListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DurableTask/schedulers",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schedulersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchedulerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              endpoint: p.properties?.["endpoint"],
              ipAllowlist: p.properties?.["ipAllowlist"],
              sku: {
                name: p.properties?.sku["name"],
                capacity: p.properties?.sku["capacity"],
                redundancyState: p.properties?.sku["redundancyState"],
              },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Schedulers by subscription */
export function schedulersListBySubscription(
  context: Client,
  subscriptionId: string,
  options: SchedulersListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Scheduler> {
  return buildPagedAsyncIterator(
    context,
    () => _schedulersListBySubscriptionSend(context, subscriptionId, options),
    _schedulersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
