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
  DatasetsListVersionsParameters,
  DatasetsListLatestParameters,
  DatasetsGetVersionParameters,
  DatasetsDeleteVersionParameters,
  DatasetsCreateVersionParameters,
  DatasetsCreateOrUpdateVersionParameters,
  DatasetsStartPendingUploadVersionParameters,
  DatasetsGetCredentialsParameters,
  IndexesListVersionsParameters,
  IndexesListLatestParameters,
  IndexesGetVersionParameters,
  IndexesDeleteVersionParameters,
  IndexesCreateVersionParameters,
  IndexesCreateOrUpdateVersionParameters,
  DeploymentsGetParameters,
  DeploymentsListParameters,
  RedTeamsGetParameters,
  RedTeamsListParameters,
  RedTeamsCreateRunParameters,
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
  DatasetsListVersions200Response,
  DatasetsListVersionsDefaultResponse,
  DatasetsListLatest200Response,
  DatasetsListLatestDefaultResponse,
  DatasetsGetVersion200Response,
  DatasetsGetVersionDefaultResponse,
  DatasetsDeleteVersion204Response,
  DatasetsDeleteVersionDefaultResponse,
  DatasetsCreateVersion200Response,
  DatasetsCreateVersion201Response,
  DatasetsCreateVersionDefaultResponse,
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
  IndexesCreateVersion200Response,
  IndexesCreateVersion201Response,
  IndexesCreateVersionDefaultResponse,
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
  /** Create a new or replace an existing DatasetVersion with the given version id */
  put(
    options: DatasetsCreateVersionParameters,
  ): StreamableMethod<
    | DatasetsCreateVersion200Response
    | DatasetsCreateVersion201Response
    | DatasetsCreateVersionDefaultResponse
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
  /** Create a new or replace an existing Index with the given version id */
  put(
    options: IndexesCreateVersionParameters,
  ): StreamableMethod<
    | IndexesCreateVersion200Response
    | IndexesCreateVersion201Response
    | IndexesCreateVersionDefaultResponse
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
  /** Resource for '/datasets/\{name\}/versions' has methods for the following verbs: get */
  (path: "/datasets/{name}/versions", name: string): DatasetsListVersions;
  /** Resource for '/datasets' has methods for the following verbs: get */
  (path: "/datasets"): DatasetsListLatest;
  /** Resource for '/datasets/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put, patch */
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
  /** Resource for '/indexes/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete, put, patch */
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
}

export type ProjectsClient = Client & {
  path: Routes;
};
