// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  MessagesSendMessage201Response,
  MessagesSendMessageDefaultResponse,
  MessagesListMessages200Response,
  MessagesListMessagesDefaultResponse,
  MessagesGetMessage200Response,
  MessagesGetMessageDefaultResponse,
  MessagesUpdateMessage200Response,
  MessagesUpdateMessage201Response,
  MessagesUpdateMessageDefaultResponse,
  MessagesDeleteMessage204Response,
  MessagesDeleteMessageDefaultResponse,
  ThreadsCreateThread200Response,
  ThreadsCreateThreadDefaultResponse,
  ThreadsListThreads200Response,
  ThreadsListThreadsDefaultResponse,
  ThreadsGetThread200Response,
  ThreadsGetThreadDefaultResponse,
  ThreadsUpdateThread200Response,
  ThreadsUpdateThreadDefaultResponse,
  ThreadsDeleteThread204Response,
  ThreadsDeleteThreadDefaultResponse,
  AgentsCreateAgent200Response,
  AgentsCreateAgentDefaultResponse,
  AgentsListAgents200Response,
  AgentsListAgentsDefaultResponse,
  AgentsGetAgent200Response,
  AgentsGetAgentDefaultResponse,
  AgentsUpdateAgent200Response,
  AgentsUpdateAgentDefaultResponse,
  AgentsDeleteAgent204Response,
  AgentsDeleteAgentDefaultResponse,
  AgentsStreamByAgent200Response,
  AgentsStreamByAgentDefaultResponse,
  RunsCreateRun200Response,
  RunsCreateRunDefaultResponse,
  RunsListRuns200Response,
  RunsListRunsDefaultResponse,
  RunsGetRun200Response,
  RunsGetRunDefaultResponse,
  RunsCreateAndExecuteRun200Response,
  RunsCreateAndExecuteRunDefaultResponse,
  RunsCreateAndStreamRun200Response,
  RunsCreateAndStreamRunDefaultResponse,
  ConnectionsGet200Response,
  ConnectionsGetDefaultResponse,
  ConnectionsList200Response,
  ConnectionsListDefaultResponse,
  EvaluationsGet200Response,
  EvaluationsGetDefaultResponse,
  EvaluationsList200Response,
  EvaluationsListDefaultResponse,
  EvaluationsCreateRun200Response,
  EvaluationsCreateRunDefaultResponse,
  DatasetsListVersions200Response,
  DatasetsListVersionsDefaultResponse,
  DatasetsCreate200Response,
  DatasetsCreateDefaultResponse,
  DatasetsListLatest200Response,
  DatasetsListLatestDefaultResponse,
  DatasetsGetVersion200Response,
  DatasetsGetVersionDefaultResponse,
  DatasetsDeleteVersion204Response,
  DatasetsDeleteVersionDefaultResponse,
  DatasetsCreateVersion200Response,
  DatasetsCreateVersion201Response,
  DatasetsCreateVersionDefaultResponse,
  DatasetsStartPendingUpload200Response,
  DatasetsStartPendingUploadDefaultResponse,
  DatasetsStartPendingUploadAutoIncrement200Response,
  DatasetsStartPendingUploadAutoIncrementDefaultResponse,
  IndexesListVersions200Response,
  IndexesListVersionsDefaultResponse,
  IndexesCreate200Response,
  IndexesCreateDefaultResponse,
  IndexesListLatest200Response,
  IndexesListLatestDefaultResponse,
  IndexesGetVersion200Response,
  IndexesGetVersionDefaultResponse,
  IndexesDeleteVersion204Response,
  IndexesDeleteVersionDefaultResponse,
  IndexesCreateVersion200Response,
  IndexesCreateVersion201Response,
  IndexesCreateVersionDefaultResponse,
  DeploymentsGet200Response,
  DeploymentsGetDefaultResponse,
  DeploymentsList200Response,
  DeploymentsListDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /threads/{threadId}/message": ["201"],
  "GET /threads/{threadId}/message": ["200"],
  "GET /threads/{threadId}/message/{messageId}": ["200"],
  "PUT /threads/{threadId}/message/{messageId}": ["200", "201"],
  "DELETE /threads/{threadId}/message/{messageId}": ["204"],
  "POST /threads": ["200"],
  "GET /threads": ["200"],
  "GET /threads/{threadId}": ["200"],
  "PUT /threads/{threadId}": ["200"],
  "DELETE /threads/{threadId}": ["204"],
  "POST /agents": ["200"],
  "GET /agents": ["200"],
  "GET /agents/{agentId}": ["200"],
  "PUT /agents/{agentId}": ["200"],
  "DELETE /agents/{agentId}": ["204"],
  "POST /agents/{agentId}:stream": ["200"],
  "POST /runs": ["200"],
  "GET /runs": ["200"],
  "GET /runs/{runId}": ["200"],
  "POST /runs/execute": ["200"],
  "POST /runs:createAndStreamRun": ["200"],
  "GET /connections/{connectionName}": ["200"],
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
  "POST /datasets/{name}/versions/{version}/startPendingUpload": ["200"],
  "POST /datasets/{name}/startPendingUpload": ["200"],
  "GET /indexes/{name}/versions": ["200"],
  "POST /indexes/{name}/versions": ["200"],
  "GET /indexes": ["200"],
  "GET /indexes/{name}/versions/{version}": ["200"],
  "DELETE /indexes/{name}/versions/{version}": ["204"],
  "PUT /indexes/{name}/versions/{version}": ["200", "201"],
  "GET /deployments/{name}": ["200"],
  "GET /deployments": ["200"],
};

export function isUnexpected(
  response: MessagesSendMessage201Response | MessagesSendMessageDefaultResponse,
): response is MessagesSendMessageDefaultResponse;
export function isUnexpected(
  response:
    | MessagesListMessages200Response
    | MessagesListMessagesDefaultResponse,
): response is MessagesListMessagesDefaultResponse;
export function isUnexpected(
  response: MessagesGetMessage200Response | MessagesGetMessageDefaultResponse,
): response is MessagesGetMessageDefaultResponse;
export function isUnexpected(
  response:
    | MessagesUpdateMessage200Response
    | MessagesUpdateMessage201Response
    | MessagesUpdateMessageDefaultResponse,
): response is MessagesUpdateMessageDefaultResponse;
export function isUnexpected(
  response:
    | MessagesDeleteMessage204Response
    | MessagesDeleteMessageDefaultResponse,
): response is MessagesDeleteMessageDefaultResponse;
export function isUnexpected(
  response: ThreadsCreateThread200Response | ThreadsCreateThreadDefaultResponse,
): response is ThreadsCreateThreadDefaultResponse;
export function isUnexpected(
  response: ThreadsListThreads200Response | ThreadsListThreadsDefaultResponse,
): response is ThreadsListThreadsDefaultResponse;
export function isUnexpected(
  response: ThreadsGetThread200Response | ThreadsGetThreadDefaultResponse,
): response is ThreadsGetThreadDefaultResponse;
export function isUnexpected(
  response: ThreadsUpdateThread200Response | ThreadsUpdateThreadDefaultResponse,
): response is ThreadsUpdateThreadDefaultResponse;
export function isUnexpected(
  response: ThreadsDeleteThread204Response | ThreadsDeleteThreadDefaultResponse,
): response is ThreadsDeleteThreadDefaultResponse;
export function isUnexpected(
  response: AgentsCreateAgent200Response | AgentsCreateAgentDefaultResponse,
): response is AgentsCreateAgentDefaultResponse;
export function isUnexpected(
  response: AgentsListAgents200Response | AgentsListAgentsDefaultResponse,
): response is AgentsListAgentsDefaultResponse;
export function isUnexpected(
  response: AgentsGetAgent200Response | AgentsGetAgentDefaultResponse,
): response is AgentsGetAgentDefaultResponse;
export function isUnexpected(
  response: AgentsUpdateAgent200Response | AgentsUpdateAgentDefaultResponse,
): response is AgentsUpdateAgentDefaultResponse;
export function isUnexpected(
  response: AgentsDeleteAgent204Response | AgentsDeleteAgentDefaultResponse,
): response is AgentsDeleteAgentDefaultResponse;
export function isUnexpected(
  response: AgentsStreamByAgent200Response | AgentsStreamByAgentDefaultResponse,
): response is AgentsStreamByAgentDefaultResponse;
export function isUnexpected(
  response: RunsCreateRun200Response | RunsCreateRunDefaultResponse,
): response is RunsCreateRunDefaultResponse;
export function isUnexpected(
  response: RunsListRuns200Response | RunsListRunsDefaultResponse,
): response is RunsListRunsDefaultResponse;
export function isUnexpected(
  response: RunsGetRun200Response | RunsGetRunDefaultResponse,
): response is RunsGetRunDefaultResponse;
export function isUnexpected(
  response:
    | RunsCreateAndExecuteRun200Response
    | RunsCreateAndExecuteRunDefaultResponse,
): response is RunsCreateAndExecuteRunDefaultResponse;
export function isUnexpected(
  response:
    | RunsCreateAndStreamRun200Response
    | RunsCreateAndStreamRunDefaultResponse,
): response is RunsCreateAndStreamRunDefaultResponse;
export function isUnexpected(
  response: ConnectionsGet200Response | ConnectionsGetDefaultResponse,
): response is ConnectionsGetDefaultResponse;
export function isUnexpected(
  response: ConnectionsList200Response | ConnectionsListDefaultResponse,
): response is ConnectionsListDefaultResponse;
export function isUnexpected(
  response: EvaluationsGet200Response | EvaluationsGetDefaultResponse,
): response is EvaluationsGetDefaultResponse;
export function isUnexpected(
  response: EvaluationsList200Response | EvaluationsListDefaultResponse,
): response is EvaluationsListDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsCreateRun200Response
    | EvaluationsCreateRunDefaultResponse,
): response is EvaluationsCreateRunDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsListVersions200Response
    | DatasetsListVersionsDefaultResponse,
): response is DatasetsListVersionsDefaultResponse;
export function isUnexpected(
  response: DatasetsCreate200Response | DatasetsCreateDefaultResponse,
): response is DatasetsCreateDefaultResponse;
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
    | DatasetsCreateVersion200Response
    | DatasetsCreateVersion201Response
    | DatasetsCreateVersionDefaultResponse,
): response is DatasetsCreateVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse,
): response is DatasetsStartPendingUploadDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsStartPendingUploadAutoIncrement200Response
    | DatasetsStartPendingUploadAutoIncrementDefaultResponse,
): response is DatasetsStartPendingUploadAutoIncrementDefaultResponse;
export function isUnexpected(
  response: IndexesListVersions200Response | IndexesListVersionsDefaultResponse,
): response is IndexesListVersionsDefaultResponse;
export function isUnexpected(
  response: IndexesCreate200Response | IndexesCreateDefaultResponse,
): response is IndexesCreateDefaultResponse;
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
    | IndexesCreateVersion200Response
    | IndexesCreateVersion201Response
    | IndexesCreateVersionDefaultResponse,
): response is IndexesCreateVersionDefaultResponse;
export function isUnexpected(
  response: DeploymentsGet200Response | DeploymentsGetDefaultResponse,
): response is DeploymentsGetDefaultResponse;
export function isUnexpected(
  response: DeploymentsList200Response | DeploymentsListDefaultResponse,
): response is DeploymentsListDefaultResponse;
export function isUnexpected(
  response:
    | MessagesSendMessage201Response
    | MessagesSendMessageDefaultResponse
    | MessagesListMessages200Response
    | MessagesListMessagesDefaultResponse
    | MessagesGetMessage200Response
    | MessagesGetMessageDefaultResponse
    | MessagesUpdateMessage200Response
    | MessagesUpdateMessage201Response
    | MessagesUpdateMessageDefaultResponse
    | MessagesDeleteMessage204Response
    | MessagesDeleteMessageDefaultResponse
    | ThreadsCreateThread200Response
    | ThreadsCreateThreadDefaultResponse
    | ThreadsListThreads200Response
    | ThreadsListThreadsDefaultResponse
    | ThreadsGetThread200Response
    | ThreadsGetThreadDefaultResponse
    | ThreadsUpdateThread200Response
    | ThreadsUpdateThreadDefaultResponse
    | ThreadsDeleteThread204Response
    | ThreadsDeleteThreadDefaultResponse
    | AgentsCreateAgent200Response
    | AgentsCreateAgentDefaultResponse
    | AgentsListAgents200Response
    | AgentsListAgentsDefaultResponse
    | AgentsGetAgent200Response
    | AgentsGetAgentDefaultResponse
    | AgentsUpdateAgent200Response
    | AgentsUpdateAgentDefaultResponse
    | AgentsDeleteAgent204Response
    | AgentsDeleteAgentDefaultResponse
    | AgentsStreamByAgent200Response
    | AgentsStreamByAgentDefaultResponse
    | RunsCreateRun200Response
    | RunsCreateRunDefaultResponse
    | RunsListRuns200Response
    | RunsListRunsDefaultResponse
    | RunsGetRun200Response
    | RunsGetRunDefaultResponse
    | RunsCreateAndExecuteRun200Response
    | RunsCreateAndExecuteRunDefaultResponse
    | RunsCreateAndStreamRun200Response
    | RunsCreateAndStreamRunDefaultResponse
    | ConnectionsGet200Response
    | ConnectionsGetDefaultResponse
    | ConnectionsList200Response
    | ConnectionsListDefaultResponse
    | EvaluationsGet200Response
    | EvaluationsGetDefaultResponse
    | EvaluationsList200Response
    | EvaluationsListDefaultResponse
    | EvaluationsCreateRun200Response
    | EvaluationsCreateRunDefaultResponse
    | DatasetsListVersions200Response
    | DatasetsListVersionsDefaultResponse
    | DatasetsCreate200Response
    | DatasetsCreateDefaultResponse
    | DatasetsListLatest200Response
    | DatasetsListLatestDefaultResponse
    | DatasetsGetVersion200Response
    | DatasetsGetVersionDefaultResponse
    | DatasetsDeleteVersion204Response
    | DatasetsDeleteVersionDefaultResponse
    | DatasetsCreateVersion200Response
    | DatasetsCreateVersion201Response
    | DatasetsCreateVersionDefaultResponse
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse
    | DatasetsStartPendingUploadAutoIncrement200Response
    | DatasetsStartPendingUploadAutoIncrementDefaultResponse
    | IndexesListVersions200Response
    | IndexesListVersionsDefaultResponse
    | IndexesCreate200Response
    | IndexesCreateDefaultResponse
    | IndexesListLatest200Response
    | IndexesListLatestDefaultResponse
    | IndexesGetVersion200Response
    | IndexesGetVersionDefaultResponse
    | IndexesDeleteVersion204Response
    | IndexesDeleteVersionDefaultResponse
    | IndexesCreateVersion200Response
    | IndexesCreateVersion201Response
    | IndexesCreateVersionDefaultResponse
    | DeploymentsGet200Response
    | DeploymentsGetDefaultResponse
    | DeploymentsList200Response
    | DeploymentsListDefaultResponse,
): response is
  | MessagesSendMessageDefaultResponse
  | MessagesListMessagesDefaultResponse
  | MessagesGetMessageDefaultResponse
  | MessagesUpdateMessageDefaultResponse
  | MessagesDeleteMessageDefaultResponse
  | ThreadsCreateThreadDefaultResponse
  | ThreadsListThreadsDefaultResponse
  | ThreadsGetThreadDefaultResponse
  | ThreadsUpdateThreadDefaultResponse
  | ThreadsDeleteThreadDefaultResponse
  | AgentsCreateAgentDefaultResponse
  | AgentsListAgentsDefaultResponse
  | AgentsGetAgentDefaultResponse
  | AgentsUpdateAgentDefaultResponse
  | AgentsDeleteAgentDefaultResponse
  | AgentsStreamByAgentDefaultResponse
  | RunsCreateRunDefaultResponse
  | RunsListRunsDefaultResponse
  | RunsGetRunDefaultResponse
  | RunsCreateAndExecuteRunDefaultResponse
  | RunsCreateAndStreamRunDefaultResponse
  | ConnectionsGetDefaultResponse
  | ConnectionsListDefaultResponse
  | EvaluationsGetDefaultResponse
  | EvaluationsListDefaultResponse
  | EvaluationsCreateRunDefaultResponse
  | DatasetsListVersionsDefaultResponse
  | DatasetsCreateDefaultResponse
  | DatasetsListLatestDefaultResponse
  | DatasetsGetVersionDefaultResponse
  | DatasetsDeleteVersionDefaultResponse
  | DatasetsCreateVersionDefaultResponse
  | DatasetsStartPendingUploadDefaultResponse
  | DatasetsStartPendingUploadAutoIncrementDefaultResponse
  | IndexesListVersionsDefaultResponse
  | IndexesCreateDefaultResponse
  | IndexesListLatestDefaultResponse
  | IndexesGetVersionDefaultResponse
  | IndexesDeleteVersionDefaultResponse
  | IndexesCreateVersionDefaultResponse
  | DeploymentsGetDefaultResponse
  | DeploymentsListDefaultResponse {
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
