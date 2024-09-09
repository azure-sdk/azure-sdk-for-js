// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The request to execute code. */
export interface SessionCodeExecutionRequest {
  /**
   * The code input type of the code execution request.
   *
   * Possible values: "Inline", "InlineBase64", "InlineText"
   */
  codeInputType: CodeInputType;
  /**
   * The execution type of the code execution request.
   *
   * Possible values: "Synchronous", "Asynchronous"
   */
  executionType: ExecutionType;
  /**
   * The network status of the code execution session.
   *
   * Possible values: "EgressEnabled", "EgressDisabled"
   */
  networkStatus: NetworkStatus;
  /**
   * The multi array status of the code execution session.
   *
   * Possible values: "MultiArrayEnabled", "MultiArrayDisabled"
   */
  multiArrayStatus: MultiArrayStatus;
  /** The string of the code to execute, based on CodeInputType. */
  code: string;
  /** Code execution timeout in seconds. */
  timeoutInSeconds: number;
}

/** Alias for CodeInputType */
export type CodeInputType = string;
/** Alias for ExecutionType */
export type ExecutionType = string;
/** Alias for NetworkStatus */
export type NetworkStatus = string;
/** Alias for MultiArrayStatus */
export type MultiArrayStatus = string;
