# Release History
    
## 2.0.0-beta.1 (2023-06-25)
    
**Features**

  - Added operation group BackupInstancesExtensionRouting
  - Added operation group CrossRegionRestoreJob
  - Added operation group CrossRegionRestoreJobs
  - Added operation group SecondaryRPs
  - Added operation BackupInstances.beginTriggerCrossRegionRestore
  - Added operation BackupInstances.beginTriggerCrossRegionRestoreAndWait
  - Added operation BackupInstances.beginValidateCrossRegionRestore
  - Added operation BackupInstances.beginValidateCrossRegionRestoreAndWait
  - Added Interface BackupInstancesExtensionRoutingListNextOptionalParams
  - Added Interface BackupInstancesExtensionRoutingListOptionalParams
  - Added Interface BackupInstancesTriggerCrossRegionRestoreHeaders
  - Added Interface BackupInstancesTriggerCrossRegionRestoreOptionalParams
  - Added Interface BackupInstancesValidateCrossRegionRestoreHeaders
  - Added Interface BackupInstancesValidateCrossRegionRestoreOptionalParams
  - Added Interface CmkKekIdentity
  - Added Interface CmkKeyVaultProperties
  - Added Interface CrossRegionRestoreDetails
  - Added Interface CrossRegionRestoreJobGetOptionalParams
  - Added Interface CrossRegionRestoreJobRequest
  - Added Interface CrossRegionRestoreJobsListNextOptionalParams
  - Added Interface CrossRegionRestoreJobsListOptionalParams
  - Added Interface CrossRegionRestoreJobsRequest
  - Added Interface CrossRegionRestoreRequestObject
  - Added Interface CrossRegionRestoreSettings
  - Added Interface EncryptionSettings
  - Added Interface FetchSecondaryRPsRequestParameters
  - Added Interface IdentityDetails
  - Added Interface SecondaryRPsFetchNextOptionalParams
  - Added Interface SecondaryRPsFetchOptionalParams
  - Added Interface UserAssignedIdentityDetails
  - Added Interface ValidateCrossRegionRestoreRequestObject
  - Added Type Alias BackupInstancesExtensionRoutingListNextResponse
  - Added Type Alias BackupInstancesExtensionRoutingListResponse
  - Added Type Alias BackupInstancesTriggerCrossRegionRestoreResponse
  - Added Type Alias BackupInstancesValidateCrossRegionRestoreResponse
  - Added Type Alias CrossRegionRestoreJobGetResponse
  - Added Type Alias CrossRegionRestoreJobsListNextResponse
  - Added Type Alias CrossRegionRestoreJobsListResponse
  - Added Type Alias CrossRegionRestoreState
  - Added Type Alias EncryptionState
  - Added Type Alias IdentityType
  - Added Type Alias InfrastructureEncryptionState
  - Added Type Alias SecondaryRPsFetchNextResponse
  - Added Type Alias SecondaryRPsFetchResponse
  - Added Type Alias SecureScoreLevel
  - Interface AzureBackupRestoreRequest has a new optional parameter identityDetails
  - Interface BackupInstance has a new optional parameter identityDetails
  - Interface BackupVault has a new optional parameter secureScore
  - Interface DppIdentityDetails has a new optional parameter userAssignedIdentities
  - Interface FeatureSettings has a new optional parameter crossRegionRestoreSettings
  - Interface SecuritySettings has a new optional parameter encryptionSettings
  - Added Enum KnownCrossRegionRestoreState
  - Added Enum KnownEncryptionState
  - Added Enum KnownIdentityType
  - Added Enum KnownInfrastructureEncryptionState
  - Added Enum KnownSecureScoreLevel

**Breaking Changes**

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
