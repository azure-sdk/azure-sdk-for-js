// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseFromBackupTimestampProperties,
  AutonomousDatabaseBasePropertiesUnion,
} from "../models/models.js";
import {
  AutonomousDatabaseFromBackupTimestampPropertiesOutput,
  AutonomousDatabaseBasePropertiesOutput,
} from "../rest/index.js";

/** deserialize function for AutonomousDatabaseFromBackupTimestampProperties */
function deserializeAutonomousDatabaseFromBackupTimestampProperties(
  obj: AutonomousDatabaseFromBackupTimestampPropertiesOutput,
): AutonomousDatabaseFromBackupTimestampProperties {
  return {
    adminPassword: obj["adminPassword"],
    dataBaseType: obj["dataBaseType"],
    autonomousMaintenanceScheduleType: obj["autonomousMaintenanceScheduleType"],
    characterSet: obj["characterSet"],
    computeCount: obj["computeCount"],
    computeModel: obj["computeModel"],
    cpuCoreCount: obj["cpuCoreCount"],
    customerContacts:
      obj["customerContacts"] === undefined
        ? obj["customerContacts"]
        : obj["customerContacts"].map((p: any) => {
            return { email: p["email"] };
          }),
    dataStorageSizeInTbs: obj["dataStorageSizeInTbs"],
    dataStorageSizeInGbs: obj["dataStorageSizeInGbs"],
    dbVersion: obj["dbVersion"],
    dbWorkload: obj["dbWorkload"],
    displayName: obj["displayName"],
    isAutoScalingEnabled: obj["isAutoScalingEnabled"],
    isAutoScalingForStorageEnabled: obj["isAutoScalingForStorageEnabled"],
    peerDbIds: obj["peerDbIds"],
    peerDbId: obj["peerDbId"],
    isLocalDataGuardEnabled: obj["isLocalDataGuardEnabled"],
    isRemoteDataGuardEnabled: obj["isRemoteDataGuardEnabled"],
    localDisasterRecoveryType: obj["localDisasterRecoveryType"],
    timeDisasterRecoveryRoleChanged:
      obj["timeDisasterRecoveryRoleChanged"] !== undefined
        ? new Date(obj["timeDisasterRecoveryRoleChanged"])
        : undefined,
    remoteDisasterRecoveryConfiguration:
      !obj.remoteDisasterRecoveryConfiguration
        ? undefined
        : {
            disasterRecoveryType:
              obj.remoteDisasterRecoveryConfiguration?.["disasterRecoveryType"],
            timeSnapshotStandbyEnabledTill:
              obj.remoteDisasterRecoveryConfiguration?.[
                "timeSnapshotStandbyEnabledTill"
              ] !== undefined
                ? new Date(
                    obj.remoteDisasterRecoveryConfiguration?.[
                      "timeSnapshotStandbyEnabledTill"
                    ],
                  )
                : undefined,
            isSnapshotStandby:
              obj.remoteDisasterRecoveryConfiguration?.["isSnapshotStandby"],
            isReplicateAutomaticBackups:
              obj.remoteDisasterRecoveryConfiguration?.[
                "isReplicateAutomaticBackups"
              ],
          },
    localStandbyDb: !obj.localStandbyDb
      ? undefined
      : {
          lagTimeInSeconds: obj.localStandbyDb?.["lagTimeInSeconds"],
          lifecycleState: obj.localStandbyDb?.["lifecycleState"],
          lifecycleDetails: obj.localStandbyDb?.["lifecycleDetails"],
          timeDataGuardRoleChanged:
            obj.localStandbyDb?.["timeDataGuardRoleChanged"],
          timeDisasterRecoveryRoleChanged:
            obj.localStandbyDb?.["timeDisasterRecoveryRoleChanged"],
        },
    failedDataRecoveryInSeconds: obj["failedDataRecoveryInSeconds"],
    isMtlsConnectionRequired: obj["isMtlsConnectionRequired"],
    isPreviewVersionWithServiceTermsAccepted:
      obj["isPreviewVersionWithServiceTermsAccepted"],
    licenseModel: obj["licenseModel"],
    ncharacterSet: obj["ncharacterSet"],
    lifecycleDetails: obj["lifecycleDetails"],
    provisioningState: obj["provisioningState"],
    lifecycleState: obj["lifecycleState"],
    scheduledOperations: !obj.scheduledOperations
      ? undefined
      : {
          dayOfWeek: { name: obj.scheduledOperations?.dayOfWeek["name"] },
          scheduledStartTime: obj.scheduledOperations?.["scheduledStartTime"],
          scheduledStopTime: obj.scheduledOperations?.["scheduledStopTime"],
        },
    privateEndpointIp: obj["privateEndpointIp"],
    privateEndpointLabel: obj["privateEndpointLabel"],
    ociUrl: obj["ociUrl"],
    subnetId: obj["subnetId"],
    vnetId: obj["vnetId"],
    timeCreated:
      obj["timeCreated"] !== undefined
        ? new Date(obj["timeCreated"])
        : undefined,
    timeMaintenanceBegin:
      obj["timeMaintenanceBegin"] !== undefined
        ? new Date(obj["timeMaintenanceBegin"])
        : undefined,
    timeMaintenanceEnd:
      obj["timeMaintenanceEnd"] !== undefined
        ? new Date(obj["timeMaintenanceEnd"])
        : undefined,
    actualUsedDataStorageSizeInTbs: obj["actualUsedDataStorageSizeInTbs"],
    allocatedStorageSizeInTbs: obj["allocatedStorageSizeInTbs"],
    apexDetails: !obj.apexDetails
      ? undefined
      : {
          apexVersion: obj.apexDetails?.["apexVersion"],
          ordsVersion: obj.apexDetails?.["ordsVersion"],
        },
    availableUpgradeVersions: obj["availableUpgradeVersions"],
    connectionStrings: !obj.connectionStrings
      ? undefined
      : {
          allConnectionStrings: !obj.connectionStrings?.allConnectionStrings
            ? undefined
            : {
                high: obj.connectionStrings?.allConnectionStrings?.["high"],
                low: obj.connectionStrings?.allConnectionStrings?.["low"],
                medium: obj.connectionStrings?.allConnectionStrings?.["medium"],
              },
          dedicated: obj.connectionStrings?.["dedicated"],
          high: obj.connectionStrings?.["high"],
          low: obj.connectionStrings?.["low"],
          medium: obj.connectionStrings?.["medium"],
          profiles:
            obj.connectionStrings?.["profiles"] === undefined
              ? obj.connectionStrings?.["profiles"]
              : obj.connectionStrings?.["profiles"].map((p: any) => {
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
    connectionUrls: !obj.connectionUrls
      ? undefined
      : {
          apexUrl: obj.connectionUrls?.["apexUrl"],
          databaseTransformsUrl: obj.connectionUrls?.["databaseTransformsUrl"],
          graphStudioUrl: obj.connectionUrls?.["graphStudioUrl"],
          machineLearningNotebookUrl:
            obj.connectionUrls?.["machineLearningNotebookUrl"],
          mongoDbUrl: obj.connectionUrls?.["mongoDbUrl"],
          ordsUrl: obj.connectionUrls?.["ordsUrl"],
          sqlDevWebUrl: obj.connectionUrls?.["sqlDevWebUrl"],
        },
    dataSafeStatus: obj["dataSafeStatus"],
    databaseEdition: obj["databaseEdition"],
    autonomousDatabaseId: obj["autonomousDatabaseId"],
    inMemoryAreaInGbs: obj["inMemoryAreaInGbs"],
    nextLongTermBackupTimeStamp:
      obj["nextLongTermBackupTimeStamp"] !== undefined
        ? new Date(obj["nextLongTermBackupTimeStamp"])
        : undefined,
    longTermBackupSchedule: !obj.longTermBackupSchedule
      ? undefined
      : {
          repeatCadence: obj.longTermBackupSchedule?.["repeatCadence"],
          timeOfBackup:
            obj.longTermBackupSchedule?.["timeOfBackup"] !== undefined
              ? new Date(obj.longTermBackupSchedule?.["timeOfBackup"])
              : undefined,
          retentionPeriodInDays:
            obj.longTermBackupSchedule?.["retentionPeriodInDays"],
          isDisabled: obj.longTermBackupSchedule?.["isDisabled"],
        },
    isPreview: obj["isPreview"],
    localAdgAutoFailoverMaxDataLossLimit:
      obj["localAdgAutoFailoverMaxDataLossLimit"],
    memoryPerOracleComputeUnitInGbs: obj["memoryPerOracleComputeUnitInGbs"],
    openMode: obj["openMode"],
    operationsInsightsStatus: obj["operationsInsightsStatus"],
    permissionLevel: obj["permissionLevel"],
    privateEndpoint: obj["privateEndpoint"],
    provisionableCpus: obj["provisionableCpus"],
    role: obj["role"],
    serviceConsoleUrl: obj["serviceConsoleUrl"],
    sqlWebDeveloperUrl: obj["sqlWebDeveloperUrl"],
    supportedRegionsToCloneTo: obj["supportedRegionsToCloneTo"],
    timeDataGuardRoleChanged: obj["timeDataGuardRoleChanged"],
    timeDeletionOfFreeAutonomousDatabase:
      obj["timeDeletionOfFreeAutonomousDatabase"],
    timeLocalDataGuardEnabled: obj["timeLocalDataGuardEnabled"],
    timeOfLastFailover: obj["timeOfLastFailover"],
    timeOfLastRefresh: obj["timeOfLastRefresh"],
    timeOfLastRefreshPoint: obj["timeOfLastRefreshPoint"],
    timeOfLastSwitchover: obj["timeOfLastSwitchover"],
    timeReclamationOfFreeAutonomousDatabase:
      obj["timeReclamationOfFreeAutonomousDatabase"],
    usedDataStorageSizeInGbs: obj["usedDataStorageSizeInGbs"],
    usedDataStorageSizeInTbs: obj["usedDataStorageSizeInTbs"],
    ocid: obj["ocid"],
    backupRetentionPeriodInDays: obj["backupRetentionPeriodInDays"],
    whitelistedIps: obj["whitelistedIps"],
    source: obj["source"],
    sourceId: obj["sourceId"],
    cloneType: obj["cloneType"],
    timestamp:
      obj["timestamp"] !== undefined ? new Date(obj["timestamp"]) : undefined,
    useLatestAvailableBackupTimeStamp: obj["useLatestAvailableBackupTimeStamp"],
  };
}

/** deserialize function for AutonomousDatabaseBasePropertiesOutput */
export function deserializeAutonomousDatabaseBasePropertiesUnion(
  obj: AutonomousDatabaseBasePropertiesOutput,
): AutonomousDatabaseBasePropertiesUnion {
  switch (obj.dataBaseType) {
    case "CloneFromBackupTimestamp":
      return deserializeAutonomousDatabaseFromBackupTimestampProperties(
        obj as AutonomousDatabaseFromBackupTimestampProperties,
      );
    default:
      return obj;
  }
}
