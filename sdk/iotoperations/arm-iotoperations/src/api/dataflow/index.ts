// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  dataflowPropertiesSerializer,
  DataflowResource,
  _DataflowResourceListResult,
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
  DataflowGetOptionalParams,
  DataflowCreateOrUpdateOptionalParams,
  DataflowDeleteOptionalParams,
  DataflowListByResourceGroupOptionalParams,
} from "../../models/options.js";

export function _dataflowGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
      dataflowName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowResource> {
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
          mode: result.body.properties?.["mode"],
          operations: result.body.properties?.["operations"].map((p: any) => {
            return {
              operationType: p["operationType"],
              name: p["name"],
              sourceSettings: !p.sourceSettings
                ? undefined
                : {
                    endpointRef: p.sourceSettings?.["endpointRef"],
                    assetRef: p.sourceSettings?.["assetRef"],
                    serializationFormat:
                      p.sourceSettings?.["serializationFormat"],
                    schemaRef: p.sourceSettings?.["schemaRef"],
                    dataSources: p.sourceSettings?.["dataSources"],
                  },
              builtInTransformationSettings: !p.builtInTransformationSettings
                ? undefined
                : {
                    serializationFormat:
                      p.builtInTransformationSettings?.["serializationFormat"],
                    schemaRef: p.builtInTransformationSettings?.["schemaRef"],
                    datasets:
                      p.builtInTransformationSettings?.["datasets"] ===
                      undefined
                        ? p.builtInTransformationSettings?.["datasets"]
                        : p.builtInTransformationSettings?.["datasets"].map(
                            (p: any) => {
                              return {
                                key: p["key"],
                                description: p["description"],
                                schemaRef: p["schemaRef"],
                                inputs: p["inputs"],
                                expression: p["expression"],
                              };
                            },
                          ),
                    filter:
                      p.builtInTransformationSettings?.["filter"] === undefined
                        ? p.builtInTransformationSettings?.["filter"]
                        : p.builtInTransformationSettings?.["filter"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                description: p["description"],
                                inputs: p["inputs"],
                                expression: p["expression"],
                              };
                            },
                          ),
                    map:
                      p.builtInTransformationSettings?.["map"] === undefined
                        ? p.builtInTransformationSettings?.["map"]
                        : p.builtInTransformationSettings?.["map"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                description: p["description"],
                                inputs: p["inputs"],
                                expression: p["expression"],
                                output: p["output"],
                              };
                            },
                          ),
                  },
              destinationSettings: !p.destinationSettings
                ? undefined
                : {
                    endpointRef: p.destinationSettings?.["endpointRef"],
                    dataDestination: p.destinationSettings?.["dataDestination"],
                  },
            };
          }),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Get a DataflowResource */
export async function dataflowGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowGetOptionalParams = { requestOptions: {} },
): Promise<DataflowResource> {
  const result = await _dataflowGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    dataflowProfileName,
    dataflowName,
    options,
  );
  return _dataflowGetDeserialize(result);
}

export function _dataflowCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  resource: DataflowResource,
  options: DataflowCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
      dataflowName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : dataflowPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _dataflowCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataflowResource> {
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
          mode: result.body.properties?.["mode"],
          operations: result.body.properties?.["operations"].map((p: any) => {
            return {
              operationType: p["operationType"],
              name: p["name"],
              sourceSettings: !p.sourceSettings
                ? undefined
                : {
                    endpointRef: p.sourceSettings?.["endpointRef"],
                    assetRef: p.sourceSettings?.["assetRef"],
                    serializationFormat:
                      p.sourceSettings?.["serializationFormat"],
                    schemaRef: p.sourceSettings?.["schemaRef"],
                    dataSources: p.sourceSettings?.["dataSources"],
                  },
              builtInTransformationSettings: !p.builtInTransformationSettings
                ? undefined
                : {
                    serializationFormat:
                      p.builtInTransformationSettings?.["serializationFormat"],
                    schemaRef: p.builtInTransformationSettings?.["schemaRef"],
                    datasets:
                      p.builtInTransformationSettings?.["datasets"] ===
                      undefined
                        ? p.builtInTransformationSettings?.["datasets"]
                        : p.builtInTransformationSettings?.["datasets"].map(
                            (p: any) => {
                              return {
                                key: p["key"],
                                description: p["description"],
                                schemaRef: p["schemaRef"],
                                inputs: p["inputs"],
                                expression: p["expression"],
                              };
                            },
                          ),
                    filter:
                      p.builtInTransformationSettings?.["filter"] === undefined
                        ? p.builtInTransformationSettings?.["filter"]
                        : p.builtInTransformationSettings?.["filter"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                description: p["description"],
                                inputs: p["inputs"],
                                expression: p["expression"],
                              };
                            },
                          ),
                    map:
                      p.builtInTransformationSettings?.["map"] === undefined
                        ? p.builtInTransformationSettings?.["map"]
                        : p.builtInTransformationSettings?.["map"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                description: p["description"],
                                inputs: p["inputs"],
                                expression: p["expression"],
                                output: p["output"],
                              };
                            },
                          ),
                  },
              destinationSettings: !p.destinationSettings
                ? undefined
                : {
                    endpointRef: p.destinationSettings?.["endpointRef"],
                    dataDestination: p.destinationSettings?.["dataDestination"],
                  },
            };
          }),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Create a DataflowResource */
export function dataflowCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  resource: DataflowResource,
  options: DataflowCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataflowResource>, DataflowResource> {
  return getLongRunningPoller(
    context,
    _dataflowCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataflowCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          dataflowProfileName,
          dataflowName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<DataflowResource>, DataflowResource>;
}

export function _dataflowDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
      dataflowName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a DataflowResource */
export function dataflowDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  dataflowName: string,
  options: DataflowDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _dataflowDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataflowDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          dataflowProfileName,
          dataflowName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _dataflowListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows",
      subscriptionId,
      resourceGroupName,
      instanceName,
      dataflowProfileName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataflowListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataflowResourceListResult> {
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
              mode: p.properties?.["mode"],
              operations: p.properties?.["operations"].map((p: any) => {
                return {
                  operationType: p["operationType"],
                  name: p["name"],
                  sourceSettings: !p.sourceSettings
                    ? undefined
                    : {
                        endpointRef: p.sourceSettings?.["endpointRef"],
                        assetRef: p.sourceSettings?.["assetRef"],
                        serializationFormat:
                          p.sourceSettings?.["serializationFormat"],
                        schemaRef: p.sourceSettings?.["schemaRef"],
                        dataSources: p.sourceSettings?.["dataSources"],
                      },
                  builtInTransformationSettings:
                    !p.builtInTransformationSettings
                      ? undefined
                      : {
                          serializationFormat:
                            p.builtInTransformationSettings?.[
                              "serializationFormat"
                            ],
                          schemaRef:
                            p.builtInTransformationSettings?.["schemaRef"],
                          datasets:
                            p.builtInTransformationSettings?.["datasets"] ===
                            undefined
                              ? p.builtInTransformationSettings?.["datasets"]
                              : p.builtInTransformationSettings?.[
                                  "datasets"
                                ].map((p: any) => {
                                  return {
                                    key: p["key"],
                                    description: p["description"],
                                    schemaRef: p["schemaRef"],
                                    inputs: p["inputs"],
                                    expression: p["expression"],
                                  };
                                }),
                          filter:
                            p.builtInTransformationSettings?.["filter"] ===
                            undefined
                              ? p.builtInTransformationSettings?.["filter"]
                              : p.builtInTransformationSettings?.["filter"].map(
                                  (p: any) => {
                                    return {
                                      type: p["type"],
                                      description: p["description"],
                                      inputs: p["inputs"],
                                      expression: p["expression"],
                                    };
                                  },
                                ),
                          map:
                            p.builtInTransformationSettings?.["map"] ===
                            undefined
                              ? p.builtInTransformationSettings?.["map"]
                              : p.builtInTransformationSettings?.["map"].map(
                                  (p: any) => {
                                    return {
                                      type: p["type"],
                                      description: p["description"],
                                      inputs: p["inputs"],
                                      expression: p["expression"],
                                      output: p["output"],
                                    };
                                  },
                                ),
                        },
                  destinationSettings: !p.destinationSettings
                    ? undefined
                    : {
                        endpointRef: p.destinationSettings?.["endpointRef"],
                        dataDestination:
                          p.destinationSettings?.["dataDestination"],
                      },
                };
              }),
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

/** List DataflowResource resources by DataflowProfileResource */
export function dataflowListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  dataflowProfileName: string,
  options: DataflowListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DataflowResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataflowListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        dataflowProfileName,
        options,
      ),
    _dataflowListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
