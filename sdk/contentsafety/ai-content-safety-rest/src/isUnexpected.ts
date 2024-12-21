// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImageOperationsAnalyzeImage200Response,
  ImageOperationsAnalyzeImageDefaultResponse,
  ImageOperationsDetectImageIncidents200Response,
  ImageOperationsDetectImageIncidentsDefaultResponse,
  ImageOperationsDetectImageProtectedMaterial200Response,
  ImageOperationsDetectImageProtectedMaterialDefaultResponse,
  TextOperationsAnalyzeText200Response,
  TextOperationsAnalyzeTextDefaultResponse,
  TextOperationsShieldPrompt200Response,
  TextOperationsShieldPromptDefaultResponse,
  TextOperationsDetectTextProtectedMaterial200Response,
  TextOperationsDetectTextProtectedMaterialDefaultResponse,
  TextOperationsDetectCodeProtectedMaterial200Response,
  TextOperationsDetectCodeProtectedMaterialDefaultResponse,
  TextOperationsAnalyzeTextCustomCategory200Response,
  TextOperationsAnalyzeTextCustomCategoryDefaultResponse,
  TextOperationsDetectTextIncidents200Response,
  TextOperationsDetectTextIncidentsDefaultResponse,
  TextOperationsDetectGroundednessOptions200Response,
  TextOperationsDetectGroundednessOptionsDefaultResponse,
  RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response,
  RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse,
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
  RaiPolicyManagementCreateOrUpdateRaiPolicy200Response,
  RaiPolicyManagementCreateOrUpdateRaiPolicy201Response,
  RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse,
  RaiPolicyManagementDeleteRaiPolicy204Response,
  RaiPolicyManagementDeleteRaiPolicyDefaultResponse,
  RaiPolicyManagementGetRaiPolicy200Response,
  RaiPolicyManagementGetRaiPolicyDefaultResponse,
  RaiPolicyManagementListRaiPolicies200Response,
  RaiPolicyManagementListRaiPoliciesDefaultResponse,
  ImageWithTextOperationsAnalyzeImageWithText200Response,
  ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse,
  TextIncidentOperationsDeploy202Response,
  TextIncidentOperationsDeployLogicalResponse,
  TextIncidentOperationsDeployDefaultResponse,
  TextIncidentOperationsGetLongRunningOperation200Response,
  TextIncidentOperationsGetLongRunningOperationDefaultResponse,
  TextIncidentOperationsGetIncidents200Response,
  TextIncidentOperationsGetIncidentsDefaultResponse,
  TextIncidentOperationsCreateOrUpdateIncident200Response,
  TextIncidentOperationsCreateOrUpdateIncident201Response,
  TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse,
  TextIncidentOperationsDeleteIncident204Response,
  TextIncidentOperationsDeleteIncidentDefaultResponse,
  TextIncidentOperationsListIncidents200Response,
  TextIncidentOperationsListIncidentsDefaultResponse,
  TextIncidentOperationsAddIncidentSamples200Response,
  TextIncidentOperationsAddIncidentSamplesDefaultResponse,
  TextIncidentOperationsRemoveIncidentSamples204Response,
  TextIncidentOperationsRemoveIncidentSamplesDefaultResponse,
  TextIncidentOperationsGetIncidentSample200Response,
  TextIncidentOperationsGetIncidentSampleDefaultResponse,
  TextIncidentOperationsListIncidentSamples200Response,
  TextIncidentOperationsListIncidentSamplesDefaultResponse,
  ImageIncidentOperationsDeploy202Response,
  ImageIncidentOperationsDeployLogicalResponse,
  ImageIncidentOperationsDeployDefaultResponse,
  ImageIncidentOperationsGetLongRunningOperation200Response,
  ImageIncidentOperationsGetLongRunningOperationDefaultResponse,
  ImageIncidentOperationsGetIncidents200Response,
  ImageIncidentOperationsGetIncidentsDefaultResponse,
  ImageIncidentOperationsCreateOrUpdateIncident200Response,
  ImageIncidentOperationsCreateOrUpdateIncident201Response,
  ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse,
  ImageIncidentOperationsDeleteIncident204Response,
  ImageIncidentOperationsDeleteIncidentDefaultResponse,
  ImageIncidentOperationsListIncidents200Response,
  ImageIncidentOperationsListIncidentsDefaultResponse,
  ImageIncidentOperationsAddIncidentSamples200Response,
  ImageIncidentOperationsAddIncidentSamplesDefaultResponse,
  ImageIncidentOperationsRemoveIncidentSamples204Response,
  ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse,
  ImageIncidentOperationsGetIncidentSample200Response,
  ImageIncidentOperationsGetIncidentSampleDefaultResponse,
  ImageIncidentOperationsListIncidentSamples200Response,
  ImageIncidentOperationsListIncidentSamplesDefaultResponse,
  TextCustomizedCategoryOperationsBuild202Response,
  TextCustomizedCategoryOperationsBuildLogicalResponse,
  TextCustomizedCategoryOperationsBuildDefaultResponse,
  TextCustomizedCategoryOperationsGetLongRunningOperation200Response,
  TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse,
  TextCustomizedCategoryOperationsGetCustomizedCategory200Response,
  TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response,
  TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsListCustomizedCategory200Response,
  TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /image:analyze": ["200"],
  "POST /image:detectIncidents": ["200"],
  "POST /image:detectProtectedMaterial": ["200"],
  "POST /text:analyze": ["200"],
  "POST /text:shieldPrompt": ["200"],
  "POST /text:detectProtectedMaterial": ["200"],
  "POST /text:detectProtectedMaterialForCode": ["200"],
  "POST /text:analyzeCustomCategory": ["200"],
  "POST /text:detectIncidents": ["200"],
  "POST /text:detectGroundedness": ["200"],
  "POST /analyzeWithRaiPolicy": ["200"],
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
  "PATCH /raiPolicies/{raiPolicyName}": ["200", "201"],
  "DELETE /raiPolicies/{raiPolicyName}": ["204"],
  "GET /raiPolicies/{raiPolicyName}": ["200"],
  "GET /raiPolicies": ["200"],
  "POST /imageWithText:analyze": ["200"],
  "GET /text/incidents/{incidentName}:deploy": ["200", "202"],
  "POST /text/incidents/{incidentName}:deploy": ["202"],
  "GET /text/incidents/operations/{operationId}": ["200"],
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
  "GET /image/incidents/{incidentName}:deploy": ["200", "202"],
  "POST /image/incidents/{incidentName}:deploy": ["202"],
  "GET /image/incidents/operations/{operationId}": ["200"],
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
  "GET /text/categories/{categoryName}:build": ["200", "202"],
  "POST /text/categories/{categoryName}:build": ["202"],
  "GET /text/categories/operations/{operationId}": ["200"],
  "PUT /text/categories/{categoryName}": ["200", "201"],
  "GET /text/categories/{categoryName}": ["200"],
  "DELETE /text/categories/{categoryName}": ["204"],
  "GET /text/categories": ["200"],
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
    | ImageOperationsDetectImageProtectedMaterial200Response
    | ImageOperationsDetectImageProtectedMaterialDefaultResponse,
): response is ImageOperationsDetectImageProtectedMaterialDefaultResponse;
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
    | TextOperationsDetectCodeProtectedMaterial200Response
    | TextOperationsDetectCodeProtectedMaterialDefaultResponse,
): response is TextOperationsDetectCodeProtectedMaterialDefaultResponse;
export function isUnexpected(
  response:
    | TextOperationsAnalyzeTextCustomCategory200Response
    | TextOperationsAnalyzeTextCustomCategoryDefaultResponse,
): response is TextOperationsAnalyzeTextCustomCategoryDefaultResponse;
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
    | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response
    | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse,
): response is RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse;
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
    | RaiPolicyManagementCreateOrUpdateRaiPolicy200Response
    | RaiPolicyManagementCreateOrUpdateRaiPolicy201Response
    | RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse,
): response is RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse;
export function isUnexpected(
  response:
    | RaiPolicyManagementDeleteRaiPolicy204Response
    | RaiPolicyManagementDeleteRaiPolicyDefaultResponse,
): response is RaiPolicyManagementDeleteRaiPolicyDefaultResponse;
export function isUnexpected(
  response:
    | RaiPolicyManagementGetRaiPolicy200Response
    | RaiPolicyManagementGetRaiPolicyDefaultResponse,
): response is RaiPolicyManagementGetRaiPolicyDefaultResponse;
export function isUnexpected(
  response:
    | RaiPolicyManagementListRaiPolicies200Response
    | RaiPolicyManagementListRaiPoliciesDefaultResponse,
): response is RaiPolicyManagementListRaiPoliciesDefaultResponse;
export function isUnexpected(
  response:
    | ImageWithTextOperationsAnalyzeImageWithText200Response
    | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse,
): response is ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsDeploy202Response
    | TextIncidentOperationsDeployLogicalResponse
    | TextIncidentOperationsDeployDefaultResponse,
): response is TextIncidentOperationsDeployDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsGetLongRunningOperation200Response
    | TextIncidentOperationsGetLongRunningOperationDefaultResponse,
): response is TextIncidentOperationsGetLongRunningOperationDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsGetIncidents200Response
    | TextIncidentOperationsGetIncidentsDefaultResponse,
): response is TextIncidentOperationsGetIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsCreateOrUpdateIncident200Response
    | TextIncidentOperationsCreateOrUpdateIncident201Response
    | TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse,
): response is TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsDeleteIncident204Response
    | TextIncidentOperationsDeleteIncidentDefaultResponse,
): response is TextIncidentOperationsDeleteIncidentDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsListIncidents200Response
    | TextIncidentOperationsListIncidentsDefaultResponse,
): response is TextIncidentOperationsListIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsAddIncidentSamples200Response
    | TextIncidentOperationsAddIncidentSamplesDefaultResponse,
): response is TextIncidentOperationsAddIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsRemoveIncidentSamples204Response
    | TextIncidentOperationsRemoveIncidentSamplesDefaultResponse,
): response is TextIncidentOperationsRemoveIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsGetIncidentSample200Response
    | TextIncidentOperationsGetIncidentSampleDefaultResponse,
): response is TextIncidentOperationsGetIncidentSampleDefaultResponse;
export function isUnexpected(
  response:
    | TextIncidentOperationsListIncidentSamples200Response
    | TextIncidentOperationsListIncidentSamplesDefaultResponse,
): response is TextIncidentOperationsListIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsDeploy202Response
    | ImageIncidentOperationsDeployLogicalResponse
    | ImageIncidentOperationsDeployDefaultResponse,
): response is ImageIncidentOperationsDeployDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsGetLongRunningOperation200Response
    | ImageIncidentOperationsGetLongRunningOperationDefaultResponse,
): response is ImageIncidentOperationsGetLongRunningOperationDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsGetIncidents200Response
    | ImageIncidentOperationsGetIncidentsDefaultResponse,
): response is ImageIncidentOperationsGetIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsCreateOrUpdateIncident200Response
    | ImageIncidentOperationsCreateOrUpdateIncident201Response
    | ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse,
): response is ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsDeleteIncident204Response
    | ImageIncidentOperationsDeleteIncidentDefaultResponse,
): response is ImageIncidentOperationsDeleteIncidentDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsListIncidents200Response
    | ImageIncidentOperationsListIncidentsDefaultResponse,
): response is ImageIncidentOperationsListIncidentsDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsAddIncidentSamples200Response
    | ImageIncidentOperationsAddIncidentSamplesDefaultResponse,
): response is ImageIncidentOperationsAddIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsRemoveIncidentSamples204Response
    | ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse,
): response is ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsGetIncidentSample200Response
    | ImageIncidentOperationsGetIncidentSampleDefaultResponse,
): response is ImageIncidentOperationsGetIncidentSampleDefaultResponse;
export function isUnexpected(
  response:
    | ImageIncidentOperationsListIncidentSamples200Response
    | ImageIncidentOperationsListIncidentSamplesDefaultResponse,
): response is ImageIncidentOperationsListIncidentSamplesDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsBuild202Response
    | TextCustomizedCategoryOperationsBuildLogicalResponse
    | TextCustomizedCategoryOperationsBuildDefaultResponse,
): response is TextCustomizedCategoryOperationsBuildDefaultResponse;
export function isUnexpected(
  response:
    | TextCustomizedCategoryOperationsGetLongRunningOperation200Response
    | TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse,
): response is TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse;
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
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse
    | ImageOperationsDetectImageIncidents200Response
    | ImageOperationsDetectImageIncidentsDefaultResponse
    | ImageOperationsDetectImageProtectedMaterial200Response
    | ImageOperationsDetectImageProtectedMaterialDefaultResponse
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse
    | TextOperationsShieldPrompt200Response
    | TextOperationsShieldPromptDefaultResponse
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse
    | TextOperationsDetectCodeProtectedMaterial200Response
    | TextOperationsDetectCodeProtectedMaterialDefaultResponse
    | TextOperationsAnalyzeTextCustomCategory200Response
    | TextOperationsAnalyzeTextCustomCategoryDefaultResponse
    | TextOperationsDetectTextIncidents200Response
    | TextOperationsDetectTextIncidentsDefaultResponse
    | TextOperationsDetectGroundednessOptions200Response
    | TextOperationsDetectGroundednessOptionsDefaultResponse
    | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response
    | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse
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
    | RaiPolicyManagementCreateOrUpdateRaiPolicy200Response
    | RaiPolicyManagementCreateOrUpdateRaiPolicy201Response
    | RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse
    | RaiPolicyManagementDeleteRaiPolicy204Response
    | RaiPolicyManagementDeleteRaiPolicyDefaultResponse
    | RaiPolicyManagementGetRaiPolicy200Response
    | RaiPolicyManagementGetRaiPolicyDefaultResponse
    | RaiPolicyManagementListRaiPolicies200Response
    | RaiPolicyManagementListRaiPoliciesDefaultResponse
    | ImageWithTextOperationsAnalyzeImageWithText200Response
    | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
    | TextIncidentOperationsDeploy202Response
    | TextIncidentOperationsDeployLogicalResponse
    | TextIncidentOperationsDeployDefaultResponse
    | TextIncidentOperationsGetLongRunningOperation200Response
    | TextIncidentOperationsGetLongRunningOperationDefaultResponse
    | TextIncidentOperationsGetIncidents200Response
    | TextIncidentOperationsGetIncidentsDefaultResponse
    | TextIncidentOperationsCreateOrUpdateIncident200Response
    | TextIncidentOperationsCreateOrUpdateIncident201Response
    | TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse
    | TextIncidentOperationsDeleteIncident204Response
    | TextIncidentOperationsDeleteIncidentDefaultResponse
    | TextIncidentOperationsListIncidents200Response
    | TextIncidentOperationsListIncidentsDefaultResponse
    | TextIncidentOperationsAddIncidentSamples200Response
    | TextIncidentOperationsAddIncidentSamplesDefaultResponse
    | TextIncidentOperationsRemoveIncidentSamples204Response
    | TextIncidentOperationsRemoveIncidentSamplesDefaultResponse
    | TextIncidentOperationsGetIncidentSample200Response
    | TextIncidentOperationsGetIncidentSampleDefaultResponse
    | TextIncidentOperationsListIncidentSamples200Response
    | TextIncidentOperationsListIncidentSamplesDefaultResponse
    | ImageIncidentOperationsDeploy202Response
    | ImageIncidentOperationsDeployLogicalResponse
    | ImageIncidentOperationsDeployDefaultResponse
    | ImageIncidentOperationsGetLongRunningOperation200Response
    | ImageIncidentOperationsGetLongRunningOperationDefaultResponse
    | ImageIncidentOperationsGetIncidents200Response
    | ImageIncidentOperationsGetIncidentsDefaultResponse
    | ImageIncidentOperationsCreateOrUpdateIncident200Response
    | ImageIncidentOperationsCreateOrUpdateIncident201Response
    | ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse
    | ImageIncidentOperationsDeleteIncident204Response
    | ImageIncidentOperationsDeleteIncidentDefaultResponse
    | ImageIncidentOperationsListIncidents200Response
    | ImageIncidentOperationsListIncidentsDefaultResponse
    | ImageIncidentOperationsAddIncidentSamples200Response
    | ImageIncidentOperationsAddIncidentSamplesDefaultResponse
    | ImageIncidentOperationsRemoveIncidentSamples204Response
    | ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse
    | ImageIncidentOperationsGetIncidentSample200Response
    | ImageIncidentOperationsGetIncidentSampleDefaultResponse
    | ImageIncidentOperationsListIncidentSamples200Response
    | ImageIncidentOperationsListIncidentSamplesDefaultResponse
    | TextCustomizedCategoryOperationsBuild202Response
    | TextCustomizedCategoryOperationsBuildLogicalResponse
    | TextCustomizedCategoryOperationsBuildDefaultResponse
    | TextCustomizedCategoryOperationsGetLongRunningOperation200Response
    | TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse
    | TextCustomizedCategoryOperationsGetCustomizedCategory200Response
    | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse
    | TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response
    | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse
    | TextCustomizedCategoryOperationsListCustomizedCategory200Response
    | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse,
): response is
  | ImageOperationsAnalyzeImageDefaultResponse
  | ImageOperationsDetectImageIncidentsDefaultResponse
  | ImageOperationsDetectImageProtectedMaterialDefaultResponse
  | TextOperationsAnalyzeTextDefaultResponse
  | TextOperationsShieldPromptDefaultResponse
  | TextOperationsDetectTextProtectedMaterialDefaultResponse
  | TextOperationsDetectCodeProtectedMaterialDefaultResponse
  | TextOperationsAnalyzeTextCustomCategoryDefaultResponse
  | TextOperationsDetectTextIncidentsDefaultResponse
  | TextOperationsDetectGroundednessOptionsDefaultResponse
  | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse
  | TextBlocklistsGetTextBlocklistDefaultResponse
  | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
  | TextBlocklistsDeleteTextBlocklistDefaultResponse
  | TextBlocklistsListTextBlocklistsDefaultResponse
  | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
  | TextBlocklistsRemoveBlocklistItemsDefaultResponse
  | TextBlocklistsGetTextBlocklistItemDefaultResponse
  | TextBlocklistsListTextBlocklistItemsDefaultResponse
  | RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse
  | RaiPolicyManagementDeleteRaiPolicyDefaultResponse
  | RaiPolicyManagementGetRaiPolicyDefaultResponse
  | RaiPolicyManagementListRaiPoliciesDefaultResponse
  | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
  | TextIncidentOperationsDeployDefaultResponse
  | TextIncidentOperationsGetLongRunningOperationDefaultResponse
  | TextIncidentOperationsGetIncidentsDefaultResponse
  | TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse
  | TextIncidentOperationsDeleteIncidentDefaultResponse
  | TextIncidentOperationsListIncidentsDefaultResponse
  | TextIncidentOperationsAddIncidentSamplesDefaultResponse
  | TextIncidentOperationsRemoveIncidentSamplesDefaultResponse
  | TextIncidentOperationsGetIncidentSampleDefaultResponse
  | TextIncidentOperationsListIncidentSamplesDefaultResponse
  | ImageIncidentOperationsDeployDefaultResponse
  | ImageIncidentOperationsGetLongRunningOperationDefaultResponse
  | ImageIncidentOperationsGetIncidentsDefaultResponse
  | ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse
  | ImageIncidentOperationsDeleteIncidentDefaultResponse
  | ImageIncidentOperationsListIncidentsDefaultResponse
  | ImageIncidentOperationsAddIncidentSamplesDefaultResponse
  | ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse
  | ImageIncidentOperationsGetIncidentSampleDefaultResponse
  | ImageIncidentOperationsListIncidentSamplesDefaultResponse
  | TextCustomizedCategoryOperationsBuildDefaultResponse
  | TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse
  | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse
  | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse
  | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse
  | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse {
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
