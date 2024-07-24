# Release History
    
## 3.0.0 (2024-07-24)
    
**Features**

  - Added operation group EntitiesOperations
  - Added operation group HierarchySettingsOperationGroup
  - Added operation group SubscriptionUnderManagementGroups
  - Added operation ManagementGroups.listSettings
  - Added Interface CreateOrUpdateSettingsProperties
  - Added Interface DescendantInfoProperties
  - Added Interface EntitiesOperationsListNextOptionalParams
  - Added Interface EntitiesOperationsListOptionalParams
  - Added Interface EntityInfoProperties
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface HierarchySettingsListResult
  - Added Interface HierarchySettingsOperationGroupCreateOrUpdateOptionalParams
  - Added Interface HierarchySettingsOperationGroupDeleteOptionalParams
  - Added Interface HierarchySettingsOperationGroupGetOptionalParams
  - Added Interface HierarchySettingsOperationGroupListNextOptionalParams
  - Added Interface HierarchySettingsOperationGroupListOptionalParams
  - Added Interface HierarchySettingsOperationGroupUpdateOptionalParams
  - Added Interface HierarchySettingsProperties
  - Added Interface ManagementGroupOperationAcceptance
  - Added Interface ManagementGroupProperties
  - Added Interface ManagementGroupsListSettingsNextOptionalParams
  - Added Interface ManagementGroupsListSettingsOptionalParams
  - Added Interface OperationDisplay
  - Added Interface PathsItdwrvProvidersMicrosoftManagementChecknameavailabilityPostRequestbodyContentApplicationJsonSchema
  - Added Interface ProxyResource
  - Added Interface Resource
  - Added Interface SubscriptionUnderManagementGroupListResult
  - Added Interface SubscriptionUnderManagementGroupProperties
  - Added Interface SubscriptionUnderManagementGroupsCreateOptionalParams
  - Added Interface SubscriptionUnderManagementGroupsDeleteOptionalParams
  - Added Interface SubscriptionUnderManagementGroupsGetSubscriptionOptionalParams
  - Added Interface SubscriptionUnderManagementGroupsGetSubscriptionsUnderManagementGroupNextOptionalParams
  - Added Interface SubscriptionUnderManagementGroupsGetSubscriptionsUnderManagementGroupOptionalParams
  - Added Interface SystemData
  - Added Type Alias ActionType
  - Added Type Alias CreatedByType
  - Added Type Alias EntitiesOperationsListNextResponse
  - Added Type Alias EntitiesOperationsListResponse
  - Added Type Alias EntitySearchType
  - Added Type Alias EntityViewParameterType
  - Added Type Alias HierarchySettingsOperationGroupCreateOrUpdateResponse
  - Added Type Alias HierarchySettingsOperationGroupGetResponse
  - Added Type Alias HierarchySettingsOperationGroupListNextResponse
  - Added Type Alias HierarchySettingsOperationGroupListResponse
  - Added Type Alias HierarchySettingsOperationGroupUpdateResponse
  - Added Type Alias ManagementGroupExpandType
  - Added Type Alias ManagementGroupsListSettingsNextResponse
  - Added Type Alias ManagementGroupsListSettingsResponse
  - Added Type Alias Origin
  - Added Type Alias SubscriptionUnderManagementGroupsCreateResponse
  - Added Type Alias SubscriptionUnderManagementGroupsGetSubscriptionResponse
  - Added Type Alias SubscriptionUnderManagementGroupsGetSubscriptionsUnderManagementGroupNextResponse
  - Added Type Alias SubscriptionUnderManagementGroupsGetSubscriptionsUnderManagementGroupResponse
  - Interface CreateOrUpdateSettingsRequest has a new optional parameter properties
  - Interface DescendantInfo has a new optional parameter properties
  - Interface EntityInfo has a new optional parameter properties
  - Interface HierarchySettings has a new optional parameter properties
  - Interface ManagementGroup has a new optional parameter properties
  - Interface ManagementGroupsCreateOrUpdateHeaders has a new optional parameter retryAfter
  - Interface ManagementGroupsDeleteHeaders has a new optional parameter retryAfter
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter isDataAction
  - Interface Operation has a new optional parameter origin
  - Interface SubscriptionUnderManagementGroup has a new optional parameter properties
  - Add parameters of ManagementGroupOperationAcceptance to TypeAlias ManagementGroupsDeleteResponse
  - Added Enum KnownActionType
  - Added Enum KnownCreatedByType
  - Added Enum KnownEntitySearchType
  - Added Enum KnownEntityViewParameterType
  - Added Enum KnownManagementGroupExpandType
  - Added Enum KnownOrigin

**Breaking Changes**

  - Removed operation group Entities
  - Removed operation group HierarchySettingsOperations
  - Removed operation group ManagementGroupSubscriptions
  - Removed operation ManagementGroups.list
  - Operation ManagementGroups.beginCreateOrUpdate has a new signature
  - Operation ManagementGroups.beginCreateOrUpdateAndWait has a new signature
  - Interface CreateOrUpdateSettingsRequest no longer has parameter defaultManagementGroup
  - Interface CreateOrUpdateSettingsRequest no longer has parameter requireAuthorizationForGroupCreation
  - Interface DescendantInfo no longer has parameter displayName
  - Interface DescendantInfo no longer has parameter parent
  - Interface EntityInfo no longer has parameter displayName
  - Interface EntityInfo no longer has parameter inheritedPermissions
  - Interface EntityInfo no longer has parameter numberOfChildGroups
  - Interface EntityInfo no longer has parameter numberOfChildren
  - Interface EntityInfo no longer has parameter numberOfDescendants
  - Interface EntityInfo no longer has parameter parent
  - Interface EntityInfo no longer has parameter parentDisplayNameChain
  - Interface EntityInfo no longer has parameter parentNameChain
  - Interface EntityInfo no longer has parameter permissions
  - Interface EntityInfo no longer has parameter tenantId
  - Interface HierarchySettings no longer has parameter defaultManagementGroup
  - Interface HierarchySettings no longer has parameter id
  - Interface HierarchySettings no longer has parameter name
  - Interface HierarchySettings no longer has parameter requireAuthorizationForGroupCreation
  - Interface HierarchySettings no longer has parameter tenantId
  - Interface HierarchySettings no longer has parameter type
  - Interface ManagementGroup no longer has parameter children
  - Interface ManagementGroup no longer has parameter details
  - Interface ManagementGroup no longer has parameter displayName
  - Interface ManagementGroup no longer has parameter id
  - Interface ManagementGroup no longer has parameter name
  - Interface ManagementGroup no longer has parameter tenantId
  - Interface ManagementGroup no longer has parameter type
  - Interface ManagementGroupsCreateOrUpdateHeaders no longer has parameter location
  - Interface ManagementGroupsDeleteHeaders no longer has parameter azureAsyncOperation
  - Interface ManagementGroupsGetDescendantsNextOptionalParams no longer has parameter skiptoken
  - Interface ManagementGroupsGetDescendantsNextOptionalParams no longer has parameter top
  - Interface SubscriptionUnderManagementGroup no longer has parameter displayName
  - Interface SubscriptionUnderManagementGroup no longer has parameter id
  - Interface SubscriptionUnderManagementGroup no longer has parameter name
  - Interface SubscriptionUnderManagementGroup no longer has parameter parent
  - Interface SubscriptionUnderManagementGroup no longer has parameter state
  - Interface SubscriptionUnderManagementGroup no longer has parameter tenant
  - Interface SubscriptionUnderManagementGroup no longer has parameter type
  - Parameter value of interface DescendantListResult is now required
  - Parameter value of interface EntityListResult is now required
  - Parameter value of interface ManagementGroupListResult is now required
  - Type of parameter error of interface ErrorResponse is changed from ErrorDetails to ErrorDetail
  - Type of parameter value of interface ManagementGroupListResult is changed from ManagementGroupInfo[] to ManagementGroup[]
  - Type of parameter expand of interface ManagementGroupsGetOptionalParams is changed from Enum0 to ManagementGroupExpandType
  - Type of parameter display of interface Operation is changed from OperationDisplayProperties to OperationDisplay
  - Class ManagementGroupsAPI no longer has parameter entities
  - Class ManagementGroupsAPI no longer has parameter hierarchySettingsOperations
  - Class ManagementGroupsAPI no longer has parameter managementGroupSubscriptions
  - Delete parameters of AzureAsyncOperationResults in TypeAlias ManagementGroupsDeleteResponse
  - Removed Enum KnownEnum0
  - Removed Enum KnownEnum2
  - Removed Enum KnownEnum3
  - Removed Enum KnownManagementGroupChildType
  - Removed Enum KnownPermissions
    
## 2.0.2 (2022-12-05)

**Features**

  - Exposes `getContinuationToken` helper function to extract continuation token

**Bugfix**

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 2.0.1 (2022-04-24)

**Features**

  - Bug fix

## 2.0.0 (2021-12-22)

The package of @azure/arm-managementgroups is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
