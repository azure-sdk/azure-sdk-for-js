# Release History
    
## 2.0.0 (2024-12-10)
    
### Features Added

  - Added operation PoolsOperations.checkNameAvailability
  - Added Interface CheckNameAvailability
  - Added Interface CheckNameAvailabilityResult
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface PoolsCheckNameAvailabilityOptionalParams
  - Added Type Alias AvailabilityStatus
  - Added Type Alias CheckNameAvailabilityReason
  - Added Type Alias DevOpsInfrastructureResourceType
  - Added Enum KnownAvailabilityStatus
  - Added Enum KnownCheckNameAvailabilityReason
  - Added Enum KnownDevOpsInfrastructureResourceType
  - Enum KnownManagedServiceIdentityType has a new value "SystemAssigned,UserAssigned"
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownVersions has a new value "2024-10-19"

### Breaking Changes

  - Enum KnownManagedServiceIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownVersions no longer has value "V2024-10-19"
    
    
## 1.0.0 (2024-11-25)

### Features Added

This is the first stable version with the package of @azure/arm-devopsinfrastructure
