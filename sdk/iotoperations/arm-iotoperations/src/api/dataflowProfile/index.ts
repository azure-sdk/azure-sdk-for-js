// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  dataflowProfilePropertiesSerializer,
  DataflowProfileResource,
  _DataflowProfileResourceListResult,
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
  DataflowProfileGetOptionalParams,
  DataflowProfileCreateOrUpdateOptionalParams,
  DataflowProfileDeleteOptionalParams,
  DataflowProfileListByResourceGroupOptionalParams,
} from "../../models/options.js";

export function _dataflowProfileGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowProfileGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowProfileResource> {
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
              },
          instanceCount: result.body.properties?.["instanceCount"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Get a DataflowProfileResource */
export async function dataflowProfileGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileGetOptionalParams = { requestOptions: {} },
): Promise<DataflowProfileResource> {
  const result = await _dataflowProfileGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    dataflowProfileName,
    options,
  );
  return _dataflowProfileGetDeserialize(result);
}

export function _dataflowProfileCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  resource: DataflowProfileResource,
  options: DataflowProfileCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : dataflowProfilePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _dataflowProfileCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowProfileResource> {
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
              },
          instanceCount: result.body.properties?.["instanceCount"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Create a DataflowProfileResource */
export function dataflowProfileCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  resource: DataflowProfileResource,
  options: DataflowProfileCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<DataflowProfileResource>,
  DataflowProfileResource
> {
  return getLongRunningPoller(
    context,
    _dataflowProfileCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataflowProfileCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          dataflowProfileName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<DataflowProfileResource>,
    DataflowProfileResource
  >;
}

export function _dataflowProfileDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowProfileDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a DataflowProfileResource */
export function dataflowProfileDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowProfileDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _dataflowProfileDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataflowProfileDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          dataflowProfileName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _dataflowProfileListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowProfileListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowProfileListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataflowProfileResourceListResult> {
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
                  },
              instanceCount: p.properties?.["instanceCount"],
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

/** List DataflowProfileResource resources by InstanceResource */
export function dataflowProfileListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: DataflowProfileListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataflowProfileResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataflowProfileListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        options,
      ),
    _dataflowProfileListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
