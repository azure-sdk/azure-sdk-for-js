# Release History
    
## 2.0.0 (2025-03-25)
    
### Features Added

  - Added operation PoolsOperations.checkNameAvailability
  - Added Interface CheckNameAvailability
  - Added Interface CheckNameAvailabilityResult
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface PoolsCheckNameAvailabilityOptionalParams
  - Added Type Alias AvailabilityStatus
  - Added Type Alias CertificateStoreNameOption
  - Added Type Alias CheckNameAvailabilityReason
  - Added Type Alias DevOpsInfrastructureResourceType
  - Added Type Alias EphemeralType
  - Interface Organization has a new optional parameter openAccess
  - Interface PoolImage has a new optional parameter ephemeralType
  - Interface SecretsManagementSettings has a new optional parameter certificateStoreName
  - Added Enum KnownAvailabilityStatus
  - Added Enum KnownCertificateStoreNameOption
  - Added Enum KnownCheckNameAvailabilityReason
  - Added Enum KnownDevOpsInfrastructureResourceType
  - Added Enum KnownEphemeralType
  - Enum KnownStorageAccountType has a new value StandardSsdlrs
  - Enum KnownStorageAccountType has a new value StandardSsdzrs
  - Enum KnownVersions has a new value _20250121

### Breaking Changes

  - Enum KnownStorageAccountType no longer has value StandardSSDLRS
  - Enum KnownStorageAccountType no longer has value StandardSSDZRS
  - Enum KnownVersions no longer has value "V2024-10-19"
    
    
## 1.0.0 (2024-11-25)

### Features Added

This is the first stable version with the package of @azure/arm-devopsinfrastructure
