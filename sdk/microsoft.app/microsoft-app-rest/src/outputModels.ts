// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The response containing the result of the code execution. */
export interface SessionCodeExecutionResponseOutput {
  /** The properties of the code execution response. */
  properties: SessionCodeExecutionResponsePropertiesOutput;
}

/** The properties of the code execution result. */
export interface SessionCodeExecutionResponsePropertiesOutput {
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

/** Code execution file resource properties. */
export interface SessionResourceFilePropertiesOutput {
  /** The name of the file. */
  fileName: string;
  /** The size of the file. */
  sizeInBytes: number;
  /** The date time when the file was last modified. */
  lastModifiedAt: string;
}

/** Code execution file resource collection. */
export interface SessionResourceFileCollectionOutput {
  /** The files uploaded. */
  value: Array<SessionResourceFileOutput>;
}

/** Code execution file resource. */
export interface SessionResourceFileOutput {
  /** The name of the file. */
  fileName: string;
  /** Code execution file resource properties. */
  properties: SessionResourceFilePropertiesOutput;
}

/** Alias for CodeExecutionStatusOutput */
export type CodeExecutionStatusOutput = string;
