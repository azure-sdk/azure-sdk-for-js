# Release History
    
## 1.0.0-beta.2 (2024-10-01)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface MicrosoftComputeScheduleOptionalParams
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Class MicrosoftComputeSchedule
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Added Type Alias ScheduledActionsVirtualMachinesCancelOperationsResponse
  - Added Type Alias ScheduledActionsVirtualMachinesExecuteDeallocateResponse
  - Added Type Alias ScheduledActionsVirtualMachinesExecuteHibernateResponse
  - Added Type Alias ScheduledActionsVirtualMachinesExecuteStartResponse
  - Added Type Alias ScheduledActionsVirtualMachinesGetOperationErrorsResponse
  - Added Type Alias ScheduledActionsVirtualMachinesGetOperationStatusResponse
  - Added Type Alias ScheduledActionsVirtualMachinesSubmitDeallocateResponse
  - Added Type Alias ScheduledActionsVirtualMachinesSubmitHibernateResponse
  - Added Type Alias ScheduledActionsVirtualMachinesSubmitStartResponse
  - Added function getContinuationToken

### Breaking Changes

  - Deleted Class ComputeScheduleClient
  - Type of parameter errorDetails of interface OperationErrorDetails is changed from string to Date
  - Type of parameter timeStamp of interface OperationErrorDetails is changed from string to Date
  - Type of parameter activationTime of interface OperationErrorsResult is changed from string to Date
  - Type of parameter completedAt of interface OperationErrorsResult is changed from string to Date
  - Type of parameter creationTime of interface OperationErrorsResult is changed from string to Date
  - Type of parameter completedAt of interface ResourceOperationDetails is changed from string to Date
  - Type of parameter deadline of interface ResourceOperationDetails is changed from string to Date
  - Type of parameter deadLine of interface Schedule is changed from string to Date
    
    
## 1.0.0-beta.1 (2024-09-20)

### Features Added

Initial release of the Azure ComputeSchedule package
