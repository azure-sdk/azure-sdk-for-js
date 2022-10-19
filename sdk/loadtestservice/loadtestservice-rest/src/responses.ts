// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  AppComponentsMapOutput,
  ErrorResponseBodyOutput,
  ServerMetricsModelOutput,
  DefaultServerMetricsConfigListModelOutput,
  SupportedResourceTypeOutput,
  TestModel20221101Output,
  TestModel20221101ResourceListOutput,
  FileUrl20221101Output,
  FileUrlListOutput,
  TestRunModel20221101Output,
  TestRunModel20221101ResourceListOutput,
  MetricNamespaceCollectionOutput,
  MetricDefinitionCollectionOutput,
  ResponseOutput
} from "./outputModels";

/** Associate an app component (Azure resource) to a test or test run. */
export interface AppComponentCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: AppComponentsMapOutput;
}

/** Associate an app component (Azure resource) to a test or test run. */
export interface AppComponentCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: AppComponentsMapOutput;
}

export interface AppComponentCreateOrUpdateDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Associate an app component (Azure resource) to a test or test run. */
export interface AppComponentCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & AppComponentCreateOrUpdateDefaultHeaders;
}

/** Delete an app component. */
export interface AppComponentDelete204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

export interface AppComponentDeleteDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Delete an app component. */
export interface AppComponentDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & AppComponentDeleteDefaultHeaders;
}

/** Get app Component details by unique name. */
export interface AppComponentGet200Response extends HttpResponse {
  status: "200";
  body: AppComponentsMapOutput;
}

export interface AppComponentGetDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get app Component details by unique name. */
export interface AppComponentGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & AppComponentGetDefaultHeaders;
}

/** Get an app component for a test or a test run by its name. */
export interface AppComponentGetByTestOrTestRun200Response
  extends HttpResponse {
  status: "200";
  body: AppComponentsMapOutput;
}

export interface AppComponentGetByTestOrTestRunDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get an app component for a test or a test run by its name. */
export interface AppComponentGetByTestOrTestRunDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & AppComponentGetByTestOrTestRunDefaultHeaders;
}

/** Configure server metrics for a test or test run */
export interface ServerMetricsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ServerMetricsModelOutput;
}

/** Configure server metrics for a test or test run */
export interface ServerMetricsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ServerMetricsModelOutput;
}

export interface ServerMetricsCreateOrUpdateDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Configure server metrics for a test or test run */
export interface ServerMetricsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & ServerMetricsCreateOrUpdateDefaultHeaders;
}

/** Get server metrics configuration by its name. */
export interface ServerMetricsGet200Response extends HttpResponse {
  status: "200";
  body: ServerMetricsModelOutput;
}

export interface ServerMetricsGetDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get server metrics configuration by its name. */
export interface ServerMetricsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & ServerMetricsGetDefaultHeaders;
}

/** Delete server metrics configuration by its name */
export interface ServerMetricsDelete204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

export interface ServerMetricsDeleteDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Delete server metrics configuration by its name */
export interface ServerMetricsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & ServerMetricsDeleteDefaultHeaders;
}

/** Get server metrics configuration for a test or test run by its name. */
export interface ServerMetricsGetByTestOrTestRun200Response
  extends HttpResponse {
  status: "200";
  body: ServerMetricsModelOutput;
}

export interface ServerMetricsGetByTestOrTestRunDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get server metrics configuration for a test or test run by its name. */
export interface ServerMetricsGetByTestOrTestRunDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & ServerMetricsGetByTestOrTestRunDefaultHeaders;
}

/** Get all default server metrics configuration for supported resource types. */
export interface ServerMetricsGetDefaultMetrics200Response
  extends HttpResponse {
  status: "200";
  body: DefaultServerMetricsConfigListModelOutput;
}

export interface ServerMetricsGetDefaultMetricsDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get all default server metrics configuration for supported resource types. */
export interface ServerMetricsGetDefaultMetricsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & ServerMetricsGetDefaultMetricsDefaultHeaders;
}

/** Get all supported resource types for adding an app component(Azure resource types). */
export interface ServerMetricsListSupportedResourceType200Response
  extends HttpResponse {
  status: "200";
  body: SupportedResourceTypeOutput;
}

export interface ServerMetricsListSupportedResourceTypeDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get all supported resource types for adding an app component(Azure resource types). */
export interface ServerMetricsListSupportedResourceTypeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders &
    ServerMetricsListSupportedResourceTypeDefaultHeaders;
}

/** Create a new test or update an existing test. */
export interface TestCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: TestModel20221101Output;
}

/** Create a new test or update an existing test. */
export interface TestCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: TestModel20221101Output;
}

export interface TestCreateOrUpdateDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Create a new test or update an existing test. */
export interface TestCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestCreateOrUpdateDefaultHeaders;
}

/** Delete a test by its name. */
export interface TestDelete204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

export interface TestDeleteDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Delete a test by its name. */
export interface TestDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestDeleteDefaultHeaders;
}

/** Get load test details by test name */
export interface TestGet200Response extends HttpResponse {
  status: "200";
  body: TestModel20221101Output;
}

export interface TestGetDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get load test details by test name */
export interface TestGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestGetDefaultHeaders;
}

/** Get all load tests by the fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}. */
export interface TestList200Response extends HttpResponse {
  status: "200";
  body: TestModel20221101ResourceListOutput;
}

export interface TestListDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get all load tests by the fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}. */
export interface TestListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestListDefaultHeaders;
}

/** Upload input file for a given test name. File size can't be more than 50 MB. Existing file with same name for the given test will be overwritten. File should be provided in the request body as multipart/form-data. */
export interface TestUploadFile201Response extends HttpResponse {
  status: "201";
  body: FileUrl20221101Output;
}

export interface TestUploadFileDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Upload input file for a given test name. File size can't be more than 50 MB. Existing file with same name for the given test will be overwritten. File should be provided in the request body as multipart/form-data. */
export interface TestUploadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestUploadFileDefaultHeaders;
}

/** Get test file by the file name. */
export interface TestGetFile200Response extends HttpResponse {
  status: "200";
  body: FileUrl20221101Output;
}

export interface TestGetFileDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get test file by the file name. */
export interface TestGetFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestGetFileDefaultHeaders;
}

/** Delete file by the file name for a test */
export interface TestDeleteFile204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

export interface TestDeleteFileDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Delete file by the file name for a test */
export interface TestDeleteFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestDeleteFileDefaultHeaders;
}

/** Get all test files. */
export interface TestGetAllFiles200Response extends HttpResponse {
  status: "200";
  body: FileUrlListOutput;
}

export interface TestGetAllFilesDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get all test files. */
export interface TestGetAllFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestGetAllFilesDefaultHeaders;
}

/** Delete a test run by its name. */
export interface TestRunDelete204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

export interface TestRunDeleteDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Delete a test run by its name. */
export interface TestRunDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunDeleteDefaultHeaders;
}

/** Create and start a new test run with the given name. */
export interface TestRunCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: TestRunModel20221101Output;
}

export interface TestRunCreateOrUpdateDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Create and start a new test run with the given name. */
export interface TestRunCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunCreateOrUpdateDefaultHeaders;
}

/** Get test run details by name. */
export interface TestRunGet200Response extends HttpResponse {
  status: "200";
  body: TestRunModel20221101Output;
}

export interface TestRunGetDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get test run details by name. */
export interface TestRunGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunGetDefaultHeaders;
}

/** Get test run file by file name. */
export interface TestRunGetFile200Response extends HttpResponse {
  status: "200";
  body: FileUrl20221101Output;
}

export interface TestRunGetFileDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get test run file by file name. */
export interface TestRunGetFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunGetFileDefaultHeaders;
}

/** Get all test runs with given filters */
export interface TestRunList200Response extends HttpResponse {
  status: "200";
  body: TestRunModel20221101ResourceListOutput;
}

export interface TestRunListDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Get all test runs with given filters */
export interface TestRunListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunListDefaultHeaders;
}

/** Stop test run by name. */
export interface TestRunStop200Response extends HttpResponse {
  status: "200";
  body: TestRunModel20221101Output;
}

export interface TestRunStopDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Stop test run by name. */
export interface TestRunStopDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunStopDefaultHeaders;
}

/** Lists the metric namespaces for a load test run. */
export interface TestRunMetricNamespaces200Response extends HttpResponse {
  status: "200";
  body: MetricNamespaceCollectionOutput;
}

export interface TestRunMetricNamespacesDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Lists the metric namespaces for a load test run. */
export interface TestRunMetricNamespacesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunMetricNamespacesDefaultHeaders;
}

/** Lists the metric definitions for a load test run. */
export interface TestRunMetricDefinitions200Response extends HttpResponse {
  status: "200";
  body: MetricDefinitionCollectionOutput;
}

export interface TestRunMetricDefinitionsDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Lists the metric definitions for a load test run. */
export interface TestRunMetricDefinitionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunMetricDefinitionsDefaultHeaders;
}

/** Lists the metric values for a load test run. */
export interface TestRunMetrics200Response extends HttpResponse {
  status: "200";
  body: ResponseOutput;
}

export interface TestRunMetricsDefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Lists the metric values for a load test run. */
export interface TestRunMetricsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseBodyOutput;
  headers: RawHttpHeaders & TestRunMetricsDefaultHeaders;
}
