// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

/** The image analysis response. */
export interface AnalyzeImageResultOutput {
  /** Analysis result for categories. */
  categoriesAnalysis: Array<ImageCategoriesAnalysisOutput>;
}

/** Image analysis result. */
export interface ImageCategoriesAnalysisOutput {
  /**
   * The image analysis category.
   *
   * Possible values: "Hate", "SelfHarm", "Sexual", "Violence"
   */
  category: ImageCategoryOutput;
  /** The value increases with the severity of the input content. The value of this field is determined by the output type specified in the request. The output type could be ‘FourSeverityLevels’, and the output value can be 0, 2, 4, 6. */
  severity?: number;
}

/** The response of analyzing given content with content safety incidents defined. */
export interface DetectIncidentsResultOutput {
  /** The details of matched incidents. */
  incidentMatches: Array<IncidentMatchOutput>;
}

/** The definition of a matched content safety incident. */
export interface IncidentMatchOutput {
  /** The name of the matched incident. */
  incidentName: string;
}

/** The decoding results of content credential. */
export interface DecodeImageCredentialResultOutput {
  /** Analysis result for the given image. */
  imageCredentialAnalysis: ImageCredentialAnalysisResultOutput;
}

/** The decoding result of content credential. */
export interface ImageCredentialAnalysisResultOutput {
  /** The C2PA Manifest information that baked in the image. */
  imageManifest: string;
  /** Image Manifest added by Encode Model. */
  watermarkStickyManifest: string;
}

/** The text analysis response. */
export interface AnalyzeTextResultOutput {
  /** The blocklist match details. */
  blocklistsMatch?: Array<TextBlocklistMatchOutput>;
  /** Analysis result for categories. */
  categoriesAnalysis: Array<TextCategoriesAnalysisOutput>;
}

/** The result of blocklist match. */
export interface TextBlocklistMatchOutput {
  /** The name of the matched blocklist. */
  blocklistName: string;
  /** The ID of the matched item. */
  blocklistItemId: string;
  /** The content of the matched item. */
  blocklistItemText: string;
}

/** Text analysis result. */
export interface TextCategoriesAnalysisOutput {
  /**
   * The text analysis category.
   *
   * Possible values: "Hate", "SelfHarm", "Sexual", "Violence"
   */
  category: TextCategoryOutput;
  /** The value increases with the severity of the input content. The value of this field is determined by the output type specified in the request. The output type could be ‘FourSeverityLevels’ or ‘EightSeverity Levels’, and the output value can be 0, 2, 4, 6 or 0, 1, 2, 3, 4, 5, 6, or 7. */
  severity?: number;
}

/** The combined analysis results of potential direct or indirect injection attacks. */
export interface ShieldPromptResultOutput {
  /** Direct injection attacks analysis result for the given user prompt. */
  userPromptAnalysis?: UserPromptInjectionAnalysisResultOutput;
  /** Direct and indirect injection attacks analysis result for the given documents. */
  documentsAnalysis?: Array<DocumentInjectionAnalysisResultOutput>;
}

/** The individual analysis result of potential injection attacks in the given user prompt. */
export interface UserPromptInjectionAnalysisResultOutput {
  /** Whether a potential injection attack is detected or not. */
  attackDetected: boolean;
}

/** The individual analysis result of potential injection attacks in the given documents. */
export interface DocumentInjectionAnalysisResultOutput {
  /** Whether a potential injection attack is detected or not. */
  attackDetected: boolean;
}

/** The combined detection results of potential protected material. */
export interface DetectTextProtectedMaterialResultOutput {
  /** Analysis result for the given text. */
  protectedMaterialAnalysis: TextProtectedMaterialAnalysisResultOutput;
}

/** The individual detection result of potential protected material. */
export interface TextProtectedMaterialAnalysisResultOutput {
  /** Whether potential protected material is detected or not. */
  detected: boolean;
}

/** The combined detection results of potential protected material for code. */
export interface DetectCodeProtectedMaterialResultOutput {
  /** Analysis result for the given text. */
  protectedMaterialAnalysis: CodeProtectedMaterialAnalysisResultOutput;
}

/** The individual detection result of potential protected material for code. */
export interface CodeProtectedMaterialAnalysisResultOutput {
  /** Whether potential protected material is detected or not. */
  detected: boolean;
  /** The code citation of potential protected material for code. */
  codeCitations: Array<CodeCitationOutput>;
}

/** The code citation of potential protected material for code. */
export interface CodeCitationOutput {
  /** The license type fetched from source repository. */
  license: string;
  /** The repository URLs of the source code detected. */
  sourceUrls: string[];
}

/** The response of analyzing text with Custom Category. */
export interface AnalyzeTextCustomCategoryResultOutput {
  /** The analysis result with Custom Category. */
  customCategoryAnalysis: TextCustomCategoryAnalysisOutput;
}

/** The analysis result of Custom Category. */
export interface TextCustomCategoryAnalysisOutput {
  /** Whether the Custom Category is detected. */
  detected: boolean;
}

/** The response of analyzing text with Auto Reviewer. */
export interface AutoReviewTextResultOutput {
  /** The label classified by the given Auto Reviewer. */
  labelName: string;
  /** To provide more details of the analysis result. */
  reasoning: string;
}

/** The response of text groundedness analysis. */
export interface AnalyzeTextGroundednessResultOutput {
  /** Indicates whether ungrounded content is detected. */
  ungroundedDetected: boolean;
  /**
   * Specifies the proportion of the text identified as ungrounded,
   * expressed as a decimal between 0 and 1,
   * where 0 indicates no ungrounded content and 1 indicates the entire given text is considered ungrounded.
   */
  ungroundedPercentage: number;
  /** Provides insights into ungrounded content with specific examples and percentages. */
  ungroundedDetails: Array<UngroundednessDetailsOutput>;
  /**
   * The correction for detected ungroundedness.
   * It's available only when the 'correction' field in the input is set to true.
   */
  correctedText?: string;
}

/** Details of the content that identified as ungroundedness. */
export interface UngroundednessDetailsOutput {
  /** The original text which is considered as ungrounded. */
  text: string;
  /** The offset that the ungrounded content starts in the original text. */
  offset: IndexDetailsOutput;
  /** The length of the ungrounded content. */
  length: IndexDetailsOutput;
  /**
   * The explanation for detected ungroundedness.
   * It's available only when the 'reasoning' field in the input is set to true.
   */
  reason?: string;
}

/** To describe the string index in different representations. */
export interface IndexDetailsOutput {
  /** Indicate the index when encoding is UTF-8. */
  utf8: number;
  /** Indicate the index when encoding is UTF-16. */
  utf16: number;
  /** Indicate the index with code point format. */
  codePoint: number;
}

/** Text Blocklist. */
export interface TextBlocklistOutput {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

/** Item in a TextBlocklist. */
export interface TextBlocklistItemOutput {
  /** The service will generate a BlocklistItemId, which will be a UUID. */
  readonly blocklistItemId: string;
  /** BlocklistItem description. */
  description?: string;
  /** BlocklistItem content. The length is counted using Unicode code point. */
  text: string;
  /** An optional properties indicating whether this item is to be matched as a regular expression. */
  isRegex?: boolean;
}

/** The response of adding blocklistItems to the text blocklist. */
export interface AddOrUpdateTextBlocklistItemsResultOutput {
  /** Array of blocklistItems have been added. */
  blocklistItems: Array<TextBlocklistItemOutput>;
}

/** The response of analyzing an image with embedded or custom text. */
export interface AnalyzeImageWithTextResultOutput {
  /** The individual analysis result for each harm category. */
  categoriesAnalysis: Array<ImageWithTextCategoriesAnalysisOutput>;
}

/** The definition of individual result for analyzing an image with embedded or custom text. */
export interface ImageWithTextCategoriesAnalysisOutput {
  /**
   * The harm category detected.
   *
   * Possible values: "Hate", "SelfHarm", "Sexual", "Violence"
   */
  category: ImageWithTextCategoryOutput;
  /** It indicates the severity of the harm. 0 means the content is considered as safe in this harm category. */
  severity?: number;
}

/** Definition of an Auto Reviewer version. */
export interface AutoReviewerVersionOutput {
  /** The name of the Auto Reviewer. */
  autoReviewerName: string;
  /** The labels defined in the Auto Reviewer. There should be a label named 'Other' in the list. The 'Other' label is the default one to represent the content that does not classified as any other labels. */
  labels: Array<AutoReviewerLabelDetailsOutput>;
  /** The blob URL which should be a jsonl that contains the examples of an Auto Reviewer. Read & write access to the upper layer virtual directory is required. This is optional. */
  exampleBlobUrl?: string;
  /** Delimiter of the given blob URL. If omitted, '/' will be used as the delimiter to parse the exampleBlobUrl. */
  blobDelimiter?: string;
  /** The blob URL that contains a snapshot of exampleBlobUrl. It's available in the response only when exampleBlobUrl is provided in the request. */
  readonly exampleBlobCopyUrl?: string;
  /** The version of Auto Reviewer. */
  readonly version: number;
  /** The creation time of this Auto Reviewer version. The time is in UTC. */
  readonly createdTime: string;
  /**
   * The status of this Auto Reviewer version.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed"
   */
  readonly status: AutoReviewerOperationStatusOutput;
  /** The error details of this Auto Reviewer version. */
  readonly error?: string;
}

/** The label details of an Auto Reviewer version. */
export interface AutoReviewerLabelDetailsOutput {
  /** The name of the label. */
  labelName: string;
  /** The description of the label. */
  description: string;
}

/** The details of a long running operation of Auto Reviewer. */
export interface AutoReviewerOperationDetailOutput {
  /** The id of this operation. */
  id: string;
  /**
   * The status of this operation.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed"
   */
  status: AutoReviewerOperationStatusOutput;
  /** The error details when this operation failed. */
  error?: ErrorModel;
}

/** All versions of an Auto Reviewer. */
export interface AutoReviewerVersionListOutput {
  /** List of auto reviewer versions. */
  value: Array<AutoReviewerVersionOutput>;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: IncidentLongRunningOperationStatusResultOutput;
}

/** Incident long running operation status result. */
export interface IncidentLongRunningOperationStatusResultOutput {}

/** The details of a long running operation of Text Incident. */
export interface TextIncidentOperationResultOutput {
  /** The id of this operation. */
  id: string;
  /**
   * The status of this operation.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  readonly status: IncidentOperationStatusOutput;
  /** The error details when this operation failed. */
  errorMessage?: ErrorModel;
}

/** Definition of a content safety Text Incident. */
export interface TextIncidentOutput {
  /** The name of the incident. */
  incidentName: string;
  /** The guideline to define this incident. */
  incidentDefinition?: string;
  /** The created time of this incident. */
  created: string;
  /** The latest updated time of this incident. */
  lastUpdated: string;
}

/** Definition of a sample in a Text Incident. */
export interface TextIncidentSampleOutput {
  /** The name of this incident sample. */
  readonly incidentSampleId: string;
  /** The text content of this incident sample. */
  text?: string;
}

/** The response of adding incident samples to a Text Incident. */
export interface AddTextIncidentSamplesResultOutput {
  /** Incident samples have been added. */
  incidentSamples: Array<TextIncidentSampleOutput>;
}

/** The details of a long running operation of Image Incident. */
export interface ImageIncidentOperationResultOutput {
  /** The id of this operation. */
  id: string;
  /**
   * The status of this operation.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  readonly status: IncidentOperationStatusOutput;
  /** The error details when this operation failed. */
  error?: ErrorModel;
}

/** Definition of a content safety Image Incident. */
export interface ImageIncidentOutput {
  /** The name of the incident. */
  incidentName: string;
  /** The created time of this incident. */
  created: string;
  /** The latest updated time of this incident. */
  lastUpdated: string;
}

/** The response of adding incident samples to an Image Incident. */
export interface AddImageIncidentSamplesResultOutput {
  /** Array of incidentSamples have been added. */
  incidentSamples: Array<ListImageIncidentSampleResultOutput>;
}

/** A single sample in an Image Incident sample list. */
export interface ListImageIncidentSampleResultOutput {
  /** The name of this incident sample. */
  readonly incidentSampleId: string;
}

/** Definition of an Image Incident sample in a response. */
export interface ImageIncidentSampleResultOutput {
  /** The name of this incident sample. */
  readonly incidentSampleId: string;
  /** The image content of this incident sample. */
  image?: ImageDataResultOutput;
}

/** Definition of an image in a response. */
export interface ImageDataResultOutput {
  /** Base64-encoded image. */
  content?: string;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: CustomCategoryLongRunningOperationStatusResultOutput;
}

/** Custom Category long running operation status result. */
export interface CustomCategoryLongRunningOperationStatusResultOutput {}

/** The details of a long running operation of Custom Category. */
export interface CustomCategoryOperationDetailOutput {
  /** The id of this operation. */
  id: string;
  /**
   * The status of this operation.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed"
   */
  readonly status: CustomCategoryOperationStatusOutput;
  /** The error details when this operation failed. */
  error?: ErrorModel;
}

/** Definition of a Customer Category version. */
export interface TextCustomCategoryVersionOutput {
  /** The name of this Custom Category */
  categoryName: string;
  /** The definition or description of this Custom Category version. */
  definition: string;
  /** The blob URL which should be a jsonl that contains the samples. Read & write access to the upper layer virtual directory is required. */
  sampleBlobUrl: string;
  /** The blob URL that contains a snapshot of sampleBlobUrl. */
  readonly sampleBlobSnapshotUrl: string;
  /** The version of Custom Category. */
  readonly version: number;
  /** The creation time of this Custom Category version. The time is in UTC. */
  readonly createdTime: string;
  /**
   * The status of this Custom Category version
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed"
   */
  readonly status: CustomCategoryStatusOutput;
  /** The error details of this Custom Category version. */
  readonly errorMessage?: string;
}

/** All versions of a Custom Category. */
export interface TextCustomCategoryVersionListOutput {
  /** List of custom category versions. */
  value: Array<TextCustomCategoryVersionOutput>;
}

/** Alias for ImageCategoryOutput */
export type ImageCategoryOutput = string;
/** Alias for TextCategoryOutput */
export type TextCategoryOutput = string;
/** Paged collection of TextBlocklist items */
export type PagedTextBlocklistOutput = Paged<TextBlocklistOutput>;
/** Paged collection of TextBlocklistItem items */
export type PagedTextBlocklistItemOutput = Paged<TextBlocklistItemOutput>;
/** Alias for ImageWithTextCategoryOutput */
export type ImageWithTextCategoryOutput = string;
/** Alias for AutoReviewerOperationStatusOutput */
export type AutoReviewerOperationStatusOutput = string;
/** Paged collection of AutoReviewerVersion items */
export type PagedAutoReviewerVersionOutput = Paged<AutoReviewerVersionOutput>;
/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
/** Alias for IncidentOperationStatusOutput */
export type IncidentOperationStatusOutput = string;
/** Paged collection of TextIncident items */
export type PagedTextIncidentOutput = Paged<TextIncidentOutput>;
/** Paged collection of TextIncidentSample items */
export type PagedTextIncidentSampleOutput = Paged<TextIncidentSampleOutput>;
/** Paged collection of ImageIncident items */
export type PagedImageIncidentOutput = Paged<ImageIncidentOutput>;
/** Paged collection of ListImageIncidentSampleResult items */
export type PagedListImageIncidentSampleResultOutput =
  Paged<ListImageIncidentSampleResultOutput>;
/** Alias for CustomCategoryOperationStatusOutput */
export type CustomCategoryOperationStatusOutput = string;
/** Alias for CustomCategoryStatusOutput */
export type CustomCategoryStatusOutput = string;
/** Paged collection of TextCustomCategoryVersion items */
export type PagedTextCustomCategoryVersionOutput =
  Paged<TextCustomCategoryVersionOutput>;
