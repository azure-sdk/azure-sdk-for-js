# Release History
    
## 1.0.0-beta.5 (2023-03-02)
    
**Features**

  - Added operation group CheckNameAvailability
  - Added operation group DataManagerForAgricultureExtensions
  - Added operation group DataManagerForAgricultureResources
  - Added operation group OperationResults
  - Added operation group Solutions
  - Added operation group SolutionsDiscoverability
  - Added operation Extensions.createOrUpdate
  - Added operation Extensions.listByDataManagerForAgriculture
  - Added Interface ApiProperties
  - Added Interface ArmAsyncOperationError
  - Added Interface CheckNameAvailabilityCheckNameAvailabilityOptionalParams
  - Added Interface DataManagerForAgriculture
  - Added Interface DataManagerForAgricultureExtension
  - Added Interface DataManagerForAgricultureExtensionListResponse
  - Added Interface DataManagerForAgricultureExtensionProperties
  - Added Interface DataManagerForAgricultureExtensionsGetOptionalParams
  - Added Interface DataManagerForAgricultureExtensionsListNextOptionalParams
  - Added Interface DataManagerForAgricultureExtensionsListOptionalParams
  - Added Interface DataManagerForAgricultureListResponse
  - Added Interface DataManagerForAgricultureResourcesCreateOrUpdateOptionalParams
  - Added Interface DataManagerForAgricultureResourcesDeleteOptionalParams
  - Added Interface DataManagerForAgricultureResourcesGetOptionalParams
  - Added Interface DataManagerForAgricultureResourcesListByResourceGroupNextOptionalParams
  - Added Interface DataManagerForAgricultureResourcesListByResourceGroupOptionalParams
  - Added Interface DataManagerForAgricultureResourcesListBySubscriptionNextOptionalParams
  - Added Interface DataManagerForAgricultureResourcesListBySubscriptionOptionalParams
  - Added Interface DataManagerForAgricultureResourcesUpdateHeaders
  - Added Interface DataManagerForAgricultureResourcesUpdateOptionalParams
  - Added Interface DataManagerForAgricultureSolution
  - Added Interface DataManagerForAgricultureSolutionListResponse
  - Added Interface DataManagerForAgricultureSolutionProperties
  - Added Interface DataManagerForAgricultureUpdateProperties
  - Added Interface DataManagerForAgricultureUpdateRequestModel
  - Added Interface ExtensionInstallationRequest
  - Added Interface ExtensionsCreateOrUpdateOptionalParams
  - Added Interface ExtensionsListByDataManagerForAgricultureNextOptionalParams
  - Added Interface ExtensionsListByDataManagerForAgricultureOptionalParams
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
  - Added Type Alias CheckNameAvailabilityCheckNameAvailabilityResponse
  - Added Type Alias DataManagerForAgricultureExtensionsGetResponse
  - Added Type Alias DataManagerForAgricultureExtensionsListNextResponse
  - Added Type Alias DataManagerForAgricultureExtensionsListResponse
  - Added Type Alias DataManagerForAgricultureResourcesCreateOrUpdateResponse
  - Added Type Alias DataManagerForAgricultureResourcesGetResponse
  - Added Type Alias DataManagerForAgricultureResourcesListByResourceGroupNextResponse
  - Added Type Alias DataManagerForAgricultureResourcesListByResourceGroupResponse
  - Added Type Alias DataManagerForAgricultureResourcesListBySubscriptionNextResponse
  - Added Type Alias DataManagerForAgricultureResourcesListBySubscriptionResponse
  - Added Type Alias DataManagerForAgricultureResourcesUpdateResponse
  - Added Type Alias ExtensionsCreateOrUpdateResponse
  - Added Type Alias ExtensionsListByDataManagerForAgricultureNextResponse
  - Added Type Alias ExtensionsListByDataManagerForAgricultureResponse
  - Added Type Alias OperationResultsGetResponse
  - Added Type Alias SolutionsCreateOrUpdateResponse
  - Added Type Alias SolutionsDiscoverabilityGetResponse
  - Added Type Alias SolutionsDiscoverabilityListNextResponse
  - Added Type Alias SolutionsDiscoverabilityListResponse
  - Added Type Alias SolutionsGetResponse
  - Added Type Alias SolutionsListNextResponse
  - Added Type Alias SolutionsListResponse
  - Interface ArmAsyncOperation has a new optional parameter error
  - Interface DetailedInformation has a new optional parameter apiDefaultInputParameters
  - Interface DetailedInformation has a new optional parameter apiDocsLink
  - Interface DetailedInformation has a new optional parameter apiType
  - Interface Extension has a new optional parameter additionalApiProperties
  - Interface ExtensionListResponse has a new optional parameter skipToken
  - Interface PrivateEndpointConnection has a new optional parameter groupIds
  - Enum KnownProvisioningState has a new value Running
  - Enum KnownPublicNetworkAccess has a new value Disabled

**Breaking Changes**

  - Removed operation group FarmBeatsExtensions
  - Removed operation group FarmBeatsModels
  - Removed operation group Locations
  - Removed operation Extensions.create
  - Removed operation Extensions.listByFarmBeats
  - Removed operation Extensions.update
  - Parameter value of interface ExtensionListResponse is now required
  - Class AgriFoodMgmtClient no longer has parameter farmBeatsExtensions
  - Class AgriFoodMgmtClient no longer has parameter farmBeatsModels
  - Class AgriFoodMgmtClient no longer has parameter locations
  - Enum KnownPublicNetworkAccess no longer has value Hybrid
    
    
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
