// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Transcription */
export interface TranscriptionJob {
  /** TranscriptionLinks */
  links?: TranscriptionLinks;
  /** TranscriptionProperties */
  properties: TranscriptionProperties;
  /** EntityReference */
  model?: EntityReference;
  /** EntityReference */
  dataset?: EntityReference;
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
}

/** TranscriptionLinks */
export interface TranscriptionLinks {}

/** TranscriptionProperties */
export interface TranscriptionProperties {
  /** A value indicating whether word level timestamps are requested. The default value is false. */
  wordLevelTimestampsEnabled?: boolean;
  /** A value indicating whether word level timestamps for the display form are requested. The default value is false. */
  displayFormWordLevelTimestampsEnabled?: boolean;
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
  punctuationMode?: PunctuationMode;
  /**
   * Mode of profanity filtering.
   *
   * Possible values: "None", "Removed", "Tags", "Masked"
   */
  profanityFilterMode?: ProfanityFilterMode;
  /**
   * How long the transcription will be kept in the system after it has completed. Once the transcription reaches the time to live after completion(successful or failed) it will be automatically deleted.
   *
   * Note: When using BYOS (bring your own storage), the result files on the customer owned storage account will also be deleted.Use either destinationContainerUrl to specify a separate container for result files which will not be deleted when the timeToLive expires, or retrieve the result files through the API and store them as needed.
   *
   * The shortest supported duration is 6 hours, the longest supported duration is 31 days. 2 days (48 hours) is the recommended default value when data is consumed directly.
   */
  timeToLiveHours: number;
  /** EntityError */
  error?: EntityError;
  /** Speaker Identification */
  diarization?: DiarizationProperties;
  /** LanguageIdentificationProperties */
  languageIdentification?: LanguageIdentificationProperties;
}

/** EntityError */
export interface EntityError {}

/** Speaker Identification Properties */
export interface DiarizationProperties {
  /** A value indicating whether speaker identification is enabled. */
  enabled: boolean;
  /** A hint for the maximum number of speakers for diarization. Must be greater than 1 and less than 36. */
  maxSpeakers: number;
}

/** LanguageIdentificationProperties */
export interface LanguageIdentificationProperties {
  /**
   * The mode used for language identification.
   *
   * Possible values: "Continuous", "Single"
   */
  mode?: LanguageIdentificationMode;
  /** The candidate locales for language identification (example ["en-US", "de-DE", "es-ES"]). A minimum of 2 and a maximum of 10 candidate locales, including the main locale for the transcription, is supported for continuous mode. For single language identification, the maximum number of candidate locales is unbounded. */
  candidateLocales: string[];
  /**
   * An optional mapping of locales to speech model entities. If no model is given for a locale, the default base model is used.
   * Keys must be locales contained in the candidate locales, values are entities for models of the respective locales.
   */
  speechModelMapping?: Record<string, EntityReference>;
}

/** EntityReference */
export interface EntityReference {
  /** The location of the referenced entity. */
  self: string;
}

/** Alias for PunctuationMode */
export type PunctuationMode = string;
/** Alias for ProfanityFilterMode */
export type ProfanityFilterMode = string;
/** Alias for LanguageIdentificationMode */
export type LanguageIdentificationMode = string;
/** Alias for TranscriptionStatus */
export type TranscriptionStatus = string;
