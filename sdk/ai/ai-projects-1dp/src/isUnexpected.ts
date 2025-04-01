// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ConnectionsGet200Response,
  ConnectionsGetDefaultResponse,
  ConnectionsList200Response,
  ConnectionsListDefaultResponse,
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
  DatasetsStartPendingUploadVersion200Response,
  DatasetsStartPendingUploadVersionDefaultResponse,
  DatasetsStartPendingUpload200Response,
  DatasetsStartPendingUploadDefaultResponse,
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
  "GET /connections/{name}": ["200"],
  "GET /connections": ["200"],
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
};

export function isUnexpected(
  response: ConnectionsGet200Response | ConnectionsGetDefaultResponse,
): response is ConnectionsGetDefaultResponse;
export function isUnexpected(
  response: ConnectionsList200Response | ConnectionsListDefaultResponse,
): response is ConnectionsListDefaultResponse;
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
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse,
): response is DatasetsStartPendingUploadVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse,
): response is DatasetsStartPendingUploadDefaultResponse;
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
    | ConnectionsGet200Response
    | ConnectionsGetDefaultResponse
    | ConnectionsList200Response
    | ConnectionsListDefaultResponse
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
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse
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
  | ConnectionsGetDefaultResponse
  | ConnectionsListDefaultResponse
  | DatasetsListVersionsDefaultResponse
  | DatasetsCreateDefaultResponse
  | DatasetsListLatestDefaultResponse
  | DatasetsGetVersionDefaultResponse
  | DatasetsDeleteVersionDefaultResponse
  | DatasetsCreateVersionDefaultResponse
  | DatasetsStartPendingUploadVersionDefaultResponse
  | DatasetsStartPendingUploadDefaultResponse
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
