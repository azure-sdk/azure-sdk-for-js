# Release History
    
## 2.0.0 (2025-03-04)
    
### Features Added

  - Added Interface ApiBridgeProperties
  - Added Interface CustomSipHeader
  - Added Interface CustomSipHeadersProperties
  - Added Interface DnsDelegationProperties
  - Added Interface DnsDelegationsProperties
  - Added Interface ManagedServiceIdentity
  - Added Interface Sku
  - Added Interface UserAssignedIdentity
  - Added Type Alias ApiBridgeActivationState
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias SkuTier
  - Interface CommunicationsGateway has a new optional parameter allocatedMediaAddressPrefixes
  - Interface CommunicationsGateway has a new optional parameter allocatedSignalingAddressPrefixes
  - Interface CommunicationsGateway has a new optional parameter customSipHeaders
  - Interface CommunicationsGateway has a new optional parameter dnsDelegations
  - Interface CommunicationsGateway has a new optional parameter identity
  - Interface CommunicationsGateway has a new optional parameter integratedMcpEnabled
  - Interface CommunicationsGateway has a new optional parameter sku
  - Interface CommunicationsGatewaysDeleteHeaders has a new optional parameter location
  - Interface CommunicationsGatewayUpdate has a new optional parameter identity
  - Interface CommunicationsGatewayUpdate has a new optional parameter sku
  - Interface TestLinesDeleteHeaders has a new optional parameter location
  - Added Enum KnownApiBridgeActivationState
  - Added Enum KnownManagedServiceIdentityType
  - Enum KnownCommunicationsPlatform has a new value TeamsDirectRouting

### Breaking Changes

  - Type of parameter apiBridge of interface CommunicationsGateway is changed from Record<string, unknown> to ApiBridgeProperties
    
    
## 1.0.0 (2023-04-04)

The package of @azure/arm-voiceservices is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
