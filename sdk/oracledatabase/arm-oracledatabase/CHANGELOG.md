# Release History
    
## 2.0.0 (2024-10-11)
    
### Features Added

  - Added operation OracleSubscriptions.beginAddAzureSubscriptions
  - Added operation OracleSubscriptions.beginAddAzureSubscriptionsAndWait
  - Added Interface AzureSubscriptions
  - Added Interface OracleSubscriptionsAddAzureSubscriptionsHeaders
  - Added Interface OracleSubscriptionsAddAzureSubscriptionsOptionalParams
  - Added Type Alias AddSubscriptionOperationState
  - Added Type Alias OracleSubscriptionsAddAzureSubscriptionsResponse
  - Interface OracleSubscriptionProperties has a new optional parameter addSubscriptionOperationState
  - Interface OracleSubscriptionProperties has a new optional parameter azureSubscriptionIds
  - Interface OracleSubscriptionProperties has a new optional parameter lastOperationStatusDetail
  - Added Enum KnownAddSubscriptionOperationState

### Breaking Changes

  - Parameter lifecycleState of interface DbNodeProperties is now required
  - Parameter timeCreated of interface DbNodeProperties is now required
  - Parameter displayName of interface DnsPrivateViewProperties is now required
  - Parameter lifecycleState of interface DnsPrivateViewProperties is now required
  - Parameter lifecycleState of interface DnsPrivateZoneProperties is now required
    
    
## 1.0.0 (2024-06-25)

### Features Added

The package of @azure/arm-oracledatabase is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
