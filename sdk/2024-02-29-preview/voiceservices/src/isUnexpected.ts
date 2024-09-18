// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ListNumbers200Response,
  ListNumbersDefaultResponse,
  AccountsList200Response,
  AccountsListDefaultResponse,
  AccountsGet200Response,
  AccountsGetDefaultResponse,
  AccountsCreateOrReplace200Response,
  AccountsCreateOrReplace201Response,
  AccountsCreateOrReplaceDefaultResponse,
  AccountsDelete204Response,
  AccountsDeleteDefaultResponse,
  AccountsCreateOrUpdateNumbers200Response,
  AccountsCreateOrUpdateNumbersDefaultResponse,
  AccountsDeleteNumbers204Response,
  AccountsDeleteNumbersDefaultResponse,
  AccountsListNumbers200Response,
  AccountsListNumbersDefaultResponse,
  AccountsGetNumber200Response,
  AccountsGetNumberDefaultResponse,
  AccountsCreateOrReplaceNumber200Response,
  AccountsCreateOrReplaceNumber201Response,
  AccountsCreateOrReplaceNumberDefaultResponse,
  AccountsDeleteNumber204Response,
  AccountsDeleteNumberDefaultResponse,
  AccountsGetTeamsCapabilityPlans200Response,
  AccountsGetTeamsCapabilityPlansDefaultResponse,
  AccountsGetTeamsAvailableCapabilities200Response,
  AccountsGetTeamsAvailableCapabilitiesDefaultResponse,
  AccountsListTeamsCivicAddresses200Response,
  AccountsListTeamsCivicAddressesDefaultResponse,
  AccountsGetTeamsCivicAddress200Response,
  AccountsGetTeamsCivicAddressDefaultResponse,
  TeamsRequestsForInformationList200Response,
  TeamsRequestsForInformationListDefaultResponse,
  TeamsRequestsForInformationGetRequestForInformation200Response,
  TeamsRequestsForInformationGetRequestForInformationDefaultResponse,
  TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Response,
  TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Response,
  TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /numbers": ["200"],
  "GET /accounts": ["200"],
  "GET /accounts/{accountName}": ["200"],
  "PUT /accounts/{accountName}": ["200", "201"],
  "DELETE /accounts/{accountName}": ["204"],
  "POST /accounts/{accountName}:createOrUpdateNumbers": ["200"],
  "POST /accounts/{accountName}:deleteNumbers": ["204"],
  "GET /accounts/{accountName}/numbers": ["200"],
  "GET /accounts/{accountName}/numbers/{telephoneNumber}": ["200"],
  "PUT /accounts/{accountName}/numbers/{telephoneNumber}": ["200", "201"],
  "DELETE /accounts/{accountName}/numbers/{telephoneNumber}": ["204"],
  "POST /accounts/{accountName}:getTeamsCapabilityPlans": ["200"],
  "POST /accounts/{accountName}:getTeamsAvailableCapabilities": ["200"],
  "GET /accounts/{accountName}/teamsCivicAddresses": ["200"],
  "GET /accounts/{accountName}/teamsCivicAddresses/{civicAddressId}": ["200"],
  "GET /teamsRequestsForInformation": ["200"],
  "GET /teamsRequestsForInformation/{tenantId}": ["200"],
  "PATCH /teamsRequestsForInformation/{tenantId}": ["200", "201"],
};

export function isUnexpected(
  response: ListNumbers200Response | ListNumbersDefaultResponse,
): response is ListNumbersDefaultResponse;
export function isUnexpected(
  response: AccountsList200Response | AccountsListDefaultResponse,
): response is AccountsListDefaultResponse;
export function isUnexpected(
  response: AccountsGet200Response | AccountsGetDefaultResponse,
): response is AccountsGetDefaultResponse;
export function isUnexpected(
  response:
    | AccountsCreateOrReplace200Response
    | AccountsCreateOrReplace201Response
    | AccountsCreateOrReplaceDefaultResponse,
): response is AccountsCreateOrReplaceDefaultResponse;
export function isUnexpected(
  response: AccountsDelete204Response | AccountsDeleteDefaultResponse,
): response is AccountsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AccountsCreateOrUpdateNumbers200Response
    | AccountsCreateOrUpdateNumbersDefaultResponse,
): response is AccountsCreateOrUpdateNumbersDefaultResponse;
export function isUnexpected(
  response:
    | AccountsDeleteNumbers204Response
    | AccountsDeleteNumbersDefaultResponse,
): response is AccountsDeleteNumbersDefaultResponse;
export function isUnexpected(
  response: AccountsListNumbers200Response | AccountsListNumbersDefaultResponse,
): response is AccountsListNumbersDefaultResponse;
export function isUnexpected(
  response: AccountsGetNumber200Response | AccountsGetNumberDefaultResponse,
): response is AccountsGetNumberDefaultResponse;
export function isUnexpected(
  response:
    | AccountsCreateOrReplaceNumber200Response
    | AccountsCreateOrReplaceNumber201Response
    | AccountsCreateOrReplaceNumberDefaultResponse,
): response is AccountsCreateOrReplaceNumberDefaultResponse;
export function isUnexpected(
  response:
    | AccountsDeleteNumber204Response
    | AccountsDeleteNumberDefaultResponse,
): response is AccountsDeleteNumberDefaultResponse;
export function isUnexpected(
  response:
    | AccountsGetTeamsCapabilityPlans200Response
    | AccountsGetTeamsCapabilityPlansDefaultResponse,
): response is AccountsGetTeamsCapabilityPlansDefaultResponse;
export function isUnexpected(
  response:
    | AccountsGetTeamsAvailableCapabilities200Response
    | AccountsGetTeamsAvailableCapabilitiesDefaultResponse,
): response is AccountsGetTeamsAvailableCapabilitiesDefaultResponse;
export function isUnexpected(
  response:
    | AccountsListTeamsCivicAddresses200Response
    | AccountsListTeamsCivicAddressesDefaultResponse,
): response is AccountsListTeamsCivicAddressesDefaultResponse;
export function isUnexpected(
  response:
    | AccountsGetTeamsCivicAddress200Response
    | AccountsGetTeamsCivicAddressDefaultResponse,
): response is AccountsGetTeamsCivicAddressDefaultResponse;
export function isUnexpected(
  response:
    | TeamsRequestsForInformationList200Response
    | TeamsRequestsForInformationListDefaultResponse,
): response is TeamsRequestsForInformationListDefaultResponse;
export function isUnexpected(
  response:
    | TeamsRequestsForInformationGetRequestForInformation200Response
    | TeamsRequestsForInformationGetRequestForInformationDefaultResponse,
): response is TeamsRequestsForInformationGetRequestForInformationDefaultResponse;
export function isUnexpected(
  response:
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Response
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Response
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse,
): response is TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse;
export function isUnexpected(
  response:
    | ListNumbers200Response
    | ListNumbersDefaultResponse
    | AccountsList200Response
    | AccountsListDefaultResponse
    | AccountsGet200Response
    | AccountsGetDefaultResponse
    | AccountsCreateOrReplace200Response
    | AccountsCreateOrReplace201Response
    | AccountsCreateOrReplaceDefaultResponse
    | AccountsDelete204Response
    | AccountsDeleteDefaultResponse
    | AccountsCreateOrUpdateNumbers200Response
    | AccountsCreateOrUpdateNumbersDefaultResponse
    | AccountsDeleteNumbers204Response
    | AccountsDeleteNumbersDefaultResponse
    | AccountsListNumbers200Response
    | AccountsListNumbersDefaultResponse
    | AccountsGetNumber200Response
    | AccountsGetNumberDefaultResponse
    | AccountsCreateOrReplaceNumber200Response
    | AccountsCreateOrReplaceNumber201Response
    | AccountsCreateOrReplaceNumberDefaultResponse
    | AccountsDeleteNumber204Response
    | AccountsDeleteNumberDefaultResponse
    | AccountsGetTeamsCapabilityPlans200Response
    | AccountsGetTeamsCapabilityPlansDefaultResponse
    | AccountsGetTeamsAvailableCapabilities200Response
    | AccountsGetTeamsAvailableCapabilitiesDefaultResponse
    | AccountsListTeamsCivicAddresses200Response
    | AccountsListTeamsCivicAddressesDefaultResponse
    | AccountsGetTeamsCivicAddress200Response
    | AccountsGetTeamsCivicAddressDefaultResponse
    | TeamsRequestsForInformationList200Response
    | TeamsRequestsForInformationListDefaultResponse
    | TeamsRequestsForInformationGetRequestForInformation200Response
    | TeamsRequestsForInformationGetRequestForInformationDefaultResponse
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Response
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Response
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse,
): response is
  | ListNumbersDefaultResponse
  | AccountsListDefaultResponse
  | AccountsGetDefaultResponse
  | AccountsCreateOrReplaceDefaultResponse
  | AccountsDeleteDefaultResponse
  | AccountsCreateOrUpdateNumbersDefaultResponse
  | AccountsDeleteNumbersDefaultResponse
  | AccountsListNumbersDefaultResponse
  | AccountsGetNumberDefaultResponse
  | AccountsCreateOrReplaceNumberDefaultResponse
  | AccountsDeleteNumberDefaultResponse
  | AccountsGetTeamsCapabilityPlansDefaultResponse
  | AccountsGetTeamsAvailableCapabilitiesDefaultResponse
  | AccountsListTeamsCivicAddressesDefaultResponse
  | AccountsGetTeamsCivicAddressDefaultResponse
  | TeamsRequestsForInformationListDefaultResponse
  | TeamsRequestsForInformationGetRequestForInformationDefaultResponse
  | TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse {
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
