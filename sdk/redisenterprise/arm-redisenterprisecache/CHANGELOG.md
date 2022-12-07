# Release History
    
## 3.0.0 (2022-12-07)
    
**Features**

  - Added operation Databases.beginExportRdb
  - Added operation Databases.beginExportRdbAndWait
  - Added operation Databases.beginImportRdb
  - Added operation Databases.beginImportRdbAndWait
  - Added operation PrivateEndpointConnections.beginCreate
  - Added operation PrivateEndpointConnections.beginCreateAndWait
  - Added operation PrivateEndpointConnections.beginDelete
  - Added operation PrivateEndpointConnections.beginDeleteAndWait
  - Added operation PrivateEndpointConnections.beginUpdate
  - Added operation PrivateEndpointConnections.beginUpdateAndWait
  - Added operation PrivateEndpointConnections.listByCluster
  - Added operation RedisEnterprise.listBySubscription
  - Added Interface Cluster
  - Added Interface ClusterListResult
  - Added Interface Database
  - Added Interface DatabaseListResult
  - Added Interface DatabasesCreateHeaders
  - Added Interface DatabasesDeleteHeaders
  - Added Interface DatabasesExportRdbHeaders
  - Added Interface DatabasesExportRdbOptionalParams
  - Added Interface DatabasesForceUnlinkHeaders
  - Added Interface DatabasesImportRdbHeaders
  - Added Interface DatabasesImportRdbOptionalParams
  - Added Interface DatabasesRegenerateKeyHeaders
  - Added Interface DatabasesUpdateHeaders
  - Added Interface ExportParameters
  - Added Interface ImportParameters
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateEndpointConnectionsCreateHeaders
  - Added Interface PrivateEndpointConnectionsCreateOptionalParams
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Added Interface PrivateEndpointConnectionsListByClusterNextOptionalParams
  - Added Interface PrivateEndpointConnectionsListByClusterOptionalParams
  - Added Interface PrivateEndpointConnectionsUpdateHeaders
  - Added Interface PrivateEndpointConnectionsUpdateOptionalParams
  - Added Interface PrivateLink
  - Added Interface PrivateLinkListResult
  - Added Interface PrivateLinkResourcesListByClusterNextOptionalParams
  - Added Interface ProxyResource
  - Added Interface RedisEnterpriseCreateHeaders
  - Added Interface RedisEnterpriseDeleteHeaders
  - Added Interface RedisEnterpriseListBySubscriptionNextOptionalParams
  - Added Interface RedisEnterpriseListBySubscriptionOptionalParams
  - Added Interface RedisEnterpriseUpdateHeaders
  - Added Interface SystemData
  - Added Interface TrackedResource
  - Added Type Alias ClientProtocol
  - Added Type Alias CreatedByType
  - Added Type Alias KeyType_2
  - Added Type Alias PrivateEndpointConnectionsCreateResponse
  - Added Type Alias PrivateEndpointConnectionsListByClusterNextResponse
  - Added Type Alias PrivateEndpointConnectionsListByClusterResponse
  - Added Type Alias PrivateEndpointConnectionsUpdateResponse
  - Added Type Alias PrivateLinkResourcesListByClusterNextResponse
  - Added Type Alias RedisEnterpriseListBySubscriptionNextResponse
  - Added Type Alias RedisEnterpriseListBySubscriptionResponse
  - Interface ClusterUpdate has a new optional parameter skuPropertiesSku
  - Interface ClusterUpdate has a new optional parameter tagsPropertiesTags
  - Interface OperationStatus has a new optional parameter properties
  - Interface PrivateEndpointConnectionListResult has a new optional parameter nextLink
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter updateIntervalInMs
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownClientProtocol
  - Added Enum KnownCreatedByType
  - Added Enum KnownKeyType
  - Enum KnownPrivateEndpointConnectionProvisioningState has a new value Canceled
  - Enum KnownProvisioningState has a new value Accepted
  - Enum KnownProvisioningState has a new value Provisioning
  - Enum KnownTlsVersion has a new value OnePointOne
  - Enum KnownTlsVersion has a new value OnePointTwo
  - Enum KnownTlsVersion has a new value OnePointZero

**Breaking Changes**

  - Removed operation Databases.beginExport
  - Removed operation Databases.beginExportAndWait
  - Removed operation Databases.beginImport
  - Removed operation Databases.beginImportAndWait
  - Removed operation PrivateEndpointConnections.beginPut
  - Removed operation PrivateEndpointConnections.beginPutAndWait
  - Removed operation PrivateEndpointConnections.delete
  - Removed operation PrivateEndpointConnections.list
  - Removed operation RedisEnterprise.list
  - Operation Databases.beginUpdate has a new signature
  - Operation Databases.beginUpdateAndWait has a new signature
  - Interface ClusterUpdate no longer has parameter hostName
  - Interface ClusterUpdate no longer has parameter minimumTlsVersion
  - Interface ClusterUpdate no longer has parameter privateEndpointConnections
  - Interface ClusterUpdate no longer has parameter provisioningState
  - Interface ClusterUpdate no longer has parameter redisVersion
  - Interface ClusterUpdate no longer has parameter resourceState
  - Interface OperationStatus no longer has parameter endTime
  - Interface OperationStatus no longer has parameter error
  - Interface OperationStatus no longer has parameter id
  - Interface OperationStatus no longer has parameter name
  - Interface OperationStatus no longer has parameter startTime
  - Interface OperationStatus no longer has parameter status
  - Parameter primaryKey of interface AccessKeys is now required
  - Parameter secondaryKey of interface AccessKeys is now required
  - Parameter value of interface PrivateEndpointConnectionListResult is now required
  - Parameter actionsRequired of interface PrivateLinkServiceConnectionState is now required
  - Parameter description of interface PrivateLinkServiceConnectionState is now required
  - Parameter status of interface PrivateLinkServiceConnectionState is now required
  - Parameter capacity of interface Sku is now required
  - Removed Enum KnownAofFrequency
  - Removed Enum KnownClusteringPolicy
  - Removed Enum KnownEvictionPolicy
  - Removed Enum KnownLinkState
  - Removed Enum KnownProtocol
  - Removed Enum KnownRdbFrequency
  - Enum KnownProvisioningState no longer has value Creating
  - Enum KnownTlsVersion no longer has value One0
  - Enum KnownTlsVersion no longer has value One1
  - Enum KnownTlsVersion no longer has value One2
    
    
## 2.1.0 (2022-04-11)
    
**Features**

  - Added operation Databases.beginForceUnlink
  - Added operation Databases.beginForceUnlinkAndWait
  - Added Interface DatabasePropertiesGeoReplication
  - Added Interface DatabasesForceUnlinkOptionalParams
  - Added Interface ForceUnlinkParameters
  - Added Interface LinkedDatabase
  - Added Type Alias LinkState
  - Interface DatabaseUpdate has a new optional parameter geoReplication
  - Type Alias Database has a new parameter geoReplication
  - Added Enum KnownLinkState
    
    
## 2.0.0 (2022-01-20)

The package of @azure/arm-redisenterprisecache is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
