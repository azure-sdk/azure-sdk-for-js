# Release History
    
## 2.0.0 (2024-05-09)
    
**Features**

  - Added Interface UpgradeNetworkFabricProperties
  - Added Type Alias NetworkFabricUpgradeAction
  - Interface AccessControlList has a new optional parameter defaultAction
  - Interface AccessControlListPatch has a new optional parameter defaultAction
  - Interface AccessControlListPatchableProperties has a new optional parameter defaultAction
  - Interface ExternalNetworkPatch has a new optional parameter networkToNetworkInterconnectId
  - Interface ExternalNetworkPatchableProperties has a new optional parameter networkToNetworkInterconnectId
  - Interface RoutePolicy has a new optional parameter defaultAction
  - Interface RoutePolicyPatch has a new optional parameter defaultAction
  - Interface RoutePolicyPatchableProperties has a new optional parameter defaultAction
  - Added Enum KnownNetworkFabricUpgradeAction
  - Enum KnownConfigurationState has a new value PendingCommit
  - Enum KnownConfigurationState has a new value Provisioning

**Breaking Changes**

  - Operation NetworkFabrics.beginUpgrade has a new signature
  - Operation NetworkFabrics.beginUpgradeAndWait has a new signature
    
    
## 1.0.0 (2023-07-17)

The package of @azure/arm-managednetworkfabric is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
