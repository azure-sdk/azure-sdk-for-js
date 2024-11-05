# Release History
    
## 2.0.0-beta.1 (2024-11-05)
Compared with version 1.0.0
    
### Features Added

  - Added operation group SecurityPoliciesInterfaceOperations
  - Added operation AssociationsInterfaceOperations.createOrUpdate
  - Added operation AssociationsInterfaceOperations.delete
  - Added operation FrontendsInterfaceOperations.createOrUpdate
  - Added operation FrontendsInterfaceOperations.delete
  - Added operation TrafficControllerInterfaceOperations.createOrUpdate
  - Added operation TrafficControllerInterfaceOperations.delete
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Interface SecurityPoliciesInterfaceCreateOrUpdateOptionalParams
  - Added Interface SecurityPoliciesInterfaceDeleteOptionalParams
  - Added Interface SecurityPoliciesInterfaceGetOptionalParams
  - Added Interface SecurityPoliciesInterfaceListByTrafficControllerOptionalParams
  - Added Interface SecurityPoliciesInterfaceUpdateOptionalParams
  - Added Interface SecurityPolicy
  - Added Interface SecurityPolicyConfigurations
  - Added Interface SecurityPolicyProperties
  - Added Interface SecurityPolicyUpdate
  - Added Interface SecurityPolicyUpdateProperties
  - Added Interface ServiceNetworkingClientOptionalParams
  - Added Interface TrafficControllerUpdateProperties
  - Added Interface WafPolicy
  - Added Interface WafSecurityPolicy
  - Added Class ServiceNetworkingClient
  - Added Type Alias ContinuablePage
  - Added Type Alias PolicyType
  - Added Type Alias Versions
  - Interface TrafficControllerProperties has a new optional parameter securityPolicies
  - Interface TrafficControllerProperties has a new optional parameter securityPolicyConfigurations
  - Interface TrafficControllerUpdate has a new optional parameter properties
  - Added Enum KnownPolicyType
  - Enum KnownAssociationType has a new value subnets
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Added function restorePoller

### Breaking Changes

  - Removed operation AssociationsInterface.beginCreateOrUpdate
  - Removed operation AssociationsInterface.beginCreateOrUpdateAndWait
  - Removed operation AssociationsInterface.beginDelete
  - Removed operation AssociationsInterface.beginDeleteAndWait
  - Removed operation FrontendsInterface.beginCreateOrUpdate
  - Removed operation FrontendsInterface.beginCreateOrUpdateAndWait
  - Removed operation FrontendsInterface.beginDelete
  - Removed operation FrontendsInterface.beginDeleteAndWait
  - Removed operation TrafficControllerInterface.beginCreateOrUpdate
  - Removed operation TrafficControllerInterface.beginCreateOrUpdateAndWait
  - Removed operation TrafficControllerInterface.beginDelete
  - Removed operation TrafficControllerInterface.beginDeleteAndWait
  - Deleted Class ServiceNetworkingManagementClient
  - Interface AssociationsInterfaceCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface AssociationsInterfaceDeleteOptionalParams no longer has parameter resumeFrom
  - Interface FrontendsInterfaceCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface FrontendsInterfaceDeleteOptionalParams no longer has parameter resumeFrom
  - Interface TrafficControllerInterfaceCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface TrafficControllerInterfaceDeleteOptionalParams no longer has parameter resumeFrom
  - Type of parameter tags of interface AssociationUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter subnet of interface AssociationUpdateProperties is changed from AssociationSubnetUpdate to AssociationSubnet
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter tags of interface FrontendUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface TrafficControllerUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Enum KnownAssociationType no longer has value Subnets
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Removed function getContinuationToken
    
    
## 1.1.0-beta.1 (2024-08-22)
Compared with version 1.0.0
    
### Features Added

  - Added operation group SecurityPoliciesInterface
  - Added Interface SecurityPoliciesInterfaceCreateOrUpdateHeaders
  - Added Interface SecurityPoliciesInterfaceCreateOrUpdateOptionalParams
  - Added Interface SecurityPoliciesInterfaceDeleteHeaders
  - Added Interface SecurityPoliciesInterfaceDeleteOptionalParams
  - Added Interface SecurityPoliciesInterfaceGetOptionalParams
  - Added Interface SecurityPoliciesInterfaceListByTrafficControllerNextOptionalParams
  - Added Interface SecurityPoliciesInterfaceListByTrafficControllerOptionalParams
  - Added Interface SecurityPoliciesInterfaceUpdateOptionalParams
  - Added Interface SecurityPolicy
  - Added Interface SecurityPolicyConfigurations
  - Added Interface SecurityPolicyConfigurationsUpdate
  - Added Interface SecurityPolicyListResult
  - Added Interface SecurityPolicyProperties
  - Added Interface SecurityPolicyUpdate
  - Added Interface SecurityPolicyUpdateProperties
  - Added Interface TrafficControllerUpdateProperties
  - Added Interface WafPolicy
  - Added Interface WafPolicyUpdate
  - Added Interface WafSecurityPolicy
  - Added Interface WafSecurityPolicyUpdate
  - Added Type Alias AssociationsInterfaceDeleteResponse
  - Added Type Alias FrontendsInterfaceDeleteResponse
  - Added Type Alias PolicyType
  - Added Type Alias SecurityPoliciesInterfaceCreateOrUpdateResponse
  - Added Type Alias SecurityPoliciesInterfaceDeleteResponse
  - Added Type Alias SecurityPoliciesInterfaceGetResponse
  - Added Type Alias SecurityPoliciesInterfaceListByTrafficControllerNextResponse
  - Added Type Alias SecurityPoliciesInterfaceListByTrafficControllerResponse
  - Added Type Alias SecurityPoliciesInterfaceUpdateResponse
  - Added Type Alias TrafficControllerInterfaceDeleteResponse
  - Interface TrafficControllerProperties has a new optional parameter securityPolicies
  - Interface TrafficControllerProperties has a new optional parameter securityPolicyConfigurations
  - Interface TrafficControllerUpdate has a new optional parameter properties
  - Added Enum KnownPolicyType
    
    
## 1.0.0 (2023-11-21)

The package of @azure/arm-servicenetworking is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
