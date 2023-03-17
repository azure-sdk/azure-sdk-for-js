# Release History
    
## 1.0.0-beta.4 (2023-03-17)
    
**Features**

  - Added operation Experiments.beginCancel
  - Added operation Experiments.beginCancelAndWait
  - Added operation Experiments.beginCreateOrUpdate
  - Added operation Experiments.beginCreateOrUpdateAndWait
  - Added operation Experiments.beginStart
  - Added operation Experiments.beginStartAndWait
  - Added operation Experiments.update
  - Added Interface ComponentsEwb5TmSchemasUserassignedidentitiesAdditionalproperties
  - Added Interface ExperimentsCancelHeaders
  - Added Interface ExperimentsStartHeaders
  - Added Interface ExperimentsUpdateOptionalParams
  - Added Interface ExperimentUpdate
  - Added Type Alias ExperimentsUpdateResponse
  - Interface ExperimentsCancelOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsCancelOptionalParams has a new optional parameter updateIntervalInMs
  - Interface ExperimentsCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsCreateOrUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Interface ExperimentsStartOptionalParams has a new optional parameter resumeFrom
  - Interface ExperimentsStartOptionalParams has a new optional parameter updateIntervalInMs
  - Interface ResourceIdentity has a new optional parameter userAssignedIdentities
  - Add parameters of ExperimentsCancelHeaders to TypeAlias ExperimentsCancelResponse
  - Add parameters of ExperimentsStartHeaders to TypeAlias ExperimentsStartResponse

**Breaking Changes**

  - Removed operation Experiments.cancel
  - Removed operation Experiments.createOrUpdate
  - Removed operation Experiments.start
  - Interface Selector no longer has parameter filter
  - Removed Enum KnownFilterType
    
    
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
