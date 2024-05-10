// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateAssistantParameters,
  ListAssistantsParameters,
  GetAssistantParameters,
  UpdateAssistantParameters,
  DeleteAssistantParameters,
  CreateThreadParameters,
  GetThreadParameters,
  UpdateThreadParameters,
  DeleteThreadParameters,
  CreateMessageParameters,
  ListMessagesParameters,
  GetMessageParameters,
  UpdateMessageParameters,
  ListMessageFilesParameters,
  GetMessageFileParameters,
  CreateRunParameters,
  ListRunsParameters,
  GetRunParameters,
  UpdateRunParameters,
  SubmitToolOutputsToRunParameters,
  CancelRunParameters,
  CreateThreadAndRunParameters,
  GetRunStepParameters,
  ListRunStepsParameters,
  ListFilesParameters,
  UploadFileParameters,
  DeleteFileParameters,
  GetFileParameters,
  GetFileContentParameters,
  ListVectorStoresParameters,
  CreateVectorStoreParameters,
  GetVectorStoreParameters,
  ModifyVectorStoreParameters,
  DeleteVectorStoreParameters,
  ListVectorStoreFilesParameters,
  CreateVectorStoreFileParameters,
  GetVectoreStoreFileParameters,
  DeleteVectoreStoreFileParameters,
  CreateVectorStoreFileBatchParameters,
  GetVectorStoreFileBatchParameters,
  CancelVectorStoreFileBatchParameters,
  ListVectorStoreFileBatchFilesParameters,
} from "./parameters.js";
import {
  CreateAssistant200Response,
  ListAssistants200Response,
  GetAssistant200Response,
  UpdateAssistant200Response,
  DeleteAssistant200Response,
  CreateThread200Response,
  GetThread200Response,
  UpdateThread200Response,
  DeleteThread200Response,
  CreateMessage200Response,
  ListMessages200Response,
  GetMessage200Response,
  UpdateMessage200Response,
  ListMessageFiles200Response,
  GetMessageFile200Response,
  CreateRun200Response,
  ListRuns200Response,
  GetRun200Response,
  UpdateRun200Response,
  SubmitToolOutputsToRun200Response,
  CancelRun200Response,
  CreateThreadAndRun200Response,
  GetRunStep200Response,
  ListRunSteps200Response,
  ListFiles200Response,
  UploadFile200Response,
  DeleteFile200Response,
  GetFile200Response,
  GetFileContent200Response,
  ListVectorStores200Response,
  CreateVectorStore200Response,
  GetVectorStore200Response,
  ModifyVectorStore200Response,
  DeleteVectorStore200Response,
  ListVectorStoreFiles200Response,
  CreateVectorStoreFile200Response,
  GetVectoreStoreFile200Response,
  DeleteVectoreStoreFile200Response,
  CreateVectorStoreFileBatch200Response,
  GetVectorStoreFileBatch200Response,
  CancelVectorStoreFileBatch200Response,
  ListVectorStoreFileBatchFiles200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateAssistant {
  /** Creates a new assistant. */
  post(
    options?: CreateAssistantParameters,
  ): StreamableMethod<CreateAssistant200Response>;
  /** Gets a list of assistants that were previously created. */
  get(
    options?: ListAssistantsParameters,
  ): StreamableMethod<ListAssistants200Response>;
}

export interface GetAssistant {
  /** Retrieves an existing assistant. */
  get(
    options?: GetAssistantParameters,
  ): StreamableMethod<GetAssistant200Response>;
  /** Modifies an existing assistant. */
  post(
    options?: UpdateAssistantParameters,
  ): StreamableMethod<UpdateAssistant200Response>;
  /** Deletes an assistant. */
  delete(
    options?: DeleteAssistantParameters,
  ): StreamableMethod<DeleteAssistant200Response>;
}

export interface CreateThread {
  /** Creates a new thread. Threads contain messages and can be run by assistants. */
  post(
    options?: CreateThreadParameters,
  ): StreamableMethod<CreateThread200Response>;
}

export interface GetThread {
  /** Gets information about an existing thread. */
  get(options?: GetThreadParameters): StreamableMethod<GetThread200Response>;
  /** Modifies an existing thread. */
  post(
    options?: UpdateThreadParameters,
  ): StreamableMethod<UpdateThread200Response>;
  /** Deletes an existing thread. */
  delete(
    options?: DeleteThreadParameters,
  ): StreamableMethod<DeleteThread200Response>;
}

export interface CreateMessage {
  /** Creates a new message on a specified thread. */
  post(
    options?: CreateMessageParameters,
  ): StreamableMethod<CreateMessage200Response>;
  /** Gets a list of messages that exist on a thread. */
  get(
    options?: ListMessagesParameters,
  ): StreamableMethod<ListMessages200Response>;
}

export interface GetMessage {
  /** Gets an existing message from an existing thread. */
  get(options?: GetMessageParameters): StreamableMethod<GetMessage200Response>;
  /** Modifies an existing message on an existing thread. */
  post(
    options?: UpdateMessageParameters,
  ): StreamableMethod<UpdateMessage200Response>;
}

export interface ListMessageFiles {
  /** Gets a list of previously uploaded files associated with a message from a thread. */
  get(
    options?: ListMessageFilesParameters,
  ): StreamableMethod<ListMessageFiles200Response>;
}

export interface GetMessageFile {
  /** Gets information about a file attachment to a message within a thread. */
  get(
    options?: GetMessageFileParameters,
  ): StreamableMethod<GetMessageFile200Response>;
}

export interface CreateRun {
  /** Creates a new run for an assistant thread. */
  post(options: CreateRunParameters): StreamableMethod<CreateRun200Response>;
  /** Gets a list of runs for a specified thread. */
  get(options?: ListRunsParameters): StreamableMethod<ListRuns200Response>;
}

export interface GetRun {
  /** Gets an existing run from an existing thread. */
  get(options?: GetRunParameters): StreamableMethod<GetRun200Response>;
  /** Modifies an existing thread run. */
  post(options?: UpdateRunParameters): StreamableMethod<UpdateRun200Response>;
}

export interface SubmitToolOutputsToRun {
  /** Submits outputs from tools as requested by tool calls in a run. Runs that need submitted tool outputs will have a status of 'requires_action' with a required_action.type of 'submit_tool_outputs'. */
  post(
    options?: SubmitToolOutputsToRunParameters,
  ): StreamableMethod<SubmitToolOutputsToRun200Response>;
}

export interface CancelRun {
  /** Cancels a run of an in progress thread. */
  post(options?: CancelRunParameters): StreamableMethod<CancelRun200Response>;
}

export interface CreateThreadAndRun {
  /** Creates a new assistant thread and immediately starts a run using that new thread. */
  post(
    options?: CreateThreadAndRunParameters,
  ): StreamableMethod<CreateThreadAndRun200Response>;
}

export interface GetRunStep {
  /** Gets a single run step from a thread run. */
  get(options?: GetRunStepParameters): StreamableMethod<GetRunStep200Response>;
}

export interface ListRunSteps {
  /** Gets a list of run steps from a thread run. */
  get(
    options?: ListRunStepsParameters,
  ): StreamableMethod<ListRunSteps200Response>;
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

export interface ListVectorStores {
  /** Returns a list of vector stores. */
  get(
    options?: ListVectorStoresParameters,
  ): StreamableMethod<ListVectorStores200Response>;
  /** Creates a vector store. */
  post(
    options?: CreateVectorStoreParameters,
  ): StreamableMethod<CreateVectorStore200Response>;
}

export interface GetVectorStore {
  /** Returns the vector store object matching the specified ID. */
  get(
    options?: GetVectorStoreParameters,
  ): StreamableMethod<GetVectorStore200Response>;
  /** The ID of the vector store to modify. */
  post(
    options?: ModifyVectorStoreParameters,
  ): StreamableMethod<ModifyVectorStore200Response>;
  /** Deletes the vector store object matching the specified ID. */
  delete(
    options?: DeleteVectorStoreParameters,
  ): StreamableMethod<DeleteVectorStore200Response>;
}

export interface ListVectorStoreFiles {
  /** Returns a list of vector store files. */
  get(
    options?: ListVectorStoreFilesParameters,
  ): StreamableMethod<ListVectorStoreFiles200Response>;
  /** Create a vector store file by attaching a file to a vector store. */
  post(
    options: CreateVectorStoreFileParameters,
  ): StreamableMethod<CreateVectorStoreFile200Response>;
}

export interface GetVectoreStoreFile {
  /** Retrieves a vector store file. */
  get(
    options?: GetVectoreStoreFileParameters,
  ): StreamableMethod<GetVectoreStoreFile200Response>;
  /**
   * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted.
   * To delete the file, use the delete file endpoint.
   */
  delete(
    options?: DeleteVectoreStoreFileParameters,
  ): StreamableMethod<DeleteVectoreStoreFile200Response>;
}

export interface CreateVectorStoreFileBatch {
  /** Create a vector store file batch. */
  post(
    options?: CreateVectorStoreFileBatchParameters,
  ): StreamableMethod<CreateVectorStoreFileBatch200Response>;
}

export interface GetVectorStoreFileBatch {
  /** Retrieve a vector store file batch. */
  get(
    options?: GetVectorStoreFileBatchParameters,
  ): StreamableMethod<GetVectorStoreFileBatch200Response>;
}

export interface CancelVectorStoreFileBatch {
  /** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
  post(
    options?: CancelVectorStoreFileBatchParameters,
  ): StreamableMethod<CancelVectorStoreFileBatch200Response>;
}

export interface ListVectorStoreFileBatchFiles {
  /** Returns a list of vector store files in a batch. */
  get(
    options?: ListVectorStoreFileBatchFilesParameters,
  ): StreamableMethod<ListVectorStoreFileBatchFiles200Response>;
}

export interface Routes {
  /** Resource for '/assistants' has methods for the following verbs: post, get */
  (path: "/assistants"): CreateAssistant;
  /** Resource for '/assistants/\{assistantId\}' has methods for the following verbs: get, post, delete */
  (path: "/assistants/{assistantId}", assistantId: string): GetAssistant;
  /** Resource for '/threads' has methods for the following verbs: post */
  (path: "/threads"): CreateThread;
  /** Resource for '/threads/\{threadId\}' has methods for the following verbs: get, post, delete */
  (path: "/threads/{threadId}", threadId: string): GetThread;
  /** Resource for '/threads/\{threadId\}/messages' has methods for the following verbs: post, get */
  (path: "/threads/{threadId}/messages", threadId: string): CreateMessage;
  /** Resource for '/threads/\{threadId\}/messages/\{messageId\}' has methods for the following verbs: get, post */
  (
    path: "/threads/{threadId}/messages/{messageId}",
    threadId: string,
    messageId: string,
  ): GetMessage;
  /** Resource for '/threads/\{threadId\}/messages/\{messageId\}/files' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/messages/{messageId}/files",
    threadId: string,
    messageId: string,
  ): ListMessageFiles;
  /** Resource for '/threads/\{threadId\}/messages/\{messageId\}/files/\{fileId\}' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/messages/{messageId}/files/{fileId}",
    threadId: string,
    messageId: string,
    fileId: string,
  ): GetMessageFile;
  /** Resource for '/threads/\{threadId\}/runs' has methods for the following verbs: post, get */
  (path: "/threads/{threadId}/runs", threadId: string): CreateRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}' has methods for the following verbs: get, post */
  (
    path: "/threads/{threadId}/runs/{runId}",
    threadId: string,
    runId: string,
  ): GetRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/submit_tool_outputs' has methods for the following verbs: post */
  (
    path: "/threads/{threadId}/runs/{runId}/submit_tool_outputs",
    threadId: string,
    runId: string,
  ): SubmitToolOutputsToRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/cancel' has methods for the following verbs: post */
  (
    path: "/threads/{threadId}/runs/{runId}/cancel",
    threadId: string,
    runId: string,
  ): CancelRun;
  /** Resource for '/threads/runs' has methods for the following verbs: post */
  (path: "/threads/runs"): CreateThreadAndRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/steps/\{stepId\}' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/runs/{runId}/steps/{stepId}",
    threadId: string,
    runId: string,
    stepId: string,
  ): GetRunStep;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/steps' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/runs/{runId}/steps",
    threadId: string,
    runId: string,
  ): ListRunSteps;
  /** Resource for '/files' has methods for the following verbs: get, post */
  (path: "/files"): ListFiles;
  /** Resource for '/files/\{fileId\}' has methods for the following verbs: delete, get */
  (path: "/files/{fileId}", fileId: string): DeleteFile;
  /** Resource for '/files/\{fileId\}/content' has methods for the following verbs: get */
  (path: "/files/{fileId}/content", fileId: string): GetFileContent;
  /** Resource for '/vector_stores' has methods for the following verbs: get, post */
  (path: "/vector_stores"): ListVectorStores;
  /** Resource for '/vector_stores/\{vectorStoreId\}' has methods for the following verbs: get, post, delete */
  (
    path: "/vector_stores/{vectorStoreId}",
    vectorStoreId: string,
  ): GetVectorStore;
  /** Resource for '/vector_stores/\{vectorStoreId\}/files' has methods for the following verbs: get, post */
  (
    path: "/vector_stores/{vectorStoreId}/files",
    vectorStoreId: string,
  ): ListVectorStoreFiles;
  /** Resource for '/vector_stores/\{vectorStoreId\}/files/\{fileId\}' has methods for the following verbs: get, delete */
  (
    path: "/vector_stores/{vectorStoreId}/files/{fileId}",
    vectorStoreId: string,
    fileId: string,
  ): GetVectoreStoreFile;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches' has methods for the following verbs: post */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches",
    vectorStoreId: string,
  ): CreateVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}' has methods for the following verbs: get */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}",
    vectorStoreId: string,
    batchId: string,
  ): GetVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}/cancel' has methods for the following verbs: post */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}/cancel",
    vectorStoreId: string,
    batchId: string,
  ): CancelVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}/files' has methods for the following verbs: get */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}/files",
    vectorStoreId: string,
    batchId: string,
  ): ListVectorStoreFileBatchFiles;
}

export type AssistantsContext = Client & {
  path: Routes;
};
