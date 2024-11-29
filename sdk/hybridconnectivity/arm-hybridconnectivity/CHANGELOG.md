# Release History
    
## 2.0.0 (2024-11-29)
    
### Features Added

  - Added operation group GenerateAwsTemplateOperations
  - Added operation group InventoryOperations
  - Added operation group PublicCloudConnectorsOperations
  - Added operation group SolutionConfigurationsOperations
  - Added operation group SolutionTypesOperations
  - Added Interface AwsCloudProfile
  - Added Interface ExtensionResource
  - Added Interface GenerateAwsTemplatePostOptionalParams
  - Added Interface GenerateAwsTemplateRequest
  - Added Interface HybridConnectivityClientOptionalParams
  - Added Interface InventoryGetOptionalParams
  - Added Interface InventoryListBySolutionConfigurationOptionalParams
  - Added Interface InventoryProperties
  - Added Interface InventoryResource
  - Added Interface OperationStatusResult
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface PublicCloudConnector
  - Added Interface PublicCloudConnectorProperties
  - Added Interface PublicCloudConnectorsCreateOrUpdateOptionalParams
  - Added Interface PublicCloudConnectorsDeleteOptionalParams
  - Added Interface PublicCloudConnectorsGetOptionalParams
  - Added Interface PublicCloudConnectorsListByResourceGroupOptionalParams
  - Added Interface PublicCloudConnectorsListBySubscriptionOptionalParams
  - Added Interface PublicCloudConnectorsTestPermissionsOptionalParams
  - Added Interface PublicCloudConnectorsUpdateOptionalParams
  - Added Interface RestorePollerOptions
  - Added Interface SolutionConfiguration
  - Added Interface SolutionConfigurationProperties
  - Added Interface SolutionConfigurationsCreateOrUpdateOptionalParams
  - Added Interface SolutionConfigurationsDeleteOptionalParams
  - Added Interface SolutionConfigurationsGetOptionalParams
  - Added Interface SolutionConfigurationsListOptionalParams
  - Added Interface SolutionConfigurationsSyncNowOptionalParams
  - Added Interface SolutionConfigurationsUpdateOptionalParams
  - Added Interface SolutionSettings
  - Added Interface SolutionTypeProperties
  - Added Interface SolutionTypeResource
  - Added Interface SolutionTypeSettings
  - Added Interface SolutionTypeSettingsProperties
  - Added Interface SolutionTypesGetOptionalParams
  - Added Interface SolutionTypesListByResourceGroupOptionalParams
  - Added Interface SolutionTypesListBySubscriptionOptionalParams
  - Added Interface TrackedResource
  - Added Class HybridConnectivityClient
  - Added Type Alias CloudNativeType
  - Added Type Alias ContinuablePage
  - Added Type Alias HostType
  - Added Type Alias ResourceProvisioningState
  - Added Type Alias SolutionConfigurationStatus
  - Added Enum KnownCloudNativeType
  - Added Enum KnownHostType
  - Added Enum KnownResourceProvisioningState
  - Added Enum KnownSolutionConfigurationStatus
  - Added Enum KnownVersions
  - Added function restorePoller

### Breaking Changes

  - Removed operation group Endpoints
  - Removed operation group Operations
  - Removed operation group ServiceConfigurations
  - Deleted Class HybridConnectivityManagementAPI
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Removed Enum KnownActionType
  - Removed Enum KnownOrigin
  - Removed Enum KnownProvisioningState
  - Removed Enum KnownServiceName
  - Removed Enum KnownType
  - Removed function getContinuationToken
    
    
## 1.0.0 (2023-09-11)

The package of @azure/arm-hybridconnectivity is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
