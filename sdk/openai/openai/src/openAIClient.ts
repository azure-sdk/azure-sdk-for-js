// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createOpenAI,
  OpenAIContext,
  OpenAIClientOptionalParams,
  cancelUpload,
  completeUpload,
  addUploadPart,
  createUpload,
  cancelBatch,
  getBatch,
  createBatch,
  listBatches,
  getFileContent,
  getFile,
  deleteFile,
  uploadFile,
  listFiles,
  getEmbeddings,
  generateSpeechFromText,
  getImageGenerations,
  getChatCompletions,
  getCompletions,
  getAudioTranslationAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranscriptionAsPlainText,
  CancelUploadOptionalParams,
  CompleteUploadOptionalParams,
  AddUploadPartOptionalParams,
  CreateUploadOptionalParams,
  CancelBatchOptionalParams,
  GetBatchOptionalParams,
  CreateBatchOptionalParams,
  ListBatchesOptionalParams,
  GetFileContentOptionalParams,
  GetFileOptionalParams,
  DeleteFileOptionalParams,
  UploadFileOptionalParams,
  ListFilesOptionalParams,
  GetEmbeddingsOptionalParams,
  GenerateSpeechFromTextOptionalParams,
  GetImageGenerationsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetCompletionsOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranscriptionAsPlainTextOptionalParams,
} from "./api/index.js";
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
  FileListResponse,
  OpenAIFile,
  FilePurpose,
  FileDeletionStatus,
  OpenAIPageableListOfBatch,
  Batch,
  BatchCreateRequest,
  CreateUploadRequest,
  Upload,
  AddUploadPartRequest,
  UploadPart,
  CompleteUploadRequest,
} from "./models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

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
      : `azsdk-js-client`;
    this._client = createOpenAI(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Cancels the Upload. No Parts may be added after an Upload is cancelled. */
  cancelUpload(
    uploadId: string,
    options: CancelUploadOptionalParams = { requestOptions: {} },
  ): Promise<Upload> {
    return cancelUpload(this._client, uploadId, options);
  }

  /**
   * Completes the Upload.
   *
   * Within the returned Upload object, there is a nested File object that is ready to use in the rest of the platform.
   *
   * You can specify the order of the Parts by passing in an ordered list of the Part IDs.
   *
   * The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed.
   */
  completeUpload(
    uploadId: string,
    requestBody: CompleteUploadRequest,
    options: CompleteUploadOptionalParams = { requestOptions: {} },
  ): Promise<Upload> {
    return completeUpload(this._client, uploadId, requestBody, options);
  }

  /**
   * Adds a Part to an Upload object. A Part represents a chunk of bytes from the file you are trying to upload.
   *
   * Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.
   *
   * It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you complete the Upload.
   */
  addUploadPart(
    uploadId: string,
    requestBody: AddUploadPartRequest,
    options: AddUploadPartOptionalParams = { requestOptions: {} },
  ): Promise<UploadPart> {
    return addUploadPart(this._client, uploadId, requestBody, options);
  }

  /**
   * Creates an intermediate Upload object that you can add Parts to. Currently, an Upload can accept at most 8 GB in total and expires after an hour after you create it.
   *
   * Once you complete the Upload, we will create a File object that contains all the parts you uploaded. This File is usable in the rest of our platform as a regular File object.
   *
   * For certain purposes, the correct mime_type must be specified. Please refer to documentation for the supported MIME types for your use case.
   *
   * For guidance on the proper filename extensions for each purpose, please follow the documentation on creating a File.
   */
  createUpload(
    requestBody: CreateUploadRequest,
    options: CreateUploadOptionalParams = { requestOptions: {} },
  ): Promise<Upload> {
    return createUpload(this._client, requestBody, options);
  }

  /** Gets details for a single batch specified by the given batchID. */
  cancelBatch(
    batchId: string,
    options: CancelBatchOptionalParams = { requestOptions: {} },
  ): Promise<Batch> {
    return cancelBatch(this._client, batchId, options);
  }

  /** Gets details for a single batch specified by the given batchID. */
  getBatch(
    batchId: string,
    options: GetBatchOptionalParams = { requestOptions: {} },
  ): Promise<Batch> {
    return getBatch(this._client, batchId, options);
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

  /** Gets a list of all batches owned by the Azure OpenAI resource. */
  listBatches(
    options: ListBatchesOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfBatch> {
    return listBatches(this._client, options);
  }

  /** Returns information about a specific file. Does not retrieve file content. */
  getFileContent(
    fileId: string,
    options: GetFileContentOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getFileContent(this._client, fileId, options);
  }

  /** Returns information about a specific file. Does not retrieve file content. */
  getFile(
    fileId: string,
    options: GetFileOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIFile> {
    return getFile(this._client, fileId, options);
  }

  /** Delete a previously uploaded file. */
  deleteFile(
    fileId: string,
    options: DeleteFileOptionalParams = { requestOptions: {} },
  ): Promise<FileDeletionStatus> {
    return deleteFile(this._client, fileId, options);
  }

  /** Uploads a file for use by other operations. */
  uploadFile(
    file: Uint8Array,
    purpose: FilePurpose,
    options: UploadFileOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIFile> {
    return uploadFile(this._client, file, purpose, options);
  }

  /** Gets a list of previously uploaded files. */
  listFiles(
    options: ListFilesOptionalParams = { requestOptions: {} },
  ): Promise<FileListResponse> {
    return listFiles(this._client, options);
  }

  /** Return the embeddings for a given prompt. */
  getEmbeddings(
    deploymentId: string,
    body: EmbeddingsOptions,
    options: GetEmbeddingsOptionalParams = { requestOptions: {} },
  ): Promise<Embeddings> {
    return getEmbeddings(this._client, deploymentId, body, options);
  }

  /** Generates text-to-speech audio from the input text. */
  generateSpeechFromText(
    deploymentId: string,
    body: SpeechGenerationOptions,
    options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return generateSpeechFromText(this._client, deploymentId, body, options);
  }

  /** Creates an image given a prompt. */
  getImageGenerations(
    deploymentId: string,
    body: ImageGenerationOptions,
    options: GetImageGenerationsOptionalParams = { requestOptions: {} },
  ): Promise<ImageGenerations> {
    return getImageGenerations(this._client, deploymentId, body, options);
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
}
