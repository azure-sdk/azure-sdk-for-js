// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  cloudVmClusterPropertiesSerializer,
  cloudVmClusterUpdatePropertiesSerializer,
  CloudVmCluster,
  CloudVmClusterUpdate,
  AddRemoveDbNode,
  PrivateIpAddressesFilter,
  PrivateIpAddressProperties,
  _CloudVmClusterListResult,
} from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
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
  CloudVmClustersListBySubscriptionOptionalParams,
  CloudVmClustersGetOptionalParams,
  CloudVmClustersUpdateOptionalParams,
  CloudVmClustersDeleteOptionalParams,
  CloudVmClustersCreateOrUpdateOptionalParams,
  CloudVmClustersListByResourceGroupOptionalParams,
  CloudVmClustersAddVmsOptionalParams,
  CloudVmClustersRemoveVmsOptionalParams,
  CloudVmClustersListPrivateIpAddressesOptionalParams,
} from "../../models/options.js";

export function _cloudVmClustersListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudVmClusters",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudVmClusterListResult> {
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
              ocid: p.properties?.["ocid"],
              listenerPort: p.properties?.["listenerPort"],
              nodeCount: p.properties?.["nodeCount"],
              storageSizeInGbs: p.properties?.["storageSizeInGbs"],
              dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
              dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
              memorySizeInGbs: p.properties?.["memorySizeInGbs"],
              timeCreated:
                p.properties?.["timeCreated"] !== undefined
                  ? new Date(p.properties?.["timeCreated"])
                  : undefined,
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              timeZone: p.properties?.["timeZone"],
              zoneId: p.properties?.["zoneId"],
              hostname: p.properties?.["hostname"],
              domain: p.properties?.["domain"],
              cpuCoreCount: p.properties?.["cpuCoreCount"],
              ocpuCount: p.properties?.["ocpuCount"],
              clusterName: p.properties?.["clusterName"],
              dataStoragePercentage: p.properties?.["dataStoragePercentage"],
              isLocalBackupEnabled: p.properties?.["isLocalBackupEnabled"],
              cloudExadataInfrastructureId:
                p.properties?.["cloudExadataInfrastructureId"],
              isSparseDiskgroupEnabled:
                p.properties?.["isSparseDiskgroupEnabled"],
              systemVersion: p.properties?.["systemVersion"],
              sshPublicKeys: p.properties?.["sshPublicKeys"],
              licenseModel: p.properties?.["licenseModel"],
              diskRedundancy: p.properties?.["diskRedundancy"],
              scanIpIds: p.properties?.["scanIpIds"],
              vipIds: p.properties?.["vipIds"],
              scanDnsName: p.properties?.["scanDnsName"],
              scanListenerPortTcp: p.properties?.["scanListenerPortTcp"],
              scanListenerPortTcpSsl: p.properties?.["scanListenerPortTcpSsl"],
              scanDnsRecordId: p.properties?.["scanDnsRecordId"],
              shape: p.properties?.["shape"],
              provisioningState: p.properties?.["provisioningState"],
              lifecycleState: p.properties?.["lifecycleState"],
              vnetId: p.properties?.["vnetId"],
              giVersion: p.properties?.["giVersion"],
              ociUrl: p.properties?.["ociUrl"],
              nsgUrl: p.properties?.["nsgUrl"],
              subnetId: p.properties?.["subnetId"],
              backupSubnetCidr: p.properties?.["backupSubnetCidr"],
              nsgCidrs:
                p.properties?.["nsgCidrs"] === undefined
                  ? p.properties?.["nsgCidrs"]
                  : p.properties?.["nsgCidrs"].map((p: any) => {
                      return {
                        source: p["source"],
                        destinationPortRange: !p.destinationPortRange
                          ? undefined
                          : {
                              min: p.destinationPortRange?.["min"],
                              max: p.destinationPortRange?.["max"],
                            },
                      };
                    }),
              dataCollectionOptions: !p.properties?.dataCollectionOptions
                ? undefined
                : {
                    isDiagnosticsEventsEnabled:
                      p.properties?.dataCollectionOptions?.[
                        "isDiagnosticsEventsEnabled"
                      ],
                    isHealthMonitoringEnabled:
                      p.properties?.dataCollectionOptions?.[
                        "isHealthMonitoringEnabled"
                      ],
                    isIncidentLogsEnabled:
                      p.properties?.dataCollectionOptions?.[
                        "isIncidentLogsEnabled"
                      ],
                  },
              displayName: p.properties?.["displayName"],
              computeNodes: p.properties?.["computeNodes"],
              iormConfigCache: !p.properties?.iormConfigCache
                ? undefined
                : {
                    dbPlans:
                      p.properties?.iormConfigCache?.["dbPlans"] === undefined
                        ? p.properties?.iormConfigCache?.["dbPlans"]
                        : p.properties?.iormConfigCache?.["dbPlans"].map(
                            (p: any) => {
                              return {
                                dbName: p["dbName"],
                                flashCacheLimit: p["flashCacheLimit"],
                                share: p["share"],
                              };
                            },
                          ),
                    lifecycleDetails:
                      p.properties?.iormConfigCache?.["lifecycleDetails"],
                    lifecycleState:
                      p.properties?.iormConfigCache?.["lifecycleState"],
                    objective: p.properties?.iormConfigCache?.["objective"],
                  },
              lastUpdateHistoryEntryId:
                p.properties?.["lastUpdateHistoryEntryId"],
              dbServers: p.properties?.["dbServers"],
              compartmentId: p.properties?.["compartmentId"],
              subnetOcid: p.properties?.["subnetOcid"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudVmCluster resources by subscription ID */
export function cloudVmClustersListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudVmClustersListBySubscriptionSend(context, subscriptionId, options),
    _cloudVmClustersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudVmClustersGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
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
          ocid: result.body.properties?.["ocid"],
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p: any) => {
                  return {
                    source: p["source"],
                    destinationPortRange: !p.destinationPortRange
                      ? undefined
                      : {
                          min: p.destinationPortRange?.["min"],
                          max: p.destinationPortRange?.["max"],
                        },
                  };
                }),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p: any) => {
                          return {
                            dbName: p["dbName"],
                            flashCacheLimit: p["flashCacheLimit"],
                            share: p["share"],
                          };
                        },
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Get a CloudVmCluster */
export async function cloudVmClustersGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): Promise<CloudVmCluster> {
  const result = await _cloudVmClustersGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    options,
  );
  return _cloudVmClustersGetDeserialize(result);
}

export function _cloudVmClustersUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : cloudVmClusterUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _cloudVmClustersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
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
          ocid: result.body.properties?.["ocid"],
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p: any) => {
                  return {
                    source: p["source"],
                    destinationPortRange: !p.destinationPortRange
                      ? undefined
                      : {
                          min: p.destinationPortRange?.["min"],
                          max: p.destinationPortRange?.["max"],
                        },
                  };
                }),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p: any) => {
                          return {
                            dbName: p["dbName"],
                            flashCacheLimit: p["flashCacheLimit"],
                            share: p["share"],
                          };
                        },
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Update a CloudVmCluster */
export function cloudVmClustersUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a CloudVmCluster */
export function cloudVmClustersDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _cloudVmClustersCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
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
          : cloudVmClusterPropertiesSerializer(resource.properties),
      },
    });
}

export async function _cloudVmClustersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
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
          ocid: result.body.properties?.["ocid"],
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p: any) => {
                  return {
                    source: p["source"],
                    destinationPortRange: !p.destinationPortRange
                      ? undefined
                      : {
                          min: p.destinationPortRange?.["min"],
                          max: p.destinationPortRange?.["max"],
                        },
                  };
                }),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p: any) => {
                          return {
                            dbName: p["dbName"],
                            flashCacheLimit: p["flashCacheLimit"],
                            share: p["share"],
                          };
                        },
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Create a CloudVmCluster */
export function cloudVmClustersCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudVmClusterListResult> {
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
              ocid: p.properties?.["ocid"],
              listenerPort: p.properties?.["listenerPort"],
              nodeCount: p.properties?.["nodeCount"],
              storageSizeInGbs: p.properties?.["storageSizeInGbs"],
              dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
              dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
              memorySizeInGbs: p.properties?.["memorySizeInGbs"],
              timeCreated:
                p.properties?.["timeCreated"] !== undefined
                  ? new Date(p.properties?.["timeCreated"])
                  : undefined,
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              timeZone: p.properties?.["timeZone"],
              zoneId: p.properties?.["zoneId"],
              hostname: p.properties?.["hostname"],
              domain: p.properties?.["domain"],
              cpuCoreCount: p.properties?.["cpuCoreCount"],
              ocpuCount: p.properties?.["ocpuCount"],
              clusterName: p.properties?.["clusterName"],
              dataStoragePercentage: p.properties?.["dataStoragePercentage"],
              isLocalBackupEnabled: p.properties?.["isLocalBackupEnabled"],
              cloudExadataInfrastructureId:
                p.properties?.["cloudExadataInfrastructureId"],
              isSparseDiskgroupEnabled:
                p.properties?.["isSparseDiskgroupEnabled"],
              systemVersion: p.properties?.["systemVersion"],
              sshPublicKeys: p.properties?.["sshPublicKeys"],
              licenseModel: p.properties?.["licenseModel"],
              diskRedundancy: p.properties?.["diskRedundancy"],
              scanIpIds: p.properties?.["scanIpIds"],
              vipIds: p.properties?.["vipIds"],
              scanDnsName: p.properties?.["scanDnsName"],
              scanListenerPortTcp: p.properties?.["scanListenerPortTcp"],
              scanListenerPortTcpSsl: p.properties?.["scanListenerPortTcpSsl"],
              scanDnsRecordId: p.properties?.["scanDnsRecordId"],
              shape: p.properties?.["shape"],
              provisioningState: p.properties?.["provisioningState"],
              lifecycleState: p.properties?.["lifecycleState"],
              vnetId: p.properties?.["vnetId"],
              giVersion: p.properties?.["giVersion"],
              ociUrl: p.properties?.["ociUrl"],
              nsgUrl: p.properties?.["nsgUrl"],
              subnetId: p.properties?.["subnetId"],
              backupSubnetCidr: p.properties?.["backupSubnetCidr"],
              nsgCidrs:
                p.properties?.["nsgCidrs"] === undefined
                  ? p.properties?.["nsgCidrs"]
                  : p.properties?.["nsgCidrs"].map((p: any) => {
                      return {
                        source: p["source"],
                        destinationPortRange: !p.destinationPortRange
                          ? undefined
                          : {
                              min: p.destinationPortRange?.["min"],
                              max: p.destinationPortRange?.["max"],
                            },
                      };
                    }),
              dataCollectionOptions: !p.properties?.dataCollectionOptions
                ? undefined
                : {
                    isDiagnosticsEventsEnabled:
                      p.properties?.dataCollectionOptions?.[
                        "isDiagnosticsEventsEnabled"
                      ],
                    isHealthMonitoringEnabled:
                      p.properties?.dataCollectionOptions?.[
                        "isHealthMonitoringEnabled"
                      ],
                    isIncidentLogsEnabled:
                      p.properties?.dataCollectionOptions?.[
                        "isIncidentLogsEnabled"
                      ],
                  },
              displayName: p.properties?.["displayName"],
              computeNodes: p.properties?.["computeNodes"],
              iormConfigCache: !p.properties?.iormConfigCache
                ? undefined
                : {
                    dbPlans:
                      p.properties?.iormConfigCache?.["dbPlans"] === undefined
                        ? p.properties?.iormConfigCache?.["dbPlans"]
                        : p.properties?.iormConfigCache?.["dbPlans"].map(
                            (p: any) => {
                              return {
                                dbName: p["dbName"],
                                flashCacheLimit: p["flashCacheLimit"],
                                share: p["share"],
                              };
                            },
                          ),
                    lifecycleDetails:
                      p.properties?.iormConfigCache?.["lifecycleDetails"],
                    lifecycleState:
                      p.properties?.iormConfigCache?.["lifecycleState"],
                    objective: p.properties?.iormConfigCache?.["objective"],
                  },
              lastUpdateHistoryEntryId:
                p.properties?.["lastUpdateHistoryEntryId"],
              dbServers: p.properties?.["dbServers"],
              compartmentId: p.properties?.["compartmentId"],
              subnetOcid: p.properties?.["subnetOcid"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudVmCluster resources by resource group */
export function cloudVmClustersListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudVmClustersListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _cloudVmClustersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudVmClustersAddVmsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { dbServers: body["dbServers"] },
    });
}

export async function _cloudVmClustersAddVmsDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
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
          ocid: result.body.properties?.["ocid"],
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p: any) => {
                  return {
                    source: p["source"],
                    destinationPortRange: !p.destinationPortRange
                      ? undefined
                      : {
                          min: p.destinationPortRange?.["min"],
                          max: p.destinationPortRange?.["max"],
                        },
                  };
                }),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p: any) => {
                          return {
                            dbName: p["dbName"],
                            flashCacheLimit: p["flashCacheLimit"],
                            share: p["share"],
                          };
                        },
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Add VMs to the VM Cluster */
export function cloudVmClustersAddVms(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersAddVmsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersAddVmsSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersRemoveVmsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { dbServers: body["dbServers"] },
    });
}

export async function _cloudVmClustersRemoveVmsDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
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
          ocid: result.body.properties?.["ocid"],
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p: any) => {
                  return {
                    source: p["source"],
                    destinationPortRange: !p.destinationPortRange
                      ? undefined
                      : {
                          min: p.destinationPortRange?.["min"],
                          max: p.destinationPortRange?.["max"],
                        },
                  };
                }),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p: any) => {
                          return {
                            dbName: p["dbName"],
                            flashCacheLimit: p["flashCacheLimit"],
                            share: p["share"],
                          };
                        },
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Remove VMs from the VM Cluster */
export function cloudVmClustersRemoveVms(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersRemoveVmsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersRemoveVmsSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersListPrivateIpAddressesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/listPrivateIpAddresses",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { subnetId: body["subnetId"], vnicId: body["vnicId"] },
    });
}

export async function _cloudVmClustersListPrivateIpAddressesDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateIpAddressProperties[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p: any) => {
        return {
          displayName: p["displayName"],
          hostnameLabel: p["hostnameLabel"],
          ocid: p["ocid"],
          ipAddress: p["ipAddress"],
          subnetId: p["subnetId"],
        };
      });
}

/** List Private IP Addresses by the provided filter */
export async function cloudVmClustersListPrivateIpAddresses(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): Promise<PrivateIpAddressProperties[]> {
  const result = await _cloudVmClustersListPrivateIpAddressesSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    body,
    options,
  );
  return _cloudVmClustersListPrivateIpAddressesDeserialize(result);
}
