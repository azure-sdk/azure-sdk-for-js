// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  nrfDeploymentResourcePropertiesSerializer,
  NrfDeploymentResource,
  NrfDeploymentResourceTagsUpdate,
  _NrfDeploymentResourceListResult,
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
  NrfDeploymentsGetOptionalParams,
  NrfDeploymentsCreateOrUpdateOptionalParams,
  NrfDeploymentsUpdateTagsOptionalParams,
  NrfDeploymentsDeleteOptionalParams,
  NrfDeploymentsListByResourceGroupOptionalParams,
  NrfDeploymentsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _nrfDeploymentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  options: NrfDeploymentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nrfDeployments/{nrfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nrfDeploymentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nrfDeploymentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<NrfDeploymentResource> {
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

/** Get a NrfDeploymentResource */
export async function nrfDeploymentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  options: NrfDeploymentsGetOptionalParams = { requestOptions: {} },
): Promise<NrfDeploymentResource> {
  const result = await _nrfDeploymentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    nrfDeploymentName,
    options,
  );
  return _nrfDeploymentsGetDeserialize(result);
}

export function _nrfDeploymentsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  resource: NrfDeploymentResource,
  options: NrfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nrfDeployments/{nrfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nrfDeploymentName,
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
          : nrfDeploymentResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _nrfDeploymentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NrfDeploymentResource> {
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

/** Create a NrfDeploymentResource */
export async function nrfDeploymentsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  resource: NrfDeploymentResource,
  options: NrfDeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<NrfDeploymentResource> {
  const result = await _nrfDeploymentsCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    nrfDeploymentName,
    resource,
    options,
  );
  return _nrfDeploymentsCreateOrUpdateDeserialize(result);
}

export function _nrfDeploymentsUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  properties: NrfDeploymentResourceTagsUpdate,
  options: NrfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nrfDeployments/{nrfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nrfDeploymentName,
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

export async function _nrfDeploymentsUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<NrfDeploymentResource> {
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

/** Update a NrfDeploymentResource */
export async function nrfDeploymentsUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  properties: NrfDeploymentResourceTagsUpdate,
  options: NrfDeploymentsUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<NrfDeploymentResource> {
  const result = await _nrfDeploymentsUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    nrfDeploymentName,
    properties,
    options,
  );
  return _nrfDeploymentsUpdateTagsDeserialize(result);
}

export function _nrfDeploymentsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  options: NrfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nrfDeployments/{nrfDeploymentName}",
      subscriptionId,
      resourceGroupName,
      nrfDeploymentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _nrfDeploymentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a NrfDeploymentResource */
export function nrfDeploymentsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  nrfDeploymentName: string,
  options: NrfDeploymentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _nrfDeploymentsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _nrfDeploymentsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          nrfDeploymentName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _nrfDeploymentsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: NrfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/nrfDeployments",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nrfDeploymentsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_NrfDeploymentResourceListResult> {
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

/** List all Network Repository Function Deployments by Resource Group. */
export function nrfDeploymentsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: NrfDeploymentsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NrfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _nrfDeploymentsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _nrfDeploymentsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _nrfDeploymentsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: NrfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/nrfDeployments",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nrfDeploymentsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_NrfDeploymentResourceListResult> {
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

/** List all Network Repository Function Deployments by Subscription ID. */
export function nrfDeploymentsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: NrfDeploymentsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NrfDeploymentResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _nrfDeploymentsListBySubscriptionSend(context, subscriptionId, options),
    _nrfDeploymentsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
