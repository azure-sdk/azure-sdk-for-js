# Release History
    
## 5.1.0-beta.1 (2022-05-05)
    
**Features**

  - Added operation group ApplicationGroupOperations
  - Added operation group NetworkSecurityPerimeterConfigurationOperations
  - Added operation group NetworkSecurityPerimeterConfigurations
  - Added Interface ApplicationGroupCreateOrUpdateApplicationGroupOptionalParams
  - Added Interface ApplicationGroupDeleteOptionalParams
  - Added Interface ApplicationGroupGetOptionalParams
  - Added Interface ApplicationGroupListByNamespaceNextOptionalParams
  - Added Interface ApplicationGroupListByNamespaceOptionalParams
  - Added Interface ApplicationGroupListResult
  - Added Interface ApplicationGroupPolicy
  - Added Interface NetworkSecurityPerimeter
  - Added Interface NetworkSecurityPerimeterConfigurationList
  - Added Interface NetworkSecurityPerimeterConfigurationListOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationPropertiesProfile
  - Added Interface NetworkSecurityPerimeterConfigurationPropertiesResourceAssociation
  - Added Interface NetworkSecurityPerimeterConfigurationsCreateOrUpdateOptionalParams
  - Added Interface NspAccessRule
  - Added Interface NspAccessRuleProperties
  - Added Interface NspAccessRulePropertiesSubscriptionsItem
  - Added Interface ProvisioningIssue
  - Added Interface ProvisioningIssueProperties
  - Added Type Alias ApplicationGroup
  - Added Type Alias ApplicationGroupCreateOrUpdateApplicationGroupResponse
  - Added Type Alias ApplicationGroupGetResponse
  - Added Type Alias ApplicationGroupListByNamespaceNextResponse
  - Added Type Alias ApplicationGroupListByNamespaceResponse
  - Added Type Alias ApplicationGroupPolicyType
  - Added Type Alias ApplicationGroupPolicyUnion
  - Added Type Alias MetricId
  - Added Type Alias NetworkSecurityPerimeterConfiguration
  - Added Type Alias NetworkSecurityPerimeterConfigurationListResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationProvisioningState
  - Added Type Alias NspAccessRuleDirection
  - Added Type Alias PublicNetworkAccess
  - Added Type Alias ResourceAssociationAccessMode
  - Added Type Alias ThrottlingPolicy
  - Added Type Alias TlsVersion
  - Class EventHubManagementClient has a new parameter applicationGroupOperations
  - Class EventHubManagementClient has a new parameter networkSecurityPerimeterConfigurationOperations
  - Class EventHubManagementClient has a new parameter networkSecurityPerimeterConfigurations
  - Type Alias Cluster has a new parameter supportsScaling
  - Type Alias EHNamespace has a new parameter minimumTlsVersion
  - Type Alias EHNamespace has a new parameter publicNetworkAccess
  - Added Enum KnownApplicationGroupPolicyType
  - Added Enum KnownMetricId
  - Added Enum KnownNetworkSecurityPerimeterConfigurationProvisioningState
  - Added Enum KnownNspAccessRuleDirection
  - Added Enum KnownPublicNetworkAccess
  - Added Enum KnownResourceAssociationAccessMode
  - Added Enum KnownTlsVersion
  - Enum KnownPublicNetworkAccessFlag has a new value SecuredByPerimeter
    
## 5.0.1 (2022-04-18)

**features**

  - Bug fix

## 5.0.0 (2021-12-09)

The package of @azure/arm-eventhub is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
