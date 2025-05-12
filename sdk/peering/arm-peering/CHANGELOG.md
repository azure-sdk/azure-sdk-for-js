# Release History
    
## 3.0.0 (2025-05-12)
    
### Features Added

  - Added operation group RpUnbilledPrefixes
  - Added operation RegisteredPrefixes.validate
  - Added Interface ConnectivityProbe
  - Added Interface RegisteredPrefixesValidateOptionalParams
  - Added Interface RpUnbilledPrefix
  - Added Interface RpUnbilledPrefixesListNextOptionalParams
  - Added Interface RpUnbilledPrefixesListOptionalParams
  - Added Interface RpUnbilledPrefixListResult
  - Added Type Alias Enum11
  - Added Type Alias Enum13
  - Added Type Alias PreviousConnectionProvisioningState
  - Added Type Alias Protocol
  - Added Type Alias RegisteredPrefixesValidateResponse
  - Added Type Alias RpUnbilledPrefixesListNextResponse
  - Added Type Alias RpUnbilledPrefixesListResponse
  - Interface DirectConnection has a new optional parameter lastFailureTimeUtc
  - Interface DirectConnection has a new optional parameter migrationWorkWindowBgpSessionSameDevice
  - Interface DirectConnection has a new optional parameter migrationWorkWindowTracker
  - Interface DirectConnection has a new optional parameter previousConnectionProvisioningState
  - Interface ExchangeConnection has a new optional parameter lastFailureTimeUtc
  - Interface ExchangeConnection has a new optional parameter migrationWorkWindowBgpSessionSameDevice
  - Interface ExchangeConnection has a new optional parameter migrationWorkWindowTracker
  - Interface ExchangeConnection has a new optional parameter previousConnectionProvisioningState
  - Interface LegacyPeeringsListOptionalParams has a new optional parameter directPeeringType
  - Interface Peering has a new optional parameter connectivityProbes
  - Added Enum KnownEnum11
  - Added Enum KnownEnum13
  - Added Enum KnownPreviousConnectionProvisioningState
  - Added Enum KnownProtocol
  - Enum KnownConnectionState has a new value ExternalBlocker
  - Enum KnownConnectionState has a new value TypeChangeInProgress
  - Enum KnownConnectionState has a new value TypeChangeRequested
  - Enum KnownDirectPeeringType has a new value EdgeZoneForOperators
  - Enum KnownDirectPeeringType has a new value PeerProp
  - Enum KnownPeeringLocationsDirectPeeringType has a new value EdgeZoneForOperators
  - Enum KnownPeeringLocationsDirectPeeringType has a new value PeerProp

### Breaking Changes

  - Interface LegacyPeeringsListNextOptionalParams no longer has parameter asn
  - Interface PeeringLocationsListNextOptionalParams no longer has parameter directPeeringType
  - Interface PeeringServiceLocationsListNextOptionalParams no longer has parameter country
  - Interface PrefixesListByPeeringServiceNextOptionalParams no longer has parameter expand
  - Interface ReceivedRoutesListByPeeringNextOptionalParams no longer has parameter asPath
  - Interface ReceivedRoutesListByPeeringNextOptionalParams no longer has parameter originAsValidationState
  - Interface ReceivedRoutesListByPeeringNextOptionalParams no longer has parameter prefix
  - Interface ReceivedRoutesListByPeeringNextOptionalParams no longer has parameter rpkiValidationState
  - Interface ReceivedRoutesListByPeeringNextOptionalParams no longer has parameter skipToken
    
    
## 2.1.0 (2022-12-02)
    
### Features Added

  - Added Interface CdnPeeringPrefix
  - Added Interface ConnectionMonitorTest
  - Added Interface PeerAsn
  - Added Interface Peering
  - Added Interface PeeringLocation
  - Added Interface PeeringRegisteredAsn
  - Added Interface PeeringRegisteredPrefix
  - Added Interface PeeringService
  - Added Interface PeeringServiceCountry
  - Added Interface PeeringServiceLocation
  - Added Interface PeeringServicePrefix
  - Added Interface PeeringServiceProvider
    
## 2.0.1 (2022-04-27)

### Features Added

  - Bug fix
    
## 2.0.0 (2022-01-20)

The package of @azure/arm-peering is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
