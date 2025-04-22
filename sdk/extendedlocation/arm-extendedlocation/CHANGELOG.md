# Release History
    
## 1.0.0-beta.4 (2025-04-22)
Compared with version 1.0.0-beta.3
    
### Features Added

  - Added operation group Operations
  - Added operation ResourceSyncRules.update
  - Added Interface CustomLocationsCreateOrUpdateHeaders
  - Added Interface CustomLocationsDeleteHeaders
  - Added Interface EnabledResourceTypeListResult
  - Added Interface Operation
  - Added Interface OperationDisplay
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Interface OperationsListOptionalParams
  - Added Interface ResourceSyncRulesCreateOrUpdateHeaders
  - Added Type Alias ActionType
  - Added Type Alias CustomLocationsDeleteResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Added Type Alias Origin
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownActionType
  - Added Enum KnownOrigin

### Breaking Changes

  - Removed operation CustomLocations.listOperations
  - Removed operation ResourceSyncRules.beginUpdate
  - Removed operation ResourceSyncRules.beginUpdateAndWait
  - Interface CustomLocation no longer has parameter systemData
  - Interface EnabledResourceType no longer has parameter systemData
  - Interface ResourceSyncRule no longer has parameter systemData
  - Interface ResourceSyncRulesUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ResourceSyncRulesUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Parameter value of interface CustomLocationListResult is now required
  - Parameter value of interface ResourceSyncRuleListResult is now required
    
## 1.0.0-beta.3 (2023-01-10)

### Features Added

- Exposes `getContinuationToken` helper function to extract continuation token

### Bugs Fixed

- A series of small bug fixs relevant to authentication and apiVersion policy

## 1.0.0-beta.2 (2022-07-20)
    
### Features Added

  - Added operation group ResourceSyncRules
  - Added operation CustomLocations.findTargetResourceGroup
  - Added Interface CustomLocation
  - Added Interface CustomLocationFindTargetResourceGroupProperties
  - Added Interface CustomLocationFindTargetResourceGroupResult
  - Added Interface CustomLocationsFindTargetResourceGroupOptionalParams
  - Added Interface EnabledResourceType
  - Added Interface MatchExpressionsProperties
  - Added Interface PatchableResourceSyncRule
  - Added Interface ProxyResource
  - Added Interface ResourceSyncRule
  - Added Interface ResourceSyncRuleListResult
  - Added Interface ResourceSyncRulePropertiesSelector
  - Added Interface ResourceSyncRulesCreateOrUpdateOptionalParams
  - Added Interface ResourceSyncRulesDeleteOptionalParams
  - Added Interface ResourceSyncRulesGetOptionalParams
  - Added Interface ResourceSyncRulesListByCustomLocationIDNextOptionalParams
  - Added Interface ResourceSyncRulesListByCustomLocationIDOptionalParams
  - Added Interface ResourceSyncRulesUpdateOptionalParams
  - Added Interface TrackedResource
  - Added Type Alias CustomLocationsFindTargetResourceGroupResponse
  - Added Type Alias ResourceSyncRulesCreateOrUpdateResponse
  - Added Type Alias ResourceSyncRulesGetResponse
  - Added Type Alias ResourceSyncRulesListByCustomLocationIDNextResponse
  - Added Type Alias ResourceSyncRulesListByCustomLocationIDResponse
  - Added Type Alias ResourceSyncRulesUpdateResponse
  - Class CustomLocationsManagementClient has a new parameter $host
  - Class CustomLocationsManagementClient has a new parameter apiVersion
  - Class CustomLocationsManagementClient has a new parameter resourceSyncRules
  - Class CustomLocationsManagementClient has a new parameter subscriptionId

### Breaking Changes

  - Deleted Class CustomLocationsManagementClientContext
    
## 1.0.0-beta.1 (2021-10-08)

  - Initial Release
