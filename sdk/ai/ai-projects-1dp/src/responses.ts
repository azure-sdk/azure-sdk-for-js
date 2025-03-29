// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  AgentOutput,
  OpenAIPageableListOfAgentOutput,
  AgentDeletionStatusOutput,
  AgentThreadOutput,
  ThreadDeletionStatusOutput,
  ThreadMessageOutput,
  OpenAIPageableListOfThreadMessageOutput,
  ThreadRunOutput,
  OpenAIPageableListOfThreadRunOutput,
  RunStepOutput,
  OpenAIPageableListOfRunStepOutput,
  FileListResponseOutput,
  OpenAIFileOutput,
  FileDeletionStatusOutput,
  OpenAIPageableListOfVectorStoreOutput,
  VectorStoreOutput,
  VectorStoreDeletionStatusOutput,
  OpenAIPageableListOfVectorStoreFileOutput,
  VectorStoreFileOutput,
  VectorStoreFileDeletionStatusOutput,
  VectorStoreFileBatchOutput,
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
  PagedEvaluationResultOutput,
  EvaluationResultOutput,
} from "./outputModels.js";

/** The new agent instance. */
export interface AssistantsCreateAgent200Response extends HttpResponse {
  status: "200";
  body: AgentOutput;
}

export interface AssistantsCreateAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateAgentDefaultHeaders;
}

/** The requested list of agents. */
export interface AssistantsListAgents200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfAgentOutput;
}

export interface AssistantsListAgentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListAgentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsListAgentsDefaultHeaders;
}

/** The requested agent instance. */
export interface AssistantsGetAgent200Response extends HttpResponse {
  status: "200";
  body: AgentOutput;
}

export interface AssistantsGetAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetAgentDefaultHeaders;
}

/** The updated agent instance. */
export interface AssistantsUpdateAgent200Response extends HttpResponse {
  status: "200";
  body: AgentOutput;
}

export interface AssistantsUpdateAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsUpdateAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsUpdateAgentDefaultHeaders;
}

/** Status information about the requested deletion operation. */
export interface AssistantsDeleteAgent200Response extends HttpResponse {
  status: "200";
  body: AgentDeletionStatusOutput;
}

export interface AssistantsDeleteAgentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsDeleteAgentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsDeleteAgentDefaultHeaders;
}

/** Information about the newly created thread. */
export interface AssistantsCreateThread200Response extends HttpResponse {
  status: "200";
  body: AgentThreadOutput;
}

export interface AssistantsCreateThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateThreadDefaultHeaders;
}

/** Information about the requested thread. */
export interface AssistantsGetThread200Response extends HttpResponse {
  status: "200";
  body: AgentThreadOutput;
}

export interface AssistantsGetThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetThreadDefaultHeaders;
}

/** Information about the modified thread. */
export interface AssistantsUpdateThread200Response extends HttpResponse {
  status: "200";
  body: AgentThreadOutput;
}

export interface AssistantsUpdateThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsUpdateThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsUpdateThreadDefaultHeaders;
}

/** Status information about the requested thread deletion operation. */
export interface AssistantsDeleteThread200Response extends HttpResponse {
  status: "200";
  body: ThreadDeletionStatusOutput;
}

export interface AssistantsDeleteThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsDeleteThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsDeleteThreadDefaultHeaders;
}

/** A representation of the new message. */
export interface AssistantsCreateMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

export interface AssistantsCreateMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateMessageDefaultHeaders;
}

/** The requested list of messages. */
export interface AssistantsListMessages200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfThreadMessageOutput;
}

export interface AssistantsListMessagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListMessagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsListMessagesDefaultHeaders;
}

/** A representation of the requested message. */
export interface AssistantsGetMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

export interface AssistantsGetMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetMessageDefaultHeaders;
}

/** A representation of the modified message. */
export interface AssistantsUpdateMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

export interface AssistantsUpdateMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsUpdateMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsUpdateMessageDefaultHeaders;
}

/** Information about the new thread run. */
export interface AssistantsCreateRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AssistantsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateRunDefaultHeaders;
}

/** The requested list of thread runs. */
export interface AssistantsListRuns200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfThreadRunOutput;
}

export interface AssistantsListRunsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListRunsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsListRunsDefaultHeaders;
}

/** The requested information about the specified thread run. */
export interface AssistantsGetRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AssistantsGetRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetRunDefaultHeaders;
}

/** Information about the modified run. */
export interface AssistantsUpdateRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AssistantsUpdateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsUpdateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsUpdateRunDefaultHeaders;
}

/** Updated information about the run. */
export interface AssistantsSubmitToolOutputsToRun200Response
  extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AssistantsSubmitToolOutputsToRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsSubmitToolOutputsToRunDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsSubmitToolOutputsToRunDefaultHeaders;
}

/** Updated information about the cancelled run. */
export interface AssistantsCancelRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AssistantsCancelRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCancelRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCancelRunDefaultHeaders;
}

/** Information about the newly created thread. */
export interface AssistantsCreateThreadAndRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AssistantsCreateThreadAndRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateThreadAndRunDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateThreadAndRunDefaultHeaders;
}

/** Information about the requested run step. */
export interface AssistantsGetRunStep200Response extends HttpResponse {
  status: "200";
  body: RunStepOutput;
}

export interface AssistantsGetRunStepDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetRunStepDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetRunStepDefaultHeaders;
}

/** The requested list of run steps. */
export interface AssistantsListRunSteps200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfRunStepOutput;
}

export interface AssistantsListRunStepsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListRunStepsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsListRunStepsDefaultHeaders;
}

/** The requested list of files. */
export interface AssistantsListFiles200Response extends HttpResponse {
  status: "200";
  body: FileListResponseOutput;
}

export interface AssistantsListFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsListFilesDefaultHeaders;
}

/** A representation of the uploaded file. */
export interface AssistantsUploadFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface AssistantsUploadFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsUploadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsUploadFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsDeleteFile200Response extends HttpResponse {
  status: "200";
  body: FileDeletionStatusOutput;
}

export interface AssistantsDeleteFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsDeleteFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsDeleteFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsGetFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface AssistantsGetFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsGetFileContent200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

export interface AssistantsGetFileContentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetFileContentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetFileContentDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsListVectorStores200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfVectorStoreOutput;
}

export interface AssistantsListVectorStoresDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListVectorStoresDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsListVectorStoresDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsCreateVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

export interface AssistantsCreateVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateVectorStoreDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsGetVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

export interface AssistantsGetVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetVectorStoreDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsModifyVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

export interface AssistantsModifyVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsModifyVectorStoreDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsModifyVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsDeleteVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreDeletionStatusOutput;
}

export interface AssistantsDeleteVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsDeleteVectorStoreDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsDeleteVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsListVectorStoreFiles200Response
  extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfVectorStoreFileOutput;
}

export interface AssistantsListVectorStoreFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListVectorStoreFilesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsListVectorStoreFilesDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsCreateVectorStoreFile200Response
  extends HttpResponse {
  status: "200";
  body: VectorStoreFileOutput;
}

export interface AssistantsCreateVectorStoreFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateVectorStoreFileDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateVectorStoreFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsGetVectorStoreFile200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileOutput;
}

export interface AssistantsGetVectorStoreFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetVectorStoreFileDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetVectorStoreFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsDeleteVectorStoreFile200Response
  extends HttpResponse {
  status: "200";
  body: VectorStoreFileDeletionStatusOutput;
}

export interface AssistantsDeleteVectorStoreFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsDeleteVectorStoreFileDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsDeleteVectorStoreFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsCreateVectorStoreFileBatch200Response
  extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

export interface AssistantsCreateVectorStoreFileBatchDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCreateVectorStoreFileBatchDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCreateVectorStoreFileBatchDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsGetVectorStoreFileBatch200Response
  extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

export interface AssistantsGetVectorStoreFileBatchDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsGetVectorStoreFileBatchDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsGetVectorStoreFileBatchDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsCancelVectorStoreFileBatch200Response
  extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

export interface AssistantsCancelVectorStoreFileBatchDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsCancelVectorStoreFileBatchDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AssistantsCancelVectorStoreFileBatchDefaultHeaders;
}

/** The request has succeeded. */
export interface AssistantsListVectorStoreFileBatchFiles200Response
  extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfVectorStoreFileOutput;
}

export interface AssistantsListVectorStoreFileBatchFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AssistantsListVectorStoreFileBatchFilesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    AssistantsListVectorStoreFileBatchFilesDefaultHeaders;
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
export interface DatasetsStartPendingUploadVersion200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface DatasetsStartPendingUploadVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsStartPendingUploadVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsStartPendingUploadVersionDefaultHeaders;
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

/** The request has succeeded. */
export interface EvaluationResultsListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationResultOutput;
}

export interface EvaluationResultsListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsListVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationResultOutput;
}

export interface EvaluationResultsListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsListLatestDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsGetVersion200Response extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
}

export interface EvaluationResultsGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsGetVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EvaluationResultsDeleteVersion204Response
  extends HttpResponse {
  status: "204";
}

export interface EvaluationResultsDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsDeleteVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsDeleteVersionDefaultHeaders;
}

export interface EvaluationResultsCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationResultsCreate200Response extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
  headers: RawHttpHeaders & EvaluationResultsCreate200Headers;
}

export interface EvaluationResultsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsCreateVersion200Response
  extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface EvaluationResultsCreateVersion201Response
  extends HttpResponse {
  status: "201";
  body: EvaluationResultOutput;
}

export interface EvaluationResultsCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsCreateVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsCreateVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsStartPendingUpload200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface EvaluationResultsStartPendingUploadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsStartPendingUploadDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsStartPendingUploadDefaultHeaders;
}
