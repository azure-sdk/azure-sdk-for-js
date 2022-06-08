# Release History
    
## 1.0.0 (2022-06-08)
    
**Features**

  - Added operation group ContainerAppsDiagnostics
  - Added operation group ManagedEnvironmentDiagnostics
  - Added operation group ManagedEnvironmentsDiagnostics
  - Added operation group Namespaces
  - Added operation ContainerApps.beginUpdate
  - Added operation ContainerApps.beginUpdateAndWait
  - Added operation DaprComponents.listSecrets
  - Added operation ManagedEnvironments.beginUpdate
  - Added operation ManagedEnvironments.beginUpdateAndWait
  - Added Interface CheckNameAvailabilityRequest
  - Added Interface CheckNameAvailabilityResponse
  - Added Interface ContainerAppsDiagnosticsGetDetectorOptionalParams
  - Added Interface ContainerAppsDiagnosticsGetRevisionOptionalParams
  - Added Interface ContainerAppsDiagnosticsGetRootOptionalParams
  - Added Interface ContainerAppsDiagnosticsListDetectorsNextOptionalParams
  - Added Interface ContainerAppsDiagnosticsListDetectorsOptionalParams
  - Added Interface ContainerAppsDiagnosticsListRevisionsNextOptionalParams
  - Added Interface ContainerAppsDiagnosticsListRevisionsOptionalParams
  - Added Interface CustomHostnameAnalysisResult
  - Added Interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo
  - Added Interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem
  - Added Interface DaprComponentsListSecretsOptionalParams
  - Added Interface DaprSecretsCollection
  - Added Interface DiagnosticDataProviderMetadata
  - Added Interface DiagnosticDataProviderMetadataPropertyBagItem
  - Added Interface DiagnosticDataTableResponseColumn
  - Added Interface DiagnosticDataTableResponseObject
  - Added Interface DiagnosticRendering
  - Added Interface DiagnosticsCollection
  - Added Interface DiagnosticsDataApiResponse
  - Added Interface DiagnosticsDefinition
  - Added Interface DiagnosticsProperties
  - Added Interface DiagnosticsStatus
  - Added Interface DiagnosticSupportTopic
  - Added Interface ManagedEnvironmentDiagnosticsGetDetectorOptionalParams
  - Added Interface ManagedEnvironmentDiagnosticsListDetectorsOptionalParams
  - Added Interface ManagedEnvironmentsDiagnosticsGetRootOptionalParams
  - Added Interface NamespacesCheckNameAvailabilityOptionalParams
  - Added Interface TrafficLabel
  - Added Type Alias CheckNameAvailabilityReason
  - Added Type Alias ContainerAppsDiagnosticsGetDetectorResponse
  - Added Type Alias ContainerAppsDiagnosticsGetRevisionResponse
  - Added Type Alias ContainerAppsDiagnosticsGetRootResponse
  - Added Type Alias ContainerAppsDiagnosticsListDetectorsNextResponse
  - Added Type Alias ContainerAppsDiagnosticsListDetectorsResponse
  - Added Type Alias ContainerAppsDiagnosticsListRevisionsNextResponse
  - Added Type Alias ContainerAppsDiagnosticsListRevisionsResponse
  - Added Type Alias DaprComponentsListSecretsResponse
  - Added Type Alias Diagnostics
  - Added Type Alias ManagedEnvironmentDiagnosticsGetDetectorResponse
  - Added Type Alias ManagedEnvironmentDiagnosticsListDetectorsResponse
  - Added Type Alias ManagedEnvironmentsDiagnosticsGetRootResponse
  - Added Type Alias NamespacesCheckNameAvailabilityResponse
  - Added Type Alias Scheme
  - Interface ContainerAppsRevisionsListRevisionsNextOptionalParams has a new optional parameter filter
  - Interface ContainerAppsRevisionsListRevisionsOptionalParams has a new optional parameter filter
  - Interface ContainerAppsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface ContainerAppsUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Interface Dapr has a new optional parameter httpReadBufferSize
  - Interface GithubActionConfiguration has a new optional parameter contextPath
  - Interface GithubActionConfiguration has a new optional parameter image
  - Interface ManagedEnvironmentsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface ManagedEnvironmentsUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Interface RegistryCredentials has a new optional parameter identity
  - Interface TrafficWeight has a new optional parameter label
  - Class ContainerAppsAPIClient has a new parameter containerAppsDiagnostics
  - Class ContainerAppsAPIClient has a new parameter managedEnvironmentDiagnostics
  - Class ContainerAppsAPIClient has a new parameter managedEnvironmentsDiagnostics
  - Class ContainerAppsAPIClient has a new parameter namespaces
  - Type Alias ManagedEnvironment has a new parameter daprAIConnectionString
  - Type Alias ManagedEnvironment has a new parameter zoneRedundant
  - Type Alias Revision has a new parameter trafficLabels
  - Added Enum KnownCheckNameAvailabilityReason
  - Added Enum KnownScheme

**Breaking Changes**

  - Removed operation ContainerApps.update
  - Removed operation ManagedEnvironments.update
  - Interface GithubActionConfiguration no longer has parameter dockerfilePath
    
    
## 1.0.0-beta.1 (2022-03-23)

The package of @azure/arm-app is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
