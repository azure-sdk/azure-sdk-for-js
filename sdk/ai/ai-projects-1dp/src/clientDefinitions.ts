// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ConnectionsGetParameters,
  ConnectionsListParameters,
  EvaluationsGetParameters,
  EvaluationsListParameters,
  EvaluationsCreateRunParameters,
  EvaluationsCreateAgentRunParameters,
  EvaluationsCheckAnnotationParameters,
  EvaluationsSubmitAnnotationParameters,
  EvaluationsUploadRunParameters,
  EvaluationsUploadUpdateRunParameters,
  DatasetsListVersionsParameters,
  DatasetsCreateParameters,
  DatasetsListLatestParameters,
  DatasetsGetVersionParameters,
  DatasetsDeleteVersionParameters,
  DatasetsCreateVersionParameters,
  DatasetsStartPendingUploadVersionParameters,
  DatasetsStartPendingUploadParameters,
  DatasetsFetchAssetCredentialsParameters,
  IndexesListVersionsParameters,
  IndexesCreateParameters,
  IndexesListLatestParameters,
  IndexesGetVersionParameters,
  IndexesDeleteVersionParameters,
  IndexesCreateVersionParameters,
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
  EvaluationResultsCreateParameters,
  EvaluationResultsListLatestParameters,
  EvaluationResultsGetVersionParameters,
  EvaluationResultsDeleteVersionParameters,
  EvaluationResultsCreateVersionParameters,
  EvaluationResultsStartPendingUploadParameters,
  EvaluationResultsFetchAssetCredentialsParameters,
  EvaluationResultsGetAgentEvaluationResultsParameters,
} from "./parameters.js";
import type {
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
  EvaluationsCreateAgentRun200Response,
  EvaluationsCreateAgentRunDefaultResponse,
  EvaluationsCheckAnnotation200Response,
  EvaluationsSubmitAnnotation202Response,
  EvaluationsUploadRun200Response,
  EvaluationsUploadRunDefaultResponse,
  EvaluationsUploadUpdateRun200Response,
  EvaluationsUploadUpdateRunDefaultResponse,
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
  DatasetsFetchAssetCredentials200Response,
  DatasetsFetchAssetCredentialsDefaultResponse,
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
  RedTeamsGet200Response,
  RedTeamsGetDefaultResponse,
  RedTeamsList200Response,
  RedTeamsListDefaultResponse,
  RedTeamsCreateRun200Response,
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
  EvaluationResultsFetchAssetCredentials200Response,
  EvaluationResultsFetchAssetCredentialsDefaultResponse,
  EvaluationResultsGetAgentEvaluationResults200Response,
  EvaluationResultsGetAgentEvaluationResultsDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

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

export interface EvaluationsCreateAgentRun {
  /** Creates an evaluation run for agent continuous evaluation. */
  post(
    options: EvaluationsCreateAgentRunParameters,
  ): StreamableMethod<
    | EvaluationsCreateAgentRun200Response
    | EvaluationsCreateAgentRunDefaultResponse
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

export interface DatasetsStartPendingUploadVersion {
  /** Create or start a pending upload of a dataset for a specific version. */
  post(
    options: DatasetsStartPendingUploadVersionParameters,
  ): StreamableMethod<
    | DatasetsStartPendingUploadVersion200Response
    | DatasetsStartPendingUploadVersionDefaultResponse
  >;
}

export interface DatasetsStartPendingUpload {
  /** Create or start a pending upload of a dataset. The version id will be generated by the service. */
  post(
    options: DatasetsStartPendingUploadParameters,
  ): StreamableMethod<
    | DatasetsStartPendingUpload200Response
    | DatasetsStartPendingUploadDefaultResponse
  >;
}

export interface DatasetsFetchAssetCredentials {
  /** Enable downloading json. */
  post(
    options: DatasetsFetchAssetCredentialsParameters,
  ): StreamableMethod<
    | DatasetsFetchAssetCredentials200Response
    | DatasetsFetchAssetCredentialsDefaultResponse
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
    RedTeamsCreateRun200Response | RedTeamsCreateRunDefaultResponse
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
  /** Create a new EvaluationResult. The version id will be generated by the service. */
  post(
    options: EvaluationResultsCreateParameters,
  ): StreamableMethod<
    EvaluationResultsCreate200Response | EvaluationResultsCreateDefaultResponse
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
  /** Create a new or replace an existing EvaluationResult with the given version id */
  put(
    options: EvaluationResultsCreateVersionParameters,
  ): StreamableMethod<
    | EvaluationResultsCreateVersion200Response
    | EvaluationResultsCreateVersion201Response
    | EvaluationResultsCreateVersionDefaultResponse
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

export interface EvaluationResultsFetchAssetCredentials {
  /** Enable downloading json. */
  post(
    options: EvaluationResultsFetchAssetCredentialsParameters,
  ): StreamableMethod<
    | EvaluationResultsFetchAssetCredentials200Response
    | EvaluationResultsFetchAssetCredentialsDefaultResponse
  >;
}

export interface EvaluationResultsGetAgentEvaluationResults {
  /** Get agent evaluation results. */
  get(
    options?: EvaluationResultsGetAgentEvaluationResultsParameters,
  ): StreamableMethod<
    | EvaluationResultsGetAgentEvaluationResults200Response
    | EvaluationResultsGetAgentEvaluationResultsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/connections/\{name\}' has methods for the following verbs: get */
  (path: "/connections/{name}", name: string): ConnectionsGet;
  /** Resource for '/connections' has methods for the following verbs: get */
  (path: "/connections"): ConnectionsList;
  /** Resource for '/evaluations/runs/\{name\}' has methods for the following verbs: get */
  (path: "/evaluations/runs/{name}", name: string): EvaluationsGet;
  /** Resource for '/evaluations/runs' has methods for the following verbs: get */
  (path: "/evaluations/runs"): EvaluationsList;
  /** Resource for '/evaluations/runs:run' has methods for the following verbs: post */
  (path: "/evaluations/runs:run"): EvaluationsCreateRun;
  /** Resource for '/evaluations/runs:agents' has methods for the following verbs: post */
  (path: "/evaluations/runs:agents"): EvaluationsCreateAgentRun;
  /** Resource for '/evaluations/checkannotation' has methods for the following verbs: get */
  (path: "/evaluations/checkannotation"): EvaluationsCheckAnnotation;
  /** Resource for '/evaluations/submitannotation' has methods for the following verbs: post */
  (path: "/evaluations/submitannotation"): EvaluationsSubmitAnnotation;
  /** Resource for '/evaluations/runs:upload' has methods for the following verbs: post */
  (path: "/evaluations/runs:upload"): EvaluationsUploadRun;
  /** Resource for '/evaluations/runs:updateUpload/\{name\}' has methods for the following verbs: patch */
  (
    path: "/evaluations/runs:updateUpload/{name}",
    name: string,
  ): EvaluationsUploadUpdateRun;
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
  ): DatasetsStartPendingUploadVersion;
  /** Resource for '/datasets/\{name\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/startPendingUpload",
    name: string,
  ): DatasetsStartPendingUpload;
  /** Resource for '/datasets/\{name\}/versions/\{version\}/credentials' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/versions/{version}/credentials",
    name: string,
    version: string,
  ): DatasetsFetchAssetCredentials;
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
  /** Resource for '/evaluationResult/\{name\}/versions' has methods for the following verbs: get, post */
  (
    path: "/evaluationResult/{name}/versions",
    name: string,
  ): EvaluationResultsListVersions;
  /** Resource for '/evaluationResult' has methods for the following verbs: get */
  (path: "/evaluationResult"): EvaluationResultsListLatest;
  /** Resource for '/evaluationResult/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put */
  (
    path: "/evaluationResult/{name}/versions/{version}",
    name: string,
    version: string,
  ): EvaluationResultsGetVersion;
  /** Resource for '/evaluationResult/\{name\}/versions/\{version\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/evaluationResult/{name}/versions/{version}/startPendingUpload",
    name: string,
    version: string,
  ): EvaluationResultsStartPendingUpload;
  /** Resource for '/evaluationResult/\{name\}/versions/\{version\}/credentials' has methods for the following verbs: post */
  (
    path: "/evaluationResult/{name}/versions/{version}/credentials",
    name: string,
    version: string,
  ): EvaluationResultsFetchAssetCredentials;
  /** Resource for '/runs:agents/\{completionId\}' has methods for the following verbs: get */
  (
    path: "/runs:agents/{completionId}",
    completionId: string,
  ): EvaluationResultsGetAgentEvaluationResults;
}

export type ProjectsClient = Client & {
  path: Routes;
};
