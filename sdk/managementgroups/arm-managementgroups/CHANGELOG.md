# Release History
    
## 3.0.0 (2025-04-23)
    
### Features Added

  - Added Type Alias EntitySearchType
  - Added Type Alias EntityViewParameterType
  - Added Type Alias ManagementGroupExpandType
  - Added Enum KnownEntitySearchType
  - Added Enum KnownEntityViewParameterType
  - Added Enum KnownManagementGroupExpandType

### Breaking Changes

  - Interface EntitiesListNextOptionalParams no longer has parameter filter
  - Interface EntitiesListNextOptionalParams no longer has parameter groupName
  - Interface EntitiesListNextOptionalParams no longer has parameter search
  - Interface EntitiesListNextOptionalParams no longer has parameter select
  - Interface EntitiesListNextOptionalParams no longer has parameter skip
  - Interface EntitiesListNextOptionalParams no longer has parameter skiptoken
  - Interface EntitiesListNextOptionalParams no longer has parameter top
  - Interface EntitiesListNextOptionalParams no longer has parameter view
  - Interface ManagementGroupsGetDescendantsNextOptionalParams no longer has parameter skiptoken
  - Interface ManagementGroupsGetDescendantsNextOptionalParams no longer has parameter top
  - Interface ManagementGroupsListNextOptionalParams no longer has parameter skiptoken
  - Interface ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupNextOptionalParams no longer has parameter skiptoken
  - Type of parameter search of interface EntitiesListOptionalParams is changed from Enum2 to EntitySearchType
  - Type of parameter view of interface EntitiesListOptionalParams is changed from Enum3 to EntityViewParameterType
  - Type of parameter expand of interface ManagementGroupsGetOptionalParams is changed from Enum0 to ManagementGroupExpandType
  - Removed Enum KnownEnum0
  - Removed Enum KnownEnum2
  - Removed Enum KnownEnum3
  - Removed Enum KnownManagementGroupChildType
  - Removed Enum KnownPermissions
    
## 2.0.2 (2022-12-05)

### Features Added

  - Exposes `getContinuationToken` helper function to extract continuation token

**Bugfix**

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 2.0.1 (2022-04-24)

### Features Added

  - Bug fix

## 2.0.0 (2021-12-22)

The package of @azure/arm-managementgroups is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
