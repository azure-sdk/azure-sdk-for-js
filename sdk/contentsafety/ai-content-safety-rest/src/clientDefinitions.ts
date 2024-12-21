// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImageOperationsAnalyzeImageParameters,
  ImageOperationsDetectImageIncidentsParameters,
  ImageOperationsDetectImageProtectedMaterialParameters,
  TextOperationsAnalyzeTextParameters,
  TextOperationsShieldPromptParameters,
  TextOperationsDetectTextProtectedMaterialParameters,
  TextOperationsDetectCodeProtectedMaterialParameters,
  TextOperationsAnalyzeTextCustomCategoryParameters,
  TextOperationsDetectTextIncidentsParameters,
  TextOperationsDetectGroundednessOptionsParameters,
  RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyParameters,
  TextBlocklistsGetTextBlocklistParameters,
  TextBlocklistsCreateOrUpdateTextBlocklistParameters,
  TextBlocklistsDeleteTextBlocklistParameters,
  TextBlocklistsListTextBlocklistsParameters,
  TextBlocklistsAddOrUpdateBlocklistItemsParameters,
  TextBlocklistsRemoveBlocklistItemsParameters,
  TextBlocklistsGetTextBlocklistItemParameters,
  TextBlocklistsListTextBlocklistItemsParameters,
  RaiPolicyManagementCreateOrUpdateRaiPolicyParameters,
  RaiPolicyManagementDeleteRaiPolicyParameters,
  RaiPolicyManagementGetRaiPolicyParameters,
  RaiPolicyManagementListRaiPoliciesParameters,
  ImageWithTextOperationsAnalyzeImageWithTextParameters,
  TextIncidentOperationsDeployParameters,
  TextIncidentOperationsGetLongRunningOperationParameters,
  TextIncidentOperationsGetIncidentsParameters,
  TextIncidentOperationsCreateOrUpdateIncidentParameters,
  TextIncidentOperationsDeleteIncidentParameters,
  TextIncidentOperationsListIncidentsParameters,
  TextIncidentOperationsAddIncidentSamplesParameters,
  TextIncidentOperationsRemoveIncidentSamplesParameters,
  TextIncidentOperationsGetIncidentSampleParameters,
  TextIncidentOperationsListIncidentSamplesParameters,
  ImageIncidentOperationsDeployParameters,
  ImageIncidentOperationsGetLongRunningOperationParameters,
  ImageIncidentOperationsGetIncidentsParameters,
  ImageIncidentOperationsCreateOrUpdateIncidentParameters,
  ImageIncidentOperationsDeleteIncidentParameters,
  ImageIncidentOperationsListIncidentsParameters,
  ImageIncidentOperationsAddIncidentSamplesParameters,
  ImageIncidentOperationsRemoveIncidentSamplesParameters,
  ImageIncidentOperationsGetIncidentSampleParameters,
  ImageIncidentOperationsListIncidentSamplesParameters,
  TextCustomizedCategoryOperationsBuildParameters,
  TextCustomizedCategoryOperationsGetLongRunningOperationParameters,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters,
  TextCustomizedCategoryOperationsGetCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsListCustomizedCategoryParameters,
} from "./parameters.js";
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

export interface ImageOperationsDetectImageProtectedMaterial {
  /** A synchronous API for detecting protected material in the given image. */
  post(
    options: ImageOperationsDetectImageProtectedMaterialParameters,
  ): StreamableMethod<
    | ImageOperationsDetectImageProtectedMaterial200Response
    | ImageOperationsDetectImageProtectedMaterialDefaultResponse
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

export interface TextOperationsDetectCodeProtectedMaterial {
  /** A synchronous API for detecting protected material in the given code. */
  post(
    options: TextOperationsDetectCodeProtectedMaterialParameters,
  ): StreamableMethod<
    | TextOperationsDetectCodeProtectedMaterial200Response
    | TextOperationsDetectCodeProtectedMaterialDefaultResponse
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

export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy {
  /** A synchronous API for the rai policy analysis of input content */
  post(
    options: RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyParameters,
  ): StreamableMethod<
    | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response
    | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse
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

export interface RaiPolicyManagementCreateOrUpdateRaiPolicy {
  /** Updates a rai policy. If the policyName does not exist, a new rai policy will be created. */
  patch(
    options: RaiPolicyManagementCreateOrUpdateRaiPolicyParameters,
  ): StreamableMethod<
    | RaiPolicyManagementCreateOrUpdateRaiPolicy200Response
    | RaiPolicyManagementCreateOrUpdateRaiPolicy201Response
    | RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse
  >;
  /** Deletes a rai policy. */
  delete(
    options?: RaiPolicyManagementDeleteRaiPolicyParameters,
  ): StreamableMethod<
    | RaiPolicyManagementDeleteRaiPolicy204Response
    | RaiPolicyManagementDeleteRaiPolicyDefaultResponse
  >;
  /** Returns rai policy details. */
  get(
    options?: RaiPolicyManagementGetRaiPolicyParameters,
  ): StreamableMethod<
    | RaiPolicyManagementGetRaiPolicy200Response
    | RaiPolicyManagementGetRaiPolicyDefaultResponse
  >;
}

export interface RaiPolicyManagementListRaiPolicies {
  /** Get all rai policies details. */
  get(
    options?: RaiPolicyManagementListRaiPoliciesParameters,
  ): StreamableMethod<
    | RaiPolicyManagementListRaiPolicies200Response
    | RaiPolicyManagementListRaiPoliciesDefaultResponse
  >;
}

export interface ImageWithTextOperationsAnalyzeImageWithText {
  /** A synchronous API to analyze image content with embedded or custom text content. */
  post(
    options: ImageWithTextOperationsAnalyzeImageWithTextParameters,
  ): StreamableMethod<
    | ImageWithTextOperationsAnalyzeImageWithText200Response
    | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse
  >;
}

export interface TextIncidentOperationsDeploy {
  /** Deploy the given text safety incident. After the deployment completed, the incident can be used to detect content. This will submit a long running operation. */
  post(
    options?: TextIncidentOperationsDeployParameters,
  ): StreamableMethod<
    | TextIncidentOperationsDeploy202Response
    | TextIncidentOperationsDeployDefaultResponse
  >;
}

export interface TextIncidentOperationsGetLongRunningOperation {
  /** Get details of the given text safety incident operation. */
  get(
    options?: TextIncidentOperationsGetLongRunningOperationParameters,
  ): StreamableMethod<
    | TextIncidentOperationsGetLongRunningOperation200Response
    | TextIncidentOperationsGetLongRunningOperationDefaultResponse
  >;
}

export interface TextIncidentOperationsGetIncidents {
  /** Return details of the given text safety incident. */
  get(
    options?: TextIncidentOperationsGetIncidentsParameters,
  ): StreamableMethod<
    | TextIncidentOperationsGetIncidents200Response
    | TextIncidentOperationsGetIncidentsDefaultResponse
  >;
  /** Update the given text safety incident. If the incident does not exist, a new one will be created. */
  patch(
    options: TextIncidentOperationsCreateOrUpdateIncidentParameters,
  ): StreamableMethod<
    | TextIncidentOperationsCreateOrUpdateIncident200Response
    | TextIncidentOperationsCreateOrUpdateIncident201Response
    | TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes the given text safety incident. */
  delete(
    options?: TextIncidentOperationsDeleteIncidentParameters,
  ): StreamableMethod<
    | TextIncidentOperationsDeleteIncident204Response
    | TextIncidentOperationsDeleteIncidentDefaultResponse
  >;
}

export interface TextIncidentOperationsListIncidents {
  /** List all text safety incidents and their details. */
  get(
    options?: TextIncidentOperationsListIncidentsParameters,
  ): StreamableMethod<
    | TextIncidentOperationsListIncidents200Response
    | TextIncidentOperationsListIncidentsDefaultResponse
  >;
}

export interface TextIncidentOperationsAddIncidentSamples {
  /** Add samples to the given text safety incident. */
  post(
    options: TextIncidentOperationsAddIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentOperationsAddIncidentSamples200Response
    | TextIncidentOperationsAddIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentOperationsRemoveIncidentSamples {
  /** Remove samples from the given text safety incident. */
  post(
    options: TextIncidentOperationsRemoveIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentOperationsRemoveIncidentSamples204Response
    | TextIncidentOperationsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentOperationsGetIncidentSample {
  /** Get details of a sample with the sample id from the given text safety incident. */
  get(
    options?: TextIncidentOperationsGetIncidentSampleParameters,
  ): StreamableMethod<
    | TextIncidentOperationsGetIncidentSample200Response
    | TextIncidentOperationsGetIncidentSampleDefaultResponse
  >;
}

export interface TextIncidentOperationsListIncidentSamples {
  /** List all samples added into the given text safety incident. */
  get(
    options?: TextIncidentOperationsListIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentOperationsListIncidentSamples200Response
    | TextIncidentOperationsListIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentOperationsDeploy {
  /** Deploy the given image safety incident. After the deployment completed, the incident can be used to detect content. This will submit a long running operation. */
  post(
    options?: ImageIncidentOperationsDeployParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsDeploy202Response
    | ImageIncidentOperationsDeployDefaultResponse
  >;
}

export interface ImageIncidentOperationsGetLongRunningOperation {
  /** Get details of an image safety incident operation. */
  get(
    options?: ImageIncidentOperationsGetLongRunningOperationParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsGetLongRunningOperation200Response
    | ImageIncidentOperationsGetLongRunningOperationDefaultResponse
  >;
}

export interface ImageIncidentOperationsGetIncidents {
  /** Return details of the given image safety incident. */
  get(
    options?: ImageIncidentOperationsGetIncidentsParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsGetIncidents200Response
    | ImageIncidentOperationsGetIncidentsDefaultResponse
  >;
  /** Update the given image safety incident. If the incident does not exist, a new one will be created. */
  patch(
    options: ImageIncidentOperationsCreateOrUpdateIncidentParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsCreateOrUpdateIncident200Response
    | ImageIncidentOperationsCreateOrUpdateIncident201Response
    | ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes the given image safety incident. */
  delete(
    options?: ImageIncidentOperationsDeleteIncidentParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsDeleteIncident204Response
    | ImageIncidentOperationsDeleteIncidentDefaultResponse
  >;
}

export interface ImageIncidentOperationsListIncidents {
  /** List all image safety incidents and their details. */
  get(
    options?: ImageIncidentOperationsListIncidentsParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsListIncidents200Response
    | ImageIncidentOperationsListIncidentsDefaultResponse
  >;
}

export interface ImageIncidentOperationsAddIncidentSamples {
  /** Add samples to the given image safety incident. */
  post(
    options: ImageIncidentOperationsAddIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsAddIncidentSamples200Response
    | ImageIncidentOperationsAddIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentOperationsRemoveIncidentSamples {
  /** Remove samples from the given image safety incident. */
  post(
    options: ImageIncidentOperationsRemoveIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsRemoveIncidentSamples204Response
    | ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentOperationsGetIncidentSample {
  /** Get details of a sample with the sample id from the given image safety incident. */
  get(
    options?: ImageIncidentOperationsGetIncidentSampleParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsGetIncidentSample200Response
    | ImageIncidentOperationsGetIncidentSampleDefaultResponse
  >;
}

export interface ImageIncidentOperationsListIncidentSamples {
  /** List all samples added into the given image safety incident. */
  get(
    options?: ImageIncidentOperationsListIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentOperationsListIncidentSamples200Response
    | ImageIncidentOperationsListIncidentSamplesDefaultResponse
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

export interface TextCustomizedCategoryOperationsGetLongRunningOperation {
  /** Get details of the given Custom Category operation. */
  get(
    options?: TextCustomizedCategoryOperationsGetLongRunningOperationParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsGetLongRunningOperation200Response
    | TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse
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

export interface Routes {
  /** Resource for '/image:analyze' has methods for the following verbs: post */
  (path: "/image:analyze"): ImageOperationsAnalyzeImage;
  /** Resource for '/image:detectIncidents' has methods for the following verbs: post */
  (path: "/image:detectIncidents"): ImageOperationsDetectImageIncidents;
  /** Resource for '/image:detectProtectedMaterial' has methods for the following verbs: post */
  (
    path: "/image:detectProtectedMaterial",
  ): ImageOperationsDetectImageProtectedMaterial;
  /** Resource for '/text:analyze' has methods for the following verbs: post */
  (path: "/text:analyze"): TextOperationsAnalyzeText;
  /** Resource for '/text:shieldPrompt' has methods for the following verbs: post */
  (path: "/text:shieldPrompt"): TextOperationsShieldPrompt;
  /** Resource for '/text:detectProtectedMaterial' has methods for the following verbs: post */
  (
    path: "/text:detectProtectedMaterial",
  ): TextOperationsDetectTextProtectedMaterial;
  /** Resource for '/text:detectProtectedMaterialForCode' has methods for the following verbs: post */
  (
    path: "/text:detectProtectedMaterialForCode",
  ): TextOperationsDetectCodeProtectedMaterial;
  /** Resource for '/text:analyzeCustomCategory' has methods for the following verbs: post */
  (
    path: "/text:analyzeCustomCategory",
  ): TextOperationsAnalyzeTextCustomCategory;
  /** Resource for '/text:detectIncidents' has methods for the following verbs: post */
  (path: "/text:detectIncidents"): TextOperationsDetectTextIncidents;
  /** Resource for '/text:detectGroundedness' has methods for the following verbs: post */
  (path: "/text:detectGroundedness"): TextOperationsDetectGroundednessOptions;
  /** Resource for '/analyzeWithRaiPolicy' has methods for the following verbs: post */
  (path: "/analyzeWithRaiPolicy"): RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy;
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
  /** Resource for '/raiPolicies/\{raiPolicyName\}' has methods for the following verbs: patch, delete, get */
  (
    path: "/raiPolicies/{raiPolicyName}",
    raiPolicyName: string,
  ): RaiPolicyManagementCreateOrUpdateRaiPolicy;
  /** Resource for '/raiPolicies' has methods for the following verbs: get */
  (path: "/raiPolicies"): RaiPolicyManagementListRaiPolicies;
  /** Resource for '/imageWithText:analyze' has methods for the following verbs: post */
  (path: "/imageWithText:analyze"): ImageWithTextOperationsAnalyzeImageWithText;
  /** Resource for '/text/incidents/\{incidentName\}:deploy' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:deploy",
    incidentName: string,
  ): TextIncidentOperationsDeploy;
  /** Resource for '/text/incidents/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/incidents/operations/{operationId}",
    operationId: string,
  ): TextIncidentOperationsGetLongRunningOperation;
  /** Resource for '/text/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/incidents/{incidentName}",
    incidentName: string,
  ): TextIncidentOperationsGetIncidents;
  /** Resource for '/text/incidents' has methods for the following verbs: get */
  (path: "/text/incidents"): TextIncidentOperationsListIncidents;
  /** Resource for '/text/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:addIncidentSamples",
    incidentName: string,
  ): TextIncidentOperationsAddIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string,
  ): TextIncidentOperationsRemoveIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string,
  ): TextIncidentOperationsGetIncidentSample;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples",
    incidentName: string,
  ): TextIncidentOperationsListIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}:deploy' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:deploy",
    incidentName: string,
  ): ImageIncidentOperationsDeploy;
  /** Resource for '/image/incidents/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/image/incidents/operations/{operationId}",
    operationId: string,
  ): ImageIncidentOperationsGetLongRunningOperation;
  /** Resource for '/image/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/image/incidents/{incidentName}",
    incidentName: string,
  ): ImageIncidentOperationsGetIncidents;
  /** Resource for '/image/incidents' has methods for the following verbs: get */
  (path: "/image/incidents"): ImageIncidentOperationsListIncidents;
  /** Resource for '/image/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:addIncidentSamples",
    incidentName: string,
  ): ImageIncidentOperationsAddIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string,
  ): ImageIncidentOperationsRemoveIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string,
  ): ImageIncidentOperationsGetIncidentSample;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples",
    incidentName: string,
  ): ImageIncidentOperationsListIncidentSamples;
  /** Resource for '/text/categories/\{categoryName\}:build' has methods for the following verbs: post */
  (
    path: "/text/categories/{categoryName}:build",
    categoryName: string,
  ): TextCustomizedCategoryOperationsBuild;
  /** Resource for '/text/categories/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/categories/operations/{operationId}",
    operationId: string,
  ): TextCustomizedCategoryOperationsGetLongRunningOperation;
  /** Resource for '/text/categories/\{categoryName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/text/categories/{categoryName}",
    categoryName: string,
  ): TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion;
  /** Resource for '/text/categories' has methods for the following verbs: get */
  (
    path: "/text/categories",
  ): TextCustomizedCategoryOperationsListCustomizedCategory;
}

export type ContentSafetyClient = Client & {
  path: Routes;
};
