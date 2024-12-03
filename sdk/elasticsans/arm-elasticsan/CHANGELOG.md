# Release History
    
## 1.2.0-beta.2 (2024-12-03)
Compared with version 1.1.0
    
### Features Added

  - Added Interface AutoScaleProperties
  - Added Interface DeleteRetentionPolicy
  - Added Interface ElasticSanManagementRestoreVolumeHeaders
  - Added Interface RestoreVolumeOptionalParams
  - Added Interface ScaleUpProperties
  - Added Type Alias AutoScalePolicyEnforcement
  - Added Type Alias DeleteType
  - Added Type Alias PolicyState
  - Added Type Alias RestoreVolumeResponse
  - Added Type Alias XMsAccessSoftDeletedResources
  - Interface ElasticSanProperties has a new optional parameter autoScaleProperties
  - Interface ElasticSanUpdateProperties has a new optional parameter autoScaleProperties
  - Interface VolumeGroupProperties has a new optional parameter deleteRetentionPolicy
  - Interface VolumeGroupsDeleteOptionalParams has a new optional parameter deleteType
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
