# Release History
    
## 1.0.0-beta.2 (2025-03-25)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added Interface ErrorResponse
  - Added Type Alias AuthorizationScopeFilter
  - Interface ExportQuery has a new optional parameter authorizationScopeFilter
  - Interface ExportQuery has a new optional parameter table
  - Interface ExportResult has a new optional parameter import
  - Added Enum KnownAuthorizationScopeFilter
  - Enum KnownTargetProvider has a new value Azapi
  - Enum KnownTargetProvider has a new value Azurerm
  - Enum KnownVersions has a new value V20230701Preview

### Breaking Changes

  - Enum KnownTargetProvider no longer has value azapi
  - Enum KnownTargetProvider no longer has value azurerm
  - Enum KnownVersions no longer has value v2023_07_01_preview
    
    
## 1.0.0-beta.1 (2024-11-18)

### Features Added

Initial release of the Azure AzureTerraform Package.
