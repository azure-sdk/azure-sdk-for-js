// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  AudioTranscriptionOptions,
  AudioTranscription,
  AudioTranslationOptions,
  AudioTranslation,
  CompletionsOptions,
  Completions,
  ChatCompletionsOptions,
  ChatCompletions,
  ImageGenerationOptions,
  ImageGenerations,
  SpeechGenerationOptions,
  EmbeddingsOptions,
  Embeddings,
  FilePurpose,
  FileListResponse,
  OpenAIFile,
  FileDeletionStatus,
  OpenAIPageableListOfBatch,
  Batch,
  BatchCreateRequest,
} from "./models/models.js";
import {
  GetAudioTranscriptionAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetCompletionsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetImageGenerationsOptionalParams,
  GenerateSpeechFromTextOptionalParams,
  GetEmbeddingsOptionalParams,
  ListFilesOptionalParams,
  UploadFileOptionalParams,
  DeleteFileOptionalParams,
  GetFileOptionalParams,
  GetFileContentOptionalParams,
  ListBatchesOptionalParams,
  CreateBatchOptionalParams,
  GetBatchOptionalParams,
  CancelBatchOptionalParams,
} from "./models/options.js";
import {
  createOpenAI,
  OpenAIContext,
  OpenAIClientOptionalParams,
  getAudioTranscriptionAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranslationAsResponseObject,
  getCompletions,
  getChatCompletions,
  getImageGenerations,
  generateSpeechFromText,
  getEmbeddings,
  listFiles,
  uploadFile,
  deleteFile,
  getFile,
  getFileContent,
  listBatches,
  createBatch,
  getBatch,
  cancelBatch,
} from "./api/index.js";

export { OpenAIClientOptionalParams } from "./api/openAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: OpenAIClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createOpenAI(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
   * written language corresponding to the language it was spoken in.
   */
  getAudioTranscriptionAsPlainText(
    deploymentId: string,
    body: AudioTranscriptionOptions,
    options: GetAudioTranscriptionAsPlainTextOptionalParams = {
      requestOptions: {},
    },
  ): Promise<string> {
    return getAudioTranscriptionAsPlainText(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /**
   * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
   * written language corresponding to the language it was spoken in.
   */
  getAudioTranscriptionAsResponseObject(
    deploymentId: string,
    body: AudioTranscriptionOptions,
    options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
      requestOptions: {},
    },
  ): Promise<AudioTranscription> {
    return getAudioTranscriptionAsResponseObject(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /** Gets English language transcribed text and associated metadata from provided spoken audio data. */
  getAudioTranslationAsPlainText(
    deploymentId: string,
    body: AudioTranslationOptions,
    options: GetAudioTranslationAsPlainTextOptionalParams = {
      requestOptions: {},
    },
  ): Promise<string> {
    return getAudioTranslationAsPlainText(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /** Gets English language transcribed text and associated metadata from provided spoken audio data. */
  getAudioTranslationAsResponseObject(
    deploymentId: string,
    body: AudioTranslationOptions,
    options: GetAudioTranslationAsResponseObjectOptionalParams = {
      requestOptions: {},
    },
  ): Promise<AudioTranslation> {
    return getAudioTranslationAsResponseObject(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /**
   * Gets completions for the provided input prompts.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getCompletions(
    deploymentId: string,
    body: CompletionsOptions,
    options: GetCompletionsOptionalParams = { requestOptions: {} },
  ): Promise<Completions> {
    return getCompletions(this._client, deploymentId, body, options);
  }

  /**
   * Gets chat completions for the provided chat messages.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getChatCompletions(
    deploymentId: string,
    body: ChatCompletionsOptions,
    options: GetChatCompletionsOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletions> {
    return getChatCompletions(this._client, deploymentId, body, options);
  }

  /** Creates an image given a prompt. */
  getImageGenerations(
    deploymentId: string,
    body: ImageGenerationOptions,
    options: GetImageGenerationsOptionalParams = { requestOptions: {} },
  ): Promise<ImageGenerations> {
    return getImageGenerations(this._client, deploymentId, body, options);
  }

  /** Generates text-to-speech audio from the input text. */
  generateSpeechFromText(
    deploymentId: string,
    body: SpeechGenerationOptions,
    options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return generateSpeechFromText(this._client, deploymentId, body, options);
  }

  /** Return the embeddings for a given prompt. */
  getEmbeddings(
    deploymentId: string,
    body: EmbeddingsOptions,
    options: GetEmbeddingsOptionalParams = { requestOptions: {} },
  ): Promise<Embeddings> {
    return getEmbeddings(this._client, deploymentId, body, options);
  }

  /** Gets a list of previously uploaded files. */
  listFiles(
    options: ListFilesOptionalParams = { requestOptions: {} },
  ): Promise<FileListResponse> {
    return listFiles(this._client, options);
  }

  /** Uploads a file for use by other operations. */
  uploadFile(
    file: Uint8Array,
    purpose: FilePurpose,
    options: UploadFileOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIFile> {
    return uploadFile(this._client, file, purpose, options);
  }

  /** Delete a previously uploaded file. */
  deleteFile(
    fileId: string,
    options: DeleteFileOptionalParams = { requestOptions: {} },
  ): Promise<FileDeletionStatus> {
    return deleteFile(this._client, fileId, options);
  }

  /** Returns information about a specific file. Does not retrieve file content. */
  getFile(
    fileId: string,
    options: GetFileOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIFile> {
    return getFile(this._client, fileId, options);
  }

  /** Returns information about a specific file. Does not retrieve file content. */
  getFileContent(
    fileId: string,
    options: GetFileContentOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getFileContent(this._client, fileId, options);
  }

  /** Gets a list of all batches owned by the Azure OpenAI resource. */
  listBatches(
    options: ListBatchesOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfBatch> {
    return listBatches(this._client, options);
  }

  /**
   * Creates and executes a batch from an uploaded file of requests.
   * Response includes details of the enqueued job including job status.
   * The ID of the result file is added to the response once complete.
   */
  createBatch(
    createBatchRequest: BatchCreateRequest,
    options: CreateBatchOptionalParams = { requestOptions: {} },
  ): Promise<Batch> {
    return createBatch(this._client, createBatchRequest, options);
  }

  /** Gets details for a single batch specified by the given batchID. */
  getBatch(
    batchId: string,
    options: GetBatchOptionalParams = { requestOptions: {} },
  ): Promise<Batch> {
    return getBatch(this._client, batchId, options);
  }

  /** Gets details for a single batch specified by the given batchID. */
  cancelBatch(
    batchId: string,
    options: CancelBatchOptionalParams = { requestOptions: {} },
  ): Promise<Batch> {
    return cancelBatch(this._client, batchId, options);
  }
}
