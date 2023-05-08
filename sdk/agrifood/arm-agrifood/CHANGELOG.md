# Release History
    
## 1.0.0-beta.5 (2023-05-08)
    
**Features**

  - Added operation group OperationResults
  - Added operation group Solutions
  - Added operation group SolutionsDiscoverability
  - Added operation Extensions.createOrUpdate
  - Added Interface ApiProperties
  - Added Interface ArmAsyncOperationError
  - Added Interface ExtensionInstallationRequest
  - Added Interface ExtensionsCreateOrUpdateOptionalParams
  - Added Interface FarmBeatsSolution
  - Added Interface FarmBeatsSolutionListResponse
  - Added Interface FarmBeatsSolutionProperties
  - Added Interface Insight
  - Added Interface InsightAttachment
  - Added Interface MarketplaceOfferDetails
  - Added Interface Measure
  - Added Interface OperationResultsGetOptionalParams
  - Added Interface ResourceParameter
  - Added Interface Solution
  - Added Interface SolutionEvaluatedOutput
  - Added Interface SolutionInstallationRequest
  - Added Interface SolutionListResponse
  - Added Interface SolutionProperties
  - Added Interface SolutionsCreateOrUpdateOptionalParams
  - Added Interface SolutionsDeleteOptionalParams
  - Added Interface SolutionsDiscoverabilityGetOptionalParams
  - Added Interface SolutionsDiscoverabilityListNextOptionalParams
  - Added Interface SolutionsDiscoverabilityListOptionalParams
  - Added Interface SolutionsGetOptionalParams
  - Added Interface SolutionsListNextOptionalParams
  - Added Interface SolutionsListOptionalParams
  - Added Type Alias ExtensionsCreateOrUpdateResponse
  - Added Type Alias OperationResultsGetResponse
  - Added Type Alias SolutionsCreateOrUpdateResponse
  - Added Type Alias SolutionsDiscoverabilityGetResponse
  - Added Type Alias SolutionsDiscoverabilityListNextResponse
  - Added Type Alias SolutionsDiscoverabilityListResponse
  - Added Type Alias SolutionsGetResponse
  - Added Type Alias SolutionsListNextResponse
  - Added Type Alias SolutionsListResponse
  - Interface ArmAsyncOperation has a new optional parameter error
  - Interface Extension has a new optional parameter additionalApiProperties
  - Interface PrivateEndpointConnection has a new optional parameter groupIds

**Breaking Changes**

  - Removed operation Extensions.create
  - Removed operation Extensions.update
  - Removed operation FarmBeatsModels.getOperationResult
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter extensionCategories
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter extensionIds
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter maxPageSize
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter skipToken
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter extensionCategories
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter farmBeatsExtensionIds
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter farmBeatsExtensionNames
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter maxPageSize
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter publisherIds
  - Interface FarmBeatsModelsListByResourceGroupNextOptionalParams no longer has parameter maxPageSize
  - Interface FarmBeatsModelsListByResourceGroupNextOptionalParams no longer has parameter skipToken
  - Interface FarmBeatsModelsListBySubscriptionNextOptionalParams no longer has parameter maxPageSize
  - Interface FarmBeatsModelsListBySubscriptionNextOptionalParams no longer has parameter skipToken
    
    
## 1.0.0-beta.4 (2022-11-14)
    
**Features**

  - Bugs Fixed
    
## 1.0.0-beta.3 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 1.0.0-beta.2 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 1.0.0-beta.1 (2022-08-31)

The package of @azure/arm-agrifood is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
