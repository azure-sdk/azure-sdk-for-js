// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DbServer, _DbServerListResult } from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
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
import {
  DbServersGetOptionalParams,
  DbServersListByCloudExadataInfrastructureOptionalParams,
} from "../../models/options.js";

export function _dbServersGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers/{dbserverocid}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
      dbserverocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbServersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DbServer> {
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
          ocid: result.body.properties?.["ocid"],
          displayName: result.body.properties?.["displayName"],
          compartmentId: result.body.properties?.["compartmentId"],
          exadataInfrastructureId:
            result.body.properties?.["exadataInfrastructureId"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          dbServerPatchingDetails: !result.body.properties
            ?.dbServerPatchingDetails
            ? undefined
            : {
                estimatedPatchDuration:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "estimatedPatchDuration"
                  ],
                patchingStatus:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "patchingStatus"
                  ],
                timePatchingEnded:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "timePatchingEnded"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.dbServerPatchingDetails?.[
                          "timePatchingEnded"
                        ],
                      )
                    : undefined,
                timePatchingStarted:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "timePatchingStarted"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.dbServerPatchingDetails?.[
                          "timePatchingStarted"
                        ],
                      )
                    : undefined,
              },
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          vmClusterIds: result.body.properties?.["vmClusterIds"],
          dbNodeIds: result.body.properties?.["dbNodeIds"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          autonomousVmClusterIds:
            result.body.properties?.["autonomousVmClusterIds"],
          autonomousVirtualMachineIds:
            result.body.properties?.["autonomousVirtualMachineIds"],
          maxDbNodeStorageInGbs:
            result.body.properties?.["maxDbNodeStorageInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          shape: result.body.properties?.["shape"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DbServer */
export async function dbServersGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): Promise<DbServer> {
  const result = await _dbServersGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudexadatainfrastructurename,
    dbserverocid,
    options,
  );
  return _dbServersGetDeserialize(result);
}

export function _dbServersListByCloudExadataInfrastructureSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: DbServersListByCloudExadataInfrastructureOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbServersListByCloudExadataInfrastructureDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbServerListResult> {
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
              ocid: p.properties?.["ocid"],
              displayName: p.properties?.["displayName"],
              compartmentId: p.properties?.["compartmentId"],
              exadataInfrastructureId:
                p.properties?.["exadataInfrastructureId"],
              cpuCoreCount: p.properties?.["cpuCoreCount"],
              dbServerPatchingDetails: !p.properties?.dbServerPatchingDetails
                ? undefined
                : {
                    estimatedPatchDuration:
                      p.properties?.dbServerPatchingDetails?.[
                        "estimatedPatchDuration"
                      ],
                    patchingStatus:
                      p.properties?.dbServerPatchingDetails?.["patchingStatus"],
                    timePatchingEnded:
                      p.properties?.dbServerPatchingDetails?.[
                        "timePatchingEnded"
                      ] !== undefined
                        ? new Date(
                            p.properties?.dbServerPatchingDetails?.[
                              "timePatchingEnded"
                            ],
                          )
                        : undefined,
                    timePatchingStarted:
                      p.properties?.dbServerPatchingDetails?.[
                        "timePatchingStarted"
                      ] !== undefined
                        ? new Date(
                            p.properties?.dbServerPatchingDetails?.[
                              "timePatchingStarted"
                            ],
                          )
                        : undefined,
                  },
              maxMemoryInGbs: p.properties?.["maxMemoryInGbs"],
              dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
              vmClusterIds: p.properties?.["vmClusterIds"],
              dbNodeIds: p.properties?.["dbNodeIds"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              lifecycleState: p.properties?.["lifecycleState"],
              maxCpuCount: p.properties?.["maxCpuCount"],
              autonomousVmClusterIds: p.properties?.["autonomousVmClusterIds"],
              autonomousVirtualMachineIds:
                p.properties?.["autonomousVirtualMachineIds"],
              maxDbNodeStorageInGbs: p.properties?.["maxDbNodeStorageInGbs"],
              memorySizeInGbs: p.properties?.["memorySizeInGbs"],
              shape: p.properties?.["shape"],
              timeCreated:
                p.properties?.["timeCreated"] !== undefined
                  ? new Date(p.properties?.["timeCreated"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List DbServer resources by CloudExadataInfrastructure */
export function dbServersListByCloudExadataInfrastructure(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: DbServersListByCloudExadataInfrastructureOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DbServer> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dbServersListByCloudExadataInfrastructureSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    _dbServersListByCloudExadataInfrastructureDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
