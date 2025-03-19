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
  /** Fetch a ExperimentMetric by Id. */
  get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Creates or updates a ExperimentMetric asynchronously. */
  patch(
    options: CreateOrUpdateParameters,
  ): StreamableMethod<
    CreateOrUpdate200Response | CreateOrUpdate201Response | CreateOrUpdateDefaultResponse
  >;
  /** Delete a ExperimentMetric asynchronously. */
  delete(options?: DeleteParameters): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export interface Validate {
  /** Validates a ExperimentMetric. */
  post(
    options: ValidateParameters,
  ): StreamableMethod<Validate200Response | ValidateDefaultResponse>;
}

export interface List {
  /** List ExperimentMetric resources */
  get(options?: ListParameters): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface Routes {
  /** Resource for '/experiment-metrics/\{experimentMetricId\}' has methods for the following verbs: get, patch, delete */
  (path: "/experiment-metrics/{experimentMetricId}", experimentMetricId: string): Get;
  /** Resource for '/experiment-metrics/\{experimentMetricId\}:validate' has methods for the following verbs: post */
  (path: "/experiment-metrics/{experimentMetricId}:validate", experimentMetricId: string): Validate;
  /** Resource for '/experiment-metrics' has methods for the following verbs: get */
  (path: "/experiment-metrics"): List;
}

export type OnlineExperimentationClient = Client & {
  path: Routes;
};
