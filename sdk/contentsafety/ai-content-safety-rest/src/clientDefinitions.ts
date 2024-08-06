// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ImageOperationsAnalyzeImageParameters,
  ImageOperationsDetectImageIncidentsParameters,
  ImageOperationsDetectContentCredentialParameters,
  TextOperationsAnalyzeTextParameters,
  TextOperationsShieldPromptParameters,
  TextOperationsDetectTextProtectedMaterialParameters,
  TextOperationsAnalyzeTextCustomCategoryParameters,
  TextOperationsAutoReviewParameters,
  TextOperationsDetectTextIncidentsParameters,
  TextOperationsDetectGroundednessOptionsParameters,
  TextBlocklistsGetTextBlocklistParameters,
  TextBlocklistsCreateOrUpdateTextBlocklistParameters,
  TextBlocklistsDeleteTextBlocklistParameters,
  TextBlocklistsListTextBlocklistsParameters,
  TextBlocklistsAddOrUpdateBlocklistItemsParameters,
  TextBlocklistsRemoveBlocklistItemsParameters,
  TextBlocklistsGetTextBlocklistItemParameters,
  TextBlocklistsListTextBlocklistItemsParameters,
  AutoReviewerOperationsCreateOrReplaceAutoReviewerParameters,
  AutoReviewerOperationsGetAutoReviewerParameters,
  AutoReviewerOperationsDeleteAutoReviewerParameters,
  AutoReviewerOperationsListAutoReviewersParameters,
  AutoReviewerOperationsGetAutoReviewerOperationParameters,
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
  TextIncidentOperationDeployParameters,
  TextIncidentOperationGetTextIncidentOperationParameters,
  ImageIncidentOperationDeployParameters,
  ImageIncidentOperationGetImageIncidentOperationParameters,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters,
  TextCustomizedCategoryOperationsGetCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsListCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsBuildParameters,
  TextCustomizedCategoryOperationsGetCustomCategoryOperationParameters,
} from "./parameters.js";
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
  TextIncidentOperationDeployDefaultResponse,
  TextIncidentOperationGetTextIncidentOperation200Response,
  TextIncidentOperationGetTextIncidentOperationDefaultResponse,
  ImageIncidentOperationDeploy202Response,
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
  TextCustomizedCategoryOperationsBuildDefaultResponse,
  TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response,
  TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ImageOperationsAnalyzeImage {
  /** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: ImageOperationsAnalyzeImageParameters,
  ): StreamableMethod<
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse
  >;
}

export interface ImageOperationsDetectImageIncidents {
  /** A synchronous API to analyze image content with the custom content safety Image Incidents defined. */
  post(
    options: ImageOperationsDetectImageIncidentsParameters,
  ): StreamableMethod<
    | ImageOperationsDetectImageIncidents200Response
    | ImageOperationsDetectImageIncidentsDefaultResponse
  >;
}

export interface ImageOperationsDetectContentCredential {
  /** A synchronous API for detecting the content credentials from assets. */
  post(
    options: ImageOperationsDetectContentCredentialParameters,
  ): StreamableMethod<
    | ImageOperationsDetectContentCredential200Response
    | ImageOperationsDetectContentCredentialDefaultResponse
  >;
}

export interface TextOperationsAnalyzeText {
  /** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: TextOperationsAnalyzeTextParameters,
  ): StreamableMethod<
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse
  >;
}

export interface TextOperationsShieldPrompt {
  /** A synchronous API for shielding prompt from direct and indirect injection attacks. */
  post(
    options: TextOperationsShieldPromptParameters,
  ): StreamableMethod<
    | TextOperationsShieldPrompt200Response
    | TextOperationsShieldPromptDefaultResponse
  >;
}

export interface TextOperationsDetectTextProtectedMaterial {
  /** A synchronous API for detecting protected material in the given text. */
  post(
    options: TextOperationsDetectTextProtectedMaterialParameters,
  ): StreamableMethod<
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse
  >;
}

export interface TextOperationsAnalyzeTextCustomCategory {
  /** A synchronous API to analyze content with Custom Category defined. */
  post(
    options: TextOperationsAnalyzeTextCustomCategoryParameters,
  ): StreamableMethod<
    | TextOperationsAnalyzeTextCustomCategory200Response
    | TextOperationsAnalyzeTextCustomCategoryDefaultResponse
  >;
}

export interface TextOperationsAutoReview {
  /** A synchronous API to analyze text with the Auto Reviewer defined. */
  post(
    options: TextOperationsAutoReviewParameters,
  ): StreamableMethod<
    | TextOperationsAutoReview200Response
    | TextOperationsAutoReviewDefaultResponse
  >;
}

export interface TextOperationsDetectTextIncidents {
  /** A synchronous API to analyze text content with the custom content safety Text Incidents defined. */
  post(
    options: TextOperationsDetectTextIncidentsParameters,
  ): StreamableMethod<
    | TextOperationsDetectTextIncidents200Response
    | TextOperationsDetectTextIncidentsDefaultResponse
  >;
}

export interface TextOperationsDetectGroundednessOptions {
  /** A synchronous API to analyze the language model outputs to evaluate alignment with user-provided information or to identify fictional content. */
  post(
    options: TextOperationsDetectGroundednessOptionsParameters,
  ): StreamableMethod<
    | TextOperationsDetectGroundednessOptions200Response
    | TextOperationsDetectGroundednessOptionsDefaultResponse
  >;
}

export interface TextBlocklistsGetTextBlocklist {
  /** Returns text blocklist details. */
  get(
    options?: TextBlocklistsGetTextBlocklistParameters,
  ): StreamableMethod<
    | TextBlocklistsGetTextBlocklist200Response
    | TextBlocklistsGetTextBlocklistDefaultResponse
  >;
  /** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
  patch(
    options: TextBlocklistsCreateOrUpdateTextBlocklistParameters,
  ): StreamableMethod<
    | TextBlocklistsCreateOrUpdateTextBlocklist200Response
    | TextBlocklistsCreateOrUpdateTextBlocklist201Response
    | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
  >;
  /** Deletes a text blocklist. */
  delete(
    options?: TextBlocklistsDeleteTextBlocklistParameters,
  ): StreamableMethod<
    | TextBlocklistsDeleteTextBlocklist204Response
    | TextBlocklistsDeleteTextBlocklistDefaultResponse
  >;
}

export interface TextBlocklistsListTextBlocklists {
  /** Get all text blocklists details. */
  get(
    options?: TextBlocklistsListTextBlocklistsParameters,
  ): StreamableMethod<
    | TextBlocklistsListTextBlocklists200Response
    | TextBlocklistsListTextBlocklistsDefaultResponse
  >;
}

export interface TextBlocklistsAddOrUpdateBlocklistItems {
  /** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
  post(
    options: TextBlocklistsAddOrUpdateBlocklistItemsParameters,
  ): StreamableMethod<
    | TextBlocklistsAddOrUpdateBlocklistItems200Response
    | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
  >;
}

export interface TextBlocklistsRemoveBlocklistItems {
  /** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
  post(
    options: TextBlocklistsRemoveBlocklistItemsParameters,
  ): StreamableMethod<
    | TextBlocklistsRemoveBlocklistItems204Response
    | TextBlocklistsRemoveBlocklistItemsDefaultResponse
  >;
}

export interface TextBlocklistsGetTextBlocklistItem {
  /** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
  get(
    options?: TextBlocklistsGetTextBlocklistItemParameters,
  ): StreamableMethod<
    | TextBlocklistsGetTextBlocklistItem200Response
    | TextBlocklistsGetTextBlocklistItemDefaultResponse
  >;
}

export interface TextBlocklistsListTextBlocklistItems {
  /** Get all blocklistItems in a text blocklist. */
  get(
    options?: TextBlocklistsListTextBlocklistItemsParameters,
  ): StreamableMethod<
    | TextBlocklistsListTextBlocklistItems200Response
    | TextBlocklistsListTextBlocklistItemsDefaultResponse
  >;
}

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewer {
  /** Create a new Auto Reviewer or a new version of an existing Auto Reviewer. This will submit a long running operation. */
  put(
    options: AutoReviewerOperationsCreateOrReplaceAutoReviewerParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer200Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer201Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse
  >;
  /** Get the specified or latest version of the given Auto Reviewer. */
  get(
    options?: AutoReviewerOperationsGetAutoReviewerParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsGetAutoReviewer200Response
    | AutoReviewerOperationsGetAutoReviewerDefaultResponse
  >;
  /** Delete the specified or ALL versions of the given Auto Reviewer. */
  delete(
    options?: AutoReviewerOperationsDeleteAutoReviewerParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsDeleteAutoReviewer204Response
    | AutoReviewerOperationsDeleteAutoReviewerDefaultResponse
  >;
}

export interface AutoReviewerOperationsListAutoReviewers {
  /** List Auto Reviewers with their latest versions. */
  get(
    options?: AutoReviewerOperationsListAutoReviewersParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsListAutoReviewers200Response
    | AutoReviewerOperationsListAutoReviewersDefaultResponse
  >;
}

export interface AutoReviewerOperationsGetAutoReviewerOperation {
  /** Get details of an Auto Reviewer operation. */
  get(
    options?: AutoReviewerOperationsGetAutoReviewerOperationParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsGetAutoReviewerOperation200Response
    | AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse
  >;
}

export interface TextIncidentsGetIncidents {
  /** Return details of the given text safety incident. */
  get(
    options?: TextIncidentsGetIncidentsParameters,
  ): StreamableMethod<
    | TextIncidentsGetIncidents200Response
    | TextIncidentsGetIncidentsDefaultResponse
  >;
  /** Update the given text safety incident. If the incident does not exist, a new one will be created. */
  patch(
    options: TextIncidentsCreateOrUpdateIncidentParameters,
  ): StreamableMethod<
    | TextIncidentsCreateOrUpdateIncident200Response
    | TextIncidentsCreateOrUpdateIncident201Response
    | TextIncidentsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes the given text safety incident. */
  delete(
    options?: TextIncidentsDeleteIncidentParameters,
  ): StreamableMethod<
    | TextIncidentsDeleteIncident204Response
    | TextIncidentsDeleteIncidentDefaultResponse
  >;
}

export interface TextIncidentsListIncidents {
  /** List all text safety incidents and their details. */
  get(
    options?: TextIncidentsListIncidentsParameters,
  ): StreamableMethod<
    | TextIncidentsListIncidents200Response
    | TextIncidentsListIncidentsDefaultResponse
  >;
}

export interface TextIncidentsAddIncidentSamples {
  /** Add samples to the given text safety incident. */
  post(
    options?: TextIncidentsAddIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentsAddIncidentSamples200Response
    | TextIncidentsAddIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentsRemoveIncidentSamples {
  /** Remove samples from the given text safety incident. */
  post(
    options?: TextIncidentsRemoveIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentsRemoveIncidentSamples204Response
    | TextIncidentsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentsGetIncidentSample {
  /** Get details of a sample with the sample id from the given text safety incident. */
  get(
    options?: TextIncidentsGetIncidentSampleParameters,
  ): StreamableMethod<
    | TextIncidentsGetIncidentSample200Response
    | TextIncidentsGetIncidentSampleDefaultResponse
  >;
}

export interface TextIncidentsListIncidentSamples {
  /** List all samples added into the given text safety incident. */
  get(
    options?: TextIncidentsListIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentsListIncidentSamples200Response
    | TextIncidentsListIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsGetIncidents {
  /** Return details of the given image safety incident. */
  get(
    options?: ImageIncidentsGetIncidentsParameters,
  ): StreamableMethod<
    | ImageIncidentsGetIncidents200Response
    | ImageIncidentsGetIncidentsDefaultResponse
  >;
  /** Update the given image safety incident. If the incident does not exist, a new one will be created. */
  patch(
    options: ImageIncidentsCreateOrUpdateIncidentParameters,
  ): StreamableMethod<
    | ImageIncidentsCreateOrUpdateIncident200Response
    | ImageIncidentsCreateOrUpdateIncident201Response
    | ImageIncidentsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes the given image safety incident. */
  delete(
    options?: ImageIncidentsDeleteIncidentParameters,
  ): StreamableMethod<
    | ImageIncidentsDeleteIncident204Response
    | ImageIncidentsDeleteIncidentDefaultResponse
  >;
}

export interface ImageIncidentsListIncidents {
  /** List all image safety incidents and their details. */
  get(
    options?: ImageIncidentsListIncidentsParameters,
  ): StreamableMethod<
    | ImageIncidentsListIncidents200Response
    | ImageIncidentsListIncidentsDefaultResponse
  >;
}

export interface ImageIncidentsAddIncidentSamples {
  /** Add samples to the given image safety incident. */
  post(
    options?: ImageIncidentsAddIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentsAddIncidentSamples200Response
    | ImageIncidentsAddIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsRemoveIncidentSamples {
  /** Remove samples from the given image safety incident. */
  post(
    options?: ImageIncidentsRemoveIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentsRemoveIncidentSamples204Response
    | ImageIncidentsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsGetIncidentSample {
  /** Get details of a sample with the sample id from the given image safety incident. */
  get(
    options?: ImageIncidentsGetIncidentSampleParameters,
  ): StreamableMethod<
    | ImageIncidentsGetIncidentSample200Response
    | ImageIncidentsGetIncidentSampleDefaultResponse
  >;
}

export interface ImageIncidentsListIncidentSamples {
  /** List all samples added into the given image safety incident. */
  get(
    options?: ImageIncidentsListIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentsListIncidentSamples200Response
    | ImageIncidentsListIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentOperationDeploy {
  /** Deploy the given text safety incident. After the deployment completed, the incident can be used to detect content. This will submit a long running operation. */
  post(
    options?: TextIncidentOperationDeployParameters,
  ): StreamableMethod<
    | TextIncidentOperationDeploy202Response
    | TextIncidentOperationDeployDefaultResponse
  >;
}

export interface TextIncidentOperationGetTextIncidentOperation {
  /** Get details of the given text safety incident operation. */
  get(
    options?: TextIncidentOperationGetTextIncidentOperationParameters,
  ): StreamableMethod<
    | TextIncidentOperationGetTextIncidentOperation200Response
    | TextIncidentOperationGetTextIncidentOperationDefaultResponse
  >;
}

export interface ImageIncidentOperationDeploy {
  /** Deploy the given image safety incident. After the deployment completed, the incident can be used to detect content. This will submit a long running operation. */
  post(
    options?: ImageIncidentOperationDeployParameters,
  ): StreamableMethod<
    | ImageIncidentOperationDeploy202Response
    | ImageIncidentOperationDeployDefaultResponse
  >;
}

export interface ImageIncidentOperationGetImageIncidentOperation {
  /** Get details of an image safety incident operation. */
  get(
    options?: ImageIncidentOperationGetImageIncidentOperationParameters,
  ): StreamableMethod<
    | ImageIncidentOperationGetImageIncidentOperation200Response
    | ImageIncidentOperationGetImageIncidentOperationDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion {
  /** Create a new Custom Category or a new version of an existing Custom Category. This will submit a long running operation. */
  put(
    options: TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse
  >;
  /** Get the specified or latest version of the given Custom Category. */
  get(
    options?: TextCustomizedCategoryOperationsGetCustomizedCategoryParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsGetCustomizedCategory200Response
    | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse
  >;
  /** Delete the specified or ALL versions of the given Custom Category. */
  delete(
    options?: TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response
    | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsListCustomizedCategory {
  /** List Custom Categories with their latest versions. */
  get(
    options?: TextCustomizedCategoryOperationsListCustomizedCategoryParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsListCustomizedCategory200Response
    | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsBuild {
  /** Trigger the build process for the given Custom Category. After the build completed, the category can be used to analyze content. This will submit a long running operation. */
  post(
    options: TextCustomizedCategoryOperationsBuildParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsBuild202Response
    | TextCustomizedCategoryOperationsBuildDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsGetCustomCategoryOperation {
  /** Get details of the given Custom Category operation. */
  get(
    options?: TextCustomizedCategoryOperationsGetCustomCategoryOperationParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response
    | TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/image:analyze' has methods for the following verbs: post */
  (path: "/image:analyze"): ImageOperationsAnalyzeImage;
  /** Resource for '/image:detectIncidents' has methods for the following verbs: post */
  (path: "/image:detectIncidents"): ImageOperationsDetectImageIncidents;
  /** Resource for '/image:detectContentCredential' has methods for the following verbs: post */
  (
    path: "/image:detectContentCredential",
  ): ImageOperationsDetectContentCredential;
  /** Resource for '/text:analyze' has methods for the following verbs: post */
  (path: "/text:analyze"): TextOperationsAnalyzeText;
  /** Resource for '/text:shieldPrompt' has methods for the following verbs: post */
  (path: "/text:shieldPrompt"): TextOperationsShieldPrompt;
  /** Resource for '/text:detectProtectedMaterial' has methods for the following verbs: post */
  (
    path: "/text:detectProtectedMaterial",
  ): TextOperationsDetectTextProtectedMaterial;
  /** Resource for '/text:analyzeCustomCategory' has methods for the following verbs: post */
  (
    path: "/text:analyzeCustomCategory",
  ): TextOperationsAnalyzeTextCustomCategory;
  /** Resource for '/text:autoReview' has methods for the following verbs: post */
  (path: "/text:autoReview"): TextOperationsAutoReview;
  /** Resource for '/text:detectIncidents' has methods for the following verbs: post */
  (path: "/text:detectIncidents"): TextOperationsDetectTextIncidents;
  /** Resource for '/text:detectGroundedness' has methods for the following verbs: post */
  (path: "/text:detectGroundedness"): TextOperationsDetectGroundednessOptions;
  /** Resource for '/text/blocklists/\{blocklistName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/blocklists/{blocklistName}",
    blocklistName: string,
  ): TextBlocklistsGetTextBlocklist;
  /** Resource for '/text/blocklists' has methods for the following verbs: get */
  (path: "/text/blocklists"): TextBlocklistsListTextBlocklists;
  /** Resource for '/text/blocklists/\{blocklistName\}:addOrUpdateBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems",
    blocklistName: string,
  ): TextBlocklistsAddOrUpdateBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}:removeBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:removeBlocklistItems",
    blocklistName: string,
  ): TextBlocklistsRemoveBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems/\{blocklistItemId\}' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}",
    blocklistName: string,
    blocklistItemId: string,
  ): TextBlocklistsGetTextBlocklistItem;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems",
    blocklistName: string,
  ): TextBlocklistsListTextBlocklistItems;
  /** Resource for '/text/autoReviewers/\{autoReviewerName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/text/autoReviewers/{autoReviewerName}",
    autoReviewerName: string,
  ): AutoReviewerOperationsCreateOrReplaceAutoReviewer;
  /** Resource for '/text/autoReviewers' has methods for the following verbs: get */
  (path: "/text/autoReviewers"): AutoReviewerOperationsListAutoReviewers;
  /** Resource for '/text/autoReviewers/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/autoReviewers/operations/{operationId}",
    operationId: string,
  ): AutoReviewerOperationsGetAutoReviewerOperation;
  /** Resource for '/text/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/incidents/{incidentName}",
    incidentName: string,
  ): TextIncidentsGetIncidents;
  /** Resource for '/text/incidents' has methods for the following verbs: get */
  (path: "/text/incidents"): TextIncidentsListIncidents;
  /** Resource for '/text/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:addIncidentSamples",
    incidentName: string,
  ): TextIncidentsAddIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string,
  ): TextIncidentsRemoveIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string,
  ): TextIncidentsGetIncidentSample;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples",
    incidentName: string,
  ): TextIncidentsListIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/image/incidents/{incidentName}",
    incidentName: string,
  ): ImageIncidentsGetIncidents;
  /** Resource for '/image/incidents' has methods for the following verbs: get */
  (path: "/image/incidents"): ImageIncidentsListIncidents;
  /** Resource for '/image/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:addIncidentSamples",
    incidentName: string,
  ): ImageIncidentsAddIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string,
  ): ImageIncidentsRemoveIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string,
  ): ImageIncidentsGetIncidentSample;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples",
    incidentName: string,
  ): ImageIncidentsListIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}:deploy' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:deploy",
    incidentName: string,
  ): TextIncidentOperationDeploy;
  /** Resource for '/text/incidents/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/incidents/operations/{operationId}",
    operationId: string,
  ): TextIncidentOperationGetTextIncidentOperation;
  /** Resource for '/image/incidents/\{incidentName\}:deploy' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:deploy",
    incidentName: string,
  ): ImageIncidentOperationDeploy;
  /** Resource for '/image/incidents/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/image/incidents/operations/{operationId}",
    operationId: string,
  ): ImageIncidentOperationGetImageIncidentOperation;
  /** Resource for '/text/categories/\{categoryName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/text/categories/{categoryName}",
    categoryName: string,
  ): TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion;
  /** Resource for '/text/categories' has methods for the following verbs: get */
  (
    path: "/text/categories",
  ): TextCustomizedCategoryOperationsListCustomizedCategory;
  /** Resource for '/text/categories/\{categoryName\}:build' has methods for the following verbs: post */
  (
    path: "/text/categories/{categoryName}:build",
    categoryName: string,
  ): TextCustomizedCategoryOperationsBuild;
  /** Resource for '/text/categories/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/categories/operations/{operationId}",
    operationId: string,
  ): TextCustomizedCategoryOperationsGetCustomCategoryOperation;
}

export type ContentSafetyClient = Client & {
  path: Routes;
};
