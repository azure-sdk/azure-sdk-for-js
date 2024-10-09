// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  upfDeploymentResourcePropertiesSerializer,
  UpfDeploymentResource,
  UpfDeploymentResourceTagsUpdate,
  _UpfDeploymentResourceListResult,
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
  UpfDeploymentsGetOptionalParams,
  UpfDeploymentsCreateOrUpdateOptionalParams,
  UpfDeploymentsUpdateTagsOptionalParams,
  UpfDeploymentsDeleteOptionalParams,
  UpfDeploymentsListByResourceGroupOptionalParams,
  UpfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _upfDeploymentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  options: UpfDeploymentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/upfDeployments/{upfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      upfDeploymentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _upfDeploymentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UpfDeploymentResource> {
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

/** Get a UpfDeploymentResource */
export async function upfDeploymentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  options: UpfDeploymentsGetOptionalParams = { requestOptions: {} },
): Promise<UpfDeploymentResource> {
  const result = await _upfDeploymentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    upfDeploymentName,
    options,
  );
  return _upfDeploymentsGetDeserialize(result);
}

export function _upfDeploymentsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  resource: UpfDeploymentResource,
  options: UpfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/upfDeployments/{upfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      upfDeploymentName,
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
          : upfDeploymentResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _upfDeploymentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<UpfDeploymentResource> {
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

/** Create a UpfDeploymentResource */
export async function upfDeploymentsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  resource: UpfDeploymentResource,
  options: UpfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<UpfDeploymentResource> {
  const result = await _upfDeploymentsCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    upfDeploymentName,
    resource,
    options,
  );
  return _upfDeploymentsCreateOrUpdateDeserialize(result);
}

export function _upfDeploymentsUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  properties: UpfDeploymentResourceTagsUpdate,
  options: UpfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/upfDeployments/{upfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      upfDeploymentName,
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

export async function _upfDeploymentsUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<UpfDeploymentResource> {
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

/** Update a UpfDeploymentResource */
export async function upfDeploymentsUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  properties: UpfDeploymentResourceTagsUpdate,
  options: UpfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<UpfDeploymentResource> {
  const result = await _upfDeploymentsUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    upfDeploymentName,
    properties,
    options,
  );
  return _upfDeploymentsUpdateTagsDeserialize(result);
}

export function _upfDeploymentsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  options: UpfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/upfDeployments/{upfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      upfDeploymentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _upfDeploymentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a UpfDeploymentResource */
export function upfDeploymentsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  upfDeploymentName: string,
  options: UpfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _upfDeploymentsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _upfDeploymentsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          upfDeploymentName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _upfDeploymentsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: UpfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/upfDeployments",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _upfDeploymentsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_UpfDeploymentResourceListResult> {
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

/** List all User Plane Function Deployments by Resource ID. */
export function upfDeploymentsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: UpfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<UpfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _upfDeploymentsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _upfDeploymentsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _upfDeploymentsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: UpfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/upfDeployments",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _upfDeploymentsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_UpfDeploymentResourceListResult> {
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

/** List all User Plane Function Deployments by Subscription ID. */
export function upfDeploymentsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: UpfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<UpfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _upfDeploymentsListBySubscriptionSend(context, subscriptionId, options),
    _upfDeploymentsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
