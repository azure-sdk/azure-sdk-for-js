# Release History
    
## 6.0.0-beta.3 (2025-01-15)
Compared with version 5.2.0
    
### Features Added

  - Added operation group SignalRReplicas
  - Added operation group SignalRReplicaSharedPrivateLinkResources
  - Added operation SignalR.listReplicaSkus
  - Added Interface ApplicationFirewallSettings
  - Added Interface ClientConnectionCountRule
  - Added Interface ClientTrafficControlRule
  - Added Interface IPRule
  - Added Interface Replica
  - Added Interface ReplicaList
  - Added Interface RouteSettings
  - Added Interface SignalRListReplicaSkusOptionalParams
  - Added Interface SignalRRegenerateKeyHeaders
  - Added Interface SignalRReplicasCreateOrUpdateOptionalParams
  - Added Interface SignalRReplicasDeleteOptionalParams
  - Added Interface SignalRReplicasGetOptionalParams
  - Added Interface SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  - Added Interface SignalRReplicaSharedPrivateLinkResourcesGetOptionalParams
  - Added Interface SignalRReplicaSharedPrivateLinkResourcesListNextOptionalParams
  - Added Interface SignalRReplicaSharedPrivateLinkResourcesListOptionalParams
  - Added Interface SignalRReplicasListNextOptionalParams
  - Added Interface SignalRReplicasListOptionalParams
  - Added Interface SignalRReplicasRestartHeaders
  - Added Interface SignalRReplicasRestartOptionalParams
  - Added Interface SignalRReplicasUpdateHeaders
  - Added Interface SignalRReplicasUpdateOptionalParams
  - Added Interface SignalRRestartHeaders
  - Added Interface SignalRUpdateHeaders
  - Added Interface ThrottleByJwtCustomClaimRule
  - Added Interface ThrottleByJwtSignatureRule
  - Added Interface ThrottleByUserIdRule
  - Added Interface TrafficThrottleByJwtCustomClaimRule
  - Added Interface TrafficThrottleByJwtSignatureRule
  - Added Interface TrafficThrottleByUserIdRule
  - Added Type Alias ClientConnectionCountRuleDiscriminator
  - Added Type Alias ClientConnectionCountRuleUnion
  - Added Type Alias ClientTrafficControlRuleDiscriminator
  - Added Type Alias ClientTrafficControlRuleUnion
  - Added Type Alias SignalRListReplicaSkusResponse
  - Added Type Alias SignalRReplicasCreateOrUpdateResponse
  - Added Type Alias SignalRReplicasGetResponse
  - Added Type Alias SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateResponse
  - Added Type Alias SignalRReplicaSharedPrivateLinkResourcesGetResponse
  - Added Type Alias SignalRReplicaSharedPrivateLinkResourcesListNextResponse
  - Added Type Alias SignalRReplicaSharedPrivateLinkResourcesListResponse
  - Added Type Alias SignalRReplicasListNextResponse
  - Added Type Alias SignalRReplicasListResponse
  - Added Type Alias SignalRReplicasRestartResponse
  - Added Type Alias SignalRReplicasUpdateResponse
  - Added Type Alias SignalRRestartResponse
  - Interface Resource has a new optional parameter systemData
  - Interface ServerlessSettings has a new optional parameter keepAliveIntervalInSeconds
  - Interface SharedPrivateLinkResource has a new optional parameter fqdns
  - Interface SignalRNetworkACLs has a new optional parameter ipRules
  - Interface SignalRResource has a new optional parameter applicationFirewall
  - Interface SignalRResource has a new optional parameter regionEndpointEnabled
  - Interface SignalRResource has a new optional parameter resourceStopped
  - Interface SignalRResource has a new optional parameter routeSettings
  - Added Enum KnownClientConnectionCountRuleDiscriminator
  - Added Enum KnownClientTrafficControlRuleDiscriminator

### Breaking Changes

  - Interface CustomCertificate no longer has parameter systemData
  - Interface CustomDomain no longer has parameter systemData
  - Interface PrivateEndpointConnection no longer has parameter systemData
  - Interface SharedPrivateLinkResource no longer has parameter systemData
  - Interface SignalRResource no longer has parameter systemData
  - Parameter location of interface TrackedResource is now required
    
    
## 6.0.0-beta.2 (2023-10-09)
    
### Features Added

  - Added operation group SignalRReplicas
  - Added operation SignalR.listReplicaSkus
  - Added Interface IPRule
  - Added Interface Replica
  - Added Interface ReplicaList
  - Added Interface SignalRListReplicaSkusOptionalParams
  - Added Interface SignalRRegenerateKeyHeaders
  - Added Interface SignalRReplicasCreateOrUpdateOptionalParams
  - Added Interface SignalRReplicasDeleteOptionalParams
  - Added Interface SignalRReplicasGetOptionalParams
  - Added Interface SignalRReplicasListNextOptionalParams
  - Added Interface SignalRReplicasListOptionalParams
  - Added Interface SignalRReplicasRestartHeaders
  - Added Interface SignalRReplicasRestartOptionalParams
  - Added Interface SignalRReplicasUpdateHeaders
  - Added Interface SignalRReplicasUpdateOptionalParams
  - Added Interface SignalRRestartHeaders
  - Added Interface SignalRUpdateHeaders
  - Added Type Alias SignalRListReplicaSkusResponse
  - Added Type Alias SignalRReplicasCreateOrUpdateResponse
  - Added Type Alias SignalRReplicasGetResponse
  - Added Type Alias SignalRReplicasListNextResponse
  - Added Type Alias SignalRReplicasListResponse
  - Added Type Alias SignalRReplicasRestartResponse
  - Added Type Alias SignalRReplicasUpdateResponse
  - Added Type Alias SignalRRestartResponse
  - Interface Resource has a new optional parameter systemData
  - Interface SignalRNetworkACLs has a new optional parameter ipRules
  - Interface SignalRResource has a new optional parameter regionEndpointEnabled
  - Interface SignalRResource has a new optional parameter resourceStopped

### Breaking Changes

  - Parameter location of interface TrackedResource is now required
    
    
## 6.0.0-beta.1 (2023-08-31)

### Features Added

- Added operation group SignalRReplicas
- Added operation SignalR.listReplicaSkus
- Added Interface Replica
- Added Interface ReplicaList
- Added Interface SignalRListReplicaSkusOptionalParams
- Added Interface SignalRRegenerateKeyHeaders
- Added Interface SignalRReplicasCreateOrUpdateOptionalParams
- Added Interface SignalRReplicasDeleteOptionalParams
- Added Interface SignalRReplicasGetOptionalParams
- Added Interface SignalRReplicasListNextOptionalParams
- Added Interface SignalRReplicasListOptionalParams
- Added Interface SignalRReplicasRestartHeaders
- Added Interface SignalRReplicasRestartOptionalParams
- Added Interface SignalRReplicasUpdateHeaders
- Added Interface SignalRReplicasUpdateOptionalParams
- Added Interface SignalRRestartHeaders
- Added Interface SignalRUpdateHeaders
- Added Type Alias SignalRListReplicaSkusResponse
- Added Type Alias SignalRReplicasCreateOrUpdateResponse
- Added Type Alias SignalRReplicasGetResponse
- Added Type Alias SignalRReplicasListNextResponse
- Added Type Alias SignalRReplicasListResponse
- Added Type Alias SignalRReplicasRestartResponse
- Added Type Alias SignalRReplicasUpdateResponse
- Added Type Alias SignalRRestartResponse

### Breaking Changes

- Parameter location of interface TrackedResource is now required


## 5.2.0 (2023-03-08)
    
### Features Added

  - Added Interface CustomCertificate
  - Added Interface CustomDomain
  - Added Interface PrivateEndpointACL
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface ServerlessSettings
  - Added Interface SharedPrivateLinkResource
  - Added Interface SignalRResource
  - Added Interface TrackedResource
  - Added function getContinuationToken
    
    
## 5.1.0 (2022-03-30)
    
### Features Added

  - Added operation group SignalRCustomCertificates
  - Added operation group SignalRCustomDomains
  - Added Interface CustomCertificateList
  - Added Interface CustomDomainList
  - Added Interface LiveTraceCategory
  - Added Interface LiveTraceConfiguration
  - Added Interface ResourceReference
  - Added Interface SignalRCustomCertificatesCreateOrUpdateOptionalParams
  - Added Interface SignalRCustomCertificatesDeleteOptionalParams
  - Added Interface SignalRCustomCertificatesGetOptionalParams
  - Added Interface SignalRCustomCertificatesListNextOptionalParams
  - Added Interface SignalRCustomCertificatesListOptionalParams
  - Added Interface SignalRCustomDomainsCreateOrUpdateOptionalParams
  - Added Interface SignalRCustomDomainsDeleteOptionalParams
  - Added Interface SignalRCustomDomainsGetOptionalParams
  - Added Interface SignalRCustomDomainsListNextOptionalParams
  - Added Interface SignalRCustomDomainsListOptionalParams
  - Added Type Alias CustomCertificate
  - Added Type Alias CustomDomain
  - Added Type Alias SignalRCustomCertificatesCreateOrUpdateResponse
  - Added Type Alias SignalRCustomCertificatesGetResponse
  - Added Type Alias SignalRCustomCertificatesListNextResponse
  - Added Type Alias SignalRCustomCertificatesListResponse
  - Added Type Alias SignalRCustomDomainsCreateOrUpdateResponse
  - Added Type Alias SignalRCustomDomainsGetResponse
  - Added Type Alias SignalRCustomDomainsListNextResponse
  - Added Type Alias SignalRCustomDomainsListResponse
  - Class SignalRManagementClient has a new parameter signalRCustomCertificates
  - Class SignalRManagementClient has a new parameter signalRCustomDomains
  - Type Alias SignalRResource has a new parameter liveTraceConfiguration
    
    
## 5.0.0 (2022-01-21)

The package of @azure/arm-signalr is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
