// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "./index.js";
import {
  AudioTranscriptionOptions,
  audioTranscriptionOptionsSerializer,
  AudioTranscription,
  audioTranscriptionDeserializer,
  AudioTranslationOptions,
  audioTranslationOptionsSerializer,
  AudioTranslation,
  audioTranslationDeserializer,
  CompletionsOptions,
  completionsOptionsSerializer,
  Completions,
  completionsDeserializer,
  ChatCompletionsOptions,
  chatCompletionsOptionsSerializer,
  ChatCompletions,
  chatCompletionsDeserializer,
  ImageGenerationOptions,
  imageGenerationOptionsSerializer,
  ImageGenerations,
  imageGenerationsDeserializer,
  SpeechGenerationOptions,
  speechGenerationOptionsSerializer,
  EmbeddingsOptions,
  embeddingsOptionsSerializer,
  Embeddings,
  embeddingsDeserializer,
  FileListResponse,
  fileListResponseDeserializer,
  OpenAIFile,
  openAIFileDeserializer,
  FilePurpose,
  FileDeletionStatus,
  fileDeletionStatusDeserializer,
  OpenAIPageableListOfBatch,
  openAIPageableListOfBatchDeserializer,
  Batch,
  batchDeserializer,
  BatchCreateRequest,
  batchCreateRequestSerializer,
  CreateUploadRequest,
  createUploadRequestSerializer,
  Upload,
  uploadDeserializer,
  AddUploadPartRequest,
  addUploadPartRequestSerializer,
  UploadPart,
  uploadPartDeserializer,
  CompleteUploadRequest,
  completeUploadRequestSerializer,
} from "../models/models.js";
import {
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
} from "./options.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";

export function _cancelUploadSend(
  context: Client,
  uploadId: string,
  options: CancelUploadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/uploads/{upload_id}/cancel",
    {
      upload_id: uploadId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _cancelUploadDeserialize(result: PathUncheckedResponse): Promise<Upload> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return uploadDeserializer(result.body);
}

/** Cancels the Upload. No Parts may be added after an Upload is cancelled. */
export async function cancelUpload(
  context: Client,
  uploadId: string,
  options: CancelUploadOptionalParams = { requestOptions: {} },
): Promise<Upload> {
  const result = await _cancelUploadSend(context, uploadId, options);
  return _cancelUploadDeserialize(result);
}

export function _completeUploadSend(
  context: Client,
  uploadId: string,
  requestBody: CompleteUploadRequest,
  options: CompleteUploadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/uploads/{upload_id}/complete",
    {
      upload_id: uploadId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: completeUploadRequestSerializer(requestBody),
  });
}

export async function _completeUploadDeserialize(result: PathUncheckedResponse): Promise<Upload> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return uploadDeserializer(result.body);
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
export async function completeUpload(
  context: Client,
  uploadId: string,
  requestBody: CompleteUploadRequest,
  options: CompleteUploadOptionalParams = { requestOptions: {} },
): Promise<Upload> {
  const result = await _completeUploadSend(context, uploadId, requestBody, options);
  return _completeUploadDeserialize(result);
}

export function _addUploadPartSend(
  context: Client,
  uploadId: string,
  requestBody: AddUploadPartRequest,
  options: AddUploadPartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/uploads/{upload_id}/parts",
    {
      upload_id: uploadId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "multipart/form-data",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: addUploadPartRequestSerializer(requestBody),
  });
}

export async function _addUploadPartDeserialize(
  result: PathUncheckedResponse,
): Promise<UploadPart> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return uploadPartDeserializer(result.body);
}

/**
 * Adds a Part to an Upload object. A Part represents a chunk of bytes from the file you are trying to upload.
 *
 * Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.
 *
 * It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you complete the Upload.
 */
export async function addUploadPart(
  context: Client,
  uploadId: string,
  requestBody: AddUploadPartRequest,
  options: AddUploadPartOptionalParams = { requestOptions: {} },
): Promise<UploadPart> {
  const result = await _addUploadPartSend(context, uploadId, requestBody, options);
  return _addUploadPartDeserialize(result);
}

export function _createUploadSend(
  context: Client,
  requestBody: CreateUploadRequest,
  options: CreateUploadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path("/uploads").post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: createUploadRequestSerializer(requestBody),
  });
}

export async function _createUploadDeserialize(result: PathUncheckedResponse): Promise<Upload> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return uploadDeserializer(result.body);
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
export async function createUpload(
  context: Client,
  requestBody: CreateUploadRequest,
  options: CreateUploadOptionalParams = { requestOptions: {} },
): Promise<Upload> {
  const result = await _createUploadSend(context, requestBody, options);
  return _createUploadDeserialize(result);
}

export function _cancelBatchSend(
  context: Client,
  batchId: string,
  options: CancelBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/batches/{batchId}/cancel",
    {
      batchId: batchId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _cancelBatchDeserialize(result: PathUncheckedResponse): Promise<Batch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return batchDeserializer(result.body);
}

/** Gets details for a single batch specified by the given batchID. */
export async function cancelBatch(
  context: Client,
  batchId: string,
  options: CancelBatchOptionalParams = { requestOptions: {} },
): Promise<Batch> {
  const result = await _cancelBatchSend(context, batchId, options);
  return _cancelBatchDeserialize(result);
}

export function _getBatchSend(
  context: Client,
  batchId: string,
  options: GetBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/batches/{batchId}",
    {
      batchId: batchId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getBatchDeserialize(result: PathUncheckedResponse): Promise<Batch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return batchDeserializer(result.body);
}

/** Gets details for a single batch specified by the given batchID. */
export async function getBatch(
  context: Client,
  batchId: string,
  options: GetBatchOptionalParams = { requestOptions: {} },
): Promise<Batch> {
  const result = await _getBatchSend(context, batchId, options);
  return _getBatchDeserialize(result);
}

export function _createBatchSend(
  context: Client,
  createBatchRequest: BatchCreateRequest,
  options: CreateBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path("/batches").post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: batchCreateRequestSerializer(createBatchRequest),
  });
}

export async function _createBatchDeserialize(result: PathUncheckedResponse): Promise<Batch> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return batchDeserializer(result.body);
}

/**
 * Creates and executes a batch from an uploaded file of requests.
 * Response includes details of the enqueued job including job status.
 * The ID of the result file is added to the response once complete.
 */
export async function createBatch(
  context: Client,
  createBatchRequest: BatchCreateRequest,
  options: CreateBatchOptionalParams = { requestOptions: {} },
): Promise<Batch> {
  const result = await _createBatchSend(context, createBatchRequest, options);
  return _createBatchDeserialize(result);
}

export function _listBatchesSend(
  context: Client,
  options: ListBatchesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/batches{?after,limit}",
    {
      after: options?.after,
      limit: options?.limit,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listBatchesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfBatchDeserializer(result.body);
}

/** Gets a list of all batches owned by the Azure OpenAI resource. */
export async function listBatches(
  context: Client,
  options: ListBatchesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfBatch> {
  const result = await _listBatchesSend(context, options);
  return _listBatchesDeserialize(result);
}

export function _getFileContentSend(
  context: Client,
  fileId: string,
  options: GetFileContentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/files/{fileId}/content",
    {
      fileId: fileId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/octet-stream",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getFileContentDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Returns information about a specific file. Does not retrieve file content. */
export async function getFileContent(
  context: Client,
  fileId: string,
  options: GetFileContentOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getFileContentSend(context, fileId, options);
  return _getFileContentDeserialize(result);
}

export function _getFileSend(
  context: Client,
  fileId: string,
  options: GetFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/files/{fileId}",
    {
      fileId: fileId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getFileDeserialize(result: PathUncheckedResponse): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIFileDeserializer(result.body);
}

/** Returns information about a specific file. Does not retrieve file content. */
export async function getFile(
  context: Client,
  fileId: string,
  options: GetFileOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _getFileSend(context, fileId, options);
  return _getFileDeserialize(result);
}

export function _deleteFileSend(
  context: Client,
  fileId: string,
  options: DeleteFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/files/{fileId}",
    {
      fileId: fileId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deleteFileDeserialize(
  result: PathUncheckedResponse,
): Promise<FileDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileDeletionStatusDeserializer(result.body);
}

/** Delete a previously uploaded file. */
export async function deleteFile(
  context: Client,
  fileId: string,
  options: DeleteFileOptionalParams = { requestOptions: {} },
): Promise<FileDeletionStatus> {
  const result = await _deleteFileSend(context, fileId, options);
  return _deleteFileDeserialize(result);
}

export function _uploadFileSend(
  context: Client,
  file: Uint8Array,
  purpose: FilePurpose,
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path("/files").post({
    ...operationOptionsToRequestParameters(options),
    contentType: "multipart/form-data",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: {
      file: uint8ArrayToString(file, "base64"),
      purpose: purpose,
      filename: options?.filename,
    },
  });
}

export async function _uploadFileDeserialize(result: PathUncheckedResponse): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIFileDeserializer(result.body);
}

/** Uploads a file for use by other operations. */
export async function uploadFile(
  context: Client,
  file: Uint8Array,
  purpose: FilePurpose,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _uploadFileSend(context, file, purpose, options);
  return _uploadFileDeserialize(result);
}

export function _listFilesSend(
  context: Client,
  options: ListFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/files{?purpose}",
    {
      purpose: options?.purpose,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<FileListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fileListResponseDeserializer(result.body);
}

/** Gets a list of previously uploaded files. */
export async function listFiles(
  context: Client,
  options: ListFilesOptionalParams = { requestOptions: {} },
): Promise<FileListResponse> {
  const result = await _listFilesSend(context, options);
  return _listFilesDeserialize(result);
}

export function _getEmbeddingsSend(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/embeddings{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: embeddingsOptionsSerializer(body),
  });
}

export async function _getEmbeddingsDeserialize(
  result: PathUncheckedResponse,
): Promise<Embeddings> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return embeddingsDeserializer(result.body);
}

/** Return the embeddings for a given prompt. */
export async function getEmbeddings(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): Promise<Embeddings> {
  const result = await _getEmbeddingsSend(context, deploymentId, body, options);
  return _getEmbeddingsDeserialize(result);
}

export function _generateSpeechFromTextSend(
  context: Client,
  deploymentId: string,
  body: SpeechGenerationOptions,
  options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/speech{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/octet-stream",
      ...options.requestOptions?.headers,
    },
    body: speechGenerationOptionsSerializer(body),
  });
}

export async function _generateSpeechFromTextDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Generates text-to-speech audio from the input text. */
export async function generateSpeechFromText(
  context: Client,
  deploymentId: string,
  body: SpeechGenerationOptions,
  options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _generateSpeechFromTextSend(context, deploymentId, body, options);
  return _generateSpeechFromTextDeserialize(result);
}

export function _getImageGenerationsSend(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/images/generations{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: imageGenerationOptionsSerializer(body),
  });
}

export async function _getImageGenerationsDeserialize(
  result: PathUncheckedResponse,
): Promise<ImageGenerations> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return imageGenerationsDeserializer(result.body);
}

/** Creates an image given a prompt. */
export async function getImageGenerations(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptionalParams = { requestOptions: {} },
): Promise<ImageGenerations> {
  const result = await _getImageGenerationsSend(context, deploymentId, body, options);
  return _getImageGenerationsDeserialize(result);
}

export function _getChatCompletionsSend(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/chat/completions{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: chatCompletionsOptionsSerializer(body),
  });
}

export async function _getChatCompletionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chatCompletionsDeserializer(result.body);
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getChatCompletions(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptionalParams = { requestOptions: {} },
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsSend(context, deploymentId, body, options);
  return _getChatCompletionsDeserialize(result);
}

export function _getCompletionsSend(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/completions{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: completionsOptionsSerializer(body),
  });
}

export async function _getCompletionsDeserialize(
  result: PathUncheckedResponse,
): Promise<Completions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return completionsDeserializer(result.body);
}

/**
 * Gets completions for the provided input prompts.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getCompletions(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptionalParams = { requestOptions: {} },
): Promise<Completions> {
  const result = await _getCompletionsSend(context, deploymentId, body, options);
  return _getCompletionsDeserialize(result);
}

export function _getAudioTranslationAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/translations{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "multipart/form-data",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: audioTranslationOptionsSerializer(body),
  });
}

export async function _getAudioTranslationAsResponseObjectDeserialize(
  result: PathUncheckedResponse,
): Promise<AudioTranslation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return audioTranslationDeserializer(result.body);
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsResponseObject(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): Promise<AudioTranslation> {
  const result = await _getAudioTranslationAsResponseObjectSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranslationAsResponseObjectDeserialize(result);
}

export function _getAudioTranslationAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/translations{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "multipart/form-data",
    headers: { accept: "text/plain", ...options.requestOptions?.headers },
    body: audioTranslationOptionsSerializer(body),
  });
}

export async function _getAudioTranslationAsPlainTextDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsPlainText(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): Promise<string> {
  const result = await _getAudioTranslationAsPlainTextSend(context, deploymentId, body, options);
  return _getAudioTranslationAsPlainTextDeserialize(result);
}

export function _getAudioTranscriptionAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/transcriptions{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "multipart/form-data",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: audioTranscriptionOptionsSerializer(body),
  });
}

export async function _getAudioTranscriptionAsResponseObjectDeserialize(
  result: PathUncheckedResponse,
): Promise<AudioTranscription> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return audioTranscriptionDeserializer(result.body);
}

/**
 * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
 * written language corresponding to the language it was spoken in.
 */
export async function getAudioTranscriptionAsResponseObject(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): Promise<AudioTranscription> {
  const result = await _getAudioTranscriptionAsResponseObjectSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranscriptionAsResponseObjectDeserialize(result);
}

export function _getAudioTranscriptionAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/transcriptions{?api-version}",
    {
      deploymentId: deploymentId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "multipart/form-data",
    headers: { accept: "text/plain", ...options.requestOptions?.headers },
    body: audioTranscriptionOptionsSerializer(body),
  });
}

export async function _getAudioTranscriptionAsPlainTextDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
 * written language corresponding to the language it was spoken in.
 */
export async function getAudioTranscriptionAsPlainText(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): Promise<string> {
  const result = await _getAudioTranscriptionAsPlainTextSend(context, deploymentId, body, options);
  return _getAudioTranscriptionAsPlainTextDeserialize(result);
}
