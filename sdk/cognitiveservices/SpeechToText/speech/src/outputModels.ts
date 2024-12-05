// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Transcription */
export interface TranscriptionOutput {
  /** TranscriptionLinks */
  links?: TranscriptionLinksOutput;
  /** TranscriptionProperties */
  properties: TranscriptionPropertiesOutput;
  /** The location of this entity. */
  readonly self?: string;
  /** EntityReference */
  model?: EntityReferenceOutput;
  /** EntityReference */
  dataset?: EntityReferenceOutput;
  /**
   * A list of content urls to get audio files to transcribe. Up to 1000 urls are allowed.
   * This property will not be returned in a response.
   */
  contentUrls?: string[];
  /**
   * A URL for an Azure blob container that contains the audio files. A container is allowed to have a maximum size of 5GB and a maximum number of 10000 blobs.
   * The maximum size for a blob is 2.5GB.
   * Container SAS should contain 'r' (read) and 'l' (list) permissions.
   * This property will not be returned in a response.
   */
  contentContainerUrl?: string;
  /** The locale of the contained data. If Language Identification is used, this locale is used to transcribe speech for which no language could be detected. */
  locale: string;
  /** The display name of the object. */
  displayName: string;
  /** The description of the object. */
  description?: string;
  /**
   * The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum
   * allowed value length is 256 characters and the count of allowed entries is 10.
   */
  customProperties?: Record<string, string>;
  /**
   * The time-stamp when the current status was entered.
   * The time stamp is encoded as ISO 8601 date and time format
   * ("YYYY-MM-DDThh:mm:ssZ", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   */
  readonly lastActionDateTime?: string;
  /**
   * The status of the object
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed"
   */
  status?: StatusOutput;
  /**
   * The time-stamp when the object was created.
   * The time stamp is encoded as ISO 8601 date and time format
   * ("YYYY-MM-DDThh:mm:ssZ", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   */
  readonly createdDateTime?: string;
}

/** TranscriptionUpdate */
export interface TranscriptionLinksOutput {
  /** The location to get all files of this entity. See operation "Transcriptions_ListFiles" for more details. */
  readonly files?: string;
}

/** TranscriptionProperties */
export interface TranscriptionPropertiesOutput {
  /** A value indicating whether word level timestamps are requested. The default value is false. */
  wordLevelTimestampsEnabled?: boolean;
  /** A value indicating whether word level timestamps for the display form are requested. The default value is false. */
  displayFormWordLevelTimestampsEnabled?: boolean;
  /** The duration of the transcription. The duration is encoded as ISO 8601 duration ("PnYnMnDTnHnMnS", see https://en.wikipedia.org/wiki/ISO_8601#Durations). */
  readonly duration?: string;
  /** A collection of the requested channel numbers. In the default case, the channels 0 and 1 are considered. */
  channels?: number[];
  /**
   * The requested destination container.
   *
   * Remarks
   *
   * When a destination container is used in combination with a timeToLive, the metadata of a transcription will be deleted normally, but the data stored in the destination container, including transcription results, will remain untouched, because no delete permissions are required for this container.
   *
   * To support automatic cleanup, either configure blob lifetimes on the container, or use "Bring your own Storage (BYOS)" instead of destinationContainerUrl, where blobs can be cleaned up.
   */
  destinationContainerUrl?: string;
  /**
   * The mode used for punctuation.
   *
   * Possible values: "None", "Dictated", "Automatic", "DictatedAndAutomatic"
   */
  punctuationMode?: PunctuationModeOutput;
  /**
   * Mode of profanity filtering.
   *
   * Possible values: "None", "Removed", "Tags", "Masked"
   */
  profanityFilterMode?: ProfanityFilterModeOutput;
  /**
   * How long the transcription will be kept in the system after it has completed. Once the transcription reaches the time to live after completion (successful or failed) it will be automatically deleted.
   *
   * Note: When using BYOS (bring your own storage), the result files on the customer owned storage account will also be deleted. Use either destinationContainerUrl to specify a separate container for result files which will not be deleted when the timeToLive expires, or retrieve the result files through the API and store them as needed.
   *
   * The shortest supported duration is 6h, the longest supported duration is 31 days. 2 days ("P2D") is the recommended default value when data is consumed directly. The duration is encoded as ISO 8601 duration ("PnYnMnDTnHnMnS", see https://en.wikipedia.org/wiki/ISO_8601#Durations).
   */
  timeToLive: string;
  /** EntityError */
  error?: EntityErrorOutput;
  /** DiarizationProperties */
  diarization?: DiarizationPropertiesOutput;
  /** LanguageIdentificationProperties */
  languageIdentification?: LanguageIdentificationPropertiesOutput;
}

/** EntityError */
export interface EntityErrorOutput {
  /** The code of this error. */
  readonly code?: string;
  /** The message for this error. */
  readonly message?: string;
}

/** DiarizationProperties */
export interface DiarizationPropertiesOutput {
  /** A value indicating whether speaker diarization is enabled. */
  enabled?: boolean;
  /** A hint for the maximum number of speakers for diarization. Must be greater than 1 and less than 36. */
  maxSpeakers?: number;
}

/** LanguageIdentificationProperties */
export interface LanguageIdentificationPropertiesOutput {
  /**
   * The mode used for language identification.
   *
   * Possible values: "Continuous", "Single"
   */
  mode?: LanguageIdentificationModeOutput;
  /** The candidate locales for language identification (example ["en-US", "de-DE", "es-ES"]). A minimum of 2 and a maximum of 10 candidate locales, including the main locale for the transcription, is supported for continuous mode. For single language identification, the maximum number of candidate locales is unbounded. */
  candidateLocales: string[];
  /**
   * An optional mapping of locales to speech model entities. If no model is given for a locale, the default base model is used.
   * Keys must be locales contained in the candidate locales, values are entities for models of the respective locales.
   */
  speechModelMapping?: Record<string, EntityReferenceOutput>;
}

/** EntityReference */
export interface EntityReferenceOutput {
  /** The location of the referenced entity. */
  self: string;
}

export interface PageableOutput {
  /**
   * A list of entities limited by either the passed query parameters 'skip' and 'top' or their default values.
   *
   * When iterating through a list using pagination and deleting entities in parallel, some entities will be skipped in the results.
   * It's recommended to build a list on the client and delete after the fetching of the complete list.
   */
  readonly values?: Array<TranscriptionOutput>;
  /** A link to the next set of paginated results if there are more entities available; otherwise null. */
  readonly "@nextLink"?: string;
}

/** The result of the transcribe operation. */
export interface TranscribeResultOutput {
  /** The duration of the audio in milliseconds. */
  durationMilliseconds: number;
  /** The full transcript for each channel. */
  combinedPhrases: Array<ChannelCombinedPhrasesOutput>;
  /** The transcription results segmented into phrases. */
  phrases: Array<PhraseOutput>;
}

/** The full transcript per channel. */
export interface ChannelCombinedPhrasesOutput {
  /** The 0-based channel index. Only present if channel separation is enabled. */
  channel?: number;
  /** The complete transcribed text for the channel. */
  text: string;
}

/** A transcribed phrase. */
export interface PhraseOutput {
  /** The 0-based channel index. Only present if channel separation is enabled. */
  channel?: number;
  /** A unique integer number that is assigned to each speaker detected in the audio without particular order. Only present if speaker diarization is enabled. */
  speaker?: number;
  /** The start offset of the phrase in milliseconds. */
  offsetMilliseconds: number;
  /** The duration of the phrase in milliseconds. */
  durationMilliseconds: number;
  /** The transcribed text of the phrase. */
  text: string;
  /** The words that make up the phrase. Only present if word-level timestamps are enabled. */
  words?: Array<WordOutput>;
  /** The locale of the phrase. */
  locale?: string;
  /** The confidence value for the phrase. */
  confidence: number;
}

/** Time-stamped word in the display form. */
export interface WordOutput {
  /** The recognized word, including punctuation. */
  text: string;
  /** The start offset of the word in milliseconds. */
  offsetMilliseconds: number;
  /** The duration of the word in milliseconds. */
  durationMilliseconds: number;
}

/** Alias for PunctuationModeOutput */
export type PunctuationModeOutput = string;
/** Alias for ProfanityFilterModeOutput */
export type ProfanityFilterModeOutput = string;
/** Alias for LanguageIdentificationModeOutput */
export type LanguageIdentificationModeOutput = string;
/** Alias for StatusOutput */
export type StatusOutput = string;
