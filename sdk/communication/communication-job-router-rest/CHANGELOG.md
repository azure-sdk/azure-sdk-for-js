# Release History
    
## 1.1.0-beta.2 (2024-12-23)
Compared with version 1.1.0-beta.1
    
### Features Added

  - Added Interface AzureCommunicationRoutingServiceClientOptions
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Type Alias RouterJobStatus
  - Added Type Alias RouterWorkerSelectorStatus
  - Added Type Alias RouterWorkerState

### Breaking Changes

  - Type of parameter kind of interface DistributionModeOutputParent is changed from string to DistributionModeKindOutput
  - Type of parameter kind of interface DistributionModeParent is changed from string to DistributionModeKind
  - Type of parameter kind of interface ExceptionActionOutputParent is changed from string to ExceptionActionKindOutput
  - Type of parameter kind of interface ExceptionActionParent is changed from string to ExceptionActionKind
  - Type of parameter kind of interface ExceptionTriggerOutputParent is changed from string to ExceptionTriggerKindOutput
  - Type of parameter kind of interface ExceptionTriggerParent is changed from string to ExceptionTriggerKind
  - Type of parameter language of interface ExpressionRouterRule is changed from string to ExpressionRouterRuleLanguage
  - Type of parameter language of interface ExpressionRouterRuleOutput is changed from string to ExpressionRouterRuleLanguageOutput
  - Type of parameter kind of interface JobMatchingModeOutputParent is changed from string to JobMatchingModeKindOutput
  - Type of parameter kind of interface JobMatchingModeParent is changed from string to JobMatchingModeKind
  - Type of parameter status of interface ListJobsQueryParamProperties is changed from string to RouterJobStatusSelector
  - Type of parameter state of interface ListWorkersQueryParamProperties is changed from string to RouterWorkerStateSelector
  - Type of parameter labelOperator of interface PassThroughQueueSelectorAttachment is changed from string to LabelOperator
  - Type of parameter labelOperator of interface PassThroughQueueSelectorAttachmentOutput is changed from string to LabelOperatorOutput
  - Type of parameter labelOperator of interface PassThroughWorkerSelectorAttachment is changed from string to LabelOperator
  - Type of parameter labelOperator of interface PassThroughWorkerSelectorAttachmentOutput is changed from string to LabelOperatorOutput
  - Type of parameter kind of interface QueueSelectorAttachmentOutputParent is changed from string to QueueSelectorAttachmentKindOutput
  - Type of parameter kind of interface QueueSelectorAttachmentParent is changed from string to QueueSelectorAttachmentKind
  - Type of parameter status of interface RouterJobOutput is changed from string to RouterJobStatusOutput
  - Type of parameter labelOperator of interface RouterQueueSelector is changed from string to LabelOperator
  - Type of parameter labelOperator of interface RouterQueueSelectorOutput is changed from string to LabelOperatorOutput
  - Type of parameter kind of interface RouterRuleOutputParent is changed from string to RouterRuleKindOutput
  - Type of parameter kind of interface RouterRuleParent is changed from string to RouterRuleKind
  - Type of parameter state of interface RouterWorkerOutput is changed from string to RouterWorkerStateOutput
  - Type of parameter labelOperator of interface RouterWorkerSelector is changed from string to LabelOperator
  - Type of parameter labelOperator of interface RouterWorkerSelectorOutput is changed from string to LabelOperatorOutput
  - Type of parameter status of interface RouterWorkerSelectorOutput is changed from string to RouterWorkerSelectorStatusOutput
  - Type of parameter scoringParameters of interface ScoringRuleOptions is changed from string[] to ScoringRuleParameterSelector[]
  - Type of parameter scoringParameters of interface ScoringRuleOptionsOutput is changed from string[] to ScoringRuleParameterSelectorOutput[]
  - Type of parameter kind of interface WorkerSelectorAttachmentOutputParent is changed from string to WorkerSelectorAttachmentKindOutput
  - Type of parameter kind of interface WorkerSelectorAttachmentParent is changed from string to WorkerSelectorAttachmentKind
  - Removed function overload "function createClient(connectionString: string, options: ClientOptions): AzureCommunicationRoutingServiceClient;"
  - Removed Type Alias PagedClassificationPolicyOutput
  - Removed Type Alias PagedDistributionPolicyOutput
  - Removed Type Alias PagedExceptionPolicyOutput
  - Removed Type Alias PagedRouterJobOutput
  - Removed Type Alias PagedRouterQueueOutput
  - Removed Type Alias PagedRouterWorkerOutput
    
