# Release History
    
## 2.0.0 (2023-11-10)
    
**Features**

  - Added operation group CrossRegionRestoreJob
  - Added operation group CrossRegionRestoreJobs
  - Added operation group SecondaryRPs
  - Added operation BackupInstances.beginTriggerCrossRegionRestore
  - Added operation BackupInstances.beginTriggerCrossRegionRestoreAndWait
  - Added operation BackupInstances.beginValidateCrossRegionRestore
  - Added operation BackupInstances.beginValidateCrossRegionRestoreAndWait
  - Added Interface BackupInstancesTriggerCrossRegionRestoreHeaders
  - Added Interface BackupInstancesTriggerCrossRegionRestoreOptionalParams
  - Added Interface BackupInstancesValidateCrossRegionRestoreHeaders
  - Added Interface BackupInstancesValidateCrossRegionRestoreOptionalParams
  - Added Interface CrossRegionRestoreDetails
  - Added Interface CrossRegionRestoreJobGetOptionalParams
  - Added Interface CrossRegionRestoreJobRequest
  - Added Interface CrossRegionRestoreJobsListNextOptionalParams
  - Added Interface CrossRegionRestoreJobsListOptionalParams
  - Added Interface CrossRegionRestoreJobsRequest
  - Added Interface CrossRegionRestoreRequestObject
  - Added Interface DefaultResourceProperties
  - Added Interface FetchSecondaryRPsRequestParameters
  - Added Interface KubernetesClusterVaultTierRestoreCriteria
  - Added Interface SecondaryRPsFetchNextOptionalParams
  - Added Interface SecondaryRPsFetchOptionalParams
  - Added Interface UserFacingWarningDetail
  - Added Interface ValidateCrossRegionRestoreRequestObject
  - Added Type Alias BackupInstancesTriggerCrossRegionRestoreResponse
  - Added Type Alias BackupInstancesValidateCrossRegionRestoreResponse
  - Added Type Alias BaseResourcePropertiesUnion
  - Added Type Alias CrossRegionRestoreJobGetResponse
  - Added Type Alias CrossRegionRestoreJobsListNextResponse
  - Added Type Alias CrossRegionRestoreJobsListResponse
  - Added Type Alias RecoveryPointCompletionState
  - Added Type Alias ResourcePropertiesObjectType
  - Added Type Alias SecondaryRPsFetchNextResponse
  - Added Type Alias SecondaryRPsFetchResponse
  - Interface AzureBackupDiscreteRecoveryPoint has a new optional parameter recoveryPointState
  - Interface BackupVault has a new optional parameter replicatedRegions
  - Interface JobExtendedInfo has a new optional parameter warningDetails
  - Type of parameter objectType of interface ItemLevelRestoreCriteria is changed from "ItemPathBasedRestoreCriteria" | "RangeBasedItemLevelRestoreCriteria" | "KubernetesStorageClassRestoreCriteria" | "KubernetesPVRestoreCriteria" | "KubernetesClusterRestoreCriteria" to "ItemPathBasedRestoreCriteria" | "RangeBasedItemLevelRestoreCriteria" | "KubernetesStorageClassRestoreCriteria" | "KubernetesPVRestoreCriteria" | "KubernetesClusterRestoreCriteria" | "KubernetesClusterVaultTierRestoreCriteria"
  - Added Enum KnownRecoveryPointCompletionState
  - Added Enum KnownResourcePropertiesObjectType

**Breaking Changes**

  - Type of parameter objectType of interface BaseResourceProperties is changed from "BaseResourceProperties" to "DefaultResourceProperties"
  - Type of parameter resourceProperties of interface Datasource is changed from BaseResourceProperties to BaseResourcePropertiesUnion
  - Type of parameter resourceProperties of interface DatasourceSet is changed from BaseResourceProperties to BaseResourcePropertiesUnion
    
    
## 1.2.0 (2023-07-10)
    
**Features**

  - Added Interface BaseResourceProperties
  - Added Interface CrossRegionRestoreSettings
  - Added Interface IdentityDetails
  - Added Interface NamespacedNameResource
  - Added Interface UserAssignedIdentity
  - Added Type Alias CrossRegionRestoreState
  - Added Type Alias SecureScoreLevel
  - Interface AzureBackupJob has a new optional parameter rehydrationPriority
  - Interface AzureBackupRestoreRequest has a new optional parameter identityDetails
  - Interface BackupInstance has a new optional parameter identityDetails
  - Interface BackupVault has a new optional parameter secureScore
  - Interface Datasource has a new optional parameter resourceProperties
  - Interface DatasourceSet has a new optional parameter resourceProperties
  - Interface DppIdentityDetails has a new optional parameter userAssignedIdentities
  - Interface FeatureSettings has a new optional parameter crossRegionRestoreSettings
  - Interface KubernetesClusterBackupDatasourceParameters has a new optional parameter backupHookReferences
  - Interface KubernetesClusterRestoreCriteria has a new optional parameter restoreHookReferences
  - Added Enum KnownCrossRegionRestoreState
  - Added Enum KnownSecureScoreLevel
  - Class DataProtectionClient has a new signature
    
    
## 1.1.0 (2023-06-12)
    
**Features**

  - Added operation group DppResourceGuardProxy
  - Added Interface DppResourceGuardProxyCreateOrUpdateOptionalParams
  - Added Interface DppResourceGuardProxyDeleteOptionalParams
  - Added Interface DppResourceGuardProxyGetOptionalParams
  - Added Interface DppResourceGuardProxyListNextOptionalParams
  - Added Interface DppResourceGuardProxyListOptionalParams
  - Added Interface DppResourceGuardProxyUnlockDeleteOptionalParams
  - Added Interface ResourceGuardOperationDetail
  - Added Interface ResourceGuardProxyBase
  - Added Interface ResourceGuardProxyBaseResource
  - Added Interface ResourceGuardProxyBaseResourceList
  - Added Interface UnlockDeleteRequest
  - Added Interface UnlockDeleteResponse
  - Added Type Alias DppResourceGuardProxyCreateOrUpdateResponse
  - Added Type Alias DppResourceGuardProxyGetResponse
  - Added Type Alias DppResourceGuardProxyListNextResponse
  - Added Type Alias DppResourceGuardProxyListResponse
  - Added Type Alias DppResourceGuardProxyUnlockDeleteResponse
    
    
## 1.0.0 (2023-03-08)

The package of @azure/arm-dataprotection is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
