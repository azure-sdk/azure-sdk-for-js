// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetRegistration200Response,
  GetRegistrationDefaultResponse,
  CreateOrReplaceRegistration200Response,
  CreateOrReplaceRegistration201Response,
  CreateOrReplaceRegistrationDefaultResponse,
  DeleteRegistration204Response,
  DeleteRegistrationDefaultResponse,
  ListRegistrations200Response,
  ListRegistrationsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /registrations/{name}": ["200"],
  "PUT /registrations/{name}": ["200", "201"],
  "DELETE /registrations/{name}": ["204"],
  "GET /registrations": ["200"],
};

export function isUnexpected(
  response: GetRegistration200Response | GetRegistrationDefaultResponse,
): response is GetRegistrationDefaultResponse;
export function isUnexpected(
  response:
    | CreateOrReplaceRegistration200Response
    | CreateOrReplaceRegistration201Response
    | CreateOrReplaceRegistrationDefaultResponse,
): response is CreateOrReplaceRegistrationDefaultResponse;
export function isUnexpected(
  response: DeleteRegistration204Response | DeleteRegistrationDefaultResponse,
): response is DeleteRegistrationDefaultResponse;
export function isUnexpected(
  response: ListRegistrations200Response | ListRegistrationsDefaultResponse,
): response is ListRegistrationsDefaultResponse;
export function isUnexpected(
  response:
    | GetRegistration200Response
    | GetRegistrationDefaultResponse
    | CreateOrReplaceRegistration200Response
    | CreateOrReplaceRegistration201Response
    | CreateOrReplaceRegistrationDefaultResponse
    | DeleteRegistration204Response
    | DeleteRegistrationDefaultResponse
    | ListRegistrations200Response
    | ListRegistrationsDefaultResponse,
): response is
  | GetRegistrationDefaultResponse
  | CreateOrReplaceRegistrationDefaultResponse
  | DeleteRegistrationDefaultResponse
  | ListRegistrationsDefaultResponse {
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
