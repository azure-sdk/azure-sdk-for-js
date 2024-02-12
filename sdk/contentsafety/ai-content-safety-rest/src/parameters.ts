// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AnalyzeTextOptions,
  AnalyzeTextJailbreakOptions,
  AnalyzeTextProtectedMaterialOptions,
  AnalyzeImageOptions,
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  RemoveTextBlocklistItemsOptions,
  BatchAnalyzeImagesOptions,
  TextIncident,
  AddTextIncidentSamplesOptions,
  RemoveTextIncidentSamplesOptions,
  ImageIncident,
  AddImageIncidentSamplesOptions,
  RemoveImageIncidentSamplesOptions,
  AnnotateTextOptions,
  TextCustomizedCategory,
  AnalyzeImageWithTextOptions,
  DetectUngroundednessOptions,
} from "./models";

export interface TextOperationsAnalyzeTextBodyParam {
  /** The text analysis request. */
  body: AnalyzeTextOptions;
}

export type TextOperationsAnalyzeTextParameters =
  TextOperationsAnalyzeTextBodyParam & RequestParameters;

export interface TextOperationsDetectTextJailbreakBodyParam {
  /** The text jailbreak analysis request. */
  body: AnalyzeTextJailbreakOptions;
}

export type TextOperationsDetectTextJailbreakParameters =
  TextOperationsDetectTextJailbreakBodyParam & RequestParameters;

export interface TextOperationsDetectTextProtectedMaterialBodyParam {
  /** The text protected material analysis request. */
  body: AnalyzeTextProtectedMaterialOptions;
}

export type TextOperationsDetectTextProtectedMaterialParameters =
  TextOperationsDetectTextProtectedMaterialBodyParam & RequestParameters;

export interface ImageOperationsAnalyzeImageBodyParam {
  /** The image analysis request. */
  body: AnalyzeImageOptions;
}

export type ImageOperationsAnalyzeImageParameters =
  ImageOperationsAnalyzeImageBodyParam & RequestParameters;
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

export interface ImageBatchOperationsBatchAnalyzeImageBodyParam {
  /** The image batch analysis request. */
  body: BatchAnalyzeImagesOptions;
}

export type ImageBatchOperationsBatchAnalyzeImageParameters =
  ImageBatchOperationsBatchAnalyzeImageBodyParam & RequestParameters;
export type ImageBatchOperationsGetBatchTaskStatusParameters =
  RequestParameters;

export interface ImageBatchOperationsListBatchTasksQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ImageBatchOperationsListBatchTasksQueryParam {
  queryParameters?: ImageBatchOperationsListBatchTasksQueryParamProperties;
}

export type ImageBatchOperationsListBatchTasksParameters =
  ImageBatchOperationsListBatchTasksQueryParam & RequestParameters;
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

export interface PromptTextOperationsAnnotateTextBodyParam {
  /** The text analysis request. */
  body: AnnotateTextOptions;
}

export type PromptTextOperationsAnnotateTextParameters =
  PromptTextOperationsAnnotateTextBodyParam & RequestParameters;

export interface TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryBodyParam {
  /** The resource instance. */
  body: TextCustomizedCategory;
}

export type TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryParameters =
  TextCategoryCustomizationCreateOrReplaceTextCustomizedCategoryBodyParam &
    RequestParameters;
export type TextCategoryCustomizationGetTextCustomizedCategoryParameters =
  RequestParameters;
export type TextCategoryCustomizationDeleteTextCustomizedCategoryParameters =
  RequestParameters;

export interface TextCategoryCustomizationListTextCustomizedCategoryQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface TextCategoryCustomizationListTextCustomizedCategoryQueryParam {
  queryParameters?: TextCategoryCustomizationListTextCustomizedCategoryQueryParamProperties;
}

export type TextCategoryCustomizationListTextCustomizedCategoryParameters =
  TextCategoryCustomizationListTextCustomizedCategoryQueryParam &
    RequestParameters;

export interface ImageWithTextOperationsAnalyzeImageWithTextBodyParam {
  /** The image with text analysis request. */
  body: AnalyzeImageWithTextOptions;
}

export type ImageWithTextOperationsAnalyzeImageWithTextParameters =
  ImageWithTextOperationsAnalyzeImageWithTextBodyParam & RequestParameters;

export interface TextUngroundednessDetectionOperationsDetectUngroundednessBodyParam {
  /** The ungroundedness detection request. */
  body: DetectUngroundednessOptions;
}

export type TextUngroundednessDetectionOperationsDetectUngroundednessParameters =
  TextUngroundednessDetectionOperationsDetectUngroundednessBodyParam &
    RequestParameters;
