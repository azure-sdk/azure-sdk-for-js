// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  DatasetsStartPendingUploadVersion200Response,
  DatasetsStartPendingUploadVersionDefaultResponse,
  DatasetsStartPendingUpload200Response,
  DatasetsStartPendingUploadDefaultResponse,
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
  EvaluationResultsListVersions200Response,
  EvaluationResultsListVersionsDefaultResponse,
  EvaluationResultsCreate200Response,
  EvaluationResultsCreateDefaultResponse,
  EvaluationResultsListLatest200Response,
  EvaluationResultsListLatestDefaultResponse,
  EvaluationResultsGetVersion200Response,
  EvaluationResultsGetVersionDefaultResponse,
  EvaluationResultsDeleteVersion204Response,
  EvaluationResultsDeleteVersionDefaultResponse,
  EvaluationResultsCreateVersion200Response,
  EvaluationResultsCreateVersion201Response,
  EvaluationResultsCreateVersionDefaultResponse,
  EvaluationResultsStartPendingUpload200Response,
  EvaluationResultsStartPendingUploadDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /assistants": ["200"],
  "GET /assistants": ["200"],
  "GET /assistants/{assistantId}": ["200"],
  "POST /assistants/{assistantId}": ["200"],
  "DELETE /assistants/{assistantId}": ["200"],
  "POST /threads": ["200"],
  "GET /threads/{threadId}": ["200"],
  "POST /threads/{threadId}": ["200"],
  "DELETE /threads/{threadId}": ["200"],
  "POST /threads/{threadId}/messages": ["200"],
  "GET /threads/{threadId}/messages": ["200"],
  "GET /threads/{threadId}/messages/{messageId}": ["200"],
  "POST /threads/{threadId}/messages/{messageId}": ["200"],
  "POST /threads/{threadId}/runs": ["200"],
  "GET /threads/{threadId}/runs": ["200"],
  "GET /threads/{threadId}/runs/{runId}": ["200"],
  "POST /threads/{threadId}/runs/{runId}": ["200"],
  "POST /threads/{threadId}/runs/{runId}/submit_tool_outputs": ["200"],
  "POST /threads/{threadId}/runs/{runId}/cancel": ["200"],
  "POST /threads/runs": ["200"],
  "GET /threads/{threadId}/runs/{runId}/steps/{stepId}": ["200"],
  "GET /threads/{threadId}/runs/{runId}/steps": ["200"],
  "GET /files": ["200"],
  "POST /files": ["200"],
  "DELETE /files/{fileId}": ["200"],
  "GET /files/{fileId}": ["200"],
  "GET /files/{fileId}/content": ["200"],
  "GET /vector_stores": ["200"],
  "POST /vector_stores": ["200"],
  "GET /vector_stores/{vectorStoreId}": ["200"],
  "POST /vector_stores/{vectorStoreId}": ["200"],
  "DELETE /vector_stores/{vectorStoreId}": ["200"],
  "GET /vector_stores/{vectorStoreId}/files": ["200"],
  "POST /vector_stores/{vectorStoreId}/files": ["200"],
  "GET /vector_stores/{vectorStoreId}/files/{fileId}": ["200"],
  "DELETE /vector_stores/{vectorStoreId}/files/{fileId}": ["200"],
  "POST /vector_stores/{vectorStoreId}/file_batches": ["200"],
  "GET /vector_stores/{vectorStoreId}/file_batches/{batchId}": ["200"],
  "POST /vector_stores/{vectorStoreId}/file_batches/{batchId}/cancel": ["200"],
  "GET /vector_stores/{vectorStoreId}/file_batches/{batchId}/files": ["200"],
  "GET /connections/{name}": ["200"],
  "GET /connections": ["200"],
  "GET /evaluations/runs/{name}": ["200"],
  "GET /evaluations/runs": ["200"],
  "POST /evaluations/runs:run": ["200"],
  "GET /datasets/{name}/versions": ["200"],
  "POST /datasets/{name}/versions": ["200"],
  "GET /datasets": ["200"],
  "GET /datasets/{name}/versions/{version}": ["200"],
  "DELETE /datasets/{name}/versions/{version}": ["204"],
  "PUT /datasets/{name}/versions/{version}": ["200", "201"],
  "POST /datasets/{name}/versions/{version}/startPendingUploadVersion": ["200"],
  "POST /datasets/{name}/startPendingUpload": ["200"],
  "GET /indexes/{name}/versions": ["200"],
  "POST /indexes/{name}/versions": ["200"],
  "GET /indexes": ["200"],
  "GET /indexes/{name}/versions/{version}": ["200"],
  "DELETE /indexes/{name}/versions/{version}": ["204"],
  "PUT /indexes/{name}/versions/{version}": ["200", "201"],
  "GET /deployments/{name}": ["200"],
  "GET /deployments": ["200"],
  "GET /evaluationResult/{name}/versions": ["200"],
  "POST /evaluationResult/{name}/versions": ["200"],
  "GET /evaluationResult": ["200"],
  "GET /evaluationResult/{name}/versions/{version}": ["200"],
  "DELETE /evaluationResult/{name}/versions/{version}": ["204"],
  "PUT /evaluationResult/{name}/versions/{version}": ["200", "201"],
  "POST /evaluationResult/{name}/versions/{version}/startPendingUpload": [
    "200",
  ],
};

export function isUnexpected(
  response:
    | AssistantsCreateAgent200Response
    | AssistantsCreateAgentDefaultResponse,
): response is AssistantsCreateAgentDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsListAgents200Response
    | AssistantsListAgentsDefaultResponse,
): response is AssistantsListAgentsDefaultResponse;
export function isUnexpected(
  response: AssistantsGetAgent200Response | AssistantsGetAgentDefaultResponse,
): response is AssistantsGetAgentDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsUpdateAgent200Response
    | AssistantsUpdateAgentDefaultResponse,
): response is AssistantsUpdateAgentDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsDeleteAgent200Response
    | AssistantsDeleteAgentDefaultResponse,
): response is AssistantsDeleteAgentDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCreateThread200Response
    | AssistantsCreateThreadDefaultResponse,
): response is AssistantsCreateThreadDefaultResponse;
export function isUnexpected(
  response: AssistantsGetThread200Response | AssistantsGetThreadDefaultResponse,
): response is AssistantsGetThreadDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsUpdateThread200Response
    | AssistantsUpdateThreadDefaultResponse,
): response is AssistantsUpdateThreadDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsDeleteThread200Response
    | AssistantsDeleteThreadDefaultResponse,
): response is AssistantsDeleteThreadDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCreateMessage200Response
    | AssistantsCreateMessageDefaultResponse,
): response is AssistantsCreateMessageDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsListMessages200Response
    | AssistantsListMessagesDefaultResponse,
): response is AssistantsListMessagesDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsGetMessage200Response
    | AssistantsGetMessageDefaultResponse,
): response is AssistantsGetMessageDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsUpdateMessage200Response
    | AssistantsUpdateMessageDefaultResponse,
): response is AssistantsUpdateMessageDefaultResponse;
export function isUnexpected(
  response: AssistantsCreateRun200Response | AssistantsCreateRunDefaultResponse,
): response is AssistantsCreateRunDefaultResponse;
export function isUnexpected(
  response: AssistantsListRuns200Response | AssistantsListRunsDefaultResponse,
): response is AssistantsListRunsDefaultResponse;
export function isUnexpected(
  response: AssistantsGetRun200Response | AssistantsGetRunDefaultResponse,
): response is AssistantsGetRunDefaultResponse;
export function isUnexpected(
  response: AssistantsUpdateRun200Response | AssistantsUpdateRunDefaultResponse,
): response is AssistantsUpdateRunDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsSubmitToolOutputsToRun200Response
    | AssistantsSubmitToolOutputsToRunDefaultResponse,
): response is AssistantsSubmitToolOutputsToRunDefaultResponse;
export function isUnexpected(
  response: AssistantsCancelRun200Response | AssistantsCancelRunDefaultResponse,
): response is AssistantsCancelRunDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCreateThreadAndRun200Response
    | AssistantsCreateThreadAndRunDefaultResponse,
): response is AssistantsCreateThreadAndRunDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsGetRunStep200Response
    | AssistantsGetRunStepDefaultResponse,
): response is AssistantsGetRunStepDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsListRunSteps200Response
    | AssistantsListRunStepsDefaultResponse,
): response is AssistantsListRunStepsDefaultResponse;
export function isUnexpected(
  response: AssistantsListFiles200Response | AssistantsListFilesDefaultResponse,
): response is AssistantsListFilesDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsUploadFile200Response
    | AssistantsUploadFileDefaultResponse,
): response is AssistantsUploadFileDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsDeleteFile200Response
    | AssistantsDeleteFileDefaultResponse,
): response is AssistantsDeleteFileDefaultResponse;
export function isUnexpected(
  response: AssistantsGetFile200Response | AssistantsGetFileDefaultResponse,
): response is AssistantsGetFileDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsGetFileContent200Response
    | AssistantsGetFileContentDefaultResponse,
): response is AssistantsGetFileContentDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsListVectorStores200Response
    | AssistantsListVectorStoresDefaultResponse,
): response is AssistantsListVectorStoresDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCreateVectorStore200Response
    | AssistantsCreateVectorStoreDefaultResponse,
): response is AssistantsCreateVectorStoreDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsGetVectorStore200Response
    | AssistantsGetVectorStoreDefaultResponse,
): response is AssistantsGetVectorStoreDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsModifyVectorStore200Response
    | AssistantsModifyVectorStoreDefaultResponse,
): response is AssistantsModifyVectorStoreDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsDeleteVectorStore200Response
    | AssistantsDeleteVectorStoreDefaultResponse,
): response is AssistantsDeleteVectorStoreDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsListVectorStoreFiles200Response
    | AssistantsListVectorStoreFilesDefaultResponse,
): response is AssistantsListVectorStoreFilesDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCreateVectorStoreFile200Response
    | AssistantsCreateVectorStoreFileDefaultResponse,
): response is AssistantsCreateVectorStoreFileDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsGetVectorStoreFile200Response
    | AssistantsGetVectorStoreFileDefaultResponse,
): response is AssistantsGetVectorStoreFileDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsDeleteVectorStoreFile200Response
    | AssistantsDeleteVectorStoreFileDefaultResponse,
): response is AssistantsDeleteVectorStoreFileDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCreateVectorStoreFileBatch200Response
    | AssistantsCreateVectorStoreFileBatchDefaultResponse,
): response is AssistantsCreateVectorStoreFileBatchDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsGetVectorStoreFileBatch200Response
    | AssistantsGetVectorStoreFileBatchDefaultResponse,
): response is AssistantsGetVectorStoreFileBatchDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCancelVectorStoreFileBatch200Response
    | AssistantsCancelVectorStoreFileBatchDefaultResponse,
): response is AssistantsCancelVectorStoreFileBatchDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsListVectorStoreFileBatchFiles200Response
    | AssistantsListVectorStoreFileBatchFilesDefaultResponse,
): response is AssistantsListVectorStoreFileBatchFilesDefaultResponse;
export function isUnexpected(
  response: ConnectionsGet200Response | ConnectionsGetDefaultResponse,
): response is ConnectionsGetDefaultResponse;
export function isUnexpected(
  response: ConnectionsList200Response | ConnectionsListDefaultResponse,
): response is ConnectionsListDefaultResponse;
export function isUnexpected(
  response: EvaluationsGet200Response | EvaluationsGetDefaultResponse,
): response is EvaluationsGetDefaultResponse;
export function isUnexpected(
  response: EvaluationsList200Response | EvaluationsListDefaultResponse,
): response is EvaluationsListDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationsCreateRun200Response
    | EvaluationsCreateRunDefaultResponse,
): response is EvaluationsCreateRunDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsListVersions200Response
    | DatasetsListVersionsDefaultResponse,
): response is DatasetsListVersionsDefaultResponse;
export function isUnexpected(
  response: DatasetsCreate200Response | DatasetsCreateDefaultResponse,
): response is DatasetsCreateDefaultResponse;
export function isUnexpected(
  response: DatasetsListLatest200Response | DatasetsListLatestDefaultResponse,
): response is DatasetsListLatestDefaultResponse;
export function isUnexpected(
  response: DatasetsGetVersion200Response | DatasetsGetVersionDefaultResponse,
): response is DatasetsGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsDeleteVersion204Response
    | DatasetsDeleteVersionDefaultResponse,
): response is DatasetsDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsCreateVersion200Response
    | DatasetsCreateVersion201Response
    | DatasetsCreateVersionDefaultResponse,
): response is DatasetsCreateVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse,
): response is DatasetsStartPendingUploadVersionDefaultResponse;
export function isUnexpected(
  response:
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse,
): response is DatasetsStartPendingUploadDefaultResponse;
export function isUnexpected(
  response: IndexesListVersions200Response | IndexesListVersionsDefaultResponse,
): response is IndexesListVersionsDefaultResponse;
export function isUnexpected(
  response: IndexesCreate200Response | IndexesCreateDefaultResponse,
): response is IndexesCreateDefaultResponse;
export function isUnexpected(
  response: IndexesListLatest200Response | IndexesListLatestDefaultResponse,
): response is IndexesListLatestDefaultResponse;
export function isUnexpected(
  response: IndexesGetVersion200Response | IndexesGetVersionDefaultResponse,
): response is IndexesGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | IndexesDeleteVersion204Response
    | IndexesDeleteVersionDefaultResponse,
): response is IndexesDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | IndexesCreateVersion200Response
    | IndexesCreateVersion201Response
    | IndexesCreateVersionDefaultResponse,
): response is IndexesCreateVersionDefaultResponse;
export function isUnexpected(
  response: DeploymentsGet200Response | DeploymentsGetDefaultResponse,
): response is DeploymentsGetDefaultResponse;
export function isUnexpected(
  response: DeploymentsList200Response | DeploymentsListDefaultResponse,
): response is DeploymentsListDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsListVersions200Response
    | EvaluationResultsListVersionsDefaultResponse,
): response is EvaluationResultsListVersionsDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsCreate200Response
    | EvaluationResultsCreateDefaultResponse,
): response is EvaluationResultsCreateDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsListLatest200Response
    | EvaluationResultsListLatestDefaultResponse,
): response is EvaluationResultsListLatestDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsGetVersion200Response
    | EvaluationResultsGetVersionDefaultResponse,
): response is EvaluationResultsGetVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsDeleteVersion204Response
    | EvaluationResultsDeleteVersionDefaultResponse,
): response is EvaluationResultsDeleteVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsCreateVersion200Response
    | EvaluationResultsCreateVersion201Response
    | EvaluationResultsCreateVersionDefaultResponse,
): response is EvaluationResultsCreateVersionDefaultResponse;
export function isUnexpected(
  response:
    | EvaluationResultsStartPendingUpload200Response
    | EvaluationResultsStartPendingUploadDefaultResponse,
): response is EvaluationResultsStartPendingUploadDefaultResponse;
export function isUnexpected(
  response:
    | AssistantsCreateAgent200Response
    | AssistantsCreateAgentDefaultResponse
    | AssistantsListAgents200Response
    | AssistantsListAgentsDefaultResponse
    | AssistantsGetAgent200Response
    | AssistantsGetAgentDefaultResponse
    | AssistantsUpdateAgent200Response
    | AssistantsUpdateAgentDefaultResponse
    | AssistantsDeleteAgent200Response
    | AssistantsDeleteAgentDefaultResponse
    | AssistantsCreateThread200Response
    | AssistantsCreateThreadDefaultResponse
    | AssistantsGetThread200Response
    | AssistantsGetThreadDefaultResponse
    | AssistantsUpdateThread200Response
    | AssistantsUpdateThreadDefaultResponse
    | AssistantsDeleteThread200Response
    | AssistantsDeleteThreadDefaultResponse
    | AssistantsCreateMessage200Response
    | AssistantsCreateMessageDefaultResponse
    | AssistantsListMessages200Response
    | AssistantsListMessagesDefaultResponse
    | AssistantsGetMessage200Response
    | AssistantsGetMessageDefaultResponse
    | AssistantsUpdateMessage200Response
    | AssistantsUpdateMessageDefaultResponse
    | AssistantsCreateRun200Response
    | AssistantsCreateRunDefaultResponse
    | AssistantsListRuns200Response
    | AssistantsListRunsDefaultResponse
    | AssistantsGetRun200Response
    | AssistantsGetRunDefaultResponse
    | AssistantsUpdateRun200Response
    | AssistantsUpdateRunDefaultResponse
    | AssistantsSubmitToolOutputsToRun200Response
    | AssistantsSubmitToolOutputsToRunDefaultResponse
    | AssistantsCancelRun200Response
    | AssistantsCancelRunDefaultResponse
    | AssistantsCreateThreadAndRun200Response
    | AssistantsCreateThreadAndRunDefaultResponse
    | AssistantsGetRunStep200Response
    | AssistantsGetRunStepDefaultResponse
    | AssistantsListRunSteps200Response
    | AssistantsListRunStepsDefaultResponse
    | AssistantsListFiles200Response
    | AssistantsListFilesDefaultResponse
    | AssistantsUploadFile200Response
    | AssistantsUploadFileDefaultResponse
    | AssistantsDeleteFile200Response
    | AssistantsDeleteFileDefaultResponse
    | AssistantsGetFile200Response
    | AssistantsGetFileDefaultResponse
    | AssistantsGetFileContent200Response
    | AssistantsGetFileContentDefaultResponse
    | AssistantsListVectorStores200Response
    | AssistantsListVectorStoresDefaultResponse
    | AssistantsCreateVectorStore200Response
    | AssistantsCreateVectorStoreDefaultResponse
    | AssistantsGetVectorStore200Response
    | AssistantsGetVectorStoreDefaultResponse
    | AssistantsModifyVectorStore200Response
    | AssistantsModifyVectorStoreDefaultResponse
    | AssistantsDeleteVectorStore200Response
    | AssistantsDeleteVectorStoreDefaultResponse
    | AssistantsListVectorStoreFiles200Response
    | AssistantsListVectorStoreFilesDefaultResponse
    | AssistantsCreateVectorStoreFile200Response
    | AssistantsCreateVectorStoreFileDefaultResponse
    | AssistantsGetVectorStoreFile200Response
    | AssistantsGetVectorStoreFileDefaultResponse
    | AssistantsDeleteVectorStoreFile200Response
    | AssistantsDeleteVectorStoreFileDefaultResponse
    | AssistantsCreateVectorStoreFileBatch200Response
    | AssistantsCreateVectorStoreFileBatchDefaultResponse
    | AssistantsGetVectorStoreFileBatch200Response
    | AssistantsGetVectorStoreFileBatchDefaultResponse
    | AssistantsCancelVectorStoreFileBatch200Response
    | AssistantsCancelVectorStoreFileBatchDefaultResponse
    | AssistantsListVectorStoreFileBatchFiles200Response
    | AssistantsListVectorStoreFileBatchFilesDefaultResponse
    | ConnectionsGet200Response
    | ConnectionsGetDefaultResponse
    | ConnectionsList200Response
    | ConnectionsListDefaultResponse
    | EvaluationsGet200Response
    | EvaluationsGetDefaultResponse
    | EvaluationsList200Response
    | EvaluationsListDefaultResponse
    | EvaluationsCreateRun200Response
    | EvaluationsCreateRunDefaultResponse
    | DatasetsListVersions200Response
    | DatasetsListVersionsDefaultResponse
    | DatasetsCreate200Response
    | DatasetsCreateDefaultResponse
    | DatasetsListLatest200Response
    | DatasetsListLatestDefaultResponse
    | DatasetsGetVersion200Response
    | DatasetsGetVersionDefaultResponse
    | DatasetsDeleteVersion204Response
    | DatasetsDeleteVersionDefaultResponse
    | DatasetsCreateVersion200Response
    | DatasetsCreateVersion201Response
    | DatasetsCreateVersionDefaultResponse
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse
    | IndexesListVersions200Response
    | IndexesListVersionsDefaultResponse
    | IndexesCreate200Response
    | IndexesCreateDefaultResponse
    | IndexesListLatest200Response
    | IndexesListLatestDefaultResponse
    | IndexesGetVersion200Response
    | IndexesGetVersionDefaultResponse
    | IndexesDeleteVersion204Response
    | IndexesDeleteVersionDefaultResponse
    | IndexesCreateVersion200Response
    | IndexesCreateVersion201Response
    | IndexesCreateVersionDefaultResponse
    | DeploymentsGet200Response
    | DeploymentsGetDefaultResponse
    | DeploymentsList200Response
    | DeploymentsListDefaultResponse
    | EvaluationResultsListVersions200Response
    | EvaluationResultsListVersionsDefaultResponse
    | EvaluationResultsCreate200Response
    | EvaluationResultsCreateDefaultResponse
    | EvaluationResultsListLatest200Response
    | EvaluationResultsListLatestDefaultResponse
    | EvaluationResultsGetVersion200Response
    | EvaluationResultsGetVersionDefaultResponse
    | EvaluationResultsDeleteVersion204Response
    | EvaluationResultsDeleteVersionDefaultResponse
    | EvaluationResultsCreateVersion200Response
    | EvaluationResultsCreateVersion201Response
    | EvaluationResultsCreateVersionDefaultResponse
    | EvaluationResultsStartPendingUpload200Response
    | EvaluationResultsStartPendingUploadDefaultResponse,
): response is
  | AssistantsCreateAgentDefaultResponse
  | AssistantsListAgentsDefaultResponse
  | AssistantsGetAgentDefaultResponse
  | AssistantsUpdateAgentDefaultResponse
  | AssistantsDeleteAgentDefaultResponse
  | AssistantsCreateThreadDefaultResponse
  | AssistantsGetThreadDefaultResponse
  | AssistantsUpdateThreadDefaultResponse
  | AssistantsDeleteThreadDefaultResponse
  | AssistantsCreateMessageDefaultResponse
  | AssistantsListMessagesDefaultResponse
  | AssistantsGetMessageDefaultResponse
  | AssistantsUpdateMessageDefaultResponse
  | AssistantsCreateRunDefaultResponse
  | AssistantsListRunsDefaultResponse
  | AssistantsGetRunDefaultResponse
  | AssistantsUpdateRunDefaultResponse
  | AssistantsSubmitToolOutputsToRunDefaultResponse
  | AssistantsCancelRunDefaultResponse
  | AssistantsCreateThreadAndRunDefaultResponse
  | AssistantsGetRunStepDefaultResponse
  | AssistantsListRunStepsDefaultResponse
  | AssistantsListFilesDefaultResponse
  | AssistantsUploadFileDefaultResponse
  | AssistantsDeleteFileDefaultResponse
  | AssistantsGetFileDefaultResponse
  | AssistantsGetFileContentDefaultResponse
  | AssistantsListVectorStoresDefaultResponse
  | AssistantsCreateVectorStoreDefaultResponse
  | AssistantsGetVectorStoreDefaultResponse
  | AssistantsModifyVectorStoreDefaultResponse
  | AssistantsDeleteVectorStoreDefaultResponse
  | AssistantsListVectorStoreFilesDefaultResponse
  | AssistantsCreateVectorStoreFileDefaultResponse
  | AssistantsGetVectorStoreFileDefaultResponse
  | AssistantsDeleteVectorStoreFileDefaultResponse
  | AssistantsCreateVectorStoreFileBatchDefaultResponse
  | AssistantsGetVectorStoreFileBatchDefaultResponse
  | AssistantsCancelVectorStoreFileBatchDefaultResponse
  | AssistantsListVectorStoreFileBatchFilesDefaultResponse
  | ConnectionsGetDefaultResponse
  | ConnectionsListDefaultResponse
  | EvaluationsGetDefaultResponse
  | EvaluationsListDefaultResponse
  | EvaluationsCreateRunDefaultResponse
  | DatasetsListVersionsDefaultResponse
  | DatasetsCreateDefaultResponse
  | DatasetsListLatestDefaultResponse
  | DatasetsGetVersionDefaultResponse
  | DatasetsDeleteVersionDefaultResponse
  | DatasetsCreateVersionDefaultResponse
  | DatasetsStartPendingUploadVersionDefaultResponse
  | DatasetsStartPendingUploadDefaultResponse
  | IndexesListVersionsDefaultResponse
  | IndexesCreateDefaultResponse
  | IndexesListLatestDefaultResponse
  | IndexesGetVersionDefaultResponse
  | IndexesDeleteVersionDefaultResponse
  | IndexesCreateVersionDefaultResponse
  | DeploymentsGetDefaultResponse
  | DeploymentsListDefaultResponse
  | EvaluationResultsListVersionsDefaultResponse
  | EvaluationResultsCreateDefaultResponse
  | EvaluationResultsListLatestDefaultResponse
  | EvaluationResultsGetVersionDefaultResponse
  | EvaluationResultsDeleteVersionDefaultResponse
  | EvaluationResultsCreateVersionDefaultResponse
  | EvaluationResultsStartPendingUploadDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
