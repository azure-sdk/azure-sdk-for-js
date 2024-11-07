// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DbNode,
  DbNodeAction,
  _DbNodeListResult,
} from "../../models/models.js";
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
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DbNodesGetOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
  DbNodesActionOptionalParams,
} from "../../models/options.js";

export function _dbNodesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      dbnodeocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbNodesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DbNode> {
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
          additionalDetails: result.body.properties?.["additionalDetails"],
          backupIpId: result.body.properties?.["backupIpId"],
          backupVnic2Id: result.body.properties?.["backupVnic2Id"],
          backupVnicId: result.body.properties?.["backupVnicId"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          dbServerId: result.body.properties?.["dbServerId"],
          dbSystemId: result.body.properties?.["dbSystemId"],
          faultDomain: result.body.properties?.["faultDomain"],
          hostIpId: result.body.properties?.["hostIpId"],
          hostname: result.body.properties?.["hostname"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceType: result.body.properties?.["maintenanceType"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          softwareStorageSizeInGb:
            result.body.properties?.["softwareStorageSizeInGb"],
          timeCreated: new Date(result.body.properties?.["timeCreated"]),
          timeMaintenanceWindowEnd:
            result.body.properties?.["timeMaintenanceWindowEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowEnd"])
              : undefined,
          timeMaintenanceWindowStart:
            result.body.properties?.["timeMaintenanceWindowStart"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowStart"])
              : undefined,
          vnic2Id: result.body.properties?.["vnic2Id"],
          vnicId: result.body.properties?.["vnicId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DbNode */
export async function dbNodesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): Promise<DbNode> {
  const result = await _dbNodesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    dbnodeocid,
    options,
  );
  return _dbNodesGetDeserialize(result);
}

export function _dbNodesListByCloudVmClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbNodesListByCloudVmClusterDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbNodeListResult> {
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
              additionalDetails: p.properties?.["additionalDetails"],
              backupIpId: p.properties?.["backupIpId"],
              backupVnic2Id: p.properties?.["backupVnic2Id"],
              backupVnicId: p.properties?.["backupVnicId"],
              cpuCoreCount: p.properties?.["cpuCoreCount"],
              dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
              dbServerId: p.properties?.["dbServerId"],
              dbSystemId: p.properties?.["dbSystemId"],
              faultDomain: p.properties?.["faultDomain"],
              hostIpId: p.properties?.["hostIpId"],
              hostname: p.properties?.["hostname"],
              lifecycleState: p.properties?.["lifecycleState"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              maintenanceType: p.properties?.["maintenanceType"],
              memorySizeInGbs: p.properties?.["memorySizeInGbs"],
              softwareStorageSizeInGb:
                p.properties?.["softwareStorageSizeInGb"],
              timeCreated: new Date(p.properties?.["timeCreated"]),
              timeMaintenanceWindowEnd:
                p.properties?.["timeMaintenanceWindowEnd"] !== undefined
                  ? new Date(p.properties?.["timeMaintenanceWindowEnd"])
                  : undefined,
              timeMaintenanceWindowStart:
                p.properties?.["timeMaintenanceWindowStart"] !== undefined
                  ? new Date(p.properties?.["timeMaintenanceWindowStart"])
                  : undefined,
              vnic2Id: p.properties?.["vnic2Id"],
              vnicId: p.properties?.["vnicId"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List DbNode resources by CloudVmCluster */
export function dbNodesListByCloudVmCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DbNode> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dbNodesListByCloudVmClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    _dbNodesListByCloudVmClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dbNodesActionSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      dbnodeocid,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { action: body["action"] },
    });
}

export async function _dbNodesActionDeserialize(
  result: PathUncheckedResponse,
): Promise<DbNode> {
  const expectedStatuses = ["200", "202"];
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
          additionalDetails: result.body.properties?.["additionalDetails"],
          backupIpId: result.body.properties?.["backupIpId"],
          backupVnic2Id: result.body.properties?.["backupVnic2Id"],
          backupVnicId: result.body.properties?.["backupVnicId"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          dbServerId: result.body.properties?.["dbServerId"],
          dbSystemId: result.body.properties?.["dbSystemId"],
          faultDomain: result.body.properties?.["faultDomain"],
          hostIpId: result.body.properties?.["hostIpId"],
          hostname: result.body.properties?.["hostname"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceType: result.body.properties?.["maintenanceType"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          softwareStorageSizeInGb:
            result.body.properties?.["softwareStorageSizeInGb"],
          timeCreated: new Date(result.body.properties?.["timeCreated"]),
          timeMaintenanceWindowEnd:
            result.body.properties?.["timeMaintenanceWindowEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowEnd"])
              : undefined,
          timeMaintenanceWindowStart:
            result.body.properties?.["timeMaintenanceWindowStart"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowStart"])
              : undefined,
          vnic2Id: result.body.properties?.["vnic2Id"],
          vnicId: result.body.properties?.["vnicId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** VM actions on DbNode of VM Cluster by the provided filter */
export function dbNodesAction(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DbNode>, DbNode> {
  return getLongRunningPoller(
    context,
    _dbNodesActionDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dbNodesActionSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          dbnodeocid,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<DbNode>, DbNode>;
}
