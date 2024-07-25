// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAudioTranscriptionAsPlainTextParameters,
  GetAudioTranscriptionAsResponseObjectParameters,
  GetAudioTranslationAsPlainTextParameters,
  GetAudioTranslationAsResponseObjectParameters,
  GetCompletionsParameters,
  GetChatCompletionsParameters,
  GetImageGenerationsParameters,
  GenerateSpeechFromTextParameters,
  GetEmbeddingsParameters,
  BatchListParameters,
  BatchCreateParameters,
  BatchGetParameters,
  BatchCancelParameters,
  ListFilesParameters,
  UploadFileParameters,
  DeleteFileParameters,
  GetFileParameters,
  GetFileContentParameters,
} from "./parameters.js";
import {
  GetAudioTranscriptionAsPlainText200Response,
  GetAudioTranscriptionAsPlainTextDefaultResponse,
  GetAudioTranscriptionAsResponseObject200Response,
  GetAudioTranscriptionAsResponseObjectDefaultResponse,
  GetAudioTranslationAsPlainText200Response,
  GetAudioTranslationAsPlainTextDefaultResponse,
  GetAudioTranslationAsResponseObject200Response,
  GetAudioTranslationAsResponseObjectDefaultResponse,
  GetCompletions200Response,
  GetCompletionsDefaultResponse,
  GetChatCompletions200Response,
  GetChatCompletionsDefaultResponse,
  GetImageGenerations200Response,
  GetImageGenerationsDefaultResponse,
  GenerateSpeechFromText200Response,
  GenerateSpeechFromTextDefaultResponse,
  GetEmbeddings200Response,
  GetEmbeddingsDefaultResponse,
  BatchList200Response,
  BatchCreate200Response,
  BatchGet200Response,
  BatchCancel200Response,
  ListFiles200Response,
  UploadFile200Response,
  DeleteFile200Response,
  GetFile200Response,
  GetFileContent200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetAudioTranscriptionAsPlainText {
  /**
   * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
   * written language corresponding to the language it was spoken in.
   */
  post(
    options: GetAudioTranscriptionAsPlainTextParameters,
  ): StreamableMethod<
    | GetAudioTranscriptionAsPlainText200Response
    | GetAudioTranscriptionAsPlainTextDefaultResponse
  >;
  /**
   * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
   * written language corresponding to the language it was spoken in.
   */
  post(
    options: GetAudioTranscriptionAsResponseObjectParameters,
  ): StreamableMethod<
    | GetAudioTranscriptionAsResponseObject200Response
    | GetAudioTranscriptionAsResponseObjectDefaultResponse
  >;
}

export interface GetAudioTranslationAsPlainText {
  /** Gets English language transcribed text and associated metadata from provided spoken audio data. */
  post(
    options: GetAudioTranslationAsPlainTextParameters,
  ): StreamableMethod<
    | GetAudioTranslationAsPlainText200Response
    | GetAudioTranslationAsPlainTextDefaultResponse
  >;
  /** Gets English language transcribed text and associated metadata from provided spoken audio data. */
  post(
    options: GetAudioTranslationAsResponseObjectParameters,
  ): StreamableMethod<
    | GetAudioTranslationAsResponseObject200Response
    | GetAudioTranslationAsResponseObjectDefaultResponse
  >;
}

export interface GetCompletions {
  /**
   * Gets completions for the provided input prompts.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  post(
    options: GetCompletionsParameters,
  ): StreamableMethod<
    GetCompletions200Response | GetCompletionsDefaultResponse
  >;
}

export interface GetChatCompletions {
  /**
   * Gets chat completions for the provided chat messages.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  post(
    options: GetChatCompletionsParameters,
  ): StreamableMethod<
    GetChatCompletions200Response | GetChatCompletionsDefaultResponse
  >;
}

export interface GetImageGenerations {
  /** Creates an image given a prompt. */
  post(
    options: GetImageGenerationsParameters,
  ): StreamableMethod<
    GetImageGenerations200Response | GetImageGenerationsDefaultResponse
  >;
}

export interface GenerateSpeechFromText {
  /** Generates text-to-speech audio from the input text. */
  post(
    options: GenerateSpeechFromTextParameters,
  ): StreamableMethod<
    GenerateSpeechFromText200Response | GenerateSpeechFromTextDefaultResponse
  >;
}

export interface GetEmbeddings {
  /** Return the embeddings for a given prompt. */
  post(
    options: GetEmbeddingsParameters,
  ): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse>;
}

export interface BatchList {
  /** Gets a list of all batches owned by the Azure OpenAI resource. */
  get(options?: BatchListParameters): StreamableMethod<BatchList200Response>;
  /**
   * Creates and executes a batch from an uploaded file of requests.
   * Response includes details of the enqueued job including job status.
   * The ID of the result file is added to the response once complete.
   */
  post(
    options?: BatchCreateParameters,
  ): StreamableMethod<BatchCreate200Response>;
}

export interface BatchGet {
  /** Gets details for a single batch specified by the given batchID. */
  get(options?: BatchGetParameters): StreamableMethod<BatchGet200Response>;
}

export interface BatchCancel {
  /** Gets details for a single batch specified by the given batchID. */
  get(
    options?: BatchCancelParameters,
  ): StreamableMethod<BatchCancel200Response>;
}

export interface ListFiles {
  /** Gets a list of previously uploaded files. */
  get(options?: ListFilesParameters): StreamableMethod<ListFiles200Response>;
  /** Uploads a file for use by other operations. */
  post(options: UploadFileParameters): StreamableMethod<UploadFile200Response>;
}

export interface DeleteFile {
  /** Delete a previously uploaded file. */
  delete(
    options?: DeleteFileParameters,
  ): StreamableMethod<DeleteFile200Response>;
  /** Returns information about a specific file. Does not retrieve file content. */
  get(options?: GetFileParameters): StreamableMethod<GetFile200Response>;
}

export interface GetFileContent {
  /** Returns information about a specific file. Does not retrieve file content. */
  get(
    options?: GetFileContentParameters,
  ): StreamableMethod<GetFileContent200Response>;
}

export interface Routes {
  /** Resource for '/deployments/\{deploymentId\}/audio/transcriptions' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/audio/transcriptions",
    deploymentId: string,
  ): GetAudioTranscriptionAsPlainText;
  /** Resource for '/deployments/\{deploymentId\}/audio/translations' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/audio/translations",
    deploymentId: string,
  ): GetAudioTranslationAsPlainText;
  /** Resource for '/deployments/\{deploymentId\}/completions' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/completions",
    deploymentId: string,
  ): GetCompletions;
  /** Resource for '/deployments/\{deploymentId\}/chat/completions' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/chat/completions",
    deploymentId: string,
  ): GetChatCompletions;
  /** Resource for '/deployments/\{deploymentId\}/images/generations' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/images/generations",
    deploymentId: string,
  ): GetImageGenerations;
  /** Resource for '/deployments/\{deploymentId\}/audio/speech' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/audio/speech",
    deploymentId: string,
  ): GenerateSpeechFromText;
  /** Resource for '/deployments/\{deploymentId\}/embeddings' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/embeddings",
    deploymentId: string,
  ): GetEmbeddings;
  /** Resource for '/batches' has methods for the following verbs: get, post */
  (path: "/batches"): BatchList;
  /** Resource for '/batches/\{batchId\}' has methods for the following verbs: get */
  (path: "/batches/{batchId}", batchId: string): BatchGet;
  /** Resource for '/batches/\{batchId\}/cancel' has methods for the following verbs: get */
  (path: "/batches/{batchId}/cancel", batchId: string): BatchCancel;
  /** Resource for '/files' has methods for the following verbs: get, post */
  (path: "/files"): ListFiles;
  /** Resource for '/files/\{fileId\}' has methods for the following verbs: delete, get */
  (path: "/files/{fileId}", fileId: string): DeleteFile;
  /** Resource for '/files/\{fileId\}/content' has methods for the following verbs: get */
  (path: "/files/{fileId}/content", fileId: string): GetFileContent;
}

export type OpenAIContext = Client & {
  path: Routes;
};
