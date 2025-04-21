# Release History
    
## 2.0.0 (2025-04-21)
    
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
  - Interface OperationErrorDetails has a new optional parameter timeStamp
  - Interface ResourceOperationDetails has a new optional parameter timeZone
  - Interface Schedule has a new optional parameter deadLine
  - Interface Schedule has a new optional parameter timeZone
  - Added function getContinuationToken

### Breaking Changes

  - Deleted Class ComputeScheduleClient
  - Interface CancelOperationsRequest no longer has parameter correlationId
  - Interface ExecuteDeallocateRequest no longer has parameter correlationId
  - Interface ExecuteHibernateRequest no longer has parameter correlationId
  - Interface ExecuteStartRequest no longer has parameter correlationId
  - Interface GetOperationStatusRequest no longer has parameter correlationId
  - Interface OperationErrorDetails no longer has parameter errorDetailsTimestamp
  - Interface ResourceOperationDetails no longer has parameter operationTimezone
  - Interface Schedule no longer has parameter userRequestDeadline
  - Interface Schedule no longer has parameter userRequestTimezone
  - Interface SubmitDeallocateRequest no longer has parameter correlationId
  - Interface SubmitHibernateRequest no longer has parameter correlationId
  - Interface SubmitStartRequest no longer has parameter correlationId
  - Interface CancelOperationsRequest has a new required parameter correlationid
  - Interface ExecuteDeallocateRequest has a new required parameter correlationid
  - Interface ExecuteHibernateRequest has a new required parameter correlationid
  - Interface ExecuteStartRequest has a new required parameter correlationid
  - Interface GetOperationStatusRequest has a new required parameter correlationid
  - Interface SubmitDeallocateRequest has a new required parameter correlationid
  - Interface SubmitHibernateRequest has a new required parameter correlationid
  - Interface SubmitStartRequest has a new required parameter correlationid
  - Type of parameter timestamp of interface OperationErrorDetails is changed from string to Date
  - Type of parameter activationTime of interface OperationErrorsResult is changed from string to Date
  - Type of parameter completedAt of interface OperationErrorsResult is changed from string to Date
  - Type of parameter creationTime of interface OperationErrorsResult is changed from string to Date
  - Type of parameter completedAt of interface ResourceOperationDetails is changed from string to Date
  - Type of parameter deadline of interface ResourceOperationDetails is changed from string to Date
  - Type of parameter deadline of interface Schedule is changed from string to Date
  - Removed Enum KnownVersions
    
    
## 1.0.0 (2025-01-24)

### Features Added

This is the first stable version with the package of @azure/arm-computeschedule
