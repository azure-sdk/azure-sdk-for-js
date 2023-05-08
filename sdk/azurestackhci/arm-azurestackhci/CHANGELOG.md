# Release History
    
## 4.0.0 (2023-05-08)
    
**Features**

  - Added operation group Offers
  - Added operation group Publishers
  - Added operation group Skus
  - Added operation group UpdateRuns
  - Added operation group Updates
  - Added operation group UpdateSummariesOperations
  - Added operation ArcSettings.beginInitializeDisableProcess
  - Added operation ArcSettings.beginInitializeDisableProcessAndWait
  - Added operation ArcSettings.consentAndInstallDefaultExtensions
  - Added operation Clusters.beginExtendSoftwareAssuranceBenefit
  - Added operation Clusters.beginExtendSoftwareAssuranceBenefitAndWait
  - Added operation Extensions.beginUpgrade
  - Added operation Extensions.beginUpgradeAndWait
  - Added Interface ArcSettingsConsentAndInstallDefaultExtensionsOptionalParams
  - Added Interface ArcSettingsInitializeDisableProcessOptionalParams
  - Added Interface ClustersExtendSoftwareAssuranceBenefitOptionalParams
  - Added Interface DefaultExtensionDetails
  - Added Interface ExtensionInstanceView
  - Added Interface ExtensionInstanceViewStatus
  - Added Interface ExtensionsUpgradeOptionalParams
  - Added Interface ExtensionUpgradeParameters
  - Added Interface Offer
  - Added Interface OfferList
  - Added Interface OffersGetOptionalParams
  - Added Interface OffersListByClusterNextOptionalParams
  - Added Interface OffersListByClusterOptionalParams
  - Added Interface OffersListByPublisherNextOptionalParams
  - Added Interface OffersListByPublisherOptionalParams
  - Added Interface PackageVersionInfo
  - Added Interface PrecheckResult
  - Added Interface PrecheckResultTags
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
  - Added Interface Update
  - Added Interface UpdateList
  - Added Interface UpdatePrerequisite
  - Added Interface UpdateRun
  - Added Interface UpdateRunList
  - Added Interface UpdateRunsDeleteHeaders
  - Added Interface UpdateRunsDeleteOptionalParams
  - Added Interface UpdateRunsGetOptionalParams
  - Added Interface UpdateRunsListNextOptionalParams
  - Added Interface UpdateRunsListOptionalParams
  - Added Interface UpdateRunsPutOptionalParams
  - Added Interface UpdatesDeleteHeaders
  - Added Interface UpdatesDeleteOptionalParams
  - Added Interface UpdatesGetOptionalParams
  - Added Interface UpdatesListNextOptionalParams
  - Added Interface UpdatesListOptionalParams
  - Added Interface UpdatesPostHeaders
  - Added Interface UpdatesPostOptionalParams
  - Added Interface UpdatesPutOptionalParams
  - Added Interface UpdateSummaries
  - Added Interface UpdateSummariesDeleteHeaders
  - Added Interface UpdateSummariesDeleteOptionalParams
  - Added Interface UpdateSummariesGetOptionalParams
  - Added Interface UpdateSummariesList
  - Added Interface UpdateSummariesListNextOptionalParams
  - Added Interface UpdateSummariesListOptionalParams
  - Added Interface UpdateSummariesPutOptionalParams
  - Added Interface UserAssignedIdentity
  - Added Type Alias ArcSettingsConsentAndInstallDefaultExtensionsResponse
  - Added Type Alias AvailabilityType
  - Added Type Alias ClusterNodeType
  - Added Type Alias ClustersExtendSoftwareAssuranceBenefitResponse
  - Added Type Alias ExtensionManagedBy
  - Added Type Alias HealthState
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias OffersGetResponse
  - Added Type Alias OffersListByClusterNextResponse
  - Added Type Alias OffersListByClusterResponse
  - Added Type Alias OffersListByPublisherNextResponse
  - Added Type Alias OffersListByPublisherResponse
  - Added Type Alias PublishersGetResponse
  - Added Type Alias PublishersListByClusterNextResponse
  - Added Type Alias PublishersListByClusterResponse
  - Added Type Alias RebootRequirement
  - Added Type Alias Severity
  - Added Type Alias SkusGetResponse
  - Added Type Alias SkusListByOfferNextResponse
  - Added Type Alias SkusListByOfferResponse
  - Added Type Alias SoftwareAssuranceIntent
  - Added Type Alias SoftwareAssuranceStatus
  - Added Type Alias State
  - Added Type Alias StatusLevelTypes
  - Added Type Alias UpdateRunPropertiesState
  - Added Type Alias UpdateRunsGetResponse
  - Added Type Alias UpdateRunsListNextResponse
  - Added Type Alias UpdateRunsListResponse
  - Added Type Alias UpdateRunsPutResponse
  - Added Type Alias UpdatesGetResponse
  - Added Type Alias UpdatesListNextResponse
  - Added Type Alias UpdatesListResponse
  - Added Type Alias UpdatesPutResponse
  - Added Type Alias UpdateSummariesGetResponse
  - Added Type Alias UpdateSummariesListNextResponse
  - Added Type Alias UpdateSummariesListResponse
  - Added Type Alias UpdateSummariesPropertiesState
  - Added Type Alias UpdateSummariesPutResponse
  - Interface ArcSetting has a new optional parameter defaultExtensions
  - Interface Cluster has a new optional parameter principalId
  - Interface Cluster has a new optional parameter resourceProviderObjectId
  - Interface Cluster has a new optional parameter softwareAssuranceProperties
  - Interface Cluster has a new optional parameter tenantId
  - Interface Cluster has a new optional parameter typeIdentityType
  - Interface Cluster has a new optional parameter userAssignedIdentities
  - Interface ClusterNode has a new optional parameter ehcResourceId
  - Interface ClusterNode has a new optional parameter lastLicensingTimestamp
  - Interface ClusterNode has a new optional parameter nodeType
  - Interface ClusterNode has a new optional parameter osDisplayVersion
  - Interface ClusterPatch has a new optional parameter principalId
  - Interface ClusterPatch has a new optional parameter tenantId
  - Interface ClusterPatch has a new optional parameter type
  - Interface ClusterPatch has a new optional parameter userAssignedIdentities
  - Interface ClusterReportedProperties has a new optional parameter clusterType
  - Interface ClusterReportedProperties has a new optional parameter manufacturer
  - Interface ClusterReportedProperties has a new optional parameter supportedCapabilities
  - Interface Extension has a new optional parameter enableAutomaticUpgrade
  - Interface Extension has a new optional parameter managedBy
  - Interface PerNodeExtensionState has a new optional parameter instanceView
  - Interface PerNodeExtensionState has a new optional parameter typeHandlerVersion
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownAvailabilityType
  - Added Enum KnownClusterNodeType
  - Added Enum KnownExtensionManagedBy
  - Added Enum KnownHealthState
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownRebootRequirement
  - Added Enum KnownSeverity
  - Added Enum KnownSoftwareAssuranceIntent
  - Added Enum KnownSoftwareAssuranceStatus
  - Added Enum KnownState
  - Added Enum KnownStatusLevelTypes
  - Added Enum KnownUpdateRunPropertiesState
  - Added Enum KnownUpdateSummariesPropertiesState
  - Enum KnownArcSettingAggregateState has a new value Accepted
  - Enum KnownArcSettingAggregateState has a new value DisableInProgress
  - Enum KnownArcSettingAggregateState has a new value Provisioning
  - Enum KnownExtensionAggregateState has a new value Accepted
  - Enum KnownExtensionAggregateState has a new value Provisioning
  - Enum KnownExtensionAggregateState has a new value UpgradeFailedRollbackSucceeded
  - Enum KnownNodeArcState has a new value Accepted
  - Enum KnownNodeArcState has a new value DisableInProgress
  - Enum KnownNodeArcState has a new value InProgress
  - Enum KnownNodeArcState has a new value PartiallyConnected
  - Enum KnownNodeArcState has a new value PartiallySucceeded
  - Enum KnownNodeArcState has a new value Provisioning
  - Enum KnownNodeExtensionState has a new value Accepted
  - Enum KnownNodeExtensionState has a new value InProgress
  - Enum KnownNodeExtensionState has a new value PartiallyConnected
  - Enum KnownNodeExtensionState has a new value PartiallySucceeded
  - Enum KnownNodeExtensionState has a new value Provisioning
  - Enum KnownProvisioningState has a new value Connected
  - Enum KnownProvisioningState has a new value Creating
  - Enum KnownProvisioningState has a new value Deleted
  - Enum KnownProvisioningState has a new value Deleting
  - Enum KnownProvisioningState has a new value DisableInProgress
  - Enum KnownProvisioningState has a new value Disconnected
  - Enum KnownProvisioningState has a new value Error
  - Enum KnownProvisioningState has a new value InProgress
  - Enum KnownProvisioningState has a new value Moving
  - Enum KnownProvisioningState has a new value NotSpecified
  - Enum KnownProvisioningState has a new value PartiallyConnected
  - Enum KnownProvisioningState has a new value PartiallySucceeded
  - Enum KnownProvisioningState has a new value Updating
  - Enum KnownStatus has a new value Failed
  - Enum KnownStatus has a new value InProgress
  - Enum KnownStatus has a new value NotSpecified
  - Enum KnownStatus has a new value Succeeded

**Breaking Changes**

  - Interface ArcSetting no longer has parameter createdAt
  - Interface ArcSetting no longer has parameter createdBy
  - Interface ArcSetting no longer has parameter createdByType
  - Interface ArcSetting no longer has parameter lastModifiedAt
  - Interface ArcSetting no longer has parameter lastModifiedBy
  - Interface ArcSetting no longer has parameter lastModifiedByType
  - Interface Cluster no longer has parameter createdAt
  - Interface Cluster no longer has parameter createdBy
  - Interface Cluster no longer has parameter createdByType
  - Interface Cluster no longer has parameter lastModifiedAt
  - Interface Cluster no longer has parameter lastModifiedBy
  - Interface Cluster no longer has parameter lastModifiedByType
  - Interface Extension no longer has parameter createdAt
  - Interface Extension no longer has parameter createdBy
  - Interface Extension no longer has parameter createdByType
  - Interface Extension no longer has parameter lastModifiedAt
  - Interface Extension no longer has parameter lastModifiedBy
  - Interface Extension no longer has parameter lastModifiedByType
    
    
## 3.1.0 (2022-11-16)
    
**Features**

  - Added Interface ArcSetting
  - Added Interface Cluster
  - Added Interface Extension
  - Added Interface ProxyResource
  - Added Interface TrackedResource
    
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
