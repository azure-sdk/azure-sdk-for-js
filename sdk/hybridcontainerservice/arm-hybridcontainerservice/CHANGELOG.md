# Release History
    
## 2.0.0 (2024-02-23)
    
**Features**

  - Interface AgentPool has a new optional parameter count
  - Interface AgentPool has a new optional parameter enableAutoScaling
  - Interface AgentPool has a new optional parameter kubernetesVersion
  - Interface AgentPool has a new optional parameter maxCount
  - Interface AgentPool has a new optional parameter maxPods
  - Interface AgentPool has a new optional parameter minCount
  - Interface AgentPool has a new optional parameter nodeLabels
  - Interface AgentPool has a new optional parameter nodeTaints
  - Interface AgentPool has a new optional parameter osSKU
  - Interface AgentPool has a new optional parameter osType
  - Interface AgentPool has a new optional parameter provisioningState
  - Interface AgentPool has a new optional parameter status
  - Interface AgentPool has a new optional parameter vmSize
  - Interface HybridIdentityMetadata has a new optional parameter provisioningState
  - Interface HybridIdentityMetadata has a new optional parameter publicKey
  - Interface HybridIdentityMetadata has a new optional parameter resourceUid
  - Interface ProvisionedClusterUpgradeProfile has a new optional parameter provisioningState

**Breaking Changes**

  - Interface AgentPool no longer has parameter properties
  - Interface HybridIdentityMetadata no longer has parameter properties
  - Interface ProvisionedClusterUpgradeProfile no longer has parameter properties
  - Interface ProvisionedClusterUpgradeProfile has a new required parameter controlPlaneProfile
    
    
## 1.0.0 (2024-01-15)

The package of @azure/arm-hybridcontainerservice is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
