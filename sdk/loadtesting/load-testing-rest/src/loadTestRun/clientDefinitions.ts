// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TestRunParameters,
  DeleteTestRunParameters,
  GetTestRunParameters,
  CreateOrUpdateAppComponentsParameters,
  GetAppComponentsParameters,
  CreateOrUpdateServerMetricsConfigParameters,
  GetServerMetricsConfigParameters,
  GetTestRunFileParameters,
  ListMetricDimensionValuesParameters,
  ListMetricDefinitionsParameters,
  ListMetricNamespacesParameters,
  ListMetricsParameters,
  ListTestRunsParameters,
  StopTestRunParameters,
} from "./parameters";
import {
  TestRun200Response,
  TestRun201Response,
  TestRunDefaultResponse,
  DeleteTestRun204Response,
  DeleteTestRunDefaultResponse,
  GetTestRun200Response,
  GetTestRunDefaultResponse,
  CreateOrUpdateAppComponents200Response,
  CreateOrUpdateAppComponents201Response,
  CreateOrUpdateAppComponentsDefaultResponse,
  GetAppComponents200Response,
  GetAppComponentsDefaultResponse,
  CreateOrUpdateServerMetricsConfig200Response,
  CreateOrUpdateServerMetricsConfig201Response,
  CreateOrUpdateServerMetricsConfigDefaultResponse,
  GetServerMetricsConfig200Response,
  GetServerMetricsConfigDefaultResponse,
  GetTestRunFile200Response,
  GetTestRunFileDefaultResponse,
  ListMetricDimensionValues200Response,
  ListMetricDimensionValuesDefaultResponse,
  ListMetricDefinitions200Response,
  ListMetricDefinitionsDefaultResponse,
  ListMetricNamespaces200Response,
  ListMetricNamespacesDefaultResponse,
  ListMetrics200Response,
  ListMetricsDefaultResponse,
  ListTestRuns200Response,
  ListTestRunsDefaultResponse,
  StopTestRun200Response,
  StopTestRunDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface TestRun {
  /** Create and start a new test run with the given name. */
  patch(
    options: TestRunParameters
  ): StreamableMethod<
    TestRun200Response | TestRun201Response | TestRunDefaultResponse
  >;
  /** Delete a test run by its name. */
  delete(
    options?: DeleteTestRunParameters
  ): StreamableMethod<DeleteTestRun204Response | DeleteTestRunDefaultResponse>;
  /** Get test run details by name. */
  get(
    options?: GetTestRunParameters
  ): StreamableMethod<GetTestRun200Response | GetTestRunDefaultResponse>;
}

export interface CreateOrUpdateAppComponents {
  /** Associate an app component (collection of azure resources) to a test run */
  patch(
    options: CreateOrUpdateAppComponentsParameters
  ): StreamableMethod<
    | CreateOrUpdateAppComponents200Response
    | CreateOrUpdateAppComponents201Response
    | CreateOrUpdateAppComponentsDefaultResponse
  >;
  /**
   * Get associated app component (collection of azure resources) for the given test
   * run.
   */
  get(
    options?: GetAppComponentsParameters
  ): StreamableMethod<
    GetAppComponents200Response | GetAppComponentsDefaultResponse
  >;
}

export interface CreateOrUpdateServerMetricsConfig {
  /** Configure server metrics for a test run */
  patch(
    options: CreateOrUpdateServerMetricsConfigParameters
  ): StreamableMethod<
    | CreateOrUpdateServerMetricsConfig200Response
    | CreateOrUpdateServerMetricsConfig201Response
    | CreateOrUpdateServerMetricsConfigDefaultResponse
  >;
  /** List server metrics configuration for the given test run. */
  get(
    options?: GetServerMetricsConfigParameters
  ): StreamableMethod<
    GetServerMetricsConfig200Response | GetServerMetricsConfigDefaultResponse
  >;
}

export interface GetTestRunFile {
  /** Get test run file by file name. */
  get(
    options?: GetTestRunFileParameters
  ): StreamableMethod<
    GetTestRunFile200Response | GetTestRunFileDefaultResponse
  >;
}

export interface ListMetricDimensionValues {
  /** List the dimension values for the given metric dimension name. */
  get(
    options: ListMetricDimensionValuesParameters
  ): StreamableMethod<
    | ListMetricDimensionValues200Response
    | ListMetricDimensionValuesDefaultResponse
  >;
}

export interface ListMetricDefinitions {
  /** List the metric definitions for a load test run. */
  get(
    options?: ListMetricDefinitionsParameters
  ): StreamableMethod<
    ListMetricDefinitions200Response | ListMetricDefinitionsDefaultResponse
  >;
}

export interface ListMetricNamespaces {
  /** List the metric namespaces for a load test run. */
  get(
    options?: ListMetricNamespacesParameters
  ): StreamableMethod<
    ListMetricNamespaces200Response | ListMetricNamespacesDefaultResponse
  >;
}

export interface ListMetrics {
  /** List the metric values for a load test run. */
  post(
    options: ListMetricsParameters
  ): StreamableMethod<ListMetrics200Response | ListMetricsDefaultResponse>;
}

export interface ListTestRuns {
  /** Get all test runs with given filters */
  get(
    options?: ListTestRunsParameters
  ): StreamableMethod<ListTestRuns200Response | ListTestRunsDefaultResponse>;
}

export interface StopTestRun {
  /** Stop test run by name. */
  post(
    options?: StopTestRunParameters
  ): StreamableMethod<StopTestRun200Response | StopTestRunDefaultResponse>;
}

export interface Routes {
  /** Resource for '/test-runs/\{testRunId\}' has methods for the following verbs: patch, delete, get */
  (path: "/test-runs/{testRunId}", testRunId: string): TestRun;
  /** Resource for '/test-runs/\{testRunId\}/app-components' has methods for the following verbs: patch, get */
  (
    path: "/test-runs/{testRunId}/app-components",
    testRunId: string
  ): CreateOrUpdateAppComponents;
  /** Resource for '/test-runs/\{testRunId\}/server-metrics-config' has methods for the following verbs: patch, get */
  (
    path: "/test-runs/{testRunId}/server-metrics-config",
    testRunId: string
  ): CreateOrUpdateServerMetricsConfig;
  /** Resource for '/test-runs/\{testRunId\}/files/\{fileName\}' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/files/{fileName}",
    testRunId: string,
    fileName: string
  ): GetTestRunFile;
  /** Resource for '/test-runs/\{testRunId\}/metric-dimensions/\{name\}/values' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-dimensions/{name}/values",
    testRunId: string,
    name: string
  ): ListMetricDimensionValues;
  /** Resource for '/test-runs/\{testRunId\}/metric-definitions' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-definitions",
    testRunId: string
  ): ListMetricDefinitions;
  /** Resource for '/test-runs/\{testRunId\}/metric-namespaces' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-namespaces",
    testRunId: string
  ): ListMetricNamespaces;
  /** Resource for '/test-runs/\{testRunId\}/metrics' has methods for the following verbs: post */
  (path: "/test-runs/{testRunId}/metrics", testRunId: string): ListMetrics;
  /** Resource for '/test-runs' has methods for the following verbs: get */
  (path: "/test-runs"): ListTestRuns;
  /** Resource for '/test-runs/\{testRunId\}:stop' has methods for the following verbs: post */
  (path: "/test-runs/{testRunId}:stop", testRunId: string): StopTestRun;
}

export type LoadTestRunClient = Client & {
  path: Routes;
};
