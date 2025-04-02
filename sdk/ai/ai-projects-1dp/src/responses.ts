// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  ChatMessageOutput,
  PagedChatMessageOutput,
  ThreadOutput,
  AgentOutput,
  RunOutput,
  PagedRunOutput,
  ConnectionOutput,
  PagedConnectionOutput,
  EvaluationOutput,
  PagedEvaluationOutput,
  PagedDatasetVersionOutput,
  DatasetVersionOutput,
  RepeatabilityResultOutput,
  PendingUploadResponseOutput,
  PagedIndexOutput,
  IndexOutput,
  DeploymentOutput,
  PagedDeploymentOutput,
} from "./outputModels.js";

export interface MessagesSendMessage201Headers {
  location: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface MessagesSendMessage201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & MessagesSendMessage201Headers;
}

export interface MessagesSendMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MessagesSendMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MessagesSendMessageDefaultHeaders;
}

export interface MessagesGetMessage200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface MessagesGetMessage200Response extends HttpResponse {
  status: "200";
  body: ChatMessageOutput;
  headers: RawHttpHeaders & MessagesGetMessage200Headers;
}

export interface MessagesGetMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MessagesGetMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MessagesGetMessageDefaultHeaders;
}

export interface MessagesUpdateMessage200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface MessagesUpdateMessage200Response extends HttpResponse {
  status: "200";
  body: ChatMessageOutput;
  headers: RawHttpHeaders & MessagesUpdateMessage200Headers;
}

export interface MessagesUpdateMessage201Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface MessagesUpdateMessage201Response extends HttpResponse {
  status: "201";
  body: ChatMessageOutput;
  headers: RawHttpHeaders & MessagesUpdateMessage201Headers;
}

export interface MessagesUpdateMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MessagesUpdateMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MessagesUpdateMessageDefaultHeaders;
}

export interface MessagesDeleteMessage204Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface MessagesDeleteMessage204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & MessagesDeleteMessage204Headers;
}

export interface MessagesDeleteMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MessagesDeleteMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MessagesDeleteMessageDefaultHeaders;
}

export interface MessagesListMessages200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface MessagesListMessages200Response extends HttpResponse {
  status: "200";
  body: PagedChatMessageOutput;
  headers: RawHttpHeaders & MessagesListMessages200Headers;
}

export interface MessagesListMessagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MessagesListMessagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MessagesListMessagesDefaultHeaders;
}

/** The request has succeeded. */
export interface ThreadsCreateThread200Response extends HttpResponse {
  status: "200";
  body: ThreadOutput;
}

export interface ThreadsCreateThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ThreadsCreateThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ThreadsCreateThreadDefaultHeaders;
}

/** The request has succeeded. */
export interface ThreadsGetThread200Response extends HttpResponse {
  status: "200";
  body: ThreadOutput;
}

export interface ThreadsGetThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ThreadsGetThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ThreadsGetThreadDefaultHeaders;
}

/** The request has succeeded. */
export interface ThreadsUpdateThread200Response extends HttpResponse {
  status: "200";
  body: ThreadOutput;
}

export interface ThreadsUpdateThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ThreadsUpdateThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ThreadsUpdateThreadDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ThreadsDeleteThread204Response extends HttpResponse {
  status: "204";
}

export interface ThreadsDeleteThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ThreadsDeleteThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ThreadsDeleteThreadDefaultHeaders;
}

/** The request has succeeded. */
export interface ThreadsListThreads200Response extends HttpResponse {
  status: "200";
  body: Array<ThreadOutput>;
}

export interface ThreadsListThreadsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ThreadsListThreadsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ThreadsListThreadsDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsCreateAgent200Response extends HttpResponse {
  status: "200";
  body: AgentOutput;
}

export interface AgentsCreateAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateAgentDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsGetAgent200Response extends HttpResponse {
  status: "200";
  body: AgentOutput;
}

export interface AgentsGetAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetAgentDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsUpdateAgent200Response extends HttpResponse {
  status: "200";
  body: AgentOutput;
}

export interface AgentsUpdateAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsUpdateAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsUpdateAgentDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AgentsDeleteAgent204Response extends HttpResponse {
  status: "204";
}

export interface AgentsDeleteAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsDeleteAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsDeleteAgentDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsListAgents200Response extends HttpResponse {
  status: "200";
  body: Array<AgentOutput>;
}

export interface AgentsListAgentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListAgentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListAgentsDefaultHeaders;
}

export interface AgentsStreamByAgent200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AgentsStreamByAgent200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & AgentsStreamByAgent200Headers;
}

export interface AgentsStreamByAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsStreamByAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsStreamByAgentDefaultHeaders;
}

/** The request has succeeded. */
export interface RunsCreateRun200Response extends HttpResponse {
  status: "200";
  body: RunOutput;
}

export interface RunsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsCreateRunDefaultHeaders;
}

export interface RunsGetRun200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunsGetRun200Response extends HttpResponse {
  status: "200";
  body: RunOutput;
  headers: RawHttpHeaders & RunsGetRun200Headers;
}

export interface RunsGetRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsGetRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsGetRunDefaultHeaders;
}

/** The request has succeeded. */
export interface RunsCreateAndExecuteRun200Response extends HttpResponse {
  status: "200";
  body: RunOutput;
}

export interface RunsCreateAndExecuteRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsCreateAndExecuteRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsCreateAndExecuteRunDefaultHeaders;
}

export interface RunsCreateAndStreamRun200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunsCreateAndStreamRun200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & RunsCreateAndStreamRun200Headers;
}

export interface RunsCreateAndStreamRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsCreateAndStreamRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsCreateAndStreamRunDefaultHeaders;
}

export interface RunsListRuns200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunsListRuns200Response extends HttpResponse {
  status: "200";
  body: PagedRunOutput;
  headers: RawHttpHeaders & RunsListRuns200Headers;
}

export interface RunsListRunsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsListRunsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsListRunsDefaultHeaders;
}

export interface ConnectionsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConnectionsGet200Response extends HttpResponse {
  status: "200";
  body: ConnectionOutput;
  headers: RawHttpHeaders & ConnectionsGet200Headers;
}

export interface ConnectionsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConnectionsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConnectionsGetDefaultHeaders;
}

export interface ConnectionsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConnectionsList200Response extends HttpResponse {
  status: "200";
  body: PagedConnectionOutput;
  headers: RawHttpHeaders & ConnectionsList200Headers;
}

export interface ConnectionsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConnectionsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConnectionsListDefaultHeaders;
}

export interface EvaluationsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationsGet200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
  headers: RawHttpHeaders & EvaluationsGet200Headers;
}

export interface EvaluationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsGetDefaultHeaders;
}

export interface EvaluationsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationsList200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationOutput;
  headers: RawHttpHeaders & EvaluationsList200Headers;
}

export interface EvaluationsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsListDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationsCreateRun200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
}

export interface EvaluationsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsCreateRunDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

export interface DatasetsListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsListVersionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

export interface DatasetsListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsListLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsGetVersion200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

export interface DatasetsGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsGetVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatasetsDeleteVersion204Response extends HttpResponse {
  status: "204";
}

export interface DatasetsDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDeleteVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDeleteVersionDefaultHeaders;
}

export interface DatasetsCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DatasetsCreate200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
  headers: RawHttpHeaders & DatasetsCreate200Headers;
}

export interface DatasetsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsCreateVersion200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DatasetsCreateVersion201Response extends HttpResponse {
  status: "201";
  body: DatasetVersionOutput;
}

export interface DatasetsCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsCreateVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsCreateVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsStartPendingUpload200Response extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface DatasetsStartPendingUploadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsStartPendingUploadDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsStartPendingUploadDefaultHeaders;
}

export interface DatasetsStartPendingUploadAutoIncrement200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DatasetsStartPendingUploadAutoIncrement200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
  headers: RawHttpHeaders & DatasetsStartPendingUploadAutoIncrement200Headers;
}

export interface DatasetsStartPendingUploadAutoIncrementDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsStartPendingUploadAutoIncrementDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DatasetsStartPendingUploadAutoIncrementDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesListVersionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesListLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesGetVersion200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

export interface IndexesGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesGetVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexesDeleteVersion204Response extends HttpResponse {
  status: "204";
}

export interface IndexesDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesDeleteVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesDeleteVersionDefaultHeaders;
}

export interface IndexesCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface IndexesCreate200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
  headers: RawHttpHeaders & IndexesCreate200Headers;
}

export interface IndexesCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesCreateVersion200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesCreateVersion201Response extends HttpResponse {
  status: "201";
  body: IndexOutput;
}

export interface IndexesCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesCreateVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesCreateVersionDefaultHeaders;
}

export interface DeploymentsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DeploymentsGet200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
  headers: RawHttpHeaders & DeploymentsGet200Headers;
}

export interface DeploymentsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeploymentsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeploymentsGetDefaultHeaders;
}

export interface DeploymentsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DeploymentsList200Response extends HttpResponse {
  status: "200";
  body: PagedDeploymentOutput;
  headers: RawHttpHeaders & DeploymentsList200Headers;
}

export interface DeploymentsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeploymentsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeploymentsListDefaultHeaders;
}
