# Release History
    
## 3.0.0-beta.1 (2025-04-30)
Compared with version 2.0.3
    
### Features Added

  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface MigrateClientOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Class MigrateClient
  - Added Type Alias ActionType
  - Added Type Alias ContinuablePage
  - Added Type Alias Origin
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter isDataAction
  - Added Enum KnownActionType
  - Added Enum KnownAKSApiVersions
  - Added Enum KnownOrigin

### Breaking Changes

  - Removed operation group AssessedMachines
  - Removed operation group Assessments
  - Removed operation group Groups
  - Removed operation group HyperVCollectors
  - Removed operation group ImportCollectors
  - Removed operation group Machines
  - Removed operation group PrivateEndpointConnectionOperations
  - Removed operation group PrivateLinkResourceOperations
  - Removed operation group Projects
  - Removed operation group ServerCollectors
  - Removed operation group VMwareCollectors
  - Deleted Class AzureMigrateV2
  - Type of parameter origin of interface Operation is changed from string to Origin
  - Removed Enum KnownAssessmentSizingCriterion
  - Removed Enum KnownAssessmentStage
  - Removed Enum KnownAssessmentStatus
  - Removed Enum KnownAzureDiskSize
  - Removed Enum KnownAzureDiskSuitabilityDetail
  - Removed Enum KnownAzureDiskSuitabilityExplanation
  - Removed Enum KnownAzureDiskType
  - Removed Enum KnownAzureHybridUseBenefit
  - Removed Enum KnownAzureLocation
  - Removed Enum KnownAzureNetworkAdapterSuitabilityDetail
  - Removed Enum KnownAzureNetworkAdapterSuitabilityExplanation
  - Removed Enum KnownAzureOfferCode
  - Removed Enum KnownAzurePricingTier
  - Removed Enum KnownAzureStorageRedundancy
  - Removed Enum KnownAzureVmFamily
  - Removed Enum KnownAzureVmSize
  - Removed Enum KnownAzureVmSuitabilityDetail
  - Removed Enum KnownAzureVmSuitabilityExplanation
  - Removed Enum KnownCloudSuitability
  - Removed Enum KnownCurrency
  - Removed Enum KnownGroupStatus
  - Removed Enum KnownGroupUpdateOperation
  - Removed Enum KnownMachineBootType
  - Removed Enum KnownPercentile
  - Removed Enum KnownPrivateEndpointConnectionPropertiesProvisioningState
  - Removed Enum KnownPrivateLinkServiceConnectionStateStatus
  - Removed Enum KnownProjectStatus
  - Removed Enum KnownProvisioningState
  - Removed Enum KnownReservedInstance
  - Removed Enum KnownTimeRange
  - Removed function getContinuationToken
    
## 2.0.3 (2023-01-29)

### Features Added

  - Exposes `getContinuationToken` helper function to extract continuation token

### Bugs Fixed

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 2.0.2 (2022-07-04)

### Features Added

  - Bug fix

## 2.0.1 (2022-04-25)

### Features Added

  - Bug fix
    
## 2.0.0 (2022-01-20)

The package of @azure/arm-migrate is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
