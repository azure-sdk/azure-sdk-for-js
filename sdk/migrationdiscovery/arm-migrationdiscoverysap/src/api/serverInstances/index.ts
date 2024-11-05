// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  serverInstancePropertiesSerializer,
  ServerInstance,
  UpdateServerInstanceRequest,
  _ServerInstanceListResult,
} from "../../models/models.js";
import { WorkloadsContext as Client } from "../index.js";
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
  ServerInstancesGetOptionalParams,
  ServerInstancesCreateOptionalParams,
  ServerInstancesUpdateOptionalParams,
  ServerInstancesDeleteOptionalParams,
  ServerInstancesListBySapInstanceOptionalParams,
} from "../../models/options.js";

export function _serverInstancesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
      serverInstanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerInstance> {
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
          serverName: result.body.properties?.["serverName"],
          sapInstanceType: result.body.properties?.["sapInstanceType"],
          instanceSid: result.body.properties?.["instanceSid"],
          sapProduct: result.body.properties?.["sapProduct"],
          sapProductVersion: result.body.properties?.["sapProductVersion"],
          operatingSystem: result.body.properties?.["operatingSystem"],
          configurationData: !result.body.properties?.configurationData
            ? undefined
            : {
                saps: result.body.properties?.configurationData?.["saps"],
                cpu: result.body.properties?.configurationData?.["cpu"],
                cpuType: result.body.properties?.configurationData?.["cpuType"],
                cpuInMhz:
                  result.body.properties?.configurationData?.["cpuInMhz"],
                ram: result.body.properties?.configurationData?.["ram"],
                hardwareManufacturer:
                  result.body.properties?.configurationData?.[
                    "hardwareManufacturer"
                  ],
                model: result.body.properties?.configurationData?.["model"],
                totalDiskSizeGB:
                  result.body.properties?.configurationData?.[
                    "totalDiskSizeGB"
                  ],
                totalDiskIops:
                  result.body.properties?.configurationData?.["totalDiskIops"],
                databaseType:
                  result.body.properties?.configurationData?.["databaseType"],
                targetHanaRamSizeGB:
                  result.body.properties?.configurationData?.[
                    "targetHanaRamSizeGB"
                  ],
              },
          performanceData: !result.body.properties?.performanceData
            ? undefined
            : {
                dataSource:
                  result.body.properties?.performanceData?.["dataSource"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
          errors: !result.body.properties?.errors
            ? undefined
            : {
                properties: !result.body.properties?.errors?.properties
                  ? undefined
                  : {
                      code: result.body.properties?.errors?.properties?.[
                        "code"
                      ],
                      message:
                        result.body.properties?.errors?.properties?.["message"],
                      recommendation:
                        result.body.properties?.errors?.properties?.[
                          "recommendation"
                        ],
                      details:
                        result.body.properties?.errors?.properties?.[
                          "details"
                        ] === undefined
                          ? result.body.properties?.errors?.properties?.[
                              "details"
                            ]
                          : result.body.properties?.errors?.properties?.[
                              "details"
                            ].map((p: any) => {
                              return {
                                code: p["code"],
                                message: p["message"],
                                recommendation: p["recommendation"],
                                details: !p.details ? undefined : p.details,
                              };
                            }),
                    },
              },
        },
  };
}

/** Gets the Server Instance resource. */
export async function serverInstancesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesGetOptionalParams = { requestOptions: {} },
): Promise<ServerInstance> {
  const result = await _serverInstancesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    serverInstanceName,
    options,
  );
  return _serverInstancesGetDeserialize(result);
}

export function _serverInstancesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  resource: ServerInstance,
  options: ServerInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
      serverInstanceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : serverInstancePropertiesSerializer(resource.properties),
      },
    });
}

export async function _serverInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerInstance> {
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
          serverName: result.body.properties?.["serverName"],
          sapInstanceType: result.body.properties?.["sapInstanceType"],
          instanceSid: result.body.properties?.["instanceSid"],
          sapProduct: result.body.properties?.["sapProduct"],
          sapProductVersion: result.body.properties?.["sapProductVersion"],
          operatingSystem: result.body.properties?.["operatingSystem"],
          configurationData: !result.body.properties?.configurationData
            ? undefined
            : {
                saps: result.body.properties?.configurationData?.["saps"],
                cpu: result.body.properties?.configurationData?.["cpu"],
                cpuType: result.body.properties?.configurationData?.["cpuType"],
                cpuInMhz:
                  result.body.properties?.configurationData?.["cpuInMhz"],
                ram: result.body.properties?.configurationData?.["ram"],
                hardwareManufacturer:
                  result.body.properties?.configurationData?.[
                    "hardwareManufacturer"
                  ],
                model: result.body.properties?.configurationData?.["model"],
                totalDiskSizeGB:
                  result.body.properties?.configurationData?.[
                    "totalDiskSizeGB"
                  ],
                totalDiskIops:
                  result.body.properties?.configurationData?.["totalDiskIops"],
                databaseType:
                  result.body.properties?.configurationData?.["databaseType"],
                targetHanaRamSizeGB:
                  result.body.properties?.configurationData?.[
                    "targetHanaRamSizeGB"
                  ],
              },
          performanceData: !result.body.properties?.performanceData
            ? undefined
            : {
                dataSource:
                  result.body.properties?.performanceData?.["dataSource"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
          errors: !result.body.properties?.errors
            ? undefined
            : {
                properties: !result.body.properties?.errors?.properties
                  ? undefined
                  : {
                      code: result.body.properties?.errors?.properties?.[
                        "code"
                      ],
                      message:
                        result.body.properties?.errors?.properties?.["message"],
                      recommendation:
                        result.body.properties?.errors?.properties?.[
                          "recommendation"
                        ],
                      details:
                        result.body.properties?.errors?.properties?.[
                          "details"
                        ] === undefined
                          ? result.body.properties?.errors?.properties?.[
                              "details"
                            ]
                          : result.body.properties?.errors?.properties?.[
                              "details"
                            ].map((p: any) => {
                              return {
                                code: p["code"],
                                message: p["message"],
                                recommendation: p["recommendation"],
                                details: !p.details ? undefined : p.details,
                              };
                            }),
                    },
              },
        },
  };
}

/** Creates the Server Instance resource. <br><br>;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
export function serverInstancesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  resource: ServerInstance,
  options: ServerInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ServerInstance>, ServerInstance> {
  return getLongRunningPoller(
    context,
    _serverInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _serverInstancesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          sapDiscoverySiteName,
          sapInstanceName,
          serverInstanceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<ServerInstance>, ServerInstance>;
}

export function _serverInstancesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  properties: UpdateServerInstanceRequest,
  options: ServerInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
      serverInstanceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : serverInstancePropertiesSerializer(properties.properties),
      },
    });
}

export async function _serverInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerInstance> {
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
          serverName: result.body.properties?.["serverName"],
          sapInstanceType: result.body.properties?.["sapInstanceType"],
          instanceSid: result.body.properties?.["instanceSid"],
          sapProduct: result.body.properties?.["sapProduct"],
          sapProductVersion: result.body.properties?.["sapProductVersion"],
          operatingSystem: result.body.properties?.["operatingSystem"],
          configurationData: !result.body.properties?.configurationData
            ? undefined
            : {
                saps: result.body.properties?.configurationData?.["saps"],
                cpu: result.body.properties?.configurationData?.["cpu"],
                cpuType: result.body.properties?.configurationData?.["cpuType"],
                cpuInMhz:
                  result.body.properties?.configurationData?.["cpuInMhz"],
                ram: result.body.properties?.configurationData?.["ram"],
                hardwareManufacturer:
                  result.body.properties?.configurationData?.[
                    "hardwareManufacturer"
                  ],
                model: result.body.properties?.configurationData?.["model"],
                totalDiskSizeGB:
                  result.body.properties?.configurationData?.[
                    "totalDiskSizeGB"
                  ],
                totalDiskIops:
                  result.body.properties?.configurationData?.["totalDiskIops"],
                databaseType:
                  result.body.properties?.configurationData?.["databaseType"],
                targetHanaRamSizeGB:
                  result.body.properties?.configurationData?.[
                    "targetHanaRamSizeGB"
                  ],
              },
          performanceData: !result.body.properties?.performanceData
            ? undefined
            : {
                dataSource:
                  result.body.properties?.performanceData?.["dataSource"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
          errors: !result.body.properties?.errors
            ? undefined
            : {
                properties: !result.body.properties?.errors?.properties
                  ? undefined
                  : {
                      code: result.body.properties?.errors?.properties?.[
                        "code"
                      ],
                      message:
                        result.body.properties?.errors?.properties?.["message"],
                      recommendation:
                        result.body.properties?.errors?.properties?.[
                          "recommendation"
                        ],
                      details:
                        result.body.properties?.errors?.properties?.[
                          "details"
                        ] === undefined
                          ? result.body.properties?.errors?.properties?.[
                              "details"
                            ]
                          : result.body.properties?.errors?.properties?.[
                              "details"
                            ].map((p: any) => {
                              return {
                                code: p["code"],
                                message: p["message"],
                                recommendation: p["recommendation"],
                                details: !p.details ? undefined : p.details,
                              };
                            }),
                    },
              },
        },
  };
}

/** Updates the Server Instance resource. This operation on a resource by end user will return a Bad Request error. */
export async function serverInstancesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  properties: UpdateServerInstanceRequest,
  options: ServerInstancesUpdateOptionalParams = { requestOptions: {} },
): Promise<ServerInstance> {
  const result = await _serverInstancesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    serverInstanceName,
    properties,
    options,
  );
  return _serverInstancesUpdateDeserialize(result);
}

export function _serverInstancesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
      serverInstanceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes the Server Instance resource. <br><br>;This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
export function serverInstancesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _serverInstancesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _serverInstancesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          sapDiscoverySiteName,
          sapInstanceName,
          serverInstanceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _serverInstancesListBySapInstanceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: ServerInstancesListBySapInstanceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverInstancesListBySapInstanceDeserialize(
  result: PathUncheckedResponse,
): Promise<_ServerInstanceListResult> {
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
              serverName: p.properties?.["serverName"],
              sapInstanceType: p.properties?.["sapInstanceType"],
              instanceSid: p.properties?.["instanceSid"],
              sapProduct: p.properties?.["sapProduct"],
              sapProductVersion: p.properties?.["sapProductVersion"],
              operatingSystem: p.properties?.["operatingSystem"],
              configurationData: !p.properties?.configurationData
                ? undefined
                : {
                    saps: p.properties?.configurationData?.["saps"],
                    cpu: p.properties?.configurationData?.["cpu"],
                    cpuType: p.properties?.configurationData?.["cpuType"],
                    cpuInMhz: p.properties?.configurationData?.["cpuInMhz"],
                    ram: p.properties?.configurationData?.["ram"],
                    hardwareManufacturer:
                      p.properties?.configurationData?.["hardwareManufacturer"],
                    model: p.properties?.configurationData?.["model"],
                    totalDiskSizeGB:
                      p.properties?.configurationData?.["totalDiskSizeGB"],
                    totalDiskIops:
                      p.properties?.configurationData?.["totalDiskIops"],
                    databaseType:
                      p.properties?.configurationData?.["databaseType"],
                    targetHanaRamSizeGB:
                      p.properties?.configurationData?.["targetHanaRamSizeGB"],
                  },
              performanceData: !p.properties?.performanceData
                ? undefined
                : { dataSource: p.properties?.performanceData?.["dataSource"] },
              provisioningState: p.properties?.["provisioningState"],
              errors: !p.properties?.errors
                ? undefined
                : {
                    properties: !p.properties?.errors?.properties
                      ? undefined
                      : {
                          code: p.properties?.errors?.properties?.["code"],
                          message:
                            p.properties?.errors?.properties?.["message"],
                          recommendation:
                            p.properties?.errors?.properties?.[
                              "recommendation"
                            ],
                          details:
                            p.properties?.errors?.properties?.["details"] ===
                            undefined
                              ? p.properties?.errors?.properties?.["details"]
                              : p.properties?.errors?.properties?.[
                                  "details"
                                ].map((p: any) => {
                                  return {
                                    code: p["code"],
                                    message: p["message"],
                                    recommendation: p["recommendation"],
                                    details: !p.details ? undefined : p.details,
                                  };
                                }),
                        },
                  },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the Server Instance resources for the given SAP Instance resource. */
export function serverInstancesListBySapInstance(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: ServerInstancesListBySapInstanceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ServerInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _serverInstancesListBySapInstanceSend(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        options,
      ),
    _serverInstancesListBySapInstanceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
