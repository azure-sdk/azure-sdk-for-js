// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
