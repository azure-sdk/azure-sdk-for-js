// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  observabilityServiceResourcePropertiesSerializer,
  ObservabilityServiceResource,
  ObservabilityServiceResourceTagsUpdate,
  _ObservabilityServiceResourceListResult,
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
  ObservabilityServicesGetOptionalParams,
  ObservabilityServicesCreateOrUpdateOptionalParams,
  ObservabilityServicesUpdateTagsOptionalParams,
  ObservabilityServicesDeleteOptionalParams,
  ObservabilityServicesListByResourceGroupOptionalParams,
  ObservabilityServicesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _observabilityServicesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  options: ObservabilityServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/observabilityServices/{observabilityServiceName}",
      subscriptionId,
      resourceGroupName,
      observabilityServiceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _observabilityServicesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ObservabilityServiceResource> {
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
          componentParameters: result.body.properties?.[
            "componentParameters"
          ].map((p: any) => {
            return {
              type: p["type"],
              parameters: p["parameters"],
              secrets: p["secrets"],
            };
          }),
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

/** Get a ObservabilityServiceResource */
export async function observabilityServicesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  options: ObservabilityServicesGetOptionalParams = { requestOptions: {} },
): Promise<ObservabilityServiceResource> {
  const result = await _observabilityServicesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    observabilityServiceName,
    options,
  );
  return _observabilityServicesGetDeserialize(result);
}

export function _observabilityServicesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  resource: ObservabilityServiceResource,
  options: ObservabilityServicesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/observabilityServices/{observabilityServiceName}",
      subscriptionId,
      resourceGroupName,
      observabilityServiceName,
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
          : observabilityServiceResourcePropertiesSerializer(
              resource.properties,
            ),
      },
    });
}

export async function _observabilityServicesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ObservabilityServiceResource> {
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
          componentParameters: result.body.properties?.[
            "componentParameters"
          ].map((p: any) => {
            return {
              type: p["type"],
              parameters: p["parameters"],
              secrets: p["secrets"],
            };
          }),
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

/** Create a ObservabilityServiceResource */
export async function observabilityServicesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  resource: ObservabilityServiceResource,
  options: ObservabilityServicesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ObservabilityServiceResource> {
  const result = await _observabilityServicesCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    observabilityServiceName,
    resource,
    options,
  );
  return _observabilityServicesCreateOrUpdateDeserialize(result);
}

export function _observabilityServicesUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  properties: ObservabilityServiceResourceTagsUpdate,
  options: ObservabilityServicesUpdateTagsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/observabilityServices/{observabilityServiceName}",
      subscriptionId,
      resourceGroupName,
      observabilityServiceName,
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

export async function _observabilityServicesUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<ObservabilityServiceResource> {
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
          componentParameters: result.body.properties?.[
            "componentParameters"
          ].map((p: any) => {
            return {
              type: p["type"],
              parameters: p["parameters"],
              secrets: p["secrets"],
            };
          }),
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

/** Update a ObservabilityServiceResource */
export async function observabilityServicesUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  properties: ObservabilityServiceResourceTagsUpdate,
  options: ObservabilityServicesUpdateTagsOptionalParams = {
    requestOptions: {},
  },
): Promise<ObservabilityServiceResource> {
  const result = await _observabilityServicesUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    observabilityServiceName,
    properties,
    options,
  );
  return _observabilityServicesUpdateTagsDeserialize(result);
}

export function _observabilityServicesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  options: ObservabilityServicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/observabilityServices/{observabilityServiceName}",
      subscriptionId,
      resourceGroupName,
      observabilityServiceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _observabilityServicesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a ObservabilityServiceResource */
export function observabilityServicesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  observabilityServiceName: string,
  options: ObservabilityServicesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _observabilityServicesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _observabilityServicesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          observabilityServiceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _observabilityServicesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ObservabilityServicesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/observabilityServices",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _observabilityServicesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ObservabilityServiceResourceListResult> {
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
              componentParameters: p.properties?.["componentParameters"].map(
                (p: any) => {
                  return {
                    type: p["type"],
                    parameters: p["parameters"],
                    secrets: p["secrets"],
                  };
                },
              ),
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

/** List all Observability Services by Resource Group. */
export function observabilityServicesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ObservabilityServicesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ObservabilityServiceResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _observabilityServicesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _observabilityServicesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _observabilityServicesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: ObservabilityServicesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/observabilityServices",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _observabilityServicesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ObservabilityServiceResourceListResult> {
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
              componentParameters: p.properties?.["componentParameters"].map(
                (p: any) => {
                  return {
                    type: p["type"],
                    parameters: p["parameters"],
                    secrets: p["secrets"],
                  };
                },
              ),
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

/** List all Observability Services by Subscription ID. */
export function observabilityServicesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: ObservabilityServicesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ObservabilityServiceResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _observabilityServicesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _observabilityServicesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
