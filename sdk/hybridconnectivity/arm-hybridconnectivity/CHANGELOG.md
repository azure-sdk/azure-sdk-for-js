# Release History
    
## 2.0.0 (2025-01-15)
    
### Features Added

  - Added operation group GenerateAwsTemplateOperations
  - Added operation group InventoryOperations
  - Added operation group PublicCloudConnectorsOperations
  - Added operation group SolutionConfigurationsOperations
  - Added operation group SolutionTypesOperations
  - Added Interface AADProfileProperties
  - Added Interface AwsCloudProfile
  - Added Interface ExtensionResource
  - Added Interface GenerateAwsTemplatePostOptionalParams
  - Added Interface GenerateAwsTemplateRequest
  - Added Interface HybridConnectivityManagementAPIClientOptionalParams
  - Added Interface IngressProfileProperties
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
  - Added Interface RelayNamespaceAccessProperties
  - Added Interface RestorePollerOptions
  - Added Interface ServiceConfigurationProperties
  - Added Interface ServiceConfigurationPropertiesPatch
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
  - Added Class HybridConnectivityManagementAPIClient
  - Added Type Alias CloudNativeType
  - Added Type Alias ContinuablePage
  - Added Type Alias HostType
  - Added Type Alias ResourceProvisioningState
  - Added Type Alias SolutionConfigurationStatus
  - Interface EndpointAccessResource has a new optional parameter relay
  - Interface IngressGatewayResource has a new optional parameter ingress
  - Interface IngressGatewayResource has a new optional parameter relay
  - Interface ServiceConfigurationResource has a new optional parameter properties
  - Interface ServiceConfigurationResourcePatch has a new optional parameter properties
  - Added Enum KnownCloudNativeType
  - Added Enum KnownHostType
  - Added Enum KnownResourceProvisioningState
  - Added Enum KnownSolutionConfigurationStatus
  - Added Enum KnownVersions
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownType has a new value custom
  - Enum KnownType has a new value "default"
  - Added function restorePoller

### Breaking Changes

  - Deleted Class HybridConnectivityManagementAPI
  - Interface EndpointAccessResource no longer has parameter accessKey
  - Interface EndpointAccessResource no longer has parameter expiresOn
  - Interface EndpointAccessResource no longer has parameter hybridConnectionName
  - Interface EndpointAccessResource no longer has parameter namespaceName
  - Interface EndpointAccessResource no longer has parameter namespaceNameSuffix
  - Interface EndpointAccessResource no longer has parameter serviceConfigurationToken
  - Interface EndpointsListIngressGatewayCredentialsOptionalParams no longer has parameter listIngressGatewayCredentialsRequest
  - Interface IngressGatewayResource no longer has parameter accessKey
  - Interface IngressGatewayResource no longer has parameter expiresOn
  - Interface IngressGatewayResource no longer has parameter hostname
  - Interface IngressGatewayResource no longer has parameter hybridConnectionName
  - Interface IngressGatewayResource no longer has parameter namespaceName
  - Interface IngressGatewayResource no longer has parameter namespaceNameSuffix
  - Interface IngressGatewayResource no longer has parameter serverId
  - Interface IngressGatewayResource no longer has parameter serviceConfigurationToken
  - Interface IngressGatewayResource no longer has parameter tenantId
  - Interface ServiceConfigurationResource no longer has parameter port
  - Interface ServiceConfigurationResource no longer has parameter provisioningState
  - Interface ServiceConfigurationResource no longer has parameter resourceId
  - Interface ServiceConfigurationResource no longer has parameter serviceName
  - Interface ServiceConfigurationResourcePatch no longer has parameter port
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownType no longer has value Custom
  - Enum KnownType no longer has value Default
  - Removed function getContinuationToken
    
    
## 1.0.0 (2023-09-11)

The package of @azure/arm-hybridconnectivity is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
