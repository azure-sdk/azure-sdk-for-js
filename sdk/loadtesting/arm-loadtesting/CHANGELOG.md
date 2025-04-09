# Release History
    
## 2.0.0-beta.1 (2025-04-09)
Compared with version 1.0.0
    
### Features Added

  - Added Interface CheckAvailabilityQuotaOptionalParams
  - Added Interface CheckQuotaAvailabilityResponseProperties
  - Added Interface CreateOrUpdateLoadtestOptionalParams
  - Added Interface DeleteLoadtestOptionalParams
  - Added Interface GetLoadtestOptionalParams
  - Added Interface GetQuotaOptionalParams
  - Added Interface ListByResourceGroupOptionalParams
  - Added Interface ListBySubscriptionOptionalParams
  - Added Interface ListQuotaOptionalParams
  - Added Interface LoadTestMgmtClientOptionalParams
  - Added Interface LoadTestProperties
  - Added Interface LoadTestResourceUpdate
  - Added Interface LoadTestResourceUpdateProperties
  - Added Interface OutboundNetworkDependenciesEndpointsOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface ProxyResource
  - Added Interface QuotaBucketRequestProperties
  - Added Interface QuotaResourceProperties
  - Added Interface RestorePollerOptions
  - Added Interface UpdateLoadtestOptionalParams
  - Added Class LoadTestMgmtClient
  - Added Type Alias ContinuablePage
  - Interface CheckQuotaAvailabilityResponse has a new optional parameter name
  - Interface CheckQuotaAvailabilityResponse has a new optional parameter properties
  - Interface CheckQuotaAvailabilityResponse has a new optional parameter systemData
  - Interface LoadTestResource has a new optional parameter properties
  - Interface QuotaBucketRequest has a new optional parameter properties
  - Interface QuotaResource has a new optional parameter properties
  - Type of parameter resourceId of interface EncryptionPropertiesIdentity is changed from string to string | null
  - Added Enum KnownAPIVersions
  - Added function restorePoller

### Breaking Changes

  - Removed operation group LoadTests
  - Removed operation group Operations
  - Removed operation group Quotas
  - Deleted Class LoadTestClient
  - Interface CheckQuotaAvailabilityResponse no longer has parameter availabilityStatus
  - Interface CheckQuotaAvailabilityResponse no longer has parameter isAvailable
  - Interface LoadTestResource no longer has parameter dataPlaneURI
  - Interface LoadTestResource no longer has parameter description
  - Interface LoadTestResource no longer has parameter encryption
  - Interface LoadTestResource no longer has parameter provisioningState
  - Interface QuotaBucketRequest no longer has parameter currentQuota
  - Interface QuotaBucketRequest no longer has parameter currentUsage
  - Interface QuotaBucketRequest no longer has parameter dimensions
  - Interface QuotaBucketRequest no longer has parameter newQuota
  - Interface QuotaResource no longer has parameter limit
  - Interface QuotaResource no longer has parameter provisioningState
  - Interface QuotaResource no longer has parameter usage
  - Interface CheckQuotaAvailabilityResponse has a new required parameter id
  - Interface CheckQuotaAvailabilityResponse has a new required parameter type
  - Parameter domainName of interface EndpointDependency is now required
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from {
        [propertyName: string]: UserAssignedIdentity | null;
    } to Record<string, UserAssignedIdentity | null>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Removed Enum KnownActionType
  - Removed Enum KnownOrigin
  - Removed function getContinuationToken
    
    
## 1.0.0 (2023-01-28)

The package of @azure/arm-loadtesting is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
