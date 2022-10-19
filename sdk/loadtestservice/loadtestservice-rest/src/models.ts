// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** App Components model */
export interface AppComponentsMap {
  /** Azure Load Testing resource Id */
  resourceId?: string;
  /** [Required, if testRunId is not given] Load test unique name */
  testId?: string;
  /** [Required if testId is not given] Load test run unique name */
  testRunId?: string;
  /** AppComponent name */
  name?: string;
  /** AppComponents collection { resource id (fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}) : resource object } */
  value: Record<string, AppComponent>;
}

/** An Azure resource object (Refer azure generic resource model : https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id#genericresource) */
export interface AppComponent {
  /** fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName} */
  resourceId: string;
  /** Azure resource name, required while creating the app component. */
  resourceName: string;
  /** Azure resource type, required while creating the app component. */
  resourceType?: string;
  /** Azure resource display name */
  displayName?: string;
  /** Resource group name of the Azure resource */
  resourceGroup?: string;
  /** Subscription Id of the Azure resource */
  subscriptionId?: string;
  /** Kind of Azure resource type */
  kind?: string;
}

/** Server metrics configuration model */
export interface ServerMetricsModel {
  /** Server metrics configuration model. */
  name?: string;
  /** [Required, if test run Id is not given] Load test unique name. */
  testId?: string;
  /** [Required, if test Id is not given] Load test run unique name. */
  testRunId?: string;
  /** Metrics collection {metric id : metrics object} (Refer : https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition for metric id). */
  metrics?: Record<string, ResourceMetricModel>;
}

/** Associated metric definition for particular metrics of the azure resource ( Refer : https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition). */
export interface ResourceMetricModel {
  /** Unique name for metric. */
  id?: string;
  /** Azure resource id. */
  resourceId: string;
  /** Metric name space. */
  metricnamespace: string;
  /** Metric description. */
  displayDescription?: string;
  /** The localizable string class. */
  name: LocalizableString;
  /** Metric aggregation. */
  aggregation: string;
  /** Metric unit. */
  unit?: string;
  /** Azure resource type. */
  resourceType: string;
}

/** The localizable string class. */
export interface LocalizableString {
  /** The locale specific value. */
  localizedValue?: string;
  /** The invariant value. */
  value?: string;
}

/** Load test model */
export interface TestModel20221101 {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria20221101;
  /** Secrets can be stored in an Azure Key Vault or any other secret store. If the secret is stored in an Azure Key Vault, the value should be the secret identifier and the type should be AKV_SECRET_URI. If the secret is stored elsewhere, the secret value should be provided directly and the type should be SECRET_VALUE. */
  secrets?: Record<string, SecretMetadata20221101>;
  certificate?: CertificateMetadata20221101;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** The load test configuration. */
  loadTestConfig?: LoadTestConfig20221101;
  /** The input artifacts for the test. */
  inputArtifacts?: InputTestArtifacts20221101;
  /** Unique test name as identifier. */
  testId?: string;
  /** The test description. */
  description?: string;
  /** Display name of a test. */
  displayName?: string;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** Type of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityType?: string;
  /** Resource Id of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityId?: string;
  /** Fully qualified resource Id e.g /subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}. */
  resourceId?: string;
  /** The created DateTime(ISO 8601 literal format) of the test model. */
  createdDateTime?: Date | string;
  /** The user that created the test model. */
  createdBy?: string;
  /** The last Modified DateTime(ISO 8601 literal format) of the test model. */
  lastModifiedDateTime?: Date | string;
  /** The user that last modified the test model. */
  lastModifiedBy?: string;
}

/** Pass fail criteria for a test. */
export interface PassFailCriteria20221101 {
  /** Map of id and pass fail metrics { id  : pass fail metrics }. */
  passFailMetrics?: Record<string, PassFailMetric20221101>;
}

export interface PassFailMetric20221101 {
  /** The client metric on which the criteria should be applied. */
  clientmetric?:
    | "response_time_ms"
    | "latency"
    | "error"
    | "requests"
    | "requests_per_sec";
  /** The aggregation function to be applied on the client metric. Allowed functions - ‘percentage’ - for error metric , ‘avg’, ‘p50’, ‘p90’, ‘p95’, ‘p99’, ‘min’, ‘max’ - for response_time_ms and latency metric, ‘avg’ - for requests_per_sec, ‘count’ - for requests */
  aggregate?:
    | "count"
    | "percentage"
    | "avg"
    | "p50"
    | "p90"
    | "p95"
    | "p99"
    | "min"
    | "max";
  /** The comparison operator. Supported types ‘>’, ‘<’ */
  condition?: string;
  /** Request name for which the Pass fail criteria has to be applied */
  requestName?: string;
  /** The value to compare with the client metric. Allowed values - ‘error : [0.0 , 100.0] unit- % ’, response_time_ms and latency : any integer value unit- ms. */
  value?: number;
  /** Action taken after the threshold is met. Default is ‘continue’. */
  action?: "stop" | "continue";
  /** The actual value of the client metric for the test run. */
  actualValue?: number;
  /** Outcome of the test run. */
  result?: "passed" | "undetermined" | "failed";
}

export interface SecretMetadata20221101 {
  /** The value of the secret for the respective type */
  value?: string;
  /** Type of secret */
  type?: "AKV_SECRET_URI" | "SECRET_VALUE";
}

export interface CertificateMetadata20221101 {
  /** The value of the certificate for respective type */
  value?: string;
  /** Type of certificate */
  type?: "AKV_CERT_URI";
  /** Name of the certificate. */
  name?: string;
}

/** The load test configuration. */
export interface LoadTestConfig20221101 {
  /** The number of engine instances to execute load test. Supported values are in range of 1-45. Required for creating a new test. */
  engineInstances?: number;
  /** Whether all the input CSV files should be split evenly across all engines. */
  splitAllCSVs?: boolean;
  /** If true, optionalLoadTestConfig is required and JMX script for the load test is not required to upload. */
  quickStartTest?: boolean;
  /** Quick start load test config */
  optionalLoadTestConfig?: OptionalLoadTestConfig;
}

/** Quick start load test config */
export interface OptionalLoadTestConfig {
  /** Endpoint url */
  endpointUrl?: string;
  /** No of virtual users */
  vusers?: number;
  /** ramp up time */
  rampUpTime?: number;
  /** duration */
  duration?: number;
}

/** The input artifacts for the test. */
export interface InputTestArtifacts20221101 {
  /** FileUrl Model. */
  configUrl?: FileUrl20221101;
  /** FileUrl Model. */
  testScriptUrl?: FileUrl20221101;
  /** FileUrl Model. */
  userPropUrl?: FileUrl20221101;
  /** FileUrl Model. */
  inputArtifactsZipFileurl?: FileUrl20221101;
  /** Additional supported files for the test run */
  additionalUrls?: Array<FileUrl20221101>;
}

/** FileUrl Model. */
export interface FileUrl20221101 {
  /** File URL. */
  url?: string;
  /** File unique identifier. */
  fileId?: string;
  /** Name of the file. */
  filename?: string;
  /** File type */
  fileType?: "JMX_FILE" | "USER_PROPERTIES" | "ADDITIONAL_ARTIFACTS";
  /** Expiry time of the file */
  expireTime?: Date | string;
  /** Validation status of the file */
  validationStatus?:
    | "NOT_VALIDATED"
    | "VALIDATION_SUCCESS"
    | "VALIDATION_FAILURE"
    | "VALIDATION_INITIATED";
}

/** Load test run model */
export interface TestRunModel20221101 {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria20221101;
  /** Secrets can be stored in an Azure Key Vault or any other secret store. If the secret is stored in an Azure Key Vault, the value should be the secret identifier and the type should be AKV_SECRET_URI. If the secret is stored elsewhere, the secret value should be provided directly and the type should be SECRET_VALUE. */
  secrets?: Record<string, SecretMetadata20221101>;
  certificate?: CertificateMetadata20221101;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** Error details if there is any failure in load test run */
  errorDetails?: Array<ErrorDetails20221101>;
  /** Test run statistics. */
  testRunStatistics?: Record<string, TestRunStatisticsModel>;
  /** The load test configuration. */
  loadTestConfig?: LoadTestConfig20221101;
  /** test artifact 20221101 */
  testArtifacts?: TestArtifacts20221101;
  /** Test result for pass/Fail criteria used during the test run. */
  testResult?: "PASSED" | "NOT_APPLICABLE" | "FAILED";
  /** Unique test run name as identifier */
  testRunId?: string;
  /** Display name of a testRun. */
  displayName?: string;
  /** Associated test Id. */
  testId?: string;
  /** The test run description. */
  description?: string;
  /** The test run status. */
  status?:
    | "ACCEPTED"
    | "NOTSTARTED"
    | "PROVISIONING"
    | "PROVISIONED"
    | "CONFIGURING"
    | "CONFIGURED"
    | "EXECUTING"
    | "EXECUTED"
    | "DEPROVISIONING"
    | "DEPROVISIONED"
    | "DONE"
    | "CANCELLING"
    | "CANCELLED"
    | "FAILED"
    | "VALIDATION_SUCCESS"
    | "VALIDATION_FAILURE";
  /** The test run start DateTime(ISO 8601 literal format). */
  startDateTime?: Date | string;
  /** The test run end DateTime(ISO 8601 literal format). */
  endDateTime?: Date | string;
  /** Test run initiated time. */
  executedDateTime?: Date | string;
  /** Number of virtual users, for which test has been run. */
  vusers?: number;
  /** Portal url. */
  portalUrl?: string;
  /** Test run duration in milliseconds. */
  duration?: number;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** Fully qualified resource Id e.g /subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}. */
  resourceId?: string;
  /** The created DateTime(ISO 8601 literal format) of the test model. */
  createdDateTime?: Date | string;
  /** The user that created the test model. */
  createdBy?: string;
  /** The last Modified DateTime(ISO 8601 literal format) of the test model. */
  lastModifiedDateTime?: Date | string;
  /** The user that last modified the test model. */
  lastModifiedBy?: string;
}

/** Error details if there is any failure in load test run */
export interface ErrorDetails20221101 {
  /** Error details in case test run was not successfully run. */
  message?: string;
}

/** Test run statistics. */
export interface TestRunStatisticsModel {
  /** Transaction name. */
  transaction?: string;
  /** Sampler count. */
  sampleCount?: number;
  /** Error count. */
  errorCount?: number;
  /** Error percentage. */
  errorPct?: number;
  /** Mean response time. */
  meanResTime?: number;
  /** Median response time. */
  medianResTime?: number;
  /** Max response time. */
  maxResTime?: number;
  /** Minimum response time. */
  minResTime?: number;
  /** 90 percentile response time. */
  pct1ResTime?: number;
  /** 95 percentile response time. */
  pct2ResTime?: number;
  /** 99 percentile response time. */
  pct3ResTime?: number;
  /** Throughput. */
  throughput?: number;
  /** Received network bytes. */
  receivedKBytesPerSec?: number;
  /** Send network bytes. */
  sentKBytesPerSec?: number;
}

/** test artifact 20221101 */
export interface TestArtifacts20221101 {
  /** The input artifacts for the test. */
  inputArtifacts: InputTestArtifacts20221101;
  /** The output artifacts for the test run. */
  outputArtifacts?: OutputTestArtifacts20221101;
}

/** The output artifacts for the test run. */
export interface OutputTestArtifacts20221101 {
  /** FileUrl Model. */
  resultUrl?: FileUrl20221101;
  /** FileUrl Model. */
  logsUrl?: FileUrl20221101;
}

/** Metric metadata filter to fetch the set of metric */
export interface MetricRequestPayload {
  filters?: Array<MetadataFilter>;
}

/** The MetadataFilter is used to reduce the set of metric data returned. Example: Metric contains metadata A, B and C. - Return all time series of where C is equals to c1 or c2, the MetadataFilter value will be {C, [c1,c2]} */
export interface MetadataFilter {
  /** The invariant metadata name */
  name?: string;
  /** The metadata values. Maximum values can be 20. */
  values?: Array<string>;
}
