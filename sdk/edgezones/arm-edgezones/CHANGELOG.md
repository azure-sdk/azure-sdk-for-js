# Release History
    
## 1.0.0-beta.3 (2024-08-16)
Compared with version 1.0.0-beta.2
    
### Features Added

  - Added Interface ExtendedZoneListResult
  - Added Interface ExtendedZonesListBySubscriptionNextOptionalParams
  - Added Interface MicrosoftEdgeZonesForTestingOptionalParams
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Class MicrosoftEdgeZonesForTesting
  - Added Type Alias ExtendedZonesGetResponse
  - Added Type Alias ExtendedZonesListBySubscriptionNextResponse
  - Added Type Alias ExtendedZonesListBySubscriptionResponse
  - Added Type Alias ExtendedZonesRegisterResponse
  - Added Type Alias ExtendedZonesUnregisterResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Added Enum KnownProvisioningState
  - Enum KnownOrigin has a new value System
  - Enum KnownOrigin has a new value User
  - Enum KnownOrigin has a new value UserSystem
  - Added function getContinuationToken

### Breaking Changes

  - Deleted Class EdgeZonesClient
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, any> to Record<string, unknown>
  - Removed Enum KnownResourceProvisioningState
  - Enum KnownOrigin no longer has value "user,system"
  - Enum KnownOrigin no longer has value system
  - Enum KnownOrigin no longer has value user
    
    
## 1.0.0-beta.2 (2024-07-26)

### Features Added

- disable hierarchy api subpath export and issue fix.

## 1.0.0-beta.1 (2024-07-09)

### Features Added

Initial release of the Azure Edgezones package
