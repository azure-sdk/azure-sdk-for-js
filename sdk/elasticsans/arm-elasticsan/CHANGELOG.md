# Release History
    
## 2.0.0-beta.1 (2024-05-29)
Compared with version 1.0.0
    
**Features**

  - Added Interface DeleteRetentionPolicy
  - Added Interface ElasticSanManagementRestoreVolumeHeaders
  - Added Interface RestoreVolumeOptionalParams
  - Added Type Alias Purge
  - Added Type Alias RestoreVolumeResponse
  - Added Type Alias XMsAccessSoftDeletedResources
  - Interface ElasticSan has a new optional parameter availabilityZones
  - Interface ElasticSan has a new optional parameter privateEndpointConnections
  - Interface ElasticSan has a new optional parameter provisioningState
  - Interface ElasticSan has a new optional parameter publicNetworkAccess
  - Interface ElasticSan has a new optional parameter totalIops
  - Interface ElasticSan has a new optional parameter totalMBps
  - Interface ElasticSan has a new optional parameter totalSizeTiB
  - Interface ElasticSan has a new optional parameter totalVolumeSizeGiB
  - Interface ElasticSan has a new optional parameter volumeGroupCount
  - Interface ElasticSanUpdate has a new optional parameter baseSizeTiB
  - Interface ElasticSanUpdate has a new optional parameter extendedCapacitySizeTiB
  - Interface ElasticSanUpdate has a new optional parameter publicNetworkAccess
  - Interface PrivateEndpointConnection has a new optional parameter groupIds
  - Interface PrivateEndpointConnection has a new optional parameter privateEndpoint
  - Interface PrivateEndpointConnection has a new optional parameter provisioningState
  - Interface PrivateLinkResource has a new optional parameter groupId
  - Interface PrivateLinkResource has a new optional parameter requiredMembers
  - Interface PrivateLinkResource has a new optional parameter requiredZoneNames
  - Interface Snapshot has a new optional parameter provisioningState
  - Interface Snapshot has a new optional parameter sourceVolumeSizeGiB
  - Interface Snapshot has a new optional parameter volumeName
  - Interface Volume has a new optional parameter creationData
  - Interface Volume has a new optional parameter managedBy
  - Interface Volume has a new optional parameter provisioningState
  - Interface Volume has a new optional parameter softDeleteEnabled
  - Interface Volume has a new optional parameter storageTarget
  - Interface Volume has a new optional parameter volumeId
  - Interface VolumeGroup has a new optional parameter deleteRetentionPolicy
  - Interface VolumeGroup has a new optional parameter encryption
  - Interface VolumeGroup has a new optional parameter encryptionProperties
  - Interface VolumeGroup has a new optional parameter networkAcls
  - Interface VolumeGroup has a new optional parameter privateEndpointConnections
  - Interface VolumeGroup has a new optional parameter protocolType
  - Interface VolumeGroup has a new optional parameter provisioningState
  - Interface VolumeGroupsDeleteOptionalParams has a new optional parameter purge
  - Interface VolumeGroupsGetOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupsListByElasticSanNextOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupsListByElasticSanOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeGroupUpdate has a new optional parameter deleteRetentionPolicy
  - Interface VolumeGroupUpdate has a new optional parameter encryption
  - Interface VolumeGroupUpdate has a new optional parameter encryptionProperties
  - Interface VolumeGroupUpdate has a new optional parameter networkAcls
  - Interface VolumeGroupUpdate has a new optional parameter protocolType
  - Interface VolumesDeleteOptionalParams has a new optional parameter purge
  - Interface VolumesGetOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumesListByVolumeGroupNextOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumesListByVolumeGroupOptionalParams has a new optional parameter xMsAccessSoftDeletedResources
  - Interface VolumeUpdate has a new optional parameter managedBy
  - Interface VolumeUpdate has a new optional parameter sizeGiB
  - Interface VolumeUpdate has a new optional parameter softDeleteEnabled
  - Added Enum KnownPurge
  - Added Enum KnownXMsAccessSoftDeletedResources

**Breaking Changes**

  - Interface ElasticSan no longer has parameter properties
  - Interface ElasticSanUpdate no longer has parameter properties
  - Interface PrivateEndpointConnection no longer has parameter properties
  - Interface PrivateLinkResource no longer has parameter properties
  - Interface Snapshot no longer has parameter properties
  - Interface Volume no longer has parameter properties
  - Interface VolumeGroup no longer has parameter properties
  - Interface VolumeGroupUpdate no longer has parameter properties
  - Interface VolumeUpdate no longer has parameter properties
  - Interface ElasticSan has a new required parameter baseSizeTiB
  - Interface ElasticSan has a new required parameter extendedCapacitySizeTiB
  - Interface ElasticSan has a new required parameter sku
  - Interface PrivateEndpointConnection has a new required parameter privateLinkServiceConnectionState
  - Interface Snapshot has a new required parameter creationData
  - Interface Volume has a new required parameter sizeGiB
    
    
## 1.0.0 (2024-01-19)

The package of @azure/arm-elasticsan is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
