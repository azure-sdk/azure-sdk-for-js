# Release History
    
## 2.0.0-beta.1 (2024-06-20)
Compared with version 1.1.0
    
**Features**

  - Added operation group AutoUpgradeProfiles
  - Added operation UpdateRuns.skip
  - Added Interface AutoUpgradeNodeImageSelection
  - Added Interface AutoUpgradeProfile
  - Added Interface AutoUpgradeProfileListResult
  - Added Interface AutoUpgradeProfilesCreateOrUpdateHeaders
  - Added Interface AutoUpgradeProfilesCreateOrUpdateOptionalParams
  - Added Interface AutoUpgradeProfilesDeleteHeaders
  - Added Interface AutoUpgradeProfilesDeleteOptionalParams
  - Added Interface AutoUpgradeProfilesGetOptionalParams
  - Added Interface AutoUpgradeProfilesListByFleetNextOptionalParams
  - Added Interface AutoUpgradeProfilesListByFleetOptionalParams
  - Added Type Alias AutoUpgradeNodeImageSelectionType
  - Added Type Alias AutoUpgradeProfileProvisioningState
  - Added Type Alias AutoUpgradeProfilesCreateOrUpdateResponse
  - Added Type Alias AutoUpgradeProfilesGetResponse
  - Added Type Alias AutoUpgradeProfilesListByFleetNextResponse
  - Added Type Alias AutoUpgradeProfilesListByFleetResponse
  - Added Type Alias UpgradeChannel
  - Interface APIServerAccessProfile has a new optional parameter enableVnetIntegration
  - Interface APIServerAccessProfile has a new optional parameter subnetId
  - Interface NodeImageSelection has a new optional parameter customNodeImageVersions
  - Added Enum KnownAutoUpgradeNodeImageSelectionType
  - Added Enum KnownAutoUpgradeProfileProvisioningState
  - Added Enum KnownUpgradeChannel
  - Enum KnownNodeImageSelectionType has a new value Custom

**Breaking Changes**

  - Removed operation UpdateRuns.beginSkip
  - Removed operation UpdateRuns.beginSkipAndWait
  - Interface UpdateRunsSkipOptionalParams no longer has parameter resumeFrom
  - Interface UpdateRunsSkipOptionalParams no longer has parameter updateIntervalInMs
  - Enum KnownManagedClusterUpgradeType no longer has value ControlPlaneOnly
    
    
## 1.1.0 (2024-05-15)
    
**Features**

  - Added operation UpdateRuns.beginSkip
  - Added operation UpdateRuns.beginSkipAndWait
  - Added Interface AgentProfile
  - Added Interface APIServerAccessProfile
  - Added Interface FleetHubProfile
  - Added Interface SkipProperties
  - Added Interface SkipTarget
  - Added Interface UpdateRunsSkipHeaders
  - Added Interface UpdateRunsSkipOptionalParams
  - Added Type Alias TargetType
  - Added Type Alias UpdateRunsSkipResponse
  - Interface Fleet has a new optional parameter hubProfile
  - Added Enum KnownTargetType
  - Enum KnownManagedClusterUpgradeType has a new value ControlPlaneOnly
    
    
## 1.1.0-beta.1 (2024-04-03)
    
**Features**

  - Added operation UpdateRuns.beginSkip
  - Added operation UpdateRuns.beginSkipAndWait
  - Added Interface AgentProfile
  - Added Interface APIServerAccessProfile
  - Added Interface FleetHubProfile
  - Added Interface SkipProperties
  - Added Interface SkipTarget
  - Added Interface UpdateRunsSkipHeaders
  - Added Interface UpdateRunsSkipOptionalParams
  - Added Type Alias TargetType
  - Added Type Alias UpdateRunsSkipResponse
  - Interface Fleet has a new optional parameter hubProfile
  - Added Enum KnownTargetType
  - Enum KnownManagedClusterUpgradeType has a new value ControlPlaneOnly
    
    
## 1.0.0 (2023-10-27)

The package of @azure/arm-containerservicefleet is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
