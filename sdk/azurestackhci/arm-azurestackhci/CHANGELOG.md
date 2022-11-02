# Release History
    
## 3.1.0 (2022-11-02)
    
**Features**

  - Added operation group Offers
  - Added operation group Publishers
  - Added operation group Skus
  - Added operation group UpdateRuns
  - Added operation group Updates
  - Added operation group UpdateSummariesOperations
  - Added operation Clusters.beginExtendSoftwareAssuranceBenefit
  - Added operation Clusters.beginExtendSoftwareAssuranceBenefitAndWait
  - Added Interface ArcSetting
  - Added Interface Cluster
  - Added Interface ClustersExtendSoftwareAssuranceBenefitOptionalParams
  - Added Interface Extension
  - Added Interface Offer
  - Added Interface OfferList
  - Added Interface OffersGetOptionalParams
  - Added Interface OffersListByClusterNextOptionalParams
  - Added Interface OffersListByClusterOptionalParams
  - Added Interface OffersListByPublisherNextOptionalParams
  - Added Interface OffersListByPublisherOptionalParams
  - Added Interface PackageVersionInfo
  - Added Interface ProxyResource
  - Added Interface Publisher
  - Added Interface PublisherList
  - Added Interface PublishersGetOptionalParams
  - Added Interface PublishersListByClusterNextOptionalParams
  - Added Interface PublishersListByClusterOptionalParams
  - Added Interface Sku
  - Added Interface SkuList
  - Added Interface SkuMappings
  - Added Interface SkusGetOptionalParams
  - Added Interface SkusListByOfferNextOptionalParams
  - Added Interface SkusListByOfferOptionalParams
  - Added Interface SoftwareAssuranceChangeRequest
  - Added Interface SoftwareAssuranceChangeRequestProperties
  - Added Interface SoftwareAssuranceProperties
  - Added Interface Step
  - Added Interface SystemData
  - Added Interface TrackedResource
  - Added Interface Update
  - Added Interface UpdateList
  - Added Interface UpdatePrerequisite
  - Added Interface UpdateRun
  - Added Interface UpdateRunList
  - Added Interface UpdateRunsGetOptionalParams
  - Added Interface UpdateRunsListNextOptionalParams
  - Added Interface UpdateRunsListOptionalParams
  - Added Interface UpdatesGetOptionalParams
  - Added Interface UpdatesListNextOptionalParams
  - Added Interface UpdatesListOptionalParams
  - Added Interface UpdatesPostOptionalParams
  - Added Interface UpdateSummaries
  - Added Interface UpdateSummariesGetOptionalParams
  - Added Interface UpdateSummariesList
  - Added Interface UpdateSummariesListNextOptionalParams
  - Added Interface UpdateSummariesListOptionalParams
  - Added Interface UserAssignedIdentity
  - Added Type Alias AvailabilityType
  - Added Type Alias ClusterNodeType
  - Added Type Alias ClustersExtendSoftwareAssuranceBenefitResponse
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias OffersGetResponse
  - Added Type Alias OffersListByClusterNextResponse
  - Added Type Alias OffersListByClusterResponse
  - Added Type Alias OffersListByPublisherNextResponse
  - Added Type Alias OffersListByPublisherResponse
  - Added Type Alias PublishersGetResponse
  - Added Type Alias PublishersListByClusterNextResponse
  - Added Type Alias PublishersListByClusterResponse
  - Added Type Alias SkusGetResponse
  - Added Type Alias SkusListByOfferNextResponse
  - Added Type Alias SkusListByOfferResponse
  - Added Type Alias SoftwareAssuranceIntent
  - Added Type Alias SoftwareAssuranceStatus
  - Added Type Alias State
  - Added Type Alias UpdateRunPropertiesState
  - Added Type Alias UpdateRunsGetResponse
  - Added Type Alias UpdateRunsListNextResponse
  - Added Type Alias UpdateRunsListResponse
  - Added Type Alias UpdatesGetResponse
  - Added Type Alias UpdatesListNextResponse
  - Added Type Alias UpdatesListResponse
  - Added Type Alias UpdateSummariesGetResponse
  - Added Type Alias UpdateSummariesListNextResponse
  - Added Type Alias UpdateSummariesListResponse
  - Added Type Alias UpdateSummariesPropertiesState
  - Interface ClusterNode has a new optional parameter nodeType
  - Interface ClusterNode has a new optional parameter osDisplayVersion
  - Interface ClusterPatch has a new optional parameter principalId
  - Interface ClusterPatch has a new optional parameter tenantId
  - Interface ClusterPatch has a new optional parameter type
  - Interface ClusterPatch has a new optional parameter userAssignedIdentities
  - Interface Resource has a new optional parameter systemData
  - Class AzureStackHCIClient has a new parameter offers
  - Class AzureStackHCIClient has a new parameter publishers
  - Class AzureStackHCIClient has a new parameter skus
  - Class AzureStackHCIClient has a new parameter updateRuns
  - Class AzureStackHCIClient has a new parameter updates
  - Class AzureStackHCIClient has a new parameter updateSummariesOperations
  - Added Enum KnownAvailabilityType
  - Added Enum KnownClusterNodeType
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownSoftwareAssuranceIntent
  - Added Enum KnownSoftwareAssuranceStatus
  - Added Enum KnownState
  - Added Enum KnownUpdateRunPropertiesState
  - Added Enum KnownUpdateSummariesPropertiesState
    
## 3.0.2 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 3.0.1 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 3.0.0 (2022-05-17)
    
**Features**

  - Added operation ArcSettings.beginCreateIdentity
  - Added operation ArcSettings.beginCreateIdentityAndWait
  - Added operation ArcSettings.generatePassword
  - Added operation ArcSettings.update
  - Added operation Clusters.beginCreateIdentity
  - Added operation Clusters.beginCreateIdentityAndWait
  - Added operation Clusters.beginDelete
  - Added operation Clusters.beginDeleteAndWait
  - Added operation Clusters.beginUploadCertificate
  - Added operation Clusters.beginUploadCertificateAndWait
  - Added Interface ArcConnectivityProperties
  - Added Interface ArcIdentityResponse
  - Added Interface ArcSettingsCreateIdentityOptionalParams
  - Added Interface ArcSettingsGeneratePasswordOptionalParams
  - Added Interface ArcSettingsPatch
  - Added Interface ArcSettingsUpdateOptionalParams
  - Added Interface ClusterIdentityResponse
  - Added Interface ClustersCreateIdentityOptionalParams
  - Added Interface ClustersUploadCertificateOptionalParams
  - Added Interface PasswordCredential
  - Added Interface RawCertificateData
  - Added Interface UploadCertificateRequest
  - Added Type Alias ArcSettingsCreateIdentityResponse
  - Added Type Alias ArcSettingsGeneratePasswordResponse
  - Added Type Alias ArcSettingsUpdateResponse
  - Added Type Alias ClustersCreateIdentityResponse
  - Interface ClustersDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface ClustersDeleteOptionalParams has a new optional parameter updateIntervalInMs
  - Type Alias ArcSetting has a new parameter arcApplicationClientId
  - Type Alias ArcSetting has a new parameter arcApplicationTenantId
  - Type Alias ArcSetting has a new parameter arcServicePrincipalObjectId
  - Type Alias ArcSetting has a new parameter arcApplicationObjectId
  - Type Alias ArcSetting has a new parameter connectivityProperties
  - Type Alias Cluster has a new parameter aadApplicationObjectId
  - Type Alias Cluster has a new parameter aadServicePrincipalObjectId
  - Type Alias Cluster has a new parameter serviceEndpoint

**Breaking Changes**

  - Removed operation Clusters.delete
    
## 2.1.0 (2022-02-28)

**Features**

  - Added Parameters

## 2.0.0 (2022-01-11)

The package of @azure/arm-azurestackhci is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
