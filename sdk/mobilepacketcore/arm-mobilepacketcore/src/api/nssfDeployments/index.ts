// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  nssfDeploymentResourcePropertiesSerializer,
  NssfDeploymentResource,
  NssfDeploymentResourceTagsUpdate,
  _NssfDeploymentResourceListResult,
} from "../../models/models.js";
import { MobilePacketCoreContext as Client } from "../index.js";
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
  NssfDeploymentsGetOptionalParams,
  NssfDeploymentsCreateOrUpdateOptionalParams,
  NssfDeploymentsUpdateTagsOptionalParams,
  NssfDeploymentsDeleteOptionalParams,
  NssfDeploymentsListByResourceGroupOptionalParams,
  NssfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _nssfDeploymentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  options: NssfDeploymentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nssfDeployments/{nssfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nssfDeploymentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nssfDeploymentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<NssfDeploymentResource> {
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
          componentParameters: result.body.properties?.["componentParameters"],
          secretsParameters: result.body.properties?.["secretsParameters"],
          clusterService: result.body.properties?.["clusterService"],
          releaseVersion: result.body.properties?.["releaseVersion"],
          operationalStatus: !result.body.properties?.operationalStatus
            ? undefined
            : {
                workload:
                  result.body.properties?.operationalStatus?.["workload"],
                healthCheck:
                  result.body.properties?.operationalStatus?.["healthCheck"],
              },
        },
  };
}

/** Get a NssfDeploymentResource */
export async function nssfDeploymentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  options: NssfDeploymentsGetOptionalParams = { requestOptions: {} },
): Promise<NssfDeploymentResource> {
  const result = await _nssfDeploymentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    nssfDeploymentName,
    options,
  );
  return _nssfDeploymentsGetDeserialize(result);
}

export function _nssfDeploymentsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  resource: NssfDeploymentResource,
  options: NssfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nssfDeployments/{nssfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nssfDeploymentName,
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
          : nssfDeploymentResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _nssfDeploymentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NssfDeploymentResource> {
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
          componentParameters: result.body.properties?.["componentParameters"],
          secretsParameters: result.body.properties?.["secretsParameters"],
          clusterService: result.body.properties?.["clusterService"],
          releaseVersion: result.body.properties?.["releaseVersion"],
          operationalStatus: !result.body.properties?.operationalStatus
            ? undefined
            : {
                workload:
                  result.body.properties?.operationalStatus?.["workload"],
                healthCheck:
                  result.body.properties?.operationalStatus?.["healthCheck"],
              },
        },
  };
}

/** Create a NssfDeploymentResource */
export async function nssfDeploymentsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  resource: NssfDeploymentResource,
  options: NssfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<NssfDeploymentResource> {
  const result = await _nssfDeploymentsCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    nssfDeploymentName,
    resource,
    options,
  );
  return _nssfDeploymentsCreateOrUpdateDeserialize(result);
}

export function _nssfDeploymentsUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  properties: NssfDeploymentResourceTagsUpdate,
  options: NssfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nssfDeployments/{nssfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nssfDeploymentName,
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

export async function _nssfDeploymentsUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<NssfDeploymentResource> {
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
          componentParameters: result.body.properties?.["componentParameters"],
          secretsParameters: result.body.properties?.["secretsParameters"],
          clusterService: result.body.properties?.["clusterService"],
          releaseVersion: result.body.properties?.["releaseVersion"],
          operationalStatus: !result.body.properties?.operationalStatus
            ? undefined
            : {
                workload:
                  result.body.properties?.operationalStatus?.["workload"],
                healthCheck:
                  result.body.properties?.operationalStatus?.["healthCheck"],
              },
        },
  };
}

/** Update a NssfDeploymentResource */
export async function nssfDeploymentsUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  properties: NssfDeploymentResourceTagsUpdate,
  options: NssfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<NssfDeploymentResource> {
  const result = await _nssfDeploymentsUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    nssfDeploymentName,
    properties,
    options,
  );
  return _nssfDeploymentsUpdateTagsDeserialize(result);
}

export function _nssfDeploymentsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  options: NssfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nssfDeployments/{nssfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nssfDeploymentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _nssfDeploymentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a NssfDeploymentResource */
export function nssfDeploymentsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nssfDeploymentName: string,
  options: NssfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _nssfDeploymentsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _nssfDeploymentsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          nssfDeploymentName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _nssfDeploymentsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: NssfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nssfDeployments",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nssfDeploymentsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_NssfDeploymentResourceListResult> {
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
              componentParameters: p.properties?.["componentParameters"],
              secretsParameters: p.properties?.["secretsParameters"],
              clusterService: p.properties?.["clusterService"],
              releaseVersion: p.properties?.["releaseVersion"],
              operationalStatus: !p.properties?.operationalStatus
                ? undefined
                : {
                    workload: p.properties?.operationalStatus?.["workload"],
                    healthCheck:
                      p.properties?.operationalStatus?.["healthCheck"],
                  },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List all Network Slice Selection Function Deployments by Resource Group. */
export function nssfDeploymentsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: NssfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NssfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _nssfDeploymentsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _nssfDeploymentsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _nssfDeploymentsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: NssfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/nssfDeployments",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nssfDeploymentsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_NssfDeploymentResourceListResult> {
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
              componentParameters: p.properties?.["componentParameters"],
              secretsParameters: p.properties?.["secretsParameters"],
              clusterService: p.properties?.["clusterService"],
              releaseVersion: p.properties?.["releaseVersion"],
              operationalStatus: !p.properties?.operationalStatus
                ? undefined
                : {
                    workload: p.properties?.operationalStatus?.["workload"],
                    healthCheck:
                      p.properties?.operationalStatus?.["healthCheck"],
                  },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List all Network Slice Selection Function Deployments by Subscription ID. */
export function nssfDeploymentsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: NssfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NssfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _nssfDeploymentsListBySubscriptionSend(context, subscriptionId, options),
    _nssfDeploymentsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
