// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Paged } from "@azure/core-paging";

/** The response containing the result of the code execution. */
export interface CodeExecutionResponseOutput {
  /** The properties of the code execution response. */
  properties: CodeExecutionResponsePropertiesOutput;
}

/** The properties of the code execution result. */
export interface CodeExecutionResponsePropertiesOutput {
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
export interface CodeExecutionFileOutput {
  /** The name of the file. */
  filename: string;
  /** Code execution file resource properties. */
  properties: CodeExecutionFilePropertiesOutput;
}

/** Code execution file resource properties. */
export interface CodeExecutionFilePropertiesOutput {
  /** The name of the file. */
  filename: string;
  /** The size of the file. */
  size: number;
  /** The date time when the file was last modified. */
  lastModifiedTime: string;
}

/** Code execution file resource collection. */
export interface CodeExecutionFileCollectionOutput {
  /** The files uploaded. */
  value: Array<CodeExecutionFileOutput>;
}

/** Alias for CodeExecutionStatusOutput */
export type CodeExecutionStatusOutput = string;
/** Paged collection of CodeExecutionFile items */
export type PagedCodeExecutionFileOutput = Paged<CodeExecutionFileOutput>;
