# Release History

## 2.0.0 (2026-02-14)

### Features Added
  - Added operation ElasticSansOperations.create
  - Added operation ElasticSansOperations.delete
  - Added operation ElasticSansOperations.update
  - Added operation PrivateEndpointConnectionsOperations.create
  - Added operation PrivateEndpointConnectionsOperations.delete
  - Added operation VolumeGroupsOperations.create
  - Added operation VolumeGroupsOperations.delete
  - Added operation VolumeGroupsOperations.update
  - Added operation VolumesOperations.beginPreBackup
  - Added operation VolumesOperations.beginPreBackupAndWait
  - Added operation VolumesOperations.beginPreRestore
  - Added operation VolumesOperations.beginPreRestoreAndWait
  - Added operation VolumesOperations.create
  - Added operation VolumesOperations.delete
  - Added operation VolumesOperations.preBackup
  - Added operation VolumesOperations.preRestore
  - Added operation VolumesOperations.update
  - Added operation VolumeSnapshotsOperations.create
  - Added operation VolumeSnapshotsOperations.delete
  - Added Interface AutoScaleProperties
  - Added Interface DiskSnapshotList
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface PreValidationResponse
  - Added Interface RestorePollerOptions
  - Added Interface ScaleUpProperties
  - Added Interface SimplePollerLike
  - Added Interface VolumeNameList
  - Added Interface VolumesPreBackupOptionalParams
  - Added Interface VolumesPreRestoreOptionalParams
  - Interface ElasticSan has a new optional parameter autoScaleProperties
  - Interface ElasticSan has a new optional parameter availabilityZones
  - Interface ElasticSan has a new optional parameter privateEndpointConnections
  - Interface ElasticSan has a new optional parameter provisioningState
  - Interface ElasticSan has a new optional parameter publicNetworkAccess
  - Interface ElasticSan has a new optional parameter totalIops
  - Interface ElasticSan has a new optional parameter totalMBps
  - Interface ElasticSan has a new optional parameter totalSizeTiB
  - Interface ElasticSan has a new optional parameter totalVolumeSizeGiB
  - Interface ElasticSan has a new optional parameter volumeGroupCount
  - Interface ElasticSanProperties has a new optional parameter autoScaleProperties
  - Interface ElasticSanUpdate has a new optional parameter autoScaleProperties
  - Interface ElasticSanUpdate has a new optional parameter baseSizeTiB
  - Interface ElasticSanUpdate has a new optional parameter extendedCapacitySizeTiB
  - Interface ElasticSanUpdate has a new optional parameter publicNetworkAccess
  - Interface ElasticSanUpdateProperties has a new optional parameter autoScaleProperties
  - Interface PrivateEndpointConnection has a new optional parameter groupIds
  - Interface PrivateEndpointConnection has a new optional parameter privateEndpoint
  - Interface PrivateEndpointConnection has a new optional parameter provisioningState
  - Interface PrivateLinkResource has a new optional parameter groupId
  - Interface PrivateLinkResource has a new optional parameter requiredMembers
  - Interface PrivateLinkResource has a new optional parameter requiredZoneNames
  - Interface Snapshot has a new optional parameter provisioningState
  - Interface Snapshot has a new optional parameter sourceVolumeSizeGiB
  - Interface Snapshot has a new optional parameter volumeName
  - Interface Volume has a new optional parameter creationData
  - Interface Volume has a new optional parameter managedBy
  - Interface Volume has a new optional parameter provisioningState
  - Interface Volume has a new optional parameter storageTarget
  - Interface Volume has a new optional parameter volumeId
  - Interface VolumeGroup has a new optional parameter encryption
  - Interface VolumeGroup has a new optional parameter encryptionProperties
  - Interface VolumeGroup has a new optional parameter enforceDataIntegrityCheckForIscsi
  - Interface VolumeGroup has a new optional parameter networkAcls
  - Interface VolumeGroup has a new optional parameter privateEndpointConnections
  - Interface VolumeGroup has a new optional parameter protocolType
  - Interface VolumeGroup has a new optional parameter provisioningState
  - Interface VolumeGroupUpdate has a new optional parameter encryption
  - Interface VolumeGroupUpdate has a new optional parameter encryptionProperties
  - Interface VolumeGroupUpdate has a new optional parameter enforceDataIntegrityCheckForIscsi
  - Interface VolumeGroupUpdate has a new optional parameter networkAcls
  - Interface VolumeGroupUpdate has a new optional parameter protocolType
  - Interface VolumeUpdate has a new optional parameter managedBy
  - Interface VolumeUpdate has a new optional parameter sizeGiB
  - Added Type Alias AutoScalePolicyEnforcement
  - Added Type Alias AzureSupportedClouds
  - Added Enum AzureClouds
  - Added Enum KnownAutoScalePolicyEnforcement
  - Added Enum KnownVersions
  - Enum KnownProvisioningStates has a new value Deleted
  - Enum KnownProvisioningStates has a new value Restoring

### Breaking Changes
  - Operation ElasticSans.beginCreate has a new signature
  - Operation ElasticSans.beginCreateAndWait has a new signature
  - Operation ElasticSans.beginUpdateAndWait has a new signature
  - Operation ElasticSans.get has a new signature
  - Operation PrivateEndpointConnections.beginCreate has a new signature
  - Operation PrivateEndpointConnections.beginCreateAndWait has a new signature
  - Operation PrivateEndpointConnections.get has a new signature
  - Operation Volumes.beginCreate has a new signature
  - Operation Volumes.beginCreateAndWait has a new signature
  - Operation Volumes.beginUpdate has a new signature
  - Operation Volumes.beginUpdateAndWait has a new signature
  - Operation Volumes.get has a new signature
  - Operation VolumeSnapshots.beginCreate has a new signature
  - Operation VolumeSnapshots.beginCreateAndWait has a new signature
  - Operation VolumeSnapshots.get has a new signature
  - Removed Interface ElasticSanList
  - Removed Interface SkuInformationList
  - Removed Interface SnapshotList
  - Removed Interface VolumeGroupList
  - Removed Interface VolumeList
  - Interface ElasticSan has a new required parameter baseSizeTiB
  - Interface ElasticSan has a new required parameter extendedCapacitySizeTiB
  - Interface ElasticSan has a new required parameter sku
  - Interface PrivateEndpointConnection has a new required parameter privateLinkServiceConnectionState
  - Interface Snapshot has a new required parameter creationData
  - Interface Volume has a new required parameter sizeGiB
  - Interface ElasticSan no longer has parameter properties
  - Interface ElasticSanUpdate no longer has parameter properties
  - Interface PrivateEndpointConnection no longer has parameter properties
  - Interface PrivateLinkResource no longer has parameter properties
  - Interface Snapshot no longer has parameter properties
  - Interface Volume no longer has parameter properties
  - Interface VolumeGroup no longer has parameter properties
  - Interface VolumeGroupUpdate no longer has parameter properties
  - Interface VolumeUpdate no longer has parameter properties
  - Parameter value of interface PrivateLinkResourceListResult is now required

    
## 1.2.0-beta.2 (2025-04-18)
Compared with version 1.1.0
    
### Features Added

  - Added operation Volumes.beginPreBackup
  - Added operation Volumes.beginPreBackupAndWait
  - Added operation Volumes.beginPreRestore
  - Added operation Volumes.beginPreRestoreAndWait
  - Added Interface AutoScaleProperties
  - Added Interface DeleteRetentionPolicy
  - Added Interface DiskSnapshotList
  - Added Interface ElasticSanManagementRestoreVolumeHeaders
  - Added Interface PreValidationResponse
  - Added Interface RestoreVolumeOptionalParams
  - Added Interface ScaleUpProperties
  - Added Interface VolumeNameList
  - Added Interface VolumesPreBackupHeaders
  - Added Interface VolumesPreBackupOptionalParams
  - Added Interface VolumesPreRestoreHeaders
  - Added Interface VolumesPreRestoreOptionalParams
  - Added Type Alias AutoScalePolicyEnforcement
  - Added Type Alias DeleteType
  - Added Type Alias PolicyState
  - Added Type Alias RestoreVolumeResponse
  - Added Type Alias VolumesPreBackupResponse
  - Added Type Alias VolumesPreRestoreResponse
  - Added Type Alias XMsAccessSoftDeletedResources
  - Interface ElasticSanProperties has a new optional parameter autoScaleProperties
  - Interface ElasticSanUpdateProperties has a new optional parameter autoScaleProperties
  - Interface VolumeGroupProperties has a new optional parameter deleteRetentionPolicy
  - Interface VolumeGroupsListByElasticSanNextOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupsListByElasticSanOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupUpdateProperties has a new optional parameter deleteRetentionPolicy
  - Interface VolumesDeleteOptionalParams has a new optional parameter deleteType
  - Interface VolumesListByVolumeGroupNextOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumesListByVolumeGroupOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Added Enum KnownAutoScalePolicyEnforcement
  - Added Enum KnownDeleteType
  - Added Enum KnownPolicyState
  - Added Enum KnownXMsAccessSoftDeletedResources
  - Enum KnownProvisioningStates has a new value Deleted
  - Enum KnownProvisioningStates has a new value Restoring
  - Enum KnownProvisioningStates has a new value SoftDeleting
    
    
## 1.2.0-beta.1 (2024-10-18)
Compared with version 1.1.0
    
### Features Added

  - Added Interface AutoScaleProperties
  - Added Interface ScaleUpProperties
  - Added Type Alias AutoScalePolicyEnforcement
  - Interface ElasticSanProperties has a new optional parameter autoScaleProperties
  - Interface ElasticSanUpdateProperties has a new optional parameter autoScaleProperties
  - Added Enum KnownAutoScalePolicyEnforcement
    
    
## 1.1.0 (2024-08-12)
    
### Features Added

  - Interface VolumeGroupProperties has a new optional parameter enforceDataIntegrityCheckForIscsi
  - Interface VolumeGroupUpdateProperties has a new optional parameter enforceDataIntegrityCheckForIscsi
    
    
## 1.0.0 (2024-01-19)

The package of @azure/arm-elasticsan is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
