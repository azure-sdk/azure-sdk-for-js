# Release History
    
## 4.0.0 (2022-07-18)
    
**Features**

  - Added operation group EventsOperations
  - Added Interface EventPropertiesAdditionalInformation
  - Added Interface EventPropertiesArticle
  - Added Interface EventPropertiesRecommendedActions
  - Added Interface EventPropertiesRecommendedActionsItem
  - Added Interface Events
  - Added Interface EventsListBySingleResourceNextOptionalParams
  - Added Interface EventsListBySingleResourceOptionalParams
  - Added Interface EventsListBySubscriptionIdNextOptionalParams
  - Added Interface EventsListBySubscriptionIdOptionalParams
  - Added Interface Faq
  - Added Interface Impact
  - Added Interface ImpactedServiceRegion
  - Added Interface Link
  - Added Interface LinkDisplayText
  - Added Interface Update
  - Added Type Alias Event_2
  - Added Type Alias EventLevelValues
  - Added Type Alias EventsListBySingleResourceNextResponse
  - Added Type Alias EventsListBySingleResourceResponse
  - Added Type Alias EventsListBySubscriptionIdNextResponse
  - Added Type Alias EventsListBySubscriptionIdResponse
  - Added Type Alias EventSourceValues
  - Added Type Alias EventStatusValues
  - Added Type Alias EventTypeValues
  - Added Type Alias LevelValues
  - Added Type Alias LinkTypeValues
  - Interface Operation has a new optional parameter isDataAction
  - Class MicrosoftResourceHealth has a new parameter eventsOperations
  - Added Enum KnownEventLevelValues
  - Added Enum KnownEventSourceValues
  - Added Enum KnownEventStatusValues
  - Added Enum KnownEventTypeValues
  - Added Enum KnownLevelValues
  - Added Enum KnownLinkTypeValues

**Breaking Changes**

  - Removed operation group AvailabilityStatuses
  - Removed operation group ChildAvailabilityStatuses
  - Removed operation group ChildResources
  - Removed operation group EmergingIssues
  - Interface ErrorResponse no longer has parameter details
  - Class MicrosoftResourceHealth no longer has parameter availabilityStatuses
  - Class MicrosoftResourceHealth no longer has parameter childAvailabilityStatuses
  - Class MicrosoftResourceHealth no longer has parameter childResources
  - Class MicrosoftResourceHealth no longer has parameter emergingIssues
  - Removed Enum KnownSeverityValues
  - Removed Enum KnownStageValues
    
    
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
