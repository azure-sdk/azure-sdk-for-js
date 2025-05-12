# Release History
    
## 1.0.0-beta.3 (2025-05-12)
Compared with version 1.0.0-beta.2
    
### Features Added

  - Added operation group ApplyUpdateForResourceGroupOperationGroupOperations
  - Added operation group ApplyUpdateOperationGroupOperations
  - Added operation group ApplyUpdatesOperationGroupOperations
  - Added operation group ConfigurationAssignmentForResourceGroupOperationGroupOperations
  - Added operation group ConfigurationAssignmentOperationGroupOperations
  - Added operation group MaintenanceConfigurationOperationGroupOperations
  - Added operation group ScheduledEventOperationGroupOperations
  - Added operation group UpdatesOperationGroupOperations
  - Added operation ConfigurationAssignmentsForSubscriptionsOperations.list
  - Added Interface ApplyUpdateForResourceGroupOperationGroupListOptionalParams
  - Added Interface ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams
  - Added Interface ApplyUpdateOperationGroupGetOptionalParams
  - Added Interface ApplyUpdateOperationGroupListOptionalParams
  - Added Interface ApplyUpdateProperties
  - Added Interface ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams
  - Added Interface ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams
  - Added Interface ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams
  - Added Interface ConfigurationAssignmentOperationGroupCreateOrUpdateOptionalParams
  - Added Interface ConfigurationAssignmentOperationGroupDeleteOptionalParams
  - Added Interface ConfigurationAssignmentOperationGroupGetOptionalParams
  - Added Interface ConfigurationAssignmentProperties
  - Added Interface ConfigurationAssignmentsForSubscriptionsListOptionalParams
  - Added Interface MaintenanceClientOptionalParams
  - Added Interface MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams
  - Added Interface MaintenanceConfigurationOperationGroupDeleteOptionalParams
  - Added Interface MaintenanceConfigurationOperationGroupGetOptionalParams
  - Added Interface MaintenanceConfigurationOperationGroupListOptionalParams
  - Added Interface MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams
  - Added Interface MaintenanceConfigurationOperationGroupUpdateOptionalParams
  - Added Interface MaintenanceConfigurationProperties
  - Added Interface MaintenanceWindow
  - Added Interface OperationDisplay
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface ProxyResource
  - Added Interface ScheduledEventOperationGroupAcknowledgeOptionalParams
  - Added Interface TrackedResource
  - Added Interface UpdateProperties
  - Added Interface UpdatesOperationGroupListOptionalParams
  - Added Interface UpdatesOperationGroupListParentOptionalParams
  - Added Class MaintenanceClient
  - Added Type Alias ActionType
  - Added Type Alias ContinuablePage
  - Added Type Alias Origin
  - Interface ApplyUpdate has a new optional parameter properties
  - Interface ConfigurationAssignment has a new optional parameter properties
  - Interface MaintenanceConfiguration has a new optional parameter properties
  - Interface Operation has a new optional parameter actionType
  - Interface Update has a new optional parameter properties
  - Added Enum KnownActionType
  - Added Enum KnownOrigin
  - Added Enum KnownVersions

### Breaking Changes

  - Removed operation group ApplyUpdateForResourceGroup
  - Removed operation group ConfigurationAssignmentsWithinSubscription
  - Removed operation group MaintenanceConfigurationsForResourceGroup
  - Removed operation group PublicMaintenanceConfigurations
  - Removed operation group ScheduledEvent
  - Removed operation group Updates
  - Removed operation ApplyUpdates.createOrUpdate
  - Removed operation ApplyUpdates.createOrUpdateOrCancel
  - Removed operation ApplyUpdates.createOrUpdateParent
  - Removed operation ApplyUpdates.get
  - Removed operation ApplyUpdates.list
  - Removed operation ConfigurationAssignments.createOrUpdate
  - Removed operation ConfigurationAssignments.delete
  - Removed operation ConfigurationAssignments.get
  - Removed operation ConfigurationAssignments.list
  - Removed operation MaintenanceConfigurations.createOrUpdate
  - Removed operation MaintenanceConfigurations.delete
  - Removed operation MaintenanceConfigurations.update
  - Deleted Class MaintenanceManagementClient
  - Interface ApplyUpdate no longer has parameter lastUpdateTime
  - Interface ApplyUpdate no longer has parameter resourceId
  - Interface ApplyUpdate no longer has parameter status
  - Interface ConfigurationAssignment no longer has parameter filter
  - Interface ConfigurationAssignment no longer has parameter maintenanceConfigurationId
  - Interface ConfigurationAssignment no longer has parameter resourceId
  - Interface MaintenanceConfiguration no longer has parameter duration
  - Interface MaintenanceConfiguration no longer has parameter expirationDateTime
  - Interface MaintenanceConfiguration no longer has parameter extensionProperties
  - Interface MaintenanceConfiguration no longer has parameter installPatches
  - Interface MaintenanceConfiguration no longer has parameter maintenanceScope
  - Interface MaintenanceConfiguration no longer has parameter namespace
  - Interface MaintenanceConfiguration no longer has parameter recurEvery
  - Interface MaintenanceConfiguration no longer has parameter startDateTime
  - Interface MaintenanceConfiguration no longer has parameter timeZone
  - Interface MaintenanceConfiguration no longer has parameter visibility
  - Interface Operation no longer has parameter properties
  - Interface Update no longer has parameter resourceId
  - Type of parameter display of interface Operation is changed from OperationInfo to OperationDisplay
  - Type of parameter origin of interface Operation is changed from string to Origin
  - Type of parameter tags of interface TagSettingsProperties is changed from {
        [propertyName: string]: string[];
    } to Record<string, string[]>
  - Removed function getContinuationToken
    
    
## 1.0.0-beta.2 (2024-05-10)
    
### Features Added

  - Added operation group ScheduledEvent
  - Added operation ApplyUpdates.createOrUpdateOrCancel
  - Added Interface ApplyUpdatesCreateOrUpdateOrCancelOptionalParams
  - Added Interface ScheduledEventAcknowledgeOptionalParams
  - Added Interface ScheduledEventApproveResponse
  - Added Type Alias ApplyUpdatesCreateOrUpdateOrCancelResponse
  - Added Type Alias ScheduledEventAcknowledgeResponse
  - Enum KnownUpdateStatus has a new value Cancel
  - Enum KnownUpdateStatus has a new value Cancelled
  - Enum KnownUpdateStatus has a new value NoUpdatesPending
    
    
## 1.0.0-beta.1 (2023-08-02)

The package of @azure/arm-maintenance is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
