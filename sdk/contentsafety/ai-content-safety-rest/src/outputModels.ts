// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

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
export interface AnalyzeTextJailbreakResultOutput {
  /** Analysis result for jailbreak. */
  jailbreakAnalysis: JailbreakAnalysisResultOutput;
}

/** The text jailbreak analysis response. */
export interface JailbreakAnalysisResultOutput {
  /** Analysis result for jailbreak. */
  detected: boolean;
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
/** Alias for ImageCategoryOutput */
export type ImageCategoryOutput =
  | string
  | "Hate"
  | "SelfHarm"
  | "Sexual"
  | "Violence";
/** Paged collection of TextBlocklist items */
export type PagedTextBlocklistOutput = Paged<TextBlocklistOutput>;
/** Paged collection of TextBlocklistItem items */
export type PagedTextBlocklistItemOutput = Paged<TextBlocklistItemOutput>;
