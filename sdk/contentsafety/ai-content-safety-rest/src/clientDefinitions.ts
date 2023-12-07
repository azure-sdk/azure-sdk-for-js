// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TextOperationsAnalyzeTextParameters,
  TextOperationsDetectTextJailbreakParameters,
  TextOperationsDetectTextProtectedMaterialParameters,
  ImageOperationsAnalyzeImageParameters,
  TextBlocklistsGetTextBlocklistParameters,
  TextBlocklistsCreateOrUpdateTextBlocklistParameters,
  TextBlocklistsDeleteTextBlocklistParameters,
  TextBlocklistsListTextBlocklistsParameters,
  TextBlocklistsAddOrUpdateBlocklistItemsParameters,
  TextBlocklistsRemoveBlocklistItemsParameters,
  TextBlocklistsGetTextBlocklistItemParameters,
  TextBlocklistsListTextBlocklistItemsParameters,
  TextIncidentsGetIncidentsParameters,
  TextIncidentsCreateOrUpdateIncidentParameters,
  TextIncidentsDeleteIncidentParameters,
  TextIncidentsListIncidentsParameters,
  TextIncidentsAddIncidentSamplesParameters,
  TextIncidentsRemoveIncidentSamplesParameters,
  TextIncidentsGetIncidentSampleParameters,
  TextIncidentsListIncidentSamplesParameters,
  ImageIncidentsGetIncidentsParameters,
  ImageIncidentsCreateOrUpdateIncidentParameters,
  ImageIncidentsDeleteIncidentParameters,
  ImageIncidentsListIncidentsParameters,
  ImageIncidentsAddIncidentSamplesParameters,
  ImageIncidentsRemoveIncidentSamplesParameters,
  ImageIncidentsGetIncidentSampleParameters,
  ImageIncidentsListIncidentSamplesParameters,
  PromptTextOperationsAnnotateTextParameters,
  TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryParameters,
  TextCategoryCustomizationGetTextCustomizedCategoryParameters,
  TextCategoryCustomizationDeleteTextCustomizedCategoryParameters,
  TextCategoryCustomizationListTextCustomizedCategoryParameters,
  ImageWithTextOperationsAnalyzeImageWithTextParameters,
  TextUngroundednessDetectionOperationsDetectUngroundednessParameters,
} from "./parameters";
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface TextOperationsAnalyzeText {
  /** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: TextOperationsAnalyzeTextParameters
  ): StreamableMethod<
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse
  >;
}

export interface TextOperationsDetectTextJailbreak {
  /** A synchronous API for the analysis of text jailbreak. */
  post(
    options: TextOperationsDetectTextJailbreakParameters
  ): StreamableMethod<
    | TextOperationsDetectTextJailbreak200Response
    | TextOperationsDetectTextJailbreakDefaultResponse
  >;
}

export interface TextOperationsDetectTextProtectedMaterial {
  /** A synchronous API for the analysis of protected material. */
  post(
    options: TextOperationsDetectTextProtectedMaterialParameters
  ): StreamableMethod<
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse
  >;
}

export interface ImageOperationsAnalyzeImage {
  /** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: ImageOperationsAnalyzeImageParameters
  ): StreamableMethod<
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse
  >;
}

export interface TextBlocklistsGetTextBlocklist {
  /** Returns text blocklist details. */
  get(
    options?: TextBlocklistsGetTextBlocklistParameters
  ): StreamableMethod<
    | TextBlocklistsGetTextBlocklist200Response
    | TextBlocklistsGetTextBlocklistDefaultResponse
  >;
  /** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
  patch(
    options: TextBlocklistsCreateOrUpdateTextBlocklistParameters
  ): StreamableMethod<
    | TextBlocklistsCreateOrUpdateTextBlocklist200Response
    | TextBlocklistsCreateOrUpdateTextBlocklist201Response
    | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
  >;
  /** Deletes a text blocklist. */
  delete(
    options?: TextBlocklistsDeleteTextBlocklistParameters
  ): StreamableMethod<
    | TextBlocklistsDeleteTextBlocklist204Response
    | TextBlocklistsDeleteTextBlocklistDefaultResponse
  >;
}

export interface TextBlocklistsListTextBlocklists {
  /** Get all text blocklists details. */
  get(
    options?: TextBlocklistsListTextBlocklistsParameters
  ): StreamableMethod<
    | TextBlocklistsListTextBlocklists200Response
    | TextBlocklistsListTextBlocklistsDefaultResponse
  >;
}

export interface TextBlocklistsAddOrUpdateBlocklistItems {
  /** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
  post(
    options: TextBlocklistsAddOrUpdateBlocklistItemsParameters
  ): StreamableMethod<
    | TextBlocklistsAddOrUpdateBlocklistItems200Response
    | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
  >;
}

export interface TextBlocklistsRemoveBlocklistItems {
  /** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
  post(
    options: TextBlocklistsRemoveBlocklistItemsParameters
  ): StreamableMethod<
    | TextBlocklistsRemoveBlocklistItems204Response
    | TextBlocklistsRemoveBlocklistItemsDefaultResponse
  >;
}

export interface TextBlocklistsGetTextBlocklistItem {
  /** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
  get(
    options?: TextBlocklistsGetTextBlocklistItemParameters
  ): StreamableMethod<
    | TextBlocklistsGetTextBlocklistItem200Response
    | TextBlocklistsGetTextBlocklistItemDefaultResponse
  >;
}

export interface TextBlocklistsListTextBlocklistItems {
  /** Get all blocklistItems in a text blocklist. */
  get(
    options?: TextBlocklistsListTextBlocklistItemsParameters
  ): StreamableMethod<
    | TextBlocklistsListTextBlocklistItems200Response
    | TextBlocklistsListTextBlocklistItemsDefaultResponse
  >;
}

export interface TextIncidentsGetIncidents {
  /** Returns text incident details. */
  get(
    options?: TextIncidentsGetIncidentsParameters
  ): StreamableMethod<
    | TextIncidentsGetIncidents200Response
    | TextIncidentsGetIncidentsDefaultResponse
  >;
  /** Updates a text incident. If the text incident does not exist, a new text incident will be created. */
  patch(
    options: TextIncidentsCreateOrUpdateIncidentParameters
  ): StreamableMethod<
    | TextIncidentsCreateOrUpdateIncident200Response
    | TextIncidentsCreateOrUpdateIncident201Response
    | TextIncidentsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes a text incident. */
  delete(
    options?: TextIncidentsDeleteIncidentParameters
  ): StreamableMethod<
    | TextIncidentsDeleteIncident204Response
    | TextIncidentsDeleteIncidentDefaultResponse
  >;
}

export interface TextIncidentsListIncidents {
  /** Get all incidents details. */
  get(
    options?: TextIncidentsListIncidentsParameters
  ): StreamableMethod<
    | TextIncidentsListIncidents200Response
    | TextIncidentsListIncidentsDefaultResponse
  >;
}

export interface TextIncidentsAddIncidentSamples {
  /** Add textIncidentSamples to an incident. You can add at most 100 textIncidentSamples in one request. */
  post(
    options?: TextIncidentsAddIncidentSamplesParameters
  ): StreamableMethod<
    | TextIncidentsAddIncidentSamples200Response
    | TextIncidentsAddIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentsRemoveIncidentSamples {
  /** Remove textIncidentSamples from an incident. You can remove at most 100 Text Incident in one request. */
  post(
    options?: TextIncidentsRemoveIncidentSamplesParameters
  ): StreamableMethod<
    | TextIncidentsRemoveIncidentSamples204Response
    | TextIncidentsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentsGetIncidentSample {
  /** Get textIncidentSample by textIncidentName and textIncidentSampleId from a text incident. */
  get(
    options?: TextIncidentsGetIncidentSampleParameters
  ): StreamableMethod<
    | TextIncidentsGetIncidentSample200Response
    | TextIncidentsGetIncidentSampleDefaultResponse
  >;
}

export interface TextIncidentsListIncidentSamples {
  /** Get all TextIncidentSamples in a text incident. */
  get(
    options?: TextIncidentsListIncidentSamplesParameters
  ): StreamableMethod<
    | TextIncidentsListIncidentSamples200Response
    | TextIncidentsListIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsGetIncidents {
  /** Returns image incident details. */
  get(
    options?: ImageIncidentsGetIncidentsParameters
  ): StreamableMethod<
    | ImageIncidentsGetIncidents200Response
    | ImageIncidentsGetIncidentsDefaultResponse
  >;
  /** Updates a image incident. If the image incident does not exist, a new image incident will be created. */
  patch(
    options: ImageIncidentsCreateOrUpdateIncidentParameters
  ): StreamableMethod<
    | ImageIncidentsCreateOrUpdateIncident200Response
    | ImageIncidentsCreateOrUpdateIncident201Response
    | ImageIncidentsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes a image incident. */
  delete(
    options?: ImageIncidentsDeleteIncidentParameters
  ): StreamableMethod<
    | ImageIncidentsDeleteIncident204Response
    | ImageIncidentsDeleteIncidentDefaultResponse
  >;
}

export interface ImageIncidentsListIncidents {
  /** Get all incidents details. */
  get(
    options?: ImageIncidentsListIncidentsParameters
  ): StreamableMethod<
    | ImageIncidentsListIncidents200Response
    | ImageIncidentsListIncidentsDefaultResponse
  >;
}

export interface ImageIncidentsAddIncidentSamples {
  /** Add imageIncidentSamples to an incident. You can add at most 100 imageIncidentSamples in one request. */
  post(
    options?: ImageIncidentsAddIncidentSamplesParameters
  ): StreamableMethod<
    | ImageIncidentsAddIncidentSamples200Response
    | ImageIncidentsAddIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsRemoveIncidentSamples {
  /** Remove imageIncidentSamples from an incident. You can remove at most 100 Image Incident in one request. */
  post(
    options?: ImageIncidentsRemoveIncidentSamplesParameters
  ): StreamableMethod<
    | ImageIncidentsRemoveIncidentSamples204Response
    | ImageIncidentsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsGetIncidentSample {
  /** Get imageIncidentSample by imageIncidentName and imageIncidentSampleId from a image incident. */
  get(
    options?: ImageIncidentsGetIncidentSampleParameters
  ): StreamableMethod<
    | ImageIncidentsGetIncidentSample200Response
    | ImageIncidentsGetIncidentSampleDefaultResponse
  >;
}

export interface ImageIncidentsListIncidentSamples {
  /** Get all ImageIncidentSamples in a image incident. */
  get(
    options?: ImageIncidentsListIncidentSamplesParameters
  ): StreamableMethod<
    | ImageIncidentsListIncidentSamples200Response
    | ImageIncidentsListIncidentSamplesDefaultResponse
  >;
}

export interface PromptTextOperationsAnnotateText {
  /** A remote procedure call (RPC) operation. */
  post(
    options: PromptTextOperationsAnnotateTextParameters
  ): StreamableMethod<
    | PromptTextOperationsAnnotateText200Response
    | PromptTextOperationsAnnotateTextDefaultResponse
  >;
}

export interface TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory {
  /** Create or replace operation template. */
  put(
    options: TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryParameters
  ): StreamableMethod<
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory200Response
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory201Response
    | TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: TextCategoryCustomizationGetTextCustomizedCategoryParameters
  ): StreamableMethod<
    | TextCategoryCustomizationGetTextCustomizedCategory200Response
    | TextCategoryCustomizationGetTextCustomizedCategoryDefaultResponse
  >;
  /** Resource delete operation template. */
  delete(
    options?: TextCategoryCustomizationDeleteTextCustomizedCategoryParameters
  ): StreamableMethod<
    | TextCategoryCustomizationDeleteTextCustomizedCategory204Response
    | TextCategoryCustomizationDeleteTextCustomizedCategoryDefaultResponse
  >;
}

export interface TextCategoryCustomizationListTextCustomizedCategory {
  /** Resource list operation template. */
  get(
    options?: TextCategoryCustomizationListTextCustomizedCategoryParameters
  ): StreamableMethod<
    | TextCategoryCustomizationListTextCustomizedCategory200Response
    | TextCategoryCustomizationListTextCustomizedCategoryDefaultResponse
  >;
}

export interface ImageWithTextOperationsAnalyzeImageWithText {
  /** A synchronous API for the analysis of potentially harmful image with text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: ImageWithTextOperationsAnalyzeImageWithTextParameters
  ): StreamableMethod<
    | ImageWithTextOperationsAnalyzeImageWithText200Response
    | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
  >;
}

export interface TextUngroundednessDetectionOperationsDetectUngroundedness {
  /** A synchronous API for the analysis of language model outputs to determine if they align with the information provided by the user or contain fictional content. */
  post(
    options: TextUngroundednessDetectionOperationsDetectUngroundednessParameters
  ): StreamableMethod<
    | TextUngroundednessDetectionOperationsDetectUngroundedness200Response
    | TextUngroundednessDetectionOperationsDetectUngroundednessDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/text:analyze' has methods for the following verbs: post */
  (path: "/text:analyze"): TextOperationsAnalyzeText;
  /** Resource for '/text:detectJailbreak' has methods for the following verbs: post */
  (path: "/text:detectJailbreak"): TextOperationsDetectTextJailbreak;
  /** Resource for '/text:detectProtectedMaterial' has methods for the following verbs: post */
  (
    path: "/text:detectProtectedMaterial"
  ): TextOperationsDetectTextProtectedMaterial;
  /** Resource for '/image:analyze' has methods for the following verbs: post */
  (path: "/image:analyze"): ImageOperationsAnalyzeImage;
  /** Resource for '/text/blocklists/\{blocklistName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/blocklists/{blocklistName}",
    blocklistName: string
  ): TextBlocklistsGetTextBlocklist;
  /** Resource for '/text/blocklists' has methods for the following verbs: get */
  (path: "/text/blocklists"): TextBlocklistsListTextBlocklists;
  /** Resource for '/text/blocklists/\{blocklistName\}:addOrUpdateBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems",
    blocklistName: string
  ): TextBlocklistsAddOrUpdateBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}:removeBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:removeBlocklistItems",
    blocklistName: string
  ): TextBlocklistsRemoveBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems/\{blocklistItemId\}' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}",
    blocklistName: string,
    blocklistItemId: string
  ): TextBlocklistsGetTextBlocklistItem;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems",
    blocklistName: string
  ): TextBlocklistsListTextBlocklistItems;
  /** Resource for '/text/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/incidents/{incidentName}",
    incidentName: string
  ): TextIncidentsGetIncidents;
  /** Resource for '/text/incidents' has methods for the following verbs: get */
  (path: "/text/incidents"): TextIncidentsListIncidents;
  /** Resource for '/text/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:addIncidentSamples",
    incidentName: string
  ): TextIncidentsAddIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string
  ): TextIncidentsRemoveIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string
  ): TextIncidentsGetIncidentSample;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples",
    incidentName: string
  ): TextIncidentsListIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/image/incidents/{incidentName}",
    incidentName: string
  ): ImageIncidentsGetIncidents;
  /** Resource for '/image/incidents' has methods for the following verbs: get */
  (path: "/image/incidents"): ImageIncidentsListIncidents;
  /** Resource for '/image/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:addIncidentSamples",
    incidentName: string
  ): ImageIncidentsAddIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string
  ): ImageIncidentsRemoveIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string
  ): ImageIncidentsGetIncidentSample;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples",
    incidentName: string
  ): ImageIncidentsListIncidentSamples;
  /** Resource for '/text:adaptiveAnnotate' has methods for the following verbs: post */
  (path: "/text:adaptiveAnnotate"): PromptTextOperationsAnnotateText;
  /** Resource for '/text/categories/\{categoryName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/text/categories/{categoryName}",
    categoryName: string
  ): TextCategoryCustomizationCreateOrReplaceTextCustomizedCategory;
  /** Resource for '/text/categories' has methods for the following verbs: get */
  (
    path: "/text/categories"
  ): TextCategoryCustomizationListTextCustomizedCategory;
  /** Resource for '/imageWithText:analyze' has methods for the following verbs: post */
  (path: "/imageWithText:analyze"): ImageWithTextOperationsAnalyzeImageWithText;
  /** Resource for '/text:detectUngroundedness' has methods for the following verbs: post */
  (
    path: "/text:detectUngroundedness"
  ): TextUngroundednessDetectionOperationsDetectUngroundedness;
}

export type ContentSafetyClient = Client & {
  path: Routes;
};
