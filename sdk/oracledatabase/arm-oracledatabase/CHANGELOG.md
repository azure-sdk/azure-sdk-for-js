# Release History
    
## 2.0.0 (2024-11-19)
    
### Features Added

  - Added operation AutonomousDatabaseBackupsOperations.createOrUpdate
  - Added operation AutonomousDatabaseBackupsOperations.delete
  - Added operation AutonomousDatabaseBackupsOperations.update
  - Added operation AutonomousDatabasesOperations.createOrUpdate
  - Added operation AutonomousDatabasesOperations.delete
  - Added operation AutonomousDatabasesOperations.failover
  - Added operation AutonomousDatabasesOperations.restore
  - Added operation AutonomousDatabasesOperations.shrink
  - Added operation AutonomousDatabasesOperations.switchover
  - Added operation AutonomousDatabasesOperations.update
  - Added operation CloudExadataInfrastructuresOperations.addStorageCapacity
  - Added operation CloudExadataInfrastructuresOperations.createOrUpdate
  - Added operation CloudExadataInfrastructuresOperations.delete
  - Added operation CloudExadataInfrastructuresOperations.update
  - Added operation CloudVmClustersOperations.addVms
  - Added operation CloudVmClustersOperations.createOrUpdate
  - Added operation CloudVmClustersOperations.delete
  - Added operation CloudVmClustersOperations.removeVms
  - Added operation CloudVmClustersOperations.update
  - Added operation DbNodesOperations.action
  - Added operation OracleSubscriptionsOperations.addAzureSubscriptions
  - Added operation OracleSubscriptionsOperations.createOrUpdate
  - Added operation OracleSubscriptionsOperations.delete
  - Added operation OracleSubscriptionsOperations.listActivationLinks
  - Added operation OracleSubscriptionsOperations.listCloudAccountDetails
  - Added operation OracleSubscriptionsOperations.listSaasSubscriptionDetails
  - Added operation OracleSubscriptionsOperations.update
  - Added operation VirtualNetworkAddressesOperations.createOrUpdate
  - Added operation VirtualNetworkAddressesOperations.delete
  - Added Interface AzureSubscriptions
  - Added Interface DatabaseClientOptionalParams
  - Added Interface OracleSubscriptionsAddAzureSubscriptionsOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Class DatabaseClient
  - Added Type Alias AddSubscriptionOperationState
  - Added Type Alias ContinuablePage
  - Interface OracleSubscriptionProperties has a new optional parameter addSubscriptionOperationState
  - Interface OracleSubscriptionProperties has a new optional parameter azureSubscriptionIds
  - Interface OracleSubscriptionProperties has a new optional parameter lastOperationStatusDetail
  - Added Enum KnownAddSubscriptionOperationState
  - Added Enum KnownVersions
  - Enum KnownComputeModel has a new value ECPU
  - Enum KnownComputeModel has a new value OCPU
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownProtocolType has a new value TCPS
  - Enum KnownWorkloadType has a new value APEX
  - Enum KnownWorkloadType has a new value OLTP
  - Added function restorePoller

### Breaking Changes

  - Removed operation AutonomousDatabaseBackups.beginCreateOrUpdate
  - Removed operation AutonomousDatabaseBackups.beginCreateOrUpdateAndWait
  - Removed operation AutonomousDatabaseBackups.beginDelete
  - Removed operation AutonomousDatabaseBackups.beginDeleteAndWait
  - Removed operation AutonomousDatabaseBackups.beginUpdate
  - Removed operation AutonomousDatabaseBackups.beginUpdateAndWait
  - Removed operation AutonomousDatabases.beginCreateOrUpdate
  - Removed operation AutonomousDatabases.beginCreateOrUpdateAndWait
  - Removed operation AutonomousDatabases.beginDelete
  - Removed operation AutonomousDatabases.beginDeleteAndWait
  - Removed operation AutonomousDatabases.beginFailover
  - Removed operation AutonomousDatabases.beginFailoverAndWait
  - Removed operation AutonomousDatabases.beginRestore
  - Removed operation AutonomousDatabases.beginRestoreAndWait
  - Removed operation AutonomousDatabases.beginShrink
  - Removed operation AutonomousDatabases.beginShrinkAndWait
  - Removed operation AutonomousDatabases.beginSwitchover
  - Removed operation AutonomousDatabases.beginSwitchoverAndWait
  - Removed operation AutonomousDatabases.beginUpdate
  - Removed operation AutonomousDatabases.beginUpdateAndWait
  - Removed operation CloudExadataInfrastructures.beginAddStorageCapacity
  - Removed operation CloudExadataInfrastructures.beginAddStorageCapacityAndWait
  - Removed operation CloudExadataInfrastructures.beginCreateOrUpdate
  - Removed operation CloudExadataInfrastructures.beginCreateOrUpdateAndWait
  - Removed operation CloudExadataInfrastructures.beginDelete
  - Removed operation CloudExadataInfrastructures.beginDeleteAndWait
  - Removed operation CloudExadataInfrastructures.beginUpdate
  - Removed operation CloudExadataInfrastructures.beginUpdateAndWait
  - Removed operation CloudVmClusters.beginAddVms
  - Removed operation CloudVmClusters.beginAddVmsAndWait
  - Removed operation CloudVmClusters.beginCreateOrUpdate
  - Removed operation CloudVmClusters.beginCreateOrUpdateAndWait
  - Removed operation CloudVmClusters.beginDelete
  - Removed operation CloudVmClusters.beginDeleteAndWait
  - Removed operation CloudVmClusters.beginRemoveVms
  - Removed operation CloudVmClusters.beginRemoveVmsAndWait
  - Removed operation CloudVmClusters.beginUpdate
  - Removed operation CloudVmClusters.beginUpdateAndWait
  - Removed operation DbNodes.beginAction
  - Removed operation DbNodes.beginActionAndWait
  - Removed operation OracleSubscriptions.beginCreateOrUpdate
  - Removed operation OracleSubscriptions.beginCreateOrUpdateAndWait
  - Removed operation OracleSubscriptions.beginDelete
  - Removed operation OracleSubscriptions.beginDeleteAndWait
  - Removed operation OracleSubscriptions.beginListActivationLinks
  - Removed operation OracleSubscriptions.beginListActivationLinksAndWait
  - Removed operation OracleSubscriptions.beginListCloudAccountDetails
  - Removed operation OracleSubscriptions.beginListCloudAccountDetailsAndWait
  - Removed operation OracleSubscriptions.beginListSaasSubscriptionDetails
  - Removed operation OracleSubscriptions.beginListSaasSubscriptionDetailsAndWait
  - Removed operation OracleSubscriptions.beginUpdate
  - Removed operation OracleSubscriptions.beginUpdateAndWait
  - Removed operation VirtualNetworkAddresses.beginCreateOrUpdate
  - Removed operation VirtualNetworkAddresses.beginCreateOrUpdateAndWait
  - Removed operation VirtualNetworkAddresses.beginDelete
  - Removed operation VirtualNetworkAddresses.beginDeleteAndWait
  - Deleted Class OracleDatabaseManagementClient
  - Interface AutonomousDatabaseBackupsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabaseBackupsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabaseBackupsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabasesCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabasesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabasesFailoverOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabasesRestoreOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabasesShrinkOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabasesSwitchoverOptionalParams no longer has parameter resumeFrom
  - Interface AutonomousDatabasesUpdateOptionalParams no longer has parameter resumeFrom
  - Interface CloudExadataInfrastructuresAddStorageCapacityOptionalParams no longer has parameter resumeFrom
  - Interface CloudExadataInfrastructuresCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface CloudExadataInfrastructuresDeleteOptionalParams no longer has parameter resumeFrom
  - Interface CloudExadataInfrastructuresUpdateOptionalParams no longer has parameter resumeFrom
  - Interface CloudVmClustersAddVmsOptionalParams no longer has parameter resumeFrom
  - Interface CloudVmClustersCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface CloudVmClustersDeleteOptionalParams no longer has parameter resumeFrom
  - Interface CloudVmClustersRemoveVmsOptionalParams no longer has parameter resumeFrom
  - Interface CloudVmClustersUpdateOptionalParams no longer has parameter resumeFrom
  - Interface DbNodesActionOptionalParams no longer has parameter resumeFrom
  - Interface OracleSubscriptionsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface OracleSubscriptionsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface OracleSubscriptionsListActivationLinksOptionalParams no longer has parameter resumeFrom
  - Interface OracleSubscriptionsListCloudAccountDetailsOptionalParams no longer has parameter resumeFrom
  - Interface OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams no longer has parameter resumeFrom
  - Interface OracleSubscriptionsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualNetworkAddressesCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualNetworkAddressesDeleteOptionalParams no longer has parameter resumeFrom
  - Parameter lifecycleState of interface DbNodeProperties is now required
  - Parameter timeCreated of interface DbNodeProperties is now required
  - Parameter vnicId of interface DbNodeProperties is now required
  - Parameter displayName of interface DnsPrivateViewProperties is now required
  - Parameter lifecycleState of interface DnsPrivateViewProperties is now required
  - Parameter lifecycleState of interface DnsPrivateZoneProperties is now required
  - Type of parameter dataBaseType of interface AutonomousDatabaseBaseProperties is changed from "Clone" | "Regular" to DataBaseType
  - Type of parameter tags of interface AutonomousDatabaseUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter scheduledOperations of interface AutonomousDatabaseUpdateProperties is changed from ScheduledOperationsTypeUpdate to ScheduledOperationsType
  - Type of parameter tags of interface CloudExadataInfrastructureUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface CloudVmClusterUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Removed Enum KnownUpdateAction
  - Removed Enum KnownValidationStatus
  - Enum KnownComputeModel no longer has value Ecpu
  - Enum KnownComputeModel no longer has value Ocpu
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownProtocolType no longer has value Tcps
  - Enum KnownWorkloadType no longer has value Apex
  - Enum KnownWorkloadType no longer has value Oltp
  - Removed function getContinuationToken
    
    
## 1.0.0 (2024-06-25)

### Features Added

The package of @azure/arm-oracledatabase is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
