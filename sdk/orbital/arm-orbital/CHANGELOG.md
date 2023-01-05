# Release History
    
## 2.0.0 (2023-01-05)
    
**Features**

  - Added Interface ContactProfileThirdPartyConfiguration
  - Added Type Alias ContactsStatus
  - Interface ContactProfile has a new optional parameter thirdPartyConfigurations
  - Interface ContactProfilesCreateOrUpdateOptionalParams has a new optional parameter thirdPartyConfigurations
  - Interface ContactProfilesProperties has a new optional parameter thirdPartyConfigurations
  - Added Enum KnownContactsStatus
  - Added Enum KnownStatus
  - Enum KnownApiVersionParameter has a new value TwoThousandTwentyTwo1101
  - Added function getContinuationToken

**Breaking Changes**

  - Interface ContactProfilesListBySubscriptionNextOptionalParams no longer has parameter skiptoken
  - Interface ContactProfilesListNextOptionalParams no longer has parameter skiptoken
  - Interface ContactsListNextOptionalParams no longer has parameter skiptoken
  - Interface SpacecraftsListBySubscriptionNextOptionalParams no longer has parameter skiptoken
  - Interface SpacecraftsListNextOptionalParams no longer has parameter skiptoken
  - Parameter expirationDate of interface AuthorizedGroundstation is now required
  - Parameter groundStation of interface AuthorizedGroundstation is now required
  - Type of parameter status of interface Contact is changed from Status to ContactsStatus
    
    
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
