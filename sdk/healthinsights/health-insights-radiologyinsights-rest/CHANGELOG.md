# Release History
    
## 2.0.0 (2025-03-26)
    
### Features Added

  - Added operation group SimplePollerLike
  - Added Interface AssessmentValueRange
  - Added Interface AssessmentValueRangeOutput
  - Added Interface AzureHealthInsightsClientOptions
  - Added Interface CreateJobExpandQueryParam
  - Added Interface Element_2
  - Added Interface GetJobExpandQueryParam
  - Added Interface GuidanceInference
  - Added Interface GuidanceInferenceOutput
  - Added Interface GuidanceOptions
  - Added Interface GuidanceOptionsOutput
  - Added Interface PresentGuidanceInformation
  - Added Interface PresentGuidanceInformationOutput
  - Added Interface QualityMeasureInference
  - Added Interface QualityMeasureInferenceOutput
  - Added Interface QualityMeasureOptions
  - Added Interface QualityMeasureOptionsOutput
  - Added Interface ScoringAndAssessmentInference
  - Added Interface ScoringAndAssessmentInferenceOutput
  - Added Type Alias GuidanceRankingType
  - Added Type Alias QualityMeasureComplianceType
  - Added Type Alias ScoringAndAssessmentCategoryType
  - Interface RadiologyInsightsInferenceOptions has a new optional parameter guidanceOptions
  - Interface RadiologyInsightsInferenceOptions has a new optional parameter qualityMeasureOptions
  - Interface RadiologyInsightsInferenceOptionsOutput has a new optional parameter guidanceOptions
  - Interface RadiologyInsightsInferenceOptionsOutput has a new optional parameter qualityMeasureOptions
  - Added function overload "export function isUnexpected(response: GetJob200Response | GetJobDefaultResponse): response is GetJobDefaultResponse;"
  - Added function overload "export function isUnexpected(response: CreateJob200Response | CreateJob201Response | CreateJobLogicalResponse | CreateJobDefaultResponse): response is CreateJobDefaultResponse;"

### Breaking Changes

  - Operation GetJob.put has a new signature
  - Interface HealthInsightsErrorResponseOutput no longer has parameter requestId
  - Type of parameter expand of interface CreateJobQueryParamProperties is changed from string to CreateJobExpandQueryParam
  - Type of parameter valueTime of interface Extension is changed from Date | string to string
  - Type of parameter expand of interface GetJobQueryParamProperties is changed from string to GetJobExpandQueryParam
  - Type of parameter valueTime of interface Observation is changed from Date | string to string
  - Type of parameter valueTime of interface ObservationComponent is changed from Date | string to string
  - Type of parameter birthDate of interface PatientDetails is changed from Date | string to string
  - Removed Enum ClinicalDocumentTypeEnum
  - Removed Enum ClinicalDocumentTypeOutputEnum
  - Removed function buildMultiCollection
  - Function getLongRunningPoller has a new signature
  - Removed function overload "export function isUnexpected(response: GetJob200Response | GetJobDefaultResponse): response is GetJobDefaultResponse;"
  - Removed function overload "export function isUnexpected(response: CreateJob200Response | CreateJob201Response | CreateJobLogicalResponse | CreateJobDefaultResponse): response is CreateJobDefaultResponse;"
  - Removed Type Alias DocumentType
  - Type alias "ClinicalDocumentType" has been changed
  - Type alias "ClinicalDocumentTypeOutput" has been changed
    
