# Release History
    
## 3.0.0 (2024-10-30)
    
### Features Added

  - Interface AzureTrafficCollector has a new optional parameter dataSubnet
  - Interface AzureTrafficCollector has a new optional parameter managementSubnet
  - Interface AzureTrafficCollectorsCreateOrUpdateOptionalParams has a new optional parameter dataSubnet
  - Interface AzureTrafficCollectorsCreateOrUpdateOptionalParams has a new optional parameter managementSubnet
  - Enum KnownApiVersionParameter has a new value TwoThousandTwentyFour1201
  - Enum KnownEmissionType has a new value FlowLogs
  - Enum KnownIngestionType has a new value VirtualTap

### Breaking Changes

  - Class AzureTrafficCollectorClient has a new signature
    
    
## 2.0.0 (2022-11-24)
    
### Features Added

  - Added operation CollectorPolicies.updateTags
  - Added Interface CollectorPoliciesUpdateTagsOptionalParams
  - Added Type Alias ApiVersionParameter
  - Added Type Alias CollectorPoliciesUpdateTagsResponse
  - Interface CollectorPoliciesCreateOrUpdateOptionalParams has a new optional parameter tags
  - Added Enum KnownApiVersionParameter

### Breaking Changes

  - Operation AzureTrafficCollectors.beginCreateOrUpdate has a new signature
  - Operation AzureTrafficCollectors.beginCreateOrUpdateAndWait has a new signature
  - Operation CollectorPolicies.beginCreateOrUpdate has a new signature
  - Operation CollectorPolicies.beginCreateOrUpdateAndWait has a new signature
  - Interface AzureTrafficCollectorsCreateOrUpdateOptionalParams no longer has parameter collectorPolicies
  - Interface AzureTrafficCollectorsCreateOrUpdateOptionalParams no longer has parameter location
  - Interface CollectorPolicy no longer has parameter systemData
  - Parameter location of interface TrackedResource is now required
    
    
## 1.0.0 (2022-07-13)

The package of @azure/arm-networkfunction is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
