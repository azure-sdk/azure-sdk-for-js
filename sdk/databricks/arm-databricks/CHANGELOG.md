# Release History
    
## 4.0.0-beta.1 (2025-03-31)
Compared with version 3.0.0
    
### Features Added

  - Added Interface AutomaticClusterUpdateDefinition
  - Added Interface ComplianceSecurityProfileDefinition
  - Added Interface DefaultCatalogProperties
  - Added Interface EnhancedSecurityComplianceDefinition
  - Added Interface EnhancedSecurityMonitoringDefinition
  - Added Interface WorkspaceNoPublicIPBooleanParameter
  - Added Interface WorkspacePropertiesAccessConnector
  - Added Type Alias AutomaticClusterUpdateValue
  - Added Type Alias ComplianceSecurityProfileValue
  - Added Type Alias ComplianceStandard
  - Added Type Alias DefaultStorageFirewall
  - Added Type Alias EnhancedSecurityMonitoringValue
  - Added Type Alias IdentityType
  - Added Type Alias InitialType
  - Interface AccessConnectorProperties has a new optional parameter referedBy
  - Interface AzureDatabricksManagementClientOptionalParams has a new optional parameter apiVersion
  - Interface Workspace has a new optional parameter accessConnector
  - Interface Workspace has a new optional parameter defaultCatalog
  - Interface Workspace has a new optional parameter defaultStorageFirewall
  - Interface Workspace has a new optional parameter enhancedSecurityCompliance
  - Interface Workspace has a new optional parameter isUcEnabled
  - Interface WorkspacesDeleteOptionalParams has a new optional parameter forceDeletion
  - Added Enum KnownAutomaticClusterUpdateValue
  - Added Enum KnownComplianceSecurityProfileValue
  - Added Enum KnownComplianceStandard
  - Added Enum KnownDefaultStorageFirewall
  - Added Enum KnownEnhancedSecurityMonitoringValue
  - Added Enum KnownIdentityType
  - Added Enum KnownInitialType

### Breaking Changes

  - Type of parameter enableNoPublicIp of interface WorkspaceCustomParameters is changed from WorkspaceCustomBooleanParameter to WorkspaceNoPublicIPBooleanParameter
    
    
## 3.0.0 (2023-11-02)

The package of @azure/arm-databricks is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
