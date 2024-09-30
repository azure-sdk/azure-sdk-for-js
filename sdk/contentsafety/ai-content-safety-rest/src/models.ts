// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The image analysis request. */
export interface AnalyzeImageOptions {
  /** The image to be analyzed. */
  image: ImageData;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: ImageCategory[];
  /**
   * This refers to the type of image analysis output. If no value is assigned, the default value will be "FourSeverityLevels".
   *
   * Possible values: "FourSeverityLevels"
   */
  outputType?: AnalyzeImageOutputType;
}

/** The image can be either base64 encoded bytes or a blob URL. You can choose only one of these options. If both are provided, the request will be refused. The maximum image size is 2048 x 2048 pixels and should not exceed 4 MB, while the minimum image size is 50 x 50 pixels. */
export interface ImageData {
  /** The Base64 encoding of the image. */
  content?: string;
  /** The blob url of the image. */
  blobUrl?: string;
}

/** The request to analyze given image with content safety Image Incidents defined. */
export interface AnalyzeImageDetectIncidentsOptions {
  /** The image to be analyzed. */
  image: ImageData;
  /** The incidents defined. */
  incidentNames: string[];
}

/** The request of detecting potential protected material present in the given text. */
export interface DetectImageProtectedMaterialOptions {
  /** The image to be analyzed, which may contain protected material. */
  image: ImageData;
}

/** The text analysis request. */
export interface AnalyzeTextOptions {
  /** The text to be analyzed. We support a maximum of 10k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: TextCategory[];
  /** The names of blocklists. */
  blocklistNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit. */
  haltOnBlocklistHit?: boolean;
  /**
   * This refers to the type of text analysis output. If no value is assigned, the default value will be "FourSeverityLevels".
   *
   * Possible values: "FourSeverityLevels", "EightSeverityLevels"
   */
  outputType?: AnalyzeTextOutputType;
}

/** The request of analyzing potential direct or indirect injection attacks. */
export interface ShieldPromptOptions {
  /** The user prompt to be analyzed, which may contain direct injection attacks. */
  userPrompt?: string;
  /** The documents to be analyzed, which may contain direct or indirect injection attacks. */
  documents?: string[];
}

/** The request of detecting potential protected material present in the given text. */
export interface DetectTextProtectedMaterialOptions {
  /** The text to be analyzed, which may contain protected material. The characters will be counted in Unicode code points. */
  text: string;
}

/** The request of detecting potential protected material present in the given code. */
export interface DetectCodeProtectedMaterialOptions {
  /** The code to be analyzed, which may contain protected material. The characters will be counted in Unicode code points. */
  code: string;
}

/** The request to analyze given text content with the Custom Category version defined. */
export interface AnalyzeTextCustomCategoryOption {
  /** The text needs to be analyzed. */
  text: string;
  /** Custom category name. */
  categoryName: string;
  /** Custom category version, if not assigned use the latest version. */
  version?: number;
}

/** The request to analyze given text content with content safety Text Incidents defined. */
export interface AnalyzeTextDetectIncidentsOptions {
  /** The text to be analyzed. */
  text: string;
  /** The incidents defined. */
  incidentNames: string[];
}

/** The request of text groundedness analysis. */
export interface AnalyzeTextGroundednessOptions {
  /**
   * The domain of the text for analysis. Allowed values: Medical, Generic.
   * This field is optional, with a default value of Generic.
   *
   * Possible values: "Generic", "Medical"
   */
  domain?: GroundednessDomain;
  /**
   * The task type for the text analysis. Type of task: QnA, Summarization.
   * This field is optional, with a default value of Summarization.
   *
   * Possible values: "Summarization", "QnA"
   */
  task?: GroundednessTask;
  /**
   * The user's question input in a QnA scenario.
   * This field is optional, but cannot be omitted when task type is QnA.
   */
  qna?: QnAOptions;
  /** The text to be analyzed. Usually, it's the LLM output and may contain ungrounded content. */
  text: string;
  /**
   * The grounding sources to be used for validating the groundedness.
   * Limit: Restrictions on the total amount of grounding sources that can be analyzed in a single request are 55K characters (in Unicode code point).
   */
  groundingSources: string[];
  /**
   * A value indicating if to generate mitigated content for the ungrounded content and included in the response.
   * This field is optional, with a default value of false.
   */
  correction?: boolean;
  /**
   * A value indicating if to generate an explanation for the groundedness analysis result and included in the response.
   * This field is optional, with a default value of false.
   */
  reasoning?: boolean;
  /**
   * Connection details for the LLM resource.
   * This field will be used only when the 'reasoning' field is set to true; otherwise, it will be ignored.
   */
  llmResource?: LLMResource;
}

/** The options for QnA task. */
export interface QnAOptions {
  /** The user's question input in a QnA task. */
  query: string;
}

/** Details of the given LLM resource. */
export interface LLMResource {
  /**
   * LLM resource type.
   *
   * Possible values: "AzureOpenAI"
   */
  resourceType?: LLMResourceType;
  /** Endpoint for Azure OpenAI resource. */
  azureOpenAIEndpoint: string;
  /** Deployment name. */
  azureOpenAIDeploymentName: string;
}

/** Text Blocklist. */
export interface TextBlocklist {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

/** The request to add blocklistItems to a text blocklist. */
export interface AddOrUpdateTextBlocklistItemsOptions {
  /** Array of blocklistItems to add. */
  blocklistItems: Array<TextBlocklistItem>;
}

/** Item in a TextBlocklist. */
export interface TextBlocklistItem {
  /** BlocklistItem description. */
  description?: string;
  /** BlocklistItem content. The length is counted using Unicode code point. */
  text: string;
  /** An optional properties indicating whether this item is to be matched as a regular expression. */
  isRegex?: boolean;
}

/** The request to remove blocklistItems from a text blocklist. */
export interface RemoveTextBlocklistItemsOptions {
  /** Array of blocklistItemIds to remove. */
  blocklistItemIds: string[];
}

/** The request to analyze an image with embedded or custom text. */
export interface AnalyzeImageWithTextOptions {
  /** The image content to be analyzed. */
  image: ImageData;
  /** The text related to the given image. */
  text?: string;
  /** The harm categories to be detected. A default set of harm categories will be applied if omitted. */
  categories?: ImageWithTextCategory[];
  /** When set to true, the embedded text in given image will be recognized and concatenated with the given text for analysis. */
  enableOcr: boolean;
}

/** Definition of a content safety Text Incident. */
export interface TextIncident {
  /** The name of the incident. */
  incidentName: string;
  /** The guideline to define this incident. */
  incidentDefinition?: string;
  /** The created time of this incident. */
  created: Date | string;
  /** The latest updated time of this incident. */
  lastUpdated: Date | string;
}

/** The request to add incident samples to a Text Incident. */
export interface AddTextIncidentSamplesOptions {
  /** Incident samples to be added. */
  incidentSamples: Array<TextIncidentSample>;
}

/** Definition of a sample in a Text Incident. */
export interface TextIncidentSample {
  /** The text content of this incident sample. */
  text?: string;
}

/** The request to remove incident samples from a Text Incident. */
export interface RemoveTextIncidentSamplesOptions {
  /** Incident samples to be removed. */
  incidentSampleIds: string[];
}

/** Definition of a content safety Image Incident. */
export interface ImageIncident {
  /** The name of the incident. */
  incidentName: string;
  /** The created time of this incident. */
  created: Date | string;
  /** The latest updated time of this incident. */
  lastUpdated: Date | string;
}

/** The request to add incident samples to an Image Incident. */
export interface AddImageIncidentSamplesOptions {
  /** Incident samples to be added. */
  incidentSamples: Array<ImageIncidentSample>;
}

/** Definition of an Image Incident sample in a request. */
export interface ImageIncidentSample {
  /** The image content of this incident sample. */
  image?: ImageData;
}

/** The request to remove incident samples from an Image Incident. */
export interface RemoveImageIncidentSamplesOptions {
  /** Incident samples to be removed. */
  incidentSampleIds: string[];
}

/** Definition of a Customer Category version. */
export interface TextCustomCategoryVersion {
  /** The name of this Custom Category */
  categoryName: string;
  /** The definition or description of this Custom Category version. */
  definition: string;
  /** The blob URL which should be a jsonl that contains the samples. Read & write access to the upper layer virtual directory is required. */
  sampleBlobUrl: string;
}

/** Alias for ImageCategory */
export type ImageCategory = string;
/** Alias for AnalyzeImageOutputType */
export type AnalyzeImageOutputType = string;
/** Alias for TextCategory */
export type TextCategory = string;
/** Alias for AnalyzeTextOutputType */
export type AnalyzeTextOutputType = string;
/** Alias for GroundednessDomain */
export type GroundednessDomain = string;
/** Alias for GroundednessTask */
export type GroundednessTask = string;
/** Alias for LLMResourceType */
export type LLMResourceType = string;
/** Alias for ImageWithTextCategory */
export type ImageWithTextCategory = string;
/** Alias for CustomCategoryStatus */
export type CustomCategoryStatus = string;
