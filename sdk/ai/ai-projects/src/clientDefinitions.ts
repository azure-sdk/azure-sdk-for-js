// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetWorkspaceParameters,
  ListConnectionsParameters,
  GetConnectionParameters,
  GetConnectionWithSecretsParameters,
  GetAppInsightsParameters,
  GetParameters,
  UpdateParameters,
  CreateParameters,
  ListParameters,
  GetScheduleParameters,
  CreateOrReplaceScheduleParameters,
  ListScheduleParameters,
  DisableScheduleParameters,
} from "./parameters.js";
import type {
  GetWorkspace200Response,
  GetWorkspaceDefaultResponse,
  ListConnections200Response,
  ListConnectionsDefaultResponse,
  GetConnection200Response,
  GetConnectionDefaultResponse,
  GetConnectionWithSecrets200Response,
  GetConnectionWithSecretsDefaultResponse,
  GetAppInsights200Response,
  GetAppInsightsDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Update200Response,
  UpdateDefaultResponse,
  Create201Response,
  List200Response,
  ListDefaultResponse,
  GetSchedule200Response,
  GetScheduleDefaultResponse,
  CreateOrReplaceSchedule200Response,
  CreateOrReplaceSchedule201Response,
  CreateOrReplaceScheduleDefaultResponse,
  ListSchedule200Response,
  ListScheduleDefaultResponse,
  DisableSchedule204Response,
  DisableScheduleDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetWorkspace {
  /** Gets the properties of the specified machine learning workspace. */
  get(
    options?: GetWorkspaceParameters,
  ): StreamableMethod<GetWorkspace200Response | GetWorkspaceDefaultResponse>;
}

export interface ListConnections {
  /** List the details of all the connections (not including their credentials) */
  get(
    options?: ListConnectionsParameters,
  ): StreamableMethod<
    ListConnections200Response | ListConnectionsDefaultResponse
  >;
}

export interface GetConnection {
  /** Get the details of a single connection, without credentials. */
  get(
    options?: GetConnectionParameters,
  ): StreamableMethod<GetConnection200Response | GetConnectionDefaultResponse>;
}

export interface GetConnectionWithSecrets {
  /** Get the details of a single connection, including credentials (if available). */
  post(
    options: GetConnectionWithSecretsParameters,
  ): StreamableMethod<
    | GetConnectionWithSecrets200Response
    | GetConnectionWithSecretsDefaultResponse
  >;
}

export interface GetAppInsights {
  /** Gets the properties of the specified Application Insights resource */
  get(
    options?: GetAppInsightsParameters,
  ): StreamableMethod<
    GetAppInsights200Response | GetAppInsightsDefaultResponse
  >;
}

export interface Get {
  /** Resource read operation template. */
  get(
    options?: GetParameters,
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Resource update operation template. */
  patch(
    options: UpdateParameters,
  ): StreamableMethod<Update200Response | UpdateDefaultResponse>;
}

export interface Create {
  /** Run the evaluation. */
  post(options: CreateParameters): StreamableMethod<Create201Response>;
}

export interface List {
  /** Resource list operation template. */
  get(
    options?: ListParameters,
  ): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface GetSchedule {
  /** Resource read operation template. */
  get(
    options?: GetScheduleParameters,
  ): StreamableMethod<GetSchedule200Response | GetScheduleDefaultResponse>;
  /** Create or replace operation template. */
  put(
    options: CreateOrReplaceScheduleParameters,
  ): StreamableMethod<
    | CreateOrReplaceSchedule200Response
    | CreateOrReplaceSchedule201Response
    | CreateOrReplaceScheduleDefaultResponse
  >;
}

export interface ListSchedule {
  /** Resource list operation template. */
  get(
    options?: ListScheduleParameters,
  ): StreamableMethod<ListSchedule200Response | ListScheduleDefaultResponse>;
}

export interface DisableSchedule {
  /** Disable the evaluation schedule. */
  patch(
    options?: DisableScheduleParameters,
  ): StreamableMethod<
    DisableSchedule204Response | DisableScheduleDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/' has methods for the following verbs: get */
  (path: "/"): GetWorkspace;
  /** Resource for '/connections' has methods for the following verbs: get */
  (path: "/connections"): ListConnections;
  /** Resource for '/connections/\{connectionName\}' has methods for the following verbs: get */
  (
    path: "/connections/{connectionName}",
    connectionName: string,
  ): GetConnection;
  /** Resource for '/connections/\{connectionName\}/listsecrets' has methods for the following verbs: post */
  (
    path: "/connections/{connectionName}/listsecrets",
    connectionName: string,
  ): GetConnectionWithSecrets;
  /** Resource for '/\{appInsightsResourceUrl\}' has methods for the following verbs: get */
  (
    path: "/{appInsightsResourceUrl}",
    appInsightsResourceUrl: string,
  ): GetAppInsights;
  /** Resource for '/evaluations/runs/\{id\}' has methods for the following verbs: get, patch */
  (path: "/evaluations/runs/{id}", id: string): Get;
  /** Resource for '/evaluations/runs:run' has methods for the following verbs: post */
  (path: "/evaluations/runs:run"): Create;
  /** Resource for '/evaluations/runs' has methods for the following verbs: get */
  (path: "/evaluations/runs"): List;
  /** Resource for '/evaluations/schedules/\{name\}' has methods for the following verbs: get, put */
  (path: "/evaluations/schedules/{name}", name: string): GetSchedule;
  /** Resource for '/evaluations/schedules' has methods for the following verbs: get */
  (path: "/evaluations/schedules"): ListSchedule;
  /** Resource for '/evaluations/schedules/\{name\}/disable' has methods for the following verbs: patch */
  (
    path: "/evaluations/schedules/{name}/disable",
    name: string,
  ): DisableSchedule;
}

export type ProjectsClient = Client & {
  path: Routes;
};
