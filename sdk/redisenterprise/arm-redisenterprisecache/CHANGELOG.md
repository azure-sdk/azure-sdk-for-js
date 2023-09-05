# Release History
    
## 3.0.0 (2023-09-05)
    
**Features**

  - Added operation Databases.beginFlush
  - Added operation Databases.beginFlushAndWait
  - Added operation PrivateEndpointConnections.beginDelete
  - Added operation PrivateEndpointConnections.beginDeleteAndWait
  - Added Interface DatabasesFlushHeaders
  - Added Interface DatabasesFlushOptionalParams
  - Added Interface FlushParameters
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter updateIntervalInMs

**Breaking Changes**

  - Removed operation PrivateEndpointConnections.delete
    
    
## 2.2.0 (2022-12-07)
    
**Features**

  - Added Interface Cluster
  - Added Interface Database
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface TrackedResource
    
    
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
