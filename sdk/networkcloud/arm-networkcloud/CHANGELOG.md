# Release History
    
## 1.1.0-beta.1 (2023-11-15)
    
**Features**

  - Added operation Clusters.beginScanRuntime
  - Added operation Clusters.beginScanRuntimeAndWait
  - Added Interface AdministratorConfigurationPatch
  - Added Interface ClusterScanRuntimeParameters
  - Added Interface ClusterSecretArchive
  - Added Interface ClustersScanRuntimeHeaders
  - Added Interface ClustersScanRuntimeOptionalParams
  - Added Interface ClusterUpdateStrategy
  - Added Interface NodePoolAdministratorConfigurationPatch
  - Added Interface RuntimeProtectionConfiguration
  - Added Interface RuntimeProtectionStatus
  - Added Type Alias ClusterScanRuntimeParametersScanActivity
  - Added Type Alias ClusterSecretArchiveEnabled
  - Added Type Alias ClustersScanRuntimeResponse
  - Added Type Alias ClusterUpdateStrategyType
  - Added Type Alias RuntimeProtectionEnforcementLevel
  - Interface AgentPoolPatchParameters has a new optional parameter administratorConfiguration
  - Interface BareMetalMachine has a new optional parameter machineRoles
  - Interface BareMetalMachine has a new optional parameter runtimeProtectionStatus
  - Interface Cluster has a new optional parameter runtimeProtectionConfiguration
  - Interface Cluster has a new optional parameter secretArchive
  - Interface Cluster has a new optional parameter updateStrategy
  - Interface ClusterPatchParameters has a new optional parameter runtimeProtectionConfiguration
  - Interface ClusterPatchParameters has a new optional parameter secretArchive
  - Interface ClusterPatchParameters has a new optional parameter updateStrategy
  - Interface ControlPlaneNodePatchConfiguration has a new optional parameter administratorConfiguration
  - Interface KeySetUser has a new optional parameter userPrincipalName
  - Interface KubernetesClusterPatchParameters has a new optional parameter administratorConfiguration
  - Added Enum KnownClusterScanRuntimeParametersScanActivity
  - Added Enum KnownClusterSecretArchiveEnabled
  - Added Enum KnownClusterUpdateStrategyType
  - Added Enum KnownRuntimeProtectionEnforcementLevel
  - Enum KnownClusterConnectionStatus has a new value Disconnected
    
    
## 1.0.0 (2023-08-22)

The package of @azure/arm-networkcloud is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
