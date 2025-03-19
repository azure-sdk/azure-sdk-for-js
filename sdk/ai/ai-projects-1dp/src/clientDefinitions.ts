// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  AgentsCreateAgentParameters,
  AgentsListAgentsParameters,
  AgentsGetAgentParameters,
  AgentsUpdateAgentParameters,
  AgentsDeleteAgentParameters,
  AgentsCreateThreadParameters,
  AgentsGetThreadParameters,
  AgentsUpdateThreadParameters,
  AgentsDeleteThreadParameters,
  AgentsCreateMessageParameters,
  AgentsListMessagesParameters,
  AgentsGetMessageParameters,
  AgentsUpdateMessageParameters,
  AgentsCreateRunParameters,
  AgentsListRunsParameters,
  AgentsGetRunParameters,
  AgentsUpdateRunParameters,
  AgentsSubmitToolOutputsToRunParameters,
  AgentsCancelRunParameters,
  AgentsCreateThreadAndRunParameters,
  AgentsGetRunStepParameters,
  AgentsListRunStepsParameters,
  AgentsListFilesParameters,
  AgentsUploadFileParameters,
  AgentsDeleteFileParameters,
  AgentsGetFileParameters,
  AgentsGetFileContentParameters,
  AgentsListVectorStoresParameters,
  AgentsCreateVectorStoreParameters,
  AgentsGetVectorStoreParameters,
  AgentsModifyVectorStoreParameters,
  AgentsDeleteVectorStoreParameters,
  AgentsListVectorStoreFilesParameters,
  AgentsCreateVectorStoreFileParameters,
  AgentsGetVectorStoreFileParameters,
  AgentsDeleteVectorStoreFileParameters,
  AgentsCreateVectorStoreFileBatchParameters,
  AgentsGetVectorStoreFileBatchParameters,
  AgentsCancelVectorStoreFileBatchParameters,
  AgentsListVectorStoreFileBatchFilesParameters,
  ConnectionsGetParameters,
  ConnectionsListParameters,
  EvaluationsGetParameters,
  EvaluationsListParameters,
  EvaluationsCreateRunParameters,
  DatasetsListLatestDatasetsParameters,
  DatasetsListDatasetVersionsParameters,
  DatasetsDeleteVersionParameters,
  DatasetsGetVersionParameters,
  DatasetsCreateOrUpdateParameters,
  DatasetsCreateOrGetStartPendingUploadParameters,
  IndexesListLatestIndexesParameters,
  IndexesGetParameters,
  IndexesDeleteVersionParameters,
  IndexesCreateIndexParameters,
  IndexesListIndexVersionsParameters,
  DeploymentsGetParameters,
  DeploymentsListParameters,
} from "./parameters.js";
import type {
  AgentsCreateAgent200Response,
  AgentsCreateAgentDefaultResponse,
  AgentsListAgents200Response,
  AgentsListAgentsDefaultResponse,
  AgentsGetAgent200Response,
  AgentsGetAgentDefaultResponse,
  AgentsUpdateAgent200Response,
  AgentsUpdateAgentDefaultResponse,
  AgentsDeleteAgent200Response,
  AgentsDeleteAgentDefaultResponse,
  AgentsCreateThread200Response,
  AgentsCreateThreadDefaultResponse,
  AgentsGetThread200Response,
  AgentsGetThreadDefaultResponse,
  AgentsUpdateThread200Response,
  AgentsUpdateThreadDefaultResponse,
  AgentsDeleteThread200Response,
  AgentsDeleteThreadDefaultResponse,
  AgentsCreateMessage200Response,
  AgentsCreateMessageDefaultResponse,
  AgentsListMessages200Response,
  AgentsListMessagesDefaultResponse,
  AgentsGetMessage200Response,
  AgentsGetMessageDefaultResponse,
  AgentsUpdateMessage200Response,
  AgentsUpdateMessageDefaultResponse,
  AgentsCreateRun200Response,
  AgentsCreateRunDefaultResponse,
  AgentsListRuns200Response,
  AgentsListRunsDefaultResponse,
  AgentsGetRun200Response,
  AgentsGetRunDefaultResponse,
  AgentsUpdateRun200Response,
  AgentsUpdateRunDefaultResponse,
  AgentsSubmitToolOutputsToRun200Response,
  AgentsSubmitToolOutputsToRunDefaultResponse,
  AgentsCancelRun200Response,
  AgentsCancelRunDefaultResponse,
  AgentsCreateThreadAndRun200Response,
  AgentsCreateThreadAndRunDefaultResponse,
  AgentsGetRunStep200Response,
  AgentsGetRunStepDefaultResponse,
  AgentsListRunSteps200Response,
  AgentsListRunStepsDefaultResponse,
  AgentsListFiles200Response,
  AgentsListFilesDefaultResponse,
  AgentsUploadFile200Response,
  AgentsUploadFileDefaultResponse,
  AgentsDeleteFile200Response,
  AgentsDeleteFileDefaultResponse,
  AgentsGetFile200Response,
  AgentsGetFileDefaultResponse,
  AgentsGetFileContent200Response,
  AgentsGetFileContentDefaultResponse,
  AgentsListVectorStores200Response,
  AgentsListVectorStoresDefaultResponse,
  AgentsCreateVectorStore200Response,
  AgentsCreateVectorStoreDefaultResponse,
  AgentsGetVectorStore200Response,
  AgentsGetVectorStoreDefaultResponse,
  AgentsModifyVectorStore200Response,
  AgentsModifyVectorStoreDefaultResponse,
  AgentsDeleteVectorStore200Response,
  AgentsDeleteVectorStoreDefaultResponse,
  AgentsListVectorStoreFiles200Response,
  AgentsListVectorStoreFilesDefaultResponse,
  AgentsCreateVectorStoreFile200Response,
  AgentsCreateVectorStoreFileDefaultResponse,
  AgentsGetVectorStoreFile200Response,
  AgentsGetVectorStoreFileDefaultResponse,
  AgentsDeleteVectorStoreFile200Response,
  AgentsDeleteVectorStoreFileDefaultResponse,
  AgentsCreateVectorStoreFileBatch200Response,
  AgentsCreateVectorStoreFileBatchDefaultResponse,
  AgentsGetVectorStoreFileBatch200Response,
  AgentsGetVectorStoreFileBatchDefaultResponse,
  AgentsCancelVectorStoreFileBatch200Response,
  AgentsCancelVectorStoreFileBatchDefaultResponse,
  AgentsListVectorStoreFileBatchFiles200Response,
  AgentsListVectorStoreFileBatchFilesDefaultResponse,
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
  DatasetsListLatestDatasets200Response,
  DatasetsListDatasetVersions200Response,
  DatasetsDeleteVersion204Response,
  DatasetsGetVersion200Response,
  DatasetsCreateOrUpdate200Response,
  DatasetsCreateOrGetStartPendingUpload200Response,
  IndexesListLatestIndexes200Response,
  IndexesGet200Response,
  IndexesGetDefaultResponse,
  IndexesDeleteVersion204Response,
  IndexesCreateIndex200Response,
  IndexesCreateIndex201Response,
  IndexesCreateIndexDefaultResponse,
  IndexesListIndexVersions200Response,
  IndexesListIndexVersionsDefaultResponse,
  DeploymentsGet200Response,
  DeploymentsGetDefaultResponse,
  DeploymentsList200Response,
  DeploymentsListDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AgentsCreateAgent {
  /** Creates a new agent. */
  post(
    options: AgentsCreateAgentParameters,
  ): StreamableMethod<
    AgentsCreateAgent200Response | AgentsCreateAgentDefaultResponse
  >;
  /** Gets a list of agents that were previously created. */
  get(
    options?: AgentsListAgentsParameters,
  ): StreamableMethod<
    AgentsListAgents200Response | AgentsListAgentsDefaultResponse
  >;
}

export interface AgentsGetAgent {
  /** Retrieves an existing agent. */
  get(
    options?: AgentsGetAgentParameters,
  ): StreamableMethod<
    AgentsGetAgent200Response | AgentsGetAgentDefaultResponse
  >;
  /** Modifies an existing agent. */
  post(
    options: AgentsUpdateAgentParameters,
  ): StreamableMethod<
    AgentsUpdateAgent200Response | AgentsUpdateAgentDefaultResponse
  >;
  /** Deletes an agent. */
  delete(
    options?: AgentsDeleteAgentParameters,
  ): StreamableMethod<
    AgentsDeleteAgent200Response | AgentsDeleteAgentDefaultResponse
  >;
}

export interface AgentsCreateThread {
  /** Creates a new thread. Threads contain messages and can be run by agents. */
  post(
    options: AgentsCreateThreadParameters,
  ): StreamableMethod<
    AgentsCreateThread200Response | AgentsCreateThreadDefaultResponse
  >;
}

export interface AgentsGetThread {
  /** Gets information about an existing thread. */
  get(
    options?: AgentsGetThreadParameters,
  ): StreamableMethod<
    AgentsGetThread200Response | AgentsGetThreadDefaultResponse
  >;
  /** Modifies an existing thread. */
  post(
    options: AgentsUpdateThreadParameters,
  ): StreamableMethod<
    AgentsUpdateThread200Response | AgentsUpdateThreadDefaultResponse
  >;
  /** Deletes an existing thread. */
  delete(
    options?: AgentsDeleteThreadParameters,
  ): StreamableMethod<
    AgentsDeleteThread200Response | AgentsDeleteThreadDefaultResponse
  >;
}

export interface AgentsCreateMessage {
  /** Creates a new message on a specified thread. */
  post(
    options: AgentsCreateMessageParameters,
  ): StreamableMethod<
    AgentsCreateMessage200Response | AgentsCreateMessageDefaultResponse
  >;
  /** Gets a list of messages that exist on a thread. */
  get(
    options?: AgentsListMessagesParameters,
  ): StreamableMethod<
    AgentsListMessages200Response | AgentsListMessagesDefaultResponse
  >;
}

export interface AgentsGetMessage {
  /** Gets an existing message from an existing thread. */
  get(
    options?: AgentsGetMessageParameters,
  ): StreamableMethod<
    AgentsGetMessage200Response | AgentsGetMessageDefaultResponse
  >;
  /** Modifies an existing message on an existing thread. */
  post(
    options: AgentsUpdateMessageParameters,
  ): StreamableMethod<
    AgentsUpdateMessage200Response | AgentsUpdateMessageDefaultResponse
  >;
}

export interface AgentsCreateRun {
  /** Creates a new run for an agent thread. */
  post(
    options: AgentsCreateRunParameters,
  ): StreamableMethod<
    AgentsCreateRun200Response | AgentsCreateRunDefaultResponse
  >;
  /** Gets a list of runs for a specified thread. */
  get(
    options?: AgentsListRunsParameters,
  ): StreamableMethod<
    AgentsListRuns200Response | AgentsListRunsDefaultResponse
  >;
}

export interface AgentsGetRun {
  /** Gets an existing run from an existing thread. */
  get(
    options?: AgentsGetRunParameters,
  ): StreamableMethod<AgentsGetRun200Response | AgentsGetRunDefaultResponse>;
  /** Modifies an existing thread run. */
  post(
    options: AgentsUpdateRunParameters,
  ): StreamableMethod<
    AgentsUpdateRun200Response | AgentsUpdateRunDefaultResponse
  >;
}

export interface AgentsSubmitToolOutputsToRun {
  /** Submits outputs from tools as requested by tool calls in a run. Runs that need submitted tool outputs will have a status of 'requires_action' with a required_action.type of 'submit_tool_outputs'. */
  post(
    options: AgentsSubmitToolOutputsToRunParameters,
  ): StreamableMethod<
    | AgentsSubmitToolOutputsToRun200Response
    | AgentsSubmitToolOutputsToRunDefaultResponse
  >;
}

export interface AgentsCancelRun {
  /** Cancels a run of an in progress thread. */
  post(
    options?: AgentsCancelRunParameters,
  ): StreamableMethod<
    AgentsCancelRun200Response | AgentsCancelRunDefaultResponse
  >;
}

export interface AgentsCreateThreadAndRun {
  /** Creates a new agent thread and immediately starts a run using that new thread. */
  post(
    options: AgentsCreateThreadAndRunParameters,
  ): StreamableMethod<
    | AgentsCreateThreadAndRun200Response
    | AgentsCreateThreadAndRunDefaultResponse
  >;
}

export interface AgentsGetRunStep {
  /** Gets a single run step from a thread run. */
  get(
    options?: AgentsGetRunStepParameters,
  ): StreamableMethod<
    AgentsGetRunStep200Response | AgentsGetRunStepDefaultResponse
  >;
}

export interface AgentsListRunSteps {
  /** Gets a list of run steps from a thread run. */
  get(
    options?: AgentsListRunStepsParameters,
  ): StreamableMethod<
    AgentsListRunSteps200Response | AgentsListRunStepsDefaultResponse
  >;
}

export interface AgentsListFiles {
  /** Gets a list of previously uploaded files. */
  get(
    options?: AgentsListFilesParameters,
  ): StreamableMethod<
    AgentsListFiles200Response | AgentsListFilesDefaultResponse
  >;
  /** Uploads a file for use by other operations. */
  post(
    options: AgentsUploadFileParameters,
  ): StreamableMethod<
    AgentsUploadFile200Response | AgentsUploadFileDefaultResponse
  >;
}

export interface AgentsDeleteFile {
  /** Delete a previously uploaded file. */
  delete(
    options?: AgentsDeleteFileParameters,
  ): StreamableMethod<
    AgentsDeleteFile200Response | AgentsDeleteFileDefaultResponse
  >;
  /** Returns information about a specific file. Does not retrieve file content. */
  get(
    options?: AgentsGetFileParameters,
  ): StreamableMethod<AgentsGetFile200Response | AgentsGetFileDefaultResponse>;
}

export interface AgentsGetFileContent {
  /** Retrieves the raw content of a specific file. */
  get(
    options?: AgentsGetFileContentParameters,
  ): StreamableMethod<
    AgentsGetFileContent200Response | AgentsGetFileContentDefaultResponse
  >;
}

export interface AgentsListVectorStores {
  /** Returns a list of vector stores. */
  get(
    options?: AgentsListVectorStoresParameters,
  ): StreamableMethod<
    AgentsListVectorStores200Response | AgentsListVectorStoresDefaultResponse
  >;
  /** Creates a vector store. */
  post(
    options: AgentsCreateVectorStoreParameters,
  ): StreamableMethod<
    AgentsCreateVectorStore200Response | AgentsCreateVectorStoreDefaultResponse
  >;
}

export interface AgentsGetVectorStore {
  /** Returns the vector store object matching the specified ID. */
  get(
    options?: AgentsGetVectorStoreParameters,
  ): StreamableMethod<
    AgentsGetVectorStore200Response | AgentsGetVectorStoreDefaultResponse
  >;
  /** The ID of the vector store to modify. */
  post(
    options: AgentsModifyVectorStoreParameters,
  ): StreamableMethod<
    AgentsModifyVectorStore200Response | AgentsModifyVectorStoreDefaultResponse
  >;
  /** Deletes the vector store object matching the specified ID. */
  delete(
    options?: AgentsDeleteVectorStoreParameters,
  ): StreamableMethod<
    AgentsDeleteVectorStore200Response | AgentsDeleteVectorStoreDefaultResponse
  >;
}

export interface AgentsListVectorStoreFiles {
  /** Returns a list of vector store files. */
  get(
    options?: AgentsListVectorStoreFilesParameters,
  ): StreamableMethod<
    | AgentsListVectorStoreFiles200Response
    | AgentsListVectorStoreFilesDefaultResponse
  >;
  /** Create a vector store file by attaching a file to a vector store. */
  post(
    options: AgentsCreateVectorStoreFileParameters,
  ): StreamableMethod<
    | AgentsCreateVectorStoreFile200Response
    | AgentsCreateVectorStoreFileDefaultResponse
  >;
}

export interface AgentsGetVectorStoreFile {
  /** Retrieves a vector store file. */
  get(
    options?: AgentsGetVectorStoreFileParameters,
  ): StreamableMethod<
    | AgentsGetVectorStoreFile200Response
    | AgentsGetVectorStoreFileDefaultResponse
  >;
  /**
   * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted.
   * To delete the file, use the delete file endpoint.
   */
  delete(
    options?: AgentsDeleteVectorStoreFileParameters,
  ): StreamableMethod<
    | AgentsDeleteVectorStoreFile200Response
    | AgentsDeleteVectorStoreFileDefaultResponse
  >;
}

export interface AgentsCreateVectorStoreFileBatch {
  /** Create a vector store file batch. */
  post(
    options: AgentsCreateVectorStoreFileBatchParameters,
  ): StreamableMethod<
    | AgentsCreateVectorStoreFileBatch200Response
    | AgentsCreateVectorStoreFileBatchDefaultResponse
  >;
}

export interface AgentsGetVectorStoreFileBatch {
  /** Retrieve a vector store file batch. */
  get(
    options?: AgentsGetVectorStoreFileBatchParameters,
  ): StreamableMethod<
    | AgentsGetVectorStoreFileBatch200Response
    | AgentsGetVectorStoreFileBatchDefaultResponse
  >;
}

export interface AgentsCancelVectorStoreFileBatch {
  /** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
  post(
    options?: AgentsCancelVectorStoreFileBatchParameters,
  ): StreamableMethod<
    | AgentsCancelVectorStoreFileBatch200Response
    | AgentsCancelVectorStoreFileBatchDefaultResponse
  >;
}

export interface AgentsListVectorStoreFileBatchFiles {
  /** Returns a list of vector store files in a batch. */
  get(
    options?: AgentsListVectorStoreFileBatchFilesParameters,
  ): StreamableMethod<
    | AgentsListVectorStoreFileBatchFiles200Response
    | AgentsListVectorStoreFileBatchFilesDefaultResponse
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

export interface DatasetsListLatestDatasets {
  /** List latest version of each dataset in a project. */
  get(
    options?: DatasetsListLatestDatasetsParameters,
  ): StreamableMethod<DatasetsListLatestDatasets200Response>;
}

export interface DatasetsListDatasetVersions {
  /** List dataset versions of a specific dataset */
  get(
    options?: DatasetsListDatasetVersionsParameters,
  ): StreamableMethod<DatasetsListDatasetVersions200Response>;
}

export interface DatasetsDeleteVersion {
  /** Delete version. */
  delete(
    options?: DatasetsDeleteVersionParameters,
  ): StreamableMethod<DatasetsDeleteVersion204Response>;
  /** Get dataset version. */
  get(
    options?: DatasetsGetVersionParameters,
  ): StreamableMethod<DatasetsGetVersion200Response>;
  /** Create or update version. */
  put(
    options: DatasetsCreateOrUpdateParameters,
  ): StreamableMethod<DatasetsCreateOrUpdate200Response>;
}

export interface DatasetsCreateOrGetStartPendingUpload {
  /** Start pending upload. */
  post(
    options: DatasetsCreateOrGetStartPendingUploadParameters,
  ): StreamableMethod<DatasetsCreateOrGetStartPendingUpload200Response>;
}

export interface IndexesListLatestIndexes {
  /** List latest version of each dataset in a project. */
  get(
    options?: IndexesListLatestIndexesParameters,
  ): StreamableMethod<IndexesListLatestIndexes200Response>;
}

export interface IndexesGet {
  /** Get a specific version of an Index. */
  get(
    options?: IndexesGetParameters,
  ): StreamableMethod<IndexesGet200Response | IndexesGetDefaultResponse>;
  /** Delete version. */
  delete(
    options?: IndexesDeleteVersionParameters,
  ): StreamableMethod<IndexesDeleteVersion204Response>;
}

export interface IndexesCreateIndex {
  /** Creates or updates a IndexVersion. */
  post(
    options: IndexesCreateIndexParameters,
  ): StreamableMethod<
    | IndexesCreateIndex200Response
    | IndexesCreateIndex201Response
    | IndexesCreateIndexDefaultResponse
  >;
}

export interface IndexesListIndexVersions {
  /** List the versions of an Index given the name. */
  get(
    options: IndexesListIndexVersionsParameters,
  ): StreamableMethod<
    | IndexesListIndexVersions200Response
    | IndexesListIndexVersionsDefaultResponse
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
  (path: "/assistants"): AgentsCreateAgent;
  /** Resource for '/assistants/\{assistantId\}' has methods for the following verbs: get, post, delete */
  (path: "/assistants/{assistantId}", assistantId: string): AgentsGetAgent;
  /** Resource for '/threads' has methods for the following verbs: post */
  (path: "/threads"): AgentsCreateThread;
  /** Resource for '/threads/\{threadId\}' has methods for the following verbs: get, post, delete */
  (path: "/threads/{threadId}", threadId: string): AgentsGetThread;
  /** Resource for '/threads/\{threadId\}/messages' has methods for the following verbs: post, get */
  (path: "/threads/{threadId}/messages", threadId: string): AgentsCreateMessage;
  /** Resource for '/threads/\{threadId\}/messages/\{messageId\}' has methods for the following verbs: get, post */
  (
    path: "/threads/{threadId}/messages/{messageId}",
    threadId: string,
    messageId: string,
  ): AgentsGetMessage;
  /** Resource for '/threads/\{threadId\}/runs' has methods for the following verbs: post, get */
  (path: "/threads/{threadId}/runs", threadId: string): AgentsCreateRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}' has methods for the following verbs: get, post */
  (
    path: "/threads/{threadId}/runs/{runId}",
    threadId: string,
    runId: string,
  ): AgentsGetRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/submit_tool_outputs' has methods for the following verbs: post */
  (
    path: "/threads/{threadId}/runs/{runId}/submit_tool_outputs",
    threadId: string,
    runId: string,
  ): AgentsSubmitToolOutputsToRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/cancel' has methods for the following verbs: post */
  (
    path: "/threads/{threadId}/runs/{runId}/cancel",
    threadId: string,
    runId: string,
  ): AgentsCancelRun;
  /** Resource for '/threads/runs' has methods for the following verbs: post */
  (path: "/threads/runs"): AgentsCreateThreadAndRun;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/steps/\{stepId\}' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/runs/{runId}/steps/{stepId}",
    threadId: string,
    runId: string,
    stepId: string,
  ): AgentsGetRunStep;
  /** Resource for '/threads/\{threadId\}/runs/\{runId\}/steps' has methods for the following verbs: get */
  (
    path: "/threads/{threadId}/runs/{runId}/steps",
    threadId: string,
    runId: string,
  ): AgentsListRunSteps;
  /** Resource for '/files' has methods for the following verbs: get, post */
  (path: "/files"): AgentsListFiles;
  /** Resource for '/files/\{fileId\}' has methods for the following verbs: delete, get */
  (path: "/files/{fileId}", fileId: string): AgentsDeleteFile;
  /** Resource for '/files/\{fileId\}/content' has methods for the following verbs: get */
  (path: "/files/{fileId}/content", fileId: string): AgentsGetFileContent;
  /** Resource for '/vector_stores' has methods for the following verbs: get, post */
  (path: "/vector_stores"): AgentsListVectorStores;
  /** Resource for '/vector_stores/\{vectorStoreId\}' has methods for the following verbs: get, post, delete */
  (
    path: "/vector_stores/{vectorStoreId}",
    vectorStoreId: string,
  ): AgentsGetVectorStore;
  /** Resource for '/vector_stores/\{vectorStoreId\}/files' has methods for the following verbs: get, post */
  (
    path: "/vector_stores/{vectorStoreId}/files",
    vectorStoreId: string,
  ): AgentsListVectorStoreFiles;
  /** Resource for '/vector_stores/\{vectorStoreId\}/files/\{fileId\}' has methods for the following verbs: get, delete */
  (
    path: "/vector_stores/{vectorStoreId}/files/{fileId}",
    vectorStoreId: string,
    fileId: string,
  ): AgentsGetVectorStoreFile;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches' has methods for the following verbs: post */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches",
    vectorStoreId: string,
  ): AgentsCreateVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}' has methods for the following verbs: get */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}",
    vectorStoreId: string,
    batchId: string,
  ): AgentsGetVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}/cancel' has methods for the following verbs: post */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}/cancel",
    vectorStoreId: string,
    batchId: string,
  ): AgentsCancelVectorStoreFileBatch;
  /** Resource for '/vector_stores/\{vectorStoreId\}/file_batches/\{batchId\}/files' has methods for the following verbs: get */
  (
    path: "/vector_stores/{vectorStoreId}/file_batches/{batchId}/files",
    vectorStoreId: string,
    batchId: string,
  ): AgentsListVectorStoreFileBatchFiles;
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
  /** Resource for '/datasets' has methods for the following verbs: get */
  (path: "/datasets"): DatasetsListLatestDatasets;
  /** Resource for '/datasets/\{name\}/versions' has methods for the following verbs: get */
  (
    path: "/datasets/{name}/versions",
    name: string,
  ): DatasetsListDatasetVersions;
  /** Resource for '/datasets/\{name\}/versions/\{version\}' has methods for the following verbs: delete, get, put */
  (
    path: "/datasets/{name}/versions/{version}",
    name: string,
    version: string,
  ): DatasetsDeleteVersion;
  /** Resource for '/datasets/\{name\}/versions/\{version\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/versions/{version}/startPendingUpload",
    name: string,
    version: string,
  ): DatasetsCreateOrGetStartPendingUpload;
  /** Resource for '/indexes' has methods for the following verbs: get */
  (path: "/indexes"): IndexesListLatestIndexes;
  /** Resource for '/indexes/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete */
  (
    path: "/indexes/{name}/versions/{version}",
    name: string,
    version: string,
  ): IndexesGet;
  /** Resource for '/indexes/\{name\}:create' has methods for the following verbs: post */
  (path: "/indexes/{name}:create", name: string): IndexesCreateIndex;
  /** Resource for '/indexes/\{name\}/versions' has methods for the following verbs: get */
  (path: "/indexes/{name}/versions", name: string): IndexesListIndexVersions;
  /** Resource for '/deployments/\{name\}' has methods for the following verbs: get */
  (path: "/deployments/{name}", name: string): DeploymentsGet;
  /** Resource for '/deployments' has methods for the following verbs: get */
  (path: "/deployments"): DeploymentsList;
}

export type ProjectsClient = Client & {
  path: Routes;
};
