// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ExecuteCodeParameters,
  GetCodeExecutionResultParameters,
  ListFilesMetadataParameters,
  GetFileMetadataParameters,
  DeleteFileParameters,
  DownloadFileParameters,
  UploadFileParameters,
} from "./parameters.js";
import {
  ExecuteCode200Response,
  ExecuteCodeDefaultResponse,
  GetCodeExecutionResult200Response,
  GetCodeExecutionResultDefaultResponse,
  ListFilesMetadata200Response,
  ListFilesMetadataDefaultResponse,
  GetFileMetadata200Response,
  GetFileMetadataDefaultResponse,
  DeleteFile204Response,
  DeleteFileDefaultResponse,
  DownloadFile200Response,
  DownloadFileDefaultResponse,
  UploadFile200Response,
  UploadFileDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ExecuteCode {
  /** Execute code in a session. */
  post(
    options: ExecuteCodeParameters,
  ): StreamableMethod<ExecuteCode200Response | ExecuteCodeDefaultResponse>;
}

export interface GetCodeExecutionResult {
  /** Get the code execution result. */
  get(
    options: GetCodeExecutionResultParameters,
  ): StreamableMethod<
    GetCodeExecutionResult200Response | GetCodeExecutionResultDefaultResponse
  >;
}

export interface ListFilesMetadata {
  /** List the file resources. */
  get(
    options: ListFilesMetadataParameters,
  ): StreamableMethod<
    ListFilesMetadata200Response | ListFilesMetadataDefaultResponse
  >;
}

export interface GetFileMetadata {
  /** Get the file resource. */
  get(
    options: GetFileMetadataParameters,
  ): StreamableMethod<
    GetFileMetadata200Response | GetFileMetadataDefaultResponse
  >;
  /** Delete the file. */
  delete(
    options: DeleteFileParameters,
  ): StreamableMethod<DeleteFile204Response | DeleteFileDefaultResponse>;
}

export interface DownloadFile {
  /** Download the file. */
  get(
    options: DownloadFileParameters,
  ): StreamableMethod<DownloadFile200Response | DownloadFileDefaultResponse>;
}

export interface UploadFile {
  /** Upload a file to a session. */
  post(
    options: UploadFileParameters,
  ): StreamableMethod<UploadFile200Response | UploadFileDefaultResponse>;
}

export interface Routes {
  /** Resource for '/codeExecute' has methods for the following verbs: post */
  (path: "/codeExecute"): ExecuteCode;
  /** Resource for '/codeExecutionResult' has methods for the following verbs: get */
  (path: "/codeExecutionResult"): GetCodeExecutionResult;
  /** Resource for '/files' has methods for the following verbs: get */
  (path: "/files"): ListFilesMetadata;
  /** Resource for '/files/\{fileName\}' has methods for the following verbs: get, delete */
  (path: "/files/{fileName}", fileName: string): GetFileMetadata;
  /** Resource for '/files/\{fileName\}/download' has methods for the following verbs: get */
  (path: "/files/{fileName}/download", fileName: string): DownloadFile;
  /** Resource for '/files/\{fileName\}:uploadFile' has methods for the following verbs: post */
  (path: "/files/{fileName}:uploadFile", fileName: string): UploadFile;
}

export type AppClient = Client & {
  path: Routes;
};
