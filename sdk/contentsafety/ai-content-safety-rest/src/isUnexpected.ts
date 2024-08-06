// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ImageOperationsAnalyzeImage200Response,
  ImageOperationsAnalyzeImageDefaultResponse,
  ImageOperationsDetectImageIncidents200Response,
  ImageOperationsDetectImageIncidentsDefaultResponse,
  ImageOperationsDetectContentCredential200Response,
  ImageOperationsDetectContentCredentialDefaultResponse,
  TextOperationsAnalyzeText200Response,
  TextOperationsAnalyzeTextDefaultResponse,
  TextOperationsShieldPrompt200Response,
  TextOperationsShieldPromptDefaultResponse,
  TextOperationsDetectTextProtectedMaterial200Response,
  TextOperationsDetectTextProtectedMaterialDefaultResponse,
  TextOperationsAnalyzeTextCustomCategory200Response,
  TextOperationsAnalyzeTextCustomCategoryDefaultResponse,
  TextOperationsAutoReview200Response,
  TextOperationsAutoReviewDefaultResponse,
  TextOperationsDetectTextIncidents200Response,
  TextOperationsDetectTextIncidentsDefaultResponse,
  TextOperationsDetectGroundednessOptions200Response,
  TextOperationsDetectGroundednessOptionsDefaultResponse,
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
  AutoReviewerOperationsCreateOrReplaceAutoReviewer200Response,
  AutoReviewerOperationsCreateOrReplaceAutoReviewer201Response,
  AutoReviewerOperationsCreateOrReplaceAutoReviewerLogicalResponse,
  AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse,
  AutoReviewerOperationsGetAutoReviewer200Response,
  AutoReviewerOperationsGetAutoReviewerDefaultResponse,
  AutoReviewerOperationsDeleteAutoReviewer204Response,
  AutoReviewerOperationsDeleteAutoReviewerDefaultResponse,
  AutoReviewerOperationsListAutoReviewers200Response,
  AutoReviewerOperationsListAutoReviewersDefaultResponse,
  AutoReviewerOperationsGetAutoReviewerOperation200Response,
  AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse,
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
  TextIncidentOperationDeploy202Response,
  TextIncidentOperationDeployLogicalResponse,
  TextIncidentOperationDeployDefaultResponse,
  TextIncidentOperationGetTextIncidentOperation200Response,
  TextIncidentOperationGetTextIncidentOperationDefaultResponse,
  ImageIncidentOperationDeploy202Response,
  ImageIncidentOperationDeployLogicalResponse,
  ImageIncidentOperationDeployDefaultResponse,
  ImageIncidentOperationGetImageIncidentOperation200Response,
  ImageIncidentOperationGetImageIncidentOperationDefaultResponse,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse,
  TextCustomizedCategoryOperationsGetCustomizedCategory200Response,
  TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response,
  TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsListCustomizedCategory200Response,
  TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsBuild202Response,
  TextCustomizedCategoryOperationsBuildLogicalResponse,
  TextCustomizedCategoryOperationsBuildDefaultResponse,
  TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response,
  TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /image:analyze": ["200"],
  "POST /image:detectIncidents": ["200"],
  "POST /image:detectContentCredential": ["200"],
  "POST /text:analyze": ["200"],
  "POST /text:shieldPrompt": ["200"],
  "POST /text:detectProtectedMaterial": ["200"],
  "POST /text:analyzeCustomCategory": ["200"],
  "POST /text:autoReview": ["200"],
  "POST /text:detectIncidents": ["200"],
  "POST /text:detectGroundedness": ["200"],
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
  "GET /text/autoReviewers/{autoReviewerName}": ["200"],
  "PUT /text/autoReviewers/{autoReviewerName}": ["200", "201"],
  "DELETE /text/autoReviewers/{autoReviewerName}": ["204"],
  "GET /text/autoReviewers": ["200"],
  "GET /text/autoReviewers/operations/{operationId}": ["200"],
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
  "GET /text/incidents/{incidentName}:deploy": ["200", "202"],
  "POST /text/incidents/{incidentName}:deploy": ["202"],
  "GET /text/incidents/operations/{operationId}": ["200"],
  "GET /image/incidents/{incidentName}:deploy": ["200", "202"],
  "POST /image/incidents/{incidentName}:deploy": ["202"],
  "GET /image/incidents/operations/{operationId}": ["200"],
  "PUT /text/categories/{categoryName}": ["200", "201"],
  "GET /text/categories/{categoryName}": ["200"],
  "DELETE /text/categories/{categoryName}": ["204"],
  "GET /text/categories": ["200"],
  "GET /text/categories/{categoryName}:build": ["200", "202"],
  "POST /text/categories/{categoryName}:build": ["202"],
  "GET /text/categories/operations/{operationId}": ["200"],
};

export function isUnexpected(
  response:
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse,
): response is ImageOperationsAnalyzeImageDefaultResponse;
export function isUnexpected(
  response:
    | ImageOperationsDetectImageIncidents200Response
    | ImageOperationsDetectImageIncidentsDefaultResponse,
): response is ImageOperationsDetectImageIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | ImageOperationsDetectContentCredential200Response
    | ImageOperationsDetectContentCredentialDefaultResponse,
): response is ImageOperationsDetectContentCredentialDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse,
): response is TextOperationsAnalyzeTextDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsShieldPrompt200Response
    | TextOperationsShieldPromptDefaultResponse,
): response is TextOperationsShieldPromptDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse,
): response is TextOperationsDetectTextProtectedMaterialDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsAnalyzeTextCustomCategory200Response
    | TextOperationsAnalyzeTextCustomCategoryDefaultResponse,
): response is TextOperationsAnalyzeTextCustomCategoryDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsAutoReview200Response
    | TextOperationsAutoReviewDefaultResponse,
): response is TextOperationsAutoReviewDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsDetectTextIncidents200Response
    | TextOperationsDetectTextIncidentsDefaultResponse,
): response is TextOperationsDetectTextIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsDetectGroundednessOptions200Response
    | TextOperationsDetectGroundednessOptionsDefaultResponse,
): response is TextOperationsDetectGroundednessOptionsDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsGetTextBlocklist200Response
    | TextBlocklistsGetTextBlocklistDefaultResponse,
): response is TextBlocklistsGetTextBlocklistDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsCreateOrUpdateTextBlocklist200Response
    | TextBlocklistsCreateOrUpdateTextBlocklist201Response
    | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse,
): response is TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsDeleteTextBlocklist204Response
    | TextBlocklistsDeleteTextBlocklistDefaultResponse,
): response is TextBlocklistsDeleteTextBlocklistDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsListTextBlocklists200Response
    | TextBlocklistsListTextBlocklistsDefaultResponse,
): response is TextBlocklistsListTextBlocklistsDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsAddOrUpdateBlocklistItems200Response
    | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse,
): response is TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsRemoveBlocklistItems204Response
    | TextBlocklistsRemoveBlocklistItemsDefaultResponse,
): response is TextBlocklistsRemoveBlocklistItemsDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsGetTextBlocklistItem200Response
    | TextBlocklistsGetTextBlocklistItemDefaultResponse,
): response is TextBlocklistsGetTextBlocklistItemDefaultResponse;
export function isUnexpected(
  response:
    | TextBlocklistsListTextBlocklistItems200Response
    | TextBlocklistsListTextBlocklistItemsDefaultResponse,
): response is TextBlocklistsListTextBlocklistItemsDefaultResponse;
export function isUnexpected(
  response:
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer200Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer201Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewerLogicalResponse
    | AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse,
): response is AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse;
export function isUnexpected(
  response:
    | AutoReviewerOperationsGetAutoReviewer200Response
    | AutoReviewerOperationsGetAutoReviewerDefaultResponse,
): response is AutoReviewerOperationsGetAutoReviewerDefaultResponse;
export function isUnexpected(
  response:
    | AutoReviewerOperationsDeleteAutoReviewer204Response
    | AutoReviewerOperationsDeleteAutoReviewerDefaultResponse,
): response is AutoReviewerOperationsDeleteAutoReviewerDefaultResponse;
export function isUnexpected(
  response:
    | AutoReviewerOperationsListAutoReviewers200Response
    | AutoReviewerOperationsListAutoReviewersDefaultResponse,
): response is AutoReviewerOperationsListAutoReviewersDefaultResponse;
export function isUnexpected(
  response:
    | AutoReviewerOperationsGetAutoReviewerOperation200Response
    | AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse,
): response is AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsGetIncidents200Response
    | TextIncidentsGetIncidentsDefaultResponse,
): response is TextIncidentsGetIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsCreateOrUpdateIncident200Response
    | TextIncidentsCreateOrUpdateIncident201Response
    | TextIncidentsCreateOrUpdateIncidentDefaultResponse,
): response is TextIncidentsCreateOrUpdateIncidentDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsDeleteIncident204Response
    | TextIncidentsDeleteIncidentDefaultResponse,
): response is TextIncidentsDeleteIncidentDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsListIncidents200Response
    | TextIncidentsListIncidentsDefaultResponse,
): response is TextIncidentsListIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsAddIncidentSamples200Response
    | TextIncidentsAddIncidentSamplesDefaultResponse,
): response is TextIncidentsAddIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsRemoveIncidentSamples204Response
    | TextIncidentsRemoveIncidentSamplesDefaultResponse,
): response is TextIncidentsRemoveIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsGetIncidentSample200Response
    | TextIncidentsGetIncidentSampleDefaultResponse,
): response is TextIncidentsGetIncidentSampleDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentsListIncidentSamples200Response
    | TextIncidentsListIncidentSamplesDefaultResponse,
): response is TextIncidentsListIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsGetIncidents200Response
    | ImageIncidentsGetIncidentsDefaultResponse,
): response is ImageIncidentsGetIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsCreateOrUpdateIncident200Response
    | ImageIncidentsCreateOrUpdateIncident201Response
    | ImageIncidentsCreateOrUpdateIncidentDefaultResponse,
): response is ImageIncidentsCreateOrUpdateIncidentDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsDeleteIncident204Response
    | ImageIncidentsDeleteIncidentDefaultResponse,
): response is ImageIncidentsDeleteIncidentDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsListIncidents200Response
    | ImageIncidentsListIncidentsDefaultResponse,
): response is ImageIncidentsListIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsAddIncidentSamples200Response
    | ImageIncidentsAddIncidentSamplesDefaultResponse,
): response is ImageIncidentsAddIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsRemoveIncidentSamples204Response
    | ImageIncidentsRemoveIncidentSamplesDefaultResponse,
): response is ImageIncidentsRemoveIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsGetIncidentSample200Response
    | ImageIncidentsGetIncidentSampleDefaultResponse,
): response is ImageIncidentsGetIncidentSampleDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentsListIncidentSamples200Response
    | ImageIncidentsListIncidentSamplesDefaultResponse,
): response is ImageIncidentsListIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationDeploy202Response
    | TextIncidentOperationDeployLogicalResponse
    | TextIncidentOperationDeployDefaultResponse,
): response is TextIncidentOperationDeployDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationGetTextIncidentOperation200Response
    | TextIncidentOperationGetTextIncidentOperationDefaultResponse,
): response is TextIncidentOperationGetTextIncidentOperationDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationDeploy202Response
    | ImageIncidentOperationDeployLogicalResponse
    | ImageIncidentOperationDeployDefaultResponse,
): response is ImageIncidentOperationDeployDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationGetImageIncidentOperation200Response
    | ImageIncidentOperationGetImageIncidentOperationDefaultResponse,
): response is ImageIncidentOperationGetImageIncidentOperationDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse,
): response is TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsGetCustomizedCategory200Response
    | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse,
): response is TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response
    | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse,
): response is TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsListCustomizedCategory200Response
    | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse,
): response is TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsBuild202Response
    | TextCustomizedCategoryOperationsBuildLogicalResponse
    | TextCustomizedCategoryOperationsBuildDefaultResponse,
): response is TextCustomizedCategoryOperationsBuildDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response
    | TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse,
): response is TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse;
export function isUnexpected(
  response:
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse
    | ImageOperationsDetectImageIncidents200Response
    | ImageOperationsDetectImageIncidentsDefaultResponse
    | ImageOperationsDetectContentCredential200Response
    | ImageOperationsDetectContentCredentialDefaultResponse
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse
    | TextOperationsShieldPrompt200Response
    | TextOperationsShieldPromptDefaultResponse
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse
    | TextOperationsAnalyzeTextCustomCategory200Response
    | TextOperationsAnalyzeTextCustomCategoryDefaultResponse
    | TextOperationsAutoReview200Response
    | TextOperationsAutoReviewDefaultResponse
    | TextOperationsDetectTextIncidents200Response
    | TextOperationsDetectTextIncidentsDefaultResponse
    | TextOperationsDetectGroundednessOptions200Response
    | TextOperationsDetectGroundednessOptionsDefaultResponse
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
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer200Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer201Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewerLogicalResponse
    | AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse
    | AutoReviewerOperationsGetAutoReviewer200Response
    | AutoReviewerOperationsGetAutoReviewerDefaultResponse
    | AutoReviewerOperationsDeleteAutoReviewer204Response
    | AutoReviewerOperationsDeleteAutoReviewerDefaultResponse
    | AutoReviewerOperationsListAutoReviewers200Response
    | AutoReviewerOperationsListAutoReviewersDefaultResponse
    | AutoReviewerOperationsGetAutoReviewerOperation200Response
    | AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse
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
    | TextIncidentOperationDeploy202Response
    | TextIncidentOperationDeployLogicalResponse
    | TextIncidentOperationDeployDefaultResponse
    | TextIncidentOperationGetTextIncidentOperation200Response
    | TextIncidentOperationGetTextIncidentOperationDefaultResponse
    | ImageIncidentOperationDeploy202Response
    | ImageIncidentOperationDeployLogicalResponse
    | ImageIncidentOperationDeployDefaultResponse
    | ImageIncidentOperationGetImageIncidentOperation200Response
    | ImageIncidentOperationGetImageIncidentOperationDefaultResponse
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse
    | TextCustomizedCategoryOperationsGetCustomizedCategory200Response
    | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse
    | TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response
    | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse
    | TextCustomizedCategoryOperationsListCustomizedCategory200Response
    | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse
    | TextCustomizedCategoryOperationsBuild202Response
    | TextCustomizedCategoryOperationsBuildLogicalResponse
    | TextCustomizedCategoryOperationsBuildDefaultResponse
    | TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response
    | TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse,
): response is
  | ImageOperationsAnalyzeImageDefaultResponse
  | ImageOperationsDetectImageIncidentsDefaultResponse
  | ImageOperationsDetectContentCredentialDefaultResponse
  | TextOperationsAnalyzeTextDefaultResponse
  | TextOperationsShieldPromptDefaultResponse
  | TextOperationsDetectTextProtectedMaterialDefaultResponse
  | TextOperationsAnalyzeTextCustomCategoryDefaultResponse
  | TextOperationsAutoReviewDefaultResponse
  | TextOperationsDetectTextIncidentsDefaultResponse
  | TextOperationsDetectGroundednessOptionsDefaultResponse
  | TextBlocklistsGetTextBlocklistDefaultResponse
  | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
  | TextBlocklistsDeleteTextBlocklistDefaultResponse
  | TextBlocklistsListTextBlocklistsDefaultResponse
  | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
  | TextBlocklistsRemoveBlocklistItemsDefaultResponse
  | TextBlocklistsGetTextBlocklistItemDefaultResponse
  | TextBlocklistsListTextBlocklistItemsDefaultResponse
  | AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse
  | AutoReviewerOperationsGetAutoReviewerDefaultResponse
  | AutoReviewerOperationsDeleteAutoReviewerDefaultResponse
  | AutoReviewerOperationsListAutoReviewersDefaultResponse
  | AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse
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
  | TextIncidentOperationDeployDefaultResponse
  | TextIncidentOperationGetTextIncidentOperationDefaultResponse
  | ImageIncidentOperationDeployDefaultResponse
  | ImageIncidentOperationGetImageIncidentOperationDefaultResponse
  | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse
  | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse
  | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse
  | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse
  | TextCustomizedCategoryOperationsBuildDefaultResponse
  | TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse {
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
