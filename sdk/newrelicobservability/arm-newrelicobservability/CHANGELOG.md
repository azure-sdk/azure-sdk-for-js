# Release History
    
## 2.0.0 (2025-04-09)
    
### Features Added

  - Added operation MonitoredSubscriptions.beginCreateOrUpdate
  - Added operation MonitoredSubscriptions.beginCreateOrUpdateAndWait
  - Added operation Monitors.beginResubscribe
  - Added operation Monitors.beginResubscribeAndWait
  - Added operation Monitors.beginUpdate
  - Added operation Monitors.beginUpdateAndWait
  - Added operation Monitors.refreshIngestionKey
  - Added Interface MonitoredSubscriptionsCreateOrUpdateOptionalParams
  - Added Interface MonitorsRefreshIngestionKeyOptionalParams
  - Added Interface MonitorsResubscribeHeaders
  - Added Interface MonitorsResubscribeOptionalParams
  - Added Interface MonitorsUpdateHeaders
  - Added Interface ResubscribeProperties
  - Added Type Alias MonitoredSubscriptionsCreateOrUpdateResponse
  - Added Type Alias MonitorsResubscribeResponse
  - Interface MarketplaceSaaSInfo has a new optional parameter offerId
  - Interface MarketplaceSaaSInfo has a new optional parameter publisherId
  - Interface MonitorsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface MonitorsUpdateOptionalParams has a new optional parameter updateIntervalInMs

### Breaking Changes

  - Removed operation MonitoredSubscriptions.beginCreateorUpdate
  - Removed operation MonitoredSubscriptions.beginCreateorUpdateAndWait
  - Removed operation Monitors.update
  - Type of parameter billingCycle of interface PlanData is changed from BillingCycle to string
  - Removed Enum KnownBillingCycle
    
    
## 1.1.0 (2024-03-08)
    
### Features Added

  - Added operation group BillingInfo
  - Added operation group ConnectedPartnerResources
  - Added operation group MonitoredSubscriptions
  - Added operation Monitors.listLinkedResources
  - Added Interface BillingInfoGetOptionalParams
  - Added Interface BillingInfoResponse
  - Added Interface ConnectedPartnerResourceProperties
  - Added Interface ConnectedPartnerResourcesListFormat
  - Added Interface ConnectedPartnerResourcesListNextOptionalParams
  - Added Interface ConnectedPartnerResourcesListOptionalParams
  - Added Interface ConnectedPartnerResourcesListResponse
  - Added Interface LinkedResource
  - Added Interface LinkedResourceListResponse
  - Added Interface MarketplaceSaaSInfo
  - Added Interface MonitoredSubscription
  - Added Interface MonitoredSubscriptionProperties
  - Added Interface MonitoredSubscriptionPropertiesList
  - Added Interface MonitoredSubscriptionsCreateorUpdateOptionalParams
  - Added Interface MonitoredSubscriptionsDeleteHeaders
  - Added Interface MonitoredSubscriptionsDeleteOptionalParams
  - Added Interface MonitoredSubscriptionsGetOptionalParams
  - Added Interface MonitoredSubscriptionsListNextOptionalParams
  - Added Interface MonitoredSubscriptionsListOptionalParams
  - Added Interface MonitoredSubscriptionsUpdateHeaders
  - Added Interface MonitoredSubscriptionsUpdateOptionalParams
  - Added Interface MonitoringTagRulesProperties
  - Added Interface MonitorsListLinkedResourcesNextOptionalParams
  - Added Interface MonitorsListLinkedResourcesOptionalParams
  - Added Interface PartnerBillingEntity
  - Added Interface SubscriptionList
  - Added Type Alias BillingInfoGetResponse
  - Added Type Alias ConfigurationName
  - Added Type Alias ConnectedPartnerResourcesListNextResponse
  - Added Type Alias ConnectedPartnerResourcesListOperationResponse
  - Added Type Alias MonitoredSubscriptionsCreateorUpdateResponse
  - Added Type Alias MonitoredSubscriptionsDeleteResponse
  - Added Type Alias MonitoredSubscriptionsGetResponse
  - Added Type Alias MonitoredSubscriptionsListNextResponse
  - Added Type Alias MonitoredSubscriptionsListResponse
  - Added Type Alias MonitoredSubscriptionsUpdateResponse
  - Added Type Alias MonitorsListLinkedResourcesNextResponse
  - Added Type Alias MonitorsListLinkedResourcesResponse
  - Added Type Alias PatchOperation
  - Added Type Alias Status
  - Interface NewRelicMonitorResource has a new optional parameter saaSAzureSubscriptionStatus
  - Interface NewRelicMonitorResource has a new optional parameter subscriptionState
  - Added Enum KnownConfigurationName
  - Added Enum KnownPatchOperation
  - Added Enum KnownStatus
    
    
## 1.0.0 (2023-05-06)

The package of @azure/arm-newrelicobservability is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
