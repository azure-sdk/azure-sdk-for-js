// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AudioTranscriptionOptions,
  AudioTranslationOptions,
  CompletionsOptions,
  ChatCompletionsOptions,
  ImageGenerationOptions,
  SpeechGenerationOptions,
  EmbeddingsOptions,
  BatchCreateRequest,
  FilePurpose,
} from "./models.js";

export interface GetAudioTranscriptionAsPlainTextBodyParam {
  /** The configuration information for an audio transcription request. */
  body: AudioTranscriptionOptions;
}

export interface GetAudioTranscriptionAsPlainTextQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetAudioTranscriptionAsPlainTextQueryParam {
  queryParameters: GetAudioTranscriptionAsPlainTextQueryParamProperties;
}

export interface GetAudioTranscriptionAsPlainTextMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranscriptionAsPlainTextParameters =
  GetAudioTranscriptionAsPlainTextQueryParam &
    GetAudioTranscriptionAsPlainTextMediaTypesParam &
    GetAudioTranscriptionAsPlainTextBodyParam &
    RequestParameters;

export interface GetAudioTranscriptionAsResponseObjectBodyParam {
  /** The configuration information for an audio transcription request. */
  body: AudioTranscriptionOptions;
}

export interface GetAudioTranscriptionAsResponseObjectQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetAudioTranscriptionAsResponseObjectQueryParam {
  queryParameters: GetAudioTranscriptionAsResponseObjectQueryParamProperties;
}

export interface GetAudioTranscriptionAsResponseObjectMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranscriptionAsResponseObjectParameters =
  GetAudioTranscriptionAsResponseObjectQueryParam &
    GetAudioTranscriptionAsResponseObjectMediaTypesParam &
    GetAudioTranscriptionAsResponseObjectBodyParam &
    RequestParameters;

export interface GetAudioTranslationAsPlainTextBodyParam {
  /** The configuration information for an audio translation request. */
  body: AudioTranslationOptions;
}

export interface GetAudioTranslationAsPlainTextQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetAudioTranslationAsPlainTextQueryParam {
  queryParameters: GetAudioTranslationAsPlainTextQueryParamProperties;
}

export interface GetAudioTranslationAsPlainTextMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranslationAsPlainTextParameters =
  GetAudioTranslationAsPlainTextQueryParam &
    GetAudioTranslationAsPlainTextMediaTypesParam &
    GetAudioTranslationAsPlainTextBodyParam &
    RequestParameters;

export interface GetAudioTranslationAsResponseObjectBodyParam {
  /** The configuration information for an audio translation request. */
  body: AudioTranslationOptions;
}

export interface GetAudioTranslationAsResponseObjectQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetAudioTranslationAsResponseObjectQueryParam {
  queryParameters: GetAudioTranslationAsResponseObjectQueryParamProperties;
}

export interface GetAudioTranslationAsResponseObjectMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranslationAsResponseObjectParameters =
  GetAudioTranslationAsResponseObjectQueryParam &
    GetAudioTranslationAsResponseObjectMediaTypesParam &
    GetAudioTranslationAsResponseObjectBodyParam &
    RequestParameters;

export interface GetCompletionsBodyParam {
  /**
   * The configuration information for a completions request.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  body: CompletionsOptions;
}

export interface GetCompletionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetCompletionsQueryParam {
  queryParameters: GetCompletionsQueryParamProperties;
}

export type GetCompletionsParameters = GetCompletionsQueryParam &
  GetCompletionsBodyParam &
  RequestParameters;

export interface GetChatCompletionsBodyParam {
  /**
   * The configuration information for a chat completions request.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  body: ChatCompletionsOptions;
}

export interface GetChatCompletionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetChatCompletionsQueryParam {
  queryParameters: GetChatCompletionsQueryParamProperties;
}

export type GetChatCompletionsParameters = GetChatCompletionsQueryParam &
  GetChatCompletionsBodyParam &
  RequestParameters;

export interface GetImageGenerationsBodyParam {
  /** Represents the request data used to generate images. */
  body: ImageGenerationOptions;
}

export interface GetImageGenerationsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetImageGenerationsQueryParam {
  queryParameters: GetImageGenerationsQueryParamProperties;
}

export type GetImageGenerationsParameters = GetImageGenerationsQueryParam &
  GetImageGenerationsBodyParam &
  RequestParameters;

export interface GenerateSpeechFromTextBodyParam {
  /** A representation of the request options that control the behavior of a text-to-speech operation. */
  body: SpeechGenerationOptions;
}

export interface GenerateSpeechFromTextQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GenerateSpeechFromTextQueryParam {
  queryParameters: GenerateSpeechFromTextQueryParamProperties;
}

export type GenerateSpeechFromTextParameters =
  GenerateSpeechFromTextQueryParam &
    GenerateSpeechFromTextBodyParam &
    RequestParameters;

export interface GetEmbeddingsBodyParam {
  /**
   * The configuration information for an embeddings request.
   * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
   * recommendations, and other similar scenarios.
   */
  body: EmbeddingsOptions;
}

export interface GetEmbeddingsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetEmbeddingsQueryParam {
  queryParameters: GetEmbeddingsQueryParamProperties;
}

export type GetEmbeddingsParameters = GetEmbeddingsQueryParam &
  GetEmbeddingsBodyParam &
  RequestParameters;

export interface BatchListQueryParamProperties {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** The number of batches to retrieve. The default is 20. */
  limit?: number;
}

export interface BatchListQueryParam {
  queryParameters?: BatchListQueryParamProperties;
}

export type BatchListParameters = BatchListQueryParam & RequestParameters;

export interface BatchCreateBodyParam {
  body?: BatchCreateRequest;
}

export type BatchCreateParameters = BatchCreateBodyParam & RequestParameters;
export type BatchGetParameters = RequestParameters;
export type BatchCancelParameters = RequestParameters;

export interface ListFilesQueryParamProperties {
  /**
   * A value that, when provided, limits list results to files matching the corresponding purpose.
   *
   * Possible values: "fine-tune", "fine-tune-results", "assistants", "assistants_output", "batch", "batch_output", "vision"
   */
  purpose?: FilePurpose;
}

export interface ListFilesQueryParam {
  queryParameters?: ListFilesQueryParamProperties;
}

export type ListFilesParameters = ListFilesQueryParam & RequestParameters;

export interface UploadFileBodyParam {
  body?:
    | FormData
    | Array<
        | {
            name: "file";
            body:
              | string
              | Uint8Array
              | ReadableStream<Uint8Array>
              | NodeJS.ReadableStream
              | File;
            filename?: string;
            contentType?: string;
          }
        | {
            name: "purpose";
            body: FilePurpose;
            filename?: string;
            contentType?: string;
          }
        | { name: "filename"; body: string }
      >;
}

export interface UploadFileMediaTypesParam {
  /** The 'content-type' header value, always 'multipart/format-data' for this operation. */
  contentType: "multipart/form-data";
}

export type UploadFileParameters = UploadFileMediaTypesParam &
  UploadFileBodyParam &
  RequestParameters;
export type DeleteFileParameters = RequestParameters;
export type GetFileParameters = RequestParameters;
export type GetFileContentParameters = RequestParameters;
