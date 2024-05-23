# Release History
    
## 1.1.0-beta.1 (2024-05-23)
Compared with version 1.0.0
    
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
  - Added Type Alias AgentPoolsDeleteResponse
  - Added Type Alias BareMetalMachineKeySetsDeleteResponse
  - Added Type Alias BareMetalMachinesDeleteResponse
  - Added Type Alias BmcKeySetsDeleteResponse
  - Added Type Alias CloudServicesNetworksDeleteResponse
  - Added Type Alias ClusterManagersDeleteResponse
  - Added Type Alias ClusterScanRuntimeParametersScanActivity
  - Added Type Alias ClustersDeleteResponse
  - Added Type Alias ClusterSecretArchiveEnabled
  - Added Type Alias ClustersScanRuntimeResponse
  - Added Type Alias ClusterUpdateStrategyType
  - Added Type Alias ConsolesDeleteResponse
  - Added Type Alias KubernetesClustersDeleteResponse
  - Added Type Alias L2NetworksDeleteResponse
  - Added Type Alias L3NetworksDeleteResponse
  - Added Type Alias MetricsConfigurationsDeleteResponse
  - Added Type Alias RacksDeleteResponse
  - Added Type Alias RuntimeProtectionEnforcementLevel
  - Added Type Alias StorageAppliancesDeleteResponse
  - Added Type Alias TrunkedNetworksDeleteResponse
  - Added Type Alias VirtualMachinesDeleteResponse
  - Added Type Alias VolumesDeleteResponse
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

The package of @azure/arm-networkcloud is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
