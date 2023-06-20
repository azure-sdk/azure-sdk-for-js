// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  TestRunOutput,
  TestRunAppComponentsOutput,
  TestRunServerMetricConfigOutput,
  FileInfoOutput,
  DimensionValueListListOutput,
  MetricDefinitionCollectionOutput,
  MetricNamespaceCollectionOutput,
  PagedTimeSeriesElementOutput,
  PagedTestRunOutput,
} from "./outputModels";

export interface TestRun200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface TestRun200Response extends HttpResponse {
  status: "200";
  body: TestRunOutput;
  headers: RawHttpHeaders & TestRun200Headers;
}

export interface TestRun201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TestRun201Response extends HttpResponse {
  status: "201";
  body: TestRunOutput;
  headers: RawHttpHeaders & TestRun201Headers;
}

export interface TestRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunDefaultHeaders;
}

/** The final response for long-running TestRun operation */
export interface TestRunLogicalResponse extends HttpResponse {
  status: "200";
  body: TestRunOutput;
}

/** The request has succeeded. */
export interface CreateOrUpdateAppComponents200Response extends HttpResponse {
  status: "200";
  body: TestRunAppComponentsOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateAppComponents201Response extends HttpResponse {
  status: "201";
  body: TestRunAppComponentsOutput;
}

export interface CreateOrUpdateAppComponentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateAppComponentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateAppComponentsDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateOrUpdateServerMetricsConfig200Response
  extends HttpResponse {
  status: "200";
  body: TestRunServerMetricConfigOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateServerMetricsConfig201Response
  extends HttpResponse {
  status: "201";
  body: TestRunServerMetricConfigOutput;
}

export interface CreateOrUpdateServerMetricsConfigDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateServerMetricsConfigDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateServerMetricsConfigDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteTestRun204Response extends HttpResponse {
  status: "204";
}

export interface DeleteTestRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteTestRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteTestRunDefaultHeaders;
}

/** The request has succeeded. */
export interface GetAppComponents200Response extends HttpResponse {
  status: "200";
  body: TestRunAppComponentsOutput;
}

export interface GetAppComponentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetAppComponentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetAppComponentsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetServerMetricsConfig200Response extends HttpResponse {
  status: "200";
  body: TestRunServerMetricConfigOutput;
}

export interface GetServerMetricsConfigDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetServerMetricsConfigDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetServerMetricsConfigDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTestRun200Response extends HttpResponse {
  status: "200";
  body: TestRunOutput;
}

export interface GetTestRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTestRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTestRunDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTestRunFile200Response extends HttpResponse {
  status: "200";
  body: FileInfoOutput;
}

export interface GetTestRunFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTestRunFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTestRunFileDefaultHeaders;
}

/** The request has succeeded. */
export interface ListMetricDimensionValues200Response extends HttpResponse {
  status: "200";
  body: DimensionValueListListOutput;
}

export interface ListMetricDimensionValuesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListMetricDimensionValuesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListMetricDimensionValuesDefaultHeaders;
}

/** The request has succeeded. */
export interface ListMetricDefinitions200Response extends HttpResponse {
  status: "200";
  body: MetricDefinitionCollectionOutput;
}

export interface ListMetricDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListMetricDefinitionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListMetricDefinitionsDefaultHeaders;
}

/** The request has succeeded. */
export interface ListMetricNamespaces200Response extends HttpResponse {
  status: "200";
  body: MetricNamespaceCollectionOutput;
}

export interface ListMetricNamespacesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListMetricNamespacesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListMetricNamespacesDefaultHeaders;
}

/** The request has succeeded. */
export interface ListMetrics200Response extends HttpResponse {
  status: "200";
  body: PagedTimeSeriesElementOutput;
}

export interface ListMetricsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListMetricsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListMetricsDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTestRuns200Response extends HttpResponse {
  status: "200";
  body: PagedTestRunOutput;
}

export interface ListTestRunsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTestRunsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTestRunsDefaultHeaders;
}

/** The request has succeeded. */
export interface StopTestRun200Response extends HttpResponse {
  status: "200";
  body: TestRunOutput;
}

export interface StopTestRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface StopTestRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & StopTestRunDefaultHeaders;
}
