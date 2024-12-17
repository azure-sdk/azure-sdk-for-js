# Release History
    
## 14.0.0 (2024-12-17)
    
### Features Added

  - Added operation group AadProperties
  - Added operation group BackupCrrJobDetails
  - Added operation group BackupCrrJobs
  - Added operation group BackupProtectedItemsCrr
  - Added operation group BackupResourceStorageConfigs
  - Added operation group BackupUsageSummariesCRR
  - Added operation group CrossRegionRestore
  - Added operation group CrrOperationResults
  - Added operation group CrrOperationStatus
  - Added operation group RecoveryPointsCrr
  - Added operation RecoveryPoints.getAccessToken
  - Added Interface AADProperties
  - Added Interface AadPropertiesGetOptionalParams
  - Added Interface AADPropertiesResource
  - Added Interface BackupCrrJobDetailsGetOptionalParams
  - Added Interface BackupCrrJobsListNextOptionalParams
  - Added Interface BackupCrrJobsListOptionalParams
  - Added Interface BackupProtectedItemsCrrListNextOptionalParams
  - Added Interface BackupProtectedItemsCrrListOptionalParams
  - Added Interface BackupResourceStorageConfigsGetOptionalParams
  - Added Interface BackupResourceStorageConfigsPatchOptionalParams
  - Added Interface BackupResourceStorageConfigsUpdateOptionalParams
  - Added Interface BackupUsageSummariesCRRListOptionalParams
  - Added Interface BmsaadPropertiesQueryObject
  - Added Interface CrossRegionRestoreRequest
  - Added Interface CrossRegionRestoreRequestResource
  - Added Interface CrossRegionRestoreTriggerOptionalParams
  - Added Interface CrrAccessToken
  - Added Interface CrrAccessTokenResource
  - Added Interface CrrJobRequest
  - Added Interface CrrJobRequestResource
  - Added Interface CrrOperationResultsGetOptionalParams
  - Added Interface CrrOperationStatusGetOptionalParams
  - Added Interface OperationStatusRecoveryPointExtendedInfo
  - Added Interface RecoveryPointsCrrGetOptionalParams
  - Added Interface RecoveryPointsCrrListNextOptionalParams
  - Added Interface RecoveryPointsCrrListOptionalParams
  - Added Interface RecoveryPointsGetAccessTokenOptionalParams
  - Added Interface WorkloadCrrAccessToken
  - Added Type Alias AadPropertiesGetResponse
  - Added Type Alias BackupCrrJobDetailsGetResponse
  - Added Type Alias BackupCrrJobsListNextResponse
  - Added Type Alias BackupCrrJobsListResponse
  - Added Type Alias BackupProtectedItemsCrrListNextResponse
  - Added Type Alias BackupProtectedItemsCrrListResponse
  - Added Type Alias BackupResourceStorageConfigsGetResponse
  - Added Type Alias BackupResourceStorageConfigsUpdateResponse
  - Added Type Alias BackupUsageSummariesCRRListResponse
  - Added Type Alias CrrAccessTokenUnion
  - Added Type Alias CrrOperationStatusGetResponse
  - Added Type Alias RecoveryPointsCrrGetResponse
  - Added Type Alias RecoveryPointsCrrListNextResponse
  - Added Type Alias RecoveryPointsCrrListResponse
  - Added Type Alias RecoveryPointsGetAccessTokenResponse
  - Interface AzureFileshareProtectedItem has a new optional parameter healthStatus
  - Interface AzureFileShareRecoveryPoint has a new optional parameter crossRegionRestoreState
  - Interface JobResourceList has a new optional parameter nextLink
  - Interface ProtectedItemResourceList has a new optional parameter nextLink
  - Interface RecoveryPointResourceList has a new optional parameter nextLink

### Breaking Changes

  - Removed operation group BackupEngines
  - Removed operation group BackupJobs
  - Removed operation group BackupOperationResults
  - Removed operation group BackupOperationStatuses
  - Removed operation group BackupPolicies
  - Removed operation group BackupProtectableItems
  - Removed operation group BackupProtectedItems
  - Removed operation group BackupProtectionContainers
  - Removed operation group BackupProtectionIntent
  - Removed operation group BackupResourceEncryptionConfigs
  - Removed operation group BackupResourceStorageConfigsNonCRR
  - Removed operation group BackupResourceVaultConfigs
  - Removed operation group Backups
  - Removed operation group BackupStatus
  - Removed operation group BackupUsageSummaries
  - Removed operation group BackupWorkloadItems
  - Removed operation group BMSPrepareDataMoveOperationResult
  - Removed operation group DeletedProtectionContainers
  - Removed operation group ExportJobsOperationResults
  - Removed operation group FeatureSupport
  - Removed operation group FetchTieringCost
  - Removed operation group GetTieringCostOperationResult
  - Removed operation group ItemLevelRecoveryConnections
  - Removed operation group JobCancellations
  - Removed operation group JobDetails
  - Removed operation group JobOperationResults
  - Removed operation group Jobs
  - Removed operation group Operation
  - Removed operation group Operations
  - Removed operation group PrivateEndpointConnectionOperations
  - Removed operation group PrivateEndpointOperations
  - Removed operation group ProtectableContainers
  - Removed operation group ProtectedItemOperationResults
  - Removed operation group ProtectedItemOperationStatuses
  - Removed operation group ProtectedItems
  - Removed operation group ProtectionContainerOperationResults
  - Removed operation group ProtectionContainerRefreshOperationResults
  - Removed operation group ProtectionContainers
  - Removed operation group ProtectionIntentOperations
  - Removed operation group ProtectionPolicies
  - Removed operation group ProtectionPolicyOperationResults
  - Removed operation group ProtectionPolicyOperationStatuses
  - Removed operation group RecoveryPointsRecommendedForMove
  - Removed operation group ResourceGuardProxies
  - Removed operation group ResourceGuardProxy
  - Removed operation group Restores
  - Removed operation group SecurityPINs
  - Removed operation group TieringCostOperationStatus
  - Removed operation group ValidateOperation
  - Removed operation group ValidateOperationResults
  - Removed operation group ValidateOperationStatuses
  - Removed operation RecoveryPoints.get
  - Removed operation RecoveryPoints.list
  - Interface AzureIaaSVMJob no longer has parameter containerName
  - Interface AzureIaaSVMJob no longer has parameter isUserTriggered
  - Interface AzureIaaSVMProtectedItemExtendedInfo no longer has parameter newestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInVault
  - Interface AzureStorageJob no longer has parameter isUserTriggered
  - Interface AzureVmWorkloadProtectedItem no longer has parameter nodesList
  - Interface AzureVmWorkloadProtectedItemExtendedInfo no longer has parameter newestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInVault
  - Interface AzureVmWorkloadProtectedItemExtendedInfo no longer has parameter recoveryModel
  - Interface AzureWorkloadRestoreRequest no longer has parameter snapshotRestoreParameters
  - Interface AzureWorkloadRestoreRequest no longer has parameter targetResourceGroupName
  - Interface AzureWorkloadRestoreRequest no longer has parameter userAssignedManagedIdentityDetails
  - Interface BackupResourceConfig no longer has parameter dedupState
  - Interface BackupResourceConfig no longer has parameter xcoolState
  - Interface ExtendedProperties no longer has parameter linuxVmApplicationName
  - Interface IaasVMRecoveryPoint no longer has parameter extendedLocation
  - Interface IaasVMRecoveryPoint no longer has parameter isPrivateAccessEnabledOnAnyDisk
  - Interface IaasVMRecoveryPoint no longer has parameter securityType
  - Interface IaasVMRestoreRequest no longer has parameter extendedLocation
  - Interface IaasVMRestoreRequest no longer has parameter securedVMDetails
  - Interface IaasVMRestoreRequest no longer has parameter targetDiskNetworkAccessSettings
  - Interface ProtectedItem no longer has parameter isArchiveEnabled
  - Interface ProtectedItem no longer has parameter policyName
  - Interface ProtectedItem no longer has parameter softDeleteRetentionPeriodInDays
  - Interface ProtectedItem no longer has parameter vaultId
  - Interface RestoreRequest no longer has parameter resourceGuardOperationRequests
  - Type of parameter protectedItemType of interface AzureVmWorkloadProtectedItem is changed from "AzureVmWorkloadProtectedItem" | "AzureVmWorkloadSAPAseDatabase" | "AzureVmWorkloadSAPHanaDatabase" | "AzureVmWorkloadSAPHanaDBInstance" | "AzureVmWorkloadSQLDatabase" to "AzureVmWorkloadProtectedItem" | "AzureVmWorkloadSAPAseDatabase" | "AzureVmWorkloadSAPHanaDatabase" | "AzureVmWorkloadSQLDatabase"
  - Type of parameter recoveryPointTierDetails of interface AzureWorkloadRecoveryPoint is changed from RecoveryPointTierInformationV2[] to RecoveryPointTierInformation[]
  - Type of parameter objectType of interface AzureWorkloadRestoreRequest is changed from "AzureWorkloadRestoreRequest" | "AzureWorkloadPointInTimeRestoreRequest" | "AzureWorkloadSAPHanaRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreRequest" | "AzureWorkloadSQLRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreWithRehydrateRequest" | "AzureWorkloadSAPHanaRestoreWithRehydrateRequest" | "AzureWorkloadSQLPointInTimeRestoreWithRehydrateRequest" | "AzureWorkloadSQLRestoreWithRehydrateRequest" to "AzureWorkloadRestoreRequest" | "AzureWorkloadPointInTimeRestoreRequest" | "AzureWorkloadSAPHanaRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreRequest" | "AzureWorkloadSQLRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreRequest"
  - Type of parameter objectType of interface AzureWorkloadSAPHanaPointInTimeRestoreRequest is changed from "AzureWorkloadSAPHanaPointInTimeRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreWithRehydrateRequest" to "AzureWorkloadSAPHanaPointInTimeRestoreRequest"
  - Type of parameter objectType of interface AzureWorkloadSAPHanaRestoreRequest is changed from "AzureWorkloadSAPHanaRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreWithRehydrateRequest" | "AzureWorkloadSAPHanaRestoreWithRehydrateRequest" to "AzureWorkloadSAPHanaRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreRequest"
  - Type of parameter objectType of interface AzureWorkloadSQLPointInTimeRestoreRequest is changed from "AzureWorkloadSQLPointInTimeRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreWithRehydrateRequest" to "AzureWorkloadSQLPointInTimeRestoreRequest"
  - Type of parameter objectType of interface AzureWorkloadSQLRestoreRequest is changed from "AzureWorkloadSQLRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreWithRehydrateRequest" | "AzureWorkloadSQLRestoreWithRehydrateRequest" to "AzureWorkloadSQLRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreRequest"
  - Type of parameter recoveryPointTierDetails of interface IaasVMRecoveryPoint is changed from RecoveryPointTierInformationV2[] to RecoveryPointTierInformation[]
  - Type of parameter objectType of interface IaasVMRestoreRequest is changed from "IaasVMRestoreRequest" | "IaasVMRestoreWithRehydrationRequest" to "IaasVMRestoreRequest"
  - Type of parameter jobType of interface Job is changed from "AzureIaaSVMJob" | "AzureIaaSVMJobV2" | "AzureStorageJob" | "AzureWorkloadJob" | "DpmJob" | "MabJob" | "VaultJob" to "AzureIaaSVMJob" | "AzureStorageJob" | "AzureWorkloadJob" | "DpmJob" | "MabJob"
  - Type of parameter objectType of interface OperationStatusExtendedInfo is changed from "OperationStatusJobExtendedInfo" | "OperationStatusJobsExtendedInfo" | "OperationStatusProvisionILRExtendedInfo" | "OperationStatusValidateOperationExtendedInfo" to "OperationStatusJobExtendedInfo" | "OperationStatusJobsExtendedInfo" | "OperationStatusProvisionILRExtendedInfo" | "OperationStatusRecoveryPointExtendedInfo"
  - Type of parameter protectedItemType of interface ProtectedItem is changed from "AzureFileShareProtectedItem" | "AzureIaaSVMProtectedItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "Microsoft.Sql/servers/databases" | "AzureVmWorkloadProtectedItem" | "AzureVmWorkloadSAPAseDatabase" | "AzureVmWorkloadSAPHanaDatabase" | "AzureVmWorkloadSAPHanaDBInstance" | "AzureVmWorkloadSQLDatabase" | "DPMProtectedItem" | "GenericProtectedItem" | "MabFileFolderProtectedItem" to "AzureFileShareProtectedItem" | "AzureIaaSVMProtectedItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "Microsoft.Sql/servers/databases" | "AzureVmWorkloadProtectedItem" | "AzureVmWorkloadSAPAseDatabase" | "AzureVmWorkloadSAPHanaDatabase" | "AzureVmWorkloadSQLDatabase" | "DPMProtectedItem" | "GenericProtectedItem" | "MabFileFolderProtectedItem"
  - Type of parameter objectType of interface RestoreRequest is changed from "AzureFileShareRestoreRequest" | "AzureWorkloadRestoreRequest" | "AzureWorkloadPointInTimeRestoreRequest" | "AzureWorkloadSAPHanaRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreRequest" | "AzureWorkloadSQLRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreRequest" | "IaasVMRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreWithRehydrateRequest" | "AzureWorkloadSAPHanaRestoreWithRehydrateRequest" | "AzureWorkloadSQLPointInTimeRestoreWithRehydrateRequest" | "AzureWorkloadSQLRestoreWithRehydrateRequest" | "IaasVMRestoreWithRehydrationRequest" to "AzureFileShareRestoreRequest" | "AzureWorkloadRestoreRequest" | "AzureWorkloadPointInTimeRestoreRequest" | "AzureWorkloadSAPHanaRestoreRequest" | "AzureWorkloadSAPHanaPointInTimeRestoreRequest" | "AzureWorkloadSQLRestoreRequest" | "AzureWorkloadSQLPointInTimeRestoreRequest" | "IaasVMRestoreRequest"
  - Class RecoveryServicesBackupClient no longer has parameter backupEngines
  - Class RecoveryServicesBackupClient no longer has parameter backupJobs
  - Class RecoveryServicesBackupClient no longer has parameter backupOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter backupOperationStatuses
  - Class RecoveryServicesBackupClient no longer has parameter backupPolicies
  - Class RecoveryServicesBackupClient no longer has parameter backupProtectableItems
  - Class RecoveryServicesBackupClient no longer has parameter backupProtectedItems
  - Class RecoveryServicesBackupClient no longer has parameter backupProtectionContainers
  - Class RecoveryServicesBackupClient no longer has parameter backupProtectionIntent
  - Class RecoveryServicesBackupClient no longer has parameter backupResourceEncryptionConfigs
  - Class RecoveryServicesBackupClient no longer has parameter backupResourceStorageConfigsNonCRR
  - Class RecoveryServicesBackupClient no longer has parameter backupResourceVaultConfigs
  - Class RecoveryServicesBackupClient no longer has parameter backups
  - Class RecoveryServicesBackupClient no longer has parameter backupStatus
  - Class RecoveryServicesBackupClient no longer has parameter backupUsageSummaries
  - Class RecoveryServicesBackupClient no longer has parameter backupWorkloadItems
  - Class RecoveryServicesBackupClient no longer has parameter bMSPrepareDataMoveOperationResult
  - Class RecoveryServicesBackupClient no longer has parameter deletedProtectionContainers
  - Class RecoveryServicesBackupClient no longer has parameter exportJobsOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter featureSupport
  - Class RecoveryServicesBackupClient no longer has parameter fetchTieringCost
  - Class RecoveryServicesBackupClient no longer has parameter getTieringCostOperationResult
  - Class RecoveryServicesBackupClient no longer has parameter itemLevelRecoveryConnections
  - Class RecoveryServicesBackupClient no longer has parameter jobCancellations
  - Class RecoveryServicesBackupClient no longer has parameter jobDetails
  - Class RecoveryServicesBackupClient no longer has parameter jobOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter jobs
  - Class RecoveryServicesBackupClient no longer has parameter operation
  - Class RecoveryServicesBackupClient no longer has parameter operations
  - Class RecoveryServicesBackupClient no longer has parameter privateEndpointConnectionOperations
  - Class RecoveryServicesBackupClient no longer has parameter privateEndpointOperations
  - Class RecoveryServicesBackupClient no longer has parameter protectableContainers
  - Class RecoveryServicesBackupClient no longer has parameter protectedItemOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter protectedItemOperationStatuses
  - Class RecoveryServicesBackupClient no longer has parameter protectedItems
  - Class RecoveryServicesBackupClient no longer has parameter protectionContainerOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter protectionContainerRefreshOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter protectionContainers
  - Class RecoveryServicesBackupClient no longer has parameter protectionIntentOperations
  - Class RecoveryServicesBackupClient no longer has parameter protectionPolicies
  - Class RecoveryServicesBackupClient no longer has parameter protectionPolicyOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter protectionPolicyOperationStatuses
  - Class RecoveryServicesBackupClient no longer has parameter recoveryPointsRecommendedForMove
  - Class RecoveryServicesBackupClient no longer has parameter resourceGuardProxies
  - Class RecoveryServicesBackupClient no longer has parameter resourceGuardProxy
  - Class RecoveryServicesBackupClient no longer has parameter restores
  - Class RecoveryServicesBackupClient no longer has parameter securityPINs
  - Class RecoveryServicesBackupClient no longer has parameter tieringCostOperationStatus
  - Class RecoveryServicesBackupClient no longer has parameter validateOperation
  - Class RecoveryServicesBackupClient no longer has parameter validateOperationResults
  - Class RecoveryServicesBackupClient no longer has parameter validateOperationStatuses
  - Removed Enum KnownAcquireStorageAccountLock
  - Removed Enum KnownAzureFileShareType
  - Removed Enum KnownBackupEngineType
  - Removed Enum KnownBackupItemType
  - Removed Enum KnownBackupType
  - Removed Enum KnownContainerType
  - Removed Enum KnownDataMoveLevel
  - Removed Enum KnownDedupState
  - Removed Enum KnownEncryptionAtRestType
  - Removed Enum KnownEnhancedSecurityState
  - Removed Enum KnownFabricName
  - Removed Enum KnownIaasvmPolicyType
  - Removed Enum KnownIaasVMSnapshotConsistencyType
  - Removed Enum KnownInfrastructureEncryptionState
  - Removed Enum KnownInquiryStatus
  - Removed Enum KnownIntentItemType
  - Removed Enum KnownLastUpdateStatus
  - Removed Enum KnownOperationType
  - Removed Enum KnownPolicyType
  - Removed Enum KnownPrivateEndpointConnectionStatus
  - Removed Enum KnownProtectionIntentItemType
  - Removed Enum KnownProtectionStatus
  - Removed Enum KnownProvisioningState
  - Removed Enum KnownRehydrationPriority
  - Removed Enum KnownRetentionDurationType
  - Removed Enum KnownRetentionScheduleFormat
  - Removed Enum KnownScheduleRunType
  - Removed Enum KnownSoftDeleteFeatureState
  - Removed Enum KnownSupportStatus
  - Removed Enum KnownTieringMode
  - Removed Enum KnownValidationStatus
  - Removed Enum KnownVaultSubResourceType
  - Removed Enum KnownWorkloadItemType
  - Removed Enum KnownXcoolState
  - Enum KnownDataSourceType no longer has value SAPHanaDBInstance
  - Enum KnownProtectedItemState no longer has value BackupsSuspended
  - Enum KnownProtectionState no longer has value BackupsSuspended
  - Enum KnownRecoveryMode no longer has value RecoveryUsingSnapshot
  - Enum KnownRecoveryMode no longer has value SnapshotAttach
  - Enum KnownRecoveryMode no longer has value SnapshotAttachAndRecover
  - Enum KnownRestorePointQueryType no longer has value SnapshotCopyOnlyFull
  - Enum KnownRestorePointQueryType no longer has value SnapshotFull
  - Enum KnownRestorePointType no longer has value SnapshotCopyOnlyFull
  - Enum KnownRestorePointType no longer has value SnapshotFull
  - Enum KnownWorkloadType no longer has value SAPHanaDBInstance
    
    
## 13.1.0 (2024-05-08)
    
### Features Added

  - Added Type Alias IaasVMSnapshotConsistencyType
  - Interface AzureIaaSVMProtectionPolicy has a new optional parameter snapshotConsistencyType
  - Interface BackupResourceVaultConfigsPutOptionalParams has a new optional parameter xMsAuthorizationAuxiliary
  - Interface BackupResourceVaultConfigsUpdateOptionalParams has a new optional parameter xMsAuthorizationAuxiliary
  - Interface ProtectedItemsCreateOrUpdateOptionalParams has a new optional parameter xMsAuthorizationAuxiliary
  - Interface ProtectionPoliciesCreateOrUpdateOptionalParams has a new optional parameter xMsAuthorizationAuxiliary
  - Interface RestoreRequest has a new optional parameter resourceGuardOperationRequests
  - Interface RestoresTriggerOptionalParams has a new optional parameter xMsAuthorizationAuxiliary
  - Interface SecurityPINsGetOptionalParams has a new optional parameter xMsAuthorizationAuxiliary
  - Added Enum KnownIaasVMSnapshotConsistencyType
    

## 13.0.0 (2023-12-13)
    
### Features Added

  - Added Interface UserAssignedIdentityProperties

### Breaking Changes

  - Type of parameter userAssignedIdentityProperties of interface UserAssignedManagedIdentityDetails is changed from UserAssignedIdentity to UserAssignedIdentityProperties
    
    
## 12.0.0 (2023-11-09)
    
### Features Added

  - Added operation group FetchTieringCost
  - Added operation group GetTieringCostOperationResult
  - Added operation group TieringCostOperationStatus
  - Added operation ProtectionContainers.beginRegister
  - Added operation ProtectionContainers.beginRegisterAndWait
  - Added Interface FetchTieringCostInfoForRehydrationRequest
  - Added Interface FetchTieringCostInfoRequest
  - Added Interface FetchTieringCostPostHeaders
  - Added Interface FetchTieringCostPostOptionalParams
  - Added Interface FetchTieringCostSavingsInfoForPolicyRequest
  - Added Interface FetchTieringCostSavingsInfoForProtectedItemRequest
  - Added Interface FetchTieringCostSavingsInfoForVaultRequest
  - Added Interface GetTieringCostOperationResultGetOptionalParams
  - Added Interface SnapshotBackupAdditionalDetails
  - Added Interface SnapshotRestoreParameters
  - Added Interface TieringCostInfo
  - Added Interface TieringCostOperationStatusGetOptionalParams
  - Added Interface TieringCostRehydrationInfo
  - Added Interface TieringCostSavingInfo
  - Added Interface UserAssignedIdentity
  - Added Interface UserAssignedManagedIdentityDetails
  - Added Interface ValidateOperationRequestResource
  - Added Interface VaultRetentionPolicy
  - Added Type Alias FetchTieringCostInfoRequestUnion
  - Added Type Alias FetchTieringCostPostResponse
  - Added Type Alias GetTieringCostOperationResultGetResponse
  - Added Type Alias TieringCostInfoUnion
  - Added Type Alias TieringCostOperationStatusGetResponse
  - Interface AzureFileShareProtectionPolicy has a new optional parameter vaultRetentionPolicy
  - Interface AzureWorkloadRestoreRequest has a new optional parameter snapshotRestoreParameters
  - Interface AzureWorkloadRestoreRequest has a new optional parameter targetResourceGroupName
  - Interface AzureWorkloadRestoreRequest has a new optional parameter userAssignedManagedIdentityDetails
  - Interface BackupStatusResponse has a new optional parameter acquireStorageAccountLock
  - Interface BackupStatusResponse has a new optional parameter protectedItemsCount
  - Interface IaasVMRecoveryPoint has a new optional parameter extendedLocation
  - Interface ProtectedItem has a new optional parameter vaultId
  - Interface ProtectionContainersRegisterOptionalParams has a new optional parameter resumeFrom
  - Interface ProtectionContainersRegisterOptionalParams has a new optional parameter updateIntervalInMs
  - Interface SubProtectionPolicy has a new optional parameter snapshotBackupAdditionalDetails
  - Enum KnownRecoveryMode has a new value RecoveryUsingSnapshot
  - Enum KnownRecoveryMode has a new value SnapshotAttach
  - Enum KnownRecoveryMode has a new value SnapshotAttachAndRecover

### Breaking Changes

  - Removed operation ProtectionContainers.register
  - Operation Operation.validate has a new signature
  - Operation ValidateOperation.beginTrigger has a new signature
  - Operation ValidateOperation.beginTriggerAndWait has a new signature
  - Parameter resourceGuardResourceId of interface ResourceGuardProxyBase is now required
    
    
## 11.0.0 (2023-09-01)
    
### Features Added

  - Added Interface AzureVmWorkloadSAPHanaHSRProtectableItem
  - Added Type Alias VaultSubResourceType
  - Interface AzureVmWorkloadProtectableItem has a new optional parameter isProtectable
  - Interface AzureVmWorkloadProtectedItem has a new optional parameter nodesList
  - Interface AzureVmWorkloadSQLAvailabilityGroupProtectableItem has a new optional parameter nodesList
  - Interface BackupResourceVaultConfig has a new optional parameter softDeleteRetentionPeriodInDays
  - Interface DistributedNodesInfo has a new optional parameter sourceResourceId
  - Interface InquiryValidation has a new optional parameter protectableItemCount
  - Interface PrivateEndpointConnection has a new optional parameter groupIds
  - Interface PrivateLinkServiceConnectionState has a new optional parameter actionsRequired
  - Interface ProtectedItem has a new optional parameter softDeleteRetentionPeriodInDays
  - Added Enum KnownVaultSubResourceType
  - Enum KnownSoftDeleteFeatureState has a new value AlwaysON

### Breaking Changes

  - Interface PrivateLinkServiceConnectionState no longer has parameter actionRequired
  - Interface ProtectedItem no longer has parameter softDeleteRetentionPeriod
  - Type of parameter protectableItemType of interface AzureVmWorkloadProtectableItem is changed from "AzureVmWorkloadProtectableItem" | "SAPAseSystem" | "SAPHanaDatabase" | "SAPHanaSystem" | "SAPHanaDBInstance" | "SAPHanaHSR" | "SQLAvailabilityGroupContainer" | "SQLDataBase" | "SQLInstance" to "AzureVmWorkloadProtectableItem" | "SAPAseSystem" | "SAPHanaDatabase" | "SAPHanaSystem" | "SAPHanaDBInstance" | "HanaHSRContainer" | "SQLAvailabilityGroupContainer" | "SQLDataBase" | "SQLInstance"
  - Type of parameter protectableItemType of interface WorkloadProtectableItem is changed from "AzureFileShare" | "IaaSVMProtectableItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "AzureVmWorkloadProtectableItem" | "SAPAseSystem" | "SAPHanaDatabase" | "SAPHanaSystem" | "SAPHanaDBInstance" | "SAPHanaHSR" | "SQLAvailabilityGroupContainer" | "SQLDataBase" | "SQLInstance" to "AzureFileShare" | "IaaSVMProtectableItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "AzureVmWorkloadProtectableItem" | "SAPAseSystem" | "SAPHanaDatabase" | "SAPHanaSystem" | "SAPHanaDBInstance" | "HanaHSRContainer" | "SQLAvailabilityGroupContainer" | "SQLDataBase" | "SQLInstance"
    
    
## 10.1.0 (2023-03-10)
    
### Features Added

  - Added Interface ExtendedLocation
  - Added Interface SecuredVMDetails
  - Added Interface TargetDiskNetworkAccessSettings
  - Added Type Alias TargetDiskNetworkAccessOption
  - Interface BmsrpQueryObject has a new optional parameter includeSoftDeletedRP
  - Interface IaasVMRecoveryPoint has a new optional parameter isPrivateAccessEnabledOnAnyDisk
  - Interface IaasVMRecoveryPoint has a new optional parameter securityType
  - Interface IaasVMRestoreRequest has a new optional parameter extendedLocation
  - Interface IaasVMRestoreRequest has a new optional parameter securedVMDetails
  - Interface IaasVMRestoreRequest has a new optional parameter targetDiskNetworkAccessSettings
  - Interface RecoveryPointProperties has a new optional parameter isSoftDeleted
    
    
## 10.0.0 (2023-01-18)
    
### Features Added

  - Added operation group DeletedProtectionContainers
  - Added Interface AzureBackupGoalFeatureSupportRequest
  - Added Interface AzureBackupServerContainer
  - Added Interface AzureBackupServerEngine
  - Added Interface AzureFileShareBackupRequest
  - Added Interface AzureFileShareProtectableItem
  - Added Interface AzureFileshareProtectedItem
  - Added Interface AzureFileShareProtectionPolicy
  - Added Interface AzureFileShareProvisionILRRequest
  - Added Interface AzureFileShareRecoveryPoint
  - Added Interface AzureFileShareRestoreRequest
  - Added Interface AzureIaaSClassicComputeVMContainer
  - Added Interface AzureIaaSClassicComputeVMProtectableItem
  - Added Interface AzureIaaSClassicComputeVMProtectedItem
  - Added Interface AzureIaaSComputeVMContainer
  - Added Interface AzureIaaSComputeVMProtectableItem
  - Added Interface AzureIaaSComputeVMProtectedItem
  - Added Interface AzureIaaSVMHealthDetails
  - Added Interface AzureIaaSVMJob
  - Added Interface AzureIaaSVMJobV2
  - Added Interface AzureIaaSVMProtectedItem
  - Added Interface AzureIaaSVMProtectionPolicy
  - Added Interface AzureRecoveryServiceVaultProtectionIntent
  - Added Interface AzureResourceProtectionIntent
  - Added Interface AzureSqlagWorkloadContainerProtectionContainer
  - Added Interface AzureSqlContainer
  - Added Interface AzureSqlProtectedItem
  - Added Interface AzureSqlProtectionPolicy
  - Added Interface AzureStorageContainer
  - Added Interface AzureStorageJob
  - Added Interface AzureStorageProtectableContainer
  - Added Interface AzureVMAppContainerProtectableContainer
  - Added Interface AzureVMAppContainerProtectionContainer
  - Added Interface AzureVMResourceFeatureSupportRequest
  - Added Interface AzureVmWorkloadItem
  - Added Interface AzureVmWorkloadProtectableItem
  - Added Interface AzureVmWorkloadProtectedItem
  - Added Interface AzureVmWorkloadProtectionPolicy
  - Added Interface AzureVmWorkloadSAPAseDatabaseProtectedItem
  - Added Interface AzureVmWorkloadSAPAseDatabaseWorkloadItem
  - Added Interface AzureVmWorkloadSAPAseSystemProtectableItem
  - Added Interface AzureVmWorkloadSAPAseSystemWorkloadItem
  - Added Interface AzureVmWorkloadSAPHanaDatabaseProtectableItem
  - Added Interface AzureVmWorkloadSAPHanaDatabaseProtectedItem
  - Added Interface AzureVmWorkloadSAPHanaDatabaseWorkloadItem
  - Added Interface AzureVmWorkloadSAPHanaDBInstance
  - Added Interface AzureVmWorkloadSAPHanaDBInstanceProtectedItem
  - Added Interface AzureVmWorkloadSAPHanaHSR
  - Added Interface AzureVmWorkloadSAPHanaSystemProtectableItem
  - Added Interface AzureVmWorkloadSAPHanaSystemWorkloadItem
  - Added Interface AzureVmWorkloadSQLAvailabilityGroupProtectableItem
  - Added Interface AzureVmWorkloadSQLDatabaseProtectableItem
  - Added Interface AzureVmWorkloadSQLDatabaseProtectedItem
  - Added Interface AzureVmWorkloadSQLDatabaseWorkloadItem
  - Added Interface AzureVmWorkloadSQLInstanceProtectableItem
  - Added Interface AzureVmWorkloadSQLInstanceWorkloadItem
  - Added Interface AzureWorkloadAutoProtectionIntent
  - Added Interface AzureWorkloadBackupRequest
  - Added Interface AzureWorkloadContainer
  - Added Interface AzureWorkloadContainerAutoProtectionIntent
  - Added Interface AzureWorkloadJob
  - Added Interface AzureWorkloadPointInTimeRecoveryPoint
  - Added Interface AzureWorkloadPointInTimeRestoreRequest
  - Added Interface AzureWorkloadRecoveryPoint
  - Added Interface AzureWorkloadRestoreRequest
  - Added Interface AzureWorkloadSAPHanaPointInTimeRecoveryPoint
  - Added Interface AzureWorkloadSAPHanaPointInTimeRestoreRequest
  - Added Interface AzureWorkloadSAPHanaPointInTimeRestoreWithRehydrateRequest
  - Added Interface AzureWorkloadSAPHanaRecoveryPoint
  - Added Interface AzureWorkloadSAPHanaRestoreRequest
  - Added Interface AzureWorkloadSAPHanaRestoreWithRehydrateRequest
  - Added Interface AzureWorkloadSQLAutoProtectionIntent
  - Added Interface AzureWorkloadSQLPointInTimeRecoveryPoint
  - Added Interface AzureWorkloadSQLPointInTimeRestoreRequest
  - Added Interface AzureWorkloadSQLPointInTimeRestoreWithRehydrateRequest
  - Added Interface AzureWorkloadSQLRecoveryPoint
  - Added Interface AzureWorkloadSQLRestoreRequest
  - Added Interface AzureWorkloadSQLRestoreWithRehydrateRequest
  - Added Interface BackupEngineBaseResource
  - Added Interface BackupEngineBaseResourceList
  - Added Interface BackupRequestResource
  - Added Interface BackupResourceConfigResource
  - Added Interface BackupResourceEncryptionConfigExtended
  - Added Interface BackupResourceEncryptionConfigExtendedResource
  - Added Interface BackupResourceEncryptionConfigResource
  - Added Interface BackupResourceVaultConfigResource
  - Added Interface DeletedProtectionContainersListNextOptionalParams
  - Added Interface DeletedProtectionContainersListOptionalParams
  - Added Interface DpmBackupEngine
  - Added Interface DpmContainer
  - Added Interface DpmJob
  - Added Interface DPMProtectedItem
  - Added Interface ExportJobsOperationResultInfo
  - Added Interface GenericContainer
  - Added Interface GenericProtectedItem
  - Added Interface GenericProtectionPolicy
  - Added Interface GenericRecoveryPoint
  - Added Interface IaasVMBackupRequest
  - Added Interface IaaSVMContainer
  - Added Interface IaasVmilrRegistrationRequest
  - Added Interface IaaSVMProtectableItem
  - Added Interface IaasVMRecoveryPoint
  - Added Interface IaasVMRestoreRequest
  - Added Interface IaasVMRestoreWithRehydrationRequest
  - Added Interface ILRRequestResource
  - Added Interface JobResource
  - Added Interface JobResourceList
  - Added Interface LogSchedulePolicy
  - Added Interface LongTermRetentionPolicy
  - Added Interface LongTermSchedulePolicy
  - Added Interface MabContainer
  - Added Interface MabFileFolderProtectedItem
  - Added Interface MabJob
  - Added Interface MabProtectionPolicy
  - Added Interface OperationResultInfo
  - Added Interface OperationResultInfoBaseResource
  - Added Interface OperationStatusJobExtendedInfo
  - Added Interface OperationStatusJobsExtendedInfo
  - Added Interface OperationStatusProvisionILRExtendedInfo
  - Added Interface OperationStatusValidateOperationExtendedInfo
  - Added Interface PrepareDataMoveResponse
  - Added Interface PrivateEndpointConnectionResource
  - Added Interface ProtectableContainerResource
  - Added Interface ProtectableContainerResourceList
  - Added Interface ProtectedItemResource
  - Added Interface ProtectedItemResourceList
  - Added Interface ProtectionContainerResource
  - Added Interface ProtectionContainerResourceList
  - Added Interface ProtectionIntentResource
  - Added Interface ProtectionIntentResourceList
  - Added Interface ProtectionPolicyResource
  - Added Interface ProtectionPolicyResourceList
  - Added Interface RecoveryPointProperties
  - Added Interface RecoveryPointResource
  - Added Interface RecoveryPointResourceList
  - Added Interface RecoveryPointTierInformationV2
  - Added Interface ResourceGuardProxyBaseResource
  - Added Interface ResourceGuardProxyBaseResourceList
  - Added Interface RestoreRequestResource
  - Added Interface SimpleRetentionPolicy
  - Added Interface SimpleSchedulePolicy
  - Added Interface SimpleSchedulePolicyV2
  - Added Interface TieringPolicy
  - Added Interface ValidateIaasVMRestoreOperationRequest
  - Added Interface ValidateRestoreOperationRequest
  - Added Interface VaultJob
  - Added Interface WorkloadItemResource
  - Added Interface WorkloadItemResourceList
  - Added Interface WorkloadProtectableItemResource
  - Added Interface WorkloadProtectableItemResourceList
  - Added Type Alias DeletedProtectionContainersListNextResponse
  - Added Type Alias DeletedProtectionContainersListResponse
  - Added Type Alias ProtectableContainerType
  - Added Type Alias TieringMode
  - Interface AzureIaaSVMProtectedItemExtendedInfo has a new optional parameter newestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInVault
  - Interface AzureVmWorkloadProtectedItemExtendedInfo has a new optional parameter newestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInVault
  - Interface ProtectedItem has a new optional parameter softDeleteRetentionPeriod
  - Interface SubProtectionPolicy has a new optional parameter tieringPolicy
  - Added Enum KnownTieringMode
  - Enum KnownBackupItemType has a new value SAPHanaDBInstance
  - Enum KnownBackupType has a new value SnapshotCopyOnlyFull
  - Enum KnownBackupType has a new value SnapshotFull
  - Enum KnownContainerType has a new value HanaHSRContainer
  - Enum KnownDataSourceType has a new value SAPHanaDBInstance
  - Enum KnownPolicyType has a new value SnapshotCopyOnlyFull
  - Enum KnownPolicyType has a new value SnapshotFull
  - Enum KnownProtectedItemState has a new value BackupsSuspended
  - Enum KnownProtectionState has a new value BackupsSuspended
  - Enum KnownRestorePointQueryType has a new value SnapshotCopyOnlyFull
  - Enum KnownRestorePointQueryType has a new value SnapshotFull
  - Enum KnownRestorePointType has a new value SnapshotCopyOnlyFull
  - Enum KnownRestorePointType has a new value SnapshotFull
  - Enum KnownWorkloadItemType has a new value SAPHanaDBInstance
  - Enum KnownWorkloadType has a new value SAPHanaDBInstance
  - Added function getContinuationToken
  - Interface BackupEnginesListNextOptionalParams no longer has parameter filter
  - Interface BackupEnginesListNextOptionalParams no longer has parameter skipToken
  - Interface BackupJobsListNextOptionalParams no longer has parameter filter
  - Interface BackupJobsListNextOptionalParams no longer has parameter skipToken
  - Interface BackupPoliciesListNextOptionalParams no longer has parameter filter
  - Interface BackupProtectableItemsListNextOptionalParams no longer has parameter filter
  - Interface BackupProtectableItemsListNextOptionalParams no longer has parameter skipToken
  - Interface BackupProtectedItemsListNextOptionalParams no longer has parameter filter
  - Interface BackupProtectedItemsListNextOptionalParams no longer has parameter skipToken
  - Interface BackupProtectionContainersListNextOptionalParams no longer has parameter filter
  - Interface BackupProtectionIntentListNextOptionalParams no longer has parameter filter
  - Interface BackupProtectionIntentListNextOptionalParams no longer has parameter skipToken
  - Interface BackupWorkloadItemsListNextOptionalParams no longer has parameter filter
  - Interface BackupWorkloadItemsListNextOptionalParams no longer has parameter skipToken
  - Interface ProtectableContainersListNextOptionalParams no longer has parameter filter
  - Interface RecoveryPointsListNextOptionalParams no longer has parameter filter
  - Type of parameter protectedItemType of interface ProtectedItem is changed from "AzureFileShareProtectedItem" | "AzureIaaSVMProtectedItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "Microsoft.Sql/servers/databases" | "AzureVmWorkloadProtectedItem" | "AzureVmWorkloadSAPAseDatabase" | "AzureVmWorkloadSAPHanaDatabase" | "AzureVmWorkloadSQLDatabase" | "DPMProtectedItem" | "GenericProtectedItem" | "MabFileFolderProtectedItem" to "AzureFileShareProtectedItem" | "AzureIaaSVMProtectedItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "Microsoft.Sql/servers/databases" | "AzureVmWorkloadProtectedItem" | "AzureVmWorkloadSAPAseDatabase" | "AzureVmWorkloadSAPHanaDatabase" | "AzureVmWorkloadSAPHanaDBInstance" | "AzureVmWorkloadSQLDatabase" | "DPMProtectedItem" | "GenericProtectedItem" | "MabFileFolderProtectedItem"
  - Type of parameter protectableItemType of interface WorkloadProtectableItem is changed from "AzureFileShare" | "IaaSVMProtectableItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "AzureVmWorkloadProtectableItem" | "SAPAseSystem" | "SAPHanaDatabase" | "SAPHanaSystem" | "SQLAvailabilityGroupContainer" | "SQLDataBase" | "SQLInstance" to "AzureFileShare" | "IaaSVMProtectableItem" | "Microsoft.ClassicCompute/virtualMachines" | "Microsoft.Compute/virtualMachines" | "AzureVmWorkloadProtectableItem" | "SAPAseSystem" | "SAPHanaDatabase" | "SAPHanaSystem" | "SAPHanaDBInstance" | "SAPHanaHSR" | "SQLAvailabilityGroupContainer" | "SQLDataBase" | "SQLInstance"

### Breaking Changes

  - Operation ResourceGuardProxy.put has a new signature
  - Enum KnownContainerType no longer has value AzureWorkloadContainer
  - Enum KnownContainerType no longer has value MicrosoftClassicComputeVirtualMachines
  - Enum KnownContainerType no longer has value MicrosoftComputeVirtualMachines
    
    
## 9.0.0 (2022-05-16)
    
### Breaking Changes

  - Interface AzureIaaSVMProtectedItemExtendedInfo no longer has parameter newestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInVault
  - Interface AzureVmWorkloadProtectedItemExtendedInfo no longer has parameter newestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo no longer has parameter oldestRecoveryPointInVault
  - Interface SubProtectionPolicy no longer has parameter tieringPolicy
  - Removed Enum KnownTieringMode
    
    
## 8.2.0 (2022-05-11)
    
### Features Added

  - Added Interface TieringPolicy
  - Added Type Alias TieringMode
  - Interface AzureIaaSVMProtectedItemExtendedInfo has a new optional parameter newestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInArchive
  - Interface AzureIaaSVMProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInVault
  - Interface AzureVmWorkloadProtectedItemExtendedInfo has a new optional parameter newestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInArchive
  - Interface AzureVmWorkloadProtectedItemExtendedInfo has a new optional parameter oldestRecoveryPointInVault
  - Interface SubProtectionPolicy has a new optional parameter tieringPolicy
  - Added Enum KnownTieringMode
    
## 8.1.1 (2022-04-29)

### Features Added

  - Bug fix
    
## 8.1.0 (2022-02-14)
    
### Features Added

  - Added Interface DailySchedule
  - Added Interface WeeklySchedule
  - Added Type Alias IaasvmPolicyType
  - Added Type Alias SimpleSchedulePolicyV2
  - Type Alias AzureIaaSVMProtectionPolicy has a new parameter policyType
  - Added Enum KnownIaasvmPolicyType
  - Enum KnownContainerType has a new value AzureWorkloadContainer
  - Enum KnownContainerType has a new value MicrosoftClassicComputeVirtualMachines
  - Enum KnownContainerType has a new value MicrosoftComputeVirtualMachines
  - Enum KnownProtectionIntentItemType has a new value AzureWorkloadAutoProtectionIntent
  - Enum KnownProtectionIntentItemType has a new value AzureWorkloadSQLAutoProtectionIntent
    
    
## 8.0.0 (2022-01-20)

The package of @azure/arm-recoveryservicesbackup is using our next generation design principles since version 8.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
