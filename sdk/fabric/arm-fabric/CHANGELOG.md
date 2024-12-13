# Release History
    
## 2.0.0 (2024-12-13)
    
### Features Added

  - Added operation FabricCapacities.beginCreateOrUpdate
  - Added operation FabricCapacities.beginCreateOrUpdateAndWait
  - Added operation FabricCapacities.beginDelete
  - Added operation FabricCapacities.beginDeleteAndWait
  - Added operation FabricCapacities.beginResume
  - Added operation FabricCapacities.beginResumeAndWait
  - Added operation FabricCapacities.beginSuspend
  - Added operation FabricCapacities.beginSuspendAndWait
  - Added operation FabricCapacities.beginUpdate
  - Added operation FabricCapacities.beginUpdateAndWait
  - Added operation FabricCapacities.listUsages
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface FabricCapacitiesCreateOrUpdateHeaders
  - Added Interface FabricCapacitiesDeleteHeaders
  - Added Interface FabricCapacitiesListByResourceGroupNextOptionalParams
  - Added Interface FabricCapacitiesListBySubscriptionNextOptionalParams
  - Added Interface FabricCapacitiesListSkusForCapacityNextOptionalParams
  - Added Interface FabricCapacitiesListSkusNextOptionalParams
  - Added Interface FabricCapacitiesListUsagesNextOptionalParams
  - Added Interface FabricCapacitiesListUsagesOptionalParams
  - Added Interface FabricCapacitiesResumeHeaders
  - Added Interface FabricCapacitiesSuspendHeaders
  - Added Interface FabricCapacitiesUpdateHeaders
  - Added Interface FabricCapacityListResult
  - Added Interface MicrosoftFabricManagementServiceOptionalParams
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Interface RpSkuEnumerationForExistingResourceResult
  - Added Interface RpSkuEnumerationForNewResourceResult
  - Added Interface RpSkuProperties
  - Added Interface RpUsageAndQuotaDetailsForExistingResource
  - Added Interface RpUsageAndQuotaEnumerationForExistingResourceResult
  - Added Class MicrosoftFabricManagementService
  - Added Type Alias FabricCapacitiesCheckNameAvailabilityResponse
  - Added Type Alias FabricCapacitiesCreateOrUpdateResponse
  - Added Type Alias FabricCapacitiesDeleteResponse
  - Added Type Alias FabricCapacitiesGetResponse
  - Added Type Alias FabricCapacitiesListByResourceGroupNextResponse
  - Added Type Alias FabricCapacitiesListByResourceGroupResponse
  - Added Type Alias FabricCapacitiesListBySubscriptionNextResponse
  - Added Type Alias FabricCapacitiesListBySubscriptionResponse
  - Added Type Alias FabricCapacitiesListSkusForCapacityNextResponse
  - Added Type Alias FabricCapacitiesListSkusForCapacityResponse
  - Added Type Alias FabricCapacitiesListSkusNextResponse
  - Added Type Alias FabricCapacitiesListSkusResponse
  - Added Type Alias FabricCapacitiesListUsagesNextResponse
  - Added Type Alias FabricCapacitiesListUsagesResponse
  - Added Type Alias FabricCapacitiesUpdateResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Interface FabricCapacitiesCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface FabricCapacitiesDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface FabricCapacitiesResumeOptionalParams has a new optional parameter resumeFrom
  - Interface FabricCapacitiesSuspendOptionalParams has a new optional parameter resumeFrom
  - Interface FabricCapacitiesUpdateOptionalParams has a new optional parameter resumeFrom
  - Added function getContinuationToken

### Breaking Changes

  - Removed operation FabricCapacitiesOperations.createOrUpdate
  - Removed operation FabricCapacitiesOperations.delete
  - Removed operation FabricCapacitiesOperations.resume
  - Removed operation FabricCapacitiesOperations.suspend
  - Removed operation FabricCapacitiesOperations.update
  - Deleted Class FabricClient
  - Type of parameter tags of interface FabricCapacityUpdate is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter tags of interface TrackedResource is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Removed function restorePoller
    
    
## 1.0.0 (2024-10-14)

### Features Added

This is the first stable version with the package of @azure/arm-fabric
