// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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

const responseMap: Record<string, string[]> = {
  "PATCH /accounts/{accountId}/test-runs/{testRunId}": ["200", "201"],
  "GET /accounts/{accountId}/test-runs/{testRunId}": ["200"],
  "GET /accounts/{accountId}/test-runs": ["200"],
  "POST /accounts/{accountId}/test-runs/{testRunId}:createArtifactsUploadBaseUrl": ["200"],
  "POST /accounts/{accountId}/test-runs/{testRunId}:updateShardExecutionStatus": ["200"],
  "POST /accounts/{accountId}/test-runs:accountRunStats": ["200"],
  "POST /accounts/{accountId}/test-runs:metadata": ["200"],
  "POST /accounts/{accountId}/test-results:uploadBatch": ["200"],
  "GET /accounts/{accountId}/test-results": ["200"],
  "POST /accounts/{accountId}/test-results:resultsStats": ["200"],
};

export function isUnexpected(
  response:
    | TestRunsCreateOrUpdate200Response
    | TestRunsCreateOrUpdate201Response
    | TestRunsCreateOrUpdateDefaultResponse,
): response is TestRunsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: TestRunsGet200Response | TestRunsGetDefaultResponse,
): response is TestRunsGetDefaultResponse;
export function isUnexpected(
  response: TestRunsList200Response | TestRunsListDefaultResponse,
): response is TestRunsListDefaultResponse;
export function isUnexpected(
  response:
    | TestRunsCreateArtifactsUploadBaseUrl200Response
    | TestRunsCreateArtifactsUploadBaseUrlDefaultResponse,
): response is TestRunsCreateArtifactsUploadBaseUrlDefaultResponse;
export function isUnexpected(
  response:
    | TestRunsUpdateShardExecutionStatus200Response
    | TestRunsUpdateShardExecutionStatusDefaultResponse,
): response is TestRunsUpdateShardExecutionStatusDefaultResponse;
export function isUnexpected(
  response:
    | TestRunsComputeAccountRunStats200Response
    | TestRunsComputeAccountRunStatsDefaultResponse,
): response is TestRunsComputeAccountRunStatsDefaultResponse;
export function isUnexpected(
  response: TestRunsComputeMetadata200Response | TestRunsComputeMetadataDefaultResponse,
): response is TestRunsComputeMetadataDefaultResponse;
export function isUnexpected(
  response: TestResultsUploadBatch200Response | TestResultsUploadBatchDefaultResponse,
): response is TestResultsUploadBatchDefaultResponse;
export function isUnexpected(
  response: TestResultsList200Response | TestResultsListDefaultResponse,
): response is TestResultsListDefaultResponse;
export function isUnexpected(
  response:
    | TestResultsComputeResultsStats200Response
    | TestResultsComputeResultsStatsDefaultResponse,
): response is TestResultsComputeResultsStatsDefaultResponse;
export function isUnexpected(
  response:
    | TestRunsCreateOrUpdate200Response
    | TestRunsCreateOrUpdate201Response
    | TestRunsCreateOrUpdateDefaultResponse
    | TestRunsGet200Response
    | TestRunsGetDefaultResponse
    | TestRunsList200Response
    | TestRunsListDefaultResponse
    | TestRunsCreateArtifactsUploadBaseUrl200Response
    | TestRunsCreateArtifactsUploadBaseUrlDefaultResponse
    | TestRunsUpdateShardExecutionStatus200Response
    | TestRunsUpdateShardExecutionStatusDefaultResponse
    | TestRunsComputeAccountRunStats200Response
    | TestRunsComputeAccountRunStatsDefaultResponse
    | TestRunsComputeMetadata200Response
    | TestRunsComputeMetadataDefaultResponse
    | TestResultsUploadBatch200Response
    | TestResultsUploadBatchDefaultResponse
    | TestResultsList200Response
    | TestResultsListDefaultResponse
    | TestResultsComputeResultsStats200Response
    | TestResultsComputeResultsStatsDefaultResponse,
): response is
  | TestRunsCreateOrUpdateDefaultResponse
  | TestRunsGetDefaultResponse
  | TestRunsListDefaultResponse
  | TestRunsCreateArtifactsUploadBaseUrlDefaultResponse
  | TestRunsUpdateShardExecutionStatusDefaultResponse
  | TestRunsComputeAccountRunStatsDefaultResponse
  | TestRunsComputeMetadataDefaultResponse
  | TestResultsUploadBatchDefaultResponse
  | TestResultsListDefaultResponse
  | TestResultsComputeResultsStatsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

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

    // track if we have found a match to return the values found.
    let found = true;
    for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
      if (candidateParts[i]?.startsWith("{") && candidateParts[i]?.indexOf("}") !== -1) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(
          pathParts[j] || "",
        );

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
