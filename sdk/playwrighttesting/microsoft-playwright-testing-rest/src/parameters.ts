// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type { TestRun, ShardExecutionDetails, UploadTestResultsRequest } from "./models.js";

export interface TestRunsCreateOrUpdateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The resource instance. */
export type TestRunResourceMergeAndPatch = Partial<TestRun>;

export interface TestRunsCreateOrUpdateBodyParam {
  /** The resource instance. */
  body: TestRunResourceMergeAndPatch;
}

export interface TestRunsCreateOrUpdateHeaderParam {
  headers?: RawHttpHeadersInput & TestRunsCreateOrUpdateHeaders;
}

export interface TestRunsCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type TestRunsCreateOrUpdateParameters = TestRunsCreateOrUpdateHeaderParam &
  TestRunsCreateOrUpdateMediaTypesParam &
  TestRunsCreateOrUpdateBodyParam &
  RequestParameters;

export interface TestRunsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestRunsGetHeaderParam {
  headers?: RawHttpHeadersInput & TestRunsGetHeaders;
}

export type TestRunsGetParameters = TestRunsGetHeaderParam & RequestParameters;

export interface TestRunsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestRunsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface TestRunsListQueryParam {
  queryParameters?: TestRunsListQueryParamProperties;
}

export interface TestRunsListHeaderParam {
  headers?: RawHttpHeadersInput & TestRunsListHeaders;
}

export type TestRunsListParameters = TestRunsListQueryParam &
  TestRunsListHeaderParam &
  RequestParameters;

export interface TestRunsCreateArtifactsUploadBaseUrlHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestRunsCreateArtifactsUploadBaseUrlHeaderParam {
  headers?: RawHttpHeadersInput & TestRunsCreateArtifactsUploadBaseUrlHeaders;
}

export type TestRunsCreateArtifactsUploadBaseUrlParameters =
  TestRunsCreateArtifactsUploadBaseUrlHeaderParam & RequestParameters;

export interface TestRunsUpdateShardExecutionStatusHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestRunsUpdateShardExecutionStatusBodyParam {
  body: ShardExecutionDetails;
}

export interface TestRunsUpdateShardExecutionStatusHeaderParam {
  headers?: RawHttpHeadersInput & TestRunsUpdateShardExecutionStatusHeaders;
}

export type TestRunsUpdateShardExecutionStatusParameters =
  TestRunsUpdateShardExecutionStatusHeaderParam &
    TestRunsUpdateShardExecutionStatusBodyParam &
    RequestParameters;

export interface TestRunsComputeAccountRunStatsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestRunsComputeAccountRunStatsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface TestRunsComputeAccountRunStatsQueryParam {
  queryParameters?: TestRunsComputeAccountRunStatsQueryParamProperties;
}

export interface TestRunsComputeAccountRunStatsHeaderParam {
  headers?: RawHttpHeadersInput & TestRunsComputeAccountRunStatsHeaders;
}

export type TestRunsComputeAccountRunStatsParameters = TestRunsComputeAccountRunStatsQueryParam &
  TestRunsComputeAccountRunStatsHeaderParam &
  RequestParameters;

export interface TestRunsComputeMetadataHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestRunsComputeMetadataHeaderParam {
  headers?: RawHttpHeadersInput & TestRunsComputeMetadataHeaders;
}

export type TestRunsComputeMetadataParameters = TestRunsComputeMetadataHeaderParam &
  RequestParameters;

export interface TestResultsUploadBatchHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestResultsUploadBatchBodyParam {
  body: UploadTestResultsRequest;
}

export interface TestResultsUploadBatchQueryParamProperties {
  /** All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  testRunId: string;
}

export interface TestResultsUploadBatchQueryParam {
  queryParameters: TestResultsUploadBatchQueryParamProperties;
}

export interface TestResultsUploadBatchHeaderParam {
  headers?: RawHttpHeadersInput & TestResultsUploadBatchHeaders;
}

export type TestResultsUploadBatchParameters = TestResultsUploadBatchQueryParam &
  TestResultsUploadBatchHeaderParam &
  TestResultsUploadBatchBodyParam &
  RequestParameters;

export interface TestResultsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestResultsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface TestResultsListQueryParam {
  queryParameters?: TestResultsListQueryParamProperties;
}

export interface TestResultsListHeaderParam {
  headers?: RawHttpHeadersInput & TestResultsListHeaders;
}

export type TestResultsListParameters = TestResultsListQueryParam &
  TestResultsListHeaderParam &
  RequestParameters;

export interface TestResultsComputeResultsStatsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TestResultsComputeResultsStatsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface TestResultsComputeResultsStatsQueryParam {
  queryParameters?: TestResultsComputeResultsStatsQueryParamProperties;
}

export interface TestResultsComputeResultsStatsHeaderParam {
  headers?: RawHttpHeadersInput & TestResultsComputeResultsStatsHeaders;
}

export type TestResultsComputeResultsStatsParameters = TestResultsComputeResultsStatsQueryParam &
  TestResultsComputeResultsStatsHeaderParam &
  RequestParameters;
