# Release History
    
## 1.0.0-beta.2 (2025-03-26)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added operation group SAPDiscoverySitesOperations
  - Added operation group SAPInstancesOperations
  - Added operation ServerInstancesOperations.create
  - Added operation ServerInstancesOperations.delete
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Interface SAPDiscoverySitesCreateOptionalParams
  - Added Interface SAPDiscoverySitesDeleteOptionalParams
  - Added Interface SAPDiscoverySitesGetOptionalParams
  - Added Interface SAPDiscoverySitesImportEntitiesOptionalParams
  - Added Interface SAPDiscoverySitesListByResourceGroupOptionalParams
  - Added Interface SAPDiscoverySitesListBySubscriptionOptionalParams
  - Added Interface SAPDiscoverySitesUpdateOptionalParams
  - Added Interface SAPInstancesCreateOptionalParams
  - Added Interface SAPInstancesDeleteOptionalParams
  - Added Interface SAPInstancesGetOptionalParams
  - Added Interface SAPInstancesListBySapDiscoverySiteOptionalParams
  - Added Interface SAPInstancesUpdateOptionalParams
  - Added Type Alias ContinuablePage
  - Added function restorePoller

### Breaking Changes

  - Removed operation group Operations
  - Removed operation group SapDiscoverySites
  - Removed operation group SapInstances
  - Removed operation ServerInstances.beginCreate
  - Removed operation ServerInstances.beginCreateAndWait
  - Removed operation ServerInstances.beginDelete
  - Removed operation ServerInstances.beginDeleteAndWait
  - Class WorkloadsClient has a new signature
  - Interface ServerInstancesCreateOptionalParams no longer has parameter resumeFrom
  - Interface ServerInstancesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface WorkloadsClientOptionalParams no longer has parameter $host
  - Interface WorkloadsClientOptionalParams no longer has parameter endpoint
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter dataSource of interface PerformanceData is changed from "Excel" | "Native" to DataSource
  - Type of parameter tags of interface SAPDiscoverySiteTagsUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface SAPInstanceTagsUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Class WorkloadsClient no longer has parameter $host
  - Class WorkloadsClient no longer has parameter apiVersion
  - Class WorkloadsClient no longer has parameter operations
  - Class WorkloadsClient no longer has parameter subscriptionId
  - Removed Enum KnownActionType
  - Removed Enum KnownOrigin
  - Removed function getContinuationToken
    
    
## 1.0.0-beta.1 (2024-03-12)

The package of @azure/arm-migrationdiscoverysap is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
