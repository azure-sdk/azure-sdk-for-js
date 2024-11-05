// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  dataflowEndpointPropertiesSerializer,
  extendedLocationSerializer,
  DataflowEndpointResource,
  _DataflowEndpointResourceListResult,
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
  DataflowEndpointGetOptionalParams,
  DataflowEndpointCreateOrUpdateOptionalParams,
  DataflowEndpointDeleteOptionalParams,
  DataflowEndpointListByResourceGroupOptionalParams,
} from "../../models/options.js";

export function _dataflowEndpointGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowEndpointName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowEndpointGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowEndpointResource> {
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
          endpointType: result.body.properties?.["endpointType"],
          dataExplorerSettings: !result.body.properties?.dataExplorerSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.dataExplorerSettings
                      ?.authentication["method"],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataExplorerSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataExplorerSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                },
                database:
                  result.body.properties?.dataExplorerSettings?.["database"],
                host: result.body.properties?.dataExplorerSettings?.["host"],
                batching: !result.body.properties?.dataExplorerSettings
                  ?.batching
                  ? undefined
                  : {
                      latencySeconds:
                        result.body.properties?.dataExplorerSettings
                          ?.batching?.["latencySeconds"],
                      maxMessages:
                        result.body.properties?.dataExplorerSettings
                          ?.batching?.["maxMessages"],
                    },
              },
          dataLakeStorageSettings: !result.body.properties
            ?.dataLakeStorageSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.dataLakeStorageSettings
                      ?.authentication["method"],
                  accessTokenSettings: !result.body.properties
                    ?.dataLakeStorageSettings?.authentication
                    .accessTokenSettings
                    ? undefined
                    : {
                        secretRef:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication.accessTokenSettings?.["secretRef"],
                      },
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataLakeStorageSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataLakeStorageSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                },
                host: result.body.properties?.dataLakeStorageSettings?.["host"],
                batching: !result.body.properties?.dataLakeStorageSettings
                  ?.batching
                  ? undefined
                  : {
                      latencySeconds:
                        result.body.properties?.dataLakeStorageSettings
                          ?.batching?.["latencySeconds"],
                      maxMessages:
                        result.body.properties?.dataLakeStorageSettings
                          ?.batching?.["maxMessages"],
                    },
              },
          fabricOneLakeSettings: !result.body.properties?.fabricOneLakeSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.fabricOneLakeSettings
                      ?.authentication["method"],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.fabricOneLakeSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.fabricOneLakeSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                },
                names: {
                  lakehouseName:
                    result.body.properties?.fabricOneLakeSettings?.names[
                      "lakehouseName"
                    ],
                  workspaceName:
                    result.body.properties?.fabricOneLakeSettings?.names[
                      "workspaceName"
                    ],
                },
                oneLakePathType:
                  result.body.properties?.fabricOneLakeSettings?.[
                    "oneLakePathType"
                  ],
                host: result.body.properties?.fabricOneLakeSettings?.["host"],
                batching: !result.body.properties?.fabricOneLakeSettings
                  ?.batching
                  ? undefined
                  : {
                      latencySeconds:
                        result.body.properties?.fabricOneLakeSettings
                          ?.batching?.["latencySeconds"],
                      maxMessages:
                        result.body.properties?.fabricOneLakeSettings
                          ?.batching?.["maxMessages"],
                    },
              },
          kafkaSettings: !result.body.properties?.kafkaSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.kafkaSettings?.authentication[
                      "method"
                    ],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.kafkaSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.kafkaSettings?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.kafkaSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.kafkaSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.kafkaSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.kafkaSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                  saslSettings: !result.body.properties?.kafkaSettings
                    ?.authentication.saslSettings
                    ? undefined
                    : {
                        saslType:
                          result.body.properties?.kafkaSettings?.authentication
                            .saslSettings?.["saslType"],
                        secretRef:
                          result.body.properties?.kafkaSettings?.authentication
                            .saslSettings?.["secretRef"],
                      },
                  x509CertificateSettings: !result.body.properties
                    ?.kafkaSettings?.authentication.x509CertificateSettings
                    ? undefined
                    : {
                        secretRef:
                          result.body.properties?.kafkaSettings?.authentication
                            .x509CertificateSettings?.["secretRef"],
                      },
                },
                consumerGroupId:
                  result.body.properties?.kafkaSettings?.["consumerGroupId"],
                host: result.body.properties?.kafkaSettings?.["host"],
                batching: !result.body.properties?.kafkaSettings?.batching
                  ? undefined
                  : {
                      mode: result.body.properties?.kafkaSettings?.batching?.[
                        "mode"
                      ],
                      latencyMs:
                        result.body.properties?.kafkaSettings?.batching?.[
                          "latencyMs"
                        ],
                      maxBytes:
                        result.body.properties?.kafkaSettings?.batching?.[
                          "maxBytes"
                        ],
                      maxMessages:
                        result.body.properties?.kafkaSettings?.batching?.[
                          "maxMessages"
                        ],
                    },
                copyMqttProperties:
                  result.body.properties?.kafkaSettings?.["copyMqttProperties"],
                compression:
                  result.body.properties?.kafkaSettings?.["compression"],
                kafkaAcks: result.body.properties?.kafkaSettings?.["kafkaAcks"],
                partitionStrategy:
                  result.body.properties?.kafkaSettings?.["partitionStrategy"],
                tls: !result.body.properties?.kafkaSettings?.tls
                  ? undefined
                  : {
                      mode: result.body.properties?.kafkaSettings?.tls?.[
                        "mode"
                      ],
                      trustedCaCertificateConfigMapRef:
                        result.body.properties?.kafkaSettings?.tls?.[
                          "trustedCaCertificateConfigMapRef"
                        ],
                    },
                cloudEventAttributes:
                  result.body.properties?.kafkaSettings?.[
                    "cloudEventAttributes"
                  ],
              },
          localStorageSettings: !result.body.properties?.localStorageSettings
            ? undefined
            : {
                persistentVolumeClaimRef:
                  result.body.properties?.localStorageSettings?.[
                    "persistentVolumeClaimRef"
                  ],
              },
          mqttSettings: !result.body.properties?.mqttSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.mqttSettings?.authentication[
                      "method"
                    ],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.mqttSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.mqttSettings?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.mqttSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.mqttSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.mqttSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.mqttSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                  serviceAccountTokenSettings: !result.body.properties
                    ?.mqttSettings?.authentication.serviceAccountTokenSettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.mqttSettings?.authentication
                            .serviceAccountTokenSettings?.["audience"],
                      },
                  x509CertificateSettings: !result.body.properties?.mqttSettings
                    ?.authentication.x509CertificateSettings
                    ? undefined
                    : {
                        secretRef:
                          result.body.properties?.mqttSettings?.authentication
                            .x509CertificateSettings?.["secretRef"],
                      },
                },
                clientIdPrefix:
                  result.body.properties?.mqttSettings?.["clientIdPrefix"],
                host: result.body.properties?.mqttSettings?.["host"],
                protocol: result.body.properties?.mqttSettings?.["protocol"],
                keepAliveSeconds:
                  result.body.properties?.mqttSettings?.["keepAliveSeconds"],
                retain: result.body.properties?.mqttSettings?.["retain"],
                maxInflightMessages:
                  result.body.properties?.mqttSettings?.["maxInflightMessages"],
                qos: result.body.properties?.mqttSettings?.["qos"],
                sessionExpirySeconds:
                  result.body.properties?.mqttSettings?.[
                    "sessionExpirySeconds"
                  ],
                tls: !result.body.properties?.mqttSettings?.tls
                  ? undefined
                  : {
                      mode: result.body.properties?.mqttSettings?.tls?.["mode"],
                      trustedCaCertificateConfigMapRef:
                        result.body.properties?.mqttSettings?.tls?.[
                          "trustedCaCertificateConfigMapRef"
                        ],
                    },
                cloudEventAttributes:
                  result.body.properties?.mqttSettings?.[
                    "cloudEventAttributes"
                  ],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Get a DataflowEndpointResource */
export async function dataflowEndpointGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointGetOptionalParams = { requestOptions: {} },
): Promise<DataflowEndpointResource> {
  const result = await _dataflowEndpointGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    dataflowEndpointName,
    options,
  );
  return _dataflowEndpointGetDeserialize(result);
}

export function _dataflowEndpointCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  resource: DataflowEndpointResource,
  options: DataflowEndpointCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowEndpointName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : dataflowEndpointPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _dataflowEndpointCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowEndpointResource> {
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
          endpointType: result.body.properties?.["endpointType"],
          dataExplorerSettings: !result.body.properties?.dataExplorerSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.dataExplorerSettings
                      ?.authentication["method"],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataExplorerSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataExplorerSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.dataExplorerSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                },
                database:
                  result.body.properties?.dataExplorerSettings?.["database"],
                host: result.body.properties?.dataExplorerSettings?.["host"],
                batching: !result.body.properties?.dataExplorerSettings
                  ?.batching
                  ? undefined
                  : {
                      latencySeconds:
                        result.body.properties?.dataExplorerSettings
                          ?.batching?.["latencySeconds"],
                      maxMessages:
                        result.body.properties?.dataExplorerSettings
                          ?.batching?.["maxMessages"],
                    },
              },
          dataLakeStorageSettings: !result.body.properties
            ?.dataLakeStorageSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.dataLakeStorageSettings
                      ?.authentication["method"],
                  accessTokenSettings: !result.body.properties
                    ?.dataLakeStorageSettings?.authentication
                    .accessTokenSettings
                    ? undefined
                    : {
                        secretRef:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication.accessTokenSettings?.["secretRef"],
                      },
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataLakeStorageSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.dataLakeStorageSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.dataLakeStorageSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                },
                host: result.body.properties?.dataLakeStorageSettings?.["host"],
                batching: !result.body.properties?.dataLakeStorageSettings
                  ?.batching
                  ? undefined
                  : {
                      latencySeconds:
                        result.body.properties?.dataLakeStorageSettings
                          ?.batching?.["latencySeconds"],
                      maxMessages:
                        result.body.properties?.dataLakeStorageSettings
                          ?.batching?.["maxMessages"],
                    },
              },
          fabricOneLakeSettings: !result.body.properties?.fabricOneLakeSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.fabricOneLakeSettings
                      ?.authentication["method"],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.fabricOneLakeSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.fabricOneLakeSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.fabricOneLakeSettings
                            ?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                },
                names: {
                  lakehouseName:
                    result.body.properties?.fabricOneLakeSettings?.names[
                      "lakehouseName"
                    ],
                  workspaceName:
                    result.body.properties?.fabricOneLakeSettings?.names[
                      "workspaceName"
                    ],
                },
                oneLakePathType:
                  result.body.properties?.fabricOneLakeSettings?.[
                    "oneLakePathType"
                  ],
                host: result.body.properties?.fabricOneLakeSettings?.["host"],
                batching: !result.body.properties?.fabricOneLakeSettings
                  ?.batching
                  ? undefined
                  : {
                      latencySeconds:
                        result.body.properties?.fabricOneLakeSettings
                          ?.batching?.["latencySeconds"],
                      maxMessages:
                        result.body.properties?.fabricOneLakeSettings
                          ?.batching?.["maxMessages"],
                    },
              },
          kafkaSettings: !result.body.properties?.kafkaSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.kafkaSettings?.authentication[
                      "method"
                    ],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.kafkaSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.kafkaSettings?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.kafkaSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.kafkaSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.kafkaSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.kafkaSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                  saslSettings: !result.body.properties?.kafkaSettings
                    ?.authentication.saslSettings
                    ? undefined
                    : {
                        saslType:
                          result.body.properties?.kafkaSettings?.authentication
                            .saslSettings?.["saslType"],
                        secretRef:
                          result.body.properties?.kafkaSettings?.authentication
                            .saslSettings?.["secretRef"],
                      },
                  x509CertificateSettings: !result.body.properties
                    ?.kafkaSettings?.authentication.x509CertificateSettings
                    ? undefined
                    : {
                        secretRef:
                          result.body.properties?.kafkaSettings?.authentication
                            .x509CertificateSettings?.["secretRef"],
                      },
                },
                consumerGroupId:
                  result.body.properties?.kafkaSettings?.["consumerGroupId"],
                host: result.body.properties?.kafkaSettings?.["host"],
                batching: !result.body.properties?.kafkaSettings?.batching
                  ? undefined
                  : {
                      mode: result.body.properties?.kafkaSettings?.batching?.[
                        "mode"
                      ],
                      latencyMs:
                        result.body.properties?.kafkaSettings?.batching?.[
                          "latencyMs"
                        ],
                      maxBytes:
                        result.body.properties?.kafkaSettings?.batching?.[
                          "maxBytes"
                        ],
                      maxMessages:
                        result.body.properties?.kafkaSettings?.batching?.[
                          "maxMessages"
                        ],
                    },
                copyMqttProperties:
                  result.body.properties?.kafkaSettings?.["copyMqttProperties"],
                compression:
                  result.body.properties?.kafkaSettings?.["compression"],
                kafkaAcks: result.body.properties?.kafkaSettings?.["kafkaAcks"],
                partitionStrategy:
                  result.body.properties?.kafkaSettings?.["partitionStrategy"],
                tls: !result.body.properties?.kafkaSettings?.tls
                  ? undefined
                  : {
                      mode: result.body.properties?.kafkaSettings?.tls?.[
                        "mode"
                      ],
                      trustedCaCertificateConfigMapRef:
                        result.body.properties?.kafkaSettings?.tls?.[
                          "trustedCaCertificateConfigMapRef"
                        ],
                    },
                cloudEventAttributes:
                  result.body.properties?.kafkaSettings?.[
                    "cloudEventAttributes"
                  ],
              },
          localStorageSettings: !result.body.properties?.localStorageSettings
            ? undefined
            : {
                persistentVolumeClaimRef:
                  result.body.properties?.localStorageSettings?.[
                    "persistentVolumeClaimRef"
                  ],
              },
          mqttSettings: !result.body.properties?.mqttSettings
            ? undefined
            : {
                authentication: {
                  method:
                    result.body.properties?.mqttSettings?.authentication[
                      "method"
                    ],
                  systemAssignedManagedIdentitySettings: !result.body.properties
                    ?.mqttSettings?.authentication
                    .systemAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.mqttSettings?.authentication
                            .systemAssignedManagedIdentitySettings?.[
                            "audience"
                          ],
                      },
                  userAssignedManagedIdentitySettings: !result.body.properties
                    ?.mqttSettings?.authentication
                    .userAssignedManagedIdentitySettings
                    ? undefined
                    : {
                        clientId:
                          result.body.properties?.mqttSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["clientId"],
                        scope:
                          result.body.properties?.mqttSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["scope"],
                        tenantId:
                          result.body.properties?.mqttSettings?.authentication
                            .userAssignedManagedIdentitySettings?.["tenantId"],
                      },
                  serviceAccountTokenSettings: !result.body.properties
                    ?.mqttSettings?.authentication.serviceAccountTokenSettings
                    ? undefined
                    : {
                        audience:
                          result.body.properties?.mqttSettings?.authentication
                            .serviceAccountTokenSettings?.["audience"],
                      },
                  x509CertificateSettings: !result.body.properties?.mqttSettings
                    ?.authentication.x509CertificateSettings
                    ? undefined
                    : {
                        secretRef:
                          result.body.properties?.mqttSettings?.authentication
                            .x509CertificateSettings?.["secretRef"],
                      },
                },
                clientIdPrefix:
                  result.body.properties?.mqttSettings?.["clientIdPrefix"],
                host: result.body.properties?.mqttSettings?.["host"],
                protocol: result.body.properties?.mqttSettings?.["protocol"],
                keepAliveSeconds:
                  result.body.properties?.mqttSettings?.["keepAliveSeconds"],
                retain: result.body.properties?.mqttSettings?.["retain"],
                maxInflightMessages:
                  result.body.properties?.mqttSettings?.["maxInflightMessages"],
                qos: result.body.properties?.mqttSettings?.["qos"],
                sessionExpirySeconds:
                  result.body.properties?.mqttSettings?.[
                    "sessionExpirySeconds"
                  ],
                tls: !result.body.properties?.mqttSettings?.tls
                  ? undefined
                  : {
                      mode: result.body.properties?.mqttSettings?.tls?.["mode"],
                      trustedCaCertificateConfigMapRef:
                        result.body.properties?.mqttSettings?.tls?.[
                          "trustedCaCertificateConfigMapRef"
                        ],
                    },
                cloudEventAttributes:
                  result.body.properties?.mqttSettings?.[
                    "cloudEventAttributes"
                  ],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Create a DataflowEndpointResource */
export function dataflowEndpointCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  resource: DataflowEndpointResource,
  options: DataflowEndpointCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<DataflowEndpointResource>,
  DataflowEndpointResource
> {
  return getLongRunningPoller(
    context,
    _dataflowEndpointCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataflowEndpointCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          dataflowEndpointName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<DataflowEndpointResource>,
    DataflowEndpointResource
  >;
}

export function _dataflowEndpointDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowEndpointName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowEndpointDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a DataflowEndpointResource */
export function dataflowEndpointDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowEndpointName: string,
  options: DataflowEndpointDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _dataflowEndpointDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataflowEndpointDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          dataflowEndpointName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _dataflowEndpointListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowEndpointListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowEndpointListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataflowEndpointResourceListResult> {
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
              endpointType: p.properties?.["endpointType"],
              dataExplorerSettings: !p.properties?.dataExplorerSettings
                ? undefined
                : {
                    authentication: {
                      method:
                        p.properties?.dataExplorerSettings?.authentication[
                          "method"
                        ],
                      systemAssignedManagedIdentitySettings: !p.properties
                        ?.dataExplorerSettings?.authentication
                        .systemAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            audience:
                              p.properties?.dataExplorerSettings?.authentication
                                .systemAssignedManagedIdentitySettings?.[
                                "audience"
                              ],
                          },
                      userAssignedManagedIdentitySettings: !p.properties
                        ?.dataExplorerSettings?.authentication
                        .userAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            clientId:
                              p.properties?.dataExplorerSettings?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "clientId"
                              ],
                            scope:
                              p.properties?.dataExplorerSettings?.authentication
                                .userAssignedManagedIdentitySettings?.["scope"],
                            tenantId:
                              p.properties?.dataExplorerSettings?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "tenantId"
                              ],
                          },
                    },
                    database: p.properties?.dataExplorerSettings?.["database"],
                    host: p.properties?.dataExplorerSettings?.["host"],
                    batching: !p.properties?.dataExplorerSettings?.batching
                      ? undefined
                      : {
                          latencySeconds:
                            p.properties?.dataExplorerSettings?.batching?.[
                              "latencySeconds"
                            ],
                          maxMessages:
                            p.properties?.dataExplorerSettings?.batching?.[
                              "maxMessages"
                            ],
                        },
                  },
              dataLakeStorageSettings: !p.properties?.dataLakeStorageSettings
                ? undefined
                : {
                    authentication: {
                      method:
                        p.properties?.dataLakeStorageSettings?.authentication[
                          "method"
                        ],
                      accessTokenSettings: !p.properties
                        ?.dataLakeStorageSettings?.authentication
                        .accessTokenSettings
                        ? undefined
                        : {
                            secretRef:
                              p.properties?.dataLakeStorageSettings
                                ?.authentication.accessTokenSettings?.[
                                "secretRef"
                              ],
                          },
                      systemAssignedManagedIdentitySettings: !p.properties
                        ?.dataLakeStorageSettings?.authentication
                        .systemAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            audience:
                              p.properties?.dataLakeStorageSettings
                                ?.authentication
                                .systemAssignedManagedIdentitySettings?.[
                                "audience"
                              ],
                          },
                      userAssignedManagedIdentitySettings: !p.properties
                        ?.dataLakeStorageSettings?.authentication
                        .userAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            clientId:
                              p.properties?.dataLakeStorageSettings
                                ?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "clientId"
                              ],
                            scope:
                              p.properties?.dataLakeStorageSettings
                                ?.authentication
                                .userAssignedManagedIdentitySettings?.["scope"],
                            tenantId:
                              p.properties?.dataLakeStorageSettings
                                ?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "tenantId"
                              ],
                          },
                    },
                    host: p.properties?.dataLakeStorageSettings?.["host"],
                    batching: !p.properties?.dataLakeStorageSettings?.batching
                      ? undefined
                      : {
                          latencySeconds:
                            p.properties?.dataLakeStorageSettings?.batching?.[
                              "latencySeconds"
                            ],
                          maxMessages:
                            p.properties?.dataLakeStorageSettings?.batching?.[
                              "maxMessages"
                            ],
                        },
                  },
              fabricOneLakeSettings: !p.properties?.fabricOneLakeSettings
                ? undefined
                : {
                    authentication: {
                      method:
                        p.properties?.fabricOneLakeSettings?.authentication[
                          "method"
                        ],
                      systemAssignedManagedIdentitySettings: !p.properties
                        ?.fabricOneLakeSettings?.authentication
                        .systemAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            audience:
                              p.properties?.fabricOneLakeSettings
                                ?.authentication
                                .systemAssignedManagedIdentitySettings?.[
                                "audience"
                              ],
                          },
                      userAssignedManagedIdentitySettings: !p.properties
                        ?.fabricOneLakeSettings?.authentication
                        .userAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            clientId:
                              p.properties?.fabricOneLakeSettings
                                ?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "clientId"
                              ],
                            scope:
                              p.properties?.fabricOneLakeSettings
                                ?.authentication
                                .userAssignedManagedIdentitySettings?.["scope"],
                            tenantId:
                              p.properties?.fabricOneLakeSettings
                                ?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "tenantId"
                              ],
                          },
                    },
                    names: {
                      lakehouseName:
                        p.properties?.fabricOneLakeSettings?.names[
                          "lakehouseName"
                        ],
                      workspaceName:
                        p.properties?.fabricOneLakeSettings?.names[
                          "workspaceName"
                        ],
                    },
                    oneLakePathType:
                      p.properties?.fabricOneLakeSettings?.["oneLakePathType"],
                    host: p.properties?.fabricOneLakeSettings?.["host"],
                    batching: !p.properties?.fabricOneLakeSettings?.batching
                      ? undefined
                      : {
                          latencySeconds:
                            p.properties?.fabricOneLakeSettings?.batching?.[
                              "latencySeconds"
                            ],
                          maxMessages:
                            p.properties?.fabricOneLakeSettings?.batching?.[
                              "maxMessages"
                            ],
                        },
                  },
              kafkaSettings: !p.properties?.kafkaSettings
                ? undefined
                : {
                    authentication: {
                      method:
                        p.properties?.kafkaSettings?.authentication["method"],
                      systemAssignedManagedIdentitySettings: !p.properties
                        ?.kafkaSettings?.authentication
                        .systemAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            audience:
                              p.properties?.kafkaSettings?.authentication
                                .systemAssignedManagedIdentitySettings?.[
                                "audience"
                              ],
                          },
                      userAssignedManagedIdentitySettings: !p.properties
                        ?.kafkaSettings?.authentication
                        .userAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            clientId:
                              p.properties?.kafkaSettings?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "clientId"
                              ],
                            scope:
                              p.properties?.kafkaSettings?.authentication
                                .userAssignedManagedIdentitySettings?.["scope"],
                            tenantId:
                              p.properties?.kafkaSettings?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "tenantId"
                              ],
                          },
                      saslSettings: !p.properties?.kafkaSettings?.authentication
                        .saslSettings
                        ? undefined
                        : {
                            saslType:
                              p.properties?.kafkaSettings?.authentication
                                .saslSettings?.["saslType"],
                            secretRef:
                              p.properties?.kafkaSettings?.authentication
                                .saslSettings?.["secretRef"],
                          },
                      x509CertificateSettings: !p.properties?.kafkaSettings
                        ?.authentication.x509CertificateSettings
                        ? undefined
                        : {
                            secretRef:
                              p.properties?.kafkaSettings?.authentication
                                .x509CertificateSettings?.["secretRef"],
                          },
                    },
                    consumerGroupId:
                      p.properties?.kafkaSettings?.["consumerGroupId"],
                    host: p.properties?.kafkaSettings?.["host"],
                    batching: !p.properties?.kafkaSettings?.batching
                      ? undefined
                      : {
                          mode: p.properties?.kafkaSettings?.batching?.["mode"],
                          latencyMs:
                            p.properties?.kafkaSettings?.batching?.[
                              "latencyMs"
                            ],
                          maxBytes:
                            p.properties?.kafkaSettings?.batching?.["maxBytes"],
                          maxMessages:
                            p.properties?.kafkaSettings?.batching?.[
                              "maxMessages"
                            ],
                        },
                    copyMqttProperties:
                      p.properties?.kafkaSettings?.["copyMqttProperties"],
                    compression: p.properties?.kafkaSettings?.["compression"],
                    kafkaAcks: p.properties?.kafkaSettings?.["kafkaAcks"],
                    partitionStrategy:
                      p.properties?.kafkaSettings?.["partitionStrategy"],
                    tls: !p.properties?.kafkaSettings?.tls
                      ? undefined
                      : {
                          mode: p.properties?.kafkaSettings?.tls?.["mode"],
                          trustedCaCertificateConfigMapRef:
                            p.properties?.kafkaSettings?.tls?.[
                              "trustedCaCertificateConfigMapRef"
                            ],
                        },
                    cloudEventAttributes:
                      p.properties?.kafkaSettings?.["cloudEventAttributes"],
                  },
              localStorageSettings: !p.properties?.localStorageSettings
                ? undefined
                : {
                    persistentVolumeClaimRef:
                      p.properties?.localStorageSettings?.[
                        "persistentVolumeClaimRef"
                      ],
                  },
              mqttSettings: !p.properties?.mqttSettings
                ? undefined
                : {
                    authentication: {
                      method:
                        p.properties?.mqttSettings?.authentication["method"],
                      systemAssignedManagedIdentitySettings: !p.properties
                        ?.mqttSettings?.authentication
                        .systemAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            audience:
                              p.properties?.mqttSettings?.authentication
                                .systemAssignedManagedIdentitySettings?.[
                                "audience"
                              ],
                          },
                      userAssignedManagedIdentitySettings: !p.properties
                        ?.mqttSettings?.authentication
                        .userAssignedManagedIdentitySettings
                        ? undefined
                        : {
                            clientId:
                              p.properties?.mqttSettings?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "clientId"
                              ],
                            scope:
                              p.properties?.mqttSettings?.authentication
                                .userAssignedManagedIdentitySettings?.["scope"],
                            tenantId:
                              p.properties?.mqttSettings?.authentication
                                .userAssignedManagedIdentitySettings?.[
                                "tenantId"
                              ],
                          },
                      serviceAccountTokenSettings: !p.properties?.mqttSettings
                        ?.authentication.serviceAccountTokenSettings
                        ? undefined
                        : {
                            audience:
                              p.properties?.mqttSettings?.authentication
                                .serviceAccountTokenSettings?.["audience"],
                          },
                      x509CertificateSettings: !p.properties?.mqttSettings
                        ?.authentication.x509CertificateSettings
                        ? undefined
                        : {
                            secretRef:
                              p.properties?.mqttSettings?.authentication
                                .x509CertificateSettings?.["secretRef"],
                          },
                    },
                    clientIdPrefix:
                      p.properties?.mqttSettings?.["clientIdPrefix"],
                    host: p.properties?.mqttSettings?.["host"],
                    protocol: p.properties?.mqttSettings?.["protocol"],
                    keepAliveSeconds:
                      p.properties?.mqttSettings?.["keepAliveSeconds"],
                    retain: p.properties?.mqttSettings?.["retain"],
                    maxInflightMessages:
                      p.properties?.mqttSettings?.["maxInflightMessages"],
                    qos: p.properties?.mqttSettings?.["qos"],
                    sessionExpirySeconds:
                      p.properties?.mqttSettings?.["sessionExpirySeconds"],
                    tls: !p.properties?.mqttSettings?.tls
                      ? undefined
                      : {
                          mode: p.properties?.mqttSettings?.tls?.["mode"],
                          trustedCaCertificateConfigMapRef:
                            p.properties?.mqttSettings?.tls?.[
                              "trustedCaCertificateConfigMapRef"
                            ],
                        },
                    cloudEventAttributes:
                      p.properties?.mqttSettings?.["cloudEventAttributes"],
                  },
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

/** List DataflowEndpointResource resources by InstanceResource */
export function dataflowEndpointListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowEndpointListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataflowEndpointResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataflowEndpointListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        options,
      ),
    _dataflowEndpointListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
