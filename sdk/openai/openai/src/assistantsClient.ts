// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createAssistants,
  AssistantsContext,
  AssistantsClientOptionalParams,
  listVectorStoreFileBatchFiles,
  cancelVectorStoreFileBatch,
  getVectorStoreFileBatch,
  createVectorStoreFileBatch,
  deleteVectorStoreFile,
  getVectorStoreFile,
  createVectorStoreFile,
  listVectorStoreFiles,
  deleteVectorStore,
  modifyVectorStore,
  getVectorStore,
  createVectorStore,
  listVectorStores,
  getFileContent,
  getFile,
  deleteFile,
  uploadFile,
  listFiles,
  listRunSteps,
  getRunStep,
  createThreadAndRun,
  cancelRun,
  submitToolOutputsToRun,
  updateRun,
  getRun,
  listRuns,
  createRun,
  updateMessage,
  getMessage,
  listMessages,
  createMessage,
  deleteThread,
  updateThread,
  getThread,
  createThread,
  deleteAssistant,
  updateAssistant,
  getAssistant,
  listAssistants,
  createAssistant,
  ListVectorStoreFileBatchFilesOptionalParams,
  CancelVectorStoreFileBatchOptionalParams,
  GetVectorStoreFileBatchOptionalParams,
  CreateVectorStoreFileBatchOptionalParams,
  DeleteVectorStoreFileOptionalParams,
  GetVectorStoreFileOptionalParams,
  CreateVectorStoreFileOptionalParams,
  ListVectorStoreFilesOptionalParams,
  DeleteVectorStoreOptionalParams,
  ModifyVectorStoreOptionalParams,
  GetVectorStoreOptionalParams,
  CreateVectorStoreOptionalParams,
  ListVectorStoresOptionalParams,
  GetFileContentOptionalParams,
  GetFileOptionalParams,
  DeleteFileOptionalParams,
  UploadFileOptionalParams,
  ListFilesOptionalParams,
  ListRunStepsOptionalParams,
  GetRunStepOptionalParams,
  CreateThreadAndRunOptionalParams,
  CancelRunOptionalParams,
  SubmitToolOutputsToRunOptionalParams,
  UpdateRunOptionalParams,
  GetRunOptionalParams,
  ListRunsOptionalParams,
  CreateRunOptionalParams,
  UpdateMessageOptionalParams,
  GetMessageOptionalParams,
  ListMessagesOptionalParams,
  CreateMessageOptionalParams,
  DeleteThreadOptionalParams,
  UpdateThreadOptionalParams,
  GetThreadOptionalParams,
  CreateThreadOptionalParams,
  DeleteAssistantOptionalParams,
  UpdateAssistantOptionalParams,
  GetAssistantOptionalParams,
  ListAssistantsOptionalParams,
  CreateAssistantOptionalParams,
} from "./api/index.js";
import {
  AssistantCreationOptions,
  Assistant,
  OpenAIPageableListOfAssistant,
  UpdateAssistantOptions,
  AssistantDeletionStatus,
  AssistantThreadCreationOptions,
  ThreadMessageOptions,
  AssistantThread,
  UpdateAssistantThreadOptions,
  ThreadDeletionStatus,
  ThreadMessage,
  OpenAIPageableListOfThreadMessage,
  CreateRunOptions,
  ThreadRun,
  OpenAIPageableListOfThreadRun,
  ToolOutput,
  CreateAndRunThreadOptions,
  RunStep,
  OpenAIPageableListOfRunStep,
  FileListResponse,
  OpenAIFile,
  FilePurpose,
  FileDeletionStatus,
  OpenAIPageableListOfVectorStore,
  VectorStore,
  VectorStoreOptions,
  VectorStoreUpdateOptions,
  VectorStoreDeletionStatus,
  OpenAIPageableListOfVectorStoreFile,
  VectorStoreFile,
  VectorStoreFileDeletionStatus,
  VectorStoreFileBatch,
} from "./models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { AssistantsClientOptionalParams } from "./api/assistantsContext.js";

export class AssistantsClient {
  private _client: AssistantsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure OpenAI APIs for Assistants. */
  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: AssistantsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAssistants(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Returns a list of vector store files in a batch. */
  listVectorStoreFileBatchFiles(
    vectorStoreId: string,
    batchId: string,
    options: ListVectorStoreFileBatchFilesOptionalParams = {
      requestOptions: {},
    },
  ): Promise<OpenAIPageableListOfVectorStoreFile> {
    return listVectorStoreFileBatchFiles(
      this._client,
      vectorStoreId,
      batchId,
      options,
    );
  }

  /** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
  cancelVectorStoreFileBatch(
    vectorStoreId: string,
    batchId: string,
    options: CancelVectorStoreFileBatchOptionalParams = { requestOptions: {} },
  ): Promise<VectorStoreFileBatch> {
    return cancelVectorStoreFileBatch(
      this._client,
      vectorStoreId,
      batchId,
      options,
    );
  }

  /** Retrieve a vector store file batch. */
  getVectorStoreFileBatch(
    vectorStoreId: string,
    batchId: string,
    options: GetVectorStoreFileBatchOptionalParams = { requestOptions: {} },
  ): Promise<VectorStoreFileBatch> {
    return getVectorStoreFileBatch(
      this._client,
      vectorStoreId,
      batchId,
      options,
    );
  }

  /** Create a vector store file batch. */
  createVectorStoreFileBatch(
    vectorStoreId: string,
    fileIds: string[],
    options: CreateVectorStoreFileBatchOptionalParams = { requestOptions: {} },
  ): Promise<VectorStoreFileBatch> {
    return createVectorStoreFileBatch(
      this._client,
      vectorStoreId,
      fileIds,
      options,
    );
  }

  /**
   * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted.
   * To delete the file, use the delete file endpoint.
   */
  deleteVectorStoreFile(
    vectorStoreId: string,
    fileId: string,
    options: DeleteVectorStoreFileOptionalParams = { requestOptions: {} },
  ): Promise<VectorStoreFileDeletionStatus> {
    return deleteVectorStoreFile(this._client, vectorStoreId, fileId, options);
  }

  /** Retrieves a vector store file. */
  getVectorStoreFile(
    vectorStoreId: string,
    fileId: string,
    options: GetVectorStoreFileOptionalParams = { requestOptions: {} },
  ): Promise<VectorStoreFile> {
    return getVectorStoreFile(this._client, vectorStoreId, fileId, options);
  }

  /** Create a vector store file by attaching a file to a vector store. */
  createVectorStoreFile(
    vectorStoreId: string,
    fileId: string,
    options: CreateVectorStoreFileOptionalParams = { requestOptions: {} },
  ): Promise<VectorStoreFile> {
    return createVectorStoreFile(this._client, vectorStoreId, fileId, options);
  }

  /** Returns a list of vector store files. */
  listVectorStoreFiles(
    vectorStoreId: string,
    options: ListVectorStoreFilesOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfVectorStoreFile> {
    return listVectorStoreFiles(this._client, vectorStoreId, options);
  }

  /** Deletes the vector store object matching the specified ID. */
  deleteVectorStore(
    vectorStoreId: string,
    options: DeleteVectorStoreOptionalParams = { requestOptions: {} },
  ): Promise<VectorStoreDeletionStatus> {
    return deleteVectorStore(this._client, vectorStoreId, options);
  }

  /** The ID of the vector store to modify. */
  modifyVectorStore(
    vectorStoreId: string,
    body: VectorStoreUpdateOptions,
    options: ModifyVectorStoreOptionalParams = { requestOptions: {} },
  ): Promise<VectorStore> {
    return modifyVectorStore(this._client, vectorStoreId, body, options);
  }

  /** Returns the vector store object matching the specified ID. */
  getVectorStore(
    vectorStoreId: string,
    options: GetVectorStoreOptionalParams = { requestOptions: {} },
  ): Promise<VectorStore> {
    return getVectorStore(this._client, vectorStoreId, options);
  }

  /** Creates a vector store. */
  createVectorStore(
    body: VectorStoreOptions,
    options: CreateVectorStoreOptionalParams = { requestOptions: {} },
  ): Promise<VectorStore> {
    return createVectorStore(this._client, body, options);
  }

  /** Returns a list of vector stores. */
  listVectorStores(
    options: ListVectorStoresOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfVectorStore> {
    return listVectorStores(this._client, options);
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

  /** Gets a list of run steps from a thread run. */
  listRunSteps(
    threadId: string,
    runId: string,
    options: ListRunStepsOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfRunStep> {
    return listRunSteps(this._client, threadId, runId, options);
  }

  /** Gets a single run step from a thread run. */
  getRunStep(
    threadId: string,
    runId: string,
    stepId: string,
    options: GetRunStepOptionalParams = { requestOptions: {} },
  ): Promise<RunStep> {
    return getRunStep(this._client, threadId, runId, stepId, options);
  }

  /** Creates a new assistant thread and immediately starts a run using that new thread. */
  createThreadAndRun(
    body: CreateAndRunThreadOptions,
    options: CreateThreadAndRunOptionalParams = { requestOptions: {} },
  ): Promise<ThreadRun> {
    return createThreadAndRun(this._client, body, options);
  }

  /** Cancels a run of an in progress thread. */
  cancelRun(
    threadId: string,
    runId: string,
    options: CancelRunOptionalParams = { requestOptions: {} },
  ): Promise<ThreadRun> {
    return cancelRun(this._client, threadId, runId, options);
  }

  /** Submits outputs from tools as requested by tool calls in a run. Runs that need submitted tool outputs will have a status of 'requires_action' with a required_action.type of 'submit_tool_outputs'. */
  submitToolOutputsToRun(
    threadId: string,
    runId: string,
    toolOutputs: ToolOutput[],
    options: SubmitToolOutputsToRunOptionalParams = { requestOptions: {} },
  ): Promise<ThreadRun> {
    return submitToolOutputsToRun(
      this._client,
      threadId,
      runId,
      toolOutputs,
      options,
    );
  }

  /** Modifies an existing thread run. */
  updateRun(
    threadId: string,
    runId: string,
    options: UpdateRunOptionalParams = { requestOptions: {} },
  ): Promise<ThreadRun> {
    return updateRun(this._client, threadId, runId, options);
  }

  /** Gets an existing run from an existing thread. */
  getRun(
    threadId: string,
    runId: string,
    options: GetRunOptionalParams = { requestOptions: {} },
  ): Promise<ThreadRun> {
    return getRun(this._client, threadId, runId, options);
  }

  /** Gets a list of runs for a specified thread. */
  listRuns(
    threadId: string,
    options: ListRunsOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfThreadRun> {
    return listRuns(this._client, threadId, options);
  }

  /** Creates a new run for an assistant thread. */
  createRun(
    threadId: string,
    body: CreateRunOptions,
    options: CreateRunOptionalParams = { requestOptions: {} },
  ): Promise<ThreadRun> {
    return createRun(this._client, threadId, body, options);
  }

  /** Modifies an existing message on an existing thread. */
  updateMessage(
    threadId: string,
    messageId: string,
    options: UpdateMessageOptionalParams = { requestOptions: {} },
  ): Promise<ThreadMessage> {
    return updateMessage(this._client, threadId, messageId, options);
  }

  /** Gets an existing message from an existing thread. */
  getMessage(
    threadId: string,
    messageId: string,
    options: GetMessageOptionalParams = { requestOptions: {} },
  ): Promise<ThreadMessage> {
    return getMessage(this._client, threadId, messageId, options);
  }

  /** Gets a list of messages that exist on a thread. */
  listMessages(
    threadId: string,
    options: ListMessagesOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfThreadMessage> {
    return listMessages(this._client, threadId, options);
  }

  /** Creates a new message on a specified thread. */
  createMessage(
    threadId: string,
    body: ThreadMessageOptions,
    options: CreateMessageOptionalParams = { requestOptions: {} },
  ): Promise<ThreadMessage> {
    return createMessage(this._client, threadId, body, options);
  }

  /** Deletes an existing thread. */
  deleteThread(
    threadId: string,
    options: DeleteThreadOptionalParams = { requestOptions: {} },
  ): Promise<ThreadDeletionStatus> {
    return deleteThread(this._client, threadId, options);
  }

  /** Modifies an existing thread. */
  updateThread(
    body: UpdateAssistantThreadOptions,
    options: UpdateThreadOptionalParams = { requestOptions: {} },
  ): Promise<AssistantThread> {
    return updateThread(this._client, body, options);
  }

  /** Gets information about an existing thread. */
  getThread(
    threadId: string,
    options: GetThreadOptionalParams = { requestOptions: {} },
  ): Promise<AssistantThread> {
    return getThread(this._client, threadId, options);
  }

  /** Creates a new thread. Threads contain messages and can be run by assistants. */
  createThread(
    body: AssistantThreadCreationOptions,
    options: CreateThreadOptionalParams = { requestOptions: {} },
  ): Promise<AssistantThread> {
    return createThread(this._client, body, options);
  }

  /** Deletes an assistant. */
  deleteAssistant(
    assistantId: string,
    options: DeleteAssistantOptionalParams = { requestOptions: {} },
  ): Promise<AssistantDeletionStatus> {
    return deleteAssistant(this._client, assistantId, options);
  }

  /** Modifies an existing assistant. */
  updateAssistant(
    body: UpdateAssistantOptions,
    options: UpdateAssistantOptionalParams = { requestOptions: {} },
  ): Promise<Assistant> {
    return updateAssistant(this._client, body, options);
  }

  /** Retrieves an existing assistant. */
  getAssistant(
    assistantId: string,
    options: GetAssistantOptionalParams = { requestOptions: {} },
  ): Promise<Assistant> {
    return getAssistant(this._client, assistantId, options);
  }

  /** Gets a list of assistants that were previously created. */
  listAssistants(
    options: ListAssistantsOptionalParams = { requestOptions: {} },
  ): Promise<OpenAIPageableListOfAssistant> {
    return listAssistants(this._client, options);
  }

  /** Creates a new assistant. */
  createAssistant(
    body: AssistantCreationOptions,
    options: CreateAssistantOptionalParams = { requestOptions: {} },
  ): Promise<Assistant> {
    return createAssistant(this._client, body, options);
  }
}
