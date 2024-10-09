// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  amfDeploymentResourcePropertiesSerializer,
  AmfDeploymentResource,
  AmfDeploymentResourceTagsUpdate,
  _AmfDeploymentResourceListResult,
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
  AmfDeploymentsGetOptionalParams,
  AmfDeploymentsCreateOrUpdateOptionalParams,
  AmfDeploymentsUpdateTagsOptionalParams,
  AmfDeploymentsDeleteOptionalParams,
  AmfDeploymentsListByResourceGroupOptionalParams,
  AmfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _amfDeploymentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  options: AmfDeploymentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/amfDeployments/{amfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      amfDeploymentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _amfDeploymentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AmfDeploymentResource> {
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

/** Get a AmfDeploymentResource */
export async function amfDeploymentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  options: AmfDeploymentsGetOptionalParams = { requestOptions: {} },
): Promise<AmfDeploymentResource> {
  const result = await _amfDeploymentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    amfDeploymentName,
    options,
  );
  return _amfDeploymentsGetDeserialize(result);
}

export function _amfDeploymentsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  resource: AmfDeploymentResource,
  options: AmfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/amfDeployments/{amfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      amfDeploymentName,
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
          : amfDeploymentResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _amfDeploymentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AmfDeploymentResource> {
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

/** Create a AmfDeploymentResource */
export async function amfDeploymentsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  resource: AmfDeploymentResource,
  options: AmfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<AmfDeploymentResource> {
  const result = await _amfDeploymentsCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    amfDeploymentName,
    resource,
    options,
  );
  return _amfDeploymentsCreateOrUpdateDeserialize(result);
}

export function _amfDeploymentsUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  properties: AmfDeploymentResourceTagsUpdate,
  options: AmfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/amfDeployments/{amfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      amfDeploymentName,
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

export async function _amfDeploymentsUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<AmfDeploymentResource> {
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

/** Update a AmfDeploymentResource */
export async function amfDeploymentsUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  properties: AmfDeploymentResourceTagsUpdate,
  options: AmfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<AmfDeploymentResource> {
  const result = await _amfDeploymentsUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    amfDeploymentName,
    properties,
    options,
  );
  return _amfDeploymentsUpdateTagsDeserialize(result);
}

export function _amfDeploymentsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  options: AmfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/amfDeployments/{amfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      amfDeploymentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _amfDeploymentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a AmfDeploymentResource */
export function amfDeploymentsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  amfDeploymentName: string,
  options: AmfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _amfDeploymentsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _amfDeploymentsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          amfDeploymentName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _amfDeploymentsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AmfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/amfDeployments",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _amfDeploymentsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AmfDeploymentResourceListResult> {
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

/** List all Access and Mobility Function Deployments by Resource Group. */
export function amfDeploymentsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AmfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AmfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _amfDeploymentsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _amfDeploymentsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _amfDeploymentsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AmfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/amfDeployments",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _amfDeploymentsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AmfDeploymentResourceListResult> {
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

/** List all Access and Mobility Function Deployments by Subscription ID. */
export function amfDeploymentsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AmfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AmfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _amfDeploymentsListBySubscriptionSend(context, subscriptionId, options),
    _amfDeploymentsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
