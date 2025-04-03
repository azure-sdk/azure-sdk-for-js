// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ConnectionsGetParameters,
  ConnectionsListParameters,
  EvaluationsEvaluationsGetParameters,
  EvaluationsEvaluationsListParameters,
  EvaluationsEvaluationsCreateRunParameters,
  DatasetsDatasetsListVersionsParameters,
  DatasetsDatasetsCreateParameters,
  DatasetsDatasetsListLatestParameters,
  DatasetsDatasetsGetVersionParameters,
  DatasetsDatasetsDeleteVersionParameters,
  DatasetsDatasetsCreateVersionParameters,
  DatasetsDatasetsStartPendingUploadVersionParameters,
  DatasetsDatasetsStartPendingUploadParameters,
  IndexesIndexesListVersionsParameters,
  IndexesIndexesCreateParameters,
  IndexesIndexesListLatestParameters,
  IndexesIndexesGetVersionParameters,
  IndexesIndexesDeleteVersionParameters,
  IndexesIndexesCreateVersionParameters,
  DeploymentsDeploymentsGetParameters,
  DeploymentsDeploymentsListParameters,
  EvaluationResultsEvaluationResultsListVersionsParameters,
  EvaluationResultsEvaluationResultsCreateParameters,
  EvaluationResultsEvaluationResultsListLatestParameters,
  EvaluationResultsEvaluationResultsGetVersionParameters,
  EvaluationResultsEvaluationResultsDeleteVersionParameters,
  EvaluationResultsEvaluationResultsCreateVersionParameters,
  EvaluationResultsEvaluationResultsStartPendingUploadParameters,
  RedTeamsRedTeamsGetParameters,
  RedTeamsRedTeamsListParameters,
  RedTeamsRedTeamsCreateRunParameters,
} from "./parameters.js";
import type {
  ConnectionsGet200Response,
  ConnectionsGetDefaultResponse,
  ConnectionsList200Response,
  ConnectionsListDefaultResponse,
  EvaluationsEvaluationsGet200Response,
  EvaluationsEvaluationsGetDefaultResponse,
  EvaluationsEvaluationsList200Response,
  EvaluationsEvaluationsListDefaultResponse,
  EvaluationsEvaluationsCreateRun200Response,
  EvaluationsEvaluationsCreateRunDefaultResponse,
  DatasetsDatasetsListVersions200Response,
  DatasetsDatasetsListVersionsDefaultResponse,
  DatasetsDatasetsCreate200Response,
  DatasetsDatasetsCreateDefaultResponse,
  DatasetsDatasetsListLatest200Response,
  DatasetsDatasetsListLatestDefaultResponse,
  DatasetsDatasetsGetVersion200Response,
  DatasetsDatasetsGetVersionDefaultResponse,
  DatasetsDatasetsDeleteVersion204Response,
  DatasetsDatasetsDeleteVersionDefaultResponse,
  DatasetsDatasetsCreateVersion200Response,
  DatasetsDatasetsCreateVersion201Response,
  DatasetsDatasetsCreateVersionDefaultResponse,
  DatasetsDatasetsStartPendingUploadVersion200Response,
  DatasetsDatasetsStartPendingUploadVersionDefaultResponse,
  DatasetsDatasetsStartPendingUpload200Response,
  DatasetsDatasetsStartPendingUploadDefaultResponse,
  IndexesIndexesListVersions200Response,
  IndexesIndexesListVersionsDefaultResponse,
  IndexesIndexesCreate200Response,
  IndexesIndexesCreateDefaultResponse,
  IndexesIndexesListLatest200Response,
  IndexesIndexesListLatestDefaultResponse,
  IndexesIndexesGetVersion200Response,
  IndexesIndexesGetVersionDefaultResponse,
  IndexesIndexesDeleteVersion204Response,
  IndexesIndexesDeleteVersionDefaultResponse,
  IndexesIndexesCreateVersion200Response,
  IndexesIndexesCreateVersion201Response,
  IndexesIndexesCreateVersionDefaultResponse,
  DeploymentsDeploymentsGet200Response,
  DeploymentsDeploymentsGetDefaultResponse,
  DeploymentsDeploymentsList200Response,
  DeploymentsDeploymentsListDefaultResponse,
  EvaluationResultsEvaluationResultsListVersions200Response,
  EvaluationResultsEvaluationResultsListVersionsDefaultResponse,
  EvaluationResultsEvaluationResultsCreate200Response,
  EvaluationResultsEvaluationResultsCreateDefaultResponse,
  EvaluationResultsEvaluationResultsListLatest200Response,
  EvaluationResultsEvaluationResultsListLatestDefaultResponse,
  EvaluationResultsEvaluationResultsGetVersion200Response,
  EvaluationResultsEvaluationResultsGetVersionDefaultResponse,
  EvaluationResultsEvaluationResultsDeleteVersion204Response,
  EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse,
  EvaluationResultsEvaluationResultsCreateVersion200Response,
  EvaluationResultsEvaluationResultsCreateVersion201Response,
  EvaluationResultsEvaluationResultsCreateVersionDefaultResponse,
  EvaluationResultsEvaluationResultsStartPendingUpload200Response,
  EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse,
  RedTeamsRedTeamsGet200Response,
  RedTeamsRedTeamsGetDefaultResponse,
  RedTeamsRedTeamsList200Response,
  RedTeamsRedTeamsListDefaultResponse,
  RedTeamsRedTeamsCreateRun200Response,
  RedTeamsRedTeamsCreateRunDefaultResponse,
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

export interface EvaluationsEvaluationsGet {
  /** Get an evaluation run by name. */
  get(
    options?: EvaluationsEvaluationsGetParameters,
  ): StreamableMethod<
    | EvaluationsEvaluationsGet200Response
    | EvaluationsEvaluationsGetDefaultResponse
  >;
}

export interface EvaluationsEvaluationsList {
  /** List evaluation runs */
  get(
    options?: EvaluationsEvaluationsListParameters,
  ): StreamableMethod<
    | EvaluationsEvaluationsList200Response
    | EvaluationsEvaluationsListDefaultResponse
  >;
}

export interface EvaluationsEvaluationsCreateRun {
  /** Creates an evaluation run. */
  post(
    options: EvaluationsEvaluationsCreateRunParameters,
  ): StreamableMethod<
    | EvaluationsEvaluationsCreateRun200Response
    | EvaluationsEvaluationsCreateRunDefaultResponse
  >;
}

export interface DatasetsDatasetsListVersions {
  /** List all versions of the given DatasetVersion */
  get(
    options?: DatasetsDatasetsListVersionsParameters,
  ): StreamableMethod<
    | DatasetsDatasetsListVersions200Response
    | DatasetsDatasetsListVersionsDefaultResponse
  >;
  /** Create a new DatasetVersion. The version id will be generated by the service. */
  post(
    options: DatasetsDatasetsCreateParameters,
  ): StreamableMethod<
    DatasetsDatasetsCreate200Response | DatasetsDatasetsCreateDefaultResponse
  >;
}

export interface DatasetsDatasetsListLatest {
  /** List the latest version of each DatasetVersion */
  get(
    options?: DatasetsDatasetsListLatestParameters,
  ): StreamableMethod<
    | DatasetsDatasetsListLatest200Response
    | DatasetsDatasetsListLatestDefaultResponse
  >;
}

export interface DatasetsDatasetsGetVersion {
  /** Get the specific version of the DatasetVersion */
  get(
    options?: DatasetsDatasetsGetVersionParameters,
  ): StreamableMethod<
    | DatasetsDatasetsGetVersion200Response
    | DatasetsDatasetsGetVersionDefaultResponse
  >;
  /** Delete the specific version of the DatasetVersion */
  delete(
    options?: DatasetsDatasetsDeleteVersionParameters,
  ): StreamableMethod<
    | DatasetsDatasetsDeleteVersion204Response
    | DatasetsDatasetsDeleteVersionDefaultResponse
  >;
  /** Create a new or replace an existing DatasetVersion with the given version id */
  put(
    options: DatasetsDatasetsCreateVersionParameters,
  ): StreamableMethod<
    | DatasetsDatasetsCreateVersion200Response
    | DatasetsDatasetsCreateVersion201Response
    | DatasetsDatasetsCreateVersionDefaultResponse
  >;
}

export interface DatasetsDatasetsStartPendingUploadVersion {
  /** Create or start a pending upload of a dataset for a specific version. */
  post(
    options: DatasetsDatasetsStartPendingUploadVersionParameters,
  ): StreamableMethod<
    | DatasetsDatasetsStartPendingUploadVersion200Response
    | DatasetsDatasetsStartPendingUploadVersionDefaultResponse
  >;
}

export interface DatasetsDatasetsStartPendingUpload {
  /** Create or start a pending upload of a dataset. The version id will be generated by the service. */
  post(
    options: DatasetsDatasetsStartPendingUploadParameters,
  ): StreamableMethod<
    | DatasetsDatasetsStartPendingUpload200Response
    | DatasetsDatasetsStartPendingUploadDefaultResponse
  >;
}

export interface IndexesIndexesListVersions {
  /** List all versions of the given Index */
  get(
    options?: IndexesIndexesListVersionsParameters,
  ): StreamableMethod<
    | IndexesIndexesListVersions200Response
    | IndexesIndexesListVersionsDefaultResponse
  >;
  /** Create a new Index. The version id will be generated by the service. */
  post(
    options: IndexesIndexesCreateParameters,
  ): StreamableMethod<
    IndexesIndexesCreate200Response | IndexesIndexesCreateDefaultResponse
  >;
}

export interface IndexesIndexesListLatest {
  /** List the latest version of each Index */
  get(
    options?: IndexesIndexesListLatestParameters,
  ): StreamableMethod<
    | IndexesIndexesListLatest200Response
    | IndexesIndexesListLatestDefaultResponse
  >;
}

export interface IndexesIndexesGetVersion {
  /** Get the specific version of the Index */
  get(
    options?: IndexesIndexesGetVersionParameters,
  ): StreamableMethod<
    | IndexesIndexesGetVersion200Response
    | IndexesIndexesGetVersionDefaultResponse
  >;
  /** Delete the specific version of the Index */
  delete(
    options?: IndexesIndexesDeleteVersionParameters,
  ): StreamableMethod<
    | IndexesIndexesDeleteVersion204Response
    | IndexesIndexesDeleteVersionDefaultResponse
  >;
  /** Create a new or replace an existing Index with the given version id */
  put(
    options: IndexesIndexesCreateVersionParameters,
  ): StreamableMethod<
    | IndexesIndexesCreateVersion200Response
    | IndexesIndexesCreateVersion201Response
    | IndexesIndexesCreateVersionDefaultResponse
  >;
}

export interface DeploymentsDeploymentsGet {
  /** Get a deployed model. */
  get(
    options?: DeploymentsDeploymentsGetParameters,
  ): StreamableMethod<
    | DeploymentsDeploymentsGet200Response
    | DeploymentsDeploymentsGetDefaultResponse
  >;
}

export interface DeploymentsDeploymentsList {
  /** List all deployed models in the project */
  get(
    options?: DeploymentsDeploymentsListParameters,
  ): StreamableMethod<
    | DeploymentsDeploymentsList200Response
    | DeploymentsDeploymentsListDefaultResponse
  >;
}

export interface EvaluationResultsEvaluationResultsListVersions {
  /** List all versions of the given EvaluationResult */
  get(
    options?: EvaluationResultsEvaluationResultsListVersionsParameters,
  ): StreamableMethod<
    | EvaluationResultsEvaluationResultsListVersions200Response
    | EvaluationResultsEvaluationResultsListVersionsDefaultResponse
  >;
  /** Create a new EvaluationResult. The version id will be generated by the service. */
  post(
    options: EvaluationResultsEvaluationResultsCreateParameters,
  ): StreamableMethod<
    | EvaluationResultsEvaluationResultsCreate200Response
    | EvaluationResultsEvaluationResultsCreateDefaultResponse
  >;
}

export interface EvaluationResultsEvaluationResultsListLatest {
  /** List the latest version of each EvaluationResult */
  get(
    options?: EvaluationResultsEvaluationResultsListLatestParameters,
  ): StreamableMethod<
    | EvaluationResultsEvaluationResultsListLatest200Response
    | EvaluationResultsEvaluationResultsListLatestDefaultResponse
  >;
}

export interface EvaluationResultsEvaluationResultsGetVersion {
  /** Get the specific version of the EvaluationResult */
  get(
    options?: EvaluationResultsEvaluationResultsGetVersionParameters,
  ): StreamableMethod<
    | EvaluationResultsEvaluationResultsGetVersion200Response
    | EvaluationResultsEvaluationResultsGetVersionDefaultResponse
  >;
  /** Delete the specific version of the EvaluationResult */
  delete(
    options?: EvaluationResultsEvaluationResultsDeleteVersionParameters,
  ): StreamableMethod<
    | EvaluationResultsEvaluationResultsDeleteVersion204Response
    | EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse
  >;
  /** Create a new or replace an existing EvaluationResult with the given version id */
  put(
    options: EvaluationResultsEvaluationResultsCreateVersionParameters,
  ): StreamableMethod<
    | EvaluationResultsEvaluationResultsCreateVersion200Response
    | EvaluationResultsEvaluationResultsCreateVersion201Response
    | EvaluationResultsEvaluationResultsCreateVersionDefaultResponse
  >;
}

export interface EvaluationResultsEvaluationResultsStartPendingUpload {
  /** Create or start a pending upload of a evaluation results for a specific version. */
  post(
    options: EvaluationResultsEvaluationResultsStartPendingUploadParameters,
  ): StreamableMethod<
    | EvaluationResultsEvaluationResultsStartPendingUpload200Response
    | EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse
  >;
}

export interface RedTeamsRedTeamsGet {
  /** Get a redteam by name. */
  get(
    options?: RedTeamsRedTeamsGetParameters,
  ): StreamableMethod<
    RedTeamsRedTeamsGet200Response | RedTeamsRedTeamsGetDefaultResponse
  >;
}

export interface RedTeamsRedTeamsList {
  /** List a redteam by name. */
  get(
    options?: RedTeamsRedTeamsListParameters,
  ): StreamableMethod<
    RedTeamsRedTeamsList200Response | RedTeamsRedTeamsListDefaultResponse
  >;
}

export interface RedTeamsRedTeamsCreateRun {
  /** Creates a redteam run. */
  post(
    options: RedTeamsRedTeamsCreateRunParameters,
  ): StreamableMethod<
    | RedTeamsRedTeamsCreateRun200Response
    | RedTeamsRedTeamsCreateRunDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/connections/\{name\}' has methods for the following verbs: get */
  (path: "/connections/{name}", name: string): ConnectionsGet;
  /** Resource for '/connections' has methods for the following verbs: get */
  (path: "/connections"): ConnectionsList;
  /** Resource for '/evaluations/runs/\{name\}' has methods for the following verbs: get */
  (path: "/evaluations/runs/{name}", name: string): EvaluationsEvaluationsGet;
  /** Resource for '/evaluations/runs' has methods for the following verbs: get */
  (path: "/evaluations/runs"): EvaluationsEvaluationsList;
  /** Resource for '/evaluations/runs:run' has methods for the following verbs: post */
  (path: "/evaluations/runs:run"): EvaluationsEvaluationsCreateRun;
  /** Resource for '/datasets/\{name\}/versions' has methods for the following verbs: get, post */
  (
    path: "/datasets/{name}/versions",
    name: string,
  ): DatasetsDatasetsListVersions;
  /** Resource for '/datasets' has methods for the following verbs: get */
  (path: "/datasets"): DatasetsDatasetsListLatest;
  /** Resource for '/datasets/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put */
  (
    path: "/datasets/{name}/versions/{version}",
    name: string,
    version: string,
  ): DatasetsDatasetsGetVersion;
  /** Resource for '/datasets/\{name\}/versions/\{version\}/startPendingUploadVersion' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/versions/{version}/startPendingUploadVersion",
    name: string,
    version: string,
  ): DatasetsDatasetsStartPendingUploadVersion;
  /** Resource for '/datasets/\{name\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/datasets/{name}/startPendingUpload",
    name: string,
  ): DatasetsDatasetsStartPendingUpload;
  /** Resource for '/indexes/\{name\}/versions' has methods for the following verbs: get, post */
  (path: "/indexes/{name}/versions", name: string): IndexesIndexesListVersions;
  /** Resource for '/indexes' has methods for the following verbs: get */
  (path: "/indexes"): IndexesIndexesListLatest;
  /** Resource for '/indexes/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put */
  (
    path: "/indexes/{name}/versions/{version}",
    name: string,
    version: string,
  ): IndexesIndexesGetVersion;
  /** Resource for '/deployments/\{name\}' has methods for the following verbs: get */
  (path: "/deployments/{name}", name: string): DeploymentsDeploymentsGet;
  /** Resource for '/deployments' has methods for the following verbs: get */
  (path: "/deployments"): DeploymentsDeploymentsList;
  /** Resource for '/evaluationResults/\{name\}/versions' has methods for the following verbs: get, post */
  (
    path: "/evaluationResults/{name}/versions",
    name: string,
  ): EvaluationResultsEvaluationResultsListVersions;
  /** Resource for '/evaluationResults' has methods for the following verbs: get */
  (path: "/evaluationResults"): EvaluationResultsEvaluationResultsListLatest;
  /** Resource for '/evaluationResults/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put */
  (
    path: "/evaluationResults/{name}/versions/{version}",
    name: string,
    version: string,
  ): EvaluationResultsEvaluationResultsGetVersion;
  /** Resource for '/evaluationResults/\{name\}/versions/\{version\}/startPendingUpload' has methods for the following verbs: post */
  (
    path: "/evaluationResults/{name}/versions/{version}/startPendingUpload",
    name: string,
    version: string,
  ): EvaluationResultsEvaluationResultsStartPendingUpload;
  /** Resource for '/redTeams/runs/\{name\}' has methods for the following verbs: get */
  (path: "/redTeams/runs/{name}", name: string): RedTeamsRedTeamsGet;
  /** Resource for '/redTeams/runs' has methods for the following verbs: get */
  (path: "/redTeams/runs"): RedTeamsRedTeamsList;
  /** Resource for '/redTeams/runs:run' has methods for the following verbs: post */
  (path: "/redTeams/runs:run"): RedTeamsRedTeamsCreateRun;
}

export type ProjectsClient = Client & {
  path: Routes;
};
