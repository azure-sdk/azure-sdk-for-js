// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  TestRunOutput,
  PagedTestRunOutput,
  TestResultsUrlOutput,
  AccountTestRunStatsOutput,
  TestRunsMetadataOutput,
  PagedTestResultDetailsOutput,
  ResultsStatsOutput,
} from "./outputModels.js";

export interface TestRunsCreateOrUpdate200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestRunsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: TestRunOutput;
  headers: RawHttpHeaders & TestRunsCreateOrUpdate200Headers;
}

export interface TestRunsCreateOrUpdate201Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TestRunsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: TestRunOutput;
  headers: RawHttpHeaders & TestRunsCreateOrUpdate201Headers;
}

export interface TestRunsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunsCreateOrUpdateDefaultHeaders;
}

export interface TestRunsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestRunsGet200Response extends HttpResponse {
  status: "200";
  body: TestRunOutput;
  headers: RawHttpHeaders & TestRunsGet200Headers;
}

export interface TestRunsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunsGetDefaultHeaders;
}

export interface TestRunsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestRunsList200Response extends HttpResponse {
  status: "200";
  body: PagedTestRunOutput;
  headers: RawHttpHeaders & TestRunsList200Headers;
}

export interface TestRunsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunsListDefaultHeaders;
}

export interface TestRunsCreateArtifactsUploadBaseUrl200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestRunsCreateArtifactsUploadBaseUrl200Response extends HttpResponse {
  status: "200";
  body: TestResultsUrlOutput;
  headers: RawHttpHeaders & TestRunsCreateArtifactsUploadBaseUrl200Headers;
}

export interface TestRunsCreateArtifactsUploadBaseUrlDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunsCreateArtifactsUploadBaseUrlDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunsCreateArtifactsUploadBaseUrlDefaultHeaders;
}

export interface TestRunsUpdateShardExecutionStatus200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestRunsUpdateShardExecutionStatus200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & TestRunsUpdateShardExecutionStatus200Headers;
}

export interface TestRunsUpdateShardExecutionStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunsUpdateShardExecutionStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunsUpdateShardExecutionStatusDefaultHeaders;
}

export interface TestRunsComputeAccountRunStats200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestRunsComputeAccountRunStats200Response extends HttpResponse {
  status: "200";
  body: AccountTestRunStatsOutput;
  headers: RawHttpHeaders & TestRunsComputeAccountRunStats200Headers;
}

export interface TestRunsComputeAccountRunStatsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunsComputeAccountRunStatsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunsComputeAccountRunStatsDefaultHeaders;
}

export interface TestRunsComputeMetadata200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestRunsComputeMetadata200Response extends HttpResponse {
  status: "200";
  body: TestRunsMetadataOutput;
  headers: RawHttpHeaders & TestRunsComputeMetadata200Headers;
}

export interface TestRunsComputeMetadataDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestRunsComputeMetadataDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestRunsComputeMetadataDefaultHeaders;
}

export interface TestResultsUploadBatch200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestResultsUploadBatch200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & TestResultsUploadBatch200Headers;
}

export interface TestResultsUploadBatchDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestResultsUploadBatchDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestResultsUploadBatchDefaultHeaders;
}

export interface TestResultsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestResultsList200Response extends HttpResponse {
  status: "200";
  body: PagedTestResultDetailsOutput;
  headers: RawHttpHeaders & TestResultsList200Headers;
}

export interface TestResultsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestResultsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestResultsListDefaultHeaders;
}

export interface TestResultsComputeResultsStats200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TestResultsComputeResultsStats200Response extends HttpResponse {
  status: "200";
  body: ResultsStatsOutput;
  headers: RawHttpHeaders & TestResultsComputeResultsStats200Headers;
}

export interface TestResultsComputeResultsStatsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TestResultsComputeResultsStatsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TestResultsComputeResultsStatsDefaultHeaders;
}
