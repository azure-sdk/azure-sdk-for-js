# Release History
    
## 2.0.0 (2024-12-10)
    
### Features Added

  - Added Interface AADProfileProperties
  - Added Interface ExtensionResource
  - Added Interface HybridConnectivityManagementAPIClientOptionalParams
  - Added Interface IngressProfileProperties
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RelayNamespaceAccessProperties
  - Added Interface ServiceConfigurationProperties
  - Added Interface ServiceConfigurationPropertiesPatch
  - Added Class HybridConnectivityManagementAPIClient
  - Added Type Alias ContinuablePage
  - Interface EndpointAccessResource has a new optional parameter relay
  - Interface IngressGatewayResource has a new optional parameter ingress
  - Interface IngressGatewayResource has a new optional parameter relay
  - Interface ServiceConfigurationResource has a new optional parameter properties
  - Interface ServiceConfigurationResourcePatch has a new optional parameter properties
  - Added Enum KnownVersions
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownType has a new value custom
  - Enum KnownType has a new value "default"

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
