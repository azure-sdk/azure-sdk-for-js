# Release History
    
## 1.1.0-beta.1 (2024-08-16)
Compared with version 1.0.0
    
### Features Added

  - Added Interface DeleteRetentionPolicy
  - Added Interface ElasticSanManagementRestoreVolumeHeaders
  - Added Interface RestoreVolumeOptionalParams
  - Added Type Alias Purge
  - Added Type Alias RestoreVolumeResponse
  - Added Type Alias XMsAccessSoftDeletedResources
  - Interface VolumeGroupProperties has a new optional parameter deleteRetentionPolicy
  - Interface VolumeGroupsDeleteOptionalParams has a new optional parameter purge
  - Interface VolumeGroupsGetOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupsListByElasticSanNextOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupsListByElasticSanOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupUpdateProperties has a new optional parameter deleteRetentionPolicy
  - Interface VolumesDeleteOptionalParams has a new optional parameter purge
  - Interface VolumesGetOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumesListByVolumeGroupNextOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumesListByVolumeGroupOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Added Enum KnownPurge
  - Added Enum KnownXMsAccessSoftDeletedResources
  - Enum KnownProvisioningStates has a new value Deleted
  - Enum KnownProvisioningStates has a new value Restoring
  - Enum KnownProvisioningStates has a new value SoftDeleting
    
    
## 1.0.0 (2024-01-19)

The package of @azure/arm-elasticsan is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
