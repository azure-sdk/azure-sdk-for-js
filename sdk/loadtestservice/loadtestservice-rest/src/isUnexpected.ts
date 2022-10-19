// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

const responseMap: Record<string, string[]> = {
  "PATCH /app-components/{name}": ["200", "201"],
  "DELETE /app-components/{name}": ["204"],
  "GET /app-components/{name}": ["200"],
  "GET /app-components": ["200"],
  "PATCH /serverMetricsConfig/{name}": ["200", "201"],
  "GET /serverMetricsConfig/{name}": ["200"],
  "DELETE /serverMetricsConfig/{name}": ["204"],
  "GET /serverMetricsConfig": ["200"],
  "GET /serverMetricsConfig/default": ["200"],
  "GET /serverMetricsConfig/supportedResourceTypes": ["200"],
  "PATCH /loadtests/{testId}": ["200", "201"],
  "DELETE /loadtests/{testId}": ["204"],
  "GET /loadtests/{testId}": ["200"],
  "GET /loadtests/sortAndFilter": ["200"],
  "PUT /loadtests/{testId}/files/{fileId}": ["201"],
  "GET /loadtests/{testId}/files/{fileId}": ["200"],
  "DELETE /loadtests/{testId}/files/{fileId}": ["204"],
  "GET /loadtests/{testId}/files": ["200"],
  "DELETE /testruns/{testRunId}": ["204"],
  "PATCH /testruns/{testRunId}": ["200"],
  "GET /testruns/{testRunId}": ["200"],
  "GET /testruns/{testRunId}/files/{fileId}": ["200"],
  "GET /testruns/sortAndFilter": ["200"],
  "POST /testruns/{testRunId}:stop": ["200"],
  "GET /testRuns/{testRunId}/metricNamespaces": ["200"],
  "GET /testRuns/{testRunId}/metricDefinitions": ["200"],
  "POST /testRuns/{testRunId}/metrics": ["200"]
};

export function isUnexpected(
  response:
    | AppComponentCreateOrUpdate200Response
    | AppComponentCreateOrUpdate201Response
    | AppComponentCreateOrUpdateDefaultResponse
): response is AppComponentCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: AppComponentDelete204Response | AppComponentDeleteDefaultResponse
): response is AppComponentDeleteDefaultResponse;
export function isUnexpected(
  response: AppComponentGet200Response | AppComponentGetDefaultResponse
): response is AppComponentGetDefaultResponse;
export function isUnexpected(
  response:
    | AppComponentGetByTestOrTestRun200Response
    | AppComponentGetByTestOrTestRunDefaultResponse
): response is AppComponentGetByTestOrTestRunDefaultResponse;
export function isUnexpected(
  response:
    | ServerMetricsCreateOrUpdate200Response
    | ServerMetricsCreateOrUpdate201Response
    | ServerMetricsCreateOrUpdateDefaultResponse
): response is ServerMetricsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: ServerMetricsGet200Response | ServerMetricsGetDefaultResponse
): response is ServerMetricsGetDefaultResponse;
export function isUnexpected(
  response: ServerMetricsDelete204Response | ServerMetricsDeleteDefaultResponse
): response is ServerMetricsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ServerMetricsGetByTestOrTestRun200Response
    | ServerMetricsGetByTestOrTestRunDefaultResponse
): response is ServerMetricsGetByTestOrTestRunDefaultResponse;
export function isUnexpected(
  response:
    | ServerMetricsGetDefaultMetrics200Response
    | ServerMetricsGetDefaultMetricsDefaultResponse
): response is ServerMetricsGetDefaultMetricsDefaultResponse;
export function isUnexpected(
  response:
    | ServerMetricsListSupportedResourceType200Response
    | ServerMetricsListSupportedResourceTypeDefaultResponse
): response is ServerMetricsListSupportedResourceTypeDefaultResponse;
export function isUnexpected(
  response:
    | TestCreateOrUpdate200Response
    | TestCreateOrUpdate201Response
    | TestCreateOrUpdateDefaultResponse
): response is TestCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: TestDelete204Response | TestDeleteDefaultResponse
): response is TestDeleteDefaultResponse;
export function isUnexpected(
  response: TestGet200Response | TestGetDefaultResponse
): response is TestGetDefaultResponse;
export function isUnexpected(
  response: TestList200Response | TestListDefaultResponse
): response is TestListDefaultResponse;
export function isUnexpected(
  response: TestUploadFile201Response | TestUploadFileDefaultResponse
): response is TestUploadFileDefaultResponse;
export function isUnexpected(
  response: TestGetFile200Response | TestGetFileDefaultResponse
): response is TestGetFileDefaultResponse;
export function isUnexpected(
  response: TestDeleteFile204Response | TestDeleteFileDefaultResponse
): response is TestDeleteFileDefaultResponse;
export function isUnexpected(
  response: TestGetAllFiles200Response | TestGetAllFilesDefaultResponse
): response is TestGetAllFilesDefaultResponse;
export function isUnexpected(
  response: TestRunDelete204Response | TestRunDeleteDefaultResponse
): response is TestRunDeleteDefaultResponse;
export function isUnexpected(
  response:
    | TestRunCreateOrUpdate200Response
    | TestRunCreateOrUpdateDefaultResponse
): response is TestRunCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: TestRunGet200Response | TestRunGetDefaultResponse
): response is TestRunGetDefaultResponse;
export function isUnexpected(
  response: TestRunGetFile200Response | TestRunGetFileDefaultResponse
): response is TestRunGetFileDefaultResponse;
export function isUnexpected(
  response: TestRunList200Response | TestRunListDefaultResponse
): response is TestRunListDefaultResponse;
export function isUnexpected(
  response: TestRunStop200Response | TestRunStopDefaultResponse
): response is TestRunStopDefaultResponse;
export function isUnexpected(
  response:
    | TestRunMetricNamespaces200Response
    | TestRunMetricNamespacesDefaultResponse
): response is TestRunMetricNamespacesDefaultResponse;
export function isUnexpected(
  response:
    | TestRunMetricDefinitions200Response
    | TestRunMetricDefinitionsDefaultResponse
): response is TestRunMetricDefinitionsDefaultResponse;
export function isUnexpected(
  response: TestRunMetrics200Response | TestRunMetricsDefaultResponse
): response is TestRunMetricsDefaultResponse;
export function isUnexpected(
  response:
    | AppComponentCreateOrUpdate200Response
    | AppComponentCreateOrUpdate201Response
    | AppComponentCreateOrUpdateDefaultResponse
    | AppComponentDelete204Response
    | AppComponentDeleteDefaultResponse
    | AppComponentGet200Response
    | AppComponentGetDefaultResponse
    | AppComponentGetByTestOrTestRun200Response
    | AppComponentGetByTestOrTestRunDefaultResponse
    | ServerMetricsCreateOrUpdate200Response
    | ServerMetricsCreateOrUpdate201Response
    | ServerMetricsCreateOrUpdateDefaultResponse
    | ServerMetricsGet200Response
    | ServerMetricsGetDefaultResponse
    | ServerMetricsDelete204Response
    | ServerMetricsDeleteDefaultResponse
    | ServerMetricsGetByTestOrTestRun200Response
    | ServerMetricsGetByTestOrTestRunDefaultResponse
    | ServerMetricsGetDefaultMetrics200Response
    | ServerMetricsGetDefaultMetricsDefaultResponse
    | ServerMetricsListSupportedResourceType200Response
    | ServerMetricsListSupportedResourceTypeDefaultResponse
    | TestCreateOrUpdate200Response
    | TestCreateOrUpdate201Response
    | TestCreateOrUpdateDefaultResponse
    | TestDelete204Response
    | TestDeleteDefaultResponse
    | TestGet200Response
    | TestGetDefaultResponse
    | TestList200Response
    | TestListDefaultResponse
    | TestUploadFile201Response
    | TestUploadFileDefaultResponse
    | TestGetFile200Response
    | TestGetFileDefaultResponse
    | TestDeleteFile204Response
    | TestDeleteFileDefaultResponse
    | TestGetAllFiles200Response
    | TestGetAllFilesDefaultResponse
    | TestRunDelete204Response
    | TestRunDeleteDefaultResponse
    | TestRunCreateOrUpdate200Response
    | TestRunCreateOrUpdateDefaultResponse
    | TestRunGet200Response
    | TestRunGetDefaultResponse
    | TestRunGetFile200Response
    | TestRunGetFileDefaultResponse
    | TestRunList200Response
    | TestRunListDefaultResponse
    | TestRunStop200Response
    | TestRunStopDefaultResponse
    | TestRunMetricNamespaces200Response
    | TestRunMetricNamespacesDefaultResponse
    | TestRunMetricDefinitions200Response
    | TestRunMetricDefinitionsDefaultResponse
    | TestRunMetrics200Response
    | TestRunMetricsDefaultResponse
): response is
  | AppComponentCreateOrUpdateDefaultResponse
  | AppComponentDeleteDefaultResponse
  | AppComponentGetDefaultResponse
  | AppComponentGetByTestOrTestRunDefaultResponse
  | ServerMetricsCreateOrUpdateDefaultResponse
  | ServerMetricsGetDefaultResponse
  | ServerMetricsDeleteDefaultResponse
  | ServerMetricsGetByTestOrTestRunDefaultResponse
  | ServerMetricsGetDefaultMetricsDefaultResponse
  | ServerMetricsListSupportedResourceTypeDefaultResponse
  | TestCreateOrUpdateDefaultResponse
  | TestDeleteDefaultResponse
  | TestGetDefaultResponse
  | TestListDefaultResponse
  | TestUploadFileDefaultResponse
  | TestGetFileDefaultResponse
  | TestDeleteFileDefaultResponse
  | TestGetAllFilesDefaultResponse
  | TestRunDeleteDefaultResponse
  | TestRunCreateOrUpdateDefaultResponse
  | TestRunGetDefaultResponse
  | TestRunGetFileDefaultResponse
  | TestRunListDefaultResponse
  | TestRunStopDefaultResponse
  | TestRunMetricNamespacesDefaultResponse
  | TestRunMetricDefinitionsDefaultResponse
  | TestRunMetricsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i]?.startsWith("{") &&
          candidateParts[i]?.endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
