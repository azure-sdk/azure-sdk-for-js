// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ApisList200Response,
  ApisListDefaultResponse,
  ApisListAll200Response,
  ApisListAllDefaultResponse,
  ApisGet200Response,
  ApisGetDefaultResponse,
  ApiDefinitionsListDefinitions200Response,
  ApiDefinitionsListDefinitionsDefaultResponse,
  ApiDefinitionsGetDefinition200Response,
  ApiDefinitionsGetDefinitionDefaultResponse,
  ApiDefinitionsGetExportSpecificationOperationStatus200Response,
  ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse,
  ApiDefinitionsExportSpecification202Response,
  ApiDefinitionsExportSpecificationLogicalResponse,
  ApiDefinitionsExportSpecificationDefaultResponse,
  ApiDeploymentsListDeployments200Response,
  ApiDeploymentsListDeploymentsDefaultResponse,
  ApiDeploymentsGetDeployment200Response,
  ApiDeploymentsGetDeploymentDefaultResponse,
  EnvironmentsList200Response,
  EnvironmentsListDefaultResponse,
  EnvironmentsListAll200Response,
  EnvironmentsListAllDefaultResponse,
  EnvironmentsGet200Response,
  EnvironmentsGetDefaultResponse,
  ApiVersionsListVersions200Response,
  ApiVersionsListVersionsDefaultResponse,
  ApiVersionsGetVersion200Response,
  ApiVersionsGetVersionDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /workspaces/{workspaceName}/apis": ["200"],
  "GET /apis": ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}": ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions":
    ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}":
    ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}/operations/{operationId}":
    ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}:exportSpecification":
    ["200", "202"],
  "POST /workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}:exportSpecification":
    ["202"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/deployments": ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/deployments/{deploymentName}":
    ["200"],
  "GET /workspaces/{workspaceName}/environments": ["200"],
  "GET /environments": ["200"],
  "GET /workspaces/{workspaceName}/environments/{environmentName}": ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/versions": ["200"],
  "GET /workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}": [
    "200",
  ],
};

export function isUnexpected(
  response: ApisList200Response | ApisListDefaultResponse,
): response is ApisListDefaultResponse;
export function isUnexpected(
  response: ApisListAll200Response | ApisListAllDefaultResponse,
): response is ApisListAllDefaultResponse;
export function isUnexpected(
  response: ApisGet200Response | ApisGetDefaultResponse,
): response is ApisGetDefaultResponse;
export function isUnexpected(
  response:
    | ApiDefinitionsListDefinitions200Response
    | ApiDefinitionsListDefinitionsDefaultResponse,
): response is ApiDefinitionsListDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | ApiDefinitionsGetDefinition200Response
    | ApiDefinitionsGetDefinitionDefaultResponse,
): response is ApiDefinitionsGetDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ApiDefinitionsGetExportSpecificationOperationStatus200Response
    | ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse,
): response is ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse;
export function isUnexpected(
  response:
    | ApiDefinitionsExportSpecification202Response
    | ApiDefinitionsExportSpecificationLogicalResponse
    | ApiDefinitionsExportSpecificationDefaultResponse,
): response is ApiDefinitionsExportSpecificationDefaultResponse;
export function isUnexpected(
  response:
    | ApiDeploymentsListDeployments200Response
    | ApiDeploymentsListDeploymentsDefaultResponse,
): response is ApiDeploymentsListDeploymentsDefaultResponse;
export function isUnexpected(
  response:
    | ApiDeploymentsGetDeployment200Response
    | ApiDeploymentsGetDeploymentDefaultResponse,
): response is ApiDeploymentsGetDeploymentDefaultResponse;
export function isUnexpected(
  response: EnvironmentsList200Response | EnvironmentsListDefaultResponse,
): response is EnvironmentsListDefaultResponse;
export function isUnexpected(
  response: EnvironmentsListAll200Response | EnvironmentsListAllDefaultResponse,
): response is EnvironmentsListAllDefaultResponse;
export function isUnexpected(
  response: EnvironmentsGet200Response | EnvironmentsGetDefaultResponse,
): response is EnvironmentsGetDefaultResponse;
export function isUnexpected(
  response:
    | ApiVersionsListVersions200Response
    | ApiVersionsListVersionsDefaultResponse,
): response is ApiVersionsListVersionsDefaultResponse;
export function isUnexpected(
  response:
    | ApiVersionsGetVersion200Response
    | ApiVersionsGetVersionDefaultResponse,
): response is ApiVersionsGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | ApisList200Response
    | ApisListDefaultResponse
    | ApisListAll200Response
    | ApisListAllDefaultResponse
    | ApisGet200Response
    | ApisGetDefaultResponse
    | ApiDefinitionsListDefinitions200Response
    | ApiDefinitionsListDefinitionsDefaultResponse
    | ApiDefinitionsGetDefinition200Response
    | ApiDefinitionsGetDefinitionDefaultResponse
    | ApiDefinitionsGetExportSpecificationOperationStatus200Response
    | ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse
    | ApiDefinitionsExportSpecification202Response
    | ApiDefinitionsExportSpecificationLogicalResponse
    | ApiDefinitionsExportSpecificationDefaultResponse
    | ApiDeploymentsListDeployments200Response
    | ApiDeploymentsListDeploymentsDefaultResponse
    | ApiDeploymentsGetDeployment200Response
    | ApiDeploymentsGetDeploymentDefaultResponse
    | EnvironmentsList200Response
    | EnvironmentsListDefaultResponse
    | EnvironmentsListAll200Response
    | EnvironmentsListAllDefaultResponse
    | EnvironmentsGet200Response
    | EnvironmentsGetDefaultResponse
    | ApiVersionsListVersions200Response
    | ApiVersionsListVersionsDefaultResponse
    | ApiVersionsGetVersion200Response
    | ApiVersionsGetVersionDefaultResponse,
): response is
  | ApisListDefaultResponse
  | ApisListAllDefaultResponse
  | ApisGetDefaultResponse
  | ApiDefinitionsListDefinitionsDefaultResponse
  | ApiDefinitionsGetDefinitionDefaultResponse
  | ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse
  | ApiDefinitionsExportSpecificationDefaultResponse
  | ApiDeploymentsListDeploymentsDefaultResponse
  | ApiDeploymentsGetDeploymentDefaultResponse
  | EnvironmentsListDefaultResponse
  | EnvironmentsListAllDefaultResponse
  | EnvironmentsGetDefaultResponse
  | ApiVersionsListVersionsDefaultResponse
  | ApiVersionsGetVersionDefaultResponse {
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
