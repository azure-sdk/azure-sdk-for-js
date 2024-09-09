// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Paged } from "@azure/core-paging";

/** The result containing the result of the code execution. */
export interface SessionCodeExecutionResultOutput {
  /**
   * The code input type of the code execution request.
   *
   * Possible values: "Inline", "InlineBase64", "InlineText"
   */
  codeInputType: CodeInputTypeOutput;
  /**
   * The execution type of the code execution request.
   *
   * Possible values: "Synchronous", "Asynchronous"
   */
  executionType: ExecutionTypeOutput;
  /**
   * The network status of the code execution session.
   *
   * Possible values: "EgressEnabled", "EgressDisabled"
   */
  networkStatus: NetworkStatusOutput;
  /**
   * The multi array status of the code execution session.
   *
   * Possible values: "MultiArrayEnabled", "MultiArrayDisabled"
   */
  multiArrayStatus: MultiArrayStatusOutput;
  /** The string of the code to execute, based on CodeInputType. */
  code: string;
  /** Code execution timeout in seconds. */
  timeoutInSeconds: number;
  /** Session code execution id. */
  readonly id: string;
  /**
   * The status of the code execution, indicates whether succeeded or not.
   *
   * Possible values: "Success", "Failure"
   */
  status: CodeExecutionStatusOutput;
  /** The standard output of the code execution. */
  stdout: string;
  /** The standard error of the code execution. */
  stderr: string;
  /** The result of the code execution. */
  result: any;
  /** The execution time of the code in milliseconds. */
  executionTimeInMilliseconds: number;
}

/** Code execution file resource. */
export interface SessionResourceFileOutput {
  /** The name of the file. */
  fileName: string;
  /** The size of the file. */
  sizeInBytes: number;
  /** The date time in RFC3339 format when the file was uploaded. */
  createdAt: string;
  /** The date time in RFC3339 format when the file was last modified. */
  lastModifiedAt: string;
}

/** Alias for CodeInputTypeOutput */
export type CodeInputTypeOutput = string;
/** Alias for ExecutionTypeOutput */
export type ExecutionTypeOutput = string;
/** Alias for NetworkStatusOutput */
export type NetworkStatusOutput = string;
/** Alias for MultiArrayStatusOutput */
export type MultiArrayStatusOutput = string;
/** Alias for CodeExecutionStatusOutput */
export type CodeExecutionStatusOutput = string;
/** Paged collection of SessionResourceFile items */
export type PagedSessionResourceFileOutput = Paged<SessionResourceFileOutput>;
