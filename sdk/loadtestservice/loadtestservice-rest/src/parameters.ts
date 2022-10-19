// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AppComponentsMap,
  ServerMetricsModel,
  TestModel20221101,
  TestRunModel20221101,
  MetricRequestPayload
} from "./models";

export interface AppComponentCreateOrUpdateBodyParam {
  /** App Component model. */
  body: AppComponentsMap;
}

export interface AppComponentCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/merge-patch+json";
}

export type AppComponentCreateOrUpdateParameters = AppComponentCreateOrUpdateMediaTypesParam &
  AppComponentCreateOrUpdateBodyParam &
  RequestParameters;
export type AppComponentDeleteParameters = RequestParameters;
export type AppComponentGetParameters = RequestParameters;

export interface AppComponentGetByTestOrTestRunQueryParamProperties {
  /** Required testRunId, if testId field is not provided */
  testRunId?: string;
}

export interface AppComponentGetByTestOrTestRunQueryParam {
  queryParameters?: AppComponentGetByTestOrTestRunQueryParamProperties;
}

export type AppComponentGetByTestOrTestRunParameters = AppComponentGetByTestOrTestRunQueryParam &
  RequestParameters;

export interface ServerMetricsCreateOrUpdateBodyParam {
  /** Server metrics configuration model. */
  body: ServerMetricsModel;
}

export interface ServerMetricsCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/merge-patch+json";
}

export type ServerMetricsCreateOrUpdateParameters = ServerMetricsCreateOrUpdateMediaTypesParam &
  ServerMetricsCreateOrUpdateBodyParam &
  RequestParameters;
export type ServerMetricsGetParameters = RequestParameters;
export type ServerMetricsDeleteParameters = RequestParameters;

export interface ServerMetricsGetByTestOrTestRunQueryParamProperties {
  /** Required testRunId, if testId field is not provided */
  testRunId?: string;
}

export interface ServerMetricsGetByTestOrTestRunQueryParam {
  queryParameters?: ServerMetricsGetByTestOrTestRunQueryParamProperties;
}

export type ServerMetricsGetByTestOrTestRunParameters = ServerMetricsGetByTestOrTestRunQueryParam &
  RequestParameters;
export type ServerMetricsGetDefaultMetricsParameters = RequestParameters;
export type ServerMetricsListSupportedResourceTypeParameters = RequestParameters;

export interface TestCreateOrUpdateBodyParam {
  /** Load test model */
  body: TestModel20221101;
}

export interface TestCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/merge-patch+json";
}

export type TestCreateOrUpdateParameters = TestCreateOrUpdateMediaTypesParam &
  TestCreateOrUpdateBodyParam &
  RequestParameters;
export type TestDeleteParameters = RequestParameters;
export type TestGetParameters = RequestParameters;

export interface TestListQueryParamProperties {
  /** Sort on one of the field - lastModifiedDateTime, displayName, createdBy in (field asc/desc) format. eg: displayName asc. */
  orderBy?: string;
  /** Filter search based on searchable fields - testId, createdBy. */
  search?: string;
  /** Start DateTime(ISO 8601 literal format) of the last updated time range to filter tests. */
  lastUpdatedStartTime?: Date | string;
  /** End DateTime(ISO 8601 literal format) of the last updated time range to filter tests. */
  lastUpdatedEndTime?: Date | string;
  /** Continuation token to get the next page of response */
  continuationToken?: string;
  /** Number of results in response. */
  maxPageSize?: number;
}

export interface TestListQueryParam {
  queryParameters?: TestListQueryParamProperties;
}

export type TestListParameters = TestListQueryParam & RequestParameters;

export interface TestUploadFileBodyParam {
  body: TestUploadFileFormBody;
}

export interface TestUploadFileFormBody {
  /**
   * file.
   *
   * Value may contain any sequence of octets
   */
  file:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface TestUploadFileQueryParamProperties {
  /** fileType. */
  fileType?: "JMX_FILE" | "USER_PROPERTIES" | "ADDITIONAL_ARTIFACTS";
}

export interface TestUploadFileQueryParam {
  queryParameters?: TestUploadFileQueryParamProperties;
}

export interface TestUploadFileMediaTypesParam {
  /** Request content type */
  contentType?: "multipart/form-data";
}

export type TestUploadFileParameters = TestUploadFileQueryParam &
  TestUploadFileMediaTypesParam &
  TestUploadFileBodyParam &
  RequestParameters;
export type TestGetFileParameters = RequestParameters;
export type TestDeleteFileParameters = RequestParameters;

export interface TestGetAllFilesQueryParamProperties {
  /** Continuation token to get the next page of response */
  continuationToken?: string;
}

export interface TestGetAllFilesQueryParam {
  queryParameters?: TestGetAllFilesQueryParamProperties;
}

export type TestGetAllFilesParameters = TestGetAllFilesQueryParam &
  RequestParameters;
export type TestRunDeleteParameters = RequestParameters;

export interface TestRunCreateOrUpdateBodyParam {
  /** Load test run model */
  body: TestRunModel20221101;
}

export interface TestRunCreateOrUpdateQueryParamProperties {
  /** Existing test run Id that should be rerun. */
  oldTestRunId?: string;
}

export interface TestRunCreateOrUpdateQueryParam {
  queryParameters?: TestRunCreateOrUpdateQueryParamProperties;
}

export interface TestRunCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/merge-patch+json";
}

export type TestRunCreateOrUpdateParameters = TestRunCreateOrUpdateQueryParam &
  TestRunCreateOrUpdateMediaTypesParam &
  TestRunCreateOrUpdateBodyParam &
  RequestParameters;
export type TestRunGetParameters = RequestParameters;
export type TestRunGetFileParameters = RequestParameters;

export interface TestRunListQueryParamProperties {
  /** Sort on one of the field - status, displayName, executedDateTime in (field asc/desc) format. eg: displayName asc. */
  orderBy?: string;
  /** Continuation token to get the next page of response */
  continuationToken?: string;
  /** Filter search based on searchable fields - description, executedUser. */
  search?: string;
  /** End DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionFrom?: Date | string;
  /** Start DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionTo?: Date | string;
  /** Comma separated list of test run status. */
  status?: string;
  /** Number of results in response. */
  maxPageSize?: number;
}

export interface TestRunListQueryParam {
  queryParameters?: TestRunListQueryParamProperties;
}

export type TestRunListParameters = TestRunListQueryParam & RequestParameters;
export type TestRunStopParameters = RequestParameters;
export type TestRunMetricNamespacesParameters = RequestParameters;

export interface TestRunMetricDefinitionsQueryParamProperties {
  /** Metric namespace to query metric definitions for. */
  metricnamespace: string;
}

export interface TestRunMetricDefinitionsQueryParam {
  queryParameters: TestRunMetricDefinitionsQueryParamProperties;
}

export type TestRunMetricDefinitionsParameters = TestRunMetricDefinitionsQueryParam &
  RequestParameters;

export interface TestRunMetricsBodyParam {
  body?: MetricRequestPayload;
}

export interface TestRunMetricsQueryParamProperties {
  /** The list of aggregation types (comma separated) to retrieve. */
  aggregation?: string;
  /** The interval (i.e. timegrain) of the query. */
  interval?: "PT5S" | "PT10S" | "PT1M" | "PT5M" | "PT1H";
  /** Metric name */
  metricname: string;
  /** Metric namespace to query metric definitions for. */
  metricnamespace: string;
  /** Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details. */
  resultType: "Data" | "Metadata";
  /** The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. */
  timespan: string;
}

export interface TestRunMetricsQueryParam {
  queryParameters: TestRunMetricsQueryParamProperties;
}

export interface TestRunMetricsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type TestRunMetricsParameters = TestRunMetricsQueryParam &
  TestRunMetricsMediaTypesParam &
  TestRunMetricsBodyParam &
  RequestParameters;
