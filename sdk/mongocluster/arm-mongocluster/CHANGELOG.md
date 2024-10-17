# Release History
    
## 2.0.0-beta.1 (2024-10-17)
Compared with version 1.0.0
    
### Features Added

  - Added Interface DataApiProperties
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Type Alias DataApiMode
  - Added Type Alias ResourceProvisioningState
  - Added Type Alias Versions
  - Interface MongoClusterProperties has a new optional parameter dataApi
  - Interface MongoClusterUpdateProperties has a new optional parameter dataApi
  - Added Enum KnownDataApiMode
  - Added Enum KnownResourceProvisioningState
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user

### Breaking Changes

  - Removed Enum KnownProvisioningState
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
    
    
## 1.0.0 (2024-09-26)

### Features Added

This is the first stable version with the package of @azure/arm-mongocluster.
