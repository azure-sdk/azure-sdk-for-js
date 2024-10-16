# Release History
    
## 2.0.0-beta.1 (2024-10-16)
Compared with version 1.0.0
    
### Features Added

  - Added operation AutonomousDatabases.beginChangeDisasterRecoveryConfiguration
  - Added operation AutonomousDatabases.beginChangeDisasterRecoveryConfigurationAndWait
  - Added operation OracleSubscriptions.beginAddAzureSubscriptions
  - Added operation OracleSubscriptions.beginAddAzureSubscriptionsAndWait
  - Added Interface AutonomousDatabaseCrossRegionDisasterRecoveryProperties
  - Added Interface AutonomousDatabaseFromBackupTimestampProperties
  - Added Interface AutonomousDatabasesChangeDisasterRecoveryConfigurationHeaders
  - Added Interface AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams
  - Added Interface AzureSubscriptions
  - Added Interface DisasterRecoveryConfigurationDetails
  - Added Interface OracleSubscriptionsAddAzureSubscriptionsHeaders
  - Added Interface OracleSubscriptionsAddAzureSubscriptionsOptionalParams
  - Added Type Alias AddSubscriptionOperationState
  - Added Type Alias AutonomousDatabasesChangeDisasterRecoveryConfigurationResponse
  - Added Type Alias OracleSubscriptionsAddAzureSubscriptionsResponse
  - Interface AutonomousDatabaseBaseProperties has a new optional parameter remoteDisasterRecoveryConfiguration
  - Interface AutonomousDatabaseBaseProperties has a new optional parameter timeDisasterRecoveryRoleChanged
  - Interface OracleSubscriptionProperties has a new optional parameter addSubscriptionOperationState
  - Interface OracleSubscriptionProperties has a new optional parameter azureSubscriptionIds
  - Interface OracleSubscriptionProperties has a new optional parameter lastOperationStatusDetail
  - Interface PeerDbDetails has a new optional parameter peerDbLocation
  - Interface PeerDbDetails has a new optional parameter peerDbOcid
  - Type of parameter dataBaseType of interface AutonomousDatabaseBaseProperties is changed from "Clone" | "Regular" to "Clone" | "CrossRegionDisasterRecovery" | "CloneFromBackupTimestamp" | "Regular"
  - Added Enum KnownAddSubscriptionOperationState
  - Enum KnownDataBaseType has a new value CloneFromBackupTimestamp
  - Enum KnownDataBaseType has a new value CrossRegionDisasterRecovery

### Breaking Changes

  - Parameter lifecycleState of interface DbNodeProperties is now required
  - Parameter timeCreated of interface DbNodeProperties is now required
  - Parameter vnicId of interface DbNodeProperties is now required
  - Parameter displayName of interface DnsPrivateViewProperties is now required
  - Parameter lifecycleState of interface DnsPrivateViewProperties is now required
  - Parameter lifecycleState of interface DnsPrivateZoneProperties is now required
    
    
## 1.0.0 (2024-06-25)

### Features Added

The package of @azure/arm-oracledatabase is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
