# Release History
    
## 2.0.0-beta.1 (2025-01-15)
Compared with version 1.1.0
    
### Features Added

  - Added operation group PrivateAccesses
  - Added Interface CustomerDataStorageProperties
  - Added Interface ExperimentsCancelHeaders
  - Added Interface ExperimentsCreateOrUpdateHeaders
  - Added Interface ExperimentsDeleteHeaders
  - Added Interface ExperimentsStartHeaders
  - Added Interface ExperimentsUpdateHeaders
  - Added Interface ManagedServiceIdentity
  - Added Interface OperationStatusResult
  - Added Interface PrivateAccess
  - Added Interface PrivateAccessesCreateOrUpdateHeaders
  - Added Interface PrivateAccessesCreateOrUpdateOptionalParams
  - Added Interface PrivateAccessesDeleteAPrivateEndpointConnectionHeaders
  - Added Interface PrivateAccessesDeleteAPrivateEndpointConnectionOptionalParams
  - Added Interface PrivateAccessesDeleteHeaders
  - Added Interface PrivateAccessesDeleteOptionalParams
  - Added Interface PrivateAccessesGetAPrivateEndpointConnectionOptionalParams
  - Added Interface PrivateAccessesGetOptionalParams
  - Added Interface PrivateAccessesGetPrivateLinkResourcesNextOptionalParams
  - Added Interface PrivateAccessesGetPrivateLinkResourcesOptionalParams
  - Added Interface PrivateAccessesListAllNextOptionalParams
  - Added Interface PrivateAccessesListAllOptionalParams
  - Added Interface PrivateAccessesListNextOptionalParams
  - Added Interface PrivateAccessesListOptionalParams
  - Added Interface PrivateAccessesListPrivateEndpointConnectionsNextOptionalParams
  - Added Interface PrivateAccessesListPrivateEndpointConnectionsOptionalParams
  - Added Interface PrivateAccessesUpdateHeaders
  - Added Interface PrivateAccessesUpdateOptionalParams
  - Added Interface PrivateAccessListResult
  - Added Interface PrivateAccessPatch
  - Added Interface PrivateEndpoint
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateEndpointConnectionListResult
  - Added Interface PrivateLinkResource
  - Added Interface PrivateLinkResourceListResult
  - Added Interface PrivateLinkServiceConnectionState
  - Added Interface ProxyResource
  - Added Type Alias ExperimentActionType
  - Added Type Alias ExperimentsCancelResponse
  - Added Type Alias ExperimentsDeleteResponse
  - Added Type Alias ExperimentsStartResponse
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias PrivateAccessesCreateOrUpdateResponse
  - Added Type Alias PrivateAccessesDeleteAPrivateEndpointConnectionResponse
  - Added Type Alias PrivateAccessesDeleteResponse
  - Added Type Alias PrivateAccessesGetAPrivateEndpointConnectionResponse
  - Added Type Alias PrivateAccessesGetPrivateLinkResourcesNextResponse
  - Added Type Alias PrivateAccessesGetPrivateLinkResourcesResponse
  - Added Type Alias PrivateAccessesGetResponse
  - Added Type Alias PrivateAccessesListAllNextResponse
  - Added Type Alias PrivateAccessesListAllResponse
  - Added Type Alias PrivateAccessesListNextResponse
  - Added Type Alias PrivateAccessesListPrivateEndpointConnectionsNextResponse
  - Added Type Alias PrivateAccessesListPrivateEndpointConnectionsResponse
  - Added Type Alias PrivateAccessesListResponse
  - Added Type Alias PrivateAccessesUpdateResponse
  - Added Type Alias PrivateEndpointServiceConnectionStatus
  - Added Type Alias PublicNetworkAccessOption
  - Interface Capability has a new optional parameter provisioningState
  - Interface Experiment has a new optional parameter customerDataStorage
  - Interface ExperimentExecution has a new optional parameter provisioningState
  - Interface ExperimentExecutionDetails has a new optional parameter properties
  - Interface ExperimentExecutionDetailsProperties has a new optional parameter provisioningState
  - Interface ExperimentExecutionDetailsProperties has a new optional parameter startedAt
  - Interface ExperimentExecutionDetailsProperties has a new optional parameter status
  - Interface ExperimentExecutionDetailsProperties has a new optional parameter stoppedAt
  - Interface Resource has a new optional parameter systemData
  - Type of parameter type of interface ChaosExperimentAction is changed from "delay" | "discrete" | "continuous" to "continuous" | "delay" | "discrete"
  - Added Enum KnownExperimentActionType
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownPrivateEndpointServiceConnectionStatus
  - Added Enum KnownPublicNetworkAccessOption

### Breaking Changes

  - Interface Capability no longer has parameter systemData
  - Interface CapabilityType no longer has parameter location
  - Interface CapabilityType no longer has parameter systemData
  - Interface Experiment no longer has parameter systemData
  - Interface ExperimentExecution no longer has parameter id
  - Interface ExperimentExecution no longer has parameter name
  - Interface ExperimentExecution no longer has parameter type
  - Interface ExperimentExecutionDetails no longer has parameter failureReason
  - Interface ExperimentExecutionDetails no longer has parameter lastActionAt
  - Interface ExperimentExecutionDetails no longer has parameter runInformation
  - Interface ExperimentExecutionDetails no longer has parameter startedAt
  - Interface ExperimentExecutionDetails no longer has parameter status
  - Interface ExperimentExecutionDetails no longer has parameter stoppedAt
  - Interface Target no longer has parameter systemData
  - Interface TargetType no longer has parameter location
  - Interface TargetType no longer has parameter systemData
  - Parameter value of interface CapabilityListResult is now required
  - Parameter value of interface CapabilityTypeListResult is now required
  - Parameter value of interface ExperimentExecutionListResult is now required
  - Parameter value of interface ExperimentListResult is now required
  - Parameter value of interface TargetListResult is now required
  - Parameter value of interface TargetTypeListResult is now required
  - Type of parameter identity of interface Experiment is changed from ResourceIdentity to ManagedServiceIdentity
  - Type of parameter identity of interface ExperimentUpdate is changed from ResourceIdentity to ManagedServiceIdentity
    
    
## 1.1.0 (2024-03-06)
    
### Features Added

  - Interface ExperimentUpdate has a new optional parameter tags
    
    
## 1.0.0 (2023-11-06)

The package of @azure/arm-chaos is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
