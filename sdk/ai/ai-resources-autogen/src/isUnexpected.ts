// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IndexesGet200Response,
  IndexesGetDefaultResponse,
  IndexesCreateOrUpdate200Response,
  IndexesCreateOrUpdate201Response,
  IndexesCreateOrUpdateDefaultResponse,
  IndexesList200Response,
  IndexesListDefaultResponse,
  IndexesGetLatest200Response,
  IndexesGetLatestDefaultResponse,
  IndexesGetNextVersion200Response,
  IndexesGetNextVersionDefaultResponse,
  IndexesListLatest200Response,
  IndexesListLatestDefaultResponse,
  PromptsGet200Response,
  PromptsGetDefaultResponse,
  PromptsCreateOrUpdate200Response,
  PromptsCreateOrUpdate201Response,
  PromptsCreateOrUpdateDefaultResponse,
  PromptsList200Response,
  PromptsListDefaultResponse,
  PromptsGetLatest200Response,
  PromptsGetLatestDefaultResponse,
  PromptsGetNextVersion200Response,
  PromptsGetNextVersionDefaultResponse,
  PromptsListLatest200Response,
  PromptsListLatestDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /indexes/{name}/versions/{version}": ["200"],
  "PUT /indexes/{name}/versions/{version}": ["200", "201"],
  "GET /indexes/{name}/versions": ["200"],
  "GET /indexes/{name}": ["200"],
  "POST /indexes/{name}:getNextVersion": ["200"],
  "GET /indexes": ["200"],
  "GET /prompts/{name}/versions/{version}": ["200"],
  "PUT /prompts/{name}/versions/{version}": ["200", "201"],
  "GET /prompts/{name}/versions": ["200"],
  "GET /prompts/{name}": ["200"],
  "POST /prompts/{name}:getNextVersion": ["200"],
  "GET /prompts": ["200"],
};

export function isUnexpected(
  response: IndexesGet200Response | IndexesGetDefaultResponse,
): response is IndexesGetDefaultResponse;
export function isUnexpected(
  response:
    | IndexesCreateOrUpdate200Response
    | IndexesCreateOrUpdate201Response
    | IndexesCreateOrUpdateDefaultResponse,
): response is IndexesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: IndexesList200Response | IndexesListDefaultResponse,
): response is IndexesListDefaultResponse;
export function isUnexpected(
  response: IndexesGetLatest200Response | IndexesGetLatestDefaultResponse,
): response is IndexesGetLatestDefaultResponse;
export function isUnexpected(
  response:
    | IndexesGetNextVersion200Response
    | IndexesGetNextVersionDefaultResponse,
): response is IndexesGetNextVersionDefaultResponse;
export function isUnexpected(
  response: IndexesListLatest200Response | IndexesListLatestDefaultResponse,
): response is IndexesListLatestDefaultResponse;
export function isUnexpected(
  response: PromptsGet200Response | PromptsGetDefaultResponse,
): response is PromptsGetDefaultResponse;
export function isUnexpected(
  response:
    | PromptsCreateOrUpdate200Response
    | PromptsCreateOrUpdate201Response
    | PromptsCreateOrUpdateDefaultResponse,
): response is PromptsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: PromptsList200Response | PromptsListDefaultResponse,
): response is PromptsListDefaultResponse;
export function isUnexpected(
  response: PromptsGetLatest200Response | PromptsGetLatestDefaultResponse,
): response is PromptsGetLatestDefaultResponse;
export function isUnexpected(
  response:
    | PromptsGetNextVersion200Response
    | PromptsGetNextVersionDefaultResponse,
): response is PromptsGetNextVersionDefaultResponse;
export function isUnexpected(
  response: PromptsListLatest200Response | PromptsListLatestDefaultResponse,
): response is PromptsListLatestDefaultResponse;
export function isUnexpected(
  response:
    | IndexesGet200Response
    | IndexesGetDefaultResponse
    | IndexesCreateOrUpdate200Response
    | IndexesCreateOrUpdate201Response
    | IndexesCreateOrUpdateDefaultResponse
    | IndexesList200Response
    | IndexesListDefaultResponse
    | IndexesGetLatest200Response
    | IndexesGetLatestDefaultResponse
    | IndexesGetNextVersion200Response
    | IndexesGetNextVersionDefaultResponse
    | IndexesListLatest200Response
    | IndexesListLatestDefaultResponse
    | PromptsGet200Response
    | PromptsGetDefaultResponse
    | PromptsCreateOrUpdate200Response
    | PromptsCreateOrUpdate201Response
    | PromptsCreateOrUpdateDefaultResponse
    | PromptsList200Response
    | PromptsListDefaultResponse
    | PromptsGetLatest200Response
    | PromptsGetLatestDefaultResponse
    | PromptsGetNextVersion200Response
    | PromptsGetNextVersionDefaultResponse
    | PromptsListLatest200Response
    | PromptsListLatestDefaultResponse,
): response is
  | IndexesGetDefaultResponse
  | IndexesCreateOrUpdateDefaultResponse
  | IndexesListDefaultResponse
  | IndexesGetLatestDefaultResponse
  | IndexesGetNextVersionDefaultResponse
  | IndexesListLatestDefaultResponse
  | PromptsGetDefaultResponse
  | PromptsCreateOrUpdateDefaultResponse
  | PromptsListDefaultResponse
  | PromptsGetLatestDefaultResponse
  | PromptsGetNextVersionDefaultResponse
  | PromptsListLatestDefaultResponse {
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
