# Release History
    
## 2.0.0 (2025-04-24)
    
### Features Added

  - Added operation DeidServices.beginCreate
  - Added operation DeidServices.beginCreateAndWait
  - Added operation DeidServices.beginDelete
  - Added operation DeidServices.beginDeleteAndWait
  - Added operation DeidServices.beginUpdate
  - Added operation DeidServices.beginUpdateAndWait
  - Added operation PrivateEndpointConnections.beginCreate
  - Added operation PrivateEndpointConnections.beginCreateAndWait
  - Added operation PrivateEndpointConnections.beginDelete
  - Added operation PrivateEndpointConnections.beginDeleteAndWait
  - Added Interface DeidServiceListResult
  - Added Interface DeidServicesCreateHeaders
  - Added Interface DeidServicesDeleteHeaders
  - Added Interface DeidServicesListByResourceGroupNextOptionalParams
  - Added Interface DeidServicesListBySubscriptionNextOptionalParams
  - Added Interface DeidServicesUpdateHeaders
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface MicrosoftHealthDataAIServicesOptionalParams
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Interface PrivateEndpointConnectionResourceListResult
  - Added Interface PrivateEndpointConnectionsCreateHeaders
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Added Interface PrivateEndpointConnectionsListByDeidServiceNextOptionalParams
  - Added Interface PrivateLinkResourceListResult
  - Added Interface PrivateLinksListByDeidServiceNextOptionalParams
  - Added Class MicrosoftHealthDataAIServices
  - Added Type Alias DeidServicesCreateResponse
  - Added Type Alias DeidServicesDeleteResponse
  - Added Type Alias DeidServicesGetResponse
  - Added Type Alias DeidServicesListByResourceGroupNextResponse
  - Added Type Alias DeidServicesListByResourceGroupResponse
  - Added Type Alias DeidServicesListBySubscriptionNextResponse
  - Added Type Alias DeidServicesListBySubscriptionResponse
  - Added Type Alias DeidServicesUpdateResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Added Type Alias PrivateEndpointConnectionsCreateResponse
  - Added Type Alias PrivateEndpointConnectionsDeleteResponse
  - Added Type Alias PrivateEndpointConnectionsGetResponse
  - Added Type Alias PrivateEndpointConnectionsListByDeidServiceNextResponse
  - Added Type Alias PrivateEndpointConnectionsListByDeidServiceResponse
  - Added Type Alias PrivateLinksListByDeidServiceNextResponse
  - Added Type Alias PrivateLinksListByDeidServiceResponse
  - Interface DeidServicesCreateOptionalParams has a new optional parameter resumeFrom
  - Interface DeidServicesDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface DeidServicesUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnection has a new optional parameter groupIds
  - Interface PrivateEndpointConnection has a new optional parameter privateEndpoint
  - Interface PrivateEndpointConnection has a new optional parameter privateLinkServiceConnectionState
  - Interface PrivateEndpointConnection has a new optional parameter provisioningState
  - Interface PrivateEndpointConnectionsCreateOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter resumeFrom
  - Added function getContinuationToken

### Breaking Changes

  - Removed operation DeidServicesOperations.create
  - Removed operation DeidServicesOperations.delete
  - Removed operation DeidServicesOperations.update
  - Removed operation PrivateEndpointConnectionsOperations.create
  - Removed operation PrivateEndpointConnectionsOperations.delete
  - Deleted Class HealthDataAIServicesClient
  - Interface PrivateEndpointConnection no longer has parameter properties
  - Type of parameter tags of interface DeidUpdate is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from Record<string, UserAssignedIdentity | null> to {
        [propertyName: string]: UserAssignedIdentity | null;
    }
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentityUpdate is changed from Record<string, UserAssignedIdentity | null> to {
        [propertyName: string]: UserAssignedIdentity | null;
    }
  - Type of parameter tags of interface TrackedResource is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Removed Enum KnownVersions
  - Removed function restorePoller
    
    
## 1.0.0 (2024-11-25)

### Features Added

This is the first stable version with the package of @azure/arm-healthdataaiservices.
