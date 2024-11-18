# Release History
    
## 10.0.0 (2024-11-18)
    
### Features Added

  - Added operation CloudEndpoints.afsShareMetadataCertificatePublicKeys
  - Added operation RegisteredServers.beginUpdate
  - Added operation RegisteredServers.beginUpdateAndWait
  - Added Interface CloudEndpointAfsShareMetadataCertificatePublicKeys
  - Added Interface CloudEndpointsAfsShareMetadataCertificatePublicKeysHeaders
  - Added Interface CloudEndpointsAfsShareMetadataCertificatePublicKeysOptionalParams
  - Added Interface CloudTieringLowDiskMode
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface ManagedServiceIdentity
  - Added Interface RegisteredServersUpdateHeaders
  - Added Interface RegisteredServersUpdateOptionalParams
  - Added Interface RegisteredServerUpdateParameters
  - Added Interface ServerEndpointProvisioningStatus
  - Added Interface ServerEndpointProvisioningStepStatus
  - Added Interface SystemData
  - Added Interface UserAssignedIdentity
  - Added Type Alias CloudEndpointsAfsShareMetadataCertificatePublicKeysResponse
  - Added Type Alias CloudTieringLowDiskModeState
  - Added Type Alias CreatedByType
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias RegisteredServersUpdateResponse
  - Added Type Alias ServerAuthType
  - Added Type Alias ServerProvisioningStatus
  - Interface OperationResourceMetricSpecification has a new optional parameter lockAggregationType
  - Interface OperationResourceMetricSpecification has a new optional parameter supportedAggregationTypes
  - Interface PrivateEndpointConnection has a new optional parameter groupIds
  - Interface RegisteredServer has a new optional parameter activeAuthType
  - Interface RegisteredServer has a new optional parameter applicationId
  - Interface RegisteredServer has a new optional parameter identity
  - Interface RegisteredServer has a new optional parameter latestApplicationId
  - Interface RegisteredServerCreateParameters has a new optional parameter applicationId
  - Interface RegisteredServerCreateParameters has a new optional parameter identity
  - Interface Resource has a new optional parameter systemData
  - Interface ServerEndpoint has a new optional parameter serverEndpointProvisioningStatus
  - Interface ServerEndpointCloudTieringStatus has a new optional parameter lowDiskMode
  - Interface StorageSyncApiError has a new optional parameter innererror
  - Interface StorageSyncService has a new optional parameter identity
  - Interface StorageSyncService has a new optional parameter useIdentity
  - Interface StorageSyncServiceCreateParameters has a new optional parameter identity
  - Interface StorageSyncServiceCreateParameters has a new optional parameter useIdentity
  - Interface StorageSyncServiceUpdateParameters has a new optional parameter identity
  - Interface StorageSyncServiceUpdateParameters has a new optional parameter useIdentity
  - Added Enum KnownCloudTieringLowDiskModeState
  - Added Enum KnownCreatedByType
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownServerAuthType
  - Added Enum KnownServerProvisioningStatus

### Breaking Changes

  - Interface StorageSyncApiError no longer has parameter innerError
    
    
## 9.1.0 (2022-12-12)
    
### Features Added

  - Added Interface CloudEndpoint
  - Added Interface CloudEndpointCreateParameters
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface RegisteredServer
  - Added Interface RegisteredServerCreateParameters
  - Added Interface ServerEndpoint
  - Added Interface ServerEndpointCreateParameters
  - Added Interface StorageSyncService
  - Added Interface SyncGroup
  - Added Interface SyncGroupCreateParameters
  - Added Interface TrackedResource
  - Added Interface Workflow
    
## 9.0.1 (2022-05-01)

### Features Added

  - Bug fix
    
## 9.0.0 (2022-01-21)

The package of @azure/arm-storagesync is using our next generation design principles since version 9.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
