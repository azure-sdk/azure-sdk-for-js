// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListApis200Response,
  ListApisDefaultResponse,
  GetApi200Response,
  GetApiDefaultResponse,
  ListDefinitions200Response,
  ListDefinitionsDefaultResponse,
  GetDefinition200Response,
  GetDefinitionDefaultResponse,
  ExportSpecification200Response,
  ExportSpecificationDefaultResponse,
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  ListEnvironments200Response,
  ListEnvironmentsDefaultResponse,
  GetEnvironment200Response,
  GetEnvironmentDefaultResponse,
  ListVersions200Response,
  ListVersionsDefaultResponse,
  GetVersion200Response,
  GetVersionDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /apis": ["200"],
  "GET /apis/{apiName}": ["200"],
  "GET /apis/{apiName}/versions/{versionName}/definitions": ["200"],
  "GET /apis/{apiName}/versions/{versionName}/definitions/{apiDefinitionName}":
    ["200"],
  "POST /apis/{apiName}/versions/{versionName}/definitions/{apiDefinitionName}:exportSpecification":
    ["200"],
  "GET /apis/{apiName}/deployments": ["200"],
  "GET /apis/{apiName}/deployments/{deploymentName}": ["200"],
  "GET /environments": ["200"],
  "GET /environments/{environmentName}": ["200"],
  "GET /apis/{apiName}/versions": ["200"],
  "GET /apis/{apiName}/versions/{versionName}": ["200"],
};

export function isUnexpected(
  response: ListApis200Response | ListApisDefaultResponse
): response is ListApisDefaultResponse;
export function isUnexpected(
  response: GetApi200Response | GetApiDefaultResponse
): response is GetApiDefaultResponse;
export function isUnexpected(
  response: ListDefinitions200Response | ListDefinitionsDefaultResponse
): response is ListDefinitionsDefaultResponse;
export function isUnexpected(
  response: GetDefinition200Response | GetDefinitionDefaultResponse
): response is GetDefinitionDefaultResponse;
export function isUnexpected(
  response: ExportSpecification200Response | ExportSpecificationDefaultResponse
): response is ExportSpecificationDefaultResponse;
export function isUnexpected(
  response: ListDeployments200Response | ListDeploymentsDefaultResponse
): response is ListDeploymentsDefaultResponse;
export function isUnexpected(
  response: GetDeployment200Response | GetDeploymentDefaultResponse
): response is GetDeploymentDefaultResponse;
export function isUnexpected(
  response: ListEnvironments200Response | ListEnvironmentsDefaultResponse
): response is ListEnvironmentsDefaultResponse;
export function isUnexpected(
  response: GetEnvironment200Response | GetEnvironmentDefaultResponse
): response is GetEnvironmentDefaultResponse;
export function isUnexpected(
  response: ListVersions200Response | ListVersionsDefaultResponse
): response is ListVersionsDefaultResponse;
export function isUnexpected(
  response: GetVersion200Response | GetVersionDefaultResponse
): response is GetVersionDefaultResponse;
export function isUnexpected(
  response:
    | ListApis200Response
    | ListApisDefaultResponse
    | GetApi200Response
    | GetApiDefaultResponse
    | ListDefinitions200Response
    | ListDefinitionsDefaultResponse
    | GetDefinition200Response
    | GetDefinitionDefaultResponse
    | ExportSpecification200Response
    | ExportSpecificationDefaultResponse
    | ListDeployments200Response
    | ListDeploymentsDefaultResponse
    | GetDeployment200Response
    | GetDeploymentDefaultResponse
    | ListEnvironments200Response
    | ListEnvironmentsDefaultResponse
    | GetEnvironment200Response
    | GetEnvironmentDefaultResponse
    | ListVersions200Response
    | ListVersionsDefaultResponse
    | GetVersion200Response
    | GetVersionDefaultResponse
): response is
  | ListApisDefaultResponse
  | GetApiDefaultResponse
  | ListDefinitionsDefaultResponse
  | GetDefinitionDefaultResponse
  | ExportSpecificationDefaultResponse
  | ListDeploymentsDefaultResponse
  | GetDeploymentDefaultResponse
  | ListEnvironmentsDefaultResponse
  | GetEnvironmentDefaultResponse
  | ListVersionsDefaultResponse
  | GetVersionDefaultResponse {
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
          `${candidateParts[i]?.slice(start, end)}`
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
