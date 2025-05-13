# Release History
    
## 4.0.0 (2025-05-09)
    
### Features Added

  - Added operation group BillingInfo
  - Added Interface BillingInfoGetOptionalParams
  - Added Interface BillingInfoResponse
  - Added Interface CreationSupportedListNextOptionalParams
  - Added Interface MarketplaceSaaSInfo
  - Added Interface MonitoredSubscriptionsCreateorUpdateHeaders
  - Added Interface MonitoredSubscriptionsDeleteHeaders
  - Added Interface MonitoredSubscriptionsListNextOptionalParams
  - Added Interface MonitoredSubscriptionsUpdateHeaders
  - Added Interface MonitorsCreateHeaders
  - Added Interface MonitorsDeleteHeaders
  - Added Interface MonitorsUpdateHeaders
  - Added Interface PartnerBillingEntity
  - Added Interface ProxyResource
  - Added Interface Resource
  - Added Interface SingleSignOnConfigurationsCreateOrUpdateHeaders
  - Added Interface TrackedResource
  - Added Type Alias BillingInfoGetResponse
  - Added Type Alias CreationSupportedListNextResponse
  - Added Type Alias MonitoredSubscriptionsListNextResponse
  - Interface CreateResourceSupportedResponseList has a new optional parameter nextLink
  - Interface LinkedResource has a new optional parameter location
  - Interface MonitoredSubscriptionPropertiesList has a new optional parameter nextLink
  - Interface MonitoringTagRulesProperties has a new optional parameter customMetrics

### Breaking Changes

  - Operation MarketplaceAgreements.createOrUpdate has a new signature
  - Operation MonitoredSubscriptions.beginCreateorUpdate has a new signature
  - Operation MonitoredSubscriptions.beginCreateorUpdateAndWait has a new signature
  - Operation MonitoredSubscriptions.beginUpdate has a new signature
  - Operation MonitoredSubscriptions.beginUpdateAndWait has a new signature
  - Operation Monitors.beginCreate has a new signature
  - Operation Monitors.beginCreateAndWait has a new signature
  - Operation Monitors.beginUpdate has a new signature
  - Operation Monitors.beginUpdateAndWait has a new signature
  - Operation SingleSignOnConfigurations.beginCreateOrUpdate has a new signature
  - Operation SingleSignOnConfigurations.beginCreateOrUpdateAndWait has a new signature
  - Operation TagRules.createOrUpdate has a new signature
  - Interface DatadogMonitorResource no longer has parameter id
  - Interface DatadogMonitorResource no longer has parameter name
  - Interface DatadogMonitorResource no longer has parameter systemData
  - Interface DatadogMonitorResource no longer has parameter type
  - Interface DatadogSingleSignOnResource no longer has parameter id
  - Interface DatadogSingleSignOnResource no longer has parameter name
  - Interface DatadogSingleSignOnResource no longer has parameter systemData
  - Interface DatadogSingleSignOnResource no longer has parameter type
  - Interface MarketplaceAgreementsCreateOrUpdateOptionalParams no longer has parameter body
  - Interface MonitoredSubscriptionProperties no longer has parameter id
  - Interface MonitoredSubscriptionProperties no longer has parameter name
  - Interface MonitoredSubscriptionProperties no longer has parameter type
  - Interface MonitoredSubscriptionsCreateorUpdateOptionalParams no longer has parameter body
  - Interface MonitoredSubscriptionsUpdateOptionalParams no longer has parameter body
  - Interface MonitoringTagRules no longer has parameter id
  - Interface MonitoringTagRules no longer has parameter name
  - Interface MonitoringTagRules no longer has parameter systemData
  - Interface MonitoringTagRules no longer has parameter type
  - Interface MonitorsCreateOptionalParams no longer has parameter body
  - Interface MonitorsUpdateOptionalParams no longer has parameter body
  - Interface SingleSignOnConfigurationsCreateOrUpdateOptionalParams no longer has parameter body
  - Interface TagRulesCreateOrUpdateOptionalParams no longer has parameter body
  - Parameter value of interface CreateResourceSupportedResponseList is now required
  - Parameter value of interface DatadogAgreementResourceListResponse is now required
  - Parameter value of interface DatadogApiKeyListResponse is now required
  - Parameter value of interface DatadogHostListResponse is now required
  - Parameter value of interface DatadogMonitorResourceListResponse is now required
  - Parameter value of interface DatadogSingleSignOnResourceListResponse is now required
  - Parameter value of interface LinkedResourceListResponse is now required
  - Parameter value of interface MonitoredResourceListResponse is now required
  - Parameter subscriptionId of interface MonitoredSubscription is now required
  - Parameter value of interface MonitoredSubscriptionPropertiesList is now required
  - Parameter value of interface MonitoringTagRulesListResponse is now required
  - Parameter value of interface OperationListResult is now required
    
    
## 3.1.0 (2023-10-09)
    
### Features Added

  - Added operation group CreationSupported
  - Added operation group MonitoredSubscriptions
  - Added Interface CreateResourceSupportedProperties
  - Added Interface CreateResourceSupportedResponse
  - Added Interface CreateResourceSupportedResponseList
  - Added Interface CreationSupportedGetOptionalParams
  - Added Interface CreationSupportedListOptionalParams
  - Added Interface MonitoredSubscription
  - Added Interface MonitoredSubscriptionProperties
  - Added Interface MonitoredSubscriptionPropertiesList
  - Added Interface MonitoredSubscriptionsCreateorUpdateOptionalParams
  - Added Interface MonitoredSubscriptionsDeleteOptionalParams
  - Added Interface MonitoredSubscriptionsGetOptionalParams
  - Added Interface MonitoredSubscriptionsListOptionalParams
  - Added Interface MonitoredSubscriptionsUpdateOptionalParams
  - Added Interface SubscriptionList
  - Added Type Alias CreationSupportedGetResponse
  - Added Type Alias CreationSupportedListResponse
  - Added Type Alias MonitoredSubscriptionsCreateorUpdateResponse
  - Added Type Alias MonitoredSubscriptionsGetResponse
  - Added Type Alias MonitoredSubscriptionsListResponse
  - Added Type Alias MonitoredSubscriptionsUpdateResponse
  - Added Type Alias Operation
  - Added Type Alias Status
  - Interface DatadogOrganizationProperties has a new optional parameter cspm
  - Interface MonitoringTagRulesProperties has a new optional parameter automuting
  - Interface MonitorUpdateProperties has a new optional parameter cspm
  - Added Enum KnownOperation
  - Added Enum KnownStatus
    
## 3.0.2 (2022-11-21)

### Features Added

 -  Exposes `getContinuationToken` helper function to extract continuation token

### Bugs Fixed
 
  - A series of small bug fixs relevant to authentication and apiVersion policy

## 3.0.1 (2022-04-18)

**features**

  - bug fix

## 3.0.0 (2022-01-12)

The package of @azure/arm-datadog is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
