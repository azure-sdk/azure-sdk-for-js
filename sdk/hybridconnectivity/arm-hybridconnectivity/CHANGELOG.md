# Release History
    
## 2.0.0 (2023-11-30)
    
**Features**

  - Added operation group Serviceconfigurations
  - Added Interface ServiceconfigurationsCreateOptionalParams
  - Added Interface ServiceconfigurationsDeleteOptionalParams
  - Added Interface ServiceconfigurationsGetOptionalParams
  - Added Interface ServiceconfigurationsListByEndpointResourceNextOptionalParams
  - Added Interface ServiceconfigurationsListByEndpointResourceOptionalParams
  - Added Interface ServiceconfigurationsUpdateOptionalParams
  - Added Type Alias Result
  - Added Type Alias ServiceconfigurationsCreateResponse
  - Added Type Alias ServiceconfigurationsGetResponse
  - Added Type Alias ServiceconfigurationsListByEndpointResourceNextResponse
  - Added Type Alias ServiceconfigurationsListByEndpointResourceResponse
  - Added Type Alias ServiceconfigurationsUpdateResponse
  - Interface EndpointResource has a new optional parameter createdAt
  - Interface EndpointResource has a new optional parameter createdBy
  - Interface EndpointResource has a new optional parameter createdByType
  - Interface EndpointResource has a new optional parameter lastModifiedAt
  - Interface EndpointResource has a new optional parameter lastModifiedBy
  - Interface EndpointResource has a new optional parameter lastModifiedByType
  - Interface EndpointResource has a new optional parameter provisioningState
  - Interface EndpointResource has a new optional parameter resourceId
  - Interface EndpointResource has a new optional parameter typePropertiesType
  - Interface ServiceConfigurationResource has a new optional parameter createdAt
  - Interface ServiceConfigurationResource has a new optional parameter createdBy
  - Interface ServiceConfigurationResource has a new optional parameter createdByType
  - Interface ServiceConfigurationResource has a new optional parameter lastModifiedAt
  - Interface ServiceConfigurationResource has a new optional parameter lastModifiedBy
  - Interface ServiceConfigurationResource has a new optional parameter lastModifiedByType
  - Interface ServiceConfigurationResourcePatch has a new optional parameter createdAt
  - Interface ServiceConfigurationResourcePatch has a new optional parameter createdBy
  - Interface ServiceConfigurationResourcePatch has a new optional parameter createdByType
  - Interface ServiceConfigurationResourcePatch has a new optional parameter lastModifiedAt
  - Interface ServiceConfigurationResourcePatch has a new optional parameter lastModifiedBy
  - Interface ServiceConfigurationResourcePatch has a new optional parameter lastModifiedByType
  - Added Enum KnownResult
  - Enum KnownServiceName has a new value Sqlmgmt

**Breaking Changes**

  - Removed operation group ServiceConfigurations
  - Interface EndpointResource no longer has parameter properties
  - Interface EndpointsListIngressGatewayCredentialsOptionalParams no longer has parameter listIngressGatewayCredentialsRequest
  - Interface Resource no longer has parameter systemData
  - Type of parameter port of interface ServiceConfigurationResource is changed from number to string
  - Type of parameter provisioningState of interface ServiceConfigurationResource is changed from ProvisioningState to Result
  - Type of parameter port of interface ServiceConfigurationResourcePatch is changed from number to string
  - Class HybridConnectivityManagementAPI no longer has parameter serviceConfigurations
  - Removed Enum KnownProvisioningState
    
    
## 1.0.0 (2023-09-11)

The package of @azure/arm-hybridconnectivity is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
