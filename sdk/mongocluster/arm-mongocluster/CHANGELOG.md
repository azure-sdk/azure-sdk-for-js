# Release History
    
## 2.0.0-beta.1 (2025-03-03)
Compared with version 1.0.1
    
### Features Added

  - Added Interface DataApiProperties
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Type Alias DataApiMode
  - Interface MongoClusterProperties has a new optional parameter dataApi
  - Interface MongoClusterUpdateProperties has a new optional parameter dataApi
  - Added Enum KnownDataApiMode
  - Added Enum KnownVersions
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user

### Breaking Changes

  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
    
    
## 1.0.1 (2024-10-14)

### Bugs Fixed
- Fix missing package information issue in user agent

## 1.0.0 (2024-09-26)

### Features Added

This is the first stable version with the package of @azure/arm-mongocluster.
