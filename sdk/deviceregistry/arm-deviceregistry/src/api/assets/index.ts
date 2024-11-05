// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  assetPropertiesSerializer,
  assetUpdatePropertiesSerializer,
  Asset,
  AssetUpdate,
  _AssetListResult,
} from "../../models/models.js";
import { DeviceRegistryContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AssetsGetOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _assetsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Asset> {
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
          uuid: result.body.properties?.["uuid"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileRef:
            result.body.properties?.["assetEndpointProfileRef"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          discoveredAssetRefs: result.body.properties?.["discoveredAssetRefs"],
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
                              observabilityMode: p["observabilityMode"],
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
                    observabilityMode: p["observabilityMode"],
                  };
                }),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map(
                        (p: any) => {
                          return { code: p["code"], message: p["message"] };
                        },
                      ),
                version: result.body.properties?.status?.["version"],
                datasets:
                  result.body.properties?.status?.["datasets"] === undefined
                    ? result.body.properties?.status?.["datasets"]
                    : result.body.properties?.status?.["datasets"].map(
                        (p: any) => {
                          return {
                            name: p["name"],
                            messageSchemaReference: !p.messageSchemaReference
                              ? undefined
                              : {
                                  schemaRegistryNamespace:
                                    p.messageSchemaReference?.[
                                      "schemaRegistryNamespace"
                                    ],
                                  schemaName:
                                    p.messageSchemaReference?.["schemaName"],
                                  schemaVersion:
                                    p.messageSchemaReference?.["schemaVersion"],
                                },
                          };
                        },
                      ),
                events:
                  result.body.properties?.status?.["events"] === undefined
                    ? result.body.properties?.status?.["events"]
                    : result.body.properties?.status?.["events"].map(
                        (p: any) => {
                          return {
                            name: p["name"],
                            messageSchemaReference: !p.messageSchemaReference
                              ? undefined
                              : {
                                  schemaRegistryNamespace:
                                    p.messageSchemaReference?.[
                                      "schemaRegistryNamespace"
                                    ],
                                  schemaName:
                                    p.messageSchemaReference?.["schemaName"],
                                  schemaVersion:
                                    p.messageSchemaReference?.["schemaVersion"],
                                },
                          };
                        },
                      ),
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a Asset */
export async function assetsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): Promise<Asset> {
  const result = await _assetsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetName,
    options,
  );
  return _assetsGetDeserialize(result);
}

export function _assetsCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
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
          : assetPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _assetsCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<Asset> {
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
          uuid: result.body.properties?.["uuid"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileRef:
            result.body.properties?.["assetEndpointProfileRef"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          discoveredAssetRefs: result.body.properties?.["discoveredAssetRefs"],
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
                              observabilityMode: p["observabilityMode"],
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
                    observabilityMode: p["observabilityMode"],
                  };
                }),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map(
                        (p: any) => {
                          return { code: p["code"], message: p["message"] };
                        },
                      ),
                version: result.body.properties?.status?.["version"],
                datasets:
                  result.body.properties?.status?.["datasets"] === undefined
                    ? result.body.properties?.status?.["datasets"]
                    : result.body.properties?.status?.["datasets"].map(
                        (p: any) => {
                          return {
                            name: p["name"],
                            messageSchemaReference: !p.messageSchemaReference
                              ? undefined
                              : {
                                  schemaRegistryNamespace:
                                    p.messageSchemaReference?.[
                                      "schemaRegistryNamespace"
                                    ],
                                  schemaName:
                                    p.messageSchemaReference?.["schemaName"],
                                  schemaVersion:
                                    p.messageSchemaReference?.["schemaVersion"],
                                },
                          };
                        },
                      ),
                events:
                  result.body.properties?.status?.["events"] === undefined
                    ? result.body.properties?.status?.["events"]
                    : result.body.properties?.status?.["events"].map(
                        (p: any) => {
                          return {
                            name: p["name"],
                            messageSchemaReference: !p.messageSchemaReference
                              ? undefined
                              : {
                                  schemaRegistryNamespace:
                                    p.messageSchemaReference?.[
                                      "schemaRegistryNamespace"
                                    ],
                                  schemaName:
                                    p.messageSchemaReference?.["schemaName"],
                                  schemaVersion:
                                    p.messageSchemaReference?.["schemaVersion"],
                                },
                          };
                        },
                      ),
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a Asset */
export function assetsCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Asset>, Asset> {
  return getLongRunningPoller(
    context,
    _assetsCreateOrReplaceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _assetsCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          assetName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Asset>, Asset>;
}

export function _assetsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : assetUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _assetsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Asset> {
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
          uuid: result.body.properties?.["uuid"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileRef:
            result.body.properties?.["assetEndpointProfileRef"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          discoveredAssetRefs: result.body.properties?.["discoveredAssetRefs"],
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
                              observabilityMode: p["observabilityMode"],
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
                    observabilityMode: p["observabilityMode"],
                  };
                }),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map(
                        (p: any) => {
                          return { code: p["code"], message: p["message"] };
                        },
                      ),
                version: result.body.properties?.status?.["version"],
                datasets:
                  result.body.properties?.status?.["datasets"] === undefined
                    ? result.body.properties?.status?.["datasets"]
                    : result.body.properties?.status?.["datasets"].map(
                        (p: any) => {
                          return {
                            name: p["name"],
                            messageSchemaReference: !p.messageSchemaReference
                              ? undefined
                              : {
                                  schemaRegistryNamespace:
                                    p.messageSchemaReference?.[
                                      "schemaRegistryNamespace"
                                    ],
                                  schemaName:
                                    p.messageSchemaReference?.["schemaName"],
                                  schemaVersion:
                                    p.messageSchemaReference?.["schemaVersion"],
                                },
                          };
                        },
                      ),
                events:
                  result.body.properties?.status?.["events"] === undefined
                    ? result.body.properties?.status?.["events"]
                    : result.body.properties?.status?.["events"].map(
                        (p: any) => {
                          return {
                            name: p["name"],
                            messageSchemaReference: !p.messageSchemaReference
                              ? undefined
                              : {
                                  schemaRegistryNamespace:
                                    p.messageSchemaReference?.[
                                      "schemaRegistryNamespace"
                                    ],
                                  schemaName:
                                    p.messageSchemaReference?.["schemaName"],
                                  schemaVersion:
                                    p.messageSchemaReference?.["schemaVersion"],
                                },
                          };
                        },
                      ),
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a Asset */
export function assetsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Asset>, Asset> {
  return getLongRunningPoller(
    context,
    _assetsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _assetsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          assetName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Asset>, Asset>;
}

export function _assetsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Asset */
export function assetsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _assetsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _assetsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          assetName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _assetsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AssetListResult> {
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
              uuid: p.properties?.["uuid"],
              enabled: p.properties?.["enabled"],
              externalAssetId: p.properties?.["externalAssetId"],
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              assetEndpointProfileRef:
                p.properties?.["assetEndpointProfileRef"],
              version: p.properties?.["version"],
              manufacturer: p.properties?.["manufacturer"],
              manufacturerUri: p.properties?.["manufacturerUri"],
              model: p.properties?.["model"],
              productCode: p.properties?.["productCode"],
              hardwareRevision: p.properties?.["hardwareRevision"],
              softwareRevision: p.properties?.["softwareRevision"],
              documentationUri: p.properties?.["documentationUri"],
              serialNumber: p.properties?.["serialNumber"],
              attributes: p.properties?.["attributes"],
              discoveredAssetRefs: p.properties?.["discoveredAssetRefs"],
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
                                  observabilityMode: p["observabilityMode"],
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
                        observabilityMode: p["observabilityMode"],
                      };
                    }),
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p: any) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                    version: p.properties?.status?.["version"],
                    datasets:
                      p.properties?.status?.["datasets"] === undefined
                        ? p.properties?.status?.["datasets"]
                        : p.properties?.status?.["datasets"].map((p: any) => {
                            return {
                              name: p["name"],
                              messageSchemaReference: !p.messageSchemaReference
                                ? undefined
                                : {
                                    schemaRegistryNamespace:
                                      p.messageSchemaReference?.[
                                        "schemaRegistryNamespace"
                                      ],
                                    schemaName:
                                      p.messageSchemaReference?.["schemaName"],
                                    schemaVersion:
                                      p.messageSchemaReference?.[
                                        "schemaVersion"
                                      ],
                                  },
                            };
                          }),
                    events:
                      p.properties?.status?.["events"] === undefined
                        ? p.properties?.status?.["events"]
                        : p.properties?.status?.["events"].map((p: any) => {
                            return {
                              name: p["name"],
                              messageSchemaReference: !p.messageSchemaReference
                                ? undefined
                                : {
                                    schemaRegistryNamespace:
                                      p.messageSchemaReference?.[
                                        "schemaRegistryNamespace"
                                      ],
                                    schemaName:
                                      p.messageSchemaReference?.["schemaName"],
                                    schemaVersion:
                                      p.messageSchemaReference?.[
                                        "schemaVersion"
                                      ],
                                  },
                            };
                          }),
                  },
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

/** List Asset resources by resource group */
export function assetsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Asset> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _assetsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _assetsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _assetsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AssetListResult> {
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
              uuid: p.properties?.["uuid"],
              enabled: p.properties?.["enabled"],
              externalAssetId: p.properties?.["externalAssetId"],
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              assetEndpointProfileRef:
                p.properties?.["assetEndpointProfileRef"],
              version: p.properties?.["version"],
              manufacturer: p.properties?.["manufacturer"],
              manufacturerUri: p.properties?.["manufacturerUri"],
              model: p.properties?.["model"],
              productCode: p.properties?.["productCode"],
              hardwareRevision: p.properties?.["hardwareRevision"],
              softwareRevision: p.properties?.["softwareRevision"],
              documentationUri: p.properties?.["documentationUri"],
              serialNumber: p.properties?.["serialNumber"],
              attributes: p.properties?.["attributes"],
              discoveredAssetRefs: p.properties?.["discoveredAssetRefs"],
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
                                  observabilityMode: p["observabilityMode"],
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
                        observabilityMode: p["observabilityMode"],
                      };
                    }),
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p: any) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                    version: p.properties?.status?.["version"],
                    datasets:
                      p.properties?.status?.["datasets"] === undefined
                        ? p.properties?.status?.["datasets"]
                        : p.properties?.status?.["datasets"].map((p: any) => {
                            return {
                              name: p["name"],
                              messageSchemaReference: !p.messageSchemaReference
                                ? undefined
                                : {
                                    schemaRegistryNamespace:
                                      p.messageSchemaReference?.[
                                        "schemaRegistryNamespace"
                                      ],
                                    schemaName:
                                      p.messageSchemaReference?.["schemaName"],
                                    schemaVersion:
                                      p.messageSchemaReference?.[
                                        "schemaVersion"
                                      ],
                                  },
                            };
                          }),
                    events:
                      p.properties?.status?.["events"] === undefined
                        ? p.properties?.status?.["events"]
                        : p.properties?.status?.["events"].map((p: any) => {
                            return {
                              name: p["name"],
                              messageSchemaReference: !p.messageSchemaReference
                                ? undefined
                                : {
                                    schemaRegistryNamespace:
                                      p.messageSchemaReference?.[
                                        "schemaRegistryNamespace"
                                      ],
                                    schemaName:
                                      p.messageSchemaReference?.["schemaName"],
                                    schemaVersion:
                                      p.messageSchemaReference?.[
                                        "schemaVersion"
                                      ],
                                  },
                            };
                          }),
                  },
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

/** List Asset resources by subscription ID */
export function assetsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Asset> {
  return buildPagedAsyncIterator(
    context,
    () => _assetsListBySubscriptionSend(context, subscriptionId, options),
    _assetsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
