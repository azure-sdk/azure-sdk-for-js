// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateParameters,
  GetParameters,
  DeleteParameters,
  ListParameters,
  ListFilesParameters,
  CancelParameters,
  DeidParameters,
} from "./parameters.js";
import {
  Create200Response,
  Create201Response,
  CreateDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Delete204Response,
  DeleteDefaultResponse,
  List200Response,
  ListDefaultResponse,
  ListFiles200Response,
  ListFilesDefaultResponse,
  Cancel200Response,
  CancelDefaultResponse,
  Deid200Response,
  DeidDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Create {
  /** Long-running resource create or replace operation template. */
  put(
    options: CreateParameters,
  ): StreamableMethod<
    Create200Response | Create201Response | CreateDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: GetParameters,
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Removes the record of the job from the service. Does not delete any files. */
  delete(
    options?: DeleteParameters,
  ): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export interface List {
  /** Resource list operation template. */
  get(
    options?: ListParameters,
  ): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface ListFiles {
  /** Resource list operation template. */
  get(
    options?: ListFilesParameters,
  ): StreamableMethod<ListFiles200Response | ListFilesDefaultResponse>;
}

export interface Cancel {
  /**
   * Cancels a job that is in progress.
   *
   * The job will be marked as canceled and the service will stop processing the job. The service will not delete any files that have already been processed.
   *
   * If the job is already complete, this will have no effect.
   */
  post(
    options?: CancelParameters,
  ): StreamableMethod<Cancel200Response | CancelDefaultResponse>;
}

export interface Deid {
  /** A remote procedure call (RPC) operation. */
  post(
    options: DeidParameters,
  ): StreamableMethod<Deid200Response | DeidDefaultResponse>;
}

export interface Routes {
  /** Resource for '/jobs/\{name\}' has methods for the following verbs: put, get, delete */
  (path: "/jobs/{name}", name: string): Create;
  /** Resource for '/jobs' has methods for the following verbs: get */
  (path: "/jobs"): List;
  /** Resource for '/jobs/\{name\}/files' has methods for the following verbs: get */
  (path: "/jobs/{name}/files", name: string): ListFiles;
  /** Resource for '/jobs/\{name\}:cancel' has methods for the following verbs: post */
  (path: "/jobs/{name}:cancel", name: string): Cancel;
  /** Resource for '/deid' has methods for the following verbs: post */
  (path: "/deid"): Deid;
}

export type DeidentificationClient = Client & {
  path: Routes;
};
