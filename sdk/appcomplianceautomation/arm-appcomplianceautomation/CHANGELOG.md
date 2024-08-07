# Release History
    
## 2.0.0 (2024-08-07)
    
### Features Added

  - Added operation group ReportOperations
  - Added operation EvidenceOperations.listByReportResource
  - Added operation ProviderActionsOperations.onboard
  - Added operation ProviderActionsOperations.triggerEvaluation
  - Added operation ScopingConfigurationOperations.listByReportResource
  - Added operation SnapshotOperations.download
  - Added operation SnapshotOperations.listByReportResource
  - Added operation WebhookOperations.listByReportResource
  - Added Interface AppComplianceAutomationClientOptions
  - Added Interface EvidenceListByReportResourceOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface ReportCheckNameAvailabilityOptionalParams
  - Added Interface ReportListByTenantOptionalParams
  - Added Interface RestorePollerOptions
  - Added Interface ScopingConfigurationListByReportResourceOptionalParams
  - Added Interface SnapshotListByReportResourceOptionalParams
  - Added Interface WebhookListByReportResourceOptionalParams
  - Added Class AppComplianceAutomationClient
  - Added Type Alias ContinuablePage
  - Added Type Alias Versions
  - Enum KnownContentType has a new value "application/json"
  - Enum KnownEnableSslVerification has a new value "false"
  - Enum KnownEnableSslVerification has a new value "true"
  - Enum KnownIsRecommendSolution has a new value "false"
  - Enum KnownIsRecommendSolution has a new value "true"
  - Enum KnownNotificationEvent has a new value assessment_failure
  - Enum KnownNotificationEvent has a new value generate_snapshot_failed
  - Enum KnownNotificationEvent has a new value generate_snapshot_success
  - Enum KnownNotificationEvent has a new value report_configuration_changes
  - Enum KnownNotificationEvent has a new value report_deletion
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownSendAllEvents has a new value "false"
  - Enum KnownSendAllEvents has a new value "true"
  - Enum KnownUpdateWebhookKey has a new value "false"
  - Enum KnownUpdateWebhookKey has a new value "true"
  - Enum KnownWebhookKeyEnabled has a new value "false"
  - Enum KnownWebhookKeyEnabled has a new value "true"
  - Added function restorePoller

### Breaking Changes

  - Removed operation group Report_2
  - Removed operation Evidence.listByReport
  - Removed operation ProviderActions.beginOnboard
  - Removed operation ProviderActions.beginOnboardAndWait
  - Removed operation ProviderActions.beginTriggerEvaluation
  - Removed operation ProviderActions.beginTriggerEvaluationAndWait
  - Removed operation ScopingConfiguration.list
  - Removed operation Snapshot.beginDownload
  - Removed operation Snapshot.beginDownloadAndWait
  - Removed operation Snapshot.list
  - Removed operation Webhook.list
  - Deleted Class AppComplianceAutomationToolForMicrosoft365
  - Interface ProviderActionsOnboardOptionalParams no longer has parameter resumeFrom
  - Interface ProviderActionsTriggerEvaluationOptionalParams no longer has parameter resumeFrom
  - Interface ReportCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ReportDeleteOptionalParams no longer has parameter resumeFrom
  - Interface ReportFixOptionalParams no longer has parameter resumeFrom
  - Interface ReportSyncCertRecordOptionalParams no longer has parameter resumeFrom
  - Interface ReportUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ReportVerifyOptionalParams no longer has parameter resumeFrom
  - Interface SnapshotDownloadOptionalParams no longer has parameter resumeFrom
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Enum KnownContentType no longer has value ApplicationJson
  - Enum KnownEnableSslVerification no longer has value False
  - Enum KnownEnableSslVerification no longer has value True
  - Enum KnownIsRecommendSolution no longer has value False
  - Enum KnownIsRecommendSolution no longer has value True
  - Enum KnownNotificationEvent no longer has value AssessmentFailure
  - Enum KnownNotificationEvent no longer has value GenerateSnapshotFailed
  - Enum KnownNotificationEvent no longer has value GenerateSnapshotSuccess
  - Enum KnownNotificationEvent no longer has value ReportConfigurationChanges
  - Enum KnownNotificationEvent no longer has value ReportDeletion
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownSendAllEvents no longer has value False
  - Enum KnownSendAllEvents no longer has value True
  - Enum KnownUpdateWebhookKey no longer has value False
  - Enum KnownUpdateWebhookKey no longer has value True
  - Enum KnownWebhookKeyEnabled no longer has value False
  - Enum KnownWebhookKeyEnabled no longer has value True
  - Removed function getContinuationToken
    
    
## 1.0.0 (2024-06-25)

### Features Added

The package of @azure/arm-appcomplianceautomation is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
