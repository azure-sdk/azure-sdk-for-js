# Release History
    
## 1.2.0 (2025-03-26)
    
### Features Added

  - Added operation VolumeGroups.beginPreBackup
  - Added operation VolumeGroups.beginPreBackupAndWait
  - Added operation VolumeGroups.beginPreRestore
  - Added operation VolumeGroups.beginPreRestoreAndWait
  - Added Interface DiskSnapshotList
  - Added Interface PreValidationResponse
  - Added Interface VolumeGroupsPreBackupHeaders
  - Added Interface VolumeGroupsPreBackupOptionalParams
  - Added Interface VolumeGroupsPreRestoreHeaders
  - Added Interface VolumeGroupsPreRestoreOptionalParams
  - Added Interface VolumeNameList
  - Added Type Alias VolumeGroupsPreBackupResponse
  - Added Type Alias VolumeGroupsPreRestoreResponse
    
    
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
