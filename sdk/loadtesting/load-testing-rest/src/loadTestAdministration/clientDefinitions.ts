// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrUpdateTestParameters,
  GetTestParameters,
  DeleteTestParameters,
  CreateOrUpdateAppComponentsParameters,
  GetAppComponentsParameters,
  CreateOrUpdateServerMetricsConfigParameters,
  GetServerMetricsConfigParameters,
  GetTestFileParameters,
  UploadTestFileParameters,
  DeleteTestFileParameters,
  ListTestFilesParameters,
  ListTestsParameters,
} from "./parameters";
import {
  CreateOrUpdateTest200Response,
  CreateOrUpdateTest201Response,
  CreateOrUpdateTestDefaultResponse,
  GetTest200Response,
  GetTestDefaultResponse,
  DeleteTest204Response,
  DeleteTestDefaultResponse,
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
  GetTestFile200Response,
  GetTestFileDefaultResponse,
  UploadTestFile201Response,
  UploadTestFileDefaultResponse,
  DeleteTestFile204Response,
  DeleteTestFileDefaultResponse,
  ListTestFiles200Response,
  ListTestFilesDefaultResponse,
  ListTests200Response,
  ListTestsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrUpdateTest {
  /** Create a new test or update an existing test. */
  patch(
    options: CreateOrUpdateTestParameters
  ): StreamableMethod<
    | CreateOrUpdateTest200Response
    | CreateOrUpdateTest201Response
    | CreateOrUpdateTestDefaultResponse
  >;
  /** Get load test details by test name */
  get(
    options?: GetTestParameters
  ): StreamableMethod<GetTest200Response | GetTestDefaultResponse>;
  /** Delete a test by its name. */
  delete(
    options?: DeleteTestParameters
  ): StreamableMethod<DeleteTest204Response | DeleteTestDefaultResponse>;
}

export interface CreateOrUpdateAppComponents {
  /** Associate an app component (collection of azure resources) to a test */
  patch(
    options: CreateOrUpdateAppComponentsParameters
  ): StreamableMethod<
    | CreateOrUpdateAppComponents200Response
    | CreateOrUpdateAppComponents201Response
    | CreateOrUpdateAppComponentsDefaultResponse
  >;
  /** Get associated app component (collection of azure resources) for the given test. */
  get(
    options?: GetAppComponentsParameters
  ): StreamableMethod<
    GetAppComponents200Response | GetAppComponentsDefaultResponse
  >;
}

export interface CreateOrUpdateServerMetricsConfig {
  /** Configure server metrics for a test */
  patch(
    options: CreateOrUpdateServerMetricsConfigParameters
  ): StreamableMethod<
    | CreateOrUpdateServerMetricsConfig200Response
    | CreateOrUpdateServerMetricsConfig201Response
    | CreateOrUpdateServerMetricsConfigDefaultResponse
  >;
  /** List server metrics configuration for the given test. */
  get(
    options?: GetServerMetricsConfigParameters
  ): StreamableMethod<
    GetServerMetricsConfig200Response | GetServerMetricsConfigDefaultResponse
  >;
}

export interface GetTestFile {
  /** Get test file by the file name. */
  get(
    options?: GetTestFileParameters
  ): StreamableMethod<GetTestFile200Response | GetTestFileDefaultResponse>;
  /**
   * Upload input file for a given test name. File size can't be more than 50 MB.
   * Existing file with same name for the given test will be overwritten. File
   * should be provided in the request body as application/octet-stream.
   */
  put(
    options: UploadTestFileParameters
  ): StreamableMethod<
    UploadTestFile201Response | UploadTestFileDefaultResponse
  >;
  /** Delete file by the file name for a test */
  delete(
    options?: DeleteTestFileParameters
  ): StreamableMethod<
    DeleteTestFile204Response | DeleteTestFileDefaultResponse
  >;
}

export interface ListTestFiles {
  /** Get all test files. */
  get(
    options?: ListTestFilesParameters
  ): StreamableMethod<ListTestFiles200Response | ListTestFilesDefaultResponse>;
}

export interface ListTests {
  /**
   * Get all load tests by the fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
   */
  get(
    options?: ListTestsParameters
  ): StreamableMethod<ListTests200Response | ListTestsDefaultResponse>;
}

export interface Routes {
  /** Resource for '/tests/\{testId\}' has methods for the following verbs: patch, get, delete */
  (path: "/tests/{testId}", testId: string): CreateOrUpdateTest;
  /** Resource for '/tests/\{testId\}/app-components' has methods for the following verbs: patch, get */
  (
    path: "/tests/{testId}/app-components",
    testId: string
  ): CreateOrUpdateAppComponents;
  /** Resource for '/tests/\{testId\}/server-metrics-config' has methods for the following verbs: patch, get */
  (
    path: "/tests/{testId}/server-metrics-config",
    testId: string
  ): CreateOrUpdateServerMetricsConfig;
  /** Resource for '/tests/\{testId\}/files/\{fileName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/tests/{testId}/files/{fileName}",
    testId: string,
    fileName: string
  ): GetTestFile;
  /** Resource for '/tests/\{testId\}/files' has methods for the following verbs: get */
  (path: "/tests/{testId}/files", testId: string): ListTestFiles;
  /** Resource for '/tests' has methods for the following verbs: get */
  (path: "/tests"): ListTests;
}

export type LoadTestAdministrationClient = Client & {
  path: Routes;
};
