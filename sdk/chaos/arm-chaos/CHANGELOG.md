# Release History
    
## 2.0.0 (2024-11-25)
    
### Features Added

  - Added Interface ExperimentsCancelHeaders
  - Added Interface ExperimentsCreateOrUpdateHeaders
  - Added Interface ExperimentsDeleteHeaders
  - Added Interface ExperimentsStartHeaders
  - Added Interface ExperimentsUpdateHeaders
  - Added Interface ManagedServiceIdentity
  - Added Interface OperationStatusResult
  - Added Interface PostActionResult
  - Added Interface ProxyResource
  - Added Type Alias ExperimentActionType
  - Added Type Alias ExperimentsCancelResponse
  - Added Type Alias ExperimentsDeleteResponse
  - Added Type Alias ExperimentsStartResponse
  - Added Type Alias ManagedServiceIdentityType
  - Interface Resource has a new optional parameter systemData
  - Type of parameter type of interface ChaosExperimentAction is changed from "delay" | "discrete" | "continuous" to "continuous" | "delay" | "discrete"
  - Added Enum KnownExperimentActionType
  - Added Enum KnownManagedServiceIdentityType

### Breaking Changes

  - Interface Capability no longer has parameter systemData
  - Interface CapabilityType no longer has parameter location
  - Interface CapabilityType no longer has parameter systemData
  - Interface Experiment no longer has parameter systemData
  - Interface ExperimentExecution no longer has parameter id
  - Interface ExperimentExecution no longer has parameter name
  - Interface ExperimentExecution no longer has parameter type
  - Interface Target no longer has parameter systemData
  - Interface TargetType no longer has parameter location
  - Interface TargetType no longer has parameter systemData
  - Type of parameter identity of interface Experiment is changed from ResourceIdentity to ManagedServiceIdentity
  - Type of parameter identity of interface ExperimentUpdate is changed from ResourceIdentity to ManagedServiceIdentity
    
    
## 1.1.0 (2024-03-06)
    
### Features Added

  - Interface ExperimentUpdate has a new optional parameter tags
    
    
## 1.0.0 (2023-11-06)

The package of @azure/arm-chaos is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
