# Release History
    
## 1.0.0-beta.2 (2023-02-15)
    
**Features**

  - Added operation BackupVaults.beginDelete
  - Added operation BackupVaults.beginDeleteAndWait
  - Added Interface CmkKekIdentity
  - Added Interface CmkKeyVaultProperties
  - Added Interface CrossSubscriptionRestoreSettings
  - Added Interface DppBaseTrackedResource
  - Added Interface EncryptionSettings
  - Added Interface FeatureSettings
  - Added Interface PatchResourceGuardInput
  - Added Type Alias CrossSubscriptionRestoreState
  - Added Type Alias EncryptionState
  - Added Type Alias IdentityType
  - Added Type Alias InfrastructureEncryptionState
  - Interface AzureBackupDiscreteRecoveryPoint has a new optional parameter expiryTime
  - Interface BackupVault has a new optional parameter featureSettings
  - Interface BackupVaultsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface BackupVaultsDeleteOptionalParams has a new optional parameter updateIntervalInMs
  - Interface PatchBackupVaultInput has a new optional parameter featureSettings
  - Interface SecuritySettings has a new optional parameter encryptionSettings
  - Interface TargetDetails has a new optional parameter targetResourceArmId
  - Added Enum KnownCrossSubscriptionRestoreState
  - Added Enum KnownEncryptionState
  - Added Enum KnownIdentityType
  - Added Enum KnownInfrastructureEncryptionState
  - Enum KnownSourceDataStoreType has a new value OperationalStore
  - Enum KnownStorageSettingStoreTypes has a new value OperationalStore

**Breaking Changes**

  - Removed operation group BackupInstancesExtensionRouting
  - Removed operation group DppResourceGuardProxy
  - Removed operation BackupVaults.delete
  - Operation ResourceGuards.patch has a new signature
  - Type of parameter provisioningState of interface ResourceGuard is changed from ResourceGuardProvisioningState to ProvisioningState
  - Class DataProtectionClient no longer has parameter backupInstancesExtensionRouting
  - Class DataProtectionClient no longer has parameter dppResourceGuardProxy
  - Removed Enum KnownResourceGuardProvisioningState
  - Enum KnownStorageSettingStoreTypes no longer has value SnapshotStore
    
    
## 1.0.0-beta.1 (2023-02-08)

The package of @azure/arm-dataprotection is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
