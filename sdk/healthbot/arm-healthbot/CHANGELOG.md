# Release History
    
## 3.0.0 (2025-05-09)
    
### Features Added

  - Added operation group HealthBotsOperations
  - Added Interface ErrorDetail
  - Added Interface HealthBotClientOptionalParams
  - Added Interface HealthBotKey
  - Added Interface HealthBotKeysResponse
  - Added Interface HealthBotsCreateOptionalParams
  - Added Interface HealthBotsDeleteOptionalParams
  - Added Interface HealthBotsGetOptionalParams
  - Added Interface HealthBotsListByResourceGroupOptionalParams
  - Added Interface HealthBotsListOptionalParams
  - Added Interface HealthBotsListSecretsOptionalParams
  - Added Interface HealthBotsRegenerateApiJwtSecretOptionalParams
  - Added Interface HealthBotsUpdateOptionalParams
  - Added Interface KeyVaultProperties
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Interface UserAssignedIdentityMap
  - Added Class HealthBotClient
  - Added Type Alias ContinuablePage
  - Added Type Alias CreatedByType
  - Interface HealthBotProperties has a new optional parameter keyVaultProperties
  - Interface HealthBotUpdateParameters has a new optional parameter properties
  - Added Enum KnownCreatedByType
  - Added Enum KnownVersions
  - Added function restorePoller

### Breaking Changes

  - Removed operation group AvailableOperations
  - Removed operation group Bots
  - Deleted Class HealthbotClient
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter error of interface ErrorModel is changed from ErrorError to ErrorDetail
  - Type of parameter tags of interface HealthBotUpdateParameters is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter userAssignedIdentities of interface Identity is changed from {
        [propertyName: string]: UserAssignedIdentity;
    } to UserAssignedIdentityMap
  - Type of parameter properties of interface OperationDetail is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter createdByType of interface SystemData is changed from IdentityType to CreatedByType
  - Type of parameter lastModifiedByType of interface SystemData is changed from IdentityType to CreatedByType
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Removed Enum KnownIdentityType
  - Removed function getContinuationToken
    
    
## 2.1.0 (2022-11-25)
    
### Features Added

  - Added Interface HealthBot
  - Added Interface TrackedResource
    
    
## 2.0.0 (2022-01-13)

The package of @azure/arm-healthbot is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
