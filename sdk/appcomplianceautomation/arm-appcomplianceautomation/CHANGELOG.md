# Release History
    
## 2.0.0 (2025-03-28)
    
### Features Added

  - Added operation group ReportOperations
  - Added operation ProviderActionsOperations.onboard
  - Added operation ProviderActionsOperations.triggerEvaluation
  - Added operation SnapshotOperations.download
  - Added Interface AppComplianceAutomationClientOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface ReportCheckNameAvailabilityOptionalParams
  - Added Interface RestorePollerOptions
  - Added Class AppComplianceAutomationClient
  - Added Type Alias ContinuablePage
  - Added Enum KnownVersions
  - Added function restorePoller

### Breaking Changes

  - Removed operation group Report_2
  - Removed operation ProviderActions.beginOnboard
  - Removed operation ProviderActions.beginOnboardAndWait
  - Removed operation ProviderActions.beginTriggerEvaluation
  - Removed operation ProviderActions.beginTriggerEvaluationAndWait
  - Removed operation Snapshot.beginDownload
  - Removed operation Snapshot.beginDownloadAndWait
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
  - Removed function getContinuationToken
    
    
## 1.0.0 (2024-06-25)

### Features Added

The package of @azure/arm-appcomplianceautomation is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
