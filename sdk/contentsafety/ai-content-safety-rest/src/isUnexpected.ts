// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TextOperationsAnalyzeText200Response,
  TextOperationsAnalyzeTextDefaultResponse,
  TextOperationsDetectTextJailbreak200Response,
  TextOperationsDetectTextJailbreakDefaultResponse,
  TextOperationsDetectTextProtectedMaterial200Response,
  TextOperationsDetectTextProtectedMaterialDefaultResponse,
  ImageOperationsAnalyzeImage200Response,
  ImageOperationsAnalyzeImageDefaultResponse,
  TextBlocklistsGetTextBlocklist200Response,
  TextBlocklistsGetTextBlocklistDefaultResponse,
  TextBlocklistsCreateOrUpdateTextBlocklist200Response,
  TextBlocklistsCreateOrUpdateTextBlocklist201Response,
  TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse,
  TextBlocklistsDeleteTextBlocklist204Response,
  TextBlocklistsDeleteTextBlocklistDefaultResponse,
  TextBlocklistsListTextBlocklists200Response,
  TextBlocklistsListTextBlocklistsDefaultResponse,
  TextBlocklistsAddOrUpdateBlocklistItems200Response,
  TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse,
  TextBlocklistsRemoveBlocklistItems204Response,
  TextBlocklistsRemoveBlocklistItemsDefaultResponse,
  TextBlocklistsGetTextBlocklistItem200Response,
  TextBlocklistsGetTextBlocklistItemDefaultResponse,
  TextBlocklistsListTextBlocklistItems200Response,
  TextBlocklistsListTextBlocklistItemsDefaultResponse,
  TextIncidentsGetIncidents200Response,
  TextIncidentsGetIncidentsDefaultResponse,
  TextIncidentsCreateOrUpdateIncident200Response,
  TextIncidentsCreateOrUpdateIncident201Response,
  TextIncidentsCreateOrUpdateIncidentDefaultResponse,
  TextIncidentsDeleteIncident204Response,
  TextIncidentsDeleteIncidentDefaultResponse,
  TextIncidentsListIncidents200Response,
  TextIncidentsListIncidentsDefaultResponse,
  TextIncidentsAddIncidentSamples200Response,
  TextIncidentsAddIncidentSamplesDefaultResponse,
  TextIncidentsRemoveIncidentSamples204Response,
  TextIncidentsRemoveIncidentSamplesDefaultResponse,
  TextIncidentsGetIncidentSample200Response,
  TextIncidentsGetIncidentSampleDefaultResponse,
  TextIncidentsListIncidentSamples200Response,
  TextIncidentsListIncidentSamplesDefaultResponse,
  ImageIncidentsGetIncidents200Response,
  ImageIncidentsGetIncidentsDefaultResponse,
  ImageIncidentsCreateOrUpdateIncident200Response,
  ImageIncidentsCreateOrUpdateIncident201Response,
  ImageIncidentsCreateOrUpdateIncidentDefaultResponse,
  ImageIncidentsDeleteIncident204Response,
  ImageIncidentsDeleteIncidentDefaultResponse,
  ImageIncidentsListIncidents200Response,
  ImageIncidentsListIncidentsDefaultResponse,
  ImageIncidentsAddIncidentSamples200Response,
  ImageIncidentsAddIncidentSamplesDefaultResponse,
  ImageIncidentsRemoveIncidentSamples204Response,
  ImageIncidentsRemoveIncidentSamplesDefaultResponse,
  ImageIncidentsGetIncidentSample200Response,
  ImageIncidentsGetIncidentSampleDefaultResponse,
  ImageIncidentsListIncidentSamples200Response,
  ImageIncidentsListIncidentSamplesDefaultResponse,
  PromptTextOperationsAnnotateText200Response,
  PromptTextOperationsAnnotateTextDefaultResponse,
  TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory200Response,
  TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory201Response,
  TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultResponse,
  TextCategoryCustomizationGetTextCustomizedCategory200Response,
  TextCategoryCustomizationGetTextCustomizedCategoryDefaultResponse,
  TextCategoryCustomizationDeleteTextCustomizedCategory204Response,
  TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultResponse,
  TextCategoryCustomizationListTextCustomizedCategory200Response,
  TextCategoryCustomizationListTextCustomizedCategoryDefaultResponse,
  ImageWithTextOperationsAnalyzeImageWithText200Response,
  ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse,
  TextUngroundednessDetectionOperationsDetectUngroundedness200Response,
  TextUngroundednessDetectionOperationsDetectUngroundednessDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /text:analyze": ["200"],
  "POST /text:detectJailbreak": ["200"],
  "POST /text:detectProtectedMaterial": ["200"],
  "POST /image:analyze": ["200"],
  "GET /text/blocklists/{blocklistName}": ["200"],
  "PATCH /text/blocklists/{blocklistName}": ["200", "201"],
  "DELETE /text/blocklists/{blocklistName}": ["204"],
  "GET /text/blocklists": ["200"],
  "POST /text/blocklists/{blocklistName}:addOrUpdateBlocklistItems": ["200"],
  "POST /text/blocklists/{blocklistName}:removeBlocklistItems": ["204"],
  "GET /text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}": [
    "200",
  ],
  "GET /text/blocklists/{blocklistName}/blocklistItems": ["200"],
  "GET /text/incidents/{incidentName}": ["200"],
  "PATCH /text/incidents/{incidentName}": ["200", "201"],
  "DELETE /text/incidents/{incidentName}": ["204"],
  "GET /text/incidents": ["200"],
  "POST /text/incidents/{incidentName}:addIncidentSamples": ["200"],
  "POST /text/incidents/{incidentName}:removeIncidentSamples": ["204"],
  "GET /text/incidents/{incidentName}/incidentSamples/{incidentSampleId}": [
    "200",
  ],
  "GET /text/incidents/{incidentName}/incidentSamples": ["200"],
  "GET /image/incidents/{incidentName}": ["200"],
  "PATCH /image/incidents/{incidentName}": ["200", "201"],
  "DELETE /image/incidents/{incidentName}": ["204"],
  "GET /image/incidents": ["200"],
  "POST /image/incidents/{incidentName}:addIncidentSamples": ["200"],
  "POST /image/incidents/{incidentName}:removeIncidentSamples": ["204"],
  "GET /image/incidents/{incidentName}/incidentSamples/{incidentSampleId}": [
    "200",
  ],
  "GET /image/incidents/{incidentName}/incidentSamples": ["200"],
  "POST /text:adaptiveAnnotate": ["200"],
  "PUT /text/categories/{categoryName}": ["200", "201"],
  "GET /text/categories/{categoryName}": ["200"],
  "DELETE /text/categories/{categoryName}": ["204"],
  "GET /text/categories": ["200"],
  "POST /imageWithText:analyze": ["200"],
  "POST /text:detectUngroundedness": ["200"],
};

export function isUnexpected(
  response:
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse
): response is TextOperationsAnalyzeTextDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsDetectTextJailbreak200Response
    | TextOperationsDetectTextJailbreakDefaultResponse
): response is TextOperationsDetectTextJailbreakDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse
): response is TextOperationsDetectTextProtectedMaterialDefaultResponse;
export function isUnexpected(
  response:
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse
): response is ImageOperationsAnalyzeImageDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsGetTextBlocklist200Response
    | TextBlocklistsGetTextBlocklistDefaultResponse
): response is TextBlocklistsGetTextBlocklistDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsCreateOrUpdateTextBlocklist200Response
    | TextBlocklistsCreateOrUpdateTextBlocklist201Response
    | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
): response is TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsDeleteTextBlocklist204Response
    | TextBlocklistsDeleteTextBlocklistDefaultResponse
): response is TextBlocklistsDeleteTextBlocklistDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsListTextBlocklists200Response
    | TextBlocklistsListTextBlocklistsDefaultResponse
): response is TextBlocklistsListTextBlocklistsDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsAddOrUpdateBlocklistItems200Response
    | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
): response is TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsRemoveBlocklistItems204Response
    | TextBlocklistsRemoveBlocklistItemsDefaultResponse
): response is TextBlocklistsRemoveBlocklistItemsDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsGetTextBlocklistItem200Response
    | TextBlocklistsGetTextBlocklistItemDefaultResponse
): response is TextBlocklistsGetTextBlocklistItemDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsListTextBlocklistItems200Response
    | TextBlocklistsListTextBlocklistItemsDefaultResponse
): response is TextBlocklistsListTextBlocklistItemsDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsGetIncidents200Response
    | TextIncidentsGetIncidentsDefaultResponse
): response is TextIncidentsGetIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsCreateOrUpdateIncident200Response
    | TextIncidentsCreateOrUpdateIncident201Response
    | TextIncidentsCreateOrUpdateIncidentDefaultResponse
): response is TextIncidentsCreateOrUpdateIncidentDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsDeleteIncident204Response
    | TextIncidentsDeleteIncidentDefaultResponse
): response is TextIncidentsDeleteIncidentDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsListIncidents200Response
    | TextIncidentsListIncidentsDefaultResponse
): response is TextIncidentsListIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsAddIncidentSamples200Response
    | TextIncidentsAddIncidentSamplesDefaultResponse
): response is TextIncidentsAddIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsRemoveIncidentSamples204Response
    | TextIncidentsRemoveIncidentSamplesDefaultResponse
): response is TextIncidentsRemoveIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsGetIncidentSample200Response
    | TextIncidentsGetIncidentSampleDefaultResponse
): response is TextIncidentsGetIncidentSampleDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsListIncidentSamples200Response
    | TextIncidentsListIncidentSamplesDefaultResponse
): response is TextIncidentsListIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsGetIncidents200Response
    | ImageIncidentsGetIncidentsDefaultResponse
): response is ImageIncidentsGetIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsCreateOrUpdateIncident200Response
    | ImageIncidentsCreateOrUpdateIncident201Response
    | ImageIncidentsCreateOrUpdateIncidentDefaultResponse
): response is ImageIncidentsCreateOrUpdateIncidentDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsDeleteIncident204Response
    | ImageIncidentsDeleteIncidentDefaultResponse
): response is ImageIncidentsDeleteIncidentDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsListIncidents200Response
    | ImageIncidentsListIncidentsDefaultResponse
): response is ImageIncidentsListIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsAddIncidentSamples200Response
    | ImageIncidentsAddIncidentSamplesDefaultResponse
): response is ImageIncidentsAddIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsRemoveIncidentSamples204Response
    | ImageIncidentsRemoveIncidentSamplesDefaultResponse
): response is ImageIncidentsRemoveIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsGetIncidentSample200Response
    | ImageIncidentsGetIncidentSampleDefaultResponse
): response is ImageIncidentsGetIncidentSampleDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsListIncidentSamples200Response
    | ImageIncidentsListIncidentSamplesDefaultResponse
): response is ImageIncidentsListIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | PromptTextOperationsAnnotateText200Response
    | PromptTextOperationsAnnotateTextDefaultResponse
): response is PromptTextOperationsAnnotateTextDefaultResponse;
export function isUnexpected(
  response:
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory200Response
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory201Response
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultResponse
): response is TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultResponse;
export function isUnexpected(
  response:
    | TextCategoryCustomizationGetTextCustomizedCategory200Response
    | TextCategoryCustomizationGetTextCustomizedCategoryDefaultResponse
): response is TextCategoryCustomizationGetTextCustomizedCategoryDefaultResponse;
export function isUnexpected(
  response:
    | TextCategoryCustomizationDeleteTextCustomizedCategory204Response
    | TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultResponse
): response is TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultResponse;
export function isUnexpected(
  response:
    | TextCategoryCustomizationListTextCustomizedCategory200Response
    | TextCategoryCustomizationListTextCustomizedCategoryDefaultResponse
): response is TextCategoryCustomizationListTextCustomizedCategoryDefaultResponse;
export function isUnexpected(
  response:
    | ImageWithTextOperationsAnalyzeImageWithText200Response
    | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
): response is ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse;
export function isUnexpected(
  response:
    | TextUngroundednessDetectionOperationsDetectUngroundedness200Response
    | TextUngroundednessDetectionOperationsDetectUngroundednessDefaultResponse
): response is TextUngroundednessDetectionOperationsDetectUngroundednessDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse
    | TextOperationsDetectTextJailbreak200Response
    | TextOperationsDetectTextJailbreakDefaultResponse
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse
    | TextBlocklistsGetTextBlocklist200Response
    | TextBlocklistsGetTextBlocklistDefaultResponse
    | TextBlocklistsCreateOrUpdateTextBlocklist200Response
    | TextBlocklistsCreateOrUpdateTextBlocklist201Response
    | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
    | TextBlocklistsDeleteTextBlocklist204Response
    | TextBlocklistsDeleteTextBlocklistDefaultResponse
    | TextBlocklistsListTextBlocklists200Response
    | TextBlocklistsListTextBlocklistsDefaultResponse
    | TextBlocklistsAddOrUpdateBlocklistItems200Response
    | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
    | TextBlocklistsRemoveBlocklistItems204Response
    | TextBlocklistsRemoveBlocklistItemsDefaultResponse
    | TextBlocklistsGetTextBlocklistItem200Response
    | TextBlocklistsGetTextBlocklistItemDefaultResponse
    | TextBlocklistsListTextBlocklistItems200Response
    | TextBlocklistsListTextBlocklistItemsDefaultResponse
    | TextIncidentsGetIncidents200Response
    | TextIncidentsGetIncidentsDefaultResponse
    | TextIncidentsCreateOrUpdateIncident200Response
    | TextIncidentsCreateOrUpdateIncident201Response
    | TextIncidentsCreateOrUpdateIncidentDefaultResponse
    | TextIncidentsDeleteIncident204Response
    | TextIncidentsDeleteIncidentDefaultResponse
    | TextIncidentsListIncidents200Response
    | TextIncidentsListIncidentsDefaultResponse
    | TextIncidentsAddIncidentSamples200Response
    | TextIncidentsAddIncidentSamplesDefaultResponse
    | TextIncidentsRemoveIncidentSamples204Response
    | TextIncidentsRemoveIncidentSamplesDefaultResponse
    | TextIncidentsGetIncidentSample200Response
    | TextIncidentsGetIncidentSampleDefaultResponse
    | TextIncidentsListIncidentSamples200Response
    | TextIncidentsListIncidentSamplesDefaultResponse
    | ImageIncidentsGetIncidents200Response
    | ImageIncidentsGetIncidentsDefaultResponse
    | ImageIncidentsCreateOrUpdateIncident200Response
    | ImageIncidentsCreateOrUpdateIncident201Response
    | ImageIncidentsCreateOrUpdateIncidentDefaultResponse
    | ImageIncidentsDeleteIncident204Response
    | ImageIncidentsDeleteIncidentDefaultResponse
    | ImageIncidentsListIncidents200Response
    | ImageIncidentsListIncidentsDefaultResponse
    | ImageIncidentsAddIncidentSamples200Response
    | ImageIncidentsAddIncidentSamplesDefaultResponse
    | ImageIncidentsRemoveIncidentSamples204Response
    | ImageIncidentsRemoveIncidentSamplesDefaultResponse
    | ImageIncidentsGetIncidentSample200Response
    | ImageIncidentsGetIncidentSampleDefaultResponse
    | ImageIncidentsListIncidentSamples200Response
    | ImageIncidentsListIncidentSamplesDefaultResponse
    | PromptTextOperationsAnnotateText200Response
    | PromptTextOperationsAnnotateTextDefaultResponse
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory200Response
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory201Response
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultResponse
    | TextCategoryCustomizationGetTextCustomizedCategory200Response
    | TextCategoryCustomizationGetTextCustomizedCategoryDefaultResponse
    | TextCategoryCustomizationDeleteTextCustomizedCategory204Response
    | TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultResponse
    | TextCategoryCustomizationListTextCustomizedCategory200Response
    | TextCategoryCustomizationListTextCustomizedCategoryDefaultResponse
    | ImageWithTextOperationsAnalyzeImageWithText200Response
    | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
    | TextUngroundednessDetectionOperationsDetectUngroundedness200Response
    | TextUngroundednessDetectionOperationsDetectUngroundednessDefaultResponse
): response is
  | TextOperationsAnalyzeTextDefaultResponse
  | TextOperationsDetectTextJailbreakDefaultResponse
  | TextOperationsDetectTextProtectedMaterialDefaultResponse
  | ImageOperationsAnalyzeImageDefaultResponse
  | TextBlocklistsGetTextBlocklistDefaultResponse
  | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
  | TextBlocklistsDeleteTextBlocklistDefaultResponse
  | TextBlocklistsListTextBlocklistsDefaultResponse
  | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
  | TextBlocklistsRemoveBlocklistItemsDefaultResponse
  | TextBlocklistsGetTextBlocklistItemDefaultResponse
  | TextBlocklistsListTextBlocklistItemsDefaultResponse
  | TextIncidentsGetIncidentsDefaultResponse
  | TextIncidentsCreateOrUpdateIncidentDefaultResponse
  | TextIncidentsDeleteIncidentDefaultResponse
  | TextIncidentsListIncidentsDefaultResponse
  | TextIncidentsAddIncidentSamplesDefaultResponse
  | TextIncidentsRemoveIncidentSamplesDefaultResponse
  | TextIncidentsGetIncidentSampleDefaultResponse
  | TextIncidentsListIncidentSamplesDefaultResponse
  | ImageIncidentsGetIncidentsDefaultResponse
  | ImageIncidentsCreateOrUpdateIncidentDefaultResponse
  | ImageIncidentsDeleteIncidentDefaultResponse
  | ImageIncidentsListIncidentsDefaultResponse
  | ImageIncidentsAddIncidentSamplesDefaultResponse
  | ImageIncidentsRemoveIncidentSamplesDefaultResponse
  | ImageIncidentsGetIncidentSampleDefaultResponse
  | ImageIncidentsListIncidentSamplesDefaultResponse
  | PromptTextOperationsAnnotateTextDefaultResponse
  | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultResponse
  | TextCategoryCustomizationGetTextCustomizedCategoryDefaultResponse
  | TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultResponse
  | TextCategoryCustomizationListTextCustomizedCategoryDefaultResponse
  | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
  | TextUngroundednessDetectionOperationsDetectUngroundednessDefaultResponse {
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
