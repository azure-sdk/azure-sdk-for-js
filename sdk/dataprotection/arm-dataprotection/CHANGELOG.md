# Release History
    
## 2.0.0 (2023-11-09)
    
**Features**

  - Added Interface DefaultResourceProperties
  - Added Interface KubernetesClusterVaultTierRestoreCriteria
  - Added Type Alias BaseResourcePropertiesUnion
  - Added Type Alias ResourcePropertiesObjectType
  - Type of parameter objectType of interface ItemLevelRestoreCriteria is changed from "ItemPathBasedRestoreCriteria" | "RangeBasedItemLevelRestoreCriteria" | "KubernetesStorageClassRestoreCriteria" | "KubernetesPVRestoreCriteria" | "KubernetesClusterRestoreCriteria" to "ItemPathBasedRestoreCriteria" | "RangeBasedItemLevelRestoreCriteria" | "KubernetesStorageClassRestoreCriteria" | "KubernetesPVRestoreCriteria" | "KubernetesClusterRestoreCriteria" | "KubernetesClusterVaultTierRestoreCriteria"
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
