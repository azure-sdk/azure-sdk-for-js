// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** A registration. */
export interface RegistrationOutput {
  /** The unique name of the registration resource. */
  readonly name: string;
  /** Storage configuration. */
  storageModel: StorageModelOutput;
  /** Processing configuration. */
  processingModel: ProcessingModelOutput;
  /** Batch transcription configuration. */
  batchTranscriptionModel: BatchTranscriptionPropertiesModelOutput;
  /** Analytics configuration. */
  analyticsModel?: AnalyticsModelOutput;
  /** Status of the registration. */
  readonly statusModel: StatusModelOutput;
}

/** Storage model */
export interface StorageModelOutput {
  /** The Uri of the blob storage account in the form of 'https://<accountname>.blob.core.windows.net'. */
  blobStorageEndpoint: string;
  /** The name of the container that holds the audio files to be processed. */
  inputContainerName: string;
  /** The name of the container that stores the transcription and analytics results. */
  outputContainerName: string;
  /** The name of the container that archives the audio files that have been transcribed. */
  processedContainerName: string;
  /** The name of the container that saves the error messages during processing. */
  errorOutputContainerName: string;
}

/** Processing model */
export interface ProcessingModelOutput {
  /** deliveryMode. */
  deliveryMode: string;
  /** Extensions of input files. */
  subjectEndsWith?: string;
  /** ResourceId for System Topic. */
  systemTopicResourceId?: string;
}

/** Batch Transcription Properties model */
export interface BatchTranscriptionPropertiesModelOutput {
  /** The expected locale of the audio data to transcribe. For example, 'en-US', 'fr-FR', 'zh-CN', etc. For a full list of supported locales, see [Supported languages and regions](https://learn.microsoft.com/azure/ai-services/speech-service/language-support?tabs=stt). */
  locale?: string;
  /** The model property to use a specific base model or Custom Speech model. If you don't specify the model, the default base model for the locale is used. */
  modelX?: EntityReferenceModelOutput;
  /** Custom domain name for batch transcription. */
  customDomain: string;
  /** The transcription batch API properties that allow you to customize the transcription process. For more information, see [Request configuration options](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/batch-transcription-create?pivots=rest-api#request-configuration-options). */
  transcriptionProperties?: TranscriptionPropertiesModelOutput;
}

/** Entity ReferenceModel model */
export interface EntityReferenceModelOutput {
  /** self. */
  self: string;
}

/** Batch Transcription Properties model */
export interface TranscriptionPropertiesModelOutput {
  /** Specifies if word level timestamps should be included in the output. The default value is false. */
  wordLevelTimestampsEnabled?: boolean;
  /** Specifies whether to include word-level timestamps on the display form of the transcription results. The results are returned in the displayWords property of the transcription file. The default value is false. */
  displayFormWordLevelTimestampsEnabled?: boolean;
  /** An array of channel numbers to process. Channels 0 and 1 are transcribed by default. */
  channels?: number[];
  /** Specifies how to handle punctuation in recognition results. Accepted values are None to disable punctuation, Dictated to imply explicit (spoken) punctuation, Automatic to let the decoder deal with punctuation, or DictatedAndAutomatic to use dictated and automatic punctuation. The default value is DictatedAndAutomatic. */
  punctuationMode?: string;
  /** Specifies how to handle profanity in recognition results. Accepted values are None to disable profanity filtering, Masked to replace profanity with asterisks, Removed to remove all profanity from the result, or Tags to add profanity tags. The default value is Masked. */
  profanityFilterMode?: string;
  /** Specifies that the Speech service should attempt diarization analysis on the input, which is expected to be a mono channel that contains two voices. The default value is false. */
  diarizationEnabled?: boolean;
  /** Indicates that the Speech service should attempt diarization analysis on the input, which is expected to be a mono channel that contains multiple voices. The feature isn't available with stereo recordings. */
  diarization?: DiarizationPropertiesModelOutput;
  /** Language identification is used to identify languages spoken in audio when compared against a list of supported languages. https://learn.microsoft.com/azure/ai-services/speech-service/language-support?tabs=language-identification */
  languageIdentification?: LanguageIdentificationPropertiesModelOutput;
}

/** DiarizationProperties model */
export interface DiarizationPropertiesModelOutput {
  /** speakers properties. */
  speakers: DiarizationSpeakersPropertiesModelOutput;
}

/** DiarizationSpeakersProperties model */
export interface DiarizationSpeakersPropertiesModelOutput {
  /** Minimum count of speakers */
  minCount?: number;
  /** Maximum count of speakers */
  maxCount?: number;
}

/** LanguageIdentificationProperties model */
export interface LanguageIdentificationPropertiesModelOutput {
  /** mode */
  mode: string;
  /** candidateLocales. */
  candidateLocales: string[];
  /** speechModelMapping */
  speechModelMapping?: Record<string, EntityReferenceModelOutput>;
}

/** Analytics model */
export interface AnalyticsModelOutput {
  /** The analytics endpoint to call. */
  endpoint: string;
}

/** Status model */
export interface StatusModelOutput {
  /** Status code. */
  code: string;
  /** Message. */
  message?: string;
}

/** Paged collection of Registration items */
export type PagedRegistrationOutput = Paged<RegistrationOutput>;
