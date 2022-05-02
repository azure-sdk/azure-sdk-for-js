# Release History
    
## 16.0.0-beta.3 (2022-05-02)
    
**Features**

  - Added operation group GraphResources
  - Added operation group Service
  - Added operation CassandraClusters.beginFetchNodeStatus
  - Added operation CassandraClusters.beginFetchNodeStatusAndWait
  - Added operation CassandraClusters.beginRequestRepair
  - Added operation CassandraClusters.beginRequestRepairAndWait
  - Added operation CassandraClusters.getBackup
  - Added operation CassandraClusters.listBackups
  - Added operation CassandraResources.beginCreateUpdateCassandraView
  - Added operation CassandraResources.beginCreateUpdateCassandraViewAndWait
  - Added operation CassandraResources.beginDeleteCassandraView
  - Added operation CassandraResources.beginDeleteCassandraViewAndWait
  - Added operation CassandraResources.beginMigrateCassandraViewToAutoscale
  - Added operation CassandraResources.beginMigrateCassandraViewToAutoscaleAndWait
  - Added operation CassandraResources.beginMigrateCassandraViewToManualThroughput
  - Added operation CassandraResources.beginMigrateCassandraViewToManualThroughputAndWait
  - Added operation CassandraResources.beginUpdateCassandraViewThroughput
  - Added operation CassandraResources.beginUpdateCassandraViewThroughputAndWait
  - Added operation CassandraResources.getCassandraView
  - Added operation CassandraResources.getCassandraViewThroughput
  - Added operation CassandraResources.listCassandraViews
  - Added Interface BackupResourceProperties
  - Added Interface CassandraClustersFetchNodeStatusOptionalParams
  - Added Interface CassandraClustersGetBackupOptionalParams
  - Added Interface CassandraClustersListBackupsOptionalParams
  - Added Interface CassandraClustersRequestRepairOptionalParams
  - Added Interface CassandraResourcesCreateUpdateCassandraViewOptionalParams
  - Added Interface CassandraResourcesDeleteCassandraViewOptionalParams
  - Added Interface CassandraResourcesGetCassandraViewOptionalParams
  - Added Interface CassandraResourcesGetCassandraViewThroughputOptionalParams
  - Added Interface CassandraResourcesListCassandraViewsOptionalParams
  - Added Interface CassandraResourcesMigrateCassandraViewToAutoscaleOptionalParams
  - Added Interface CassandraResourcesMigrateCassandraViewToManualThroughputOptionalParams
  - Added Interface CassandraResourcesUpdateCassandraViewThroughputOptionalParams
  - Added Interface CassandraViewListResult
  - Added Interface CassandraViewResource
  - Added Interface ClusterNodeStatus
  - Added Interface ClusterNodeStatusNodesItem
  - Added Interface DataTransferServiceResource
  - Added Interface DiagnosticLogSettings
  - Added Interface GraphAPIComputeServiceResource
  - Added Interface GraphResource
  - Added Interface GraphResourcesCreateUpdateGraphOptionalParams
  - Added Interface GraphResourcesDeleteGraphResourceOptionalParams
  - Added Interface GraphResourcesGetGraphOptionalParams
  - Added Interface GraphResourcesListGraphsOptionalParams
  - Added Interface GraphResourcesListResult
  - Added Interface ListBackups
  - Added Interface LocationGetOptionalParams
  - Added Interface LocationListOptionalParams
  - Added Interface RegionalServiceResource
  - Added Interface RepairPostBody
  - Added Interface ServiceCreateOptionalParams
  - Added Interface ServiceDeleteOptionalParams
  - Added Interface ServiceGetOptionalParams
  - Added Interface ServiceListOptionalParams
  - Added Interface ServiceResourceCreateUpdateParameters
  - Added Interface ServiceResourceListResult
  - Added Interface ServiceResourceProperties
  - Added Interface SqlDedicatedGatewayServiceResource
  - Added Type Alias BackupResource
  - Added Type Alias CassandraClustersFetchNodeStatusResponse
  - Added Type Alias CassandraClustersGetBackupResponse
  - Added Type Alias CassandraClustersListBackupsResponse
  - Added Type Alias CassandraResourcesCreateUpdateCassandraViewResponse
  - Added Type Alias CassandraResourcesGetCassandraViewResponse
  - Added Type Alias CassandraResourcesGetCassandraViewThroughputResponse
  - Added Type Alias CassandraResourcesListCassandraViewsResponse
  - Added Type Alias CassandraResourcesMigrateCassandraViewToAutoscaleResponse
  - Added Type Alias CassandraResourcesMigrateCassandraViewToManualThroughputResponse
  - Added Type Alias CassandraResourcesUpdateCassandraViewThroughputResponse
  - Added Type Alias CassandraViewCreateUpdateParameters
  - Added Type Alias CassandraViewGetPropertiesOptions
  - Added Type Alias CassandraViewGetPropertiesResource
  - Added Type Alias CassandraViewGetResults
  - Added Type Alias DataTransferRegionalServiceResource
  - Added Type Alias DataTransferServiceResourceProperties
  - Added Type Alias EnableFullTextQuery
  - Added Type Alias GraphAPIComputeRegionalServiceResource
  - Added Type Alias GraphAPIComputeServiceResourceProperties
  - Added Type Alias GraphResourceCreateUpdateParameters
  - Added Type Alias GraphResourceGetPropertiesOptions
  - Added Type Alias GraphResourceGetPropertiesResource
  - Added Type Alias GraphResourceGetResults
  - Added Type Alias GraphResourcesCreateUpdateGraphResponse
  - Added Type Alias GraphResourcesGetGraphResponse
  - Added Type Alias GraphResourcesListGraphsResponse
  - Added Type Alias LocationGetResponse
  - Added Type Alias LocationListResponse
  - Added Type Alias ServiceCreateResponse
  - Added Type Alias ServiceGetResponse
  - Added Type Alias ServiceListResponse
  - Added Type Alias ServiceResource
  - Added Type Alias ServiceResourcePropertiesUnion
  - Added Type Alias ServiceSize
  - Added Type Alias ServiceStatus
  - Added Type Alias ServiceType
  - Added Type Alias SqlDedicatedGatewayRegionalServiceResource
  - Added Type Alias SqlDedicatedGatewayServiceResourceProperties
  - Interface ARMResourceProperties has a new optional parameter identity
  - Interface DatabaseAccountUpdateParameters has a new optional parameter diagnosticLogSettings
  - Interface LocationProperties has a new optional parameter status
  - Class CosmosDBManagementClient has a new parameter graphResources
  - Class CosmosDBManagementClient has a new parameter service
  - Add parameters of ARMResourceProperties to TypeAlias ClusterResource
  - Type Alias DatabaseAccountCreateUpdateParameters has a new parameter diagnosticLogSettings
  - Type Alias DatabaseAccountGetResults has a new parameter diagnosticLogSettings
  - Added Enum KnownServiceSize
  - Added Enum KnownServiceStatus
  - Added Enum KnownServiceType

**Breaking Changes**

  - Removed operation group Locations
  - Removed operation CassandraClusters.beginDeallocate
  - Removed operation CassandraClusters.beginDeallocateAndWait
  - Removed operation CassandraClusters.beginInvokeCommand
  - Removed operation CassandraClusters.beginInvokeCommandAndWait
  - Removed operation CassandraClusters.beginStart
  - Removed operation CassandraClusters.beginStartAndWait
  - Removed operation CassandraClusters.status
  - Removed operation MongoDBResources.beginRetrieveContinuousBackupInformation
  - Removed operation MongoDBResources.beginRetrieveContinuousBackupInformationAndWait
  - Interface ClusterResourceProperties no longer has parameter cassandraAuditLoggingEnabled
  - Interface ClusterResourceProperties no longer has parameter deallocated
  - Interface DatabaseAccountUpdateParameters no longer has parameter capacity
  - Interface DataCenterResourceProperties no longer has parameter availabilityZone
  - Interface DataCenterResourceProperties no longer has parameter backupStorageCustomerKeyUri
  - Interface DataCenterResourceProperties no longer has parameter diskCapacity
  - Interface DataCenterResourceProperties no longer has parameter diskSku
  - Interface DataCenterResourceProperties no longer has parameter managedDiskCustomerKeyUri
  - Interface DataCenterResourceProperties no longer has parameter sku
  - Class CosmosDBManagementClient no longer has parameter locations
  - Delete parameters of ManagedCassandraARMResourceProperties in TypeAlias ClusterResource
  - Type Alias DatabaseAccountCreateUpdateParameters no longer has parameter capacity
  - Type Alias DatabaseAccountGetResults no longer has parameter capacity
  - Parameter createMode of Type Alias DatabaseAccountCreateUpdateParameters is now required
  - Removed Enum KnownConnectionState
  - Removed Enum KnownManagedCassandraResourceIdentityType
    
    
## 15.0.0 (2021-12-09)

The package of @azure/arm-cosmosdb is using our next generation design principles since version 15.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
