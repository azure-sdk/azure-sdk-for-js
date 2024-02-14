# Release History
    
## 1.0.0-beta.2 (2024-02-14)
    
**Features**

  - Added operation group AccountQuotas
  - Added operation Accounts.checkNameAvailability
  - Added Interface AccountFreeTrialProperties
  - Added Interface AccountProperties
  - Added Interface AccountQuota
  - Added Interface AccountQuotaListResult
  - Added Interface AccountQuotaProperties
  - Added Interface AccountQuotasGetOptionalParams
  - Added Interface AccountQuotasListByAccountNextOptionalParams
  - Added Interface AccountQuotasListByAccountOptionalParams
  - Added Interface AccountsCheckNameAvailabilityOptionalParams
  - Added Interface AccountUpdateProperties
  - Added Interface CheckNameAvailabilityRequest
  - Added Interface CheckNameAvailabilityResponse
  - Added Interface QuotaProperties
  - Added Type Alias AccountQuotasGetResponse
  - Added Type Alias AccountQuotasListByAccountNextResponse
  - Added Type Alias AccountQuotasListByAccountResponse
  - Added Type Alias AccountsCheckNameAvailabilityResponse
  - Added Type Alias CheckNameAvailabilityReason
  - Interface Account has a new optional parameter properties
  - Interface AccountUpdate has a new optional parameter properties
  - Interface Quota has a new optional parameter properties
  - Added Enum KnownCheckNameAvailabilityReason
  - Enum KnownFreeTrialState has a new value NotEligible
  - Enum KnownFreeTrialState has a new value NotRegistered
  - Enum KnownProvisioningState has a new value Creating

**Breaking Changes**

  - Interface Account no longer has parameter dashboardUri
  - Interface Account no longer has parameter provisioningState
  - Interface Account no longer has parameter regionalAffinity
  - Interface Account no longer has parameter reporting
  - Interface Account no longer has parameter scalableExecution
  - Interface AccountUpdate no longer has parameter regionalAffinity
  - Interface AccountUpdate no longer has parameter reporting
  - Interface AccountUpdate no longer has parameter scalableExecution
  - Interface FreeTrialProperties no longer has parameter allocatedValue
  - Interface FreeTrialProperties no longer has parameter createdAt
  - Interface FreeTrialProperties no longer has parameter expiryAt
  - Interface FreeTrialProperties no longer has parameter percentageUsed
  - Interface FreeTrialProperties no longer has parameter usedValue
  - Interface Quota no longer has parameter freeTrial
  - Interface Quota no longer has parameter provisioningState
    
    
## 1.0.0-beta.1 (2023-09-27)

The package of @azure/arm-playwrighttesting is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
