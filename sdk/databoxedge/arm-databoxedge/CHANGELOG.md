# Release History
    
## 3.0.0 (2023-07-19)
    
**Features**

  - Added operation group DeviceCapacityCheck
  - Added operation group DeviceCapacityInfoOperations
  - Added Interface AddonsDeleteHeaders
  - Added Interface BandwidthSchedulesDeleteHeaders
  - Added Interface ClusterCapacityViewData
  - Added Interface ClusterGpuCapacity
  - Added Interface ClusterMemoryCapacity
  - Added Interface ClusterStorageViewData
  - Added Interface ContainersDeleteHeaders
  - Added Interface ContainersRefreshHeaders
  - Added Interface DeviceCapacityCheckCheckResourceCreationFeasibilityHeaders
  - Added Interface DeviceCapacityCheckCheckResourceCreationFeasibilityOptionalParams
  - Added Interface DeviceCapacityInfo
  - Added Interface DeviceCapacityInfoGetDeviceCapacityInfoOptionalParams
  - Added Interface DeviceCapacityRequestInfo
  - Added Interface DevicesCreateOrUpdateSecuritySettingsHeaders
  - Added Interface DevicesDeleteHeaders
  - Added Interface DevicesDownloadUpdatesHeaders
  - Added Interface DevicesInstallUpdatesHeaders
  - Added Interface DevicesScanForUpdatesHeaders
  - Added Interface HostCapacity
  - Added Interface MonitoringConfigDeleteHeaders
  - Added Interface NumaNodeData
  - Added Interface OrdersDeleteHeaders
  - Added Interface RolesDeleteHeaders
  - Added Interface SharesDeleteHeaders
  - Added Interface SharesRefreshHeaders
  - Added Interface StorageAccountCredentialsDeleteHeaders
  - Added Interface StorageAccountsDeleteHeaders
  - Added Interface SupportPackagesTriggerSupportPackageHeaders
  - Added Interface TriggersDeleteHeaders
  - Added Interface UsersDeleteHeaders
  - Added Interface VmMemory
  - Added Interface VmPlacementRequestResult
  - Added Type Alias ClusterWitnessType
  - Added Type Alias ContainersDeleteResponse
  - Added Type Alias DeviceCapacityInfoGetDeviceCapacityInfoResponse
  - Added Type Alias DevicesCreateOrUpdateSecuritySettingsResponse
  - Added Type Alias StorageAccountsDeleteResponse
  - Interface DataBoxEdgeDevice has a new optional parameter kubernetesWorkloadProfile
  - Interface DataBoxEdgeDeviceExtendedInfo has a new optional parameter cloudWitnessContainerName
  - Interface DataBoxEdgeDeviceExtendedInfo has a new optional parameter cloudWitnessStorageAccountName
  - Interface DataBoxEdgeDeviceExtendedInfo has a new optional parameter cloudWitnessStorageEndpoint
  - Interface DataBoxEdgeDeviceExtendedInfo has a new optional parameter clusterWitnessType
  - Interface DataBoxEdgeDeviceExtendedInfo has a new optional parameter fileShareWitnessLocation
  - Interface DataBoxEdgeDeviceExtendedInfo has a new optional parameter fileShareWitnessUsername
  - Interface DataBoxEdgeDeviceExtendedInfo has a new optional parameter systemData
  - Interface Order has a new optional parameter kind
  - Interface Order has a new optional parameter orderId
  - Added Enum KnownClusterWitnessType
  - Enum KnownSkuName has a new value EdgeMRTCP
  - Enum KnownSkuName has a new value EP2128GPU1Mx1W
  - Enum KnownSkuName has a new value EP2256GPU2Mx1
  - Enum KnownSkuName has a new value EP264Mx1W

**Breaking Changes**

  - Interface DevicesListByResourceGroupNextOptionalParams no longer has parameter expand
  - Interface DevicesListBySubscriptionNextOptionalParams no longer has parameter expand
  - Interface TriggersListByDataBoxEdgeDeviceNextOptionalParams no longer has parameter filter
  - Interface UsersListByDataBoxEdgeDeviceNextOptionalParams no longer has parameter filter
    
    
## 2.1.0 (2022-11-21)
    
**Features**

  - Added Interface Addon
  - Added Interface Alert
  - Added Interface ArcAddon
  - Added Interface BandwidthSchedule
  - Added Interface CloudEdgeManagementRole
  - Added Interface Container
  - Added Interface DataBoxEdgeDevice
  - Added Interface DataBoxEdgeDeviceExtendedInfo
  - Added Interface DiagnosticProactiveLogCollectionSettings
  - Added Interface DiagnosticRemoteSupportSettings
  - Added Interface FileEventTrigger
  - Added Interface IoTAddon
  - Added Interface IoTRole
  - Added Interface KubernetesRole
  - Added Interface MECRole
  - Added Interface MonitoringMetricConfiguration
  - Added Interface NetworkSettings
  - Added Interface Node_2
  - Added Interface Order
  - Added Interface PeriodicTimerEventTrigger
  - Added Interface Role
  - Added Interface SecuritySettings
  - Added Interface Share
  - Added Interface StorageAccount
  - Added Interface StorageAccountCredential
  - Added Interface Trigger
  - Added Interface TriggerSupportPackageRequest
  - Added Interface UpdateSummary
  - Added Interface User
    
## 2.0.1 (2022-04-15)

**features**

  - Bug fix

## 2.0.0 (2022-01-12)

The package of @azure/arm-databoxedge is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
