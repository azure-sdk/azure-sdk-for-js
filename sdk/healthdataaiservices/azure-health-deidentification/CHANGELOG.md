## 1.0.0-beta.1 (2024-10-17)
    
### Features Added

  - Added Interface CustomizationOptions
  - Added Interface CustomizationOptionsOutput
  - Added Interface DeidServicesClientOptions
  - Added Type Alias DeidServicesClient
  - Interface DeidentificationContent has a new optional parameter customizations
  - Interface DeidentificationJob has a new optional parameter customizations
  - Interface DeidentificationJobOutput has a new optional parameter customizations
  - Interface SourceStorageLocation has a new optional parameter dataType
  - Interface SourceStorageLocation has a new optional parameter locale
  - Interface SourceStorageLocationOutput has a new optional parameter dataType
  - Interface SourceStorageLocationOutput has a new optional parameter locale
  - Interface TargetStorageLocation has a new optional parameter overwrite
  - Interface TargetStorageLocationOutput has a new optional parameter overwrite

### Breaking Changes

  - Interface DeidentificationContent no longer has parameter operation
  - Interface DeidentificationContent no longer has parameter redactionFormat
  - Interface DeidentificationJob no longer has parameter dataType
  - Interface DeidentificationJob no longer has parameter operation
  - Interface DeidentificationJob no longer has parameter redactionFormat
  - Interface DeidentificationJobOutput no longer has parameter dataType
  - Interface DeidentificationJobOutput no longer has parameter operation
  - Interface DeidentificationJobOutput no longer has parameter redactionFormat
    
