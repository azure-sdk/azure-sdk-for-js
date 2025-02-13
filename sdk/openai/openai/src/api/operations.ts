// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CancelRunOptionalParams,
  CancelVectorStoreFileBatchOptionalParams,
  AssistantsContext as Client,
  CreateAssistantOptionalParams,
  CreateMessageOptionalParams,
  CreateRunOptionalParams,
  CreateThreadAndRunOptionalParams,
  CreateThreadOptionalParams,
  CreateVectorStoreFileBatchOptionalParams,
  CreateVectorStoreFileOptionalParams,
  CreateVectorStoreOptionalParams,
  DeleteAssistantOptionalParams,
  DeleteFileOptionalParams,
  DeleteThreadOptionalParams,
  DeleteVectorStoreFileOptionalParams,
  DeleteVectorStoreOptionalParams,
  GetAssistantOptionalParams,
  GetFileContentOptionalParams,
  GetFileOptionalParams,
  GetMessageOptionalParams,
  GetRunOptionalParams,
  GetRunStepOptionalParams,
  GetThreadOptionalParams,
  GetVectorStoreFileBatchOptionalParams,
  GetVectorStoreFileOptionalParams,
  GetVectorStoreOptionalParams,
  ListAssistantsOptionalParams,
  ListFilesOptionalParams,
  ListMessagesOptionalParams,
  ListRunsOptionalParams,
  ListRunStepsOptionalParams,
  ListVectorStoreFileBatchFilesOptionalParams,
  ListVectorStoreFilesOptionalParams,
  ListVectorStoresOptionalParams,
  ModifyVectorStoreOptionalParams,
  SubmitToolOutputsToRunOptionalParams,
  UpdateAssistantOptionalParams,
  UpdateMessageOptionalParams,
  UpdateRunOptionalParams,
  UpdateThreadOptionalParams,
  UploadFileOptionalParams,
} from "./index.js";
import {
  AssistantCreationOptions,
  assistantCreationOptionsSerializer,
  vectorStoreChunkingStrategyRequestUnionSerializer,
  Assistant,
  assistantDeserializer,
  OpenAIPageableListOfAssistant,
  openAIPageableListOfAssistantDeserializer,
  UpdateAssistantOptions,
  updateAssistantOptionsSerializer,
  AssistantDeletionStatus,
  assistantDeletionStatusDeserializer,
  AssistantThreadCreationOptions,
  assistantThreadCreationOptionsSerializer,
  ThreadMessageOptions,
  threadMessageOptionsSerializer,
  AssistantThread,
  assistantThreadDeserializer,
  UpdateAssistantThreadOptions,
  updateAssistantThreadOptionsSerializer,
  ThreadDeletionStatus,
  threadDeletionStatusDeserializer,
  ThreadMessage,
  threadMessageDeserializer,
  OpenAIPageableListOfThreadMessage,
  openAIPageableListOfThreadMessageDeserializer,
  CreateRunOptions,
  createRunOptionsSerializer,
  ThreadRun,
  threadRunDeserializer,
  OpenAIPageableListOfThreadRun,
  openAIPageableListOfThreadRunDeserializer,
  ToolOutput,
  toolOutputArraySerializer,
  CreateAndRunThreadOptions,
  createAndRunThreadOptionsSerializer,
  RunStep,
  runStepDeserializer,
  OpenAIPageableListOfRunStep,
  openAIPageableListOfRunStepDeserializer,
  FileListResponse,
  fileListResponseDeserializer,
  OpenAIFile,
  openAIFileDeserializer,
  FilePurpose,
  FileDeletionStatus,
  fileDeletionStatusDeserializer,
  OpenAIPageableListOfVectorStore,
  openAIPageableListOfVectorStoreDeserializer,
  VectorStore,
  vectorStoreDeserializer,
  VectorStoreOptions,
  vectorStoreOptionsSerializer,
  VectorStoreUpdateOptions,
  vectorStoreUpdateOptionsSerializer,
  VectorStoreDeletionStatus,
  vectorStoreDeletionStatusDeserializer,
  OpenAIPageableListOfVectorStoreFile,
  openAIPageableListOfVectorStoreFileDeserializer,
  VectorStoreFile,
  vectorStoreFileDeserializer,
  VectorStoreFileDeletionStatus,
  vectorStoreFileDeletionStatusDeserializer,
  VectorStoreFileBatch,
  vectorStoreFileBatchDeserializer,
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";

export function _listVectorStoreFileBatchFilesSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: ListVectorStoreFileBatchFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}/files",
      vectorStoreId,
      batchId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        filter: options?.filter,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoreFileBatchFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfVectorStoreFileDeserializer(result.body);
}

/** Returns a list of vector store files in a batch. */
export async function listVectorStoreFileBatchFiles(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: ListVectorStoreFileBatchFilesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const result = await _listVectorStoreFileBatchFilesSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _listVectorStoreFileBatchFilesDeserialize(result);
}

export function _cancelVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: CancelVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}/cancel",
      vectorStoreId,
      batchId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _cancelVectorStoreFileBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileBatchDeserializer(result.body);
}

/** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
export async function cancelVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: CancelVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileBatch> {
  const result = await _cancelVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _cancelVectorStoreFileBatchDeserialize(result);
}

export function _getVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: GetVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}",
      vectorStoreId,
      batchId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getVectorStoreFileBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileBatchDeserializer(result.body);
}

/** Retrieve a vector store file batch. */
export async function getVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: GetVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileBatch> {
  const result = await _getVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _getVectorStoreFileBatchDeserialize(result);
}

export function _createVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  fileIds: string[],
  options: CreateVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}/file_batches", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        file_ids: fileIds.map((p: any) => {
          return p;
        }),
        chunking_strategy: !options?.chunkingStrategy
          ? options?.chunkingStrategy
          : vectorStoreChunkingStrategyRequestUnionSerializer(
              options?.chunkingStrategy,
            ),
      },
    });
}

export async function _createVectorStoreFileBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileBatchDeserializer(result.body);
}

/** Create a vector store file batch. */
export async function createVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  fileIds: string[],
  options: CreateVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileBatch> {
  const result = await _createVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    fileIds,
    options,
  );
  return _createVectorStoreFileBatchDeserialize(result);
}

export function _deleteVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: DeleteVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/files/{fileId}",
      vectorStoreId,
      fileId,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteVectorStoreFileDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFileDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileDeletionStatusDeserializer(result.body);
}

/**
 * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted.
 * To delete the file, use the delete file endpoint.
 */
export async function deleteVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: DeleteVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileDeletionStatus> {
  const result = await _deleteVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _deleteVectorStoreFileDeserialize(result);
}

export function _getVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: GetVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/files/{fileId}",
      vectorStoreId,
      fileId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getVectorStoreFileDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileDeserializer(result.body);
}

/** Retrieves a vector store file. */
export async function getVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: GetVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFile> {
  const result = await _getVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _getVectorStoreFileDeserialize(result);
}

export function _createVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: CreateVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}/files", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        file_id: fileId,
        chunking_strategy: !options?.chunkingStrategy
          ? options?.chunkingStrategy
          : vectorStoreChunkingStrategyRequestUnionSerializer(
              options?.chunkingStrategy,
            ),
      },
    });
}

export async function _createVectorStoreFileDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreFileDeserializer(result.body);
}

/** Create a vector store file by attaching a file to a vector store. */
export async function createVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: CreateVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFile> {
  const result = await _createVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _createVectorStoreFileDeserialize(result);
}

export function _listVectorStoreFilesSend(
  context: Client,
  vectorStoreId: string,
  options: ListVectorStoreFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}/files", vectorStoreId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        filter: options?.filter,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoreFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfVectorStoreFileDeserializer(result.body);
}

/** Returns a list of vector store files. */
export async function listVectorStoreFiles(
  context: Client,
  vectorStoreId: string,
  options: ListVectorStoreFilesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const result = await _listVectorStoreFilesSend(
    context,
    vectorStoreId,
    options,
  );
  return _listVectorStoreFilesDeserialize(result);
}

export function _deleteVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  options: DeleteVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStoreDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeletionStatusDeserializer(result.body);
}

/** Deletes the vector store object matching the specified ID. */
export async function deleteVectorStore(
  context: Client,
  vectorStoreId: string,
  options: DeleteVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStoreDeletionStatus> {
  const result = await _deleteVectorStoreSend(context, vectorStoreId, options);
  return _deleteVectorStoreDeserialize(result);
}

export function _modifyVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  body: VectorStoreUpdateOptions,
  options: ModifyVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: vectorStoreUpdateOptionsSerializer(body),
    });
}

export async function _modifyVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeserializer(result.body);
}

/** The ID of the vector store to modify. */
export async function modifyVectorStore(
  context: Client,
  vectorStoreId: string,
  body: VectorStoreUpdateOptions,
  options: ModifyVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _modifyVectorStoreSend(
    context,
    vectorStoreId,
    body,
    options,
  );
  return _modifyVectorStoreDeserialize(result);
}

export function _getVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  options: GetVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeserializer(result.body);
}

/** Returns the vector store object matching the specified ID. */
export async function getVectorStore(
  context: Client,
  vectorStoreId: string,
  options: GetVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _getVectorStoreSend(context, vectorStoreId, options);
  return _getVectorStoreDeserialize(result);
}

export function _createVectorStoreSend(
  context: Client,
  body: VectorStoreOptions,
  options: CreateVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: vectorStoreOptionsSerializer(body),
    });
}

export async function _createVectorStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<VectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vectorStoreDeserializer(result.body);
}

/** Creates a vector store. */
export async function createVectorStore(
  context: Client,
  body: VectorStoreOptions,
  options: CreateVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _createVectorStoreSend(context, body, options);
  return _createVectorStoreDeserialize(result);
}

export function _listVectorStoresSend(
  context: Client,
  options: ListVectorStoresOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/vector_stores")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoresDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfVectorStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfVectorStoreDeserializer(result.body);
}

/** Returns a list of vector stores. */
export async function listVectorStores(
  context: Client,
  options: ListVectorStoresOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStore> {
  const result = await _listVectorStoresSend(context, options);
  return _listVectorStoresDeserialize(result);
}

export function _getFileContentSend(
  context: Client,
  fileId: string,
  options: GetFileContentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/{fileId}/content", fileId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
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

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
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
  return context
    .path("/files/{fileId}", fileId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getFileDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
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
  return context
    .path("/files/{fileId}", fileId)
    .delete({
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
  return context
    .path("/files")
    .post({
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

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
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
  return context
    .path("/files")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { purpose: options?.purpose },
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

export function _listRunStepsSend(
  context: Client,
  threadId: string,
  runId: string,
  options: ListRunStepsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}/steps", threadId, runId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listRunStepsDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfRunStep> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfRunStepDeserializer(result.body);
}

/** Gets a list of run steps from a thread run. */
export async function listRunSteps(
  context: Client,
  threadId: string,
  runId: string,
  options: ListRunStepsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfRunStep> {
  const result = await _listRunStepsSend(context, threadId, runId, options);
  return _listRunStepsDeserialize(result);
}

export function _getRunStepSend(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: GetRunStepOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/threads/{threadId}/runs/{runId}/steps/{stepId}",
      threadId,
      runId,
      stepId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getRunStepDeserialize(
  result: PathUncheckedResponse,
): Promise<RunStep> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return runStepDeserializer(result.body);
}

/** Gets a single run step from a thread run. */
export async function getRunStep(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: GetRunStepOptionalParams = { requestOptions: {} },
): Promise<RunStep> {
  const result = await _getRunStepSend(
    context,
    threadId,
    runId,
    stepId,
    options,
  );
  return _getRunStepDeserialize(result);
}

export function _createThreadAndRunSend(
  context: Client,
  body: CreateAndRunThreadOptions,
  options: CreateThreadAndRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/runs")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createAndRunThreadOptionsSerializer(body),
    });
}

export async function _createThreadAndRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Creates a new assistant thread and immediately starts a run using that new thread. */
export async function createThreadAndRun(
  context: Client,
  body: CreateAndRunThreadOptions,
  options: CreateThreadAndRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _createThreadAndRunSend(context, body, options);
  return _createThreadAndRunDeserialize(result);
}

export function _cancelRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: CancelRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}/cancel", threadId, runId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _cancelRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Cancels a run of an in progress thread. */
export async function cancelRun(
  context: Client,
  threadId: string,
  runId: string,
  options: CancelRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _cancelRunSend(context, threadId, runId, options);
  return _cancelRunDeserialize(result);
}

export function _submitToolOutputsToRunSend(
  context: Client,
  threadId: string,
  runId: string,
  toolOutputs: ToolOutput[],
  options: SubmitToolOutputsToRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/threads/{threadId}/runs/{runId}/submit_tool_outputs",
      threadId,
      runId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        tool_outputs: toolOutputArraySerializer(toolOutputs),
        stream: options?.stream,
      },
    });
}

export async function _submitToolOutputsToRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Submits outputs from tools as requested by tool calls in a run. Runs that need submitted tool outputs will have a status of 'requires_action' with a required_action.type of 'submit_tool_outputs'. */
export async function submitToolOutputsToRun(
  context: Client,
  threadId: string,
  runId: string,
  toolOutputs: ToolOutput[],
  options: SubmitToolOutputsToRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _submitToolOutputsToRunSend(
    context,
    threadId,
    runId,
    toolOutputs,
    options,
  );
  return _submitToolOutputsToRunDeserialize(result);
}

export function _updateRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: UpdateRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}", threadId, runId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: { metadata: options?.metadata },
    });
}

export async function _updateRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Modifies an existing thread run. */
export async function updateRun(
  context: Client,
  threadId: string,
  runId: string,
  options: UpdateRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _updateRunSend(context, threadId, runId, options);
  return _updateRunDeserialize(result);
}

export function _getRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: GetRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs/{runId}", threadId, runId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Gets an existing run from an existing thread. */
export async function getRun(
  context: Client,
  threadId: string,
  runId: string,
  options: GetRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _getRunSend(context, threadId, runId, options);
  return _getRunDeserialize(result);
}

export function _listRunsSend(
  context: Client,
  threadId: string,
  options: ListRunsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs", threadId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listRunsDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfThreadRunDeserializer(result.body);
}

/** Gets a list of runs for a specified thread. */
export async function listRuns(
  context: Client,
  threadId: string,
  options: ListRunsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfThreadRun> {
  const result = await _listRunsSend(context, threadId, options);
  return _listRunsDeserialize(result);
}

export function _createRunSend(
  context: Client,
  threadId: string,
  body: CreateRunOptions,
  options: CreateRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/runs", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createRunOptionsSerializer(body),
    });
}

export async function _createRunDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadRunDeserializer(result.body);
}

/** Creates a new run for an assistant thread. */
export async function createRun(
  context: Client,
  threadId: string,
  body: CreateRunOptions,
  options: CreateRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _createRunSend(context, threadId, body, options);
  return _createRunDeserialize(result);
}

export function _updateMessageSend(
  context: Client,
  threadId: string,
  messageId: string,
  options: UpdateMessageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/messages/{messageId}", threadId, messageId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: { metadata: options?.metadata },
    });
}

export async function _updateMessageDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadMessageDeserializer(result.body);
}

/** Modifies an existing message on an existing thread. */
export async function updateMessage(
  context: Client,
  threadId: string,
  messageId: string,
  options: UpdateMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _updateMessageSend(
    context,
    threadId,
    messageId,
    options,
  );
  return _updateMessageDeserialize(result);
}

export function _getMessageSend(
  context: Client,
  threadId: string,
  messageId: string,
  options: GetMessageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/messages/{messageId}", threadId, messageId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getMessageDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadMessageDeserializer(result.body);
}

/** Gets an existing message from an existing thread. */
export async function getMessage(
  context: Client,
  threadId: string,
  messageId: string,
  options: GetMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _getMessageSend(context, threadId, messageId, options);
  return _getMessageDeserialize(result);
}

export function _listMessagesSend(
  context: Client,
  threadId: string,
  options: ListMessagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/messages", threadId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        runId: options?.runId,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listMessagesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfThreadMessageDeserializer(result.body);
}

/** Gets a list of messages that exist on a thread. */
export async function listMessages(
  context: Client,
  threadId: string,
  options: ListMessagesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfThreadMessage> {
  const result = await _listMessagesSend(context, threadId, options);
  return _listMessagesDeserialize(result);
}

export function _createMessageSend(
  context: Client,
  threadId: string,
  body: ThreadMessageOptions,
  options: CreateMessageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}/messages", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: threadMessageOptionsSerializer(body),
    });
}

export async function _createMessageDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadMessage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadMessageDeserializer(result.body);
}

/** Creates a new message on a specified thread. */
export async function createMessage(
  context: Client,
  threadId: string,
  body: ThreadMessageOptions,
  options: CreateMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _createMessageSend(context, threadId, body, options);
  return _createMessageDeserialize(result);
}

export function _deleteThreadSend(
  context: Client,
  threadId: string,
  options: DeleteThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}", threadId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<ThreadDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return threadDeletionStatusDeserializer(result.body);
}

/** Deletes an existing thread. */
export async function deleteThread(
  context: Client,
  threadId: string,
  options: DeleteThreadOptionalParams = { requestOptions: {} },
): Promise<ThreadDeletionStatus> {
  const result = await _deleteThreadSend(context, threadId, options);
  return _deleteThreadDeserialize(result);
}

export function _updateThreadSend(
  context: Client,
  body: UpdateAssistantThreadOptions,
  options: UpdateThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateAssistantThreadOptionsSerializer(body),
    });
}

export async function _updateThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<AssistantThread> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return assistantThreadDeserializer(result.body);
}

/** Modifies an existing thread. */
export async function updateThread(
  context: Client,
  body: UpdateAssistantThreadOptions,
  options: UpdateThreadOptionalParams = { requestOptions: {} },
): Promise<AssistantThread> {
  const result = await _updateThreadSend(context, body, options);
  return _updateThreadDeserialize(result);
}

export function _getThreadSend(
  context: Client,
  threadId: string,
  options: GetThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads/{threadId}", threadId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<AssistantThread> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return assistantThreadDeserializer(result.body);
}

/** Gets information about an existing thread. */
export async function getThread(
  context: Client,
  threadId: string,
  options: GetThreadOptionalParams = { requestOptions: {} },
): Promise<AssistantThread> {
  const result = await _getThreadSend(context, threadId, options);
  return _getThreadDeserialize(result);
}

export function _createThreadSend(
  context: Client,
  body: AssistantThreadCreationOptions,
  options: CreateThreadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/threads")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: assistantThreadCreationOptionsSerializer(body),
    });
}

export async function _createThreadDeserialize(
  result: PathUncheckedResponse,
): Promise<AssistantThread> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return assistantThreadDeserializer(result.body);
}

/** Creates a new thread. Threads contain messages and can be run by assistants. */
export async function createThread(
  context: Client,
  body: AssistantThreadCreationOptions,
  options: CreateThreadOptionalParams = { requestOptions: {} },
): Promise<AssistantThread> {
  const result = await _createThreadSend(context, body, options);
  return _createThreadDeserialize(result);
}

export function _deleteAssistantSend(
  context: Client,
  assistantId: string,
  options: DeleteAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteAssistantDeserialize(
  result: PathUncheckedResponse,
): Promise<AssistantDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return assistantDeletionStatusDeserializer(result.body);
}

/** Deletes an assistant. */
export async function deleteAssistant(
  context: Client,
  assistantId: string,
  options: DeleteAssistantOptionalParams = { requestOptions: {} },
): Promise<AssistantDeletionStatus> {
  const result = await _deleteAssistantSend(context, assistantId, options);
  return _deleteAssistantDeserialize(result);
}

export function _updateAssistantSend(
  context: Client,
  body: UpdateAssistantOptions,
  options: UpdateAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateAssistantOptionsSerializer(body),
    });
}

export async function _updateAssistantDeserialize(
  result: PathUncheckedResponse,
): Promise<Assistant> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return assistantDeserializer(result.body);
}

/** Modifies an existing assistant. */
export async function updateAssistant(
  context: Client,
  body: UpdateAssistantOptions,
  options: UpdateAssistantOptionalParams = { requestOptions: {} },
): Promise<Assistant> {
  const result = await _updateAssistantSend(context, body, options);
  return _updateAssistantDeserialize(result);
}

export function _getAssistantSend(
  context: Client,
  assistantId: string,
  options: GetAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getAssistantDeserialize(
  result: PathUncheckedResponse,
): Promise<Assistant> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return assistantDeserializer(result.body);
}

/** Retrieves an existing assistant. */
export async function getAssistant(
  context: Client,
  assistantId: string,
  options: GetAssistantOptionalParams = { requestOptions: {} },
): Promise<Assistant> {
  const result = await _getAssistantSend(context, assistantId, options);
  return _getAssistantDeserialize(result);
}

export function _listAssistantsSend(
  context: Client,
  options: ListAssistantsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listAssistantsDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfAssistant> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return openAIPageableListOfAssistantDeserializer(result.body);
}

/** Gets a list of assistants that were previously created. */
export async function listAssistants(
  context: Client,
  options: ListAssistantsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfAssistant> {
  const result = await _listAssistantsSend(context, options);
  return _listAssistantsDeserialize(result);
}

export function _createAssistantSend(
  context: Client,
  body: AssistantCreationOptions,
  options: CreateAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/assistants")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: assistantCreationOptionsSerializer(body),
    });
}

export async function _createAssistantDeserialize(
  result: PathUncheckedResponse,
): Promise<Assistant> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return assistantDeserializer(result.body);
}

/** Creates a new assistant. */
export async function createAssistant(
  context: Client,
  body: AssistantCreationOptions,
  options: CreateAssistantOptionalParams = { requestOptions: {} },
): Promise<Assistant> {
  const result = await _createAssistantSend(context, body, options);
  return _createAssistantDeserialize(result);
}
