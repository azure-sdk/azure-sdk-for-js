# Release History
    
## 1.0.0-beta.4 (2025-02-28)
Compared with version 1.0.0-beta.3
    
### Features Added

  - Added operation group AdooAuthOperations
  - Added operation group IacProfiles
  - Added Interface AdooAuth
  - Added Interface AdooAuthCallRequest
  - Added Interface AdooAuthGetOptionalParams
  - Added Interface AdooAuthInfoResponse
  - Added Interface AdooAuthListNextOptionalParams
  - Added Interface AdooAuthListOptionalParams
  - Added Interface AdooAuthListResponse
  - Added Interface AdooAuthResponse
  - Added Interface ADORepository
  - Added Interface AzurePipelineProfile
  - Added Interface Build
  - Added Interface Deployment
  - Added Interface ExportTemplateRequest
  - Added Interface GetAdooAuthInfoOptionalParams
  - Added Interface GitHubOAuthProperties
  - Added Interface GitHubWorkflowProfile
  - Added Interface IacProfile
  - Added Interface IacProfileListResult
  - Added Interface IacProfilesCreateOrUpdateOptionalParams
  - Added Interface IacProfilesDeleteOptionalParams
  - Added Interface IacProfilesExportOptionalParams
  - Added Interface IacProfilesGetOptionalParams
  - Added Interface IacProfilesListByResourceGroupNextOptionalParams
  - Added Interface IacProfilesListByResourceGroupOptionalParams
  - Added Interface IacProfilesListNextOptionalParams
  - Added Interface IacProfilesListOptionalParams
  - Added Interface IacProfilesScaleOptionalParams
  - Added Interface IacProfilesSyncOptionalParams
  - Added Interface IacProfilesUpdateTagsOptionalParams
  - Added Interface IacTemplateDetails
  - Added Interface IacTemplateProperties
  - Added Interface PrLinkResponse
  - Added Interface PullRequest
  - Added Interface ScaleProperty
  - Added Interface ScaleTemplateRequest
  - Added Interface StageProperties
  - Added Interface WorkflowProperties
  - Added Type Alias AdooAuthGetResponse
  - Added Type Alias AdooAuthListNextResponse
  - Added Type Alias AdooAuthListOperationResponse
  - Added Type Alias GetAdooAuthInfoResponse
  - Added Type Alias IacProfilesCreateOrUpdateResponse
  - Added Type Alias IacProfilesExportResponse
  - Added Type Alias IacProfilesGetResponse
  - Added Type Alias IacProfilesListByResourceGroupNextResponse
  - Added Type Alias IacProfilesListByResourceGroupResponse
  - Added Type Alias IacProfilesListNextResponse
  - Added Type Alias IacProfilesListResponse
  - Added Type Alias IacProfilesScaleResponse
  - Added Type Alias IacProfilesUpdateTagsResponse
  - Added Type Alias QuickStartTemplateType
  - Interface GitHubOAuthResponse has a new optional parameter properties
  - Interface Workflow has a new optional parameter properties
  - Added Enum KnownQuickStartTemplateType

### Breaking Changes

  - Interface GitHubOAuthResponse no longer has parameter username
  - Interface Workflow no longer has parameter acr
  - Interface Workflow no longer has parameter aksResourceId
  - Interface Workflow no longer has parameter appName
  - Interface Workflow no longer has parameter authStatus
  - Interface Workflow no longer has parameter branchName
  - Interface Workflow no longer has parameter builderVersion
  - Interface Workflow no longer has parameter deploymentProperties
  - Interface Workflow no longer has parameter dockerBuildContext
  - Interface Workflow no longer has parameter dockerfile
  - Interface Workflow no longer has parameter dockerfileGenerationMode
  - Interface Workflow no longer has parameter dockerfileOutputDirectory
  - Interface Workflow no longer has parameter generationLanguage
  - Interface Workflow no longer has parameter imageName
  - Interface Workflow no longer has parameter imageTag
  - Interface Workflow no longer has parameter languageVersion
  - Interface Workflow no longer has parameter lastWorkflowRun
  - Interface Workflow no longer has parameter manifestGenerationMode
  - Interface Workflow no longer has parameter manifestOutputDirectory
  - Interface Workflow no longer has parameter manifestType
  - Interface Workflow no longer has parameter namespacePropertiesArtifactGenerationPropertiesNamespace
  - Interface Workflow no longer has parameter namespacePropertiesGithubWorkflowProfileNamespace
  - Interface Workflow no longer has parameter oidcCredentials
  - Interface Workflow no longer has parameter port
  - Interface Workflow no longer has parameter prStatus
  - Interface Workflow no longer has parameter prURL
  - Interface Workflow no longer has parameter pullNumber
  - Interface Workflow no longer has parameter repositoryName
  - Interface Workflow no longer has parameter repositoryOwner
    
    
## 1.0.0-beta.3 (2023-05-29)
    
### Features Added

  - Added Interface ArtifactGenerationProperties
  - Added Interface GeneratePreviewArtifactsOptionalParams
  - Added Type Alias AuthorizationStatus
  - Added Type Alias DockerfileGenerationMode
  - Added Type Alias GeneratePreviewArtifactsResponse
  - Added Type Alias GenerationLanguage
  - Added Type Alias GenerationManifestType
  - Added Type Alias ManifestGenerationMode
  - Added Type Alias WorkflowRunStatus
  - Interface Workflow has a new optional parameter appName
  - Interface Workflow has a new optional parameter builderVersion
  - Interface Workflow has a new optional parameter dockerfileGenerationMode
  - Interface Workflow has a new optional parameter dockerfileOutputDirectory
  - Interface Workflow has a new optional parameter generationLanguage
  - Interface Workflow has a new optional parameter imageName
  - Interface Workflow has a new optional parameter imageTag
  - Interface Workflow has a new optional parameter languageVersion
  - Interface Workflow has a new optional parameter manifestGenerationMode
  - Interface Workflow has a new optional parameter manifestOutputDirectory
  - Interface Workflow has a new optional parameter manifestType
  - Interface Workflow has a new optional parameter namespacePropertiesArtifactGenerationPropertiesNamespace
  - Interface Workflow has a new optional parameter namespacePropertiesGithubWorkflowProfileNamespace
  - Interface Workflow has a new optional parameter port
  - Interface WorkflowRun has a new optional parameter workflowRunStatus
  - Added Enum KnownAuthorizationStatus
  - Added Enum KnownDockerfileGenerationMode
  - Added Enum KnownGenerationLanguage
  - Added Enum KnownGenerationManifestType
  - Added Enum KnownManifestGenerationMode
  - Added Enum KnownWorkflowRunStatus

### Breaking Changes

  - Interface Workflow no longer has parameter namespace
  - Type of parameter authStatus of interface Workflow is changed from ManifestType to AuthorizationStatus
    
    
## 1.0.0-beta.2 (2023-01-04)
    
### Features Added

  - Interface WorkflowListByResourceGroupNextOptionalParams no longer has parameter managedClusterResource
    
    
## 1.0.0-beta.1 (2022-10-18)

The package of @azure/arm-devhub is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
