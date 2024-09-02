## 1.0.0-beta.1 (2024-09-02)
    
### Features Added

  - Added Interface AnomalyDetectorClientOptions
  - Added Interface ResponseErrorOutput
  - Added Type Alias AlignMode
  - Added Type Alias AlignModeOutput
  - Added Type Alias AnomalyDetectorClient
  - Added Type Alias AnomalyDetectorErrorCodesOutput
  - Added Type Alias APIVersion
  - Added Type Alias DataSchema
  - Added Type Alias DataSchemaOutput
  - Added Type Alias FillNAMethod
  - Added Type Alias FillNAMethodOutput
  - Added Type Alias ImputeMode
  - Added Type Alias ModelStatus
  - Added Type Alias ModelStatusOutput
  - Added Type Alias MultivariateBatchDetectionStatusOutput
  - Added Type Alias TimeGranularity

### Breaking Changes

  - Interface ModelInfo no longer has parameter diagnosticsInfo
  - Interface ModelInfo no longer has parameter status
  - Parameter code of interface AnomalyDetectorErrorOutput is now required
  - Parameter message of interface AnomalyDetectorErrorOutput is now required
  - Parameter x-ms-error-code of interface DetectUnivariateChangePointDefaultHeaders is now required
  - Parameter x-ms-error-code of interface DetectUnivariateEntireSeriesDefaultHeaders is now required
  - Parameter x-ms-error-code of interface DetectUnivariateLastPointDefaultHeaders is now required
  - Type of parameter alignMode of interface AlignPolicy is changed from "Inner" | "Outer" to AlignMode
  - Type of parameter fillNAMethod of interface AlignPolicy is changed from string to FillNAMethod
  - Type of parameter alignMode of interface AlignPolicyOutput is changed from "Inner" | "Outer" to AlignModeOutput
  - Type of parameter fillNAMethod of interface AlignPolicyOutput is changed from string to FillNAMethodOutput
  - Type of parameter code of interface AnomalyDetectorErrorOutput is changed from string to AnomalyDetectorErrorCodesOutput
  - Type of parameter body of interface DeleteMultivariateModelDefaultResponse is changed from ErrorResponseOutput to ResponseErrorOutput
  - Type of parameter body of interface DetectMultivariateBatchAnomalyDefaultResponse is changed from ErrorResponseOutput to ResponseErrorOutput
  - Type of parameter body of interface DetectMultivariateLastAnomalyDefaultResponse is changed from ErrorResponseOutput to ResponseErrorOutput
  - Type of parameter body of interface GetMultivariateBatchDetectionResultDefaultResponse is changed from ErrorResponseOutput to ResponseErrorOutput
  - Type of parameter body of interface GetMultivariateModelDefaultResponse is changed from ErrorResponseOutput to ResponseErrorOutput
  - Type of parameter body of interface ListMultivariateModelsDefaultResponse is changed from ErrorResponseOutput to ResponseErrorOutput
  - Type of parameter dataSchema of interface ModelInfo is changed from string to DataSchema
  - Type of parameter dataSchema of interface ModelInfoOutput is changed from string to DataSchemaOutput
  - Type of parameter status of interface ModelInfoOutput is changed from "CREATED" | "RUNNING" | "READY" | "FAILED" to ModelStatusOutput
  - Type of parameter status of interface MultivariateBatchDetectionResultSummaryOutput is changed from "CREATED" | "RUNNING" | "READY" | "FAILED" to MultivariateBatchDetectionStatusOutput
  - Type of parameter body of interface TrainMultivariateModelDefaultResponse is changed from ErrorResponseOutput to ResponseErrorOutput
  - Type of parameter granularity of interface UnivariateChangePointDetectionOptions is changed from "yearly" | "monthly" | "weekly" | "daily" | "hourly" | "minutely" | "secondly" | "microsecond" | "none" to TimeGranularity
  - Type of parameter granularity of interface UnivariateDetectionOptions is changed from "yearly" | "monthly" | "weekly" | "daily" | "hourly" | "minutely" | "secondly" | "microsecond" | "none" to TimeGranularity
  - Type of parameter imputeMode of interface UnivariateDetectionOptions is changed from string to ImputeMode
    
