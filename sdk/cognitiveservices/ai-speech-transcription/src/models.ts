// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Metadata for a transcription request. */
export interface TranscriptionOptions {
  /** A list of possible locales for the transcription. If not specified, the locale of the speech in the audio is detected automatically from all supported locales. */
  locales?: string[];
  /** Maps some or all candidate locales to a model URI to be used for transcription. If no mapping is given, the default model for the locale is used. */
  models?: Record<string, string>;
  /**
   * Mode of profanity filtering.
   *
   * Possible values: "None", "Removed", "Tags", "Masked"
   */
  profanityFilterMode?: ProfanityFilterMode;
  /** Mode of diarization. */
  diarization?: TranscriptionDiarizationOptions;
  /** The 0-based indices of the channels to be transcribed separately. If not specified, multiple channels are merged and transcribed jointly. Only up to two channels are supported. */
  channels?: number[];
}

/** The Speaker Identification settings. Diarization settings must be specified to enable speaker identification. */
export interface TranscriptionDiarizationOptions {
  /** Gets or sets a value indicating whether speaker diarization is enabled. */
  enabled?: boolean;
  /** Gets or sets a hint for the maximum number of speakers for diarization. Must be greater than 1 and less than 36. */
  maxSpeakers?: number;
}

/** Alias for ProfanityFilterMode */
export type ProfanityFilterMode = string;
