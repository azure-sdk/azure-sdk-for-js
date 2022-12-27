# Release History
    
## 1.0.0-beta.3 (2022-12-27)
    
**Features**

  - Added Interface CreateAndMountFileShareConfiguration
  - Added Interface DiskConfiguration
  - Added Interface DiskSku
  - Added Interface DiskVolumeConfiguration
  - Added Interface ExternalInstallationSoftwareConfiguration
  - Added Interface FileShareConfiguration
  - Added Interface LoadBalancerDetails
  - Added Interface MountFileShareConfiguration
  - Added Interface SkipFileShareConfiguration
  - Added Interface StorageConfiguration
  - Added Interface StorageInformation
  - Added Type Alias ConfigurationType
  - Added Type Alias DiskSkuName
  - Added Type Alias FileShareConfigurationUnion
  - Added Type Alias SslPreference
  - Interface CentralServerVmDetails has a new optional parameter storageDetails
  - Interface DatabaseConfiguration has a new optional parameter diskConfiguration
  - Interface DatabaseVmDetails has a new optional parameter storageDetails
  - Interface DB2ProviderInstanceProperties has a new optional parameter sslCertificateUri
  - Interface DB2ProviderInstanceProperties has a new optional parameter sslPreference
  - Interface HanaDbProviderInstanceProperties has a new optional parameter sslCertificateUri
  - Interface HanaDbProviderInstanceProperties has a new optional parameter sslPreference
  - Interface Monitor has a new optional parameter storageAccountArmId
  - Interface Monitor has a new optional parameter zoneRedundancyPreference
  - Interface MsSqlServerProviderInstanceProperties has a new optional parameter sslCertificateUri
  - Interface MsSqlServerProviderInstanceProperties has a new optional parameter sslPreference
  - Interface PrometheusHaClusterProviderInstanceProperties has a new optional parameter sslCertificateUri
  - Interface PrometheusHaClusterProviderInstanceProperties has a new optional parameter sslPreference
  - Interface PrometheusOSProviderInstanceProperties has a new optional parameter sslCertificateUri
  - Interface PrometheusOSProviderInstanceProperties has a new optional parameter sslPreference
  - Interface SAPApplicationServerInstance has a new optional parameter storageDetails
  - Interface SAPCentralServerInstance has a new optional parameter loadBalancerDetails
  - Interface SAPDatabaseInstance has a new optional parameter loadBalancerDetails
  - Interface SapNetWeaverProviderInstanceProperties has a new optional parameter sslCertificateUri
  - Interface SapNetWeaverProviderInstanceProperties has a new optional parameter sslPreference
  - Interface SingleServerConfiguration has a new optional parameter dbDiskConfiguration
  - Interface ThreeTierConfiguration has a new optional parameter storageConfiguration
  - Added Enum KnownConfigurationType
  - Added Enum KnownDiskSkuName
  - Added Enum KnownSslPreference
  - Enum KnownSAPSoftwareInstallationType has a new value External
  - Enum KnownSAPVirtualInstanceState has a new value SoftwareDetectionFailed
  - Enum KnownSAPVirtualInstanceState has a new value SoftwareDetectionInProgress
  - Added function getContinuationToken

**Breaking Changes**

  - Type of parameter softwareInstallationType of interface SoftwareConfiguration is changed from "ServiceInitiated" | "SAPInstallWithoutOSConfig" to "ServiceInitiated" | "SAPInstallWithoutOSConfig" | "External"
    
    
## 1.0.0-beta.2 (2022-07-14)
    
**Features**

  - Added Interface DB2ProviderInstanceProperties
  - Added Interface DeploymentConfiguration
  - Added Interface DeploymentWithOSConfiguration
  - Added Interface DiscoveryConfiguration
  - Added Interface HanaDbProviderInstanceProperties
  - Added Interface LinuxConfiguration
  - Added Interface Monitor
  - Added Interface MonitorPropertiesErrors
  - Added Interface MsSqlServerProviderInstanceProperties
  - Added Interface OperationsContent
  - Added Interface OperationsDefinitionDisplay
  - Added Interface PatchResourceRequestBodyIdentity
  - Added Interface PhpWorkloadResource
  - Added Interface PhpWorkloadResourceIdentity
  - Added Interface PrometheusHaClusterProviderInstanceProperties
  - Added Interface PrometheusOSProviderInstanceProperties
  - Added Interface ProviderInstance
  - Added Interface ProviderInstancePropertiesErrors
  - Added Interface ProxyResource
  - Added Interface SAPApplicationServerInstance
  - Added Interface SAPCentralServerInstance
  - Added Interface SAPDatabaseInstance
  - Added Interface SAPInstallWithoutOSConfigSoftwareConfiguration
  - Added Interface SapNetWeaverProviderInstanceProperties
  - Added Interface SAPVirtualInstance
  - Added Interface SearchProfile
  - Added Interface ServiceInitiatedSoftwareConfiguration
  - Added Interface SingleServerConfiguration
  - Added Interface SingleServerRecommendationResult
  - Added Interface ThreeTierConfiguration
  - Added Interface ThreeTierRecommendationResult
  - Added Interface TrackedResource
  - Added Interface VmssNodesProfile
  - Added Interface WindowsConfiguration
  - Added Interface WordpressInstanceResource
    
    
## 1.0.0-beta.1 (2022-06-09)

The package of @azure/arm-workloads is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
