// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  poolPropertiesSerializer,
  managedServiceIdentitySerializer,
  poolUpdatePropertiesSerializer,
  Pool,
  PoolUpdate,
  _PoolListResult,
} from "../../models/models.js";
import { DevOpsInfrastructureContext as Client } from "../index.js";
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
  PoolsGetOptionalParams,
  PoolsCreateOrUpdateOptionalParams,
  PoolsUpdateOptionalParams,
  PoolsDeleteOptionalParams,
  PoolsListByResourceGroupOptionalParams,
  PoolsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _poolsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  options: PoolsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
      subscriptionId,
      resourceGroupName,
      poolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _poolsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Pool> {
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
          maximumConcurrency: result.body.properties?.["maximumConcurrency"],
          organizationProfile: {
            kind: result.body.properties?.organizationProfile["kind"],
          },
          agentProfile: {
            resourcePredictions: !result.body.properties?.agentProfile
              .resourcePredictions
              ? undefined
              : {},
            resourcePredictionsProfile: !result.body.properties?.agentProfile
              .resourcePredictionsProfile
              ? undefined
              : {
                  kind: result.body.properties?.agentProfile
                    .resourcePredictionsProfile?.["kind"],
                },
            kind: result.body.properties?.agentProfile["kind"],
          },
          fabricProfile: {
            kind: result.body.properties?.fabricProfile["kind"],
          },
          devCenterProjectResourceId:
            result.body.properties?.["devCenterProjectResourceId"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Get a Pool */
export async function poolsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  options: PoolsGetOptionalParams = { requestOptions: {} },
): Promise<Pool> {
  const result = await _poolsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    poolName,
    options,
  );
  return _poolsGetDeserialize(result);
}

export function _poolsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  resource: Pool,
  options: PoolsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
      subscriptionId,
      resourceGroupName,
      poolName,
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
          : poolPropertiesSerializer(resource.properties),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentitySerializer(resource.identity),
      },
    });
}

export async function _poolsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Pool> {
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
          maximumConcurrency: result.body.properties?.["maximumConcurrency"],
          organizationProfile: {
            kind: result.body.properties?.organizationProfile["kind"],
          },
          agentProfile: {
            resourcePredictions: !result.body.properties?.agentProfile
              .resourcePredictions
              ? undefined
              : {},
            resourcePredictionsProfile: !result.body.properties?.agentProfile
              .resourcePredictionsProfile
              ? undefined
              : {
                  kind: result.body.properties?.agentProfile
                    .resourcePredictionsProfile?.["kind"],
                },
            kind: result.body.properties?.agentProfile["kind"],
          },
          fabricProfile: {
            kind: result.body.properties?.fabricProfile["kind"],
          },
          devCenterProjectResourceId:
            result.body.properties?.["devCenterProjectResourceId"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Create a Pool */
export function poolsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  resource: Pool,
  options: PoolsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Pool>, Pool> {
  return getLongRunningPoller(
    context,
    _poolsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _poolsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          poolName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Pool>, Pool>;
}

export function _poolsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  properties: PoolUpdate,
  options: PoolsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
      subscriptionId,
      resourceGroupName,
      poolName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        identity: !properties.identity
          ? properties.identity
          : managedServiceIdentitySerializer(properties.identity),
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : poolUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _poolsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Pool> {
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
          maximumConcurrency: result.body.properties?.["maximumConcurrency"],
          organizationProfile: {
            kind: result.body.properties?.organizationProfile["kind"],
          },
          agentProfile: {
            resourcePredictions: !result.body.properties?.agentProfile
              .resourcePredictions
              ? undefined
              : {},
            resourcePredictionsProfile: !result.body.properties?.agentProfile
              .resourcePredictionsProfile
              ? undefined
              : {
                  kind: result.body.properties?.agentProfile
                    .resourcePredictionsProfile?.["kind"],
                },
            kind: result.body.properties?.agentProfile["kind"],
          },
          fabricProfile: {
            kind: result.body.properties?.fabricProfile["kind"],
          },
          devCenterProjectResourceId:
            result.body.properties?.["devCenterProjectResourceId"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Update a Pool */
export function poolsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  properties: PoolUpdate,
  options: PoolsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Pool>, Pool> {
  return getLongRunningPoller(
    context,
    _poolsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _poolsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          poolName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Pool>, Pool>;
}

export function _poolsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  options: PoolsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
      subscriptionId,
      resourceGroupName,
      poolName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _poolsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Pool */
export function poolsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  options: PoolsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _poolsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _poolsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          poolName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _poolsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PoolsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _poolsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolListResult> {
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
              maximumConcurrency: p.properties?.["maximumConcurrency"],
              organizationProfile: {
                kind: p.properties?.organizationProfile["kind"],
              },
              agentProfile: {
                resourcePredictions: !p.properties?.agentProfile
                  .resourcePredictions
                  ? undefined
                  : {},
                resourcePredictionsProfile: !p.properties?.agentProfile
                  .resourcePredictionsProfile
                  ? undefined
                  : {
                      kind: p.properties?.agentProfile
                        .resourcePredictionsProfile?.["kind"],
                    },
                kind: p.properties?.agentProfile["kind"],
              },
              fabricProfile: { kind: p.properties?.fabricProfile["kind"] },
              devCenterProjectResourceId:
                p.properties?.["devCenterProjectResourceId"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Pool resources by resource group */
export function poolsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PoolsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Pool> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _poolsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _poolsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _poolsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: PoolsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/pools",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _poolsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolListResult> {
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
              maximumConcurrency: p.properties?.["maximumConcurrency"],
              organizationProfile: {
                kind: p.properties?.organizationProfile["kind"],
              },
              agentProfile: {
                resourcePredictions: !p.properties?.agentProfile
                  .resourcePredictions
                  ? undefined
                  : {},
                resourcePredictionsProfile: !p.properties?.agentProfile
                  .resourcePredictionsProfile
                  ? undefined
                  : {
                      kind: p.properties?.agentProfile
                        .resourcePredictionsProfile?.["kind"],
                    },
                kind: p.properties?.agentProfile["kind"],
              },
              fabricProfile: { kind: p.properties?.fabricProfile["kind"] },
              devCenterProjectResourceId:
                p.properties?.["devCenterProjectResourceId"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Pool resources by subscription ID */
export function poolsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: PoolsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Pool> {
  return buildPagedAsyncIterator(
    context,
    () => _poolsListBySubscriptionSend(context, subscriptionId, options),
    _poolsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
