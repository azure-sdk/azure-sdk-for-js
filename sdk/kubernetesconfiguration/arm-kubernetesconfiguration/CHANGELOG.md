# Release History
    
## 7.0.0-beta.1 (2024-12-04)
Compared with version 6.1.0
    
### Features Added

  - Added Interface LayerSelectorDefinition
  - Added Interface LayerSelectorPatchDefinition
  - Added Interface MatchOidcIdentityDefinition
  - Added Interface MatchOidcIdentityPatchDefinition
  - Added Interface OCIRepositoryDefinition
  - Added Interface OCIRepositoryPatchDefinition
  - Added Interface OCIRepositoryRefDefinition
  - Added Interface OCIRepositoryRefPatchDefinition
  - Added Interface PostBuildPatchDefinition
  - Added Interface SubstituteFromPatchDefinition
  - Added Interface TlsConfigDefinition
  - Added Interface TlsConfigPatchDefinition
  - Added Interface VerifyDefinition
  - Added Interface VerifyPatchDefinition
  - Added Type Alias OperationType
  - Interface FluxConfiguration has a new optional parameter ociRepository
  - Interface FluxConfigurationPatch has a new optional parameter ociRepository
  - Added Enum KnownOperationType
  - Enum KnownSourceKindType has a new value OCIRepository

### Breaking Changes

  - Interface SourceControlConfigurationClientOptionalParams no longer has parameter apiVersion
  - Type of parameter postBuild of interface KustomizationPatchDefinition is changed from PostBuildDefinition to PostBuildPatchDefinition
  - Class SourceControlConfigurationClient no longer has parameter apiVersion
    
    
## 6.1.0 (2023-09-06)
    
### Features Added

  - Added Interface PostBuildDefinition
  - Added Interface SubstituteFromDefinition
  - Interface FluxConfiguration has a new optional parameter reconciliationWaitDuration
  - Interface FluxConfiguration has a new optional parameter waitForReconciliation
  - Interface KustomizationDefinition has a new optional parameter postBuild
  - Interface KustomizationDefinition has a new optional parameter wait
  - Interface KustomizationPatchDefinition has a new optional parameter postBuild
  - Interface KustomizationPatchDefinition has a new optional parameter wait
    
    
## 6.0.0 (2023-05-11)
    
### Features Added

  - Added Interface AzureBlobDefinition
  - Added Interface AzureBlobPatchDefinition
  - Added Interface ManagedIdentityDefinition
  - Added Interface ManagedIdentityPatchDefinition
  - Added Interface Plan
  - Added Interface ServicePrincipalDefinition
  - Added Interface ServicePrincipalPatchDefinition
  - Interface Extension has a new optional parameter currentVersion
  - Interface Extension has a new optional parameter isSystemExtension
  - Interface Extension has a new optional parameter plan
  - Interface FluxConfiguration has a new optional parameter azureBlob
  - Interface FluxConfigurationPatch has a new optional parameter azureBlob
  - Enum KnownSourceKindType has a new value AzureBlob

### Breaking Changes

  - Interface Extension no longer has parameter installedVersion
    
    
## 5.1.0 (2022-11-28)
    
### Features Added

  - Added Interface Extension
  - Added Interface FluxConfiguration
  - Added Interface ProxyResource
  - Added Interface SourceControlConfiguration
    
    
## 5.0.0 (2022-04-06)

The package of @azure/arm-kubernetesconfiguration is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
