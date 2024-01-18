# Release History
    
## 3.0.0-beta.1 (2024-01-18)
    
**Features**

  - Added operation group EdgeSites
  - Added operation group GlobalCommunicationsSites
  - Added operation group GroundStations
  - Added operation group L2Connections
  - Added Interface CloudError
  - Added Interface CloudErrorBody
  - Added Interface EdgeSite
  - Added Interface EdgeSiteListResult
  - Added Interface EdgeSiteProperties
  - Added Interface EdgeSitesCreateOrUpdateOptionalParams
  - Added Interface EdgeSitesDeleteOptionalParams
  - Added Interface EdgeSitesGetOptionalParams
  - Added Interface EdgeSitesListBySubscriptionNextOptionalParams
  - Added Interface EdgeSitesListBySubscriptionOptionalParams
  - Added Interface EdgeSitesListL2ConnectionsNextOptionalParams
  - Added Interface EdgeSitesListL2ConnectionsOptionalParams
  - Added Interface EdgeSitesListNextOptionalParams
  - Added Interface EdgeSitesListOptionalParams
  - Added Interface EdgeSitesProperties
  - Added Interface EdgeSitesUpdateTagsOptionalParams
  - Added Interface GlobalCommunicationsSite
  - Added Interface GlobalCommunicationsSiteListResult
  - Added Interface GlobalCommunicationsSiteProperties
  - Added Interface GlobalCommunicationsSitesGetOptionalParams
  - Added Interface GlobalCommunicationsSitesListBySubscriptionNextOptionalParams
  - Added Interface GlobalCommunicationsSitesListBySubscriptionOptionalParams
  - Added Interface GlobalCommunicationsSitesProperties
  - Added Interface GlobalCommunicationsSitesPropertiesLocationData
  - Added Interface GroundStation
  - Added Interface GroundStationListResult
  - Added Interface GroundStationProperties
  - Added Interface GroundStationsCreateOrUpdateOptionalParams
  - Added Interface GroundStationsDeleteOptionalParams
  - Added Interface GroundStationsGetOptionalParams
  - Added Interface GroundStationsListBySubscriptionNextOptionalParams
  - Added Interface GroundStationsListBySubscriptionOptionalParams
  - Added Interface GroundStationsListL2ConnectionsNextOptionalParams
  - Added Interface GroundStationsListL2ConnectionsOptionalParams
  - Added Interface GroundStationsListNextOptionalParams
  - Added Interface GroundStationsListOptionalParams
  - Added Interface GroundStationsProperties
  - Added Interface GroundStationsUpdateTagsOptionalParams
  - Added Interface L2Connection
  - Added Interface L2ConnectionListResult
  - Added Interface L2ConnectionProperties
  - Added Interface L2ConnectionsCreateOrUpdateHeaders
  - Added Interface L2ConnectionsCreateOrUpdateOptionalParams
  - Added Interface L2ConnectionsDeleteHeaders
  - Added Interface L2ConnectionsDeleteOptionalParams
  - Added Interface L2ConnectionsGetOptionalParams
  - Added Interface L2ConnectionsListBySubscriptionNextOptionalParams
  - Added Interface L2ConnectionsListBySubscriptionOptionalParams
  - Added Interface L2ConnectionsListNextOptionalParams
  - Added Interface L2ConnectionsListOptionalParams
  - Added Interface L2ConnectionsProperties
  - Added Interface L2ConnectionsUpdateTagsHeaders
  - Added Interface L2ConnectionsUpdateTagsOptionalParams
  - Added Interface LocationData
  - Added Interface PartnerRouter
  - Added Interface ProvisionedBandwidth
  - Added Type Alias EdgeSitesCreateOrUpdateResponse
  - Added Type Alias EdgeSitesGetResponse
  - Added Type Alias EdgeSitesListBySubscriptionNextResponse
  - Added Type Alias EdgeSitesListBySubscriptionResponse
  - Added Type Alias EdgeSitesListL2ConnectionsNextResponse
  - Added Type Alias EdgeSitesListL2ConnectionsResponse
  - Added Type Alias EdgeSitesListNextResponse
  - Added Type Alias EdgeSitesListResponse
  - Added Type Alias EdgeSitesUpdateTagsResponse
  - Added Type Alias GlobalCommunicationsSitesGetResponse
  - Added Type Alias GlobalCommunicationsSitesListBySubscriptionNextResponse
  - Added Type Alias GlobalCommunicationsSitesListBySubscriptionResponse
  - Added Type Alias GlobalCommunicationsSitesPropertiesGlobalCommunicationsSiteType
  - Added Type Alias GlobalCommunicationsSiteType
  - Added Type Alias GroundStationsCreateOrUpdateResponse
  - Added Type Alias GroundStationsGetResponse
  - Added Type Alias GroundStationsListBySubscriptionNextResponse
  - Added Type Alias GroundStationsListBySubscriptionResponse
  - Added Type Alias GroundStationsListL2ConnectionsNextResponse
  - Added Type Alias GroundStationsListL2ConnectionsResponse
  - Added Type Alias GroundStationsListNextResponse
  - Added Type Alias GroundStationsListResponse
  - Added Type Alias GroundStationsUpdateTagsResponse
  - Added Type Alias L2ConnectionsCreateOrUpdateResponse
  - Added Type Alias L2ConnectionsDeleteResponse
  - Added Type Alias L2ConnectionsGetResponse
  - Added Type Alias L2ConnectionsListBySubscriptionNextResponse
  - Added Type Alias L2ConnectionsListBySubscriptionResponse
  - Added Type Alias L2ConnectionsListNextResponse
  - Added Type Alias L2ConnectionsListResponse
  - Added Type Alias L2ConnectionsPropertiesProvisioningState
  - Added Type Alias L2ConnectionsUpdateTagsResponse
  - Interface AzureOrbitalOptionalParams has a new optional parameter skiptoken
  - Added Enum KnownGlobalCommunicationsSitesPropertiesGlobalCommunicationsSiteType
  - Added Enum KnownGlobalCommunicationsSiteType
  - Added Enum KnownL2ConnectionsPropertiesProvisioningState

**Breaking Changes**

  - Removed operation group AvailableGroundStations
  - Removed operation group ContactProfiles
  - Removed operation group Contacts
  - Removed operation group OperationsResults
  - Removed operation group Spacecrafts
  - Class AzureOrbital no longer has parameter availableGroundStations
  - Class AzureOrbital no longer has parameter contactProfiles
  - Class AzureOrbital no longer has parameter contacts
  - Class AzureOrbital no longer has parameter operationsResults
  - Class AzureOrbital no longer has parameter spacecrafts
  - Removed Enum KnownContactProfilesPropertiesProvisioningState
  - Removed Enum KnownContactsPropertiesProvisioningState
  - Removed Enum KnownContactsStatus
  - Removed Enum KnownDirection
  - Removed Enum KnownPolarization
  - Removed Enum KnownProtocol
  - Removed Enum KnownSpacecraftsPropertiesProvisioningState
    
    
## 2.0.0 (2023-03-08)
    
**Features**

  - Added Interface ContactProfileThirdPartyConfiguration
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Type Alias ContactsStatus
  - Interface ContactProfile has a new optional parameter thirdPartyConfigurations
  - Interface ContactProfilesCreateOrUpdateOptionalParams has a new optional parameter thirdPartyConfigurations
  - Interface ContactProfilesProperties has a new optional parameter thirdPartyConfigurations
  - Interface OperationResult has a new optional parameter nextLink
  - Interface OperationResult has a new optional parameter value
  - Added Enum KnownContactsStatus
  - Added Enum KnownStatus

**Breaking Changes**

  - Removed operation AvailableGroundStations.get
  - Operation ContactProfiles.beginCreateOrUpdate has a new signature
  - Operation ContactProfiles.beginCreateOrUpdateAndWait has a new signature
  - Operation Spacecrafts.beginCreateOrUpdate has a new signature
  - Operation Spacecrafts.beginCreateOrUpdateAndWait has a new signature
  - Interface Contact no longer has parameter etag
  - Interface ContactProfile no longer has parameter etag
  - Interface ContactProfilesCreateOrUpdateOptionalParams no longer has parameter links
  - Interface ContactProfilesCreateOrUpdateOptionalParams no longer has parameter networkConfiguration
  - Interface Spacecraft no longer has parameter etag
  - Interface SpacecraftsCreateOrUpdateOptionalParams no longer has parameter links
  - Interface SpacecraftsCreateOrUpdateOptionalParams no longer has parameter titleLine
  - Interface SpacecraftsCreateOrUpdateOptionalParams no longer has parameter tleLine1
  - Interface SpacecraftsCreateOrUpdateOptionalParams no longer has parameter tleLine2
  - Parameter expirationDate of interface AuthorizedGroundstation is now required
  - Parameter groundStation of interface AuthorizedGroundstation is now required
  - Parameter contactProfile of interface Contact is now required
  - Parameter groundStationName of interface Contact is now required
  - Parameter reservationEndTime of interface Contact is now required
  - Parameter reservationStartTime of interface Contact is now required
  - Parameter links of interface ContactProfile is now required
  - Parameter networkConfiguration of interface ContactProfile is now required
  - Parameter id of interface ResourceReference is now required
  - Parameter links of interface Spacecraft is now required
  - Parameter titleLine of interface Spacecraft is now required
  - Parameter tleLine1 of interface Spacecraft is now required
  - Parameter tleLine2 of interface Spacecraft is now required
  - Type of parameter status of interface Contact is changed from Status to ContactsStatus
  - Removed Enum KnownApiVersionParameter
    
    
## 1.2.0 (2023-01-30)
    
**Features**

  - Interface ContactProfilesListBySubscriptionNextOptionalParams no longer has parameter skiptoken
  - Interface ContactProfilesListNextOptionalParams no longer has parameter skiptoken
  - Interface ContactsListNextOptionalParams no longer has parameter skiptoken
  - Interface SpacecraftsListBySubscriptionNextOptionalParams no longer has parameter skiptoken
  - Interface SpacecraftsListNextOptionalParams no longer has parameter skiptoken
    
    
## 1.1.0 (2022-07-11)
    
**Features**

  - Added Interface AvailableContactsProperties
  - Added Interface AvailableContactsSpacecraft
  - Added Interface AvailableGroundStationProperties
  - Added Interface Contact
  - Added Interface ContactParametersContactProfile
  - Added Interface ContactProfile
  - Added Interface ContactProfileProperties
  - Added Interface ContactsPropertiesContactProfile
  - Added Interface ProxyResource
  - Added Interface Spacecraft
  - Added Interface TrackedResource
    
    
## 1.0.0 (2022-06-02)

The package of @azure/arm-orbital is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
