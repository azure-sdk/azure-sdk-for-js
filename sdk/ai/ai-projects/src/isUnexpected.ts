// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetWorkspace200Response,
  GetWorkspaceDefaultResponse,
  ListConnections200Response,
  ListConnectionsDefaultResponse,
  GetConnection200Response,
  GetConnectionDefaultResponse,
  GetConnectionWithSecrets200Response,
  GetConnectionWithSecretsDefaultResponse,
  GetAppInsights200Response,
  GetAppInsightsDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Update200Response,
  UpdateDefaultResponse,
  List200Response,
  ListDefaultResponse,
  GetSchedule200Response,
  GetScheduleDefaultResponse,
  CreateOrReplaceSchedule200Response,
  CreateOrReplaceSchedule201Response,
  CreateOrReplaceScheduleDefaultResponse,
  ListSchedule200Response,
  ListScheduleDefaultResponse,
  DisableSchedule204Response,
  DisableScheduleDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /": ["200"],
  "GET /connections": ["200"],
  "GET /connections/{connectionName}": ["200"],
  "POST /connections/{connectionName}/listsecrets": ["200"],
  "GET /{appInsightsResourceUrl}": ["200"],
  "GET /evaluations/runs/{id}": ["200"],
  "PATCH /evaluations/runs/{id}": ["200"],
  "POST /evaluations/runs:run": ["201"],
  "GET /evaluations/runs": ["200"],
  "GET /evaluations/schedules/{name}": ["200"],
  "PUT /evaluations/schedules/{name}": ["200", "201"],
  "GET /evaluations/schedules": ["200"],
  "PATCH /evaluations/schedules/{name}/disable": ["204"],
};

export function isUnexpected(
  response: GetWorkspace200Response | GetWorkspaceDefaultResponse,
): response is GetWorkspaceDefaultResponse;
export function isUnexpected(
  response: ListConnections200Response | ListConnectionsDefaultResponse,
): response is ListConnectionsDefaultResponse;
export function isUnexpected(
  response: GetConnection200Response | GetConnectionDefaultResponse,
): response is GetConnectionDefaultResponse;
export function isUnexpected(
  response:
    | GetConnectionWithSecrets200Response
    | GetConnectionWithSecretsDefaultResponse,
): response is GetConnectionWithSecretsDefaultResponse;
export function isUnexpected(
  response: GetAppInsights200Response | GetAppInsightsDefaultResponse,
): response is GetAppInsightsDefaultResponse;
export function isUnexpected(
  response: Get200Response | GetDefaultResponse,
): response is GetDefaultResponse;
export function isUnexpected(
  response: Update200Response | UpdateDefaultResponse,
): response is UpdateDefaultResponse;
export function isUnexpected(
  response: List200Response | ListDefaultResponse,
): response is ListDefaultResponse;
export function isUnexpected(
  response: GetSchedule200Response | GetScheduleDefaultResponse,
): response is GetScheduleDefaultResponse;
export function isUnexpected(
  response:
    | CreateOrReplaceSchedule200Response
    | CreateOrReplaceSchedule201Response
    | CreateOrReplaceScheduleDefaultResponse,
): response is CreateOrReplaceScheduleDefaultResponse;
export function isUnexpected(
  response: ListSchedule200Response | ListScheduleDefaultResponse,
): response is ListScheduleDefaultResponse;
export function isUnexpected(
  response: DisableSchedule204Response | DisableScheduleDefaultResponse,
): response is DisableScheduleDefaultResponse;
export function isUnexpected(
  response:
    | GetWorkspace200Response
    | GetWorkspaceDefaultResponse
    | ListConnections200Response
    | ListConnectionsDefaultResponse
    | GetConnection200Response
    | GetConnectionDefaultResponse
    | GetConnectionWithSecrets200Response
    | GetConnectionWithSecretsDefaultResponse
    | GetAppInsights200Response
    | GetAppInsightsDefaultResponse
    | Get200Response
    | GetDefaultResponse
    | Update200Response
    | UpdateDefaultResponse
    | List200Response
    | ListDefaultResponse
    | GetSchedule200Response
    | GetScheduleDefaultResponse
    | CreateOrReplaceSchedule200Response
    | CreateOrReplaceSchedule201Response
    | CreateOrReplaceScheduleDefaultResponse
    | ListSchedule200Response
    | ListScheduleDefaultResponse
    | DisableSchedule204Response
    | DisableScheduleDefaultResponse,
): response is
  | GetWorkspaceDefaultResponse
  | ListConnectionsDefaultResponse
  | GetConnectionDefaultResponse
  | GetConnectionWithSecretsDefaultResponse
  | GetAppInsightsDefaultResponse
  | GetDefaultResponse
  | UpdateDefaultResponse
  | ListDefaultResponse
  | GetScheduleDefaultResponse
  | CreateOrReplaceScheduleDefaultResponse
  | ListScheduleDefaultResponse
  | DisableScheduleDefaultResponse {
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
