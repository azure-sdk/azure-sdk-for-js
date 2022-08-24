# Release History
    
## 1.0.0 (2022-08-24)
    
**Features**

  - Added operation group ContainerAppsDiagnostics
  - Added operation group ManagedEnvironmentDiagnostics
  - Added operation group ManagedEnvironmentsDiagnostics
  - Added operation group Namespaces
  - Added operation ContainerApps.beginUpdate
  - Added operation ContainerApps.beginUpdateAndWait
  - Added operation ContainerApps.getAuthToken
  - Added operation DaprComponents.listSecrets
  - Added operation ManagedEnvironments.beginUpdate
  - Added operation ManagedEnvironments.beginUpdateAndWait
  - Added operation ManagedEnvironments.getAuthToken
  - Added Interface AuthConfig
  - Added Interface Certificate
  - Added Interface CheckNameAvailabilityRequest
  - Added Interface CheckNameAvailabilityResponse
  - Added Interface ContainerApp
  - Added Interface ContainerAppAuthToken
  - Added Interface ContainerAppsDiagnosticsGetDetectorOptionalParams
  - Added Interface ContainerAppsDiagnosticsGetRevisionOptionalParams
  - Added Interface ContainerAppsDiagnosticsGetRootOptionalParams
  - Added Interface ContainerAppsDiagnosticsListDetectorsNextOptionalParams
  - Added Interface ContainerAppsDiagnosticsListDetectorsOptionalParams
  - Added Interface ContainerAppsDiagnosticsListRevisionsNextOptionalParams
  - Added Interface ContainerAppsDiagnosticsListRevisionsOptionalParams
  - Added Interface ContainerAppsGetAuthTokenOptionalParams
  - Added Interface CustomDomainConfiguration
  - Added Interface CustomHostnameAnalysisResult
  - Added Interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo
  - Added Interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem
  - Added Interface DaprComponent
  - Added Interface DaprComponentsListSecretsOptionalParams
  - Added Interface DaprSecretsCollection
  - Added Interface DiagnosticDataProviderMetadata
  - Added Interface DiagnosticDataProviderMetadataPropertyBagItem
  - Added Interface DiagnosticDataTableResponseColumn
  - Added Interface DiagnosticDataTableResponseObject
  - Added Interface DiagnosticRendering
  - Added Interface Diagnostics
  - Added Interface DiagnosticsCollection
  - Added Interface DiagnosticsDataApiResponse
  - Added Interface DiagnosticsDefinition
  - Added Interface DiagnosticsProperties
  - Added Interface DiagnosticsStatus
  - Added Interface DiagnosticSupportTopic
  - Added Interface EnvironmentAuthToken
  - Added Interface ManagedEnvironment
  - Added Interface ManagedEnvironmentDiagnosticsGetDetectorOptionalParams
  - Added Interface ManagedEnvironmentDiagnosticsListDetectorsOptionalParams
  - Added Interface ManagedEnvironmentsDiagnosticsGetRootOptionalParams
  - Added Interface ManagedEnvironmentsGetAuthTokenOptionalParams
  - Added Interface ManagedEnvironmentStorage
  - Added Interface NamespacesCheckNameAvailabilityOptionalParams
  - Added Interface ProxyResource
  - Added Interface Replica
  - Added Interface Revision
  - Added Interface SourceControl
  - Added Interface TrackedResource
  - Added Type Alias CheckNameAvailabilityReason
  - Added Type Alias ContainerAppsDiagnosticsGetDetectorResponse
  - Added Type Alias ContainerAppsDiagnosticsGetRevisionResponse
  - Added Type Alias ContainerAppsDiagnosticsGetRootResponse
  - Added Type Alias ContainerAppsDiagnosticsListDetectorsNextResponse
  - Added Type Alias ContainerAppsDiagnosticsListDetectorsResponse
  - Added Type Alias ContainerAppsDiagnosticsListRevisionsNextResponse
  - Added Type Alias ContainerAppsDiagnosticsListRevisionsResponse
  - Added Type Alias ContainerAppsGetAuthTokenResponse
  - Added Type Alias DaprComponentsListSecretsResponse
  - Added Type Alias LogLevel
  - Added Type Alias ManagedEnvironmentDiagnosticsGetDetectorResponse
  - Added Type Alias ManagedEnvironmentDiagnosticsListDetectorsResponse
  - Added Type Alias ManagedEnvironmentsDiagnosticsGetRootResponse
  - Added Type Alias ManagedEnvironmentsGetAuthTokenResponse
  - Added Type Alias NamespacesCheckNameAvailabilityResponse
  - Added Type Alias Scheme
  - Interface CertificateProperties has a new optional parameter subjectAlternativeNames
  - Interface ContainerAppsRevisionsListRevisionsNextOptionalParams has a new optional parameter filter
  - Interface ContainerAppsRevisionsListRevisionsOptionalParams has a new optional parameter filter
  - Interface ContainerAppsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface ContainerAppsUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Interface Dapr has a new optional parameter enableApiLogging
  - Interface Dapr has a new optional parameter httpMaxRequestSize
  - Interface Dapr has a new optional parameter httpReadBufferSize
  - Interface Dapr has a new optional parameter logLevel
  - Interface GithubActionConfiguration has a new optional parameter contextPath
  - Interface GithubActionConfiguration has a new optional parameter image
  - Interface ManagedEnvironmentsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface ManagedEnvironmentsUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Interface RegistryCredentials has a new optional parameter identity
  - Interface ReplicaContainer has a new optional parameter execEndpoint
  - Interface ReplicaContainer has a new optional parameter logStreamEndpoint
  - Interface TrafficWeight has a new optional parameter label
  - Class ContainerAppsAPIClient has a new parameter containerAppsDiagnostics
  - Class ContainerAppsAPIClient has a new parameter managedEnvironmentDiagnostics
  - Class ContainerAppsAPIClient has a new parameter managedEnvironmentsDiagnostics
  - Class ContainerAppsAPIClient has a new parameter namespaces
  - Added Enum KnownCheckNameAvailabilityReason
  - Added Enum KnownLogLevel
  - Added Enum KnownScheme

**Breaking Changes**

  - Removed operation ContainerApps.update
  - Removed operation ManagedEnvironments.update
  - Interface GithubActionConfiguration no longer has parameter dockerfilePath
    
    
## 1.0.0-beta.1 (2022-03-23)

The package of @azure/arm-app is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
