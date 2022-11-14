# Release History
    
## 1.0.0-beta.3 (2022-11-14)
    
**Features**

  - Added operation group CheckNameAvailability
  - Added operation NetworkConnections.beginRunHealthChecks
  - Added operation NetworkConnections.beginRunHealthChecksAndWait
  - Added Interface CheckNameAvailabilityExecuteOptionalParams
  - Added Interface CheckNameAvailabilityRequest
  - Added Interface CheckNameAvailabilityResponse
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface OperationStatusResult
  - Added Type Alias CatalogSyncState
  - Added Type Alias CheckNameAvailabilityExecuteResponse
  - Added Type Alias CheckNameAvailabilityReason
  - Added Type Alias HibernateSupport
  - Added Type Alias ProvisioningState
  - Added Type Alias SchedulesUpdateResponse
  - Interface Catalog has a new optional parameter syncState
  - Interface CatalogProperties has a new optional parameter syncState
  - Interface DevBoxDefinition has a new optional parameter hibernateSupport
  - Interface DevBoxDefinitionUpdate has a new optional parameter hibernateSupport
  - Interface DevBoxDefinitionUpdateProperties has a new optional parameter hibernateSupport
  - Interface DevCenter has a new optional parameter devCenterUri
  - Interface NetworkConnectionsRunHealthChecksOptionalParams has a new optional parameter resumeFrom
  - Interface NetworkConnectionsRunHealthChecksOptionalParams has a new optional parameter updateIntervalInMs
  - Interface Project has a new optional parameter devCenterUri
  - Interface ProjectProperties has a new optional parameter devCenterUri
  - Class DevCenterClient has a new parameter checkNameAvailability
  - Added Enum KnownCatalogSyncState
  - Added Enum KnownCheckNameAvailabilityReason
  - Added Enum KnownHibernateSupport
  - Added Enum KnownProvisioningState

**Breaking Changes**

  - Removed operation NetworkConnections.runHealthChecks
    
    
## 1.0.0-beta.2 (2022-10-11)
    
**Features**

  - Added operation group ProjectAllowedEnvironmentTypes
  - Added Interface AllowedEnvironmentType
  - Added Interface AllowedEnvironmentTypeListResult
  - Added Interface ProjectAllowedEnvironmentTypesGetOptionalParams
  - Added Interface ProjectAllowedEnvironmentTypesListNextOptionalParams
  - Added Interface ProjectAllowedEnvironmentTypesListOptionalParams
  - Added Type Alias ProjectAllowedEnvironmentTypesGetResponse
  - Added Type Alias ProjectAllowedEnvironmentTypesListNextResponse
  - Added Type Alias ProjectAllowedEnvironmentTypesListResponse
  - Interface OperationStatus has a new optional parameter resourceId
  - Class DevCenterClient has a new parameter projectAllowedEnvironmentTypes
    
    
## 1.0.0-beta.1 (2022-08-15)

The package of @azure/arm-devcenter is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
