// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The request to execute code. */
export interface CodeExecutionRequest {
  /** The properties for executing code. */
  properties: CodeExecutionRequestProperties;
}

/** The properties of the code execution request. */
export interface CodeExecutionRequestProperties {
  /**
   * The code input type of the code execution request.
   *
   * Possible values: "inline", "inlineBase64", "inlineText"
   */
  codeInputType: CodeInputType;
  /**
   * The execution type of the code execution request.
   *
   * Possible values: "synchronous"
   */
  executionType: ExecutionType;
  /** The code to execute. */
  code: string;
  /** Code execution timeout in seconds. */
  timeoutInSeconds: number;
}

/** Alias for CodeInputType */
export type CodeInputType = string;
/** Alias for ExecutionType */
export type ExecutionType = string;
