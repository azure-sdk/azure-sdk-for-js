# Release History
    
## 4.0.0 (2023-03-01)
    
**Features**

  - Added operation group EventOperations
  - Added operation group EventsOperations
  - Added operation group ImpactedResources
  - Added Interface AvailabilityStatusPropertiesRecentlyResolved
  - Added Interface Event_2
  - Added Interface EventGetBySubscriptionIdAndTrackingIdOptionalParams
  - Added Interface EventGetByTenantIdAndTrackingIdOptionalParams
  - Added Interface EventImpactedResource
  - Added Interface EventImpactedResourceListResult
  - Added Interface EventPropertiesAdditionalInformation
  - Added Interface EventPropertiesArticle
  - Added Interface EventPropertiesRecommendedActions
  - Added Interface EventPropertiesRecommendedActionsItem
  - Added Interface Events
  - Added Interface EventsListBySingleResourceNextOptionalParams
  - Added Interface EventsListBySingleResourceOptionalParams
  - Added Interface EventsListBySubscriptionIdNextOptionalParams
  - Added Interface EventsListBySubscriptionIdOptionalParams
  - Added Interface EventsListByTenantIdNextOptionalParams
  - Added Interface EventsListByTenantIdOptionalParams
  - Added Interface Faq
  - Added Interface Impact
  - Added Interface ImpactedResourcesGetOptionalParams
  - Added Interface ImpactedResourcesListBySubscriptionIdAndEventIdNextOptionalParams
  - Added Interface ImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams
  - Added Interface ImpactedResourceStatus
  - Added Interface ImpactedServiceRegion
  - Added Interface KeyValueItem
  - Added Interface Link
  - Added Interface LinkDisplayText
  - Added Interface ProxyResource
  - Added Interface SystemData
  - Added Interface Update
  - Added Type Alias CreatedByType
  - Added Type Alias EventGetBySubscriptionIdAndTrackingIdResponse
  - Added Type Alias EventGetByTenantIdAndTrackingIdResponse
  - Added Type Alias EventLevelValues
  - Added Type Alias EventsListBySingleResourceNextResponse
  - Added Type Alias EventsListBySingleResourceResponse
  - Added Type Alias EventsListBySubscriptionIdNextResponse
  - Added Type Alias EventsListBySubscriptionIdResponse
  - Added Type Alias EventsListByTenantIdNextResponse
  - Added Type Alias EventsListByTenantIdResponse
  - Added Type Alias EventSourceValues
  - Added Type Alias EventStatusValues
  - Added Type Alias EventTypeValues
  - Added Type Alias ImpactedResourcesGetResponse
  - Added Type Alias ImpactedResourcesListBySubscriptionIdAndEventIdNextResponse
  - Added Type Alias ImpactedResourcesListBySubscriptionIdAndEventIdResponse
  - Added Type Alias LevelValues
  - Added Type Alias LinkTypeValues
  - Added Type Alias ReasonTypeValues
  - Interface AvailabilityStatusProperties has a new optional parameter recentlyResolved
  - Interface AvailabilityStatusProperties has a new optional parameter title
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownAvailabilityStateValues
  - Added Enum KnownCreatedByType
  - Added Enum KnownEventLevelValues
  - Added Enum KnownEventSourceValues
  - Added Enum KnownEventStatusValues
  - Added Enum KnownEventTypeValues
  - Added Enum KnownLevelValues
  - Added Enum KnownLinkTypeValues
  - Added Enum KnownReasonChronicityTypes
  - Added Enum KnownReasonTypeValues

**Breaking Changes**

  - Removed operation group ChildAvailabilityStatuses
  - Removed operation group ChildResources
  - Removed operation group EmergingIssues
  - Interface AvailabilityStatusProperties no longer has parameter recentlyResolvedState
  - Class MicrosoftResourceHealth no longer has parameter childAvailabilityStatuses
  - Class MicrosoftResourceHealth no longer has parameter childResources
  - Class MicrosoftResourceHealth no longer has parameter emergingIssues
  - Removed Enum KnownSeverityValues
  - Removed Enum KnownStageValues
    
    
## 3.2.0 (2023-02-01)
    
**Features**

  - Interface AvailabilityStatusesListByResourceGroupNextOptionalParams no longer has parameter expand
  - Interface AvailabilityStatusesListByResourceGroupNextOptionalParams no longer has parameter filter
  - Interface AvailabilityStatusesListBySubscriptionIdNextOptionalParams no longer has parameter expand
  - Interface AvailabilityStatusesListBySubscriptionIdNextOptionalParams no longer has parameter filter
  - Interface AvailabilityStatusesListNextOptionalParams no longer has parameter expand
  - Interface AvailabilityStatusesListNextOptionalParams no longer has parameter filter
  - Interface ChildAvailabilityStatusesListNextOptionalParams no longer has parameter expand
  - Interface ChildAvailabilityStatusesListNextOptionalParams no longer has parameter filter
  - Interface ChildResourcesListNextOptionalParams no longer has parameter expand
  - Interface ChildResourcesListNextOptionalParams no longer has parameter filter
    
    
## 3.1.0 (2022-07-14)
    
**Features**

  - Added Interface EmergingIssuesGetResult
    
## 3.0.1 (2022-04-29)

**Features**

  - Bug fix

## 3.0.0 (2021-12-22)

The package of @azure/arm-resourcehealth is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
