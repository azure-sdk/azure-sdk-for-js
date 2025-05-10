// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ErrorResponse } from "@azure-rest/core-client";

/** The session code execution resource. */
export interface SessionCodeExecutionResourceOutput {
  /** Session code execution id. */
  readonly id: string;
  /** The identifier of the session. */
  identifier: string;
  /**
   * The execution type of the code execution request.
   *
   * Possible values: "Synchronous", "Asynchronous"
   */
  executionType: ExecutionTypeOutput;
  /**
   * The status of the code execution operation, indicates whether succeeded or not.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** The error of this code execution if failed. */
  error?: ErrorResponse;
  /** The result of this code execution operation. */
  result?: SessionCodeExecutionResultOutput;
}

/** The result of the code execution. */
export interface SessionCodeExecutionResultOutput {
  /** The standard output of the code execution. */
  stdout?: string;
  /** The standard error of the code execution. */
  stderr?: string;
  /** The result of the code execution. The type of this field is same as the type of actual result of the code execution after being Json serialized. */
  executionResult?: any;
  /** The execution time of the code in milliseconds. */
  executionTimeInMilliseconds?: number;
}

/** Paged collection of SessionResourceFile items */
export interface PagedSessionResourceFileOutput {
  /** The SessionResourceFile items on this page */
  value: Array<SessionResourceFileOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Code execution file resource. */
export interface SessionResourceFileOutput {
  /** The name of the file. */
  name: string;
  /** The type of the session resource file. */
  type: string;
  /** The type of the content of this file. */
  contentType?: string;
  /** The size of the file. */
  sizeInBytes?: number;
  /** The date time in RFC3339 format when the file was last modified. */
  lastModifiedAt: string;
}

/** The session resource. */
export interface SessionOutput {
  /** The identifier of the session. */
  identifier: string;
  /** The date and time when the session was created. */
  createdAt: string;
  /** The date and time when the session was last accessed. */
  lastAccessedAt: string;
  /** The date and time when the session will expire. */
  expireAt: string;
  /** The ETag of the session, representing the underlying container ID. */
  etag: string;
}

/** The sessions list response. */
export interface SessionsListResponseOutput {
  /** The list of sessions. */
  sessions: Array<SessionOutput>;
  /** The link to the next page of sessions. */
  nextLink?: string;
}

/** SessionPool Metadata. */
export interface SessionPoolMetadataResponseOutput {
  /** List of runtimes. */
  runtimes: Array<RuntimeOutput>;
  /** List of pre-installed packages. */
  preInstalledPackages: Array<PackageOutput>;
  /** Creation date in RFC3339 format. */
  createdAt: string;
  /** Last updated date in RFC3339 format. */
  lastUpdatedAt: string;
  /** Jupyter kernel information. */
  jupyterKernel: JupyterKernelOutput;
}

/** Runtime information. */
export interface RuntimeOutput {
  /** Name of the runtime. */
  name: string;
  /** Version of the runtime. */
  version: string;
}

/** Package information. */
export interface PackageOutput {
  /** Name of the package. */
  name: string;
  /** Version of the package. */
  version: string;
}

/** Jupyter kernel information. */
export interface JupyterKernelOutput {
  /** Name of the kernel. */
  name: string;
  /** Version of the kernel. */
  version: string;
  /** Project URL of the kernel. */
  projectUrl: string;
  /** Description of the kernel. */
  description: string;
}

/** Alias for ExecutionTypeOutput */
export type ExecutionTypeOutput = string;
/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
