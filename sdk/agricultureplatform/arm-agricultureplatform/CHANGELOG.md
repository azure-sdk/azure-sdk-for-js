# Release History
    
## 1.0.0-beta.2 (2025-04-24)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added operation AgriService.beginCreateOrUpdate
  - Added operation AgriService.beginCreateOrUpdateAndWait
  - Added operation AgriService.beginDelete
  - Added operation AgriService.beginDeleteAndWait
  - Added operation AgriService.beginUpdate
  - Added operation AgriService.beginUpdateAndWait
  - Added Interface AgriServiceCreateOrUpdateHeaders
  - Added Interface AgriServiceDeleteHeaders
  - Added Interface AgriServiceListByResourceGroupNextOptionalParams
  - Added Interface AgriServiceListBySubscriptionNextOptionalParams
  - Added Interface AgriServiceResourceListResult
  - Added Interface AgriServiceUpdateHeaders
  - Added Interface AzureResourceManagerCommonTypesManagedServiceIdentityUpdate
  - Added Interface AzureResourceManagerCommonTypesSkuUpdate
  - Added Interface MicrosoftAgriculturePlatformOptionalParams
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Class MicrosoftAgriculturePlatform
  - Added Type Alias AgriServiceCreateOrUpdateResponse
  - Added Type Alias AgriServiceDeleteResponse
  - Added Type Alias AgriServiceGetResponse
  - Added Type Alias AgriServiceListAvailableSolutionsResponse
  - Added Type Alias AgriServiceListByResourceGroupNextResponse
  - Added Type Alias AgriServiceListByResourceGroupResponse
  - Added Type Alias AgriServiceListBySubscriptionNextResponse
  - Added Type Alias AgriServiceListBySubscriptionResponse
  - Added Type Alias AgriServiceUpdateResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Interface AgriServiceCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface AgriServiceDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface AgriServiceUpdateOptionalParams has a new optional parameter resumeFrom
  - Added function getContinuationToken

### Breaking Changes

  - Removed operation AgriServiceOperations.createOrUpdate
  - Removed operation AgriServiceOperations.delete
  - Removed operation AgriServiceOperations.update
  - Deleted Class AgriculturePlatformClient
  - Type of parameter identity of interface AgriServiceResourceUpdate is changed from ManagedServiceIdentity to AzureResourceManagerCommonTypesManagedServiceIdentityUpdate
  - Type of parameter sku of interface AgriServiceResourceUpdate is changed from Sku to AzureResourceManagerCommonTypesSkuUpdate
  - Type of parameter tags of interface AgriServiceResourceUpdate is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, any> to Record<string, unknown>
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from Record<string, UserAssignedIdentity | null> to {
        [propertyName: string]: UserAssignedIdentity | null;
    }
  - Type of parameter tags of interface TrackedResource is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Removed Enum KnownVersions
  - Removed function restorePoller
    
    
## 1.0.0-beta.1 (2025-03-25)

### Features Added

Initial release of the Azure AgriculturePlatform package
