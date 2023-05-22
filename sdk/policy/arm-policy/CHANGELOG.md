# Release History
    
## 6.0.0-beta.1 (2023-05-22)
    
**Features**

  - Added operation group Variables
  - Added operation group VariableValues
  - Added operation PolicyExemptions.update
  - Added Interface Override
  - Added Interface PolicyExemptionsUpdateOptionalParams
  - Added Interface PolicyExemptionUpdate
  - Added Interface PolicyVariableColumn
  - Added Interface PolicyVariableValueColumnValue
  - Added Interface ResourceSelector
  - Added Interface Selector
  - Added Interface Variable
  - Added Interface VariableListResult
  - Added Interface VariablesCreateOrUpdateAtManagementGroupOptionalParams
  - Added Interface VariablesCreateOrUpdateOptionalParams
  - Added Interface VariablesDeleteAtManagementGroupOptionalParams
  - Added Interface VariablesDeleteOptionalParams
  - Added Interface VariablesGetAtManagementGroupOptionalParams
  - Added Interface VariablesGetOptionalParams
  - Added Interface VariablesListForManagementGroupNextOptionalParams
  - Added Interface VariablesListForManagementGroupOptionalParams
  - Added Interface VariablesListNextOptionalParams
  - Added Interface VariablesListOptionalParams
  - Added Interface VariableValue
  - Added Interface VariableValueListResult
  - Added Interface VariableValuesCreateOrUpdateAtManagementGroupOptionalParams
  - Added Interface VariableValuesCreateOrUpdateOptionalParams
  - Added Interface VariableValuesDeleteAtManagementGroupOptionalParams
  - Added Interface VariableValuesDeleteOptionalParams
  - Added Interface VariableValuesGetAtManagementGroupOptionalParams
  - Added Interface VariableValuesGetOptionalParams
  - Added Interface VariableValuesListForManagementGroupNextOptionalParams
  - Added Interface VariableValuesListForManagementGroupOptionalParams
  - Added Interface VariableValuesListNextOptionalParams
  - Added Interface VariableValuesListOptionalParams
  - Added Type Alias AssignmentScopeValidation
  - Added Type Alias OverrideKind
  - Added Type Alias PolicyExemptionsUpdateResponse
  - Added Type Alias SelectorKind
  - Added Type Alias VariablesCreateOrUpdateAtManagementGroupResponse
  - Added Type Alias VariablesCreateOrUpdateResponse
  - Added Type Alias VariablesGetAtManagementGroupResponse
  - Added Type Alias VariablesGetResponse
  - Added Type Alias VariablesListForManagementGroupNextResponse
  - Added Type Alias VariablesListForManagementGroupResponse
  - Added Type Alias VariablesListNextResponse
  - Added Type Alias VariablesListResponse
  - Added Type Alias VariableValuesCreateOrUpdateAtManagementGroupResponse
  - Added Type Alias VariableValuesCreateOrUpdateResponse
  - Added Type Alias VariableValuesGetAtManagementGroupResponse
  - Added Type Alias VariableValuesGetResponse
  - Added Type Alias VariableValuesListForManagementGroupNextResponse
  - Added Type Alias VariableValuesListForManagementGroupResponse
  - Added Type Alias VariableValuesListNextResponse
  - Added Type Alias VariableValuesListResponse
  - Interface PolicyAssignment has a new optional parameter overrides
  - Interface PolicyAssignment has a new optional parameter resourceSelectors
  - Interface PolicyAssignmentUpdate has a new optional parameter overrides
  - Interface PolicyAssignmentUpdate has a new optional parameter resourceSelectors
  - Interface PolicyExemption has a new optional parameter assignmentScopeValidation
  - Interface PolicyExemption has a new optional parameter resourceSelectors
  - Added Enum KnownAssignmentScopeValidation
  - Added Enum KnownOverrideKind
  - Added Enum KnownSelectorKind

**Breaking Changes**

  - Interface DataPolicyManifestsListNextOptionalParams no longer has parameter filter
  - Interface PolicyAssignmentsListForManagementGroupNextOptionalParams no longer has parameter filter
  - Interface PolicyAssignmentsListForManagementGroupNextOptionalParams no longer has parameter top
  - Interface PolicyAssignmentsListForResourceGroupNextOptionalParams no longer has parameter filter
  - Interface PolicyAssignmentsListForResourceGroupNextOptionalParams no longer has parameter top
  - Interface PolicyAssignmentsListForResourceNextOptionalParams no longer has parameter filter
  - Interface PolicyAssignmentsListForResourceNextOptionalParams no longer has parameter top
  - Interface PolicyAssignmentsListNextOptionalParams no longer has parameter filter
  - Interface PolicyAssignmentsListNextOptionalParams no longer has parameter top
  - Interface PolicyDefinitionsListBuiltInNextOptionalParams no longer has parameter filter
  - Interface PolicyDefinitionsListBuiltInNextOptionalParams no longer has parameter top
  - Interface PolicyDefinitionsListByManagementGroupNextOptionalParams no longer has parameter filter
  - Interface PolicyDefinitionsListByManagementGroupNextOptionalParams no longer has parameter top
  - Interface PolicyDefinitionsListNextOptionalParams no longer has parameter filter
  - Interface PolicyDefinitionsListNextOptionalParams no longer has parameter top
  - Interface PolicyExemptionsListForManagementGroupNextOptionalParams no longer has parameter filter
  - Interface PolicyExemptionsListForResourceGroupNextOptionalParams no longer has parameter filter
  - Interface PolicyExemptionsListForResourceNextOptionalParams no longer has parameter filter
  - Interface PolicyExemptionsListNextOptionalParams no longer has parameter filter
  - Interface PolicySetDefinitionsListBuiltInNextOptionalParams no longer has parameter filter
  - Interface PolicySetDefinitionsListBuiltInNextOptionalParams no longer has parameter top
  - Interface PolicySetDefinitionsListByManagementGroupNextOptionalParams no longer has parameter filter
  - Interface PolicySetDefinitionsListByManagementGroupNextOptionalParams no longer has parameter top
  - Interface PolicySetDefinitionsListNextOptionalParams no longer has parameter filter
  - Interface PolicySetDefinitionsListNextOptionalParams no longer has parameter top
    
## 5.0.3 (2022-11-28)

**Features**

 -  Exposes `getContinuationToken` helper function to extract continuation token

**Bugs Fixed**

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 5.0.2 (2022-07-04)

**features**

  - Bug fix

## 5.0.1 (2022-04-18)

**features**

  - Bug fix

## 5.0.0 (2021-12-07)

The package of @azure/arm-policy is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
