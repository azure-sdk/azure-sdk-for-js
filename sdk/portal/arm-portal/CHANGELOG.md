# Release History
    
## 1.0.0-beta.6 (2025-03-07)
Compared with version 1.0.0-beta.5
    
### Features Added

  - Added Interface ConfigurationListResult
  - Added Interface ConfigurationProperties
  - Added Interface DashboardProperties
  - Added Interface DashboardPropertiesWithProvisioningState
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface Operation
  - Added Interface OperationDisplay
  - Added Interface OperationListResult
  - Added Interface SystemData
  - Added Interface TrackedResource
  - Added Type Alias ActionType
  - Added Type Alias CreatedByType
  - Added Type Alias DashboardPartMetadataType
  - Added Type Alias Origin
  - Added Type Alias ResourceProvisioningState
  - Interface Configuration has a new optional parameter properties
  - Interface Dashboard has a new optional parameter properties
  - Interface MarkdownPartMetadataSettingsContent has a new optional parameter content
  - Interface MarkdownPartMetadataSettingsContent has a new optional parameter markdownSource
  - Interface MarkdownPartMetadataSettingsContent has a new optional parameter markdownUri
  - Interface MarkdownPartMetadataSettingsContent has a new optional parameter subtitle
  - Interface MarkdownPartMetadataSettingsContent has a new optional parameter title
  - Interface PatchableDashboard has a new optional parameter properties
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownActionType
  - Added Enum KnownCreatedByType
  - Added Enum KnownDashboardPartMetadataType
  - Added Enum KnownOrigin
  - Added Enum KnownResourceProvisioningState

### Breaking Changes

  - Operation TenantConfigurations.create has a new signature
  - Operation TenantConfigurations.delete has a new signature
  - Operation TenantConfigurations.get has a new signature
  - Class Portal has a new signature
  - Interface Configuration no longer has parameter enforcePrivateMarkdownStorage
  - Interface Dashboard no longer has parameter id
  - Interface Dashboard no longer has parameter lenses
  - Interface Dashboard no longer has parameter metadata
  - Interface Dashboard no longer has parameter name
  - Interface Dashboard no longer has parameter type
  - Interface MarkdownPartMetadataSettingsContent no longer has parameter settings
  - Interface PatchableDashboard no longer has parameter lenses
  - Interface PatchableDashboard no longer has parameter metadata
  - Parameter value of interface DashboardListResult is now required
  - Parameter value of interface ViolationsList is now required
  - Type of parameter metadata of interface DashboardLens is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to Record<string, unknown>
  - Type of parameter metadata of interface DashboardPartsPosition is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to Record<string, unknown>
  - Type of parameter error of interface ErrorResponse is changed from ErrorDefinition to ErrorDetail
  - Removed Enum KnownConfigurationName
    
## 1.0.0-beta.5 (2023-02-02)

### Features Added

  - Exposes `getContinuationToken` helper function to extract continuation token

### Bugs Fixed

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 1.0.0-beta.4 (2022-07-08)
    
### Features Added

  - Added Interface Configuration
  - Added Interface MarkdownPartMetadata
  - Added Interface ProxyResource
    
## 1.0.0-beta.3 (2022-04-28)

### Features Added

  - Bug fix

## 1.0.0-beta.2 (2021-11-30)

The package of @azure/arm-portal is using our next generation design principles since version 1.0.0-beta.2, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
