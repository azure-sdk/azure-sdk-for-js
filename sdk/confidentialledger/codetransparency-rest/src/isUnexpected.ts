// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CreateEntry200Response,
  CreateEntryDefaultResponse,
  GetEntryStatus200Response,
  GetEntryStatusDefaultResponse,
  ListEntryStatuses200Response,
  ListEntryStatusesDefaultResponse,
  GetEntry200Response,
  GetEntryDefaultResponse,
  GetEntryReceipt200Response,
  GetEntryReceiptDefaultResponse,
  ListEntryIds200Response,
  ListEntryIds503Response,
  ListEntryIdsDefaultResponse,
  GetParameters200Response,
  GetParametersDefaultResponse,
  GetDidConfig200Response,
  GetDidConfigDefaultResponse,
  GetCodeTransparencyConfig200Response,
  GetCodeTransparencyConfigDefaultResponse,
  GetCodeTransparencyVersion200Response,
  GetCodeTransparencyVersionDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /entries": ["200"],
  "GET /operations/{operationId}": ["200"],
  "GET /operations": ["200"],
  "GET /entries/{entryId}": ["200"],
  "GET /entries/{entryId}/receipt": ["200"],
  "GET /entries/txIds": ["200", "503"],
  "GET /parameters": ["200"],
  "GET /.well-known/did.json": ["200"],
  "GET /configuration": ["200"],
  "GET /version": ["200"],
};

export function isUnexpected(
  response: CreateEntry200Response | CreateEntryDefaultResponse,
): response is CreateEntryDefaultResponse;
export function isUnexpected(
  response: GetEntryStatus200Response | GetEntryStatusDefaultResponse,
): response is GetEntryStatusDefaultResponse;
export function isUnexpected(
  response: ListEntryStatuses200Response | ListEntryStatusesDefaultResponse,
): response is ListEntryStatusesDefaultResponse;
export function isUnexpected(
  response: GetEntry200Response | GetEntryDefaultResponse,
): response is GetEntryDefaultResponse;
export function isUnexpected(
  response: GetEntryReceipt200Response | GetEntryReceiptDefaultResponse,
): response is GetEntryReceiptDefaultResponse;
export function isUnexpected(
  response:
    | ListEntryIds200Response
    | ListEntryIds503Response
    | ListEntryIdsDefaultResponse,
): response is ListEntryIdsDefaultResponse;
export function isUnexpected(
  response: GetParameters200Response | GetParametersDefaultResponse,
): response is GetParametersDefaultResponse;
export function isUnexpected(
  response: GetDidConfig200Response | GetDidConfigDefaultResponse,
): response is GetDidConfigDefaultResponse;
export function isUnexpected(
  response:
    | GetCodeTransparencyConfig200Response
    | GetCodeTransparencyConfigDefaultResponse,
): response is GetCodeTransparencyConfigDefaultResponse;
export function isUnexpected(
  response:
    | GetCodeTransparencyVersion200Response
    | GetCodeTransparencyVersionDefaultResponse,
): response is GetCodeTransparencyVersionDefaultResponse;
export function isUnexpected(
  response:
    | CreateEntry200Response
    | CreateEntryDefaultResponse
    | GetEntryStatus200Response
    | GetEntryStatusDefaultResponse
    | ListEntryStatuses200Response
    | ListEntryStatusesDefaultResponse
    | GetEntry200Response
    | GetEntryDefaultResponse
    | GetEntryReceipt200Response
    | GetEntryReceiptDefaultResponse
    | ListEntryIds200Response
    | ListEntryIds503Response
    | ListEntryIdsDefaultResponse
    | GetParameters200Response
    | GetParametersDefaultResponse
    | GetDidConfig200Response
    | GetDidConfigDefaultResponse
    | GetCodeTransparencyConfig200Response
    | GetCodeTransparencyConfigDefaultResponse
    | GetCodeTransparencyVersion200Response
    | GetCodeTransparencyVersionDefaultResponse,
): response is
  | CreateEntryDefaultResponse
  | GetEntryStatusDefaultResponse
  | ListEntryStatusesDefaultResponse
  | GetEntryDefaultResponse
  | GetEntryReceiptDefaultResponse
  | ListEntryIdsDefaultResponse
  | GetParametersDefaultResponse
  | GetDidConfigDefaultResponse
  | GetCodeTransparencyConfigDefaultResponse
  | GetCodeTransparencyVersionDefaultResponse {
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
