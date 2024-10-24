// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  instancePropertiesSerializer,
  Instance,
  InstanceTagsUpdate,
  _InstanceListResult,
} from "../../models/models.js";
import { ToolchainOrchestratorContext as Client } from "../index.js";
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
  InstancesGetOptionalParams,
  InstancesCreateOrUpdateOptionalParams,
  InstancesUpdateOptionalParams,
  InstancesDeleteOptionalParams,
  InstancesListByResourceGroupOptionalParams,
  InstancesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _instancesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _instancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Instance> {
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
          metadata: result.body.properties?.["metadata"],
          displayName: result.body.properties?.["displayName"],
          scope: result.body.properties?.["scope"],
          solution: result.body.properties?.["solution"],
          target: !result.body.properties?.target
            ? undefined
            : {
                name: result.body.properties?.target?.["name"],
                selector: result.body.properties?.target?.["selector"],
              },
          reconciliationPolicy: !result.body.properties?.reconciliationPolicy
            ? undefined
            : {
                state: result.body.properties?.reconciliationPolicy?.["state"],
                interval:
                  result.body.properties?.reconciliationPolicy?.["interval"],
              },
          isDryRun: result.body.properties?.["isDryRun"],
          status: !result.body.properties?.status
            ? undefined
            : {
                lastModified: new Date(
                  result.body.properties?.status?.["lastModified"],
                ),
                properties: result.body.properties?.status?.["properties"],
              },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Returns details of specified Instance resource. */
export async function instancesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstancesGetOptionalParams = { requestOptions: {} },
): Promise<Instance> {
  const result = await _instancesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    options,
  );
  return _instancesGetDeserialize(result);
}

export function _instancesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  resource: Instance,
  options: InstancesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
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
          : instancePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _instancesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Instance> {
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
          metadata: result.body.properties?.["metadata"],
          displayName: result.body.properties?.["displayName"],
          scope: result.body.properties?.["scope"],
          solution: result.body.properties?.["solution"],
          target: !result.body.properties?.target
            ? undefined
            : {
                name: result.body.properties?.target?.["name"],
                selector: result.body.properties?.target?.["selector"],
              },
          reconciliationPolicy: !result.body.properties?.reconciliationPolicy
            ? undefined
            : {
                state: result.body.properties?.reconciliationPolicy?.["state"],
                interval:
                  result.body.properties?.reconciliationPolicy?.["interval"],
              },
          isDryRun: result.body.properties?.["isDryRun"],
          status: !result.body.properties?.status
            ? undefined
            : {
                lastModified: new Date(
                  result.body.properties?.status?.["lastModified"],
                ),
                properties: result.body.properties?.status?.["properties"],
              },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Creates new or updates existing Instance resource. */
export function instancesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  resource: Instance,
  options: InstancesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Instance>, Instance> {
  return getLongRunningPoller(
    context,
    _instancesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _instancesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Instance>, Instance>;
}

export function _instancesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  properties: InstanceTagsUpdate,
  options: InstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
      },
    });
}

export async function _instancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Instance> {
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
          metadata: result.body.properties?.["metadata"],
          displayName: result.body.properties?.["displayName"],
          scope: result.body.properties?.["scope"],
          solution: result.body.properties?.["solution"],
          target: !result.body.properties?.target
            ? undefined
            : {
                name: result.body.properties?.target?.["name"],
                selector: result.body.properties?.target?.["selector"],
              },
          reconciliationPolicy: !result.body.properties?.reconciliationPolicy
            ? undefined
            : {
                state: result.body.properties?.reconciliationPolicy?.["state"],
                interval:
                  result.body.properties?.reconciliationPolicy?.["interval"],
              },
          isDryRun: result.body.properties?.["isDryRun"],
          status: !result.body.properties?.status
            ? undefined
            : {
                lastModified: new Date(
                  result.body.properties?.status?.["lastModified"],
                ),
                properties: result.body.properties?.status?.["properties"],
              },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Updates existing Instance resource. */
export function instancesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  properties: InstanceTagsUpdate,
  options: InstancesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Instance>, Instance> {
  return getLongRunningPoller(
    context,
    _instancesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _instancesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Instance>, Instance>;
}

export function _instancesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _instancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes specified Instance resource. */
export function instancesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _instancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _instancesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _instancesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: InstancesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _instancesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_InstanceListResult> {
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
              metadata: p.properties?.["metadata"],
              displayName: p.properties?.["displayName"],
              scope: p.properties?.["scope"],
              solution: p.properties?.["solution"],
              target: !p.properties?.target
                ? undefined
                : {
                    name: p.properties?.target?.["name"],
                    selector: p.properties?.target?.["selector"],
                  },
              reconciliationPolicy: !p.properties?.reconciliationPolicy
                ? undefined
                : {
                    state: p.properties?.reconciliationPolicy?.["state"],
                    interval: p.properties?.reconciliationPolicy?.["interval"],
                  },
              isDryRun: p.properties?.["isDryRun"],
              status: !p.properties?.status
                ? undefined
                : {
                    lastModified: new Date(
                      p.properties?.status?.["lastModified"],
                    ),
                    properties: p.properties?.status?.["properties"],
                  },
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Returns a collection of Instances resources within the resource group. */
export function instancesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: InstancesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Instance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _instancesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _instancesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _instancesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: InstancesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ToolchainOrchestrator/instances",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _instancesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_InstanceListResult> {
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
              metadata: p.properties?.["metadata"],
              displayName: p.properties?.["displayName"],
              scope: p.properties?.["scope"],
              solution: p.properties?.["solution"],
              target: !p.properties?.target
                ? undefined
                : {
                    name: p.properties?.target?.["name"],
                    selector: p.properties?.target?.["selector"],
                  },
              reconciliationPolicy: !p.properties?.reconciliationPolicy
                ? undefined
                : {
                    state: p.properties?.reconciliationPolicy?.["state"],
                    interval: p.properties?.reconciliationPolicy?.["interval"],
                  },
              isDryRun: p.properties?.["isDryRun"],
              status: !p.properties?.status
                ? undefined
                : {
                    lastModified: new Date(
                      p.properties?.status?.["lastModified"],
                    ),
                    properties: p.properties?.status?.["properties"],
                  },
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists Instances resources within an Azure subscription. */
export function instancesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: InstancesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Instance> {
  return buildPagedAsyncIterator(
    context,
    () => _instancesListBySubscriptionSend(context, subscriptionId, options),
    _instancesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
