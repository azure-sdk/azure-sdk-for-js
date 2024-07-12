# Release History
    
## 5.0.0-beta.1 (2024-07-12)
Compared with version 4.0.0
    
**Features**

  - Added operation group NetworkSecurityPerimeterConfigurations
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface NetworkSecurityPerimeter
  - Added Interface NetworkSecurityPerimeterConfiguration
  - Added Interface NetworkSecurityPerimeterConfigurationList
  - Added Interface NetworkSecurityPerimeterConfigurationProperties
  - Added Interface NetworkSecurityPerimeterConfigurationsGetOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsListNextOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsListOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsReconcileHeaders
  - Added Interface NetworkSecurityPerimeterConfigurationsReconcileOptionalParams
  - Added Interface NspAccessRule
  - Added Interface NspAccessRuleProperties
  - Added Interface NspAccessRulePropertiesSubscriptionsItem
  - Added Interface Profile
  - Added Interface ProvisioningIssue
  - Added Interface ProvisioningIssueProperties
  - Added Interface ResourceAssociation
  - Added Type Alias AccessMode
  - Added Type Alias NetworkSecurityPerimeterConfigurationsGetResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsListNextResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsListResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsReconcileResponse
  - Added Type Alias NspAccessRuleDirection
  - Added Type Alias ProvisioningState
  - Added Type Alias Severity
  - Interface BotProperties has a new optional parameter networkSecurityPerimeterConfigurations
  - Interface ConnectionSettingProperties has a new optional parameter id
  - Interface ConnectionSettingProperties has a new optional parameter name
  - Added Enum KnownAccessMode
  - Added Enum KnownNspAccessRuleDirection
  - Added Enum KnownProvisioningState
  - Added Enum KnownSeverity
  - Enum KnownPublicNetworkAccess has a new value SecuredByPerimeter

**Breaking Changes**

  - Class AzureBotService has a new signature
    
    
## 4.0.0 (2023-01-16)

The package of @azure/arm-botservice is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
