// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
   * Possible values: "Hate", "SelfHarm", "Sexual", "Violence", "Drugs"
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

/** The combined detection results of potential protected material. */
export interface DetectImageProtectedMaterialResultOutput {
  /** Analysis result for the given image. */
  protectedMaterialAnalysis: ImageProtectedMaterialAnalysisResultOutput;
}

/** The individual detection result of potential protected material. */
export interface ImageProtectedMaterialAnalysisResultOutput {
  /** Whether potential protected material is detected or not. */
  detected: boolean;
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
   * Possible values: "Hate", "SelfHarm", "Sexual", "Violence", "Drugs"
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

/** Rai policy model. */
export interface RaiPolicyOutput {
  /** The rai policy name. */
  name: string;
  /** The task settings. */
  taskSettings: Array<TaskSettingOutput>;
}

/** Task setting model. */
export interface TaskSettingOutput {
  /** The setting ID. */
  settingId: string;
  /** Indicates if the setting is enabled. */
  settingEnabled: boolean;
  /** The applied for settings. */
  appliedFor: Array<AppliedForOutput>;
  /**
   * The task type.
   *
   * Possible values: "harmCategory", "blocklist", "safetyIncident", "customHarmCategory"
   */
  kind: TaskTypeOutput;
  /** The harm category task setting. */
  harmCategoryTaskSetting?: HarmCategoryTaskSettingOutput;
  /** The blocklist task setting. */
  blocklistTaskSetting?: BlocklistTaskSettingOutput;
  /** The safety incident task setting. */
  safetyIncidentTaskSetting?: SafetyIncidentTaskSettingOutput;
  /** The custom harm category task setting. */
  customHarmCategoryTaskSetting?: CustomHarmCategoryTaskSettingOutput;
  /** The blocking criteria. */
  blockingCriteria: BlockingCriteriaOutput;
}

/** Applied for model. */
export interface AppliedForOutput {
  /**
   * The role applied for.
   *
   * Possible values: "all", "user", "system", "assistant", "tool"
   */
  role: RoleTypeOutput;
  /**
   * The source type applied for.
   *
   * Possible values: "messageToAI", "messageFromAI"
   */
  source: SourceTypeOutput;
}

/** Harm category task setting model. */
export interface HarmCategoryTaskSettingOutput {
  /**
   * The harm category.
   *
   * Possible values: "celebrity", "drug", "hate", "promptInjection", "protectedMaterial", "sexual", "selfHarm", "violence"
   */
  harmCategory: HarmCategoryOutput;
  /** The harm configuration ID. */
  harmConfigId: string;
}

/** Blocklist task setting model. */
export interface BlocklistTaskSettingOutput {
  /** The name of the blocklist. */
  name: string;
}

/** Safety incident task setting model. */
export interface SafetyIncidentTaskSettingOutput {
  /** The name of the safety incident. */
  name: string;
}

/** Custom harm category task setting model. */
export interface CustomHarmCategoryTaskSettingOutput {
  /** The name of the custom harm category. */
  name: string;
}

/** Blocking criteria model. */
export interface BlockingCriteriaOutput {
  /** Indicates if blocking criteria is enabled. */
  enabled: boolean;
  /**
   * The blocking criteria kind.
   *
   * Possible values: "severity", "riskLevel", "isDetected"
   */
  kind: BlockingCriteriaKindOutput;
  /** The allowed severity level. */
  allowedSeverity: number;
  /** Indicates if it is detected. */
  isDetected: boolean;
  /**
   * The risk level.
   *
   * Possible values: "safe", "low", "medium", "high"
   */
  allowedRiskLevel: RiskLevelOutput;
}

/** Represents the analysis response obtained by applying a rai policy. */
export interface RaiPolicyAnalyzeResponseOutput {
  /** The task results of the analysis. */
  taskResults: Array<TaskResultOutput>;
}

/** Task result model. */
export interface TaskResultOutput {
  /** The setting ID. */
  settingId: string;
  /**
   * The result code.
   *
   * Possible values: "oK", "noValidInput", "internalTimeout", "internalError"
   */
  resultCode: ResultCodeOutput;
  /** The result code detail. */
  resultCodeDetail: string;
  /** Indicates if blocking criteria is met. */
  isBlockingCriteriaMet: boolean;
  /**
   * The task kind.
   *
   * Possible values: "harmCategory", "blocklist", "safetyIncident", "customHarmCategory"
   */
  kind: TaskTypeOutput;
  /** The harm category task result. */
  harmCategoryTaskResult?: HarmCategoryTaskResultOutput;
  /** The blocklist task result. */
  blocklistTaskResult?: BlocklistTaskResultOutput;
  /** The safety incident task result. */
  safetyIncidentTaskResult?: SafetyIncidentTaskResultOutput;
  /** The custom category task result. */
  customCategoryTaskResult?: CustomCategoryTaskResultOutput;
}

/** Harm category task result model. */
export interface HarmCategoryTaskResultOutput {
  /**
   * The harm category.
   *
   * Possible values: "celebrity", "drug", "hate", "promptInjection", "protectedMaterial", "sexual", "selfHarm", "violence"
   */
  harmCategory: HarmCategoryOutput;
  /** The harm configuration ID. */
  harmConfigId: string;
  /** Indicates if it is detected. */
  isDetected: boolean;
  /** The severity level. */
  severity: number;
  /**
   * The risk level.
   *
   * Possible values: "safe", "low", "medium", "high"
   */
  riskLevel: RiskLevelOutput;
  /** Result details. */
  details?: PromptInjectionDetailOutput;
}

/** Details the output of an analysis, including detection status, severity, and additional information. */
export interface PromptInjectionDetailOutput {
  /** Indicates whether prompt injection was detected. */
  promptInjection?: boolean;
  /** Indicates whether cross-domain issues were detected. */
  crossDomain?: boolean;
}

/** Blocklist task result model. */
export interface BlocklistTaskResultOutput {
  /** The name of the blocklist. */
  name: string;
  /** Indicates if it is detected. */
  isDetected: boolean;
}

/** Safety incident task result model. */
export interface SafetyIncidentTaskResultOutput {
  /** The name of the safety incident. */
  name: string;
  /** Indicates if it is detected. */
  isDetected: boolean;
}

/** Custom category task result model. */
export interface CustomCategoryTaskResultOutput {
  /** The name of the custom category. */
  name: string;
  /** Indicates if it is detected. */
  isDetected: boolean;
}

/** Text Blocklist. */
export interface TextBlocklistOutput {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

/** Paged collection of TextBlocklist items */
export interface PagedTextBlocklistOutput {
  /** The TextBlocklist items on this page */
  value: Array<TextBlocklistOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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

/** Paged collection of TextBlocklistItem items */
export interface PagedTextBlocklistItemOutput {
  /** The TextBlocklistItem items on this page */
  value: Array<TextBlocklistItemOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of RaiPolicy items */
export interface PagedRaiPolicyOutput {
  /** The RaiPolicy items on this page */
  value: Array<RaiPolicyOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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

/** Paged collection of TextIncident items */
export interface PagedTextIncidentOutput {
  /** The TextIncident items on this page */
  value: Array<TextIncidentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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

/** Paged collection of TextIncidentSample items */
export interface PagedTextIncidentSampleOutput {
  /** The TextIncidentSample items on this page */
  value: Array<TextIncidentSampleOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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

/** Paged collection of ImageIncident items */
export interface PagedImageIncidentOutput {
  /** The ImageIncident items on this page */
  value: Array<ImageIncidentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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

/** Paged collection of ListImageIncidentSampleResult items */
export interface PagedListImageIncidentSampleResultOutput {
  /** The ListImageIncidentSampleResult items on this page */
  value: Array<ListImageIncidentSampleResultOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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

/** Paged collection of TextCustomCategoryVersion items */
export interface PagedTextCustomCategoryVersionOutput {
  /** The TextCustomCategoryVersion items on this page */
  value: Array<TextCustomCategoryVersionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Alias for ImageCategoryOutput */
export type ImageCategoryOutput = string;
/** Alias for TextCategoryOutput */
export type TextCategoryOutput = string;
/** Alias for SourceTypeOutput */
export type SourceTypeOutput = string;
/** Alias for RoleTypeOutput */
export type RoleTypeOutput = string;
/** Alias for TaskTypeOutput */
export type TaskTypeOutput = string;
/** Alias for HarmCategoryOutput */
export type HarmCategoryOutput = string;
/** Alias for BlockingCriteriaKindOutput */
export type BlockingCriteriaKindOutput = string;
/** Alias for RiskLevelOutput */
export type RiskLevelOutput = string;
/** Alias for ResultCodeOutput */
export type ResultCodeOutput = string;
/** Alias for ImageWithTextCategoryOutput */
export type ImageWithTextCategoryOutput = string;
/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
/** Alias for IncidentOperationStatusOutput */
export type IncidentOperationStatusOutput = string;
/** Alias for CustomCategoryOperationStatusOutput */
export type CustomCategoryOperationStatusOutput = string;
/** Alias for CustomCategoryStatusOutput */
export type CustomCategoryStatusOutput = string;
