// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  AnalyzeImageOptions,
  AnalyzeImageDetectIncidentsOptions,
  DetectImageProtectedMaterialOptions,
  AnalyzeTextOptions,
  ShieldPromptOptions,
  DetectTextProtectedMaterialOptions,
  DetectCodeProtectedMaterialOptions,
  AnalyzeTextCustomCategoryOption,
  AnalyzeTextDetectIncidentsOptions,
  AnalyzeTextGroundednessOptions,
  RaiPolicyAnalyzeOption,
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  RemoveTextBlocklistItemsOptions,
  RaiPolicy,
  AnalyzeImageWithTextOptions,
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

export interface ImageOperationsDetectImageProtectedMaterialBodyParam {
  /** The request body to be detected, which may contain protected material. */
  body: DetectImageProtectedMaterialOptions;
}

export type ImageOperationsDetectImageProtectedMaterialParameters =
  ImageOperationsDetectImageProtectedMaterialBodyParam & RequestParameters;

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

export interface TextOperationsDetectCodeProtectedMaterialBodyParam {
  /** The request body to be detected, which may contain protected material. */
  body: DetectCodeProtectedMaterialOptions;
}

export type TextOperationsDetectCodeProtectedMaterialParameters =
  TextOperationsDetectCodeProtectedMaterialBodyParam & RequestParameters;

export interface TextOperationsAnalyzeTextCustomCategoryBodyParam {
  /** The request body to be analyzed. */
  body: AnalyzeTextCustomCategoryOption;
}

export type TextOperationsAnalyzeTextCustomCategoryParameters =
  TextOperationsAnalyzeTextCustomCategoryBodyParam & RequestParameters;

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

export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyBodyParam {
  /** The rai policy analyze request. */
  body: RaiPolicyAnalyzeOption;
}

export type RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyParameters =
  RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyBodyParam & RequestParameters;
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
/** The resource instance. */
export type RaiPolicyResourceMergeAndPatch = Partial<RaiPolicy>;

export interface RaiPolicyManagementCreateOrUpdateRaiPolicyBodyParam {
  /** The resource instance. */
  body: RaiPolicyResourceMergeAndPatch;
}

export interface RaiPolicyManagementCreateOrUpdateRaiPolicyMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type RaiPolicyManagementCreateOrUpdateRaiPolicyParameters =
  RaiPolicyManagementCreateOrUpdateRaiPolicyMediaTypesParam &
    RaiPolicyManagementCreateOrUpdateRaiPolicyBodyParam &
    RequestParameters;
export type RaiPolicyManagementDeleteRaiPolicyParameters = RequestParameters;
export type RaiPolicyManagementGetRaiPolicyParameters = RequestParameters;
export type RaiPolicyManagementListRaiPoliciesParameters = RequestParameters;

export interface ImageWithTextOperationsAnalyzeImageWithTextBodyParam {
  /** The request body of image-with-text analysis. */
  body: AnalyzeImageWithTextOptions;
}

export type ImageWithTextOperationsAnalyzeImageWithTextParameters =
  ImageWithTextOperationsAnalyzeImageWithTextBodyParam & RequestParameters;

export interface TextIncidentOperationsDeployHeaders {
  /** The operation id passed by the user, if not provided, will be automatically generated as a UUID. */
  "Operation-Id"?: string;
}

export interface TextIncidentOperationsDeployHeaderParam {
  headers?: RawHttpHeadersInput & TextIncidentOperationsDeployHeaders;
}

export type TextIncidentOperationsDeployParameters =
  TextIncidentOperationsDeployHeaderParam & RequestParameters;
export type TextIncidentOperationsGetLongRunningOperationParameters =
  RequestParameters;
export type TextIncidentOperationsGetIncidentsParameters = RequestParameters;
/** The resource instance. */
export type TextIncidentResourceMergeAndPatch = Partial<TextIncident>;

export interface TextIncidentOperationsCreateOrUpdateIncidentBodyParam {
  /** The resource instance. */
  body: TextIncidentResourceMergeAndPatch;
}

export interface TextIncidentOperationsCreateOrUpdateIncidentMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type TextIncidentOperationsCreateOrUpdateIncidentParameters =
  TextIncidentOperationsCreateOrUpdateIncidentMediaTypesParam &
    TextIncidentOperationsCreateOrUpdateIncidentBodyParam &
    RequestParameters;
export type TextIncidentOperationsDeleteIncidentParameters = RequestParameters;

export interface TextIncidentOperationsListIncidentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface TextIncidentOperationsListIncidentsQueryParam {
  queryParameters?: TextIncidentOperationsListIncidentsQueryParamProperties;
}

export type TextIncidentOperationsListIncidentsParameters =
  TextIncidentOperationsListIncidentsQueryParam & RequestParameters;

export interface TextIncidentOperationsAddIncidentSamplesBodyParam {
  body: AddTextIncidentSamplesOptions;
}

export type TextIncidentOperationsAddIncidentSamplesParameters =
  TextIncidentOperationsAddIncidentSamplesBodyParam & RequestParameters;

export interface TextIncidentOperationsRemoveIncidentSamplesBodyParam {
  body: RemoveTextIncidentSamplesOptions;
}

export type TextIncidentOperationsRemoveIncidentSamplesParameters =
  TextIncidentOperationsRemoveIncidentSamplesBodyParam & RequestParameters;
export type TextIncidentOperationsGetIncidentSampleParameters =
  RequestParameters;

export interface TextIncidentOperationsListIncidentSamplesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface TextIncidentOperationsListIncidentSamplesQueryParam {
  queryParameters?: TextIncidentOperationsListIncidentSamplesQueryParamProperties;
}

export type TextIncidentOperationsListIncidentSamplesParameters =
  TextIncidentOperationsListIncidentSamplesQueryParam & RequestParameters;

export interface ImageIncidentOperationsDeployHeaders {
  /** The operation id passed by the user, if not provided, will be automatically generated as a UUID. */
  "Operation-Id"?: string;
}

export interface ImageIncidentOperationsDeployHeaderParam {
  headers?: RawHttpHeadersInput & ImageIncidentOperationsDeployHeaders;
}

export type ImageIncidentOperationsDeployParameters =
  ImageIncidentOperationsDeployHeaderParam & RequestParameters;
export type ImageIncidentOperationsGetLongRunningOperationParameters =
  RequestParameters;
export type ImageIncidentOperationsGetIncidentsParameters = RequestParameters;
/** The resource instance. */
export type ImageIncidentResourceMergeAndPatch = Partial<ImageIncident>;

export interface ImageIncidentOperationsCreateOrUpdateIncidentBodyParam {
  /** The resource instance. */
  body: ImageIncidentResourceMergeAndPatch;
}

export interface ImageIncidentOperationsCreateOrUpdateIncidentMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ImageIncidentOperationsCreateOrUpdateIncidentParameters =
  ImageIncidentOperationsCreateOrUpdateIncidentMediaTypesParam &
    ImageIncidentOperationsCreateOrUpdateIncidentBodyParam &
    RequestParameters;
export type ImageIncidentOperationsDeleteIncidentParameters = RequestParameters;

export interface ImageIncidentOperationsListIncidentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ImageIncidentOperationsListIncidentsQueryParam {
  queryParameters?: ImageIncidentOperationsListIncidentsQueryParamProperties;
}

export type ImageIncidentOperationsListIncidentsParameters =
  ImageIncidentOperationsListIncidentsQueryParam & RequestParameters;

export interface ImageIncidentOperationsAddIncidentSamplesBodyParam {
  body: AddImageIncidentSamplesOptions;
}

export type ImageIncidentOperationsAddIncidentSamplesParameters =
  ImageIncidentOperationsAddIncidentSamplesBodyParam & RequestParameters;

export interface ImageIncidentOperationsRemoveIncidentSamplesBodyParam {
  body: RemoveImageIncidentSamplesOptions;
}

export type ImageIncidentOperationsRemoveIncidentSamplesParameters =
  ImageIncidentOperationsRemoveIncidentSamplesBodyParam & RequestParameters;
export type ImageIncidentOperationsGetIncidentSampleParameters =
  RequestParameters;

export interface ImageIncidentOperationsListIncidentSamplesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ImageIncidentOperationsListIncidentSamplesQueryParam {
  queryParameters?: ImageIncidentOperationsListIncidentSamplesQueryParamProperties;
}

export type ImageIncidentOperationsListIncidentSamplesParameters =
  ImageIncidentOperationsListIncidentSamplesQueryParam & RequestParameters;

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
export type TextCustomizedCategoryOperationsGetLongRunningOperationParameters =
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
