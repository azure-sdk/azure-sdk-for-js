// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ConnectionsGet200Response,
  ConnectionsGetDefaultResponse,
  ConnectionsGetWithCredentials200Response,
  ConnectionsGetWithCredentialsDefaultResponse,
  ConnectionsList200Response,
  ConnectionsListDefaultResponse,
  ConnectionsListWithCredentials200Response,
  ConnectionsListWithCredentialsDefaultResponse,
  EvaluationsGet200Response,
  EvaluationsGetDefaultResponse,
  EvaluationsList200Response,
  EvaluationsListDefaultResponse,
  EvaluationsCreateRun201Response,
  EvaluationsCreateRunDefaultResponse,
  EvaluationsCreateAgentEvaluation201Response,
  EvaluationsCreateAgentEvaluationDefaultResponse,
  EvaluationsGetAgentEvaluationResults200Response,
  EvaluationsGetAgentEvaluationResultsDefaultResponse,
  EvaluationsUploadRun200Response,
  EvaluationsUploadRunDefaultResponse,
  EvaluationsUploadUpdateRun200Response,
  EvaluationsUploadUpdateRunDefaultResponse,
  DatasetsListVersions200Response,
  DatasetsListVersionsDefaultResponse,
  DatasetsListLatest200Response,
  DatasetsListLatestDefaultResponse,
  DatasetsGetVersion200Response,
  DatasetsGetVersionDefaultResponse,
  DatasetsDeleteVersion204Response,
  DatasetsDeleteVersionDefaultResponse,
  DatasetsCreateOrUpdateVersion200Response,
  DatasetsCreateOrUpdateVersion201Response,
  DatasetsCreateOrUpdateVersionDefaultResponse,
  DatasetsStartPendingUploadVersion200Response,
  DatasetsStartPendingUploadVersionDefaultResponse,
  DatasetsGetCredentials200Response,
  DatasetsGetCredentialsDefaultResponse,
  IndexesListVersions200Response,
  IndexesListVersionsDefaultResponse,
  IndexesListLatest200Response,
  IndexesListLatestDefaultResponse,
  IndexesGetVersion200Response,
  IndexesGetVersionDefaultResponse,
  IndexesDeleteVersion204Response,
  IndexesDeleteVersionDefaultResponse,
  IndexesCreateOrUpdateVersion200Response,
  IndexesCreateOrUpdateVersion201Response,
  IndexesCreateOrUpdateVersionDefaultResponse,
  DeploymentsGet200Response,
  DeploymentsGetDefaultResponse,
  DeploymentsList200Response,
  DeploymentsListDefaultResponse,
  RedTeamsGet200Response,
  RedTeamsGetDefaultResponse,
  RedTeamsList200Response,
  RedTeamsListDefaultResponse,
  RedTeamsCreateRun201Response,
  RedTeamsCreateRunDefaultResponse,
  RedTeamsUploadRun200Response,
  RedTeamsUploadRunDefaultResponse,
  RedTeamsUploadUpdateRun200Response,
  RedTeamsUploadUpdateRunDefaultResponse,
  RedTeamsGetJailBreakDatasetWithType200Response,
  RedTeamsGetJailBreakDatasetWithTypeDefaultResponse,
  RedTeamsGetAttackObjectives200Response,
  RedTeamsGetAttackObjectivesDefaultResponse,
  RedTeamsGetJailBreakDataset200Response,
  RedTeamsGetJailBreakDatasetDefaultResponse,
  RedTeamsGetTemplateParametersWithType200Response,
  RedTeamsGetTemplateParametersWithTypeDefaultResponse,
  RedTeamsGetTemplateParameters200Response,
  RedTeamsGetTemplateParametersDefaultResponse,
  RedTeamsGetTemplateParametersImage200Response,
  RedTeamsGetTemplateParametersImageDefaultResponse,
  RedTeamsSubmitSimulation202Response,
  RedTeamsSubmitSimulationDefaultResponse,
  EvaluationResultsListVersions200Response,
  EvaluationResultsListVersionsDefaultResponse,
  EvaluationResultsListLatest200Response,
  EvaluationResultsListLatestDefaultResponse,
  EvaluationResultsGetVersion200Response,
  EvaluationResultsGetVersionDefaultResponse,
  EvaluationResultsDeleteVersion204Response,
  EvaluationResultsDeleteVersionDefaultResponse,
  EvaluationResultsCreateOrUpdateVersion200Response,
  EvaluationResultsCreateOrUpdateVersion201Response,
  EvaluationResultsCreateOrUpdateVersionDefaultResponse,
  EvaluationResultsStartPendingUpload200Response,
  EvaluationResultsStartPendingUploadDefaultResponse,
  EvaluationResultsGetCredentials200Response,
  EvaluationResultsGetCredentialsDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /connections/{name}": ["200"],
  "POST /connections/{name}/withCredentials": ["200"],
  "GET /connections": ["200"],
  "POST /connections/withCredentials": ["200"],
  "GET /evaluations/runs/{name}": ["200"],
  "GET /evaluations/runs": ["200"],
  "POST /evaluations/runs:run": ["201"],
  "POST /evaluations/runs:runAgent": ["201"],
  "GET /evaluations/runs/agents/{runId}": ["200"],
  "GET /evaluations/checkannotation": ["200"],
  "POST /evaluations/submitannotation": ["202"],
  "GET /evaluations/operations/{operationId}": ["200"],
  "POST /evaluations/runs:upload": ["200"],
  "PATCH /evaluations/runs:updateUpload/{name}": ["200"],
  "GET /datasets/{name}/versions": ["200"],
  "GET /datasets": ["200"],
  "GET /datasets/{name}/versions/{version}": ["200"],
  "DELETE /datasets/{name}/versions/{version}": ["204"],
  "PATCH /datasets/{name}/versions/{version}": ["200", "201"],
  "POST /datasets/{name}/versions/{version}/startPendingUpload": ["200"],
  "POST /datasets/{name}/versions/{version}/credentials": ["200"],
  "GET /indexes/{name}/versions": ["200"],
  "GET /indexes": ["200"],
  "GET /indexes/{name}/versions/{version}": ["200"],
  "DELETE /indexes/{name}/versions/{version}": ["204"],
  "PATCH /indexes/{name}/versions/{version}": ["200", "201"],
  "GET /deployments/{name}": ["200"],
  "GET /deployments": ["200"],
  "GET /redTeams/runs/{name}": ["200"],
  "GET /redTeams/runs": ["200"],
  "POST /redTeams/runs:run": ["201"],
  "POST /redTeams/runs:upload": ["200"],
  "PATCH /redTeams/runs:updateUpload/{name}": ["200"],
  "GET /redTeams/simulation/jailbreak/{type}": ["200"],
  "GET /redTeams/simulation/attackobjectives": ["200"],
  "GET /redTeams/simulation/jailbreak/": ["200"],
  "GET /redTeams/simulation/template/parameters/{type}": ["200"],
  "GET /redTeams/simulation/template/parameters/": ["200"],
  "GET /redTeams/simulation/template/parameters/image": ["200"],
  "POST /redTeams/simulation/chat/completions/submit": ["202"],
  "GET /evaluationResults/{name}/versions": ["200"],
  "GET /evaluationResults": ["200"],
  "GET /evaluationResults/{name}/versions/{version}": ["200"],
  "DELETE /evaluationResults/{name}/versions/{version}": ["204"],
  "PATCH /evaluationResults/{name}/versions/{version}": ["200", "201"],
  "POST /evaluationResults/{name}/versions/{version}/startPendingUpload": [
    "200",
  ],
  "POST /evaluationResults/{name}/versions/{version}/credentials": ["200"],
};

export function isUnexpected(
  response: ConnectionsGet200Response | ConnectionsGetDefaultResponse,
): response is ConnectionsGetDefaultResponse;
export function isUnexpected(
  response:
    | ConnectionsGetWithCredentials200Response
    | ConnectionsGetWithCredentialsDefaultResponse,
): response is ConnectionsGetWithCredentialsDefaultResponse;
export function isUnexpected(
  response: ConnectionsList200Response | ConnectionsListDefaultResponse,
): response is ConnectionsListDefaultResponse;
export function isUnexpected(
  response:
    | ConnectionsListWithCredentials200Response
    | ConnectionsListWithCredentialsDefaultResponse,
): response is ConnectionsListWithCredentialsDefaultResponse;
export function isUnexpected(
  response: EvaluationsGet200Response | EvaluationsGetDefaultResponse,
): response is EvaluationsGetDefaultResponse;
export function isUnexpected(
  response: EvaluationsList200Response | EvaluationsListDefaultResponse,
): response is EvaluationsListDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsCreateRun201Response
    | EvaluationsCreateRunDefaultResponse,
): response is EvaluationsCreateRunDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsCreateAgentEvaluation201Response
    | EvaluationsCreateAgentEvaluationDefaultResponse,
): response is EvaluationsCreateAgentEvaluationDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsGetAgentEvaluationResults200Response
    | EvaluationsGetAgentEvaluationResultsDefaultResponse,
): response is EvaluationsGetAgentEvaluationResultsDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsUploadRun200Response
    | EvaluationsUploadRunDefaultResponse,
): response is EvaluationsUploadRunDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsUploadUpdateRun200Response
    | EvaluationsUploadUpdateRunDefaultResponse,
): response is EvaluationsUploadUpdateRunDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsListVersions200Response
    | DatasetsListVersionsDefaultResponse,
): response is DatasetsListVersionsDefaultResponse;
export function isUnexpected(
  response: DatasetsListLatest200Response | DatasetsListLatestDefaultResponse,
): response is DatasetsListLatestDefaultResponse;
export function isUnexpected(
  response: DatasetsGetVersion200Response | DatasetsGetVersionDefaultResponse,
): response is DatasetsGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDeleteVersion204Response
    | DatasetsDeleteVersionDefaultResponse,
): response is DatasetsDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsCreateOrUpdateVersion200Response
    | DatasetsCreateOrUpdateVersion201Response
    | DatasetsCreateOrUpdateVersionDefaultResponse,
): response is DatasetsCreateOrUpdateVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse,
): response is DatasetsStartPendingUploadVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsGetCredentials200Response
    | DatasetsGetCredentialsDefaultResponse,
): response is DatasetsGetCredentialsDefaultResponse;
export function isUnexpected(
  response: IndexesListVersions200Response | IndexesListVersionsDefaultResponse,
): response is IndexesListVersionsDefaultResponse;
export function isUnexpected(
  response: IndexesListLatest200Response | IndexesListLatestDefaultResponse,
): response is IndexesListLatestDefaultResponse;
export function isUnexpected(
  response: IndexesGetVersion200Response | IndexesGetVersionDefaultResponse,
): response is IndexesGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | IndexesDeleteVersion204Response
    | IndexesDeleteVersionDefaultResponse,
): response is IndexesDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | IndexesCreateOrUpdateVersion200Response
    | IndexesCreateOrUpdateVersion201Response
    | IndexesCreateOrUpdateVersionDefaultResponse,
): response is IndexesCreateOrUpdateVersionDefaultResponse;
export function isUnexpected(
  response: DeploymentsGet200Response | DeploymentsGetDefaultResponse,
): response is DeploymentsGetDefaultResponse;
export function isUnexpected(
  response: DeploymentsList200Response | DeploymentsListDefaultResponse,
): response is DeploymentsListDefaultResponse;
export function isUnexpected(
  response: RedTeamsGet200Response | RedTeamsGetDefaultResponse,
): response is RedTeamsGetDefaultResponse;
export function isUnexpected(
  response: RedTeamsList200Response | RedTeamsListDefaultResponse,
): response is RedTeamsListDefaultResponse;
export function isUnexpected(
  response: RedTeamsCreateRun201Response | RedTeamsCreateRunDefaultResponse,
): response is RedTeamsCreateRunDefaultResponse;
export function isUnexpected(
  response: RedTeamsUploadRun200Response | RedTeamsUploadRunDefaultResponse,
): response is RedTeamsUploadRunDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsUploadUpdateRun200Response
    | RedTeamsUploadUpdateRunDefaultResponse,
): response is RedTeamsUploadUpdateRunDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsGetJailBreakDatasetWithType200Response
    | RedTeamsGetJailBreakDatasetWithTypeDefaultResponse,
): response is RedTeamsGetJailBreakDatasetWithTypeDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsGetAttackObjectives200Response
    | RedTeamsGetAttackObjectivesDefaultResponse,
): response is RedTeamsGetAttackObjectivesDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsGetJailBreakDataset200Response
    | RedTeamsGetJailBreakDatasetDefaultResponse,
): response is RedTeamsGetJailBreakDatasetDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsGetTemplateParametersWithType200Response
    | RedTeamsGetTemplateParametersWithTypeDefaultResponse,
): response is RedTeamsGetTemplateParametersWithTypeDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsGetTemplateParameters200Response
    | RedTeamsGetTemplateParametersDefaultResponse,
): response is RedTeamsGetTemplateParametersDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsGetTemplateParametersImage200Response
    | RedTeamsGetTemplateParametersImageDefaultResponse,
): response is RedTeamsGetTemplateParametersImageDefaultResponse;
export function isUnexpected(
  response:
    | RedTeamsSubmitSimulation202Response
    | RedTeamsSubmitSimulationDefaultResponse,
): response is RedTeamsSubmitSimulationDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsListVersions200Response
    | EvaluationResultsListVersionsDefaultResponse,
): response is EvaluationResultsListVersionsDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsListLatest200Response
    | EvaluationResultsListLatestDefaultResponse,
): response is EvaluationResultsListLatestDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsGetVersion200Response
    | EvaluationResultsGetVersionDefaultResponse,
): response is EvaluationResultsGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsDeleteVersion204Response
    | EvaluationResultsDeleteVersionDefaultResponse,
): response is EvaluationResultsDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsCreateOrUpdateVersion200Response
    | EvaluationResultsCreateOrUpdateVersion201Response
    | EvaluationResultsCreateOrUpdateVersionDefaultResponse,
): response is EvaluationResultsCreateOrUpdateVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsStartPendingUpload200Response
    | EvaluationResultsStartPendingUploadDefaultResponse,
): response is EvaluationResultsStartPendingUploadDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsGetCredentials200Response
    | EvaluationResultsGetCredentialsDefaultResponse,
): response is EvaluationResultsGetCredentialsDefaultResponse;
export function isUnexpected(
  response:
    | ConnectionsGet200Response
    | ConnectionsGetDefaultResponse
    | ConnectionsGetWithCredentials200Response
    | ConnectionsGetWithCredentialsDefaultResponse
    | ConnectionsList200Response
    | ConnectionsListDefaultResponse
    | ConnectionsListWithCredentials200Response
    | ConnectionsListWithCredentialsDefaultResponse
    | EvaluationsGet200Response
    | EvaluationsGetDefaultResponse
    | EvaluationsList200Response
    | EvaluationsListDefaultResponse
    | EvaluationsCreateRun201Response
    | EvaluationsCreateRunDefaultResponse
    | EvaluationsCreateAgentEvaluation201Response
    | EvaluationsCreateAgentEvaluationDefaultResponse
    | EvaluationsGetAgentEvaluationResults200Response
    | EvaluationsGetAgentEvaluationResultsDefaultResponse
    | EvaluationsUploadRun200Response
    | EvaluationsUploadRunDefaultResponse
    | EvaluationsUploadUpdateRun200Response
    | EvaluationsUploadUpdateRunDefaultResponse
    | DatasetsListVersions200Response
    | DatasetsListVersionsDefaultResponse
    | DatasetsListLatest200Response
    | DatasetsListLatestDefaultResponse
    | DatasetsGetVersion200Response
    | DatasetsGetVersionDefaultResponse
    | DatasetsDeleteVersion204Response
    | DatasetsDeleteVersionDefaultResponse
    | DatasetsCreateOrUpdateVersion200Response
    | DatasetsCreateOrUpdateVersion201Response
    | DatasetsCreateOrUpdateVersionDefaultResponse
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse
    | DatasetsGetCredentials200Response
    | DatasetsGetCredentialsDefaultResponse
    | IndexesListVersions200Response
    | IndexesListVersionsDefaultResponse
    | IndexesListLatest200Response
    | IndexesListLatestDefaultResponse
    | IndexesGetVersion200Response
    | IndexesGetVersionDefaultResponse
    | IndexesDeleteVersion204Response
    | IndexesDeleteVersionDefaultResponse
    | IndexesCreateOrUpdateVersion200Response
    | IndexesCreateOrUpdateVersion201Response
    | IndexesCreateOrUpdateVersionDefaultResponse
    | DeploymentsGet200Response
    | DeploymentsGetDefaultResponse
    | DeploymentsList200Response
    | DeploymentsListDefaultResponse
    | RedTeamsGet200Response
    | RedTeamsGetDefaultResponse
    | RedTeamsList200Response
    | RedTeamsListDefaultResponse
    | RedTeamsCreateRun201Response
    | RedTeamsCreateRunDefaultResponse
    | RedTeamsUploadRun200Response
    | RedTeamsUploadRunDefaultResponse
    | RedTeamsUploadUpdateRun200Response
    | RedTeamsUploadUpdateRunDefaultResponse
    | RedTeamsGetJailBreakDatasetWithType200Response
    | RedTeamsGetJailBreakDatasetWithTypeDefaultResponse
    | RedTeamsGetAttackObjectives200Response
    | RedTeamsGetAttackObjectivesDefaultResponse
    | RedTeamsGetJailBreakDataset200Response
    | RedTeamsGetJailBreakDatasetDefaultResponse
    | RedTeamsGetTemplateParametersWithType200Response
    | RedTeamsGetTemplateParametersWithTypeDefaultResponse
    | RedTeamsGetTemplateParameters200Response
    | RedTeamsGetTemplateParametersDefaultResponse
    | RedTeamsGetTemplateParametersImage200Response
    | RedTeamsGetTemplateParametersImageDefaultResponse
    | RedTeamsSubmitSimulation202Response
    | RedTeamsSubmitSimulationDefaultResponse
    | EvaluationResultsListVersions200Response
    | EvaluationResultsListVersionsDefaultResponse
    | EvaluationResultsListLatest200Response
    | EvaluationResultsListLatestDefaultResponse
    | EvaluationResultsGetVersion200Response
    | EvaluationResultsGetVersionDefaultResponse
    | EvaluationResultsDeleteVersion204Response
    | EvaluationResultsDeleteVersionDefaultResponse
    | EvaluationResultsCreateOrUpdateVersion200Response
    | EvaluationResultsCreateOrUpdateVersion201Response
    | EvaluationResultsCreateOrUpdateVersionDefaultResponse
    | EvaluationResultsStartPendingUpload200Response
    | EvaluationResultsStartPendingUploadDefaultResponse
    | EvaluationResultsGetCredentials200Response
    | EvaluationResultsGetCredentialsDefaultResponse,
): response is
  | ConnectionsGetDefaultResponse
  | ConnectionsGetWithCredentialsDefaultResponse
  | ConnectionsListDefaultResponse
  | ConnectionsListWithCredentialsDefaultResponse
  | EvaluationsGetDefaultResponse
  | EvaluationsListDefaultResponse
  | EvaluationsCreateRunDefaultResponse
  | EvaluationsCreateAgentEvaluationDefaultResponse
  | EvaluationsGetAgentEvaluationResultsDefaultResponse
  | EvaluationsUploadRunDefaultResponse
  | EvaluationsUploadUpdateRunDefaultResponse
  | DatasetsListVersionsDefaultResponse
  | DatasetsListLatestDefaultResponse
  | DatasetsGetVersionDefaultResponse
  | DatasetsDeleteVersionDefaultResponse
  | DatasetsCreateOrUpdateVersionDefaultResponse
  | DatasetsStartPendingUploadVersionDefaultResponse
  | DatasetsGetCredentialsDefaultResponse
  | IndexesListVersionsDefaultResponse
  | IndexesListLatestDefaultResponse
  | IndexesGetVersionDefaultResponse
  | IndexesDeleteVersionDefaultResponse
  | IndexesCreateOrUpdateVersionDefaultResponse
  | DeploymentsGetDefaultResponse
  | DeploymentsListDefaultResponse
  | RedTeamsGetDefaultResponse
  | RedTeamsListDefaultResponse
  | RedTeamsCreateRunDefaultResponse
  | RedTeamsUploadRunDefaultResponse
  | RedTeamsUploadUpdateRunDefaultResponse
  | RedTeamsGetJailBreakDatasetWithTypeDefaultResponse
  | RedTeamsGetAttackObjectivesDefaultResponse
  | RedTeamsGetJailBreakDatasetDefaultResponse
  | RedTeamsGetTemplateParametersWithTypeDefaultResponse
  | RedTeamsGetTemplateParametersDefaultResponse
  | RedTeamsGetTemplateParametersImageDefaultResponse
  | RedTeamsSubmitSimulationDefaultResponse
  | EvaluationResultsListVersionsDefaultResponse
  | EvaluationResultsListLatestDefaultResponse
  | EvaluationResultsGetVersionDefaultResponse
  | EvaluationResultsDeleteVersionDefaultResponse
  | EvaluationResultsCreateOrUpdateVersionDefaultResponse
  | EvaluationResultsStartPendingUploadDefaultResponse
  | EvaluationResultsGetCredentialsDefaultResponse {
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
