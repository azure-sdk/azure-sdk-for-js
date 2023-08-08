# Release History
    
## 4.0.0-beta.1 (2023-08-08)
    
**Features**

  - Added Interface Creator
  - Added Interface TrackedResource
  - Interface CreatorProperties has a new optional parameter consumedStorageUnitSizeInBytes
  - Interface CreatorProperties has a new optional parameter totalStorageUnitSizeInBytes
  - Interface CreatorUpdateParameters has a new optional parameter consumedStorageUnitSizeInBytes
  - Interface CreatorUpdateParameters has a new optional parameter totalStorageUnitSizeInBytes
  - Added function getContinuationToken

**Breaking Changes**

  - Removed operation group Accounts
  - Removed operation group Maps
  - Class AzureMapsManagementClient no longer has parameter accounts
  - Class AzureMapsManagementClient no longer has parameter maps
  - Removed Enum KnownCreatedByType
    
    
## 3.0.0 (2022-01-19)

The package of @azure/arm-maps is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
