# Release History
    
## 1.0.0-beta.5 (2023-10-04)
    
**Features**

  - Added operation group OperationStatuses
  - Added operation Experiments.beginCancel
  - Added operation Experiments.beginCancelAndWait
  - Added operation Experiments.beginCreateOrUpdate
  - Added operation Experiments.beginCreateOrUpdateAndWait
  - Added operation Experiments.beginDelete
  - Added operation Experiments.beginDeleteAndWait
  - Added operation Experiments.beginStart
  - Added operation Experiments.beginStartAndWait
  - Added operation Experiments.beginUpdate
  - Added operation Experiments.beginUpdateAndWait
  - Added Interface ChaosExperimentAction
  - Added Interface ChaosExperimentBranch
  - Added Interface ChaosExperimentStep
  - Added Interface ChaosTargetFilter
  - Added Interface ChaosTargetListSelector
  - Added Interface ChaosTargetQuerySelector
  - Added Interface ChaosTargetSelector
  - Added Interface ChaosTargetSimpleFilter
  - Added Interface ChaosTargetSimpleFilterParameters
  - Added Interface CustomerDataStorageProperties
  - Added Interface OperationStatus
  - Added Interface OperationStatusesGetOptionalParams
  - Added Type Alias ChaosExperimentActionUnion
  - Added Type Alias ChaosTargetFilterUnion
  - Added Type Alias ChaosTargetSelectorUnion
  - Added Type Alias OperationStatusesGetResponse
  - Added Type Alias ProvisioningState
  - Interface Experiment has a new optional parameter customerDataStorage
  - Interface Experiment has a new optional parameter provisioningState
  - Interface ExperimentsCancelOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsCancelOptionalParams has a new optional parameter updateIntervalInMs
  - Interface ExperimentsCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsCreateOrUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Interface ExperimentsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsDeleteOptionalParams has a new optional parameter updateIntervalInMs
  - Interface ExperimentsStartOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsStartOptionalParams has a new optional parameter updateIntervalInMs
  - Interface ExperimentsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Added Enum KnownProvisioningState

**Breaking Changes**

  - Removed operation Experiments.cancel
  - Removed operation Experiments.createOrUpdate
  - Removed operation Experiments.delete
  - Removed operation Experiments.start
  - Removed operation Experiments.update
  - Interface Experiment no longer has parameter startOnCreation
  - Type of parameter selectors of interface Experiment is changed from SelectorUnion[] to ChaosTargetSelectorUnion[]
  - Type of parameter steps of interface Experiment is changed from Step[] to ChaosExperimentStep[]
    
    
## 1.0.0-beta.4 (2023-08-04)
    
**Features**

  - Added operation Experiments.update
  - Added Interface ExperimentsUpdateOptionalParams
  - Added Interface ExperimentUpdate
  - Added Interface ListSelector
  - Added Interface QuerySelector
  - Added Interface UserAssignedIdentity
  - Added Type Alias ExperimentsUpdateResponse
  - Added Type Alias SelectorUnion
  - Added Type Alias TargetReferenceType
  - Interface CapabilityType has a new optional parameter azureRbacActions
  - Interface CapabilityType has a new optional parameter azureRbacDataActions
  - Interface ResourceIdentity has a new optional parameter userAssignedIdentities
  - Added Enum KnownSelectorType
  - Added Enum KnownTargetReferenceType
  - Class ChaosManagementClient has a new signature

**Breaking Changes**

  - Interface Selector no longer has parameter targets
  - Type of parameter selectors of interface Experiment is changed from Selector[] to SelectorUnion[]
  - Type of parameter type of interface Selector is changed from SelectorType to "List" | "Query"
  - Type of parameter type of interface TargetReference is changed from "ChaosTarget" to TargetReferenceType
    
    
## 1.0.0-beta.3 (2023-01-12)
    
**Features**

  - Interface CapabilitiesListNextOptionalParams no longer has parameter continuationToken
  - Interface CapabilityTypesListNextOptionalParams no longer has parameter continuationToken
  - Interface ExperimentsListAllNextOptionalParams no longer has parameter continuationToken
  - Interface ExperimentsListAllNextOptionalParams no longer has parameter running
  - Interface ExperimentsListNextOptionalParams no longer has parameter continuationToken
  - Interface ExperimentsListNextOptionalParams no longer has parameter running
  - Interface TargetsListNextOptionalParams no longer has parameter continuationToken
  - Interface TargetTypesListNextOptionalParams no longer has parameter continuationToken
    
    
## 1.0.0-beta.2 (2022-10-19)
    
**Features**

  - Added Interface Filter
  - Added Interface SimpleFilter
  - Added Interface SimpleFilterParameters
  - Added Type Alias FilterType
  - Added Type Alias FilterUnion
  - Interface Selector has a new optional parameter filter
  - Added Enum KnownFilterType
    
    
## 1.0.0-beta.1 (2022-09-13)

The package of @azure/arm-chaos is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
