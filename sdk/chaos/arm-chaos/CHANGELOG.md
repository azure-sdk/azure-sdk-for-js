# Release History
    
## 2.0.0-beta.1 (2024-11-18)
Compared with version 1.1.0
    
### Features Added

  - Added Interface Action
  - Added Interface Branch
  - Added Interface Filter
  - Added Interface ListSelector
  - Added Interface QuerySelector
  - Added Interface Selector
  - Added Interface SimpleFilter
  - Added Interface SimpleFilterParameters
  - Added Interface Step
  - Added Type Alias ActionUnion
  - Added Type Alias FilterUnion
  - Added Type Alias SelectorUnion

### Breaking Changes

  - Type of parameter selectors of interface Experiment is changed from ChaosTargetSelectorUnion[] to SelectorUnion[]
  - Type of parameter steps of interface Experiment is changed from ChaosExperimentStep[] to Step[]
  - Type of parameter endTime of interface OperationStatus is changed from string to Date
  - Type of parameter startTime of interface OperationStatus is changed from string to Date
    
    
## 1.1.0 (2024-03-06)
    
### Features Added

  - Interface ExperimentUpdate has a new optional parameter tags
    
    
## 1.0.0 (2023-11-06)

The package of @azure/arm-chaos is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
