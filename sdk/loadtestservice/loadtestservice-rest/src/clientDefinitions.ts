// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AppComponentCreateOrUpdateParameters,
  AppComponentDeleteParameters,
  AppComponentGetParameters,
  AppComponentGetByTestOrTestRunParameters,
  ServerMetricsCreateOrUpdateParameters,
  ServerMetricsGetParameters,
  ServerMetricsDeleteParameters,
  ServerMetricsGetByTestOrTestRunParameters,
  ServerMetricsGetDefaultMetricsParameters,
  ServerMetricsListSupportedResourceTypeParameters,
  TestCreateOrUpdateParameters,
  TestDeleteParameters,
  TestGetParameters,
  TestListParameters,
  TestUploadFileParameters,
  TestGetFileParameters,
  TestDeleteFileParameters,
  TestGetAllFilesParameters,
  TestRunDeleteParameters,
  TestRunCreateOrUpdateParameters,
  TestRunGetParameters,
  TestRunGetFileParameters,
  TestRunListParameters,
  TestRunStopParameters,
  TestRunMetricNamespacesParameters,
  TestRunMetricDefinitionsParameters,
  TestRunMetricsParameters
} from "./parameters";
import {
  AppComponentCreateOrUpdate200Response,
  AppComponentCreateOrUpdate201Response,
  AppComponentCreateOrUpdateDefaultResponse,
  AppComponentDelete204Response,
  AppComponentDeleteDefaultResponse,
  AppComponentGet200Response,
  AppComponentGetDefaultResponse,
  AppComponentGetByTestOrTestRun200Response,
  AppComponentGetByTestOrTestRunDefaultResponse,
  ServerMetricsCreateOrUpdate200Response,
  ServerMetricsCreateOrUpdate201Response,
  ServerMetricsCreateOrUpdateDefaultResponse,
  ServerMetricsGet200Response,
  ServerMetricsGetDefaultResponse,
  ServerMetricsDelete204Response,
  ServerMetricsDeleteDefaultResponse,
  ServerMetricsGetByTestOrTestRun200Response,
  ServerMetricsGetByTestOrTestRunDefaultResponse,
  ServerMetricsGetDefaultMetrics200Response,
  ServerMetricsGetDefaultMetricsDefaultResponse,
  ServerMetricsListSupportedResourceType200Response,
  ServerMetricsListSupportedResourceTypeDefaultResponse,
  TestCreateOrUpdate200Response,
  TestCreateOrUpdate201Response,
  TestCreateOrUpdateDefaultResponse,
  TestDelete204Response,
  TestDeleteDefaultResponse,
  TestGet200Response,
  TestGetDefaultResponse,
  TestList200Response,
  TestListDefaultResponse,
  TestUploadFile201Response,
  TestUploadFileDefaultResponse,
  TestGetFile200Response,
  TestGetFileDefaultResponse,
  TestDeleteFile204Response,
  TestDeleteFileDefaultResponse,
  TestGetAllFiles200Response,
  TestGetAllFilesDefaultResponse,
  TestRunDelete204Response,
  TestRunDeleteDefaultResponse,
  TestRunCreateOrUpdate200Response,
  TestRunCreateOrUpdateDefaultResponse,
  TestRunGet200Response,
  TestRunGetDefaultResponse,
  TestRunGetFile200Response,
  TestRunGetFileDefaultResponse,
  TestRunList200Response,
  TestRunListDefaultResponse,
  TestRunStop200Response,
  TestRunStopDefaultResponse,
  TestRunMetricNamespaces200Response,
  TestRunMetricNamespacesDefaultResponse,
  TestRunMetricDefinitions200Response,
  TestRunMetricDefinitionsDefaultResponse,
  TestRunMetrics200Response,
  TestRunMetricsDefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AppComponentCreateOrUpdate {
  /** Associate an app component (Azure resource) to a test or test run. */
  patch(
    options: AppComponentCreateOrUpdateParameters
  ): StreamableMethod<
    | AppComponentCreateOrUpdate200Response
    | AppComponentCreateOrUpdate201Response
    | AppComponentCreateOrUpdateDefaultResponse
  >;
  /** Delete an app component. */
  delete(
    options?: AppComponentDeleteParameters
  ): StreamableMethod<
    AppComponentDelete204Response | AppComponentDeleteDefaultResponse
  >;
  /** Get app Component details by unique name. */
  get(
    options?: AppComponentGetParameters
  ): StreamableMethod<
    AppComponentGet200Response | AppComponentGetDefaultResponse
  >;
}

export interface AppComponentGetByTestOrTestRun {
  /** Get an app component for a test or a test run by its name. */
  get(
    options?: AppComponentGetByTestOrTestRunParameters
  ): StreamableMethod<
    | AppComponentGetByTestOrTestRun200Response
    | AppComponentGetByTestOrTestRunDefaultResponse
  >;
}

export interface ServerMetricsCreateOrUpdate {
  /** Configure server metrics for a test or test run */
  patch(
    options: ServerMetricsCreateOrUpdateParameters
  ): StreamableMethod<
    | ServerMetricsCreateOrUpdate200Response
    | ServerMetricsCreateOrUpdate201Response
    | ServerMetricsCreateOrUpdateDefaultResponse
  >;
  /** Get server metrics configuration by its name. */
  get(
    options?: ServerMetricsGetParameters
  ): StreamableMethod<
    ServerMetricsGet200Response | ServerMetricsGetDefaultResponse
  >;
  /** Delete server metrics configuration by its name */
  delete(
    options?: ServerMetricsDeleteParameters
  ): StreamableMethod<
    ServerMetricsDelete204Response | ServerMetricsDeleteDefaultResponse
  >;
}

export interface ServerMetricsGetByTestOrTestRun {
  /** Get server metrics configuration for a test or test run by its name. */
  get(
    options?: ServerMetricsGetByTestOrTestRunParameters
  ): StreamableMethod<
    | ServerMetricsGetByTestOrTestRun200Response
    | ServerMetricsGetByTestOrTestRunDefaultResponse
  >;
}

export interface ServerMetricsGetDefaultMetrics {
  /** Get all default server metrics configuration for supported resource types. */
  get(
    options?: ServerMetricsGetDefaultMetricsParameters
  ): StreamableMethod<
    | ServerMetricsGetDefaultMetrics200Response
    | ServerMetricsGetDefaultMetricsDefaultResponse
  >;
}

export interface ServerMetricsListSupportedResourceType {
  /** Get all supported resource types for adding an app component(Azure resource types). */
  get(
    options?: ServerMetricsListSupportedResourceTypeParameters
  ): StreamableMethod<
    | ServerMetricsListSupportedResourceType200Response
    | ServerMetricsListSupportedResourceTypeDefaultResponse
  >;
}

export interface TestCreateOrUpdate {
  /** Create a new test or update an existing test. */
  patch(
    options: TestCreateOrUpdateParameters
  ): StreamableMethod<
    | TestCreateOrUpdate200Response
    | TestCreateOrUpdate201Response
    | TestCreateOrUpdateDefaultResponse
  >;
  /** Delete a test by its name. */
  delete(
    options?: TestDeleteParameters
  ): StreamableMethod<TestDelete204Response | TestDeleteDefaultResponse>;
  /** Get load test details by test name */
  get(
    options?: TestGetParameters
  ): StreamableMethod<TestGet200Response | TestGetDefaultResponse>;
}

export interface TestList {
  /** Get all load tests by the fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}. */
  get(
    options?: TestListParameters
  ): StreamableMethod<TestList200Response | TestListDefaultResponse>;
}

export interface TestUploadFile {
  /** Upload input file for a given test name. File size can't be more than 50 MB. Existing file with same name for the given test will be overwritten. File should be provided in the request body as multipart/form-data. */
  put(
    options: TestUploadFileParameters
  ): StreamableMethod<
    TestUploadFile201Response | TestUploadFileDefaultResponse
  >;
  /** Get test file by the file name. */
  get(
    options?: TestGetFileParameters
  ): StreamableMethod<TestGetFile200Response | TestGetFileDefaultResponse>;
  /** Delete file by the file name for a test */
  delete(
    options?: TestDeleteFileParameters
  ): StreamableMethod<
    TestDeleteFile204Response | TestDeleteFileDefaultResponse
  >;
}

export interface TestGetAllFiles {
  /** Get all test files. */
  get(
    options?: TestGetAllFilesParameters
  ): StreamableMethod<
    TestGetAllFiles200Response | TestGetAllFilesDefaultResponse
  >;
}

export interface TestRunDelete {
  /** Delete a test run by its name. */
  delete(
    options?: TestRunDeleteParameters
  ): StreamableMethod<TestRunDelete204Response | TestRunDeleteDefaultResponse>;
  /** Create and start a new test run with the given name. */
  patch(
    options: TestRunCreateOrUpdateParameters
  ): StreamableMethod<
    TestRunCreateOrUpdate200Response | TestRunCreateOrUpdateDefaultResponse
  >;
  /** Get test run details by name. */
  get(
    options?: TestRunGetParameters
  ): StreamableMethod<TestRunGet200Response | TestRunGetDefaultResponse>;
}

export interface TestRunGetFile {
  /** Get test run file by file name. */
  get(
    options?: TestRunGetFileParameters
  ): StreamableMethod<
    TestRunGetFile200Response | TestRunGetFileDefaultResponse
  >;
}

export interface TestRunList {
  /** Get all test runs with given filters */
  get(
    options?: TestRunListParameters
  ): StreamableMethod<TestRunList200Response | TestRunListDefaultResponse>;
}

export interface TestRunStop {
  /** Stop test run by name. */
  post(
    options?: TestRunStopParameters
  ): StreamableMethod<TestRunStop200Response | TestRunStopDefaultResponse>;
}

export interface TestRunMetricNamespaces {
  /** Lists the metric namespaces for a load test run. */
  get(
    options?: TestRunMetricNamespacesParameters
  ): StreamableMethod<
    TestRunMetricNamespaces200Response | TestRunMetricNamespacesDefaultResponse
  >;
}

export interface TestRunMetricDefinitions {
  /** Lists the metric definitions for a load test run. */
  get(
    options: TestRunMetricDefinitionsParameters
  ): StreamableMethod<
    | TestRunMetricDefinitions200Response
    | TestRunMetricDefinitionsDefaultResponse
  >;
}

export interface TestRunMetrics {
  /** Lists the metric values for a load test run. */
  post(
    options: TestRunMetricsParameters
  ): StreamableMethod<
    TestRunMetrics200Response | TestRunMetricsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/app-components/\{name\}' has methods for the following verbs: patch, delete, get */
  (path: "/app-components/{name}", name: string): AppComponentCreateOrUpdate;
  /** Resource for '/app-components' has methods for the following verbs: get */
  (path: "/app-components"): AppComponentGetByTestOrTestRun;
  /** Resource for '/serverMetricsConfig/\{name\}' has methods for the following verbs: patch, get, delete */
  (
    path: "/serverMetricsConfig/{name}",
    name: string
  ): ServerMetricsCreateOrUpdate;
  /** Resource for '/serverMetricsConfig' has methods for the following verbs: get */
  (path: "/serverMetricsConfig"): ServerMetricsGetByTestOrTestRun;
  /** Resource for '/serverMetricsConfig/default' has methods for the following verbs: get */
  (path: "/serverMetricsConfig/default"): ServerMetricsGetDefaultMetrics;
  /** Resource for '/serverMetricsConfig/supportedResourceTypes' has methods for the following verbs: get */
  (
    path: "/serverMetricsConfig/supportedResourceTypes"
  ): ServerMetricsListSupportedResourceType;
  /** Resource for '/loadtests/\{testId\}' has methods for the following verbs: patch, delete, get */
  (path: "/loadtests/{testId}", testId: string): TestCreateOrUpdate;
  /** Resource for '/loadtests/sortAndFilter' has methods for the following verbs: get */
  (path: "/loadtests/sortAndFilter"): TestList;
  /** Resource for '/loadtests/\{testId\}/files/\{fileId\}' has methods for the following verbs: put, get, delete */
  (
    path: "/loadtests/{testId}/files/{fileId}",
    testId: string,
    fileId: string
  ): TestUploadFile;
  /** Resource for '/loadtests/\{testId\}/files' has methods for the following verbs: get */
  (path: "/loadtests/{testId}/files", testId: string): TestGetAllFiles;
  /** Resource for '/testruns/\{testRunId\}' has methods for the following verbs: delete, patch, get */
  (path: "/testruns/{testRunId}", testRunId: string): TestRunDelete;
  /** Resource for '/testruns/\{testRunId\}/files/\{fileId\}' has methods for the following verbs: get */
  (
    path: "/testruns/{testRunId}/files/{fileId}",
    testRunId: string,
    fileId: string
  ): TestRunGetFile;
  /** Resource for '/testruns/sortAndFilter' has methods for the following verbs: get */
  (path: "/testruns/sortAndFilter"): TestRunList;
  /** Resource for '/testruns/\{testRunId\}:stop' has methods for the following verbs: post */
  (path: "/testruns/{testRunId}:stop", testRunId: string): TestRunStop;
  /** Resource for '/testRuns/\{testRunId\}/metricNamespaces' has methods for the following verbs: get */
  (
    path: "/testRuns/{testRunId}/metricNamespaces",
    testRunId: string
  ): TestRunMetricNamespaces;
  /** Resource for '/testRuns/\{testRunId\}/metricDefinitions' has methods for the following verbs: get */
  (
    path: "/testRuns/{testRunId}/metricDefinitions",
    testRunId: string
  ): TestRunMetricDefinitions;
  /** Resource for '/testRuns/\{testRunId\}/metrics' has methods for the following verbs: post */
  (path: "/testRuns/{testRunId}/metrics", testRunId: string): TestRunMetrics;
}

export type LoadTestingClient = Client & {
  path: Routes;
};
