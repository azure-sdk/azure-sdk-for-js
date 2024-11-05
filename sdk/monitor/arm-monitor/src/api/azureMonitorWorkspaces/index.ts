// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  azureMonitorWorkspacePropertiesSerializer,
  azureMonitorWorkspaceUpdatePropertiesSerializer,
  AzureMonitorWorkspace,
  AzureMonitorWorkspaceUpdate,
  _AzureMonitorWorkspaceListResult,
} from "../../models/models.js";
import { MonitorContext as Client } from "../index.js";
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
  AzureMonitorWorkspacesGetOptionalParams,
  AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  AzureMonitorWorkspacesUpdateOptionalParams,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _azureMonitorWorkspacesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
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
          accountId: result.body.properties?.["accountId"],
          metrics: !result.body.properties?.metrics
            ? undefined
            : {
                prometheusQueryEndpoint:
                  result.body.properties?.metrics?.["prometheusQueryEndpoint"],
                internalId: result.body.properties?.metrics?.["internalId"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
          defaultIngestionSettings: !result.body.properties
            ?.defaultIngestionSettings
            ? undefined
            : {
                dataCollectionRuleResourceId:
                  result.body.properties?.defaultIngestionSettings?.[
                    "dataCollectionRuleResourceId"
                  ],
                dataCollectionEndpointResourceId:
                  result.body.properties?.defaultIngestionSettings?.[
                    "dataCollectionEndpointResourceId"
                  ],
              },
          privateEndpointConnections:
            result.body.properties?.["privateEndpointConnections"] === undefined
              ? result.body.properties?.["privateEndpointConnections"]
              : result.body.properties?.["privateEndpointConnections"].map(
                  (p: any) => {
                    return {
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
                            lastModifiedByType:
                              p.systemData?.["lastModifiedByType"],
                            lastModifiedAt:
                              p.systemData?.["lastModifiedAt"] !== undefined
                                ? new Date(p.systemData?.["lastModifiedAt"])
                                : undefined,
                          },
                      properties: !p.properties
                        ? undefined
                        : {
                            groupIds: p.properties?.["groupIds"],
                            privateEndpoint: !p.properties?.privateEndpoint
                              ? undefined
                              : { id: p.properties?.privateEndpoint?.["id"] },
                            privateLinkServiceConnectionState: {
                              status:
                                p.properties?.privateLinkServiceConnectionState[
                                  "status"
                                ],
                              description:
                                p.properties?.privateLinkServiceConnectionState[
                                  "description"
                                ],
                              actionsRequired:
                                p.properties?.privateLinkServiceConnectionState[
                                  "actionsRequired"
                                ],
                            },
                            provisioningState:
                              p.properties?.["provisioningState"],
                          },
                    };
                  },
                ),
          publicNetworkAccess: result.body.properties?.["publicNetworkAccess"],
        },
    etag: result.body["etag"],
  };
}

/** Returns the specific Azure Monitor workspace */
export async function azureMonitorWorkspacesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesGetOptionalParams = { requestOptions: {} },
): Promise<AzureMonitorWorkspace> {
  const result = await _azureMonitorWorkspacesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    azureMonitorWorkspaceName,
    options,
  );
  return _azureMonitorWorkspacesGetDeserialize(result);
}

export function _azureMonitorWorkspacesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  resource: AzureMonitorWorkspace,
  options: AzureMonitorWorkspacesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
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
          : azureMonitorWorkspacePropertiesSerializer(resource.properties),
      },
    });
}

export async function _azureMonitorWorkspacesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
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
          accountId: result.body.properties?.["accountId"],
          metrics: !result.body.properties?.metrics
            ? undefined
            : {
                prometheusQueryEndpoint:
                  result.body.properties?.metrics?.["prometheusQueryEndpoint"],
                internalId: result.body.properties?.metrics?.["internalId"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
          defaultIngestionSettings: !result.body.properties
            ?.defaultIngestionSettings
            ? undefined
            : {
                dataCollectionRuleResourceId:
                  result.body.properties?.defaultIngestionSettings?.[
                    "dataCollectionRuleResourceId"
                  ],
                dataCollectionEndpointResourceId:
                  result.body.properties?.defaultIngestionSettings?.[
                    "dataCollectionEndpointResourceId"
                  ],
              },
          privateEndpointConnections:
            result.body.properties?.["privateEndpointConnections"] === undefined
              ? result.body.properties?.["privateEndpointConnections"]
              : result.body.properties?.["privateEndpointConnections"].map(
                  (p: any) => {
                    return {
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
                            lastModifiedByType:
                              p.systemData?.["lastModifiedByType"],
                            lastModifiedAt:
                              p.systemData?.["lastModifiedAt"] !== undefined
                                ? new Date(p.systemData?.["lastModifiedAt"])
                                : undefined,
                          },
                      properties: !p.properties
                        ? undefined
                        : {
                            groupIds: p.properties?.["groupIds"],
                            privateEndpoint: !p.properties?.privateEndpoint
                              ? undefined
                              : { id: p.properties?.privateEndpoint?.["id"] },
                            privateLinkServiceConnectionState: {
                              status:
                                p.properties?.privateLinkServiceConnectionState[
                                  "status"
                                ],
                              description:
                                p.properties?.privateLinkServiceConnectionState[
                                  "description"
                                ],
                              actionsRequired:
                                p.properties?.privateLinkServiceConnectionState[
                                  "actionsRequired"
                                ],
                            },
                            provisioningState:
                              p.properties?.["provisioningState"],
                          },
                    };
                  },
                ),
          publicNetworkAccess: result.body.properties?.["publicNetworkAccess"],
        },
    etag: result.body["etag"],
  };
}

/** Create or update a workspace */
export function azureMonitorWorkspacesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  resource: AzureMonitorWorkspace,
  options: AzureMonitorWorkspacesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace> {
  return getLongRunningPoller(
    context,
    _azureMonitorWorkspacesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _azureMonitorWorkspacesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          azureMonitorWorkspaceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace>;
}

export function _azureMonitorWorkspacesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  properties: AzureMonitorWorkspaceUpdate,
  options: AzureMonitorWorkspacesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : azureMonitorWorkspaceUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _azureMonitorWorkspacesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
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
          accountId: result.body.properties?.["accountId"],
          metrics: !result.body.properties?.metrics
            ? undefined
            : {
                prometheusQueryEndpoint:
                  result.body.properties?.metrics?.["prometheusQueryEndpoint"],
                internalId: result.body.properties?.metrics?.["internalId"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
          defaultIngestionSettings: !result.body.properties
            ?.defaultIngestionSettings
            ? undefined
            : {
                dataCollectionRuleResourceId:
                  result.body.properties?.defaultIngestionSettings?.[
                    "dataCollectionRuleResourceId"
                  ],
                dataCollectionEndpointResourceId:
                  result.body.properties?.defaultIngestionSettings?.[
                    "dataCollectionEndpointResourceId"
                  ],
              },
          privateEndpointConnections:
            result.body.properties?.["privateEndpointConnections"] === undefined
              ? result.body.properties?.["privateEndpointConnections"]
              : result.body.properties?.["privateEndpointConnections"].map(
                  (p: any) => {
                    return {
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
                            lastModifiedByType:
                              p.systemData?.["lastModifiedByType"],
                            lastModifiedAt:
                              p.systemData?.["lastModifiedAt"] !== undefined
                                ? new Date(p.systemData?.["lastModifiedAt"])
                                : undefined,
                          },
                      properties: !p.properties
                        ? undefined
                        : {
                            groupIds: p.properties?.["groupIds"],
                            privateEndpoint: !p.properties?.privateEndpoint
                              ? undefined
                              : { id: p.properties?.privateEndpoint?.["id"] },
                            privateLinkServiceConnectionState: {
                              status:
                                p.properties?.privateLinkServiceConnectionState[
                                  "status"
                                ],
                              description:
                                p.properties?.privateLinkServiceConnectionState[
                                  "description"
                                ],
                              actionsRequired:
                                p.properties?.privateLinkServiceConnectionState[
                                  "actionsRequired"
                                ],
                            },
                            provisioningState:
                              p.properties?.["provisioningState"],
                          },
                    };
                  },
                ),
          publicNetworkAccess: result.body.properties?.["publicNetworkAccess"],
        },
    etag: result.body["etag"],
  };
}

/** Updates part of a workspace */
export async function azureMonitorWorkspacesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  properties: AzureMonitorWorkspaceUpdate,
  options: AzureMonitorWorkspacesUpdateOptionalParams = { requestOptions: {} },
): Promise<AzureMonitorWorkspace> {
  const result = await _azureMonitorWorkspacesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    azureMonitorWorkspaceName,
    properties,
    options,
  );
  return _azureMonitorWorkspacesUpdateDeserialize(result);
}

export function _azureMonitorWorkspacesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a workspace */
export function azureMonitorWorkspacesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _azureMonitorWorkspacesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _azureMonitorWorkspacesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          azureMonitorWorkspaceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _azureMonitorWorkspacesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AzureMonitorWorkspacesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureMonitorWorkspaceListResult> {
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
              accountId: p.properties?.["accountId"],
              metrics: !p.properties?.metrics
                ? undefined
                : {
                    prometheusQueryEndpoint:
                      p.properties?.metrics?.["prometheusQueryEndpoint"],
                    internalId: p.properties?.metrics?.["internalId"],
                  },
              provisioningState: p.properties?.["provisioningState"],
              defaultIngestionSettings: !p.properties?.defaultIngestionSettings
                ? undefined
                : {
                    dataCollectionRuleResourceId:
                      p.properties?.defaultIngestionSettings?.[
                        "dataCollectionRuleResourceId"
                      ],
                    dataCollectionEndpointResourceId:
                      p.properties?.defaultIngestionSettings?.[
                        "dataCollectionEndpointResourceId"
                      ],
                  },
              privateEndpointConnections:
                p.properties?.["privateEndpointConnections"] === undefined
                  ? p.properties?.["privateEndpointConnections"]
                  : p.properties?.["privateEndpointConnections"].map(
                      (p: any) => {
                        return {
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
                                lastModifiedBy:
                                  p.systemData?.["lastModifiedBy"],
                                lastModifiedByType:
                                  p.systemData?.["lastModifiedByType"],
                                lastModifiedAt:
                                  p.systemData?.["lastModifiedAt"] !== undefined
                                    ? new Date(p.systemData?.["lastModifiedAt"])
                                    : undefined,
                              },
                          properties: !p.properties
                            ? undefined
                            : {
                                groupIds: p.properties?.["groupIds"],
                                privateEndpoint: !p.properties?.privateEndpoint
                                  ? undefined
                                  : {
                                      id: p.properties?.privateEndpoint?.["id"],
                                    },
                                privateLinkServiceConnectionState: {
                                  status:
                                    p.properties
                                      ?.privateLinkServiceConnectionState[
                                      "status"
                                    ],
                                  description:
                                    p.properties
                                      ?.privateLinkServiceConnectionState[
                                      "description"
                                    ],
                                  actionsRequired:
                                    p.properties
                                      ?.privateLinkServiceConnectionState[
                                      "actionsRequired"
                                    ],
                                },
                                provisioningState:
                                  p.properties?.["provisioningState"],
                              },
                        };
                      },
                    ),
              publicNetworkAccess: p.properties?.["publicNetworkAccess"],
            },
        etag: p["etag"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all workspaces in the specified resource group */
export function azureMonitorWorkspacesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AzureMonitorWorkspacesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureMonitorWorkspace> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _azureMonitorWorkspacesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _azureMonitorWorkspacesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _azureMonitorWorkspacesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AzureMonitorWorkspacesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/accounts",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureMonitorWorkspaceListResult> {
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
              accountId: p.properties?.["accountId"],
              metrics: !p.properties?.metrics
                ? undefined
                : {
                    prometheusQueryEndpoint:
                      p.properties?.metrics?.["prometheusQueryEndpoint"],
                    internalId: p.properties?.metrics?.["internalId"],
                  },
              provisioningState: p.properties?.["provisioningState"],
              defaultIngestionSettings: !p.properties?.defaultIngestionSettings
                ? undefined
                : {
                    dataCollectionRuleResourceId:
                      p.properties?.defaultIngestionSettings?.[
                        "dataCollectionRuleResourceId"
                      ],
                    dataCollectionEndpointResourceId:
                      p.properties?.defaultIngestionSettings?.[
                        "dataCollectionEndpointResourceId"
                      ],
                  },
              privateEndpointConnections:
                p.properties?.["privateEndpointConnections"] === undefined
                  ? p.properties?.["privateEndpointConnections"]
                  : p.properties?.["privateEndpointConnections"].map(
                      (p: any) => {
                        return {
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
                                lastModifiedBy:
                                  p.systemData?.["lastModifiedBy"],
                                lastModifiedByType:
                                  p.systemData?.["lastModifiedByType"],
                                lastModifiedAt:
                                  p.systemData?.["lastModifiedAt"] !== undefined
                                    ? new Date(p.systemData?.["lastModifiedAt"])
                                    : undefined,
                              },
                          properties: !p.properties
                            ? undefined
                            : {
                                groupIds: p.properties?.["groupIds"],
                                privateEndpoint: !p.properties?.privateEndpoint
                                  ? undefined
                                  : {
                                      id: p.properties?.privateEndpoint?.["id"],
                                    },
                                privateLinkServiceConnectionState: {
                                  status:
                                    p.properties
                                      ?.privateLinkServiceConnectionState[
                                      "status"
                                    ],
                                  description:
                                    p.properties
                                      ?.privateLinkServiceConnectionState[
                                      "description"
                                    ],
                                  actionsRequired:
                                    p.properties
                                      ?.privateLinkServiceConnectionState[
                                      "actionsRequired"
                                    ],
                                },
                                provisioningState:
                                  p.properties?.["provisioningState"],
                              },
                        };
                      },
                    ),
              publicNetworkAccess: p.properties?.["publicNetworkAccess"],
            },
        etag: p["etag"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all workspaces in the specified subscription */
export function azureMonitorWorkspacesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AzureMonitorWorkspacesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureMonitorWorkspace> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _azureMonitorWorkspacesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _azureMonitorWorkspacesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
