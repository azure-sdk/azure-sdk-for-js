// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  AnalyzeImageResultOutput,
  DetectIncidentsResultOutput,
  DetectImageProtectedMaterialResultOutput,
  AnalyzeTextResultOutput,
  ShieldPromptResultOutput,
  DetectTextProtectedMaterialResultOutput,
  DetectCodeProtectedMaterialResultOutput,
  AnalyzeTextCustomCategoryResultOutput,
  AnalyzeTextGroundednessResultOutput,
  RaiPolicyAnalyzeResponseOutput,
  TextBlocklistOutput,
  PagedTextBlocklistOutput,
  AddOrUpdateTextBlocklistItemsResultOutput,
  TextBlocklistItemOutput,
  PagedTextBlocklistItemOutput,
  RaiPolicyOutput,
  PagedRaiPolicyOutput,
  AnalyzeImageWithTextResultOutput,
  ResourceOperationStatusOutput,
  TextIncidentOperationResultOutput,
  TextIncidentOutput,
  PagedTextIncidentOutput,
  AddTextIncidentSamplesResultOutput,
  TextIncidentSampleOutput,
  PagedTextIncidentSampleOutput,
  ImageIncidentOperationResultOutput,
  ImageIncidentOutput,
  PagedImageIncidentOutput,
  AddImageIncidentSamplesResultOutput,
  ImageIncidentSampleResultOutput,
  PagedListImageIncidentSampleResultOutput,
  CustomCategoryOperationDetailOutput,
  TextCustomCategoryVersionOutput,
  TextCustomCategoryVersionListOutput,
  PagedTextCustomCategoryVersionOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ImageOperationsAnalyzeImage200Response extends HttpResponse {
  status: "200";
  body: AnalyzeImageResultOutput;
}

export interface ImageOperationsAnalyzeImageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageOperationsAnalyzeImageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageOperationsAnalyzeImageDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageOperationsDetectImageIncidents200Response
  extends HttpResponse {
  status: "200";
  body: DetectIncidentsResultOutput;
}

export interface ImageOperationsDetectImageIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageOperationsDetectImageIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageOperationsDetectImageIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageOperationsDetectImageProtectedMaterial200Response
  extends HttpResponse {
  status: "200";
  body: DetectImageProtectedMaterialResultOutput;
}

export interface ImageOperationsDetectImageProtectedMaterialDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageOperationsDetectImageProtectedMaterialDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageOperationsDetectImageProtectedMaterialDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsAnalyzeText200Response extends HttpResponse {
  status: "200";
  body: AnalyzeTextResultOutput;
}

export interface TextOperationsAnalyzeTextDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsAnalyzeTextDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextOperationsAnalyzeTextDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsShieldPrompt200Response extends HttpResponse {
  status: "200";
  body: ShieldPromptResultOutput;
}

export interface TextOperationsShieldPromptDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsShieldPromptDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextOperationsShieldPromptDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsDetectTextProtectedMaterial200Response
  extends HttpResponse {
  status: "200";
  body: DetectTextProtectedMaterialResultOutput;
}

export interface TextOperationsDetectTextProtectedMaterialDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsDetectTextProtectedMaterialDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextOperationsDetectTextProtectedMaterialDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsDetectCodeProtectedMaterial200Response
  extends HttpResponse {
  status: "200";
  body: DetectCodeProtectedMaterialResultOutput;
}

export interface TextOperationsDetectCodeProtectedMaterialDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsDetectCodeProtectedMaterialDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextOperationsDetectCodeProtectedMaterialDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsAnalyzeTextCustomCategory200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeTextCustomCategoryResultOutput;
}

export interface TextOperationsAnalyzeTextCustomCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsAnalyzeTextCustomCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextOperationsAnalyzeTextCustomCategoryDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsDetectTextIncidents200Response
  extends HttpResponse {
  status: "200";
  body: DetectIncidentsResultOutput;
}

export interface TextOperationsDetectTextIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsDetectTextIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextOperationsDetectTextIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsDetectGroundednessOptions200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeTextGroundednessResultOutput;
}

export interface TextOperationsDetectGroundednessOptionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsDetectGroundednessOptionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextOperationsDetectGroundednessOptionsDefaultHeaders;
}

/** The request has succeeded. */
export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response
  extends HttpResponse {
  status: "200";
  body: RaiPolicyAnalyzeResponseOutput;
}

export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultHeaders;
}

/** The request has succeeded. */
export interface TextBlocklistsGetTextBlocklist200Response
  extends HttpResponse {
  status: "200";
  body: TextBlocklistOutput;
}

export interface TextBlocklistsGetTextBlocklistDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsGetTextBlocklistDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextBlocklistsGetTextBlocklistDefaultHeaders;
}

/** The request has succeeded. */
export interface TextBlocklistsCreateOrUpdateTextBlocklist200Response
  extends HttpResponse {
  status: "200";
  body: TextBlocklistOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TextBlocklistsCreateOrUpdateTextBlocklist201Response
  extends HttpResponse {
  status: "201";
  body: TextBlocklistOutput;
}

export interface TextBlocklistsCreateOrUpdateTextBlocklistDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextBlocklistsCreateOrUpdateTextBlocklistDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextBlocklistsDeleteTextBlocklist204Response
  extends HttpResponse {
  status: "204";
}

export interface TextBlocklistsDeleteTextBlocklistDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsDeleteTextBlocklistDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextBlocklistsDeleteTextBlocklistDefaultHeaders;
}

/** The request has succeeded. */
export interface TextBlocklistsListTextBlocklists200Response
  extends HttpResponse {
  status: "200";
  body: PagedTextBlocklistOutput;
}

export interface TextBlocklistsListTextBlocklistsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsListTextBlocklistsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextBlocklistsListTextBlocklistsDefaultHeaders;
}

/** The request has succeeded. */
export interface TextBlocklistsAddOrUpdateBlocklistItems200Response
  extends HttpResponse {
  status: "200";
  body: AddOrUpdateTextBlocklistItemsResultOutput;
}

export interface TextBlocklistsAddOrUpdateBlocklistItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextBlocklistsAddOrUpdateBlocklistItemsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextBlocklistsRemoveBlocklistItems204Response
  extends HttpResponse {
  status: "204";
}

export interface TextBlocklistsRemoveBlocklistItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsRemoveBlocklistItemsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextBlocklistsRemoveBlocklistItemsDefaultHeaders;
}

/** The request has succeeded. */
export interface TextBlocklistsGetTextBlocklistItem200Response
  extends HttpResponse {
  status: "200";
  body: TextBlocklistItemOutput;
}

export interface TextBlocklistsGetTextBlocklistItemDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsGetTextBlocklistItemDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextBlocklistsGetTextBlocklistItemDefaultHeaders;
}

/** The request has succeeded. */
export interface TextBlocklistsListTextBlocklistItems200Response
  extends HttpResponse {
  status: "200";
  body: PagedTextBlocklistItemOutput;
}

export interface TextBlocklistsListTextBlocklistItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextBlocklistsListTextBlocklistItemsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextBlocklistsListTextBlocklistItemsDefaultHeaders;
}

/** The request has succeeded. */
export interface RaiPolicyManagementCreateOrUpdateRaiPolicy200Response
  extends HttpResponse {
  status: "200";
  body: RaiPolicyOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface RaiPolicyManagementCreateOrUpdateRaiPolicy201Response
  extends HttpResponse {
  status: "201";
  body: RaiPolicyOutput;
}

export interface RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RaiPolicyManagementDeleteRaiPolicy204Response
  extends HttpResponse {
  status: "204";
}

export interface RaiPolicyManagementDeleteRaiPolicyDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RaiPolicyManagementDeleteRaiPolicyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RaiPolicyManagementDeleteRaiPolicyDefaultHeaders;
}

/** The request has succeeded. */
export interface RaiPolicyManagementGetRaiPolicy200Response
  extends HttpResponse {
  status: "200";
  body: RaiPolicyOutput;
}

export interface RaiPolicyManagementGetRaiPolicyDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RaiPolicyManagementGetRaiPolicyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RaiPolicyManagementGetRaiPolicyDefaultHeaders;
}

/** The request has succeeded. */
export interface RaiPolicyManagementListRaiPolicies200Response
  extends HttpResponse {
  status: "200";
  body: PagedRaiPolicyOutput;
}

export interface RaiPolicyManagementListRaiPoliciesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RaiPolicyManagementListRaiPoliciesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RaiPolicyManagementListRaiPoliciesDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageWithTextOperationsAnalyzeImageWithText200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeImageWithTextResultOutput;
}

export interface ImageWithTextOperationsAnalyzeImageWithTextDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageWithTextOperationsAnalyzeImageWithTextDefaultHeaders;
}

export interface TextIncidentOperationsDeploy202Headers {
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface TextIncidentOperationsDeploy202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & TextIncidentOperationsDeploy202Headers;
}

export interface TextIncidentOperationsDeployDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsDeployDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentOperationsDeployDefaultHeaders;
}

/** The final response for long-running deploy operation */
export interface TextIncidentOperationsDeployLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

/** The request has succeeded. */
export interface TextIncidentOperationsGetLongRunningOperation200Response
  extends HttpResponse {
  status: "200";
  body: TextIncidentOperationResultOutput;
}

export interface TextIncidentOperationsGetLongRunningOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsGetLongRunningOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextIncidentOperationsGetLongRunningOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentOperationsGetIncidents200Response
  extends HttpResponse {
  status: "200";
  body: TextIncidentOutput;
}

export interface TextIncidentOperationsGetIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsGetIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentOperationsGetIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentOperationsCreateOrUpdateIncident200Response
  extends HttpResponse {
  status: "200";
  body: TextIncidentOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TextIncidentOperationsCreateOrUpdateIncident201Response
  extends HttpResponse {
  status: "201";
  body: TextIncidentOutput;
}

export interface TextIncidentOperationsCreateOrUpdateIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextIncidentOperationsCreateOrUpdateIncidentDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextIncidentOperationsDeleteIncident204Response
  extends HttpResponse {
  status: "204";
}

export interface TextIncidentOperationsDeleteIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsDeleteIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentOperationsDeleteIncidentDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentOperationsListIncidents200Response
  extends HttpResponse {
  status: "200";
  body: PagedTextIncidentOutput;
}

export interface TextIncidentOperationsListIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsListIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentOperationsListIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentOperationsAddIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: AddTextIncidentSamplesResultOutput;
}

export interface TextIncidentOperationsAddIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsAddIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextIncidentOperationsAddIncidentSamplesDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextIncidentOperationsRemoveIncidentSamples204Response
  extends HttpResponse {
  status: "204";
}

export interface TextIncidentOperationsRemoveIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsRemoveIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextIncidentOperationsRemoveIncidentSamplesDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentOperationsGetIncidentSample200Response
  extends HttpResponse {
  status: "200";
  body: TextIncidentSampleOutput;
}

export interface TextIncidentOperationsGetIncidentSampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsGetIncidentSampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextIncidentOperationsGetIncidentSampleDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentOperationsListIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: PagedTextIncidentSampleOutput;
}

export interface TextIncidentOperationsListIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationsListIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextIncidentOperationsListIncidentSamplesDefaultHeaders;
}

export interface ImageIncidentOperationsDeploy202Headers {
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ImageIncidentOperationsDeploy202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & ImageIncidentOperationsDeploy202Headers;
}

export interface ImageIncidentOperationsDeployDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsDeployDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentOperationsDeployDefaultHeaders;
}

/** The final response for long-running deploy operation */
export interface ImageIncidentOperationsDeployLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

/** The request has succeeded. */
export interface ImageIncidentOperationsGetLongRunningOperation200Response
  extends HttpResponse {
  status: "200";
  body: ImageIncidentOperationResultOutput;
}

export interface ImageIncidentOperationsGetLongRunningOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsGetLongRunningOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageIncidentOperationsGetLongRunningOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentOperationsGetIncidents200Response
  extends HttpResponse {
  status: "200";
  body: ImageIncidentOutput;
}

export interface ImageIncidentOperationsGetIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsGetIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentOperationsGetIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentOperationsCreateOrUpdateIncident200Response
  extends HttpResponse {
  status: "200";
  body: ImageIncidentOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ImageIncidentOperationsCreateOrUpdateIncident201Response
  extends HttpResponse {
  status: "201";
  body: ImageIncidentOutput;
}

export interface ImageIncidentOperationsCreateOrUpdateIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageIncidentOperationsCreateOrUpdateIncidentDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ImageIncidentOperationsDeleteIncident204Response
  extends HttpResponse {
  status: "204";
}

export interface ImageIncidentOperationsDeleteIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsDeleteIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentOperationsDeleteIncidentDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentOperationsListIncidents200Response
  extends HttpResponse {
  status: "200";
  body: PagedImageIncidentOutput;
}

export interface ImageIncidentOperationsListIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsListIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentOperationsListIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentOperationsAddIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: AddImageIncidentSamplesResultOutput;
}

export interface ImageIncidentOperationsAddIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsAddIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageIncidentOperationsAddIncidentSamplesDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ImageIncidentOperationsRemoveIncidentSamples204Response
  extends HttpResponse {
  status: "204";
}

export interface ImageIncidentOperationsRemoveIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageIncidentOperationsRemoveIncidentSamplesDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentOperationsGetIncidentSample200Response
  extends HttpResponse {
  status: "200";
  body: ImageIncidentSampleResultOutput;
}

export interface ImageIncidentOperationsGetIncidentSampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsGetIncidentSampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageIncidentOperationsGetIncidentSampleDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentOperationsListIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: PagedListImageIncidentSampleResultOutput;
}

export interface ImageIncidentOperationsListIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationsListIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageIncidentOperationsListIncidentSamplesDefaultHeaders;
}

export interface TextCustomizedCategoryOperationsBuild202Headers {
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface TextCustomizedCategoryOperationsBuild202Response
  extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & TextCustomizedCategoryOperationsBuild202Headers;
}

export interface TextCustomizedCategoryOperationsBuildDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCustomizedCategoryOperationsBuildDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextCustomizedCategoryOperationsBuildDefaultHeaders;
}

/** The final response for long-running build operation */
export interface TextCustomizedCategoryOperationsBuildLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

/** The request has succeeded. */
export interface TextCustomizedCategoryOperationsGetLongRunningOperation200Response
  extends HttpResponse {
  status: "200";
  body: CustomCategoryOperationDetailOutput;
}

export interface TextCustomizedCategoryOperationsGetLongRunningOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCustomizedCategoryOperationsGetLongRunningOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response
  extends HttpResponse {
  status: "200";
  body: TextCustomCategoryVersionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response
  extends HttpResponse {
  status: "201";
  body: TextCustomCategoryVersionOutput;
}

export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface TextCustomizedCategoryOperationsGetCustomizedCategory200Response
  extends HttpResponse {
  status: "200";
  body: TextCustomCategoryVersionListOutput;
}

export interface TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultHeaders;
}

/** The request has succeeded. */
export interface TextCustomizedCategoryOperationsListCustomizedCategory200Response
  extends HttpResponse {
  status: "200";
  body: PagedTextCustomCategoryVersionOutput;
}

export interface TextCustomizedCategoryOperationsListCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCustomizedCategoryOperationsListCustomizedCategoryDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response
  extends HttpResponse {
  status: "204";
}

export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultHeaders;
}
