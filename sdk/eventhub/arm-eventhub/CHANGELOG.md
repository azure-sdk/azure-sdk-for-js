# Release History
    
## 5.1.0-beta.1 (2022-09-26)
    
**Features**

  - Added operation group ApplicationGroupOperations
  - Added operation group NetworkSecurityPerimeterConfigurationOperations
  - Added operation group NetworkSecurityPerimeterConfigurations
  - Added Interface ApplicationGroup
  - Added Interface ApplicationGroupCreateOrUpdateApplicationGroupOptionalParams
  - Added Interface ApplicationGroupDeleteOptionalParams
  - Added Interface ApplicationGroupGetOptionalParams
  - Added Interface ApplicationGroupListByNamespaceNextOptionalParams
  - Added Interface ApplicationGroupListByNamespaceOptionalParams
  - Added Interface ApplicationGroupListResult
  - Added Interface ApplicationGroupPolicy
  - Added Interface ArmDisasterRecovery
  - Added Interface AuthorizationRule
  - Added Interface Cluster
  - Added Interface ConsumerGroup
  - Added Interface EHNamespace
  - Added Interface Eventhub
  - Added Interface NetworkRuleSet
  - Added Interface NetworkSecurityPerimeter
  - Added Interface NetworkSecurityPerimeterConfiguration
  - Added Interface NetworkSecurityPerimeterConfigurationList
  - Added Interface NetworkSecurityPerimeterConfigurationListOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationPropertiesProfile
  - Added Interface NetworkSecurityPerimeterConfigurationPropertiesResourceAssociation
  - Added Interface NetworkSecurityPerimeterConfigurationsCreateOrUpdateOptionalParams
  - Added Interface NspAccessRule
  - Added Interface NspAccessRuleProperties
  - Added Interface NspAccessRulePropertiesSubscriptionsItem
  - Added Interface PrivateEndpointConnection
  - Added Interface ProvisioningIssue
  - Added Interface ProvisioningIssueProperties
  - Added Interface SchemaGroup
  - Added Interface ThrottlingPolicy
  - Added Interface TrackedResource
  - Added Type Alias ApplicationGroupCreateOrUpdateApplicationGroupResponse
  - Added Type Alias ApplicationGroupGetResponse
  - Added Type Alias ApplicationGroupListByNamespaceNextResponse
  - Added Type Alias ApplicationGroupListByNamespaceResponse
  - Added Type Alias ApplicationGroupPolicyType
  - Added Type Alias ApplicationGroupPolicyUnion
  - Added Type Alias MetricId
  - Added Type Alias NetworkSecurityPerimeterConfigurationListResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationProvisioningState
  - Added Type Alias NspAccessRuleDirection
  - Added Type Alias PublicNetworkAccess
  - Added Type Alias ResourceAssociationAccessMode
  - Added Type Alias TlsVersion
  - Class EventHubManagementClient has a new parameter applicationGroupOperations
  - Class EventHubManagementClient has a new parameter networkSecurityPerimeterConfigurationOperations
  - Class EventHubManagementClient has a new parameter networkSecurityPerimeterConfigurations
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
