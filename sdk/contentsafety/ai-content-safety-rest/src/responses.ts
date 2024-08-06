// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  AnalyzeImageResultOutput,
  DetectIncidentsResultOutput,
  DetectImageContentCredentialResultOutput,
  AnalyzeTextResultOutput,
  ShieldPromptResultOutput,
  DetectTextProtectedMaterialResultOutput,
  AnalyzeTextCustomCategoryResultOutput,
  AutoReviewTextResultOutput,
  AnalyzeTextGroundednessResultOutput,
  TextBlocklistOutput,
  PagedTextBlocklistOutput,
  AddOrUpdateTextBlocklistItemsResultOutput,
  TextBlocklistItemOutput,
  PagedTextBlocklistItemOutput,
  AutoReviewerVersionOutput,
  AutoReviewerVersionListOutput,
  PagedAutoReviewerVersionOutput,
  AutoReviewerOperationDetailOutput,
  TextIncidentOutput,
  PagedTextIncidentOutput,
  AddTextIncidentSamplesResultOutput,
  TextIncidentSampleOutput,
  PagedTextIncidentSampleOutput,
  ImageIncidentOutput,
  PagedImageIncidentOutput,
  AddImageIncidentSamplesResultOutput,
  ImageIncidentSampleResultOutput,
  PagedListImageIncidentSampleResultOutput,
  ResourceOperationStatusOutput,
  TextIncidentOperationResultOutput,
  ImageIncidentOperationResultOutput,
  TextCustomCategoryVersionOutput,
  TextCustomCategoryVersionListOutput,
  PagedTextCustomCategoryVersionOutput,
  CustomCategoryOperationDetailOutput,
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
export interface ImageOperationsDetectContentCredential200Response
  extends HttpResponse {
  status: "200";
  body: DetectImageContentCredentialResultOutput;
}

export interface ImageOperationsDetectContentCredentialDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageOperationsDetectContentCredentialDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageOperationsDetectContentCredentialDefaultHeaders;
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
export interface TextOperationsAutoReview200Response extends HttpResponse {
  status: "200";
  body: AutoReviewTextResultOutput;
}

export interface TextOperationsAutoReviewDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsAutoReviewDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextOperationsAutoReviewDefaultHeaders;
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

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewer200Headers {
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface AutoReviewerOperationsCreateOrReplaceAutoReviewer200Response
  extends HttpResponse {
  status: "200";
  body: AutoReviewerVersionOutput;
  headers: RawHttpHeaders &
    AutoReviewerOperationsCreateOrReplaceAutoReviewer200Headers;
}

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewer201Headers {
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface AutoReviewerOperationsCreateOrReplaceAutoReviewer201Response
  extends HttpResponse {
  status: "201";
  body: AutoReviewerVersionOutput;
  headers: RawHttpHeaders &
    AutoReviewerOperationsCreateOrReplaceAutoReviewer201Headers;
}

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultHeaders;
}

/** The final response for long-running createOrReplaceAutoReviewer operation */
export interface AutoReviewerOperationsCreateOrReplaceAutoReviewerLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AutoReviewerVersionOutput;
}

/** The request has succeeded. */
export interface AutoReviewerOperationsGetAutoReviewer200Response
  extends HttpResponse {
  status: "200";
  body: AutoReviewerVersionListOutput;
}

export interface AutoReviewerOperationsGetAutoReviewerDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AutoReviewerOperationsGetAutoReviewerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AutoReviewerOperationsGetAutoReviewerDefaultHeaders;
}

/** The request has succeeded. */
export interface AutoReviewerOperationsListAutoReviewers200Response
  extends HttpResponse {
  status: "200";
  body: PagedAutoReviewerVersionOutput;
}

export interface AutoReviewerOperationsListAutoReviewersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AutoReviewerOperationsListAutoReviewersDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    AutoReviewerOperationsListAutoReviewersDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AutoReviewerOperationsDeleteAutoReviewer204Response
  extends HttpResponse {
  status: "204";
}

export interface AutoReviewerOperationsDeleteAutoReviewerDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AutoReviewerOperationsDeleteAutoReviewerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    AutoReviewerOperationsDeleteAutoReviewerDefaultHeaders;
}

/** The request has succeeded. */
export interface AutoReviewerOperationsGetAutoReviewerOperation200Response
  extends HttpResponse {
  status: "200";
  body: AutoReviewerOperationDetailOutput;
}

export interface AutoReviewerOperationsGetAutoReviewerOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    AutoReviewerOperationsGetAutoReviewerOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentsGetIncidents200Response extends HttpResponse {
  status: "200";
  body: TextIncidentOutput;
}

export interface TextIncidentsGetIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsGetIncidentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsGetIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentsCreateOrUpdateIncident200Response
  extends HttpResponse {
  status: "200";
  body: TextIncidentOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TextIncidentsCreateOrUpdateIncident201Response
  extends HttpResponse {
  status: "201";
  body: TextIncidentOutput;
}

export interface TextIncidentsCreateOrUpdateIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsCreateOrUpdateIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsCreateOrUpdateIncidentDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextIncidentsDeleteIncident204Response extends HttpResponse {
  status: "204";
}

export interface TextIncidentsDeleteIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsDeleteIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsDeleteIncidentDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentsListIncidents200Response extends HttpResponse {
  status: "200";
  body: PagedTextIncidentOutput;
}

export interface TextIncidentsListIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsListIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsListIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentsAddIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: AddTextIncidentSamplesResultOutput;
}

export interface TextIncidentsAddIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsAddIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsAddIncidentSamplesDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextIncidentsRemoveIncidentSamples204Response
  extends HttpResponse {
  status: "204";
}

export interface TextIncidentsRemoveIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsRemoveIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsRemoveIncidentSamplesDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentsGetIncidentSample200Response
  extends HttpResponse {
  status: "200";
  body: TextIncidentSampleOutput;
}

export interface TextIncidentsGetIncidentSampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsGetIncidentSampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsGetIncidentSampleDefaultHeaders;
}

/** The request has succeeded. */
export interface TextIncidentsListIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: PagedTextIncidentSampleOutput;
}

export interface TextIncidentsListIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentsListIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentsListIncidentSamplesDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentsGetIncidents200Response extends HttpResponse {
  status: "200";
  body: ImageIncidentOutput;
}

export interface ImageIncidentsGetIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsGetIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsGetIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentsCreateOrUpdateIncident200Response
  extends HttpResponse {
  status: "200";
  body: ImageIncidentOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ImageIncidentsCreateOrUpdateIncident201Response
  extends HttpResponse {
  status: "201";
  body: ImageIncidentOutput;
}

export interface ImageIncidentsCreateOrUpdateIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsCreateOrUpdateIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsCreateOrUpdateIncidentDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ImageIncidentsDeleteIncident204Response extends HttpResponse {
  status: "204";
}

export interface ImageIncidentsDeleteIncidentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsDeleteIncidentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsDeleteIncidentDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentsListIncidents200Response extends HttpResponse {
  status: "200";
  body: PagedImageIncidentOutput;
}

export interface ImageIncidentsListIncidentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsListIncidentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsListIncidentsDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentsAddIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: AddImageIncidentSamplesResultOutput;
}

export interface ImageIncidentsAddIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsAddIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsAddIncidentSamplesDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ImageIncidentsRemoveIncidentSamples204Response
  extends HttpResponse {
  status: "204";
}

export interface ImageIncidentsRemoveIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsRemoveIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsRemoveIncidentSamplesDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentsGetIncidentSample200Response
  extends HttpResponse {
  status: "200";
  body: ImageIncidentSampleResultOutput;
}

export interface ImageIncidentsGetIncidentSampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsGetIncidentSampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsGetIncidentSampleDefaultHeaders;
}

/** The request has succeeded. */
export interface ImageIncidentsListIncidentSamples200Response
  extends HttpResponse {
  status: "200";
  body: PagedListImageIncidentSampleResultOutput;
}

export interface ImageIncidentsListIncidentSamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentsListIncidentSamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentsListIncidentSamplesDefaultHeaders;
}

export interface TextIncidentOperationDeploy202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface TextIncidentOperationDeploy202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & TextIncidentOperationDeploy202Headers;
}

export interface TextIncidentOperationDeployDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationDeployDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextIncidentOperationDeployDefaultHeaders;
}

/** The final response for long-running deploy operation */
export interface TextIncidentOperationDeployLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

/** The request has succeeded. */
export interface TextIncidentOperationGetTextIncidentOperation200Response
  extends HttpResponse {
  status: "200";
  body: TextIncidentOperationResultOutput;
}

export interface TextIncidentOperationGetTextIncidentOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextIncidentOperationGetTextIncidentOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextIncidentOperationGetTextIncidentOperationDefaultHeaders;
}

export interface ImageIncidentOperationDeploy202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ImageIncidentOperationDeploy202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & ImageIncidentOperationDeploy202Headers;
}

export interface ImageIncidentOperationDeployDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationDeployDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImageIncidentOperationDeployDefaultHeaders;
}

/** The final response for long-running deploy operation */
export interface ImageIncidentOperationDeployLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

/** The request has succeeded. */
export interface ImageIncidentOperationGetImageIncidentOperation200Response
  extends HttpResponse {
  status: "200";
  body: ImageIncidentOperationResultOutput;
}

export interface ImageIncidentOperationGetImageIncidentOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImageIncidentOperationGetImageIncidentOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ImageIncidentOperationGetImageIncidentOperationDefaultHeaders;
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

export interface TextCustomizedCategoryOperationsBuild202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** The operation id passed by the user in the request or a random UUID generated by server side. */
  "operation-id": string;
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
export interface TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response
  extends HttpResponse {
  status: "200";
  body: CustomCategoryOperationDetailOutput;
}

export interface TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultHeaders;
}
