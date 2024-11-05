// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  smfDeploymentResourcePropertiesSerializer,
  SmfDeploymentResource,
  SmfDeploymentResourceTagsUpdate,
  _SmfDeploymentResourceListResult,
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
  SmfDeploymentsGetOptionalParams,
  SmfDeploymentsCreateOrUpdateOptionalParams,
  SmfDeploymentsUpdateTagsOptionalParams,
  SmfDeploymentsDeleteOptionalParams,
  SmfDeploymentsListByResourceGroupOptionalParams,
  SmfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _smfDeploymentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  options: SmfDeploymentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/smfDeployments/{smfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      smfDeploymentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _smfDeploymentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SmfDeploymentResource> {
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

/** Get a SmfDeploymentResource */
export async function smfDeploymentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  options: SmfDeploymentsGetOptionalParams = { requestOptions: {} },
): Promise<SmfDeploymentResource> {
  const result = await _smfDeploymentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    smfDeploymentName,
    options,
  );
  return _smfDeploymentsGetDeserialize(result);
}

export function _smfDeploymentsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  resource: SmfDeploymentResource,
  options: SmfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/smfDeployments/{smfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      smfDeploymentName,
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
          : smfDeploymentResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _smfDeploymentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SmfDeploymentResource> {
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

/** Create a SmfDeploymentResource */
export async function smfDeploymentsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  resource: SmfDeploymentResource,
  options: SmfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<SmfDeploymentResource> {
  const result = await _smfDeploymentsCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    smfDeploymentName,
    resource,
    options,
  );
  return _smfDeploymentsCreateOrUpdateDeserialize(result);
}

export function _smfDeploymentsUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  properties: SmfDeploymentResourceTagsUpdate,
  options: SmfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/smfDeployments/{smfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      smfDeploymentName,
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

export async function _smfDeploymentsUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<SmfDeploymentResource> {
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

/** Update a SmfDeploymentResource */
export async function smfDeploymentsUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  properties: SmfDeploymentResourceTagsUpdate,
  options: SmfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<SmfDeploymentResource> {
  const result = await _smfDeploymentsUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    smfDeploymentName,
    properties,
    options,
  );
  return _smfDeploymentsUpdateTagsDeserialize(result);
}

export function _smfDeploymentsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  options: SmfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/smfDeployments/{smfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      smfDeploymentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _smfDeploymentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a SmfDeploymentResource */
export function smfDeploymentsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  smfDeploymentName: string,
  options: SmfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _smfDeploymentsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _smfDeploymentsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          smfDeploymentName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _smfDeploymentsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SmfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/smfDeployments",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _smfDeploymentsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SmfDeploymentResourceListResult> {
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

/** List all Session Management Function Deployments by Resource Group. */
export function smfDeploymentsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SmfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SmfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _smfDeploymentsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _smfDeploymentsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _smfDeploymentsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: SmfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/smfDeployments",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _smfDeploymentsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SmfDeploymentResourceListResult> {
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

/** List all Session Management Function Deployments by Subscription ID. */
export function smfDeploymentsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: SmfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SmfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _smfDeploymentsListBySubscriptionSend(context, subscriptionId, options),
    _smfDeploymentsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
