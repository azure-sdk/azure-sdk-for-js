// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  AssistantsCreateAgentParameters,
  AssistantsListAgentsParameters,
  AssistantsGetAgentParameters,
  AssistantsUpdateAgentParameters,
  AssistantsDeleteAgentParameters,
  AssistantsCreateThreadParameters,
  AssistantsGetThreadParameters,
  AssistantsUpdateThreadParameters,
  AssistantsDeleteThreadParameters,
  AssistantsCreateMessageParameters,
  AssistantsListMessagesParameters,
  AssistantsGetMessageParameters,
  AssistantsUpdateMessageParameters,
  AssistantsCreateRunParameters,
  AssistantsListRunsParameters,
  AssistantsGetRunParameters,
  AssistantsUpdateRunParameters,
  AssistantsSubmitToolOutputsToRunParameters,
  AssistantsCancelRunParameters,
  AssistantsCreateThreadAndRunParameters,
  AssistantsGetRunStepParameters,
  AssistantsListRunStepsParameters,
  AssistantsListFilesParameters,
  AssistantsUploadFileParameters,
  AssistantsDeleteFileParameters,
  AssistantsGetFileParameters,
  AssistantsGetFileContentParameters,
  AssistantsListVectorStoresParameters,
  AssistantsCreateVectorStoreParameters,
  AssistantsGetVectorStoreParameters,
  AssistantsModifyVectorStoreParameters,
  AssistantsDeleteVectorStoreParameters,
  AssistantsListVectorStoreFilesParameters,
  AssistantsCreateVectorStoreFileParameters,
  AssistantsGetVectorStoreFileParameters,
  AssistantsDeleteVectorStoreFileParameters,
  AssistantsCreateVectorStoreFileBatchParameters,
  AssistantsGetVectorStoreFileBatchParameters,
  AssistantsCancelVectorStoreFileBatchParameters,
  AssistantsListVectorStoreFileBatchFilesParameters,
  ConnectionsGetParameters,
  ConnectionsListParameters,
  EvaluationsGetParameters,
  EvaluationsListParameters,
  EvaluationsCreateRunParameters,
  DatasetsListVersionsParameters,
  DatasetsCreateParameters,
  DatasetsListLatestParameters,
  DatasetsGetVersionParameters,
  DatasetsDeleteVersionParameters,
  DatasetsCreateVersionParameters,
  DatasetsStartPendingUploadParameters,
  DatasetsStartPendingUploadAutoIncrementParameters,
  IndexesListVersionsParameters,
  IndexesCreateParameters,
  IndexesListLatestParameters,
  IndexesGetVersionParameters,
  IndexesDeleteVersionParameters,
  IndexesCreateVersionParameters,
  DeploymentsGetParameters,
  DeploymentsListParameters,
} from "./parameters.js";
import type {
  AssistantsCreateAgent200Response,
  AssistantsCreateAgentDefaultResponse,
  AssistantsListAgents200Response,
  AssistantsListAgentsDefaultResponse,
  AssistantsGetAgent200Response,
  AssistantsGetAgentDefaultResponse,
  AssistantsUpdateAgent200Response,
  AssistantsUpdateAgentDefaultResponse,
  AssistantsDeleteAgent200Response,
  AssistantsDeleteAgentDefaultResponse,
  AssistantsCreateThread200Response,
  AssistantsCreateThreadDefaultResponse,
  AssistantsGetThread200Response,
  AssistantsGetThreadDefaultResponse,
  AssistantsUpdateThread200Response,
  AssistantsUpdateThreadDefaultResponse,
  AssistantsDeleteThread200Response,
  AssistantsDeleteThreadDefaultResponse,
  AssistantsCreateMessage200Response,
  AssistantsCreateMessageDefaultResponse,
  AssistantsListMessages200Response,
  AssistantsListMessagesDefaultResponse,
  AssistantsGetMessage200Response,
  AssistantsGetMessageDefaultResponse,
  AssistantsUpdateMessage200Response,
  AssistantsUpdateMessageDefaultResponse,
  AssistantsCreateRun200Response,
  AssistantsCreateRunDefaultResponse,
  AssistantsListRuns200Response,
  AssistantsListRunsDefaultResponse,
  AssistantsGetRun200Response,
  AssistantsGetRunDefaultResponse,
  AssistantsUpdateRun200Response,
  AssistantsUpdateRunDefaultResponse,
  AssistantsSubmitToolOutputsToRun200Response,
  AssistantsSubmitToolOutputsToRunDefaultResponse,
  AssistantsCancelRun200Response,
  AssistantsCancelRunDefaultResponse,
  AssistantsCreateThreadAndRun200Response,
  AssistantsCreateThreadAndRunDefaultResponse,
  AssistantsGetRunStep200Response,
  AssistantsGetRunStepDefaultResponse,
  AssistantsListRunSteps200Response,
  AssistantsListRunStepsDefaultResponse,
  AssistantsListFiles200Response,
  AssistantsListFilesDefaultResponse,
  AssistantsUploadFile200Response,
  AssistantsUploadFileDefaultResponse,
  AssistantsDeleteFile200Response,
  AssistantsDeleteFileDefaultResponse,
  AssistantsGetFile200Response,
  AssistantsGetFileDefaultResponse,
  AssistantsGetFileContent200Response,
  AssistantsGetFileContentDefaultResponse,
  AssistantsListVectorStores200Response,
  AssistantsListVectorStoresDefaultResponse,
  AssistantsCreateVectorStore200Response,
  AssistantsCreateVectorStoreDefaultResponse,
  AssistantsGetVectorStore200Response,
  AssistantsGetVectorStoreDefaultResponse,
  AssistantsModifyVectorStore200Response,
  AssistantsModifyVectorStoreDefaultResponse,
  AssistantsDeleteVectorStore200Response,
  AssistantsDeleteVectorStoreDefaultResponse,
  AssistantsListVectorStoreFiles200Response,
  AssistantsListVectorStoreFilesDefaultResponse,
  AssistantsCreateVectorStoreFile200Response,
  AssistantsCreateVectorStoreFileDefaultResponse,
  AssistantsGetVectorStoreFile200Response,
  AssistantsGetVectorStoreFileDefaultResponse,
  AssistantsDeleteVectorStoreFile200Response,
  AssistantsDeleteVectorStoreFileDefaultResponse,
  AssistantsCreateVectorStoreFileBatch200Response,
  AssistantsCreateVectorStoreFileBatchDefaultResponse,
  AssistantsGetVectorStoreFileBatch200Response,
  AssistantsGetVectorStoreFileBatchDefaultResponse,
  AssistantsCancelVectorStoreFileBatch200Response,
  AssistantsCancelVectorStoreFileBatchDefaultResponse,
  AssistantsListVectorStoreFileBatchFiles200Response,
  AssistantsListVectorStoreFileBatchFilesDefaultResponse,
  ConnectionsGet200Response,
  ConnectionsGetDefaultResponse,
  ConnectionsList200Response,
  ConnectionsListDefaultResponse,
  EvaluationsGet200Response,
  EvaluationsGetDefaultResponse,
  EvaluationsList200Response,
  EvaluationsListDefaultResponse,
  EvaluationsCreateRun200Response,
  EvaluationsCreateRunDefaultResponse,
  DatasetsListVersions200Response,
  DatasetsListVersionsDefaultResponse,
  DatasetsCreate200Response,
  DatasetsCreateDefaultResponse,
  DatasetsListLatest200Response,
  DatasetsListLatestDefaultResponse,
  DatasetsGetVersion200Response,
  DatasetsGetVersionDefaultResponse,
  DatasetsDeleteVersion204Response,
  DatasetsDeleteVersionDefaultResponse,
  DatasetsCreateVersion200Response,
  DatasetsCreateVersion201Response,
  DatasetsCreateVersionDefaultResponse,
  DatasetsStartPendingUpload200Response,
  DatasetsStartPendingUploadDefaultResponse,
  DatasetsStartPendingUploadAutoIncrement200Response,
  DatasetsStartPendingUploadAutoIncrementDefaultResponse,
  IndexesListVersions200Response,
  IndexesListVersionsDefaultResponse,
  IndexesCreate200Response,
  IndexesCreateDefaultResponse,
  IndexesListLatest200Response,
  IndexesListLatestDefaultResponse,
  IndexesGetVersion200Response,
  IndexesGetVersionDefaultResponse,
  IndexesDeleteVersion204Response,
  IndexesDeleteVersionDefaultResponse,
  IndexesCreateVersion200Response,
  IndexesCreateVersion201Response,
  IndexesCreateVersionDefaultResponse,
  DeploymentsGet200Response,
  DeploymentsGetDefaultResponse,
  DeploymentsList200Response,
  DeploymentsListDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AssistantsCreateAgent {
  /** Creates a new agent. */
  post(
    options: AssistantsCreateAgentParameters,
  ): StreamableMethod<
    AssistantsCreateAgent200Response | AssistantsCreateAgentDefaultResponse
  >;
  /** Gets a list of agents that were previously created. */
  get(
    options?: AssistantsListAgentsParameters,
  ): StreamableMethod<
    AssistantsListAgents200Response | AssistantsListAgentsDefaultResponse
  >;
}

export interface AssistantsGetAgent {
  /** Retrieves an existing agent. */
  get(
    options?: AssistantsGetAgentParameters,
  ): StreamableMethod<
    AssistantsGetAgent200Response | AssistantsGetAgentDefaultResponse
  >;
  /** Modifies an existing agent. */
  post(
    options: AssistantsUpdateAgentParameters,
  ): StreamableMethod<
    AssistantsUpdateAgent200Response | AssistantsUpdateAgentDefaultResponse
  >;
  /** Deletes an agent. */
  delete(
    options?: AssistantsDeleteAgentParameters,
  ): StreamableMethod<
    AssistantsDeleteAgent200Response | AssistantsDeleteAgentDefaultResponse
  >;
}

export interface AssistantsCreateThread {
  /** Creates a new thread. Threads contain messages and can be run by agents. */
  post(
    options: AssistantsCreateThreadParameters,
  ): StreamableMethod<
    AssistantsCreateThread200Response | AssistantsCreateThreadDefaultResponse
  >;
}

export interface AssistantsGetThread {
  /** Gets information about an existing thread. */
  get(
    options?: AssistantsGetThreadParameters,
  ): StreamableMethod<
    AssistantsGetThread200Response | AssistantsGetThreadDefaultResponse
  >;
  /** Modifies an existing thread. */
  post(
    options: AssistantsUpdateThreadParameters,
  ): StreamableMethod<
    AssistantsUpdateThread200Response | AssistantsUpdateThreadDefaultResponse
  >;
  /** Deletes an existing thread. */
  delete(
    options?: AssistantsDeleteThreadParameters,
  ): StreamableMethod<
    AssistantsDeleteThread200Response | AssistantsDeleteThreadDefaultResponse
  >;
}

export interface AssistantsCreateMessage {
  /** Creates a new message on a specified thread. */
  post(
    options: AssistantsCreateMessageParameters,
  ): StreamableMethod<
    AssistantsCreateMessage200Response | AssistantsCreateMessageDefaultResponse
  >;
  /** Gets a list of messages that exist on a thread. */
  get(
    options?: AssistantsListMessagesParameters,
  ): StreamableMethod<
    AssistantsListMessages200Response | AssistantsListMessagesDefaultResponse
  >;
}

export interface AssistantsGetMessage {
  /** Gets an existing message from an existing thread. */
  get(
    options?: AssistantsGetMessageParameters,
  ): StreamableMethod<
    AssistantsGetMessage200Response | AssistantsGetMessageDefaultResponse
  >;
  /** Modifies an existing message on an existing thread. */
  post(
    options: AssistantsUpdateMessageParameters,
  ): StreamableMethod<
    AssistantsUpdateMessage200Response | AssistantsUpdateMessageDefaultResponse
  >;
}

export interface AssistantsCreateRun {
  /** Creates a new run for an agent thread. */
  post(
    options: AssistantsCreateRunParameters,
  ): StreamableMethod<
    AssistantsCreateRun200Response | AssistantsCreateRunDefaultResponse
  >;
  /** Gets a list of runs for a specified thread. */
  get(
    options?: AssistantsListRunsParameters,
  ): StreamableMethod<
    AssistantsListRuns200Response | AssistantsListRunsDefaultResponse
  >;
}

export interface AssistantsGetRun {
  /** Gets an existing run from an existing thread. */
  get(
    options?: AssistantsGetRunParameters,
  ): StreamableMethod<
    AssistantsGetRun200Response | AssistantsGetRunDefaultResponse
  >;
  /** Modifies an existing thread run. */
  post(
    options: AssistantsUpdateRunParameters,
  ): StreamableMethod<
    AssistantsUpdateRun200Response | AssistantsUpdateRunDefaultResponse
  >;
}

export interface AssistantsSubmitToolOutputsToRun {
  /** Submits outputs from tools as requested by tool calls in a run. Runs that need submitted tool outputs will have a status of 'requires_action' with a required_action.type of 'submit_tool_outputs'. */
  post(
    options: AssistantsSubmitToolOutputsToRunParameters,
  ): StreamableMethod<
    | AssistantsSubmitToolOutputsToRun200Response
    | AssistantsSubmitToolOutputsToRunDefaultResponse
  >;
}

export interface AssistantsCancelRun {
  /** Cancels a run of an in progress thread. */
  post(
    options?: AssistantsCancelRunParameters,
  ): StreamableMethod<
    AssistantsCancelRun200Response | AssistantsCancelRunDefaultResponse
  >;
}

export interface AssistantsCreateThreadAndRun {
  /** Creates a new agent thread and immediately starts a run using that new thread. */
  post(
    options: AssistantsCreateThreadAndRunParameters,
  ): StreamableMethod<
    | AssistantsCreateThreadAndRun200Response
    | AssistantsCreateThreadAndRunDefaultResponse
  >;
}

export interface AssistantsGetRunStep {
  /** Gets a single run step from a thread run. */
  get(
    options?: AssistantsGetRunStepParameters,
  ): StreamableMethod<
    AssistantsGetRunStep200Response | AssistantsGetRunStepDefaultResponse
  >;
}

export interface AssistantsListRunSteps {
  /** Gets a list of run steps from a thread run. */
  get(
    options?: AssistantsListRunStepsParameters,
  ): StreamableMethod<
    AssistantsListRunSteps200Response | AssistantsListRunStepsDefaultResponse
  >;
}

export interface AssistantsListFiles {
  /** Gets a list of previously uploaded files. */
  get(
    options?: AssistantsListFilesParameters,
  ): StreamableMethod<
    AssistantsListFiles200Response | AssistantsListFilesDefaultResponse
  >;
  /** Uploads a file for use by other operations. */
  post(
    options: AssistantsUploadFileParameters,
  ): StreamableMethod<
    AssistantsUploadFile200Response | AssistantsUploadFileDefaultResponse
  >;
}

export interface AssistantsDeleteFile {
  /** Delete a previously uploaded file. */
  delete(
    options?: AssistantsDeleteFileParameters,
  ): StreamableMethod<
    AssistantsDeleteFile200Response | AssistantsDeleteFileDefaultResponse
  >;
  /** Returns information about a specific file. Does not retrieve file content. */
  get(
    options?: AssistantsGetFileParameters,
  ): StreamableMethod<
    AssistantsGetFile200Response | AssistantsGetFileDefaultResponse
  >;
}

export interface AssistantsGetFileContent {
  /** Retrieves the raw content of a specific file. */
  get(
    options?: AssistantsGetFileContentParameters,
  ): StreamableMethod<
    | AssistantsGetFileContent200Response
    | AssistantsGetFileContentDefaultResponse
  >;
}

export interface AssistantsListVectorStores {
  /** Returns a list of vector stores. */
  get(
    options?: AssistantsListVectorStoresParameters,
  ): StreamableMethod<
    | AssistantsListVectorStores200Response
    | AssistantsListVectorStoresDefaultResponse
  >;
  /** Creates a vector store. */
  post(
    options: AssistantsCreateVectorStoreParameters,
  ): StreamableMethod<
    | AssistantsCreateVectorStore200Response
    | AssistantsCreateVectorStoreDefaultResponse
  >;
}

export interface AssistantsGetVectorStore {
  /** Returns the vector store object matching the specified ID. */
  get(
    options?: AssistantsGetVectorStoreParameters,
  ): StreamableMethod<
    | AssistantsGetVectorStore200Response
    | AssistantsGetVectorStoreDefaultResponse
  >;
  /** The ID of the vector store to modify. */
  post(
    options: AssistantsModifyVectorStoreParameters,
  ): StreamableMethod<
    | AssistantsModifyVectorStore200Response
    | AssistantsModifyVectorStoreDefaultResponse
  >;
  /** Deletes the vector store object matching the specified ID. */
  delete(
    options?: AssistantsDeleteVectorStoreParameters,
  ): StreamableMethod<
    | AssistantsDeleteVectorStore200Response
    | AssistantsDeleteVectorStoreDefaultResponse
  >;
}

export interface AssistantsListVectorStoreFiles {
  /** Returns a list of vector store files. */
  get(
    options?: AssistantsListVectorStoreFilesParameters,
  ): StreamableMethod<
    | AssistantsListVectorStoreFiles200Response
    | AssistantsListVectorStoreFilesDefaultResponse
  >;
  /** Create a vector store file by attaching a file to a vector store. */
  post(
    options: AssistantsCreateVectorStoreFileParameters,
  ): StreamableMethod<
    | AssistantsCreateVectorStoreFile200Response
    | AssistantsCreateVectorStoreFileDefaultResponse
  >;
}

export interface AssistantsGetVectorStoreFile {
  /** Retrieves a vector store file. */
  get(
    options?: AssistantsGetVectorStoreFileParameters,
  ): StreamableMethod<
    | AssistantsGetVectorStoreFile200Response
    | AssistantsGetVectorStoreFileDefaultResponse
  >;
  /**
   * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted.
   * To delete the file, use the delete file endpoint.
   */
  delete(
    options?: AssistantsDeleteVectorStoreFileParameters,
  ): StreamableMethod<
    | AssistantsDeleteVectorStoreFile200Response
    | AssistantsDeleteVectorStoreFileDefaultResponse
  >;
}

export interface AssistantsCreateVectorStoreFileBatch {
  /** Create a vector store file batch. */
  post(
    options: AssistantsCreateVectorStoreFileBatchParameters,
  ): StreamableMethod<
    | AssistantsCreateVectorStoreFileBatch200Response
    | AssistantsCreateVectorStoreFileBatchDefaultResponse
  >;
}

export interface AssistantsGetVectorStoreFileBatch {
  /** Retrieve a vector store file batch. */
  get(
    options?: AssistantsGetVectorStoreFileBatchParameters,
  ): StreamableMethod<
    | AssistantsGetVectorStoreFileBatch200Response
    | AssistantsGetVectorStoreFileBatchDefaultResponse
  >;
}

export interface AssistantsCancelVectorStoreFileBatch {
  /** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
  post(
    options?: AssistantsCancelVectorStoreFileBatchParameters,
  ): StreamableMethod<
    | AssistantsCancelVectorStoreFileBatch200Response
    | AssistantsCancelVectorStoreFileBatchDefaultResponse
  >;
}

export interface AssistantsListVectorStoreFileBatchFiles {
  /** Returns a list of vector store files in a batch. */
  get(
    options?: AssistantsListVectorStoreFileBatchFilesParameters,
  ): StreamableMethod<
    | AssistantsListVectorStoreFileBatchFiles200Response
    | AssistantsListVectorStoreFileBatchFilesDefaultResponse
  >;
}

export interface ConnectionsGet {
  /** Get a connection by name. */
  get(
    options?: ConnectionsGetParameters,
  ): StreamableMethod<
    ConnectionsGet200Response | ConnectionsGetDefaultResponse
  >;
}

export interface ConnectionsList {
  /** List all connections in the project */
  get(
    options?: ConnectionsListParameters,
  ): StreamableMethod<
    ConnectionsList200Response | ConnectionsListDefaultResponse
  >;
}

export interface EvaluationsGet {
  /** Get an evaluation run by name. */
  get(
    options?: EvaluationsGetParameters,
  ): StreamableMethod<
    EvaluationsGet200Response | EvaluationsGetDefaultResponse
  >;
}

export interface EvaluationsList {
  /** List evaluation runs */
  get(
    options?: EvaluationsListParameters,
  ): StreamableMethod<
    EvaluationsList200Response | EvaluationsListDefaultResponse
  >;
}

export interface EvaluationsCreateRun {
  /** Creates an evaluation run. */
  post(
    options: EvaluationsCreateRunParameters,
  ): StreamableMethod<
    EvaluationsCreateRun200Response | EvaluationsCreateRunDefaultResponse
  >;
}

export interface DatasetsListVersions {
  /** List all versions of the given DatasetVersion */
  get(
    options?: DatasetsListVersionsParameters,
  ): StreamableMethod<
    DatasetsListVersions200Response | DatasetsListVersionsDefaultResponse
  >;
  /** Create a new DatasetVersion. The version id will be generated by the service. */
  post(
    options: DatasetsCreateParameters,
  ): StreamableMethod<
    DatasetsCreate200Response | DatasetsCreateDefaultResponse
  >;
}

export interface DatasetsListLatest {
  /** List the latest version of each DatasetVersion */
  get(
    options?: DatasetsListLatestParameters,
  ): StreamableMethod<
    DatasetsListLatest200Response | DatasetsListLatestDefaultResponse
  >;
}

export interface DatasetsGetVersion {
  /** Get the specific version of the DatasetVersion */
  get(
    options?: DatasetsGetVersionParameters,
  ): StreamableMethod<
    DatasetsGetVersion200Response | DatasetsGetVersionDefaultResponse
  >;
  /** Delete the specific version of the DatasetVersion */
  delete(
    options?: DatasetsDeleteVersionParameters,
  ): StreamableMethod<
    DatasetsDeleteVersion204Response | DatasetsDeleteVersionDefaultResponse
  >;
  /** Create a new or replace an existing DatasetVersion with the given version id */
  put(
    options: DatasetsCreateVersionParameters,
  ): StreamableMethod<
    | DatasetsCreateVersion200Response
    | DatasetsCreateVersion201Response
    | DatasetsCreateVersionDefaultResponse
  >;
}

export interface DatasetsStartPendingUpload {
  /** Create or start a pending upload of a dataset for a specific version. */
  post(
    options: DatasetsStartPendingUploadParameters,
  ): StreamableMethod<
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse
  >;
}

export interface DatasetsStartPendingUploadAutoIncrement {
  /** Create or start a pending upload of a dataset. The dataset version will be generated by service. */
  post(
    options: DatasetsStartPendingUploadAutoIncrementParameters,
  ): StreamableMethod<
    | DatasetsStartPendingUploadAutoIncrement200Response
    | DatasetsStartPendingUploadAutoIncrementDefaultResponse
  >;
}

export interface IndexesListVersions {
  /** List all versions of the given Index */
  get(
    options: IndexesListVersionsParameters,
  ): StreamableMethod<
    IndexesListVersions200Response | IndexesListVersionsDefaultResponse
  >;
  /** Create a new Index. The version id will be generated by the service. */
  post(
    options: IndexesCreateParameters,
  ): StreamableMethod<IndexesCreate200Response | IndexesCreateDefaultResponse>;
}

export interface IndexesListLatest {
  /** List the latest version of each Index */
  get(
    options?: IndexesListLatestParameters,
  ): StreamableMethod<
    IndexesListLatest200Response | IndexesListLatestDefaultResponse
  >;
}

export interface IndexesGetVersion {
  /** Get the specific version of the Index */
  get(
    options?: IndexesGetVersionParameters,
  ): StreamableMethod<
    IndexesGetVersion200Response | IndexesGetVersionDefaultResponse
  >;
  /** Delete the specific version of the Index */
  delete(
    options?: IndexesDeleteVersionParameters,
  ): StreamableMethod<
    IndexesDeleteVersion204Response | IndexesDeleteVersionDefaultResponse
  >;
  /** Create a new or replace an existing Index with the given version id */
  put(
    options: IndexesCreateVersionParameters,
  ): StreamableMethod<
    | IndexesCreateVersion200Response
    | IndexesCreateVersion201Response
    | IndexesCreateVersionDefaultResponse
  >;
}

export interface DeploymentsGet {
  /** Get a deployed model. */
  get(
    options?: DeploymentsGetParameters,
  ): StreamableMethod<
    DeploymentsGet200Response | DeploymentsGetDefaultResponse
  >;
}

export interface DeploymentsList {
  /** List all deployed models in the project */
  get(
    options?: DeploymentsListParameters,
  ): StreamableMethod<
    DeploymentsList200Response | DeploymentsListDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/assistants' has methods for the following verbs: post, get */
  (path: "/assistants"): AssistantsCreateAgent;
  /** Resource for '/assistants/\{assistantId\}' has methods for the following verbs: get, post, delete */
  (path: "/assistants/{assistantId}", assistantId: string): AssistantsGetAgent;
  /** Resource for '/threads' has methods for the following verbs: post */
  (path: "/threads"): AssistantsCreateThread;
  /** Resource for '/threads/\{threadId\}' has methods for the following verbs: get, post, delete */
  (path: "/threads/{threadId}", threadId: string): AssistantsGetThread;
  /** Resource for '/threads/\{threadId\}/messages' has methods for the following verbs: post, get */
  (
    path: "/threads/{threadId}/messages",
    threadId: string,
  ): AssistantsCreateMessage;
  /** Resource for '/threads/\{threadId\}/messages/\{messageId\}' has methods for the following verbs: get, post */
  (
    path: "/threads/{threadId}/messages/{messageId}",
    threadId: string,
    messageId: string,
  ): AssistantsGetMessage;
  /** Resource for '/threads/\{threadId\}/runs' has methods for the following verbs: post, get */
  (path: "/threads/{threadId}/runs", threadId: string): AssistantsCreateRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}' has methods for the following verbs: get, post */
  (
    path: "/threads/{threadId}/runs/{runId}",
    threadId: string,
    runId: string,
  ): AssistantsGetRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/submit_tool_outputs' has methods for the following verbs: post */
  (
    path: "/threads/{threadId}/runs/{runId}/submit_tool_outputs",
    threadId: string,
    runId: string,
  ): AssistantsSubmitToolOutputsToRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/cancel' has methods for the following verbs: post */
  (
    path: "/threads/{threadId}/runs/{runId}/cancel",
    threadId: string,
    runId: string,
  ): AssistantsCancelRun;
  /** Resource for '/threads/runs' has methods for the following verbs: post */
  (path: "/threads/runs"): AssistantsCreateThreadAndRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/steps/\{stepId\}' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/runs/{runId}/steps/{stepId}",
    threadId: string,
    runId: string,
    stepId: string,
  ): AssistantsGetRunStep;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/steps' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/runs/{runId}/steps",
    threadId: string,
    runId: string,
  ): AssistantsListRunSteps;
  /** Resource for '/files' has methods for the following verbs: get, post */
  (path: "/files"): AssistantsListFiles;
  /** Resource for '/files/\{fileId\}' has methods for the following verbs: delete, get */
  (path: "/files/{fileId}", fileId: string): AssistantsDeleteFile;
  /** Resource for '/files/\{fileId\}/content' has methods for the following verbs: get */
  (path: "/files/{fileId}/content", fileId: string): AssistantsGetFileContent;
  /** Resource for '/vector_stores' has methods for the following verbs: get, post */
  (path: "/vector_stores"): AssistantsListVectorStores;
  /** Resource for '/vector_stores/\{vectorStoreId\}' has methods for the following verbs: get, post, delete */
  (
    path: "/vector_stores/{vectorStoreId}",
    vectorStoreId: string,
  ): AssistantsGetVectorStore;
  /** Resource for '/vector_stores/\{vectorStoreId\}/files' has methods for the following verbs: get, post */
  (
    path: "/vector_stores/{vectorStoreId}/files",
    vectorStoreId: string,
  ): AssistantsListVectorStoreFiles;
  /** Resource for '/vector_stores/\{vectorStoreId\}/files/\{fileId\}' has methods for the following verbs: get, delete */
  (
    path: "/vector_stores/{vectorStoreId}/files/{fileId}",
    vectorStoreId: string,
    fileId: string,
  ): AssistantsGetVectorStoreFile;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches' has methods for the following verbs: post */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches",
    vectorStoreId: string,
  ): AssistantsCreateVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}' has methods for the following verbs: get */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}",
    vectorStoreId: string,
    batchId: string,
  ): AssistantsGetVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}/cancel' has methods for the following verbs: post */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}/cancel",
    vectorStoreId: string,
    batchId: string,
  ): AssistantsCancelVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}/files' has methods for the following verbs: get */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}/files",
    vectorStoreId: string,
    batchId: string,
  ): AssistantsListVectorStoreFileBatchFiles;
  /** Resource for '/connections/\{connectionName\}' has methods for the following verbs: get */
  (
    path: "/connections/{connectionName}",
    connectionName: string,
  ): ConnectionsGet;
  /** Resource for '/connections' has methods for the following verbs: get */
  (path: "/connections"): ConnectionsList;
  /** Resource for '/evaluations/runs/\{name\}' has methods for the following verbs: get */
  (path: "/evaluations/runs/{name}", name: string): EvaluationsGet;
  /** Resource for '/evaluations/runs' has methods for the following verbs: get */
  (path: "/evaluations/runs"): EvaluationsList;
  /** Resource for '/evaluations/runs:run' has methods for the following verbs: post */
  (path: "/evaluations/runs:run"): EvaluationsCreateRun;
  /** Resource for '/datasets/\{name\}/versions' has methods for the following verbs: get, post */
  (path: "/datasets/{name}/versions", name: string): DatasetsListVersions;
  /** Resource for '/datasets' has methods for the following verbs: get */
  (path: "/datasets"): DatasetsListLatest;
  /** Resource for '/datasets/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put */
  (
    path: "/datasets/{name}/versions/{version}",
    name: string,
    version: string,
  ): DatasetsGetVersion;
  /** Resource for '/datasets/\{name\}/versions/\{version\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/versions/{version}/startPendingUpload",
    name: string,
    version: string,
  ): DatasetsStartPendingUpload;
  /** Resource for '/datasets/\{name\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/startPendingUpload",
    name: string,
  ): DatasetsStartPendingUploadAutoIncrement;
  /** Resource for '/indexes/\{name\}/versions' has methods for the following verbs: get, post */
  (path: "/indexes/{name}/versions", name: string): IndexesListVersions;
  /** Resource for '/indexes' has methods for the following verbs: get */
  (path: "/indexes"): IndexesListLatest;
  /** Resource for '/indexes/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put */
  (
    path: "/indexes/{name}/versions/{version}",
    name: string,
    version: string,
  ): IndexesGetVersion;
  /** Resource for '/deployments/\{name\}' has methods for the following verbs: get */
  (path: "/deployments/{name}", name: string): DeploymentsGet;
  /** Resource for '/deployments' has methods for the following verbs: get */
  (path: "/deployments"): DeploymentsList;
}

export type ProjectsClient = Client & {
  path: Routes;
};
