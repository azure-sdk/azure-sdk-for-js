// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  TestRunsCreateOrUpdateParameters,
  TestRunsGetParameters,
  TestRunsListParameters,
  TestRunsCreateArtifactsUploadBaseUrlParameters,
  TestRunsUpdateShardExecutionStatusParameters,
  TestRunsComputeAccountRunStatsParameters,
  TestRunsComputeMetadataParameters,
  TestResultsUploadBatchParameters,
  TestResultsListParameters,
  TestResultsComputeResultsStatsParameters,
} from "./parameters.js";
import type {
  TestRunsCreateOrUpdate200Response,
  TestRunsCreateOrUpdate201Response,
  TestRunsCreateOrUpdateDefaultResponse,
  TestRunsGet200Response,
  TestRunsGetDefaultResponse,
  TestRunsList200Response,
  TestRunsListDefaultResponse,
  TestRunsCreateArtifactsUploadBaseUrl200Response,
  TestRunsCreateArtifactsUploadBaseUrlDefaultResponse,
  TestRunsUpdateShardExecutionStatus200Response,
  TestRunsUpdateShardExecutionStatusDefaultResponse,
  TestRunsComputeAccountRunStats200Response,
  TestRunsComputeAccountRunStatsDefaultResponse,
  TestRunsComputeMetadata200Response,
  TestRunsComputeMetadataDefaultResponse,
  TestResultsUploadBatch200Response,
  TestResultsUploadBatchDefaultResponse,
  TestResultsList200Response,
  TestResultsListDefaultResponse,
  TestResultsComputeResultsStats200Response,
  TestResultsComputeResultsStatsDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface TestRunsCreateOrUpdate {
  /** Creates or updates a testrun. */
  patch(
    options: TestRunsCreateOrUpdateParameters,
  ): StreamableMethod<
    | TestRunsCreateOrUpdate200Response
    | TestRunsCreateOrUpdate201Response
    | TestRunsCreateOrUpdateDefaultResponse
  >;
  /** Gets a test run. */
  get(
    options?: TestRunsGetParameters,
  ): StreamableMethod<TestRunsGet200Response | TestRunsGetDefaultResponse>;
}

export interface TestRunsList {
  /** List test runs. Supported filters are triggeredAt with operator ge, status and branch  with in operator, displayName with eq operator */
  get(
    options?: TestRunsListParameters,
  ): StreamableMethod<TestRunsList200Response | TestRunsListDefaultResponse>;
}

export interface TestRunsCreateArtifactsUploadBaseUrl {
  /** Get TestResults Upload Url. */
  post(
    options?: TestRunsCreateArtifactsUploadBaseUrlParameters,
  ): StreamableMethod<
    | TestRunsCreateArtifactsUploadBaseUrl200Response
    | TestRunsCreateArtifactsUploadBaseUrlDefaultResponse
  >;
}

export interface TestRunsUpdateShardExecutionStatus {
  /** Resource action operation template. */
  post(
    options: TestRunsUpdateShardExecutionStatusParameters,
  ): StreamableMethod<
    | TestRunsUpdateShardExecutionStatus200Response
    | TestRunsUpdateShardExecutionStatusDefaultResponse
  >;
}

export interface TestRunsComputeAccountRunStats {
  /** Get TestRun summary for an Odata filter.Supported filters are triggeredAt with operator ge, status and branch  with in operator, displayName with eq operator */
  post(
    options?: TestRunsComputeAccountRunStatsParameters,
  ): StreamableMethod<
    TestRunsComputeAccountRunStats200Response | TestRunsComputeAccountRunStatsDefaultResponse
  >;
}

export interface TestRunsComputeMetadata {
  /** Get TestRuns metadata for all runs in an account. */
  post(
    options?: TestRunsComputeMetadataParameters,
  ): StreamableMethod<TestRunsComputeMetadata200Response | TestRunsComputeMetadataDefaultResponse>;
}

export interface TestResultsUploadBatch {
  /** Upload Test Results. */
  post(
    options: TestResultsUploadBatchParameters,
  ): StreamableMethod<TestResultsUploadBatch200Response | TestResultsUploadBatchDefaultResponse>;
}

export interface TestResultsList {
  /** List Test Results.Supported filters are Supported filters are runid,testTitle with eq operator , project, jobname  tag, status with in operator */
  get(
    options?: TestResultsListParameters,
  ): StreamableMethod<TestResultsList200Response | TestResultsListDefaultResponse>;
}

export interface TestResultsComputeResultsStats {
  /** Get Test Results summary.Supported filters are runid,testTitle with eq operator , project, jobname  tag, status with in operator */
  post(
    options?: TestResultsComputeResultsStatsParameters,
  ): StreamableMethod<
    TestResultsComputeResultsStats200Response | TestResultsComputeResultsStatsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/accounts/\{accountId\}/test-runs/\{testRunId\}' has methods for the following verbs: patch, get */
  (
    path: "/accounts/{accountId}/test-runs/{testRunId}",
    accountId: string,
    testRunId: string,
  ): TestRunsCreateOrUpdate;
  /** Resource for '/accounts/\{accountId\}/test-runs' has methods for the following verbs: get */
  (path: "/accounts/{accountId}/test-runs", accountId: string): TestRunsList;
  /** Resource for '/accounts/\{accountId\}/test-runs/\{testRunId\}:createArtifactsUploadBaseUrl' has methods for the following verbs: post */
  (
    path: "/accounts/{accountId}/test-runs/{testRunId}:createArtifactsUploadBaseUrl",
    accountId: string,
    testRunId: string,
  ): TestRunsCreateArtifactsUploadBaseUrl;
  /** Resource for '/accounts/\{accountId\}/test-runs/\{testRunId\}:updateShardExecutionStatus' has methods for the following verbs: post */
  (
    path: "/accounts/{accountId}/test-runs/{testRunId}:updateShardExecutionStatus",
    accountId: string,
    testRunId: string,
  ): TestRunsUpdateShardExecutionStatus;
  /** Resource for '/accounts/\{accountId\}/test-runs:accountRunStats' has methods for the following verbs: post */
  (
    path: "/accounts/{accountId}/test-runs:accountRunStats",
    accountId: string,
  ): TestRunsComputeAccountRunStats;
  /** Resource for '/accounts/\{accountId\}/test-runs:metadata' has methods for the following verbs: post */
  (path: "/accounts/{accountId}/test-runs:metadata", accountId: string): TestRunsComputeMetadata;
  /** Resource for '/accounts/\{accountId\}/test-results:uploadBatch' has methods for the following verbs: post */
  (
    path: "/accounts/{accountId}/test-results:uploadBatch",
    accountId: string,
  ): TestResultsUploadBatch;
  /** Resource for '/accounts/\{accountId\}/test-results' has methods for the following verbs: get */
  (path: "/accounts/{accountId}/test-results", accountId: string): TestResultsList;
  /** Resource for '/accounts/\{accountId\}/test-results:resultsStats' has methods for the following verbs: post */
  (
    path: "/accounts/{accountId}/test-results:resultsStats",
    accountId: string,
  ): TestResultsComputeResultsStats;
}

export type MicrosoftPlaywrightTestingClient = Client & {
  path: Routes;
};
