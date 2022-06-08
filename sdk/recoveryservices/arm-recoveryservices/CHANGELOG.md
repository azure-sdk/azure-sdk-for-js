# Release History
    
## 5.1.0 (2022-06-08)
    
**Features**

  - Added Interface AzureMonitorAlertSettings
  - Added Interface ClassicAlertSettings
  - Added Interface MonitoringSettings
  - Added Interface VaultPropertiesRedundancySettings
  - Added Type Alias AlertsState
  - Added Type Alias BackupStorageVersion
  - Added Type Alias CrossRegionRestore
  - Added Type Alias StandardTierStorageRedundancy
  - Interface VaultProperties has a new optional parameter backupStorageVersion
  - Interface VaultProperties has a new optional parameter monitoringSettings
  - Interface VaultProperties has a new optional parameter redundancySettings
  - Type Alias ResourceCertificateAndAadDetails has a new parameter aadAudience
  - Added Enum KnownAlertsState
  - Added Enum KnownBackupStorageVersion
  - Added Enum KnownCrossRegionRestore
  - Added Enum KnownStandardTierStorageRedundancy
    
## 5.0.1 (2022-04-29)

**Features**

  - Bug fix

## 5.0.0 (2021-12-10)

The package of @azure/arm-recoveryservices is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
