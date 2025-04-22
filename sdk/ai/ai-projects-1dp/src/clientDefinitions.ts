// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  MessagesSendMessageParameters,
  MessagesGetMessageParameters,
  MessagesUpdateMessageParameters,
  MessagesDeleteMessageParameters,
  MessagesListMessagesParameters,
  ConversationsCreateConversationParameters,
  ConversationsListConversationsParameters,
  ConversationsGetConversationParameters,
  ConversationsUpdateConversationParameters,
  ConversationsDeleteConversationParameters,
  AgentsCreateAgentParameters,
  AgentsListAgentsParameters,
  AgentsGetAgentParameters,
  AgentsUpdateAgentParameters,
  AgentsDeleteAgentParameters,
  AgentsRunParameters,
  AgentsStreamParameters,
  AgentsGetRunParameters,
  AgentsListRunsParameters,
  AgentsListRunInputsParameters,
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
  MessagesSendMessage200Response,
  MessagesSendMessageDefaultResponse,
  MessagesGetMessage200Response,
  MessagesGetMessageDefaultResponse,
  MessagesUpdateMessage200Response,
  MessagesUpdateMessage201Response,
  MessagesUpdateMessageDefaultResponse,
  MessagesDeleteMessage204Response,
  MessagesDeleteMessageDefaultResponse,
  MessagesListMessages200Response,
  MessagesListMessagesDefaultResponse,
  ConversationsCreateConversation200Response,
  ConversationsCreateConversationDefaultResponse,
  ConversationsListConversations200Response,
  ConversationsListConversationsDefaultResponse,
  ConversationsGetConversation200Response,
  ConversationsGetConversationDefaultResponse,
  ConversationsUpdateConversation200Response,
  ConversationsUpdateConversationDefaultResponse,
  ConversationsDeleteConversation204Response,
  ConversationsDeleteConversationDefaultResponse,
  AgentsCreateAgent200Response,
  AgentsCreateAgentDefaultResponse,
  AgentsListAgents200Response,
  AgentsListAgentsDefaultResponse,
  AgentsGetAgent200Response,
  AgentsGetAgentDefaultResponse,
  AgentsUpdateAgent200Response,
  AgentsUpdateAgentDefaultResponse,
  AgentsDeleteAgent204Response,
  AgentsDeleteAgentDefaultResponse,
  AgentsRun200Response,
  AgentsRunDefaultResponse,
  AgentsStream200Response,
  AgentsStreamDefaultResponse,
  AgentsGetRun200Response,
  AgentsGetRunDefaultResponse,
  AgentsListRuns200Response,
  AgentsListRunsDefaultResponse,
  AgentsListRunInputs200Response,
  AgentsListRunInputsDefaultResponse,
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

export interface MessagesSendMessage {
  /** Creates (sends) a new chat message, returning the created ChatMessage. */
  post(
    options: MessagesSendMessageParameters,
  ): StreamableMethod<
    MessagesSendMessage200Response | MessagesSendMessageDefaultResponse
  >;
}

export interface MessagesGetMessage {
  /** Retrieves (reads) an existing chat message. */
  get(
    options?: MessagesGetMessageParameters,
  ): StreamableMethod<
    MessagesGetMessage200Response | MessagesGetMessageDefaultResponse
  >;
  /** Updates an existing chat message (or creates if not found) and returns the updated message. */
  put(
    options: MessagesUpdateMessageParameters,
  ): StreamableMethod<
    | MessagesUpdateMessage200Response
    | MessagesUpdateMessage201Response
    | MessagesUpdateMessageDefaultResponse
  >;
  /** Deletes a chat message. Returns 204 on success. */
  delete(
    options?: MessagesDeleteMessageParameters,
  ): StreamableMethod<
    MessagesDeleteMessage204Response | MessagesDeleteMessageDefaultResponse
  >;
}

export interface MessagesListMessages {
  /** Lists chat messages, returning a collection of ChatMessage objects. */
  get(
    options?: MessagesListMessagesParameters,
  ): StreamableMethod<
    MessagesListMessages200Response | MessagesListMessagesDefaultResponse
  >;
}

export interface ConversationsCreateConversation {
  /** Creates a new Conversation and returns it. */
  post(
    options: ConversationsCreateConversationParameters,
  ): StreamableMethod<
    | ConversationsCreateConversation200Response
    | ConversationsCreateConversationDefaultResponse
  >;
  /** Lists all conversations, returning an array of Conversation items. */
  get(
    options?: ConversationsListConversationsParameters,
  ): StreamableMethod<
    | ConversationsListConversations200Response
    | ConversationsListConversationsDefaultResponse
  >;
}

export interface ConversationsGetConversation {
  /** Retrieves an existing conversation by its ID. */
  get(
    options?: ConversationsGetConversationParameters,
  ): StreamableMethod<
    | ConversationsGetConversation200Response
    | ConversationsGetConversationDefaultResponse
  >;
  /** Updates or replaces a conversation by its ID, returning the updated Conversation. */
  put(
    options: ConversationsUpdateConversationParameters,
  ): StreamableMethod<
    | ConversationsUpdateConversation200Response
    | ConversationsUpdateConversationDefaultResponse
  >;
  /** Deletes a conversation, returning 204 on success. */
  delete(
    options?: ConversationsDeleteConversationParameters,
  ): StreamableMethod<
    | ConversationsDeleteConversation204Response
    | ConversationsDeleteConversationDefaultResponse
  >;
}

export interface AgentsCreateAgent {
  /** Creates a new Agent resource and returns it. */
  post(
    options: AgentsCreateAgentParameters,
  ): StreamableMethod<
    AgentsCreateAgent200Response | AgentsCreateAgentDefaultResponse
  >;
  /** Lists all Agents, returning an array of Agent objects. */
  get(
    options?: AgentsListAgentsParameters,
  ): StreamableMethod<
    AgentsListAgents200Response | AgentsListAgentsDefaultResponse
  >;
}

export interface AgentsGetAgent {
  /** Retrieves an existing Agent by its ID. */
  get(
    options?: AgentsGetAgentParameters,
  ): StreamableMethod<
    AgentsGetAgent200Response | AgentsGetAgentDefaultResponse
  >;
  /** Updates or replaces an agent and returns the updated resource. */
  put(
    options: AgentsUpdateAgentParameters,
  ): StreamableMethod<
    AgentsUpdateAgent200Response | AgentsUpdateAgentDefaultResponse
  >;
  /** Deletes an Agent by its ID, returning 204 on success. */
  delete(
    options?: AgentsDeleteAgentParameters,
  ): StreamableMethod<
    AgentsDeleteAgent204Response | AgentsDeleteAgentDefaultResponse
  >;
}

export interface AgentsRun {
  /** Creates and waits for a run to finish, returning the completed Run (including its outputs). */
  post(
    options: AgentsRunParameters,
  ): StreamableMethod<AgentsRun200Response | AgentsRunDefaultResponse>;
}

export interface AgentsStream {
  /** The most basic operation. */
  post(
    options: AgentsStreamParameters,
  ): StreamableMethod<AgentsStream200Response | AgentsStreamDefaultResponse>;
}

export interface AgentsGetRun {
  /**
   * Retrieves an existing run by its ID.
   * @route("/conversations/runs/{run_id}")
   */
  get(
    options?: AgentsGetRunParameters,
  ): StreamableMethod<AgentsGetRun200Response | AgentsGetRunDefaultResponse>;
}

export interface AgentsListRuns {
  /**
   * Lists all run records, each containing runInputs and runOutputs.
   * @route("/agents/runs")
   */
  get(
    options?: AgentsListRunsParameters,
  ): StreamableMethod<
    AgentsListRuns200Response | AgentsListRunsDefaultResponse
  >;
}

export interface AgentsListRunInputs {
  /** Lists the inputs for a specific run by its ID. */
  get(
    options?: AgentsListRunInputsParameters,
  ): StreamableMethod<
    AgentsListRunInputs200Response | AgentsListRunInputsDefaultResponse
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
    options?: IndexesListVersionsParameters,
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
  /** Resource for '/conversations/\{conversationId\}/messages' has methods for the following verbs: post */
  (
    path: "/conversations/{conversationId}/messages",
    conversationId: string,
  ): MessagesSendMessage;
  /** Resource for '/conversations/\{conversationId\}/message/\{messageId\}' has methods for the following verbs: get, put, delete */
  (
    path: "/conversations/{conversationId}/message/{messageId}",
    conversationId: string,
    messageId: string,
  ): MessagesGetMessage;
  /** Resource for '/conversations/\{conversationId\}/message' has methods for the following verbs: get */
  (
    path: "/conversations/{conversationId}/message",
    conversationId: string,
  ): MessagesListMessages;
  /** Resource for '/conversations' has methods for the following verbs: post, get */
  (path: "/conversations"): ConversationsCreateConversation;
  /** Resource for '/conversations/\{conversationId\}' has methods for the following verbs: get, put, delete */
  (
    path: "/conversations/{conversationId}",
    conversationId: string,
  ): ConversationsGetConversation;
  /** Resource for '/agents' has methods for the following verbs: post, get */
  (path: "/agents"): AgentsCreateAgent;
  /** Resource for '/agents/\{agentId\}' has methods for the following verbs: get, put, delete */
  (path: "/agents/{agentId}", agentId: string): AgentsGetAgent;
  /** Resource for '/conversations/runs' has methods for the following verbs: post */
  (path: "/conversations/runs"): AgentsRun;
  /** Resource for '/conversations/runs/stream' has methods for the following verbs: post */
  (path: "/conversations/runs/stream"): AgentsStream;
  /** Resource for '/runs/\{runId\}' has methods for the following verbs: get */
  (path: "/runs/{runId}", runId: string): AgentsGetRun;
  /** Resource for '/runs' has methods for the following verbs: get */
  (path: "/runs"): AgentsListRuns;
  /** Resource for '/conversations/runs/\{runId\}/listInputs' has methods for the following verbs: get */
  (
    path: "/conversations/runs/{runId}/listInputs",
    runId: string,
  ): AgentsListRunInputs;
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
