# Release History
    
## 2.0.0 (2024-11-29)
    
### Features Added

  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Enum KnownVersions
  - Enum KnownManagedServiceIdentityType has a new value "SystemAssigned,UserAssigned"
  - Enum KnownNetworkApiVersion has a new value v2020_11_01
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownStorageAccountTypes has a new value Premium_LRS
  - Enum KnownStorageAccountTypes has a new value Premium_ZRS
  - Enum KnownStorageAccountTypes has a new value PremiumV2_LRS
  - Enum KnownStorageAccountTypes has a new value Standard_LRS
  - Enum KnownStorageAccountTypes has a new value StandardSSD_LRS
  - Enum KnownStorageAccountTypes has a new value StandardSSD_ZRS
  - Enum KnownStorageAccountTypes has a new value UltraSSD_LRS

### Breaking Changes

  - Enum KnownManagedServiceIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownNetworkApiVersion no longer has value V20201101
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownStorageAccountTypes no longer has value PremiumLRS
  - Enum KnownStorageAccountTypes no longer has value PremiumV2LRS
  - Enum KnownStorageAccountTypes no longer has value PremiumZRS
  - Enum KnownStorageAccountTypes no longer has value StandardLRS
  - Enum KnownStorageAccountTypes no longer has value StandardSSDLRS
  - Enum KnownStorageAccountTypes no longer has value StandardSSDZRS
  - Enum KnownStorageAccountTypes no longer has value UltraSSDLRS
    
    
## 1.0.0 (2024-10-21)

### Features Added

This is the first stable version with the package of @azure/arm-computefleet.
