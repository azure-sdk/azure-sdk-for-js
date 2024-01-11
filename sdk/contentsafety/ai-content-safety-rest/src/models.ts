// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The text analysis request. */
export interface AnalyzeTextOptions {
  /** The text needs to be analyzed. We support a maximum of 10k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: string[];
  /** The names of blocklists. */
  blocklistNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit. */
  haltOnBlocklistHit?: boolean;
  /**
   * This refers to the type of text analysis output. If no value is assigned, the default value will be "FourSeverityLevels".
   *
   * Possible values: FourSeverityLevels, EightSeverityLevels
   */
  outputType?: string;
  /** The incidents to detect. */
  incidents?: IncidentOptions;
}

/** The text analysis request. */
export interface IncidentOptions {
  /** The accept decision made by service. */
  incidentNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where incidents are hit. When set to false, all analyses of harmful content will be performed, whether or not incidents are hit. */
  haltOnIncidentHit?: boolean;
}

/** The text jailbreak analysis request. */
export interface AnalyzeTextJailbreakOptions {
  /** The text needs to be analyzed if it attempt to jailbreak. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The protected material analysis request. */
export interface AnalyzeTextProtectedMaterialOptions {
  /** The text needs to be analyzed. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The image analysis request. */
export interface AnalyzeImageOptions {
  /** The image needs to be analyzed. */
  image: ImageData;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: string[];
  /**
   * This refers to the type of image analysis output. If no value is assigned, the default value will be "FourSeverityLevels".
   *
   * Possible values: FourSeverityLevels
   */
  outputType?: string;
  /** The incidents to detect. */
  incidents?: IncidentOptions;
}

/** The image can be either base64 encoded bytes or a blob URL. You can choose only one of these options. If both are provided, the request will be refused. The maximum image size is 2048 x 2048 pixels and should not exceed 4 MB, while the minimum image size is 50 x 50 pixels. */
export interface ImageData {
  /** The Base64 encoding of the image. */
  content?: string;
  /** The blob url of the image. */
  blobUrl?: string;
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
  /** BlocklistItem content. */
  text: string;
}

/** The request to remove blocklistItems from a text blocklist. */
export interface RemoveTextBlocklistItemsOptions {
  /** Array of blocklistItemIds to remove. */
  blocklistItemIds: string[];
}

/** Text Incident. */
export interface TextIncident {
  /** incident name. */
  incidentName: string;
  /** Incident description. */
  description?: string;
  /** Incident created time. */
  created: Date | string;
  /** Incident updated time. */
  lastUpdated: Date | string;
}

/** The request to add incidentSamples to a incident. */
export interface AddTextIncidentSamplesOptions {
  /** Array of incidentSamples to add. */
  incidentSamples: Array<TextIncidentSample>;
}

/** Sample in a Text Incident. */
export interface TextIncidentSample {
  /** IncidentSample text content. */
  text?: string;
}

/** The request to remove incidentSamples from a incident. */
export interface RemoveTextIncidentSamplesOptions {
  /** Array of incidentSamples to remove. */
  incidentSampleIds: string[];
}

/** Image Incident. */
export interface ImageIncident {
  /** incident name. */
  incidentName: string;
  /** Incident description. */
  description?: string;
  /** Incident created time. */
  created: Date | string;
  /** Incident updated time. */
  lastUpdated: Date | string;
}

/** The request to add incidentSamples to a incident. */
export interface AddImageIncidentSamplesOptions {
  /** Array of incidentSamples to add. */
  incidentSamples: Array<ImageIncidentSample>;
}

/** Sample in an Image Incident. */
export interface ImageIncidentSample {
  /** IncidentSample image content. */
  image?: ImageData;
}

/** The request to remove incidentSamples from a incident. */
export interface RemoveImageIncidentSamplesOptions {
  /** Array of incidentSamples to remove. */
  incidentSampleIds: string[];
}

/** Annotate text options */
export interface AnnotateTextOptions {
  /** The text needs to be analyzed. We support a maximum of 10k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
  /** The category will be analyzed, you can set your customized category or one of built-in categories in 'Hate','Selfharm', 'Sexual' and 'Violence'. */
  category: string;
}

/** Text Customized categories. */
export interface TextCustomizedCategory {
  /** Text customizedCategories name. */
  categoryName: string;
  preDefinedConcepts?: Array<PreDefinedConcept>;
  subCategories: Array<SubCategory>;
  emphases?: string[];
  exampleBlobUrl?: string;
}

/** Pre-defined concept. */
export interface PreDefinedConcept {
  concept: string;
  description: string;
}

/** Label definition. */
export interface SubCategory {
  id: number;
  name: string;
  statements: string[];
}

/** The analysis request of the image with text. */
export interface AnalyzeImageWithTextOptions {
  /** The image needs to be analyzed. */
  image: ImageData;
  /** The text attached to the image. We support at most 1k characters (unicode code points) in one text request. */
  text?: string;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: string[];
  /** When set to true, our service will perform OCR and concatenate the recognized text with input text before analyzing. We will recognize at most 256 characters (unicode code points) from input image. The others will be truncated. */
  enableOcr: boolean;
}

/** The request of ungroundedness detection. */
export interface DetectUngroundednessOptions {
  /**
   * The domain of the text for analysis.
   * This field is optional, with a default value of Generic.
   *
   * Possible values: Generic, Medical
   */
  domain?: string;
  /**
   * The task type for the text analysis.
   * This field is optional, with a default value of Summarization.
   *
   * Possible values: Summarization, QnA
   */
  task?: string;
  /**
   * The user's question input in a QnA scenario.
   * This field is optional, but if the task type is set to QnA, it becomes required.
   */
  query?: string;
  /** The text requiring analysis. */
  text: string;
  /** The source information used as a grounding reference. */
  groundingSources: string[];
  /**
   * A value indicating if the output includes an explanation for the identified ungroundedness.
   * This field is optional, with a default value of false.
   */
  reasoning?: boolean;
  /**
   * Connection details for the GPT resource.
   * This field will be used only when the 'reasoning' field is set to true; otherwise, it will be ignored.
   */
  gptResource?: GptResource;
}

/** Connection details for the GPT resource. */
export interface GptResource {
  /** Endpoint for Azure OpenAI resource. */
  azureOpenAIEndpoint: string;
  /** Deployment model name. */
  deploymentName: string;
}
