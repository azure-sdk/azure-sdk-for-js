import * as coreClient from "@azure/core-client";

export type CreateRootCauseAnalysisDataSetUnion =
  | CreateRootCauseAnalysisDataSet
  | CreateMultiDimRCADataSet;
export type RootCauseAnalysisDataSetUnion =
  | RootCauseAnalysisDataSet
  | MultiDimRCADataSet;
export type CreateRootCauseAnalysisInstanceUnion =
  | CreateRootCauseAnalysisInstance
  | CreateMultiRCADimInstance;
export type RootCauseAnalysisInstanceUnion =
  | RootCauseAnalysisInstance
  | MultiRCADimInstance;
export type RootCauseAnalysisTrainingParameterUnion =
  | RootCauseAnalysisTrainingParameter
  | MultiDimRCATrainingParameter;
export type RootCauseAnalysisTrainingTaskInfoUnion =
  | RootCauseAnalysisTrainingTaskInfo
  | MultiDimRCATrainingTaskInfo;
export type RootCauseAnalysisInferenceParameterUnion =
  | RootCauseAnalysisInferenceParameter
  | MultiDimRCAInferenceParameter;
export type RootCauseAnalysisInferenceResultUnion =
  | RootCauseAnalysisInferenceResult
  | MultiDimRCAInferenceResult;

/** The request of entire or last anomaly detection. */
export interface DetectRequest {
  /** Time series data points. Points should be sorted by timestamp in ascending order to match the anomaly detection result. If the data is not sorted correctly or there is duplicated timestamp, the API will not work. In such case, an error message will be returned. */
  series: TimeSeriesPoint[];
  /** Optional argument, can be one of yearly, monthly, weekly, daily, hourly, minutely, secondly, microsecond or none. If granularity is not present, it will be none by default. If granularity is none, the timestamp property in time series point can be absent. */
  granularity?: TimeGranularity;
  /** Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}. */
  customInterval?: number;
  /** Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically. */
  period?: number;
  /** Optional argument, advanced model parameter, max anomaly ratio in a time series. */
  maxAnomalyRatio?: number;
  /** Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger the margin value will be which means less anomalies will be accepted. */
  sensitivity?: number;
  /** Used to specify how to deal with missing values in the input series, it's used when granularity is not "none". */
  imputeMode?: ImputeMode;
  /** Used to specify the value to fill, it's used when granularity is not "none" and imputeMode is "fixed". */
  imputeFixedValue?: number;
}

/** The definition of input timeseries points. */
export interface TimeSeriesPoint {
  /** Optional argument, timestamp of a data point (ISO8601 format). */
  timestamp?: Date;
  /** The measurement of that point, should be float. */
  value: number;
}

/** The response of entire anomaly detection. */
export interface EntireDetectResponse {
  /** Frequency extracted from the series, zero means no recurrent pattern has been found. */
  period: number;
  /** ExpectedValues contain expected value for each input point. The index of the array is consistent with the input series. */
  expectedValues: number[];
  /** UpperMargins contain upper margin of each input point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. Anomalies in response can be filtered by upperBoundary and lowerBoundary. By adjusting marginScale value, less significant anomalies can be filtered in client side. The index of the array is consistent with the input series. */
  upperMargins: number[];
  /** LowerMargins contain lower margin of each input point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. Points between the boundary can be marked as normal ones in client side. The index of the array is consistent with the input series. */
  lowerMargins: number[];
  /** IsAnomaly contains anomaly properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series. */
  isAnomaly: boolean[];
  /** IsNegativeAnomaly contains anomaly status in negative direction for each input point. True means a negative anomaly has been detected. A negative anomaly means the point is detected as an anomaly and its real value is smaller than the expected one. The index of the array is consistent with the input series. */
  isNegativeAnomaly: boolean[];
  /** IsPositiveAnomaly contain anomaly status in positive direction for each input point. True means a positive anomaly has been detected. A positive anomaly means the point is detected as an anomaly and its real value is larger than the expected one. The index of the array is consistent with the input series. */
  isPositiveAnomaly: boolean[];
  /** The severity score for each input point. The larger the value is, the more sever the anomaly is. For normal points, the "severity" is always 0. */
  severity?: number[];
}

/** Error information returned by the API. */
export interface AnomalyDetectorError {
  /** The error code. */
  code?: AnomalyDetectorErrorCodes;
  /** A message explaining the error reported by the service. */
  message?: string;
}

/** The response of last anomaly detection. */
export interface LastDetectResponse {
  /** Frequency extracted from the series, zero means no recurrent pattern has been found. */
  period: number;
  /** Suggested input series points needed for detecting the latest point. */
  suggestedWindow: number;
  /** Expected value of the latest point. */
  expectedValue: number;
  /** Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. If the value of latest point is between upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting marginScale value, anomaly status of latest point can be changed. */
  upperMargin: number;
  /** Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. */
  lowerMargin: number;
  /** Anomaly status of the latest point, true means the latest point is an anomaly either in negative direction or positive direction. */
  isAnomaly: boolean;
  /** Anomaly status in negative direction of the latest point. True means the latest point is an anomaly and its real value is smaller than the expected one. */
  isNegativeAnomaly: boolean;
  /** Anomaly status in positive direction of the latest point. True means the latest point is an anomaly and its real value is larger than the expected one. */
  isPositiveAnomaly: boolean;
  /** The severity score for the last input point. The larger the value is, the more sever the anomaly is. For normal points, the "severity" is always 0. */
  severity?: number;
}

/** The request of change point detection. */
export interface ChangePointDetectRequest {
  /** Time series data points. Points should be sorted by timestamp in ascending order to match the change point detection result. */
  series: TimeSeriesPoint[];
  /** Can only be one of yearly, monthly, weekly, daily, hourly, minutely or secondly. Granularity is used for verify whether input series is valid. */
  granularity: TimeGranularity;
  /** Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}. */
  customInterval?: number;
  /** Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically. */
  period?: number;
  /** Optional argument, advanced model parameter, a default stableTrendWindow will be used in detection. */
  stableTrendWindow?: number;
  /** Optional argument, advanced model parameter, between 0.0-1.0, the lower the value is, the larger the trend error will be which means less change point will be accepted. */
  threshold?: number;
}

/** The response of change point detection. */
export interface ChangePointDetectResponse {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been found.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly period?: number;
  /** isChangePoint contains change point properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series. */
  isChangePoint?: boolean[];
  /** the change point confidence of each point */
  confidenceScores?: number[];
}

/** Train result of a model including status, errors and diagnose info for model and variables. */
export interface ModelInfo {
  /** An optional field, indicating how many previous points will be used to compute the anomaly score of the subsequent point. */
  slidingWindow?: number;
  alignPolicy?: AlignPolicy;
  /** Source link to the input variables. Each variable should be a csv file with two columns, `timestamp` and `value`. By default, the file name of the variable will be used as its variable name. */
  source: string;
  /** A required field, indicating the start time of training data. Should be date-time. */
  startTime: Date;
  /** A required field, indicating the end time of training data. Should be date-time. */
  endTime: Date;
  /** An optional field. The name of the model whose maximum length is 24. */
  displayName?: string;
  /**
   * Model training status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: ModelStatus;
  /**
   * Error messages when failed to create a model.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly errors?: ErrorResponse[];
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly diagnosticsInfo?: DiagnosticsInfo;
}

export interface AlignPolicy {
  /** An optional field, indicating how we align different variables to the same time-range. Either Inner or Outer. */
  alignMode?: AlignMode;
  /** An optional field, indicating how missing values will be filled. One of Previous, Subsequent, Linear, Zero, Fixed, and NotFill. Cannot be set to NotFill, when the alignMode is Outer. */
  fillNAMethod?: FillNAMethod;
  /** An optional field. Required when fillNAMethod is Fixed. */
  paddingValue?: number;
}

export interface ErrorResponse {
  /** The error code. */
  code: string;
  /** The message explaining the error reported by the service. */
  message: string;
}

export interface DiagnosticsInfo {
  modelState?: ModelState;
  variableStates?: VariableState[];
}

export interface ModelState {
  /** Epoch id */
  epochIds?: number[];
  trainLosses?: number[];
  validationLosses?: number[];
  latenciesInSeconds?: number[];
}

export interface VariableState {
  /** Variable name. */
  variable?: string;
  /** Proportion of NaN values filled of the variable. */
  filledNARatio?: number;
  /** Number of effective points counted. */
  effectiveCount?: number;
  /** Start time of the variable. */
  startTime?: Date;
  /** End time of the variable. */
  endTime?: Date;
}

/** Response of listing models. */
export interface ModelList {
  /** List of models */
  models: ModelSnapshot[];
  /** Current count of trained multivariate models. */
  currentCount: number;
  /** Max number of models that can be trained for this subscription. */
  maxCount: number;
  /** The link to fetch more models. */
  nextLink?: string;
}

export interface ModelSnapshot {
  /** Model identifier. */
  modelId: string;
  /** Date and time (UTC) when the model was created. */
  createdTime: Date;
  /** Date and time (UTC) when the model was last updated. */
  lastUpdatedTime: Date;
  /**
   * Model training status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status: ModelStatus;
  displayName?: string;
  /** Total number of variables. */
  variablesCount: number;
}

/** Response of getting a model. */
export interface Model {
  /** Model identifier. */
  modelId: string;
  /** Date and time (UTC) when the model was created. */
  createdTime: Date;
  /** Date and time (UTC) when the model was last updated. */
  lastUpdatedTime: Date;
  /** Train result of a model including status, errors and diagnose info for model and variables. */
  modelInfo?: ModelInfo;
}

/** Detection request. */
export interface DetectionRequest {
  /** Source link to the input variables. Each variable should be a csv with two columns, `timestamp` and `value`. The file name of the variable will be used as its name. The variables used in detection should be exactly the same with those used in the training phase. */
  source: string;
  /** A required field, indicating the start time of data for detection. Should be date-time. */
  startTime: Date;
  /** A required field, indicating the end time of data for detection. Should be date-time. */
  endTime: Date;
}

/** Response of the given resultId. */
export interface DetectionResult {
  resultId: string;
  summary: DetectionResultSummary;
  /** Detection result for each timestamp. */
  results: AnomalyState[];
}

export interface DetectionResultSummary {
  /** Status of detection results. One of CREATED, RUNNING, READY, and FAILED. */
  status: DetectionStatus;
  /** Error message when detection is failed. */
  errors?: ErrorResponse[];
  variableStates?: VariableState[];
  /** Detection request. */
  setupInfo: DetectionRequest;
}

export interface AnomalyState {
  /** timestamp */
  timestamp: Date;
  value?: AnomalyValue;
  /** Error message for the current timestamp */
  errors?: ErrorResponse[];
}

export interface AnomalyValue {
  /** True if an anomaly is detected at the current timestamp. */
  isAnomaly: boolean;
  /** Indicates the significance of the anomaly. The higher the severity, the more significant the anomaly. */
  severity: number;
  /** Raw score from the model. */
  score: number;
  interpretation?: AnomalyInterpretation[];
}

export interface AnomalyInterpretation {
  variable?: string;
  contributionScore?: number;
  correlationChanges?: CorrelationChanges;
}

export interface CorrelationChanges {
  /** correlated variables */
  changedVariables?: string[];
  /** changes in correlation */
  changedValues?: number[];
}

export interface LastDetectionRequest {
  /** variables */
  variables: VariableValues[];
  /** number of timestamps on which the model detects */
  detectingPoints: number;
}

export interface VariableValues {
  /** variable name */
  name: string;
  /** timestamps */
  timestamps: string[];
  /** values */
  values: number[];
}

export interface LastDetectionResult {
  variableStates?: VariableState[];
  results?: AnomalyState[];
}

export interface CreateRootCauseAnalysisDataSet {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  /** Root cause analysis data set name */
  displayName: string;
}

export interface ErrorDetail {
  /** Human-readable error message */
  message?: string;
  /** Error code */
  code?: string;
}

export interface RootCauseAnalysisDataSet {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  /** Root cause analysis data set unique ID */
  dataSetId: string;
  /** Root cause analysis data set name */
  displayName: string;
}

export interface RootCauseAnalysisDataSetList {
  /** Link of next page, only provided when there are next pages */
  nextLink?: string;
  /** Response values */
  value: RootCauseAnalysisDataSetUnion[];
}

export interface RootCauseAnalysisUploadDataPartitionRequest {
  /** Root cause analysis kind */
  kind: RootCauseAnalysisType;
  /** Root cause data detail, the first few columns should be the dimension value. the last few columns should be the measure values. For the value doesn't exist, use null to define it. */
  data: Record<string, unknown>[][];
}

export interface RootCauseAnalysisUploadDataBlockRequest {
  /** Root cause analysis kind */
  kind: RootCauseAnalysisType;
  /** Root cause analysis data */
  value: RootCauseAnalysisDataPartition[];
}

export interface RootCauseAnalysisDataPartition {
  /** Root cause analysis data partition unique ID */
  partitionId: string;
  /** Root cause analysis date time of the data (UTC) */
  timestamp: Date;
  /** Root cause data detail, the first few columns should be the dimension value. the last few columns should be the measure values */
  data: Record<string, unknown>[][];
}

export interface RootCauseAnalysisDataMetaListResponse {
  /** Link of next page, only provided when there are next pages */
  nextLink?: string;
  /** Response values */
  value: RootCauseAnalysisDataMeta[];
}

export interface RootCauseAnalysisDataMeta {
  /** Root cause analysis partition ID */
  partitionId: string;
  /** Root cause analysis data row count in the partition ID */
  rowCount: number;
  /** Root cause date time of the data (UTC) */
  timestamp: Date;
  /** Root cause data last updated time (UTC) */
  lastModifiedDateTime: Date;
}

export interface CreateRootCauseAnalysisInstance {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  /** Instance name for root cause analysis */
  displayName: string;
}

export interface RootCauseAnalysisInstance {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  /** Instance unique ID for root cause analysis */
  instanceId: string;
  /** Instance name for root cause analysis */
  displayName: string;
}

export interface RootCauseAnalysisInstanceResponseList {
  /** Link of next page, only provided when there are next pages */
  nextLink?: string;
  /** Response values */
  value: RootCauseAnalysisInstanceUnion[];
}

export interface RootCauseAnalysisKindList {
  /** Root cause analysis kind list */
  kinds: RootCauseAnalysisType[];
}

export interface RootCauseAnalysisTrainingRequest {
  /** Model display name */
  displayName: string;
  /** Root cause analysis kind */
  kind: RootCauseAnalysisType;
  /** Parameter for training */
  parameter: any;
}

export interface RootCauseAnalysisTrainingResponse {
  /** Training task unique id for root cause analysis */
  taskId: string;
  /** Instance unique id for root cause analysis */
  instanceId: string;
  /** Model unique id for root cause analysis */
  modelId: string;
  /** Model name for root cause analysis */
  displayName: string;
  /** kind of root cause analysis */
  kind: RootCauseAnalysisType;
  /** Training task status for root cause analysis */
  status: RootCauseAnalysisTrainingStatus;
  /** Training task created date time (UTC) */
  createdDateTime: Date;
  /** Training task state modified date time (UTC) */
  lastModifiedDateTime: Date;
  error?: ErrorDetail;
  /** Training task information, if status is failed, this failed will not be shown */
  taskInfo?: any;
  /** Root cause analysis training parameter */
  parameter?: any;
}

export interface RootCauseAnalysisTrainingResponseList {
  /** Link of next page, only provided when there are next pages */
  nextLink?: string;
  /** Response values */
  value: RootCauseAnalysisTrainingResponse[];
}

export interface RootCauseAnalysisInferenceRequest {
  /** Root cause analysis kind */
  kind: RootCauseAnalysisType;
  /** Parameter for inference */
  parameter: any;
}

export interface RootCauseAnalysisInferenceResponse {
  /** Inference unique id for root cause analysis */
  inferenceId: string;
  /** Instance unique id for root cause analysis */
  instanceId: string;
  /** Model unique id for root cause analysis */
  modelId: string;
  /** Kind of root cause analysis */
  kind: RootCauseAnalysisType;
  /** Inference task status for root cause analysis */
  status: RootCauseAnalysisInferenceStatus;
  /** Inference task created date time (UTC) */
  createdDateTime: Date;
  /** Inference task state last modified date time (UTC) */
  lastModifiedDateTime: Date;
  error?: ErrorDetail;
  /** Root cause analysis inference result, if status is failed, this field wil not be shown */
  result?: any;
  /** Root cause analysis inference parameter */
  parameter?: any;
}

export interface RootCauseAnalysisMeasure {
  /** Root cause analysis measure name */
  displayName: string;
}

export interface MultiDimRCAMeasure {
  /** Target dataset id for root cause analysis instance */
  dataSetId: string;
  /** Target measure display name for root cause analysis instance */
  measureName: string;
}

export interface RootCauseAnalysisTrainingParameter {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
}

export interface RootCauseAnalysisTrainingTaskInfo {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
}

export interface RootCauseAnalysisInferenceParameter {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
}

export interface MultiDimRootCauseMeasure {
  /** Data set unique id of the root cause measure */
  dataSetId: string;
  /** Name of the root cause measure */
  displayName: string;
  /** Trend type of the measure */
  trendType: MultiDimRootCauseMeasureTrendType;
  /** Contribution score to show how much this measure contributes to the root cause */
  contributionScore: number;
}

export interface MultiDimRootCause {
  /** Dimension combination of the root cause */
  dimension: { [propertyName: string]: string };
  /** Score of the root cause item */
  score: number;
  /** Root cause measures */
  measures: MultiDimRootCauseMeasure[];
}

export interface RootCauseAnalysisInferenceResult {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
}

export type CreateMultiDimRCADataSet = CreateRootCauseAnalysisDataSet & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  /** Multidimensional root cause data set granularity */
  granularity: Granularity;
  /** Multidimensional root cause data set customized granularity interval. For example, if the granularity is daily and customInterval is 3, it means the data interval should be 3 days. */
  customInterval: number;
  /** Multidimensional root cause data set dimension keys */
  dimensionKeys: string[];
  /** Identifier to describe the aggregated dimension for this data set. Only one identifier should be used. */
  aggregatedIdentifier: string;
  /** Measures for the data */
  measures: RootCauseAnalysisMeasure[];
};

export type MultiDimRCADataSet = RootCauseAnalysisDataSet & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  /** Multidimensional root cause data set granularity */
  granularity: Granularity;
  /** Multidimensional root cause data set customized granularity interval. For example, if the granularity is daily and customInterval is 3, it means the data interval should be 3 days. */
  customInterval: number;
  /** Multidimensional root cause data set dimension keys */
  dimensionKeys: string[];
  /** Identifier to describe the aggregated dimension for this data set. Only one identifier should be used. */
  aggregatedIdentifier: string;
  /** Measures for the data */
  measures: RootCauseAnalysisMeasure[];
};

export type CreateMultiRCADimInstance = CreateRootCauseAnalysisInstance & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  targetMeasure: MultiDimRCAMeasure;
  /** Data sets for root cause analysis */
  assistiveMeasures: MultiDimRCAMeasure[];
};

export type MultiRCADimInstance = RootCauseAnalysisInstance & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "multidimensional";
  targetMeasure: MultiDimRCAMeasure;
  /** Data sets for root cause analysis */
  assistiveMeasures: MultiDimRCAMeasure[];
};

export type MultiDimRCATrainingParameter = RootCauseAnalysisTrainingParameter & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
  /** Start time of data used to train model (UTC) */
  startDateTime: Date;
  /** End time of data used to train model (UTC) */
  endDateTime: Date;
};

export type MultiDimRCATrainingTaskInfo = RootCauseAnalysisTrainingTaskInfo & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
  /** Train epochs */
  epoch: number[];
  /** Train loss for each epoch */
  trainLoss: number[];
  /** Validation loss for each epoch */
  validationLoss: number[];
  /** Latency in second for each epoch */
  latencyInSecond: number[];
  /** Best epoch */
  bestEpoch: number;
  /** Best validation loss */
  bestValidationLoss: number;
  /** Node size for each timestamp */
  nodeSize: number[];
  /** Edge size for each timestamp */
  edgeSize: number[];
};

export type MultiDimRCAInferenceParameter = RootCauseAnalysisInferenceParameter & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
  /** Timestamp of issue to be analyzed (UTC) */
  timestamp: Date;
  /** Dimension scope used to narrow down the search. Only dimension with specific value needs to be provided. */
  dimensionScope: { [propertyName: string]: string };
};

export type MultiDimRCAInferenceResult = RootCauseAnalysisInferenceResult & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "multidimensional";
  /** root causes */
  rootCauses: MultiDimRootCause[];
};

/** Defines headers for AnomalyDetectorClient_detectEntireSeries operation. */
export interface AnomalyDetectorClientDetectEntireSeriesExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_detectLastPoint operation. */
export interface AnomalyDetectorClientDetectLastPointExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_detectChangePoint operation. */
export interface AnomalyDetectorClientDetectChangePointExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_trainMultivariateModel operation. */
export interface AnomalyDetectorClientTrainMultivariateModelHeaders {
  /** Location and ID of the model. */
  location?: string;
}

/** Defines headers for AnomalyDetectorClient_trainMultivariateModel operation. */
export interface AnomalyDetectorClientTrainMultivariateModelExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listMultivariateModel operation. */
export interface AnomalyDetectorClientListMultivariateModelExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_getMultivariateModel operation. */
export interface AnomalyDetectorClientGetMultivariateModelExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_deleteMultivariateModel operation. */
export interface AnomalyDetectorClientDeleteMultivariateModelExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_detectAnomaly operation. */
export interface AnomalyDetectorClientDetectAnomalyHeaders {
  /** Location and ID of the detection result. */
  location?: string;
}

/** Defines headers for AnomalyDetectorClient_detectAnomaly operation. */
export interface AnomalyDetectorClientDetectAnomalyExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_getDetectionResult operation. */
export interface AnomalyDetectorClientGetDetectionResultExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_exportModel operation. */
export interface AnomalyDetectorClientExportModelExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_lastDetectAnomaly operation. */
export interface AnomalyDetectorClientLastDetectAnomalyExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisDataSet operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisDataSetHeaders {
  /** Location of the newly created resource. */
  location?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisDataSet operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisDataSetExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_getRootCauseAnalysisDataSet operation. */
export interface AnomalyDetectorClientGetRootCauseAnalysisDataSetExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_deleteRootCauseAnalysisDataSet operation. */
export interface AnomalyDetectorClientDeleteRootCauseAnalysisDataSetExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisDataSets operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisDataSetsExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_uploadRootCauseAnalysisDataByPartition operation. */
export interface AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionHeaders {
  /** Location of the newly created resource. */
  location?: string;
}

/** Defines headers for AnomalyDetectorClient_uploadRootCauseAnalysisDataByPartition operation. */
export interface AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_deleteRootCauseAnalysisDataByPartitionId operation. */
export interface AnomalyDetectorClientDeleteRootCauseAnalysisDataByPartitionIdExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_uploadRootCauseAnalysisDataByBlock operation. */
export interface AnomalyDetectorClientUploadRootCauseAnalysisDataByBlockExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_deleteRootCauseAnalysisDataByTimeRange operation. */
export interface AnomalyDetectorClientDeleteRootCauseAnalysisDataByTimeRangeExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisDataMetaByTimestamp operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisDataMetaByTimeRange operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisInstance operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisInstanceHeaders {
  /** Location of the newly created resource. */
  location?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisInstance operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisInstanceExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_getRootCauseAnalysisInstance operation. */
export interface AnomalyDetectorClientGetRootCauseAnalysisInstanceExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_deleteRootCauseAnalysisInstance operation. */
export interface AnomalyDetectorClientDeleteRootCauseAnalysisInstanceExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisInstances operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisInstancesExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisKinds operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisKindsExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisTrainingTask operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskHeaders {
  /** Location of the newly created resource. */
  location?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisTrainingTask operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_deleteRootCauseAnalysisModel operation. */
export interface AnomalyDetectorClientDeleteRootCauseAnalysisModelExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_getRootCauseAnalysisTrainingState operation. */
export interface AnomalyDetectorClientGetRootCauseAnalysisTrainingStateExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisTrainingStates operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisTrainingStatesExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisInferenceTask operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskHeaders {
  /** Location of the newly created resource. */
  location?: string;
}

/** Defines headers for AnomalyDetectorClient_createRootCauseAnalysisInferenceTask operation. */
export interface AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_getRootCauseAnalysisInferenceState operation. */
export interface AnomalyDetectorClientGetRootCauseAnalysisInferenceStateExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listMultivariateModelNext operation. */
export interface AnomalyDetectorClientListMultivariateModelNextExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisDataSetsNext operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisDataSetsNextExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisDataMetaByTimestampNext operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampNextExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisDataMetaByTimeRangeNext operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeNextExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisInstancesNext operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisInstancesNextExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Defines headers for AnomalyDetectorClient_listRootCauseAnalysisTrainingStatesNext operation. */
export interface AnomalyDetectorClientListRootCauseAnalysisTrainingStatesNextExceptionHeaders {
  /** error code */
  xMsErrorCode?: string;
}

/** Known values of {@link ImputeMode} that the service accepts. */
export enum KnownImputeMode {
  Auto = "auto",
  Previous = "previous",
  Linear = "linear",
  Fixed = "fixed",
  Zero = "zero",
  NotFill = "notFill"
}

/**
 * Defines values for ImputeMode. \
 * {@link KnownImputeMode} can be used interchangeably with ImputeMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **auto** \
 * **previous** \
 * **linear** \
 * **fixed** \
 * **zero** \
 * **notFill**
 */
export type ImputeMode = string;

/** Known values of {@link AnomalyDetectorErrorCodes} that the service accepts. */
export enum KnownAnomalyDetectorErrorCodes {
  InvalidCustomInterval = "InvalidCustomInterval",
  BadArgument = "BadArgument",
  InvalidGranularity = "InvalidGranularity",
  InvalidPeriod = "InvalidPeriod",
  InvalidModelArgument = "InvalidModelArgument",
  InvalidSeries = "InvalidSeries",
  InvalidJsonFormat = "InvalidJsonFormat",
  RequiredGranularity = "RequiredGranularity",
  RequiredSeries = "RequiredSeries",
  InvalidImputeMode = "InvalidImputeMode",
  InvalidImputeFixedValue = "InvalidImputeFixedValue"
}

/**
 * Defines values for AnomalyDetectorErrorCodes. \
 * {@link KnownAnomalyDetectorErrorCodes} can be used interchangeably with AnomalyDetectorErrorCodes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InvalidCustomInterval** \
 * **BadArgument** \
 * **InvalidGranularity** \
 * **InvalidPeriod** \
 * **InvalidModelArgument** \
 * **InvalidSeries** \
 * **InvalidJsonFormat** \
 * **RequiredGranularity** \
 * **RequiredSeries** \
 * **InvalidImputeMode** \
 * **InvalidImputeFixedValue**
 */
export type AnomalyDetectorErrorCodes = string;

/** Known values of {@link FillNAMethod} that the service accepts. */
export enum KnownFillNAMethod {
  Previous = "Previous",
  Subsequent = "Subsequent",
  Linear = "Linear",
  Zero = "Zero",
  Fixed = "Fixed",
  NotFill = "NotFill"
}

/**
 * Defines values for FillNAMethod. \
 * {@link KnownFillNAMethod} can be used interchangeably with FillNAMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Previous** \
 * **Subsequent** \
 * **Linear** \
 * **Zero** \
 * **Fixed** \
 * **NotFill**
 */
export type FillNAMethod = string;

/** Known values of {@link RootCauseAnalysisType} that the service accepts. */
export enum KnownRootCauseAnalysisType {
  Multidimensional = "multidimensional"
}

/**
 * Defines values for RootCauseAnalysisType. \
 * {@link KnownRootCauseAnalysisType} can be used interchangeably with RootCauseAnalysisType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **multidimensional**
 */
export type RootCauseAnalysisType = string;

/** Known values of {@link RootCauseAnalysisTrainingStatus} that the service accepts. */
export enum KnownRootCauseAnalysisTrainingStatus {
  Scheduled = "scheduled",
  Running = "running",
  Succeeded = "succeeded",
  Failed = "failed",
  Canceled = "canceled"
}

/**
 * Defines values for RootCauseAnalysisTrainingStatus. \
 * {@link KnownRootCauseAnalysisTrainingStatus} can be used interchangeably with RootCauseAnalysisTrainingStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **scheduled** \
 * **running** \
 * **succeeded** \
 * **failed** \
 * **canceled**
 */
export type RootCauseAnalysisTrainingStatus = string;

/** Known values of {@link RootCauseAnalysisInferenceStatus} that the service accepts. */
export enum KnownRootCauseAnalysisInferenceStatus {
  Scheduled = "scheduled",
  Running = "running",
  Succeeded = "succeeded",
  Failed = "failed",
  Canceled = "canceled"
}

/**
 * Defines values for RootCauseAnalysisInferenceStatus. \
 * {@link KnownRootCauseAnalysisInferenceStatus} can be used interchangeably with RootCauseAnalysisInferenceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **scheduled** \
 * **running** \
 * **succeeded** \
 * **failed** \
 * **canceled**
 */
export type RootCauseAnalysisInferenceStatus = string;

/** Known values of {@link Granularity} that the service accepts. */
export enum KnownGranularity {
  Yearly = "yearly",
  Monthly = "monthly",
  Weekly = "weekly",
  Daily = "daily",
  Hourly = "hourly",
  Minutely = "minutely",
  Secondly = "secondly",
  Microsecond = "microsecond",
  None = "none"
}

/**
 * Defines values for Granularity. \
 * {@link KnownGranularity} can be used interchangeably with Granularity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **yearly** \
 * **monthly** \
 * **weekly** \
 * **daily** \
 * **hourly** \
 * **minutely** \
 * **secondly** \
 * **microsecond** \
 * **none**
 */
export type Granularity = string;

/** Known values of {@link MultiDimRootCauseMeasureTrendType} that the service accepts. */
export enum KnownMultiDimRootCauseMeasureTrendType {
  Rise = "rise",
  Drop = "drop"
}

/**
 * Defines values for MultiDimRootCauseMeasureTrendType. \
 * {@link KnownMultiDimRootCauseMeasureTrendType} can be used interchangeably with MultiDimRootCauseMeasureTrendType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **rise** \
 * **drop**
 */
export type MultiDimRootCauseMeasureTrendType = string;
/** Defines values for TimeGranularity. */
export type TimeGranularity =
  | "yearly"
  | "monthly"
  | "weekly"
  | "daily"
  | "hourly"
  | "minutely"
  | "secondly"
  | "microsecond"
  | "none";
/** Defines values for AlignMode. */
export type AlignMode = "Inner" | "Outer";
/** Defines values for ModelStatus. */
export type ModelStatus = "CREATED" | "RUNNING" | "READY" | "FAILED";
/** Defines values for DetectionStatus. */
export type DetectionStatus = "CREATED" | "RUNNING" | "READY" | "FAILED";

/** Optional parameters. */
export interface DetectEntireSeriesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the detectEntireSeries operation. */
export type DetectEntireSeriesResponse = EntireDetectResponse;

/** Optional parameters. */
export interface DetectLastPointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the detectLastPoint operation. */
export type DetectLastPointResponse = LastDetectResponse;

/** Optional parameters. */
export interface DetectChangePointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the detectChangePoint operation. */
export type DetectChangePointResponse = ChangePointDetectResponse;

/** Optional parameters. */
export interface TrainMultivariateModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the trainMultivariateModel operation. */
export type TrainMultivariateModelResponse = AnomalyDetectorClientTrainMultivariateModelHeaders;

/** Optional parameters. */
export interface ListMultivariateModelOptionalParams
  extends coreClient.OperationOptions {
  /** $skip indicates how many models will be skipped. */
  skip?: number;
  /** $top indicates how many models will be fetched. */
  top?: number;
}

/** Contains response data for the listMultivariateModel operation. */
export type ListMultivariateModelResponse = ModelList;

/** Optional parameters. */
export interface GetMultivariateModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultivariateModel operation. */
export type GetMultivariateModelResponse = Model;

/** Optional parameters. */
export interface DeleteMultivariateModelOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DetectAnomalyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the detectAnomaly operation. */
export type DetectAnomalyResponse = AnomalyDetectorClientDetectAnomalyHeaders;

/** Optional parameters. */
export interface GetDetectionResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDetectionResult operation. */
export type GetDetectionResultResponse = DetectionResult;

/** Optional parameters. */
export interface ExportModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportModel operation. */
export type ExportModelResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface LastDetectAnomalyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the lastDetectAnomaly operation. */
export type LastDetectAnomalyResponse = LastDetectionResult;

/** Optional parameters. */
export interface CreateRootCauseAnalysisDataSetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createRootCauseAnalysisDataSet operation. */
export type CreateRootCauseAnalysisDataSetResponse = AnomalyDetectorClientCreateRootCauseAnalysisDataSetHeaders;

/** Optional parameters. */
export interface GetRootCauseAnalysisDataSetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRootCauseAnalysisDataSet operation. */
export type GetRootCauseAnalysisDataSetResponse = RootCauseAnalysisDataSetUnion;

/** Optional parameters. */
export interface DeleteRootCauseAnalysisDataSetOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ListRootCauseAnalysisDataSetsOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources to be returned, currently contains(displayName, 'filter name’) is supported */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisDataSets operation. */
export type ListRootCauseAnalysisDataSetsResponse = RootCauseAnalysisDataSetList;

/** Optional parameters. */
export interface UploadRootCauseAnalysisDataByPartitionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the uploadRootCauseAnalysisDataByPartition operation. */
export type UploadRootCauseAnalysisDataByPartitionResponse = AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionHeaders;

/** Optional parameters. */
export interface DeleteRootCauseAnalysisDataByPartitionIdOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface UploadRootCauseAnalysisDataByBlockOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeleteRootCauseAnalysisDataByTimeRangeOptionalParams
  extends coreClient.OperationOptions {
  /** Start date time, should be ISO format */
  start?: string;
  /** End date time, should be ISO format */
  end?: string;
}

/** Optional parameters. */
export interface ListRootCauseAnalysisDataMetaByTimestampOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
}

/** Contains response data for the listRootCauseAnalysisDataMetaByTimestamp operation. */
export type ListRootCauseAnalysisDataMetaByTimestampResponse = RootCauseAnalysisDataMetaListResponse;

/** Optional parameters. */
export interface ListRootCauseAnalysisDataMetaByTimeRangeOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources, currently 2 kinds of operation are supported. They are timestamp ge XXXX and timestamp le XXXX. Timestamp must be ISO format */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisDataMetaByTimeRange operation. */
export type ListRootCauseAnalysisDataMetaByTimeRangeResponse = RootCauseAnalysisDataMetaListResponse;

/** Optional parameters. */
export interface CreateRootCauseAnalysisInstanceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createRootCauseAnalysisInstance operation. */
export type CreateRootCauseAnalysisInstanceResponse = AnomalyDetectorClientCreateRootCauseAnalysisInstanceHeaders;

/** Optional parameters. */
export interface GetRootCauseAnalysisInstanceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRootCauseAnalysisInstance operation. */
export type GetRootCauseAnalysisInstanceResponse = RootCauseAnalysisInstanceUnion;

/** Optional parameters. */
export interface DeleteRootCauseAnalysisInstanceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ListRootCauseAnalysisInstancesOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources to be returned, currently contains(displayName, 'filter name’) is supported */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisInstances operation. */
export type ListRootCauseAnalysisInstancesResponse = RootCauseAnalysisInstanceResponseList;

/** Optional parameters. */
export interface ListRootCauseAnalysisKindsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listRootCauseAnalysisKinds operation. */
export type ListRootCauseAnalysisKindsResponse = RootCauseAnalysisKindList;

/** Optional parameters. */
export interface CreateRootCauseAnalysisTrainingTaskOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createRootCauseAnalysisTrainingTask operation. */
export type CreateRootCauseAnalysisTrainingTaskResponse = AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskHeaders &
  RootCauseAnalysisTrainingResponse;

/** Optional parameters. */
export interface DeleteRootCauseAnalysisModelOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetRootCauseAnalysisTrainingStateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRootCauseAnalysisTrainingState operation. */
export type GetRootCauseAnalysisTrainingStateResponse = RootCauseAnalysisTrainingResponse;

/** Optional parameters. */
export interface ListRootCauseAnalysisTrainingStatesOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources to be returned, currently contains(displayName, 'filter name’) is supported */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisTrainingStates operation. */
export type ListRootCauseAnalysisTrainingStatesResponse = RootCauseAnalysisTrainingResponseList;

/** Optional parameters. */
export interface CreateRootCauseAnalysisInferenceTaskOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createRootCauseAnalysisInferenceTask operation. */
export type CreateRootCauseAnalysisInferenceTaskResponse = AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskHeaders &
  RootCauseAnalysisInferenceResponse;

/** Optional parameters. */
export interface GetRootCauseAnalysisInferenceStateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRootCauseAnalysisInferenceState operation. */
export type GetRootCauseAnalysisInferenceStateResponse = RootCauseAnalysisInferenceResponse;

/** Optional parameters. */
export interface ListMultivariateModelNextOptionalParams
  extends coreClient.OperationOptions {
  /** $skip indicates how many models will be skipped. */
  skip?: number;
  /** $top indicates how many models will be fetched. */
  top?: number;
}

/** Contains response data for the listMultivariateModelNext operation. */
export type ListMultivariateModelNextResponse = ModelList;

/** Optional parameters. */
export interface ListRootCauseAnalysisDataSetsNextOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources to be returned, currently contains(displayName, 'filter name’) is supported */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisDataSetsNext operation. */
export type ListRootCauseAnalysisDataSetsNextResponse = RootCauseAnalysisDataSetList;

/** Optional parameters. */
export interface ListRootCauseAnalysisDataMetaByTimestampNextOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
}

/** Contains response data for the listRootCauseAnalysisDataMetaByTimestampNext operation. */
export type ListRootCauseAnalysisDataMetaByTimestampNextResponse = RootCauseAnalysisDataMetaListResponse;

/** Optional parameters. */
export interface ListRootCauseAnalysisDataMetaByTimeRangeNextOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources, currently 2 kinds of operation are supported. They are timestamp ge XXXX and timestamp le XXXX. Timestamp must be ISO format */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisDataMetaByTimeRangeNext operation. */
export type ListRootCauseAnalysisDataMetaByTimeRangeNextResponse = RootCauseAnalysisDataMetaListResponse;

/** Optional parameters. */
export interface ListRootCauseAnalysisInstancesNextOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources to be returned, currently contains(displayName, 'filter name’) is supported */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisInstancesNext operation. */
export type ListRootCauseAnalysisInstancesNextResponse = RootCauseAnalysisInstanceResponseList;

/** Optional parameters. */
export interface ListRootCauseAnalysisTrainingStatesNextOptionalParams
  extends coreClient.OperationOptions {
  /** For paging, skipped number */
  skip?: number;
  /** The maximum number of items in one page */
  maxpagesize?: number;
  /** The filter expression filters out the resources to be returned, currently contains(displayName, 'filter name’) is supported */
  filter?: string;
}

/** Contains response data for the listRootCauseAnalysisTrainingStatesNext operation. */
export type ListRootCauseAnalysisTrainingStatesNextResponse = RootCauseAnalysisTrainingResponseList;

/** Optional parameters. */
export interface AnomalyDetectorClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Anomaly Detector API version (for example, v1.0). */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
