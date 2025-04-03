// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ConnectionsGet200Response,
  ConnectionsGetDefaultResponse,
  ConnectionsList200Response,
  ConnectionsListDefaultResponse,
  EvaluationsEvaluationsGet200Response,
  EvaluationsEvaluationsGetDefaultResponse,
  EvaluationsEvaluationsList200Response,
  EvaluationsEvaluationsListDefaultResponse,
  EvaluationsEvaluationsCreateRun200Response,
  EvaluationsEvaluationsCreateRunDefaultResponse,
  DatasetsDatasetsListVersions200Response,
  DatasetsDatasetsListVersionsDefaultResponse,
  DatasetsDatasetsCreate200Response,
  DatasetsDatasetsCreateDefaultResponse,
  DatasetsDatasetsListLatest200Response,
  DatasetsDatasetsListLatestDefaultResponse,
  DatasetsDatasetsGetVersion200Response,
  DatasetsDatasetsGetVersionDefaultResponse,
  DatasetsDatasetsDeleteVersion204Response,
  DatasetsDatasetsDeleteVersionDefaultResponse,
  DatasetsDatasetsCreateVersion200Response,
  DatasetsDatasetsCreateVersion201Response,
  DatasetsDatasetsCreateVersionDefaultResponse,
  DatasetsDatasetsStartPendingUploadVersion200Response,
  DatasetsDatasetsStartPendingUploadVersionDefaultResponse,
  DatasetsDatasetsStartPendingUpload200Response,
  DatasetsDatasetsStartPendingUploadDefaultResponse,
  IndexesIndexesListVersions200Response,
  IndexesIndexesListVersionsDefaultResponse,
  IndexesIndexesCreate200Response,
  IndexesIndexesCreateDefaultResponse,
  IndexesIndexesListLatest200Response,
  IndexesIndexesListLatestDefaultResponse,
  IndexesIndexesGetVersion200Response,
  IndexesIndexesGetVersionDefaultResponse,
  IndexesIndexesDeleteVersion204Response,
  IndexesIndexesDeleteVersionDefaultResponse,
  IndexesIndexesCreateVersion200Response,
  IndexesIndexesCreateVersion201Response,
  IndexesIndexesCreateVersionDefaultResponse,
  DeploymentsDeploymentsGet200Response,
  DeploymentsDeploymentsGetDefaultResponse,
  DeploymentsDeploymentsList200Response,
  DeploymentsDeploymentsListDefaultResponse,
  EvaluationResultsEvaluationResultsListVersions200Response,
  EvaluationResultsEvaluationResultsListVersionsDefaultResponse,
  EvaluationResultsEvaluationResultsCreate200Response,
  EvaluationResultsEvaluationResultsCreateDefaultResponse,
  EvaluationResultsEvaluationResultsListLatest200Response,
  EvaluationResultsEvaluationResultsListLatestDefaultResponse,
  EvaluationResultsEvaluationResultsGetVersion200Response,
  EvaluationResultsEvaluationResultsGetVersionDefaultResponse,
  EvaluationResultsEvaluationResultsDeleteVersion204Response,
  EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse,
  EvaluationResultsEvaluationResultsCreateVersion200Response,
  EvaluationResultsEvaluationResultsCreateVersion201Response,
  EvaluationResultsEvaluationResultsCreateVersionDefaultResponse,
  EvaluationResultsEvaluationResultsStartPendingUpload200Response,
  EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse,
  RedTeamsRedTeamsGet200Response,
  RedTeamsRedTeamsGetDefaultResponse,
  RedTeamsRedTeamsList200Response,
  RedTeamsRedTeamsListDefaultResponse,
  RedTeamsRedTeamsCreateRun200Response,
  RedTeamsRedTeamsCreateRunDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /connections/{name}": ["200"],
  "GET /connections": ["200"],
  "GET /evaluations/runs/{name}": ["200"],
  "GET /evaluations/runs": ["200"],
  "POST /evaluations/runs:run": ["200"],
  "GET /datasets/{name}/versions": ["200"],
  "POST /datasets/{name}/versions": ["200"],
  "GET /datasets": ["200"],
  "GET /datasets/{name}/versions/{version}": ["200"],
  "DELETE /datasets/{name}/versions/{version}": ["204"],
  "PUT /datasets/{name}/versions/{version}": ["200", "201"],
  "POST /datasets/{name}/versions/{version}/startPendingUploadVersion": ["200"],
  "POST /datasets/{name}/startPendingUpload": ["200"],
  "GET /indexes/{name}/versions": ["200"],
  "POST /indexes/{name}/versions": ["200"],
  "GET /indexes": ["200"],
  "GET /indexes/{name}/versions/{version}": ["200"],
  "DELETE /indexes/{name}/versions/{version}": ["204"],
  "PUT /indexes/{name}/versions/{version}": ["200", "201"],
  "GET /deployments/{name}": ["200"],
  "GET /deployments": ["200"],
  "GET /evaluationResults/{name}/versions": ["200"],
  "POST /evaluationResults/{name}/versions": ["200"],
  "GET /evaluationResults": ["200"],
  "GET /evaluationResults/{name}/versions/{version}": ["200"],
  "DELETE /evaluationResults/{name}/versions/{version}": ["204"],
  "PUT /evaluationResults/{name}/versions/{version}": ["200", "201"],
  "POST /evaluationResults/{name}/versions/{version}/startPendingUpload": [
    "200",
  ],
  "GET /redTeams/runs/{name}": ["200"],
  "GET /redTeams/runs": ["200"],
  "POST /redTeams/runs:run": ["200"],
};

export function isUnexpected(
  response: ConnectionsGet200Response | ConnectionsGetDefaultResponse,
): response is ConnectionsGetDefaultResponse;
export function isUnexpected(
  response: ConnectionsList200Response | ConnectionsListDefaultResponse,
): response is ConnectionsListDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsEvaluationsGet200Response
    | EvaluationsEvaluationsGetDefaultResponse,
): response is EvaluationsEvaluationsGetDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsEvaluationsList200Response
    | EvaluationsEvaluationsListDefaultResponse,
): response is EvaluationsEvaluationsListDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsEvaluationsCreateRun200Response
    | EvaluationsEvaluationsCreateRunDefaultResponse,
): response is EvaluationsEvaluationsCreateRunDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsListVersions200Response
    | DatasetsDatasetsListVersionsDefaultResponse,
): response is DatasetsDatasetsListVersionsDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsCreate200Response
    | DatasetsDatasetsCreateDefaultResponse,
): response is DatasetsDatasetsCreateDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsListLatest200Response
    | DatasetsDatasetsListLatestDefaultResponse,
): response is DatasetsDatasetsListLatestDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsGetVersion200Response
    | DatasetsDatasetsGetVersionDefaultResponse,
): response is DatasetsDatasetsGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsDeleteVersion204Response
    | DatasetsDatasetsDeleteVersionDefaultResponse,
): response is DatasetsDatasetsDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsCreateVersion200Response
    | DatasetsDatasetsCreateVersion201Response
    | DatasetsDatasetsCreateVersionDefaultResponse,
): response is DatasetsDatasetsCreateVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsStartPendingUploadVersion200Response
    | DatasetsDatasetsStartPendingUploadVersionDefaultResponse,
): response is DatasetsDatasetsStartPendingUploadVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDatasetsStartPendingUpload200Response
    | DatasetsDatasetsStartPendingUploadDefaultResponse,
): response is DatasetsDatasetsStartPendingUploadDefaultResponse;
export function isUnexpected(
  response:
    | IndexesIndexesListVersions200Response
    | IndexesIndexesListVersionsDefaultResponse,
): response is IndexesIndexesListVersionsDefaultResponse;
export function isUnexpected(
  response:
    | IndexesIndexesCreate200Response
    | IndexesIndexesCreateDefaultResponse,
): response is IndexesIndexesCreateDefaultResponse;
export function isUnexpected(
  response:
    | IndexesIndexesListLatest200Response
    | IndexesIndexesListLatestDefaultResponse,
): response is IndexesIndexesListLatestDefaultResponse;
export function isUnexpected(
  response:
    | IndexesIndexesGetVersion200Response
    | IndexesIndexesGetVersionDefaultResponse,
): response is IndexesIndexesGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | IndexesIndexesDeleteVersion204Response
    | IndexesIndexesDeleteVersionDefaultResponse,
): response is IndexesIndexesDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | IndexesIndexesCreateVersion200Response
    | IndexesIndexesCreateVersion201Response
    | IndexesIndexesCreateVersionDefaultResponse,
): response is IndexesIndexesCreateVersionDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsDeploymentsGet200Response
    | DeploymentsDeploymentsGetDefaultResponse,
): response is DeploymentsDeploymentsGetDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsDeploymentsList200Response
    | DeploymentsDeploymentsListDefaultResponse,
): response is DeploymentsDeploymentsListDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsEvaluationResultsListVersions200Response
    | EvaluationResultsEvaluationResultsListVersionsDefaultResponse,
): response is EvaluationResultsEvaluationResultsListVersionsDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsEvaluationResultsCreate200Response
    | EvaluationResultsEvaluationResultsCreateDefaultResponse,
): response is EvaluationResultsEvaluationResultsCreateDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsEvaluationResultsListLatest200Response
    | EvaluationResultsEvaluationResultsListLatestDefaultResponse,
): response is EvaluationResultsEvaluationResultsListLatestDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsEvaluationResultsGetVersion200Response
    | EvaluationResultsEvaluationResultsGetVersionDefaultResponse,
): response is EvaluationResultsEvaluationResultsGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsEvaluationResultsDeleteVersion204Response
    | EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse,
): response is EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsEvaluationResultsCreateVersion200Response
    | EvaluationResultsEvaluationResultsCreateVersion201Response
    | EvaluationResultsEvaluationResultsCreateVersionDefaultResponse,
): response is EvaluationResultsEvaluationResultsCreateVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsEvaluationResultsStartPendingUpload200Response
    | EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse,
): response is EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse;
export function isUnexpected(
  response: RedTeamsRedTeamsGet200Response | RedTeamsRedTeamsGetDefaultResponse,
): response is RedTeamsRedTeamsGetDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsRedTeamsList200Response
    | RedTeamsRedTeamsListDefaultResponse,
): response is RedTeamsRedTeamsListDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsRedTeamsCreateRun200Response
    | RedTeamsRedTeamsCreateRunDefaultResponse,
): response is RedTeamsRedTeamsCreateRunDefaultResponse;
export function isUnexpected(
  response:
    | ConnectionsGet200Response
    | ConnectionsGetDefaultResponse
    | ConnectionsList200Response
    | ConnectionsListDefaultResponse
    | EvaluationsEvaluationsGet200Response
    | EvaluationsEvaluationsGetDefaultResponse
    | EvaluationsEvaluationsList200Response
    | EvaluationsEvaluationsListDefaultResponse
    | EvaluationsEvaluationsCreateRun200Response
    | EvaluationsEvaluationsCreateRunDefaultResponse
    | DatasetsDatasetsListVersions200Response
    | DatasetsDatasetsListVersionsDefaultResponse
    | DatasetsDatasetsCreate200Response
    | DatasetsDatasetsCreateDefaultResponse
    | DatasetsDatasetsListLatest200Response
    | DatasetsDatasetsListLatestDefaultResponse
    | DatasetsDatasetsGetVersion200Response
    | DatasetsDatasetsGetVersionDefaultResponse
    | DatasetsDatasetsDeleteVersion204Response
    | DatasetsDatasetsDeleteVersionDefaultResponse
    | DatasetsDatasetsCreateVersion200Response
    | DatasetsDatasetsCreateVersion201Response
    | DatasetsDatasetsCreateVersionDefaultResponse
    | DatasetsDatasetsStartPendingUploadVersion200Response
    | DatasetsDatasetsStartPendingUploadVersionDefaultResponse
    | DatasetsDatasetsStartPendingUpload200Response
    | DatasetsDatasetsStartPendingUploadDefaultResponse
    | IndexesIndexesListVersions200Response
    | IndexesIndexesListVersionsDefaultResponse
    | IndexesIndexesCreate200Response
    | IndexesIndexesCreateDefaultResponse
    | IndexesIndexesListLatest200Response
    | IndexesIndexesListLatestDefaultResponse
    | IndexesIndexesGetVersion200Response
    | IndexesIndexesGetVersionDefaultResponse
    | IndexesIndexesDeleteVersion204Response
    | IndexesIndexesDeleteVersionDefaultResponse
    | IndexesIndexesCreateVersion200Response
    | IndexesIndexesCreateVersion201Response
    | IndexesIndexesCreateVersionDefaultResponse
    | DeploymentsDeploymentsGet200Response
    | DeploymentsDeploymentsGetDefaultResponse
    | DeploymentsDeploymentsList200Response
    | DeploymentsDeploymentsListDefaultResponse
    | EvaluationResultsEvaluationResultsListVersions200Response
    | EvaluationResultsEvaluationResultsListVersionsDefaultResponse
    | EvaluationResultsEvaluationResultsCreate200Response
    | EvaluationResultsEvaluationResultsCreateDefaultResponse
    | EvaluationResultsEvaluationResultsListLatest200Response
    | EvaluationResultsEvaluationResultsListLatestDefaultResponse
    | EvaluationResultsEvaluationResultsGetVersion200Response
    | EvaluationResultsEvaluationResultsGetVersionDefaultResponse
    | EvaluationResultsEvaluationResultsDeleteVersion204Response
    | EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse
    | EvaluationResultsEvaluationResultsCreateVersion200Response
    | EvaluationResultsEvaluationResultsCreateVersion201Response
    | EvaluationResultsEvaluationResultsCreateVersionDefaultResponse
    | EvaluationResultsEvaluationResultsStartPendingUpload200Response
    | EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse
    | RedTeamsRedTeamsGet200Response
    | RedTeamsRedTeamsGetDefaultResponse
    | RedTeamsRedTeamsList200Response
    | RedTeamsRedTeamsListDefaultResponse
    | RedTeamsRedTeamsCreateRun200Response
    | RedTeamsRedTeamsCreateRunDefaultResponse,
): response is
  | ConnectionsGetDefaultResponse
  | ConnectionsListDefaultResponse
  | EvaluationsEvaluationsGetDefaultResponse
  | EvaluationsEvaluationsListDefaultResponse
  | EvaluationsEvaluationsCreateRunDefaultResponse
  | DatasetsDatasetsListVersionsDefaultResponse
  | DatasetsDatasetsCreateDefaultResponse
  | DatasetsDatasetsListLatestDefaultResponse
  | DatasetsDatasetsGetVersionDefaultResponse
  | DatasetsDatasetsDeleteVersionDefaultResponse
  | DatasetsDatasetsCreateVersionDefaultResponse
  | DatasetsDatasetsStartPendingUploadVersionDefaultResponse
  | DatasetsDatasetsStartPendingUploadDefaultResponse
  | IndexesIndexesListVersionsDefaultResponse
  | IndexesIndexesCreateDefaultResponse
  | IndexesIndexesListLatestDefaultResponse
  | IndexesIndexesGetVersionDefaultResponse
  | IndexesIndexesDeleteVersionDefaultResponse
  | IndexesIndexesCreateVersionDefaultResponse
  | DeploymentsDeploymentsGetDefaultResponse
  | DeploymentsDeploymentsListDefaultResponse
  | EvaluationResultsEvaluationResultsListVersionsDefaultResponse
  | EvaluationResultsEvaluationResultsCreateDefaultResponse
  | EvaluationResultsEvaluationResultsListLatestDefaultResponse
  | EvaluationResultsEvaluationResultsGetVersionDefaultResponse
  | EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse
  | EvaluationResultsEvaluationResultsCreateVersionDefaultResponse
  | EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse
  | RedTeamsRedTeamsGetDefaultResponse
  | RedTeamsRedTeamsListDefaultResponse
  | RedTeamsRedTeamsCreateRunDefaultResponse {
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
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

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
