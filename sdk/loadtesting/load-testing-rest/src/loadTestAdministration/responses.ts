// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  TestOutput,
  TestAppComponentsOutput,
  TestServerMetricConfigOutput,
  FileInfoOutput,
  PagedFileInfoOutput,
  PagedTestOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface CreateOrUpdateTest200Response extends HttpResponse {
  status: "200";
  body: TestOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateTest201Response extends HttpResponse {
  status: "201";
  body: TestOutput;
}

export interface CreateOrUpdateTestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateTestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateTestDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateOrUpdateAppComponents200Response extends HttpResponse {
  status: "200";
  body: TestAppComponentsOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateAppComponents201Response extends HttpResponse {
  status: "201";
  body: TestAppComponentsOutput;
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
  body: TestServerMetricConfigOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateServerMetricsConfig201Response
  extends HttpResponse {
  status: "201";
  body: TestServerMetricConfigOutput;
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

/** The request has succeeded. */
export interface GetAppComponents200Response extends HttpResponse {
  status: "200";
  body: TestAppComponentsOutput;
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
  body: TestServerMetricConfigOutput;
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
export interface GetTest200Response extends HttpResponse {
  status: "200";
  body: TestOutput;
}

export interface GetTestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTestDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTestFile200Response extends HttpResponse {
  status: "200";
  body: FileInfoOutput;
}

export interface GetTestFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTestFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTestFileDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTestFiles200Response extends HttpResponse {
  status: "200";
  body: PagedFileInfoOutput;
}

export interface ListTestFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTestFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTestFilesDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTests200Response extends HttpResponse {
  status: "200";
  body: PagedTestOutput;
}

export interface ListTestsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTestsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTestsDefaultHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface UploadTestFile201Response extends HttpResponse {
  status: "201";
  body: FileInfoOutput;
}

export interface UploadTestFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface UploadTestFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & UploadTestFileDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteTestFile204Response extends HttpResponse {
  status: "204";
}

export interface DeleteTestFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteTestFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteTestFileDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteTest204Response extends HttpResponse {
  status: "204";
}

export interface DeleteTestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteTestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteTestDefaultHeaders;
}
