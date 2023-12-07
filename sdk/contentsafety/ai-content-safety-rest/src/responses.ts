// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  AnalyzeTextResultOutput,
  AnalyzeTextJailbreakResultOutput,
  AnalyzeTextProtectedMaterialResultOutput,
  AnalyzeImageResultOutput,
  TextBlocklistOutput,
  PagedTextBlocklistOutput,
  AddOrUpdateTextBlocklistItemsResultOutput,
  TextBlocklistItemOutput,
  PagedTextBlocklistItemOutput,
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
  AnnotateTextResultOutput,
  TextCustomizedCategoryOutput,
  PagedTextCustomizedCategoryOutput,
  AnalyzeImageWithTextResultOutput,
  DetectUngroundednessResultOutput,
} from "./outputModels";

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
export interface TextOperationsDetectTextJailbreak200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeTextJailbreakResultOutput;
}

export interface TextOperationsDetectTextJailbreakDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextOperationsDetectTextJailbreakDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TextOperationsDetectTextJailbreakDefaultHeaders;
}

/** The request has succeeded. */
export interface TextOperationsDetectTextProtectedMaterial200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeTextProtectedMaterialResultOutput;
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

/** The request has succeeded. */
export interface PromptTextOperationsAnnotateText200Response
  extends HttpResponse {
  status: "200";
  body: AnnotateTextResultOutput;
}

export interface PromptTextOperationsAnnotateTextDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PromptTextOperationsAnnotateTextDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PromptTextOperationsAnnotateTextDefaultHeaders;
}

/** The request has succeeded. */
export interface TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory200Response
  extends HttpResponse {
  status: "200";
  body: TextCustomizedCategoryOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory201Response
  extends HttpResponse {
  status: "201";
  body: TextCustomizedCategoryOutput;
}

export interface TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultHeaders;
}

/** The request has succeeded. */
export interface TextCategoryCustomizationGetTextCustomizedCategory200Response
  extends HttpResponse {
  status: "200";
  body: TextCustomizedCategoryOutput;
}

export interface TextCategoryCustomizationGetTextCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCategoryCustomizationGetTextCustomizedCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCategoryCustomizationGetTextCustomizedCategoryDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TextCategoryCustomizationDeleteTextCustomizedCategory204Response
  extends HttpResponse {
  status: "204";
}

export interface TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultHeaders;
}

/** The request has succeeded. */
export interface TextCategoryCustomizationListTextCustomizedCategory200Response
  extends HttpResponse {
  status: "200";
  body: PagedTextCustomizedCategoryOutput;
}

export interface TextCategoryCustomizationListTextCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextCategoryCustomizationListTextCustomizedCategoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextCategoryCustomizationListTextCustomizedCategoryDefaultHeaders;
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

/** The request has succeeded. */
export interface TextUngroundednessDetectionOperationsDetectUngroundedness200Response
  extends HttpResponse {
  status: "200";
  body: DetectUngroundednessResultOutput;
}

export interface TextUngroundednessDetectionOperationsDetectUngroundednessDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TextUngroundednessDetectionOperationsDetectUngroundednessDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TextUngroundednessDetectionOperationsDetectUngroundednessDefaultHeaders;
}
