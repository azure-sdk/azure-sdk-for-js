// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  clusterServiceResourcePropertiesSerializer,
  ClusterServiceResource,
  ClusterServiceResourceTagsUpdate,
  _ClusterServiceResourceListResult,
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
  ClusterServicesGetOptionalParams,
  ClusterServicesCreateOrUpdateOptionalParams,
  ClusterServicesUpdateTagsOptionalParams,
  ClusterServicesDeleteOptionalParams,
  ClusterServicesListByResourceGroupOptionalParams,
  ClusterServicesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _clusterServicesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  options: ClusterServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/clusterServices/{clusterServiceName}",
      subscriptionId,
      resourceGroupName,
      clusterServiceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _clusterServicesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ClusterServiceResource> {
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
          deploymentType: result.body.properties?.["deploymentType"],
          releaseVersion: result.body.properties?.["releaseVersion"],
          clusterTypeSpecificData: {
            type: result.body.properties?.clusterTypeSpecificData["type"],
            customLocationId:
              result.body.properties?.clusterTypeSpecificData[
                "customLocationId"
              ],
          },
          componentParameters: result.body.properties?.[
            "componentParameters"
          ].map((p: any) => {
            return {
              type: p["type"],
              parameters: p["parameters"],
              secrets: p["secrets"],
            };
          }),
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

/** Get a ClusterServiceResource */
export async function clusterServicesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  options: ClusterServicesGetOptionalParams = { requestOptions: {} },
): Promise<ClusterServiceResource> {
  const result = await _clusterServicesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    clusterServiceName,
    options,
  );
  return _clusterServicesGetDeserialize(result);
}

export function _clusterServicesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  resource: ClusterServiceResource,
  options: ClusterServicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/clusterServices/{clusterServiceName}",
      subscriptionId,
      resourceGroupName,
      clusterServiceName,
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
          : clusterServiceResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _clusterServicesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ClusterServiceResource> {
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
          deploymentType: result.body.properties?.["deploymentType"],
          releaseVersion: result.body.properties?.["releaseVersion"],
          clusterTypeSpecificData: {
            type: result.body.properties?.clusterTypeSpecificData["type"],
            customLocationId:
              result.body.properties?.clusterTypeSpecificData[
                "customLocationId"
              ],
          },
          componentParameters: result.body.properties?.[
            "componentParameters"
          ].map((p: any) => {
            return {
              type: p["type"],
              parameters: p["parameters"],
              secrets: p["secrets"],
            };
          }),
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

/** Create a ClusterServiceResource */
export async function clusterServicesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  resource: ClusterServiceResource,
  options: ClusterServicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<ClusterServiceResource> {
  const result = await _clusterServicesCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    clusterServiceName,
    resource,
    options,
  );
  return _clusterServicesCreateOrUpdateDeserialize(result);
}

export function _clusterServicesUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  properties: ClusterServiceResourceTagsUpdate,
  options: ClusterServicesUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/clusterServices/{clusterServiceName}",
      subscriptionId,
      resourceGroupName,
      clusterServiceName,
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

export async function _clusterServicesUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<ClusterServiceResource> {
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
          deploymentType: result.body.properties?.["deploymentType"],
          releaseVersion: result.body.properties?.["releaseVersion"],
          clusterTypeSpecificData: {
            type: result.body.properties?.clusterTypeSpecificData["type"],
            customLocationId:
              result.body.properties?.clusterTypeSpecificData[
                "customLocationId"
              ],
          },
          componentParameters: result.body.properties?.[
            "componentParameters"
          ].map((p: any) => {
            return {
              type: p["type"],
              parameters: p["parameters"],
              secrets: p["secrets"],
            };
          }),
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

/** Update a ClusterServiceResource */
export async function clusterServicesUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  properties: ClusterServiceResourceTagsUpdate,
  options: ClusterServicesUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<ClusterServiceResource> {
  const result = await _clusterServicesUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    clusterServiceName,
    properties,
    options,
  );
  return _clusterServicesUpdateTagsDeserialize(result);
}

export function _clusterServicesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  options: ClusterServicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/clusterServices/{clusterServiceName}",
      subscriptionId,
      resourceGroupName,
      clusterServiceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _clusterServicesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a ClusterServiceResource */
export function clusterServicesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  clusterServiceName: string,
  options: ClusterServicesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _clusterServicesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _clusterServicesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          clusterServiceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _clusterServicesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ClusterServicesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/clusterServices",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _clusterServicesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ClusterServiceResourceListResult> {
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
              deploymentType: p.properties?.["deploymentType"],
              releaseVersion: p.properties?.["releaseVersion"],
              clusterTypeSpecificData: {
                type: p.properties?.clusterTypeSpecificData["type"],
                customLocationId:
                  p.properties?.clusterTypeSpecificData["customLocationId"],
              },
              componentParameters: p.properties?.["componentParameters"].map(
                (p: any) => {
                  return {
                    type: p["type"],
                    parameters: p["parameters"],
                    secrets: p["secrets"],
                  };
                },
              ),
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

/** List all Cluster Services by Resource Group. */
export function clusterServicesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ClusterServicesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ClusterServiceResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _clusterServicesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _clusterServicesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _clusterServicesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: ClusterServicesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/clusterServices",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _clusterServicesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ClusterServiceResourceListResult> {
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
              deploymentType: p.properties?.["deploymentType"],
              releaseVersion: p.properties?.["releaseVersion"],
              clusterTypeSpecificData: {
                type: p.properties?.clusterTypeSpecificData["type"],
                customLocationId:
                  p.properties?.clusterTypeSpecificData["customLocationId"],
              },
              componentParameters: p.properties?.["componentParameters"].map(
                (p: any) => {
                  return {
                    type: p["type"],
                    parameters: p["parameters"],
                    secrets: p["secrets"],
                  };
                },
              ),
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

/** List all Cluster Services by Subscription ID. */
export function clusterServicesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: ClusterServicesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ClusterServiceResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _clusterServicesListBySubscriptionSend(context, subscriptionId, options),
    _clusterServicesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
