// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ConnectionsGetParameters,
  ConnectionsGetWithCredentialsParameters,
  ConnectionsListParameters,
  ConnectionsListWithCredentialsParameters,
  EvaluationsGetParameters,
  EvaluationsListParameters,
  EvaluationsCreateRunParameters,
  EvaluationsCreateAgentEvaluationParameters,
  EvaluationsCheckAnnotationParameters,
  EvaluationsSubmitAnnotationParameters,
  EvaluationsOperationResultsParameters,
  EvaluationsUploadRunParameters,
  EvaluationsUploadUpdateRunParameters,
  DatasetsListVersionsParameters,
  DatasetsListLatestParameters,
  DatasetsGetVersionParameters,
  DatasetsDeleteVersionParameters,
  DatasetsCreateOrUpdateVersionParameters,
  DatasetsStartPendingUploadVersionParameters,
  DatasetsGetCredentialsParameters,
  IndexesListVersionsParameters,
  IndexesListLatestParameters,
  IndexesGetVersionParameters,
  IndexesDeleteVersionParameters,
  IndexesCreateOrUpdateVersionParameters,
  DeploymentsGetParameters,
  DeploymentsListParameters,
  RedTeamsGetParameters,
  RedTeamsListParameters,
  RedTeamsCreateRunParameters,
  RedTeamsUploadRunParameters,
  RedTeamsUploadUpdateRunParameters,
  RedTeamsGetJailBreakDatasetWithTypeParameters,
  RedTeamsGetAttackObjectivesParameters,
  RedTeamsGetJailBreakDatasetParameters,
  RedTeamsGetTemplateParametersWithTypeParameters,
  RedTeamsGetTemplateParametersParameters,
  RedTeamsGetTemplateParametersImageParameters,
  RedTeamsSubmitSimulationParameters,
  EvaluationResultsListVersionsParameters,
  EvaluationResultsListLatestParameters,
  EvaluationResultsGetVersionParameters,
  EvaluationResultsDeleteVersionParameters,
  EvaluationResultsCreateOrUpdateVersionParameters,
  EvaluationResultsStartPendingUploadParameters,
  EvaluationResultsGetCredentialsParameters,
  EvaluationResultsGetAgentEvaluationResultsParameters,
} from "./parameters.js";
import type {
  ConnectionsGet200Response,
  ConnectionsGetDefaultResponse,
  ConnectionsGetWithCredentials200Response,
  ConnectionsGetWithCredentialsDefaultResponse,
  ConnectionsList200Response,
  ConnectionsListDefaultResponse,
  ConnectionsListWithCredentials200Response,
  ConnectionsListWithCredentialsDefaultResponse,
  EvaluationsGet200Response,
  EvaluationsGetDefaultResponse,
  EvaluationsList200Response,
  EvaluationsListDefaultResponse,
  EvaluationsCreateRun201Response,
  EvaluationsCreateRunDefaultResponse,
  EvaluationsCreateAgentEvaluation201Response,
  EvaluationsCreateAgentEvaluationDefaultResponse,
  EvaluationsCheckAnnotation200Response,
  EvaluationsSubmitAnnotation202Response,
  EvaluationsOperationResults200Response,
  EvaluationsUploadRun200Response,
  EvaluationsUploadRunDefaultResponse,
  EvaluationsUploadUpdateRun200Response,
  EvaluationsUploadUpdateRunDefaultResponse,
  DatasetsListVersions200Response,
  DatasetsListVersionsDefaultResponse,
  DatasetsListLatest200Response,
  DatasetsListLatestDefaultResponse,
  DatasetsGetVersion200Response,
  DatasetsGetVersionDefaultResponse,
  DatasetsDeleteVersion204Response,
  DatasetsDeleteVersionDefaultResponse,
  DatasetsCreateOrUpdateVersion200Response,
  DatasetsCreateOrUpdateVersion201Response,
  DatasetsCreateOrUpdateVersionDefaultResponse,
  DatasetsStartPendingUploadVersion200Response,
  DatasetsStartPendingUploadVersionDefaultResponse,
  DatasetsGetCredentials200Response,
  DatasetsGetCredentialsDefaultResponse,
  IndexesListVersions200Response,
  IndexesListVersionsDefaultResponse,
  IndexesListLatest200Response,
  IndexesListLatestDefaultResponse,
  IndexesGetVersion200Response,
  IndexesGetVersionDefaultResponse,
  IndexesDeleteVersion204Response,
  IndexesDeleteVersionDefaultResponse,
  IndexesCreateOrUpdateVersion200Response,
  IndexesCreateOrUpdateVersion201Response,
  IndexesCreateOrUpdateVersionDefaultResponse,
  DeploymentsGet200Response,
  DeploymentsGetDefaultResponse,
  DeploymentsList200Response,
  DeploymentsListDefaultResponse,
  RedTeamsGet200Response,
  RedTeamsGetDefaultResponse,
  RedTeamsList200Response,
  RedTeamsListDefaultResponse,
  RedTeamsCreateRun201Response,
  RedTeamsCreateRunDefaultResponse,
  RedTeamsUploadRun200Response,
  RedTeamsUploadRunDefaultResponse,
  RedTeamsUploadUpdateRun200Response,
  RedTeamsUploadUpdateRunDefaultResponse,
  RedTeamsGetJailBreakDatasetWithType200Response,
  RedTeamsGetJailBreakDatasetWithTypeDefaultResponse,
  RedTeamsGetAttackObjectives200Response,
  RedTeamsGetAttackObjectivesDefaultResponse,
  RedTeamsGetJailBreakDataset200Response,
  RedTeamsGetJailBreakDatasetDefaultResponse,
  RedTeamsGetTemplateParametersWithType200Response,
  RedTeamsGetTemplateParametersWithTypeDefaultResponse,
  RedTeamsGetTemplateParameters200Response,
  RedTeamsGetTemplateParametersDefaultResponse,
  RedTeamsGetTemplateParametersImage200Response,
  RedTeamsGetTemplateParametersImageDefaultResponse,
  RedTeamsSubmitSimulation202Response,
  RedTeamsSubmitSimulationDefaultResponse,
  EvaluationResultsListVersions200Response,
  EvaluationResultsListVersionsDefaultResponse,
  EvaluationResultsListLatest200Response,
  EvaluationResultsListLatestDefaultResponse,
  EvaluationResultsGetVersion200Response,
  EvaluationResultsGetVersionDefaultResponse,
  EvaluationResultsDeleteVersion204Response,
  EvaluationResultsDeleteVersionDefaultResponse,
  EvaluationResultsCreateOrUpdateVersion200Response,
  EvaluationResultsCreateOrUpdateVersion201Response,
  EvaluationResultsCreateOrUpdateVersionDefaultResponse,
  EvaluationResultsStartPendingUpload200Response,
  EvaluationResultsStartPendingUploadDefaultResponse,
  EvaluationResultsGetCredentials200Response,
  EvaluationResultsGetCredentialsDefaultResponse,
  EvaluationResultsGetAgentEvaluationResults201Response,
  EvaluationResultsGetAgentEvaluationResultsDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ConnectionsGet {
  /** Get a connection by name, without populating connection credentials */
  get(
    options?: ConnectionsGetParameters,
  ): StreamableMethod<
    ConnectionsGet200Response | ConnectionsGetDefaultResponse
  >;
}

export interface ConnectionsGetWithCredentials {
  /** Get a connection by name, with its connection credentials */
  post(
    options?: ConnectionsGetWithCredentialsParameters,
  ): StreamableMethod<
    | ConnectionsGetWithCredentials200Response
    | ConnectionsGetWithCredentialsDefaultResponse
  >;
}

export interface ConnectionsList {
  /** List all connections in the project, without populating connection credentials */
  get(
    options?: ConnectionsListParameters,
  ): StreamableMethod<
    ConnectionsList200Response | ConnectionsListDefaultResponse
  >;
}

export interface ConnectionsListWithCredentials {
  /** List all connections in the project, with their connection credentials */
  post(
    options?: ConnectionsListWithCredentialsParameters,
  ): StreamableMethod<
    | ConnectionsListWithCredentials200Response
    | ConnectionsListWithCredentialsDefaultResponse
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
    EvaluationsCreateRun201Response | EvaluationsCreateRunDefaultResponse
  >;
}

export interface EvaluationsCreateAgentEvaluation {
  /** Creates an agent evaluation run. */
  post(
    options: EvaluationsCreateAgentEvaluationParameters,
  ): StreamableMethod<
    | EvaluationsCreateAgentEvaluation201Response
    | EvaluationsCreateAgentEvaluationDefaultResponse
  >;
}

export interface EvaluationsCheckAnnotation {
  /** Check annotation supported by the service. */
  get(
    options?: EvaluationsCheckAnnotationParameters,
  ): StreamableMethod<EvaluationsCheckAnnotation200Response>;
}

export interface EvaluationsSubmitAnnotation {
  /** Submit the annotation. */
  post(
    options: EvaluationsSubmitAnnotationParameters,
  ): StreamableMethod<EvaluationsSubmitAnnotation202Response>;
}

export interface EvaluationsOperationResults {
  /** Poll for the operation results. */
  get(
    options?: EvaluationsOperationResultsParameters,
  ): StreamableMethod<EvaluationsOperationResults200Response>;
}

export interface EvaluationsUploadRun {
  /** Upload the result to an evaluation run. */
  post(
    options: EvaluationsUploadRunParameters,
  ): StreamableMethod<
    EvaluationsUploadRun200Response | EvaluationsUploadRunDefaultResponse
  >;
}

export interface EvaluationsUploadUpdateRun {
  /** Update the uploaded the result to an evaluation run. */
  patch(
    options: EvaluationsUploadUpdateRunParameters,
  ): StreamableMethod<
    | EvaluationsUploadUpdateRun200Response
    | EvaluationsUploadUpdateRunDefaultResponse
  >;
}

export interface DatasetsListVersions {
  /** List all versions of the given DatasetVersion */
  get(
    options?: DatasetsListVersionsParameters,
  ): StreamableMethod<
    DatasetsListVersions200Response | DatasetsListVersionsDefaultResponse
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
  /** Create a new or update an existing DatasetVersion with the given version id */
  patch(
    options: DatasetsCreateOrUpdateVersionParameters,
  ): StreamableMethod<
    | DatasetsCreateOrUpdateVersion200Response
    | DatasetsCreateOrUpdateVersion201Response
    | DatasetsCreateOrUpdateVersionDefaultResponse
  >;
}

export interface DatasetsStartPendingUploadVersion {
  /** Start a new or get an existing pending upload of a dataset for a specific version. */
  post(
    options: DatasetsStartPendingUploadVersionParameters,
  ): StreamableMethod<
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse
  >;
}

export interface DatasetsGetCredentials {
  /** Get download sas for dataset version. */
  post(
    options: DatasetsGetCredentialsParameters,
  ): StreamableMethod<
    DatasetsGetCredentials200Response | DatasetsGetCredentialsDefaultResponse
  >;
}

export interface IndexesListVersions {
  /** List all versions of the given Index */
  get(
    options?: IndexesListVersionsParameters,
  ): StreamableMethod<
    IndexesListVersions200Response | IndexesListVersionsDefaultResponse
  >;
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
  /** Create a new or update an existing Index with the given version id */
  patch(
    options: IndexesCreateOrUpdateVersionParameters,
  ): StreamableMethod<
    | IndexesCreateOrUpdateVersion200Response
    | IndexesCreateOrUpdateVersion201Response
    | IndexesCreateOrUpdateVersionDefaultResponse
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

export interface RedTeamsGet {
  /** Get a redteam by name. */
  get(
    options?: RedTeamsGetParameters,
  ): StreamableMethod<RedTeamsGet200Response | RedTeamsGetDefaultResponse>;
}

export interface RedTeamsList {
  /** List a redteam by name. */
  get(
    options?: RedTeamsListParameters,
  ): StreamableMethod<RedTeamsList200Response | RedTeamsListDefaultResponse>;
}

export interface RedTeamsCreateRun {
  /** Creates a redteam run. */
  post(
    options: RedTeamsCreateRunParameters,
  ): StreamableMethod<
    RedTeamsCreateRun201Response | RedTeamsCreateRunDefaultResponse
  >;
}

export interface RedTeamsUploadRun {
  /** Upload the result to a redteam run. */
  post(
    options: RedTeamsUploadRunParameters,
  ): StreamableMethod<
    RedTeamsUploadRun200Response | RedTeamsUploadRunDefaultResponse
  >;
}

export interface RedTeamsUploadUpdateRun {
  /** Update the uploaded the result to an redteam run. */
  patch(
    options: RedTeamsUploadUpdateRunParameters,
  ): StreamableMethod<
    RedTeamsUploadUpdateRun200Response | RedTeamsUploadUpdateRunDefaultResponse
  >;
}

export interface RedTeamsGetJailBreakDatasetWithType {
  /** Get the jailbreak dataset with type. */
  get(
    options?: RedTeamsGetJailBreakDatasetWithTypeParameters,
  ): StreamableMethod<
    | RedTeamsGetJailBreakDatasetWithType200Response
    | RedTeamsGetJailBreakDatasetWithTypeDefaultResponse
  >;
}

export interface RedTeamsGetAttackObjectives {
  /** Get the attack objectives. */
  get(
    options?: RedTeamsGetAttackObjectivesParameters,
  ): StreamableMethod<
    | RedTeamsGetAttackObjectives200Response
    | RedTeamsGetAttackObjectivesDefaultResponse
  >;
}

export interface RedTeamsGetJailBreakDataset {
  /** Get the jailbreak dataset. */
  get(
    options?: RedTeamsGetJailBreakDatasetParameters,
  ): StreamableMethod<
    | RedTeamsGetJailBreakDataset200Response
    | RedTeamsGetJailBreakDatasetDefaultResponse
  >;
}

export interface RedTeamsGetTemplateParametersWithType {
  /** Get template parameters with type. */
  get(
    options?: RedTeamsGetTemplateParametersWithTypeParameters,
  ): StreamableMethod<
    | RedTeamsGetTemplateParametersWithType200Response
    | RedTeamsGetTemplateParametersWithTypeDefaultResponse
  >;
}

export interface RedTeamsGetTemplateParameters {
  /** Get template parameters. */
  get(
    options?: RedTeamsGetTemplateParametersParameters,
  ): StreamableMethod<
    | RedTeamsGetTemplateParameters200Response
    | RedTeamsGetTemplateParametersDefaultResponse
  >;
}

export interface RedTeamsGetTemplateParametersImage {
  /** Get the template parameters image. */
  get(
    options: RedTeamsGetTemplateParametersImageParameters,
  ): StreamableMethod<
    | RedTeamsGetTemplateParametersImage200Response
    | RedTeamsGetTemplateParametersImageDefaultResponse
  >;
}

export interface RedTeamsSubmitSimulation {
  /** Submit a request for simulation. */
  post(
    options: RedTeamsSubmitSimulationParameters,
  ): StreamableMethod<
    | RedTeamsSubmitSimulation202Response
    | RedTeamsSubmitSimulationDefaultResponse
  >;
}

export interface EvaluationResultsListVersions {
  /** List all versions of the given EvaluationResult */
  get(
    options?: EvaluationResultsListVersionsParameters,
  ): StreamableMethod<
    | EvaluationResultsListVersions200Response
    | EvaluationResultsListVersionsDefaultResponse
  >;
}

export interface EvaluationResultsListLatest {
  /** List the latest version of each EvaluationResult */
  get(
    options?: EvaluationResultsListLatestParameters,
  ): StreamableMethod<
    | EvaluationResultsListLatest200Response
    | EvaluationResultsListLatestDefaultResponse
  >;
}

export interface EvaluationResultsGetVersion {
  /** Get the specific version of the EvaluationResult */
  get(
    options?: EvaluationResultsGetVersionParameters,
  ): StreamableMethod<
    | EvaluationResultsGetVersion200Response
    | EvaluationResultsGetVersionDefaultResponse
  >;
  /** Delete the specific version of the EvaluationResult */
  delete(
    options?: EvaluationResultsDeleteVersionParameters,
  ): StreamableMethod<
    | EvaluationResultsDeleteVersion204Response
    | EvaluationResultsDeleteVersionDefaultResponse
  >;
  /** Create a new or update an existing EvaluationResult with the given version id */
  patch(
    options: EvaluationResultsCreateOrUpdateVersionParameters,
  ): StreamableMethod<
    | EvaluationResultsCreateOrUpdateVersion200Response
    | EvaluationResultsCreateOrUpdateVersion201Response
    | EvaluationResultsCreateOrUpdateVersionDefaultResponse
  >;
}

export interface EvaluationResultsStartPendingUpload {
  /** Create or start a pending upload of a evaluation results for a specific version. */
  post(
    options: EvaluationResultsStartPendingUploadParameters,
  ): StreamableMethod<
    | EvaluationResultsStartPendingUpload200Response
    | EvaluationResultsStartPendingUploadDefaultResponse
  >;
}

export interface EvaluationResultsGetCredentials {
  /** Enable downloading json. */
  post(
    options: EvaluationResultsGetCredentialsParameters,
  ): StreamableMethod<
    | EvaluationResultsGetCredentials200Response
    | EvaluationResultsGetCredentialsDefaultResponse
  >;
}

export interface EvaluationResultsGetAgentEvaluationResults {
  /** Get agent evaluation results. */
  get(
    options?: EvaluationResultsGetAgentEvaluationResultsParameters,
  ): StreamableMethod<
    | EvaluationResultsGetAgentEvaluationResults201Response
    | EvaluationResultsGetAgentEvaluationResultsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/connections/\{name\}' has methods for the following verbs: get */
  (path: "/connections/{name}", name: string): ConnectionsGet;
  /** Resource for '/connections/\{name\}/withCredentials' has methods for the following verbs: post */
  (
    path: "/connections/{name}/withCredentials",
    name: string,
  ): ConnectionsGetWithCredentials;
  /** Resource for '/connections' has methods for the following verbs: get */
  (path: "/connections"): ConnectionsList;
  /** Resource for '/connections/withCredentials' has methods for the following verbs: post */
  (path: "/connections/withCredentials"): ConnectionsListWithCredentials;
  /** Resource for '/evaluations/runs/\{name\}' has methods for the following verbs: get */
  (path: "/evaluations/runs/{name}", name: string): EvaluationsGet;
  /** Resource for '/evaluations/runs' has methods for the following verbs: get */
  (path: "/evaluations/runs"): EvaluationsList;
  /** Resource for '/evaluations/runs:run' has methods for the following verbs: post */
  (path: "/evaluations/runs:run"): EvaluationsCreateRun;
  /** Resource for '/evaluations/runs:runAgent' has methods for the following verbs: post */
  (path: "/evaluations/runs:runAgent"): EvaluationsCreateAgentEvaluation;
  /** Resource for '/evaluations/checkannotation' has methods for the following verbs: get */
  (path: "/evaluations/checkannotation"): EvaluationsCheckAnnotation;
  /** Resource for '/evaluations/submitannotation' has methods for the following verbs: post */
  (path: "/evaluations/submitannotation"): EvaluationsSubmitAnnotation;
  /** Resource for '/evaluations/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/evaluations/operations/{operationId}",
    operationId: string,
  ): EvaluationsOperationResults;
  /** Resource for '/evaluations/runs:upload' has methods for the following verbs: post */
  (path: "/evaluations/runs:upload"): EvaluationsUploadRun;
  /** Resource for '/evaluations/runs:updateUpload/\{name\}' has methods for the following verbs: patch */
  (
    path: "/evaluations/runs:updateUpload/{name}",
    name: string,
  ): EvaluationsUploadUpdateRun;
  /** Resource for '/datasets/\{name\}/versions' has methods for the following verbs: get */
  (path: "/datasets/{name}/versions", name: string): DatasetsListVersions;
  /** Resource for '/datasets' has methods for the following verbs: get */
  (path: "/datasets"): DatasetsListLatest;
  /** Resource for '/datasets/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, patch */
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
  ): DatasetsStartPendingUploadVersion;
  /** Resource for '/datasets/\{name\}/versions/\{version\}/credentials' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/versions/{version}/credentials",
    name: string,
    version: string,
  ): DatasetsGetCredentials;
  /** Resource for '/indexes/\{name\}/versions' has methods for the following verbs: get */
  (path: "/indexes/{name}/versions", name: string): IndexesListVersions;
  /** Resource for '/indexes' has methods for the following verbs: get */
  (path: "/indexes"): IndexesListLatest;
  /** Resource for '/indexes/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, patch */
  (
    path: "/indexes/{name}/versions/{version}",
    name: string,
    version: string,
  ): IndexesGetVersion;
  /** Resource for '/deployments/\{name\}' has methods for the following verbs: get */
  (path: "/deployments/{name}", name: string): DeploymentsGet;
  /** Resource for '/deployments' has methods for the following verbs: get */
  (path: "/deployments"): DeploymentsList;
  /** Resource for '/redTeams/runs/\{name\}' has methods for the following verbs: get */
  (path: "/redTeams/runs/{name}", name: string): RedTeamsGet;
  /** Resource for '/redTeams/runs' has methods for the following verbs: get */
  (path: "/redTeams/runs"): RedTeamsList;
  /** Resource for '/redTeams/runs:run' has methods for the following verbs: post */
  (path: "/redTeams/runs:run"): RedTeamsCreateRun;
  /** Resource for '/redTeams/runs:upload' has methods for the following verbs: post */
  (path: "/redTeams/runs:upload"): RedTeamsUploadRun;
  /** Resource for '/redTeams/runs:updateUpload/\{name\}' has methods for the following verbs: patch */
  (
    path: "/redTeams/runs:updateUpload/{name}",
    name: string,
  ): RedTeamsUploadUpdateRun;
  /** Resource for '/redTeams/simulation/jailbreak/\{type\}' has methods for the following verbs: get */
  (
    path: "/redTeams/simulation/jailbreak/{type}",
    type: string,
  ): RedTeamsGetJailBreakDatasetWithType;
  /** Resource for '/redTeams/simulation/attackobjectives' has methods for the following verbs: get */
  (path: "/redTeams/simulation/attackobjectives"): RedTeamsGetAttackObjectives;
  /** Resource for '/redTeams/simulation/jailbreak/' has methods for the following verbs: get */
  (path: "/redTeams/simulation/jailbreak/"): RedTeamsGetJailBreakDataset;
  /** Resource for '/redTeams/simulation/template/parameters/\{type\}' has methods for the following verbs: get */
  (
    path: "/redTeams/simulation/template/parameters/{type}",
    type: string,
  ): RedTeamsGetTemplateParametersWithType;
  /** Resource for '/redTeams/simulation/template/parameters/' has methods for the following verbs: get */
  (
    path: "/redTeams/simulation/template/parameters/",
  ): RedTeamsGetTemplateParameters;
  /** Resource for '/redTeams/simulation/template/parameters/image' has methods for the following verbs: get */
  (
    path: "/redTeams/simulation/template/parameters/image",
  ): RedTeamsGetTemplateParametersImage;
  /** Resource for '/redTeams/simulation/chat/completions/submit' has methods for the following verbs: post */
  (
    path: "/redTeams/simulation/chat/completions/submit",
  ): RedTeamsSubmitSimulation;
  /** Resource for '/evaluationResults/\{name\}/versions' has methods for the following verbs: get */
  (
    path: "/evaluationResults/{name}/versions",
    name: string,
  ): EvaluationResultsListVersions;
  /** Resource for '/evaluationResults' has methods for the following verbs: get */
  (path: "/evaluationResults"): EvaluationResultsListLatest;
  /** Resource for '/evaluationResults/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, patch */
  (
    path: "/evaluationResults/{name}/versions/{version}",
    name: string,
    version: string,
  ): EvaluationResultsGetVersion;
  /** Resource for '/evaluationResults/\{name\}/versions/\{version\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/evaluationResults/{name}/versions/{version}/startPendingUpload",
    name: string,
    version: string,
  ): EvaluationResultsStartPendingUpload;
  /** Resource for '/evaluationResults/\{name\}/versions/\{version\}/credentials' has methods for the following verbs: post */
  (
    path: "/evaluationResults/{name}/versions/{version}/credentials",
    name: string,
    version: string,
  ): EvaluationResultsGetCredentials;
  /** Resource for '/runs/agents/\{runId\}' has methods for the following verbs: get */
  (
    path: "/runs/agents/{runId}",
    runId: string,
  ): EvaluationResultsGetAgentEvaluationResults;
}

export type ProjectsClient = Client & {
  path: Routes;
};
