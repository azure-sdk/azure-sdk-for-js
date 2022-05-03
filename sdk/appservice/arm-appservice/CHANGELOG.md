# Release History
    
## 13.0.0 (2022-05-03)
    
**Features**

  - Added operation StaticSites.beginLinkBackend
  - Added operation StaticSites.beginLinkBackendAndWait
  - Added operation StaticSites.beginLinkBackendToBuild
  - Added operation StaticSites.beginLinkBackendToBuildAndWait
  - Added operation StaticSites.beginValidateBackend
  - Added operation StaticSites.beginValidateBackendAndWait
  - Added operation StaticSites.beginValidateBackendForBuild
  - Added operation StaticSites.beginValidateBackendForBuildAndWait
  - Added operation StaticSites.getLinkedBackend
  - Added operation StaticSites.getLinkedBackendForBuild
  - Added operation StaticSites.listLinkedBackends
  - Added operation StaticSites.listLinkedBackendsForBuild
  - Added operation StaticSites.unlinkBackend
  - Added operation StaticSites.unlinkBackendFromBuild
  - Added operation WebApps.createOneDeployOperation
  - Added operation WebApps.getAuthSettingsV2WithoutSecretsSlot
  - Added operation WebApps.getOneDeployStatus
  - Added Interface CertificateEmail
  - Added Interface CertificateOrderAction
  - Added Interface StaticSiteLinkedBackend
  - Added Interface StaticSiteLinkedBackendsCollection
  - Added Interface StaticSitesGetLinkedBackendForBuildOptionalParams
  - Added Interface StaticSitesGetLinkedBackendOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsForBuildNextOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsForBuildOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsNextOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsOptionalParams
  - Added Interface StaticSitesLinkBackendOptionalParams
  - Added Interface StaticSitesLinkBackendToBuildOptionalParams
  - Added Interface StaticSitesUnlinkBackendFromBuildOptionalParams
  - Added Interface StaticSitesUnlinkBackendOptionalParams
  - Added Interface StaticSitesValidateBackendForBuildOptionalParams
  - Added Interface StaticSitesValidateBackendOptionalParams
  - Added Interface WebAppsCreateOneDeployOperationOptionalParams
  - Added Interface WebAppsGetAuthSettingsV2WithoutSecretsSlotOptionalParams
  - Added Interface WebAppsGetOneDeployStatusOptionalParams
  - Added Type Alias Enum12
  - Added Type Alias Enum13
  - Added Type Alias Enum14
  - Added Type Alias ResourceNotRenewableReason
  - Added Type Alias StaticSiteLinkedBackendARMResource
  - Added Type Alias StaticSitesGetLinkedBackendForBuildResponse
  - Added Type Alias StaticSitesGetLinkedBackendResponse
  - Added Type Alias StaticSitesGetLinkedBackendsForBuildNextResponse
  - Added Type Alias StaticSitesGetLinkedBackendsForBuildResponse
  - Added Type Alias StaticSitesGetLinkedBackendsNextResponse
  - Added Type Alias StaticSitesGetLinkedBackendsResponse
  - Added Type Alias StaticSitesLinkBackendResponse
  - Added Type Alias StaticSitesLinkBackendToBuildResponse
  - Added Type Alias WebAppsCreateOneDeployOperationResponse
  - Added Type Alias WebAppsGetAuthSettingsV2WithoutSecretsSlotResponse
  - Added Type Alias WebAppsGetOneDeployStatusResponse
  - Interface AppServiceEnvironment has a new optional parameter networkingConfiguration
  - Interface ListCustomHostNameSitesNextOptionalParams has a new optional parameter hostname
  - Interface ListCustomHostNameSitesOptionalParams has a new optional parameter hostname
  - Type Alias AppServiceEnvironmentPatchResource has a new parameter networkingConfiguration
  - Type Alias AppServiceEnvironmentResource has a new parameter networkingConfiguration
  - Type Alias AseV3NetworkingConfiguration has a new parameter ftpEnabled
  - Type Alias AseV3NetworkingConfiguration has a new parameter remoteDebugEnabled
  - Type Alias AseV3NetworkingConfiguration has a new parameter numberOfOutboundIpAddresses
  - Type Alias AseV3NetworkingConfiguration has a new parameter inboundIpAddressOverride
  - Type Alias AseV3NetworkingConfiguration has a new parameter targetNumberOfOutboundIpAddresses
  - Type Alias Site has a new parameter vnetRouteAllEnabled
  - Type Alias Site has a new parameter vnetImagePullEnabled
  - Type Alias Site has a new parameter vnetContentShareEnabled
  - Type Alias StaticSiteARMResource has a new parameter linkedBackends
  - Type Alias StaticSiteBuildARMResource has a new parameter linkedBackends
  - Type Alias StaticSitePatchResource has a new parameter linkedBackends
  - Added Enum KnownEnum12
  - Added Enum KnownEnum13
  - Added Enum KnownEnum14
  - Added Enum KnownResourceNotRenewableReason
  - Enum KnownCustomDomainStatus has a new value Unhealthy
  - Enum KnownEnum17 has a new value LinuxFunctions
  - Enum KnownEnum17 has a new value WindowsFunctions

**Breaking Changes**

  - Removed Enum KnownAppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem
  - Removed Enum KnownAppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem
  - Removed Enum KnownDomainPatchResourcePropertiesDomainNotRenewableReasonsItem
  - Removed Enum KnownDomainPropertiesDomainNotRenewableReasonsItem
  - Removed Enum KnownEnum18
  - Removed Enum KnownEnum19
  - Removed Enum KnownEnum20
  - Enum KnownEnum15 no longer has value LinuxFunctions
  - Enum KnownEnum15 no longer has value WindowsFunctions
    
    
## 12.0.0 (2022-04-07)
    
**Features**

  - Added operation group Global_2

**Breaking Changes**

  - Removed operation group Global
    
    
## 11.0.0 (2022-01-10)
    
**Features**

  - Added operation group ContainerApps
  - Added operation group ContainerAppsRevisions
  - Added operation Domains.transferOut
  - Added operation WebApps.getAuthSettingsV2WithoutSecrets
  - Added Interface Configuration
  - Added Interface Container
  - Added Interface ContainerAppCollection
  - Added Interface ContainerAppsConfiguration
  - Added Interface ContainerAppsCreateOrUpdateOptionalParams
  - Added Interface ContainerAppsDeleteOptionalParams
  - Added Interface ContainerAppSecret
  - Added Interface ContainerAppsGetOptionalParams
  - Added Interface ContainerAppsListByResourceGroupNextOptionalParams
  - Added Interface ContainerAppsListByResourceGroupOptionalParams
  - Added Interface ContainerAppsListBySubscriptionNextOptionalParams
  - Added Interface ContainerAppsListBySubscriptionOptionalParams
  - Added Interface ContainerAppsListSecretsOptionalParams
  - Added Interface ContainerAppsRevisionsActivateRevisionOptionalParams
  - Added Interface ContainerAppsRevisionsDeactivateRevisionOptionalParams
  - Added Interface ContainerAppsRevisionsGetRevisionOptionalParams
  - Added Interface ContainerAppsRevisionsListRevisionsNextOptionalParams
  - Added Interface ContainerAppsRevisionsListRevisionsOptionalParams
  - Added Interface ContainerAppsRevisionsRestartRevisionOptionalParams
  - Added Interface ContainerResources
  - Added Interface CustomHostnameSitesCollection
  - Added Interface CustomScaleRule
  - Added Interface Dapr
  - Added Interface DaprComponent
  - Added Interface DaprMetadata
  - Added Interface DomainsTransferOutOptionalParams
  - Added Interface EnvironmentVar
  - Added Interface HttpScaleRule
  - Added Interface Ingress
  - Added Interface ListCustomHostNameSitesNextOptionalParams
  - Added Interface ListCustomHostNameSitesOptionalParams
  - Added Interface QueueScaleRule
  - Added Interface RegistryCredentials
  - Added Interface RevisionCollection
  - Added Interface Scale
  - Added Interface ScaleRule
  - Added Interface ScaleRuleAuth
  - Added Interface Secret
  - Added Interface SecretsCollection
  - Added Interface Template
  - Added Interface TrafficWeight
  - Added Interface WebAppsGetAuthSettingsV2WithoutSecretsOptionalParams
  - Added Type Alias ActiveRevisionsMode
  - Added Type Alias ContainerApp
  - Added Type Alias ContainerAppProvisioningState
  - Added Type Alias ContainerAppsCreateOrUpdateResponse
  - Added Type Alias ContainerAppsGetResponse
  - Added Type Alias ContainerAppsListByResourceGroupNextResponse
  - Added Type Alias ContainerAppsListByResourceGroupResponse
  - Added Type Alias ContainerAppsListBySubscriptionNextResponse
  - Added Type Alias ContainerAppsListBySubscriptionResponse
  - Added Type Alias ContainerAppsListSecretsResponse
  - Added Type Alias ContainerAppsRevisionsGetRevisionResponse
  - Added Type Alias ContainerAppsRevisionsListRevisionsNextResponse
  - Added Type Alias ContainerAppsRevisionsListRevisionsResponse
  - Added Type Alias CustomHostnameSites
  - Added Type Alias DomainsTransferOutResponse
  - Added Type Alias EnterpriseGradeCdnStatus
  - Added Type Alias Enum16
  - Added Type Alias Enum17
  - Added Type Alias Enum18
  - Added Type Alias Enum19
  - Added Type Alias Enum20
  - Added Type Alias IngressTransportMethod
  - Added Type Alias ListCustomHostNameSitesNextResponse
  - Added Type Alias ListCustomHostNameSitesResponse
  - Added Type Alias Revision
  - Added Type Alias RevisionHealthState
  - Added Type Alias RevisionProvisioningState
  - Added Type Alias WebAppsGetAuthSettingsV2WithoutSecretsResponse
  - Class WebSiteManagementClient has a new parameter containerApps
  - Class WebSiteManagementClient has a new parameter containerAppsRevisions
  - Type Alias KubeEnvironment has a new parameter environmentType
  - Type Alias KubeEnvironment has a new parameter containerAppsConfiguration
  - Type Alias KubeEnvironmentPatchResource has a new parameter containerAppsConfiguration
  - Type Alias StaticSiteARMResource has a new parameter enterpriseGradeCdnStatus
  - Type Alias StaticSitePatchResource has a new parameter enterpriseGradeCdnStatus
  - Added Enum KnownActiveRevisionsMode
  - Added Enum KnownContainerAppProvisioningState
  - Added Enum KnownEnterpriseGradeCdnStatus
  - Added Enum KnownEnum16
  - Added Enum KnownEnum17
  - Added Enum KnownEnum18
  - Added Enum KnownEnum19
  - Added Enum KnownEnum20
  - Added Enum KnownIngressTransportMethod
  - Added Enum KnownRevisionHealthState
  - Added Enum KnownRevisionProvisioningState

**Breaking Changes**

  - Removed Enum KnownEnum10
  - Removed Enum KnownEnum11
  - Removed Enum KnownEnum12
  - Removed Enum KnownEnum13
  - Removed Enum KnownEnum14
    
    
## 10.0.0 (2021-12-13)

The package of @azure/arm-appservice is using our next generation design principles since version 10.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
