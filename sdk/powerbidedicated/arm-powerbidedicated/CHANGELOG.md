# Release History
    
## 5.0.0 (2025-04-28)
    
### Features Added

  - Added Interface AutoScaleVCoresListByResourceGroupNextOptionalParams
  - Added Interface AutoScaleVCoresListBySubscriptionNextOptionalParams
  - Added Interface CapacitiesCreateHeaders
  - Added Interface CapacitiesDeleteHeaders
  - Added Interface CapacitiesResumeHeaders
  - Added Interface CapacitiesSuspendHeaders
  - Added Interface CapacitiesUpdateHeaders
  - Added Interface LogSpecification
  - Added Interface MetricSpecification
  - Added Interface MetricSpecificationDimensionsItem
  - Added Interface OperationProperties
  - Added Interface ServiceSpecification
  - Added Interface TrackedResource
  - Added Type Alias AutoScaleVCoresListByResourceGroupNextResponse
  - Added Type Alias AutoScaleVCoresListBySubscriptionNextResponse
  - Added Type Alias CreatedByType
  - Interface AutoScaleVCoreListResult has a new optional parameter nextLink
  - Interface CapacitySku has a new optional parameter capacity
  - Interface DedicatedCapacity has a new optional parameter friendlyName
  - Interface DedicatedCapacity has a new optional parameter tenantId
  - Interface DedicatedCapacityMutableProperties has a new optional parameter friendlyName
  - Interface DedicatedCapacityMutableProperties has a new optional parameter tenantId
  - Interface DedicatedCapacityUpdateParameters has a new optional parameter friendlyName
  - Interface DedicatedCapacityUpdateParameters has a new optional parameter tenantId
  - Interface Operation has a new optional parameter origin
  - Interface Operation has a new optional parameter properties
  - Interface OperationDisplay has a new optional parameter description
  - Interface SkuDetailsForExistingResource has a new optional parameter resourceType
  - Added Enum KnownCreatedByType

### Breaking Changes

  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter tags
  - Type of parameter createdByType of interface SystemData is changed from IdentityType to CreatedByType
  - Type of parameter lastModifiedByType of interface SystemData is changed from IdentityType to CreatedByType
  - Removed Enum KnownIdentityType
    
## 4.0.1 (2023-01-31)

### Features Added

  - Exposes `getContinuationToken` helper function to extract continuation token

### Bugs Fixed

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 4.0.0 (2022-07-07)
    
### Features Added

  - Added Interface AutoScaleVCore
  - Added Interface AutoScaleVCoreProperties
  - Added Interface DedicatedCapacity
  - Added Interface DedicatedCapacityProperties

### Breaking Changes

  - Interface CapacitySku no longer has parameter capacity
  - Interface DedicatedCapacityMutableProperties no longer has parameter friendlyName
  - Interface DedicatedCapacityMutableProperties no longer has parameter tenantId
  - Interface DedicatedCapacityUpdateParameters no longer has parameter friendlyName
  - Interface DedicatedCapacityUpdateParameters no longer has parameter tenantId
  - Interface Operation no longer has parameter origin
  - Interface Operation no longer has parameter properties
  - Interface OperationDisplay no longer has parameter description
  - Interface SkuDetailsForExistingResource no longer has parameter resourceType
    
## 3.0.1 (2022-04-28)

### Features Added

  - Bug fix
    
## 3.0.0 (2022-01-20)

The package of @azure/arm-powerbidedicated is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
