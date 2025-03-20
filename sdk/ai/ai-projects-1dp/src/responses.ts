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
  PendingUploadResponseOutput,
  IndexOutput,
  PagedIndexOutput,
  DeploymentOutput,
  PagedDeploymentOutput,
} from "./outputModels.js";

/** The new agent instance. */
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

/** The requested list of agents. */
export interface AgentsListAgents200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfAgentOutput;
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

/** The requested agent instance. */
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

/** The updated agent instance. */
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

/** Status information about the requested deletion operation. */
export interface AgentsDeleteAgent200Response extends HttpResponse {
  status: "200";
  body: AgentDeletionStatusOutput;
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

/** Information about the newly created thread. */
export interface AgentsCreateThread200Response extends HttpResponse {
  status: "200";
  body: AgentThreadOutput;
}

export interface AgentsCreateThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateThreadDefaultHeaders;
}

/** Information about the requested thread. */
export interface AgentsGetThread200Response extends HttpResponse {
  status: "200";
  body: AgentThreadOutput;
}

export interface AgentsGetThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetThreadDefaultHeaders;
}

/** Information about the modified thread. */
export interface AgentsUpdateThread200Response extends HttpResponse {
  status: "200";
  body: AgentThreadOutput;
}

export interface AgentsUpdateThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsUpdateThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsUpdateThreadDefaultHeaders;
}

/** Status information about the requested thread deletion operation. */
export interface AgentsDeleteThread200Response extends HttpResponse {
  status: "200";
  body: ThreadDeletionStatusOutput;
}

export interface AgentsDeleteThreadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsDeleteThreadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsDeleteThreadDefaultHeaders;
}

/** A representation of the new message. */
export interface AgentsCreateMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

export interface AgentsCreateMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateMessageDefaultHeaders;
}

/** The requested list of messages. */
export interface AgentsListMessages200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfThreadMessageOutput;
}

export interface AgentsListMessagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListMessagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListMessagesDefaultHeaders;
}

/** A representation of the requested message. */
export interface AgentsGetMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

export interface AgentsGetMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetMessageDefaultHeaders;
}

/** A representation of the modified message. */
export interface AgentsUpdateMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

export interface AgentsUpdateMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsUpdateMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsUpdateMessageDefaultHeaders;
}

/** Information about the new thread run. */
export interface AgentsCreateRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AgentsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateRunDefaultHeaders;
}

/** The requested list of thread runs. */
export interface AgentsListRuns200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfThreadRunOutput;
}

export interface AgentsListRunsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListRunsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListRunsDefaultHeaders;
}

/** The requested information about the specified thread run. */
export interface AgentsGetRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AgentsGetRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetRunDefaultHeaders;
}

/** Information about the modified run. */
export interface AgentsUpdateRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AgentsUpdateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsUpdateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsUpdateRunDefaultHeaders;
}

/** Updated information about the run. */
export interface AgentsSubmitToolOutputsToRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AgentsSubmitToolOutputsToRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsSubmitToolOutputsToRunDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsSubmitToolOutputsToRunDefaultHeaders;
}

/** Updated information about the cancelled run. */
export interface AgentsCancelRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AgentsCancelRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCancelRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCancelRunDefaultHeaders;
}

/** Information about the newly created thread. */
export interface AgentsCreateThreadAndRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

export interface AgentsCreateThreadAndRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateThreadAndRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateThreadAndRunDefaultHeaders;
}

/** Information about the requested run step. */
export interface AgentsGetRunStep200Response extends HttpResponse {
  status: "200";
  body: RunStepOutput;
}

export interface AgentsGetRunStepDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetRunStepDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetRunStepDefaultHeaders;
}

/** The requested list of run steps. */
export interface AgentsListRunSteps200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfRunStepOutput;
}

export interface AgentsListRunStepsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListRunStepsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListRunStepsDefaultHeaders;
}

/** The requested list of files. */
export interface AgentsListFiles200Response extends HttpResponse {
  status: "200";
  body: FileListResponseOutput;
}

export interface AgentsListFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListFilesDefaultHeaders;
}

/** A representation of the uploaded file. */
export interface AgentsUploadFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface AgentsUploadFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsUploadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsUploadFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsDeleteFile200Response extends HttpResponse {
  status: "200";
  body: FileDeletionStatusOutput;
}

export interface AgentsDeleteFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsDeleteFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsDeleteFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsGetFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface AgentsGetFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsGetFileContent200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface AgentsGetFileContentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetFileContentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetFileContentDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsListVectorStores200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfVectorStoreOutput;
}

export interface AgentsListVectorStoresDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListVectorStoresDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListVectorStoresDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsCreateVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

export interface AgentsCreateVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateVectorStoreDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsGetVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

export interface AgentsGetVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetVectorStoreDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsModifyVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

export interface AgentsModifyVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsModifyVectorStoreDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsModifyVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsDeleteVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreDeletionStatusOutput;
}

export interface AgentsDeleteVectorStoreDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsDeleteVectorStoreDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsDeleteVectorStoreDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsListVectorStoreFiles200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfVectorStoreFileOutput;
}

export interface AgentsListVectorStoreFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListVectorStoreFilesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListVectorStoreFilesDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsCreateVectorStoreFile200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileOutput;
}

export interface AgentsCreateVectorStoreFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateVectorStoreFileDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateVectorStoreFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsGetVectorStoreFile200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileOutput;
}

export interface AgentsGetVectorStoreFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetVectorStoreFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetVectorStoreFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsDeleteVectorStoreFile200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileDeletionStatusOutput;
}

export interface AgentsDeleteVectorStoreFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsDeleteVectorStoreFileDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsDeleteVectorStoreFileDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsCreateVectorStoreFileBatch200Response
  extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

export interface AgentsCreateVectorStoreFileBatchDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCreateVectorStoreFileBatchDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCreateVectorStoreFileBatchDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsGetVectorStoreFileBatch200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

export interface AgentsGetVectorStoreFileBatchDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsGetVectorStoreFileBatchDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsGetVectorStoreFileBatchDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsCancelVectorStoreFileBatch200Response
  extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

export interface AgentsCancelVectorStoreFileBatchDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsCancelVectorStoreFileBatchDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsCancelVectorStoreFileBatchDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentsListVectorStoreFileBatchFiles200Response
  extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfVectorStoreFileOutput;
}

export interface AgentsListVectorStoreFileBatchFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentsListVectorStoreFileBatchFilesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentsListVectorStoreFileBatchFilesDefaultHeaders;
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
export interface EvaluationsUploadRun200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
}

export interface EvaluationsUploadRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsUploadRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsUploadRunDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsListLatestDatasets200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

/** The request has succeeded. */
export interface DatasetsListDatasetVersions200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatasetsDeleteVersion204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DatasetsGetVersion200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

/** The request has succeeded. */
export interface DatasetsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

/** The request has succeeded. */
export interface DatasetsCreateOrGetStartPendingUpload200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

/** The request has succeeded. */
export interface IndexesListLatestIndexes200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

/** The request has succeeded. */
export interface IndexesGet200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

export interface IndexesGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesGetDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesCreateIndex200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesCreateIndex201Response extends HttpResponse {
  status: "201";
  body: IndexOutput;
}

export interface IndexesCreateIndexDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesCreateIndexDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesCreateIndexDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesListIndexVersions200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesListIndexVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesListIndexVersionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesListIndexVersionsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexesDeleteVersion204Response extends HttpResponse {
  status: "204";
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
