// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  Count200Response,
  CountDefaultResponse,
  SearchGet200Response,
  SearchGetDefaultResponse,
  SearchPost200Response,
  SearchPostDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  SuggestGet200Response,
  SuggestGetDefaultResponse,
  SuggestPost200Response,
  SuggestPostDefaultResponse,
  Index200Response,
  Index207Response,
  IndexDefaultResponse,
  AutocompleteGet200Response,
  AutocompleteGetDefaultResponse,
  AutocompletePost200Response,
  AutocompletePostDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /indexes('{indexName}')/docs/$count": ["200"],
  "GET /indexes('{indexName}')/docs": ["200"],
  "POST /indexes('{indexName}')/docs/search.post.search": ["200"],
  "GET /indexes('{indexName}')/docs('{key}')": ["200"],
  "GET /indexes('{indexName}')/docs/search.suggest": ["200"],
  "POST /indexes('{indexName}')/docs/search.post.suggest": ["200"],
  "POST /indexes('{indexName}')/docs/search.index": ["200", "207"],
  "GET /indexes('{indexName}')/docs/search.autocomplete": ["200"],
  "POST /indexes('{indexName}')/docs/search.post.autocomplete": ["200"],
};

export function isUnexpected(
  response: Count200Response | CountDefaultResponse,
): response is CountDefaultResponse;
export function isUnexpected(
  response: SearchGet200Response | SearchGetDefaultResponse,
): response is SearchGetDefaultResponse;
export function isUnexpected(
  response: SearchPost200Response | SearchPostDefaultResponse,
): response is SearchPostDefaultResponse;
export function isUnexpected(
  response: Get200Response | GetDefaultResponse,
): response is GetDefaultResponse;
export function isUnexpected(
  response: SuggestGet200Response | SuggestGetDefaultResponse,
): response is SuggestGetDefaultResponse;
export function isUnexpected(
  response: SuggestPost200Response | SuggestPostDefaultResponse,
): response is SuggestPostDefaultResponse;
export function isUnexpected(
  response: Index200Response | Index207Response | IndexDefaultResponse,
): response is IndexDefaultResponse;
export function isUnexpected(
  response: AutocompleteGet200Response | AutocompleteGetDefaultResponse,
): response is AutocompleteGetDefaultResponse;
export function isUnexpected(
  response: AutocompletePost200Response | AutocompletePostDefaultResponse,
): response is AutocompletePostDefaultResponse;
export function isUnexpected(
  response:
    | Count200Response
    | CountDefaultResponse
    | SearchGet200Response
    | SearchGetDefaultResponse
    | SearchPost200Response
    | SearchPostDefaultResponse
    | Get200Response
    | GetDefaultResponse
    | SuggestGet200Response
    | SuggestGetDefaultResponse
    | SuggestPost200Response
    | SuggestPostDefaultResponse
    | Index200Response
    | Index207Response
    | IndexDefaultResponse
    | AutocompleteGet200Response
    | AutocompleteGetDefaultResponse
    | AutocompletePost200Response
    | AutocompletePostDefaultResponse,
): response is
  | CountDefaultResponse
  | SearchGetDefaultResponse
  | SearchPostDefaultResponse
  | GetDefaultResponse
  | SuggestGetDefaultResponse
  | SuggestPostDefaultResponse
  | IndexDefaultResponse
  | AutocompleteGetDefaultResponse
  | AutocompletePostDefaultResponse {
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
