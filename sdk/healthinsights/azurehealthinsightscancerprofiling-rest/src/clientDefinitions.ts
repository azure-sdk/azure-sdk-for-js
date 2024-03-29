// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetJobParameters, CreateJobParameters } from "./parameters";
import {
  GetJob200Response,
  GetJobDefaultResponse,
  CreateJob202Response,
  CreateJobDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetJob {
  /** Gets the status and details of the Onco Phenotype job. */
  get(
    options?: GetJobParameters,
  ): StreamableMethod<GetJob200Response | GetJobDefaultResponse>;
}

export interface CreateJob {
  /** Creates an Onco Phenotype job with the given request body. */
  post(
    options?: CreateJobParameters,
  ): StreamableMethod<CreateJob202Response | CreateJobDefaultResponse>;
}

export interface Routes {
  /** Resource for '/onco-phenotype/jobs/\{id\}' has methods for the following verbs: get */
  (path: "/onco-phenotype/jobs/{id}", id: string): GetJob;
  /** Resource for '/onco-phenotype/jobs' has methods for the following verbs: post */
  (path: "/onco-phenotype/jobs"): CreateJob;
}

export type AzureHealthInsightsClient = Client & {
  path: Routes;
};
