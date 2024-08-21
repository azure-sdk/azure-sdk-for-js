# Release History
    
## 4.0.0-beta.1 (2024-08-21)
Compared with version 3.0.0
    
### Features Added

  - Added operation group AccessPolicyAssignmentOperations
  - Added operation group AccessPolicyAssignments
  - Added operation Databases.beginForceLinkToReplicationGroup
  - Added operation Databases.beginForceLinkToReplicationGroupAndWait
  - Added operation Databases.beginUpgradeDBRedisVersion
  - Added operation Databases.beginUpgradeDBRedisVersionAndWait
  - Added operation RedisEnterprise.checkNameAvailability
  - Added Interface AccessPolicyAssignment
  - Added Interface AccessPolicyAssignmentCreateOptionalParams
  - Added Interface AccessPolicyAssignmentDeleteHeaders
  - Added Interface AccessPolicyAssignmentDeleteOptionalParams
  - Added Interface AccessPolicyAssignmentGetOptionalParams
  - Added Interface AccessPolicyAssignmentList
  - Added Interface AccessPolicyAssignmentPropertiesUser
  - Added Interface AccessPolicyAssignmentsListNextOptionalParams
  - Added Interface AccessPolicyAssignmentsListOptionalParams
  - Added Interface CheckNameAvailabilityParameters
  - Added Interface DatabasesDeleteHeaders
  - Added Interface DatabasesExportHeaders
  - Added Interface DatabasesForceLinkToReplicationGroupHeaders
  - Added Interface DatabasesForceLinkToReplicationGroupOptionalParams
  - Added Interface DatabasesForceUnlinkHeaders
  - Added Interface DatabasesImportHeaders
  - Added Interface DatabasesRegenerateKeyHeaders
  - Added Interface DatabasesUpdateHeaders
  - Added Interface DatabasesUpgradeDBRedisVersionHeaders
  - Added Interface DatabasesUpgradeDBRedisVersionOptionalParams
  - Added Interface ForceLinkParameters
  - Added Interface OperationStatusResult
  - Added Interface RedisEnterpriseCheckNameAvailabilityOptionalParams
  - Added Interface RedisEnterpriseDeleteHeaders
  - Added Interface RedisEnterpriseUpdateHeaders
  - Added Interface SystemData
  - Added Type Alias AccessKeysAuthentication
  - Added Type Alias AccessPolicyAssignmentCreateResponse
  - Added Type Alias AccessPolicyAssignmentGetResponse
  - Added Type Alias AccessPolicyAssignmentsListNextResponse
  - Added Type Alias AccessPolicyAssignmentsListResponse
  - Added Type Alias CreatedByType
  - Added Type Alias DatabasesForceLinkToReplicationGroupResponse
  - Added Type Alias DatabasesUpgradeDBRedisVersionResponse
  - Added Type Alias DeferUpgradeSetting
  - Added Type Alias HighAvailability
  - Added Type Alias RedundancyMode
  - Interface Cluster has a new optional parameter highAvailability
  - Interface Cluster has a new optional parameter redundancyMode
  - Interface ClusterUpdate has a new optional parameter highAvailability
  - Interface ClusterUpdate has a new optional parameter redundancyMode
  - Interface Database has a new optional parameter accessKeysAuthentication
  - Interface Database has a new optional parameter deferUpgrade
  - Interface Database has a new optional parameter redisVersion
  - Interface DatabaseUpdate has a new optional parameter accessKeysAuthentication
  - Interface DatabaseUpdate has a new optional parameter deferUpgrade
  - Interface DatabaseUpdate has a new optional parameter redisVersion
  - Interface PrivateEndpointConnection has a new optional parameter groupIds
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownAccessKeysAuthentication
  - Added Enum KnownCreatedByType
  - Added Enum KnownDeferUpgradeSetting
  - Added Enum KnownHighAvailability
  - Added Enum KnownRedundancyMode
  - Enum KnownSkuName has a new value AutoTieringT1000
  - Enum KnownSkuName has a new value AutoTieringT1500
  - Enum KnownSkuName has a new value AutoTieringT2000
  - Enum KnownSkuName has a new value AutoTieringT250
  - Enum KnownSkuName has a new value AutoTieringT4500
  - Enum KnownSkuName has a new value AutoTieringT500
  - Enum KnownSkuName has a new value AutoTieringT700
  - Enum KnownSkuName has a new value ComputeOptimizedX1
  - Enum KnownSkuName has a new value ComputeOptimizedX10
  - Enum KnownSkuName has a new value ComputeOptimizedX100
  - Enum KnownSkuName has a new value ComputeOptimizedX150
  - Enum KnownSkuName has a new value ComputeOptimizedX20
  - Enum KnownSkuName has a new value ComputeOptimizedX250
  - Enum KnownSkuName has a new value ComputeOptimizedX3
  - Enum KnownSkuName has a new value ComputeOptimizedX350
  - Enum KnownSkuName has a new value ComputeOptimizedX5
  - Enum KnownSkuName has a new value ComputeOptimizedX50
  - Enum KnownSkuName has a new value ComputeOptimizedX500
  - Enum KnownSkuName has a new value ComputeOptimizedX700
  - Enum KnownSkuName has a new value EnterpriseE1
  - Enum KnownSkuName has a new value EnterpriseE200
  - Enum KnownSkuName has a new value EnterpriseE400
  - Enum KnownSkuName has a new value EnterpriseE5
  - Enum KnownSkuName has a new value GeneralPurposeG0
  - Enum KnownSkuName has a new value GeneralPurposeG1
  - Enum KnownSkuName has a new value GeneralPurposeG10
  - Enum KnownSkuName has a new value GeneralPurposeG100
  - Enum KnownSkuName has a new value GeneralPurposeG1000
  - Enum KnownSkuName has a new value GeneralPurposeG150
  - Enum KnownSkuName has a new value GeneralPurposeG20
  - Enum KnownSkuName has a new value GeneralPurposeG250
  - Enum KnownSkuName has a new value GeneralPurposeG3
  - Enum KnownSkuName has a new value GeneralPurposeG350
  - Enum KnownSkuName has a new value GeneralPurposeG5
  - Enum KnownSkuName has a new value GeneralPurposeG50
  - Enum KnownSkuName has a new value GeneralPurposeG500
  - Enum KnownSkuName has a new value GeneralPurposeG700
  - Enum KnownSkuName has a new value MemoryOptimizedM10
  - Enum KnownSkuName has a new value MemoryOptimizedM100
  - Enum KnownSkuName has a new value MemoryOptimizedM1000
  - Enum KnownSkuName has a new value MemoryOptimizedM150
  - Enum KnownSkuName has a new value MemoryOptimizedM1500
  - Enum KnownSkuName has a new value MemoryOptimizedM20
  - Enum KnownSkuName has a new value MemoryOptimizedM2000
  - Enum KnownSkuName has a new value MemoryOptimizedM250
  - Enum KnownSkuName has a new value MemoryOptimizedM350
  - Enum KnownSkuName has a new value MemoryOptimizedM50
  - Enum KnownSkuName has a new value MemoryOptimizedM500
  - Enum KnownSkuName has a new value MemoryOptimizedM700

### Breaking Changes

  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from {
        [propertyName: string]: UserAssignedIdentity;
    } to {
        [propertyName: string]: UserAssignedIdentity | null;
    }
    
    
## 3.0.0 (2024-01-31)
    
### Features Added

  - Added operation Databases.beginFlush
  - Added operation Databases.beginFlushAndWait
  - Added operation PrivateEndpointConnections.beginDelete
  - Added operation PrivateEndpointConnections.beginDeleteAndWait
  - Added Interface ClusterPropertiesEncryption
  - Added Interface ClusterPropertiesEncryptionCustomerManagedKeyEncryption
  - Added Interface ClusterPropertiesEncryptionCustomerManagedKeyEncryptionKeyIdentity
  - Added Interface DatabasesFlushHeaders
  - Added Interface DatabasesFlushOptionalParams
  - Added Interface FlushParameters
  - Added Interface ManagedServiceIdentity
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Added Interface UserAssignedIdentity
  - Added Type Alias CmkIdentityType
  - Added Type Alias ManagedServiceIdentityType
  - Interface Cluster has a new optional parameter encryption
  - Interface Cluster has a new optional parameter identity
  - Interface ClusterUpdate has a new optional parameter encryption
  - Interface ClusterUpdate has a new optional parameter identity
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter updateIntervalInMs
  - Added Enum KnownCmkIdentityType
  - Added Enum KnownManagedServiceIdentityType
  - Enum KnownResourceState has a new value Scaling
  - Enum KnownResourceState has a new value ScalingFailed

### Breaking Changes

  - Removed operation PrivateEndpointConnections.delete
    
    
## 2.2.0 (2022-12-07)
    
### Features Added

  - Added Interface Cluster
  - Added Interface Database
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface TrackedResource
    
    
## 2.1.0 (2022-04-11)
    
### Features Added

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

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
