# Release History
    
## 3.0.0-beta.1 (2025-05-13)
Compared with version 2.0.3
    
### Features Added

  - Added operation group AvsAssessedMachinesV2OperationsOperations
  - Added operation group AvsAssessmentsV2OperationsOperations
  - Added operation group AvsAssessmentV2SummaryOperationsOperations
  - Added operation group AvsGraphAssessmentOptionsOperationsOperations
  - Added Interface AssessmentDetails
  - Added Interface AvsAssessedDiskV2
  - Added Interface AvsAssessedMachineExtendedDetails
  - Added Interface AvsAssessedMachinePropertiesV2
  - Added Interface AvsAssessedMachinesV2OperationsGetOptionalParams
  - Added Interface AvsAssessedMachinesV2OperationsListByParentOptionalParams
  - Added Interface AvsAssessedMachineV2
  - Added Interface AvsAssessedNetworkAdapter
  - Added Interface AvsAssessmentOptionsOutboundEdgeGroup
  - Added Interface AvsAssessmentPropertiesV2
  - Added Interface AvsAssessmentSettings
  - Added Interface AvsAssessmentSummaryPropertiesV2
  - Added Interface AvsAssessmentsV2OperationsCreateOptionalParams
  - Added Interface AvsAssessmentsV2OperationsDeleteOptionalParams
  - Added Interface AvsAssessmentsV2OperationsDownloadUrlOptionalParams
  - Added Interface AvsAssessmentsV2OperationsGetOptionalParams
  - Added Interface AvsAssessmentsV2OperationsListByParentOptionalParams
  - Added Interface AvsAssessmentV2
  - Added Interface AvsAssessmentV2Summary
  - Added Interface AvsAssessmentV2SummaryOperationsGetOptionalParams
  - Added Interface AvsAssessmentV2SummaryOperationsListByParentOptionalParams
  - Added Interface AvsEstimatedExternalStorage
  - Added Interface AvsEstimatedNetwork
  - Added Interface AvsEstimatedNode
  - Added Interface AvsGraphAssessmentOptions
  - Added Interface AvsGraphAssessmentOptionsOperationsGetOptionalParams
  - Added Interface AvsGraphAssessmentOptionsOperationsListByParentOptionalParams
  - Added Interface AvsGraphAssessmentOptionsProperties
  - Added Interface AvsRecommendationsMigrationIssuesMigrationSuitabilitySkus
  - Added Interface BillingSettings
  - Added Interface Configuration
  - Added Interface CostDetailsCommon
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorModel
  - Added Interface ErrorResponse
  - Added Interface Linkages
  - Added Interface ManagementDetails
  - Added Interface MigrateClientOptionalParams
  - Added Interface MigrationDetails
  - Added Interface MigrationIssues
  - Added Interface MigrationSuitability
  - Added Interface MoreInformation
  - Added Interface NameValuePair
  - Added Interface NameValuePairCloudSuitabilityCommon
  - Added Interface NameValuePairCostType
  - Added Interface NameValuePairSavingsType
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface PerformanceData
  - Added Interface ProxyResource
  - Added Interface RecommendedFor
  - Added Interface Resource
  - Added Interface RestorePollerOptions
  - Added Interface SavingsDetailsCommon
  - Added Interface SavingsSettings
  - Added Interface Scope
  - Added Interface SecuritySuitability
  - Added Interface SkuDetails
  - Added Interface SkusMigrationSuitability
  - Added Interface SourceDetails
  - Added Interface SourceRecommendationMigrationSuitability
  - Added Interface SystemData
  - Added Interface TargetDetails
  - Added Interface TargetSourcePair
  - Added Class MigrateClient
  - Added Type Alias ActionType
  - Added Type Alias AssessedMachineType
  - Added Type Alias AssessmentSource
  - Added Type Alias AvsAssessmentScenario
  - Added Type Alias AzureAvsNodeType
  - Added Type Alias AzureAvsSuitabilityExplanation
  - Added Type Alias AzureCurrency
  - Added Type Alias AzureManagementOfferingType
  - Added Type Alias AzureOffer
  - Added Type Alias AzureReservedInstance
  - Added Type Alias AzureTarget
  - Added Type Alias CloudSuitabilityCommon
  - Added Type Alias ContinuablePage
  - Added Type Alias CostType
  - Added Type Alias CreatedByType
  - Added Type Alias EnvironmentType
  - Added Type Alias ExternalStorageType
  - Added Type Alias FttAndRaidLevel
  - Added Type Alias GuestOperatingSystemArchitecture
  - Added Type Alias LicensingProgram
  - Added Type Alias LinkageKind
  - Added Type Alias LinkageType
  - Added Type Alias MigrateWorkloadType
  - Added Type Alias MigrationIssuesCategory
  - Added Type Alias MigrationPlatform
  - Added Type Alias MigrationType
  - Added Type Alias NetworkSkuType
  - Added Type Alias Origin
  - Added Type Alias SavingsOptions
  - Added Type Alias SavingsType
  - Added Type Alias ScopeType
  - Added Type Alias SkuKind
  - Added Type Alias SkuType
  - Added Type Alias StrategyType
  - Added Type Alias SummaryType
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter isDataAction
  - Added Enum KnownActionType
  - Added Enum KnownAssessedMachineType
  - Added Enum KnownAssessmentSource
  - Added Enum KnownAvsApiVersions
  - Added Enum KnownAvsAssessmentScenario
  - Added Enum KnownAzureAvsNodeType
  - Added Enum KnownAzureAvsSuitabilityExplanation
  - Added Enum KnownAzureCurrency
  - Added Enum KnownAzureManagementOfferingType
  - Added Enum KnownAzureOffer
  - Added Enum KnownAzureReservedInstance
  - Added Enum KnownAzureTarget
  - Added Enum KnownCloudSuitabilityCommon
  - Added Enum KnownCostType
  - Added Enum KnownCreatedByType
  - Added Enum KnownEnvironmentType
  - Added Enum KnownExternalStorageType
  - Added Enum KnownFttAndRaidLevel
  - Added Enum KnownGuestOperatingSystemArchitecture
  - Added Enum KnownLicensingProgram
  - Added Enum KnownLinkageKind
  - Added Enum KnownLinkageType
  - Added Enum KnownMigrateWorkloadType
  - Added Enum KnownMigrationIssuesCategory
  - Added Enum KnownMigrationPlatform
  - Added Enum KnownMigrationType
  - Added Enum KnownNetworkSkuType
  - Added Enum KnownOrigin
  - Added Enum KnownSavingsOptions
  - Added Enum KnownSavingsType
  - Added Enum KnownScopeType
  - Added Enum KnownSkuKind
  - Added Enum KnownSkuType
  - Added Enum KnownStrategyType
  - Added Enum KnownSummaryType
  - Enum KnownAssessmentStatus has a new value Deleted
  - Enum KnownAssessmentStatus has a new value Failed
  - Enum KnownAzureLocation has a new value AustraliaCentral
  - Enum KnownAzureLocation has a new value AustraliaCentral2
  - Enum KnownAzureLocation has a new value ChinaEast2
  - Enum KnownAzureLocation has a new value ChinaNorth2
  - Enum KnownAzureLocation has a new value FranceCentral
  - Enum KnownAzureLocation has a new value FranceSouth
  - Enum KnownAzureLocation has a new value GermanyNorth
  - Enum KnownAzureLocation has a new value GermanyWestCentral
  - Enum KnownAzureLocation has a new value IsraelCentral
  - Enum KnownAzureLocation has a new value ItalyNorth
  - Enum KnownAzureLocation has a new value JioIndiaWest
  - Enum KnownAzureLocation has a new value MexicoCentral
  - Enum KnownAzureLocation has a new value NewZealandNorth
  - Enum KnownAzureLocation has a new value NorwayEast
  - Enum KnownAzureLocation has a new value NorwayWest
  - Enum KnownAzureLocation has a new value PolandCentral
  - Enum KnownAzureLocation has a new value QatarCentral
  - Enum KnownAzureLocation has a new value SouthAfricaNorth
  - Enum KnownAzureLocation has a new value SouthAfricaWest
  - Enum KnownAzureLocation has a new value SpainCentral
  - Enum KnownAzureLocation has a new value SwedenCentral
  - Enum KnownAzureLocation has a new value SwitzerlandNorth
  - Enum KnownAzureLocation has a new value SwitzerlandWest
  - Enum KnownAzureLocation has a new value UAECentral
  - Enum KnownAzureLocation has a new value UAENorth
  - Enum KnownAzureLocation has a new value UsNatEast
  - Enum KnownAzureLocation has a new value UsNatWest
  - Enum KnownAzureLocation has a new value UsSecCentral
  - Enum KnownAzureLocation has a new value UsSecEast
  - Enum KnownAzureLocation has a new value UsSecWest
  - Enum KnownMachineBootType has a new value NotSpecified
  - Enum KnownPercentile has a new value PercentileUnknown
  - Enum KnownProvisioningState has a new value Canceled
  - Enum KnownProvisioningState has a new value Provisioning
  - Enum KnownProvisioningState has a new value Updating
  - Added function restorePoller

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
  - Parameter assessmentReportUrl of interface DownloadUrl is now required
  - Parameter expirationTime of interface DownloadUrl is now required
  - Type of parameter origin of interface Operation is changed from string to Origin
  - Removed Enum KnownAssessmentStage
  - Removed Enum KnownAzureDiskSize
  - Removed Enum KnownAzureDiskSuitabilityDetail
  - Removed Enum KnownAzureDiskSuitabilityExplanation
  - Removed Enum KnownAzureDiskType
  - Removed Enum KnownAzureHybridUseBenefit
  - Removed Enum KnownAzureNetworkAdapterSuitabilityDetail
  - Removed Enum KnownAzureNetworkAdapterSuitabilityExplanation
  - Removed Enum KnownAzureOfferCode
  - Removed Enum KnownAzurePricingTier
  - Removed Enum KnownAzureStorageRedundancy
  - Removed Enum KnownAzureVmFamily
  - Removed Enum KnownAzureVmSize
  - Removed Enum KnownAzureVmSuitabilityDetail
  - Removed Enum KnownAzureVmSuitabilityExplanation
  - Removed Enum KnownCurrency
  - Removed Enum KnownGroupStatus
  - Removed Enum KnownGroupUpdateOperation
  - Removed Enum KnownPrivateEndpointConnectionPropertiesProvisioningState
  - Removed Enum KnownPrivateLinkServiceConnectionStateStatus
  - Removed Enum KnownProjectStatus
  - Removed Enum KnownReservedInstance
  - Enum KnownProvisioningState no longer has value Creating
  - Enum KnownProvisioningState no longer has value Moving
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
