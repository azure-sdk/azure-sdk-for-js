# Release History
    
## 1.0.0-beta.2 (2022-12-16)
    
**Features**

  - Added Interface ArtifactGenerationProperties
  - Added Type Alias AuthorizationStatus
  - Added Type Alias DockerfileGenerationMode
  - Added Type Alias GenerationLanguage
  - Added Type Alias ManifestGenerationMode
  - Interface DeveloperHubServiceClientOptionalParams has a new optional parameter managedClusterResource
  - Interface Workflow has a new optional parameter artifactGenerationProperties
  - Added Enum KnownAuthorizationStatus
  - Added Enum KnownDockerfileGenerationMode
  - Added Enum KnownGenerationLanguage
  - Added Enum KnownManifestGenerationMode
  - Enum KnownManifestType has a new value Kustomize
  - Added function getContinuationToken

**Breaking Changes**

  - Class DeveloperHubServiceClient has a new signature
  - Interface WorkflowListByResourceGroupNextOptionalParams no longer has parameter managedClusterResource
  - Interface WorkflowListByResourceGroupOptionalParams no longer has parameter managedClusterResource
  - Type of parameter authStatus of interface Workflow is changed from ManifestType to AuthorizationStatus
    
    
## 1.0.0-beta.1 (2022-10-18)

The package of @azure/arm-devhub is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
