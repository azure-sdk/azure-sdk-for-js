// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  autonomousDatabaseBasePropertiesUnionSerializer,
  autonomousDatabaseUpdatePropertiesSerializer,
  AutonomousDatabase,
  AutonomousDatabaseUpdate,
  PeerDbDetails,
  GenerateAutonomousDatabaseWalletDetails,
  AutonomousDatabaseWalletFile,
  RestoreAutonomousDatabaseDetails,
  _AutonomousDatabaseListResult,
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
  AutonomousDatabasesListBySubscriptionOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesUpdateOptionalParams,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesRestoreOptionalParams,
  AutonomousDatabasesShrinkOptionalParams,
} from "../../models/options.js";

export function _autonomousDatabasesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AutonomousDatabasesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/autonomousDatabases",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseListResult> {
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
              adminPassword: p.properties?.["adminPassword"],
              dataBaseType: p.properties?.["dataBaseType"],
              autonomousMaintenanceScheduleType:
                p.properties?.["autonomousMaintenanceScheduleType"],
              characterSet: p.properties?.["characterSet"],
              computeCount: p.properties?.["computeCount"],
              computeModel: p.properties?.["computeModel"],
              cpuCoreCount: p.properties?.["cpuCoreCount"],
              customerContacts:
                p.properties?.["customerContacts"] === undefined
                  ? p.properties?.["customerContacts"]
                  : p.properties?.["customerContacts"].map((p: any) => {
                      return { email: p["email"] };
                    }),
              dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
              dataStorageSizeInGbs: p.properties?.["dataStorageSizeInGbs"],
              dbVersion: p.properties?.["dbVersion"],
              dbWorkload: p.properties?.["dbWorkload"],
              displayName: p.properties?.["displayName"],
              isAutoScalingEnabled: p.properties?.["isAutoScalingEnabled"],
              isAutoScalingForStorageEnabled:
                p.properties?.["isAutoScalingForStorageEnabled"],
              peerDbIds: p.properties?.["peerDbIds"],
              peerDbId: p.properties?.["peerDbId"],
              isLocalDataGuardEnabled:
                p.properties?.["isLocalDataGuardEnabled"],
              isRemoteDataGuardEnabled:
                p.properties?.["isRemoteDataGuardEnabled"],
              localDisasterRecoveryType:
                p.properties?.["localDisasterRecoveryType"],
              localStandbyDb: !p.properties?.localStandbyDb
                ? undefined
                : {
                    lagTimeInSeconds:
                      p.properties?.localStandbyDb?.["lagTimeInSeconds"],
                    lifecycleState:
                      p.properties?.localStandbyDb?.["lifecycleState"],
                    lifecycleDetails:
                      p.properties?.localStandbyDb?.["lifecycleDetails"],
                    timeDataGuardRoleChanged:
                      p.properties?.localStandbyDb?.[
                        "timeDataGuardRoleChanged"
                      ],
                    timeDisasterRecoveryRoleChanged:
                      p.properties?.localStandbyDb?.[
                        "timeDisasterRecoveryRoleChanged"
                      ],
                  },
              failedDataRecoveryInSeconds:
                p.properties?.["failedDataRecoveryInSeconds"],
              isMtlsConnectionRequired:
                p.properties?.["isMtlsConnectionRequired"],
              isPreviewVersionWithServiceTermsAccepted:
                p.properties?.["isPreviewVersionWithServiceTermsAccepted"],
              licenseModel: p.properties?.["licenseModel"],
              ncharacterSet: p.properties?.["ncharacterSet"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              provisioningState: p.properties?.["provisioningState"],
              lifecycleState: p.properties?.["lifecycleState"],
              scheduledOperations: !p.properties?.scheduledOperations
                ? undefined
                : {
                    dayOfWeek: {
                      name: p.properties?.scheduledOperations?.dayOfWeek[
                        "name"
                      ],
                    },
                    scheduledStartTime:
                      p.properties?.scheduledOperations?.["scheduledStartTime"],
                    scheduledStopTime:
                      p.properties?.scheduledOperations?.["scheduledStopTime"],
                  },
              privateEndpointIp: p.properties?.["privateEndpointIp"],
              privateEndpointLabel: p.properties?.["privateEndpointLabel"],
              ociUrl: p.properties?.["ociUrl"],
              subnetId: p.properties?.["subnetId"],
              vnetId: p.properties?.["vnetId"],
              timeCreated:
                p.properties?.["timeCreated"] !== undefined
                  ? new Date(p.properties?.["timeCreated"])
                  : undefined,
              timeMaintenanceBegin:
                p.properties?.["timeMaintenanceBegin"] !== undefined
                  ? new Date(p.properties?.["timeMaintenanceBegin"])
                  : undefined,
              timeMaintenanceEnd:
                p.properties?.["timeMaintenanceEnd"] !== undefined
                  ? new Date(p.properties?.["timeMaintenanceEnd"])
                  : undefined,
              actualUsedDataStorageSizeInTbs:
                p.properties?.["actualUsedDataStorageSizeInTbs"],
              allocatedStorageSizeInTbs:
                p.properties?.["allocatedStorageSizeInTbs"],
              apexDetails: !p.properties?.apexDetails
                ? undefined
                : {
                    apexVersion: p.properties?.apexDetails?.["apexVersion"],
                    ordsVersion: p.properties?.apexDetails?.["ordsVersion"],
                  },
              availableUpgradeVersions:
                p.properties?.["availableUpgradeVersions"],
              connectionStrings: !p.properties?.connectionStrings
                ? undefined
                : {
                    allConnectionStrings: !p.properties?.connectionStrings
                      ?.allConnectionStrings
                      ? undefined
                      : {
                          high: p.properties?.connectionStrings
                            ?.allConnectionStrings?.["high"],
                          low: p.properties?.connectionStrings
                            ?.allConnectionStrings?.["low"],
                          medium:
                            p.properties?.connectionStrings
                              ?.allConnectionStrings?.["medium"],
                        },
                    dedicated: p.properties?.connectionStrings?.["dedicated"],
                    high: p.properties?.connectionStrings?.["high"],
                    low: p.properties?.connectionStrings?.["low"],
                    medium: p.properties?.connectionStrings?.["medium"],
                    profiles:
                      p.properties?.connectionStrings?.["profiles"] ===
                      undefined
                        ? p.properties?.connectionStrings?.["profiles"]
                        : p.properties?.connectionStrings?.["profiles"].map(
                            (p: any) => {
                              return {
                                consumerGroup: p["consumerGroup"],
                                displayName: p["displayName"],
                                hostFormat: p["hostFormat"],
                                isRegional: p["isRegional"],
                                protocol: p["protocol"],
                                sessionMode: p["sessionMode"],
                                syntaxFormat: p["syntaxFormat"],
                                tlsAuthentication: p["tlsAuthentication"],
                                value: p["value"],
                              };
                            },
                          ),
                  },
              connectionUrls: !p.properties?.connectionUrls
                ? undefined
                : {
                    apexUrl: p.properties?.connectionUrls?.["apexUrl"],
                    databaseTransformsUrl:
                      p.properties?.connectionUrls?.["databaseTransformsUrl"],
                    graphStudioUrl:
                      p.properties?.connectionUrls?.["graphStudioUrl"],
                    machineLearningNotebookUrl:
                      p.properties?.connectionUrls?.[
                        "machineLearningNotebookUrl"
                      ],
                    mongoDbUrl: p.properties?.connectionUrls?.["mongoDbUrl"],
                    ordsUrl: p.properties?.connectionUrls?.["ordsUrl"],
                    sqlDevWebUrl:
                      p.properties?.connectionUrls?.["sqlDevWebUrl"],
                  },
              dataSafeStatus: p.properties?.["dataSafeStatus"],
              databaseEdition: p.properties?.["databaseEdition"],
              autonomousDatabaseId: p.properties?.["autonomousDatabaseId"],
              inMemoryAreaInGbs: p.properties?.["inMemoryAreaInGbs"],
              nextLongTermBackupTimeStamp:
                p.properties?.["nextLongTermBackupTimeStamp"] !== undefined
                  ? new Date(p.properties?.["nextLongTermBackupTimeStamp"])
                  : undefined,
              longTermBackupSchedule: !p.properties?.longTermBackupSchedule
                ? undefined
                : {
                    repeatCadence:
                      p.properties?.longTermBackupSchedule?.["repeatCadence"],
                    timeOfBackup:
                      p.properties?.longTermBackupSchedule?.["timeOfBackup"] !==
                      undefined
                        ? new Date(
                            p.properties?.longTermBackupSchedule?.[
                              "timeOfBackup"
                            ],
                          )
                        : undefined,
                    retentionPeriodInDays:
                      p.properties?.longTermBackupSchedule?.[
                        "retentionPeriodInDays"
                      ],
                    isDisabled:
                      p.properties?.longTermBackupSchedule?.["isDisabled"],
                  },
              isPreview: p.properties?.["isPreview"],
              localAdgAutoFailoverMaxDataLossLimit:
                p.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
              memoryPerOracleComputeUnitInGbs:
                p.properties?.["memoryPerOracleComputeUnitInGbs"],
              openMode: p.properties?.["openMode"],
              operationsInsightsStatus:
                p.properties?.["operationsInsightsStatus"],
              permissionLevel: p.properties?.["permissionLevel"],
              privateEndpoint: p.properties?.["privateEndpoint"],
              provisionableCpus: p.properties?.["provisionableCpus"],
              role: p.properties?.["role"],
              serviceConsoleUrl: p.properties?.["serviceConsoleUrl"],
              sqlWebDeveloperUrl: p.properties?.["sqlWebDeveloperUrl"],
              supportedRegionsToCloneTo:
                p.properties?.["supportedRegionsToCloneTo"],
              timeDataGuardRoleChanged:
                p.properties?.["timeDataGuardRoleChanged"],
              timeDeletionOfFreeAutonomousDatabase:
                p.properties?.["timeDeletionOfFreeAutonomousDatabase"],
              timeLocalDataGuardEnabled:
                p.properties?.["timeLocalDataGuardEnabled"],
              timeOfLastFailover: p.properties?.["timeOfLastFailover"],
              timeOfLastRefresh: p.properties?.["timeOfLastRefresh"],
              timeOfLastRefreshPoint: p.properties?.["timeOfLastRefreshPoint"],
              timeOfLastSwitchover: p.properties?.["timeOfLastSwitchover"],
              timeReclamationOfFreeAutonomousDatabase:
                p.properties?.["timeReclamationOfFreeAutonomousDatabase"],
              usedDataStorageSizeInGbs:
                p.properties?.["usedDataStorageSizeInGbs"],
              usedDataStorageSizeInTbs:
                p.properties?.["usedDataStorageSizeInTbs"],
              ocid: p.properties?.["ocid"],
              backupRetentionPeriodInDays:
                p.properties?.["backupRetentionPeriodInDays"],
              whitelistedIps: p.properties?.["whitelistedIps"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDatabase resources by subscription ID */
export function autonomousDatabasesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AutonomousDatabasesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabase> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabasesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _autonomousDatabasesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabasesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
          adminPassword: result.body.properties?.["adminPassword"],
          dataBaseType: result.body.properties?.["dataBaseType"],
          autonomousMaintenanceScheduleType:
            result.body.properties?.["autonomousMaintenanceScheduleType"],
          characterSet: result.body.properties?.["characterSet"],
          computeCount: result.body.properties?.["computeCount"],
          computeModel: result.body.properties?.["computeModel"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dataStorageSizeInGbs:
            result.body.properties?.["dataStorageSizeInGbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          displayName: result.body.properties?.["displayName"],
          isAutoScalingEnabled:
            result.body.properties?.["isAutoScalingEnabled"],
          isAutoScalingForStorageEnabled:
            result.body.properties?.["isAutoScalingForStorageEnabled"],
          peerDbIds: result.body.properties?.["peerDbIds"],
          peerDbId: result.body.properties?.["peerDbId"],
          isLocalDataGuardEnabled:
            result.body.properties?.["isLocalDataGuardEnabled"],
          isRemoteDataGuardEnabled:
            result.body.properties?.["isRemoteDataGuardEnabled"],
          localDisasterRecoveryType:
            result.body.properties?.["localDisasterRecoveryType"],
          localStandbyDb: !result.body.properties?.localStandbyDb
            ? undefined
            : {
                lagTimeInSeconds:
                  result.body.properties?.localStandbyDb?.["lagTimeInSeconds"],
                lifecycleState:
                  result.body.properties?.localStandbyDb?.["lifecycleState"],
                lifecycleDetails:
                  result.body.properties?.localStandbyDb?.["lifecycleDetails"],
                timeDataGuardRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDataGuardRoleChanged"
                  ],
                timeDisasterRecoveryRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDisasterRecoveryRoleChanged"
                  ],
              },
          failedDataRecoveryInSeconds:
            result.body.properties?.["failedDataRecoveryInSeconds"],
          isMtlsConnectionRequired:
            result.body.properties?.["isMtlsConnectionRequired"],
          isPreviewVersionWithServiceTermsAccepted:
            result.body.properties?.[
              "isPreviewVersionWithServiceTermsAccepted"
            ],
          licenseModel: result.body.properties?.["licenseModel"],
          ncharacterSet: result.body.properties?.["ncharacterSet"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          scheduledOperations: !result.body.properties?.scheduledOperations
            ? undefined
            : {
                dayOfWeek: {
                  name: result.body.properties?.scheduledOperations?.dayOfWeek[
                    "name"
                  ],
                },
                scheduledStartTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStartTime"
                  ],
                scheduledStopTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStopTime"
                  ],
              },
          privateEndpointIp: result.body.properties?.["privateEndpointIp"],
          privateEndpointLabel:
            result.body.properties?.["privateEndpointLabel"],
          ociUrl: result.body.properties?.["ociUrl"],
          subnetId: result.body.properties?.["subnetId"],
          vnetId: result.body.properties?.["vnetId"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceBegin:
            result.body.properties?.["timeMaintenanceBegin"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceBegin"])
              : undefined,
          timeMaintenanceEnd:
            result.body.properties?.["timeMaintenanceEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceEnd"])
              : undefined,
          actualUsedDataStorageSizeInTbs:
            result.body.properties?.["actualUsedDataStorageSizeInTbs"],
          allocatedStorageSizeInTbs:
            result.body.properties?.["allocatedStorageSizeInTbs"],
          apexDetails: !result.body.properties?.apexDetails
            ? undefined
            : {
                apexVersion:
                  result.body.properties?.apexDetails?.["apexVersion"],
                ordsVersion:
                  result.body.properties?.apexDetails?.["ordsVersion"],
              },
          availableUpgradeVersions:
            result.body.properties?.["availableUpgradeVersions"],
          connectionStrings: !result.body.properties?.connectionStrings
            ? undefined
            : {
                allConnectionStrings: !result.body.properties?.connectionStrings
                  ?.allConnectionStrings
                  ? undefined
                  : {
                      high: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["high"],
                      low: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["low"],
                      medium:
                        result.body.properties?.connectionStrings
                          ?.allConnectionStrings?.["medium"],
                    },
                dedicated:
                  result.body.properties?.connectionStrings?.["dedicated"],
                high: result.body.properties?.connectionStrings?.["high"],
                low: result.body.properties?.connectionStrings?.["low"],
                medium: result.body.properties?.connectionStrings?.["medium"],
                profiles:
                  result.body.properties?.connectionStrings?.["profiles"] ===
                  undefined
                    ? result.body.properties?.connectionStrings?.["profiles"]
                    : result.body.properties?.connectionStrings?.[
                        "profiles"
                      ].map((p: any) => {
                        return {
                          consumerGroup: p["consumerGroup"],
                          displayName: p["displayName"],
                          hostFormat: p["hostFormat"],
                          isRegional: p["isRegional"],
                          protocol: p["protocol"],
                          sessionMode: p["sessionMode"],
                          syntaxFormat: p["syntaxFormat"],
                          tlsAuthentication: p["tlsAuthentication"],
                          value: p["value"],
                        };
                      }),
              },
          connectionUrls: !result.body.properties?.connectionUrls
            ? undefined
            : {
                apexUrl: result.body.properties?.connectionUrls?.["apexUrl"],
                databaseTransformsUrl:
                  result.body.properties?.connectionUrls?.[
                    "databaseTransformsUrl"
                  ],
                graphStudioUrl:
                  result.body.properties?.connectionUrls?.["graphStudioUrl"],
                machineLearningNotebookUrl:
                  result.body.properties?.connectionUrls?.[
                    "machineLearningNotebookUrl"
                  ],
                mongoDbUrl:
                  result.body.properties?.connectionUrls?.["mongoDbUrl"],
                ordsUrl: result.body.properties?.connectionUrls?.["ordsUrl"],
                sqlDevWebUrl:
                  result.body.properties?.connectionUrls?.["sqlDevWebUrl"],
              },
          dataSafeStatus: result.body.properties?.["dataSafeStatus"],
          databaseEdition: result.body.properties?.["databaseEdition"],
          autonomousDatabaseId:
            result.body.properties?.["autonomousDatabaseId"],
          inMemoryAreaInGbs: result.body.properties?.["inMemoryAreaInGbs"],
          nextLongTermBackupTimeStamp:
            result.body.properties?.["nextLongTermBackupTimeStamp"] !==
            undefined
              ? new Date(
                  result.body.properties?.["nextLongTermBackupTimeStamp"],
                )
              : undefined,
          longTermBackupSchedule: !result.body.properties
            ?.longTermBackupSchedule
            ? undefined
            : {
                repeatCadence:
                  result.body.properties?.longTermBackupSchedule?.[
                    "repeatCadence"
                  ],
                timeOfBackup:
                  result.body.properties?.longTermBackupSchedule?.[
                    "timeOfBackup"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.longTermBackupSchedule?.[
                          "timeOfBackup"
                        ],
                      )
                    : undefined,
                retentionPeriodInDays:
                  result.body.properties?.longTermBackupSchedule?.[
                    "retentionPeriodInDays"
                  ],
                isDisabled:
                  result.body.properties?.longTermBackupSchedule?.[
                    "isDisabled"
                  ],
              },
          isPreview: result.body.properties?.["isPreview"],
          localAdgAutoFailoverMaxDataLossLimit:
            result.body.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
          memoryPerOracleComputeUnitInGbs:
            result.body.properties?.["memoryPerOracleComputeUnitInGbs"],
          openMode: result.body.properties?.["openMode"],
          operationsInsightsStatus:
            result.body.properties?.["operationsInsightsStatus"],
          permissionLevel: result.body.properties?.["permissionLevel"],
          privateEndpoint: result.body.properties?.["privateEndpoint"],
          provisionableCpus: result.body.properties?.["provisionableCpus"],
          role: result.body.properties?.["role"],
          serviceConsoleUrl: result.body.properties?.["serviceConsoleUrl"],
          sqlWebDeveloperUrl: result.body.properties?.["sqlWebDeveloperUrl"],
          supportedRegionsToCloneTo:
            result.body.properties?.["supportedRegionsToCloneTo"],
          timeDataGuardRoleChanged:
            result.body.properties?.["timeDataGuardRoleChanged"],
          timeDeletionOfFreeAutonomousDatabase:
            result.body.properties?.["timeDeletionOfFreeAutonomousDatabase"],
          timeLocalDataGuardEnabled:
            result.body.properties?.["timeLocalDataGuardEnabled"],
          timeOfLastFailover: result.body.properties?.["timeOfLastFailover"],
          timeOfLastRefresh: result.body.properties?.["timeOfLastRefresh"],
          timeOfLastRefreshPoint:
            result.body.properties?.["timeOfLastRefreshPoint"],
          timeOfLastSwitchover:
            result.body.properties?.["timeOfLastSwitchover"],
          timeReclamationOfFreeAutonomousDatabase:
            result.body.properties?.["timeReclamationOfFreeAutonomousDatabase"],
          usedDataStorageSizeInGbs:
            result.body.properties?.["usedDataStorageSizeInGbs"],
          usedDataStorageSizeInTbs:
            result.body.properties?.["usedDataStorageSizeInTbs"],
          ocid: result.body.properties?.["ocid"],
          backupRetentionPeriodInDays:
            result.body.properties?.["backupRetentionPeriodInDays"],
          whitelistedIps: result.body.properties?.["whitelistedIps"],
        },
  };
}

/** Get a AutonomousDatabase */
export async function autonomousDatabasesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDatabase> {
  const result = await _autonomousDatabasesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    autonomousdatabasename,
    options,
  );
  return _autonomousDatabasesGetDeserialize(result);
}

export function _autonomousDatabasesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  properties: AutonomousDatabaseUpdate,
  options: AutonomousDatabasesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : autonomousDatabaseUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _autonomousDatabasesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
          adminPassword: result.body.properties?.["adminPassword"],
          dataBaseType: result.body.properties?.["dataBaseType"],
          autonomousMaintenanceScheduleType:
            result.body.properties?.["autonomousMaintenanceScheduleType"],
          characterSet: result.body.properties?.["characterSet"],
          computeCount: result.body.properties?.["computeCount"],
          computeModel: result.body.properties?.["computeModel"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dataStorageSizeInGbs:
            result.body.properties?.["dataStorageSizeInGbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          displayName: result.body.properties?.["displayName"],
          isAutoScalingEnabled:
            result.body.properties?.["isAutoScalingEnabled"],
          isAutoScalingForStorageEnabled:
            result.body.properties?.["isAutoScalingForStorageEnabled"],
          peerDbIds: result.body.properties?.["peerDbIds"],
          peerDbId: result.body.properties?.["peerDbId"],
          isLocalDataGuardEnabled:
            result.body.properties?.["isLocalDataGuardEnabled"],
          isRemoteDataGuardEnabled:
            result.body.properties?.["isRemoteDataGuardEnabled"],
          localDisasterRecoveryType:
            result.body.properties?.["localDisasterRecoveryType"],
          localStandbyDb: !result.body.properties?.localStandbyDb
            ? undefined
            : {
                lagTimeInSeconds:
                  result.body.properties?.localStandbyDb?.["lagTimeInSeconds"],
                lifecycleState:
                  result.body.properties?.localStandbyDb?.["lifecycleState"],
                lifecycleDetails:
                  result.body.properties?.localStandbyDb?.["lifecycleDetails"],
                timeDataGuardRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDataGuardRoleChanged"
                  ],
                timeDisasterRecoveryRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDisasterRecoveryRoleChanged"
                  ],
              },
          failedDataRecoveryInSeconds:
            result.body.properties?.["failedDataRecoveryInSeconds"],
          isMtlsConnectionRequired:
            result.body.properties?.["isMtlsConnectionRequired"],
          isPreviewVersionWithServiceTermsAccepted:
            result.body.properties?.[
              "isPreviewVersionWithServiceTermsAccepted"
            ],
          licenseModel: result.body.properties?.["licenseModel"],
          ncharacterSet: result.body.properties?.["ncharacterSet"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          scheduledOperations: !result.body.properties?.scheduledOperations
            ? undefined
            : {
                dayOfWeek: {
                  name: result.body.properties?.scheduledOperations?.dayOfWeek[
                    "name"
                  ],
                },
                scheduledStartTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStartTime"
                  ],
                scheduledStopTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStopTime"
                  ],
              },
          privateEndpointIp: result.body.properties?.["privateEndpointIp"],
          privateEndpointLabel:
            result.body.properties?.["privateEndpointLabel"],
          ociUrl: result.body.properties?.["ociUrl"],
          subnetId: result.body.properties?.["subnetId"],
          vnetId: result.body.properties?.["vnetId"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceBegin:
            result.body.properties?.["timeMaintenanceBegin"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceBegin"])
              : undefined,
          timeMaintenanceEnd:
            result.body.properties?.["timeMaintenanceEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceEnd"])
              : undefined,
          actualUsedDataStorageSizeInTbs:
            result.body.properties?.["actualUsedDataStorageSizeInTbs"],
          allocatedStorageSizeInTbs:
            result.body.properties?.["allocatedStorageSizeInTbs"],
          apexDetails: !result.body.properties?.apexDetails
            ? undefined
            : {
                apexVersion:
                  result.body.properties?.apexDetails?.["apexVersion"],
                ordsVersion:
                  result.body.properties?.apexDetails?.["ordsVersion"],
              },
          availableUpgradeVersions:
            result.body.properties?.["availableUpgradeVersions"],
          connectionStrings: !result.body.properties?.connectionStrings
            ? undefined
            : {
                allConnectionStrings: !result.body.properties?.connectionStrings
                  ?.allConnectionStrings
                  ? undefined
                  : {
                      high: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["high"],
                      low: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["low"],
                      medium:
                        result.body.properties?.connectionStrings
                          ?.allConnectionStrings?.["medium"],
                    },
                dedicated:
                  result.body.properties?.connectionStrings?.["dedicated"],
                high: result.body.properties?.connectionStrings?.["high"],
                low: result.body.properties?.connectionStrings?.["low"],
                medium: result.body.properties?.connectionStrings?.["medium"],
                profiles:
                  result.body.properties?.connectionStrings?.["profiles"] ===
                  undefined
                    ? result.body.properties?.connectionStrings?.["profiles"]
                    : result.body.properties?.connectionStrings?.[
                        "profiles"
                      ].map((p: any) => {
                        return {
                          consumerGroup: p["consumerGroup"],
                          displayName: p["displayName"],
                          hostFormat: p["hostFormat"],
                          isRegional: p["isRegional"],
                          protocol: p["protocol"],
                          sessionMode: p["sessionMode"],
                          syntaxFormat: p["syntaxFormat"],
                          tlsAuthentication: p["tlsAuthentication"],
                          value: p["value"],
                        };
                      }),
              },
          connectionUrls: !result.body.properties?.connectionUrls
            ? undefined
            : {
                apexUrl: result.body.properties?.connectionUrls?.["apexUrl"],
                databaseTransformsUrl:
                  result.body.properties?.connectionUrls?.[
                    "databaseTransformsUrl"
                  ],
                graphStudioUrl:
                  result.body.properties?.connectionUrls?.["graphStudioUrl"],
                machineLearningNotebookUrl:
                  result.body.properties?.connectionUrls?.[
                    "machineLearningNotebookUrl"
                  ],
                mongoDbUrl:
                  result.body.properties?.connectionUrls?.["mongoDbUrl"],
                ordsUrl: result.body.properties?.connectionUrls?.["ordsUrl"],
                sqlDevWebUrl:
                  result.body.properties?.connectionUrls?.["sqlDevWebUrl"],
              },
          dataSafeStatus: result.body.properties?.["dataSafeStatus"],
          databaseEdition: result.body.properties?.["databaseEdition"],
          autonomousDatabaseId:
            result.body.properties?.["autonomousDatabaseId"],
          inMemoryAreaInGbs: result.body.properties?.["inMemoryAreaInGbs"],
          nextLongTermBackupTimeStamp:
            result.body.properties?.["nextLongTermBackupTimeStamp"] !==
            undefined
              ? new Date(
                  result.body.properties?.["nextLongTermBackupTimeStamp"],
                )
              : undefined,
          longTermBackupSchedule: !result.body.properties
            ?.longTermBackupSchedule
            ? undefined
            : {
                repeatCadence:
                  result.body.properties?.longTermBackupSchedule?.[
                    "repeatCadence"
                  ],
                timeOfBackup:
                  result.body.properties?.longTermBackupSchedule?.[
                    "timeOfBackup"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.longTermBackupSchedule?.[
                          "timeOfBackup"
                        ],
                      )
                    : undefined,
                retentionPeriodInDays:
                  result.body.properties?.longTermBackupSchedule?.[
                    "retentionPeriodInDays"
                  ],
                isDisabled:
                  result.body.properties?.longTermBackupSchedule?.[
                    "isDisabled"
                  ],
              },
          isPreview: result.body.properties?.["isPreview"],
          localAdgAutoFailoverMaxDataLossLimit:
            result.body.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
          memoryPerOracleComputeUnitInGbs:
            result.body.properties?.["memoryPerOracleComputeUnitInGbs"],
          openMode: result.body.properties?.["openMode"],
          operationsInsightsStatus:
            result.body.properties?.["operationsInsightsStatus"],
          permissionLevel: result.body.properties?.["permissionLevel"],
          privateEndpoint: result.body.properties?.["privateEndpoint"],
          provisionableCpus: result.body.properties?.["provisionableCpus"],
          role: result.body.properties?.["role"],
          serviceConsoleUrl: result.body.properties?.["serviceConsoleUrl"],
          sqlWebDeveloperUrl: result.body.properties?.["sqlWebDeveloperUrl"],
          supportedRegionsToCloneTo:
            result.body.properties?.["supportedRegionsToCloneTo"],
          timeDataGuardRoleChanged:
            result.body.properties?.["timeDataGuardRoleChanged"],
          timeDeletionOfFreeAutonomousDatabase:
            result.body.properties?.["timeDeletionOfFreeAutonomousDatabase"],
          timeLocalDataGuardEnabled:
            result.body.properties?.["timeLocalDataGuardEnabled"],
          timeOfLastFailover: result.body.properties?.["timeOfLastFailover"],
          timeOfLastRefresh: result.body.properties?.["timeOfLastRefresh"],
          timeOfLastRefreshPoint:
            result.body.properties?.["timeOfLastRefreshPoint"],
          timeOfLastSwitchover:
            result.body.properties?.["timeOfLastSwitchover"],
          timeReclamationOfFreeAutonomousDatabase:
            result.body.properties?.["timeReclamationOfFreeAutonomousDatabase"],
          usedDataStorageSizeInGbs:
            result.body.properties?.["usedDataStorageSizeInGbs"],
          usedDataStorageSizeInTbs:
            result.body.properties?.["usedDataStorageSizeInTbs"],
          ocid: result.body.properties?.["ocid"],
          backupRetentionPeriodInDays:
            result.body.properties?.["backupRetentionPeriodInDays"],
          whitelistedIps: result.body.properties?.["whitelistedIps"],
        },
  };
}

/** Update a AutonomousDatabase */
export function autonomousDatabasesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  properties: AutonomousDatabaseUpdate,
  options: AutonomousDatabasesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a AutonomousDatabase */
export function autonomousDatabasesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _autonomousDatabasesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  resource: AutonomousDatabase,
  options: AutonomousDatabasesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
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
          : autonomousDatabaseBasePropertiesUnionSerializer(
              resource.properties,
            ),
      },
    });
}

export async function _autonomousDatabasesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
          adminPassword: result.body.properties?.["adminPassword"],
          dataBaseType: result.body.properties?.["dataBaseType"],
          autonomousMaintenanceScheduleType:
            result.body.properties?.["autonomousMaintenanceScheduleType"],
          characterSet: result.body.properties?.["characterSet"],
          computeCount: result.body.properties?.["computeCount"],
          computeModel: result.body.properties?.["computeModel"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dataStorageSizeInGbs:
            result.body.properties?.["dataStorageSizeInGbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          displayName: result.body.properties?.["displayName"],
          isAutoScalingEnabled:
            result.body.properties?.["isAutoScalingEnabled"],
          isAutoScalingForStorageEnabled:
            result.body.properties?.["isAutoScalingForStorageEnabled"],
          peerDbIds: result.body.properties?.["peerDbIds"],
          peerDbId: result.body.properties?.["peerDbId"],
          isLocalDataGuardEnabled:
            result.body.properties?.["isLocalDataGuardEnabled"],
          isRemoteDataGuardEnabled:
            result.body.properties?.["isRemoteDataGuardEnabled"],
          localDisasterRecoveryType:
            result.body.properties?.["localDisasterRecoveryType"],
          localStandbyDb: !result.body.properties?.localStandbyDb
            ? undefined
            : {
                lagTimeInSeconds:
                  result.body.properties?.localStandbyDb?.["lagTimeInSeconds"],
                lifecycleState:
                  result.body.properties?.localStandbyDb?.["lifecycleState"],
                lifecycleDetails:
                  result.body.properties?.localStandbyDb?.["lifecycleDetails"],
                timeDataGuardRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDataGuardRoleChanged"
                  ],
                timeDisasterRecoveryRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDisasterRecoveryRoleChanged"
                  ],
              },
          failedDataRecoveryInSeconds:
            result.body.properties?.["failedDataRecoveryInSeconds"],
          isMtlsConnectionRequired:
            result.body.properties?.["isMtlsConnectionRequired"],
          isPreviewVersionWithServiceTermsAccepted:
            result.body.properties?.[
              "isPreviewVersionWithServiceTermsAccepted"
            ],
          licenseModel: result.body.properties?.["licenseModel"],
          ncharacterSet: result.body.properties?.["ncharacterSet"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          scheduledOperations: !result.body.properties?.scheduledOperations
            ? undefined
            : {
                dayOfWeek: {
                  name: result.body.properties?.scheduledOperations?.dayOfWeek[
                    "name"
                  ],
                },
                scheduledStartTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStartTime"
                  ],
                scheduledStopTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStopTime"
                  ],
              },
          privateEndpointIp: result.body.properties?.["privateEndpointIp"],
          privateEndpointLabel:
            result.body.properties?.["privateEndpointLabel"],
          ociUrl: result.body.properties?.["ociUrl"],
          subnetId: result.body.properties?.["subnetId"],
          vnetId: result.body.properties?.["vnetId"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceBegin:
            result.body.properties?.["timeMaintenanceBegin"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceBegin"])
              : undefined,
          timeMaintenanceEnd:
            result.body.properties?.["timeMaintenanceEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceEnd"])
              : undefined,
          actualUsedDataStorageSizeInTbs:
            result.body.properties?.["actualUsedDataStorageSizeInTbs"],
          allocatedStorageSizeInTbs:
            result.body.properties?.["allocatedStorageSizeInTbs"],
          apexDetails: !result.body.properties?.apexDetails
            ? undefined
            : {
                apexVersion:
                  result.body.properties?.apexDetails?.["apexVersion"],
                ordsVersion:
                  result.body.properties?.apexDetails?.["ordsVersion"],
              },
          availableUpgradeVersions:
            result.body.properties?.["availableUpgradeVersions"],
          connectionStrings: !result.body.properties?.connectionStrings
            ? undefined
            : {
                allConnectionStrings: !result.body.properties?.connectionStrings
                  ?.allConnectionStrings
                  ? undefined
                  : {
                      high: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["high"],
                      low: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["low"],
                      medium:
                        result.body.properties?.connectionStrings
                          ?.allConnectionStrings?.["medium"],
                    },
                dedicated:
                  result.body.properties?.connectionStrings?.["dedicated"],
                high: result.body.properties?.connectionStrings?.["high"],
                low: result.body.properties?.connectionStrings?.["low"],
                medium: result.body.properties?.connectionStrings?.["medium"],
                profiles:
                  result.body.properties?.connectionStrings?.["profiles"] ===
                  undefined
                    ? result.body.properties?.connectionStrings?.["profiles"]
                    : result.body.properties?.connectionStrings?.[
                        "profiles"
                      ].map((p: any) => {
                        return {
                          consumerGroup: p["consumerGroup"],
                          displayName: p["displayName"],
                          hostFormat: p["hostFormat"],
                          isRegional: p["isRegional"],
                          protocol: p["protocol"],
                          sessionMode: p["sessionMode"],
                          syntaxFormat: p["syntaxFormat"],
                          tlsAuthentication: p["tlsAuthentication"],
                          value: p["value"],
                        };
                      }),
              },
          connectionUrls: !result.body.properties?.connectionUrls
            ? undefined
            : {
                apexUrl: result.body.properties?.connectionUrls?.["apexUrl"],
                databaseTransformsUrl:
                  result.body.properties?.connectionUrls?.[
                    "databaseTransformsUrl"
                  ],
                graphStudioUrl:
                  result.body.properties?.connectionUrls?.["graphStudioUrl"],
                machineLearningNotebookUrl:
                  result.body.properties?.connectionUrls?.[
                    "machineLearningNotebookUrl"
                  ],
                mongoDbUrl:
                  result.body.properties?.connectionUrls?.["mongoDbUrl"],
                ordsUrl: result.body.properties?.connectionUrls?.["ordsUrl"],
                sqlDevWebUrl:
                  result.body.properties?.connectionUrls?.["sqlDevWebUrl"],
              },
          dataSafeStatus: result.body.properties?.["dataSafeStatus"],
          databaseEdition: result.body.properties?.["databaseEdition"],
          autonomousDatabaseId:
            result.body.properties?.["autonomousDatabaseId"],
          inMemoryAreaInGbs: result.body.properties?.["inMemoryAreaInGbs"],
          nextLongTermBackupTimeStamp:
            result.body.properties?.["nextLongTermBackupTimeStamp"] !==
            undefined
              ? new Date(
                  result.body.properties?.["nextLongTermBackupTimeStamp"],
                )
              : undefined,
          longTermBackupSchedule: !result.body.properties
            ?.longTermBackupSchedule
            ? undefined
            : {
                repeatCadence:
                  result.body.properties?.longTermBackupSchedule?.[
                    "repeatCadence"
                  ],
                timeOfBackup:
                  result.body.properties?.longTermBackupSchedule?.[
                    "timeOfBackup"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.longTermBackupSchedule?.[
                          "timeOfBackup"
                        ],
                      )
                    : undefined,
                retentionPeriodInDays:
                  result.body.properties?.longTermBackupSchedule?.[
                    "retentionPeriodInDays"
                  ],
                isDisabled:
                  result.body.properties?.longTermBackupSchedule?.[
                    "isDisabled"
                  ],
              },
          isPreview: result.body.properties?.["isPreview"],
          localAdgAutoFailoverMaxDataLossLimit:
            result.body.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
          memoryPerOracleComputeUnitInGbs:
            result.body.properties?.["memoryPerOracleComputeUnitInGbs"],
          openMode: result.body.properties?.["openMode"],
          operationsInsightsStatus:
            result.body.properties?.["operationsInsightsStatus"],
          permissionLevel: result.body.properties?.["permissionLevel"],
          privateEndpoint: result.body.properties?.["privateEndpoint"],
          provisionableCpus: result.body.properties?.["provisionableCpus"],
          role: result.body.properties?.["role"],
          serviceConsoleUrl: result.body.properties?.["serviceConsoleUrl"],
          sqlWebDeveloperUrl: result.body.properties?.["sqlWebDeveloperUrl"],
          supportedRegionsToCloneTo:
            result.body.properties?.["supportedRegionsToCloneTo"],
          timeDataGuardRoleChanged:
            result.body.properties?.["timeDataGuardRoleChanged"],
          timeDeletionOfFreeAutonomousDatabase:
            result.body.properties?.["timeDeletionOfFreeAutonomousDatabase"],
          timeLocalDataGuardEnabled:
            result.body.properties?.["timeLocalDataGuardEnabled"],
          timeOfLastFailover: result.body.properties?.["timeOfLastFailover"],
          timeOfLastRefresh: result.body.properties?.["timeOfLastRefresh"],
          timeOfLastRefreshPoint:
            result.body.properties?.["timeOfLastRefreshPoint"],
          timeOfLastSwitchover:
            result.body.properties?.["timeOfLastSwitchover"],
          timeReclamationOfFreeAutonomousDatabase:
            result.body.properties?.["timeReclamationOfFreeAutonomousDatabase"],
          usedDataStorageSizeInGbs:
            result.body.properties?.["usedDataStorageSizeInGbs"],
          usedDataStorageSizeInTbs:
            result.body.properties?.["usedDataStorageSizeInTbs"],
          ocid: result.body.properties?.["ocid"],
          backupRetentionPeriodInDays:
            result.body.properties?.["backupRetentionPeriodInDays"],
          whitelistedIps: result.body.properties?.["whitelistedIps"],
        },
  };
}

/** Create a AutonomousDatabase */
export function autonomousDatabasesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  resource: AutonomousDatabase,
  options: AutonomousDatabasesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AutonomousDatabasesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseListResult> {
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
              adminPassword: p.properties?.["adminPassword"],
              dataBaseType: p.properties?.["dataBaseType"],
              autonomousMaintenanceScheduleType:
                p.properties?.["autonomousMaintenanceScheduleType"],
              characterSet: p.properties?.["characterSet"],
              computeCount: p.properties?.["computeCount"],
              computeModel: p.properties?.["computeModel"],
              cpuCoreCount: p.properties?.["cpuCoreCount"],
              customerContacts:
                p.properties?.["customerContacts"] === undefined
                  ? p.properties?.["customerContacts"]
                  : p.properties?.["customerContacts"].map((p: any) => {
                      return { email: p["email"] };
                    }),
              dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
              dataStorageSizeInGbs: p.properties?.["dataStorageSizeInGbs"],
              dbVersion: p.properties?.["dbVersion"],
              dbWorkload: p.properties?.["dbWorkload"],
              displayName: p.properties?.["displayName"],
              isAutoScalingEnabled: p.properties?.["isAutoScalingEnabled"],
              isAutoScalingForStorageEnabled:
                p.properties?.["isAutoScalingForStorageEnabled"],
              peerDbIds: p.properties?.["peerDbIds"],
              peerDbId: p.properties?.["peerDbId"],
              isLocalDataGuardEnabled:
                p.properties?.["isLocalDataGuardEnabled"],
              isRemoteDataGuardEnabled:
                p.properties?.["isRemoteDataGuardEnabled"],
              localDisasterRecoveryType:
                p.properties?.["localDisasterRecoveryType"],
              localStandbyDb: !p.properties?.localStandbyDb
                ? undefined
                : {
                    lagTimeInSeconds:
                      p.properties?.localStandbyDb?.["lagTimeInSeconds"],
                    lifecycleState:
                      p.properties?.localStandbyDb?.["lifecycleState"],
                    lifecycleDetails:
                      p.properties?.localStandbyDb?.["lifecycleDetails"],
                    timeDataGuardRoleChanged:
                      p.properties?.localStandbyDb?.[
                        "timeDataGuardRoleChanged"
                      ],
                    timeDisasterRecoveryRoleChanged:
                      p.properties?.localStandbyDb?.[
                        "timeDisasterRecoveryRoleChanged"
                      ],
                  },
              failedDataRecoveryInSeconds:
                p.properties?.["failedDataRecoveryInSeconds"],
              isMtlsConnectionRequired:
                p.properties?.["isMtlsConnectionRequired"],
              isPreviewVersionWithServiceTermsAccepted:
                p.properties?.["isPreviewVersionWithServiceTermsAccepted"],
              licenseModel: p.properties?.["licenseModel"],
              ncharacterSet: p.properties?.["ncharacterSet"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              provisioningState: p.properties?.["provisioningState"],
              lifecycleState: p.properties?.["lifecycleState"],
              scheduledOperations: !p.properties?.scheduledOperations
                ? undefined
                : {
                    dayOfWeek: {
                      name: p.properties?.scheduledOperations?.dayOfWeek[
                        "name"
                      ],
                    },
                    scheduledStartTime:
                      p.properties?.scheduledOperations?.["scheduledStartTime"],
                    scheduledStopTime:
                      p.properties?.scheduledOperations?.["scheduledStopTime"],
                  },
              privateEndpointIp: p.properties?.["privateEndpointIp"],
              privateEndpointLabel: p.properties?.["privateEndpointLabel"],
              ociUrl: p.properties?.["ociUrl"],
              subnetId: p.properties?.["subnetId"],
              vnetId: p.properties?.["vnetId"],
              timeCreated:
                p.properties?.["timeCreated"] !== undefined
                  ? new Date(p.properties?.["timeCreated"])
                  : undefined,
              timeMaintenanceBegin:
                p.properties?.["timeMaintenanceBegin"] !== undefined
                  ? new Date(p.properties?.["timeMaintenanceBegin"])
                  : undefined,
              timeMaintenanceEnd:
                p.properties?.["timeMaintenanceEnd"] !== undefined
                  ? new Date(p.properties?.["timeMaintenanceEnd"])
                  : undefined,
              actualUsedDataStorageSizeInTbs:
                p.properties?.["actualUsedDataStorageSizeInTbs"],
              allocatedStorageSizeInTbs:
                p.properties?.["allocatedStorageSizeInTbs"],
              apexDetails: !p.properties?.apexDetails
                ? undefined
                : {
                    apexVersion: p.properties?.apexDetails?.["apexVersion"],
                    ordsVersion: p.properties?.apexDetails?.["ordsVersion"],
                  },
              availableUpgradeVersions:
                p.properties?.["availableUpgradeVersions"],
              connectionStrings: !p.properties?.connectionStrings
                ? undefined
                : {
                    allConnectionStrings: !p.properties?.connectionStrings
                      ?.allConnectionStrings
                      ? undefined
                      : {
                          high: p.properties?.connectionStrings
                            ?.allConnectionStrings?.["high"],
                          low: p.properties?.connectionStrings
                            ?.allConnectionStrings?.["low"],
                          medium:
                            p.properties?.connectionStrings
                              ?.allConnectionStrings?.["medium"],
                        },
                    dedicated: p.properties?.connectionStrings?.["dedicated"],
                    high: p.properties?.connectionStrings?.["high"],
                    low: p.properties?.connectionStrings?.["low"],
                    medium: p.properties?.connectionStrings?.["medium"],
                    profiles:
                      p.properties?.connectionStrings?.["profiles"] ===
                      undefined
                        ? p.properties?.connectionStrings?.["profiles"]
                        : p.properties?.connectionStrings?.["profiles"].map(
                            (p: any) => {
                              return {
                                consumerGroup: p["consumerGroup"],
                                displayName: p["displayName"],
                                hostFormat: p["hostFormat"],
                                isRegional: p["isRegional"],
                                protocol: p["protocol"],
                                sessionMode: p["sessionMode"],
                                syntaxFormat: p["syntaxFormat"],
                                tlsAuthentication: p["tlsAuthentication"],
                                value: p["value"],
                              };
                            },
                          ),
                  },
              connectionUrls: !p.properties?.connectionUrls
                ? undefined
                : {
                    apexUrl: p.properties?.connectionUrls?.["apexUrl"],
                    databaseTransformsUrl:
                      p.properties?.connectionUrls?.["databaseTransformsUrl"],
                    graphStudioUrl:
                      p.properties?.connectionUrls?.["graphStudioUrl"],
                    machineLearningNotebookUrl:
                      p.properties?.connectionUrls?.[
                        "machineLearningNotebookUrl"
                      ],
                    mongoDbUrl: p.properties?.connectionUrls?.["mongoDbUrl"],
                    ordsUrl: p.properties?.connectionUrls?.["ordsUrl"],
                    sqlDevWebUrl:
                      p.properties?.connectionUrls?.["sqlDevWebUrl"],
                  },
              dataSafeStatus: p.properties?.["dataSafeStatus"],
              databaseEdition: p.properties?.["databaseEdition"],
              autonomousDatabaseId: p.properties?.["autonomousDatabaseId"],
              inMemoryAreaInGbs: p.properties?.["inMemoryAreaInGbs"],
              nextLongTermBackupTimeStamp:
                p.properties?.["nextLongTermBackupTimeStamp"] !== undefined
                  ? new Date(p.properties?.["nextLongTermBackupTimeStamp"])
                  : undefined,
              longTermBackupSchedule: !p.properties?.longTermBackupSchedule
                ? undefined
                : {
                    repeatCadence:
                      p.properties?.longTermBackupSchedule?.["repeatCadence"],
                    timeOfBackup:
                      p.properties?.longTermBackupSchedule?.["timeOfBackup"] !==
                      undefined
                        ? new Date(
                            p.properties?.longTermBackupSchedule?.[
                              "timeOfBackup"
                            ],
                          )
                        : undefined,
                    retentionPeriodInDays:
                      p.properties?.longTermBackupSchedule?.[
                        "retentionPeriodInDays"
                      ],
                    isDisabled:
                      p.properties?.longTermBackupSchedule?.["isDisabled"],
                  },
              isPreview: p.properties?.["isPreview"],
              localAdgAutoFailoverMaxDataLossLimit:
                p.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
              memoryPerOracleComputeUnitInGbs:
                p.properties?.["memoryPerOracleComputeUnitInGbs"],
              openMode: p.properties?.["openMode"],
              operationsInsightsStatus:
                p.properties?.["operationsInsightsStatus"],
              permissionLevel: p.properties?.["permissionLevel"],
              privateEndpoint: p.properties?.["privateEndpoint"],
              provisionableCpus: p.properties?.["provisionableCpus"],
              role: p.properties?.["role"],
              serviceConsoleUrl: p.properties?.["serviceConsoleUrl"],
              sqlWebDeveloperUrl: p.properties?.["sqlWebDeveloperUrl"],
              supportedRegionsToCloneTo:
                p.properties?.["supportedRegionsToCloneTo"],
              timeDataGuardRoleChanged:
                p.properties?.["timeDataGuardRoleChanged"],
              timeDeletionOfFreeAutonomousDatabase:
                p.properties?.["timeDeletionOfFreeAutonomousDatabase"],
              timeLocalDataGuardEnabled:
                p.properties?.["timeLocalDataGuardEnabled"],
              timeOfLastFailover: p.properties?.["timeOfLastFailover"],
              timeOfLastRefresh: p.properties?.["timeOfLastRefresh"],
              timeOfLastRefreshPoint: p.properties?.["timeOfLastRefreshPoint"],
              timeOfLastSwitchover: p.properties?.["timeOfLastSwitchover"],
              timeReclamationOfFreeAutonomousDatabase:
                p.properties?.["timeReclamationOfFreeAutonomousDatabase"],
              usedDataStorageSizeInGbs:
                p.properties?.["usedDataStorageSizeInGbs"],
              usedDataStorageSizeInTbs:
                p.properties?.["usedDataStorageSizeInTbs"],
              ocid: p.properties?.["ocid"],
              backupRetentionPeriodInDays:
                p.properties?.["backupRetentionPeriodInDays"],
              whitelistedIps: p.properties?.["whitelistedIps"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDatabase resources by resource group */
export function autonomousDatabasesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AutonomousDatabasesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabase> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabasesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _autonomousDatabasesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabasesSwitchoverSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesSwitchoverOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/switchover",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { peerDbId: body["peerDbId"] },
    });
}

export async function _autonomousDatabasesSwitchoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
          adminPassword: result.body.properties?.["adminPassword"],
          dataBaseType: result.body.properties?.["dataBaseType"],
          autonomousMaintenanceScheduleType:
            result.body.properties?.["autonomousMaintenanceScheduleType"],
          characterSet: result.body.properties?.["characterSet"],
          computeCount: result.body.properties?.["computeCount"],
          computeModel: result.body.properties?.["computeModel"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dataStorageSizeInGbs:
            result.body.properties?.["dataStorageSizeInGbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          displayName: result.body.properties?.["displayName"],
          isAutoScalingEnabled:
            result.body.properties?.["isAutoScalingEnabled"],
          isAutoScalingForStorageEnabled:
            result.body.properties?.["isAutoScalingForStorageEnabled"],
          peerDbIds: result.body.properties?.["peerDbIds"],
          peerDbId: result.body.properties?.["peerDbId"],
          isLocalDataGuardEnabled:
            result.body.properties?.["isLocalDataGuardEnabled"],
          isRemoteDataGuardEnabled:
            result.body.properties?.["isRemoteDataGuardEnabled"],
          localDisasterRecoveryType:
            result.body.properties?.["localDisasterRecoveryType"],
          localStandbyDb: !result.body.properties?.localStandbyDb
            ? undefined
            : {
                lagTimeInSeconds:
                  result.body.properties?.localStandbyDb?.["lagTimeInSeconds"],
                lifecycleState:
                  result.body.properties?.localStandbyDb?.["lifecycleState"],
                lifecycleDetails:
                  result.body.properties?.localStandbyDb?.["lifecycleDetails"],
                timeDataGuardRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDataGuardRoleChanged"
                  ],
                timeDisasterRecoveryRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDisasterRecoveryRoleChanged"
                  ],
              },
          failedDataRecoveryInSeconds:
            result.body.properties?.["failedDataRecoveryInSeconds"],
          isMtlsConnectionRequired:
            result.body.properties?.["isMtlsConnectionRequired"],
          isPreviewVersionWithServiceTermsAccepted:
            result.body.properties?.[
              "isPreviewVersionWithServiceTermsAccepted"
            ],
          licenseModel: result.body.properties?.["licenseModel"],
          ncharacterSet: result.body.properties?.["ncharacterSet"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          scheduledOperations: !result.body.properties?.scheduledOperations
            ? undefined
            : {
                dayOfWeek: {
                  name: result.body.properties?.scheduledOperations?.dayOfWeek[
                    "name"
                  ],
                },
                scheduledStartTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStartTime"
                  ],
                scheduledStopTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStopTime"
                  ],
              },
          privateEndpointIp: result.body.properties?.["privateEndpointIp"],
          privateEndpointLabel:
            result.body.properties?.["privateEndpointLabel"],
          ociUrl: result.body.properties?.["ociUrl"],
          subnetId: result.body.properties?.["subnetId"],
          vnetId: result.body.properties?.["vnetId"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceBegin:
            result.body.properties?.["timeMaintenanceBegin"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceBegin"])
              : undefined,
          timeMaintenanceEnd:
            result.body.properties?.["timeMaintenanceEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceEnd"])
              : undefined,
          actualUsedDataStorageSizeInTbs:
            result.body.properties?.["actualUsedDataStorageSizeInTbs"],
          allocatedStorageSizeInTbs:
            result.body.properties?.["allocatedStorageSizeInTbs"],
          apexDetails: !result.body.properties?.apexDetails
            ? undefined
            : {
                apexVersion:
                  result.body.properties?.apexDetails?.["apexVersion"],
                ordsVersion:
                  result.body.properties?.apexDetails?.["ordsVersion"],
              },
          availableUpgradeVersions:
            result.body.properties?.["availableUpgradeVersions"],
          connectionStrings: !result.body.properties?.connectionStrings
            ? undefined
            : {
                allConnectionStrings: !result.body.properties?.connectionStrings
                  ?.allConnectionStrings
                  ? undefined
                  : {
                      high: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["high"],
                      low: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["low"],
                      medium:
                        result.body.properties?.connectionStrings
                          ?.allConnectionStrings?.["medium"],
                    },
                dedicated:
                  result.body.properties?.connectionStrings?.["dedicated"],
                high: result.body.properties?.connectionStrings?.["high"],
                low: result.body.properties?.connectionStrings?.["low"],
                medium: result.body.properties?.connectionStrings?.["medium"],
                profiles:
                  result.body.properties?.connectionStrings?.["profiles"] ===
                  undefined
                    ? result.body.properties?.connectionStrings?.["profiles"]
                    : result.body.properties?.connectionStrings?.[
                        "profiles"
                      ].map((p: any) => {
                        return {
                          consumerGroup: p["consumerGroup"],
                          displayName: p["displayName"],
                          hostFormat: p["hostFormat"],
                          isRegional: p["isRegional"],
                          protocol: p["protocol"],
                          sessionMode: p["sessionMode"],
                          syntaxFormat: p["syntaxFormat"],
                          tlsAuthentication: p["tlsAuthentication"],
                          value: p["value"],
                        };
                      }),
              },
          connectionUrls: !result.body.properties?.connectionUrls
            ? undefined
            : {
                apexUrl: result.body.properties?.connectionUrls?.["apexUrl"],
                databaseTransformsUrl:
                  result.body.properties?.connectionUrls?.[
                    "databaseTransformsUrl"
                  ],
                graphStudioUrl:
                  result.body.properties?.connectionUrls?.["graphStudioUrl"],
                machineLearningNotebookUrl:
                  result.body.properties?.connectionUrls?.[
                    "machineLearningNotebookUrl"
                  ],
                mongoDbUrl:
                  result.body.properties?.connectionUrls?.["mongoDbUrl"],
                ordsUrl: result.body.properties?.connectionUrls?.["ordsUrl"],
                sqlDevWebUrl:
                  result.body.properties?.connectionUrls?.["sqlDevWebUrl"],
              },
          dataSafeStatus: result.body.properties?.["dataSafeStatus"],
          databaseEdition: result.body.properties?.["databaseEdition"],
          autonomousDatabaseId:
            result.body.properties?.["autonomousDatabaseId"],
          inMemoryAreaInGbs: result.body.properties?.["inMemoryAreaInGbs"],
          nextLongTermBackupTimeStamp:
            result.body.properties?.["nextLongTermBackupTimeStamp"] !==
            undefined
              ? new Date(
                  result.body.properties?.["nextLongTermBackupTimeStamp"],
                )
              : undefined,
          longTermBackupSchedule: !result.body.properties
            ?.longTermBackupSchedule
            ? undefined
            : {
                repeatCadence:
                  result.body.properties?.longTermBackupSchedule?.[
                    "repeatCadence"
                  ],
                timeOfBackup:
                  result.body.properties?.longTermBackupSchedule?.[
                    "timeOfBackup"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.longTermBackupSchedule?.[
                          "timeOfBackup"
                        ],
                      )
                    : undefined,
                retentionPeriodInDays:
                  result.body.properties?.longTermBackupSchedule?.[
                    "retentionPeriodInDays"
                  ],
                isDisabled:
                  result.body.properties?.longTermBackupSchedule?.[
                    "isDisabled"
                  ],
              },
          isPreview: result.body.properties?.["isPreview"],
          localAdgAutoFailoverMaxDataLossLimit:
            result.body.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
          memoryPerOracleComputeUnitInGbs:
            result.body.properties?.["memoryPerOracleComputeUnitInGbs"],
          openMode: result.body.properties?.["openMode"],
          operationsInsightsStatus:
            result.body.properties?.["operationsInsightsStatus"],
          permissionLevel: result.body.properties?.["permissionLevel"],
          privateEndpoint: result.body.properties?.["privateEndpoint"],
          provisionableCpus: result.body.properties?.["provisionableCpus"],
          role: result.body.properties?.["role"],
          serviceConsoleUrl: result.body.properties?.["serviceConsoleUrl"],
          sqlWebDeveloperUrl: result.body.properties?.["sqlWebDeveloperUrl"],
          supportedRegionsToCloneTo:
            result.body.properties?.["supportedRegionsToCloneTo"],
          timeDataGuardRoleChanged:
            result.body.properties?.["timeDataGuardRoleChanged"],
          timeDeletionOfFreeAutonomousDatabase:
            result.body.properties?.["timeDeletionOfFreeAutonomousDatabase"],
          timeLocalDataGuardEnabled:
            result.body.properties?.["timeLocalDataGuardEnabled"],
          timeOfLastFailover: result.body.properties?.["timeOfLastFailover"],
          timeOfLastRefresh: result.body.properties?.["timeOfLastRefresh"],
          timeOfLastRefreshPoint:
            result.body.properties?.["timeOfLastRefreshPoint"],
          timeOfLastSwitchover:
            result.body.properties?.["timeOfLastSwitchover"],
          timeReclamationOfFreeAutonomousDatabase:
            result.body.properties?.["timeReclamationOfFreeAutonomousDatabase"],
          usedDataStorageSizeInGbs:
            result.body.properties?.["usedDataStorageSizeInGbs"],
          usedDataStorageSizeInTbs:
            result.body.properties?.["usedDataStorageSizeInTbs"],
          ocid: result.body.properties?.["ocid"],
          backupRetentionPeriodInDays:
            result.body.properties?.["backupRetentionPeriodInDays"],
          whitelistedIps: result.body.properties?.["whitelistedIps"],
        },
  };
}

/** Perform switchover action on Autonomous Database */
export function autonomousDatabasesSwitchover(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesSwitchoverOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesSwitchoverDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesSwitchoverSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesFailoverSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesFailoverOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/failover",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { peerDbId: body["peerDbId"] },
    });
}

export async function _autonomousDatabasesFailoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
          adminPassword: result.body.properties?.["adminPassword"],
          dataBaseType: result.body.properties?.["dataBaseType"],
          autonomousMaintenanceScheduleType:
            result.body.properties?.["autonomousMaintenanceScheduleType"],
          characterSet: result.body.properties?.["characterSet"],
          computeCount: result.body.properties?.["computeCount"],
          computeModel: result.body.properties?.["computeModel"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dataStorageSizeInGbs:
            result.body.properties?.["dataStorageSizeInGbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          displayName: result.body.properties?.["displayName"],
          isAutoScalingEnabled:
            result.body.properties?.["isAutoScalingEnabled"],
          isAutoScalingForStorageEnabled:
            result.body.properties?.["isAutoScalingForStorageEnabled"],
          peerDbIds: result.body.properties?.["peerDbIds"],
          peerDbId: result.body.properties?.["peerDbId"],
          isLocalDataGuardEnabled:
            result.body.properties?.["isLocalDataGuardEnabled"],
          isRemoteDataGuardEnabled:
            result.body.properties?.["isRemoteDataGuardEnabled"],
          localDisasterRecoveryType:
            result.body.properties?.["localDisasterRecoveryType"],
          localStandbyDb: !result.body.properties?.localStandbyDb
            ? undefined
            : {
                lagTimeInSeconds:
                  result.body.properties?.localStandbyDb?.["lagTimeInSeconds"],
                lifecycleState:
                  result.body.properties?.localStandbyDb?.["lifecycleState"],
                lifecycleDetails:
                  result.body.properties?.localStandbyDb?.["lifecycleDetails"],
                timeDataGuardRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDataGuardRoleChanged"
                  ],
                timeDisasterRecoveryRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDisasterRecoveryRoleChanged"
                  ],
              },
          failedDataRecoveryInSeconds:
            result.body.properties?.["failedDataRecoveryInSeconds"],
          isMtlsConnectionRequired:
            result.body.properties?.["isMtlsConnectionRequired"],
          isPreviewVersionWithServiceTermsAccepted:
            result.body.properties?.[
              "isPreviewVersionWithServiceTermsAccepted"
            ],
          licenseModel: result.body.properties?.["licenseModel"],
          ncharacterSet: result.body.properties?.["ncharacterSet"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          scheduledOperations: !result.body.properties?.scheduledOperations
            ? undefined
            : {
                dayOfWeek: {
                  name: result.body.properties?.scheduledOperations?.dayOfWeek[
                    "name"
                  ],
                },
                scheduledStartTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStartTime"
                  ],
                scheduledStopTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStopTime"
                  ],
              },
          privateEndpointIp: result.body.properties?.["privateEndpointIp"],
          privateEndpointLabel:
            result.body.properties?.["privateEndpointLabel"],
          ociUrl: result.body.properties?.["ociUrl"],
          subnetId: result.body.properties?.["subnetId"],
          vnetId: result.body.properties?.["vnetId"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceBegin:
            result.body.properties?.["timeMaintenanceBegin"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceBegin"])
              : undefined,
          timeMaintenanceEnd:
            result.body.properties?.["timeMaintenanceEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceEnd"])
              : undefined,
          actualUsedDataStorageSizeInTbs:
            result.body.properties?.["actualUsedDataStorageSizeInTbs"],
          allocatedStorageSizeInTbs:
            result.body.properties?.["allocatedStorageSizeInTbs"],
          apexDetails: !result.body.properties?.apexDetails
            ? undefined
            : {
                apexVersion:
                  result.body.properties?.apexDetails?.["apexVersion"],
                ordsVersion:
                  result.body.properties?.apexDetails?.["ordsVersion"],
              },
          availableUpgradeVersions:
            result.body.properties?.["availableUpgradeVersions"],
          connectionStrings: !result.body.properties?.connectionStrings
            ? undefined
            : {
                allConnectionStrings: !result.body.properties?.connectionStrings
                  ?.allConnectionStrings
                  ? undefined
                  : {
                      high: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["high"],
                      low: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["low"],
                      medium:
                        result.body.properties?.connectionStrings
                          ?.allConnectionStrings?.["medium"],
                    },
                dedicated:
                  result.body.properties?.connectionStrings?.["dedicated"],
                high: result.body.properties?.connectionStrings?.["high"],
                low: result.body.properties?.connectionStrings?.["low"],
                medium: result.body.properties?.connectionStrings?.["medium"],
                profiles:
                  result.body.properties?.connectionStrings?.["profiles"] ===
                  undefined
                    ? result.body.properties?.connectionStrings?.["profiles"]
                    : result.body.properties?.connectionStrings?.[
                        "profiles"
                      ].map((p: any) => {
                        return {
                          consumerGroup: p["consumerGroup"],
                          displayName: p["displayName"],
                          hostFormat: p["hostFormat"],
                          isRegional: p["isRegional"],
                          protocol: p["protocol"],
                          sessionMode: p["sessionMode"],
                          syntaxFormat: p["syntaxFormat"],
                          tlsAuthentication: p["tlsAuthentication"],
                          value: p["value"],
                        };
                      }),
              },
          connectionUrls: !result.body.properties?.connectionUrls
            ? undefined
            : {
                apexUrl: result.body.properties?.connectionUrls?.["apexUrl"],
                databaseTransformsUrl:
                  result.body.properties?.connectionUrls?.[
                    "databaseTransformsUrl"
                  ],
                graphStudioUrl:
                  result.body.properties?.connectionUrls?.["graphStudioUrl"],
                machineLearningNotebookUrl:
                  result.body.properties?.connectionUrls?.[
                    "machineLearningNotebookUrl"
                  ],
                mongoDbUrl:
                  result.body.properties?.connectionUrls?.["mongoDbUrl"],
                ordsUrl: result.body.properties?.connectionUrls?.["ordsUrl"],
                sqlDevWebUrl:
                  result.body.properties?.connectionUrls?.["sqlDevWebUrl"],
              },
          dataSafeStatus: result.body.properties?.["dataSafeStatus"],
          databaseEdition: result.body.properties?.["databaseEdition"],
          autonomousDatabaseId:
            result.body.properties?.["autonomousDatabaseId"],
          inMemoryAreaInGbs: result.body.properties?.["inMemoryAreaInGbs"],
          nextLongTermBackupTimeStamp:
            result.body.properties?.["nextLongTermBackupTimeStamp"] !==
            undefined
              ? new Date(
                  result.body.properties?.["nextLongTermBackupTimeStamp"],
                )
              : undefined,
          longTermBackupSchedule: !result.body.properties
            ?.longTermBackupSchedule
            ? undefined
            : {
                repeatCadence:
                  result.body.properties?.longTermBackupSchedule?.[
                    "repeatCadence"
                  ],
                timeOfBackup:
                  result.body.properties?.longTermBackupSchedule?.[
                    "timeOfBackup"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.longTermBackupSchedule?.[
                          "timeOfBackup"
                        ],
                      )
                    : undefined,
                retentionPeriodInDays:
                  result.body.properties?.longTermBackupSchedule?.[
                    "retentionPeriodInDays"
                  ],
                isDisabled:
                  result.body.properties?.longTermBackupSchedule?.[
                    "isDisabled"
                  ],
              },
          isPreview: result.body.properties?.["isPreview"],
          localAdgAutoFailoverMaxDataLossLimit:
            result.body.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
          memoryPerOracleComputeUnitInGbs:
            result.body.properties?.["memoryPerOracleComputeUnitInGbs"],
          openMode: result.body.properties?.["openMode"],
          operationsInsightsStatus:
            result.body.properties?.["operationsInsightsStatus"],
          permissionLevel: result.body.properties?.["permissionLevel"],
          privateEndpoint: result.body.properties?.["privateEndpoint"],
          provisionableCpus: result.body.properties?.["provisionableCpus"],
          role: result.body.properties?.["role"],
          serviceConsoleUrl: result.body.properties?.["serviceConsoleUrl"],
          sqlWebDeveloperUrl: result.body.properties?.["sqlWebDeveloperUrl"],
          supportedRegionsToCloneTo:
            result.body.properties?.["supportedRegionsToCloneTo"],
          timeDataGuardRoleChanged:
            result.body.properties?.["timeDataGuardRoleChanged"],
          timeDeletionOfFreeAutonomousDatabase:
            result.body.properties?.["timeDeletionOfFreeAutonomousDatabase"],
          timeLocalDataGuardEnabled:
            result.body.properties?.["timeLocalDataGuardEnabled"],
          timeOfLastFailover: result.body.properties?.["timeOfLastFailover"],
          timeOfLastRefresh: result.body.properties?.["timeOfLastRefresh"],
          timeOfLastRefreshPoint:
            result.body.properties?.["timeOfLastRefreshPoint"],
          timeOfLastSwitchover:
            result.body.properties?.["timeOfLastSwitchover"],
          timeReclamationOfFreeAutonomousDatabase:
            result.body.properties?.["timeReclamationOfFreeAutonomousDatabase"],
          usedDataStorageSizeInGbs:
            result.body.properties?.["usedDataStorageSizeInGbs"],
          usedDataStorageSizeInTbs:
            result.body.properties?.["usedDataStorageSizeInTbs"],
          ocid: result.body.properties?.["ocid"],
          backupRetentionPeriodInDays:
            result.body.properties?.["backupRetentionPeriodInDays"],
          whitelistedIps: result.body.properties?.["whitelistedIps"],
        },
  };
}

/** Perform failover action on Autonomous Database */
export function autonomousDatabasesFailover(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesFailoverOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesFailoverDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesFailoverSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesGenerateWalletSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: GenerateAutonomousDatabaseWalletDetails,
  options: AutonomousDatabasesGenerateWalletOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/generateWallet",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        generateType: body["generateType"],
        isRegional: body["isRegional"],
        password: body["password"],
      },
    });
}

export async function _autonomousDatabasesGenerateWalletDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseWalletFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    walletFiles: result.body["walletFiles"],
  };
}

/** Generate wallet action on Autonomous Database */
export async function autonomousDatabasesGenerateWallet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: GenerateAutonomousDatabaseWalletDetails,
  options: AutonomousDatabasesGenerateWalletOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseWalletFile> {
  const result = await _autonomousDatabasesGenerateWalletSend(
    context,
    subscriptionId,
    resourceGroupName,
    autonomousdatabasename,
    body,
    options,
  );
  return _autonomousDatabasesGenerateWalletDeserialize(result);
}

export function _autonomousDatabasesRestoreSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: RestoreAutonomousDatabaseDetails,
  options: AutonomousDatabasesRestoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/restore",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { timestamp: body["timestamp"].toISOString() },
    });
}

export async function _autonomousDatabasesRestoreDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
          adminPassword: result.body.properties?.["adminPassword"],
          dataBaseType: result.body.properties?.["dataBaseType"],
          autonomousMaintenanceScheduleType:
            result.body.properties?.["autonomousMaintenanceScheduleType"],
          characterSet: result.body.properties?.["characterSet"],
          computeCount: result.body.properties?.["computeCount"],
          computeModel: result.body.properties?.["computeModel"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dataStorageSizeInGbs:
            result.body.properties?.["dataStorageSizeInGbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          displayName: result.body.properties?.["displayName"],
          isAutoScalingEnabled:
            result.body.properties?.["isAutoScalingEnabled"],
          isAutoScalingForStorageEnabled:
            result.body.properties?.["isAutoScalingForStorageEnabled"],
          peerDbIds: result.body.properties?.["peerDbIds"],
          peerDbId: result.body.properties?.["peerDbId"],
          isLocalDataGuardEnabled:
            result.body.properties?.["isLocalDataGuardEnabled"],
          isRemoteDataGuardEnabled:
            result.body.properties?.["isRemoteDataGuardEnabled"],
          localDisasterRecoveryType:
            result.body.properties?.["localDisasterRecoveryType"],
          localStandbyDb: !result.body.properties?.localStandbyDb
            ? undefined
            : {
                lagTimeInSeconds:
                  result.body.properties?.localStandbyDb?.["lagTimeInSeconds"],
                lifecycleState:
                  result.body.properties?.localStandbyDb?.["lifecycleState"],
                lifecycleDetails:
                  result.body.properties?.localStandbyDb?.["lifecycleDetails"],
                timeDataGuardRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDataGuardRoleChanged"
                  ],
                timeDisasterRecoveryRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDisasterRecoveryRoleChanged"
                  ],
              },
          failedDataRecoveryInSeconds:
            result.body.properties?.["failedDataRecoveryInSeconds"],
          isMtlsConnectionRequired:
            result.body.properties?.["isMtlsConnectionRequired"],
          isPreviewVersionWithServiceTermsAccepted:
            result.body.properties?.[
              "isPreviewVersionWithServiceTermsAccepted"
            ],
          licenseModel: result.body.properties?.["licenseModel"],
          ncharacterSet: result.body.properties?.["ncharacterSet"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          scheduledOperations: !result.body.properties?.scheduledOperations
            ? undefined
            : {
                dayOfWeek: {
                  name: result.body.properties?.scheduledOperations?.dayOfWeek[
                    "name"
                  ],
                },
                scheduledStartTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStartTime"
                  ],
                scheduledStopTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStopTime"
                  ],
              },
          privateEndpointIp: result.body.properties?.["privateEndpointIp"],
          privateEndpointLabel:
            result.body.properties?.["privateEndpointLabel"],
          ociUrl: result.body.properties?.["ociUrl"],
          subnetId: result.body.properties?.["subnetId"],
          vnetId: result.body.properties?.["vnetId"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceBegin:
            result.body.properties?.["timeMaintenanceBegin"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceBegin"])
              : undefined,
          timeMaintenanceEnd:
            result.body.properties?.["timeMaintenanceEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceEnd"])
              : undefined,
          actualUsedDataStorageSizeInTbs:
            result.body.properties?.["actualUsedDataStorageSizeInTbs"],
          allocatedStorageSizeInTbs:
            result.body.properties?.["allocatedStorageSizeInTbs"],
          apexDetails: !result.body.properties?.apexDetails
            ? undefined
            : {
                apexVersion:
                  result.body.properties?.apexDetails?.["apexVersion"],
                ordsVersion:
                  result.body.properties?.apexDetails?.["ordsVersion"],
              },
          availableUpgradeVersions:
            result.body.properties?.["availableUpgradeVersions"],
          connectionStrings: !result.body.properties?.connectionStrings
            ? undefined
            : {
                allConnectionStrings: !result.body.properties?.connectionStrings
                  ?.allConnectionStrings
                  ? undefined
                  : {
                      high: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["high"],
                      low: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["low"],
                      medium:
                        result.body.properties?.connectionStrings
                          ?.allConnectionStrings?.["medium"],
                    },
                dedicated:
                  result.body.properties?.connectionStrings?.["dedicated"],
                high: result.body.properties?.connectionStrings?.["high"],
                low: result.body.properties?.connectionStrings?.["low"],
                medium: result.body.properties?.connectionStrings?.["medium"],
                profiles:
                  result.body.properties?.connectionStrings?.["profiles"] ===
                  undefined
                    ? result.body.properties?.connectionStrings?.["profiles"]
                    : result.body.properties?.connectionStrings?.[
                        "profiles"
                      ].map((p: any) => {
                        return {
                          consumerGroup: p["consumerGroup"],
                          displayName: p["displayName"],
                          hostFormat: p["hostFormat"],
                          isRegional: p["isRegional"],
                          protocol: p["protocol"],
                          sessionMode: p["sessionMode"],
                          syntaxFormat: p["syntaxFormat"],
                          tlsAuthentication: p["tlsAuthentication"],
                          value: p["value"],
                        };
                      }),
              },
          connectionUrls: !result.body.properties?.connectionUrls
            ? undefined
            : {
                apexUrl: result.body.properties?.connectionUrls?.["apexUrl"],
                databaseTransformsUrl:
                  result.body.properties?.connectionUrls?.[
                    "databaseTransformsUrl"
                  ],
                graphStudioUrl:
                  result.body.properties?.connectionUrls?.["graphStudioUrl"],
                machineLearningNotebookUrl:
                  result.body.properties?.connectionUrls?.[
                    "machineLearningNotebookUrl"
                  ],
                mongoDbUrl:
                  result.body.properties?.connectionUrls?.["mongoDbUrl"],
                ordsUrl: result.body.properties?.connectionUrls?.["ordsUrl"],
                sqlDevWebUrl:
                  result.body.properties?.connectionUrls?.["sqlDevWebUrl"],
              },
          dataSafeStatus: result.body.properties?.["dataSafeStatus"],
          databaseEdition: result.body.properties?.["databaseEdition"],
          autonomousDatabaseId:
            result.body.properties?.["autonomousDatabaseId"],
          inMemoryAreaInGbs: result.body.properties?.["inMemoryAreaInGbs"],
          nextLongTermBackupTimeStamp:
            result.body.properties?.["nextLongTermBackupTimeStamp"] !==
            undefined
              ? new Date(
                  result.body.properties?.["nextLongTermBackupTimeStamp"],
                )
              : undefined,
          longTermBackupSchedule: !result.body.properties
            ?.longTermBackupSchedule
            ? undefined
            : {
                repeatCadence:
                  result.body.properties?.longTermBackupSchedule?.[
                    "repeatCadence"
                  ],
                timeOfBackup:
                  result.body.properties?.longTermBackupSchedule?.[
                    "timeOfBackup"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.longTermBackupSchedule?.[
                          "timeOfBackup"
                        ],
                      )
                    : undefined,
                retentionPeriodInDays:
                  result.body.properties?.longTermBackupSchedule?.[
                    "retentionPeriodInDays"
                  ],
                isDisabled:
                  result.body.properties?.longTermBackupSchedule?.[
                    "isDisabled"
                  ],
              },
          isPreview: result.body.properties?.["isPreview"],
          localAdgAutoFailoverMaxDataLossLimit:
            result.body.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
          memoryPerOracleComputeUnitInGbs:
            result.body.properties?.["memoryPerOracleComputeUnitInGbs"],
          openMode: result.body.properties?.["openMode"],
          operationsInsightsStatus:
            result.body.properties?.["operationsInsightsStatus"],
          permissionLevel: result.body.properties?.["permissionLevel"],
          privateEndpoint: result.body.properties?.["privateEndpoint"],
          provisionableCpus: result.body.properties?.["provisionableCpus"],
          role: result.body.properties?.["role"],
          serviceConsoleUrl: result.body.properties?.["serviceConsoleUrl"],
          sqlWebDeveloperUrl: result.body.properties?.["sqlWebDeveloperUrl"],
          supportedRegionsToCloneTo:
            result.body.properties?.["supportedRegionsToCloneTo"],
          timeDataGuardRoleChanged:
            result.body.properties?.["timeDataGuardRoleChanged"],
          timeDeletionOfFreeAutonomousDatabase:
            result.body.properties?.["timeDeletionOfFreeAutonomousDatabase"],
          timeLocalDataGuardEnabled:
            result.body.properties?.["timeLocalDataGuardEnabled"],
          timeOfLastFailover: result.body.properties?.["timeOfLastFailover"],
          timeOfLastRefresh: result.body.properties?.["timeOfLastRefresh"],
          timeOfLastRefreshPoint:
            result.body.properties?.["timeOfLastRefreshPoint"],
          timeOfLastSwitchover:
            result.body.properties?.["timeOfLastSwitchover"],
          timeReclamationOfFreeAutonomousDatabase:
            result.body.properties?.["timeReclamationOfFreeAutonomousDatabase"],
          usedDataStorageSizeInGbs:
            result.body.properties?.["usedDataStorageSizeInGbs"],
          usedDataStorageSizeInTbs:
            result.body.properties?.["usedDataStorageSizeInTbs"],
          ocid: result.body.properties?.["ocid"],
          backupRetentionPeriodInDays:
            result.body.properties?.["backupRetentionPeriodInDays"],
          whitelistedIps: result.body.properties?.["whitelistedIps"],
        },
  };
}

/** Restores an Autonomous Database based on the provided request parameters. */
export function autonomousDatabasesRestore(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: RestoreAutonomousDatabaseDetails,
  options: AutonomousDatabasesRestoreOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesRestoreDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesRestoreSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesShrinkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesShrinkOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/shrink",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesShrinkDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
          adminPassword: result.body.properties?.["adminPassword"],
          dataBaseType: result.body.properties?.["dataBaseType"],
          autonomousMaintenanceScheduleType:
            result.body.properties?.["autonomousMaintenanceScheduleType"],
          characterSet: result.body.properties?.["characterSet"],
          computeCount: result.body.properties?.["computeCount"],
          computeModel: result.body.properties?.["computeModel"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dataStorageSizeInGbs:
            result.body.properties?.["dataStorageSizeInGbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          displayName: result.body.properties?.["displayName"],
          isAutoScalingEnabled:
            result.body.properties?.["isAutoScalingEnabled"],
          isAutoScalingForStorageEnabled:
            result.body.properties?.["isAutoScalingForStorageEnabled"],
          peerDbIds: result.body.properties?.["peerDbIds"],
          peerDbId: result.body.properties?.["peerDbId"],
          isLocalDataGuardEnabled:
            result.body.properties?.["isLocalDataGuardEnabled"],
          isRemoteDataGuardEnabled:
            result.body.properties?.["isRemoteDataGuardEnabled"],
          localDisasterRecoveryType:
            result.body.properties?.["localDisasterRecoveryType"],
          localStandbyDb: !result.body.properties?.localStandbyDb
            ? undefined
            : {
                lagTimeInSeconds:
                  result.body.properties?.localStandbyDb?.["lagTimeInSeconds"],
                lifecycleState:
                  result.body.properties?.localStandbyDb?.["lifecycleState"],
                lifecycleDetails:
                  result.body.properties?.localStandbyDb?.["lifecycleDetails"],
                timeDataGuardRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDataGuardRoleChanged"
                  ],
                timeDisasterRecoveryRoleChanged:
                  result.body.properties?.localStandbyDb?.[
                    "timeDisasterRecoveryRoleChanged"
                  ],
              },
          failedDataRecoveryInSeconds:
            result.body.properties?.["failedDataRecoveryInSeconds"],
          isMtlsConnectionRequired:
            result.body.properties?.["isMtlsConnectionRequired"],
          isPreviewVersionWithServiceTermsAccepted:
            result.body.properties?.[
              "isPreviewVersionWithServiceTermsAccepted"
            ],
          licenseModel: result.body.properties?.["licenseModel"],
          ncharacterSet: result.body.properties?.["ncharacterSet"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          scheduledOperations: !result.body.properties?.scheduledOperations
            ? undefined
            : {
                dayOfWeek: {
                  name: result.body.properties?.scheduledOperations?.dayOfWeek[
                    "name"
                  ],
                },
                scheduledStartTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStartTime"
                  ],
                scheduledStopTime:
                  result.body.properties?.scheduledOperations?.[
                    "scheduledStopTime"
                  ],
              },
          privateEndpointIp: result.body.properties?.["privateEndpointIp"],
          privateEndpointLabel:
            result.body.properties?.["privateEndpointLabel"],
          ociUrl: result.body.properties?.["ociUrl"],
          subnetId: result.body.properties?.["subnetId"],
          vnetId: result.body.properties?.["vnetId"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceBegin:
            result.body.properties?.["timeMaintenanceBegin"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceBegin"])
              : undefined,
          timeMaintenanceEnd:
            result.body.properties?.["timeMaintenanceEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceEnd"])
              : undefined,
          actualUsedDataStorageSizeInTbs:
            result.body.properties?.["actualUsedDataStorageSizeInTbs"],
          allocatedStorageSizeInTbs:
            result.body.properties?.["allocatedStorageSizeInTbs"],
          apexDetails: !result.body.properties?.apexDetails
            ? undefined
            : {
                apexVersion:
                  result.body.properties?.apexDetails?.["apexVersion"],
                ordsVersion:
                  result.body.properties?.apexDetails?.["ordsVersion"],
              },
          availableUpgradeVersions:
            result.body.properties?.["availableUpgradeVersions"],
          connectionStrings: !result.body.properties?.connectionStrings
            ? undefined
            : {
                allConnectionStrings: !result.body.properties?.connectionStrings
                  ?.allConnectionStrings
                  ? undefined
                  : {
                      high: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["high"],
                      low: result.body.properties?.connectionStrings
                        ?.allConnectionStrings?.["low"],
                      medium:
                        result.body.properties?.connectionStrings
                          ?.allConnectionStrings?.["medium"],
                    },
                dedicated:
                  result.body.properties?.connectionStrings?.["dedicated"],
                high: result.body.properties?.connectionStrings?.["high"],
                low: result.body.properties?.connectionStrings?.["low"],
                medium: result.body.properties?.connectionStrings?.["medium"],
                profiles:
                  result.body.properties?.connectionStrings?.["profiles"] ===
                  undefined
                    ? result.body.properties?.connectionStrings?.["profiles"]
                    : result.body.properties?.connectionStrings?.[
                        "profiles"
                      ].map((p: any) => {
                        return {
                          consumerGroup: p["consumerGroup"],
                          displayName: p["displayName"],
                          hostFormat: p["hostFormat"],
                          isRegional: p["isRegional"],
                          protocol: p["protocol"],
                          sessionMode: p["sessionMode"],
                          syntaxFormat: p["syntaxFormat"],
                          tlsAuthentication: p["tlsAuthentication"],
                          value: p["value"],
                        };
                      }),
              },
          connectionUrls: !result.body.properties?.connectionUrls
            ? undefined
            : {
                apexUrl: result.body.properties?.connectionUrls?.["apexUrl"],
                databaseTransformsUrl:
                  result.body.properties?.connectionUrls?.[
                    "databaseTransformsUrl"
                  ],
                graphStudioUrl:
                  result.body.properties?.connectionUrls?.["graphStudioUrl"],
                machineLearningNotebookUrl:
                  result.body.properties?.connectionUrls?.[
                    "machineLearningNotebookUrl"
                  ],
                mongoDbUrl:
                  result.body.properties?.connectionUrls?.["mongoDbUrl"],
                ordsUrl: result.body.properties?.connectionUrls?.["ordsUrl"],
                sqlDevWebUrl:
                  result.body.properties?.connectionUrls?.["sqlDevWebUrl"],
              },
          dataSafeStatus: result.body.properties?.["dataSafeStatus"],
          databaseEdition: result.body.properties?.["databaseEdition"],
          autonomousDatabaseId:
            result.body.properties?.["autonomousDatabaseId"],
          inMemoryAreaInGbs: result.body.properties?.["inMemoryAreaInGbs"],
          nextLongTermBackupTimeStamp:
            result.body.properties?.["nextLongTermBackupTimeStamp"] !==
            undefined
              ? new Date(
                  result.body.properties?.["nextLongTermBackupTimeStamp"],
                )
              : undefined,
          longTermBackupSchedule: !result.body.properties
            ?.longTermBackupSchedule
            ? undefined
            : {
                repeatCadence:
                  result.body.properties?.longTermBackupSchedule?.[
                    "repeatCadence"
                  ],
                timeOfBackup:
                  result.body.properties?.longTermBackupSchedule?.[
                    "timeOfBackup"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.longTermBackupSchedule?.[
                          "timeOfBackup"
                        ],
                      )
                    : undefined,
                retentionPeriodInDays:
                  result.body.properties?.longTermBackupSchedule?.[
                    "retentionPeriodInDays"
                  ],
                isDisabled:
                  result.body.properties?.longTermBackupSchedule?.[
                    "isDisabled"
                  ],
              },
          isPreview: result.body.properties?.["isPreview"],
          localAdgAutoFailoverMaxDataLossLimit:
            result.body.properties?.["localAdgAutoFailoverMaxDataLossLimit"],
          memoryPerOracleComputeUnitInGbs:
            result.body.properties?.["memoryPerOracleComputeUnitInGbs"],
          openMode: result.body.properties?.["openMode"],
          operationsInsightsStatus:
            result.body.properties?.["operationsInsightsStatus"],
          permissionLevel: result.body.properties?.["permissionLevel"],
          privateEndpoint: result.body.properties?.["privateEndpoint"],
          provisionableCpus: result.body.properties?.["provisionableCpus"],
          role: result.body.properties?.["role"],
          serviceConsoleUrl: result.body.properties?.["serviceConsoleUrl"],
          sqlWebDeveloperUrl: result.body.properties?.["sqlWebDeveloperUrl"],
          supportedRegionsToCloneTo:
            result.body.properties?.["supportedRegionsToCloneTo"],
          timeDataGuardRoleChanged:
            result.body.properties?.["timeDataGuardRoleChanged"],
          timeDeletionOfFreeAutonomousDatabase:
            result.body.properties?.["timeDeletionOfFreeAutonomousDatabase"],
          timeLocalDataGuardEnabled:
            result.body.properties?.["timeLocalDataGuardEnabled"],
          timeOfLastFailover: result.body.properties?.["timeOfLastFailover"],
          timeOfLastRefresh: result.body.properties?.["timeOfLastRefresh"],
          timeOfLastRefreshPoint:
            result.body.properties?.["timeOfLastRefreshPoint"],
          timeOfLastSwitchover:
            result.body.properties?.["timeOfLastSwitchover"],
          timeReclamationOfFreeAutonomousDatabase:
            result.body.properties?.["timeReclamationOfFreeAutonomousDatabase"],
          usedDataStorageSizeInGbs:
            result.body.properties?.["usedDataStorageSizeInGbs"],
          usedDataStorageSizeInTbs:
            result.body.properties?.["usedDataStorageSizeInTbs"],
          ocid: result.body.properties?.["ocid"],
          backupRetentionPeriodInDays:
            result.body.properties?.["backupRetentionPeriodInDays"],
          whitelistedIps: result.body.properties?.["whitelistedIps"],
        },
  };
}

/** This operation shrinks the current allocated storage down to the current actual used data storage. */
export function autonomousDatabasesShrink(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesShrinkOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesShrinkDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesShrinkSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          options,
        ),
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}
