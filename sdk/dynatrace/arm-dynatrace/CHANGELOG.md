# Release History
    
## 3.0.0 (2025-04-11)
    
### Features Added

  - Added operation group CreationSupported
  - Added operation group MonitoredSubscriptions
  - Added operation Monitors.beginUpgradePlan
  - Added operation Monitors.beginUpgradePlanAndWait
  - Added operation Monitors.getAllConnectedResourcesCount
  - Added operation Monitors.updateAgentStatus
  - Added Interface AgentStatus
  - Added Interface AgentStatusRequest
  - Added Interface ConnectedResourcesCountResponse
  - Added Interface CreateResourceSupportedProperties
  - Added Interface CreateResourceSupportedResponse
  - Added Interface CreationSupportedGetOptionalParams
  - Added Interface CreationSupportedListOptionalParams
  - Added Interface LogStatusRequest
  - Added Interface ManagedServiceIdentity
  - Added Interface MarketplaceSubscriptionIdRequest
  - Added Interface MetricStatusRequest
  - Added Interface MonitoredSubscription
  - Added Interface MonitoredSubscriptionProperties
  - Added Interface MonitoredSubscriptionPropertiesList
  - Added Interface MonitoredSubscriptionsCreateOrUpdateOptionalParams
  - Added Interface MonitoredSubscriptionsDeleteHeaders
  - Added Interface MonitoredSubscriptionsDeleteOptionalParams
  - Added Interface MonitoredSubscriptionsGetOptionalParams
  - Added Interface MonitoredSubscriptionsListNextOptionalParams
  - Added Interface MonitoredSubscriptionsListOptionalParams
  - Added Interface MonitoredSubscriptionsUpdateHeaders
  - Added Interface MonitoredSubscriptionsUpdateOptionalParams
  - Added Interface MonitoringTagRulesProperties
  - Added Interface MonitorsDeleteHeaders
  - Added Interface MonitorsGetAllConnectedResourcesCountOptionalParams
  - Added Interface MonitorsUpdateAgentStatusOptionalParams
  - Added Interface MonitorsUpgradePlanHeaders
  - Added Interface MonitorsUpgradePlanOptionalParams
  - Added Interface MonitorUpdateProperties
  - Added Interface SubscriptionList
  - Added Interface TagRulesDeleteHeaders
  - Added Interface UpgradePlanRequest
  - Added Type Alias Action
  - Added Type Alias CreationSupportedGetResponse
  - Added Type Alias CreationSupportedListResponse
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias MarketplaceSaasAutoRenew
  - Added Type Alias MonitoredSubscriptionsCreateOrUpdateResponse
  - Added Type Alias MonitoredSubscriptionsDeleteResponse
  - Added Type Alias MonitoredSubscriptionsGetResponse
  - Added Type Alias MonitoredSubscriptionsListNextResponse
  - Added Type Alias MonitoredSubscriptionsListResponse
  - Added Type Alias MonitoredSubscriptionsUpdateResponse
  - Added Type Alias MonitorsDeleteResponse
  - Added Type Alias MonitorsGetAllConnectedResourcesCountResponse
  - Added Type Alias MonitorsUpgradePlanResponse
  - Added Type Alias Status
  - Added Type Alias SubscriptionListOperation
  - Added Type Alias TagRulesDeleteResponse
  - Interface AccountInfo has a new optional parameter companyName
  - Interface MarketplaceSaaSResourceDetailsResponse has a new optional parameter marketplaceSaaSResourceName
  - Interface MonitorResource has a new optional parameter marketplaceSaasAutoRenew
  - Interface MonitorResourceUpdate has a new optional parameter identity
  - Interface MonitorResourceUpdate has a new optional parameter properties
  - Interface MonitorsGetMetricStatusOptionalParams has a new optional parameter request
  - Interface MonitorsListMonitoredResourcesNextOptionalParams has a new optional parameter request
  - Interface MonitorsListMonitoredResourcesOptionalParams has a new optional parameter request
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownAction
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownMarketplaceSaasAutoRenew
  - Added Enum KnownStatus
  - Added Enum KnownSubscriptionListOperation
  - Enum KnownMarketplaceSubscriptionStatus has a new value Unsubscribed
  - Enum KnownMonitoringType has a new value Discovery

### Breaking Changes

  - Interface DynatraceSingleSignOnResource no longer has parameter systemData
  - Interface MonitorResource no longer has parameter systemData
  - Interface TagRule no longer has parameter systemData
    
    
## 2.0.0 (2023-08-15)
    
### Features Added

  - Added operation Monitors.getMarketplaceSaaSResourceDetails
  - Added operation Monitors.getMetricStatus
  - Added Interface MarketplaceSaaSResourceDetailsRequest
  - Added Interface MarketplaceSaaSResourceDetailsResponse
  - Added Interface MetricsStatusResponse
  - Added Interface MonitorsGetMarketplaceSaaSResourceDetailsOptionalParams
  - Added Interface MonitorsGetMetricStatusOptionalParams
  - Added Type Alias MonitorsGetMarketplaceSaaSResourceDetailsResponse
  - Added Type Alias MonitorsGetMetricStatusResponse
  - Interface MetricRules has a new optional parameter sendingMetrics

### Breaking Changes

  - Removed operation Monitors.getAccountCredentials
  - Removed operation TagRules.update
  - Interface MonitorResourceUpdate no longer has parameter dynatraceEnvironmentProperties
  - Interface MonitorResourceUpdate no longer has parameter marketplaceSubscriptionStatus
  - Interface MonitorResourceUpdate no longer has parameter monitoringStatus
  - Interface MonitorResourceUpdate no longer has parameter planData
  - Interface MonitorResourceUpdate no longer has parameter userInfo
  - Parameter region of interface LinkableEnvironmentRequest is now required
  - Parameter tenantId of interface LinkableEnvironmentRequest is now required
  - Parameter userPrincipal of interface LinkableEnvironmentRequest is now required
  - Parameter userPrincipal of interface SSODetailsRequest is now required
    
## 1.0.1 (2023-01-09)

### Features Added

  - Exposes `getContinuationToken` helper function to extract continuation token

### Bugs Fixed

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 1.0.0 (2022-09-19)

The package of @azure/arm-dynatrace is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
