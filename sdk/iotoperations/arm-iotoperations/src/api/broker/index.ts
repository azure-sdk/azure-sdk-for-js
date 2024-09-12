// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  brokerPropertiesSerializer,
  BrokerResource,
  _BrokerResourceListResult,
} from "../../models/models.js";
import { IoTOperationsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BrokerGetOptionalParams,
  BrokerCreateOrUpdateOptionalParams,
  BrokerDeleteOptionalParams,
  BrokerListByResourceGroupOptionalParams,
} from "../../models/options.js";

export function _brokerGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          advanced: !result.body.properties?.advanced
            ? undefined
            : {
                clients: !result.body.properties?.advanced?.clients
                  ? undefined
                  : {
                      maxSessionExpirySeconds:
                        result.body.properties?.advanced?.clients?.[
                          "maxSessionExpirySeconds"
                        ],
                      maxMessageExpirySeconds:
                        result.body.properties?.advanced?.clients?.[
                          "maxMessageExpirySeconds"
                        ],
                      maxPacketSizeBytes:
                        result.body.properties?.advanced?.clients?.[
                          "maxPacketSizeBytes"
                        ],
                      subscriberQueueLimit: !result.body.properties?.advanced
                        ?.clients?.subscriberQueueLimit
                        ? undefined
                        : {
                            length:
                              result.body.properties?.advanced?.clients
                                ?.subscriberQueueLimit?.["length"],
                            strategy:
                              result.body.properties?.advanced?.clients
                                ?.subscriberQueueLimit?.["strategy"],
                          },
                      maxReceiveMaximum:
                        result.body.properties?.advanced?.clients?.[
                          "maxReceiveMaximum"
                        ],
                      maxKeepAliveSeconds:
                        result.body.properties?.advanced?.clients?.[
                          "maxKeepAliveSeconds"
                        ],
                    },
                encryptInternalTraffic:
                  result.body.properties?.advanced?.["encryptInternalTraffic"],
                internalCerts: !result.body.properties?.advanced?.internalCerts
                  ? undefined
                  : {
                      duration:
                        result.body.properties?.advanced?.internalCerts?.[
                          "duration"
                        ],
                      renewBefore:
                        result.body.properties?.advanced?.internalCerts?.[
                          "renewBefore"
                        ],
                      privateKey: {
                        algorithm:
                          result.body.properties?.advanced?.internalCerts
                            ?.privateKey["algorithm"],
                        rotationPolicy:
                          result.body.properties?.advanced?.internalCerts
                            ?.privateKey["rotationPolicy"],
                      },
                    },
              },
          cardinality: !result.body.properties?.cardinality
            ? undefined
            : {
                backendChain: {
                  partitions:
                    result.body.properties?.cardinality?.backendChain[
                      "partitions"
                    ],
                  redundancyFactor:
                    result.body.properties?.cardinality?.backendChain[
                      "redundancyFactor"
                    ],
                  workers:
                    result.body.properties?.cardinality?.backendChain[
                      "workers"
                    ],
                },
                frontend: {
                  replicas:
                    result.body.properties?.cardinality?.frontend["replicas"],
                  workers:
                    result.body.properties?.cardinality?.frontend["workers"],
                },
              },
          diagnostics: !result.body.properties?.diagnostics
            ? undefined
            : {
                logs: !result.body.properties?.diagnostics?.logs
                  ? undefined
                  : {
                      opentelemetryExportConfig: !result.body.properties
                        ?.diagnostics?.logs?.opentelemetryExportConfig
                        ? undefined
                        : {
                            otlpGrpcEndpoint:
                              result.body.properties?.diagnostics?.logs
                                ?.opentelemetryExportConfig?.[
                                "otlpGrpcEndpoint"
                              ],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.logs
                                ?.opentelemetryExportConfig?.[
                                "intervalSeconds"
                              ],
                            level:
                              result.body.properties?.diagnostics?.logs
                                ?.opentelemetryExportConfig?.["level"],
                          },
                      level:
                        result.body.properties?.diagnostics?.logs?.["level"],
                    },
                metrics: !result.body.properties?.diagnostics?.metrics
                  ? undefined
                  : {
                      opentelemetryExportConfig: !result.body.properties
                        ?.diagnostics?.metrics?.opentelemetryExportConfig
                        ? undefined
                        : {
                            otlpGrpcEndpoint:
                              result.body.properties?.diagnostics?.metrics
                                ?.opentelemetryExportConfig?.[
                                "otlpGrpcEndpoint"
                              ],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.metrics
                                ?.opentelemetryExportConfig?.[
                                "intervalSeconds"
                              ],
                          },
                      prometheusPort:
                        result.body.properties?.diagnostics?.metrics?.[
                          "prometheusPort"
                        ],
                    },
                selfCheck: !result.body.properties?.diagnostics?.selfCheck
                  ? undefined
                  : {
                      mode: result.body.properties?.diagnostics?.selfCheck?.[
                        "mode"
                      ],
                      intervalSeconds:
                        result.body.properties?.diagnostics?.selfCheck?.[
                          "intervalSeconds"
                        ],
                      timeoutSeconds:
                        result.body.properties?.diagnostics?.selfCheck?.[
                          "timeoutSeconds"
                        ],
                    },
                traces: !result.body.properties?.diagnostics?.traces
                  ? undefined
                  : {
                      mode: result.body.properties?.diagnostics?.traces?.[
                        "mode"
                      ],
                      opentelemetryExportConfig: !result.body.properties
                        ?.diagnostics?.traces?.opentelemetryExportConfig
                        ? undefined
                        : {
                            otlpGrpcEndpoint:
                              result.body.properties?.diagnostics?.traces
                                ?.opentelemetryExportConfig?.[
                                "otlpGrpcEndpoint"
                              ],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.traces
                                ?.opentelemetryExportConfig?.[
                                "intervalSeconds"
                              ],
                          },
                      cacheSizeMegabytes:
                        result.body.properties?.diagnostics?.traces?.[
                          "cacheSizeMegabytes"
                        ],
                      selfTracing: !result.body.properties?.diagnostics?.traces
                        ?.selfTracing
                        ? undefined
                        : {
                            mode: result.body.properties?.diagnostics?.traces
                              ?.selfTracing?.["mode"],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.traces
                                ?.selfTracing?.["intervalSeconds"],
                          },
                      spanChannelCapacity:
                        result.body.properties?.diagnostics?.traces?.[
                          "spanChannelCapacity"
                        ],
                    },
              },
          diskBackedMessageBuffer: !result.body.properties
            ?.diskBackedMessageBuffer
            ? undefined
            : {
                maxSize:
                  result.body.properties?.diskBackedMessageBuffer?.["maxSize"],
                ephemeralVolumeClaimSpec: !result.body.properties
                  ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                  ? undefined
                  : {
                      volumeName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["volumeName"],
                      volumeMode:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["volumeMode"],
                      storageClassName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["storageClassName"],
                      accessModes:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["accessModes"],
                      dataSource: !result.body.properties
                        ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                        ?.dataSource
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.dataSource?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSource?.["kind"],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSource?.["name"],
                          },
                      dataSourceRef: !result.body.properties
                        ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                        ?.dataSourceRef
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                              "kind"
                            ],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                              "name"
                            ],
                            namespace:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                "namespace"
                              ],
                          },
                      resources: !result.body.properties
                        ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                        ?.resources
                        ? undefined
                        : {
                            limits:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.resources?.[
                                "limits"
                              ],
                            requests:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.resources?.[
                                "requests"
                              ],
                          },
                      selector: !result.body.properties?.diskBackedMessageBuffer
                        ?.ephemeralVolumeClaimSpec?.selector
                        ? undefined
                        : {
                            matchExpressions:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.selector?.[
                                "matchExpressions"
                              ] === undefined
                                ? result.body.properties
                                    ?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ]
                                : result.body.properties?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ].map((p: any) => {
                                    return {
                                      key: p["key"],
                                      operator: p["operator"],
                                      values: p["values"],
                                    };
                                  }),
                            matchLabels:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.selector?.[
                                "matchLabels"
                              ],
                          },
                    },
                persistentVolumeClaimSpec: !result.body.properties
                  ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                  ? undefined
                  : {
                      volumeName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["volumeName"],
                      volumeMode:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["volumeMode"],
                      storageClassName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["storageClassName"],
                      accessModes:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["accessModes"],
                      dataSource: !result.body.properties
                        ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                        ?.dataSource
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.dataSource?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSource?.["kind"],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSource?.["name"],
                          },
                      dataSourceRef: !result.body.properties
                        ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                        ?.dataSourceRef
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                              "kind"
                            ],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                              "name"
                            ],
                            namespace:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                                "namespace"
                              ],
                          },
                      resources: !result.body.properties
                        ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                        ?.resources
                        ? undefined
                        : {
                            limits:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.resources?.[
                                "limits"
                              ],
                            requests:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.resources?.[
                                "requests"
                              ],
                          },
                      selector: !result.body.properties?.diskBackedMessageBuffer
                        ?.persistentVolumeClaimSpec?.selector
                        ? undefined
                        : {
                            matchExpressions:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.selector?.[
                                "matchExpressions"
                              ] === undefined
                                ? result.body.properties
                                    ?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ]
                                : result.body.properties?.diskBackedMessageBuffer?.persistentVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ].map((p: any) => {
                                    return {
                                      key: p["key"],
                                      operator: p["operator"],
                                      values: p["values"],
                                    };
                                  }),
                            matchLabels:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.selector?.[
                                "matchLabels"
                              ],
                          },
                    },
              },
          generateResourceLimits: !result.body.properties
            ?.generateResourceLimits
            ? undefined
            : { cpu: result.body.properties?.generateResourceLimits?.["cpu"] },
          memoryProfile: result.body.properties?.["memoryProfile"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Get a BrokerResource */
export async function brokerGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerGetOptionalParams = { requestOptions: {} },
): Promise<BrokerResource> {
  const result = await _brokerGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    brokerName,
    options,
  );
  return _brokerGetDeserialize(result);
}

export function _brokerCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  resource: BrokerResource,
  options: BrokerCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : brokerPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _brokerCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          advanced: !result.body.properties?.advanced
            ? undefined
            : {
                clients: !result.body.properties?.advanced?.clients
                  ? undefined
                  : {
                      maxSessionExpirySeconds:
                        result.body.properties?.advanced?.clients?.[
                          "maxSessionExpirySeconds"
                        ],
                      maxMessageExpirySeconds:
                        result.body.properties?.advanced?.clients?.[
                          "maxMessageExpirySeconds"
                        ],
                      maxPacketSizeBytes:
                        result.body.properties?.advanced?.clients?.[
                          "maxPacketSizeBytes"
                        ],
                      subscriberQueueLimit: !result.body.properties?.advanced
                        ?.clients?.subscriberQueueLimit
                        ? undefined
                        : {
                            length:
                              result.body.properties?.advanced?.clients
                                ?.subscriberQueueLimit?.["length"],
                            strategy:
                              result.body.properties?.advanced?.clients
                                ?.subscriberQueueLimit?.["strategy"],
                          },
                      maxReceiveMaximum:
                        result.body.properties?.advanced?.clients?.[
                          "maxReceiveMaximum"
                        ],
                      maxKeepAliveSeconds:
                        result.body.properties?.advanced?.clients?.[
                          "maxKeepAliveSeconds"
                        ],
                    },
                encryptInternalTraffic:
                  result.body.properties?.advanced?.["encryptInternalTraffic"],
                internalCerts: !result.body.properties?.advanced?.internalCerts
                  ? undefined
                  : {
                      duration:
                        result.body.properties?.advanced?.internalCerts?.[
                          "duration"
                        ],
                      renewBefore:
                        result.body.properties?.advanced?.internalCerts?.[
                          "renewBefore"
                        ],
                      privateKey: {
                        algorithm:
                          result.body.properties?.advanced?.internalCerts
                            ?.privateKey["algorithm"],
                        rotationPolicy:
                          result.body.properties?.advanced?.internalCerts
                            ?.privateKey["rotationPolicy"],
                      },
                    },
              },
          cardinality: !result.body.properties?.cardinality
            ? undefined
            : {
                backendChain: {
                  partitions:
                    result.body.properties?.cardinality?.backendChain[
                      "partitions"
                    ],
                  redundancyFactor:
                    result.body.properties?.cardinality?.backendChain[
                      "redundancyFactor"
                    ],
                  workers:
                    result.body.properties?.cardinality?.backendChain[
                      "workers"
                    ],
                },
                frontend: {
                  replicas:
                    result.body.properties?.cardinality?.frontend["replicas"],
                  workers:
                    result.body.properties?.cardinality?.frontend["workers"],
                },
              },
          diagnostics: !result.body.properties?.diagnostics
            ? undefined
            : {
                logs: !result.body.properties?.diagnostics?.logs
                  ? undefined
                  : {
                      opentelemetryExportConfig: !result.body.properties
                        ?.diagnostics?.logs?.opentelemetryExportConfig
                        ? undefined
                        : {
                            otlpGrpcEndpoint:
                              result.body.properties?.diagnostics?.logs
                                ?.opentelemetryExportConfig?.[
                                "otlpGrpcEndpoint"
                              ],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.logs
                                ?.opentelemetryExportConfig?.[
                                "intervalSeconds"
                              ],
                            level:
                              result.body.properties?.diagnostics?.logs
                                ?.opentelemetryExportConfig?.["level"],
                          },
                      level:
                        result.body.properties?.diagnostics?.logs?.["level"],
                    },
                metrics: !result.body.properties?.diagnostics?.metrics
                  ? undefined
                  : {
                      opentelemetryExportConfig: !result.body.properties
                        ?.diagnostics?.metrics?.opentelemetryExportConfig
                        ? undefined
                        : {
                            otlpGrpcEndpoint:
                              result.body.properties?.diagnostics?.metrics
                                ?.opentelemetryExportConfig?.[
                                "otlpGrpcEndpoint"
                              ],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.metrics
                                ?.opentelemetryExportConfig?.[
                                "intervalSeconds"
                              ],
                          },
                      prometheusPort:
                        result.body.properties?.diagnostics?.metrics?.[
                          "prometheusPort"
                        ],
                    },
                selfCheck: !result.body.properties?.diagnostics?.selfCheck
                  ? undefined
                  : {
                      mode: result.body.properties?.diagnostics?.selfCheck?.[
                        "mode"
                      ],
                      intervalSeconds:
                        result.body.properties?.diagnostics?.selfCheck?.[
                          "intervalSeconds"
                        ],
                      timeoutSeconds:
                        result.body.properties?.diagnostics?.selfCheck?.[
                          "timeoutSeconds"
                        ],
                    },
                traces: !result.body.properties?.diagnostics?.traces
                  ? undefined
                  : {
                      mode: result.body.properties?.diagnostics?.traces?.[
                        "mode"
                      ],
                      opentelemetryExportConfig: !result.body.properties
                        ?.diagnostics?.traces?.opentelemetryExportConfig
                        ? undefined
                        : {
                            otlpGrpcEndpoint:
                              result.body.properties?.diagnostics?.traces
                                ?.opentelemetryExportConfig?.[
                                "otlpGrpcEndpoint"
                              ],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.traces
                                ?.opentelemetryExportConfig?.[
                                "intervalSeconds"
                              ],
                          },
                      cacheSizeMegabytes:
                        result.body.properties?.diagnostics?.traces?.[
                          "cacheSizeMegabytes"
                        ],
                      selfTracing: !result.body.properties?.diagnostics?.traces
                        ?.selfTracing
                        ? undefined
                        : {
                            mode: result.body.properties?.diagnostics?.traces
                              ?.selfTracing?.["mode"],
                            intervalSeconds:
                              result.body.properties?.diagnostics?.traces
                                ?.selfTracing?.["intervalSeconds"],
                          },
                      spanChannelCapacity:
                        result.body.properties?.diagnostics?.traces?.[
                          "spanChannelCapacity"
                        ],
                    },
              },
          diskBackedMessageBuffer: !result.body.properties
            ?.diskBackedMessageBuffer
            ? undefined
            : {
                maxSize:
                  result.body.properties?.diskBackedMessageBuffer?.["maxSize"],
                ephemeralVolumeClaimSpec: !result.body.properties
                  ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                  ? undefined
                  : {
                      volumeName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["volumeName"],
                      volumeMode:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["volumeMode"],
                      storageClassName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["storageClassName"],
                      accessModes:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.ephemeralVolumeClaimSpec?.["accessModes"],
                      dataSource: !result.body.properties
                        ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                        ?.dataSource
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.dataSource?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSource?.["kind"],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSource?.["name"],
                          },
                      dataSourceRef: !result.body.properties
                        ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                        ?.dataSourceRef
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                              "kind"
                            ],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                              "name"
                            ],
                            namespace:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                "namespace"
                              ],
                          },
                      resources: !result.body.properties
                        ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                        ?.resources
                        ? undefined
                        : {
                            limits:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.resources?.[
                                "limits"
                              ],
                            requests:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.resources?.[
                                "requests"
                              ],
                          },
                      selector: !result.body.properties?.diskBackedMessageBuffer
                        ?.ephemeralVolumeClaimSpec?.selector
                        ? undefined
                        : {
                            matchExpressions:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.selector?.[
                                "matchExpressions"
                              ] === undefined
                                ? result.body.properties
                                    ?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ]
                                : result.body.properties?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ].map((p: any) => {
                                    return {
                                      key: p["key"],
                                      operator: p["operator"],
                                      values: p["values"],
                                    };
                                  }),
                            matchLabels:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.ephemeralVolumeClaimSpec?.selector?.[
                                "matchLabels"
                              ],
                          },
                    },
                persistentVolumeClaimSpec: !result.body.properties
                  ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                  ? undefined
                  : {
                      volumeName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["volumeName"],
                      volumeMode:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["volumeMode"],
                      storageClassName:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["storageClassName"],
                      accessModes:
                        result.body.properties?.diskBackedMessageBuffer
                          ?.persistentVolumeClaimSpec?.["accessModes"],
                      dataSource: !result.body.properties
                        ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                        ?.dataSource
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.dataSource?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSource?.["kind"],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSource?.["name"],
                          },
                      dataSourceRef: !result.body.properties
                        ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                        ?.dataSourceRef
                        ? undefined
                        : {
                            apiGroup:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                                "apiGroup"
                              ],
                            kind: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                              "kind"
                            ],
                            name: result.body.properties
                              ?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                              "name"
                            ],
                            namespace:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                                "namespace"
                              ],
                          },
                      resources: !result.body.properties
                        ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                        ?.resources
                        ? undefined
                        : {
                            limits:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.resources?.[
                                "limits"
                              ],
                            requests:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.resources?.[
                                "requests"
                              ],
                          },
                      selector: !result.body.properties?.diskBackedMessageBuffer
                        ?.persistentVolumeClaimSpec?.selector
                        ? undefined
                        : {
                            matchExpressions:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.selector?.[
                                "matchExpressions"
                              ] === undefined
                                ? result.body.properties
                                    ?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ]
                                : result.body.properties?.diskBackedMessageBuffer?.persistentVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ].map((p: any) => {
                                    return {
                                      key: p["key"],
                                      operator: p["operator"],
                                      values: p["values"],
                                    };
                                  }),
                            matchLabels:
                              result.body.properties?.diskBackedMessageBuffer
                                ?.persistentVolumeClaimSpec?.selector?.[
                                "matchLabels"
                              ],
                          },
                    },
              },
          generateResourceLimits: !result.body.properties
            ?.generateResourceLimits
            ? undefined
            : { cpu: result.body.properties?.generateResourceLimits?.["cpu"] },
          memoryProfile: result.body.properties?.["memoryProfile"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Create a BrokerResource */
export function brokerCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  resource: BrokerResource,
  options: BrokerCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<BrokerResource>, BrokerResource> {
  return getLongRunningPoller(
    context,
    _brokerCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<BrokerResource>, BrokerResource>;
}

export function _brokerDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a BrokerResource */
export function brokerDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _brokerDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _brokerListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: BrokerListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BrokerResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
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
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              advanced: !p.properties?.advanced
                ? undefined
                : {
                    clients: !p.properties?.advanced?.clients
                      ? undefined
                      : {
                          maxSessionExpirySeconds:
                            p.properties?.advanced?.clients?.[
                              "maxSessionExpirySeconds"
                            ],
                          maxMessageExpirySeconds:
                            p.properties?.advanced?.clients?.[
                              "maxMessageExpirySeconds"
                            ],
                          maxPacketSizeBytes:
                            p.properties?.advanced?.clients?.[
                              "maxPacketSizeBytes"
                            ],
                          subscriberQueueLimit: !p.properties?.advanced?.clients
                            ?.subscriberQueueLimit
                            ? undefined
                            : {
                                length:
                                  p.properties?.advanced?.clients
                                    ?.subscriberQueueLimit?.["length"],
                                strategy:
                                  p.properties?.advanced?.clients
                                    ?.subscriberQueueLimit?.["strategy"],
                              },
                          maxReceiveMaximum:
                            p.properties?.advanced?.clients?.[
                              "maxReceiveMaximum"
                            ],
                          maxKeepAliveSeconds:
                            p.properties?.advanced?.clients?.[
                              "maxKeepAliveSeconds"
                            ],
                        },
                    encryptInternalTraffic:
                      p.properties?.advanced?.["encryptInternalTraffic"],
                    internalCerts: !p.properties?.advanced?.internalCerts
                      ? undefined
                      : {
                          duration:
                            p.properties?.advanced?.internalCerts?.["duration"],
                          renewBefore:
                            p.properties?.advanced?.internalCerts?.[
                              "renewBefore"
                            ],
                          privateKey: {
                            algorithm:
                              p.properties?.advanced?.internalCerts?.privateKey[
                                "algorithm"
                              ],
                            rotationPolicy:
                              p.properties?.advanced?.internalCerts?.privateKey[
                                "rotationPolicy"
                              ],
                          },
                        },
                  },
              cardinality: !p.properties?.cardinality
                ? undefined
                : {
                    backendChain: {
                      partitions:
                        p.properties?.cardinality?.backendChain["partitions"],
                      redundancyFactor:
                        p.properties?.cardinality?.backendChain[
                          "redundancyFactor"
                        ],
                      workers:
                        p.properties?.cardinality?.backendChain["workers"],
                    },
                    frontend: {
                      replicas: p.properties?.cardinality?.frontend["replicas"],
                      workers: p.properties?.cardinality?.frontend["workers"],
                    },
                  },
              diagnostics: !p.properties?.diagnostics
                ? undefined
                : {
                    logs: !p.properties?.diagnostics?.logs
                      ? undefined
                      : {
                          opentelemetryExportConfig: !p.properties?.diagnostics
                            ?.logs?.opentelemetryExportConfig
                            ? undefined
                            : {
                                otlpGrpcEndpoint:
                                  p.properties?.diagnostics?.logs
                                    ?.opentelemetryExportConfig?.[
                                    "otlpGrpcEndpoint"
                                  ],
                                intervalSeconds:
                                  p.properties?.diagnostics?.logs
                                    ?.opentelemetryExportConfig?.[
                                    "intervalSeconds"
                                  ],
                                level:
                                  p.properties?.diagnostics?.logs
                                    ?.opentelemetryExportConfig?.["level"],
                              },
                          level: p.properties?.diagnostics?.logs?.["level"],
                        },
                    metrics: !p.properties?.diagnostics?.metrics
                      ? undefined
                      : {
                          opentelemetryExportConfig: !p.properties?.diagnostics
                            ?.metrics?.opentelemetryExportConfig
                            ? undefined
                            : {
                                otlpGrpcEndpoint:
                                  p.properties?.diagnostics?.metrics
                                    ?.opentelemetryExportConfig?.[
                                    "otlpGrpcEndpoint"
                                  ],
                                intervalSeconds:
                                  p.properties?.diagnostics?.metrics
                                    ?.opentelemetryExportConfig?.[
                                    "intervalSeconds"
                                  ],
                              },
                          prometheusPort:
                            p.properties?.diagnostics?.metrics?.[
                              "prometheusPort"
                            ],
                        },
                    selfCheck: !p.properties?.diagnostics?.selfCheck
                      ? undefined
                      : {
                          mode: p.properties?.diagnostics?.selfCheck?.["mode"],
                          intervalSeconds:
                            p.properties?.diagnostics?.selfCheck?.[
                              "intervalSeconds"
                            ],
                          timeoutSeconds:
                            p.properties?.diagnostics?.selfCheck?.[
                              "timeoutSeconds"
                            ],
                        },
                    traces: !p.properties?.diagnostics?.traces
                      ? undefined
                      : {
                          mode: p.properties?.diagnostics?.traces?.["mode"],
                          opentelemetryExportConfig: !p.properties?.diagnostics
                            ?.traces?.opentelemetryExportConfig
                            ? undefined
                            : {
                                otlpGrpcEndpoint:
                                  p.properties?.diagnostics?.traces
                                    ?.opentelemetryExportConfig?.[
                                    "otlpGrpcEndpoint"
                                  ],
                                intervalSeconds:
                                  p.properties?.diagnostics?.traces
                                    ?.opentelemetryExportConfig?.[
                                    "intervalSeconds"
                                  ],
                              },
                          cacheSizeMegabytes:
                            p.properties?.diagnostics?.traces?.[
                              "cacheSizeMegabytes"
                            ],
                          selfTracing: !p.properties?.diagnostics?.traces
                            ?.selfTracing
                            ? undefined
                            : {
                                mode: p.properties?.diagnostics?.traces
                                  ?.selfTracing?.["mode"],
                                intervalSeconds:
                                  p.properties?.diagnostics?.traces
                                    ?.selfTracing?.["intervalSeconds"],
                              },
                          spanChannelCapacity:
                            p.properties?.diagnostics?.traces?.[
                              "spanChannelCapacity"
                            ],
                        },
                  },
              diskBackedMessageBuffer: !p.properties?.diskBackedMessageBuffer
                ? undefined
                : {
                    maxSize: p.properties?.diskBackedMessageBuffer?.["maxSize"],
                    ephemeralVolumeClaimSpec: !p.properties
                      ?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec
                      ? undefined
                      : {
                          volumeName:
                            p.properties?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.["volumeName"],
                          volumeMode:
                            p.properties?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.["volumeMode"],
                          storageClassName:
                            p.properties?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.["storageClassName"],
                          accessModes:
                            p.properties?.diskBackedMessageBuffer
                              ?.ephemeralVolumeClaimSpec?.["accessModes"],
                          dataSource: !p.properties?.diskBackedMessageBuffer
                            ?.ephemeralVolumeClaimSpec?.dataSource
                            ? undefined
                            : {
                                apiGroup:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.dataSource?.[
                                    "apiGroup"
                                  ],
                                kind: p.properties?.diskBackedMessageBuffer
                                  ?.ephemeralVolumeClaimSpec?.dataSource?.[
                                  "kind"
                                ],
                                name: p.properties?.diskBackedMessageBuffer
                                  ?.ephemeralVolumeClaimSpec?.dataSource?.[
                                  "name"
                                ],
                              },
                          dataSourceRef: !p.properties?.diskBackedMessageBuffer
                            ?.ephemeralVolumeClaimSpec?.dataSourceRef
                            ? undefined
                            : {
                                apiGroup:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                    "apiGroup"
                                  ],
                                kind: p.properties?.diskBackedMessageBuffer
                                  ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                  "kind"
                                ],
                                name: p.properties?.diskBackedMessageBuffer
                                  ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                  "name"
                                ],
                                namespace:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.dataSourceRef?.[
                                    "namespace"
                                  ],
                              },
                          resources: !p.properties?.diskBackedMessageBuffer
                            ?.ephemeralVolumeClaimSpec?.resources
                            ? undefined
                            : {
                                limits:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.resources?.[
                                    "limits"
                                  ],
                                requests:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.resources?.[
                                    "requests"
                                  ],
                              },
                          selector: !p.properties?.diskBackedMessageBuffer
                            ?.ephemeralVolumeClaimSpec?.selector
                            ? undefined
                            : {
                                matchExpressions:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ] === undefined
                                    ? p.properties?.diskBackedMessageBuffer
                                        ?.ephemeralVolumeClaimSpec?.selector?.[
                                        "matchExpressions"
                                      ]
                                    : p.properties?.diskBackedMessageBuffer?.ephemeralVolumeClaimSpec?.selector?.[
                                        "matchExpressions"
                                      ].map((p: any) => {
                                        return {
                                          key: p["key"],
                                          operator: p["operator"],
                                          values: p["values"],
                                        };
                                      }),
                                matchLabels:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.ephemeralVolumeClaimSpec?.selector?.[
                                    "matchLabels"
                                  ],
                              },
                        },
                    persistentVolumeClaimSpec: !p.properties
                      ?.diskBackedMessageBuffer?.persistentVolumeClaimSpec
                      ? undefined
                      : {
                          volumeName:
                            p.properties?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.["volumeName"],
                          volumeMode:
                            p.properties?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.["volumeMode"],
                          storageClassName:
                            p.properties?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.["storageClassName"],
                          accessModes:
                            p.properties?.diskBackedMessageBuffer
                              ?.persistentVolumeClaimSpec?.["accessModes"],
                          dataSource: !p.properties?.diskBackedMessageBuffer
                            ?.persistentVolumeClaimSpec?.dataSource
                            ? undefined
                            : {
                                apiGroup:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec?.dataSource?.[
                                    "apiGroup"
                                  ],
                                kind: p.properties?.diskBackedMessageBuffer
                                  ?.persistentVolumeClaimSpec?.dataSource?.[
                                  "kind"
                                ],
                                name: p.properties?.diskBackedMessageBuffer
                                  ?.persistentVolumeClaimSpec?.dataSource?.[
                                  "name"
                                ],
                              },
                          dataSourceRef: !p.properties?.diskBackedMessageBuffer
                            ?.persistentVolumeClaimSpec?.dataSourceRef
                            ? undefined
                            : {
                                apiGroup:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec
                                    ?.dataSourceRef?.["apiGroup"],
                                kind: p.properties?.diskBackedMessageBuffer
                                  ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                                  "kind"
                                ],
                                name: p.properties?.diskBackedMessageBuffer
                                  ?.persistentVolumeClaimSpec?.dataSourceRef?.[
                                  "name"
                                ],
                                namespace:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec
                                    ?.dataSourceRef?.["namespace"],
                              },
                          resources: !p.properties?.diskBackedMessageBuffer
                            ?.persistentVolumeClaimSpec?.resources
                            ? undefined
                            : {
                                limits:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec?.resources?.[
                                    "limits"
                                  ],
                                requests:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec?.resources?.[
                                    "requests"
                                  ],
                              },
                          selector: !p.properties?.diskBackedMessageBuffer
                            ?.persistentVolumeClaimSpec?.selector
                            ? undefined
                            : {
                                matchExpressions:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec?.selector?.[
                                    "matchExpressions"
                                  ] === undefined
                                    ? p.properties?.diskBackedMessageBuffer
                                        ?.persistentVolumeClaimSpec?.selector?.[
                                        "matchExpressions"
                                      ]
                                    : p.properties?.diskBackedMessageBuffer?.persistentVolumeClaimSpec?.selector?.[
                                        "matchExpressions"
                                      ].map((p: any) => {
                                        return {
                                          key: p["key"],
                                          operator: p["operator"],
                                          values: p["values"],
                                        };
                                      }),
                                matchLabels:
                                  p.properties?.diskBackedMessageBuffer
                                    ?.persistentVolumeClaimSpec?.selector?.[
                                    "matchLabels"
                                  ],
                              },
                        },
                  },
              generateResourceLimits: !p.properties?.generateResourceLimits
                ? undefined
                : { cpu: p.properties?.generateResourceLimits?.["cpu"] },
              memoryProfile: p.properties?.["memoryProfile"],
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List BrokerResource resources by InstanceResource */
export function brokerListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: BrokerListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BrokerResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        options,
      ),
    _brokerListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
