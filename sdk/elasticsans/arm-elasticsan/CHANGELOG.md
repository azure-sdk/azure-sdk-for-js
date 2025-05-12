# Release History
    
## 2.0.0-beta.1 (2025-05-12)
Compared with version 1.1.0
    
### Features Added

  - Added operation group SkusOperationGroupOperations
  - Added operation group SnapshotsOperations
  - Added operation ElasticSansOperations.create
  - Added operation ElasticSansOperations.delete
  - Added operation ElasticSansOperations.listByElasticSan
  - Added operation ElasticSansOperations.update
  - Added operation PrivateEndpointConnectionsOperations.create
  - Added operation PrivateEndpointConnectionsOperations.delete
  - Added operation VolumeGroupsOperations.create
  - Added operation VolumeGroupsOperations.delete
  - Added operation VolumeGroupsOperations.preBackup
  - Added operation VolumeGroupsOperations.preRestore
  - Added operation VolumeGroupsOperations.update
  - Added operation VolumesOperations.create
  - Added operation VolumesOperations.delete
  - Added operation VolumesOperations.restoreVolume
  - Added operation VolumesOperations.update
  - Added Interface AutoScaleProperties
  - Added Interface DeleteRetentionPolicy
  - Added Interface DiskSnapshotList
  - Added Interface ElasticSanClientOptionalParams
  - Added Interface ElasticSansListByElasticSanOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface PreValidationResponse
  - Added Interface RestorePollerOptions
  - Added Interface ScaleUpProperties
  - Added Interface SkusOperationGroupListOptionalParams
  - Added Interface SnapshotsCreateOptionalParams
  - Added Interface SnapshotsDeleteOptionalParams
  - Added Interface SnapshotsGetOptionalParams
  - Added Interface SnapshotsListByVolumeGroupOptionalParams
  - Added Interface VolumeGroupsPreBackupOptionalParams
  - Added Interface VolumeGroupsPreRestoreOptionalParams
  - Added Interface VolumeNameList
  - Added Interface VolumesRestoreVolumeOptionalParams
  - Added Class ElasticSanClient
  - Added Type Alias AutoScalePolicyEnforcement
  - Added Type Alias ContinuablePage
  - Added Type Alias DeleteType
  - Added Type Alias PolicyState
  - Added Type Alias XMsAccessSoftDeletedResources
  - Interface ElasticSanProperties has a new optional parameter autoScaleProperties
  - Interface ElasticSanUpdateProperties has a new optional parameter autoScaleProperties
  - Interface VolumeGroupProperties has a new optional parameter deleteRetentionPolicy
  - Interface VolumeGroupsListByElasticSanOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupUpdateProperties has a new optional parameter deleteRetentionPolicy
  - Interface VolumesDeleteOptionalParams has a new optional parameter deleteType
  - Interface VolumesListByVolumeGroupOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Added Enum KnownAutoScalePolicyEnforcement
  - Added Enum KnownDeleteType
  - Added Enum KnownPolicyState
  - Added Enum KnownVersions
  - Added Enum KnownXMsAccessSoftDeletedResources
  - Enum KnownProvisioningStates has a new value Deleted
  - Enum KnownProvisioningStates has a new value Restoring
  - Enum KnownProvisioningStates has a new value SoftDeleting
  - Added function restorePoller

### Breaking Changes

  - Removed operation group PrivateLinkResources
  - Removed operation group Skus
  - Removed operation group VolumeSnapshots
  - Removed operation ElasticSans.beginCreate
  - Removed operation ElasticSans.beginCreateAndWait
  - Removed operation ElasticSans.beginDelete
  - Removed operation ElasticSans.beginDeleteAndWait
  - Removed operation ElasticSans.beginUpdate
  - Removed operation ElasticSans.beginUpdateAndWait
  - Removed operation PrivateEndpointConnections.beginCreate
  - Removed operation PrivateEndpointConnections.beginCreateAndWait
  - Removed operation PrivateEndpointConnections.beginDelete
  - Removed operation PrivateEndpointConnections.beginDeleteAndWait
  - Removed operation VolumeGroups.beginCreate
  - Removed operation VolumeGroups.beginCreateAndWait
  - Removed operation VolumeGroups.beginDelete
  - Removed operation VolumeGroups.beginDeleteAndWait
  - Removed operation VolumeGroups.beginUpdate
  - Removed operation VolumeGroups.beginUpdateAndWait
  - Removed operation Volumes.beginCreate
  - Removed operation Volumes.beginCreateAndWait
  - Removed operation Volumes.beginDelete
  - Removed operation Volumes.beginDeleteAndWait
  - Removed operation Volumes.beginUpdate
  - Removed operation Volumes.beginUpdateAndWait
  - Deleted Class ElasticSanManagement
  - Interface ElasticSansCreateOptionalParams no longer has parameter resumeFrom
  - Interface ElasticSansDeleteOptionalParams no longer has parameter resumeFrom
  - Interface ElasticSansUpdateOptionalParams no longer has parameter resumeFrom
  - Interface PrivateEndpointConnectionsCreateOptionalParams no longer has parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface VolumeGroupsCreateOptionalParams no longer has parameter resumeFrom
  - Interface VolumeGroupsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface VolumeGroupsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VolumesCreateOptionalParams no longer has parameter resumeFrom
  - Interface VolumesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface VolumesUpdateOptionalParams no longer has parameter resumeFrom
  - Type of parameter tags of interface ElasticSanUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter userAssignedIdentities of interface Identity is changed from {
        [propertyName: string]: UserAssignedIdentity;
    } to Record<string, UserAssignedIdentity>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Removed function getContinuationToken
    
    
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
