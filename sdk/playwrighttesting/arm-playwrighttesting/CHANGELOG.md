# Release History
    
## 1.0.0-beta.3 (2024-11-19)
Compared with version 1.0.0-beta.2
    
### Features Added

  - Added operation group AccountQuotasOperations
  - Added operation AccountsOperations.checkNameAvailability
  - Added operation AccountsOperations.createOrUpdate
  - Added operation AccountsOperations.delete
  - Added Interface AccountFreeTrialProperties
  - Added Interface AccountQuota
  - Added Interface AccountQuotaProperties
  - Added Interface AccountQuotasGetOptionalParams
  - Added Interface AccountQuotasListByAccountOptionalParams
  - Added Interface AccountsCheckNameAvailabilityOptionalParams
  - Added Interface AzurePlaywrightServiceClientOptionalParams
  - Added Interface CheckNameAvailabilityRequest
  - Added Interface CheckNameAvailabilityResponse
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Class AzurePlaywrightServiceClient
  - Added Type Alias CheckNameAvailabilityReason
  - Added Type Alias ContinuablePage
  - Added Type Alias OfferingType
  - Interface AccountProperties has a new optional parameter localAuth
  - Interface AccountUpdateProperties has a new optional parameter localAuth
  - Interface QuotaProperties has a new optional parameter offeringType
  - Added Enum KnownCheckNameAvailabilityReason
  - Added Enum KnownOfferingType
  - Added Enum KnownVersions
  - Enum KnownFreeTrialState has a new value NotEligible
  - Enum KnownFreeTrialState has a new value NotRegistered
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownProvisioningState has a new value Creating
  - Enum KnownQuotaNames has a new value Reporting
  - Added function restorePoller

### Breaking Changes

  - Removed operation Accounts.beginCreateOrUpdate
  - Removed operation Accounts.beginCreateOrUpdateAndWait
  - Removed operation Accounts.beginDelete
  - Removed operation Accounts.beginDeleteAndWait
  - Deleted Class PlaywrightTestingClient
  - Interface AccountsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface AccountsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface FreeTrialProperties no longer has parameter allocatedValue
  - Interface FreeTrialProperties no longer has parameter createdAt
  - Interface FreeTrialProperties no longer has parameter expiryAt
  - Interface FreeTrialProperties no longer has parameter percentageUsed
  - Interface FreeTrialProperties no longer has parameter usedValue
  - Type of parameter tags of interface AccountUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Removed function getContinuationToken
    
    
## 1.0.0-beta.2 (2024-01-31)
    
### Features Added

  - Added Interface AccountProperties
  - Added Interface AccountUpdateProperties
  - Added Interface QuotaProperties
  - Interface Account has a new optional parameter properties
  - Interface AccountUpdate has a new optional parameter properties
  - Interface Quota has a new optional parameter properties

### Breaking Changes

  - Interface Account no longer has parameter dashboardUri
  - Interface Account no longer has parameter provisioningState
  - Interface Account no longer has parameter regionalAffinity
  - Interface Account no longer has parameter reporting
  - Interface Account no longer has parameter scalableExecution
  - Interface AccountUpdate no longer has parameter regionalAffinity
  - Interface AccountUpdate no longer has parameter reporting
  - Interface AccountUpdate no longer has parameter scalableExecution
  - Interface Quota no longer has parameter freeTrial
  - Interface Quota no longer has parameter provisioningState
    
    
## 1.0.0-beta.1 (2023-09-27)

The package of @azure/arm-playwrighttesting is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
