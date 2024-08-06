// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  AnalyzeImageOptions,
  AnalyzeImageDetectIncidentsOptions,
  DetectImageContentCredentialOptions,
  AnalyzeTextOptions,
  ShieldPromptOptions,
  DetectTextProtectedMaterialOptions,
  AnalyzeTextCustomCategoryOption,
  AutoReviewTextOptions,
  AnalyzeTextDetectIncidentsOptions,
  AnalyzeTextGroundednessOptions,
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  RemoveTextBlocklistItemsOptions,
  AutoReviewerVersion,
  TextIncident,
  AddTextIncidentSamplesOptions,
  RemoveTextIncidentSamplesOptions,
  ImageIncident,
  AddImageIncidentSamplesOptions,
  RemoveImageIncidentSamplesOptions,
  TextCustomCategoryVersion,
} from "./models.js";

export interface ImageOperationsAnalyzeImageBodyParam {
  /** The image analysis request. */
  body: AnalyzeImageOptions;
}

export type ImageOperationsAnalyzeImageParameters =
  ImageOperationsAnalyzeImageBodyParam & RequestParameters;

export interface ImageOperationsDetectImageIncidentsBodyParam {
  /** The request body to be detected. */
  body: AnalyzeImageDetectIncidentsOptions;
}

export type ImageOperationsDetectImageIncidentsParameters =
  ImageOperationsDetectImageIncidentsBodyParam & RequestParameters;

export interface ImageOperationsDetectContentCredentialBodyParam {
  /** The image to be decoded, which is in base64 string format. */
  body: DetectImageContentCredentialOptions;
}

export type ImageOperationsDetectContentCredentialParameters =
  ImageOperationsDetectContentCredentialBodyParam & RequestParameters;

export interface TextOperationsAnalyzeTextBodyParam {
  /** The text analysis request. */
  body: AnalyzeTextOptions;
}

export type TextOperationsAnalyzeTextParameters =
  TextOperationsAnalyzeTextBodyParam & RequestParameters;

export interface TextOperationsShieldPromptBodyParam {
  /** The request body to be detected, which may contain direct or indirect injection attacks. */
  body: ShieldPromptOptions;
}

export type TextOperationsShieldPromptParameters =
  TextOperationsShieldPromptBodyParam & RequestParameters;

export interface TextOperationsDetectTextProtectedMaterialBodyParam {
  /** The request body to be detected, which may contain protected material. */
  body: DetectTextProtectedMaterialOptions;
}

export type TextOperationsDetectTextProtectedMaterialParameters =
  TextOperationsDetectTextProtectedMaterialBodyParam & RequestParameters;

export interface TextOperationsAnalyzeTextCustomCategoryBodyParam {
  /** The request body to be analyzed. */
  body: AnalyzeTextCustomCategoryOption;
}

export type TextOperationsAnalyzeTextCustomCategoryParameters =
  TextOperationsAnalyzeTextCustomCategoryBodyParam & RequestParameters;

export interface TextOperationsAutoReviewBodyParam {
  /** The request body to be analyzed. */
  body: AutoReviewTextOptions;
}

export type TextOperationsAutoReviewParameters =
  TextOperationsAutoReviewBodyParam & RequestParameters;

export interface TextOperationsDetectTextIncidentsBodyParam {
  /** The request body to be detected. */
  body: AnalyzeTextDetectIncidentsOptions;
}

export type TextOperationsDetectTextIncidentsParameters =
  TextOperationsDetectTextIncidentsBodyParam & RequestParameters;

export interface TextOperationsDetectGroundednessOptionsBodyParam {
  /** The request body to be detected. */
  body: AnalyzeTextGroundednessOptions;
}

export type TextOperationsDetectGroundednessOptionsParameters =
  TextOperationsDetectGroundednessOptionsBodyParam & RequestParameters;
export type TextBlocklistsGetTextBlocklistParameters = RequestParameters;
/** The resource instance. */
export type TextBlocklistResourceMergeAndPatch = Partial<TextBlocklist>;

export interface TextBlocklistsCreateOrUpdateTextBlocklistBodyParam {
  /** The resource instance. */
  body: TextBlocklistResourceMergeAndPatch;
}

export interface TextBlocklistsCreateOrUpdateTextBlocklistMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type TextBlocklistsCreateOrUpdateTextBlocklistParameters =
  TextBlocklistsCreateOrUpdateTextBlocklistMediaTypesParam &
    TextBlocklistsCreateOrUpdateTextBlocklistBodyParam &
    RequestParameters;
export type TextBlocklistsDeleteTextBlocklistParameters = RequestParameters;
export type TextBlocklistsListTextBlocklistsParameters = RequestParameters;

export interface TextBlocklistsAddOrUpdateBlocklistItemsBodyParam {
  /** Options for adding or updating blocklist items. */
  body: AddOrUpdateTextBlocklistItemsOptions;
}

export type TextBlocklistsAddOrUpdateBlocklistItemsParameters =
  TextBlocklistsAddOrUpdateBlocklistItemsBodyParam & RequestParameters;

export interface TextBlocklistsRemoveBlocklistItemsBodyParam {
  /** Options for removing blocklist items. */
  body: RemoveTextBlocklistItemsOptions;
}

export type TextBlocklistsRemoveBlocklistItemsParameters =
  TextBlocklistsRemoveBlocklistItemsBodyParam & RequestParameters;
export type TextBlocklistsGetTextBlocklistItemParameters = RequestParameters;

export interface TextBlocklistsListTextBlocklistItemsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface TextBlocklistsListTextBlocklistItemsQueryParam {
  queryParameters?: TextBlocklistsListTextBlocklistItemsQueryParamProperties;
}

export type TextBlocklistsListTextBlocklistItemsParameters =
  TextBlocklistsListTextBlocklistItemsQueryParam & RequestParameters;

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewerHeaders {
  /** The operation id passed by the user, if not provided, will be automatically generated as a UUID. */
  "Operation-Id"?: string;
}

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewerBodyParam {
  /** The resource instance. */
  body: AutoReviewerVersion;
}

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewerHeaderParam {
  headers?: RawHttpHeadersInput &
    AutoReviewerOperationsCreateOrReplaceAutoReviewerHeaders;
}

export type AutoReviewerOperationsCreateOrReplaceAutoReviewerParameters =
  AutoReviewerOperationsCreateOrReplaceAutoReviewerHeaderParam &
    AutoReviewerOperationsCreateOrReplaceAutoReviewerBodyParam &
    RequestParameters;

export interface AutoReviewerOperationsGetAutoReviewerQueryParamProperties {
  /** If not provided, it will return the latest version. */
  version?: number;
}

export interface AutoReviewerOperationsGetAutoReviewerQueryParam {
  queryParameters?: AutoReviewerOperationsGetAutoReviewerQueryParamProperties;
}

export type AutoReviewerOperationsGetAutoReviewerParameters =
  AutoReviewerOperationsGetAutoReviewerQueryParam & RequestParameters;

export interface AutoReviewerOperationsListAutoReviewersQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface AutoReviewerOperationsListAutoReviewersQueryParam {
  queryParameters?: AutoReviewerOperationsListAutoReviewersQueryParamProperties;
}

export type AutoReviewerOperationsListAutoReviewersParameters =
  AutoReviewerOperationsListAutoReviewersQueryParam & RequestParameters;

export interface AutoReviewerOperationsDeleteAutoReviewerQueryParamProperties {
  /** If not provided, it will delete ALL versions. */
  version?: number;
}

export interface AutoReviewerOperationsDeleteAutoReviewerQueryParam {
  queryParameters?: AutoReviewerOperationsDeleteAutoReviewerQueryParamProperties;
}

export type AutoReviewerOperationsDeleteAutoReviewerParameters =
  AutoReviewerOperationsDeleteAutoReviewerQueryParam & RequestParameters;
export type AutoReviewerOperationsGetAutoReviewerOperationParameters =
  RequestParameters;
export type TextIncidentsGetIncidentsParameters = RequestParameters;
/** The resource instance. */
export type TextIncidentResourceMergeAndPatch = Partial<TextIncident>;

export interface TextIncidentsCreateOrUpdateIncidentBodyParam {
  /** The resource instance. */
  body: TextIncidentResourceMergeAndPatch;
}

export interface TextIncidentsCreateOrUpdateIncidentMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type TextIncidentsCreateOrUpdateIncidentParameters =
  TextIncidentsCreateOrUpdateIncidentMediaTypesParam &
    TextIncidentsCreateOrUpdateIncidentBodyParam &
    RequestParameters;
export type TextIncidentsDeleteIncidentParameters = RequestParameters;

export interface TextIncidentsListIncidentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface TextIncidentsListIncidentsQueryParam {
  queryParameters?: TextIncidentsListIncidentsQueryParamProperties;
}

export type TextIncidentsListIncidentsParameters =
  TextIncidentsListIncidentsQueryParam & RequestParameters;

export interface TextIncidentsAddIncidentSamplesBodyParam {
  body?: AddTextIncidentSamplesOptions;
}

export type TextIncidentsAddIncidentSamplesParameters =
  TextIncidentsAddIncidentSamplesBodyParam & RequestParameters;

export interface TextIncidentsRemoveIncidentSamplesBodyParam {
  body?: RemoveTextIncidentSamplesOptions;
}

export type TextIncidentsRemoveIncidentSamplesParameters =
  TextIncidentsRemoveIncidentSamplesBodyParam & RequestParameters;
export type TextIncidentsGetIncidentSampleParameters = RequestParameters;

export interface TextIncidentsListIncidentSamplesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface TextIncidentsListIncidentSamplesQueryParam {
  queryParameters?: TextIncidentsListIncidentSamplesQueryParamProperties;
}

export type TextIncidentsListIncidentSamplesParameters =
  TextIncidentsListIncidentSamplesQueryParam & RequestParameters;
export type ImageIncidentsGetIncidentsParameters = RequestParameters;
/** The resource instance. */
export type ImageIncidentResourceMergeAndPatch = Partial<ImageIncident>;

export interface ImageIncidentsCreateOrUpdateIncidentBodyParam {
  /** The resource instance. */
  body: ImageIncidentResourceMergeAndPatch;
}

export interface ImageIncidentsCreateOrUpdateIncidentMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ImageIncidentsCreateOrUpdateIncidentParameters =
  ImageIncidentsCreateOrUpdateIncidentMediaTypesParam &
    ImageIncidentsCreateOrUpdateIncidentBodyParam &
    RequestParameters;
export type ImageIncidentsDeleteIncidentParameters = RequestParameters;

export interface ImageIncidentsListIncidentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ImageIncidentsListIncidentsQueryParam {
  queryParameters?: ImageIncidentsListIncidentsQueryParamProperties;
}

export type ImageIncidentsListIncidentsParameters =
  ImageIncidentsListIncidentsQueryParam & RequestParameters;

export interface ImageIncidentsAddIncidentSamplesBodyParam {
  body?: AddImageIncidentSamplesOptions;
}

export type ImageIncidentsAddIncidentSamplesParameters =
  ImageIncidentsAddIncidentSamplesBodyParam & RequestParameters;

export interface ImageIncidentsRemoveIncidentSamplesBodyParam {
  body?: RemoveImageIncidentSamplesOptions;
}

export type ImageIncidentsRemoveIncidentSamplesParameters =
  ImageIncidentsRemoveIncidentSamplesBodyParam & RequestParameters;
export type ImageIncidentsGetIncidentSampleParameters = RequestParameters;

export interface ImageIncidentsListIncidentSamplesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ImageIncidentsListIncidentSamplesQueryParam {
  queryParameters?: ImageIncidentsListIncidentSamplesQueryParamProperties;
}

export type ImageIncidentsListIncidentSamplesParameters =
  ImageIncidentsListIncidentSamplesQueryParam & RequestParameters;

export interface TextIncidentOperationDeployHeaders {
  /** The operation id passed by the user, if not provided, will be automatically generated as a UUID. */
  "Operation-Id"?: string;
}

export interface TextIncidentOperationDeployHeaderParam {
  headers?: RawHttpHeadersInput & TextIncidentOperationDeployHeaders;
}

export type TextIncidentOperationDeployParameters =
  TextIncidentOperationDeployHeaderParam & RequestParameters;
export type TextIncidentOperationGetTextIncidentOperationParameters =
  RequestParameters;

export interface ImageIncidentOperationDeployHeaders {
  /** The operation id passed by the user, if not provided, will be automatically generated as a UUID. */
  "Operation-Id"?: string;
}

export interface ImageIncidentOperationDeployHeaderParam {
  headers?: RawHttpHeadersInput & ImageIncidentOperationDeployHeaders;
}

export type ImageIncidentOperationDeployParameters =
  ImageIncidentOperationDeployHeaderParam & RequestParameters;
export type ImageIncidentOperationGetImageIncidentOperationParameters =
  RequestParameters;

export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionBodyParam {
  /** The resource instance. */
  body: TextCustomCategoryVersion;
}

export type TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters =
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionBodyParam &
    RequestParameters;

export interface TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParamProperties {
  /** If not provided, it will return the latest version. */
  version?: number;
}

export interface TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParam {
  queryParameters?: TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParamProperties;
}

export type TextCustomizedCategoryOperationsGetCustomizedCategoryParameters =
  TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParam &
    RequestParameters;

export interface TextCustomizedCategoryOperationsListCustomizedCategoryQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface TextCustomizedCategoryOperationsListCustomizedCategoryQueryParam {
  queryParameters?: TextCustomizedCategoryOperationsListCustomizedCategoryQueryParamProperties;
}

export type TextCustomizedCategoryOperationsListCustomizedCategoryParameters =
  TextCustomizedCategoryOperationsListCustomizedCategoryQueryParam &
    RequestParameters;

export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParamProperties {
  /** If not provided, it will delete ALL versions. */
  version?: number;
}

export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParam {
  queryParameters?: TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParamProperties;
}

export type TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters =
  TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParam &
    RequestParameters;

export interface TextCustomizedCategoryOperationsBuildHeaders {
  /** The operation id passed by the user, if not provided, will be automatically generated as a UUID. */
  "Operation-Id"?: string;
}

export interface TextCustomizedCategoryOperationsBuildQueryParamProperties {
  /** The build will target on the given version. */
  version: number;
}

export interface TextCustomizedCategoryOperationsBuildQueryParam {
  queryParameters: TextCustomizedCategoryOperationsBuildQueryParamProperties;
}

export interface TextCustomizedCategoryOperationsBuildHeaderParam {
  headers?: RawHttpHeadersInput & TextCustomizedCategoryOperationsBuildHeaders;
}

export type TextCustomizedCategoryOperationsBuildParameters =
  TextCustomizedCategoryOperationsBuildQueryParam &
    TextCustomizedCategoryOperationsBuildHeaderParam &
    RequestParameters;
export type TextCustomizedCategoryOperationsGetCustomCategoryOperationParameters =
  RequestParameters;
