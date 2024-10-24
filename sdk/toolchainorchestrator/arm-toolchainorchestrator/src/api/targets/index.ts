// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  targetPropertiesSerializer,
  Target,
  TargetTagsUpdate,
  _TargetListResult,
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
  TargetsGetOptionalParams,
  TargetsCreateOrUpdateOptionalParams,
  TargetsUpdateOptionalParams,
  TargetsDeleteOptionalParams,
  TargetsListByResourceGroupOptionalParams,
  TargetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _targetsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  options: TargetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets/{targetName}",
      subscriptionId,
      resourceGroupName,
      targetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _targetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Target> {
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
          properties: result.body.properties?.["properties"],
          displayName: result.body.properties?.["displayName"],
          constraints: result.body.properties?.["constraints"],
          scope: result.body.properties?.["scope"],
          topologies:
            result.body.properties?.["topologies"] === undefined
              ? result.body.properties?.["topologies"]
              : result.body.properties?.["topologies"].map((p: any) => {
                  return {
                    bindings:
                      p["bindings"] === undefined
                        ? p["bindings"]
                        : p["bindings"].map((p: any) => {
                            return {
                              provider: p["provider"],
                              config: p["config"],
                              role: p["role"],
                            };
                          }),
                  };
                }),
          components:
            result.body.properties?.["components"] === undefined
              ? result.body.properties?.["components"]
              : result.body.properties?.["components"].map((p: any) => {
                  return {
                    name: p["name"],
                    metadata: p["metadata"],
                    properties: p["properties"],
                    constraints: p["constraints"],
                    dependencies: p["dependencies"],
                    type: p["type"],
                  };
                }),
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

/** Returns details of specified Target resource. */
export async function targetsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  options: TargetsGetOptionalParams = { requestOptions: {} },
): Promise<Target> {
  const result = await _targetsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    targetName,
    options,
  );
  return _targetsGetDeserialize(result);
}

export function _targetsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  resource: Target,
  options: TargetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets/{targetName}",
      subscriptionId,
      resourceGroupName,
      targetName,
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
          : targetPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _targetsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Target> {
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
          properties: result.body.properties?.["properties"],
          displayName: result.body.properties?.["displayName"],
          constraints: result.body.properties?.["constraints"],
          scope: result.body.properties?.["scope"],
          topologies:
            result.body.properties?.["topologies"] === undefined
              ? result.body.properties?.["topologies"]
              : result.body.properties?.["topologies"].map((p: any) => {
                  return {
                    bindings:
                      p["bindings"] === undefined
                        ? p["bindings"]
                        : p["bindings"].map((p: any) => {
                            return {
                              provider: p["provider"],
                              config: p["config"],
                              role: p["role"],
                            };
                          }),
                  };
                }),
          components:
            result.body.properties?.["components"] === undefined
              ? result.body.properties?.["components"]
              : result.body.properties?.["components"].map((p: any) => {
                  return {
                    name: p["name"],
                    metadata: p["metadata"],
                    properties: p["properties"],
                    constraints: p["constraints"],
                    dependencies: p["dependencies"],
                    type: p["type"],
                  };
                }),
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

/** Creates new or updates existing Target resource. */
export function targetsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  resource: Target,
  options: TargetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Target>, Target> {
  return getLongRunningPoller(
    context,
    _targetsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _targetsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          targetName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Target>, Target>;
}

export function _targetsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  properties: TargetTagsUpdate,
  options: TargetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets/{targetName}",
      subscriptionId,
      resourceGroupName,
      targetName,
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

export async function _targetsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Target> {
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
          properties: result.body.properties?.["properties"],
          displayName: result.body.properties?.["displayName"],
          constraints: result.body.properties?.["constraints"],
          scope: result.body.properties?.["scope"],
          topologies:
            result.body.properties?.["topologies"] === undefined
              ? result.body.properties?.["topologies"]
              : result.body.properties?.["topologies"].map((p: any) => {
                  return {
                    bindings:
                      p["bindings"] === undefined
                        ? p["bindings"]
                        : p["bindings"].map((p: any) => {
                            return {
                              provider: p["provider"],
                              config: p["config"],
                              role: p["role"],
                            };
                          }),
                  };
                }),
          components:
            result.body.properties?.["components"] === undefined
              ? result.body.properties?.["components"]
              : result.body.properties?.["components"].map((p: any) => {
                  return {
                    name: p["name"],
                    metadata: p["metadata"],
                    properties: p["properties"],
                    constraints: p["constraints"],
                    dependencies: p["dependencies"],
                    type: p["type"],
                  };
                }),
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

/** Updates existing Target resource. */
export function targetsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  properties: TargetTagsUpdate,
  options: TargetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Target>, Target> {
  return getLongRunningPoller(
    context,
    _targetsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _targetsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          targetName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Target>, Target>;
}

export function _targetsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  options: TargetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets/{targetName}",
      subscriptionId,
      resourceGroupName,
      targetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _targetsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes specified Target resource. */
export function targetsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  targetName: string,
  options: TargetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _targetsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _targetsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          targetName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _targetsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: TargetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _targetsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_TargetListResult> {
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
              properties: p.properties?.["properties"],
              displayName: p.properties?.["displayName"],
              constraints: p.properties?.["constraints"],
              scope: p.properties?.["scope"],
              topologies:
                p.properties?.["topologies"] === undefined
                  ? p.properties?.["topologies"]
                  : p.properties?.["topologies"].map((p: any) => {
                      return {
                        bindings:
                          p["bindings"] === undefined
                            ? p["bindings"]
                            : p["bindings"].map((p: any) => {
                                return {
                                  provider: p["provider"],
                                  config: p["config"],
                                  role: p["role"],
                                };
                              }),
                      };
                    }),
              components:
                p.properties?.["components"] === undefined
                  ? p.properties?.["components"]
                  : p.properties?.["components"].map((p: any) => {
                      return {
                        name: p["name"],
                        metadata: p["metadata"],
                        properties: p["properties"],
                        constraints: p["constraints"],
                        dependencies: p["dependencies"],
                        type: p["type"],
                      };
                    }),
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

/** Returns a collection of Target resources within the resource group. */
export function targetsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: TargetsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Target> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _targetsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _targetsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _targetsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: TargetsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ToolchainOrchestrator/targets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _targetsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_TargetListResult> {
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
              properties: p.properties?.["properties"],
              displayName: p.properties?.["displayName"],
              constraints: p.properties?.["constraints"],
              scope: p.properties?.["scope"],
              topologies:
                p.properties?.["topologies"] === undefined
                  ? p.properties?.["topologies"]
                  : p.properties?.["topologies"].map((p: any) => {
                      return {
                        bindings:
                          p["bindings"] === undefined
                            ? p["bindings"]
                            : p["bindings"].map((p: any) => {
                                return {
                                  provider: p["provider"],
                                  config: p["config"],
                                  role: p["role"],
                                };
                              }),
                      };
                    }),
              components:
                p.properties?.["components"] === undefined
                  ? p.properties?.["components"]
                  : p.properties?.["components"].map((p: any) => {
                      return {
                        name: p["name"],
                        metadata: p["metadata"],
                        properties: p["properties"],
                        constraints: p["constraints"],
                        dependencies: p["dependencies"],
                        type: p["type"],
                      };
                    }),
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

/** Lists Targets resources within an Azure subscription. */
export function targetsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: TargetsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Target> {
  return buildPagedAsyncIterator(
    context,
    () => _targetsListBySubscriptionSend(context, subscriptionId, options),
    _targetsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
