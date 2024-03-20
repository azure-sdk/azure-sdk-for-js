// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** The text analysis request. */
export interface AnalyzeTextOptionsOutput {
  /** The text needs to be analyzed. We support a maximum of 10k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: TextCategoryOutput[];
  /** The names of blocklists. */
  blocklistNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit. */
  haltOnBlocklistHit?: boolean;
  /** This refers to the type of text analysis output. If no value is assigned, the default value will be "FourSeverityLevels". */
  outputType?: AnalyzeTextOutputTypeOutput;
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
  /** The text analysis category. */
  category: TextCategoryOutput;
  /** The value increases with the severity of the input content. The value of this field is determined by the output type specified in the request. The output type could be ‘FourSeverityLevels’ or ‘EightSeverity Levels’, and the output value can be 0, 2, 4, 6 or 0, 1, 2, 3, 4, 5, 6, or 7. */
  severity?: number;
}

/** The text jailbreak analysis request. */
export interface AnalyzeTextJailbreakOptionsOutput {
  /** The text needs to be analyzed if it attempt to jailbreak. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The text jailbreak analysis request. */
export interface AnalyzeTextJailbreakResultOutput {
  /** Analysis result for jailbreak. */
  jailbreakAnalysis: JailbreakAnalysisResultOutput;
}

/** The text jailbreak analysis response. */
export interface JailbreakAnalysisResultOutput {
  /** Analysis result for jailbreak. */
  detected: boolean;
}

/** The protected material analysis request. */
export interface AnalyzeTextProtectedMaterialOptionsOutput {
  /** The text needs to be analyzed. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The protected material analysis response. */
export interface AnalyzeTextProtectedMaterialResultOutput {
  /** Analysis result for protected material. */
  protectedMaterialAnalysis: ProtectedMaterialAnalysisResultOutput;
}

/** The text protected material analysis response. */
export interface ProtectedMaterialAnalysisResultOutput {
  /** Analysis result for protected material.. */
  detected: boolean;
}

/** The text prompt injection attacks analysis request. */
export interface AnalyzeTextPromptInjectionOptionsOutput {
  /** The user prompt needs to be analyzed if it attempts to do direct injection attacks. */
  userPrompt?: string;
  /** The documents needs to be analyzed if they attempt to do direct or indirect injection attacks. */
  documents?: string[];
}

/** The text injection attacks analysis response. */
export interface AnalyzeTextPromptInjectionResultOutput {
  /** Direct injection analysis result for user prompt input. */
  userPromptAnalysis?: TextPromptInjectionResultOutput;
  /** Direct and indirect injection attacks analysis result for documents input. */
  documentsAnalysis?: Array<TextPromptInjectionResultOutput>;
}

/** The text injection attacks analysis response. */
export interface TextPromptInjectionResultOutput {
  /** Analysis result for whether the prompt is classified as an injection attack. */
  attackDetected: boolean;
}

/** The image analysis request. */
export interface AnalyzeImageOptionsOutput {
  /** The image needs to be analyzed. */
  image: ImageDataOutput;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: ImageCategoryOutput[];
  /** This refers to the type of image analysis output. If no value is assigned, the default value will be "FourSeverityLevels". */
  outputType?: AnalyzeImageOutputTypeOutput;
}

/** The image can be either base64 encoded bytes or a blob URL. You can choose only one of these options. If both are provided, the request will be refused. The maximum image size is 2048 x 2048 pixels and should not exceed 4 MB, while the minimum image size is 50 x 50 pixels. */
export interface ImageDataOutput {
  /** The Base64 encoding of the image. */
  content?: string;
  /** The blob url of the image. */
  blobUrl?: string;
}

/** The image analysis response. */
export interface AnalyzeImageResultOutput {
  /** Analysis result for categories. */
  categoriesAnalysis: Array<ImageCategoriesAnalysisOutput>;
}

/** Image analysis result. */
export interface ImageCategoriesAnalysisOutput {
  /** The image analysis category. */
  category: ImageCategoryOutput;
  /** The value increases with the severity of the input content. The value of this field is determined by the output type specified in the request. The output type could be ‘FourSeverityLevels’, and the output value can be 0, 2, 4, 6. */
  severity?: number;
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
  /** BlocklistItem content. */
  text: string;
}

/** The response of adding blocklistItems to the text blocklist. */
export interface AddOrUpdateTextBlocklistItemsResultOutput {
  /** Array of blocklistItems have been added. */
  blocklistItems: Array<TextBlocklistItemOutput>;
}

/** The request of groundedness detection. */
export interface AnalyzeTextGroundednessOptionsOutput {
  /**
   * The domain of the text for analysis. Allowed values: Medical, Generic.
   * This field is optional, with a default value of Generic.
   */
  domain?: GroundednessDomainOutput;
  /**
   * The task type for the text analysis. Type of task: QnA, Summarization.
   * This field is optional, with a default value of Summarization.
   */
  task?: GroundednessTaskOutput;
  /**
   * The user's question input in a QnA scenario.
   * This field is optional, but if the task type is set to QnA, it becomes required.
   */
  qna?: QnAOptionsOutput;
  /** The specific text that needs to be checked. */
  text: string;
  /**
   * Leverages a vast array of grounding sources to validate AI-generated text.
   * Limit: Restrictions on the total amount of grounding sources that can be analyzed in a single request are 55K characters.
   */
  groundingSources: string[];
  /**
   * A value indicating if the output includes an explanation for the identified groundedness.
   * This field is optional, with a default value of false.
   */
  reasoning?: boolean;
  /**
   * Connection details for the LLM resource.
   * This field will be used only when the 'reasoning' field is set to true; otherwise, it will be ignored.
   */
  llmResource?: LLMResourceOutput;
}

/** The request of QnA options. */
export interface QnAOptionsOutput {
  /** The user's question input in a QnA scenario. */
  query: string;
}

/** Connection details for the LLM resource. */
export interface LLMResourceOutput {
  /** LLM resource type. The default value is AzureOpenAI. */
  resourceType?: LLMResourceTypeOutput;
  /** Endpoint for Azure OpenAI resource. */
  azureOpenAIEndpoint: string;
  /** Deployment model name. */
  azureOpenAIDeploymentName: string;
}

/** The response of groundedness detection. */
export interface AnalyzeTextGroundednessResultOutput {
  /** Indicates whether the text exhibits ungroundedness. */
  ungroundedDetected: boolean;
  /**
   * Specifies the proportion of the text identified as ungrounded,
   * expressed as a decimal between 0 and 1,
   * where 0 indicates no grounded content and 1 indicates entirely grounded content..
   */
  ungroundedPercentage: number;
  /** Provides insights into ungrounded content with specific examples and percentages. */
  ungroundedDetails: Array<UngroundednessDetailsOutput>;
}

/** The detailed information about a text identified as ungroundedness. */
export interface UngroundednessDetailsOutput {
  /** The grounded text. */
  text: string;
  /** The offset when grounded text starts. */
  offset: IndexDetailsOutput;
  /** The length of the grounded text. */
  length: IndexDetailsOutput;
  /**
   * The explanation for detected ungroundedness, enhancing understanding.
   * Only when the 'reasoning' field in the input is set to true 'reason' field will be returned.
   */
  reason?: string;
}

/** The index details. */
export interface IndexDetailsOutput {
  /** Indicate the index when encoding is UTF-8. */
  utf8: number;
  /** Indicate the index when encoding is UTF-16. */
  utf16: number;
  /** Indicate the index with code point format. */
  codePoint: number;
}

/** Alias for TextCategoryOutput */
export type TextCategoryOutput =
  | string
  | "Hate"
  | "SelfHarm"
  | "Sexual"
  | "Violence";
/** Alias for AnalyzeTextOutputTypeOutput */
export type AnalyzeTextOutputTypeOutput =
  | string
  | "FourSeverityLevels"
  | "EightSeverityLevels";
/** Alias for ImageCategoryOutput */
export type ImageCategoryOutput =
  | string
  | "Hate"
  | "SelfHarm"
  | "Sexual"
  | "Violence";
/** Alias for AnalyzeImageOutputTypeOutput */
export type AnalyzeImageOutputTypeOutput = string | "FourSeverityLevels";
/** Paged collection of TextBlocklist items */
export type PagedTextBlocklistOutput = Paged<TextBlocklistOutput>;
/** Paged collection of TextBlocklistItem items */
export type PagedTextBlocklistItemOutput = Paged<TextBlocklistItemOutput>;
/** Alias for GroundednessDomainOutput */
export type GroundednessDomainOutput = string | "Generic" | "Medical";
/** Alias for GroundednessTaskOutput */
export type GroundednessTaskOutput = string | "Summarization" | "QnA";
/** Alias for LLMResourceTypeOutput */
export type LLMResourceTypeOutput = string | "AzureOpenAI";
