// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileContents, createFilePartDescriptor } from "../static-helpers/multipartHelpers.js";
import { ErrorModel } from "@azure-rest/core-client";

/** The configuration information for an audio transcription request. */
export interface AudioTranscriptionOptions {
  /**
   * The audio data to transcribe. This must be the binary content of a file in one of the supported media formats:
   *  flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, webm.
   */
  file: FileContents | { contents: FileContents; contentType?: string; filename?: string };
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the transcription response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranscriptionFormat;
  /**
   * The primary spoken language of the audio data to be transcribed, supplied as a two-letter ISO-639-1 language code
   * such as 'en' or 'fr'.
   * Providing this known input language is optional but may improve the accuracy and/or latency of transcription.
   */
  language?: string;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /**
   * The timestamp granularities to populate for this transcription.
   * `response_format` must be set `verbose_json` to use timestamp granularities.
   * Either or both of these options are supported: `word`, or `segment`.
   * Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
   */
  timestampGranularities?: AudioTranscriptionTimestampGranularity[];
  /** The model to use for this transcription request. */
  model?: string;
}

export function audioTranscriptionOptionsSerializer(item: AudioTranscriptionOptions): any {
  return [
    createFilePartDescriptor("file", item["file"]),
    ...(item["filename"] === undefined ? [] : [{ name: "filename", body: item["filename"] }]),
    ...(item["responseFormat"] === undefined
      ? []
      : [{ name: "response_format", body: item["responseFormat"] }]),
    ...(item["language"] === undefined ? [] : [{ name: "language", body: item["language"] }]),
    ...(item["prompt"] === undefined ? [] : [{ name: "prompt", body: item["prompt"] }]),
    ...(item["temperature"] === undefined
      ? []
      : [{ name: "temperature", body: item["temperature"] }]),
    ...(item["timestampGranularities"] === undefined
      ? []
      : [
          ...(!item["timestampGranularities"]
            ? item["timestampGranularities"]
            : item["timestampGranularities"].map((p: any) => {
                return p;
              })
          ).map((x: unknown) => ({ name: "timestamp_granularities", body: x })),
        ]),
    ...(item["model"] === undefined ? [] : [{ name: "model", body: item["model"] }]),
  ];
}

/** Defines available options for the underlying response format of output transcription information. */
export type AudioTranscriptionFormat = "json" | "verbose_json" | "text" | "srt" | "vtt";
/** Defines the timestamp granularities that can be requested on a verbose transcription response. */
export type AudioTranscriptionTimestampGranularity = "word" | "segment";

/** Result information for an operation that transcribed spoken audio into written text. */
export interface AudioTranscription {
  /** The transcribed text for the provided audio data. */
  text: string;
  /** The label that describes which operation type generated the accompanying response data. */
  task?: AudioTaskLabel;
  /**
   * The spoken language that was detected in the transcribed audio data.
   * This is expressed as a two-letter ISO-639-1 language code like 'en' or 'fr'.
   */
  language?: string;
  /** The total duration of the audio processed to produce accompanying transcription information. */
  duration?: number;
  /** A collection of information about the timing, probabilities, and other detail of each processed audio segment. */
  segments?: AudioTranscriptionSegment[];
  /** A collection of information about the timing of each processed word. */
  words?: AudioTranscriptionWord[];
}

export function audioTranscriptionDeserializer(item: any): AudioTranscription {
  return {
    text: item["text"],
    task: item["task"],
    language: item["language"],
    duration: item["duration"],
    segments: !item["segments"]
      ? item["segments"]
      : audioTranscriptionSegmentArrayDeserializer(item["segments"]),
    words: !item["words"] ? item["words"] : audioTranscriptionWordArrayDeserializer(item["words"]),
  };
}

/** Defines the possible descriptors for available audio operation responses. */
export type AudioTaskLabel = "transcribe" | "translate";

export function audioTranscriptionSegmentArrayDeserializer(
  result: Array<AudioTranscriptionSegment>,
): any[] {
  return result.map((item) => {
    return audioTranscriptionSegmentDeserializer(item);
  });
}

/**
 * Extended information about a single segment of transcribed audio data.
 * Segments generally represent roughly 5-10 seconds of speech. Segment boundaries typically occur between words but not
 * necessarily sentences.
 */
export interface AudioTranscriptionSegment {
  /** The 0-based index of this segment within a transcription. */
  id: number;
  /** The time at which this segment started relative to the beginning of the transcribed audio. */
  start: number;
  /** The time at which this segment ended relative to the beginning of the transcribed audio. */
  end: number;
  /** The transcribed text that was part of this audio segment. */
  text: string;
  /** The temperature score associated with this audio segment. */
  temperature: number;
  /** The average log probability associated with this audio segment. */
  avgLogprob: number;
  /** The compression ratio of this audio segment. */
  compressionRatio: number;
  /** The probability of no speech detection within this audio segment. */
  noSpeechProb: number;
  /** The token IDs matching the transcribed text in this audio segment. */
  tokens: number[];
  /**
   * The seek position associated with the processing of this audio segment.
   * Seek positions are expressed as hundredths of seconds.
   * The model may process several segments from a single seek position, so while the seek position will never represent
   * a later time than the segment's start, the segment's start may represent a significantly later time than the
   * segment's associated seek position.
   */
  seek: number;
}

export function audioTranscriptionSegmentDeserializer(item: any): AudioTranscriptionSegment {
  return {
    id: item["id"],
    start: item["start"],
    end: item["end"],
    text: item["text"],
    temperature: item["temperature"],
    avgLogprob: item["avg_logprob"],
    compressionRatio: item["compression_ratio"],
    noSpeechProb: item["no_speech_prob"],
    tokens: item["tokens"].map((p: any) => {
      return p;
    }),
    seek: item["seek"],
  };
}

export function audioTranscriptionWordArrayDeserializer(
  result: Array<AudioTranscriptionWord>,
): any[] {
  return result.map((item) => {
    return audioTranscriptionWordDeserializer(item);
  });
}

/** Extended information about a single transcribed word, as provided on responses when the 'word' timestamp granularity is provided. */
export interface AudioTranscriptionWord {
  /** The textual content of the word. */
  word: string;
  /** The start time of the word relative to the beginning of the audio, expressed in seconds. */
  start: number;
  /** The end time of the word relative to the beginning of the audio, expressed in seconds. */
  end: number;
}

export function audioTranscriptionWordDeserializer(item: any): AudioTranscriptionWord {
  return {
    word: item["word"],
    start: item["start"],
    end: item["end"],
  };
}

/** The configuration information for an audio translation request. */
export interface AudioTranslationOptions {
  /**
   * The audio data to translate. This must be the binary content of a file in one of the supported media formats:
   *  flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, webm.
   */
  file: FileContents | { contents: FileContents; contentType?: string; filename?: string };
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the translation response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranslationFormat;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The model to use for this translation request. */
  model?: string;
}

export function audioTranslationOptionsSerializer(item: AudioTranslationOptions): any {
  return [
    createFilePartDescriptor("file", item["file"]),
    ...(item["filename"] === undefined ? [] : [{ name: "filename", body: item["filename"] }]),
    ...(item["responseFormat"] === undefined
      ? []
      : [{ name: "response_format", body: item["responseFormat"] }]),
    ...(item["prompt"] === undefined ? [] : [{ name: "prompt", body: item["prompt"] }]),
    ...(item["temperature"] === undefined
      ? []
      : [{ name: "temperature", body: item["temperature"] }]),
    ...(item["model"] === undefined ? [] : [{ name: "model", body: item["model"] }]),
  ];
}

/** Defines available options for the underlying response format of output translation information. */
export type AudioTranslationFormat = "json" | "verbose_json" | "text" | "srt" | "vtt";

/** Result information for an operation that translated spoken audio into written text. */
export interface AudioTranslation {
  /** The translated text for the provided audio data. */
  text: string;
  /** The label that describes which operation type generated the accompanying response data. */
  task?: AudioTaskLabel;
  /**
   * The spoken language that was detected in the translated audio data.
   * This is expressed as a two-letter ISO-639-1 language code like 'en' or 'fr'.
   */
  language?: string;
  /** The total duration of the audio processed to produce accompanying translation information. */
  duration?: number;
  /** A collection of information about the timing, probabilities, and other detail of each processed audio segment. */
  segments?: AudioTranslationSegment[];
}

export function audioTranslationDeserializer(item: any): AudioTranslation {
  return {
    text: item["text"],
    task: item["task"],
    language: item["language"],
    duration: item["duration"],
    segments: !item["segments"]
      ? item["segments"]
      : audioTranslationSegmentArrayDeserializer(item["segments"]),
  };
}

export function audioTranslationSegmentArrayDeserializer(
  result: Array<AudioTranslationSegment>,
): any[] {
  return result.map((item) => {
    return audioTranslationSegmentDeserializer(item);
  });
}

/**
 * Extended information about a single segment of translated audio data.
 * Segments generally represent roughly 5-10 seconds of speech. Segment boundaries typically occur between words but not
 * necessarily sentences.
 */
export interface AudioTranslationSegment {
  /** The 0-based index of this segment within a translation. */
  id: number;
  /** The time at which this segment started relative to the beginning of the translated audio. */
  start: number;
  /** The time at which this segment ended relative to the beginning of the translated audio. */
  end: number;
  /** The translated text that was part of this audio segment. */
  text: string;
  /** The temperature score associated with this audio segment. */
  temperature: number;
  /** The average log probability associated with this audio segment. */
  avgLogprob: number;
  /** The compression ratio of this audio segment. */
  compressionRatio: number;
  /** The probability of no speech detection within this audio segment. */
  noSpeechProb: number;
  /** The token IDs matching the translated text in this audio segment. */
  tokens: number[];
  /**
   * The seek position associated with the processing of this audio segment.
   * Seek positions are expressed as hundredths of seconds.
   * The model may process several segments from a single seek position, so while the seek position will never represent
   * a later time than the segment's start, the segment's start may represent a significantly later time than the
   * segment's associated seek position.
   */
  seek: number;
}

export function audioTranslationSegmentDeserializer(item: any): AudioTranslationSegment {
  return {
    id: item["id"],
    start: item["start"],
    end: item["end"],
    text: item["text"],
    temperature: item["temperature"],
    avgLogprob: item["avg_logprob"],
    compressionRatio: item["compression_ratio"],
    noSpeechProb: item["no_speech_prob"],
    tokens: item["tokens"].map((p: any) => {
      return p;
    }),
    seek: item["seek"],
  };
}

/**
 * The configuration information for a completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface CompletionsOptions {
  /** The prompts to generate completions from. */
  prompt: string[];
  /** The maximum number of tokens to generate. */
  maxTokens?: number;
  /**
   * The sampling temperature to use that controls the apparent creativity of generated completions.
   * Higher values will make output more random while lower values will make results more focused
   * and deterministic.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature called nucleus sampling. This value causes the
   * model to consider the results of tokens with the provided probability mass. As an example, a
   * value of 0.15 will cause only the tokens comprising the top 15% of probability mass to be
   * considered.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  topP?: number;
  /**
   * A map between GPT token IDs and bias scores that influences the probability of specific tokens
   * appearing in a completions response. Token IDs are computed via external tokenizer tools, while
   * bias scores reside in the range of -100 to 100 with minimum and maximum values corresponding to
   * a full ban or exclusive selection of a token, respectively. The exact behavior of a given bias
   * score varies by model.
   */
  logitBias?: Record<string, number>;
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The number of completions choices that should be generated per provided prompt as part of an
   * overall completions response.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  n?: number;
  /**
   * A value that controls the emission of log probabilities for the provided number of most likely
   * tokens within a completions response.
   */
  logprobs?: number;
  /** The suffix that comes after a completion of inserted text */
  suffix?: string;
  /**
   * A value specifying whether completions responses should include input prompts as prefixes to
   * their generated output.
   */
  echo?: boolean;
  /** A collection of textual sequences that will end completions generation. */
  stop?: string[];
  /**
   * A value that influences the probability of generated tokens appearing based on their existing
   * presence in generated text.
   * Positive values will make tokens less likely to appear when they already exist and increase the
   * model's likelihood to output new topics.
   */
  presencePenalty?: number;
  /**
   * A value that influences the probability of generated tokens appearing based on their cumulative
   * frequency in generated text.
   * Positive values will make tokens less likely to appear as their frequency increases and
   * decrease the likelihood of the model repeating the same statements verbatim.
   */
  frequencyPenalty?: number;
  /**
   * A value that controls how many completions will be internally generated prior to response
   * formulation.
   * When used together with n, best_of controls the number of candidate completions and must be
   * greater than n.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  bestOf?: number;
  /** A value indicating whether chat completions should be streamed for this request. */
  stream?: boolean;
  /** Options for streaming response. Only set this when you set `stream: true`. */
  streamOptions?: ChatCompletionStreamOptions | null;
  /**
   * The model name to provide as part of this completions request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /**
   * If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
   *
   * Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
   */
  seed?: number;
}

export function completionsOptionsSerializer(item: CompletionsOptions): any {
  return {
    prompt: item["prompt"].map((p: any) => {
      return p;
    }),
    max_tokens: item["maxTokens"],
    temperature: item["temperature"],
    top_p: item["topP"],
    logit_bias: item["logitBias"],
    user: item["user"],
    n: item["n"],
    logprobs: item["logprobs"],
    suffix: item["suffix"],
    echo: item["echo"],
    stop: !item["stop"]
      ? item["stop"]
      : item["stop"].map((p: any) => {
          return p;
        }),
    presence_penalty: item["presencePenalty"],
    frequency_penalty: item["frequencyPenalty"],
    best_of: item["bestOf"],
    stream: item["stream"],
    stream_options: !item["streamOptions"]
      ? item["streamOptions"]
      : chatCompletionStreamOptionsSerializer(item["streamOptions"]),
    model: item["model"],
    seed: item["seed"],
  };
}

/** Options for streaming response. Only set this when you set `stream: true`. */
export interface ChatCompletionStreamOptions {
  /** If set, an additional chunk will be streamed before the `data: [DONE]` message. The `usage` field on this chunk shows the token usage statistics for the entire request, and the `choices` field will always be an empty array. All other chunks will also include a `usage` field, but with a null value. */
  includeUsage?: boolean;
}

export function chatCompletionStreamOptionsSerializer(item: ChatCompletionStreamOptions): any {
  return { include_usage: item["includeUsage"] };
}

/**
 * Representation of the response data from a completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface Completions {
  /** A unique identifier associated with this completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /**
   * Content filtering results for zero or more prompts in the request. In a streaming request,
   * results for different prompts may arrive at different times or in different orders.
   */
  promptFilterResults?: ContentFilterResultsForPrompt[];
  /**
   * The collection of completions choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: Choice[];
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage?: CompletionsUsage;
  /**
   * This fingerprint represents the backend configuration that the model runs with.
   *
   * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
   */
  systemFingerprint?: string;
}

export function completionsDeserializer(item: any): Completions {
  return {
    id: item["id"],
    created: new Date(item["created"] * 1000),
    promptFilterResults: !item["prompt_filter_results"]
      ? item["prompt_filter_results"]
      : contentFilterResultsForPromptArrayDeserializer(item["prompt_filter_results"]),
    choices: choiceArrayDeserializer(item["choices"]),
    usage: !item["usage"] ? item["usage"] : completionsUsageDeserializer(item["usage"]),
    systemFingerprint: item["system_fingerprint"],
  };
}

export function contentFilterResultsForPromptArrayDeserializer(
  result: Array<ContentFilterResultsForPrompt>,
): any[] {
  return result.map((item) => {
    return contentFilterResultsForPromptDeserializer(item);
  });
}

/** Content filtering results for a single prompt in the request. */
export interface ContentFilterResultsForPrompt {
  /** The index of this prompt in the set of prompt results */
  promptIndex: number;
  /** Content filtering results for this prompt */
  contentFilterResults: ContentFilterResultDetailsForPrompt;
}

export function contentFilterResultsForPromptDeserializer(
  item: any,
): ContentFilterResultsForPrompt {
  return {
    promptIndex: item["prompt_index"],
    contentFilterResults: contentFilterResultDetailsForPromptDeserializer(
      item["content_filter_results"],
    ),
  };
}

/** Information about content filtering evaluated against input data to Azure OpenAI. */
export interface ContentFilterResultDetailsForPrompt {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
  /** Describes whether profanity was detected. */
  profanity?: ContentFilterDetectionResult;
  /** Describes detection results against configured custom blocklists. */
  customBlocklists?: ContentFilterDetailedResults;
  /**
   * Describes an error returned if the content filtering system is
   * down or otherwise unable to complete the operation in time.
   */
  error?: ErrorModel;
  /** Whether a jailbreak attempt was detected in the prompt. */
  jailbreak?: ContentFilterDetectionResult;
  /** Whether an indirect attack was detected in the prompt. */
  indirectAttack?: ContentFilterDetectionResult;
}

export function contentFilterResultDetailsForPromptDeserializer(
  item: any,
): ContentFilterResultDetailsForPrompt {
  return {
    sexual: !item["sexual"] ? item["sexual"] : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"] ? item["hate"] : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
    profanity: !item["profanity"]
      ? item["profanity"]
      : contentFilterDetectionResultDeserializer(item["profanity"]),
    customBlocklists: !item["custom_blocklists"]
      ? item["custom_blocklists"]
      : contentFilterDetailedResultsDeserializer(item["custom_blocklists"]),
    error: !item["error"] ? item["error"] : item["error"],
    jailbreak: !item["jailbreak"]
      ? item["jailbreak"]
      : contentFilterDetectionResultDeserializer(item["jailbreak"]),
    indirectAttack: !item["indirect_attack"]
      ? item["indirect_attack"]
      : contentFilterDetectionResultDeserializer(item["indirect_attack"]),
  };
}

/** Information about filtered content severity level and if it has been filtered or not. */
export interface ContentFilterResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** Ratings for the intensity and risk level of filtered content. */
  severity: ContentFilterSeverity;
}

export function contentFilterResultDeserializer(item: any): ContentFilterResult {
  return {
    filtered: item["filtered"],
    severity: item["severity"],
  };
}

/** Ratings for the intensity and risk level of harmful content. */
export type ContentFilterSeverity = "safe" | "low" | "medium" | "high";

/** Represents the outcome of a detection operation performed by content filtering. */
export interface ContentFilterDetectionResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** A value indicating whether detection occurred, irrespective of severity or whether the content was filtered. */
  detected: boolean;
}

export function contentFilterDetectionResultDeserializer(item: any): ContentFilterDetectionResult {
  return {
    filtered: item["filtered"],
    detected: item["detected"],
  };
}

/** Represents a structured collection of result details for content filtering. */
export interface ContentFilterDetailedResults {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** The collection of detailed blocklist result information. */
  details: ContentFilterBlocklistIdResult[];
}

export function contentFilterDetailedResultsDeserializer(item: any): ContentFilterDetailedResults {
  return {
    filtered: item["filtered"],
    details: contentFilterBlocklistIdResultArrayDeserializer(item["details"]),
  };
}

export function contentFilterBlocklistIdResultArrayDeserializer(
  result: Array<ContentFilterBlocklistIdResult>,
): any[] {
  return result.map((item) => {
    return contentFilterBlocklistIdResultDeserializer(item);
  });
}

/** Represents the outcome of an evaluation against a custom blocklist as performed by content filtering. */
export interface ContentFilterBlocklistIdResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** The ID of the custom blocklist evaluated. */
  id: string;
}

export function contentFilterBlocklistIdResultDeserializer(
  item: any,
): ContentFilterBlocklistIdResult {
  return {
    filtered: item["filtered"],
    id: item["id"],
  };
}

export function choiceArrayDeserializer(result: Array<Choice>): any[] {
  return result.map((item) => {
    return choiceDeserializer(item);
  });
}

/**
 * The representation of a single prompt completion as part of an overall completions request.
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface Choice {
  /** The generated text for a given completions prompt. */
  text: string;
  /** The ordered index associated with this completions choice. */
  index: number;
  /**
   * Information about the content filtering category (hate, sexual, violence, self_harm), if it
   * has been detected, as well as the severity level (very_low, low, medium, high-scale that
   * determines the intensity and risk level of harmful content) and if it has been filtered or not.
   */
  contentFilterResults?: ContentFilterResultsForChoice;
  /** The log probabilities model for tokens associated with this completions choice. */
  logprobs: CompletionsLogProbabilityModel | null;
  /** Reason for finishing */
  finishReason: CompletionsFinishReason | null;
}

export function choiceDeserializer(item: any): Choice {
  return {
    text: item["text"],
    index: item["index"],
    contentFilterResults: !item["content_filter_results"]
      ? item["content_filter_results"]
      : contentFilterResultsForChoiceDeserializer(item["content_filter_results"]),
    logprobs: !item["logprobs"]
      ? item["logprobs"]
      : completionsLogProbabilityModelDeserializer(item["logprobs"]),
    finishReason: item["finish_reason"],
  };
}

/** Information about content filtering evaluated against generated model output. */
export interface ContentFilterResultsForChoice {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
  /** Describes whether profanity was detected. */
  profanity?: ContentFilterDetectionResult;
  /** Describes detection results against configured custom blocklists. */
  customBlocklists?: ContentFilterDetailedResults;
  /**
   * Describes an error returned if the content filtering system is
   * down or otherwise unable to complete the operation in time.
   */
  error?: ErrorModel;
  /** Information about detection of protected text material. */
  protectedMaterialText?: ContentFilterDetectionResult;
  /** Information about detection of protected code material. */
  protectedMaterialCode?: ContentFilterCitedDetectionResult;
  /** Information about detection of ungrounded material. */
  ungroundedMaterial?: ContentFilterCompletionTextSpanResult;
}

export function contentFilterResultsForChoiceDeserializer(
  item: any,
): ContentFilterResultsForChoice {
  return {
    sexual: !item["sexual"] ? item["sexual"] : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"] ? item["hate"] : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
    profanity: !item["profanity"]
      ? item["profanity"]
      : contentFilterDetectionResultDeserializer(item["profanity"]),
    customBlocklists: !item["custom_blocklists"]
      ? item["custom_blocklists"]
      : contentFilterDetailedResultsDeserializer(item["custom_blocklists"]),
    error: !item["error"] ? item["error"] : item["error"],
    protectedMaterialText: !item["protected_material_text"]
      ? item["protected_material_text"]
      : contentFilterDetectionResultDeserializer(item["protected_material_text"]),
    protectedMaterialCode: !item["protected_material_code"]
      ? item["protected_material_code"]
      : contentFilterCitedDetectionResultDeserializer(item["protected_material_code"]),
    ungroundedMaterial: !item["ungrounded_material"]
      ? item["ungrounded_material"]
      : contentFilterCompletionTextSpanResultDeserializer(item["ungrounded_material"]),
  };
}

/** Represents the outcome of a detection operation against protected resources as performed by content filtering. */
export interface ContentFilterCitedDetectionResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** A value indicating whether detection occurred, irrespective of severity or whether the content was filtered. */
  detected: boolean;
  /** The internet location associated with the detection. */
  url?: string;
  /** The license description associated with the detection. */
  license?: string;
}

export function contentFilterCitedDetectionResultDeserializer(
  item: any,
): ContentFilterCitedDetectionResult {
  return {
    filtered: item["filtered"],
    detected: item["detected"],
    url: item["URL"],
    license: item["license"],
  };
}

/** Describes a span within generated completion text. */
export interface ContentFilterCompletionTextSpanResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** A value indicating whether detection occurred, irrespective of severity or whether the content was filtered. */
  detected: boolean;
  /** The collection of completion text spans. */
  details: ContentFilterCompletionTextSpan[];
}

export function contentFilterCompletionTextSpanResultDeserializer(
  item: any,
): ContentFilterCompletionTextSpanResult {
  return {
    filtered: item["filtered"],
    detected: item["detected"],
    details: contentFilterCompletionTextSpanArrayDeserializer(item["details"]),
  };
}

export function contentFilterCompletionTextSpanArrayDeserializer(
  result: Array<ContentFilterCompletionTextSpan>,
): any[] {
  return result.map((item) => {
    return contentFilterCompletionTextSpanDeserializer(item);
  });
}

/** Describes a span within generated completion text. Offset 0 is the first UTF32 code point of the completion text. */
export interface ContentFilterCompletionTextSpan {
  /** Offset of the UTF32 code point which begins the span. */
  completionStartOffset: number;
  /**
   * Offset of the first UTF32 code point which is excluded from the span.
   * This field is always equal to completion_start_offset for empty spans.
   * This field is always larger than completion_start_offset for non-empty spans.
   */
  completionEndOffset: number;
}

export function contentFilterCompletionTextSpanDeserializer(
  item: any,
): ContentFilterCompletionTextSpan {
  return {
    completionStartOffset: item["completion_start_offset"],
    completionEndOffset: item["completion_end_offset"],
  };
}

/** Representation of a log probabilities model for a completions generation. */
export interface CompletionsLogProbabilityModel {
  /** The textual forms of tokens evaluated in this probability model. */
  tokens: string[];
  /** A collection of log probability values for the tokens in this completions data. */
  tokenLogprobs: (number | null)[];
  /** A mapping of tokens to maximum log probability values in this completions data. */
  topLogprobs: Record<string, number | null>[];
  /** The text offsets associated with tokens in this completions data. */
  textOffset: number[];
}

export function completionsLogProbabilityModelDeserializer(
  item: any,
): CompletionsLogProbabilityModel {
  return {
    tokens: item["tokens"].map((p: any) => {
      return p;
    }),
    tokenLogprobs: item["token_logprobs"].map((p: any) => {
      return !p ? p : p;
    }),
    topLogprobs: item["top_logprobs"].map((p: any) => {
      return p;
    }),
    textOffset: item["text_offset"].map((p: any) => {
      return p;
    }),
  };
}

/** Representation of the manner in which a completions response concluded. */
export type CompletionsFinishReason =
  | "stop"
  | "length"
  | "content_filter"
  | "function_call"
  | "tool_calls";

/**
 * Representation of the token counts processed for a completions request.
 * Counts consider all tokens across prompts, choices, choice alternates, best_of generations, and
 * other consumers.
 */
export interface CompletionsUsage {
  /** The number of tokens generated across all completions emissions. */
  completionTokens: number;
  /** The number of tokens in the provided prompts for the completions request. */
  promptTokens: number;
  /** The total number of tokens processed for the completions request and response. */
  totalTokens: number;
  /** Details of the prompt tokens. */
  promptTokensDetails?: {
    audioTokens?: number;
    cachedTokens?: number;
  };
  /** Breakdown of tokens used in a completion. */
  completionTokensDetails?: {
    acceptedPredictionTokens?: number;
    audioTokens?: number;
    reasoningTokens?: number;
    rejectedPredictionTokens?: number;
  };
}

export function completionsUsageDeserializer(item: any): CompletionsUsage {
  return {
    completionTokens: item["completion_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
    promptTokensDetails: !item["prompt_tokens_details"]
      ? item["prompt_tokens_details"]
      : _completionsUsagePromptTokensDetailsDeserializer(item["prompt_tokens_details"]),
    completionTokensDetails: !item["completion_tokens_details"]
      ? item["completion_tokens_details"]
      : _completionsUsageCompletionTokensDetailsDeserializer(item["completion_tokens_details"]),
  };
}

/** model interface _CompletionsUsagePromptTokensDetails */
export interface _CompletionsUsagePromptTokensDetails {
  /** Audio input tokens present in the prompt. */
  audioTokens?: number;
  /** Cached tokens present in the prompt. */
  cachedTokens?: number;
}

export function _completionsUsagePromptTokensDetailsDeserializer(
  item: any,
): _CompletionsUsagePromptTokensDetails {
  return {
    audioTokens: item["audio_tokens"],
    cachedTokens: item["cached_tokens"],
  };
}

/** model interface _CompletionsUsageCompletionTokensDetails */
export interface _CompletionsUsageCompletionTokensDetails {
  /**
   * When using Predicted Outputs, the number of tokens in the
   * prediction that appeared in the completion.
   */
  acceptedPredictionTokens?: number;
  /** Audio input tokens generated by the model. */
  audioTokens?: number;
  /** Tokens generated by the model for reasoning. */
  reasoningTokens?: number;
  /**
   * When using Predicted Outputs, the number of tokens in the
   * prediction that did not appear in the completion. However, like
   * reasoning tokens, these tokens are still counted in the total
   * completion tokens for purposes of billing, output, and context
   * window limits.
   */
  rejectedPredictionTokens?: number;
}

export function _completionsUsageCompletionTokensDetailsDeserializer(
  item: any,
): _CompletionsUsageCompletionTokensDetails {
  return {
    acceptedPredictionTokens: item["accepted_prediction_tokens"],
    audioTokens: item["audio_tokens"],
    reasoningTokens: item["reasoning_tokens"],
    rejectedPredictionTokens: item["rejected_prediction_tokens"],
  };
}

/**
 * The configuration information for a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletionsOptions {
  /**
   * The collection of context messages associated with this chat completions request.
   * Typical usage begins with a chat message for the System role that provides instructions for
   * the behavior of the assistant, followed by alternating messages between the User and
   * Assistant roles.
   */
  messages: ChatRequestMessageUnion[];
  /** A list of functions the model may generate JSON inputs for. */
  functions?: FunctionDefinition[];
  /**
   * Controls how the model responds to function calls. "none" means the model does not call a function,
   * and responds to the end-user. "auto" means the model can pick between an end-user or calling a function.
   *  Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
   *  "none" is the default when no functions are present. "auto" is the default if functions are present.
   */
  functionCall?: FunctionCallPreset | FunctionName;
  /**
   * The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens).
   *
   * This value is now deprecated in favor of `max_completion_tokens`, and is not compatible with o1 series models.
   */
  maxTokens?: number;
  /** An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and reasoning tokens. */
  maxCompletionTokens?: number;
  /**
   * The sampling temperature to use that controls the apparent creativity of generated completions.
   * Higher values will make output more random while lower values will make results more focused
   * and deterministic.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature called nucleus sampling. This value causes the
   * model to consider the results of tokens with the provided probability mass. As an example, a
   * value of 0.15 will cause only the tokens comprising the top 15% of probability mass to be
   * considered.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  topP?: number;
  /**
   * A map between GPT token IDs and bias scores that influences the probability of specific tokens
   * appearing in a completions response. Token IDs are computed via external tokenizer tools, while
   * bias scores reside in the range of -100 to 100 with minimum and maximum values corresponding to
   * a full ban or exclusive selection of a token, respectively. The exact behavior of a given bias
   * score varies by model.
   */
  logitBias?: Record<string, number>;
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The number of chat completions choices that should be generated for a chat completions
   * response.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  n?: number;
  /** A collection of textual sequences that will end completions generation. */
  stop?: string[];
  /**
   * A value that influences the probability of generated tokens appearing based on their existing
   * presence in generated text.
   * Positive values will make tokens less likely to appear when they already exist and increase the
   * model's likelihood to output new topics.
   */
  presencePenalty?: number;
  /**
   * A value that influences the probability of generated tokens appearing based on their cumulative
   * frequency in generated text.
   * Positive values will make tokens less likely to appear as their frequency increases and
   * decrease the likelihood of the model repeating the same statements verbatim.
   */
  frequencyPenalty?: number;
  /** A value indicating whether chat completions should be streamed for this request. */
  stream?: boolean;
  /** Options for streaming response. Only set this when you set `stream: true`. */
  streamOptions?: ChatCompletionStreamOptions | null;
  /**
   * The model name to provide as part of this completions request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /**
   *   The configuration entries for Azure OpenAI chat extensions that use them.
   *   This additional specification is only compatible with Azure OpenAI.
   */
  dataSources?: AzureChatExtensionConfigurationUnion[];
  /** If provided, the configuration options for available Azure OpenAI chat enhancements. */
  enhancements?: AzureChatEnhancementConfiguration;
  /**
   * If specified, the system will make a best effort to sample deterministically such that repeated requests with the
   * same seed and parameters should return the same result. Determinism is not guaranteed, and you should refer to the
   * system_fingerprint response parameter to monitor changes in the backend."
   */
  seed?: number;
  /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`. This option is currently not available on the `gpt-4-vision-preview` model. */
  logprobs?: boolean | null;
  /** An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used. */
  topLogprobs?: number | null;
  /** An object specifying the format that the model must output. Used to enable JSON mode. */
  responseFormat?: ChatCompletionsResponseFormatUnion;
  /** The available tool definitions that the chat completions request can use, including caller-defined functions. */
  tools?: ChatCompletionsToolDefinitionUnion[];
  /** If specified, the model will configure which of the provided tools it can use for the chat completions response. */
  toolChoice?: ChatCompletionsToolSelectionPreset | ChatCompletionsNamedToolSelectionUnion;
  /** Whether to enable parallel function calling during tool use. */
  parallelToolCalls?: boolean;
  /** Whether or not to store the output of this chat completion request for use in our model distillation or evaluation products. */
  store?: boolean;
  /** Developer-defined tags and values used for filtering completions in the stored completions dashboard. */
  metadata?: Record<string, string>;
  /**
   * This option is only valid for o1 models,
   *
   * Constrains effort on reasoning for reasoning models (see https://platform.openai.com/docs/guides/reasoning).
   *
   * Currently supported values are `low`, `medium`, and `high`. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.
   */
  reasoningEffort?: ReasoningEffortValue;
  /** The security context identifies and authenticates users and applications in your multi-tenant AI system, helping security teams investigate and mitigate incidents. */
  userSecurityContext?: UserSecurityContext;
  /**
   * Output types that you would like the model to generate for this request.
   * Most models are capable of generating text, which is the default: `["text"]`
   * The `gpt-4o-audio-preview` model can also be used to generate audio. To
   * request that this model generate both text and audio responses, you can
   * use: `["text", "audio"]`
   */
  modalities?: ChatCompletionModality[];
  /**
   * Configuration for a Predicted Output, which can greatly improve response times
   * when large parts of the model response are known ahead of time. This is most
   * common when you are regenerating a file with only minor changes to most of the content.
   */
  prediction?: PredictionContent;
  /**
   * Parameters for audio output. Required when audio output is requested
   * with `modalities: ["audio"]`
   */
  audio?: AudioOutputParameters;
}

export function chatCompletionsOptionsSerializer(item: ChatCompletionsOptions): any {
  return {
    messages: chatRequestMessageUnionArraySerializer(item["messages"]),
    functions: !item["functions"]
      ? item["functions"]
      : functionDefinitionArraySerializer(item["functions"]),
    function_call: !item["functionCall"]
      ? item["functionCall"]
      : _chatCompletionsOptionsFunctionCallSerializer(item["functionCall"]),
    max_tokens: item["maxTokens"],
    max_completion_tokens: item["maxCompletionTokens"],
    temperature: item["temperature"],
    top_p: item["topP"],
    logit_bias: item["logitBias"],
    user: item["user"],
    n: item["n"],
    stop: !item["stop"]
      ? item["stop"]
      : item["stop"].map((p: any) => {
          return p;
        }),
    presence_penalty: item["presencePenalty"],
    frequency_penalty: item["frequencyPenalty"],
    stream: item["stream"],
    stream_options: !item["streamOptions"]
      ? item["streamOptions"]
      : chatCompletionStreamOptionsSerializer(item["streamOptions"]),
    model: item["model"],
    data_sources: !item["dataSources"]
      ? item["dataSources"]
      : azureChatExtensionConfigurationUnionArraySerializer(item["dataSources"]),
    enhancements: !item["enhancements"]
      ? item["enhancements"]
      : azureChatEnhancementConfigurationSerializer(item["enhancements"]),
    seed: item["seed"],
    logprobs: item["logprobs"],
    top_logprobs: item["topLogprobs"],
    response_format: !item["responseFormat"]
      ? item["responseFormat"]
      : chatCompletionsResponseFormatUnionSerializer(item["responseFormat"]),
    tools: !item["tools"]
      ? item["tools"]
      : chatCompletionsToolDefinitionUnionArraySerializer(item["tools"]),
    tool_choice: !item["toolChoice"]
      ? item["toolChoice"]
      : _chatCompletionsOptionsToolChoiceSerializer(item["toolChoice"]),
    parallel_tool_calls: item["parallelToolCalls"],
    store: item["store"],
    metadata: item["metadata"],
    reasoning_effort: item["reasoningEffort"],
    user_security_context: !item["userSecurityContext"]
      ? item["userSecurityContext"]
      : userSecurityContextSerializer(item["userSecurityContext"]),
    modalities: !item["modalities"]
      ? item["modalities"]
      : item["modalities"].map((p: any) => {
          return p;
        }),
    prediction: !item["prediction"]
      ? item["prediction"]
      : predictionContentSerializer(item["prediction"]),
    audio: !item["audio"] ? item["audio"] : audioOutputParametersSerializer(item["audio"]),
  };
}

export function chatRequestMessageUnionArraySerializer(
  result: Array<ChatRequestMessageUnion>,
): any[] {
  return result.map((item) => {
    return chatRequestMessageUnionSerializer(item);
  });
}

/** An abstract representation of a chat message as provided in a request. */
export interface ChatRequestMessage {
  /** The chat role associated with this message. */
  /** The discriminator possible values: system, developer, user, assistant, tool, function */
  role: ChatRole;
}

export function chatRequestMessageSerializer(item: ChatRequestMessage): any {
  return { role: item["role"] };
}

/** Alias for ChatRequestMessageUnion */
export type ChatRequestMessageUnion =
  | ChatRequestSystemMessage
  | ChatRequestDeveloperMessage
  | ChatRequestUserMessage
  | ChatRequestAssistantMessage
  | ChatRequestToolMessage
  | ChatRequestFunctionMessage
  | ChatRequestMessage;

export function chatRequestMessageUnionSerializer(item: ChatRequestMessageUnion): any {
  switch (item.role) {
    case "system":
      return chatRequestSystemMessageSerializer(item as ChatRequestSystemMessage);

    case "developer":
      return chatRequestDeveloperMessageSerializer(item as ChatRequestDeveloperMessage);

    case "user":
      return chatRequestUserMessageSerializer(item as ChatRequestUserMessage);

    case "assistant":
      return chatRequestAssistantMessageSerializer(item as ChatRequestAssistantMessage);

    case "tool":
      return chatRequestToolMessageSerializer(item as ChatRequestToolMessage);

    case "function":
      return chatRequestFunctionMessageSerializer(item as ChatRequestFunctionMessage);

    default:
      return chatRequestMessageSerializer(item);
  }
}

/** A description of the intended purpose of a message within a chat completions interaction. */
export type ChatRole = "system" | "assistant" | "user" | "function" | "tool" | "developer";

/**
 * A request chat message containing system instructions that influence how the model will generate a chat completions
 * response.
 */
export interface ChatRequestSystemMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'system' for system messages. */
  role: "system";
  /** The contents of the system message. */
  content: string | ChatMessageTextContentItem[];
  /** An optional name for the participant. */
  name?: string;
}

export function chatRequestSystemMessageSerializer(item: ChatRequestSystemMessage): any {
  return {
    role: item["role"],
    content: _chatRequestSystemMessageContentSerializer(item["content"]),
    name: item["name"],
  };
}

/** Alias for _ChatRequestSystemMessageContent */
export type _ChatRequestSystemMessageContent = string | ChatMessageTextContentItem[];

export function _chatRequestSystemMessageContentSerializer(
  item: _ChatRequestSystemMessageContent,
): any {
  return item;
}

export function chatMessageTextContentItemArraySerializer(
  result: Array<ChatMessageTextContentItem>,
): any[] {
  return result.map((item) => {
    return chatMessageTextContentItemSerializer(item);
  });
}

/** A structured chat content item containing plain text. */
export interface ChatMessageTextContentItem extends ChatMessageContentItem {
  /** The discriminated object type: always 'text' for this type. */
  type: "text";
  /** The content of the message. */
  text: string;
}

export function chatMessageTextContentItemSerializer(item: ChatMessageTextContentItem): any {
  return { type: item["type"], text: item["text"] };
}

/**
 * Developer-provided instructions that the model should follow, regardless of messages sent by the user.
 * With o1 models and newer, `developer` messages replace the previous `system` messages."
 */
export interface ChatRequestDeveloperMessage extends ChatRequestMessage {
  /** The role of the messages author, in this case `developer`. */
  role: "developer";
  /** An array of content parts with a defined type. For developer messages, only type `text` is supported. */
  content: string | ChatMessageTextContentItem[];
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
}

export function chatRequestDeveloperMessageSerializer(item: ChatRequestDeveloperMessage): any {
  return {
    role: item["role"],
    content: _chatRequestDeveloperMessageContentSerializer(item["content"]),
    name: item["name"],
  };
}

/** Alias for _ChatRequestDeveloperMessageContent */
export type _ChatRequestDeveloperMessageContent = string | ChatMessageTextContentItem[];

export function _chatRequestDeveloperMessageContentSerializer(
  item: _ChatRequestDeveloperMessageContent,
): any {
  return item;
}

/** A request chat message representing user input to the assistant. */
export interface ChatRequestUserMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'user' for user messages. */
  role: "user";
  /** The contents of the user message, with available input types varying by selected model. */
  content:
    | string
    | (ChatMessageTextContentItem | ChatMessageImageContentItem | ChatMessageAudioContentItem)[];
  /** An optional name for the participant. */
  name?: string;
}

export function chatRequestUserMessageSerializer(item: ChatRequestUserMessage): any {
  return {
    role: item["role"],
    content: _chatRequestUserMessageContentSerializer(item["content"]),
    name: item["name"],
  };
}

/** Alias for _ChatRequestUserMessageContent */
export type _ChatRequestUserMessageContent =
  | string
  | (ChatMessageTextContentItem | ChatMessageImageContentItem | ChatMessageAudioContentItem)[];

export function _chatRequestUserMessageContentSerializer(
  item: _ChatRequestUserMessageContent,
): any {
  return item;
}

export function _chatRequestUserMessageContent1ArraySerializer(
  result: Array<_ChatRequestUserMessageContent1>,
): any[] {
  return result.map((item) => {
    return _chatRequestUserMessageContent1Serializer(item);
  });
}

/** Alias for _ChatRequestUserMessageContent1 */
export type _ChatRequestUserMessageContent1 =
  | ChatMessageTextContentItem
  | ChatMessageImageContentItem
  | ChatMessageAudioContentItem;

export function _chatRequestUserMessageContent1Serializer(
  item: _ChatRequestUserMessageContent1,
): any {
  return item;
}

/** A structured chat content item containing an image reference. */
export interface ChatMessageImageContentItem extends ChatMessageContentItem {
  /** The discriminated object type: always 'image_url' for this type. */
  type: "image_url";
  /** An internet location, which must be accessible to the model,from which the image may be retrieved. */
  imageUrl: ChatMessageImageUrl;
}

export function chatMessageImageContentItemSerializer(item: ChatMessageImageContentItem): any {
  return {
    type: item["type"],
    image_url: chatMessageImageUrlSerializer(item["imageUrl"]),
  };
}

/** An internet location from which the model may retrieve an image. */
export interface ChatMessageImageUrl {
  /** The URL of the image. */
  url: string;
  /**
   * The evaluation quality setting to use, which controls relative prioritization of speed, token consumption, and
   * accuracy.
   */
  detail?: ChatMessageImageDetailLevel;
}

export function chatMessageImageUrlSerializer(item: ChatMessageImageUrl): any {
  return { url: item["url"], detail: item["detail"] };
}

/** A representation of the possible image detail levels for image-based chat completions message content. */
export type ChatMessageImageDetailLevel = "auto" | "low" | "high";

/** A structured chat content item containing audio data. */
export interface ChatMessageAudioContentItem extends ChatMessageContentItem {
  /** The type of the content part. Always `input_audio`. */
  type: "input_audio";
  /** The audio data. */
  inputAudio: InputAudioContent;
}

export function chatMessageAudioContentItemSerializer(item: ChatMessageAudioContentItem): any {
  return {
    type: item["type"],
    input_audio: inputAudioContentSerializer(item["inputAudio"]),
  };
}

/** A structured chat content item containing audio data. */
export interface InputAudioContent {
  /** Base64-encoded audio data. */
  data: string;
  /** The format of the audio data. */
  format: InputAudioFormat;
}

export function inputAudioContentSerializer(item: InputAudioContent): any {
  return { data: item["data"], format: item["format"] };
}

/** Values to describe the format of the input audio data. */
export type InputAudioFormat = "wav" | "mp3";

/** A request chat message representing response or action from the assistant. */
export interface ChatRequestAssistantMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'assistant' for assistant messages. */
  role: "assistant";
  /** The content of the message. */
  content: (string | ChatMessageTextContentItem[] | ChatMessageRefusalContentItem[]) | null;
  /** An optional name for the participant. */
  name?: string;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCallUnion[];
  /**
   * The function call that must be resolved and have its output appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  functionCall?: FunctionCall;
  /** The refusal message by the assistant. */
  refusal?: string | null;
}

export function chatRequestAssistantMessageSerializer(item: ChatRequestAssistantMessage): any {
  return {
    role: item["role"],
    content: !item["content"]
      ? item["content"]
      : _chatRequestAssistantMessageContentSerializer(item["content"]),
    name: item["name"],
    tool_calls: !item["toolCalls"]
      ? item["toolCalls"]
      : chatCompletionsToolCallUnionArraySerializer(item["toolCalls"]),
    function_call: !item["functionCall"]
      ? item["functionCall"]
      : functionCallSerializer(item["functionCall"]),
    refusal: item["refusal"],
  };
}

/** Alias for _ChatRequestAssistantMessageContent */
export type _ChatRequestAssistantMessageContent =
  | string
  | ChatMessageTextContentItem[]
  | ChatMessageRefusalContentItem[];

export function _chatRequestAssistantMessageContentSerializer(
  item: _ChatRequestAssistantMessageContent,
): any {
  return item;
}

export function chatMessageRefusalContentItemArraySerializer(
  result: Array<ChatMessageRefusalContentItem>,
): any[] {
  return result.map((item) => {
    return chatMessageRefusalContentItemSerializer(item);
  });
}

/** A structured chat content item containing model refusal information for a structured outputs request. */
export interface ChatMessageRefusalContentItem extends ChatMessageContentItem {
  /** The discriminated object type: always 'refusal' for this type. */
  type: "refusal";
  /** The refusal message. */
  refusal: string;
}

export function chatMessageRefusalContentItemSerializer(item: ChatMessageRefusalContentItem): any {
  return { type: item["type"], refusal: item["refusal"] };
}

export function chatCompletionsToolCallUnionArraySerializer(
  result: Array<ChatCompletionsToolCallUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolCallUnionSerializer(item);
  });
}

export function chatCompletionsToolCallUnionArrayDeserializer(
  result: Array<ChatCompletionsToolCallUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolCallUnionDeserializer(item);
  });
}

/**
 * An abstract representation of a tool call that must be resolved in a subsequent request to perform the requested
 * chat completion.
 */
export interface ChatCompletionsToolCall {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
  /** The ID of the tool call. */
  id: string;
}

export function chatCompletionsToolCallSerializer(item: ChatCompletionsToolCall): any {
  return { type: item["type"], id: item["id"] };
}

export function chatCompletionsToolCallDeserializer(item: any): ChatCompletionsToolCall {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Alias for ChatCompletionsToolCallUnion */
export type ChatCompletionsToolCallUnion =
  | ChatCompletionsFunctionToolCall
  | ChatCompletionsToolCall;

export function chatCompletionsToolCallUnionSerializer(item: ChatCompletionsToolCallUnion): any {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolCallSerializer(item as ChatCompletionsFunctionToolCall);

    default:
      return chatCompletionsToolCallSerializer(item);
  }
}

export function chatCompletionsToolCallUnionDeserializer(item: any): ChatCompletionsToolCallUnion {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolCallDeserializer(item as ChatCompletionsFunctionToolCall);

    default:
      return chatCompletionsToolCallDeserializer(item);
  }
}

/**
 * A tool call to a function tool, issued by the model in evaluation of a configured function tool, that represents
 * a function invocation needed for a subsequent chat completions request to resolve.
 */
export interface ChatCompletionsFunctionToolCall extends ChatCompletionsToolCall {
  /** The type of tool call, in this case always 'function'. */
  type: "function";
  /** The details of the function invocation requested by the tool call. */
  function: FunctionCall;
}

export function chatCompletionsFunctionToolCallSerializer(
  item: ChatCompletionsFunctionToolCall,
): any {
  return {
    type: item["type"],
    id: item["id"],
    function: functionCallSerializer(item["function"]),
  };
}

export function chatCompletionsFunctionToolCallDeserializer(
  item: any,
): ChatCompletionsFunctionToolCall {
  return {
    type: item["type"],
    id: item["id"],
    function: functionCallDeserializer(item["function"]),
  };
}

/** The name and arguments of a function that should be called, as generated by the model. */
export interface FunctionCall {
  /** The name of the function to call. */
  name: string;
  /**
   * The arguments to call the function with, as generated by the model in JSON format.
   * Note that the model does not always generate valid JSON, and may hallucinate parameters
   * not defined by your function schema. Validate the arguments in your code before calling
   * your function.
   */
  arguments: string;
}

export function functionCallSerializer(item: FunctionCall): any {
  return { name: item["name"], arguments: item["arguments"] };
}

export function functionCallDeserializer(item: any): FunctionCall {
  return {
    name: item["name"],
    arguments: item["arguments"],
  };
}

/** A request chat message representing requested output from a configured tool. */
export interface ChatRequestToolMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'tool' for tool messages. */
  role: "tool";
  /** The content of the message. */
  content: (string | ChatMessageTextContentItem[]) | null;
  /** The ID of the tool call resolved by the provided content. */
  toolCallId: string;
}

export function chatRequestToolMessageSerializer(item: ChatRequestToolMessage): any {
  return {
    role: item["role"],
    content: !item["content"]
      ? item["content"]
      : _chatRequestToolMessageContentSerializer(item["content"]),
    tool_call_id: item["toolCallId"],
  };
}

/** Alias for _ChatRequestToolMessageContent */
export type _ChatRequestToolMessageContent = string | ChatMessageTextContentItem[];

export function _chatRequestToolMessageContentSerializer(
  item: _ChatRequestToolMessageContent,
): any {
  return item;
}

/** A request chat message representing requested output from a configured function. */
export interface ChatRequestFunctionMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'function' for function messages. */
  role: "function";
  /** The name of the function that was called to produce output. */
  name: string;
  /** The output of the function as requested by the function call. */
  content: string | null;
}

export function chatRequestFunctionMessageSerializer(item: ChatRequestFunctionMessage): any {
  return { role: item["role"], name: item["name"], content: item["content"] };
}

export function functionDefinitionArraySerializer(result: Array<FunctionDefinition>): any[] {
  return result.map((item) => {
    return functionDefinitionSerializer(item);
  });
}

/** The definition of a caller-specified function that chat completions may invoke in response to matching user input. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /**
   * A description of what the function does. The model will use this description when selecting the function and
   * interpreting its parameters.
   */
  description?: string;
  /** The parameters the function accepts, described as a JSON Schema object. */
  parameters?: any;
}

export function functionDefinitionSerializer(item: FunctionDefinition): any {
  return {
    name: item["name"],
    description: item["description"],
    parameters: item["parameters"],
  };
}

/** Alias for _ChatCompletionsOptionsFunctionCall */
export type _ChatCompletionsOptionsFunctionCall = FunctionCallPreset | FunctionName;

export function _chatCompletionsOptionsFunctionCallSerializer(
  item: _ChatCompletionsOptionsFunctionCall,
): any {
  return item;
}

/**
 * The collection of predefined behaviors for handling request-provided function information in a chat completions
 * operation.
 */
export type FunctionCallPreset = "auto" | "none";

/**
 * A structure that specifies the exact name of a specific, request-provided function to use when processing a chat
 * completions operation.
 */
export interface FunctionName {
  /** The name of the function to call. */
  name: string;
}

export function functionNameSerializer(item: FunctionName): any {
  return { name: item["name"] };
}

export function azureChatExtensionConfigurationUnionArraySerializer(
  result: Array<AzureChatExtensionConfigurationUnion>,
): any[] {
  return result.map((item) => {
    return azureChatExtensionConfigurationUnionSerializer(item);
  });
}

/**
 *   A representation of configuration data for a single Azure OpenAI chat extension. This will be used by a chat
 *   completions request that should use Azure OpenAI chat extensions to augment the response behavior.
 *   The use of this configuration is compatible only with Azure OpenAI.
 */
export interface AzureChatExtensionConfiguration {
  /**
   *   The label for the type of an Azure chat extension. This typically corresponds to a matching Azure resource.
   *   Azure chat extensions are only compatible with Azure OpenAI.
   */
  /** The discriminator possible values: azure_search, azure_cosmos_db, elasticsearch, mongo_db, pinecone */
  type: AzureChatExtensionType;
}

export function azureChatExtensionConfigurationSerializer(
  item: AzureChatExtensionConfiguration,
): any {
  return { type: item["type"] };
}

/** Alias for AzureChatExtensionConfigurationUnion */
export type AzureChatExtensionConfigurationUnion =
  | AzureSearchChatExtensionConfiguration
  | AzureCosmosDBChatExtensionConfiguration
  | ElasticsearchChatExtensionConfiguration
  | MongoDBChatExtensionConfiguration
  | PineconeChatExtensionConfiguration
  | AzureChatExtensionConfiguration;

export function azureChatExtensionConfigurationUnionSerializer(
  item: AzureChatExtensionConfigurationUnion,
): any {
  switch (item.type) {
    case "azure_search":
      return azureSearchChatExtensionConfigurationSerializer(
        item as AzureSearchChatExtensionConfiguration,
      );

    case "azure_cosmos_db":
      return azureCosmosDBChatExtensionConfigurationSerializer(
        item as AzureCosmosDBChatExtensionConfiguration,
      );

    case "elasticsearch":
      return elasticsearchChatExtensionConfigurationSerializer(
        item as ElasticsearchChatExtensionConfiguration,
      );

    case "mongo_db":
      return mongoDBChatExtensionConfigurationSerializer(item as MongoDBChatExtensionConfiguration);

    case "pinecone":
      return pineconeChatExtensionConfigurationSerializer(
        item as PineconeChatExtensionConfiguration,
      );

    default:
      return azureChatExtensionConfigurationSerializer(item);
  }
}

/**
 *   A representation of configuration data for a single Azure OpenAI chat extension. This will be used by a chat
 *   completions request that should use Azure OpenAI chat extensions to augment the response behavior.
 *   The use of this configuration is compatible only with Azure OpenAI.
 */
export type AzureChatExtensionType =
  | "azure_search"
  | "azure_cosmos_db"
  | "elasticsearch"
  | "pinecone"
  | "mongo_db";

/**
 * A specific representation of configurable options for Azure Search when using it as an Azure OpenAI chat
 * extension.
 */
export interface AzureSearchChatExtensionConfiguration extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Azure Cognitive Search.
   */
  type: "azure_search";
  /** The parameters to use when configuring Azure Search. */
  parameters: AzureSearchChatExtensionParameters;
}

export function azureSearchChatExtensionConfigurationSerializer(
  item: AzureSearchChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: azureSearchChatExtensionParametersSerializer(item["parameters"]),
  };
}

/** Parameters for Azure Cognitive Search when used as an Azure OpenAI chat extension. The supported authentication types are APIKey, SystemAssignedManagedIdentity and UserAssignedManagedIdentity. */
export interface AzureSearchChatExtensionParameters {
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The absolute endpoint path for the Azure Cognitive Search resource to use. */
  endpoint: string;
  /** The name of the index to use as available in the referenced Azure Cognitive Search resource. */
  indexName: string;
  /** Customized field mapping behavior to use when interacting with the search index. */
  fieldsMapping?: AzureSearchIndexFieldMappingOptions;
  /** The query type to use with Azure Cognitive Search. */
  queryType?: AzureSearchQueryType;
  /** The additional semantic configuration for the query. */
  semanticConfiguration?: string;
  /** Search filter. */
  filter?: string;
  /** The embedding dependency for vector search. */
  embeddingDependency?: OnYourDataVectorizationSourceUnion;
}

export function azureSearchChatExtensionParametersSerializer(
  item: AzureSearchChatExtensionParameters,
): any {
  return {
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    endpoint: item["endpoint"],
    index_name: item["indexName"],
    fields_mapping: !item["fieldsMapping"]
      ? item["fieldsMapping"]
      : azureSearchIndexFieldMappingOptionsSerializer(item["fieldsMapping"]),
    query_type: item["queryType"],
    semantic_configuration: item["semanticConfiguration"],
    filter: item["filter"],
    embedding_dependency: !item["embeddingDependency"]
      ? item["embeddingDependency"]
      : onYourDataVectorizationSourceUnionSerializer(item["embeddingDependency"]),
  };
}

/** The context property. */
export type OnYourDataContextProperty = "citations" | "intent" | "all_retrieved_documents";

/** The authentication options for Azure OpenAI On Your Data. */
export interface OnYourDataAuthenticationOptions {
  /** The authentication type. */
  /** The discriminator possible values: api_key, connection_string, key_and_key_id, encoded_api_key, username_and_password, access_token, system_assigned_managed_identity, user_assigned_managed_identity */
  type: OnYourDataAuthenticationType;
}

export function onYourDataAuthenticationOptionsSerializer(
  item: OnYourDataAuthenticationOptions,
): any {
  return { type: item["type"] };
}

/** Alias for OnYourDataAuthenticationOptionsUnion */
export type OnYourDataAuthenticationOptionsUnion =
  | OnYourDataApiKeyAuthenticationOptions
  | OnYourDataConnectionStringAuthenticationOptions
  | OnYourDataKeyAndKeyIdAuthenticationOptions
  | OnYourDataEncodedApiKeyAuthenticationOptions
  | OnYourDataUsernameAndPasswordAuthenticationOptions
  | OnYourDataAccessTokenAuthenticationOptions
  | OnYourDataSystemAssignedManagedIdentityAuthenticationOptions
  | OnYourDataUserAssignedManagedIdentityAuthenticationOptions
  | OnYourDataAuthenticationOptions;

export function onYourDataAuthenticationOptionsUnionSerializer(
  item: OnYourDataAuthenticationOptionsUnion,
): any {
  switch (item.type) {
    case "api_key":
      return onYourDataApiKeyAuthenticationOptionsSerializer(
        item as OnYourDataApiKeyAuthenticationOptions,
      );

    case "connection_string":
      return onYourDataConnectionStringAuthenticationOptionsSerializer(
        item as OnYourDataConnectionStringAuthenticationOptions,
      );

    case "key_and_key_id":
      return onYourDataKeyAndKeyIdAuthenticationOptionsSerializer(
        item as OnYourDataKeyAndKeyIdAuthenticationOptions,
      );

    case "encoded_api_key":
      return onYourDataEncodedApiKeyAuthenticationOptionsSerializer(
        item as OnYourDataEncodedApiKeyAuthenticationOptions,
      );

    case "username_and_password":
      return onYourDataUsernameAndPasswordAuthenticationOptionsSerializer(
        item as OnYourDataUsernameAndPasswordAuthenticationOptions,
      );

    case "access_token":
      return onYourDataAccessTokenAuthenticationOptionsSerializer(
        item as OnYourDataAccessTokenAuthenticationOptions,
      );

    case "system_assigned_managed_identity":
      return onYourDataSystemAssignedManagedIdentityAuthenticationOptionsSerializer(
        item as OnYourDataSystemAssignedManagedIdentityAuthenticationOptions,
      );

    case "user_assigned_managed_identity":
      return onYourDataUserAssignedManagedIdentityAuthenticationOptionsSerializer(
        item as OnYourDataUserAssignedManagedIdentityAuthenticationOptions,
      );

    default:
      return onYourDataAuthenticationOptionsSerializer(item);
  }
}

/** The authentication types supported with Azure OpenAI On Your Data. */
export type OnYourDataAuthenticationType =
  | "api_key"
  | "connection_string"
  | "key_and_key_id"
  | "encoded_api_key"
  | "access_token"
  | "system_assigned_managed_identity"
  | "user_assigned_managed_identity"
  | "username_and_password";

/** The authentication options for Azure OpenAI On Your Data when using an API key. */
export interface OnYourDataApiKeyAuthenticationOptions extends OnYourDataAuthenticationOptions {
  /** The authentication type of API key. */
  type: "api_key";
  /** The API key to use for authentication. */
  key: string;
}

export function onYourDataApiKeyAuthenticationOptionsSerializer(
  item: OnYourDataApiKeyAuthenticationOptions,
): any {
  return { type: item["type"], key: item["key"] };
}

/** The authentication options for Azure OpenAI On Your Data when using a connection string. */
export interface OnYourDataConnectionStringAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of connection string. */
  type: "connection_string";
  /** The connection string to use for authentication. */
  connectionString: string;
}

export function onYourDataConnectionStringAuthenticationOptionsSerializer(
  item: OnYourDataConnectionStringAuthenticationOptions,
): any {
  return { type: item["type"], connection_string: item["connectionString"] };
}

/** The authentication options for Azure OpenAI On Your Data when using an Elasticsearch key and key ID pair. */
export interface OnYourDataKeyAndKeyIdAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of Elasticsearch key and key ID pair. */
  type: "key_and_key_id";
  /** The key to use for authentication. */
  key: string;
  /** The key ID to use for authentication. */
  keyId: string;
}

export function onYourDataKeyAndKeyIdAuthenticationOptionsSerializer(
  item: OnYourDataKeyAndKeyIdAuthenticationOptions,
): any {
  return { type: item["type"], key: item["key"], key_id: item["keyId"] };
}

/** The authentication options for Azure OpenAI On Your Data when using an Elasticsearch encoded API key. */
export interface OnYourDataEncodedApiKeyAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of Elasticsearch encoded API Key. */
  type: "encoded_api_key";
  /** The encoded API key to use for authentication. */
  encodedApiKey: string;
}

export function onYourDataEncodedApiKeyAuthenticationOptionsSerializer(
  item: OnYourDataEncodedApiKeyAuthenticationOptions,
): any {
  return { type: item["type"], encoded_api_key: item["encodedApiKey"] };
}

/** The authentication options for Azure OpenAI On Your Data when using a username and password. */
export interface OnYourDataUsernameAndPasswordAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The discriminator type for username and password. */
  type: "username_and_password";
  /** The username. */
  username: string;
  /** The password. */
  password: string;
}

export function onYourDataUsernameAndPasswordAuthenticationOptionsSerializer(
  item: OnYourDataUsernameAndPasswordAuthenticationOptions,
): any {
  return {
    type: item["type"],
    username: item["username"],
    password: item["password"],
  };
}

/** The authentication options for Azure OpenAI On Your Data when using access token. */
export interface OnYourDataAccessTokenAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of access token. */
  type: "access_token";
  /** The access token to use for authentication. */
  accessToken: string;
}

export function onYourDataAccessTokenAuthenticationOptionsSerializer(
  item: OnYourDataAccessTokenAuthenticationOptions,
): any {
  return { type: item["type"], access_token: item["accessToken"] };
}

/** The authentication options for Azure OpenAI On Your Data when using a system-assigned managed identity. */
export interface OnYourDataSystemAssignedManagedIdentityAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of system-assigned managed identity. */
  type: "system_assigned_managed_identity";
}

export function onYourDataSystemAssignedManagedIdentityAuthenticationOptionsSerializer(
  item: OnYourDataSystemAssignedManagedIdentityAuthenticationOptions,
): any {
  return { type: item["type"] };
}

/** The authentication options for Azure OpenAI On Your Data when using a user-assigned managed identity. */
export interface OnYourDataUserAssignedManagedIdentityAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of user-assigned managed identity. */
  type: "user_assigned_managed_identity";
  /** The resource ID of the user-assigned managed identity to use for authentication. */
  managedIdentityResourceId: string;
}

export function onYourDataUserAssignedManagedIdentityAuthenticationOptionsSerializer(
  item: OnYourDataUserAssignedManagedIdentityAuthenticationOptions,
): any {
  return {
    type: item["type"],
    managed_identity_resource_id: item["managedIdentityResourceId"],
  };
}

/** Optional settings to control how fields are processed when using a configured Azure Search resource. */
export interface AzureSearchIndexFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields?: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
  /** The names of fields that represent vector data. */
  vectorFields?: string[];
  /** The names of fields that represent image vector data. */
  imageVectorFields?: string[];
}

export function azureSearchIndexFieldMappingOptionsSerializer(
  item: AzureSearchIndexFieldMappingOptions,
): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: !item["contentFields"]
      ? item["contentFields"]
      : item["contentFields"].map((p: any) => {
          return p;
        }),
    content_fields_separator: item["contentFieldsSeparator"],
    vector_fields: !item["vectorFields"]
      ? item["vectorFields"]
      : item["vectorFields"].map((p: any) => {
          return p;
        }),
    image_vector_fields: !item["imageVectorFields"]
      ? item["imageVectorFields"]
      : item["imageVectorFields"].map((p: any) => {
          return p;
        }),
  };
}

/** The type of Azure Search retrieval query that should be executed when using it as an Azure OpenAI chat extension. */
export type AzureSearchQueryType =
  | "simple"
  | "semantic"
  | "vector"
  | "vector_simple_hybrid"
  | "vector_semantic_hybrid";

/** An abstract representation of a vectorization source for Azure OpenAI On Your Data with vector search. */
export interface OnYourDataVectorizationSource {
  /** The type of vectorization source to use. */
  /** The discriminator possible values: endpoint, deployment_name, model_id, integrated */
  type: OnYourDataVectorizationSourceType;
}

export function onYourDataVectorizationSourceSerializer(item: OnYourDataVectorizationSource): any {
  return { type: item["type"] };
}

/** Alias for OnYourDataVectorizationSourceUnion */
export type OnYourDataVectorizationSourceUnion =
  | OnYourDataEndpointVectorizationSource
  | OnYourDataDeploymentNameVectorizationSource
  | OnYourDataModelIdVectorizationSource
  | OnYourDataIntegratedVectorizationSource
  | OnYourDataVectorizationSource;

export function onYourDataVectorizationSourceUnionSerializer(
  item: OnYourDataVectorizationSourceUnion,
): any {
  switch (item.type) {
    case "endpoint":
      return onYourDataEndpointVectorizationSourceSerializer(
        item as OnYourDataEndpointVectorizationSource,
      );

    case "deployment_name":
      return onYourDataDeploymentNameVectorizationSourceSerializer(
        item as OnYourDataDeploymentNameVectorizationSource,
      );

    case "model_id":
      return onYourDataModelIdVectorizationSourceSerializer(
        item as OnYourDataModelIdVectorizationSource,
      );

    case "integrated":
      return onYourDataIntegratedVectorizationSourceSerializer(
        item as OnYourDataIntegratedVectorizationSource,
      );

    default:
      return onYourDataVectorizationSourceSerializer(item);
  }
}

/**
 * Represents the available sources Azure OpenAI On Your Data can use to configure vectorization of data for use with
 * vector search.
 */
export type OnYourDataVectorizationSourceType =
  | "endpoint"
  | "deployment_name"
  | "model_id"
  | "integrated";

/**
 * The details of a a vectorization source, used by Azure OpenAI On Your Data when applying vector search, that is based
 * on a public Azure OpenAI endpoint call for embeddings.
 */
export interface OnYourDataEndpointVectorizationSource extends OnYourDataVectorizationSource {
  /** The type of vectorization source to use. Always 'Endpoint' for this type. */
  type: "endpoint";
  /** Specifies the resource endpoint URL from which embeddings should be retrieved. It should be in the format of https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/embeddings. The api-version query parameter is not allowed. */
  endpoint: string;
  /** Specifies the authentication options to use when retrieving embeddings from the specified endpoint. */
  authentication: OnYourDataVectorSearchAuthenticationOptionsUnion;
}

export function onYourDataEndpointVectorizationSourceSerializer(
  item: OnYourDataEndpointVectorizationSource,
): any {
  return {
    type: item["type"],
    endpoint: item["endpoint"],
    authentication: onYourDataVectorSearchAuthenticationOptionsUnionSerializer(
      item["authentication"],
    ),
  };
}

/** The authentication options for Azure OpenAI On Your Data vector search. */
export interface OnYourDataVectorSearchAuthenticationOptions {
  /** The type of authentication to use. */
  /** The discriminator possible values: api_key, access_token */
  type: OnYourDataVectorSearchAuthenticationType;
}

export function onYourDataVectorSearchAuthenticationOptionsSerializer(
  item: OnYourDataVectorSearchAuthenticationOptions,
): any {
  return { type: item["type"] };
}

/** Alias for OnYourDataVectorSearchAuthenticationOptionsUnion */
export type OnYourDataVectorSearchAuthenticationOptionsUnion =
  | OnYourDataVectorSearchApiKeyAuthenticationOptions
  | OnYourDataVectorSearchAccessTokenAuthenticationOptions
  | OnYourDataVectorSearchAuthenticationOptions;

export function onYourDataVectorSearchAuthenticationOptionsUnionSerializer(
  item: OnYourDataVectorSearchAuthenticationOptionsUnion,
): any {
  switch (item.type) {
    case "api_key":
      return onYourDataVectorSearchApiKeyAuthenticationOptionsSerializer(
        item as OnYourDataVectorSearchApiKeyAuthenticationOptions,
      );

    case "access_token":
      return onYourDataVectorSearchAccessTokenAuthenticationOptionsSerializer(
        item as OnYourDataVectorSearchAccessTokenAuthenticationOptions,
      );

    default:
      return onYourDataVectorSearchAuthenticationOptionsSerializer(item);
  }
}

/** The authentication types supported with Azure OpenAI On Your Data vector search. */
export type OnYourDataVectorSearchAuthenticationType = "api_key" | "access_token";

/** The authentication options for Azure OpenAI On Your Data when using an API key. */
export interface OnYourDataVectorSearchApiKeyAuthenticationOptions
  extends OnYourDataVectorSearchAuthenticationOptions {
  /** The authentication type of API key. */
  type: "api_key";
  /** The API key to use for authentication. */
  key: string;
}

export function onYourDataVectorSearchApiKeyAuthenticationOptionsSerializer(
  item: OnYourDataVectorSearchApiKeyAuthenticationOptions,
): any {
  return { type: item["type"], key: item["key"] };
}

/** The authentication options for Azure OpenAI On Your Data vector search when using access token. */
export interface OnYourDataVectorSearchAccessTokenAuthenticationOptions
  extends OnYourDataVectorSearchAuthenticationOptions {
  /** The authentication type of access token. */
  type: "access_token";
  /** The access token to use for authentication. */
  accessToken: string;
}

export function onYourDataVectorSearchAccessTokenAuthenticationOptionsSerializer(
  item: OnYourDataVectorSearchAccessTokenAuthenticationOptions,
): any {
  return { type: item["type"], access_token: item["accessToken"] };
}

/**
 * The details of a a vectorization source, used by Azure OpenAI On Your Data when applying vector search, that is based
 * on an internal embeddings model deployment name in the same Azure OpenAI resource.
 */
export interface OnYourDataDeploymentNameVectorizationSource extends OnYourDataVectorizationSource {
  /** The type of vectorization source to use. Always 'DeploymentName' for this type. */
  type: "deployment_name";
  /** The embedding model deployment name within the same Azure OpenAI resource. This enables you to use vector search without Azure OpenAI api-key and without Azure OpenAI public network access. */
  deploymentName: string;
  /** The number of dimensions the embeddings should have. Only supported in `text-embedding-3` and later models. */
  dimensions?: number;
}

export function onYourDataDeploymentNameVectorizationSourceSerializer(
  item: OnYourDataDeploymentNameVectorizationSource,
): any {
  return {
    type: item["type"],
    deployment_name: item["deploymentName"],
    dimensions: item["dimensions"],
  };
}

/**
 * The details of a a vectorization source, used by Azure OpenAI On Your Data when applying vector search, that is based
 * on a search service model ID. Currently only supported by Elasticsearch®.
 */
export interface OnYourDataModelIdVectorizationSource extends OnYourDataVectorizationSource {
  /** The type of vectorization source to use. Always 'ModelId' for this type. */
  type: "model_id";
  /** The embedding model ID build inside the search service. Currently only supported by Elasticsearch®. */
  modelId: string;
}

export function onYourDataModelIdVectorizationSourceSerializer(
  item: OnYourDataModelIdVectorizationSource,
): any {
  return { type: item["type"], model_id: item["modelId"] };
}

/** Represents the integrated vectorizer defined within the search resource. */
export interface OnYourDataIntegratedVectorizationSource extends OnYourDataVectorizationSource {
  /** The type discriminator. ALways 'integrated'. */
  type: "integrated";
}

export function onYourDataIntegratedVectorizationSourceSerializer(
  item: OnYourDataIntegratedVectorizationSource,
): any {
  return { type: item["type"] };
}

/**
 * A specific representation of configurable options for Azure Cosmos DB when using it as an Azure OpenAI chat
 * extension.
 */
export interface AzureCosmosDBChatExtensionConfiguration extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Azure Cosmos DB.
   */
  type: "azure_cosmos_db";
  /** The parameters to use when configuring Azure OpenAI CosmosDB chat extensions. */
  parameters: AzureCosmosDBChatExtensionParameters;
}

export function azureCosmosDBChatExtensionConfigurationSerializer(
  item: AzureCosmosDBChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: azureCosmosDBChatExtensionParametersSerializer(item["parameters"]),
  };
}

/**
 * Parameters to use when configuring Azure OpenAI On Your Data chat extensions when using Azure Cosmos DB for
 * MongoDB vCore. The supported authentication type is ConnectionString.
 */
export interface AzureCosmosDBChatExtensionParameters {
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The MongoDB vCore database name to use with Azure Cosmos DB. */
  databaseName: string;
  /** The name of the Azure Cosmos DB resource container. */
  containerName: string;
  /** The MongoDB vCore index name to use with Azure Cosmos DB. */
  indexName: string;
  /** Customized field mapping behavior to use when interacting with the search index. */
  fieldsMapping: AzureCosmosDBFieldMappingOptions;
  /** The embedding dependency for vector search. */
  embeddingDependency: OnYourDataVectorizationSourceUnion;
}

export function azureCosmosDBChatExtensionParametersSerializer(
  item: AzureCosmosDBChatExtensionParameters,
): any {
  return {
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    database_name: item["databaseName"],
    container_name: item["containerName"],
    index_name: item["indexName"],
    fields_mapping: azureCosmosDBFieldMappingOptionsSerializer(item["fieldsMapping"]),
    embedding_dependency: onYourDataVectorizationSourceUnionSerializer(item["embeddingDependency"]),
  };
}

/** Optional settings to control how fields are processed when using a configured Azure Cosmos DB resource. */
export interface AzureCosmosDBFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
  /** The names of fields that represent vector data. */
  vectorFields: string[];
}

export function azureCosmosDBFieldMappingOptionsSerializer(
  item: AzureCosmosDBFieldMappingOptions,
): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: item["contentFields"].map((p: any) => {
      return p;
    }),
    content_fields_separator: item["contentFieldsSeparator"],
    vector_fields: item["vectorFields"].map((p: any) => {
      return p;
    }),
  };
}

/**
 * A specific representation of configurable options for Elasticsearch when using it as an Azure OpenAI chat
 * extension.
 */
export interface ElasticsearchChatExtensionConfiguration extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Elasticsearch®.
   */
  type: "elasticsearch";
  /** The parameters to use when configuring Elasticsearch®. */
  parameters: ElasticsearchChatExtensionParameters;
}

export function elasticsearchChatExtensionConfigurationSerializer(
  item: ElasticsearchChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: elasticsearchChatExtensionParametersSerializer(item["parameters"]),
  };
}

/** Parameters to use when configuring Elasticsearch® as an Azure OpenAI chat extension. The supported authentication types are KeyAndKeyId and EncodedAPIKey. */
export interface ElasticsearchChatExtensionParameters {
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The endpoint of Elasticsearch®. */
  endpoint: string;
  /** The index name of Elasticsearch®. */
  indexName: string;
  /** The index field mapping options of Elasticsearch®. */
  fieldsMapping?: ElasticsearchIndexFieldMappingOptions;
  /** The query type of Elasticsearch®. */
  queryType?: ElasticsearchQueryType;
  /** The embedding dependency for vector search. */
  embeddingDependency?: OnYourDataVectorizationSourceUnion;
}

export function elasticsearchChatExtensionParametersSerializer(
  item: ElasticsearchChatExtensionParameters,
): any {
  return {
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    endpoint: item["endpoint"],
    index_name: item["indexName"],
    fields_mapping: !item["fieldsMapping"]
      ? item["fieldsMapping"]
      : elasticsearchIndexFieldMappingOptionsSerializer(item["fieldsMapping"]),
    query_type: item["queryType"],
    embedding_dependency: !item["embeddingDependency"]
      ? item["embeddingDependency"]
      : onYourDataVectorizationSourceUnionSerializer(item["embeddingDependency"]),
  };
}

/** Optional settings to control how fields are processed when using a configured Elasticsearch® resource. */
export interface ElasticsearchIndexFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields?: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
  /** The names of fields that represent vector data. */
  vectorFields?: string[];
}

export function elasticsearchIndexFieldMappingOptionsSerializer(
  item: ElasticsearchIndexFieldMappingOptions,
): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: !item["contentFields"]
      ? item["contentFields"]
      : item["contentFields"].map((p: any) => {
          return p;
        }),
    content_fields_separator: item["contentFieldsSeparator"],
    vector_fields: !item["vectorFields"]
      ? item["vectorFields"]
      : item["vectorFields"].map((p: any) => {
          return p;
        }),
  };
}

/** The type of Elasticsearch® retrieval query that should be executed when using it as an Azure OpenAI chat extension. */
export type ElasticsearchQueryType = "simple" | "vector";

/** A specific representation of configurable options for a MongoDB chat extension configuration. */
export interface MongoDBChatExtensionConfiguration extends AzureChatExtensionConfiguration {
  /** The type label for MongoDB. */
  type: "mongo_db";
  /** The parameters for the MongoDB chat extension. */
  parameters: MongoDBChatExtensionParameters;
}

export function mongoDBChatExtensionConfigurationSerializer(
  item: MongoDBChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: mongoDBChatExtensionParametersSerializer(item["parameters"]),
  };
}

/** Parameters for the MongoDB chat extension. The supported authentication types are AccessToken, SystemAssignedManagedIdentity and UserAssignedManagedIdentity. */
export interface MongoDBChatExtensionParameters {
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataUsernameAndPasswordAuthenticationOptions;
  /** The endpoint name for MongoDB. */
  endpoint: string;
  /** The collection name for MongoDB. */
  collectionName: string;
  /** The database name for MongoDB. */
  databaseName: string;
  /** The app name for MongoDB. */
  appName: string;
  /** The name of the MongoDB index. */
  indexName: string;
  /**
   * Field mappings to apply to data used by the MongoDB data source.
   * Note that content and vector field mappings are required for MongoDB.
   */
  fieldsMapping: {
    contentFields: string[];
    vectorFields: string[];
    titleField?: string;
    urlField?: string;
    filepathField?: string;
    contentFieldsSeparator?: string;
  };
  /** The vectorization source to use with the MongoDB chat extension. */
  embeddingDependency:
    | OnYourDataEndpointVectorizationSource
    | OnYourDataDeploymentNameVectorizationSource;
}

export function mongoDBChatExtensionParametersSerializer(
  item: MongoDBChatExtensionParameters,
): any {
  return {
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataUsernameAndPasswordAuthenticationOptionsSerializer(item["authentication"]),
    endpoint: item["endpoint"],
    collection_name: item["collectionName"],
    database_name: item["databaseName"],
    app_name: item["appName"],
    index_name: item["indexName"],
    fields_mapping: _mongoDBChatExtensionParametersFieldsMappingSerializer(item["fieldsMapping"]),
    embedding_dependency: _mongoDBChatExtensionParametersEmbeddingDependencySerializer(
      item["embeddingDependency"],
    ),
  };
}

/** model interface _MongoDBChatExtensionParametersFieldsMapping */
export interface _MongoDBChatExtensionParametersFieldsMapping {
  contentFields: string[];
  vectorFields: string[];
  titleField?: string;
  urlField?: string;
  filepathField?: string;
  contentFieldsSeparator?: string;
}

export function _mongoDBChatExtensionParametersFieldsMappingSerializer(
  item: _MongoDBChatExtensionParametersFieldsMapping,
): any {
  return {
    content_fields: item["contentFields"].map((p: any) => {
      return p;
    }),
    vector_fields: item["vectorFields"].map((p: any) => {
      return p;
    }),
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields_separator: item["contentFieldsSeparator"],
  };
}

/** Alias for _MongoDBChatExtensionParametersEmbeddingDependency */
export type _MongoDBChatExtensionParametersEmbeddingDependency =
  | OnYourDataEndpointVectorizationSource
  | OnYourDataDeploymentNameVectorizationSource;

export function _mongoDBChatExtensionParametersEmbeddingDependencySerializer(
  item: _MongoDBChatExtensionParametersEmbeddingDependency,
): any {
  return item;
}

/**
 * A specific representation of configurable options for Pinecone when using it as an Azure OpenAI chat
 * extension.
 */
export interface PineconeChatExtensionConfiguration extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Pinecone.
   */
  type: "pinecone";
  /** The parameters to use when configuring Azure OpenAI chat extensions. */
  parameters: PineconeChatExtensionParameters;
}

export function pineconeChatExtensionConfigurationSerializer(
  item: PineconeChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: pineconeChatExtensionParametersSerializer(item["parameters"]),
  };
}

/** Parameters for configuring Azure OpenAI Pinecone chat extensions. The supported authentication type is APIKey. */
export interface PineconeChatExtensionParameters {
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The environment name of Pinecone. */
  environment: string;
  /** The name of the Pinecone database index. */
  indexName: string;
  /** Customized field mapping behavior to use when interacting with the search index. */
  fieldsMapping: PineconeFieldMappingOptions;
  /** The embedding dependency for vector search. */
  embeddingDependency: OnYourDataVectorizationSourceUnion;
}

export function pineconeChatExtensionParametersSerializer(
  item: PineconeChatExtensionParameters,
): any {
  return {
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    environment: item["environment"],
    index_name: item["indexName"],
    fields_mapping: pineconeFieldMappingOptionsSerializer(item["fieldsMapping"]),
    embedding_dependency: onYourDataVectorizationSourceUnionSerializer(item["embeddingDependency"]),
  };
}

/** Optional settings to control how fields are processed when using a configured Pinecone resource. */
export interface PineconeFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
}

export function pineconeFieldMappingOptionsSerializer(item: PineconeFieldMappingOptions): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: item["contentFields"].map((p: any) => {
      return p;
    }),
    content_fields_separator: item["contentFieldsSeparator"],
  };
}

/** A representation of the available Azure OpenAI enhancement configurations. */
export interface AzureChatEnhancementConfiguration {
  /** A representation of the available options for the Azure OpenAI grounding enhancement. */
  grounding?: AzureChatGroundingEnhancementConfiguration;
  /** A representation of the available options for the Azure OpenAI optical character recognition (OCR) enhancement. */
  ocr?: AzureChatOCREnhancementConfiguration;
}

export function azureChatEnhancementConfigurationSerializer(
  item: AzureChatEnhancementConfiguration,
): any {
  return {
    grounding: !item["grounding"]
      ? item["grounding"]
      : azureChatGroundingEnhancementConfigurationSerializer(item["grounding"]),
    ocr: !item["ocr"] ? item["ocr"] : azureChatOCREnhancementConfigurationSerializer(item["ocr"]),
  };
}

/** A representation of the available options for the Azure OpenAI grounding enhancement. */
export interface AzureChatGroundingEnhancementConfiguration {
  /** Specifies whether the enhancement is enabled. */
  enabled: boolean;
}

export function azureChatGroundingEnhancementConfigurationSerializer(
  item: AzureChatGroundingEnhancementConfiguration,
): any {
  return { enabled: item["enabled"] };
}

/** A representation of the available options for the Azure OpenAI optical character recognition (OCR) enhancement. */
export interface AzureChatOCREnhancementConfiguration {
  /** Specifies whether the enhancement is enabled. */
  enabled: boolean;
}

export function azureChatOCREnhancementConfigurationSerializer(
  item: AzureChatOCREnhancementConfiguration,
): any {
  return { enabled: item["enabled"] };
}

/**
 * An abstract representation of a response format configuration usable by Chat Completions. Can be used to enable JSON
 * mode.
 */
export interface ChatCompletionsResponseFormat {
  /** The discriminated type for the response format. */
  /** The discriminator possible values: text, json_object, json_schema */
  type: string;
}

export function chatCompletionsResponseFormatSerializer(item: ChatCompletionsResponseFormat): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsResponseFormatUnion */
export type ChatCompletionsResponseFormatUnion =
  | ChatCompletionsTextResponseFormat
  | ChatCompletionsJsonResponseFormat
  | ChatCompletionsJsonSchemaResponseFormat
  | ChatCompletionsResponseFormat;

export function chatCompletionsResponseFormatUnionSerializer(
  item: ChatCompletionsResponseFormatUnion,
): any {
  switch (item.type) {
    case "text":
      return chatCompletionsTextResponseFormatSerializer(item as ChatCompletionsTextResponseFormat);

    case "json_object":
      return chatCompletionsJsonResponseFormatSerializer(item as ChatCompletionsJsonResponseFormat);

    case "json_schema":
      return chatCompletionsJsonSchemaResponseFormatSerializer(
        item as ChatCompletionsJsonSchemaResponseFormat,
      );

    default:
      return chatCompletionsResponseFormatSerializer(item);
  }
}

/**
 * The standard Chat Completions response format that can freely generate text and is not guaranteed to produce response
 * content that adheres to a specific schema.
 */
export interface ChatCompletionsTextResponseFormat extends ChatCompletionsResponseFormat {
  /** The discriminated object type, which is always 'text' for this format. */
  type: "text";
}

export function chatCompletionsTextResponseFormatSerializer(
  item: ChatCompletionsTextResponseFormat,
): any {
  return { type: item["type"] };
}

/** A response format for Chat Completions that restricts responses to emitting valid JSON objects. */
export interface ChatCompletionsJsonResponseFormat extends ChatCompletionsResponseFormat {
  /** The discriminated object type, which is always 'json_object' for this format. */
  type: "json_object";
}

export function chatCompletionsJsonResponseFormatSerializer(
  item: ChatCompletionsJsonResponseFormat,
): any {
  return { type: item["type"] };
}

/**
 * A response format for Chat Completions that restricts responses to emitting JSON that conforms to a provided JSON
 * Schema for Structured Outputs.
 */
export interface ChatCompletionsJsonSchemaResponseFormat extends ChatCompletionsResponseFormat {
  /** The discriminated object type, which is always 'json_schema' for this format. */
  type: "json_schema";
  jsonSchema: {
    description?: string;
    name: string;
    schema?: any;
    strict?: boolean | null;
  };
}

export function chatCompletionsJsonSchemaResponseFormatSerializer(
  item: ChatCompletionsJsonSchemaResponseFormat,
): any {
  return {
    type: item["type"],
    json_schema: _chatCompletionsJsonSchemaResponseFormatJsonSchemaSerializer(item["jsonSchema"]),
  };
}

/** model interface _ChatCompletionsJsonSchemaResponseFormatJsonSchema */
export interface _ChatCompletionsJsonSchemaResponseFormatJsonSchema {
  /** A description of what the response format is for, used by the model to determine how to respond in the format. */
  description?: string;
  /** The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  schema?: any;
  /** Whether to enable strict schema adherence when generating the output. If set to true, the model will always follow the exact schema defined in the `schema` field. Only a subset of JSON Schema is supported when `strict` is `true`. To learn more, read the [Structured Outputs guide](/docs/guides/structured-outputs). */
  strict?: boolean | null;
}

export function _chatCompletionsJsonSchemaResponseFormatJsonSchemaSerializer(
  item: _ChatCompletionsJsonSchemaResponseFormatJsonSchema,
): any {
  return {
    description: item["description"],
    name: item["name"],
    schema: item["schema"],
    strict: item["strict"],
  };
}

export function chatCompletionsToolDefinitionUnionArraySerializer(
  result: Array<ChatCompletionsToolDefinitionUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolDefinitionUnionSerializer(item);
  });
}

/** An abstract representation of a tool that can be used by the model to improve a chat completions response. */
export interface ChatCompletionsToolDefinition {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
}

export function chatCompletionsToolDefinitionSerializer(item: ChatCompletionsToolDefinition): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsToolDefinitionUnion */
export type ChatCompletionsToolDefinitionUnion =
  | ChatCompletionsFunctionToolDefinition
  | ChatCompletionsToolDefinition;

export function chatCompletionsToolDefinitionUnionSerializer(
  item: ChatCompletionsToolDefinitionUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolDefinitionSerializer(
        item as ChatCompletionsFunctionToolDefinition,
      );

    default:
      return chatCompletionsToolDefinitionSerializer(item);
  }
}

/** The definition information for a chat completions function tool that can call a function in response to a tool call. */
export interface ChatCompletionsFunctionToolDefinition extends ChatCompletionsToolDefinition {
  /** The object name, which is always 'function'. */
  type: "function";
  /** The function definition details for the function tool. */
  function: {
    description?: string;
    name: string;
    parameters?: any;
    strict?: boolean | null;
  };
}

export function chatCompletionsFunctionToolDefinitionSerializer(
  item: ChatCompletionsFunctionToolDefinition,
): any {
  return {
    type: item["type"],
    function: _chatCompletionsFunctionToolDefinitionFunctionSerializer(item["function"]),
  };
}

/** model interface _ChatCompletionsFunctionToolDefinitionFunction */
export interface _ChatCompletionsFunctionToolDefinitionFunction {
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  parameters?: any;
  /** Whether to enable strict schema adherence when generating the function call. If set to true, the model will follow the exact schema defined in the `parameters` field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn more about Structured Outputs in the [function calling guide](docs/guides/function-calling). */
  strict?: boolean | null;
}

export function _chatCompletionsFunctionToolDefinitionFunctionSerializer(
  item: _ChatCompletionsFunctionToolDefinitionFunction,
): any {
  return {
    description: item["description"],
    name: item["name"],
    parameters: item["parameters"],
    strict: item["strict"],
  };
}

/** Alias for _ChatCompletionsOptionsToolChoice */
export type _ChatCompletionsOptionsToolChoice =
  | ChatCompletionsToolSelectionPreset
  | ChatCompletionsNamedToolSelectionUnion;

export function _chatCompletionsOptionsToolChoiceSerializer(
  item: _ChatCompletionsOptionsToolChoice,
): any {
  return item;
}

/** Represents a generic policy for how a chat completions tool may be selected. */
export type ChatCompletionsToolSelectionPreset = "auto" | "none" | "required";

/** An abstract representation of an explicit, named tool selection to use for a chat completions request. */
export interface ChatCompletionsNamedToolSelection {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
}

export function chatCompletionsNamedToolSelectionSerializer(
  item: ChatCompletionsNamedToolSelection,
): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsNamedToolSelectionUnion */
export type ChatCompletionsNamedToolSelectionUnion =
  | ChatCompletionsNamedFunctionToolSelection
  | ChatCompletionsNamedToolSelection;

export function chatCompletionsNamedToolSelectionUnionSerializer(
  item: ChatCompletionsNamedToolSelectionUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsNamedFunctionToolSelectionSerializer(
        item as ChatCompletionsNamedFunctionToolSelection,
      );

    default:
      return chatCompletionsNamedToolSelectionSerializer(item);
  }
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsNamedFunctionToolSelection
  extends ChatCompletionsNamedToolSelection {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The function that should be called. */
  function: ChatCompletionsFunctionToolSelection;
}

export function chatCompletionsNamedFunctionToolSelectionSerializer(
  item: ChatCompletionsNamedFunctionToolSelection,
): any {
  return {
    type: item["type"],
    function: chatCompletionsFunctionToolSelectionSerializer(item["function"]),
  };
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsFunctionToolSelection {
  /** The name of the function that should be called. */
  name: string;
}

export function chatCompletionsFunctionToolSelectionSerializer(
  item: ChatCompletionsFunctionToolSelection,
): any {
  return { name: item["name"] };
}

/** Values for the reasoning */
export type ReasoningEffortValue = "low" | "medium" | "high";

/**
 * User security context contains several parameters that describe the AI application itself,
 * and the end user that interacts with the AI application. These fields assist your security
 * operations teams to investigate and mitigate security incidents by providing a comprehensive
 * approach to protecting your AI applications. (Learn more at https://aka.ms/TP4AI/Documentation/EndUserContext)
 * about protecting AI applications using Microsoft Defender for Cloud.
 */
export interface UserSecurityContext {
  /** The name of the application. Sensitive personal information should not be included in this field. */
  applicationName?: string;
  /** This identifier is the Microsoft Entra ID (formerly Azure Active Directory) user object ID used to authenticate end-users within the generative AI application. Sensitive personal information should not be included in this field. */
  endUserId?: string;
  /** The Microsoft 365 tenant ID the end user belongs to. It's required when the generative AI application is multi tenant. */
  endUserTenantId?: string;
  /** Captures the original client's IP address, accepting both IPv4 and IPv6 formats. */
  sourceIp?: string;
}

export function userSecurityContextSerializer(item: UserSecurityContext): any {
  return {
    application_name: item["applicationName"],
    end_user_id: item["endUserId"],
    end_user_tenant_id: item["endUserTenantId"],
    source_ip: item["sourceIp"],
  };
}

/** Values to specified the required modality for the model to use. */
export type ChatCompletionModality = "text" | "audio";

/** Static predicted output content, such as the content of a text file that is being regenerated. */
export interface PredictionContent {
  /**
   * The type of the predicted content you want to provide. This type is
   * currently always `content`.
   */
  type: "content";
  /**
   * The content that should be matched when generating a model response.
   * If generated tokens would match this content, the entire model response
   * can be returned much more quickly.
   */
  content: string | ChatMessageTextContentItem[];
}

export function predictionContentSerializer(item: PredictionContent): any {
  return {
    type: item["type"],
    content: _predictionContentContentSerializer(item["content"]),
  };
}

/** Alias for _PredictionContentContent */
export type _PredictionContentContent = string | ChatMessageTextContentItem[];

export function _predictionContentContentSerializer(item: _PredictionContentContent): any {
  return item;
}

/** Describes the parameters for audio output. */
export interface AudioOutputParameters {
  /** Specifies the voice type. */
  voice: SpeechVoice;
  /** Specifies the output audio format. */
  format: OutputAudioFormat;
}

export function audioOutputParametersSerializer(item: AudioOutputParameters): any {
  return { voice: item["voice"], format: item["format"] };
}

/** The available voices for text-to-speech. */
export type SpeechVoice = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
/** The output audio format. */
export type OutputAudioFormat = "wav" | "mp3" | "flac" | "opus" | "pcm16";

/** An abstract representation of a structured content item within a chat message. */
export interface ChatMessageContentItem {
  /** The discriminated object type. */
  /** The discriminator possible values: text, refusal, image_url, input_audio */
  type: string;
}

export function chatMessageContentItemSerializer(item: ChatMessageContentItem): any {
  return { type: item["type"] };
}

/** Alias for ChatMessageContentItemUnion */
export type ChatMessageContentItemUnion =
  | ChatMessageTextContentItem
  | ChatMessageRefusalContentItem
  | ChatMessageImageContentItem
  | ChatMessageAudioContentItem
  | ChatMessageContentItem;

export function chatMessageContentItemUnionSerializer(item: ChatMessageContentItemUnion): any {
  switch (item.type) {
    case "text":
      return chatMessageTextContentItemSerializer(item as ChatMessageTextContentItem);

    case "refusal":
      return chatMessageRefusalContentItemSerializer(item as ChatMessageRefusalContentItem);

    case "image_url":
      return chatMessageImageContentItemSerializer(item as ChatMessageImageContentItem);

    case "input_audio":
      return chatMessageAudioContentItemSerializer(item as ChatMessageAudioContentItem);

    default:
      return chatMessageContentItemSerializer(item);
  }
}

/**
 * Representation of the response data from a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletions {
  /** A unique identifier associated with this chat completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /**
   * The collection of completions choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: ChatChoice[];
  /** The model name used for this completions request. */
  model?: string;
  /**
   * Content filtering results for zero or more prompts in the request. In a streaming request,
   * results for different prompts may arrive at different times or in different orders.
   */
  promptFilterResults?: ContentFilterResultsForPrompt[];
  /**
   * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that
   * might impact determinism.
   */
  systemFingerprint?: string;
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage?: CompletionsUsage;
}

export function chatCompletionsDeserializer(item: any): ChatCompletions {
  return {
    id: item["id"],
    created: new Date(item["created"] * 1000),
    choices: chatChoiceArrayDeserializer(item["choices"]),
    model: item["model"],
    promptFilterResults: !item["prompt_filter_results"]
      ? item["prompt_filter_results"]
      : contentFilterResultsForPromptArrayDeserializer(item["prompt_filter_results"]),
    systemFingerprint: item["system_fingerprint"],
    usage: !item["usage"] ? item["usage"] : completionsUsageDeserializer(item["usage"]),
  };
}

export function chatChoiceArrayDeserializer(result: Array<ChatChoice>): any[] {
  return result.map((item) => {
    return chatChoiceDeserializer(item);
  });
}

/**
 * The representation of a single prompt completion as part of an overall chat completions request.
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface ChatChoice {
  /** The chat message for a given chat completions prompt. */
  message?: ChatResponseMessage;
  /** The log probability information for this choice, as enabled via the 'logprobs' request option. */
  logprobs: ChatChoiceLogProbabilityInfo | null;
  /** The ordered index associated with this chat completions choice. */
  index: number;
  /** The reason that this chat completions choice completed its generated. */
  finishReason: CompletionsFinishReason | null;
  /** The delta message content for a streaming response. */
  delta?: ChatResponseMessage;
  /**
   * Information about the content filtering category (hate, sexual, violence, self_harm), if it
   * has been detected, as well as the severity level (very_low, low, medium, high-scale that
   * determines the intensity and risk level of harmful content) and if it has been filtered or not.
   */
  contentFilterResults?: ContentFilterResultsForChoice;
  /**
   * Represents the output results of Azure OpenAI enhancements to chat completions, as configured via the matching input
   * provided in the request. This supplementary information is only available when using Azure OpenAI and only when the
   * request is configured to use enhancements.
   */
  enhancements?: AzureChatEnhancements;
}

export function chatChoiceDeserializer(item: any): ChatChoice {
  return {
    message: !item["message"] ? item["message"] : chatResponseMessageDeserializer(item["message"]),
    logprobs: !item["logprobs"]
      ? item["logprobs"]
      : chatChoiceLogProbabilityInfoDeserializer(item["logprobs"]),
    index: item["index"],
    finishReason: item["finish_reason"],
    delta: !item["delta"] ? item["delta"] : chatResponseMessageDeserializer(item["delta"]),
    contentFilterResults: !item["content_filter_results"]
      ? item["content_filter_results"]
      : contentFilterResultsForChoiceDeserializer(item["content_filter_results"]),
    enhancements: !item["enhancements"]
      ? item["enhancements"]
      : azureChatEnhancementsDeserializer(item["enhancements"]),
  };
}

/** A representation of a chat message as received in a response. */
export interface ChatResponseMessage {
  /** The chat role associated with the message. */
  role: ChatRole;
  /** The refusal message generated by the model. */
  refusal: string | null;
  /** The content of the message. */
  content: string | null;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCallUnion[];
  /**
   * The function call that must be resolved and have its output appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  functionCall?: FunctionCall;
  /**
   * If the audio output modality is requested, this object contains data
   * about the audio response from the model.
   */
  audio?: AudioResponseData;
  /**
   * If Azure OpenAI chat extensions are configured, this array represents the incremental steps performed by those
   * extensions while processing the chat completions request.
   */
  context?: AzureChatExtensionsMessageContext;
}

export function chatResponseMessageDeserializer(item: any): ChatResponseMessage {
  return {
    role: item["role"],
    refusal: item["refusal"],
    content: item["content"],
    toolCalls: !item["tool_calls"]
      ? item["tool_calls"]
      : chatCompletionsToolCallUnionArrayDeserializer(item["tool_calls"]),
    functionCall: !item["function_call"]
      ? item["function_call"]
      : functionCallDeserializer(item["function_call"]),
    audio: !item["audio"] ? item["audio"] : audioResponseDataDeserializer(item["audio"]),
    context: !item["context"]
      ? item["context"]
      : azureChatExtensionsMessageContextDeserializer(item["context"]),
  };
}

/** Object containing audio response data and its metadata. */
export interface AudioResponseData {
  /** Unique identifier for this audio response. */
  id: string;
  /**
   * The Unix timestamp (in seconds) for when this audio response
   * will no longer be accessible on the server for use in multi-turn
   * conversations.
   */
  expiresAt: Date;
  /**
   * Base64 encoded audio bytes generated by the model, in the format
   * specified in the request.
   */
  data: string;
  /** Transcript of the audio generated by the model. */
  transcript: string;
}

export function audioResponseDataDeserializer(item: any): AudioResponseData {
  return {
    id: item["id"],
    expiresAt: new Date(item["expires_at"] * 1000),
    data: item["data"],
    transcript: item["transcript"],
  };
}

/**
 *   A representation of the additional context information available when Azure OpenAI chat extensions are involved
 *   in the generation of a corresponding chat completions response. This context information is only populated when
 *   using an Azure OpenAI request configured to use a matching extension.
 */
export interface AzureChatExtensionsMessageContext {
  /**
   *   The contextual information associated with the Azure chat extensions used for a chat completions request.
   *   These messages describe the data source retrievals, plugin invocations, and other intermediate steps taken in the
   *   course of generating a chat completions response that was augmented by capabilities from Azure OpenAI chat
   *   extensions.
   */
  citations?: AzureChatExtensionDataSourceResponseCitation[];
  /** The detected intent from the chat history, used to pass to the next turn to carry over the context. */
  intent?: string;
  /** All the retrieved documents. */
  allRetrievedDocuments?: AzureChatExtensionRetrievedDocument[];
}

export function azureChatExtensionsMessageContextDeserializer(
  item: any,
): AzureChatExtensionsMessageContext {
  return {
    citations: !item["citations"]
      ? item["citations"]
      : azureChatExtensionDataSourceResponseCitationArrayDeserializer(item["citations"]),
    intent: item["intent"],
    allRetrievedDocuments: !item["all_retrieved_documents"]
      ? item["all_retrieved_documents"]
      : azureChatExtensionRetrievedDocumentArrayDeserializer(item["all_retrieved_documents"]),
  };
}

export function azureChatExtensionDataSourceResponseCitationArrayDeserializer(
  result: Array<AzureChatExtensionDataSourceResponseCitation>,
): any[] {
  return result.map((item) => {
    return azureChatExtensionDataSourceResponseCitationDeserializer(item);
  });
}

/**
 * A single instance of additional context information available when Azure OpenAI chat extensions are involved
 * in the generation of a corresponding chat completions response. This context information is only populated when
 * using an Azure OpenAI request configured to use a matching extension.
 */
export interface AzureChatExtensionDataSourceResponseCitation {
  /** The content of the citation. */
  content: string;
  /** The title of the citation. */
  title?: string;
  /** The URL of the citation. */
  url?: string;
  /** The file path of the citation. */
  filepath?: string;
  /** The chunk ID of the citation. */
  chunkId?: string;
  /** The rerank score of the retrieved document. */
  rerankScore?: number;
}

export function azureChatExtensionDataSourceResponseCitationDeserializer(
  item: any,
): AzureChatExtensionDataSourceResponseCitation {
  return {
    content: item["content"],
    title: item["title"],
    url: item["url"],
    filepath: item["filepath"],
    chunkId: item["chunk_id"],
    rerankScore: item["rerank_score"],
  };
}

export function azureChatExtensionRetrievedDocumentArrayDeserializer(
  result: Array<AzureChatExtensionRetrievedDocument>,
): any[] {
  return result.map((item) => {
    return azureChatExtensionRetrievedDocumentDeserializer(item);
  });
}

/** The retrieved document. */
export interface AzureChatExtensionRetrievedDocument {
  /** The content of the citation. */
  content: string;
  /** The title of the citation. */
  title?: string;
  /** The URL of the citation. */
  url?: string;
  /** The file path of the citation. */
  filepath?: string;
  /** The chunk ID of the citation. */
  chunkId?: string;
  /** The rerank score of the retrieved document. */
  rerankScore?: number;
  /** The search queries used to retrieve the document. */
  searchQueries: string[];
  /** The index of the data source. */
  dataSourceIndex: number;
  /** The original search score of the retrieved document. */
  originalSearchScore?: number;
  /**
   * Represents the rationale for filtering the document. If the document does not undergo filtering,
   * this field will remain unset.
   */
  filterReason?: AzureChatExtensionRetrieveDocumentFilterReason;
}

export function azureChatExtensionRetrievedDocumentDeserializer(
  item: any,
): AzureChatExtensionRetrievedDocument {
  return {
    content: item["content"],
    title: item["title"],
    url: item["url"],
    filepath: item["filepath"],
    chunkId: item["chunk_id"],
    rerankScore: item["rerank_score"],
    searchQueries: item["search_queries"].map((p: any) => {
      return p;
    }),
    dataSourceIndex: item["data_source_index"],
    originalSearchScore: item["original_search_score"],
    filterReason: item["filter_reason"],
  };
}

/** The reason for filtering the retrieved document. */
export type AzureChatExtensionRetrieveDocumentFilterReason = "score" | "rerank";

/** Log probability information for a choice, as requested via 'logprobs' and 'top_logprobs'. */
export interface ChatChoiceLogProbabilityInfo {
  /** The list of log probability information entries for the choice's message content tokens, as requested via the 'logprobs' option. */
  content: ChatTokenLogProbabilityResult[] | null;
  /** The list of log probability information entries for the choice's message refusal message tokens, as requested via the 'logprobs' option. */
  refusal: ChatTokenLogProbabilityResult[] | null;
}

export function chatChoiceLogProbabilityInfoDeserializer(item: any): ChatChoiceLogProbabilityInfo {
  return {
    content: !item["content"]
      ? item["content"]
      : chatTokenLogProbabilityResultArrayDeserializer(item["content"]),
    refusal: !item["refusal"]
      ? item["refusal"]
      : chatTokenLogProbabilityResultArrayDeserializer(item["refusal"]),
  };
}

export function chatTokenLogProbabilityResultArrayDeserializer(
  result: Array<ChatTokenLogProbabilityResult>,
): any[] {
  return result.map((item) => {
    return chatTokenLogProbabilityResultDeserializer(item);
  });
}

/** A representation of the log probability information for a single content token, including a list of most likely tokens if 'top_logprobs' were requested. */
export interface ChatTokenLogProbabilityResult {
  /** The message content token. */
  token: string;
  /** The log probability of the message content token. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be null if there is no bytes representation for the token. */
  bytes: number[] | null;
  /** The list of most likely tokens and their log probability information, as requested via 'top_logprobs'. */
  topLogprobs: ChatTokenLogProbabilityInfo[] | null;
}

export function chatTokenLogProbabilityResultDeserializer(
  item: any,
): ChatTokenLogProbabilityResult {
  return {
    token: item["token"],
    logprob: item["logprob"],
    bytes: !item["bytes"]
      ? item["bytes"]
      : item["bytes"].map((p: any) => {
          return p;
        }),
    topLogprobs: !item["top_logprobs"]
      ? item["top_logprobs"]
      : chatTokenLogProbabilityInfoArrayDeserializer(item["top_logprobs"]),
  };
}

export function chatTokenLogProbabilityInfoArrayDeserializer(
  result: Array<ChatTokenLogProbabilityInfo>,
): any[] {
  return result.map((item) => {
    return chatTokenLogProbabilityInfoDeserializer(item);
  });
}

/** A representation of the log probability information for a single message content token. */
export interface ChatTokenLogProbabilityInfo {
  /** The message content token. */
  token: string;
  /** The log probability of the message content token. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be null if there is no bytes representation for the token. */
  bytes: number[] | null;
}

export function chatTokenLogProbabilityInfoDeserializer(item: any): ChatTokenLogProbabilityInfo {
  return {
    token: item["token"],
    logprob: item["logprob"],
    bytes: !item["bytes"]
      ? item["bytes"]
      : item["bytes"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * Represents the output results of Azure enhancements to chat completions, as configured via the matching input provided
 * in the request.
 */
export interface AzureChatEnhancements {
  /** The grounding enhancement that returns the bounding box of the objects detected in the image. */
  grounding?: AzureGroundingEnhancement;
}

export function azureChatEnhancementsDeserializer(item: any): AzureChatEnhancements {
  return {
    grounding: !item["grounding"]
      ? item["grounding"]
      : azureGroundingEnhancementDeserializer(item["grounding"]),
  };
}

/** The grounding enhancement that returns the bounding box of the objects detected in the image. */
export interface AzureGroundingEnhancement {
  /** The lines of text detected by the grounding enhancement. */
  lines: AzureGroundingEnhancementLine[];
}

export function azureGroundingEnhancementDeserializer(item: any): AzureGroundingEnhancement {
  return {
    lines: azureGroundingEnhancementLineArrayDeserializer(item["lines"]),
  };
}

export function azureGroundingEnhancementLineArrayDeserializer(
  result: Array<AzureGroundingEnhancementLine>,
): any[] {
  return result.map((item) => {
    return azureGroundingEnhancementLineDeserializer(item);
  });
}

/** A content line object consisting of an adjacent sequence of content elements, such as words and selection marks. */
export interface AzureGroundingEnhancementLine {
  /** The text within the line. */
  text: string;
  /** An array of spans that represent detected objects and its bounding box information. */
  spans: AzureGroundingEnhancementLineSpan[];
}

export function azureGroundingEnhancementLineDeserializer(
  item: any,
): AzureGroundingEnhancementLine {
  return {
    text: item["text"],
    spans: azureGroundingEnhancementLineSpanArrayDeserializer(item["spans"]),
  };
}

export function azureGroundingEnhancementLineSpanArrayDeserializer(
  result: Array<AzureGroundingEnhancementLineSpan>,
): any[] {
  return result.map((item) => {
    return azureGroundingEnhancementLineSpanDeserializer(item);
  });
}

/** A span object that represents a detected object and its bounding box information. */
export interface AzureGroundingEnhancementLineSpan {
  /** The text content of the span that represents the detected object. */
  text: string;
  /**
   * The character offset within the text where the span begins. This offset is defined as the position of the first
   * character of the span, counting from the start of the text as Unicode codepoints.
   */
  offset: number;
  /** The length of the span in characters, measured in Unicode codepoints. */
  length: number;
  /** An array of objects representing points in the polygon that encloses the detected object. */
  polygon: AzureGroundingEnhancementCoordinatePoint[];
}

export function azureGroundingEnhancementLineSpanDeserializer(
  item: any,
): AzureGroundingEnhancementLineSpan {
  return {
    text: item["text"],
    offset: item["offset"],
    length: item["length"],
    polygon: azureGroundingEnhancementCoordinatePointArrayDeserializer(item["polygon"]),
  };
}

export function azureGroundingEnhancementCoordinatePointArrayDeserializer(
  result: Array<AzureGroundingEnhancementCoordinatePoint>,
): any[] {
  return result.map((item) => {
    return azureGroundingEnhancementCoordinatePointDeserializer(item);
  });
}

/** A representation of a single polygon point as used by the Azure grounding enhancement. */
export interface AzureGroundingEnhancementCoordinatePoint {
  /** The x-coordinate (horizontal axis) of the point. */
  x: number;
  /** The y-coordinate (vertical axis) of the point. */
  y: number;
}

export function azureGroundingEnhancementCoordinatePointDeserializer(
  item: any,
): AzureGroundingEnhancementCoordinatePoint {
  return {
    x: item["x"],
    y: item["y"],
  };
}

/** Represents the request data used to generate images. */
export interface ImageGenerationOptions {
  /**
   * The model name or Azure OpenAI model deployment name to use for image generation. If not specified, dall-e-2 will be
   * inferred as a default.
   */
  model?: string;
  /** A description of the desired images. */
  prompt: string;
  /**
   * The number of images to generate.
   * Dall-e-2 models support values between 1 and 10.
   * Dall-e-3 models only support a value of 1.
   */
  n?: number;
  /**
   * The desired dimensions for generated images.
   * Dall-e-2 models support 256x256, 512x512, or 1024x1024.
   * Dall-e-3 models support 1024x1024, 1792x1024, or 1024x1792.
   */
  size?: ImageSize;
  /** The format in which image generation response items should be presented. */
  responseFormat?: ImageGenerationResponseFormat;
  /**
   * The desired image generation quality level to use.
   * Only configurable with dall-e-3 models.
   */
  quality?: ImageGenerationQuality;
  /**
   * The desired image generation style to use.
   * Only configurable with dall-e-3 models.
   */
  style?: ImageGenerationStyle;
  /** A unique identifier representing your end-user, which can help to monitor and detect abuse. */
  user?: string;
}

export function imageGenerationOptionsSerializer(item: ImageGenerationOptions): any {
  return {
    model: item["model"],
    prompt: item["prompt"],
    n: item["n"],
    size: item["size"],
    response_format: item["responseFormat"],
    quality: item["quality"],
    style: item["style"],
    user: item["user"],
  };
}

export function imageGenerationOptionsDeserializer(item: any): ImageGenerationOptions {
  return {
    model: item["model"],
    prompt: item["prompt"],
    n: item["n"],
    size: item["size"],
    responseFormat: item["response_format"],
    quality: item["quality"],
    style: item["style"],
    user: item["user"],
  };
}

/** The desired size of generated images. */
export type ImageSize = "256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792";
/** The format in which the generated images are returned. */
export type ImageGenerationResponseFormat = "url" | "b64_json";
/**
 * An image generation configuration that specifies how the model should prioritize quality, cost, and speed.
 * Only configurable with dall-e-3 models.
 */
export type ImageGenerationQuality = "standard" | "hd";
/**
 * An image generation configuration that specifies how the model should incorporate realism and other visual characteristics.
 * Only configurable with dall-e-3 models.
 */
export type ImageGenerationStyle = "natural" | "vivid";

/** The result of a successful image generation operation. */
export interface ImageGenerations {
  /**
   * A timestamp representing when this operation was started.
   * Expressed in seconds since the Unix epoch of 1970-01-01T00:00:00+0000.
   */
  created: Date;
  /** The images generated by the operation. */
  data: ImageGenerationData[];
}

export function imageGenerationsDeserializer(item: any): ImageGenerations {
  return {
    created: new Date(item["created"] * 1000),
    data: imageGenerationDataArrayDeserializer(item["data"]),
  };
}

export function imageGenerationDataArrayDeserializer(result: Array<ImageGenerationData>): any[] {
  return result.map((item) => {
    return imageGenerationDataDeserializer(item);
  });
}

/**
 * A representation of a single generated image, provided as either base64-encoded data or as a URL from which the image
 * may be retrieved.
 */
export interface ImageGenerationData {
  /** The URL that provides temporary access to download the generated image. */
  url?: string;
  /** The complete data for an image, represented as a base64-encoded string. */
  base64Data?: string;
  /** Information about the content filtering results. */
  contentFilterResults?: ImageGenerationContentFilterResults;
  /**
   * The final prompt used by the model to generate the image.
   * Only provided with dall-3-models and only when revisions were made to the prompt.
   */
  revisedPrompt?: string;
  /**
   * Information about the content filtering category (hate, sexual, violence, self_harm), if
   * it has been detected, as well as the severity level (very_low, low, medium, high-scale
   * that determines the intensity and risk level of harmful content) and if it has been
   * filtered or not. Information about jailbreak content and profanity, if it has been detected,
   * and if it has been filtered or not. And information about customer block list, if it has
   * been filtered and its id.
   */
  promptFilterResults?: ImageGenerationPromptFilterResults;
}

export function imageGenerationDataDeserializer(item: any): ImageGenerationData {
  return {
    url: item["url"],
    base64Data: item["b64_json"],
    contentFilterResults: !item["content_filter_results"]
      ? item["content_filter_results"]
      : imageGenerationContentFilterResultsDeserializer(item["content_filter_results"]),
    revisedPrompt: item["revised_prompt"],
    promptFilterResults: !item["prompt_filter_results"]
      ? item["prompt_filter_results"]
      : imageGenerationPromptFilterResultsDeserializer(item["prompt_filter_results"]),
  };
}

/** Describes the content filtering result for the image generation request. */
export interface ImageGenerationContentFilterResults {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
}

export function imageGenerationContentFilterResultsDeserializer(
  item: any,
): ImageGenerationContentFilterResults {
  return {
    sexual: !item["sexual"] ? item["sexual"] : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"] ? item["hate"] : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
  };
}

/** Describes the content filtering results for the prompt of a image generation request. */
export interface ImageGenerationPromptFilterResults {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
  /** Describes whether profanity was detected. */
  profanity?: ContentFilterDetectionResult;
  /** Whether a jailbreak attempt was detected in the prompt. */
  jailbreak?: ContentFilterDetectionResult;
  /** Information about customer block lists and if something was detected the associated list ID. */
  customBlocklists?: ContentFilterDetailedResults;
}

export function imageGenerationPromptFilterResultsDeserializer(
  item: any,
): ImageGenerationPromptFilterResults {
  return {
    sexual: !item["sexual"] ? item["sexual"] : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"] ? item["hate"] : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
    profanity: !item["profanity"]
      ? item["profanity"]
      : contentFilterDetectionResultDeserializer(item["profanity"]),
    jailbreak: !item["jailbreak"]
      ? item["jailbreak"]
      : contentFilterDetectionResultDeserializer(item["jailbreak"]),
    customBlocklists: !item["custom_blocklists"]
      ? item["custom_blocklists"]
      : contentFilterDetailedResultsDeserializer(item["custom_blocklists"]),
  };
}

/** A representation of the request options that control the behavior of a text-to-speech operation. */
export interface SpeechGenerationOptions {
  /** The text to generate audio for. The maximum length is 4096 characters. */
  input: string;
  /** The voice to use for text-to-speech. */
  voice: SpeechVoice;
  /** The audio output format for the spoken text. By default, the MP3 format will be used. */
  responseFormat?: SpeechGenerationResponseFormat;
  /** The speed of speech for generated audio. Values are valid in the range from 0.25 to 4.0, with 1.0 the default and higher values corresponding to faster speech. */
  speed?: number;
  /** The model to use for this text-to-speech request. */
  model?: string;
}

export function speechGenerationOptionsSerializer(item: SpeechGenerationOptions): any {
  return {
    input: item["input"],
    voice: item["voice"],
    response_format: item["responseFormat"],
    speed: item["speed"],
    model: item["model"],
  };
}

/** The supported audio output formats for text-to-speech. */
export type SpeechGenerationResponseFormat = "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";

/**
 * The configuration information for an embeddings request.
 * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
 * recommendations, and other similar scenarios.
 */
export interface EmbeddingsOptions {
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The model name to provide as part of this embeddings request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /**
   * Input texts to get embeddings for, encoded as a an array of strings.
   * Each input must not exceed 2048 tokens in length.
   *
   * Unless you are embedding code, we suggest replacing newlines (\n) in your input with a single space,
   * as we have observed inferior results when newlines are present.
   */
  input: string[];
  /** The response encoding format to use for embedding data. */
  encodingFormat?: EmbeddingEncodingFormat;
  /** The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models. */
  dimensions?: number;
  /** When using Azure OpenAI, specifies the input type to use for embedding search. */
  inputType?: string;
}

export function embeddingsOptionsSerializer(item: EmbeddingsOptions): any {
  return {
    user: item["user"],
    model: item["model"],
    input: item["input"].map((p: any) => {
      return p;
    }),
    encoding_format: item["encodingFormat"],
    dimensions: item["dimensions"],
    input_type: item["inputType"],
  };
}

/** Represents the available formats for embeddings data on responses. */
export type EmbeddingEncodingFormat = "float" | "base64";

/**
 * Representation of the response data from an embeddings request.
 * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
 * recommendations, and other similar scenarios.
 */
export interface Embeddings {
  /** Embedding values for the prompts submitted in the request. */
  data: EmbeddingItem[];
  /** Usage counts for tokens input using the embeddings API. */
  usage: EmbeddingsUsage;
}

export function embeddingsDeserializer(item: any): Embeddings {
  return {
    data: embeddingItemArrayDeserializer(item["data"]),
    usage: embeddingsUsageDeserializer(item["usage"]),
  };
}

export function embeddingItemArrayDeserializer(result: Array<EmbeddingItem>): any[] {
  return result.map((item) => {
    return embeddingItemDeserializer(item);
  });
}

/** Representation of a single embeddings relatedness comparison. */
export interface EmbeddingItem {
  /**
   * List of embeddings value for the input prompt. These represent a measurement of the
   * vector-based relatedness of the provided input.
   */
  embedding: number[];
  /** Index of the prompt to which the EmbeddingItem corresponds. */
  index: number;
  /** The object type which is always 'embedding'. */
  object: "embedding";
}

export function embeddingItemDeserializer(item: any): EmbeddingItem {
  return {
    embedding: item["embedding"].map((p: any) => {
      return p;
    }),
    index: item["index"],
    object: item["object"],
  };
}

/** Measurement of the amount of tokens used in this request and response. */
export interface EmbeddingsUsage {
  /** Number of tokens sent in the original request. */
  promptTokens: number;
  /** Total number of tokens transacted in this request/response. */
  totalTokens: number;
}

export function embeddingsUsageDeserializer(item: any): EmbeddingsUsage {
  return {
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
}

/** The response data from a file list operation. */
export interface FileListResponse {
  /** The object type, which is always 'list'. */
  object: "list";
  /** The files returned for the request. */
  data: OpenAIFile[];
}

export function fileListResponseDeserializer(item: any): FileListResponse {
  return {
    object: item["object"],
    data: openAIFileArrayDeserializer(item["data"]),
  };
}

export function openAIFileArrayDeserializer(result: Array<OpenAIFile>): any[] {
  return result.map((item) => {
    return openAIFileDeserializer(item);
  });
}

/** Represents an assistant that can call the model and use tools. */
export interface OpenAIFile {
  /** The object type, which is always 'file'. */
  object: "file";
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The name of the file. */
  filename: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The intended purpose of a file. */
  purpose: FilePurpose;
  /** The state of the file. This field is available in Azure OpenAI only. */
  status?: FileState;
  /** The error message with details in case processing of this file failed. This field is available in Azure OpenAI only. */
  statusDetails?: string;
}

export function openAIFileDeserializer(item: any): OpenAIFile {
  return {
    object: item["object"],
    id: item["id"],
    bytes: item["bytes"],
    filename: item["filename"],
    createdAt: new Date(item["created_at"] * 1000),
    purpose: item["purpose"],
    status: item["status"],
    statusDetails: item["status_details"],
  };
}

/** The possible values denoting the intended usage of a file. */
export type FilePurpose =
  | "fine-tune"
  | "fine-tune-results"
  | "assistants"
  | "assistants_output"
  | "batch"
  | "batch_output"
  | "vision";
/** The state of the file. */
export type FileState =
  | "uploaded"
  | "pending"
  | "running"
  | "processed"
  | "error"
  | "deleting"
  | "deleted";

/** A status response from a file deletion operation. */
export interface FileDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'file'. */
  object: "file";
}

export function fileDeletionStatusDeserializer(item: any): FileDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfBatch {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data?: Batch[];
  /** The first ID represented in this list. */
  firstId?: string;
  /** The last ID represented in this list. */
  lastId?: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore?: boolean;
}

export function openAIPageableListOfBatchDeserializer(item: any): OpenAIPageableListOfBatch {
  return {
    object: item["object"],
    data: !item["data"] ? item["data"] : batchArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function batchArrayDeserializer(result: Array<Batch>): any[] {
  return result.map((item) => {
    return batchDeserializer(item);
  });
}

/** The Batch object. */
export interface Batch {
  /** The id assigned to the Batch. */
  id: string;
  /** The object type, which is always `batch`. */
  object: "batch";
  /** The OpenAI API endpoint used by the batch. */
  endpoint?: string;
  /** The list of Batch errors. */
  errors?: BatchErrorList;
  /** The ID of the input file for the batch. */
  inputFileId: string;
  /** The time frame within which the batch should be processed. */
  completionWindow?: string;
  /** The current status of the batch. */
  status?: BatchStatus;
  /** The ID of the file containing the outputs of successfully executed requests. */
  outputFileId?: string;
  /** The ID of the file containing the outputs of requests with errors. */
  errorFileId?: string;
  /** The Unix timestamp (in seconds) for when the batch was created. */
  createdAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch started processing. */
  inProgressAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch will expire. */
  expiresAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch started finalizing. */
  finalizingAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch was completed. */
  completedAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch failed. */
  failedAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch expired. */
  expiredAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch started cancelling. */
  cancellingAt?: Date;
  /** The Unix timestamp (in seconds) for when the batch was cancelled. */
  cancelledAt?: Date;
  /** The request counts for different statuses within the batch. */
  requestCounts?: {
    total?: number;
    completed?: number;
    failed?: number;
  };
  /** A set of key-value pairs that can be attached to the batch. This can be useful for storing additional information about the batch in a structured format. */
  metadata?: Record<string, string>;
}

export function batchDeserializer(item: any): Batch {
  return {
    id: item["id"],
    object: item["object"],
    endpoint: item["endpoint"],
    errors: !item["errors"] ? item["errors"] : batchErrorListDeserializer(item["errors"]),
    inputFileId: item["input_file_id"],
    completionWindow: item["completion_window"],
    status: item["status"],
    outputFileId: item["output_file_id"],
    errorFileId: item["error_file_id"],
    createdAt: !item["created_at"] ? item["created_at"] : new Date(item["created_at"] * 1000),
    inProgressAt: !item["in_progress_at"]
      ? item["in_progress_at"]
      : new Date(item["in_progress_at"] * 1000),
    expiresAt: !item["expires_at"] ? item["expires_at"] : new Date(item["expires_at"] * 1000),
    finalizingAt: !item["finalizing_at"]
      ? item["finalizing_at"]
      : new Date(item["finalizing_at"] * 1000),
    completedAt: !item["completed_at"]
      ? item["completed_at"]
      : new Date(item["completed_at"] * 1000),
    failedAt: !item["failed_at"] ? item["failed_at"] : new Date(item["failed_at"] * 1000),
    expiredAt: !item["expired_at"] ? item["expired_at"] : new Date(item["expired_at"] * 1000),
    cancellingAt: !item["cancelling_at"]
      ? item["cancelling_at"]
      : new Date(item["cancelling_at"] * 1000),
    cancelledAt: !item["cancelled_at"]
      ? item["cancelled_at"]
      : new Date(item["cancelled_at"] * 1000),
    requestCounts: !item["request_counts"]
      ? item["request_counts"]
      : _batchRequestCountsDeserializer(item["request_counts"]),
    metadata: item["metadata"],
  };
}

/** A list of Batch errors. */
export interface BatchErrorList {
  /** The object type, which is always `list`. */
  object: "list";
  /** The list of Batch error data. */
  data?: BatchErrorDatum[];
}

export function batchErrorListDeserializer(item: any): BatchErrorList {
  return {
    object: item["object"],
    data: !item["data"] ? item["data"] : batchErrorDatumArrayDeserializer(item["data"]),
  };
}

export function batchErrorDatumArrayDeserializer(result: Array<BatchErrorDatum>): any[] {
  return result.map((item) => {
    return batchErrorDatumDeserializer(item);
  });
}

/** A Datum containing information about a Batch Error. */
export interface BatchErrorDatum {
  /** An error code identifying the error type. */
  code?: string;
  /** A human-readable message providing more details about the error. */
  message?: string;
  /** The name of the parameter that caused the error, if applicable. */
  param?: string;
  /** The line number of the input file where the error occurred, if applicable. */
  line?: number;
}

export function batchErrorDatumDeserializer(item: any): BatchErrorDatum {
  return {
    code: item["code"],
    message: item["message"],
    param: item["param"],
    line: item["line"],
  };
}

/** The status of a batch. */
export type BatchStatus =
  | "validating"
  | "failed"
  | "in_progress"
  | "finalizing"
  | "completed"
  | "expired"
  | "cancelling"
  | "cancelled";

/** model interface _BatchRequestCounts */
export interface _BatchRequestCounts {
  /** Total number of requests in the batch. */
  total?: number;
  /** Number of requests that have been completed successfully. */
  completed?: number;
  /** Number of requests that have failed. */
  failed?: number;
}

export function _batchRequestCountsDeserializer(item: any): _BatchRequestCounts {
  return {
    total: item["total"],
    completed: item["completed"],
    failed: item["failed"],
  };
}

/** Defines the request to create a batch. */
export interface BatchCreateRequest {
  /** The API endpoint used by the batch. */
  endpoint: string;
  /** The ID of the input file for the batch. */
  inputFileId: string;
  /** The time frame within which the batch should be processed. */
  completionWindow: string;
  /** A set of key-value pairs that can be attached to the batch. This can be useful for storing additional information about the batch in a structured format. */
  metadata?: Record<string, string>;
}

export function batchCreateRequestSerializer(item: BatchCreateRequest): any {
  return {
    endpoint: item["endpoint"],
    input_file_id: item["inputFileId"],
    completion_window: item["completionWindow"],
    metadata: item["metadata"],
  };
}

/** The request body of an upload creation operation. */
export interface CreateUploadRequest {
  /** The name of the file to upload. */
  filename: string;
  /**
   * The intended purpose of the uploaded file.
   *
   * Use 'assistants' for Assistants and Message files, 'vision' for Assistants image file inputs, 'batch' for Batch API, and 'fine-tune' for Fine-tuning.
   */
  purpose: "assistants" | "batch" | "fine-tune" | "vision";
  /** The number of bytes in the file you are uploading. */
  bytes: number;
  /**
   * The MIME type of the file.
   *
   * This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.
   */
  mimeType: string;
}

export function createUploadRequestSerializer(item: CreateUploadRequest): any {
  return {
    filename: item["filename"],
    purpose: item["purpose"],
    bytes: item["bytes"],
    mime_type: item["mimeType"],
  };
}

/** The Upload object can accept byte chunks in the form of Parts. */
export interface Upload {
  /** The Upload unique identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the Upload was created. */
  createdAt: Date;
  /** The name of the file to be uploaded. */
  filename: string;
  /** The intended number of bytes to be uploaded. */
  bytes: number;
  /** The intended purpose of the file. */
  purpose:
    | "batch"
    | "batch_output"
    | "fine-tune"
    | "fine-tune-results"
    | "assistants"
    | "assistants_output"
    | "vision";
  /** The status of the Upload. */
  status: "pending" | "completed" | "cancelled" | "expired";
  /** The Unix timestamp (in seconds) for when the Upload was created. */
  expiresAt: Date;
  /** The object type, which is always "upload". */
  object?: "upload";
  /** The ready File object after the Upload is completed. */
  file?: OpenAIFile | null;
}

export function uploadDeserializer(item: any): Upload {
  return {
    id: item["id"],
    createdAt: new Date(item["created_at"] * 1000),
    filename: item["filename"],
    bytes: item["bytes"],
    purpose: item["purpose"],
    status: item["status"],
    expiresAt: new Date(item["expires_at"] * 1000),
    object: item["object"],
    file: !item["file"] ? item["file"] : openAIFileDeserializer(item["file"]),
  };
}

/** The multipart/form-data request body of a data part addition request for an upload. */
export interface AddUploadPartRequest {
  /** The chunk of bytes for this Part. */
  data: FileContents | { contents: FileContents; contentType?: string; filename?: string };
}

export function addUploadPartRequestSerializer(item: AddUploadPartRequest): any {
  return [createFilePartDescriptor("data", item["data"])];
}

/** The upload Part represents a chunk of bytes we can add to an Upload object. */
export interface UploadPart {
  /** The upload Part unique identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the Part was created. */
  createdAt: Date;
  /** The ID of the Upload object that this Part was added to. */
  uploadId: string;
  /** The object type, which is always `upload.part`. */
  object: "upload.part";
  /** Azure only field. */
  azureBlockId?: string;
}

export function uploadPartDeserializer(item: any): UploadPart {
  return {
    id: item["id"],
    createdAt: new Date(item["created_at"] * 1000),
    uploadId: item["upload_id"],
    object: item["object"],
    azureBlockId: item["azure_block_id"],
  };
}

/** The request body of an upload completion request. */
export interface CompleteUploadRequest {
  /** The ordered list of Part IDs. */
  partIds: string[];
  /** The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect. */
  md5?: string;
}

export function completeUploadRequestSerializer(item: CompleteUploadRequest): any {
  return {
    part_ids: item["partIds"].map((p: any) => {
      return p;
    }),
    md5: item["md5"],
  };
}

/** The types of predicted content */
export type PredictionContentType = "content";

/** Known values of {@link ServiceApiVersions} that the service accepts. */
export enum KnownServiceApiVersions {
  V20221201 = "2022-12-01",
  V20230515 = "2023-05-15",
  V20230601Preview = "2023-06-01-preview",
  V20230701Preview = "2023-07-01-preview",
  V20240201 = "2024-02-01",
  V20240215Preview = "2024-02-15-preview",
  V20240301Preview = "2024-03-01-preview",
  V20240401Preview = "2024-04-01-preview",
  V20240501Preview = "2024-05-01-preview",
  V20240601 = "2024-06-01",
  V20240701Preview = "2024-07-01-preview",
  V20240801Preview = "2024-08-01-preview",
  V20240901Preview = "2024-09-01-preview",
  V20241001Preview = "2024-10-01-preview",
  V20250101Preview = "2025-01-01-preview",
}
