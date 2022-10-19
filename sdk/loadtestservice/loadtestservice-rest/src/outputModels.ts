// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** App Components model */
export interface AppComponentsMapOutput {
  /** Azure Load Testing resource Id */
  resourceId?: string;
  /** [Required, if testRunId is not given] Load test unique name */
  testId?: string;
  /** [Required if testId is not given] Load test run unique name */
  testRunId?: string;
  /** AppComponent name */
  name?: string;
  /** AppComponents collection { resource id (fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}) : resource object } */
  value: Record<string, AppComponentOutput>;
}

/** An Azure resource object (Refer azure generic resource model : https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id#genericresource) */
export interface AppComponentOutput {
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

/** The definition of an error object. */
export interface ErrorResponseBodyOutput {
  /** Error from a REST request. */
  error: ErrorModelOutput;
}

/** Error from a REST request. */
export interface ErrorModelOutput {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /** The error target. */
  target?: string;
  /** Additional details and inner errors. */
  details?: Array<ErrorModelOutput>;
}

/** Server metrics configuration model */
export interface ServerMetricsModelOutput {
  /** Server metrics configuration model. */
  name?: string;
  /** [Required, if test run Id is not given] Load test unique name. */
  testId?: string;
  /** [Required, if test Id is not given] Load test run unique name. */
  testRunId?: string;
  /** Metrics collection {metric id : metrics object} (Refer : https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition for metric id). */
  metrics?: Record<string, ResourceMetricModelOutput>;
}

/** Associated metric definition for particular metrics of the azure resource ( Refer : https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition). */
export interface ResourceMetricModelOutput {
  /** Unique name for metric. */
  id?: string;
  /** Azure resource id. */
  resourceId: string;
  /** Metric name space. */
  metricnamespace: string;
  /** Metric description. */
  displayDescription?: string;
  /** The localizable string class. */
  name: LocalizableStringOutput;
  /** Metric aggregation. */
  aggregation: string;
  /** Metric unit. */
  unit?: string;
  /** Azure resource type. */
  resourceType: string;
}

/** The localizable string class. */
export interface LocalizableStringOutput {
  /** The locale specific value. */
  localizedValue?: string;
  /** The invariant value. */
  value?: string;
}

/** Default server metrics config */
export interface DefaultServerMetricsConfigListModelOutput {
  /** Default metrics collection {resourceType : list of metrics config} (Refer for metrics structure: https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition) */
  defaultMetrics?: Record<string, Array<DefaultServerMetricsConfigModelOutput>>;
}

/** Metrics config model */
export interface DefaultServerMetricsConfigModelOutput {
  /** Metric namespace */
  metricnamespace?: string;
  /** Metric aggregation */
  aggregation?: string;
  /** The localizable string class. */
  name?: LocalizableStringOutput;
  /** Metric unit */
  unit?: string;
  /** Metric display description */
  displayDescription?: string;
}

/** Supported azure resource types for App Component like Microsoft.LoadTestService/loadtests, Microsoft.ClassicCompute, Microsoft.ClassicStorage etc. (Refer for full list of available resource types in azure : https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types, some of them we are supporting for server side metrics configuration). */
export interface SupportedResourceTypeOutput {
  value?: Array<string>;
}

/** Load test model */
export interface TestModel20221101Output {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria20221101Output;
  /** Secrets can be stored in an Azure Key Vault or any other secret store. If the secret is stored in an Azure Key Vault, the value should be the secret identifier and the type should be AKV_SECRET_URI. If the secret is stored elsewhere, the secret value should be provided directly and the type should be SECRET_VALUE. */
  secrets?: Record<string, SecretMetadata20221101Output>;
  certificate?: CertificateMetadata20221101Output;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** The load test configuration. */
  loadTestConfig?: LoadTestConfig20221101Output;
  /** The input artifacts for the test. */
  inputArtifacts?: InputTestArtifacts20221101Output;
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
  createdDateTime?: string;
  /** The user that created the test model. */
  createdBy?: string;
  /** The last Modified DateTime(ISO 8601 literal format) of the test model. */
  lastModifiedDateTime?: string;
  /** The user that last modified the test model. */
  lastModifiedBy?: string;
}

/** Pass fail criteria for a test. */
export interface PassFailCriteria20221101Output {
  /** Map of id and pass fail metrics { id  : pass fail metrics }. */
  passFailMetrics?: Record<string, PassFailMetric20221101Output>;
}

export interface PassFailMetric20221101Output {
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

export interface SecretMetadata20221101Output {
  /** The value of the secret for the respective type */
  value?: string;
  /** Type of secret */
  type?: "AKV_SECRET_URI" | "SECRET_VALUE";
}

export interface CertificateMetadata20221101Output {
  /** The value of the certificate for respective type */
  value?: string;
  /** Type of certificate */
  type?: "AKV_CERT_URI";
  /** Name of the certificate. */
  name?: string;
}

/** The load test configuration. */
export interface LoadTestConfig20221101Output {
  /** The number of engine instances to execute load test. Supported values are in range of 1-45. Required for creating a new test. */
  engineInstances?: number;
  /** Whether all the input CSV files should be split evenly across all engines. */
  splitAllCSVs?: boolean;
  /** If true, optionalLoadTestConfig is required and JMX script for the load test is not required to upload. */
  quickStartTest?: boolean;
  /** Quick start load test config */
  optionalLoadTestConfig?: OptionalLoadTestConfigOutput;
}

/** Quick start load test config */
export interface OptionalLoadTestConfigOutput {
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
export interface InputTestArtifacts20221101Output {
  /** FileUrl Model. */
  configUrl?: FileUrl20221101Output;
  /** FileUrl Model. */
  testScriptUrl?: FileUrl20221101Output;
  /** FileUrl Model. */
  userPropUrl?: FileUrl20221101Output;
  /** FileUrl Model. */
  inputArtifactsZipFileurl?: FileUrl20221101Output;
  /** Additional supported files for the test run */
  additionalUrls?: Array<FileUrl20221101Output>;
}

/** FileUrl Model. */
export interface FileUrl20221101Output {
  /** File URL. */
  url?: string;
  /** File unique identifier. */
  fileId?: string;
  /** Name of the file. */
  filename?: string;
  /** File type */
  fileType?: "JMX_FILE" | "USER_PROPERTIES" | "ADDITIONAL_ARTIFACTS";
  /** Expiry time of the file */
  expireTime?: string;
  /** Validation status of the file */
  validationStatus?:
    | "NOT_VALIDATED"
    | "VALIDATION_SUCCESS"
    | "VALIDATION_FAILURE"
    | "VALIDATION_INITIATED";
}

/** List of Resources */
export interface TestModel20221101ResourceListOutput {
  /** List of Resources */
  value: Array<TestModel20221101Output>;
  /** Link for the next list of resources in case of paginated results, if applicable */
  nextLink?: string;
}

export interface FileUrlListOutput {
  /** List of file URLs. */
  value: Array<FileUrl20221101Output>;
  /** Link for the next list of file URLs, if applicable */
  nextLink?: string;
}

/** Load test run model */
export interface TestRunModel20221101Output {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria20221101Output;
  /** Secrets can be stored in an Azure Key Vault or any other secret store. If the secret is stored in an Azure Key Vault, the value should be the secret identifier and the type should be AKV_SECRET_URI. If the secret is stored elsewhere, the secret value should be provided directly and the type should be SECRET_VALUE. */
  secrets?: Record<string, SecretMetadata20221101Output>;
  certificate?: CertificateMetadata20221101Output;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** Error details if there is any failure in load test run */
  errorDetails?: Array<ErrorDetails20221101Output>;
  /** Test run statistics. */
  testRunStatistics?: Record<string, TestRunStatisticsModelOutput>;
  /** The load test configuration. */
  loadTestConfig?: LoadTestConfig20221101Output;
  /** test artifact 20221101 */
  testArtifacts?: TestArtifacts20221101Output;
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
  startDateTime?: string;
  /** The test run end DateTime(ISO 8601 literal format). */
  endDateTime?: string;
  /** Test run initiated time. */
  executedDateTime?: string;
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
  createdDateTime?: string;
  /** The user that created the test model. */
  createdBy?: string;
  /** The last Modified DateTime(ISO 8601 literal format) of the test model. */
  lastModifiedDateTime?: string;
  /** The user that last modified the test model. */
  lastModifiedBy?: string;
}

/** Error details if there is any failure in load test run */
export interface ErrorDetails20221101Output {
  /** Error details in case test run was not successfully run. */
  message?: string;
}

/** Test run statistics. */
export interface TestRunStatisticsModelOutput {
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
export interface TestArtifacts20221101Output {
  /** The input artifacts for the test. */
  inputArtifacts: InputTestArtifacts20221101Output;
  /** The output artifacts for the test run. */
  outputArtifacts?: OutputTestArtifacts20221101Output;
}

/** The output artifacts for the test run. */
export interface OutputTestArtifacts20221101Output {
  /** FileUrl Model. */
  resultUrl?: FileUrl20221101Output;
  /** FileUrl Model. */
  logsUrl?: FileUrl20221101Output;
}

/** List of Resources */
export interface TestRunModel20221101ResourceListOutput {
  /** List of Resources */
  value: Array<TestRunModel20221101Output>;
  /** Link for the next list of resources in case of paginated results, if applicable */
  nextLink?: string;
}

/** Represents collection of metric namespaces. */
export interface MetricNamespaceCollectionOutput {
  /** The values for the metric namespaces. */
  value?: Array<MetricNamespaceOutput>;
}

/** Metric namespace class specifies the metadata for a metric namespace. */
export interface MetricNamespaceOutput {
  /** The escaped name of the namespace. */
  name?: string;
  /** The fully qualified metric namespace name. */
  metricNamespaceName?: string;
}

/** Represents collection of metric definitions. */
export interface MetricDefinitionCollectionOutput {
  /** the values for the metric definitions. */
  value?: Array<MetricDefinitionOutput>;
}

/** Metric definition class specifies the metadata for a metric. */
export interface MetricDefinitionOutput {
  /** The name and the display name of the dimension, i.e. it is a localizable string. */
  dimensions?: Array<LocalizableStringOutput>;
  /** Detailed description of this metric. */
  displayDescription?: string;
  /** The localizable string class. */
  name?: LocalizableStringOutput;
  /** The namespace the metric belongs to. */
  namespace?: string;
  /** the primary aggregation type value defining how to use the values for display. */
  primaryAggregationType?:
    | "Average"
    | "Count"
    | "Minimum"
    | "Maximum"
    | "None"
    | "Total"
    | "Percentile90"
    | "Percentile95"
    | "Percentile99";
  /** the collection of what aggregation types are supported. */
  supportedAggregationTypes?: Array<string>;
  /** The unit of the metric. */
  unit?:
    | "NotSpecified"
    | "Percent"
    | "Count"
    | "Seconds"
    | "Milliseconds"
    | "Bytes"
    | "BytesPerSecond"
    | "CountPerSecond";
  /** Metric availability specifies the time grain (aggregation interval or frequency) and the retention period for that time grain. */
  metricAvailabilities?: Array<MetricAvailabilityOutput>;
}

/** Metric availability specifies the time grain (aggregation interval or frequency) */
export interface MetricAvailabilityOutput {
  /** The time grain specifies the aggregation interval for the metric. Expressed as a duration 'PT1M', 'PT1H', etc. */
  timeGrain?: "PT5S" | "PT10S" | "PT1M" | "PT5M" | "PT1H";
}

/** The response to a metrics query. */
export interface ResponseOutput {
  /** The interval (window size) for which the metric data was returned in. This may be adjusted in the future and returned back from what was originally requested. This is not present if a metadata request was made. */
  interval?: string;
  /** The namespace of the metrics being queried. */
  namespace?: string;
  /** The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'. This may be adjusted in the future and returned back from what was originally requested. */
  timespan?: string;
  /** The result data of a query. */
  value?: MetricOutput;
}

/** The result data of a query. */
export interface MetricOutput {
  /** Detailed description of this metric. */
  displayDescription?: string;
  /** The Metric Id. */
  id?: string;
  /** The localizable string class. */
  name?: LocalizableStringOutput;
  /** The time series returned when a data query is performed. */
  timeseries?: Array<TimeSeriesElementOutput>;
  /** The unit of the metric. */
  unit?:
    | "NotSpecified"
    | "Percent"
    | "Count"
    | "Seconds"
    | "Milliseconds"
    | "Bytes"
    | "BytesPerSecond"
    | "CountPerSecond";
}

/** The time series returned when a data query is performed. */
export interface TimeSeriesElementOutput {
  /** An array of data points representing the metric values. This is only returned if a result type of data is specified. */
  data?: Array<MetricValueOutput>;
  /** The metadata values */
  metadatavalues?: Array<MetadataValueOutput>;
}

/** Represents a metric value. */
export interface MetricValueOutput {
  /** The average value in the time range. */
  average?: number;
  /** The number of samples in the time range. Can be used to determine the number of values that contributed to the average value. */
  count?: number;
  /** The greatest value in the time range. */
  maximum?: number;
  /** The least value in the time range. */
  minimum?: number;
  /** The timestamp for the metric value in ISO 8601 format. */
  timeStamp?: string;
  /** The sum of all of the values in the time range. */
  total?: number;
  /** 90th percentile value in the time range. */
  percentile90?: number;
  /** 95th percentile value in the time range. */
  percentile95?: number;
  /** 99th percentile value in the time range. */
  percentile99?: number;
}

/** Represents a metric metadata value. */
export interface MetadataValueOutput {
  /** The localizable string class. */
  name?: LocalizableStringOutput;
  /** The value of the metadata. */
  value?: string;
}
