# Release History
    
## 2.0.0 (2024-11-29)
    
### Features Added

  - Added operation DataProductsOperations.create
  - Added operation DataProductsOperations.delete
  - Added operation DataProductsOperations.update
  - Added operation DataTypesOperations.create
  - Added operation DataTypesOperations.delete
  - Added operation DataTypesOperations.deleteData
  - Added operation DataTypesOperations.update
  - Added Interface ManagedServiceIdentityV4
  - Added Interface NetworkAnalyticsClientOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Class NetworkAnalyticsClient
  - Added Type Alias ContinuablePage
  - Enum KnownManagedServiceIdentityType has a new value SystemAndUserAssigned
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownVersions has a new value v2023_11_15
  - Added function restorePoller

### Breaking Changes

  - Removed operation DataProducts.beginCreate
  - Removed operation DataProducts.beginCreateAndWait
  - Removed operation DataProducts.beginDelete
  - Removed operation DataProducts.beginDeleteAndWait
  - Removed operation DataProducts.beginUpdate
  - Removed operation DataProducts.beginUpdateAndWait
  - Removed operation DataTypes.beginCreate
  - Removed operation DataTypes.beginCreateAndWait
  - Removed operation DataTypes.beginDelete
  - Removed operation DataTypes.beginDeleteAndWait
  - Removed operation DataTypes.beginDeleteData
  - Removed operation DataTypes.beginDeleteDataAndWait
  - Removed operation DataTypes.beginUpdate
  - Removed operation DataTypes.beginUpdateAndWait
  - Deleted Class MicrosoftNetworkAnalytics
  - Interface DataProductsCreateOptionalParams no longer has parameter resumeFrom
  - Interface DataProductsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface DataProductsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface DataTypesCreateOptionalParams no longer has parameter resumeFrom
  - Interface DataTypesDeleteDataOptionalParams no longer has parameter resumeFrom
  - Interface DataTypesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface DataTypesUpdateOptionalParams no longer has parameter resumeFrom
  - Type of parameter identity of interface DataProduct is changed from ManagedServiceIdentity to ManagedServiceIdentityV4
  - Type of parameter identity of interface DataProductUpdate is changed from ManagedServiceIdentity to ManagedServiceIdentityV4
  - Type of parameter tags of interface DataProductUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Removed Enum KnownBypass
  - Enum KnownManagedServiceIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownVersions no longer has value V20231115
  - Removed function getContinuationToken
    
    
## 1.0.0 (2024-01-24)

The package of @azure/arm-networkanalytics is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
