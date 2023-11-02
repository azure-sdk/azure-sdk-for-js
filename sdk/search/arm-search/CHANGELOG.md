# Release History
    
## 4.0.0-beta.1 (2023-11-02)
    
**Features**

  - Added Interface OperationAvailability
  - Added Interface OperationLogsSpecification
  - Added Interface OperationMetricDimension
  - Added Interface OperationMetricsSpecification
  - Added Interface OperationProperties
  - Added Interface OperationServiceSpecification
  - Added Interface UserAssignedManagedIdentity
  - Added Type Alias SearchBypass
  - Added Type Alias SearchDisabledDataExfiltrationOption
  - Interface CloudError has a new optional parameter message
  - Interface Identity has a new optional parameter userAssignedIdentities
  - Interface NetworkRuleSet has a new optional parameter bypass
  - Interface Operation has a new optional parameter isDataAction
  - Interface Operation has a new optional parameter origin
  - Interface Operation has a new optional parameter properties
  - Interface SearchService has a new optional parameter disabledDataExfiltrationOptions
  - Interface SearchService has a new optional parameter eTag
  - Interface SearchServiceUpdate has a new optional parameter disabledDataExfiltrationOptions
  - Interface SearchServiceUpdate has a new optional parameter eTag
  - Added Enum KnownIdentityType
  - Added Enum KnownPublicNetworkAccess
  - Added Enum KnownSearchBypass
  - Added Enum KnownSearchDisabledDataExfiltrationOption
  - Added Enum KnownSharedPrivateLinkResourceProvisioningState
  - Added Enum KnownSharedPrivateLinkResourceStatus
  - Added Enum KnownSkuName

**Breaking Changes**

  - Removed operation group Usages
  - Interface PrivateEndpointConnectionProperties no longer has parameter groupId
  - Interface PrivateEndpointConnectionProperties no longer has parameter provisioningState
  - Class SearchManagementClient no longer has parameter usages
  - Removed Enum KnownPrivateLinkServiceConnectionProvisioningState
    
    
## 3.2.0 (2023-10-09)
    
**Features**

  - Added operation group Usages
  - Added Interface DataPlaneAadOrApiKeyAuthOption
  - Added Interface DataPlaneAuthOptions
  - Added Interface EncryptionWithCmk
  - Added Interface QuotaUsageResult
  - Added Interface QuotaUsageResultName
  - Added Interface QuotaUsagesListResult
  - Added Interface UsageBySubscriptionSkuOptionalParams
  - Added Interface UsagesListBySubscriptionNextOptionalParams
  - Added Interface UsagesListBySubscriptionOptionalParams
  - Added Type Alias AadAuthFailureMode
  - Added Type Alias PrivateLinkServiceConnectionProvisioningState
  - Added Type Alias SearchEncryptionComplianceStatus
  - Added Type Alias SearchEncryptionWithCmk
  - Added Type Alias SearchSemanticSearch
  - Added Type Alias UsageBySubscriptionSkuResponse
  - Added Type Alias UsagesListBySubscriptionNextResponse
  - Added Type Alias UsagesListBySubscriptionResponse
  - Interface PrivateEndpointConnectionProperties has a new optional parameter groupId
  - Interface PrivateEndpointConnectionProperties has a new optional parameter provisioningState
  - Interface SearchService has a new optional parameter authOptions
  - Interface SearchService has a new optional parameter disableLocalAuth
  - Interface SearchService has a new optional parameter encryptionWithCmk
  - Interface SearchService has a new optional parameter semanticSearch
  - Interface SearchServiceUpdate has a new optional parameter authOptions
  - Interface SearchServiceUpdate has a new optional parameter disableLocalAuth
  - Interface SearchServiceUpdate has a new optional parameter encryptionWithCmk
  - Interface SearchServiceUpdate has a new optional parameter semanticSearch
  - Added Enum KnownPrivateLinkServiceConnectionProvisioningState
  - Added Enum KnownSearchSemanticSearch
    
    
## 3.1.0 (2022-12-07)
    
**Features**

  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface SearchService
  - Added Interface SearchServiceUpdate
  - Added Interface SharedPrivateLinkResource
  - Added Interface TrackedResource
    
## 3.0.1 (2022-04-29)

**Features**

  - Bug fix
  
## 3.0.0 (2021-12-21)

The package of @azure/arm-search is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
