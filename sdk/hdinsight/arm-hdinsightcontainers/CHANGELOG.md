# Release History
    
## 1.0.0-beta.2 (2024-01-29)
    
**Features**

  - Added operation group ClusterAvailableUpgrades
  - Added operation group ClusterPoolAvailableUpgrades
  - Added operation ClusterPools.beginUpgrade
  - Added operation ClusterPools.beginUpgradeAndWait
  - Added operation Clusters.beginUpgrade
  - Added operation Clusters.beginUpgradeAndWait
  - Added Interface ClusterAccessProfile
  - Added Interface ClusterAKSPatchVersionUpgradeProperties
  - Added Interface ClusterAvailableUpgrade
  - Added Interface ClusterAvailableUpgradeAksPatchUpgradeProperties
  - Added Interface ClusterAvailableUpgradeHotfixUpgradeProperties
  - Added Interface ClusterAvailableUpgradeList
  - Added Interface ClusterAvailableUpgradeProperties
  - Added Interface ClusterAvailableUpgradesListNextOptionalParams
  - Added Interface ClusterAvailableUpgradesListOptionalParams
  - Added Interface ClusterHotfixUpgradeProperties
  - Added Interface ClusterPoolAKSPatchVersionUpgradeProperties
  - Added Interface ClusterPoolAvailableUpgrade
  - Added Interface ClusterPoolAvailableUpgradeAksPatchUpgradeProperties
  - Added Interface ClusterPoolAvailableUpgradeList
  - Added Interface ClusterPoolAvailableUpgradeNodeOsUpgradeProperties
  - Added Interface ClusterPoolAvailableUpgradeProperties
  - Added Interface ClusterPoolAvailableUpgradesListNextOptionalParams
  - Added Interface ClusterPoolAvailableUpgradesListOptionalParams
  - Added Interface ClusterPoolNodeOsImageUpdateProperties
  - Added Interface ClusterPoolsUpgradeHeaders
  - Added Interface ClusterPoolsUpgradeOptionalParams
  - Added Interface ClusterPoolUpgrade
  - Added Interface ClusterPoolUpgradeProperties
  - Added Interface ClusterRangerPluginProfile
  - Added Interface ClustersUpgradeHeaders
  - Added Interface ClustersUpgradeOptionalParams
  - Added Interface ClusterUpgrade
  - Added Interface ClusterUpgradeProperties
  - Added Interface DiskStorageProfile
  - Added Interface FlinkJobProfile
  - Added Interface KafkaConnectivityEndpoints
  - Added Interface KafkaProfile
  - Added Interface RangerAdminSpec
  - Added Interface RangerAdminSpecDatabase
  - Added Interface RangerAuditSpec
  - Added Interface RangerProfile
  - Added Interface RangerUsersyncSpec
  - Added Type Alias ClusterAvailableUpgradePropertiesUnion
  - Added Type Alias ClusterAvailableUpgradesListNextResponse
  - Added Type Alias ClusterAvailableUpgradesListResponse
  - Added Type Alias ClusterAvailableUpgradeType
  - Added Type Alias ClusterPoolAvailableUpgradePropertiesUnion
  - Added Type Alias ClusterPoolAvailableUpgradesListNextResponse
  - Added Type Alias ClusterPoolAvailableUpgradesListResponse
  - Added Type Alias ClusterPoolAvailableUpgradeType
  - Added Type Alias ClusterPoolsDeleteResponse
  - Added Type Alias ClusterPoolsUpgradeResponse
  - Added Type Alias ClusterPoolUpgradePropertiesUnion
  - Added Type Alias ClusterPoolUpgradeType
  - Added Type Alias ClustersDeleteResponse
  - Added Type Alias ClustersUpgradeResponse
  - Added Type Alias ClusterUpgradePropertiesUnion
  - Added Type Alias ClusterUpgradeType
  - Added Type Alias CurrentClusterAksVersionStatus
  - Added Type Alias CurrentClusterPoolAksVersionStatus
  - Added Type Alias DataDiskType
  - Added Type Alias DbConnectionAuthenticationMode
  - Added Type Alias DeploymentMode
  - Added Type Alias MetastoreDbConnectionAuthenticationMode
  - Added Type Alias OutboundType
  - Added Type Alias RangerUsersyncMode
  - Added Type Alias Severity
  - Added Type Alias UpgradeMode
  - Interface ClusterJobsListOptionalParams has a new optional parameter filter
  - Interface ClusterPatch has a new optional parameter tags
  - Interface ClusterPoolNetworkProfile has a new optional parameter apiServerAuthorizedIpRanges
  - Interface ClusterPoolNetworkProfile has a new optional parameter enablePrivateApiServer
  - Interface ClusterPoolNetworkProfile has a new optional parameter outboundType
  - Interface ClusterProfile has a new optional parameter clusterAccessProfile
  - Interface ClusterProfile has a new optional parameter rangerPluginProfile
  - Interface ClusterProfile has a new optional parameter rangerProfile
  - Interface FlinkHiveCatalogOption has a new optional parameter metastoreDbConnectionAuthenticationMode
  - Interface FlinkJobProperties has a new optional parameter runId
  - Interface FlinkProfile has a new optional parameter deploymentMode
  - Interface FlinkProfile has a new optional parameter jobSpec
  - Interface HiveCatalogOption has a new optional parameter metastoreDbConnectionAuthenticationMode
  - Interface SparkMetastoreSpec has a new optional parameter dbConnectionAuthenticationMode
  - Interface SshConnectivityEndpoint has a new optional parameter privateSshEndpoint
  - Interface UpdatableClusterProfile has a new optional parameter rangerPluginProfile
  - Interface UpdatableClusterProfile has a new optional parameter rangerProfile
  - Interface WebConnectivityEndpoint has a new optional parameter privateFqdn
  - Added Enum KnownClusterAvailableUpgradeType
  - Added Enum KnownClusterPoolAvailableUpgradeType
  - Added Enum KnownClusterPoolUpgradeType
  - Added Enum KnownClusterUpgradeType
  - Added Enum KnownCurrentClusterAksVersionStatus
  - Added Enum KnownCurrentClusterPoolAksVersionStatus
  - Added Enum KnownDataDiskType
  - Added Enum KnownDbConnectionAuthenticationMode
  - Added Enum KnownDeploymentMode
  - Added Enum KnownMetastoreDbConnectionAuthenticationMode
  - Added Enum KnownOutboundType
  - Added Enum KnownRangerUsersyncMode
  - Added Enum KnownSeverity
  - Added Enum KnownUpgradeMode
  - Enum KnownAction has a new value LastStateUpdate
  - Enum KnownAction has a new value RELaunch

**Breaking Changes**

  - Type of parameter kafkaProfile of interface ClusterProfile is changed from {
        [propertyName: string]: any;
    } to KafkaProfile
    
    
## 1.0.0-beta.1 (2023-08-23)

The package of @azure/arm-hdinsightcontainers is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
