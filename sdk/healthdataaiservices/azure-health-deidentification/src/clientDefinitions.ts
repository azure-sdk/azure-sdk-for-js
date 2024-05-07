// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateJobParameters,
  GetJobParameters,
  DeleteJobParameters,
  ListJobsParameters,
  ListJobFilesParameters,
  CancelJobParameters,
  DeidentifyParameters,
} from "./parameters.js";
import {
  CreateJob200Response,
  CreateJob201Response,
  CreateJobDefaultResponse,
  GetJob200Response,
  GetJobDefaultResponse,
  DeleteJob204Response,
  DeleteJobDefaultResponse,
  ListJobs200Response,
  ListJobsDefaultResponse,
  ListJobFiles200Response,
  ListJobFilesDefaultResponse,
  CancelJob200Response,
  CancelJobDefaultResponse,
  Deidentify200Response,
  DeidentifyDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateJob {
  /** Long-running resource create or replace operation template. */
  put(
    options: CreateJobParameters,
  ): StreamableMethod<
    CreateJob200Response | CreateJob201Response | CreateJobDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: GetJobParameters,
  ): StreamableMethod<GetJob200Response | GetJobDefaultResponse>;
  /** Removes the record of the job from the service. Does not delete any files. */
  delete(
    options?: DeleteJobParameters,
  ): StreamableMethod<DeleteJob204Response | DeleteJobDefaultResponse>;
}

export interface ListJobs {
  /** Resource list operation template. */
  get(
    options?: ListJobsParameters,
  ): StreamableMethod<ListJobs200Response | ListJobsDefaultResponse>;
}

export interface ListJobFiles {
  /** Resource list operation template. */
  get(
    options?: ListJobFilesParameters,
  ): StreamableMethod<ListJobFiles200Response | ListJobFilesDefaultResponse>;
}

export interface CancelJob {
  /**
   * Cancels a job that is in progress.
   *
   * The job will be marked as canceled and the service will stop processing the job. The service will not delete any files that have already been processed.
   *
   * If the job is already complete, this will have no effect.
   */
  post(
    options?: CancelJobParameters,
  ): StreamableMethod<CancelJob200Response | CancelJobDefaultResponse>;
}

export interface Deidentify {
  /** A remote procedure call (RPC) operation. */
  post(
    options: DeidentifyParameters,
  ): StreamableMethod<Deidentify200Response | DeidentifyDefaultResponse>;
}

export interface Routes {
  /** Resource for '/jobs/\{name\}' has methods for the following verbs: put, get, delete */
  (path: "/jobs/{name}", name: string): CreateJob;
  /** Resource for '/jobs' has methods for the following verbs: get */
  (path: "/jobs"): ListJobs;
  /** Resource for '/jobs/\{name\}/files' has methods for the following verbs: get */
  (path: "/jobs/{name}/files", name: string): ListJobFiles;
  /** Resource for '/jobs/\{name\}:cancelJob' has methods for the following verbs: post */
  (path: "/jobs/{name}:cancelJob", name: string): CancelJob;
  /** Resource for '/deid' has methods for the following verbs: post */
  (path: "/deid"): Deidentify;
}

export type DeidentificationClient = Client & {
  path: Routes;
};
