// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  discoveredAssetPropertiesSerializer,
  discoveredAssetUpdatePropertiesSerializer,
  DiscoveredAsset,
  DiscoveredAssetUpdate,
  _DiscoveredAssetListResult,
} from "../../models/models.js";
import { DeviceRegistryContext as Client } from "../index.js";
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
  DiscoveredAssetsGetOptionalParams,
  DiscoveredAssetsCreateOrReplaceOptionalParams,
  DiscoveredAssetsUpdateOptionalParams,
  DiscoveredAssetsDeleteOptionalParams,
  DiscoveredAssetsListByResourceGroupOptionalParams,
  DiscoveredAssetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _discoveredAssetsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  options: DiscoveredAssetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssets/{discoveredAssetName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveredAsset> {
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
          assetEndpointProfileRef:
            result.body.properties?.["assetEndpointProfileRef"],
          discoveryId: result.body.properties?.["discoveryId"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          defaultDatasetsConfiguration:
            result.body.properties?.["defaultDatasetsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          defaultTopic: !result.body.properties?.defaultTopic
            ? undefined
            : {
                path: result.body.properties?.defaultTopic?.["path"],
                retain: result.body.properties?.defaultTopic?.["retain"],
              },
          datasets:
            result.body.properties?.["datasets"] === undefined
              ? result.body.properties?.["datasets"]
              : result.body.properties?.["datasets"].map((p: any) => {
                  return {
                    name: p["name"],
                    datasetConfiguration: p["datasetConfiguration"],
                    topic: !p.topic
                      ? undefined
                      : {
                          path: p.topic?.["path"],
                          retain: p.topic?.["retain"],
                        },
                    dataPoints:
                      p["dataPoints"] === undefined
                        ? p["dataPoints"]
                        : p["dataPoints"].map((p: any) => {
                            return {
                              name: p["name"],
                              dataSource: p["dataSource"],
                              dataPointConfiguration:
                                p["dataPointConfiguration"],
                              lastUpdatedOn:
                                p["lastUpdatedOn"] !== undefined
                                  ? new Date(p["lastUpdatedOn"])
                                  : undefined,
                            };
                          }),
                  };
                }),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p: any) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    eventConfiguration: p["eventConfiguration"],
                    topic: !p.topic
                      ? undefined
                      : {
                          path: p.topic?.["path"],
                          retain: p.topic?.["retain"],
                        },
                    lastUpdatedOn:
                      p["lastUpdatedOn"] !== undefined
                        ? new Date(p["lastUpdatedOn"])
                        : undefined,
                  };
                }),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a DiscoveredAsset */
export async function discoveredAssetsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  options: DiscoveredAssetsGetOptionalParams = { requestOptions: {} },
): Promise<DiscoveredAsset> {
  const result = await _discoveredAssetsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    discoveredAssetName,
    options,
  );
  return _discoveredAssetsGetDeserialize(result);
}

export function _discoveredAssetsCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  resource: DiscoveredAsset,
  options: DiscoveredAssetsCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssets/{discoveredAssetName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetName,
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
          : discoveredAssetPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _discoveredAssetsCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveredAsset> {
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
          assetEndpointProfileRef:
            result.body.properties?.["assetEndpointProfileRef"],
          discoveryId: result.body.properties?.["discoveryId"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          defaultDatasetsConfiguration:
            result.body.properties?.["defaultDatasetsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          defaultTopic: !result.body.properties?.defaultTopic
            ? undefined
            : {
                path: result.body.properties?.defaultTopic?.["path"],
                retain: result.body.properties?.defaultTopic?.["retain"],
              },
          datasets:
            result.body.properties?.["datasets"] === undefined
              ? result.body.properties?.["datasets"]
              : result.body.properties?.["datasets"].map((p: any) => {
                  return {
                    name: p["name"],
                    datasetConfiguration: p["datasetConfiguration"],
                    topic: !p.topic
                      ? undefined
                      : {
                          path: p.topic?.["path"],
                          retain: p.topic?.["retain"],
                        },
                    dataPoints:
                      p["dataPoints"] === undefined
                        ? p["dataPoints"]
                        : p["dataPoints"].map((p: any) => {
                            return {
                              name: p["name"],
                              dataSource: p["dataSource"],
                              dataPointConfiguration:
                                p["dataPointConfiguration"],
                              lastUpdatedOn:
                                p["lastUpdatedOn"] !== undefined
                                  ? new Date(p["lastUpdatedOn"])
                                  : undefined,
                            };
                          }),
                  };
                }),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p: any) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    eventConfiguration: p["eventConfiguration"],
                    topic: !p.topic
                      ? undefined
                      : {
                          path: p.topic?.["path"],
                          retain: p.topic?.["retain"],
                        },
                    lastUpdatedOn:
                      p["lastUpdatedOn"] !== undefined
                        ? new Date(p["lastUpdatedOn"])
                        : undefined,
                  };
                }),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a DiscoveredAsset */
export function discoveredAssetsCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  resource: DiscoveredAsset,
  options: DiscoveredAssetsCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<DiscoveredAsset>, DiscoveredAsset> {
  return getLongRunningPoller(
    context,
    _discoveredAssetsCreateOrReplaceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _discoveredAssetsCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          discoveredAssetName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<DiscoveredAsset>, DiscoveredAsset>;
}

export function _discoveredAssetsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  properties: DiscoveredAssetUpdate,
  options: DiscoveredAssetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssets/{discoveredAssetName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : discoveredAssetUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _discoveredAssetsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveredAsset> {
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
          assetEndpointProfileRef:
            result.body.properties?.["assetEndpointProfileRef"],
          discoveryId: result.body.properties?.["discoveryId"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          defaultDatasetsConfiguration:
            result.body.properties?.["defaultDatasetsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          defaultTopic: !result.body.properties?.defaultTopic
            ? undefined
            : {
                path: result.body.properties?.defaultTopic?.["path"],
                retain: result.body.properties?.defaultTopic?.["retain"],
              },
          datasets:
            result.body.properties?.["datasets"] === undefined
              ? result.body.properties?.["datasets"]
              : result.body.properties?.["datasets"].map((p: any) => {
                  return {
                    name: p["name"],
                    datasetConfiguration: p["datasetConfiguration"],
                    topic: !p.topic
                      ? undefined
                      : {
                          path: p.topic?.["path"],
                          retain: p.topic?.["retain"],
                        },
                    dataPoints:
                      p["dataPoints"] === undefined
                        ? p["dataPoints"]
                        : p["dataPoints"].map((p: any) => {
                            return {
                              name: p["name"],
                              dataSource: p["dataSource"],
                              dataPointConfiguration:
                                p["dataPointConfiguration"],
                              lastUpdatedOn:
                                p["lastUpdatedOn"] !== undefined
                                  ? new Date(p["lastUpdatedOn"])
                                  : undefined,
                            };
                          }),
                  };
                }),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p: any) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    eventConfiguration: p["eventConfiguration"],
                    topic: !p.topic
                      ? undefined
                      : {
                          path: p.topic?.["path"],
                          retain: p.topic?.["retain"],
                        },
                    lastUpdatedOn:
                      p["lastUpdatedOn"] !== undefined
                        ? new Date(p["lastUpdatedOn"])
                        : undefined,
                  };
                }),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a DiscoveredAsset */
export function discoveredAssetsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  properties: DiscoveredAssetUpdate,
  options: DiscoveredAssetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DiscoveredAsset>, DiscoveredAsset> {
  return getLongRunningPoller(
    context,
    _discoveredAssetsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _discoveredAssetsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          discoveredAssetName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<DiscoveredAsset>, DiscoveredAsset>;
}

export function _discoveredAssetsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  options: DiscoveredAssetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssets/{discoveredAssetName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a DiscoveredAsset */
export function discoveredAssetsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetName: string,
  options: DiscoveredAssetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _discoveredAssetsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _discoveredAssetsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          discoveredAssetName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _discoveredAssetsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DiscoveredAssetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DiscoveredAssetListResult> {
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
              assetEndpointProfileRef:
                p.properties?.["assetEndpointProfileRef"],
              discoveryId: p.properties?.["discoveryId"],
              version: p.properties?.["version"],
              manufacturer: p.properties?.["manufacturer"],
              manufacturerUri: p.properties?.["manufacturerUri"],
              model: p.properties?.["model"],
              productCode: p.properties?.["productCode"],
              hardwareRevision: p.properties?.["hardwareRevision"],
              softwareRevision: p.properties?.["softwareRevision"],
              documentationUri: p.properties?.["documentationUri"],
              serialNumber: p.properties?.["serialNumber"],
              defaultDatasetsConfiguration:
                p.properties?.["defaultDatasetsConfiguration"],
              defaultEventsConfiguration:
                p.properties?.["defaultEventsConfiguration"],
              defaultTopic: !p.properties?.defaultTopic
                ? undefined
                : {
                    path: p.properties?.defaultTopic?.["path"],
                    retain: p.properties?.defaultTopic?.["retain"],
                  },
              datasets:
                p.properties?.["datasets"] === undefined
                  ? p.properties?.["datasets"]
                  : p.properties?.["datasets"].map((p: any) => {
                      return {
                        name: p["name"],
                        datasetConfiguration: p["datasetConfiguration"],
                        topic: !p.topic
                          ? undefined
                          : {
                              path: p.topic?.["path"],
                              retain: p.topic?.["retain"],
                            },
                        dataPoints:
                          p["dataPoints"] === undefined
                            ? p["dataPoints"]
                            : p["dataPoints"].map((p: any) => {
                                return {
                                  name: p["name"],
                                  dataSource: p["dataSource"],
                                  dataPointConfiguration:
                                    p["dataPointConfiguration"],
                                  lastUpdatedOn:
                                    p["lastUpdatedOn"] !== undefined
                                      ? new Date(p["lastUpdatedOn"])
                                      : undefined,
                                };
                              }),
                      };
                    }),
              events:
                p.properties?.["events"] === undefined
                  ? p.properties?.["events"]
                  : p.properties?.["events"].map((p: any) => {
                      return {
                        name: p["name"],
                        eventNotifier: p["eventNotifier"],
                        eventConfiguration: p["eventConfiguration"],
                        topic: !p.topic
                          ? undefined
                          : {
                              path: p.topic?.["path"],
                              retain: p.topic?.["retain"],
                            },
                        lastUpdatedOn:
                          p["lastUpdatedOn"] !== undefined
                            ? new Date(p["lastUpdatedOn"])
                            : undefined,
                      };
                    }),
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List DiscoveredAsset resources by resource group */
export function discoveredAssetsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DiscoveredAssetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DiscoveredAsset> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _discoveredAssetsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _discoveredAssetsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _discoveredAssetsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: DiscoveredAssetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/discoveredAssets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_DiscoveredAssetListResult> {
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
              assetEndpointProfileRef:
                p.properties?.["assetEndpointProfileRef"],
              discoveryId: p.properties?.["discoveryId"],
              version: p.properties?.["version"],
              manufacturer: p.properties?.["manufacturer"],
              manufacturerUri: p.properties?.["manufacturerUri"],
              model: p.properties?.["model"],
              productCode: p.properties?.["productCode"],
              hardwareRevision: p.properties?.["hardwareRevision"],
              softwareRevision: p.properties?.["softwareRevision"],
              documentationUri: p.properties?.["documentationUri"],
              serialNumber: p.properties?.["serialNumber"],
              defaultDatasetsConfiguration:
                p.properties?.["defaultDatasetsConfiguration"],
              defaultEventsConfiguration:
                p.properties?.["defaultEventsConfiguration"],
              defaultTopic: !p.properties?.defaultTopic
                ? undefined
                : {
                    path: p.properties?.defaultTopic?.["path"],
                    retain: p.properties?.defaultTopic?.["retain"],
                  },
              datasets:
                p.properties?.["datasets"] === undefined
                  ? p.properties?.["datasets"]
                  : p.properties?.["datasets"].map((p: any) => {
                      return {
                        name: p["name"],
                        datasetConfiguration: p["datasetConfiguration"],
                        topic: !p.topic
                          ? undefined
                          : {
                              path: p.topic?.["path"],
                              retain: p.topic?.["retain"],
                            },
                        dataPoints:
                          p["dataPoints"] === undefined
                            ? p["dataPoints"]
                            : p["dataPoints"].map((p: any) => {
                                return {
                                  name: p["name"],
                                  dataSource: p["dataSource"],
                                  dataPointConfiguration:
                                    p["dataPointConfiguration"],
                                  lastUpdatedOn:
                                    p["lastUpdatedOn"] !== undefined
                                      ? new Date(p["lastUpdatedOn"])
                                      : undefined,
                                };
                              }),
                      };
                    }),
              events:
                p.properties?.["events"] === undefined
                  ? p.properties?.["events"]
                  : p.properties?.["events"].map((p: any) => {
                      return {
                        name: p["name"],
                        eventNotifier: p["eventNotifier"],
                        eventConfiguration: p["eventConfiguration"],
                        topic: !p.topic
                          ? undefined
                          : {
                              path: p.topic?.["path"],
                              retain: p.topic?.["retain"],
                            },
                        lastUpdatedOn:
                          p["lastUpdatedOn"] !== undefined
                            ? new Date(p["lastUpdatedOn"])
                            : undefined,
                      };
                    }),
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List DiscoveredAsset resources by subscription ID */
export function discoveredAssetsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: DiscoveredAssetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DiscoveredAsset> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _discoveredAssetsListBySubscriptionSend(context, subscriptionId, options),
    _discoveredAssetsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
