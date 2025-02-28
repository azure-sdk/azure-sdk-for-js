# Release History
    
## 2.0.0 (2025-02-28)
    
### Features Added

  - Added operation OrganizationsOperations.createOrUpdate
  - Added operation OrganizationsOperations.delete
  - Added operation ServerlessRuntimesOperations.createOrUpdate
  - Added operation ServerlessRuntimesOperations.delete
  - Added Interface DataManagementClientOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Class DataManagementClient
  - Added Type Alias ContinuablePage
  - Added Enum KnownVersions
  - Enum KnownApplicationType has a new value CDIE
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownPlatformType has a new value AZURE
  - Enum KnownRuntimeType has a new value SERVERLESS
  - Added function restorePoller

### Breaking Changes

  - Removed operation Organizations.beginCreateOrUpdate
  - Removed operation Organizations.beginCreateOrUpdateAndWait
  - Removed operation Organizations.beginDelete
  - Removed operation Organizations.beginDeleteAndWait
  - Removed operation ServerlessRuntimes.beginCreateOrUpdate
  - Removed operation ServerlessRuntimes.beginCreateOrUpdateAndWait
  - Removed operation ServerlessRuntimes.beginDelete
  - Removed operation ServerlessRuntimes.beginDeleteAndWait
  - Deleted Class InformaticaDataManagement
  - Interface OrganizationsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface OrganizationsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface ServerlessRuntimesCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ServerlessRuntimesDeleteOptionalParams no longer has parameter resumeFrom
  - Parameter networkInterfaceConfiguration of interface ServerlessRuntimeNetworkProfileUpdate is now required
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter tags of interface InformaticaOrganizationResourceUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Enum KnownApplicationType no longer has value Cdie
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownPlatformType no longer has value Azure
  - Enum KnownRuntimeType no longer has value Serverless
  - Removed function getContinuationToken
    
    
## 1.0.0 (2024-07-15)

### Features Added

The package of @azure/arm-informaticadatamanagement is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
