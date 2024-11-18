# Release History
    
## 2.0.0-beta.1 (2024-11-18)
Compared with version 1.1.0
    
### Features Added

  - Added operation group PrivateAccesses
  - Added Interface CustomerDataStorageProperties
  - Added Interface ExperimentIdentity
  - Added Interface ManagedServiceIdentity
  - Added Interface PrivateAccess
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
  - Added Type Alias PrivateEndpointConnectionProvisioningState
  - Added Type Alias PrivateEndpointServiceConnectionStatus
  - Added Type Alias PublicNetworkAccessOption
  - Interface Experiment has a new optional parameter customerDataStorage
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownPrivateEndpointConnectionProvisioningState
  - Added Enum KnownPrivateEndpointServiceConnectionStatus
  - Added Enum KnownPublicNetworkAccessOption

### Breaking Changes

  - Interface Capability no longer has parameter systemData
  - Interface CapabilityType no longer has parameter systemData
  - Interface Experiment no longer has parameter systemData
  - Interface Target no longer has parameter systemData
  - Interface TargetType no longer has parameter systemData
  - Type of parameter identity of interface Experiment is changed from ResourceIdentity to ExperimentIdentity
  - Type of parameter identity of interface ExperimentUpdate is changed from ResourceIdentity to ExperimentIdentity
  - Type of parameter endTime of interface OperationStatus is changed from string to Date
  - Type of parameter startTime of interface OperationStatus is changed from string to Date
    
    
## 1.1.0 (2024-03-06)
    
### Features Added

  - Interface ExperimentUpdate has a new optional parameter tags
    
    
## 1.0.0 (2023-11-06)

The package of @azure/arm-chaos is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
