// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetParameters,
  CreateOrUpdateParameters,
  DeleteParameters,
  ValidateParameters,
  ListParameters,
} from "./parameters.js";
import type {
  Get200Response,
  GetDefaultResponse,
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  Delete204Response,
  DeleteDefaultResponse,
  Validate200Response,
  ValidateDefaultResponse,
  List200Response,
  ListDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  /** Fetch a Metric by Id. */
  get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Creates or updates a Metric asynchronously. */
  patch(
    options: CreateOrUpdateParameters,
  ): StreamableMethod<
    CreateOrUpdate200Response | CreateOrUpdate201Response | CreateOrUpdateDefaultResponse
  >;
  /** Delete a Metric asynchronously. */
  delete(options?: DeleteParameters): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export interface Validate {
  /** Validates a Metric. */
  post(
    options: ValidateParameters,
  ): StreamableMethod<Validate200Response | ValidateDefaultResponse>;
}

export interface List {
  /** List Metrics resources */
  get(options?: ListParameters): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface Routes {
  /** Resource for '/workspaces/\{workspaceId\}/metrics/\{metricId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/workspaces/{workspaceId}/metrics/{metricId}",
    workspaceId: string,
    metricId: string,
  ): Get;
  /** Resource for '/workspaces/\{workspaceId\}/metrics/\{metricId\}:validate' has methods for the following verbs: post */
  (
    path: "/workspaces/{workspaceId}/metrics/{metricId}:validate",
    workspaceId: string,
    metricId: string,
  ): Validate;
  /** Resource for '/workspaces/\{workspaceId\}/metrics' has methods for the following verbs: get */
  (path: "/workspaces/{workspaceId}/metrics", workspaceId: string): List;
}

export type OnlineExperimentationClient = Client & {
  path: Routes;
};
