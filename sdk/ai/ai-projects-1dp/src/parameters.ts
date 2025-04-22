// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  ChatMessage,
  Conversation,
  AgentConfigurationOptions,
  Agent,
  RunInputs,
  ConnectionType,
  Evaluation,
  ListViewType,
  DatasetVersion,
  PendingUploadRequest,
  Index,
} from "./models.js";

export interface MessagesSendMessageBodyParam {
  /** The message to create. */
  body: ChatMessage;
}

export type MessagesSendMessageParameters = MessagesSendMessageBodyParam &
  RequestParameters;

export interface MessagesGetMessageHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface MessagesGetMessageHeaderParam {
  headers?: RawHttpHeadersInput & MessagesGetMessageHeaders;
}

export type MessagesGetMessageParameters = MessagesGetMessageHeaderParam &
  RequestParameters;

export interface MessagesUpdateMessageHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface MessagesUpdateMessageBodyParam {
  /** The resource instance. */
  body: ChatMessage;
}

export interface MessagesUpdateMessageHeaderParam {
  headers?: RawHttpHeadersInput & MessagesUpdateMessageHeaders;
}

export type MessagesUpdateMessageParameters = MessagesUpdateMessageHeaderParam &
  MessagesUpdateMessageBodyParam &
  RequestParameters;

export interface MessagesDeleteMessageHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface MessagesDeleteMessageHeaderParam {
  headers?: RawHttpHeadersInput & MessagesDeleteMessageHeaders;
}

export type MessagesDeleteMessageParameters = MessagesDeleteMessageHeaderParam &
  RequestParameters;

export interface MessagesListMessagesHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface MessagesListMessagesHeaderParam {
  headers?: RawHttpHeadersInput & MessagesListMessagesHeaders;
}

export type MessagesListMessagesParameters = MessagesListMessagesHeaderParam &
  RequestParameters;

export interface ConversationsCreateConversationBodyParam {
  body: { messages: Array<ChatMessage> };
}

export type ConversationsCreateConversationParameters =
  ConversationsCreateConversationBodyParam & RequestParameters;
export type ConversationsGetConversationParameters = RequestParameters;

export interface ConversationsUpdateConversationBodyParam {
  /** The updated Conversation resource data. */
  body: Conversation;
}

export type ConversationsUpdateConversationParameters =
  ConversationsUpdateConversationBodyParam & RequestParameters;
export type ConversationsDeleteConversationParameters = RequestParameters;
export type ConversationsListConversationsParameters = RequestParameters;

export interface AgentsCreateAgentBodyParam {
  body: AgentConfigurationOptions;
}

export type AgentsCreateAgentParameters = AgentsCreateAgentBodyParam &
  RequestParameters;
export type AgentsGetAgentParameters = RequestParameters;

export interface AgentsUpdateAgentBodyParam {
  /** The updated Agent data. */
  body: Agent;
}

export type AgentsUpdateAgentParameters = AgentsUpdateAgentBodyParam &
  RequestParameters;
export type AgentsDeleteAgentParameters = RequestParameters;
export type AgentsListAgentsParameters = RequestParameters;

export interface AgentsRunBodyParam {
  body: RunInputs;
}

export type AgentsRunParameters = AgentsRunBodyParam & RequestParameters;

export interface AgentsStreamBodyParam {
  body: RunInputs;
}

export type AgentsStreamParameters = AgentsStreamBodyParam & RequestParameters;

export interface AgentsGetRunHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AgentsGetRunHeaderParam {
  headers?: RawHttpHeadersInput & AgentsGetRunHeaders;
}

export type AgentsGetRunParameters = AgentsGetRunHeaderParam &
  RequestParameters;

export interface AgentsListRunsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AgentsListRunsHeaderParam {
  headers?: RawHttpHeadersInput & AgentsListRunsHeaders;
}

export type AgentsListRunsParameters = AgentsListRunsHeaderParam &
  RequestParameters;
export type AgentsListRunInputsParameters = RequestParameters;

export interface ConnectionsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsGetHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsGetHeaders;
}

export type ConnectionsGetParameters = ConnectionsGetHeaderParam &
  RequestParameters;

export interface ConnectionsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsListQueryParamProperties {
  /**
   * Specific type of connection to return in list
   *
   * Possible values: "AzureOpenAI", "AzureBlob", "CognitiveSearch", "CosmosDB", "ApiKey", "AppInsights", "CustomKeys"
   */
  connectionType?: ConnectionType;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ConnectionsListQueryParam {
  queryParameters?: ConnectionsListQueryParamProperties;
}

export interface ConnectionsListHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsListHeaders;
}

export type ConnectionsListParameters = ConnectionsListQueryParam &
  ConnectionsListHeaderParam &
  RequestParameters;

export interface EvaluationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationsGetHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsGetHeaders;
}

export type EvaluationsGetParameters = EvaluationsGetHeaderParam &
  RequestParameters;

export interface EvaluationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface EvaluationsListQueryParam {
  queryParameters?: EvaluationsListQueryParamProperties;
}

export interface EvaluationsListHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsListHeaders;
}

export type EvaluationsListParameters = EvaluationsListQueryParam &
  EvaluationsListHeaderParam &
  RequestParameters;

export interface EvaluationsCreateRunBodyParam {
  /** Evaluation to be run */
  body: Evaluation;
}

export type EvaluationsCreateRunParameters = EvaluationsCreateRunBodyParam &
  RequestParameters;

export interface DatasetsListVersionsQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount is larger than page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface DatasetsListVersionsQueryParam {
  queryParameters?: DatasetsListVersionsQueryParamProperties;
}

export type DatasetsListVersionsParameters = DatasetsListVersionsQueryParam &
  RequestParameters;

export interface DatasetsListLatestQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount is larger than page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface DatasetsListLatestQueryParam {
  queryParameters?: DatasetsListLatestQueryParamProperties;
}

export type DatasetsListLatestParameters = DatasetsListLatestQueryParam &
  RequestParameters;
export type DatasetsGetVersionParameters = RequestParameters;
export type DatasetsDeleteVersionParameters = RequestParameters;

export interface DatasetsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DatasetsCreateBodyParam {
  /** The definition of the DatasetVersion to create */
  body: DatasetVersion;
}

export interface DatasetsCreateHeaderParam {
  headers?: RawHttpHeadersInput & DatasetsCreateHeaders;
}

export type DatasetsCreateParameters = DatasetsCreateHeaderParam &
  DatasetsCreateBodyParam &
  RequestParameters;

export interface DatasetsCreateVersionBodyParam {
  /** The definition of the DatasetVersion to create */
  body: DatasetVersion;
}

export type DatasetsCreateVersionParameters = DatasetsCreateVersionBodyParam &
  RequestParameters;

export interface DatasetsStartPendingUploadBodyParam {
  /** Parameters for the action */
  body: PendingUploadRequest;
}

export type DatasetsStartPendingUploadParameters =
  DatasetsStartPendingUploadBodyParam & RequestParameters;

export interface DatasetsStartPendingUploadAutoIncrementHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DatasetsStartPendingUploadAutoIncrementBodyParam {
  body: PendingUploadRequest;
}

export interface DatasetsStartPendingUploadAutoIncrementHeaderParam {
  headers?: RawHttpHeadersInput &
    DatasetsStartPendingUploadAutoIncrementHeaders;
}

export type DatasetsStartPendingUploadAutoIncrementParameters =
  DatasetsStartPendingUploadAutoIncrementHeaderParam &
    DatasetsStartPendingUploadAutoIncrementBodyParam &
    RequestParameters;

export interface IndexesListVersionsQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount is larger than page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface IndexesListVersionsQueryParam {
  queryParameters?: IndexesListVersionsQueryParamProperties;
}

export type IndexesListVersionsParameters = IndexesListVersionsQueryParam &
  RequestParameters;

export interface IndexesListLatestQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount is larger than page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface IndexesListLatestQueryParam {
  queryParameters?: IndexesListLatestQueryParamProperties;
}

export type IndexesListLatestParameters = IndexesListLatestQueryParam &
  RequestParameters;
export type IndexesGetVersionParameters = RequestParameters;
export type IndexesDeleteVersionParameters = RequestParameters;

export interface IndexesCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesCreateBodyParam {
  /** The definition of the Index to create */
  body: Index;
}

export interface IndexesCreateHeaderParam {
  headers?: RawHttpHeadersInput & IndexesCreateHeaders;
}

export type IndexesCreateParameters = IndexesCreateHeaderParam &
  IndexesCreateBodyParam &
  RequestParameters;

export interface IndexesCreateVersionBodyParam {
  /** The definition of the Index to create */
  body: Index;
}

export type IndexesCreateVersionParameters = IndexesCreateVersionBodyParam &
  RequestParameters;

export interface DeploymentsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsGetHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsGetHeaders;
}

export type DeploymentsGetParameters = DeploymentsGetHeaderParam &
  RequestParameters;

export interface DeploymentsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsListQueryParamProperties {
  /** Model publisher to filter models by */
  modelPublisher?: string;
  /** Model name (the publisher specific name) to filter models by */
  modelName?: string;
  /** Flag to include models from connections in response. */
  includeConnectedModels?: boolean;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface DeploymentsListQueryParam {
  queryParameters?: DeploymentsListQueryParamProperties;
}

export interface DeploymentsListHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsListHeaders;
}

export type DeploymentsListParameters = DeploymentsListQueryParam &
  DeploymentsListHeaderParam &
  RequestParameters;
